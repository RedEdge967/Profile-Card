const black_theme = document.querySelector(".black-theme");

const change = document.querySelector("#switch");


change.addEventListener("click",changeTheme);


function changeTheme(){
  if(document.body.classList.contains("black-theme")){
   document.body.classList.remove("black-theme");
    document.body.classList.add("white-theme");
   change.innerHTML ='<i class="fas fa-moon"></i>';
     }else{
        document.body.classList.remove("white-theme");
    document.body.classList.add("black-theme");
         change.innerHTML ='<i class="fas fa-sun"></i>';
     }
}