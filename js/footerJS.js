/*底部关注的hover实现*/
window.onload = function () {
    const vx = document.getElementById('footer_vx');
    const dy = document.getElementById('footer_dy');
    const bz = document.getElementById('footer_bz');
    const GOTOPS = document.getElementById('GoTop');
    vx.addEventListener('mouseover', function() {
        /*切换图图片*/
        this.src = new URL("images/footer/WeChat_hover.png", window.location.href).href;
        /*手型*/
        vx.style.cursor = 'pointer';
    });

    /*切换图图片*/
    vx.addEventListener('mouseout', function() {
        this.src = new URL("images/footer/WeChat.png", window.location.href).href;
    });

    /*点击跳转链接*/
    vx.onclick=function() {
        alert('这里咱就不继续做了，相信我，你现在很累，送你个游戏玩玩~');
        window.location.href = 'https://ys.mihoyo.com/';/*私货*/
    };



    dy.addEventListener('mouseover', function() {
        this.src = new URL("images/footer/douyin_hover.png", window.location.href).href;
        dy.style.cursor = 'pointer';
    });

    dy.addEventListener('mouseout', function() {
        this.src = new URL("images/footer/douyin.png", window.location.href).href;
    });

    dy.onclick=function() {
        alert('这里咱就不继续做了，相信我，你现在很累，送你个游戏玩玩~');
        window.location.href = 'https://v.douyin.com/CeiJ6hrcp/';/*私货*/
    };



    bz.addEventListener('mouseover', function() {
        this.src = new URL("images/footer/bilibili_hover.png", window.location.href).href;
        bz.style.cursor = 'pointer';
    });

    bz.addEventListener('mouseout', function() {
        this.src = new URL("images/footer/bilibili.png", window.location.href).href;
    });

    bz.onclick=function() {
        alert('这里咱就不继续做了，相信我，你现在很累，送你个游戏玩玩~');
        window.location.href = 'https://space.bilibili.com/401742377';/*私货*/
    };

    window.addEventListener('scroll', function() {
        if(window.scrollY > 10) {
            GOTOPS.style.opacity='1';
        }else{
            GOTOPS.style.opacity='0';
        }
    })
}

