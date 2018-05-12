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
    document.getElementById("Meaning").innerHTML =  card.getElementsByTagName('meaning')[0];
    document.getElementById("ExampleJP").innerHTML =  card.getElementsByTagName('example')[0];
    document.getElementById("ExampleEN").innerHTML =  card.getElementsByTagName('exmeaning')[0];
    document.getElementById("PageNumber").innerHTML = card.getElementsByTagName('page')[0];
    document.getElementById("Notes").innerHTML = card.getElementsByTagName('notes')[0];
    
    //HideAll();
    
    console.log(card);
    console.log(card.getAttribute('grammar'));
}

xml.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        Newcard(0);
    }
};
