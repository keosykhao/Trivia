import React, { Component } from 'react'

export default class TriviaComponent extends Component {
        constructor(){
            super()
            // this is the data from our db
                triviaItems: [];
            }
        }
        // get data from the api
    componentDidMount(){
        TriviaService.getCartItems().then((response)=>{
            this.setState({
                triviaItems : response.data
            })
        })
    }

    deleteTriviaItem(id){
        axios.delete(`http//localhost:8080/question/${id}`)
    }
    // create our table
    render(){
        return(
            <div>
            <h1 className = 'textcenter'>Trivia</h1>
            <table className = 'table table-striped'>
                <thead>
                    <tr>
                        <td>Question</td>
                        <td>Answer</td>
                        <td>Publish</td>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.triviaItems.map(
                            triviaItems => 
                                <tr key = {triviaItems.id}>
                                    <td>{triviaItems.qustion}</td>
                                    <td>{triviaItem.answer}</td>
                        
                                    <td>
                                        {/* This will be a button for delete */}
                                        <button onClick={()=>{this.deleteTriviaItem(triviaItems.id)}}>Delete Me </button>
                                    </td>
                                </tr>
                            
                            )
                    }
                </tbody>
            </table>
            </div>
)
        }
    
export default TriviaComponent;

