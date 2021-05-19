import { useEffect, useState } from 'react';
// import axios in order to use JSON data
import axios from 'axios'




const Selections = () => {
    const [levels, setLevels] = useState([])
    const fetchSelections = async () => {
       



        const { data } = await axios.get(
            "https://opentdb.com/api.php?amount=50&category=31&difficulty=easy"
            );

        const triviaData = data.results.map((category) => {
            const incorrectAnswersIndex = category.incorrect_answers.length;
            const randomIndex = Math.random() * (incorrectAnswersIndex - 0) +0;
            category.incorrect_answers.splice(randomIndex, 0, category.correct_answer)
            


            return {
                ...category,
                answers: category.incorrect_answers,


            }
        })    
 console.log(triviaData)
 setLevels(triviaData);   

    };

useEffect(() => {
    fetchSelections();
}, []);

    return (
        <div>
            Make your selections
        </div>
    );
};

export default Selections;