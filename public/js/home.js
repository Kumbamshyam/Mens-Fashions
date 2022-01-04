// let span = document.getElementsByTagName('span');
let leftNavBtn = document.getElementById('left-nav-btn');
let rightNavBtn = document.getElementById('right-nav-btn');
let product = document.getElementsByClassName('cards')
let product_page = Math.ceil(product.length / 3);
// console.log(Math.ceil(product.length/4))
// console.log(Math.floor(product.length/4))
// console.log(product.length/4)
let a = 0;
let movePer = 20.25;
let maxMove = 130;


// mobile_view	    
let mob_view = window.matchMedia("(max-width: 768px)");
if (mob_view.matches) {
    movePer = 50.36;
    maxMove = 121;
}

let right_mover = () => {
    // let a = 0;
    // let movePer = 25.34;
    // let maxMove = 130;
    a = a + movePer;
    console.log("right move = " + a)

    if (product.length == 1) {
        a = 0;
    }


    for (const i of product) {
        if (a > maxMove) {  
            a = a - movePer;
            console.log(`for loop a = ${a}` )
        }

        i.style.left = '-' + a + '%';
    }

}


let left_mover = () => {
    a = a - movePer;
    console.log("left move = " + a)
    if (a <= 0) { a = 0; }
    for (const i of product) {
        if (product_page > 1) {
            i.style.left = '-' + a + '%';
        }
    }
}
rightNavBtn.onclick = () => { right_mover(); }
leftNavBtn.onclick = () => { left_mover(); }

const newTrendleftnavbtn = document.getElementById("newTrendleft-nav-btn");
const newTrendrightnavbtn = document.getElementById("newTrendright-nav-btn");
const newTrendProduct = document.getElementsByClassName("newTrend-cards");
const newTrenddiviproduct = Math.ceil(newTrendProduct.length / 4);
let b = 0;
let newTrendMovePer = 18.25;
let newTrendMaxMove = 100;
console.log("this is length of newTrendProduct " + newTrendProduct.length);
let newTrendRight_click = ()=>{
    a = a + newTrendMovePer;
    console.log(a)

    // if (newTrendProduct.length ==  )
    
    
    
    for (const c of newTrendProduct){
        if(a > newTrendMaxMove){
            a = a - newTrendMovePer;
            console.log("this is if loop " + a)
        }
        // if(newTrendProduct.length == 12){
        //     a = 110;
        // }
        c.style.left = "-" + a + "%";
        c.style.transition = "ease .5s";
        console.log(a)
    }
}

newTrendrightnavbtn.onclick = ()=> {newTrendRight_click();}



let newTrendLeft_click = ()=>{
    a = a - newTrendMovePer;
    console.log(a)
    if (a <= 0) { a = 0; }
    for (const c of newTrendProduct){
        if(newTrenddiviproduct>1){
            c.style.left = "-" + a + "%";
            c.style.transition = "ease .5s";
            console.log(a)
        }
    }
}

newTrendleftnavbtn.onclick = ()=> {newTrendLeft_click();}