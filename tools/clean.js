const fs = require('fs');
const path = require('path');

const paths = [
  'public'
];

paths.forEach(deletePath => {
  const deleteFolderRecursive = (deletePath) => {
    if (fs.existsSync(deletePath)) {
      fs.readdirSync(deletePath).forEach(file => {
        const currentPath = path.join(deletePath, file);

        // If folder - make recursive call
        if (fs.lstatSync(currentPath).isDirectory()) {
          deleteFolderRecursive(currentPath);
        } else {
          // Delete file
          try {
            fs.unlinkSync(currentPath);
            console.log(`Deleted ${currentPath}`); // eslint-disable-line
          } catch (error) {
            console.error(`Error deleting ${currentPath}. ERROR: ${error}`); // eslint-disable-line
          }
        }
      });

      fs.rmdirSync(deletePath);
    }
  };

  deleteFolderRecursive(deletePath);
});
