import React, { Component } from 'react'
import Todo from './Todo'
import TodoStore from '../stores/ToDoStore'
import TodoActions from '../actions/ToDoActions'
import ToDoForm from './ToDoForm'
import toastr from 'toastr'
import NotFoundPage from './notFoundPage'
import { createHistory } from 'history'
import NotTodosForShow from './NotTodosForShow'

class Todos extends Component {
  constructor (props) {
    super(props)
    this.id = 1
    this.state = {
      todo: {
        title: '',
        description: ''
      },
      currentToDo: {
        id: null,
        title: '',
        description: ''
      },
      errors: {
        title: '',
        description: ''
      },
      todos: []
    }
    TodoStore.on('change', () => {
      this.getAllTodos()
    })
  }

  componentDidMount () {
    this.getAllTodos()
  }

  getAllTodos () {
    TodoStore
      .getAll()
      .then(todos => this.setState({todos}))
  }

  deleteToDo (id) {
    const arr = this.state.todos

    let result = arr.filter(obj => obj.id !== id)

    TodoActions.deleteToDo(result)
    toastr.success('ToDO deleted successfully !')
  }

  updateToDo (event) {
    event.preventDefault()

    if (!this.validateTodo(this.state.currentToDo)) {
      return
    }

    const arr = this.state.todos
    const currentToDoId = this.state.currentToDo.id

    arr.forEach((item) => {
      if (item.id === currentToDoId) {
        item.title = this.state.todo.title
        item.description = this.state.todo.description
      }
    })
    TodoActions.updateToDO(arr)
    this.setState({currentToDo: {id: null}})
    this.setState({todo: {title: '', description: ''}})
    this.props.history.push('/')
    toastr.success('ToDO updated successfully !')
  }

  createTodo (event) {
    event.preventDefault()

    if (!this.validateTodo(this.state.todo)) {
      return
    }

    this.id++
    TodoActions.createToDo(this.state.todo.title, this.state.todo.description, this.id)
    this.setState({todo: {title: '', description: ''}})

    toastr.success('ToDO added successfully !')
  }


  showUpdateForm (todo) {
    this.setState({currentToDo: {title: todo.title, description: todo.description, id: todo.id}})

    this.props.history.push('/update')
  }

  changeState(id){

    console.log(id)
    TodoActions.completeTodo(id)

  }
  handleChange (event) {
    this.setState({todo: {title: event.target.value, description: event.target.value}})
  }

  validateTodo (todo) {

    let errors = {}
    let formIsValid = true

    if (!todo.title || todo.title.length < 3) {
      errors.title = `Title are less than 10 symbols, ${todo.title.length} given`
      formIsValid = false
    }

    if (!todo.description || todo.description.length < 10) {
      errors.description = `Description are less than 10 symbols, ${todo.description.length} given`
      formIsValid = false
    }

    this.setState({errors})
    return formIsValid
  }

  handleInput (event) {
    const target = event.target
    const name = target.name
    const value = target.value

    let todo = this.state.todo
    todo[name] = value

    this.setState({todo})
  }

  handleEditInput (event) {
    const target = event.target
    const name = target.name
    const value = target.value

    let todo = this.state.currentToDo
    todo[name] = value

    this.setState({todo})
  }

  render () {

    if (this.props.location.pathname === '/update') {
      return (
        <div>
          <h1 className="display-4"> Update ToDo </h1>
          <ToDoForm
            todo={this.state.currentToDo}
            handleInput={this.handleEditInput.bind(this)}
            action={this.updateToDo.bind(this)}
            errors={this.state.errors}
            btnValue='Update ToDO!'
            type='update'
          />
        </div>
      )
    }

    if (this.props.location.pathname === '/show/all' || this.props.location.pathname === '/') {

      if (this.state.todos.length === 0) {
        return (
          <NotTodosForShow/>
        )
      }

      const {todos} = this.state
      const todoElements = todos.map(todo => (
        <Todo key={todo.id}
              deleteToDo={this.deleteToDo.bind(this, todo.id)}
              changeState={this.changeState.bind(this,todo.id)}
              showUpdateForm={this.showUpdateForm.bind(this, todo)}
              {...todo} />
      ))
      return (
        <div>
          <div className="table-responsive">
            <table className='table'>
              <thead>
              <th>Title</th>
              <th>DESCRIPTION</th>
              <th>STATUS</th>
              <th>ACTIONS</th>
              </thead>
              <tbody>
              {todoElements}
              </tbody>
            </table>
          </div>
        </div>
      )
    }

    if (this.props.location.pathname === '/add') {
      return (
        <div>
          <h1 className='display-4"'> Create ToDo </h1>
          <ToDoForm
            todo={this.state.todo}
            handleInput={this.handleInput.bind(this)}
            action={this.createTodo.bind(this)}
            errors={this.state.errors}
            btnValue='Add ToDo!'
            type='add'
          />
        </div>
      )
    }

    return (
      <NotFoundPage/>
    )
  }
}

export default Todos