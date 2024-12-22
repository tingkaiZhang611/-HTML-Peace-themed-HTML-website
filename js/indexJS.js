window.addEventListener('load', function () {
    const title = document.getElementById('titleBody');
    const video = document.getElementById('VIDEO');
    //用来动态Title
    const eoch1 = '●';
    const eoch2 = '|';
    const s0 = '和我们一起守护人与生态和平';
    const s1 = '在一起，就可以 !';
    let type = true;
    printMessage(s0);

    /*延时用的*/
    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    /*哎呦老早就像试试做这个效果了,今天终于做出来了~*/
    async function printMessage(s) {
        let isTwo = true;
        for (let i = 1; i <= s.length; i++) {
            if (isTwo) {
                title.textContent = s.substring(0, i).concat(eoch1);
            } else {
                title.textContent = s.substring(0, i).concat(eoch2);
            }
            isTwo = !isTwo;
            //等待
            await delay(100);
        }
        title.textContent = s;
        await delay(3000);
        for (let i = s.length; i > 0; i--) {
            if (isTwo) {
                title.textContent = s.substring(0, i).concat(eoch1);
            } else {
                title.textContent = s.substring(0, i).concat(eoch2);
            }
            isTwo = !isTwo;
            //等待
            await delay(50);
        }
        title.textContent = "";
        type = !type;
        type ? printMessage(s0) : printMessage(s1);
    }
});