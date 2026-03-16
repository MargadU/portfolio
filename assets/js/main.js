document.addEventListener('DOMContentLoaded',function(){
  const y=new Date().getFullYear();
  document.getElementById('year')?.append(y);
  document.getElementById('year-2')?.append(y);
  document.getElementById('year-3')?.append(y);
  const navToggle=document.getElementById('navToggle');
  const mainNav=document.getElementById('mainNav');
  navToggle?.addEventListener('click',()=>{mainNav.classList.toggle('open');});
});
