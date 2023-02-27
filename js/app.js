const {createApp} = Vue
createApp({
    data() {
        return {
            mails:[],
        }
    },
    methods: {
        fetchMail(){
            axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((res) => {
                this.mails.push(res.data.response)
            })
        },
    }, 
    mounted() {
        for (let i = 0; i < 10; i++) {
            this.fetchMail()
    }
    },
}).mount('#app')

