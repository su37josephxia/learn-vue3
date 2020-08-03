const Vue = require('vue') // vue@next
const serverRenderer = require('@vue/server-renderer')
const compilerSsr = require('@vue/compiler-ssr')
const compilerSfc = require('@vue/compiler-sfc')
const fs = require('fs')

module.exports.createRender = path => {
    const { descriptor } = compilerSfc.parse(fs.readFileSync(path, 'utf-8'))
    const render = compilerSsr.compile(descriptor.template.content).code
    
    return async (data)  => {
        const app = Vue.createApp({
            ssrRender: new Function('require',render)(require), // 写法二
            data: () => data
        })
        return serverRenderer.renderToString(app)
    }
}


