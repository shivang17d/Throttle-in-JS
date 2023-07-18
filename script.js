const count = (id) => {
    let cnt = 0;
    return () => {
        document.getElementById(id).innerHTML = ++cnt;
    };
}

const throttleCount = (fx, delay) => {
    let isThrottled = false;
    return (...args) => {
        if (!isThrottled) {
            fx.apply(this, args);
            isThrottled = true;
            setTimeout(() => {
                isThrottled = false;
            }, delay);
        }
    };
}


let nCount = count('n_count');
let tCount = throttleCount(count('t_count'), 2000);


document.addEventListener('scroll', () => {
    nCount();
    tCount();
})


// window.addEventListener('resize', () => {
//     nCount();
//     tCount();
// })