import React from "react";
import Header from "./components/header";
import Wrapper from "./components/wrapper";
import Row from "./components/row";
import Card from "./components/card"; 

class App extends React.Component {
    // Define our state
    constructor(props) {
        super(props);
        this.state = {
            highScore: 0,
            currentScore: 0,
            previousClicks: []
        }
    }
    
    render() {
        // Establish character array and set up shuffle array
        const charArr = ["Ned Stark", "Arya Stark", "Sansa Stark", "Jon Snow", "Joffrey Baratheon", "Cersei Lannister", "Tyrion Lannister", "Petyr Baelish", "Daenarys Targaryen"];
        let shuffleArr = [];

        // Create function for resetting, then filling our shuffle array
        const shuffle = (arr) => {
            shuffleArr.length = 0;
            shuffleArr = arr.map((element) => element).sort(() => {return 0.5 - Math.random()});
        }

        const cardClick = (e) => {
            e.preventDefault();
            let val = e.target.getAttribute("value");

            if (this.state.previousClicks.indexOf(val) > -1) {
                if (this.state.currentScore > this.state.highScore) {
                    this.setState({ highScore: this.state.currentScore });
                    this.setState({ previousClicks: [] });
                    this.setState({ currentScore: 0 });
                } else {
                    this.setState({ previousClicks: [] });
                    this.setState({ currentScore: 0 });
                }
            }

            if (this.state.previousClicks.indexOf(val) === -1) {
                this.setState({ previousClicks: [...this.state.previousClicks, val] });
                this.setState({ currentScore: this.state.currentScore + 1 });
            }
        }

        // Create our shuffle array
        shuffle(charArr);

        return (
            <div>
                <Header currentScore={this.state.currentScore} highScore={this.state.highScore} />
                <Wrapper>
                    <Row>
                        {shuffleArr.slice(0,3).map((card) => <Card value={card} key={card.toString()} onClick={cardClick} />)}
                    </Row>
                    <Row>
                        {shuffleArr.slice(3,6).map((card) => <Card value={card} key={card.toString()} onClick={cardClick} />)}
                    </Row>
                    <Row>
                        {shuffleArr.slice(6,9).map((card) => <Card value={card} key={card.toString()} onClick={cardClick} />)}
                    </Row>
                </Wrapper>
            </div>
        )
    }
};

export default App;