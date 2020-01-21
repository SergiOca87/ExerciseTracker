import React from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

class CreateExercise extends React.Component {

    //This fields should be equal to the fields in our MongoDB
    state = {
        username: '',
        description: '',
        series: 0,
        date: new Date(),
        users: []
    }

    //This data will come from the DB
    componentDidMount = () => {
        this.setState({
            users: ['test user'],
            username: 'test user'
        })
    };

    onChangeUsername = (e) => {
        this.setState({
            username: e.target.value,
        });
    };

    onFormSubmit = (e) => {
        e.preventDefault();

    }

    render() {
        return(
            <form onSubmit ={this.onFormSubmit}>
                <select>
                    { this.state.users.map((user) => {
                        return <option value={user}>{user}</option>
                    }) }
                </select>
            </form>
        )
    }
};

export default CreateExercise;