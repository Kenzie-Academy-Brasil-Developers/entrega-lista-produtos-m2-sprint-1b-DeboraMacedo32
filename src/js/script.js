// seu código aqui

let produtosLista = document.querySelector(".containerListaProdutos ul");
let botoesNav     = document.querySelector("#botoesContainer")
let secaoCarrinho = document.querySelector(".carrinho__lista")
let qtdeCarrinhoCompra = document.querySelector(".qtdCarrinho")
let totalCarrinho = document.querySelector(".valorCarrinho")

botoesNav.addEventListener("click", function(event){
  
  if(event.target.id == "horto"){
    let filtroCategoria = produtos.filter(function(obj){
      return obj.secao == "Hortifruti"})
    
    listarProdutos(filtroCategoria, produtosLista)

  }
  else if(event.target.id == "pani"){
    let filtroCategoria = produtos.filter(function(obj){
      return obj.secao == "Panificadora"})
    
      listarProdutos(filtroCategoria, produtosLista)
  }
  else if(event.target.id == "lati"){
    let filtroCategoria = produtos.filter(function(obj){
      return obj.secao == "Laticinio"})
    
      listarProdutos(filtroCategoria, produtosLista)
  }
  else {
    listarProdutos(produtos,produtosLista)

  }
})


function listarProdutos(arrProdutos, secaoProduto){
 
  secaoProduto.innerHTML = ""
 
  for(let i = 0; i < arrProdutos.length;i++){
   
    let card = criarCardProduto(arrProdutos[i])
    
    secaoProduto.append(card)
  }
 
}
listarProdutos(produtos, produtosLista);


function criarCardProduto(produto){
 
 let nomeCard          = produto.nome
 let precoCard         = produto.preco
 let secaoCard         = produto.secao
 let imgCard           = produto.img
 let componentesCard   = produto.componentes
 let id                = produto.id
 
 let li       = document.createElement("li");
 let imge     = document.createElement("img");
 let tituloH3 = document.createElement("h3");
 let tagSpan  = document.createElement("span");
 let tagP     = document.createElement("p");
 let btnCompra = document.createElement("button");
 let ol        = document.createElement("ol");
 let tagliOl   = document.createElement("li");
 let tagliOl_1  = document.createElement("li");
 let tagliOl_2  = document.createElement("li");
 let tagliOl_3  = document.createElement("li");
 let divCard   = document.createElement("div")

 imge.src               = imgCard;
 imge.alt               = nomeCard;
 tituloH3.innerText     = nomeCard;
 tagP.innerText         = secaoCard;
 tagSpan.innerText      = `R$ ${precoCard}.00`;
 tagliOl.innerText      = `${componentesCard[0]}`; 
 tagliOl_1.innerText    = `${componentesCard[1]}`;
 tagliOl_2.innerText    = `${componentesCard[2]}`;
 tagliOl_3.innerText    = `${componentesCard[3]}`;
 tagSpan.classList.add("preco_produto")
 btnCompra.innerText    = `Comprar`
 btnCompra.setAttribute("id",id);
 
 ol.append(tagliOl, tagliOl_1,tagliOl_2, tagliOl_3);
 li.append(imge,tituloH3,tagP,ol);
 li.appendChild(divCard)
 divCard.append(tagSpan,btnCompra)

 return li

}


function listarProdutoCarrinho(arrCar){
   
  secaoCarrinho.innerHTML = ""
     for(let i = 0; i< arrCar.length;i++){

      let produtoCarrinho = arrCar[i]

      const cardCarrinho = criarCardCarrinho(produtoCarrinho)
    
      secaoCarrinho.appendChild(cardCarrinho)
     }
  
}


