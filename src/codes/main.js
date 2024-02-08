function contar(){
    var form_inicio = document.querySelector('#inicio').value
    var form_fim = document.querySelector('#fim').value
    var ordem_pulo = document.querySelector('#pulo').value
    var text_saida = document. querySelector("#res")
    var div_saida = document.querySelector('#saida')
    var text_contagem = document.querySelector('#texto_contagem')
    
    var init_contagem = Number(form_inicio)
    var end_contagem = Number(form_fim)
    var salto = Number(ordem_pulo)

    //Tratamento de exceções
    if(init_contagem == 0 || end_contagem == 0){
            alert('ERRO REVEJA OS VALORES')
    }

    //Se tudo estiver OK
    else{
        if(salto == 0){
            salto = 1
            alert('SALTO NÃO PODE SER 0, SERÁ 1 PORTANTO')
        }

        /*
        Caso o inicio da contagem for maior que o fim 
        ele irá decrementar o valor do inicio com o valor do pulo 
        da contagem
        */ 
        if(init_contagem > end_contagem){
            text_saida.innerHTML = 'Contando ... <br>'
            while(init_contagem > end_contagem){
                //Irá adicionar o valor da contagem na tag <p> 
                text_saida.innerHTML += `${init_contagem} \u{2764}`
                //Decremento
                init_contagem -= salto
            }
        }

        /*
        Caso o inicio da contagem for menor que o fim 
        o valor de inicio será incremetado com o valor 
        da ordem de pulo
        */
        else{
            text_saida.innerHTML = `Contando ... <br>`
            while(init_contagem <= end_contagem){
                //Irá adicionar o valor da contagem na tag <p> 
                text_saida.innerHTML += `${init_contagem} \u{2764} `
                //Incremento
                init_contagem =  init_contagem + salto   
            } 
        }
        text_saida.innerHTML += ' <br>\u{1F4A5}'
    }
}

