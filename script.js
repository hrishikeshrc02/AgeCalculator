const dob=document.getElementById("age");

const currentYear=new Date().getFullYear();

const buttonEl=document.getElementById("gnr-btn");

const resultParagraph=document.getElementById("result");

buttonEl.addEventListener("click",function(){
    const age = new Date(dob.value);
    const ageInMs = Date.now() - age.getTime();
    const ageDate = new Date(ageInMs);
    const currAge = Math.abs(ageDate.getUTCFullYear()- 1970);


    //resultParagraph.textContent='Your age is : ${currAge} years';
    resultParagraph.innerHTML = `Your age is ${currAge} years.`;

});