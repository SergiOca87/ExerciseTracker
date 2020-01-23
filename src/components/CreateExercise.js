import React from 'react';
import axios from 'axios';
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

		let usersArr = [];

		axios.get('http://localhost:5000/users/')
			.then((res) => {
				console.log(res.data);
				res.data.map((user) => usersArr.push(user.username));

				this.setState({
					users: [...usersArr],
					username: usersArr[0]
				})
			})
			.catch((err) => console.log(err));
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
		
		axios.post('http://localhost:5000/exercises/add/', exercise)
			.then((res) => console.log(res))	
			.catch((err) => console.log(err));
   	 	}

    render() {
        return(
			<Layout>
				<h3>Add a New Exercise</h3>
				<form onSubmit ={this.onFormSubmit}>
					<div className="form-group">
						<label>User</label>
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
						<label>Description</label>
						<input 
							type="text"
							className="form-control"
							id="description"
							value={this.state.description}
							onChange={this.onChangeDescription} />
					</div>
					<div className="form-group">
						<label># of Series</label>
						<input 
							type="number"
							className="form-control"
							id="series"
							value={this.state.series}
							onChange={this.onChangeSeries} />
					</div>
					<div className="form-group">
						<label>Date</label>
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