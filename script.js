 function addBubble(){
  let text = document.getElementById('dialogue').value;
  if(text.trim() === ""){ alert("Please enter dialogue!"); return; }
  let div = document.createElement('div');
  div.className = 'bubble';
  div.innerText = text;
  div.style.top = Math.floor(Math.random()*350) + "px";
  div.style.left = Math.floor(Math.random()*500) + "px";
  document.getElementById('bubbles').appendChild(div);
  document.getElementById('dialogue').value = "";
}
function clearAll(){
  document.getElementById('bubbles').innerHTML = "";
}