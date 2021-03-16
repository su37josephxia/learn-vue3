const express = require('express')
const app = express()
const vueapp = require('./list')
const Vue = require('vue') // vue@next
const serverRenderer = require('@vue/server-renderer')
const compilerSsr = require('@vue/compiler-ssr')
const compilerSfc = require('@vue/compiler-sfc')
const fs = require('fs')
vueapp.ssrRender = new Function('require', compilerSsr.compile(vueapp.template).code)(require)

app.get('/', async function (req, res) {
    const { descriptor } = compilerSfc.parse(fs.readFileSync('./App.vue', 'utf-8'))
    console.log(descriptor.template.content)

    const data = () => ({
        todos: ['吃饭', '睡觉']
    })

    const render = compilerSsr.compile(descriptor.template.content).code

    let vapp = Vue.createApp({
        // template: descriptor.template.content, // 写法一
        ssrRender: new Function('require',render)(require), // 写法二
        data
    })
    let html = await serverRenderer.renderToString(vapp)

    res.send(html)
})

app.listen(9093, () => {
    console.log('listen 9093')
}) 
