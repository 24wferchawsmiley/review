function getData() {
    var place = document.getElementById("place").value;
    var person = document.getElementById("person").value;
    var verb = document.getElementById("verb").value;
    var adj = document.getElementById("adj").value;
    var adverb = document.getElementById("adverb").value;


    document.getElementById("sentence").innerHTML = sentences(verb, adverb, person, place, adj);

    //          0              1         2      3     4
}

function sentences(verb, adverb, person, place, adj) {
    sentenceArray = [`Today I had to ${verb} ${adverb}. But right in the middle of it, ${person} came with this ${adj} book and wanted to go to ${place}`, `${person} was in ${place} trying to ${verb}. However, ${person} left a ${adj} shirt behind, while crying ${adverb}.`, `It's been a long time since ${person} decided to ${verb} in ${place}. What some people said was that ${person} screamed "This strawberry is ${adj}!! We thought ${person} went crazy.`]

    ranN = Math.floor(Math.random() * sentenceArray.length)     /// 0 to 2

    return sentenceArray[ranN];

}

// Second Game

var a = [1, 2, 4, 9]


var wordArr = [
    {
        word: "dog",
        hint: "company you keep at home"
    },
    {
        word: "place",
        hint: "Somewhere you are at any time"
    },
    {
        word: "tree",
        hint: "It grows from the ground"
    },
    {
        word: "computer",
        hint: "you're using it right now"
    }
]

var rN = Math.floor(Math.random() * wordArr.length);

var word = wordArr[rN].word;
var hint = wordArr[rN].hint;
document.getElementById("word").innerHTML = word;
document.getElementById("hint").innerHTML = hint;
var w = document.getElementById("word");
var correct = []
var counter = word.length + 2;

document.getElementById("wrong").innerHTML = counter;


var splitWord = word.split("");

var emptySplitWord = [];

console.log(splitWord)

for (i = 0; i < splitWord.length; i++) {
    emptySplitWord[i] = "_"
    console.log(emptySplitWord);
    w.innerHTML = emptySplitWord.join(" ")
}



//get Letter
function enterLetter() {
    var letter = document.getElementById("letter").value;

    for (x = 0; x < splitWord.length; x++) {
        if (letter == splitWord[x]) {
            emptySplitWord[x] = letter;
            w.innerHTML = emptySplitWord.join(" ");
            document.getElementById("letter").value = "";
            correct.push(1);
        }else {
            document.getElementById("letter").value = "";
        }
    }

    if (correct.length == emptySplitWord.length) {
        alert("THE END")
    } else if (counter > 1) {
        counter -= 1;
        document.getElementById("wrong").innerHTML = counter
    } else if (counter == 1) {
        alert("you lost")

    }

}