function criarCardCarrinho(produtosCarrinho,i){
 
  let imgCardCarrinho         = produtosCarrinho.img
  let nomeProdutoCardCarrinho = produtosCarrinho.nome
  let secaoCardCarrinho       = produtosCarrinho.secao
  let precoCardCarrinho       = produtosCarrinho.preco
  
  let tagLiCarrinho       = document.createElement("li");
  let tagFigureCarrinho   = document.createElement("figure");
  let tagImgCarrinho      = document.createElement("img");
  let tagH3Carrinho       = document.createElement("h3");
  let tagSpanCarrinho     = document.createElement("span");
  let tagPCarrinho        = document.createElement("p");
  let btnRemove           = document.createElement("button")
  let imgLixeira          = document.createElement("img")
  let divCarrinho         = document.createElement("div");
  let divCarrinho2        = document.createElement("div");
  let divCarrinho3        = document.createElement("div");
  let divCarrinhoLixeira  = document.createElement("div");
   
  tagImgCarrinho.src        = imgCardCarrinho;
  tagImgCarrinho.alt        = nomeProdutoCardCarrinho;
  tagH3Carrinho.innerText   = nomeProdutoCardCarrinho;
  tagSpanCarrinho.innerText = secaoCardCarrinho;
  tagPCarrinho.innerText    = `R$ ${precoCardCarrinho}.00`;
  imgLixeira.src            = `./src/img/trash.png`
  imgLixeira.alt            = "Lixeira"
  btnRemove.setAttribute("id",i)
  
  divCarrinho3.classList.add("carrinho__DivPai")
  divCarrinho2.classList.add("carrinho__itens");
  divCarrinhoLixeira.classList.add("carrinho__btn")

  tagFigureCarrinho.appendChild(tagImgCarrinho)
  divCarrinho.append(tagFigureCarrinho)
  tagLiCarrinho.append(divCarrinho3,divCarrinho,divCarrinho2, divCarrinhoLixeira);
  divCarrinho3.append(divCarrinho, divCarrinho2)
  divCarrinho2.append(tagH3Carrinho,tagSpanCarrinho,tagPCarrinho)
  divCarrinhoLixeira.appendChild(btnRemove)
  btnRemove.appendChild(imgLixeira)
   
 return tagLiCarrinho;
}

produtosLista.addEventListener("click", interceptandoProduto)

let carrinhoCompras = []

function interceptandoProduto(event){
  let btnCompra = event.target
  
  if(btnCompra.tagName == "BUTTON"){

    let idProduto = btnCompra.id

    let produto = produtos.find(function(produto){
      if(produto.id == idProduto){
        return produto
      }
    })
    adicionarCarrinho(produto)
  }
}

function adicionarCarrinho(produto){

  carrinhoCompras.push(produto)
  listarProdutoCarrinho(carrinhoCompras)
  let valorCarrinho            = somaCarrinho();
  totalCarrinho.innerText      = `R$ ${valorCarrinho}.00`;
  qtdeCarrinhoCompra.innerText = carrinhoCompras.length

}

function somaCarrinho(){
  
  let soma = 0;
  for(let i = 0; i < carrinhoCompras.length;i++){
    soma += carrinhoCompras[i].preco
  }
  return soma;

  }

  secaoCarrinho.addEventListener("click", (event) => {
    let btnRemove = event.target
    if(btnRemove.tagName == "BUTTON"){
      let index = btnRemove.id;

      carrinhoCompras.splice(index,1);
      listarProdutoCarrinho(carrinhoCompras)
      let valorCarrinho = somaCarrinho();
      totalCarrinho.innerText = valorCarrinho;
      qtdeCarrinhoCompra.innerText = carrinhoCompras.length
      
    }
    
  });

  let inputBusca = document.querySelector(".containerBuscaPorNome input");
  let btnBusca   = document.querySelector(".containerBuscaPorNome button");

  btnBusca.addEventListener("click", function(){
    let pesquisaUsuario = inputBusca.value
    let resultadoBusca  = busca(pesquisaUsuario)

    listarProdutos(resultadoBusca, produtosLista)

    inputBusca.value = ""

  })

  function busca(valorPesquisa){
    let resultBusca = []

    for(let i =0; i< produtos.length;i++){
      let pesquisa = valorPesquisa.toLowerCase()
      let secao = produtos[i].secao.toLocaleLowerCase()
      let nomeProduto = produtos[i].nome.toLowerCase()
        if(nomeProduto.includes(pesquisa) || secao.includes(pesquisa)){
          resultBusca.push(produtos[i])
        }
    }
    return resultBusca;
  }

  