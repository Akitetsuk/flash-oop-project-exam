let nextId = 3;


Vue.createApp({
    data() {
        return {
            isHidden: false,
            question : "",
            answer:"",
            notes: [
                {id: 1,
                question: "¿Cómo hago para iterar un array con Vue?",
                answer: "Usa la directiva v-for" }, 
                {id: 2,
                question: "¿Cómo hago para relacionar una variable de estado con el campo <em>value</em>' de input?",
                answer: "La directiva v-model nos ayudará en este caso"}
            ]
        }
    },

    methods: {
        addTodo() {
            
            this.notes.push(
                {nextId: nextId++,
                question: this.question,
                answer: this.answer,
            });

            this.question = "";
            this.answer ="";

        },

        removeItem(note) {
            this.notes = this.notes.filter((t) => t !== note);
        },
    },
}).mount('#app')