import axios from "axios"

// create a class that makes api calls for us

// create a variable for our url

const CART_URL = "http://localhost:8080/question"

// create a class so we can use the methods in that class
class TriviaService {
    // method to get our data from database
    getItems (){
         return axios.get(CART_URL)
    }
}
export default new TriviaService();

