import React, { Component } from 'react';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './Login.css';
import { connect } from 'react-redux';
import { login } from '../../actions/authAction';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    this.props.login({ email, password });
    this.props.history.push("/dashboard");
  }

  render(){
    return (
      <div>
        <h1 className="heading">Task List</h1>
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='teal' textAlign='center'>
              Login
            </Header>
            <Form size='large' onSubmit={this.handleSubmit}>
              <Segment stacked>
                <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' onChange={(e) => this.setState({ email: e.target.value })} />
                <Form.Input
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Password'
                  type='password'
                  onChange={(e) => this.setState({ password: e.target.value })}
                />

                <Button color='teal' fluid size='large' onClick={this.handleSubmit}>
                  Login
                </Button>
              </Segment>
            </Form>
            <Message>
              New? <Link to='/register'>Sign Up</Link>
            </Message>
          </Grid.Column>
        </Grid>    
      </div>
    );
  }
}

export default connect(null, { login })(Login);
