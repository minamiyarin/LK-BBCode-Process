const curlDownload = require('./curl')
const writeContents = require('./writeContents')
const rexProcess = require('./rexProcess')
const formatText = require('./formatText')

const processContents = inputContent => {
  let data = inputContent.contents.replace(/\[\/img\]\[img\]/gm,'[/img]\r[img]')
  const textLines = data.split(/\r?\n/)
  const lines = formatText(textLines)
  // const lines = inputContent.contents.split(/\r?\n/)
  let htmlContents = '<?xml version="1.0" encoding="utf-8" standalone="no"?>\r<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN"\r  "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">\r\r<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="zh-CN" xmlns:epub="http://www.idpf.org/2007/ops" xmlns:xml="http://www.w3.org/XML/1998/namespace">\r<head>\r  <title></title>\r</head>\r\r<body>'

    // print all lines
  let imgUrlList = []
  let i = 0
  lines.forEach(line => {
    let htmlLine = ''
    if ((/\[img\](.*?)\[\/img\]/).test(line)) {
      i++
      let imgUrl = ''
      // if ((/(.*?)\[img\]/).test(line)) {
      //   if ((/\[\/img\](.*?)/).test(line)) {
      //     imgUrl = line.replace(/.*?\[img\](.*?)\[\/img\].*?/g,'$1')
      //     imgUrlList.push(imgUrl)
      //     let before = rexProcess(line.replace(/(.*?)\[img\].*?/g,'$1'))
      //     let after = rexProcess(line.replace(/.*?\[\/img\](.*?)/g,'$1'))
      //     htmlLine = `${before}\r<p>（插图${(Array(3).join(0) + i).slice(-3)}）</p>\r${after}`
      //   } else {
      //     imgUrl = line.replace(/.*?\[img\](.*?)\[\/img\]/g,'$1')
      //     imgUrlList.push(imgUrl)
      //     let before = rexProcess(line.replace(/(.*?)\[img\]/g,'$1'))
      //     htmlLine = `${before}\r<p>（插图${(Array(3).join(0) + i).slice(-3)}）</p>`
      //   }
      // } else {
      //   if ((/\[\/img\](.*?)/).test(line)) {
      //     imgUrl = line.replace(/.*?\[img\](.*?)\[\/img\].*?/g,'$1')
      //     imgUrlList.push(imgUrl)
      //     let after = rexProcess(line.replace(/.*?\[\/img\](.*?)/g,'$1'))
      //     htmlLine = `<p>（插图${(Array(3).join(0) + i).slice(-3)}）</p>\r${after}`
      //   } else {
      //     imgUrl = line.replace(/\[img\](.*?)\[\/img\]/g,'$1')
      //     imgUrlList.push(imgUrl)
      //     htmlLine = `<p>（插图${(Array(3).join(0) + i).slice(-3)}）</p>`
      //   }
      // }
      imgUrl = line.replace(/.*?\[img\](.*?)\[\/img\]/g,'$1')
      imgUrlList.push(imgUrl)
      htmlLine = `<p>（插图${(Array(3).join(0) + i).slice(-3)}）</p>`
    } else {
      if (!!line) {
        htmlLine = rexProcess(line)
      } else {
        htmlLine = '<p><br/></p>'
      }
    }
    htmlContents = htmlContents + '\r' + htmlLine
  })
  htmlContents = htmlContents + '\r' + '</body>\r</html>'
  writeContents(inputContent.fileName, htmlContents, inputContent.outputPath)
  if (imgUrlList.length) {
    curlDownload(inputContent.fileName, imgUrlList, inputContent.outputPath)
    console.log(`downloading ${inputContent.fileName.replace('.txt', '')}'s image...`)
  }
}

module.exports = processContents