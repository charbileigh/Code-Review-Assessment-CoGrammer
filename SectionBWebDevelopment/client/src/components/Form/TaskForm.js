import React, { Component } from 'react';
import { Form, Input, TextArea } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { createTasks } from '../../actions/taskAction';

class TaskForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            isName: false,
            isDesc: false,
            name: '',
            description: ''
        };
    }

    handleInput = (e) => {
        e.preventDefault();
        if (e.target.value){
            this.setState({ name: e.target.value, isName: true});
        }

        if (this.state.isName && this.state.isDesc){
            this.props.createTasks({ name: this.state.name, description: this.state.description });
        }
        console.log(e.target.value);
    }

    handleText = (e) => {
        e.preventDefault();
        if (e.target.value){
            this.setState({ description: e.target.value, isDesc: true});
        }

        if (this.state.isName && this.state.isDesc){
            this.props.createTasks({ id: 5, name: this.state.name, description: this.state.description, date: '2020-03-20'});
        }
        console.log(e.target.value);
    }

    render(){
        return (
            <div>
                <label>Name</label>
                <Input placeholder='Name' fluid onChange={this.handleInput} />
                <br/>

                <label>Description</label>
                <Form>
                    <TextArea placeholder='Description the task' onChange={this.handleText} />
                </Form>
            </div>
        );        
    }
}

export default connect(null, { createTasks })(TaskForm);
