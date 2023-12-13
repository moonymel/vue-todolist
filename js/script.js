const { createApp } = Vue;

createApp({
    data(){
        return{
            added_task: '',
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

        taskDone(index){
            this.todo_list[index].done = !this.todo_list[index].done;
        },

        addTask(){
            let task = {
                text: this.added_task,
                done: false,
            };
            this.todo_list.push(task)
        }
    }
}).mount('#app')