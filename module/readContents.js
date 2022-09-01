const fs = require('fs')
const readFile = require("util").promisify(fs.readFile);

const processContents = require('./processContents')

const readFileContents = async (folderPath, file) => {
  try {
    const data = await readFile(`${folderPath.input}/${file}`,"utf-8")
    // data = data.replace(/\[\/img\]\[img\]/gm,'[/img]\r[img]')
    let result = {
      fileName: file,
      contents: data,
      outputPath: folderPath.output,
    }
    processContents(result)
   } catch (err) {
    console.log('Error', err);
   }    
}

const readContents = folderPath => {
  let fileList = fs.readdirSync(folderPath.input)
  fileList.forEach(file => {
    readFileContents(folderPath, file)
  })
}

module.exports = readContents