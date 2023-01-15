// store questions with answers as objects 
let questions = [
    { question: "How to call a function?", answers: ["call(function-name)", "function-name.call", "function-name", "function-name()"], correctIs: 3 },
    { question: "Which one is Object", answers: ["[]", "{[]}", "[[]]", "()"], correctIs: 1 },
    { question: "What does this do - % ? ", answers: ["Exponentiation", "Increment", "Percentages", "Modulus (Division Remainder)"], correctIs: 3 },
    { question: "How many data types does Js has ? ", answers: ["5", "10", "8", "13"], correctIs: 2 },
    { question: "Which one if wrong ?", answers: ["if", "switch", "what if", "else if"], correctIs: 2 },
    { question: "How to stop js function?", answers: ["stop", "return", "done", "any of these! "], correctIs: 1 },
    { question: "how to select ID from html file ? ", answers: ["$", "#", "*", "&"], correctIs: 1 },
    { question: "How to get whole number ? ", answers: [".whole", ".even", ".floor", ".ceiling"], correctIs: 2 },

]
// keep the track of current question ! 
let currentQuestion = 0;
// get ID's of html elements we want to update (put the questions and choices inside)
let questionTitleEl = document.querySelector("#question-title");
let choicesEl = document.querySelector("#choices")
// reacts to start button being pressed ! 
document.getElementById("start").addEventListener("click", function () {
    buildQuestion()
})
let = allDone = false
function buildQuestion() {
    if (currentQuestion < questions.length) {
        // Clear any existing choices
        choicesEl.innerHTML = "";
        // Getting the current question
        let currentQuestionObj = questions[currentQuestion];
        // Make the "question-title" display out current question ! 
        questionTitleEl.textContent = currentQuestionObj.question;
        // Loop through the answers array and create buttons for each one
        currentQuestionObj.answers.forEach(function (answer, index) {
            // Create a new button element
            let choiceButton = document.createElement("button");
            // Make the content of the button to the answer
            choiceButton.textContent = answer;
            // Give a "data-index" attribute on the button so we can track which one was clicked
            choiceButton.setAttribute("data-index", index);
            // listen to answers selected 
            choiceButton.addEventListener("click", function (e) {
                // variable takes on selected choice data-index that we created for each answer 
                let choiceIndex = e.target.dataset.index
                // compares does the data-index is same as the correctIs value
                let questionAnswer = currentQuestionObj.correctIs

                if (choiceIndex == questionAnswer) {
                    console.log("Correct")

                }
                else {
                    console.log("Wrong")
                    time -= 10;
                }
                currentQuestion++;
                buildQuestion()
            })
            // Add the button to the choices element
            choicesEl.appendChild(choiceButton)
        })
    }
    else {
        console.log("Done!")
        document.getElementById("questions").className = "hide"
        document.getElementById("end-screen").classList.remove("hide")
        allDone = true
    }
}
let totalScore
// this makes time and number
let time = document.getElementById("time").innerHTML
// this will remove 1 per second from time ID  and will start when we press start
document.getElementById("start").addEventListener("click", function () {
    document.getElementById("start-screen").className = "hide"
    document.getElementById("questions").classList.remove("hide")

    timer = setInterval(function () {
        time--;
        document.getElementById("time").innerHTML = time;
        if (allDone || time === 0) {
            clearInterval(timer);
            // totalScore = time;
            document.getElementById("final-score").innerText = time;
            document.getElementById("questions").className = "hide"
            document.getElementById("end-screen").classList.remove("hide")
        }
    }, 1000)

})
// localStorage.setItem("finalScore", totalScore);
// document.getElementById("final-score").innerText = totalScore;


