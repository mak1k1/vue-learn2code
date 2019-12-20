Vue.component('dude',{
    props:[
        'title', 'name'
    ],
    template: `
        <li :title="title">
            <article>
                {{ name }}
                <span>{{ title }}</span>
            </article>
        </li>
    `,
    data() {
        return {

        }
    }
})

const app = new Vue({
    el: '#app',
    data: {
        newDude: '',
        characters: [
            'Jake the Dog',
            'Finn the Human',
            'Marcelline the Vampire'
        ]
    },
    methods: {
        downloadDudes() {
            axios.get('https://api.myjson.com/bins/1gh8x2')
            .then(response => {
                response.data.forEach(dude => {
                    this.characters.push(dude.who);
                })
            })
        }
    }
})