import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import { ADD_RECIPE } from '../../queries';
import Error from '../Error';

class AddRecipe extends Component {
    state = {
        name: '',
        instructions: '',
        category: 'Breakfast',
        description: '',
        username: '', 
    };

    componentDidMount() {
        this.setState({
            username: this.props.session.getCurrentUser.username
        })
    }

    handleChange = event => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    validateForm = () => {
        const { name, category, instructions, description, username } = this.state;
        const isInvalid = !name || !category || !instructions || !description;
        return isInvalid;
    }

    handleSubmit = (event, addRecipe) => {
        event.preventDefault();
        addRecipe().then(({data}) => {
            console.log(data);
        })
    }

    
    render() { 
        const { name, category, instructions, description, username } = this.state;
        return ( 
        <Mutation mutation={ADD_RECIPE} variables={{ name, category, instructions, description, username }}>
            {( addRecipe, { data, loading, error }) => {
                return(
                    <div className="App">
                    <h2 className="App">Add Recipe</h2>
                    <form className="form" action="" onSubmit={event => this.handleSubmit(event, addRecipe)}>
                        <input value={name} type="text" name="name" onChange={this.handleChange} placeholder="Recipe Name"/>
                        <select value={category} name="category" onChange={this.handleChange}>
                            <option value="Breakfast">Breakfast</option>
                            <option value="Lunch">Lunch</option>
                            <option value="Dinner">Dinner</option>
                            <option value="Snack">Snack</option>
                        </select>
                        <input value={description} type="text" name="description" placeholder="Add Description" onChange={this.handleChange}/>
                        <textarea value={instructions} name="instructions" placeholder="Add Instructions" onChange={this.handleChange} id="" cols="60" rows="30"></textarea>
                        <button disabled={loading || this.validateForm()} type="submit" className="button-primary">Submit</button>
                        {error && <Error error={error} /> }
                    </form>
                </div>
                );
            }}
        </Mutation>
        );
    }
}
 
export default AddRecipe;