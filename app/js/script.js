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



function GerarSenha(){
    
    var contador_valida = 0;
    var alfabeto;
    var somaalfabeto = [''];
    var resultado_gerado = "";
    
    var recebe_tamanho = document.getElementById("item-input").value;
    var checkbox_minusculo = document.getElementById("checkbox1").checked;
    var checkbox_maiusculo = document.getElementById("checkbox2").checked;
    var checkbox_especial = document.getElementById("checkbox3").checked;
    var checkbox_numero = document.getElementById("checkbox4").checked;

    if(recebe_tamanho >= 0 && recebe_tamanho != null){

    }else{
        recebe_tamanho = 10;
    }

    if(!checkbox_minusculo == true && checkbox_maiusculo == false && checkbox_especial == false && checkbox_numero == false){
        alfabeto = ['a','b','c','d','e','f','g','h','i','j','l','m','n','o','p','q','r','s','t','u','v','x','z','w','y','k'];
        somaalfabeto = somaalfabeto.concat(alfabeto);
        contador_valida++;   
    }

    if(checkbox_minusculo == true){
    	alfabeto = ['a','b','c','d','e','f','g','h','i','j','l','m','n','o','p','q','r','s','t','u','v','x','z','w','y','k'];
        somaalfabeto = somaalfabeto.concat(alfabeto);
        contador_valida++;   
    }

    if(checkbox_maiusculo == true){
    	alfabeto = ['A','B','C','D','E','F','G','H','I','J','L','M','N','O','P','Q','R','S','T','U','V','X','Z','W','Y','K'];
        somaalfabeto = somaalfabeto.concat(alfabeto);
        contador_valida++;   
    }

    if(checkbox_especial == true){
    	alfabeto = ['!','@','#','$','%','&','*','(',')','+','-','{','}','[',']','|','=',';','/'];
        somaalfabeto = somaalfabeto.concat(alfabeto);
        contador_valida++;   
    }

    if(checkbox_numero == true){
    	alfabeto = ['0','1','2','3','4','5','6','7','8','9'];
        somaalfabeto = somaalfabeto.concat(alfabeto);
        contador_valida++;
    }

    var suporte;
    for(var i = 1; i <= parseInt(recebe_tamanho); i++){
       
        suporte = somaalfabeto[Math.floor(Math.random() * somaalfabeto.length)];
        if(suporte != ""){
            resultado_gerado = resultado_gerado + suporte;
        }else{

            suporte = somaalfabeto[Math.floor(Math.random() * somaalfabeto.length)];           
            if(suporte != ""){
               resultado_gerado = resultado_gerado + suporte;
            }else{
               suporte = somaalfabeto[Math.floor(Math.random() * somaalfabeto.length)];
               resultado_gerado = resultado_gerado + suporte;
            }

        }

       

    }
    
    document.getElementById("item-resultado").innerHTML = "" + resultado_gerado;

}

document.getElementById("botaogerar").addEventListener("click", function(){
    
    GerarSenha();

});




