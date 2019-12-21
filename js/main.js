import Dude from './components/Dude.vue';
import CreateDudeForm from './components/CreateDudeForm.vue';



const app = new Vue({
    el: '#app',
    components: {
        Dude, 
        CreateDudeForm
    },
    data: {
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