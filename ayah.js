
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


async  function AyahsAR(numbers)
{

const ApiUrl_audio="http://api.alquran.cloud/v1/ayah/"+numbers+"/ar.alafasy";
const response=await fetch(ApiUrl_audio);
console.log(response);
var data=await response.json();
console.log(data);

if(response.status == 404)
{
document.querySelector(".error").style.display="block";
document.querySelector(".hide").style.display="none";
document.querySelector(".open").style.display="none";
document.getElementById("my-audio").pause();
}
else
{
document.querySelector(".arabicName").innerHTML=data.data.surah.name;
document.querySelector(".engName").innerHTML=data.data.surah.number+". "+ data.data.surah.englishName +" (Ayah: "+data.data.number+")";
document.querySelector(".noFAyah").innerHTML=data.data.text;

document.querySelector(".hide").style.display="block";
document.querySelector(".error").style.display="none";
document.querySelector(".open").style.display="block";



document.getElementById("my-audio").setAttribute('src', data.data.audio);

document.querySelector(".arabic button").style.backgroundColor="red";
document.querySelector(".english button").style.backgroundColor="rgb(131, 235, 192)";
document.querySelector(".tamil button").style.backgroundColor="rgb(131, 235, 192)";
}
}

async  function AyahsEN(numbers)
{
const ApiayahEN="http://api.alquran.cloud/v1/ayah/"+numbers+"/editions/en.asad";
const response= await fetch(ApiayahEN);
console.log(response);
var data=await response.json(); 
console.log(data);

document.querySelector(".arabicName").innerHTML=data.data[0].surah.name;
document.querySelector(".engName").innerHTML=data.data[0].surah.number+". "+ data.data[0].surah.englishName +" (Ayah: "+data.data[0].number+")";
document.querySelector(".noFAyah").innerHTML=data.data[0].text;

document.querySelector(".error").style.display="none";
document.querySelector(".open").style.display="block";
document.querySelector(".hide").style.display="block";
document.querySelector(".english button").style.backgroundColor="red";
document.querySelector(".arabic button").style.backgroundColor=" rgb(131, 235, 192)";
document.querySelector(".tamil button").style.backgroundColor="rgb(131, 235, 192)";
       
}

async  function AyahsTA(numbers)
{
const ApiayahTA="http://api.alquran.cloud/v1/ayah/"+numbers+"/editions/ta.tamil";
const response= await fetch(ApiayahTA);
console.log(response);
var data=await response.json(); 
console.log(data);


document.querySelector(".arabicName").innerHTML=data.data[0].surah.name;
document.querySelector(".engName").innerHTML=data.data[0].surah.number+". "+ data.data[0].surah.englishName +" (Ayah: "+data.data[0].number+")";
document.querySelector(".noFAyah").innerHTML=data.data[0].text;

document.querySelector(".error").style.display="none";
document.querySelector(".open").style.display="block";
document.querySelector(".hide").style.display="block";
document.querySelector(".english button").style.backgroundColor=" rgb(131, 235, 192)";
document.querySelector(".arabic button").style.backgroundColor=" rgb(131, 235, 192)";
document.querySelector(".tamil button").style.backgroundColor="red";

} 

searchBtn.addEventListener("click",()=>{

    AyahsAR(searchBox.value); })

arabicBtn.addEventListener("click",()=>{

    AyahsAR(searchBox.value); })

englishBtn.addEventListener("click",()=>{

    AyahsEN(searchBox.value); })

tamilBtn.addEventListener("click",()=>{
    
    AyahsTA(searchBox.value); })