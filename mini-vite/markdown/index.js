const marked = require('marked')
const fs = require('fs')
module.exports.tranHtml = (markdown, style = __dirname + '/mark.css') => {
return `${marked(fs.readFileSync(markdown).toString())}
<style>${fs.readFileSync(style).toString()}</style>
`
}