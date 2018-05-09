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

var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        console.log("test2");
        document.getElementById("Title").innerHTML = "test2: "+xhttp.responseXML.getElementsByTagName("card")[0].nodeValue;
    }
  };

xhttp.open("GET", "content.xml", true);
xhttp.send();