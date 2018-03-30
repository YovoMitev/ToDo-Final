import React from 'react'
import Button from './common/Button'

const Todo = (props) => {
    return (
        <tr>
            <td>
                {props.title}
            </td>
            <td>
                {props.description}
            </td>
            <td>
                {props.completed ? 'DONE' : 'PENDING'}
            </td>
            <td>
                <Button action={props.deleteToDo}
                        type='submit'
                        className={'btn btn-default'}
                        btnValue="Delete"/>
                <Button action={props.showUpdateForm}
                        type='submit'
                        className={'btn btn-default'}
                        btnValue='Update'/>
              {props.completed
                ? ""
                :  <Button action={props.changeState}
                           type='submit'
                           className={'btn btn-default'}
                           btnValue='Done'/>
              }
            </td>
        </tr>
    )
}

export default Todo