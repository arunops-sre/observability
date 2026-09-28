const toggle=document.getElementById("themeToggle");
toggle.addEventListener("click",()=>{
  document.body.classList.toggle("light");
  toggle.textContent=document.body.classList.contains("light")?"☀":"☾";
  localStorage.setItem("arunops-theme",document.body.classList.contains("light")?"light":"dark");
});
if(localStorage.getItem("arunops-theme")==="light"){
  document.body.classList.add("light"); toggle.textContent="☀";
}