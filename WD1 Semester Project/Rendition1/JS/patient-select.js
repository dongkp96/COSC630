/*Patient Selection Windows */
const patientHome =document.getElementById("patient-list");
const patientCreate =document.getElementById("patient-creation");
const patientSelect =document.getElementById("patient-select");

/*Buttons to be selected*/

//main page buttons
const addBtn = document.getElementById("add");
const selectBtn = document.getElementById("select");

//register dialog buttons
const registerBtn = document.getElementById("register");
const registerReturnBtn = document.getElementById("register-return");

//selected page buttons
const profileGoBtn = document.getElementById("profile-go");
const selectReturnBtn = document.getElementById("select-return");
const deleteBtn = document.getElementById("delete");

/*Patient list */
const patientList = document.querySelector(".list");


/*Event Listeners*/

//main page buttons
addBtn.addEventListener("click", (e)=>{
    e.preventDefault();

    patientCreate.classList.toggle("display-none");
    patientCreate.classList.toggle("display");
    patientHome.classList.toggle("display-flex");
    patientHome.classList.toggle("display-none");

});

selectBtn.addEventListener("click", (e)=>{
    e.preventDefault();

    patientHome.classList.toggle("display-flex");
    patientHome.classList.toggle("display-none");
    patientSelect.classList.toggle("display-none");
    patientSelect.classList.toggle("display");

    const patientInfo= document.getElementById("selected").textContent;
    document.querySelector(".patient-display").textContent= patientInfo;
});

//registration dialog buttpns

registerReturnBtn.addEventListener("click", (e)=>{
    e.preventDefault();

    patientCreate.classList.toggle("display-none");
    patientCreate.classList.toggle("display");
    patientHome.classList.toggle("display-flex");
    patientHome.classList.toggle("display-none");

});

registerBtn.addEventListener("click", (e)=>{
    e.preventDefault();
});

//Patient selected diaolog page buttons

selectReturnBtn.addEventListener("click", (e)=>{
    e.preventDefault();

    patientSelect.classList.toggle("display-none");
    patientSelect.classList.toggle("display");
    patientHome.classList.toggle("display-flex");
    patientHome.classList.toggle("display-none");   
});

profileGoBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    
});

deleteBtn.addEventListener("click", (e)=>{
    e.preventDefault();

    document.getElementById("selected");

});

//Patient list 
patientList.addEventListener("click", (e)=>{
    
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