const startOutput = require('./module/startOutput')
const readContents = require('./module/readContents')

const inputContent = {
  input: '',
  output: '',
}
process.argv.forEach((val, index) => {
  switch (index) {
    case 2 :
      val ? inputContent.input = val : 'default'
      break
    case 3 :
      val ? inputContent.output = val : 'default'
      break
  }
})

startOutput()

readContents(inputContent)
