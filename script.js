var counter = document.querySelector(".counter");
var followers = document.querySelector(".followers");

let count = 1;

setInterval(() => {
    if(count < 1000){
        count++;
        counter.innerText = count;
    }
},5);

setTimeout(() => {
    followers.innerText = "Followers on Instagram";
    followers++;
} , 8500);