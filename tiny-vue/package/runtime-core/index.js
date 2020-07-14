module.exports.render = () => {

}



const createVNode = rootComponent => {
    const vnode = document.createDocumentFragment()
    const h1 = document.createElement('h1')
    h1.innerText = 'vue3初始化流程'
    const p = document.createElement('p')
    p.innerText = rootComponent.data().foo
    vnode.appendChild(h1)
    vnode.appendChild(p)
    return vnode
}

const { createRenderer } = require('./renderer')



module.exports.createApp = () => {
    const app = {}
    app.mount = (container) => {
        // 创建渲染器
        // container.innerHTML = ''
    }
}