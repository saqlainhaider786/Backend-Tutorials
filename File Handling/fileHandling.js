/*
==> The File System module provides a way of working with the computer's
file system.

*/

const fs=require("fs");// its imports file system module

//          ========Writing Files========

// ==> fs method to create new file using node js :

// syntax : 
//writeFileSync("file_path & name","file_data");
// writeFile("file_path & name","file_data",errorHandling());

// let data="Creating file with sync writeFile()."
// creating file with synchoronous method:
// fs.writeFileSync("./syncFile.txt",data); 

// creating file with asynchoronous method:
// fs.writeFile("./asyncFile.txt","Creating file with async writeFile().",(err)=>{});

// ==> fs method to append an existing file :
// fs.appendFile("./data.txt","\nSkill : Front-End Developer",(err)=>err&&console.log(err));

// ==> fs method to Copy any existing file :
// syntax :
// fs.cp("source","destination",callback)

// fs.cp("./data.txt","./cpyData.txt",(err)=>err&&console.log(err));

// ==> fs method to Delete any existing file :
// fs.unlink("./cpyData.txt",(err)=>err&&console.log(err));

//          ========Reading Files========

// ==> fs method to read file using node js :

// syntax :
//readFileSync("file_path & name","data_format");
//readFile("file_path & name","data_format",errorHandling());

// Reading File with synchoronous method :
// - In this case the method returns file's data.
// let data=fs.readFileSync("./data.txt","utf-8");
// console.log(data)

// Reading file with asynchoronous method : 
// -  In this case we have to use a callback to handle file's data.

// fs.readFile("./daa.txt","utf-8",(err,data)=>(data)?console.log(data):console.log(err));

//          ======== Other Methods ========

// checking whether file/folder exists or not?..
// console.log(fs.existsSync("./userData.txt"));

// renaming any existing file/folder name.
// fs.rename("./data.txt","./userData.txt",(err)=>{err&&console.log(err)})
