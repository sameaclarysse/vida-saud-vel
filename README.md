# Vida Saudável

Tranforme em um site profissional                      <!DOCTYPE html>

<html lang="pt-BR">

<head>

<meta charset="utf-8">

<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">

<title>Vida Saudável – Saúde e Bem-Estar</title>

<style>

:root{--bg:#f2f8ff;--card:#fff;--ink:#0b2545;--blue:#1565c0;--blue2:#0d47a1;--soft:#dbeafe;--red:#c62828;--green:#1b7a3d;--fs:20px;

box-sizing:border-box;padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}

@media (prefers-color-scheme:dark){:root:not([data-theme="light"]){--bg:#0a1a2f;--card:#12294a;--ink:#eaf3ff;--blue:#64b5f6;--blue2:#90caf9;--soft:#1c3a66;--red:#ef5350;--green:#66bb6a;color-scheme:dark}}

:root[data-theme="dark"]{--bg:#0a1a2f;--card:#12294a;--ink:#eaf3ff;--blue:#64b5f6;--blue2:#90caf9;--soft:#1c3a66;--red:#ef5350;--green:#66bb6a;color-scheme:dark}

*{box-sizing:border-box}

html{scroll-padding-top:70px}

body{margin:0;background:var(--bg);color:var(--ink);font:var(--fs)/1.55 system-ui,-apple-system,"Segoe UI",Arial,sans-serif}

header{position:sticky;top:0;z-index:5;background:var(--blue2);color:#fff;display:flex;flex-wrap:wrap;gap:8px;align-items:center;justify-content:space-between;padding:10px 16px}

header b{font-size:1.2em}

nav{display:flex;gap:6px;flex-wrap:wrap}

nav a,.fs button{color:#fff;text-decoration:none;background:rgba(255,255,255,.18);padding:6px 12px;border-radius:20px;font-size:.8em;border:0;font-family:inherit;cursor:pointer}

.fs{display:flex;gap:6px}

.hero{background:linear-gradient(135deg,#1565c0,#42a5f5);color:#fff;text-align:center;padding:40px 18px}

.hero h1{margin:0 0 8px;font-size:1.9em}

.hero p{margin:0 auto 18px;max-width:640px}

main{max-width:960px;margin:auto;padding:16px}

section{background:var(--card);border-radius:18px;padding:22px;margin:20px 0;box-shadow:0 2px 10px rgba(21,101,192,.12);border-top:6px solid var(--blue)}

h2{margin:0 0 6px;color:var(--blue2);font-size:1.5em}

.sub{margin:0 0 14px;opacity:.85}

.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:14px}

.box{background:var(--soft);border-radius:14px;padding:16px}

.box h3{margin:0 0 4px;font-size:1.05em}

.box p{margin:0 0 10px;font-size:.9em}

.btn{display:inline-block;background:var(--blue);color:#fff;border:0;border-radius:12px;padding:12px 18px;font:inherit;font-weight:700;text-decoration:none;cursor:pointer;margin:3px 3px 3px 0}

:root:not([data-theme="dark"]) .btn{background:var(--blue2)}

@media (prefers-color-scheme:dark){:root:not([data-theme="light"]) .btn{color:#06203d}}

:root[data-theme="dark"] .btn{color:#06203d}

.btn.red{background:var(--red)!important;color:#fff!important}

.btn.wa{background:var(--green)!important;color:#fff!important}

.btn.out{background:transparent!important;color:var(--blue2)!important;border:2px solid var(--blue)}

.sos{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:12px}

.sos a{background:var(--red);color:#fff;text-align:center;border-radius:14px;padding:16px 8px;text-decoration:none;font-weight:700}

.sos a span{display:block;font-size:2em}

form{display:flex;flex-wrap:wrap;gap:10px;margin:12px 0}

input{font:inherit;padding:11px;border-radius:10px;border:2px solid var(--blue);background:var(--card);color:var(--ink);flex:1;min-width:140px}

ul{list-style:none;padding:0;margin:8px 0}

li{display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:8px;background:var(--soft);border-radius:12px;padding:12px 14px;margin:8px 0}

.empty{opacity:.7}

#alerta{display:none;position:fixed;inset:auto 12px calc(12px + env(safe-area-inset-bottom,0px)) 12px;z-index:20;background:var(--red);color:#fff;padding:18px;border-radius:16px;text-align:center;font-weight:700;box-shadow:0 4px 20px rgba(0,0,0,.4)}

footer{text-align:center;padding:24px;opacity:.8;font-size:.85em}

:focus-visible{outline:4px solid #ffb300;outline-offset:2px}

.reveal{opacity:0;transform:translateY(26px);transition:opacity .7s,transform .7s}.reveal.in{opacity:1;transform:none}

.box,.btn,.sos a{transition:transform .2s,box-shadow .2s}.box:hover,.sos a:hover{transform:translateY(-4px);box-shadow:0 8px 18px rgba(21,101,192,.25)}.btn:hover{transform:translateY(-2px)}.btn:active{transform:scale(.95)}

.sos a{animation:pulso 2.4s infinite}@keyframes pulso{50%{box-shadow:0 0 0 8px rgba(198,40,40,.18)}}

.copos{display:flex;flex-wrap:wrap;gap:8px;margin:10px 0}.copo{font-size:1.6em;background:var(--card);border:2px solid var(--blue);border-radius:12px;padding:4px 10px;cursor:pointer;opacity:.4;transition:.2s}.copo.on{opacity:1;background:var(--soft);transform:scale(1.08)}

.barra{height:14px;background:var(--card);border-radius:8px;overflow:hidden}.barra i{display:block;height:100%;width:0;background:linear-gradient(90deg,#42a5f5,#1565c0);transition:width .5s}

.ar{width:130px;height:130px;margin:14px auto;border-radius:50%;background:radial-gradient(#90caf9,#1565c0);color:#fff;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;font-size:.85em;transform:scale(.6);transition:transform 4s ease-in-out}.ar.in{transform:scale(1.25)}

#imcR{font-weight:700;margin-top:8px;min-height:3em}

#dica{min-height:4.5em;transition:opacity .3s}

@media (prefers-reduced-motion:reduce){*{animation:none!important;transition:none!important}.reveal{opacity:1;transform:none}}

</style>

</head>

<body>

<header>

  <b>💙 Vida Saudável</b>

  <nav><a href="#postos">Postos</a><a href="#medicos">Médicos</a><a href="#bem">Bem-estar</a><a href="#hospital">Hospital</a><a href="#remedios">Remédios</a><a href="#familia">Família</a></nav>

  <div class="fs" aria-label="Tamanho da letra"><button onclick="fonte(-2)" aria-label="Diminuir letra">A−</button><button onclick="fonte(2)" aria-label="Aumentar letra">A+</button><button onclick="tema()" aria-label="Alternar tema claro e escuro">🌓</button></div>

</header>



<div class="hero">

  <div id="saud" style="font-size:1.3em;margin-bottom:6px"></div>

  <h1>Cuidar de você é o nosso compromisso</h1>

  <p>Encontre postos de saúde, fale com médicos, receba lembretes dos seus remédios e tenha contatos de emergência sempre à mão.</p>

  <a class="btn red" href="tel:192">🚑 Emergência: ligar 192</a>

</div>



<main>

<section id="emergencia">

  <h2>🚨 Números de emergência</h2>

  <p class="sub">Toque para ligar na hora. Ligação gratuita.</p>

  <div class="sos">

    <a href="tel:192"><span>192</span>SAMU</a>

    <a href="tel:193"><span>193</span>Bombeiros</a>

    <a href="tel:190"><span>190</span>Polícia</a>

    <a href="tel:136"><span>136</span>Disque Saúde</a>

  </div>

</section>



<section id="postos">

  <h2>📍 Postos de saúde perto de você</h2>

  <p class="sub">Use sua localização para abrir o mapa com as unidades mais próximas.</p>

  <button class="btn" onclick="perto('posto de saúde')">Postos de saúde</button>

  <button class="btn out" onclick="perto('UPA pronto atendimento')">UPA / Pronto atendimento</button>

  <button class="btn out" onclick="perto('hospital')">Hospitais</button>

  <button class="btn out" onclick="perto('farmácia')">Farmácias</button>

  <p id="geomsg" class="sub"></p>

</section>



<section id="medicos">

  <h2>👩‍⚕️ Fale com um médico</h2>

  <p class="sub">Escolha a forma mais fácil: WhatsApp ou Direct do Instagram.</p>

  <div class="grid" id="docs"></div>

</section>



<section id="hospital">

  <h2>🏥 Contato direto com o hospital</h2>

  <p class="sub">Fale com a equipe do hospital a qualquer hora.</p>

  <div class="grid">

    <div class="box"><h3>Emergência 24h</h3><p>Atendimento imediato.</p><a class="btn red" href="tel:192">Ligar 192</a></div>

    <div class="box"><h3>Recepção do hospital</h3><p>Informações, visitas e consultas.</p><a class="btn" id="hosTel" href="#">📞 Ligar</a></div>

    <div class="box"><h3>WhatsApp do hospital</h3><p>Converse com a equipe por mensagem.</p><a class="btn wa" id="hosWa" href="#" target="_blank" rel="noopener">💬 Conversar</a></div>

  </div>

</section>



<section id="bem">

  <h2>🌿 Seu bem-estar de hoje</h2>

  <p class="sub">Pequenos hábitos fazem muita diferença. Toque e experimente!</p>

  <div class="grid">

    <div class="box"><h3>💧 Água de hoje</h3><div class="copos" id="copos"></div><div class="barra"><i id="bAgua"></i></div><p id="tAgua" style="margin-top:8px"></p></div>

    <div class="box"><h3>⚖️ Calculadora de IMC</h3><div style="display:flex;gap:8px"><input id="peso" type="number" inputmode="decimal" placeholder="Peso (kg)" aria-label="Peso em kg"><input id="alt" type="number" inputmode="numeric" placeholder="Altura (cm)" aria-label="Altura em cm"></div><button class="btn" onclick="imc()" style="margin-top:8px">Calcular</button><div id="imcR"></div></div>

    <div class="box" style="text-align:center"><h3>🫁 Respiração calma</h3><div class="ar" id="ar">Toque em iniciar</div><button class="btn" id="bAr" onclick="resp()">Iniciar</button></div>

    <div class="box"><h3>💡 Dica de saúde</h3><p id="dica"></p><button class="btn out" onclick="dica()">Nova dica</button></div>

  </div>

</section>



<section id="remedios">

  <h2>💊 Lembrete de remédios</h2>

  <p class="sub">Cadastre o remédio e o horário. Um alarme avisa você na hora certa (mantenha esta página aberta).</p>

  <form id="fRem">

    <input id="rNome" placeholder="Nome do remédio" required aria-label="Nome do remédio">

    <input id="rHora" type="time" required aria-label="Horário">

    <button class="btn" type="submit">+ Adicionar</button>

  </form>

  <button class="btn out" onclick="pedir()">🔔 Ativar notificações</button>

  <ul id="listaRem"></ul>

</section>



<section id="familia">

  <h2>👨‍👩‍👧 Contatos de família e emergência</h2>

  <p class="sub">Salve pessoas de confiança para ligar rápido em qualquer situação.</p>

  <form id="fFam">

    <input id="fNome" placeholder="Nome (ex.: Maria, filha)" required aria-label="Nome">

    <input id="fTel" type="tel" placeholder="Telefone com DDD" required aria-label="Telefone">

    <button class="btn" type="submit">+ Salvar</button>

  </form>

  <ul id="listaFam"></ul>

</section>

</main>



<div id="alerta" role="alert"></div>

<footer>Projeto Integrador – Saúde e Bem-Estar<br>Em caso de emergência, ligue 192. Este site não substitui atendimento médico.</footer>



<script>

// ===== CONFIGURAÇÃO: troque pelos números/perfis reais (DDI 55 + DDD + número) =====

var HOSPITAL_TEL="+558632000000", HOSPITAL_WA="558632000000";

var MEDICOS=[

 {nome:"Dra. Ana Souza",esp:"Clínica geral",wa:"558691111111",ig:"dra.anasouza"},

 {nome:"Dr. Carlos Lima",esp:"Cardiologia",wa:"558692222222",ig:"dr.carloslima"},

 {nome:"Dra. Beatriz Rocha",esp:"Pediatria",wa:"558693333333",ig:"dra.beatrizrocha"}

];

// ==================================================================================

function $(i){return document.getElementById(i)}

function ler(k){try{return JSON.parse(localStorage.getItem(k))||[]}catch(e){return []}}

function gravar(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}

function esc(s){var d=document.createElement("div");d.textContent=s;return d.innerHTML}



var tam=20;

try{tam=parseInt(localStorage.getItem("tam"))||20}catch(e){}

function fonte(d){tam=Math.min(32,Math.max(16,tam+d));document.documentElement.style.setProperty("--fs",tam+"px");try{localStorage.setItem("tam",tam)}catch(e){}}

fonte(0);



$("hosTel").href="tel:"+HOSPITAL_TEL;

$("hosWa").href="https://wa.me/"+HOSPITAL_WA+"?text="+encodeURIComponent("Olá, preciso de informações.");

$("docs").innerHTML=MEDICOS.map(function(m){return '<div class="box"><h3>'+esc(m.nome)+'</h3><p>'+esc(m.esp)+'</p>'+

 '<a class="btn wa" target="_blank" rel="noopener" href="https://wa.me/'+m.wa+'?text='+encodeURIComponent("Olá, gostaria de uma orientação.")+'">💬 WhatsApp</a>'+

 '<a class="btn out" target="_blank" rel="noopener" href="https://ig.me/m/'+m.ig+'">📷 Direct</a></div>'}).join("");



function perto(q){

  var msg=$("geomsg"),base="https://www.google.com/maps/search/"+encodeURIComponent(q+" perto de mim");

  if(!navigator.geolocation){window.open(base,"_blank");return}

  msg.textContent="Buscando sua localização…";

  navigator.geolocation.getCurrentPosition(function(p){

    msg.textContent="Abrindo o mapa…";

    window.open("https://www.google.com/maps/search/"+encodeURIComponent(q)+"/@"+p.coords.latitude+","+p.coords.longitude+",15z","_blank");

  },function(){msg.textContent="Não foi possível usar sua localização. Abrindo busca geral.";window.open(base,"_blank")},{timeout:8000});

}



// ===== Lembretes =====

var rems=ler("rems");

function listarRem(){

  $("listaRem").innerHTML=rems.length?rems.map(function(r,i){return '<li><span>⏰ <b>'+esc(r.h)+'</b> – '+esc(r.n)+'</span><button class="btn out" onclick="delRem('+i+')">Apagar</button></li>'}).join(""):'<li class="empty">Nenhum lembrete cadastrado.</li>';

}

function delRem(i){rems.splice(i,1);gravar("rems",rems);listarRem()}

$("fRem").onsubmit=function(e){e.preventDefault();rems.push({n:$("rNome").value.trim(),h:$("rHora").value});rems.sort(function(a,b){return a.h<b.h?-1:1});gravar("rems",rems);this.reset();listarRem();pedir()};

function pedir(){try{if("Notification" in window&&Notification.permission==="default")Notification.requestPermission()}catch(e){}}

function beep(){try{var c=new (window.AudioContext||window.webkitAudioContext)(),n=0;(function t(){if(n++>5)return;var o=c.createOscillator();o.frequency.value=880;o.connect(c.destination);o.start();setTimeout(function(){o.stop();setTimeout(t,250)},300)})()}catch(e){}}

var feitos={};

function checar(){

  var d=new Date(),h=("0"+d.getHours()).slice(-2)+":"+("0"+d.getMinutes()).slice(-2),dia=d.toDateString();

  rems.forEach(function(r){

    var k=dia+r.h+r.n;

    if(r.h===h&&!feitos[k]){feitos[k]=1;

      var a=$("alerta");a.style.display="block";a.innerHTML="💊 Hora do remédio!<br>"+esc(r.n)+" – "+r.h+'<br><button class="btn out" style="background:#fff!important;margin-top:10px" onclick="this.parentNode.style.display=\'none\'">Já tomei ✔</button>';

      beep();

      try{if("Notification" in window&&Notification.permission==="granted")new Notification("Hora do remédio",{body:r.n+" – "+r.h})}catch(e){}

    }

  });

}

setInterval(checar,15000);listarRem();



// ===== Família =====

var fam=ler("fam");

function listarFam(){

  $("listaFam").innerHTML=fam.length?fam.map(function(f,i){var n=f.t.replace(/\D/g,"");if(n.length<=11)n="55"+n;

    return '<li><span>👤 <b>'+esc(f.n)+'</b><br>'+esc(f.t)+'</span><span><a class="btn" href="tel:+'+n+'">📞 Ligar</a><a class="btn wa" target="_blank" rel="noopener" href="https://wa.me/'+n+'">💬</a><button class="btn out" onclick="delFam('+i+')" aria-label="Apagar">🗑</button></span></li>'}).join(""):'<li class="empty">Nenhum contato salvo ainda.</li>';

}

function delFam(i){fam.splice(i,1);gravar("fam",fam);listarFam()}

$("fFam").onsubmit=function(e){e.preventDefault();fam.push({n:$("fNome").value.trim(),t:$("fTel").value.trim()});gravar("fam",fam);this.reset();listarFam()};

listarFam();



// ===== Interações extras =====

function tema(){var r=document.documentElement,e=r.getAttribute("data-theme"),esc2=matchMedia("(prefers-color-scheme: dark)").matches;var escuro=e?e==="dark":esc2;r.setAttribute("data-theme",escuro?"light":"dark")}

var hr=new Date().getHours();$("saud").textContent=hr<12?"☀️ Bom dia!":hr<18?"🌤️ Boa tarde!":"🌙 Boa noite!";



var hoje=new Date().toDateString(),agua=0;

try{var a=JSON.parse(localStorage.getItem("agua"));if(a&&a.d===hoje)agua=a.n}catch(e){}

function pAgua(){

  $("copos").innerHTML="";

  for(var i=1;i<=8;i++){var b=document.createElement("button");b.className="copo"+(i<=agua?" on":"");b.textContent="🥛";b.setAttribute("aria-label","Copo "+i);(function(n){b.onclick=function(){agua=(agua===n)?n-1:n;try{localStorage.setItem("agua",JSON.stringify({d:hoje,n:agua}))}catch(e){}pAgua()}})(i);$("copos").appendChild(b)}

  $("bAgua").style.width=agua/8*100+"%";

  $("tAgua").textContent=agua>=8?"🎉 Parabéns! Meta de hoje concluída!":agua+" de 8 copos. Faltam "+(8-agua)+".";

}

pAgua();



function imc(){

  var p=parseFloat($("peso").value),h=parseFloat($("alt").value)/100,r=$("imcR");

  if(!(p>0)||!(h>0.5)){r.textContent="Digite peso e altura válidos.";return}

  var v=p/(h*h),c=v<18.5?"Abaixo do peso":v<25?"Peso normal ✅":v<30?"Sobrepeso":"Obesidade";

  r.textContent="IMC "+v.toFixed(1).replace(".",",")+" – "+c+". Converse com um profissional de saúde para orientação.";

}



var arT=null;

function resp(){

  var el=$("ar"),bt=$("bAr");

  if(arT){clearInterval(arT);arT=null;el.classList.remove("in");el.textContent="Toque em iniciar";bt.textContent="Iniciar";return}

  bt.textContent="Parar";var dentro=false;

  function passo(){dentro=!dentro;el.classList.toggle("in",dentro);el.textContent=dentro?"Inspire…":"Solte o ar…"}

  setTimeout(passo,50);arT=setInterval(passo,4000);

}



var DICAS=["Beba água ao longo do dia, mesmo sem sentir sede.","Caminhar 30 minutos por dia ajuda o coração e o humor.","Dormir de 7 a 8 horas renova o corpo e a mente.","Frutas, verduras e legumes devem estar em todo dia no prato.","Lave bem as mãos antes de comer e depois de usar o banheiro.","Proteja-se do sol: use chapéu e protetor solar.","Faça check-ups regulares, mesmo quando se sentir bem.","Conversar com amigos e família faz bem para a saúde mental."],di=Math.floor(Math.random()*DICAS.length);

function dica(){var e=$("dica");e.style.opacity=0;setTimeout(function(){e.textContent=DICAS[di=(di+1)%DICAS.length];e.style.opacity=1},250)}

$("dica").textContent=DICAS[di];



if("IntersectionObserver" in window){

  var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add("in");io.unobserve(x.target)}})},{threshold:.1});

  document.querySelectorAll("section").forEach(function(s){s.classList.add("reveal");io.observe(s)});

}

</script>

</body>

</html>

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/0bbc2bda-4162-4611-aec1-1cee45104eb0).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
