const { createApp } = Vue;

createApp({
    data(){
        return{
            todo_list: [
                {
                    text: 'Finire la pozione Restringente',
                    done: false,
                },
                {
                    text: 'Inviare un gufo ai genitori',
                    done: true,
                },
                {
                    text: 'Fare manutenzione alla scopa',
                    done: false,
                },
                {
                    text: 'Studiare Erbologia',
                    done: false,
                },
                {
                    text: 'Allenarsi a Scacchi Magici',
                    done: true,
                }
            ]
        }
    },

    methods:{
        delateTask(index){
            this.todo_list.splice(index, 1);
        },

    }
}).mount('#app')