## Follow the steps below to create a custom g++ runner 
### (only needs the name of the input file without the `.cpp` extension)

#### This works in both `bash` and `zsh`. 

> declare -f customcpp

> customgpp()<br/>
> {<br/>
> echo "$1 $1.cpp" | xargs g++ -o 
> <br/>/$1
> <br/>}


#### After Creation type `customcpp your_cpp_file_basename` where your_cpp_file_basename is the name of the file (excluding the .cpp extension). your code should compile and run once.
#### to run it afterwards run ./yourcppfilebasename











    
    
 
 
 
