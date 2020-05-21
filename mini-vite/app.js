export default {
    template: `
        <button @click='click'>{{message}}</button>
    `,
    data() {
        return {
            message: 'Hello Vue 3!!'
        }
    },
    methods: {
        click() {
            console.log('click ....', this.message)
            this.message = this.message.split('').reverse().join('')
        }
    }
}