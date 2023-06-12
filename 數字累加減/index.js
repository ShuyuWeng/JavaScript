
// document.getElementById('total').addEventListener('click',function(){
//     document.getElementById('total').innerText=
//     Number(document.getElementById('total')).innerText+1
// })

const total= document.getElementById('total');
const add= document.getElementById('add');
const sub= document.getElementById('sub');

add.addEventListener('click',function(event){
   total.innerText= Number(total.innerText) +1;
})
sub.addEventListener('click',function(event){
    total.innerText= Number(total.innerText) -1;
 })