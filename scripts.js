var grammar = document.getElementById("Grammar");
var example = document.getElementById("Example");
var english = document.getElementById("English");
var definition = document.getElementById("Definition");

grammar.onclick = function() {
    document.getElementById("grammarText").style.visibility = 'visible';
};

example.onclick = function() {
    document.getElementById("exampleText").style.visibility = 'visible';
};

english.onclick = function() {
    document.getElementById("meaningText").style.visibility = 'visible';
};

definition.onclick = function() {
    document.getElementById("definitionText").style.visibility = 'visible';
};

var xml = new XMLHttpRequest();

xml.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var xmlDoc = xml.responseXML;
        var cardCount = xmlDoc.getElementsByTagName("card").count;
        var cardID = 1;
        var grammar = xmlDoc.getElementsByTagName("grammar")[cardID].childNodes[0].nodeValue;
        document.getElementById("Grammar").innerHTML = grammar + " cardcount: "+cardCount; 
    }
};

xml.open("GET", "content.xml", true);
xml.send();