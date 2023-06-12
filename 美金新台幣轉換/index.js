//1 USD美金=30.44新台幣
//先統一宣告所有要使用的元素物件
const moneyInput= document.getElementById('moneyInput');
const moneyText= document.getElementById('moneyText');
const u2t=document.getElementById('u2t');
const t2u=document.getElementById('t2u');

u2t.addEventListener('click',function(){
    //先得到數字
    const moneyNumber=Number(moneyInput.value)
    //呈現轉換過的數字
    //toFixed是格式化數字使用
    moneyText.innerText=(moneyNumber*30.44).toFixed(0)
})

t2u.addEventListener('click',function(){
    const moneyNumber=Number(moneyInput.value)
    moneyText.innerText=(moneyNumber/30.44).toFixed(2)
})