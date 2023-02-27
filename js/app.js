const {createApp} = Vue
createApp({
    data() {
        return {
            mail:'',
            prova:'ciao'
        }
    },
    methods: {
        fetchMail(){
            axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((res) => {
                this.mail=res.data.response
            })
        },
    }, 
    mounted() {
        for (let i = 0; i < 10; i++) {
            this.fetchMail()
    }
    },
}).mount('#app')

