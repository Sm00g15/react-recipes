import React from 'react';
import { Mutation } from 'react-apollo';
import { SIGNUP_USER } from '../../queries';
import Error from '../Error';

const initialState = {
    username: "",
    email: "",
    password: "",
    passwordConfirmation: ""
}

class Signup extends React.Component {
    state = {...initialState};
    clearState = () => {
        this.setState({...initialState})
    }
    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value})
    }
    handleSubmit = (event, signupUser) => {
        event.preventDefault();
        signupUser().then(data => {
            console.log(data);
            this.clearState();
        })
    }
    validateForm = () => {
        const { username, email, password, passwordConfirmation } = this.state;
        const isInvalid = !username || !email || !password || password !== passwordConfirmation;
        return isInvalid;
    }
    render() {
        const { username, email, password, passwordConfirmation } = this.state;
        return(
            <div className="App">
                <h2 className="App">Signup</h2>
                <Mutation mutation={SIGNUP_USER} variables={{ username , email, password}}>
                {( signupUser, { data, loading, error })=> {
                    return(
                    <form action="" className="form" onSubmit={event=>this.handleSubmit(event, signupUser)}>
                        <input value={username} type="text" onChange={this.handleChange} name="username" placeholder="Username"/>
                        <input value={email} type="email" onChange={this.handleChange} name="email" placeholder="Email Address"/>
                        <input value={password} type="password" onChange={this.handleChange} name="password" placeholder="Password"/>
                        <input value={passwordConfirmation} type="password" onChange={this.handleChange} name="passwordConfirmation" placeholder="Confirm Password"/>
                        <button disabled={loading || this.validateForm()} type="submit" onChange={this.handleChange} className="button-primary">Submit</button>
                        {error && <Error error={error} />}
                    </form>
                    )
                }}
                </Mutation>
            </div>
        )
    }
}

export default Signup;