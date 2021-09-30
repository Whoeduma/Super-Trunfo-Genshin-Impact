var cartaHutao = {
    nome: "Hu Tao",
    imagem:
      "https://64.media.tumblr.com/3aeaeb102f6f33568aaf04bc0ce58a9e/1398633684f58509-34/s1280x1920/211d91c354fb7eebced2ece61591c2c09dc71afa.jpg",
    atributos: {
      ataque: 95,
      defesa: 68,
      dano: 100
    }
  };
  
  var cartaRaiden = {
    nome: "Shogun Raiden",
    imagem:
      "https://i.pinimg.com/originals/e5/20/33/e52033a0edfdd54b723093755a5ac9b7.jpg",
    atributos: {
      ataque: 86,
      defesa: 44,
      dano: 97
    }
  };
  
  var cartaKazuha = {
    nome: "Kaedehara Kazuha",
    imagem: "https://dfg.ai/itemimages/973358804-kazuha-DICT.jpg",
    atributos: {
      ataque: 98,
      defesa: 82,
      dano: 46
    }
  };
  
  var cartaKlee = {
    nome: "Klee",
    imagem:
      "https://i.pinimg.com/originals/c6/97/d2/c697d2250d136a23d379238a819617d1.jpg",
    atributos: {
      ataque: 88,
      defesa: 54,
      dano: 100
    }
  };
  
  var cartaXingqiu = {
    nome: "Xingqiu",
    imagem:
      "https://64.media.tumblr.com/96c534ebf0e64df166855408a5a0794e/3db15e1be3961e2e-1d/s500x750/f585b7b4cb50e50592941ef6b4f5b31cb51cc2f8.png",
    atributos: {
      ataque: 57,
      defesa: 78,
      dano: 89
    }
  };
  
  var cartaXiangling = {
    nome: "Xiangling",
    imagem:
      "https://i.pinimg.com/originals/12/90/ec/1290ecd3fbc86a9fdf6a87dd37197ce6.jpg",
    atributos: {
      ataque: 85,
      defesa: 67,
      dano: 100
    }
  };
  
  var cartaBennett = {
    nome: "Bennett",
    imagem:
      "https://i.pinimg.com/736x/58/23/2d/58232d8218f7daf795a54d0a6494ddb5.jpg",
    atributos: {
      ataque: 86,
      defesa: 52,
      dano: 70
    }
  };
  
  var cartaZhongli = {
    nome: "Zhongli",
    imagem:
      "https://64.media.tumblr.com/0ab87df4f6f4b138dc902fcdec552f5d/316541eed417a76b-e4/s1280x1920/da40b6b31500c3b77255de53b840ec72f5dc8527.jpg",
    atributos: {
      ataque: 75,
      defesa: 97,
      dano: 63
    }
  };
  
  var cartas = [
    cartaHutao,
    cartaRaiden,
    cartaKazuha,
    cartaKlee,
    cartaXingqiu,
    cartaXiangling,
    cartaBennett,
    cartaZhongli
  ];
  var cartaMaquina = 0;
  var cartaJogador = 0;
  
  //Sortear cartas
  function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * cartas.length);
    cartaMaquina = cartas[numeroCartaMaquina];
    cartas.splice(numeroCartaMaquina, 1);
  
    var numeroCartaJogador = parseInt(Math.random() * cartas.length);
    cartaJogador = cartas[numeroCartaJogador];
    cartas.splice(numeroCartaJogador, 1);
  
    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;
    document.getElementById("btnProximaRodada").disabled = false;
  
    //exibirOpcoes();
    exibirCartaJogador();
  }
  function exibirCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador");
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
    //divCartaJogador.style.backgroundImage = "url("+ cartaJogador.imagem +")"
    var moldura =
      '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes' class='carta-status'>";
  
    var opcoesTexto = "";
    for (var atributo in cartaJogador.atributos) {
      opcoesTexto +=
        "<input type='radio' name='atributo' value='" +
        atributo +
        "'>" +
        atributo +
        " " +
        cartaJogador.atributos[atributo] +
        "<br>";
    }
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;
    divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
  }
  //function exibirOpcoes() {
  //var opcoes = document.getElementById("opcoes");
  //var opcoesTexto = "";
  
  //for (var atributo in cartaJogador.atributos) {
  // opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo;
  // }
  //opcoes.innerHTML = opcoesTexto;
  // }//
  
  function obtemAtributoSelecionado() {
    var radioAtributos = document.getElementsByName("atributo");
  
    for (var i = 0; i < radioAtributos.length; i++) {
      if (radioAtributos[i].checked) {
        return radioAtributos[i].value;
      }
    }
  }
  
  function jogar() {
    var atributoSelecionado = obtemAtributoSelecionado();
    var divResultado = document.getElementById("resultado");
  
    if (
      cartaJogador.atributos[atributoSelecionado] >
      cartaMaquina.atributos[atributoSelecionado]
    ) {
      htmlResultado = "<p class='resultado-final'>Você venceu!</p>";
    } else if (
      cartaMaquina.atributos[atributoSelecionado] >
      cartaJogador.atributos[atributoSelecionado]
    ) {
      htmlResultado =
        "<p class='resultado-final'>Você perdeu, a carta da maquina é maior!</p>";
    } else {
      htmlResultado = "<p class='resultado-final'>Empatou</p>";
    }
    divResultado.innerHTML = htmlResultado;
    document.getElementById("btnJogar").disabled = true;
    exibirCartaMaquina();
  }
  //
  
  function exibirCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina");
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
    //divCartaJogador.style.backgroundImage = "url("+ cartaJogador.imagem +")"
    var moldura =
      '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes' class='carta-status'>";
  
    var opcoesTexto = "";
    for (var atributo in cartaMaquina.atributos) {
      opcoesTexto +=
        "<p type='text' name='atributo' value='" +
        atributo +
        "'>" +
        atributo +
        " " +
        cartaMaquina.atributos[atributo] +
        "</p>";
    }
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;
    divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
  }
  
  function proximaRodada() {
    var divCartasJogador = document.getElementById("carta-jogador");
    var divCartasMaquina = document.getElementById("carta-maquina");
  
    divCartasJogador.innerHTML = "<h3></h3>";
    divCartasJogador.removeAttribute("style");
    divCartasMaquina.innerHTML = "<h3></h3>";
    divCartasMaquina.removeAttribute("style");
    document.getElementById("btnSortear").disabled = false;
    document.getElementById("btnJogar").disabled = true;
    document.getElementById("btnProximaRodada").disabled = true;
  }
  