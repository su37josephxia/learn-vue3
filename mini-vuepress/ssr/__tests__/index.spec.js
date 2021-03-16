const { assert } = require('@vue/compiler-dom')
const path = require('path')
it('sfc ssr render', async () => {
    const { createRender } = require('../index')
    const render = createRender(path.resolve(__dirname,'../App.vue'))
    const data = {
        todos: ['吃饭', '睡觉']
    }
    const html = await render(data)
    expect(html).toBe('<div><ul><li>kkb</li><!--[--><li key=\"吃饭\">吃饭</li><li key=\"睡觉\">睡觉</li><!--]--></ul></div>')
})