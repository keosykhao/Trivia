import {Grid, Paper, Select, Button, MenuItem, Slider, Container, Typography, InputLabel,
FormControl, 
TextField} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import {useState, useEffect} from 'react';
import {styles, difficulties, createMarkup} from '../Helpers';
import Answers from './Answers'




function Main() {


    const useStyles = makeStyles((theme) => {
        return styles;
    });

    const [quizNumber, setQuizNumber] = useState(null);
    const [difficulty, setDifficulty] = useState({id:"", name: ""});
    const [quizData, setQuizData]= useState([]);
    const classes = useStyles();
    const [currentQuizStep, setCurrentQuizStep]= useState("start");

    const fetchQuizData = async () => {
        try{
            const url = `https://opentdb.com/api.php?amount=${quizNumber}&category=31&difficulty=${difficulty.name.toLowerCase()}`;

            const { data } = await axios.get(url);

            const formattedCategory = data.results.map((cat)=> {
                const incorrectAnswersIndex = cat.incorrect_answers.length;
                const randomIndex = Math.round(
                    Math.random() * (incorrectAnswersIndex - 0) + 0
                );
                cat.incorrect_answers.splice(randomIndex, 0, cat.correct_answer);
                return{
                    ...cat,
                    answers: cat.incorrect_answers,
                };
            });
            setQuizData(formattedCategory);
            setCurrentQuizStep("results");   
        } catch (error){
            console.log("Fetch quiz error =====>>>>", error)
        }
    };
    const handleSubmit = (e) => {
          e.preventDefault();
          if(!quizData.length && quizNumber && difficulty){
              fetchQuizData();
          }
      };
    const handleDifficultyChange = (e) =>{
        e.preventDefault();
        const selectedDifficulty = difficulties.find(
            (diff) => diff.id === e.target.value);
            setDifficulty(selectedDifficulty);
        };
    const handleChange = (e) => {
        e.preventDefault();
        setQuizNumber(e.target.value);
    };
    const resetQuiz = (e) => {
        e.preventDefault();
        setQuizData([]);
        setQuizNumber("");
        setDifficulty("");
        setCurrentQuizStep("start");
        window.scrollTo(0, "20px");
    };


    return (
        
      <Container>
          <Paper>
            <Typography variant="h1" className={classes.mainTitle}>
                Make Your Selections:
            </Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing ={4}>
                    <Grid item xs={12}>
                        <FormControl fullWidth variant="outlined">
                            <InputLabel id="difficulty-select-label">
                                Select Difficulty
                            </InputLabel>
                            <Select required name ="difficulty"
                                    value={difficulty.id || ""}
                                    id="difficulty-select"
                                    label="Select Difficulty"
                                    labelId="difficulty-select-label"
                                    onChange={handleDifficultyChange}>
                                    {difficulties.map((difficulty) => (
                                        <MenuItem key={difficulty.id} value={difficulty.id}>
                                            {difficulty.name}
                                        </MenuItem>
                                    ))}
                                    </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField 
                        inputProps={{min:1, max:20}}
                        required
                        fullWidth
                        type="number"
                        id="quiz-number"
                        variant="outlined"
                        name="quiz-number"
                        label={`Pick Number of Questions 1-20`}
                        value={quizNumber || ""}
                        onChange={handleChange} />
                    </Grid>
                </Grid>
                <Button 
                    className={classes.submitButton}
                    type="submit"
                    variant="contained"
                    color="primary"
                >Submit</Button>
            </form>
            
           
                <Answers
                classes={classes}
                quizData={quizData}
                resetQuiz={resetQuiz}
                currentQuizStep={currentQuizStep} 
                setCurrentQuizStep={setCurrentQuizStep}
            />                                                 
            
          </Paper>
        </Container>      
           

        
    );
}

export default Main;