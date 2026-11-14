import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  Phone, MapPin, Stethoscope, Building2, Leaf, Pill, Users, Droplet, Scale, Wind, Lightbulb,
  MessageCircle, Instagram, Trash2, Bell, Siren, HeartPulse, Minus, Plus, Menu, X,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vida Saudável – Saúde e Bem-Estar" },
      { name: "description", content: "Encontre postos de saúde, fale com médicos, organize remédios e tenha contatos de emergência à mão." },
      { property: "og:title", content: "Vida Saudável – Saúde e Bem-Estar" },
      { property: "og:description", content: "Postos de saúde, médicos, lembretes de remédios e emergência em um só lugar." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

// CONFIGURAÇÃO: troque pelos números/perfis reais
const HOSPITAL_TEL = "+558632000000";
const HOSPITAL_WA = "558632000000";
const MEDICOS = [
  { nome: "Dra. Ana Souza", esp: "Clínica geral", wa: "558691111111", ig: "dra.anasouza" },
  { nome: "Dr. Carlos Lima", esp: "Cardiologia", wa: "558692222222", ig: "dr.carloslima" },
  { nome: "Dra. Beatriz Rocha", esp: "Pediatria", wa: "558693333333", ig: "dra.beatrizrocha" },
];
const DICAS = [
  "Beba água ao longo do dia, mesmo sem sentir sede.",
  "Caminhar 30 minutos por dia ajuda o coração e o humor.",
  "Dormir de 7 a 8 horas renova o corpo e a mente.",
  "Frutas, verduras e legumes devem estar no prato todos os dias.",
  "Lave bem as mãos antes de comer e depois de usar o banheiro.",
  "Proteja-se do sol: use chapéu e protetor solar.",
  "Faça check-ups regulares, mesmo quando se sentir bem.",
  "Conversar com amigos e família faz bem para a saúde mental.",
];
const NAV = [
  ["postos", "Postos"], ["medicos", "Médicos"], ["hospital", "Hospital"],
  ["bem", "Bem-estar"], ["remedios", "Remédios"], ["familia", "Família"],
];

function ler<T>(k: string, d: T): T { try { return JSON.parse(localStorage.getItem(k) || "") ?? d; } catch { return d; } }
function gravar(k: string, v: unknown) { try { localStorage.setItem(k, JSON.stringify(v)); } catch { /* */ } }

const btn = "inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 font-semibold transition hover:-translate-y-0.5 active:scale-95 disabled:opacity-50";
const B = {
  primary: `${btn} bg-primary text-primary-foreground hover:opacity-90`,
  outline: `${btn} border border-input bg-card text-foreground hover:bg-secondary`,
  danger: `${btn} bg-destructive text-destructive-foreground hover:opacity-90`,
  wa: `${btn} bg-success text-success-foreground hover:opacity-90`,
};
const input = "w-full min-w-0 flex-1 rounded-xl border border-input bg-card px-4 py-2.5 text-foreground outline-none focus:ring-2 focus:ring-ring";

function Section({ id, icon, eyebrow, title, sub, children }: { id: string; icon: ReactNode; eyebrow: string; title: string; sub: string; children: ReactNode }) {
  return (
    <section id={id} className="py-12 md:py-16 border-t border-border first:border-t-0">
      <div className="mb-8 flex items-start gap-4">
        <div className="grid size-12 shrink-0 place-items-center rounded-2xl bg-secondary text-primary">{icon}</div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-foreground/70">{eyebrow}</p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground">{title}</h2>
          <p className="mt-2 max-w-2xl text-muted-foreground">{sub}</p>
        </div>
      </div>
      {children}
    </section>
  );
}
const Card = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <div className={`rounded-2xl border border-border bg-card p-6 shadow-card ${className}`}>{children}</div>
);

