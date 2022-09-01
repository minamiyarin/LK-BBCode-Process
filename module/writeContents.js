const fs = require('fs')

const writeContents = (fileName, htmlContents, outputPath) => {
  let htmlFileName = fileName.replace('.txt', '')
  try {
    if (!fs.existsSync(`${outputPath}`)) {
      fs.mkdirSync(`${outputPath}`)
    }
  } catch (err) {
    console.error(err)
  }
  try {
    if (!fs.existsSync(`${outputPath}/${htmlFileName}`)) {
      fs.mkdirSync(`${outputPath}/${htmlFileName}`)
    }
  } catch (err) {
    console.error(err)
  }
  try {
    if (!fs.existsSync(`${outputPath}/${htmlFileName}/Text`)) {
      fs.mkdirSync(`${outputPath}/${htmlFileName}/Text`)
    }
  } catch (err) {
    console.error(err)
  }
  
  fs.writeFile(`${outputPath}/${htmlFileName}/Text/p.xhtml`, htmlContents, err => {
    if (err) {
      console.error(err)
      return
    }
    console.log(`writing ${htmlFileName}'s xhtml...`)
  })
}

module.exports = writeContents
