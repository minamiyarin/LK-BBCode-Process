
const formatText = lineList => {
  // console.log(lineList)
  let contents = ''
  lineList.forEach(line => {
    // line = line.replace(/\\r/g, '＜PROGRAMENTERSIGN＞')
    line = line.replace(/\r/g, '＜PROGRAMENTERSIGN＞')
    line = line.replace(/\n/g, '＜PROGRAMENTERSIGN＞')
    // console.log(line)
    contents = `${contents}＜PROGRAMENTERSIGN＞${line}`
  });
  // console.log(contents)
  contents = contents.replace(/\r/g, '＜PROGRAMENTERSIGN＞')
  // contents = contents.replace(/\\r/g, '＜PROGRAMENTERSIGN＞')
  contents = contents.replace(/\[img\]＜PROGRAMENTERSIGN＞/g, '[img]')
  contents = contents.replace(/\[\/img\]/g, '[/img]＜PROGRAMENTERSIGN＞')
  contents = contents.replace(/\[img\]/g, '＜PROGRAMENTERSIGN＞[img]')
  contents = contents.replace(/\[\/img\](＜PROGRAMENTERSIGN＞)+\[img\]/g, '[/img]＜PROGRAMENTERSIGN＞[img]')

  // console.log(contents)
  const formatLineList = contents.split('＜PROGRAMENTERSIGN＞')
  // console.log(formatLineList)
  return formatLineList
}

module.exports = formatText