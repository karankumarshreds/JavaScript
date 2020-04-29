// #!/usr/bin/env node

//this is coming from filesystem module from www.nodejs.org/api

const fs = require('fs');
const fsp = require('fs').promises; //second fs is abbreviation for filesystem module of NODEJS
const util = require('util');
const chalk = require('chalk');
const path = require('path');

//method #2
// const lstat = util.promisify(fs.lstat);

//method #3 
const lstat = fsp.lstat;
//process.argv[2] gives the first argument passed 
// console.log(process.argv[2]);
const targetDir = process.argv[2] || process.cwd();
fs.readdir(targetDir, async (err, filenames) => {
    if(err){
        console.log(err);
        return;
    }
    
    // for (let filename of filenames){
    //     try{
    //         const stat = await lstat(filename);
    //         console.log(filename, stat.isFile());
    //     } catch (err) {
    //         console.log(err);
    //     }
    // }

    const statPromises = filenames.map((filename) => {
        return lstat(path.join(targetDir,filename)); //returns promise for each file's stat
    });

    const allStats = await Promise.all(statPromises);
    for(let stat of allStats){
        const i = allStats.indexOf(stat);
        if(!stat.isFile()){
            console.log(chalk.green(filenames[i]));
            
        }else{
            console.log(filenames[i]);
        }
    }
    // for(let stat of allStats){
    //     const i = allStats.indexOf(stat);
    //     console.log(filenames[i], stat.isFile());
    // }

//method #1
//wrapping lstat inside of a promise
// const lstat = (filename) => {
//     return new Promise((resolve, reject) => {
//         fs.lstat(filename, (err, stats) => {
//             if (err){
//                 reject(err);
//             }
//             resolve(stats);
//         })
//     });
// }


});
