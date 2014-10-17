#!/usr/bin/python
import sys

data = sys.argv[1]

java_file = open("vsense-ide/VSenseSDK/src/vsense_app/VSenseApp.java", "w")
java_file.write(data)

'''def isfloat(x):
	try:
		a = float(x)
	except ValueError:
		return False
	else:
		return True

def isint(x):
	try:
		a = float(x)
		b = int(a)
	except ValueError:
		return False
	else:
		return a == b

data = json.loads(sys.argv[1])

def forever(lines, value):
	lines = "while(true){"
	return lines

def end(lines, value):
	lines += "}"
	return lines

def repeat(lines, value):
	lines += "for(int i=0;i<"+str(value)+";i++){"
	return lines

def wait(lines, value):
	lines += "try{Thread.sleep("+str(int(float(value)*1000))+");}catch(Exception e){System.out.println(e);}"
	return lines

def init(lines, value):

	if (str(value[1]) == 'integer'):
		lines += "int "+str(value[0])+"=0;"
		return lines
	
	elif (str(value[1]) == 'float'):
		lines += "double "+str(value[0])+"=0.0;"
		return lines
	
	elif (str(value[1]) == 'string'):
		lines += "String "+str(value[0])+'="";'
		return lines

def set_block(lines, value):

	lines += ""+str(value)+"="
	return lines

def var(lines, value):
	lines += str(value[0])

	if(str(value[1]) == "true"):
		print value[1], 'dentro'
		lines += ";"

	return lines

def num(lines, value):
	lines += str(value[0])

	if(str(value[1]) == "true"):
		lines += ";"

	return lines

def text(lines, value):
	lines += '"'+str(value[0])+'"'

	if(str(value[1]) == "true"):
		lines += ";"

	return lines

def logic_operator(lines, value):

	if(str(value[0]) == "and"):
		lines += "&&"

	if(str(value[0]) == "or"):
		lines += "||"

	if(str(value[0]) == "not"):
		lines += "!"

	return lines

def compare_operator(lines, value):

	if(str(value[0]) == "="):
		lines += "=="
	else:
		lines += str(value[0])

	return lines

def math_operator(lines, value):
	lines += str(value[0])
	return lines

def if_block(lines, value):
	lines += "if("
	return lines

def then_block(lines, value):
	lines += "){"
	return lines

def else_block(lines, value):
	lines += "}else{"
	return lines

blocks = 	{	'forever' 			: forever,
                'end' 				: end,
                'repeat' 			: repeat,
                'wait' 				: wait,
                'init'				: init,
                'set'				: set_block,
                'var'				: var,
                'num'				: num,
                'text'				: text,
                'logic_operator'	: logic_operator,
                'compare_operator'	: compare_operator,
                'math_operator'		: math_operator,
                'if'				: if_block,
                'then'				: then_block,
                'else'				: else_block
			}

middleSource = ""
lines = ""

for i in range(len(data)):

	id =    str(data[i]['id'])
	value = data[i]['value']

	middleSource += blocks[id](lines, value)

templateOne = "import java.lang.Runtime;public class Main{public static void main(String args[]){"
templateTwo = "}}"

source = templateOne + middleSource + templateTwo'''

print "http://www.ebay.com"