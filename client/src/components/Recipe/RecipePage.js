import React from 'react';
import { withRouter } from 'react-router-dom';

const RecipePage = ({ match }) => {
    console.log(match.params._id)
    return (
        <div>RecipePage</div>
    )
}
 
export default withRouter(RecipePage);