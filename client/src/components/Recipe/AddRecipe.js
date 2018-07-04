import React from 'react';

const AddRecipe = () => (
    <div className="App">
        <h2 className="App">Add Recipe</h2>
        <form className="form" action="">
            <input type="text" name="name" onChange={this.handleChange} placeholder="Recipe Name"/>
            <select name="category" onChange={this.handleChange}>
                <option value="Breakfast">Breakfast</option>
                <option value="Lunch">Lunch</option>
                <option value="Dinner">Dinner</option>
                <option value="Snack">Snack</option>
            </select>
            <input type="text" name="description" placeholder="Add Description" onChange={this.handleChange}/>
            <textarea name="instructions" placeholder="Add Instructions" onChange={this.handleChange} id="" cols="60" rows="30"></textarea>
            <button type="submit" className="button-primary">Submit</button>
        </form>
    </div>
)

export default AddRecipe;