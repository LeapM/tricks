## redirect ##

### redirect standard error
`ls -l /bin/usr 2>ls-error.txt`
### redirect both stdout & stderr
`ls -l /bin/usr > ls-output.txt 2>&1`
beter way

`ls -l /bin/usr &>ls-output.txt`

### dispose unwanted output

`ls -l /bin/usr 2> /dev/null`

### cat concatenate files
wildcard always expand in sorted order
`cat movie.mpeg.0* > movie.mpeg`

### cat read from standard input
without file parameter, cat by default read from standard input
1. `cat`  ctrl-d to tell the cat end of file on standard input
2. `cat > lazy_dog.txt`
2. `cat < lazy_dog.txt` by using <, we direct the source of standard input from the keyboard to the file

### pipelines
using |, the standard output of one command can be piped into the standard input of another

### common pipline filter
1. sort
2. uniq  or uniq -d(show duplication)
3. less
4. wc(word count) 
5. grep
6. head tail (tail has the option to look at the message in the real time)

### tee read from stdin and oupput to stdout and files
`ls /usr/bin | tee ls.txt | grep zip