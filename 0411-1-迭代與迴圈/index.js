const month1 = document.getElementById('month1')
const month2 = document.getElementById('month2')

// 使用字串
let optionString = ''
for (var i = 1; i < 13; i++) {
    // 樣板字串語法
    // optionString=optionString+`<option value=${i}>${i}</option>`
    optionString += `<option value=${i}>${i}</option>`
}
month1.innerHTML = optionString

// 使用陣列
const options = []
for (let i = 1; i < 13; i++) {
    options.push(`<option value=${i}>${i}</option>`)
}
// join是陣列組合為字串用，記得使用空白字串相連
month2.innerHTML = options.join("")

// foreach
// 要先給一個陣列的值再用陣列值去foreach
console.log(Array(12).fill(1))
const options2=[];
Array(12).fill(1).forEach(function(v,i){
    options2.push(`<option value=${i+1}>${i+1}</option>`)
})
console.log(options2)
month3.innerHTML=options2.join("")

// // for迴圈範例
// const aa = [1, 2, 3]

// aa.forEach(function (v, i, array) {
//     array[i] = v * 2
// })

// // forEach迭代範例
// const aa = [1, 2, 3]

// aa.forEach(function (v, i, array) {
//     array[i] = v * 2
// })

// // 迭代語法
// // 優點: 可連鎖，閱讀性高，以陣列為角度執行，特定功能
// // 缺點: 執行速度慢，無法中斷或作內部流程控制(相對for迴圈break/continue)
// const aa = [1, 2, 3]

// aa.filter((v) => v > 2).map((v) => v * 2)