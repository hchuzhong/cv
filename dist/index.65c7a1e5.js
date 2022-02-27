//  函数是一个在日常开发中经常会使用的函数，它的功能是这样子的：
// 经过它包装的函数 fn，在两次调用时间间隔小于 wait 时间的时候，只会在最后一次调用完，再经过 wait 时间后被执行
function debounce(fn, wait) {
    // 在这里写下你的代码
    let canUse = true;
    return function() {
        if (canUse) {
            canUse = false;
            fn.apply(this, arguments);
            setTimeout(()=>{
                canUse = true;
            }, wait);
        }
    };
}
async function run() {
    const a1 = debounce(console.log, 50);
    a1(1, 2);
    await sleep(10);
    a1(2, 3);
    await sleep(20);
    a1(3, 4);
    await sleep(30);
    a1(4, 5);
    await sleep(40);
    a1(5, 6);
    // 经过 50 毫秒（近似），只打印出 5 6
    await sleep(51);
    a1(6, 7);
    await sleep(10);
    a1(7, 8);
// 打印出 7 8
}
const sleep = (ms)=>new Promise((resolve)=>setTimeout(resolve, ms)
    )
;
run();
/**
 * obj = {
 'a.b.c': 1,
 'a.d': 2,
 'e': 3,
}
function transform(obj) {...}
{
  a: {
     b: {
       c: 1
     },
    d: 2
   },
   e: 3
}
 */ function transform(obj) {
    const newObj = {
    };
    for(const key in obj){
        const keyArr = key.slice(".");
        if (keyArr.length === 0) newObj[key] = obj[key];
        else {
            const tempNewObj = newObj;
            for(let i = 0; i < keyArr.length; i++){
                const arrValue = keyArr[i];
                if (!tempNewObj[arrValue]) tempNewObj[arrValue] = {
                };
                if (i === keyArr.length - 1) tempNewObj[arrValue] = obj[key];
                tempNewObj = tempNewObj[arrValue];
            }
        }
    }
}

//# sourceMappingURL=index.65c7a1e5.js.map
