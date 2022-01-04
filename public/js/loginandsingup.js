// <------------- login and singup  ------------->
const newLocal = "logins-singup-btn";
let singupbtn = document.getElementById(newLocal);
singupbtn.addEventListener("click", ()=>{

    let loginAndSingupMainContainer = document.getElementById('login-and-singup-main-container')
    let loginAandSingupContainer2 = document.getElementById('login-and-singup-container-2');
    let loginAandSingupContainer1 = document.getElementById('login-and-singup-container-1');
    if(singupbtn.click){
        loginAandSingupContainer1.style.left = "455px";
        loginAandSingupContainer2.style.left = '0px';
        loginAndSingupMainContainer.style.height = '550px'
    }
})


let loginBtn = document.getElementById('signups-login-btn');

loginBtn.addEventListener('click', ()=>{
    
    let loginAndSingupMainContainer = document.getElementById('login-and-singup-main-container')
    let logiAandSingupContainer2 = document.getElementById('login-and-singup-container-2');
    let logiAandSingupContainer1 = document.getElementById('login-and-singup-container-1');
    if(singupbtn.click){
        logiAandSingupContainer1.style.left = "0px";
        logiAandSingupContainer2.style.left = '455px';
        loginAndSingupMainContainer.style.height = '450px'
    }
})


const loader = document.querySelector('.loding-img-container');
const submitBtn = document.querySelector('#new-user-submit-btn');
const name = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const confirmpassword = document.querySelector('#confirmpassword');
const tac = document.querySelector('#t-and-c-checkbox');
const notification = document.querySelector('#upcoming-notification');
const mobilenumber = document.querySelector('#mobilenumber');



submitBtn.addEventListener("click", ()=>{
    // if(name.value.length < 3){
    //     showAlert("name must be at least 3 characters");
    // }
    // else if(!email.value.length){
    //     showAlert('Please Enter your Email')
    // }
    // else if(password.value.length < 8 || !password.value.includes('@')){
    //     showAlert('Please create strong Password')
    // }
    // else if(!confirmpassword.value.length){
    //     showAlert('Please Confirm your Password')
    // }
    // else if(!Number(mobilenumber.value) || mobilenumber.value.length < 10){
    //     showAlert('please enter a valid number')
    // }
    // else if(!tac.checked){
    //     showAlert('you must agree our term and conditions before singup ')
    // }
    // else{
        //submit form
        // loader.style.display = 'block';
        sendData('/loginandsingup', {
            name: name.value,
            email: email.value,
            password: password.value,
            confirmpassword: confirmpassword.value,
            mobilenumber: mobilenumber.value,
            notification: notification.checked,
            tac: tac.checked,
        })
    // }

})


//  sending data to backend and recieving response from it
// const sendData = (path, data)=>{
//     fetch(path, {
//         method: 'post',
//         headers: new Headers({'content-Type': 'application/json'}),
//         body: JSON.stringify(data)
//     }).then((res)=> res.json()).then(response =>{
//         // console.log(data.name + response)
//         processData(response)
//     })
// }

// const processData = (data)=>{
//     loader.style.display = 'null';
//     if(data.alert){
//         showAlert(data.alert);  
//         // console.log(data.alert)
//     }
//     else if(data.name){
//         console.log(data)
//     }
// }


// alert function
 const showAlert = (msg) => {
    let alertBox = document.querySelector(".error-images");
    let alertMsg = document.querySelector('#error-msg');
    let loginAndSingupMainContainer = document.getElementById('login-and-singup-main-container');
    alertMsg.innerHTML = msg;
    alertBox.classList.add('show');
    loginAndSingupMainContainer.style.height = '800px'
    setTimeout(()=>{
        alertBox.classList.remove('show');
        loginAndSingupMainContainer.style.height = '550px'
    }, 3000);

 }

