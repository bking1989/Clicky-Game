import React from "react";
import Header from "./components/header";
import Wrapper from "./components/wrapper";
import Row from "./components/row";
import Card from "./components/card";

// Define our pre-determined list of characters and empty shuffle array
const charArr = ["Ned Stark", "Arya Stark", "Sansa Stark", "Jon Snow", "Joffrey Baratheon", "Cersei Lannister", "Tyrion Lannister", "Petyr Baelish", "Daenarys Targaryen"];
let shuffleArr = [];

// Empty our shuffle array, map the character array into the shuffle array, then sort randomly
const shuffle = (arr) => {
    shuffleArr.length = 0;
    shuffleArr = arr.map((element) => element)
                    .sort(() => {return 0.5 - Math.random()});
}

// Function for handling card clicks
const handleCardClick = (e) => {
    e.preventDefault();

    let val = e.target.dataset.value;
    console.log(val);
}

function App() {
    shuffle(charArr);

    return (
        <div>
            <Header />
            <Wrapper>
                <Row>
                    <Card value={shuffleArr[0]} onClick={handleCardClick} />
                    <Card value={shuffleArr[1]} />
                    <Card value={shuffleArr[2]} />
                </Row>
                <Row>
                    <Card value={shuffleArr[3]} />
                    <Card value={shuffleArr[4]} />
                    <Card value={shuffleArr[5]} />
                </Row>
                <Row>
                    <Card value={shuffleArr[6]} />
                    <Card value={shuffleArr[7]} />
                    <Card value={shuffleArr[8]} />
                </Row>
            </Wrapper>
        </div>
    );
};

export default App;