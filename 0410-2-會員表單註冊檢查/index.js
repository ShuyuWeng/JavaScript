const myForm = document.getElementById('myForm')
const myName = document.getElementById('myName')
const myEmail = document.getElementById('myEmail')
const myPassword = document.getElementById('myPassword')
const myPassword2 = document.getElementById('myPassword2')
const errorMassage = document.getElementById('errorMassage')
// myEmail
// myUsername
// myPassword
// myPassword2

myForm.addEventListener('submit', function (event) {
    // console.log('form submit')
    // 1. 先阻擋表單的預設送出行為
    event.preventDefault()

    // 2. 檢查表單中的各欄位
    // 錯誤訊息用字串
    let errorString = ''

    if (!myName.value) {
        errorString += '姓名沒填'
    }
    if (!myEmail.value) {
        errorString += 'Email沒填'
    }
    if (!myPassword.value) {
        errorString += '密碼沒填'
    }
    if (!myPassword2.value) {
        errorString += '密碼確認沒填'
    }
    if (myName.value !== myPassword2.value) {
        errorString += '兩次輸入密碼不同'
    }

    console.log(errorString)

    // if (errorString) {
    //     errorString.innerText=errorString
    // }
    // else {
    //     errorString.innerText = '表單驗證通過'
    // }

    // 用三元運算子取代if...else
    errorMessage.innerText = (errorString) ? errorString : '表單驗證通過'

    // 3. 通過驗証後作自訂的送出行為(fetch/ajax...)
})