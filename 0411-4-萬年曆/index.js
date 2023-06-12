// 1. 要得到某年的某個月有幾天，可以用`new Date(y, m, 0).getDate()`，
// 例如 2009 年的 9 月就是使用`new Date(2009, 9, 0).getDate()`
// 2. Date 物件的`getDay()`可以得到 0-6 的值，代表是星期幾，其中 0 代表星期日

// 獲取dom元素物件實體
const title = document.getElementById('title')
const data = document.getElementById('data')

function makeOptions(min, max) {
    let options = '<option value="0">請選擇</option>'

    for (let i = min; i < max + 1; i++) {
        options += `<option value=${i}>${i}</option>`
    }
    return options
}

// 年 1960~2023
yy.innerHTML = makeOptions(1900, 2023)
// 月 1~12
mm.innerHTML = makeOptions(1, 12)
// 記錄使用者選擇(使用數字，保持數字資料類型)
let myY = 0
let myM = 0

yy.addEventListener('change', function () {
    myY = Number(yy.value)
    if (myY && myM) {
        showCalendar()
    }
})

mm.addEventListener('change', function () {
    myM = Number(mm.value)
    if (myY && myM) {
        showCalendar();
    }
})

function showCalendar() {
    // 呈現本月標題(西元年/月)
    const now = new Date(`${myY}/${myM}/1`)
    // const y = now.getFullYear()
    // const m = now.getMonth() + 1
    // const d = now.getDate()
    const y = myY
    const m = myM
    const d = 1
    title.innerText = `${y}年${m}月`
    console.log(y, m, d)

    // 本月有幾天
    const days = new Date(y, m, 0).getDate()
    console.log(days)

    // 本月第一天為星期幾(0-6)
    // 注意月份要減回原本的(0-11)
    const firstDay = new Date(y, m - 1, 1).getDay()
    console.log(firstDay)

    // 所有資料的陣列(一維)
    const dataArray = []

    // 補前面空白
    for (let i = 0; i < firstDay; i++) {
        dataArray.push('')
    }
    console.log(dataArray)

    // 加入本月所有資料1~days，一維陣列
    for (let i = 0; i < days; i++) {
        dataArray.push(i + 1)
    }
    console.log(dataArray)

    // 補後面空白(每月都，6行x7 = 42個值)
    for (let i = 0; i < 42 - firstDay - days; i++) {
        dataArray.push('');
    }
    console.log(dataArray)

    //準備呈現的html字串
    let dataString = ''
    for (let i = 0; i < dataArray.length; i++) {
        dataString += `<td class="day">${dataArray[i]}</td>`

        // 每7個要換行(加入</tr><tr>)
        if ((i + 1) % 7 === 0) {
            dataString += '</tr><tr>'
        }
    }
    data.innerHTML = `<tr>${dataString}</tr>`
}
