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
    document.getElementById("Grammar").innerHTML = card.getAttribute('grammar');
    document.getElementById("Meaning").innerHTML =  card.getAttribute('meaning');
    document.getElementById("ExampleJP").innerHTML =  card.getAttribute('exampleJP');
    document.getElementById("ExampleEN").innerHTML =  card.getAttribute('exampleEN');
    document.getElementById("PageNumber").innerHTML = card.getAttribute('page');
    document.getElementById("Notes").innerHTML = card.getAttribute('notes');
    
    //HideAll();
    
    console.log(card);
    console.log(card.getAttribute('grammar'));
}

xml.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        Newcard(0);
    }
};
