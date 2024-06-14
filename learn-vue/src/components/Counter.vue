<template>
    <div>
        this is a test.
        Counter: {{ counter }}
        <button @click="increment">{{ counter }}</button>
        <p>Has published books:</p>
        <span>{{ author.books.length > 0 ? 'Yes' : 'No' }}</span>
        <button @click="awesome = !awesome">Toggle</button>

        <h1 v-if="awesome">Vue is awesome!</h1>
        <h1 v-else>Oh no 😢</h1>

        <div v-if="type === 'A'">
            A
        </div>
        <div v-else-if="type === 'B'">
            B
        </div>
        <div v-else-if="type === 'C'">
            C
        </div>
        <div v-else>
            Not A/B/C
        </div>
        <li v-for="(item, index) in items" :key="item.message">
            {{ index }} - {{ item.message }}
        </li>
        <p>Message is: {{ message }}</p>
        <input v-model="message" placeholder="edit me" />


        <button @click="getvalue">获取文本框值</button>

        <p>Original message: "{{ message }}"</p>
        <p>Computed reversed message: "{{ reversedMessage }}"</p>

        <div id="demo">full name: {{ fullName }}</div>

        <div id="watch-example">
            <p>
                Ask a yes/no question:
                <input v-model="question" :disabled="loading" />
            </p>
            <p>{{ answer }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CounterNumber',
    props: {
        // counter: Number
    },
    data() {
        return {
            counter: 0,
            author: {
                name: 'John Doe',
                books: [
                    'Vue 2 - Advanced Guide',
                    'Vue 3 - Basic Guide',
                    'Vue 4 - The Mystery'
                ]
            },
            type: 'A',
            awesome: true,
            items: [{ message: 'Foo' }, { message: 'Bar' }],
            message: 'test',
            firstName: 'Foo',
            lastName: 'Bar',
            fullName: 'Foo Bar',
            question: '',
            answer: 'Questions usually contain a question mark. ;-)',
            loading: false,
        }
    },
    methods: {
        increment() {
            console.log(this.counter) // => 1
            this.counter++
        },
        getvalue() {
            console.log(this.message) // =>
        },
        async getAnswer() {
            this.loading = true
            this.answer = 'Thinking...'
            try {
                const res = await fetch('https://yesno.wtf/api')
                this.answer = (await res.json()).answer
            } catch (error) {
                this.answer = 'Error! Could not reach the API. ' + error
            } finally {
                this.loading = false
            }
        }
    },
    computed: {
        // 计算属性的 getter
        reversedMessage: function () {
            // `this` 指向 vm 实例
            return this.message.split('').reverse().join('')
        }
    },
    watch: {
        firstName: function (val) {
            this.fullName = val + ' ' + this.lastName
        },
        lastName: function (val) {
            this.fullName = this.firstName + ' ' + val
        },
        // whenever question changes, this function will run
        // eslint-disable-next-line no-unused-vars
        question(newQuestion, oldQuestion) {
            if (newQuestion.includes('?')) {
                this.getAnswer()
            }
        }
        // once
        // 强制立即执行回调
        // immediate: true
    },
    mounted() {
        // `this` 指向当前组件实例
        console.log(this.counter) // => 1

        // 数据属性也可以被更改
        this.counter = 2
    }
}
</script>

<style scoped></style>