
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
     
var names="";

async  function surahArab(numbers)
  {
    const Apijuzar="http://api.alquran.cloud/v1/juz/"+numbers+"/ar.alafasy";
    const response= await fetch(Apijuzar);
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
    for( var i=0;i<data.data.ayahs.length;i++)
    {  
       
       names= names+ data.data.ayahs[i].text +"۝ ";
       document.querySelector(".arabicName").innerHTML=names;
       document.querySelector(".engName").innerHTML="Juz no: "+data.data.ayahs[i].juz;
      
     }
     names="";

     let index=0;
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

         document.querySelector(".error").style.display="none";
         document.querySelector(".cont").style.display="block";  
         document.querySelector(".ayah-no").style.display="block";  
         document.querySelector(".open").style.display="block";
         document.querySelector(".hide").style.display="block";
         document.querySelector(".arabic button").style.backgroundColor="red";
         document.querySelector(".english button").style.backgroundColor="rgb(131, 235, 192)";
         document.querySelector(".tamil button").style.backgroundColor="rgb(131, 235, 192)";
         document.querySelector(".arabicName").style.fontSize="30px";
    }
 }
  
async  function surahEng(numbers)
  {
    const Apijuzar="http://api.alquran.cloud/v1/juz/"+numbers+"/en.asad";
    const response= await fetch(Apijuzar);
    console.log(response);
    var data=await response.json(); 
    console.log(data);
   
  
    for( var i=0;i<data.data.ayahs.length;i++){
      
       
         
       names= names+ data.data.ayahs[i].text;
       document.querySelector(".arabicName").innerHTML=names;
       document.querySelector(".engName").innerHTML="Juz no: "+data.data.ayahs[i].juz;
     
     }names="";
         document.querySelector(".error").style.display="none";
         document.querySelector(".open").style.display="block";
         document.querySelector(".hide").style.display="block";
         document.querySelector(".english button").style.backgroundColor="red";
         document.querySelector(".arabic button").style.backgroundColor=" rgb(131, 235, 192)";
         document.querySelector(".tamil button").style.backgroundColor="rgb(131, 235, 192)";
         document.querySelector(".arabicName").style.fontSize="30px";
 }

async  function surahTamil(numbers)
 {
    const Apijuzar="http://api.alquran.cloud/v1/juz/"+numbers+"/ta.tamil";
    const response= await fetch(Apijuzar);
    console.log(response);
    var data=await response.json(); 
    console.log(data);
   
    for( var i=0;i<data.data.ayahs.length;i++){
 
         
       names= names+ data.data.ayahs[i].text;
       document.querySelector(".arabicName").innerHTML=names;
       document.querySelector(".engName").innerHTML="Juz no: "+data.data.ayahs[i].juz;
     
    }names="";
    
         document.querySelector(".error").style.display="none";
         document.querySelector(".open").style.display="block";
         document.querySelector(".hide").style.display="block";
         document.querySelector(".english button").style.backgroundColor=" rgb(131, 235, 192)";
         document.querySelector(".arabic button").style.backgroundColor=" rgb(131, 235, 192)";
         document.querySelector(".tamil button").style.backgroundColor="red";
         
         document.querySelector(".arabicName").style.fontSize="20px";
 }
          
    searchBtn.addEventListener("click",()=>{
        
        surahArab(searchBox.value); })

    arabicBtn.addEventListener("click",()=>{
      
        surahArab(searchBox.value); })

    englishBtn.addEventListener("click",()=>{
          
        surahEng(searchBox.value);  })

    tamilBtn.addEventListener("click",()=>{
           
        surahTamil(searchBox.value); })
