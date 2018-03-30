import React, {Component} from 'react'

class Button extends Component {
    render() {
        return (
            <button className={this.props.className}
                    type={this.props.type}
                    onClick={this.props.action}>{this.props.btnValue}</button>
        )
    }
}

export default Button