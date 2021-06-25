import axios from 'axios';


import React, { Component } from 'react';

 class TriviaForm extends Component {
     constructor(){
         super()
         this.state = {
             triviaItems: [];
             question: '',
             answer: '',
             published: '';
         }
     }
     handleQuestionChange = (event) =>{
         this.setState({question: event.target.value})
         console.log("changing")
     }
     handleAnswerChange = (event) => {
        this.setState({answer: event.target.value})
        console.log("Changing")
    }
    handlePublishChange = (event) => {
        this.setState({publish: event.target.value})
        console.log("Changing")
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
export default TriviaForm;