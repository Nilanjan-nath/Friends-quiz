

import readlineSync from 'readline-sync';

import chalk from "chalk";

var user_name = readlineSync.question(chalk.yellow("What is your name?"));
console.log(chalk.blue.bold("HI "+chalk.red(user_name)+ " welcome to the F.R.I.E.N.D.S quiz!"));
var score=0;
var question_list =[{
    question: "What form of self defense does Ross try to trech Rachel and Phoebe?",
    options: ["Mixed Martial Arts",
              "Karate",
              "kung-fu",
              "Unagi"],
    answer: "d",
    explanation: "Ross try to teach unagi but he got beaten miserably..."
},
{
    question: "What is the name of Joey's stuffed penguin?",
    options: ["Pugsy",
              "Hugsy",
              "Lugsy",
              "cutipie"],
    answer: "b",
    explanation: "Emma try to steal "+chalk.red.underline("hugsy") +" from joey and it makes him upset..."
},
{
    question: "What caused the fire at Rachel and Phoebe's apartment?",
    options: ["Rachel's hair straightener.",
              "Pheobe's hair straightener.",
              "A candle",
              "curling iron"],
    answer: "a",
    explanation: "Rachel's hair straightner caused the fire after that Pheobe get to stay at Monica's apartment as her guest..."
},
{
    question: "How many sisters does Joey have?",
    options: ["5",
              "6",
              "8",
              "7"],
    answer: "d",
    explanation: "Joey has 7 sisters,Chandler Kisses one of Joye's sister and forgot later on..."
},
{
    question: "What do Monica and Chandler name their twins?",
    options: ["Erica and Jack",
              "Emma and Jack",
              "Amy and Jack",
              "Pheobe and Ross"],
    answer: "a",
    explanation: "Its Erica and Jack"
},
{
    question: " Which character famously said, PIVOT?",
    options: ["Chandler",
              "Ross",
              "Phoebe",
              "Richard"],
    answer: "b",
    explanation: "Ross have this habit..."
},
{
    question: " Who was (accidentally) Monica's first kiss?",
    options: ["Chandler",
              "Ross",
              "A guy from her college",
              "Rachel"],
    answer: "b",
    explanation: "Her brother Ross was her accidental first kiss.."
},
{
    question: " What was the name of Ross and Monica's dog when they were kids?",
    options: [" Chi-Chi.",
              "chi-chu",
              "Rocky",
              "DA-DA"],
    answer: "a",
    explanation: "Chi-chi"
},
{
    question: "Where did Ross and Rachel have their first date?",
    options: [" The zoo",
              "The cafe",
              " The planetarium",
              "In a fancy hotel"],
    answer: "c",
    explanation: "It was in the planetarium where Ross used to work at that time and he needed to do overtime..."
},
{
    question: "How many pages was Rachel's letter to Ross?",
    options: [" 17 pages(front and back)",
              "15 pages(front and back)",
              "18 pages(front and back)",
              "10 pages"],
    answer: "c",
    explanation: "Ross said the reason he could not finish the letter because it was too long and yelled It has 18 pages(front and back)"
},
]
function play(question,arr, answer,explanation){
    console.log(chalk.rgb(123,45,67).underline(question));
    console.log(chalk.green("Your options are: "));
    for(var j=0; j<arr.length; j++){
        console.log(String.fromCharCode(j+97)+"."+arr[j])
    }
    var user_answer = readlineSync.question(chalk.red("Enter your answer: \n"));
    if (user_answer.toLowerCase()===answer.toLowerCase()){
        console.log(chalk.magenta("Hurray!, Its right"));
        score+=1;
    }
    else{
        console.log(chalk.red("OOPs!wrong answer"))
       console.log(explanation);
    
    }
    
}
for(var i=0; i<question_list.length; i++){
    console.log("q"+(i+1)+": ");
    
   play(question_list[i].question, question_list[i].options,question_list[i].answer,question_list[i].explanation);

}
console.log("You scored: "+score+" out of "+question_list.length);