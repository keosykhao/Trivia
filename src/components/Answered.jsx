import {Paper, Button, Typography} from '@material-ui/core';
import { Check, Close } from '@material-ui/icons';
import { createMarkup } from '../Helpers';


const Answered = ({ processedAnswers, classes, resetQuiz}) => {
    const renderAnswers = (answers => {
        return answers.map(
            ({question, isCorrect, correctAnswer, wrongAnswer})=> (
            <Paper key={question} className={classes.paper}>
                <Typography variant="h2" className={classes.question}>
                    <span dangerouslySetInnerHTML={createMarkup(question)} />
                </Typography>
            {isCorrect ? (
                <Typography variant="h2" className={`${classes.answer} ${classes.correctAnswer}`}>
                <Check />
                <span dangerouslySetInnerHTML={createMarkup(correctAnswer)} className={classes.answer} />
            </Typography>
            ) : (
                <>
             <Typography variant="h3" className={classes.answer} color="secondary">
                 <Close />
                    <span dangerouslySetInnerHTML={createMarkup(wrongAnswer)} />
                </Typography>
                <Typography variant="h3" className={`${classes.answer} ${classes.correctAnswer}`} >
                 <Check/>
                    <span dangerouslySetInnerHTML={createMarkup(correctAnswer)} />
                </Typography>        
             </>
            )}

            </Paper>
        )
        );

    }
return (
        <>
        <Typography variant="h1" className={classes.mainTitle}>
            Answers Review:
            </Typography>
            {renderAnswers(processedAnswers)}
            <Button className={classes.submitButton} onClick={resetQuiz}
                    variant="contained" color="primary">
                        Reset</Button> 
            </>    
    );
};

export default Answered;