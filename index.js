const path = require('path');
const Listr = require('listr');
const execa = require('execa');

const createFolderStructure = require('./src/CreateFolderStructure');

const gitInit = async (folderDir) => {
    const result = await execa('git', ['init'], {
        cwd: folderDir
    })

    if (result.failed) {
        return Promise.reject(new Error('Faild to initialize git'));
    }

};

const installPkg = async (folderDir) => {
    const result = await execa('npm', ['install'], {
        cwd: folderDir
    })

    if (result.failed) {
        return Promise.reject(new Error('Faild to install dependencies'));
    }
}

export const cli = async (options) => {
    const folderName = options[2] || 'Mova Project';
    const dir = path.resolve(process.cwd(), folderName);

    const tasks = new Listr([
        {
            task: () => createFolderStructure(dir),
            title: 'Generating project files'
        },
        {
            task: () => gitInit(dir),
            title: 'Git initialization'
        },
        {
            task: () => installPkg(dir),
            title: 'Installing dependencies'
        }
    ])

    await tasks.run();

    console.log('Project is ready');
}