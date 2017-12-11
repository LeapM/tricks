package main

import (
    "os"
    "fmt"
	"io/ioutil"
)
func main() {
    hexdata, err := ioutil.ReadAll(os.Stdin)
    fmt.Println(hexdata,err);
}