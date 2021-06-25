import axios from 'axios';

import TriviaServices from '../service/TriviaServices';
import React from 'react';

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
         axios.post("http://localhost:8080/question", data)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    render() {
        return (
            <div>
                <form onSubmit={this.submitInfo}>
                    <label>
                        <input typeof='text' name='question' onChange={this.handleQuestionChange} placeholder='Question' required></input>
                        <input typeof='text' name='answer' onChange={this.handleAnswerChange} placeholder='answer' required></input>
                        <input typeof='text' name='published' onChange={this.handlePublishChange} placeholder='quantity' required></input>
                   
                    </label>
                    <button typeof='submit'>Add</button>
                </form>
            </div>
        )
    };

export default TriviaForm;