const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'secret-folder')

fs.readdir(directoryPath, { withFileTypes: true }, (_, files) => {


  files.forEach(file => {
    const fileName = path.parse(file.name).name;
    const fileExt = path.extname(file.name).substring(1);
    const filePath = path.join(directoryPath, file.name);

    fs.stat(filePath, (_, stats) => {
      const fileSizeInBytes = stats.size;
      const fileSizeInKilobytes = fileSizeInBytes / 1024;

      console.log(`${fileName}-${fileExt}-${fileSizeInKilobytes}kb`);
    });

  });


});