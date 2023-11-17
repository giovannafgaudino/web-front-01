// alert("Teste!");  -- Testando se o JS funciona no HTML

const button = document.querySelector("button");

const popup = document.querySelector(".popup-wraper");

const openClick = function(){
    popup.classList.add("d-block");
}
const eventModal = function(event){
    const clickOfElement = event.target.classList[0];
    const classListNameArray = ["popup-close", "popup-wraper", "popup-link"];
    // console.log(classListNameArray.includes(clickOfElement));
    const isClassList = classListNameArray.includes(clickOfElement);
    if (isClassList){
        popup.classList.remove("d-block");
    }
}


button.addEventListener("click", openClick);

// button.addEventListener("click",function(){
//     popup.classList.add("d-block");
// });


popup.addEventListener("click", eventModal);

// popup.addEventListener("click", function(event){
//     const clickOfElement = event.target.classList[0];
//     const classListNameArray = ["popup-close", "popup-wraper", "popup-link"];

//     // console.log(classListNameArray.includes(clickOfElement));

//     const isClassList = classListNameArray.includes(clickOfElement);

//     if (isClassList){
//         popup.classList.remove("d-block");
//     }
// });


