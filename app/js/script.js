function GerarSenha(tamanho, checkbox_minusculo, checkbox_maiusculo, checkbox_especial, checkbox_numero){
    
    var contador_valida = 0;
    var alfabeto;

    if(tamanho > 0){

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

}