// setTimeout(function(){
//     console.log("Hello")
// }, 5000)

let count = 10;

let interval = setInterval(function(){
    if (count >= 1) {
        count--;
        console.log (count);
    }

    else clearInterval (interval);

}, 1000);