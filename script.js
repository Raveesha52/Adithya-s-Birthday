// ✏️ EDIT HERE ------------------------------------------
const HER_NAME="Adithya", MY_NAME="Raveesha";
const BDAY_MONTH=10, BDAY_DAY=18;   // her birthday (month 1-12, day)
const TURNING=21;                   // age she is turning (or set to 0 to hide)
const SURPRISE="Your special surprise message goes here! 🎁";
// -------------------------------------------------------
const $=s=>document.querySelectorAll(s), reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
$('.her').forEach(e=>e.textContent=HER_NAME);$('.me').forEach(e=>e.textContent=MY_NAME);
$('.age').forEach(e=>e.textContent=TURNING||'');
$('nav a').forEach(a=>{const f=location.pathname.split('/').pop()||'index.html';if(a.getAttribute('href')===f)a.classList.add('on')});
const cols=['#ff8fab','#cdb8ff','#ffd29c','#fff7fa','#8fd3ff','#b8f5c9'];
// confetti + balloons in the background
if(!reduce){
for(let i=0;i<30;i++){const c=document.createElement('div');c.className='confetti';c.style.left=Math.random()*100+'vw';c.style.background=cols[i%6];
c.style.animationDuration=7+Math.random()*9+'s';c.style.animationDelay=-Math.random()*14+'s';c.style.borderRadius=i%3?'2px':'50%';document.body.appendChild(c)}
for(let i=0;i<7;i++){const b=document.createElement('div');b.className='balloon';b.style.left=5+i*14+Math.random()*6+'vw';b.style.background=cols[i%6];
b.style.animationDuration=16+Math.random()*10+'s';b.style.animationDelay=-Math.random()*20+'s';b.style.opacity=.55;document.body.appendChild(b)}}
// burst of party emojis from a point
function burst(x,y,n=30){if(reduce)return;for(let i=0;i<n;i++){const s=document.createElement('span');s.className='heart';s.textContent=['🎉','🎊','💖','✨','🎈','🌸'][i%6];
s.style.left=x+'px';s.style.top=y+'px';const a=Math.random()*6.28,r=90+Math.random()*190;
s.style.setProperty('--x',Math.cos(a)*r+'px');s.style.setProperty('--y',Math.sin(a)*r-70+'px');document.body.appendChild(s);setTimeout(()=>s.remove(),1700)}}
// hero name letters
const h=document.querySelector('.hero h1 .letters');
if(h)h.innerHTML=[...HER_NAME].map((c,i)=>`<span style="animation-delay:${.3+i*.08}s">${c===' '?'&nbsp;':c}</span>`).join('');
// typing line
const t=document.querySelector('.typed');
if(t){const lines=["to the most amazing friend ever.","another year of you being wonderful.","may today be as special as you are."];let l=0,c=0,del=false;
(function tick(){const s=lines[l];t.textContent=s.slice(0,c);c+=del?-1:1;let d=del?30:70;
if(!del&&c>s.length){del=true;d=1600}else if(del&&c<0){del=false;l=(l+1)%lines.length;d=400}setTimeout(tick,d)})()}
// countdown
const cd=document.querySelector('#countdown');
if(cd){const tick=()=>{const n=new Date();let b=new Date(n.getFullYear(),BDAY_MONTH-1,BDAY_DAY);
if(n.getMonth()===BDAY_MONTH-1&&n.getDate()===BDAY_DAY){cd.innerHTML='<div class="today">🎉 It\'s today! Happy Birthday! 🎉</div>';return}
if(b<n)b=new Date(n.getFullYear()+1,BDAY_MONTH-1,BDAY_DAY);const d=b-n,u=[['days',864e5],['hours',36e5],['mins',6e4],['secs',1e3]];
cd.innerHTML='<div class="count">'+u.map(([k,v])=>`<div><b>${Math.floor(d/v)%(k==='days'?1e9:k==='hours'?24:60)}</b><small>${k}</small></div>`).join('')+'</div>'};tick();setInterval(tick,1000)}
// cake
const bt=document.querySelector('#blow');
if(bt)bt.onclick=e=>{const k=document.querySelector('.cake');const out=k.classList.toggle('out');
document.querySelector('.wishmsg').textContent=out?'Make a wish… and may it come true! ✨':'';
bt.textContent=out?'Light them again 🕯️':'Blow out the candles 🎂';if(out)burst(e.clientX,e.clientY,40)};
// scroll reveal
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.2});
$('.reveal').forEach(e=>io.observe(e));
// lightbox
const lb=document.querySelector('.lightbox');
if(lb){$('.card').forEach(c=>c.onclick=()=>{lb.querySelector('img').src=c.querySelector('img').src;lb.classList.add('open')});
lb.onclick=()=>lb.classList.remove('open');addEventListener('keydown',e=>e.key==='Escape'&&lb.classList.remove('open'))}
// hearts + gift
const hb=document.querySelector('#hearts');if(hb)hb.onclick=e=>burst(e.clientX,e.clientY,36);
const g=document.querySelector('#gift');
if(g)g.onclick=e=>{const s=document.querySelector('.surprise');s.textContent=SURPRISE;s.classList.add('show');g.textContent='🎉';g.style.animation='none';burst(e.clientX,e.clientY,50)};
