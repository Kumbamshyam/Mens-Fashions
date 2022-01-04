function miniimagehover(ele) {

    const largeimagecontainer = document.getElementById("large-image-container");
    const miniimage1 = document.getElementById('mini-images1');
    const miniimage2 = document.getElementById('mini-images2');
    const miniimage3 = document.getElementById('mini-images3');
    const miniimage4 = document.getElementById('mini-images4');
    const miniimage5 = document.getElementById('mini-images5');

    let noofminiimages = [miniimage1.src, miniimage2.src, miniimage3.src, miniimage4.src, miniimage5.src];

    if (ele.id == 'mini-images1') {
        img = noofminiimages[0]
    }
    if (ele.id == 'mini-images2') {
        img = noofminiimages[1]
    }
    if (ele.id == 'mini-images3') {
        img = noofminiimages[2]
    }
    if (ele.id == 'mini-images4') {
        img = noofminiimages[3]
    }
    if (ele.id == 'mini-images5') {
        img = noofminiimages[4]
    }

    let changeimage = null;

    changeimage = img;

    largeimagecontainer.src = changeimage;

};



// <----------------- you can use this code to show images by hovering the slider (Part 1 - How to make an e-commerce website with HTML, CSS and JS channel: Modern Web)  ----------------->  
// const product = document.quertySelectorAll("s")
// const productiamgessilde = document.querySelector(".mini-image")

// let activeImagesSlide = 0;
// product.forEach((items, i)=>{
//     items.addEventListener('hover', ()=>{
//         produts[activeImagesSlide].classList.remove('active');
//         Items.classLIst.add('active');
//         productiamgessilde.style.backgroundimage = 'url(`${items.src}';
//         activeimagesslide = i;
//     })

// })



