const { reactive, effect } = require('../vue3')

// 真正的源码
// const {
//     reactive,
//     effect
// } = require('../../../packages/reactivity/index')

describe('reactivity/vue3', () => {

    it('测试数据改变时 是否被响应', () => {
        const data = reactive({
            name: 'abc',
            age: {
                n: 5
            }
        })
        // Mock一个响应函数
        const fn = jest.fn()
        const result = fn()

        // 设置响应函数
        effect(fn)

        // 改变数据
        data.name = 'efg'

        // 确认fn生效
        expect(fn).toBeCalled()
    })


    it('测试多层数据中改变时 是否被响应', () => {
        const data = reactive({
            age: {
                n: 5
            }
        })
        // Mock一个响应函数
        const fn = jest.fn()

        // 设置响应函数
        effect(fn)

        // 改变多层数据
        data.age.n = 1

        // 确认fn生效
        expect(fn).toBeCalled()
    })


    it('测试数组中数据改变时 是否被响应', () => {
        const data = reactive({
            ary: [
                'a'
            ]
        })
        // Mock一个响应函数
        const fn = jest.fn()

        // 设置响应函数
        effect(fn)

        // 改变多层数据
        data.ary.push('b')

        // 确认fn生效
        expect(fn).toBeCalled()
    })
})