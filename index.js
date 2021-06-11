//const { prependOnceListener } = require('process')
const produtosMercado=require('./database')

produtosMercado.sort((a,b)=>a.preco-b.preco)
console.table(produtosMercado)

const pegarEntrada=require('readline-sync')

const carrinho=[]
//-----------VER CATEGORIA


    const verCategoria=pegarEntrada.question('Voce deseja encontrar peroduto por categoria?(S/N)')

    if(verCategoria.toLocaleUpperCase()==='S'){
        console.log('----------------------------------------');
        console.log('Essas sao as opcoes disponiveis:');
        console.log('higiene,casa,alimento,bebida,informatica');
        console.log('');
        console.log('-----------------------------------------');
        
        const escolhaCategoriaDesejada=pegarEntrada.question('Por favor, escolha a categoria desejada: ')

        const clienteEscolheCategoria= produtosMercado.filter(item=>item.categoria===escolhaCategoriaDesejada);
        
        
            console.log(clienteEscolheCategoria);
    }else{
        console.log('Tudo bem');
    }


//----------------Classe
const array=new Array()

class Pedido {
    constructor(array){
        this.produtos=array;
        this.subtotal=0;
        this.valorTotal=0;
        this.totalItens=0;
    }
}

//-----------------FUNÇÃO COM ID, QUANTIDADE, CUPOM DESCONTO, CONTINUAR COMPRANDO?

const compras=()=> {

    //----------------ID
    procurarID=parseInt(pegarEntrada.question('Digite o ID do produto desejado:  '));
    for(let i=0;i<10;i++){
        chamarID=produtosMercado.find(item=>item.id==procurarID)
        if(chamarID){
            break;
        }else{
            procurarID=parseInt(pegarEntrada.question('ID invalido. Digite ID do produto desejado'));
        }

    }
    console.log('----------------------------------------');
    //quantidade 
    quantidadeProduto=parseInt( pegarEntrada.question('Digite a quantidade desejada: ') );
    for (let index = 0; index < 1000; index++) {
        if(quantidadeProduto>0){
            break
        }else{
            quantidadeProduto=parseInt( pegarEntrada.question('Quantidade nao valida. Digite a quantidade desejada: ') );
        }
        
    }
    console.log('----------------------------------------');
//---------------------criando Quantidade 
    const carrinhoQuantidadeInserir={...chamarID,quantidade:quantidadeProduto};
    carrinho.push(carrinhoQuantidadeInserir);
  
//---------------------Continuar comprando?
    
    const continarComprando=pegarEntrada.question('Voce deseja continuar comprando?(S/N)')

    if(continarComprando.toLocaleUpperCase()==='N'){
//--------------------CUPOM desconto
        console.log('');
        cupom=parseInt(pegarEntrada.question('Se possuir desconto, insira o valor, por favor.') ) 
        if(cupom===10){
            console.log('Cupom inserido');
            console.log('');
        }else{
            cupom=parseInt(pegarEntrada.question('Lamento desconto nao valido, insira o valor, por favor.') )
        }
    
    }else{
        compras()
    }

}

compras()
//----------------Class Para receber pedido 
class Order {
    constructor(carrinho){
        this.newProducts=carrinho
        this.subtotal=0
    }
    calcSubtotal(){
        this.subtotal=this.newProducts.reduce((acumulator,item)=> acumulator+(item.preco*item.quantidade),0);  
    }
   
}
 
//-----------------calculos
const order= new Order( carrinho )
console.table(order.newProducts);
order.calcSubtotal()
console.log('----------------------------------------');

console.log( `Subtotal= R$ ${order.subtotal.toFixed(2)}`)
console.log('----------------------------------------');

const desconto=order.subtotal*(cupom/100)
console.log( `Desconto= R$ ${desconto.toFixed(2)}`)
console.log('----------------------------------------');

const total= order.subtotal-desconto
console.log( `Total= R$ ${total.toFixed(2)}`)
console.log('----------------------------------------');

console.log('Obrigado por comprar conosco');


//--------------------------FIM-------------------------------------
