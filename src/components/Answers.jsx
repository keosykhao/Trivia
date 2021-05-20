import {useState, useEffect} from 'react';
import {createMarkup} from '../Helpers'
import {Grid, Paper, Select, Button, MenuItem, Typography, InputLabel, FormControl} from '@material-ui/core';




const Answers = ({quizData, classes, createMarkup}) =>{ 
    const handleResult = (e) => {
        e.preventDefault();
    };






    return (
        <div>
            <Typography variant="h1" className={classes.mainTitle}>
                Answer
            </Typography>
            <form onSubmit={handleResult}>
                <Grid container spacing={4}>
                    <Grid item xs={12}>
                        {quizData.map((quiz)=> (
                            <Paper key={quiz.question} className={classes.paper}>
                                <Typography variant="h5" className={classes.question}>
                                    <span dangerouslySetInnerHTML={createMarkup(quiz.question)} />
                                </Typography>
                                <FormControl fullWidth variant="outlined">
                                    <InputLabel id="answer-select-lable">
                                        Choose answer:
                                    </InputLabel>
                                    <Select
                                    required
                                    name="answer"
                                    id="answer-select"
                                    label="Choose Answer"
                                    value={relatedAnswer(quiz.question, selectedAnswers) || ""}
                                    labelId="answer-selected-label"
                                    onChange={(e) => handleAnswerChange(e, quiz.question)}>
                                    {quiz.answers.map((answer)=> (
                                        <MenuItem key={answer} value={answer}>
                                            <span dangerouslySetInnerHTML={createMarkup(answer)} />
                                        </MenuItem>
                                    ))}

                                    </Select>
                                </FormControl>
                            </Paper>
                        ))}
                        <Button 
                            className={classes.submitButton}
                            variant="contained"
                            color="primary"
                            type="submit">
                                Result
                            </Button>

                    </Grid>
                </Grid>
            </form>


            
        </div>
    );
}

export default Answers;