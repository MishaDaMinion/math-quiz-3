player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;


console.log(player1_name);
console.log(player2_name);

document.getElementById("title1").innerHTML = player1_name + ": " + player1_score;
document.getElementById("title2").innerHTML = player2_name + ": " + player2_score;

document.getElementById("question").innerHTML = "Question turn : " + player1_name;
document.getElementById("answer").innerHTML = "Answer turn : " + player2_name;



function send(){
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actual_answer = parseInt(number1) * parseInt(number2);

    
question_number = "<h4>" + number1 + "X" + number2 +"</h4>"
input_box = "<br>Answer : <input type='text' id='input_check_box'>";
check_button ="<br><br><button class='btn btn-warning' onclick='check()'>Check!</button>";
row = question_number + input_box + check_button;

document.getElementById("output").innerHTML = row;
document.getElementById("number1").value="";
document.getElementById("number2").value="";

}