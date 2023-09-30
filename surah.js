
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

const searchBox=document.querySelector(".numbers input");
const searchBtn=document.querySelector(".numbers button"); 
const arabicBtn=document.querySelector(".arabic button");
const englishBtn=document.querySelector(".english button");
const tamilBtn=document.querySelector(".tamil button");
const canvas = document.querySelector('#canvas');


var names="";

async  function surahArab(number)
{

const ApiUrl_Ar="http://api.alquran.cloud/v1/surah/"+number+"/ar.alafasy";
const response= await fetch(ApiUrl_Ar);
console.log(response);
var data=await response.json();
console.log(data);




if(response.status == 404)
{
document.querySelector(".error").style.display="block";
document.querySelector(".cont").style.display="none";  
document.querySelector(".ayah-no").style.display="none";
document.querySelector(".hide").style.display="none";
document.querySelector(".open").style.display="none";  
document.getElementById("my-audio").pause(); 
}
else{
    const btns = document.querySelectorAll('.btn');
const imgList = new Array(data.data.ayahs.length);
// if(searchBox.value==data.data.number)
// {
document.querySelector(".cont").style.display="block";  
document.querySelector(".ayah-no").style.display="block";  
document.querySelector(".open").style.display="block";
document.querySelector(".hide").style.display="block";
document.querySelector(".error").style.display="none";
document.querySelector(".noFAyah").style.fontSize="35px";

document.querySelector(".arabic button").style.backgroundColor="red";
document.querySelector(".english button").style.backgroundColor="rgb(131, 235, 192)";
document.querySelector(".tamil button").style.backgroundColor="rgb(131, 235, 192)";

document.querySelector(".arabicName").innerHTML=data.data.name;
document.querySelector(".engName").innerHTML=  data.data.number+". "+ data.data.englishName;

let index=0
document.getElementById("my-audio").setAttribute('src', data.data.ayahs[index].audio);
document.querySelector(".ayah-no").innerHTML="Ayah no: "+data.data.ayahs[index].number;
btns.forEach((button)=>{
  button.addEventListener('click',()=>{
      if(button.classList.contains('btn-left')){
          index--;
          if(index<0){
              index = imgList.length-1;
          }
          
          document.getElementById("my-audio").setAttribute('src', data.data.ayahs[index].audio);
          document.querySelector(".ayah-no").innerHTML="Ayah no: "+data.data.ayahs[index].number;

      }
      else{
          index++;
          if(index===imgList.length){
              index = 0;
          }
          document.getElementById("my-audio").setAttribute('src', data.data.ayahs[index].audio);
          document.querySelector(".ayah-no").innerHTML="Ayah no: "+data.data.ayahs[index].number;

      }
  })
})

for(var j=0;j<data.data.ayahs.length;j++)
{
  
names= names+ data.data.ayahs[j].text+"۝ ";

document.querySelector(".noFAyah").innerHTML=names;

}
}names="";
}
// }
async  function surahEng(number)
{

const ApiUrl_En="http://api.alquran.cloud/v1/surah/"+number+"/en.asad";
const response= await fetch(ApiUrl_En);
var data=await response.json();
console.log(data);

if(response.status == 404)
{
document.querySelector(".error").style.display="block";
document.querySelector(".hide").style.display="none";
document.querySelector(".open").style.display="none";

}

// if(searchBox.value==data.data.number)
// {
  else{
document.querySelector(".open").style.display="block";
document.querySelector(".hide").style.display="block";
document.querySelector(".error").style.display="none";

document.querySelector(".english button").style.backgroundColor="red";
document.querySelector(".arabic button").style.backgroundColor=" rgb(131, 235, 192)";
document.querySelector(".tamil button").style.backgroundColor="rgb(131, 235, 192)";
document.querySelector(".noFAyah").style.fontSize="30px";

document.querySelector(".arabicName").innerHTML=data.data.name;
document.querySelector(".engName").innerHTML=  data.data.number+". "+ data.data.englishName;

for(var j=0;j<data.data.ayahs.length;j++)
{
names= names+ data.data.ayahs[j].text;
document.querySelector(".noFAyah").innerHTML=names;
}
}names="";
}

async  function surahTamil(number)
{

const ApiUrl_Ta="http://api.alquran.cloud/v1/surah/"+number+"/ta.tamil";
const response= await fetch(ApiUrl_Ta);
var data=await response.json();
console.log(data);

if(response.status == 404)
{
document.querySelector(".error").style.display="block";
document.querySelector(".hide").style.display="none";
document.querySelector(".open").style.display="none";
}

// if(searchBox.value==data.data.number)
// {
  else{
document.querySelector(".open").style.display="block";
document.querySelector(".hide").style.display="block";
document.querySelector(".error").style.display="none";
document.querySelector(".english button").style.backgroundColor=" rgb(131, 235, 192)";
document.querySelector(".arabic button").style.backgroundColor=" rgb(131, 235, 192)";
document.querySelector(".tamil button").style.backgroundColor="red";
document.querySelector(".noFAyah").style.fontSize="17px";

document.querySelector(".arabicName").innerHTML=data.data.name;
document.querySelector(".engName").innerHTML=  data.data.number+". "+ data.data.englishName;

for(var j=0;j<data.data.ayahs.length;j++)
{
names= names+ data.data.ayahs[j].text;
document.querySelector(".noFAyah").innerHTML=names;
}
}names="";

}

  
searchBtn.addEventListener("click",()=>{

surahArab(searchBox.value); })

arabicBtn.addEventListener("click",()=>{

surahArab(searchBox.value); })

englishBtn.addEventListener("click",()=>{
   
surahEng(searchBox.value);  })

tamilBtn.addEventListener("click",()=>{

surahTamil(searchBox.value); })