import React from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Layout from './Layout';

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
	
	onChangeDescription = (e) => {
        this.setState({
            description: e.target.value,
        });
	};
	
	onChangeSeries = (e) => {
        this.setState({
            series: e.target.value,
        });
	};
	
	onChangeDate = (date) => {
        this.setState({
            date: date,
        });
    };

    onFormSubmit = (e) => {
        e.preventDefault();

		//Push to DB
		const exercise = {
            username: this.state.username,
			description: this.state.description,
			series: this.state.series,
			date: this.state.date,
			users: this.state.users,
        }
    }

    render() {
        return(
			<Layout>
				<h3>Add a New Exercise</h3>
				<form onSubmit ={this.onFormSubmit}>
					<div className="form-group">
						<label for="userSelect">User</label>
						<select 
							id="userSelect"
							value={this.state.userName}
							onChange={this.onChangeUsername}>
							{ 
								this.state.users.map((user) => {
									return <option key={user} value={user}>{user}</option>
								}) 
							}
						</select>
					</div>
					<div className="form-group">
						<label for="description">Description</label>
						<input 
							type="text"
							className="form-control"
							id="description"
							value={this.state.description}
							onChange={this.onChangeDescription} />
					</div>
					<div className="form-group">
						<label for="series"># of Series</label>
						<input 
							type="number"
							className="form-control"
							id="series"
							value={this.state.series}
							onChange={this.onChangeSeries} />
					</div>
					<div className="form-group">
						<label for="date">Date</label>
						<DatePicker
							selected={this.state.date}
							onChange={this.onChangeDate}
						/>
					</div>
					<button type="submit" className="btn btn-primary">Submit</button>
				</form>
			 </Layout>
        )
    }
};

export default CreateExercise;