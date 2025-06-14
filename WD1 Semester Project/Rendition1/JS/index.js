/*Clinician selection windows */
const clinicianHome = document.getElementById("clinician-list");
const clinicianCreate = document.getElementById("clinician-creation");
const clinicianSelect =document.getElementById("clinician-select");
const login = document.getElementById("clinician-login");


/*buttons to be selected */

//main page buttons
const addBtn = document.getElementById("add");
const selectBtn = document.getElementById("select");

//register dialog buttons
const registerBtn = document.getElementById("register");
const registerReturnBtn = document.getElementById("register-return");

//selected page buttons
const loginGoBtn = document.getElementById("login-go");
const selectReturnBtn = document.getElementById("select-return");
const deleteBtn = document.getElementById("delete");

//login page buttons
const loginBtn = document.getElementById("login");
const loginReturnBtn = document.getElementById("login-return");

/*list containing clinician names to be selected*/
const clinicianList = document.querySelector(".list");

/*event listeners*/

//main page buttons
addBtn.addEventListener("click", (e)=>{
    e.preventDefault();

    clinicianCreate.classList.toggle("display-none");
    clinicianCreate.classList.toggle("display");
    clinicianHome.classList.toggle("display-flex");
    clinicianHome.classList.toggle("display-none");

});

selectBtn.addEventListener("click", (e)=>{
    e.preventDefault();

    clinicianHome.classList.toggle("display-flex");
    clinicianHome.classList.toggle("display-none");
    clinicianSelect.classList.toggle("display-none");
    clinicianSelect.classList.toggle("display");

    const clinicianInfo= document.getElementById("selected").textContent;
    document.querySelector(".clinician-display").textContent= clinicianInfo;
    document.querySelector(".clinician-display-login").textContent = clinicianInfo;
});

//registration dialog buttpns

registerReturnBtn.addEventListener("click", (e)=>{
    e.preventDefault();

    clinicianCreate.classList.toggle("display-none");
    clinicianCreate.classList.toggle("display");
    clinicianHome.classList.toggle("display-flex");
    clinicianHome.classList.toggle("display-none");

});

registerBtn.addEventListener("click", (e)=>{
    e.preventDefault();
});

//Clinician selected diaolog page buttons
selectReturnBtn.addEventListener("click", (e)=>{
    e.preventDefault();

    clinicianSelect.classList.toggle("display-none");
    clinicianSelect.classList.toggle("display");
    clinicianHome.classList.toggle("display-flex");
    clinicianHome.classList.toggle("display-none");   
});

loginGoBtn.addEventListener("click", (e)=>{
    e.preventDefault();

    login.classList.toggle("display-none");
    login.classList.toggle("display");
    clinicianSelect.classList.toggle("display-none");
    clinicianSelect.classList.toggle("display");    
    
});

deleteBtn.addEventListener("click", (e)=>{
    e.preventDefault();

    document.getElementById("selected").remo;

});

//login dialog buttons
loginReturnBtn.addEventListener("click", (e)=>{
    e.preventDefault();

    login.classList.toggle("display-none");
    login.classList.toggle("display");
    clinicianSelect.classList.toggle("display-none");
    clinicianSelect.classList.toggle("display");       
} )

loginBtn.addEventListener("click", (e)=>{

});


//clinician list

clinicianList.addEventListener("click", (e)=>{
    
    if(document.getElementById("selected")){
        const lastSelected = document.getElementById("selected");
        lastSelected.removeAttribute("id");
        const newSelected = e.target;
        newSelected.setAttribute("id", "selected");
    }else{
        const newSelected = e.target;
        newSelected.setAttribute("id", "selected");
    }
});



