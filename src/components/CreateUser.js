import React from 'react';
import axios from 'axios';
import Layout from './Layout';

class CreateUser extends React.Component {

    //This fields should be equal to the fields in our MongoDB
    state = {
        username: '',
    }

    onChangeUsername = (e) => {
        this.setState({
            username: e.target.value,
        });
    };
    
    onFormSubmit = (e) => {
        e.preventDefault();

        
        const user = {
            username: this.state.username
        }

        //Send the user data to our server
        axios.post('http:localhost:5000/users/add', user)
            .then(res => console.log(res.data))

        //Clear the username Field
        this.setState({
            username: ''
        })
    }
	
    render() {
        return(
            <Layout>
                <h3>Create a New User</h3>
                <form onSubmit ={this.onFormSubmit}>
                    <div className="form-group">
                        <label for="description">Description</label>
                        <input 
                            type="text"
                            className="form-control"
                            id="user"
                            value={this.state.user}
                            onChange={this.onChangeUsername} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
             </Layout>
        )
    }
};

export default CreateUser;