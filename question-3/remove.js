const fs = require('fs');
const path = require('path');
const { fileURLToPath } = require('url');


const logFolder = path.join(__dirname, 'Log');

//Check for Log folder
try{
    if(fs.existsSync(logFolder)){
        process.chdir(logFolder);
        for(f of fs.readdirSync(logFolder)){
            console.log(`Delete file ... ${f}`);

            const filePath = path.join(logFolder, f);
            fs.unlinkSync(filePath);
        }

        process.chdir(__dirname);
        //Remove Folder
        fs.rmSync(logFolder, { recursive: true, force: true});
    }else{
        console.log('Log folder does not exist');
    }
} catch(err){
    console.error('Cannot create Log folder', err)
}