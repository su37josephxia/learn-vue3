const fs = require('fs')
const path = require('path')
const Koa = require('koa')
const { tranHtml } = require('./markdown')
const app = new Koa()
const ssr = require('./ssr')
const glob = require('glob')
const io = require('socket.io')
const server = require('http').createServer(app.callback());
const watch = require('watch')
const { nextTick } = require('process')
var socket = io.listen(server);
const clients = []
socket.on('connection', function (client) {
  console.log('网页监听....')
  clients.push(client)
});
watch.watchTree('.', function (f, curr, prev) {
  socket.emit('reload',f)
  console.log('file change ...')
})


function getFolder() {
  return glob.sync(
    require('path').join(__dirname, `./**/*.md`),
    {
      absolute: false,
    }
  )
    .map(
      v => path.relative(__dirname, v)
    )
    .filter(v => !v.startsWith('node_modules'))
}




app.use(async (ctx, next) => {
  const { request: { url, query } } = ctx
  console.log('url:' + url, 'query type', query.type)

  ctx.type = "text/html"
  const menu = getFolder()
  const markDownPath = url === '/' ? './README.md' : url
  console.log('markDownPath:', markDownPath)
  const data = {
    menu,
    markdown: tranHtml(path.resolve(__dirname, './' + markDownPath))
  }
  ctx.body = await ssr.createRender(path.resolve(__dirname, './template/App.vue'))(data)
  next()
})

app.use(async ctx => {
  ctx.body = `
  <!DOCTYPE html>
<html>
<body>
    ${ctx.body}
    <script src="https://cdn.bootcss.com/socket.io/2.2.0/socket.io.js"></script>
    <script>
    var socket = io();
    socket.on("reload", function(msg) {
      window.location.reload();
    });
    console.log('Live reload enabled.');
            
        
    </script>
</body>
</html>
  
  `

})

server.listen(3000, () => {
  console.log('listening on *:3000');
});







