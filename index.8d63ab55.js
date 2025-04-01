class t{constructor(t=null){this.size=4,this.board=t||this.createEmptyBoard(),this.score=0,this.status="idle"}createEmptyBoard(){return Array(this.size).fill().map(()=>Array(this.size).fill(0))}getState(){return this.board.map(t=>[...t])}getScore(){return this.score}getStatus(){return this.status}addRandomTile(){let t=[];for(let e=0;e<this.size;e++)for(let s=0;s<this.size;s++)0===this.board[e][s]&&t.push([e,s]);if(t.length>0){let[e,s]=t[Math.floor(Math.random()*t.length)];return this.board[e][s]=.9>Math.random()?2:4,[e,s]}return null}start(){"idle"===this.status&&(this.addRandomTile(),this.addRandomTile(),this.status="playing")}restart(){this.board=this.createEmptyBoard(),this.score=0,this.status="idle",this.start()}merge(t){let e=t.filter(t=>0!==t),s=[];for(let t=0;t<e.length-1;t++)e[t]===e[t+1]&&(e[t]*=2,this.score+=e[t],s.push(t),e.splice(t+1,1),t++);return[[...e,...Array(this.size-e.length).fill(0)],s]}moveLeft(){let t=!1,e=[];for(let s=0;s<this.size;s++){let[r,i]=this.merge(this.board[s]);r.every((t,e)=>t===this.board[s][e])||(t=!0,i.forEach(t=>e.push([s,t]))),this.board[s]=r}return this.finishMove(t,e)}moveRight(){let t=!1,e=[];for(let s=0;s<this.size;s++){let r=this.board[s].slice().reverse(),[i,a]=this.merge(r),o=i.reverse();o.every((t,e)=>t===this.board[s][e])||(t=!0,a.forEach(t=>{e.push([s,this.size-1-t])})),this.board[s]=o}return this.finishMove(t,e)}moveUp(){let t=!1,e=[];for(let s=0;s<this.size;s++){let r=this.board.map(t=>t[s]),[i,a]=this.merge(r);i.every((t,e)=>t===r[e])||(t=!0,a.forEach(t=>e.push([t,s])));for(let t=0;t<this.size;t++)this.board[t][s]=i[t]}return this.finishMove(t,e)}moveDown(){let t=!1,e=[];for(let s=0;s<this.size;s++){let r=this.board.map(t=>t[s]).reverse(),[i,a]=this.merge(r),o=i.reverse();o.every((t,e)=>t===r[e])||(t=!0,a.forEach(t=>{e.push([this.size-1-t,s])}));for(let t=0;t<this.size;t++)this.board[t][s]=o[t]}return this.finishMove(t,e)}finishMove(t,e){let s=null;return t?(s=this.addRandomTile(),this.board.some(t=>t.includes(2048))?this.status="won":this.canMove()||(this.status="lost"),[!0,e,s]):[!1,[],null]}canMove(){for(let t=0;t<this.size;t++)for(let e=0;e<this.size;e++)if(0===this.board[t][e]||e<this.size-1&&this.board[t][e]===this.board[t][e+1]||t<this.size-1&&this.board[t][e]===this.board[t+1][e])return!0;return!1}}document.addEventListener("DOMContentLoaded",()=>{let e=new t,s=Array.from(document.querySelectorAll(".field-cell")),r=document.querySelector(".game-score"),i=document.querySelector(".button"),a=document.querySelector(".message-start"),o=document.querySelector(".message-win"),l=document.querySelector(".message-lose");function h(t=[],n=null){let d=e.getState();s.forEach((e,s)=>{let r=Math.floor(s/4),i=s%4,a=d[r][i],o=e.textContent?parseInt(e.textContent):0;e.textContent=a||"",e.className=`field-cell${a?` field-cell--${a}`:""}`,t.some(([t,e])=>t===r&&e===i)&&(e.style.animation="merge-animation 0.3s ease",setTimeout(()=>{e.style.animation=""},300)),n&&r===n[0]&&i===n[1]&&a!==o&&(e.style.animation="appear-animation 0.3s ease",setTimeout(()=>{e.style.animation=""},300))}),r.textContent=e.getScore(),a.classList.toggle("hidden","idle"!==e.getStatus()),o.classList.toggle("hidden","won"!==e.getStatus()),l.classList.toggle("hidden","lost"!==e.getStatus()),i.classList.toggle("start","idle"===e.getStatus()),i.classList.toggle("restart","idle"!==e.getStatus()),i.textContent="idle"===e.getStatus()?"Start":"Restart"}i.addEventListener("click",()=>{"idle"===e.getStatus()?e.start():e.restart(),h()}),document.addEventListener("keydown",t=>{if("playing"!==e.getStatus())return;let s=!1,r=[],i=null;switch(t.key){case"ArrowLeft":[s,r,i]=e.moveLeft();break;case"ArrowRight":[s,r,i]=e.moveRight();break;case"ArrowUp":[s,r,i]=e.moveUp();break;case"ArrowDown":[s,r,i]=e.moveDown()}s&&h(r,i)}),h()});
//# sourceMappingURL=index.8d63ab55.js.map
