var grammar = document.getElementById("Grammar");
var example = document.getElementById("Example");
var english = document.getElementById("English");
var notes = document.getElementById("Notes");
var button = document.getElementById("Button");

example.onclick = function() {
    document.getElementById("ExampleText").style.visibility = 'visible';
};

english.onclick = function() {
    document.getElementById("EnglishText").style.visibility = 'visible';
};

notes.onclick = function() {
    document.getElementById("NotesText").style.visibility = 'visible';
};

var xml = new XMLHttpRequest();

xml.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        LoadCard();
    }
};

function LoadCard(){
    var xmlDoc = xml.responseXML;
        var cardCount = xmlDoc.getElementsByTagName("card").length;
        var cardID = Math.floor(Math.random() * (cardCount-1));
        
        var grammar = xmlDoc.getElementsByTagName("grammar")[cardID].childNodes[0].nodeValue;
        var example = xmlDoc.getElementsByTagName("example")[cardID].childNodes[0].nodeValue;
        var exampleAnswer = xmlDoc.getElementsByTagName("exampleAnswer")[cardID].childNodes[0].nodeValue;
        var english = xmlDoc.getElementsByTagName("english")[cardID].childNodes[0].nodeValue;
        var notes = xmlDoc.getElementsByTagName("notes")[cardID].childNodes[0].nodeValue;
    
        var level = xmlDoc.getElementsByTagName("level")[cardID].childNodes[0].nodeValue;
        
        switch(level){
                case "N3":
                grammar.style.backgroundColor = 'yellow';
            case "N4":
                grammar.style.backgroundColor = 'blue';
                break;
            default:
                grammar.style.backgroundColor = 'green';
        }
        
        
        document.getElementById("GrammarTitle").innerHTML = grammar;
        document.getElementById("ExampleTitle").innerHTML = example;
        document.getElementById("ExampleText").innerHTML = exampleAnswer;
        document.getElementById("EnglishText").innerHTML = english;
        document.getElementById("NotesText").innerHTML = notes;
}

xml.open("GET", "content.xml", true);
xml.send();