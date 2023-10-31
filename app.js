
function chooseRandom(){
    let words = document.getElementById("textarea").value.split(" ");
    document.getElementById("result").value =
    words[Math.floor(Math.random() * words.length)];
}