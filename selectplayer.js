let ar = []
//if (length.ar<=5)
let btn = document.getElementById('bplayer1');
let btn2 = document.getElementById('bplayer2');
let btn3 = document.getElementById('bplayer3');
let btn4 = document.getElementById('bplayer4');
let btn5 = document.getElementById('bplayer5');
let btn6 = document.getElementById('bplayer6');


if (ar.length <= 5) {
  btn.addEventListener('click', () => {
    const ply = document.getElementById('tplayer1').innerText;
    ar.push(ply);
    const dis = document.createAttribute("disabled");
    btn.setAttributeNode(dis);
    const list = document.getElementById('list');
 
    list.innerHTML = ar.map(i => `<li>${i}</li>`);
  })
  btn2.addEventListener('click', () => {
    const ply2 = document.getElementById('tplayer2').innerText;
    ar.push(ply2);
    const dis2 = document.createAttribute("disabled");
    btn2.setAttributeNode(dis2);
    const list = document.getElementById('list');
 
    list.innerHTML = ar.map(i => <li>${i}</li>);
  })

  btn3.addEventListener('click', () => {
    const ply3 = document.getElementById('tplayer3').innerText;
    ar.push(ply3);
    const dis3 = document.createAttribute("disabled");
    btn3.setAttributeNode(dis3);
    const list = document.getElementById('list');
 
    list.innerHTML = ar.map(i => `<li>${i}</li>`);
  })

  btn4.addEventListener('click', () => {
    const ply4 = document.getElementById('tplayer4').innerText;
    ar.push(ply4);
    const dis4 = document.createAttribute("disabled");
    btn4.setAttributeNode(dis4);
    const list = document.getElementById('list');
 
    list.innerHTML = ar.map(i => `<li>${i}</li>`);
  })

  btn5.addEventListener('click', () => {
    const ply5 = document.getElementById('tplayer5').innerText;
    ar.push(ply5);
    const dis5 = document.createAttribute("disabled");
    btn5.setAttributeNode(dis5);
    const list = document.getElementById('list');
 
    list.innerHTML = ar.map(i => `<li>${i}</li>`);
  })

  btn6.addEventListener('click', () => {
    const ply6 = document.getElementById('tplayer6').innerText;
    ar.push(ply6);
    const dis6 = document.createAttribute("disabled");
    btn6.setAttributeNode(dis6);
    const list = document.getElementById('list');
 
    list.innerHTML = ar.map(i => `<li>${i}</li>`);
  })
}
console.log('ar.length');
// if (ar.length < 5) {
//   console.log('');
//     alert("You can only select 5 players");
//     ar.pop(); // remove last player from array
//     console.log(ar.pop());
//     return;
 
  