import React, { Component } from 'react';

class AddRecipe extends Component {
    state = {
        name: '',
        instructions: '',
        category: 'Breakfast',
        description: '',
        username: ''
    };

    handleChange = event => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    render() { 
        const { name, category, instructions, description, username } = this.state;
        return ( 
            <div className="App">
            <h2 className="App">Add Recipe</h2>
            <form className="form" action="">
                <input value={name} type="text" name="name" onChange={this.handleChange} placeholder="Recipe Name"/>
                <select value={category} name="category" onChange={this.handleChange}>
                    <option value="Breakfast">Breakfast</option>
                    <option value="Lunch">Lunch</option>
                    <option value="Dinner">Dinner</option>
                    <option value="Snack">Snack</option>
                </select>
                <input value={description} type="text" name="description" placeholder="Add Description" onChange={this.handleChange}/>
                <textarea value={instructions} name="instructions" placeholder="Add Instructions" onChange={this.handleChange} id="" cols="60" rows="30"></textarea>
                <button type="submit" className="button-primary">Submit</button>
            </form>
        </div>
         )
    }
}
 
export default AddRecipe;