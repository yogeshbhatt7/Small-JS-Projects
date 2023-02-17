const data = [
    {
        id: 1,
        question: "Which of these Fish is actually a Fish ?",
        answers: [
            { answer: "SwordFish", isCorrect: true},
            { answer: "JellyFish", isCorrect: false},
            { answer: "StarFish", isCorrect: false},
            { answer: "CrayFish", isCorrect: false},
        ],
    },
    {
        id: 2,
        question: "A Flutter is a group of: ?",
        answers: [
            { answer: "bees", isCorrect: false},
            { answer: "penguins", isCorrect: false},
            { answer: "butterflies", isCorrect: true},
            { answer: "camels", isCorrect: false},
        ],
    },
    {
        id: 3,
        question: "'.INI' extension refers usually to what kind of file ?",
        answers: [
            { answer: "Image File", isCorrect: true},
            { answer: "System File", isCorrect: true},
            { answer: "Hypertext Related File", isCorrect: false},
            { answer: "Image Color Matching Profile file", isCorrect: false},
        ],
    },
    {
        id: 4,
        question: "What is FMD ?",
        answers: [
            { answer: "Fast-Ethernet Measuring Device", isCorrect: false},
            { answer: "Flashing Media Diode", isCorrect: false},
            { answer: "Fluorescent Multi-Layer Disc", isCorrect: true},
            { answer: "Flash Media Driver", isCorrect: false},
        ],
    },
    {
        id: 5,
        question: "What is part of a database that holds only one type of information ?",
        answers: [
            { answer: "Report", isCorrect: false},
            { answer: "File", isCorrect: false},
            { answer: "Record", isCorrect: false},
            { answer: "Field", isCorrect: true},
        ],
    },
];

const gameScreen = document.querySelector(".game")
const resultScreen = document.querySelector(".result")
const question = document.querySelector(".question")
const answersContainer = document.querySelector(".answers")
const submit = document.querySelector(".submit")
const play = document.querySelector(".play")

let qIndex = 0;
let correctCount = 0;
let wrongCount = 0;
let total = 0;
let selectedAnswer;

const playAgain = () =>{
    qIndex = 0;
correctCount = 0;
 wrongCount = 0;
 total = 0;
showQuestion(qIndex);
}

play.addEventListener("click", ()=>{
    resultScreen.style.display = "none";
    gameScreen.style.display = "block"
    playAgain()
})

const showResult = ()=>{
    resultScreen.style.display = "block"
    gameScreen.style.display = "none"

    resultScreen.querySelector(".correct").textContent =
    `Correct Answers: ${correctCount}`

    resultScreen.querySelector(".wrong").textContent =
    `Wrong Answers: ${wrongCount}`

    resultScreen.querySelector(".score").textContent =
    `Score: ${(correctCount - wrongCount) * 10}`
}

const showQuestion = (qNumber) =>{
    if(qIndex === data.length) return showResult();
    selectedAnswer = null;
    question.textContent = data[qNumber].question;
    answersContainer.innerHTML = data[qNumber].answers.map((item, index) =>
        `
        <div class="answer">
        <input name="answer" id=${index} type="radio" value=${item.isCorrect}>
        <label for="1">${item.answer}</label>
    </div>
        `
    ).join(""); 

    selectAnswer()
};

const selectAnswer = ()=>{
    answersContainer.querySelectorAll("input").forEach((el) => {
        el.addEventListener("click", (e) => {
            selectedAnswer = e.target.value;
        })
    })
} 

const submitAnswer = ()=>{
    submit.addEventListener("click", ()=>{
        if(selectedAnswer !== null) {
        selectedAnswer === "true" ? correctCount++ : wrongCount++
        qIndex++
        showQuestion(qIndex)
    }else alert("Select an answer!");
})
}



showQuestion(qIndex);
submitAnswer()


























