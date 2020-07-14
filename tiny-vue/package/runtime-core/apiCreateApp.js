// 源码结构版本
// module.export.createAppAPI = () => {
//     return function createApp() {
//         const App = {
//             mount() {

//             },
//             use() {

//             },
//             mixin() {

//             },
//             component() {

//             },
//             directive() {

//             },
//             unmount() {

//             },
//             provide() {

//             }
//         }
//         return App
//     }
// }

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


module.exports.createAppAPI = (render) => {
    return function createApp(rootComponent) {
        const app = {
            mount(rootContainer) {
                const container = document.querySelector(rootContainer)
                const vnode = createVNode(rootComponent)
                render(vnode, container)
            }
        }
        return app
    }
}