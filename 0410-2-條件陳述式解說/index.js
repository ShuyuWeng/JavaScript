const myName = document.getElementById('myName')
const send = document.getElementById('send')

send.addEventListener('click', function()
{
    console.lof(myName.value.length)

    if(myName.value.length === 0){
        alert('目前沒有得到文字，請填入文字資訊')
    }

    // 與上述判斷相同
    // 利用falsy，當myName.value=""時，相當於if(!false)
    if(!myName.value){
        alert('目前沒有得到文字，請填入文字資訊')
    }
})