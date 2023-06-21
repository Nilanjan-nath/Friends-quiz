

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
    answer: "unagi",
    explanation: "Ross try to teach unagi but he got beaten miserably..."
},
{
    question: "What is the name of Joey's stuffed penguin?",
    options: ["Pugsy",
              "Hugsy",
              "Lugsy",
              "cutipie"],
    answer: "hugsy",
    explanation: "Emma try to steal "+chalk.red.underline("hugsy") +" from joey and it makes him upset..."
},
{
    question: "What caused the fire at Rachel and Phoebe's apartment?",
    options: ["Rachel's hair straightener",
              "Pheobe's hair straightener.",
              "A candle",
              "curling iron"],
    answer: "rachel's hair straightener",
    explanation: "Rachel's hair straightner caused the fire after that Pheobe get to stay at Monica's apartment as her guest..."
},
{
    question: "How many sisters does Joey have?",
    options: ["5",
              "6",
              "8",
              "7"],
    answer: 7,
    explanation: "Joey has 7 sisters,Chandler Kisses one of Joye's sister and forgot later on..."
},
{
    question: "What do Monica and Chandler name their twins?",
    options: ["Erica and Jack",
              "Emma and Jack",
              "Amy and Jack",
              "Pheobe and Ross"],
    answer: "erica and jack",
    explanation: "Its Erica and Jack"
},
{
    question: " Which character famously said, PIVOT?",
    options: ["Chandler",
              "Ross",
              "Phoebe",
              "Richard"],
    answer: "ross",
    explanation: "Ross have this habit..."
},
{
    question: " Who was (accidentally) Monica's first kiss?",
    options: ["Chandler",
              "Ross",
              "A guy from her college",
              "Rachel"],
    answer: "ross",
    explanation: "Her brother Ross was her accidental first kiss.."
},
{
    question: " What was the name of Ross and Monica's dog when they were kids?",
    options: ["Chi-Chi",
              "chi-chu",
              "Rocky",
              "DA-DA"],
    answer: "chi-chi",
    explanation: "Chi-chi"
},
{
    question: "Where did Ross and Rachel have their first date?",
    options: [" The zoo",
              "The cafe",
              "The planetarium",
              "In a fancy hotel"],
    answer: "the planetarium",
    explanation: "It was in the planetarium where Ross used to work at that time and he needed to do overtime..."
},
{
    question: "How many pages was Rachel's letter to Ross?",
    options: [" 17 pages(front and back)",
              "15 pages(front and back)",
              "18 pages(front and back)",
              "10 pages"],
    answer: "18 pages(front and back)",
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
    // if the user types the option letter...
    if (user_answer ==='a'||user_answer === 'b' ||user_answer === 'c' ||user_answer === 'd'){
        //converting the given option to the actual answer...
       var converted_user_answer = arr[user_answer.charCodeAt(0)-97];
       
       // checking if the answer is a number or not
       if(isNaN(converted_user_answer )){
        converted_user_answer  = converted_user_answer.toLowerCase()
       }
       else{
        converted_user_answer = parseInt(converted_user_answer );
       }
       //compairing the answer...
       if(converted_user_answer ===answer){
        console.log("Horray!, You are right")
        score+=1;
       
       }
       else{
        console.log("OOps! you are wrong");
        console.log(explanation);
        
       }
       return
    }
    
    //If the user types the real answer...
    if (isNaN(user_answer)){
        user_answer = user_answer.toLowerCase();
    }
    else{
        user_answer = parseInt(user_answer);
    }
    if (user_answer===answer){
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