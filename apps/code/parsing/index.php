<?php

  require_once "RestServer.php";

  class CompilingJava {
     // url: http://url_della_applicazione/index.php?method=compiling&javacode=data
     public function compiling($javacode) {

		  // rimuovo i vecchi file
      $outputRm = shell_exec (
                              'rm -rf vsense-ide/VSenseSDK/src/VSenseApp.java;
                               rm -rf vsense-ide/VSenseSDK/build;
                               rm -rf vsense-ide/VSenseSDK/output.txt'
                             );

      // sostituisco i caratteri codificati
      $javacode = base64_decode($javacode);
      // creo il file nel percorso dell'SDK
      $java_file = fopen("vsense-ide/VSenseSDK/src/vsense_app/VSenseApp.java", "w");
      // scrivo il codice che ottengo dal front-end
      fwrite($java_file, $javacode);
      // chiudo il file
      fclose($java_file);

      // eseguo la compilazione
      $output = shell_exec (
                            'cd /var/www/blockly-vsense/apps/code/parsing/vsense-ide/VSenseSDK;
                             ant run-virtualsense-vsenseapp > output.txt'
                           );

      // se è andata a buon fine torno l'url con l'infusion
      $filename = "vsense-ide/VSenseSDK/build/infusions/vsense_app.di"; 

      if(file_exists($filename))
        return json_encode(array('result' => 'success', 'data' => 'null'));
      else {
        $output_file = fopen("vsense-ide/VSenseSDK/output.txt", "r");
        $output = fread($output_file, filesize("vsense-ide/VSenseSDK/output.txt"));
        fclose($output_file);
        return json_encode(array('result' => 'error', 'data' => $output));
      }
     }
  }

  $rest = new RestServer();
  $rest->addServiceClass(CompilingJava);
  $rest->handle();

?>
