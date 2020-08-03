const path = require('path');
const fs = require('fs');


const createSubFolders = (newDir, subFolderNames) => {
    // subfolderNames = [[name1], [name2, [sub2..]], [name3]]
    try {

        let newPath = null;

        return subFolderNames.forEach((subfolderName) => {
            newPath = path.resolve(newDir, subfolderName[0].replace('text:', ''));
            // check if the new file is file or folder
            if (subfolderName[0].startsWith('text:')) {
                fs.writeFileSync(newPath, subfolderName[1])
            } else {
                fs.mkdirSync(newPath, { recursive: true });
                // console.log(newPath)
                // if there are subfolders create them
                if (subfolderName.length >= 2) {
                    createSubFolders(newPath, subfolderName[1]);
                }
            }
        });
    } catch (err) {
        console.log(err);
    }
};

module.exports = createSubFolders;