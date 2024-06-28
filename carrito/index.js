let preciomanzana = 2000
 let totalmanzana =0
 let contmanzana =0
let preciolimon =1000
let totallimon =0
let contlimon =0
let preciobanano=3000
let totalbanano =0
let contbanano =0
let preciocarne=10000
let totalcarne =0
let contcarne =0
let preciokiwi=5000
let totalkiwi =0
let contkiwi =0
let preciofresa=6000
let totalfresa =0
let contfresa =0
let preciosandia= 9000
let totalsandia =0
let contsandia =0
let preciomora=11000
let totalmora =0
let contmora =0
let precioguanabana=12000
let totalguanabana =0
let contguanabana =0
let preciopiña=15000
let totalpiña =0
let contpiña =0

const manzana=document.getElementById('Manzana')
manzana.addEventListener('click', (e)=>{
    totalmanzana+=preciomanzana
    contmanzana++
    document.querySelector('#con').innerHTML= contmanzana
    document.querySelector('#preman').innerHTML= '$ ' +totalmanzana
})

const limon=document.getElementById('Limon')
limon.addEventListener('click', (e)=>{
    totallimon+=preciolimon
    document.querySelector('#preman2').innerHTML= '$ ' +totallimon
    contlimon++
    document.querySelector('#con2').innerHTML= contlimon
})

const banano=document.getElementById('Banano')
banano.addEventListener('click', (e)=>{
    totalbanano+=preciobanano
    document.querySelector('#preman3').innerHTML= '$ ' +totalbanano
    contbanano++
    document.querySelector('#con3').innerHTML= contbanano
})

const carne=document.getElementById('carne')
carne.addEventListener('click', (e)=>{
    totalcarne+=preciocarne
    document.querySelector('#preman4').innerHTML= '$ ' +totalcarne
    contcarne++
    document.querySelector('#con4').innerHTML= contcarne
})

const kiwi=document.getElementById('Kiwi')
kiwi.addEventListener('click', (e)=>{
    totalkiwi+=preciokiwi
    document.querySelector('#preman5').innerHTML= '$ ' +totalkiwi
    contkiwi++
    document.querySelector('#con5').innerHTML= contkiwi
})


const fresa=document.getElementById('Fresa')
fresa.addEventListener('click', (e)=>{
    totalfresa+=preciofresa
    document.querySelector('#preman6').innerHTML= '$ ' +totalfresa
    contfresa++
    document.querySelector('#con6').innerHTML= contfresa
})


const sandia=document.getElementById('Sandia')
sandia.addEventListener('click', (e)=>{
    totalsandia+=preciosandia
    document.querySelector('#preman7').innerHTML= '$ ' +totalsandia
    contsandia++
    document.querySelector('#con7').innerHTML= contsandia
})


const mora=document.getElementById('Mora')
mora.addEventListener('click', (e)=>{
    totalmora+=preciomora
    document.querySelector('#preman8').innerHTML= '$ ' +totalmora
    contmora++
    document.querySelector('#con8').innerHTML= contmora
})


const guanabana=document.getElementById('Guanabana')
guanabana.addEventListener('click', (e)=>{
    totalguanabana+=precioguanabana
    document.querySelector('#preman9').innerHTML= '$ ' +totalguanabana
    contguanabana++
    document.querySelector('#con9').innerHTML= contguanabana
})


const piña=document.getElementById('Piña')
piña.addEventListener('click', (e)=>{
    totalpiña+=preciopiña
    document.querySelector('#preman10').innerHTML= '$ ' +totalpiña
    contpiña++
    document.querySelector('#con10').innerHTML= contpiña
})


const total=document.getElementById('total')
total.addEventListener('click', (e)=>{
     let totalfinal=totalmanzana+totallimon+totalbanano+totalcarne+totalkiwi+totalfresa+totalsandia+totalmora+totalguanabana+totalpiña
     let iva = totalfinal*0.19
      let totaliva= totalfinal+iva
 document.getElementById('xd').innerHTML= 'total final ' + totalfinal
 document.getElementById('xdd').innerHTML= 'iva ' + iva
 document.getElementById('xddd').innerHTML= 'total con iva ' + totaliva

})