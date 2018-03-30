import dispatcher from '../dispatcher'

let TodoActions = {
    createToDo: (title, description, id) => {
        dispatcher.dispatch({
            type: 'CREATE',
            title,
            description,
            id
        })
    },
    completeTodo: (id) =>  {
        dispatcher.dispatch({
            type:"COMPLETE_TODO",
            id
        })
    },
    deleteToDo: (data) => {
        dispatcher.dispatch({
            type: 'DELETE',
            data
        })
    },
    updateToDO: (data) => {
        dispatcher.dispatch({
            type: 'DELETE',
            data
        })
    }
}

export default TodoActions