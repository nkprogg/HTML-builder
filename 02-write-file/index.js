const fs = require('fs');
const path = require('path');
const process = require('process');
const readline = require('readline');


const filePath = path.join(__dirname, 'text.txt');
const writeableStream = fs.createWriteStream(filePath);

const rl = readline.createInterface(process.stdin, process.stdout);

rl.setPrompt('Hello. Please input something.');
rl.prompt();

rl.on('line', (input) => {
    if (!input.includes('exit')) {
        writeableStream.write(`${input}\n`);
    } else {
        rl.close()
    }
});

rl.on('close', () => {
    console.log('Process stopped');
});