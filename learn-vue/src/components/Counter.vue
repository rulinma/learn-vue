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
            message: 'test'
        }
    },
    methods: {
        increment() {
            console.log(this.counter) // => 1
            this.counter++
        },
        getvalue() {
            console.log(this.message) // =>
        }
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