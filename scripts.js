var teform = [[['する', 'して'],['くる','きて']], //g3
              [['いる','て'],['える','て']], //g2
              [['う','って'],['つ','って'],['る','って'],['いく','いって'],['め','んで'],['ぶ','んで'],['む','んで'],['く','いて'],['ぐ','いで'],['す','して']]] //g1

function ConjucationTe(){
    var verb = document.getElementById("verb").value;
    for(var i=0; i<teform[0].length; i++){
        var ending = verb.substr(verb.length - teform[0][i][0].length);
        if(ending == teform[0][i][0]){
            verb = verb.slice(0, -teform[0][i][0].length);
            verb += teform[0][i][1];
        }
    }
    
    for(i=0; i<teform[1].length; i++){
        ending = verb.substr(verb.length - teform[1][i][0].length);
        if(ending == teform[1][i][0]){
            verb = verb.slice(0, -teform[1][i][0].length);
            verb += teform[1][i][1];
        }
    }
    
    for(i=2; i<teform[2].length; i++){
        ending = verb.substr(verb.length - teform[2][i][0].length);
        if(ending == teform[2][i][0]){
            verb = verb.slice(0, -teform[2][i][0].length);
            verb += teform[2][i][1];
        }
    }
    document.getElementById("output").innerHTML = verb;
}