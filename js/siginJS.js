window.onload = function () {
    const closeButton = document.getElementById("closeButton");
    const continueButton = document.getElementById("continueButton");
    //强制弹出协议
    const myModal = new bootstrap.Modal(document.getElementById('staticBackdrop'));
    myModal.show();

    //返回首页
    closeButton.onclick = function () {
        window.location.href='../index.html';
    }

    //倒计时5秒关闭
    // 确保按钮初始状态下是禁用的
    continueButton.disabled = true;
    let num=5;

    let timer = setInterval(function() {
        continueButton.textContent = '仔细阅读'+ --num+'秒后继续';
        if (num <= 0) {
            clearInterval(timer);
            continueButton.disabled = false;
            continueButton.innerHTML = '同意协议并继续';
        }
    }, 1000); // 每秒更新一次
}