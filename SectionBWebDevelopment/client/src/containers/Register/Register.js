import React, { Component } from 'react';
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react';
import './Register.css';
import { register } from '../../actions/authAction';
import { connect } from 'react-redux';

class Register extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      email: '',
      password: ''
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = this.state;
    this.props.register({ name, email, password });
    this.props.history.push("/");
  }

  render(){
    return (
      <div>
        <h1 className="heading">Task List</h1>
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='teal' textAlign='center'>
              Sign up
            </Header>
            <Form size='large' onSubmit={this.handleSubmit}>
              <Segment stacked>
                  <Form.Input fluid icon='user' iconPosition='left' placeholder='Name' onChange={(event) => this.setState({ name: event.target.value })} />
                  <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' onChange={(event) => this.setState({ email: event.target.value })} />
                  <Form.Input
                      fluid
                      icon='lock'
                      iconPosition='left'
                      placeholder='Password'
                      type='password'
                      onChange={(event) => this.setState({ password: event.target.value })}
                  />
                <Button color='teal' fluid size='large' onClick={this.handleSubmit}>
                  Sign up
                </Button>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default connect(null, { register })(Register);
