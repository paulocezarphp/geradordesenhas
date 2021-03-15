document.getElementById("check1").addEventListener("click", function(){
    if(document.getElementById("checkbox1").checked == false){
        document.getElementById("checkbox1").checked = true;
    }else{
        document.getElementById("checkbox1").checked = false;
    }
});

document.getElementById("check2").addEventListener("click", function(){
    if(document.getElementById("checkbox2").checked == false){
        document.getElementById("checkbox2").checked = true;
    }else{
        document.getElementById("checkbox2").checked = false;
    }
});

document.getElementById("check3").addEventListener("click", function(){
    if(document.getElementById("checkbox3").checked == false){
        document.getElementById("checkbox3").checked = true;
    }else{
        document.getElementById("checkbox3").checked = false;
    }
});

document.getElementById("check4").addEventListener("click", function(){
    if(document.getElementById("checkbox4").checked == false){
        document.getElementById("checkbox4").checked = true;
    }else{
        document.getElementById("checkbox4").checked = false;
    }
});

document.getElementById("check4").addEventListener("click", function(){
    if(document.getElementById("checkbox4").checked == false){
        document.getElementById("checkbox4").checked = true;
    }else{
        document.getElementById("checkbox4").checked = false;
    }
});

function GerarSenha(tamanho, checkbox_minusculo, checkbox_maiusculo, checkbox_especial, checkbox_numero){
    
    var recebe_tamanho = tamanho;
    var contador_valida = 0;
    var alfabeto;
    var resultado_gerado = "";

    if(recebe_tamanho > 0 && recebe_tamanho != null){

    }else{
        recebe_tamanho = 10;
    }

    if(!checkbox_minusculo == true){
        var alfabeto = ['a','b','c','d','e','f','g','h','i','j','l','m','n','o','p','q','r','s','t','u','v','x','z','w','y','k'];
        contador_valida++;   
    }

    if(checkbox_minusculo == true){
    	var alfabeto = ['a','b','c','d','e','f','g','h','i','j','l','m','n','o','p','q','r','s','t','u','v','x','z','w','y','k'];
        contador_valida++;   
    }

    if(checkbox_maiusculo == true){
    	var alfabeto = ['A','B','C','D','E','F','G','H','I','J','L','M','N','O','P','Q','R','S','T','U','V','X','Z','W','Y','K'];
        contador_valida++;   
    }

    if(checkbox_especial == true){
    	var alfabeto = ['!','@','#','$','%','&','*','(',')','+','-','{','}','[',']','|','=',';','/'];
        contador_valida++;   
    }

    if(checkbox_numero == true){
    	var alfabeto = ['0','1','2','3','4','5','6','7','8','9'];
        contador_valida++;
    }

    if(contador_valida == 0){
        tamanho = 10;
    }

    for(var i = 0; i <= recebe_tamanho; i++){
       resultado_gerado = resultado_gerado + "" + alfabeto[Math.floor(Math.random() * alfabeto.length)];
    }
    
    document.getElementById("item-resultado").innerHTML = "" + resultado_gerado;

}

document.getElementById("botaogerar").addEventListener("click", function(){
    
    GerarSenha();


});




