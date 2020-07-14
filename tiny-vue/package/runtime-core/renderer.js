

// module.exports.createRenderer = () => ({
//     render: () => { },
//     // ssr渲染是
//     hydrate: () => { },
//     createApp: () => { }
//     // createAppAPI(render)
// })

const { createAppAPI } = require('./apiCreateApp')

module.exports.createRenderer = (options) => {
    const render = (vnode, container) => {
        container.appendChild(vnode)
    }
    return {
        render,
        createApp: createAppAPI(render)
    }
}