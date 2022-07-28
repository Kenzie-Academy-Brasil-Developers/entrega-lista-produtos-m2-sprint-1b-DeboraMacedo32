// seu código aqui

let produtosLista = document.querySelector(".containerListaProdutos ul");
let botoesNav     = document.querySelector("#botoesContainer")


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
      return obj.secao == "Laticínio"})
    
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
 somaProduto()
}
listarProdutos(produtos, produtosLista);


function criarCardProduto(produto){
 console.log(produto.nome)
 let nomeCard      = produto.nome
 let precoCard     = produto.preco
 let secaoCard     = produto.secao
 let imgCard       = produto.img

 let li       = document.createElement("li");
 let imge     = document.createElement("img");
 let tituloH3 = document.createElement("h3");
 let tagSpan  = document.createElement("span");
 let tagP     = document.createElement("p");

 imge.src               = imgCard;
 imge.alt               = nomeCard;
 tituloH3.innerText     = nomeCard;
 tagP.innerText         = secaoCard;
 tagSpan.innerText      = `R$ ${precoCard}.00`; 
 tagSpan.classList.add("preco_produto")
 li.append(imge,tituloH3,tagP,tagSpan);

 return li

}



function somaProduto(){
  
   let valor = 0;
   const precos1 = document.querySelectorAll(".preco_produto");
   for(let i = 0;i < precos1.length;i++){
    let valorAtual = precos1[i].innerText.replace("R$", "")
    valor += parseFloat(valorAtual)
   }
    document.querySelector(".priceContainer span").innerText = `R$ ${valor.toFixed(2)}`
}
  somaProduto();
