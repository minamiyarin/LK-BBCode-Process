const child_process = require("child_process")

const curlDownload = async (fileName, imgUrl, outputPath, imgName) => {
  console.log(imgUrl)
  let folderName = fileName.replace('.txt', '')
  let curlCommand = `curl -L "${imgUrl}" -o "${outputPath}/${folderName}/Images/${imgName}.jpg" --create-dirs -H "Accept: image/*,*/*;q=0.8" -H "Connection: keep-alive" -H "Accept-Encoding: gzip, deflate, sdch" -H "Referer: https://www.lightnovel.us/detail/1048596" -H "Accept-Language: zh-TW,zh,en-US,en;q=0.8" -H "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:94.0) Gecko/20100101 Firefox/94.0" -k --retry 4`
  await child_process.exec(curlCommand, function(err, stdout, stderr) {
    // console.log(stdout)
  })
}

const curl = (fileName, imgUrlList, outputPath) => {
  let i = 0
  imgUrlList.forEach(imgUrl => {
    i++
    let imgName = (Array(3).join(0) + i).slice(-3)
    curlDownload(fileName, imgUrl, outputPath, imgName)
  })
}

module.exports = curl