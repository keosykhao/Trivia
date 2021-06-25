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
    handleSubmit(e){
        e.preventDefault();
        window.location.reload(false)
        // set a variable for our state to live in
        const data = {
            question : this.state.question,
            answer : this.state.answer,
            published : this.state.published,
            
        }
        
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
export default TriviaForm;