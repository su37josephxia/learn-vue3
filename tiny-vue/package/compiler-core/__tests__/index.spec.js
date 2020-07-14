test('编译器Mock测试' ,() => {
    // Mock Parser
    const parser = jest.fn().mockReturnValue(({
        children: [{
                tag: 'input',
                props: {
                    name: 'v-model',
                    exp: {
                        content: 'message'
                    },
                },
            },
            {
                tag: 'button',
                props: {
                    name: '@click',
                    exp: {
                        content: 'click'
                    },
                },
                content: '{{message}}'
            }
        ],
    }));

    // Mock Transfer
    const transfer = jest.fn().mockReturnValue({
        children: [{
                tag: 'input',
                props: {
                    name: 'model',
                    exp: {
                        content: 'message'
                    },
                },
            },
            {
                tag: 'button',
                props: {
                    name: 'click',
                    exp: {
                        content: 'message'
                    },
                },
                children: [{
                    content: {
                        content: 'message'
                    },
                }]
            }
        ],
    });

    const generator =  jest.fn().mockReturnValue((observed, dom) => {
        // 重新渲染
        let input = dom.querySelector('input')
        if (!input) {
            input = document.createElement('input')
            input.setAttribute('value', observed.message)
            input.addEventListener('keyup', function () {
                observed.message = this.value
            })
            dom.appendChild(input)
        }
        let button = dom.querySelector('button')
        if (!button) {
            console.log('create button')
            button = document.createElement('button')
            button.addEventListener('click', () => {
                return config.methods.click.apply(observed)
            })
            dom.appendChild(button)
        }
        button.innerText = observed.message
    })

    const {createCompiler} = require('../index')

    const compiler = createCompiler({
        parser,
        transfer,
        generator
    })

    const template = `
        <input v-model="message"/>
        <button @click='click'>{{message}}</button>
    `
    const render = compiler(template)

    expect(parser.mock.calls.length).toBe(1);
    expect(transfer.mock.calls.length).toBe(1);
    expect(generator.mock.calls.length).toBe(1);
})