// 獲取dom元素物件實體
const yy = document.getElementById('yy')
const mm = document.getElementById('mm')
const dd = document.getElementById('dd')
// 18歲元素物件實體
const checkAge = document.getElementById('checkAge')
const message = document.getElementById('message')

// 記錄使用者選擇
let birthY = 0
let birthM = 0
let birthD = 0

// program min,max=number
// return options:string
/**
 * 傳入兩個最小與最大數字，產生一個選項字串
 * @param {number} min 
 * @param {number} max 
 * @returns {string}
 */
function makeOptions(min, max) {
    let options = '<option value="0">請選擇</option>'
    for (let i = min; i < max + 1; i++) {
        // 樣板字串語法
        options += (`<option value=${i}>${i}</option>`)
    }
    return options
}

// 年 1960-2020
yy.innerHTML = makeOptions(1960, 2020)

// 月 1-12
mm.innerHTML = makeOptions(1, 12)

// 日，一開始只有"請選擇"
dd.innerHTML = makeOptions(1, 0)

yy.addEventListener('change', function () {
    birthY = Number(yy.value)
    // 如果使用者選了西元年+月時，出現日的選項
    if (birthY && birthM) {
        // 公式計算當月有幾天
        const maxDays = new Date(birthY, birthM, 0).getDate()
        // 更新日期選項
        dd.innerHTML = makeOptions(1, maxDays)
        // 恢復請選擇
        birthD = 0
    }
})

mm.addEventListener('change', function () {
    birthM = Number(mm.value)
    // 如果使用者選了西元年+月時，出現日的選項
    //   birthY>0 等於 birthY
    if (birthY && birthM) {
        // 公式計算當月有幾天
        const maxDays = new Date(birthY, birthM, 0).getDate()
        // 更新日期選項
        dd.innerHTML = makeOptions(1, maxDays)
        // 恢復請選擇
        birthD = 0
    }
})

dd.addEventListener('change', function () {
    birthD = Number(dd.value)
})


// 檢查是否滿18歲
checkAge.addEventListener('click', function () {
    if (birthY && birthM && birthD) {
        const now = new Date()
        const nowY = now.getFullYear()
        // 注意月份回傳為0~11
        const nowM = now.getMonth() + 1
        const nowD = now.getDate()

        // 預設 未滿18歲
        let over18 = false

        // 寫判斷式
        if (nowY - birthY > 18) { over18 = true }
        if (nowM - birthY === 18 && nowM > birthM) { over18 = true }
        if (nowD - birthY === 18 && noeM === 0 && nowD >= birthD) { over18 = true }

        // 結果呈現在網頁上
        message.innerHTML = over18 ?
            '<span style="color:green">滿18歲</span>' :
            '<span style="color:red">未滿18歲</span>'

    } else {
        alert('請選擇年、月、日')
    }
})

// checkAge.addEventListener('click', function () {
//     if (birthY && birthM && birthD) {

//         const msNow = Number(new Date())
//         const msBirth = Number(new Date(`${birthY}/${birthM}/${birthD}`))
//         const ms18years = 365.25 * 24 * 60 * 60 * 1000 * 18

//         const over18 = (msNow - msBirth >= ms18years) ? true : false

//         // 結果呈現在網頁上
//         message.innerHTML = over18 ?
//             '<span style="color:green">滿18歲</span>' :
//             '<span style="color:red">未滿18歲</span>'

//     } else {
//         alert('請選擇年、月、日')
//     }
// })