




class Todo {

    #list
    constructor() {
        this.#list = [];
    }


    //Es igual que añadir a un producto?
    addToDo(text) {
        this.#list.push({
            id: this.calcularID(),
            text: text
        }
        );
    }

    //Borrar producto en class 
    remoteTodo(id) {
        this.#list = this.#list.filter(todo => todo.id !== id);

    }


    getTodos() {
        return this.#list;
    }

    calcularID() {
        return Date.now();
    }
}


const todolist = new Todo();
todolist.addToDo("hola");
console.log(todolist.getTodos());