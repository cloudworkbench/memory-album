let divTyping = document.getElementById('text')//div
let i = 0,//初始化
    timer = 0,
    str = '山无棱,天地合,才敢与君绝'//要显示的字

function typing () {
    if (i <= str.length) {
        divTyping.innerHTML = str.slice(0, i++) + '_'//当字没显示完的时候,从字符串上切下来上去
        timer = setTimeout(typing, 450)//每次的间隔
    }
    else {
        divTyping.innerHTML = str//结束打字,移除 _ 光标
        clearTimeout(timer)//结束,清除时间间隔
    }
}
typing();
