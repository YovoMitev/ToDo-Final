import React,{Component}  from 'react';
import Input from './common/Input'
import Button from './common/Button'

class TodoForm extends Component{
    constructor(props){
        super(props)
    }
    render() {

        return (
          <form>
            <Input
              name='title'
              placeholder='Title'
              error={this.props.errors.title}
              value={this.props.todo.title}
              handleInput={this.props.handleInput}
            />
            <br/>
              <Input
                name='description'
                placeholder='Description'
                error={this.props.errors.description}
                value={this.props.todo.description}
                handleInput={this.props.handleInput}
              />
              <Button action={this.props.action}
                      type='submit'
                      className={'btn btn-default'}
                      btnValue={this.props.btnValue}/>
          </form>
        )
    }
}

export default TodoForm