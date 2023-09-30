
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.querySelector(".main-nav-container");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

const container = document.querySelector('.container');
     
async  function AyahsAR()
{
  const ApiayahAR="https://api.aladhan.com/v1/asmaAlHusna";
  const response= await fetch(ApiayahAR);
  console.log(response);
  var data=await response.json(); 
  console.log(data);

const container = document.querySelector('.container');
const Number=document.querySelector('.noFAyah');
const EN_Name=document.querySelector('.engName');
const AR_Name=document.querySelector('.arabicName');
const TR_Name=document.querySelector('.arTrans');

const btns = document.querySelectorAll('.btn')
const imgList = new Array(data.data.length);

let index=0
btns.forEach((button)=>{
  button.addEventListener('click',()=>{
      if(button.classList.contains('btn-left')){
          index--;
          if(index<0){
              index = imgList.length-1;
          }
          
          Number.style.display="block";
          Number.innerHTML=data.data[index].number;
          AR_Name.innerHTML=data.data[index].name;
          TR_Name.innerHTML=data.data[index].en.meaning;
          EN_Name.innerHTML=data.data[index].transliteration;

      }
      else{
          index++;
          if(index===imgList.length){
              index = 0;
          }
          Number.style.display="block";
          Number.innerHTML=data.data[index].number;
          AR_Name.innerHTML=data.data[index].name;
          TR_Name.innerHTML=data.data[index].en.meaning;
          EN_Name.innerHTML=data.data[index].transliteration;
      }
  })
})
 
}

AyahsAR();