const btn = document.getElementById("btn");
const heading = document.getElementById("heading");

btn.addEventListener("click", () => {
    if(heading.textContent==="The most affordable learning platform"){
        heading.textContent = "PW Skills";
    }
    else{
        heading.textContent = "The most affordable learning platform";
    }
});