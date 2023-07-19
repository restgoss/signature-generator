import React from 'react';
import ReactDOM from 'react-dom/client';
import './Input.css';

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: ''};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        return (
            <>
            <label forhtml={this.props.id}>{this.props.label}</label>
            <input id={this.props.id} type={this.props.type} className='input'></input>
            </>
        );
    }
}

export default Input;