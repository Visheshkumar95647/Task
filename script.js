const logoDiv = document.querySelector('.logo')
const imgDiv = document.querySelector('.img');
const contentDiv = document.querySelector('.content');
const detailDiv = document.querySelector('.details');
const login = document.querySelector('.loginbtn');
login.addEventListener("click" , ()=>{
    imgDiv.id = "remove-data-img";
    contentDiv.id = "remove-data";
    detailDiv.id = "remove-data";
    logoDiv.id = "logo-to-middle";
    
})