function Index() {
  const [fs, setFs] = useState(17);
  const [menu, setMenu] = useState(false);
  const [saud, setSaud] = useState("Olá!");
  useEffect(() => {
    setFs(ler("tam", 17));
    const h = new Date().getHours();
    setSaud(h < 12 ? "Bom dia" : h < 18 ? "Boa tarde" : "Boa noite");
  }, []);
  useEffect(() => { document.documentElement.style.setProperty("--fs", fs + "px"); gravar("tam", fs); }, [fs]);
  const fonte = (d: number) => setFs((t) => Math.min(26, Math.max(14, t + d)));

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-30 border-b border-border bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
          <a href="#top" className="flex items-center gap-2 font-display text-xl text-foreground">
            <HeartPulse className="size-6 text-primary" /> Vida Saudável
          </a>
          <nav className="hidden gap-1 lg:flex">
            {NAV.map(([id, l]) => <a key={id} href={`#${id}`} className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground">{l}</a>)}
          </nav>
          <div className="flex items-center gap-1">
            <button onClick={() => fonte(-1)} aria-label="Diminuir letra" className="grid size-9 place-items-center rounded-lg hover:bg-secondary"><Minus className="size-4" /></button>
            <span className="text-sm font-semibold text-muted-foreground">A</span>
            <button onClick={() => fonte(1)} aria-label="Aumentar letra" className="grid size-9 place-items-center rounded-lg hover:bg-secondary"><Plus className="size-4" /></button>
            <a href="tel:192" className={`${B.danger} ml-2 hidden py-2 text-sm sm:inline-flex`}><Phone className="size-4" />192</a>
            <button onClick={() => setMenu(!menu)} aria-label="Menu" className="grid size-9 place-items-center rounded-lg hover:bg-secondary lg:hidden">{menu ? <X className="size-5" /> : <Menu className="size-5" />}</button>
          </div>
        </div>
        {menu && (
          <nav className="grid grid-cols-2 gap-1 border-t border-border px-5 py-3 lg:hidden">
            {NAV.map(([id, l]) => <a key={id} href={`#${id}`} onClick={() => setMenu(false)} className="rounded-lg px-3 py-2 font-medium hover:bg-secondary">{l}</a>)}
          </nav>
        )}
      </header>

      <div id="top" className="bg-hero text-ink-foreground">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[1.3fr_1fr] md:py-24">
          <div>
            <p className="mb-4 inline-block rounded-full border border-ink-foreground/20 px-3 py-1 text-sm">{saud} · Sua saúde em primeiro lugar</p>
            <h1 className="font-display text-4xl leading-tight md:text-6xl">Cuidar de você é o nosso compromisso.</h1>
            <p className="mt-5 max-w-xl text-lg text-ink-foreground/80">Encontre postos de saúde, fale com médicos, receba lembretes dos seus remédios e tenha contatos de emergência sempre à mão.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="tel:192" className={B.danger}><Siren className="size-5" />Emergência: ligar 192</a>
              <a href="#postos" className={`${btn} border border-ink-foreground/30 text-ink-foreground hover:bg-ink-foreground/10`}><MapPin className="size-5" />Postos perto de mim</a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 self-center">
            {[["192", "SAMU"], ["193", "Bombeiros"], ["190", "Polícia"], ["136", "Disque Saúde"]].map(([n, l]) => (
              <a key={n} href={`tel:${n}`} className="animate-sos rounded-2xl border border-ink-foreground/15 bg-ink-foreground/5 p-5 transition hover:bg-ink-foreground/15">
                <span className="block font-display text-4xl">{n}</span>
                <span className="text-sm text-ink-foreground/75">{l}</span>
              </a>
            ))}
            <p className="col-span-2 text-center text-xs text-ink-foreground/60">Toque para ligar · Ligação gratuita</p>
          </div>
        </div>
      </div>

      <main className="mx-auto max-w-6xl px-5">
        <Postos />
        <Section id="medicos" icon={<Stethoscope />} eyebrow="Atendimento" title="Fale com um médico" sub="Escolha a forma mais fácil: WhatsApp ou Direct do Instagram.">
          <div className="grid gap-5 md:grid-cols-3">
            {MEDICOS.map((m) => (
              <Card key={m.nome}>
                <div className="mb-4 grid size-12 place-items-center rounded-full bg-secondary font-display text-lg text-primary">{m.nome.split(" ").slice(1).map((p) => p[0]).join("")}</div>
                <h3 className="text-lg font-semibold">{m.nome}</h3>
                <p className="mb-5 text-muted-foreground">{m.esp}</p>
                <div className="flex flex-wrap gap-2">
                  <a className={B.wa} target="_blank" rel="noopener" href={`https://wa.me/${m.wa}?text=${encodeURIComponent("Olá, gostaria de uma orientação.")}`}><MessageCircle className="size-4" />WhatsApp</a>
                  <a className={B.outline} target="_blank" rel="noopener" href={`https://ig.me/m/${m.ig}`}><Instagram className="size-4" />Direct</a>
                </div>
              </Card>
            ))}
          </div>
        </Section>
        <Section id="hospital" icon={<Building2 />} eyebrow="Hospital" title="Contato direto com o hospital" sub="Fale com a equipe do hospital a qualquer hora.">
          <div className="grid gap-5 md:grid-cols-3">
            <Card><h3 className="text-lg font-semibold">Emergência 24h</h3><p className="mb-5 text-muted-foreground">Atendimento imediato.</p><a className={B.danger} href="tel:192"><Phone className="size-4" />Ligar 192</a></Card>
            <Card><h3 className="text-lg font-semibold">Recepção</h3><p className="mb-5 text-muted-foreground">Informações, visitas e consultas.</p><a className={B.primary} href={`tel:${HOSPITAL_TEL}`}><Phone className="size-4" />Ligar</a></Card>
            <Card><h3 className="text-lg font-semibold">WhatsApp</h3><p className="mb-5 text-muted-foreground">Converse com a equipe por mensagem.</p><a className={B.wa} target="_blank" rel="noopener" href={`https://wa.me/${HOSPITAL_WA}?text=${encodeURIComponent("Olá, preciso de informações.")}`}><MessageCircle className="size-4" />Conversar</a></Card>
          </div>
        </Section>
        <BemEstar />
        <Remedios />
        <Familia />
      </main>

      <footer className="mt-8 bg-ink text-ink-foreground">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-10 text-sm md:flex-row md:justify-between">
          <p className="flex items-center gap-2 font-display text-lg"><HeartPulse className="size-5" />Vida Saudável</p>
          <p className="text-ink-foreground/70">Projeto Integrador – Saúde e Bem-Estar. Em caso de emergência, ligue 192. Este site não substitui atendimento médico.</p>
        </div>
      </footer>
    </div>
  );
}

function Postos() {
  const [msg, setMsg] = useState("");
  const perto = (q: string) => {
    const base = "https://www.google.com/maps/search/" + encodeURIComponent(q + " perto de mim");
    if (!navigator.geolocation) { window.open(base, "_blank"); return; }
    setMsg("Buscando sua localização…");
    navigator.geolocation.getCurrentPosition(
      (p) => { setMsg("Abrindo o mapa…"); window.open(`https://www.google.com/maps/search/${encodeURIComponent(q)}/@${p.coords.latitude},${p.coords.longitude},15z`, "_blank"); },
      () => { setMsg("Não foi possível usar sua localização. Abrindo busca geral."); window.open(base, "_blank"); },
      { timeout: 8000 },
    );
  };
  return (
    <Section id="postos" icon={<MapPin />} eyebrow="Localização" title="Postos de saúde perto de você" sub="Use sua localização para abrir o mapa com as unidades mais próximas.">
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {[["posto de saúde", "Postos de saúde"], ["UPA pronto atendimento", "UPA / Pronto atendimento"], ["hospital", "Hospitais"], ["farmácia", "Farmácias"]].map(([q, l], i) => (
          <button key={q} onClick={() => perto(q)} className={`${i === 0 ? B.primary : B.outline} h-auto py-4`}>{l}</button>
        ))}
      </div>
      {msg && <p className="mt-4 text-muted-foreground">{msg}</p>}
    </Section>
  );
}

function BemEstar() {
  const [agua, setAgua] = useState(0);
  const [peso, setPeso] = useState(""); const [alt, setAlt] = useState(""); const [imcR, setImcR] = useState("");
  const [di, setDi] = useState(0);
  const [resp, setResp] = useState(false); const [dentro, setDentro] = useState(false);
  useEffect(() => {
    const a = ler<{ d: string; n: number } | null>("agua", null);
    if (a && a.d === new Date().toDateString()) setAgua(a.n);
    setDi(Math.floor(Math.random() * DICAS.length));
  }, []);
  useEffect(() => {
    if (!resp) { setDentro(false); return; }
    setDentro(true); const t = setInterval(() => setDentro((d) => !d), 4000);
    return () => clearInterval(t);
  }, [resp]);
  const copo = (n: number) => { const v = agua === n ? n - 1 : n; setAgua(v); gravar("agua", { d: new Date().toDateString(), n: v }); };
  const imc = () => {
    const p = parseFloat(peso), h = parseFloat(alt) / 100;
    if (!(p > 0) || !(h > 0.5)) { setImcR("Digite peso e altura válidos."); return; }
    const v = p / (h * h), c = v < 18.5 ? "Abaixo do peso" : v < 25 ? "Peso normal" : v < 30 ? "Sobrepeso" : "Obesidade";
    setImcR(`IMC ${v.toFixed(1).replace(".", ",")} – ${c}. Converse com um profissional de saúde para orientação.`);
  };
  return (
    <Section id="bem" icon={<Leaf />} eyebrow="Hábitos" title="Seu bem-estar de hoje" sub="Pequenos hábitos fazem muita diferença. Toque e experimente!">
      <div className="grid gap-5 md:grid-cols-2">
        <Card>
          <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold"><Droplet className="size-5 text-primary" />Água de hoje</h3>
          <div className="mb-4 flex flex-wrap gap-2">
            {Array.from({ length: 8 }, (_, i) => i + 1).map((n) => (
              <button key={n} onClick={() => copo(n)} aria-label={`Copo ${n}`} className={`grid size-11 place-items-center rounded-xl border transition ${n <= agua ? "border-primary bg-primary text-primary-foreground" : "border-input bg-card text-muted-foreground"}`}><Droplet className="size-5" /></button>
            ))}
          </div>
          <div className="h-2.5 overflow-hidden rounded-full bg-secondary"><div className="h-full rounded-full bg-primary transition-all duration-500" style={{ width: `${(agua / 8) * 100}%` }} /></div>
          <p className="mt-3 text-muted-foreground">{agua >= 8 ? "Parabéns! Meta de hoje concluída!" : `${agua} de 8 copos. Faltam ${8 - agua}.`}</p>
        </Card>
        <Card>
          <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold"><Scale className="size-5 text-primary" />Calculadora de IMC</h3>
          <div className="flex gap-2">
            <input className={input} type="number" inputMode="decimal" placeholder="Peso (kg)" aria-label="Peso em kg" value={peso} onChange={(e) => setPeso(e.target.value)} />
            <input className={input} type="number" inputMode="numeric" placeholder="Altura (cm)" aria-label="Altura em cm" value={alt} onChange={(e) => setAlt(e.target.value)} />
          </div>
          <button className={`${B.primary} mt-3`} onClick={imc}>Calcular</button>
          {imcR && <p className="mt-3 font-medium">{imcR}</p>}
        </Card>
        <Card className="text-center">
          <h3 className="mb-2 flex items-center justify-center gap-2 text-lg font-semibold"><Wind className="size-5 text-primary" />Respiração calma</h3>
          <div className={`mx-auto my-6 grid size-32 place-items-center rounded-full bg-primary text-sm font-semibold text-primary-foreground transition-transform duration-[4000ms] ease-in-out ${dentro ? "scale-125" : "scale-75"}`}>
            {resp ? (dentro ? "Inspire…" : "Solte o ar…") : "Pronto?"}
          </div>
          <button className={B.primary} onClick={() => setResp(!resp)}>{resp ? "Parar" : "Iniciar"}</button>
        </Card>
        <Card>
          <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold"><Lightbulb className="size-5 text-primary" />Dica de saúde</h3>
          <p className="mb-5 min-h-16 font-display text-xl">“{DICAS[di]}”</p>
          <button className={B.outline} onClick={() => setDi((d) => (d + 1) % DICAS.length)}>Nova dica</button>
        </Card>
      </div>
    </Section>
  );
}

type Rem = { n: string; h: string };
function Remedios() {
  const [rems, setRems] = useState<Rem[]>([]);
  const [nome, setNome] = useState(""); const [hora, setHora] = useState("");
  const [alerta, setAlerta] = useState<Rem | null>(null);
  const feitos = useRef<Record<string, 1>>({});
  useEffect(() => setRems(ler("rems", [])), []);
  const salvar = (r: Rem[]) => { setRems(r); gravar("rems", r); };
  const pedir = () => { try { if ("Notification" in window && Notification.permission === "default") Notification.requestPermission(); } catch { /* */ } };
  useEffect(() => {
    const t = setInterval(() => {
      const d = new Date(), h = `${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`;
      rems.forEach((r) => {
        const k = d.toDateString() + r.h + r.n;
        if (r.h === h && !feitos.current[k]) {
          feitos.current[k] = 1; setAlerta(r);
          try { const c = new AudioContext(); const o = c.createOscillator(); o.frequency.value = 880; o.connect(c.destination); o.start(); setTimeout(() => o.stop(), 1200); } catch { /* */ }
          try { if (Notification.permission === "granted") new Notification("Hora do remédio", { body: `${r.n} – ${r.h}` }); } catch { /* */ }
        }
      });
    }, 15000);
    return () => clearInterval(t);
  }, [rems]);
  return (
    <Section id="remedios" icon={<Pill />} eyebrow="Lembretes" title="Lembrete de remédios" sub="Cadastre o remédio e o horário. Um alarme avisa você na hora certa (mantenha esta página aberta).">
      <Card>
        <form className="flex flex-wrap gap-3" onSubmit={(e) => { e.preventDefault(); salvar([...rems, { n: nome.trim(), h: hora }].sort((a, b) => a.h.localeCompare(b.h))); setNome(""); setHora(""); pedir(); }}>
          <input className={input} placeholder="Nome do remédio" required aria-label="Nome do remédio" value={nome} onChange={(e) => setNome(e.target.value)} />
          <input className={`${input} max-w-40`} type="time" required aria-label="Horário" value={hora} onChange={(e) => setHora(e.target.value)} />
          <button className={B.primary} type="submit"><Plus className="size-4" />Adicionar</button>
          <button className={B.outline} type="button" onClick={pedir}><Bell className="size-4" />Ativar notificações</button>
        </form>
        <ul className="mt-5 divide-y divide-border">
          {rems.length ? rems.map((r, i) => (
            <li key={i} className="flex items-center justify-between gap-3 py-3">
              <span><b className="mr-3 rounded-lg bg-secondary px-2 py-1 font-mono text-primary">{r.h}</b>{r.n}</span>
              <button aria-label="Apagar" className="grid size-9 place-items-center rounded-lg text-muted-foreground hover:bg-secondary hover:text-destructive" onClick={() => salvar(rems.filter((_, j) => j !== i))}><Trash2 className="size-4" /></button>
            </li>
          )) : <li className="py-3 text-muted-foreground">Nenhum lembrete cadastrado.</li>}
        </ul>
      </Card>
      {alerta && (
        <div role="alert" className="fixed inset-x-4 bottom-4 z-40 mx-auto max-w-md rounded-2xl bg-destructive p-5 text-center text-destructive-foreground shadow-card">
          <p className="font-display text-xl">Hora do remédio!</p>
          <p className="mt-1">{alerta.n} – {alerta.h}</p>
          <button className={`${B.outline} mt-4`} onClick={() => setAlerta(null)}>Já tomei ✔</button>
        </div>
      )}
    </Section>
  );
}

type Fam = { n: string; t: string };
function Familia() {
  const [fam, setFam] = useState<Fam[]>([]);
  const [nome, setNome] = useState(""); const [tel, setTel] = useState("");
  useEffect(() => setFam(ler("fam", [])), []);
  const salvar = (f: Fam[]) => { setFam(f); gravar("fam", f); };
  return (
    <Section id="familia" icon={<Users />} eyebrow="Contatos" title="Família e emergência" sub="Salve pessoas de confiança para ligar rápido em qualquer situação.">
      <Card>
        <form className="flex flex-wrap gap-3" onSubmit={(e) => { e.preventDefault(); salvar([...fam, { n: nome.trim(), t: tel.trim() }]); setNome(""); setTel(""); }}>
          <input className={input} placeholder="Nome (ex.: Maria, filha)" required aria-label="Nome" value={nome} onChange={(e) => setNome(e.target.value)} />
          <input className={input} type="tel" placeholder="Telefone com DDD" required aria-label="Telefone" value={tel} onChange={(e) => setTel(e.target.value)} />
          <button className={B.primary} type="submit"><Plus className="size-4" />Salvar</button>
        </form>
        <ul className="mt-5 divide-y divide-border">
          {fam.length ? fam.map((f, i) => {
            let n = f.t.replace(/\D/g, ""); if (n.length <= 11) n = "55" + n;
            return (
              <li key={i} className="flex flex-wrap items-center justify-between gap-3 py-3">
                <span><b className="block">{f.n}</b><span className="text-muted-foreground">{f.t}</span></span>
                <span className="flex gap-2">
                  <a className={B.primary} href={`tel:+${n}`}><Phone className="size-4" />Ligar</a>
                  <a className={B.wa} target="_blank" rel="noopener" href={`https://wa.me/${n}`} aria-label="WhatsApp"><MessageCircle className="size-4" /></a>
                  <button className={B.outline} onClick={() => salvar(fam.filter((_, j) => j !== i))} aria-label="Apagar"><Trash2 className="size-4" /></button>
                </span>
              </li>
            );
          }) : <li className="py-3 text-muted-foreground">Nenhum contato salvo ainda.</li>}
        </ul>
      </Card>
    </Section>
  );
}
