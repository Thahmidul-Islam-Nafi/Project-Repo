## Follow the steps below to create a custom g++ runner 
### (only needs the name of the input file without the `.cpp` extension)

#### This works in both `bash` and `zsh`. 

> `declare -f customcpp`

> `customcpp()`
> `{`
> `echo "$1 $1.cpp | xargs g++ -o` 
> `./$1`
> `}`


#### After Creation type `customcpp yourcppfilebasename` where yourcppfilebasename is the name of the file (excluding the .cpp extension). your code should compile and run once.
#### to run it afterwards run ./yourcppfilebasename











    
    
 
 
 
