// shops onclick function activating 
let card = document.querySelector(".trend");
let card2 = document.getElementById("trendSec");
let blog = document.querySelector(".trends");
let mainpage = document.querySelector(".main");


function shops()
{
  mainpage.style.display="none";
  blog.style.display="none";
}

// blogs onclick function activating 

function blogs() 
{
  mainpage.style.display="none";
  card.style.display="none";
  card2.style.display="none"
  blog.style.display="block";
  
}