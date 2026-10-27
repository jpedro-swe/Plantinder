const pot='<ellipse cx="100" cy="206" rx="46" ry="7" fill="url(#sh)"/><path d="M68 152h64l-8 46q-1 7-9 7H85q-8 0-9-7z" fill="url(#pt)"/><rect x="62" y="142" width="76" height="16" rx="6" fill="url(#pt)"/><rect x="62" y="142" width="76" height="5" rx="3" fill="#fff" opacity=".25"/><ellipse cx="100" cy="143" rx="34" ry="4" fill="#3b2415"/>';
function frond(a){let s='<g transform="rotate('+a+' 100 146)"><path d="M100 146V28" stroke="#2E8A47" stroke-width="3" fill="none"/>';for(let k=0;k<13;k++){const y=140-k*9,l=30-k*1.9;s+='<ellipse cx="'+(100-l*.5)+'" cy="'+y+'" rx="'+l*.5+'" ry="3.4" transform="rotate(-28 100 '+y+')" fill="url(#g2)"/><ellipse cx="'+(100+l*.5)+'" cy="'+y+'" rx="'+l*.5+'" ry="3.4" transform="rotate(28 100 '+y+')" fill="url(#g2)"/>'}return s+'</g>'}
function pet(a,f){return '<ellipse cx="100" cy="116" rx="12" ry="31" transform="rotate('+a+' 100 146)" fill="'+f+'"/><path d="M100 90V140" stroke="#fff" stroke-opacity=".3" transform="rotate('+a+' 100 146)"/>'}
const P={
cactus:()=>pot+'<path d="M82 110H66q-12 0-12-12V80" stroke="#3C9A55" stroke-width="15" stroke-linecap="round" fill="none"/><path d="M118 124h14q12 0 12-12V92" stroke="#2F8A49" stroke-width="15" stroke-linecap="round" fill="none"/><rect x="80" y="40" width="40" height="108" rx="20" fill="url(#g1)"/><path d="M100 46v98M90 48q-4 48 0 96M110 48q4 48 0 96" stroke="#14502A" stroke-opacity=".45" fill="none"/><g fill="#F3F7E4" opacity=".85"><circle cx="90" cy="70" r="1.5"/><circle cx="110" cy="85" r="1.5"/><circle cx="92" cy="105" r="1.5"/><circle cx="108" cy="122" r="1.5"/><circle cx="100" cy="58" r="1.5"/></g><circle cx="100" cy="38" r="9" fill="#EE5A93"/><circle cx="100" cy="38" r="3.5" fill="#FFD66B"/>',
succ:()=>pot+[-62,-34,0,34,62].map(a=>pet(a,'#6DB89A')).join('')+[-48,-16,16,48].map(a=>pet(a,'url(#g3)')).join('')+'<ellipse cx="100" cy="116" rx="8" ry="20" fill="#DDF3E4"/><ellipse cx="100" cy="108" rx="3" ry="9" fill="#F5C6D8"/>',
fern:()=>pot+[-46,46,-24,24,0].map(frond).join(''),
jib:()=>{let s=pot;[[58,62,-34,1.05],[142,56,32,1.05],[100,26,0,1.15],[48,104,-68,.9],[152,100,68,.9]].forEach(([x,y,r,k])=>{s+='<path d="M100 146Q'+x+' '+((146+y)/2+14)+' '+x+' '+(y+4)+'" stroke="#2E7A40" stroke-width="3" fill="none"/><g transform="translate('+x+' '+(y+6)+') rotate('+r+') scale('+k+')"><path d="M0 0C-22 14-30-16 0-40C30-16 22 14 0 0z" fill="url(#g1)"/><path d="M0-3V-34" stroke="#fff" stroke-opacity=".4" stroke-width="1.5"/></g>'});return s}};
const sv=(k,c)=>'<svg viewBox="0 0 200 220" class="'+(c||'')+'" aria-hidden="true">'+P[k]()+'</svg>';
/* hero */
const hero=[['cactus',0,.8,90,0],['fern',1,1.2,300,.6],['succ',2,.85,520,1.1],['jib',3,1,0,0]];
document.getElementById('heroArt').innerHTML='<svg viewBox="0 0 760 260" aria-label="Cacto, samambaia, suculenta e jiboia em vasos"><g transform="translate(0 0)">'+
[['cactus',20,40,190,0],['fern',190,0,260,.7],['jib',420,20,230,1.4],['succ',590,70,170,2]].map(([k,x,y,w,d])=>'<svg x="'+x+'" y="'+y+'" width="'+w+'" height="'+w*1.1+'" viewBox="0 0 200 220" overflow="visible"><g class="sway" style="animation-delay:-'+d+'s">'+P[k]()+'</g></svg>').join('')+'</g></svg>';
const h1=document.getElementById('h1');
h1.innerHTML='Toda planta merece um lar novo.'.split(' ').map((w,i)=>'<span style="animation-delay:'+(.1+i*.12)+'s">'+w+'&nbsp;</span>').join('');
const heroBox=document.getElementById('heroBox'),sc=document.getElementById('scene').firstElementChild;
for(let i=0;i<9;i++){const l=document.createElement('div');l.className='leaf';l.style.cssText='left:'+Math.random()*100+'%;animation-duration:'+(10+Math.random()*10)+'s;animation-delay:-'+Math.random()*15+'s;width:'+(14+Math.random()*14)+'px';l.innerHTML='<svg viewBox="-30 -42 60 44"><path d="M0 0C-22 14-30-16 0-40C30-16 22 14 0 0z" fill="#B8F26B"/></svg>';heroBox.appendChild(l)}
heroBox.addEventListener('pointermove',e=>{const r=heroBox.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;sc.style.transform='rotateY('+x*10+'deg) rotateX('+(-y*8)+'deg)'});
heroBox.addEventListener('pointerleave',()=>sc.style.transform='');
/* marquee */
const names=['Cacto','Suculenta','Samambaia','Jiboia','Espada-de-são-jorge','Zamioculca','Orquídea','Manjericão','Violeta','Babosa'];
document.getElementById('marq').innerHTML=[...names,...names,...names,...names].map(n=>'<span>'+n+' ✿</span>').join('');
/* deck */
const plants=[
{k:'cactus',bg:'#FBE3C9',n:'Cacto-bola',m:'Doador a 2 km, tamanho pequeno',t:['Pouca água','Sol pleno']},
{k:'succ',bg:'#DCEFF5',n:'Suculenta echeveria',m:'Doadora a 4 km, tamanho pequeno',t:['Pouca água','Boa saúde']},
{k:'fern',bg:'#DDF0D2',n:'Samambaia',m:'Doador a 1 km, tamanho médio',t:['Sombra','Rega frequente']},
{k:'jib',bg:'#F7E6EE',n:'Jiboia',m:'Doadora a 6 km, tamanho grande',t:['Fácil','Meia-sombra']}];
const deck=document.getElementById('deck'),st=document.getElementById('status');let i=0;
function build(p){const c=document.createElement('div');c.className='card';
c.innerHTML='<span class="stamp yes">ADOTAR</span><span class="stamp no">PASSAR</span><div class="art" style="--bgc:'+p.bg+'">'+sv(p.k,'')+'</div><div class="info"><h3>'+p.n+'</h3><div class="meta">'+p.m+'</div><div class="tags">'+p.t.map(x=>'<span>'+x+'</span>').join('')+'</div></div>';drag(c);return c}
function render(){deck.innerHTML='';deck.appendChild(build(plants[(i+1)%4]));deck.appendChild(build(plants[i%4]))}
function go(d){const t=deck.lastElementChild;if(!t)return;t.style.transform='translateX('+d*440+'px) rotate('+d*22+'deg)';t.style.opacity=0;
st.textContent=d>0?'Pedido enviado para '+plants[i%4].n+'!':'Você passou essa planta.';setTimeout(()=>{i++;render()},330)}
function drag(c){let x0=null,dx=0;const y=c.querySelector('.yes'),n=c.querySelector('.no');
c.addEventListener('pointerdown',e=>{if(c!==deck.lastElementChild)return;x0=e.clientX;c.setPointerCapture(e.pointerId);c.style.transition='none'});
c.addEventListener('pointermove',e=>{if(x0===null)return;dx=e.clientX-x0;c.style.transform='translateX('+dx+'px) rotate('+dx/18+'deg)';y.style.opacity=Math.min(1,dx/90);n.style.opacity=Math.min(1,-dx/90)});
const end=()=>{if(x0===null)return;x0=null;c.style.transition='';if(Math.abs(dx)>110)go(dx>0?1:-1);else{c.style.transform='';y.style.opacity=n.style.opacity=0}dx=0};
c.addEventListener('pointerup',end);c.addEventListener('pointercancel',end)}
document.getElementById('yes').onclick=()=>go(1);document.getElementById('no').onclick=()=>go(-1);render();
/* reveal + counters */
const count=el=>{const N=+el.dataset.n,s=el.dataset.s,t0=performance.now();(function f(t){const p=Math.min(1,(t-t0)/1400),v=Math.round(N*(1-Math.pow(1-p,3)));el.textContent=v.toLocaleString('pt-BR')+s;if(p<1)requestAnimationFrame(f)})(t0)};
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');const b=e.target.querySelector('[data-n]');if(b)count(b);io.unobserve(e.target)}}),{threshold:.15});
document.querySelectorAll('.reveal').forEach((el,k)=>{el.style.transitionDelay=(k%4)*80+'ms';io.observe(el)});
const steps=document.getElementById('steps'),fill=document.getElementById('fill');
addEventListener('scroll',()=>{const r=steps.getBoundingClientRect(),p=(innerHeight*.6-r.top)/r.height;fill.style.height=Math.max(0,Math.min(1,p))*(r.height-20)+'px'},{passive:true});
