import React from 'react';
import axios from 'axios';
import Layout from './Layout';

class ExercicesList extends React.Component {

    //This fields should be equal to the fields in our MongoDB
    state = {
        username: { type: String, required: true },
        description: { type: String, required: true },
        series: { type: Number, required: true },
        weight: { type: Number, required: true },
        date: { type: Date, required: true }
    }

    //This data will come from the DB
    componentDidMount = () => {

		axios.get('http://localhost:5000/exercises/')
			.then((res) => {
				console.log(res.data);

                //Map data to state TODO

				// this.setState({
				// 	users: res.data.map( user  => user.username ),
				// 	username: res.data[0].username
				// })
			
			})
			.catch((err) => console.log(err));
	}

    render() {

        return(
            <Layout>
                <h2>ExercisesList</h2>
                <ul>
                    {/* { Map state to LIs - TODO } */}
                </ul>
            </Layout>
        )
    }
    
};

export default ExercicesList;