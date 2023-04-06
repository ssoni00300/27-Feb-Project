const DecrementBtn=document.getElementById("Decrement");
const IncrementBtn=document.getElementById("Increment");
const ResetBtn=document.getElementById("Reset");
const DisplayValue=document.getElementById("DisplayValue");

// Function for Decrement Button Click
function DecreBtnClick(){
    const value=Number(DisplayValue.innerText);
    if(value>0){
        DisplayValue.innerText=value-1;
    }
    else{
        alert("Negative value not allowed.")
    }
}
// Decrement Button Click
DecrementBtn.addEventListener("click",DecreBtnClick);


// Function for Increment Button Click
function IncreBtnClick(){
    const value=Number(DisplayValue.innerText);
    if(value>=50){
        alert("50+ values are not allowed.")
    }
    else{
        DisplayValue.innerText=value+1;
    }
}
// Increment Button Click
IncrementBtn.addEventListener("click",IncreBtnClick);


//Function for Reset Button Click
function ResetCLick(){
    DisplayValue.innerText=0;
}
// Reset Button Click
ResetBtn.addEventListener("click",ResetCLick);




