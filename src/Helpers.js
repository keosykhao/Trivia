export const styles = {
    paper: {
        padding:"20px",
        marginTop: "20px",
        borderRadius: "20px"
    },
    mainTitle:{
        fontSize:"30px",
        marginBottom: "20px",
    },
    submitButton:{
        marginTop: "20px",
        borderRadius:"10px",

    },
    question:{
        fontSize:"25px",
        marginBottom:"10px",
        fontWeight:"500",
        lineHeight:"35px",
        marginLeft: "10px",

    },
    answer: {
        fontSize: "18px",
        marginBottom:"10px",
        fontWeight:"500",
        display:"flex,",

    },
    correctAnswer:{
        color: "green",

    },
    results:{
        display:"flex",
        margin: "0 auto",
        maxWidth:"150px",
        textAlign: "center",
        flexDirection: "column",

    }
}
    export const difficulties = [
        {id:"total_easy_question_count", name:"Easy"},
        {id:"total_medium_question_count", name:"Medium"},
        {id:"total_hard_question_count", name:"Hard"},
    ];
    // this turns html into regular text
    export const createMarkup = (text) => {
        return {__html: text}
    };

