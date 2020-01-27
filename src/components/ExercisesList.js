import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Layout from './Layout';

const Exercise = (props) => {
    return(
        <div className="col col-md-6 col-sm-12">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Exercise: {props.description}</h5><br />
                    <ul className ="list-group">
                        <li className="list-group-item">User: {props.username}</li>
                        <li className="list-group-item"># of Series: {props.series}</li>
                        <li className="list-group-item">Current Weight: {props.weight}</li>
                        <li className="list-group-item">Starting Date: {props.date.substring(0, 10)}</li>
                    </ul>
                </div>
                <div className="card-footer text-light">
                    <a onClick={() => props.deleteExercise(props.id)} className="btn btn-danger">Delete Exercise</a>
    
                </div>
            </div>
        </div>
    )
}

class ExercicesList extends React.Component {

    //This fields should be equal to the fields in our MongoDB
    state = {
        exercises: []
    }

    //This data will come from the DB
    componentDidMount = () => {

		axios.get('http://localhost:5000/exercises/')
			.then((res) => {
				console.log(res.data);

				this.setState({
					exercises: [...res.data]
                })
                
                console.log(this.state)
			})
			.catch((err) => console.log(err));
    }
    
    onDeleteExercise = (id) => {
        axios.delete('http://localhost:5000/exercises/' + id)
            .then(res => console.log(res.data))
            .catch(err => console.log(err));

        this.setState({
            exercises: this.state.exercises.filter((exercise => exercise._id !== id))
        });
    }

    renderExercises = () => {
        return this.state.exercises.map((currentExercise) => {
            return <Exercise 
                        key={currentExercise._id}
                        id={currentExercise._id}
                        description={currentExercise.description}
                        username={currentExercise.username}
                        series={currentExercise.series}
                        weight={currentExercise.weight}
                        date={currentExercise.date}
                        deleteExercise={this.onDeleteExercise}
            />
        })
    }

    render() {

        return(
            <Layout>
                <h2>ExercisesList</h2>
                    <div className="row">
                        {this.renderExercises()}
                    </div>
            </Layout>
        )
    }
};

export default ExercicesList;