import React from 'react';

class CreateExercise extends React.Component {

    //This fields should be equal to the fields in our MongoDB
    state = {
        usernam: '',
        description: '',
        series: 0,
        date: new Date(),
        users: []
    }

    render() {
        return(
            <h2>CreateExercise</h2>
        )
    }
};

export default CreateExercise;