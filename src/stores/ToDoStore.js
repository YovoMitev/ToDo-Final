import {EventEmitter} from 'events'
import dispatcher from '../dispatcher'

class ToDoStore extends EventEmitter {
    constructor() {
        super()

        this.todos = [
            {
                id: 1,
                title: "walk the god!",
                description: "walking the dog in park near by my school",
                completed: false
            }
        ]

    }

    getAll() {
        return new Promise((resolve, reject) => {
            resolve(this.todos.slice(0))
        })
    }

    create(title, description, id) {
        this.todos.push({
            id,
            title,
            description,
            completed: false
        })
        this.emit('change')
    }

    delete(data) {
        this.todos = data
        this.emit('change')
    }

    update(data) {


        this.emit('change')
    }

    completeTodo (id) {
        const todo = this.todos
          .find(todo => todo.id === id)
        todo.completed = true

        this.emit('change')
    }

    handleAction(action) {
        switch (action.type) {
            case 'CREATE': {
                this.create(action.title, action.description, action.id)
                break
            }
              case 'COMPLETE_TODO': {
                this.completeTodo(action.id)
                break
              }
            case 'DELETE': {
                this.delete(action.data)
                break
            }
            case 'UPDATE':{
                this.update(action.data)
                break
            }
            default : {
                throw Error('Invalid action type')
            }
        }
    }

}

let toDoStore = new ToDoStore();

dispatcher.register(toDoStore.handleAction.bind(toDoStore))

export default toDoStore