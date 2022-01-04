let menuIcon = document.getElementById('menu-icon');

menuIcon.addEventListener('click', ()=>{

    let menuIconList = document.getElementById('drop-down-menu-with-id');
    if(menuIcon.click) {
        menuIconList.style.display = "block";

    }
});



let menucancelicon = document.getElementById('drop-down-menu-cancel-icon');

menucancelicon.addEventListener('click', ()=>{
    
    let menuIconList = document.getElementById('drop-down-menu-with-id');

    if (menuIcon.click) {
        menuIconList.style.display = 'none';
    }

})


