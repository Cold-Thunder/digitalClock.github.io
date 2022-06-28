//watch section
const clock = () => {
    let time = new Date();
    //console.log(time);

    let dat = time.getDate();
    let month = time.getMonth();
    let year = time.getFullYear();

    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();

    document.querySelector(".time").innerText = "Time: " + hour + ":" + min + ":" + sec;
    document.querySelector(".date").innerText = "Date: " + dat + "-" + month + "-" + year;
}
clock();

setInterval(clock, 1000);
// end watch section

//stop watch section
let millSec = document.querySelector(".mill");
let sec = document.querySelector('.sec');
let min = document.querySelector('.min');
let hour = document.querySelector('.hour');


millSec.innerText = '00';
sec.innerText = '00';
min.innerText = '00';
hour.innerText = '00';


let start = document.querySelector('.start');
let stop = document.querySelector('.stop');
let reset = document.querySelector('.reset');


start.addEventListener('click', () => {
    let i = 0;
    let j = 0;
    let k = 0;
    let l = 0;

    let mill = setInterval(() => {
        i += 1;
        millSec.innerText = i;

        if (i > 99) {
            i = 0;
            j += 1;
            sec.innerText = j;



            if (j == 59) {
                j = 0;
                k += 1;
                min.innerText = k;

                let l = 0;

                if (k == 59) {
                    k = 0;
                    l += 1;
                    hour.innerText = l;
                }

            }

        }
    }, 10);

    stop.addEventListener('click', () => {
        clearInterval(mill);
    })
})


reset.addEventListener('click', () => {
    millSec.innerText = '00';
    sec.innerText = '00';
    min.innerText = '00';
    hour.innerText = '00';
})

