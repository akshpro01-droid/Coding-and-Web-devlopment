// Promises kya hai or kya karta hai?
// LET ME EXPLAIN

// Maan lo ki mai tumhare liye kal kaaju katli laaunga ( To vo hogaya ek PROMISE )

//                                     THERE ARE TWO CONDITIONS

//                                Resolve                    Reject

// AGAR MAI KAAJU KATLI LAATA HUN TO VO  (RESOLVE)  HO JAAYEGA
// AGAR MAI KAAJU KATLI NAHI LAA PATA TO VO  (REJECT)  HO JAAYEGA

//                                   1.

// var ans = new Promise((resolve, reject) => {
//     if (true){
//         return resolve();
//     }

//     else{
//         return reject();
//     }
// })

// ans
// .then (function(){
//     console.log ("Resolve ho gaya tha bhai");
// })

// .catch(function(){
//     console.log ("Reject ho gaya tha bhai");
// })


//                                    2.

// User will ask number between 0 to 9 and if the number is below 5 resolve if not reject.

// var ans = new Promise((resolve, reject) => {
//     var n = Math.floor(Math.random() * 10);

//     if (n < 5){
//         return resolve();
//     }
//     else {
//         return reject();
//     }
// })

// ans.then (function(){
//     console.log ("Below");
// })

// .catch (function(){
//     console.log ("Above")
// })


//                                     3

async function abcd() {
    let ans = await fetch('https://randomuser.me/api/')
    .then(function(raw){
        return raw.json();
    })
    .then(function(data){
        console.log (data);
    })
}

abcd ()