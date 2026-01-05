let count = 0;
let lastTime = 0;

window.addEventListener('scroll', ()=>{
  const now = Date.now();

  if(now - lastTime >= 500){
    count++;
    document.getElementById('count').innerText =
      'Scroll count: ' + count;
    lastTime = now;
  }
});
