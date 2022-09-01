const rexRule = [
  {
    search: /\[ruby=(.*?)\](.*?)\[\/ruby\]/g,
    replace: '<ruby>$2<rt>$1</rt></ruby>',
  },
  {
    search: /\[url=(.*?)\](.*?)\[\/url\]/g,
    replace: '<a href="$1">$2</a>',
  },
  {
    search: /\[strong\](.*?)\[\/strong\]/g,
    replace: '<b>$1</b>',
  },
  {
    search: /\[b\](.*?)\[\/b\]/g,
    replace: '<b>$1</b>',
  },
  {
    search: /\[i\](.*?)\[\/i\]/g,
    replace: '<i>$1</i>',
  },
  {
    search: /\[s\](.*?)\[\/s\]/g,
    replace: '<del>$1</del>',
  },
  {
    search: /\[.*?\]/g,
    replace: '',
  },
  {
    search: /<p>\ +/g,
    replace: '<p>',
  },
  {
    search: /<p>　+/g,
    replace: '<p>',
  },
  {
    search: /<p>\　+/g,
    replace: '<p>',
  },
  {
    search: /<p>\ +/g,
    replace: '<p>',
  },
  {
    search: /<p> +/g,
    replace: '<p>',
  },
  {
    search: /<p>　+/g,
    replace: '<p>',
  },
  {
    search: /<p>\ +/g,
    replace: '<p>',
  },
  {
    search: /<p>\　+/g,
    replace: '<p>',
  },
  {
    search: /<p>\ +/g,
    replace: '<p>',
  },
  {
    search: /<p> +/g,
    replace: '<p>',
  },
  {
    search: '<p><b></b></p>',
    replace: '<p><br/></p>',
  },
  {
    search: '<p></p>',
    replace: '<p><br/></p>',
  },
]

const rexProcess = contents => {
  let htmlContents = `<p>${contents}</p>`
  rexRule.forEach(rex => {
    htmlContents = htmlContents.replace(rex.search, rex.replace)
  })
  return htmlContents
}

module.exports = rexProcess