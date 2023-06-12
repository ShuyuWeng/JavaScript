//table
const dataTable = document.getElementById('dataTable')
//tbody
const dataTbody = document.getElementById('dataTbody')
// loader
const loader = document.getElementById('loader')
// studentName
const studentName = document.getElementById('studentName')
// search
const search = document.getElementById('search')
// 處理radio 按鈕
const ageTypeRadios = document.getElementsByName('ageType')
//reset
const resetAgeType = document.getElementById('resetAgeType')
// sort by按鈕
const ageSortAsc=document.getElementById('ageSortAsc')
const ageSortDesc=document.getElementById('ageSortDesc')

// fetch('https://my-json-server.typicode.com/eyesofkids/json-fake-data/users', { method: 'GET' })
//     .then((res) => {
//         return res.json()
//     })
//     .then((data) => {
//         console.log(data)
//         const htmlData = data.map((v, i) => {
//             return `<tr><td>${v.id}</td><td>${v.name}</td><td>${v.age}</td></tr>`
//         })
//         // dataTbody.innerHTML = htmlData.join("")
//         update(htmlData.join(""))
//     })
//     .catch((error)=>{
//         console.log(error)
//     })

// function update(data) {
//     dataTbody.innerHTML = data
// }

// 參考:
// https://v8.dev/features/top-level-await
// https://stackoverflow.com/questions/46515764/how-can-i-use-async-await-at-the-top-level
// 如果await要用在瀏覽器中的全域中，需要在引入script時加入module標記，以識別是使用module(ESM)的類型
// <script src="index.js" type="module"></script>
// 否則要包在async函式中，再呼叫使用
// async function getData() {
//     try {
//         const res = await fetch('https://my-json-server.typicode.com/eyesofkids/json-fake-data/users')
//         const data = await res.json()

//         const htmlData = data.map((v, i) => {
//             return `<tr><td>${v.id}</td><td>${v.name}</td><td>${v.age}</td></tr>`
//         })
//         dataTbody.innerHTML = htmlData.join("")
//     } catch (error) {
//         console.log(error)
//     }
// }
// getData()

// //index.html 改為<script src="index.js" type="module"></script>  加上type="module"就可直接寫在最外層，可不用async function包起來
// try {
//     const res = await fetch('https://my-json-server.typicode.com/eyesofkids/json-fake-data/users')
//     const data = await res.json()

//     const htmlData = data.map((v, i) => {
//         return `<tr><td>${v.id}</td><td>${v.name}</td><td>${v.age}</td></tr>`
//     })
//     dataTbody.innerHTML = htmlData.join("")

// } catch (error) {
//     console.log(error)
// }

async function getData() {
    try {
        // 開啟載入指示動畫
        loader.style.display = "block"
        dataTable.style.display = "none"
        // 從伺服器載入資料
        const res = await fetch('https://my-json-server.typicode.com/eyesofkids/json-fake-data/users')
        const data = await res.json()
        // 呈現在網頁dom元素中
        const htmlData = data.map((v, i) => {
            return `<tr><td>${v.id}</td><td>${v.name}</td><td>${v.age}</td></tr>`
        })
        dataTbody.innerHTML = htmlData.join("")

        // 延時2秒關閉動畫
        setTimeout(function () {
            loader.style.display = "none"
            dataTable.style.display = "block"
        }, 2000);
    } catch (error) {
        console.log(error)
    }
}

async function getDataBySearchName(name) {
    try {
        // 開啟載入指示動畫
        loader.style.display = "block"
        dataTable.style.display = "none"
        // 從伺服器載入資料
        const res = await fetch(`https://my-json-server.typicode.com/eyesofkids/json-fake-data/users?name_like=${name}`)
        const data = await res.json()
        // 呈現在網頁dom元素中
        const htmlData = data.map((v, i) => {
            return `<tr><td>${v.id}</td><td>${v.name}</td><td>${v.age}</td></tr>`
        })
        dataTbody.innerHTML = htmlData.join("")

        // 延時2秒關閉動畫
        setTimeout(function () {
            loader.style.display = "none"
            dataTable.style.display = "block"
        }, 2000);
    } catch (error) {
        console.log(error)
    }
}

async function getDataByAgeType(ageType) {
    const qs = (ageType === '大於等於20') ? 'age_gte=20' : 'age_lte=19'
    try {
        // 開啟載入指示動畫
        loader.style.display = "block"
        dataTable.style.display = "none"
        // 從伺服器載入資料
        const res = await fetch(`https://my-json-server.typicode.com/eyesofkids/json-fake-data/users?${qs}`)
        const data = await res.json()
        // 呈現在網頁dom元素中
        const htmlData = data.map((v, i) => {
            return `<tr><td>${v.id}</td><td>${v.name}</td><td>${v.age}</td></tr>`
        })
        dataTbody.innerHTML = htmlData.join("")

        // 延時2秒關閉動畫
        setTimeout(function () {
            loader.style.display = "none"
            dataTable.style.display = "block"
        }, 2000);
    } catch (error) {
        console.log(error)
    }
}

async function getDataSortByAge(type="asc") {
    const qs = (type === 'asc') ? '_sort=age&_order=asc' : '_sort=age&_order=desc'
    try {
        // 開啟載入指示動畫
        loader.style.display = "block"
        dataTable.style.display = "none"
        // 從伺服器載入資料
        const res = await fetch(`https://my-json-server.typicode.com/eyesofkids/json-fake-data/users?${qs}`)
        const data = await res.json()
        // 呈現在網頁dom元素中
        const htmlData = data.map((v, i) => {
            return `<tr><td>${v.id}</td><td>${v.name}</td><td>${v.age}</td></tr>`
        })
        dataTbody.innerHTML = htmlData.join("")

        // 延時2秒關閉動畫
        setTimeout(function () {
            loader.style.display = "none"
            dataTable.style.display = "block"
        }, 2000);
    } catch (error) {
        console.log(error)
    }
}

// 第一次載入資料用
getData()

// 查詢姓名用
search.addEventListener('click', function () {
    if (!studentName.value) {
        alert('請輸入姓名！')
        return
    }
    getDataBySearchName(studentName.value)
})

// 選項按鈕加入事件監聽
for (let i = 0; i < ageTypeRadios.length; i++) {
    ageTypeRadios[i].addEventListener('change', function (event) {
        // console.log(event.target.value)
        getDataByAgeType(event.target.value)
    })
}

// 重設按鈕
resetAgeType.addEventListener('click', function () {
    // 恢復選中的radio按鈕狀態
    for (let i = 0; i < ageTypeRadios.length; i++) {
        ageTypeRadios[i].checked = false
    }
    // 恢復原資料狀態
    getData()
})

// 排序按鈕
ageSortAsc.addEventListener('click',function(){
    getDataSortByAge('asc')
})

// 排序按鈕
ageSortDesc.addEventListener('click', function(){
    getDataSortByAge('desc');
})

