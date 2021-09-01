const fs = require("fs");                       // this will import file module
fs.mkdirSync("NewFolder");                     //  this will create a new folder named NewFolder
fs.writeFileSync("NewFolder/bio.txt","My name is Jaya Prasad.");    //  this will create a new text file named bio and will have content as shown
fs.appendFileSync("NewFolder/bio.txt","My name is Jaya Prasad and my age is 20 years.");   // this will update our file content
const data = fs.readFileSync("NewFolder/bio.txt","utf8");          //   this is used for reading data from the file 
console.log(data);                              // this will print the data on console
fs.renameSync("NewFolder/bio.txt","NewFolder/myBio.txt");          // this will rename the folder 
fs.unlinkSync("NewFolder/myBio.txt");                        // this will delete the myBio.txt file
fs.rmdirSync("NewFolder");           // this will delete the NewFolder 