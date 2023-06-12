// 呈現訊息
const user = document.getElementById('user')
const computer = document.getElementById('computer')
const result = document.getElementById('result')

// 使用出拳按鈕
const scissor = document.getElementById('scissor')
const rock = document.getElementById('rock')
const paper = document.getElementById('paper')

// 剪刀-1，石頭-2，布-3
// scissor，rock，paper

// 陣列索引值是從0開始
const stateList = ['剪刀', '石頭', '布']

const finalResults = ['你勝', '平手', '電腦勝']

// 使用者出拳
let userState = 1
// 電腦出拳
let computerState=1
// 最後結果
// 預設 - 你 勝
let finalState=1

function play(userPlayState) {
    // 使用者出拳
    userState = userPlayState
    user.innerText = '你出-' + stateList[userState - 1]

    // 隨機數1~3
    computerState = Math.floor(Math.random() * 3) + 1
    computer.innerText = '電腦出-' + stateList[computerState - 1]

    // 判斷平手
    if (computerState === userState) {
        finalState = 2
    }

    // 電腦勝
    if (computerState === 2 && userState === 1) {
        finalState = 3
    }
    if (computerState === 3 && userState === 2) {
        finalState = 3
    }
    if (computerState === 1 && userState === 3) {
        finalState = 3
    }

    // 其他，或預設-你勝
    result.innerText = '結果-' + finalResults[finalState - 1]
    // 每次結束 結果要回復預設
    finalState = 1
}

scissor.addEventListener('click', function () {
    play(1)
})

rock.addEventListener('click', function () {
    play(2)
})

paper.addEventListener('click', function () {
    play(3)
})