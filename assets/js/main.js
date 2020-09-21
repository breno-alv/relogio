function relogio(){  //Função Relogio

    function criarHoraDosSegundos(segundos) {  //Função para receber os segundo criar a data e retorna a data 
        const data = new Date(segundos * 1000); // criar a data dos segundos e transformar os segundos em milesimos de segundos
        return data.toLocaleTimeString('pt-BR', { //retornando a hora segundo e minutos
            hour12: false, // Formatando a hora com o time zone correto 
            timeZone: "UTC"
        });
    }
    
    
    const relogio = document.querySelector('.relogio'); //Selecionando o paragrafo relogio (p) do documento no html
    
    let segundos = 0; // Variaveis Global para manter o segundo
    let timer;        // Variaveis Globais
    
    function iniciaRelogio(){ //Iniciando a contagem do Relogio
        timer = setInterval(function(){  //Executando essa functions em 1 em 1 segundos e atualizar a variavel timer
            segundos++; // acrescenta mais 1 na contagem dos segundos
            relogio.innerHTML = criarHoraDosSegundos(segundos); //Atualizando o InnerHTML da tela e mostrando os segundo na tela
        }, 1000); //Contando de 1 em 1 segundo 
    }
    
    document. addEventListener("click", function(e){ //Função para captura as ações nos botões iniciar, pausar e zerar
        const el = e.target;   // Mostrar onde esta sendo clicado no Inspecionar el = Elemento, e = Event.

        if(el.classList.contains("iniciar")){ // Ação do botão Iniciar para começar a contar o nosso relogio
            relogio.classList.remove("pausado");//Remover a classe pausado na cor vermelha quando o botão iniciar for clicado
            clearInterval(timer); //Limpar o evento de atualização da variavel timer
            iniciaRelogio();//Faz com que evite de criar um outro contador iniciando a contagem do mesmo 
          }

          if(el.classList.contains("pausar")){ // Evento para pausar a contagem quando o botão pause for clicado
            clearInterval(timer); //Limpar o evento de atualização da variavel timer
            relogio.classList.add("pausado"); // Adicinar a classe pausado com a cor vermelho
          }
    
        if(el.classList.contains("zerar")){ // Evento para zerar a contagem quando o botão zarar for clicado
            relogio.classList.remove("pausado"); //Remover a classe pausado na cor vermelha quando o botão iniciar for clicado
            clearInterval(timer); //Limpar o evento de atualização da variavel timer
            relogio.innerHTML = "00:00:00"; //Adicionar no paragrafo Relogio (p) os numeros 00:00:00
            segundos = 0; // Quando o botão zerar for precionado a contagem volta a ser 00:00:00
        }    
    });
}

relogio(); //Chamar Função Relogio








