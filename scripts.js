var xml = new XMLHttpRequest();
xml.open("GET", "content.xml", true);
xml.send();

function HideAll(){
    document.getElementById("Meaning").style.display = "none";
    document.getElementById("ExampleEN").style.display = "none";
    document.getElementById("Notes").style.display = "none";
}

function ShowAll(){
    document.getElementById("Meaning").style.display = "block";
    document.getElementById("ExampleEN").style.display = "block";
    document.getElementById("Notes").style.display = "block";
}

function Newcard(cardID){
    var xmlDoc = xml.responseXML;
    var card = xmlDoc.getElementsByTagName('card')[0];
    document.getElementById("Grammar").innerHTML = card.getElementsByTagName('grammar')[0];
    document.getElementById("Meaning").innerHTML =  card.getAttribute('meaning');
    document.getElementById("ExampleJP").innerHTML =  card.getAttribute('example');
    document.getElementById("ExampleEN").innerHTML =  card.getAttribute('exmeaning');
    document.getElementById("PageNumber").innerHTML = card.getAttribute('page');
    document.getElementById("Notes").innerHTML = card.getAttribute('notes');
    
    HideAll();
}

xml.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        Newcard(0);
    }
};
