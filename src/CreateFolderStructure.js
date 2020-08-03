const fs = require('fs');

const folderNames = require('./FolderNames');
const createSubFolders = require('./CreateSubFolders');

const CreateFolderStructure = (folderDir) => {

    const dir = folderDir;

    try {
        fs.mkdirSync(dir, { recursive: true });
        createSubFolders(dir, folderNames);

        // console.log('Project was built successfully')
    } catch (err) {
        console.log(err)
    }
};

module.exports = CreateFolderStructure