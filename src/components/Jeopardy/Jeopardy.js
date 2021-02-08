import React, { Component } from 'react';
//import our service
import JeopardyService from "../../jeopardyService";
class Jeopardy extends Component {
  //set our initial state and set up our service as this.client on this component
  constructor(props){
    super(props);
    this.client = new JeopardyService();
    this.state = {
      data: {},
      score: 0,
      formData:{
      answer:"",
      }
    }
  }
  //get a new random question from the API and add it to the data object in state
  getNewQuestion() {
    return this.client.getQuestion().then(result => {
      this.setState({
        data: result.data[0]
      })
    })
  }
  handleChange = (event) => {
    let formData = this.state.formData;
    formData[event.target.name] = event.target.value;
    this.setState({
      formData})
  }
  handleSubmit = (event) => {
    event.preventDefault();
if (this.state.data.answer === this.state.formData.answer){
  console.log("Match")
  this.setState((state, props)=> ({
    score: state.score + state.data.value,
    formData: {
      answer: ""
    }
  }))
}
else {
  console.log ("No Match")
  this.setState((state, props)=> ({
    score: state.score - state.data.value,
    formData: {
      answer: ""
    }
  }))
}
this.getNewQuestion()   
}
  //when the component mounts, get a the first question
  componentDidMount() {
    this.getNewQuestion();
  }
  //display the results on the screen
  render() {
    console.log (this.state.data)
    // console.log(this.state)
    if (!this.state.data.category){
      return <div> Loading </div>;
    }
    return (
      <div>
        <div>
            <label> Question: </label>
            <p>{this.state.data.question}</p> 
        </div>             
        <div>          
            <label>Value:</label>
            <p>{this.state.data.value} </p>
        </div>
        <div>          
            <label> Category:</label>
            <p>{this.state.data.category.title} </p>
        </div>        
        <div>
            <label>Score:</label>
            <p>{this.state.score} </p>
        </div>
        <div>
              <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor>Answer:</label>
                        <input                         
                            type="text" 
                            name="answer" 
                            value= {this.state.formData.answer}
                            onChange= {this.handleChange}
                            />
                        </div>
                        <button>Submit</button>
              </form>
        </div>
        </div>    
      );      
  }
}
export default Jeopardy;











// import React, { Component } from 'react';
// //import our service
// import JeopardyService from "../../jeopardyService";
// import JeopardyPage from "../../pages/Jeopardy"
// class Jeopardy extends Component {
//     //set our initial state and set up our service as this.client on this component
//     constructor(props) {
//         super(props);
//         this.client = new JeopardyService();
//         this.state = {
//             data: {},
//             score: 0,
//         }
//     }
//     //get a new random question from the API and add it to the data object in state
//     getNewQuestion() {
//         return this.client.getQuestion().then(result => {
//             this.setState({
//                 data: result.data[0]
//             })
//         })
//     }
//     handleAnswer = () => {
//         let score = this.score;
//         if (this.state.answer.toLowerCase() === this.state.data.answer.toLowerCase()) {
//             score += this.state.data.value;
//         } else {
//             score -= this.state.data.value;
//         }
//         this.setState({
//             score,
//             answer: ""
//         })
//         this.getNewQuestion()
//     }
//     handleChange = (event) => {
//         let data = { ...this.state };
//         data[event.target.name] = event.target.value;

//         this.setState(data);
//     }
//     //when the component mounts, get a the first question
//     componentDidMount() {
//         this.getNewQuestion();
//     }
//     //display the results on the screen
//     render() {
//         return (
//            <JeopardyPage
//             category={this.state.data.category && this.state.data.category.title}
//            question={this.state.data.question}
//            pv={this.state.data.value}
//            score={this.state.score}
//            answer={this.state.answer}
//            handleChange={this.handleChange}
//            handleAnswer={this.handleAnswer}
//            />

//         );
//     }
// }
// export default Jeopardy;
