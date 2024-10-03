const fs = require('fs');
const path = require('path');
const { fileURLToPath } = require('url');


const logFolder = path.join(__dirname, 'Log');
// Create Log Folder
try{
    if(!fs.existsSync(logFolder)){
        fs.mkdirSync(logFolder);
    }
} catch(err){
    console.error('Cannot create Log folder', err)
}

// Change Folder
if(process.cwd() !== logFolder){
    process.chdir(logFolder);
}

//Create 10 Log Files
for(let i = 0; i< 10; i++){
    const fileName = `log${i}.text`;
    filePath = path.join(logFolder, fileName);
    fs.writeFileSync(filePath, (Math.random() + 1).toString(36));

}
//Printing Log Folder
for (f of fs.readdirSync(logFolder)){
    console.log(f);
}