// app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-zinc-200 selection:bg-[#ff003c]/40">
      {/* Fond néon + bruit */}
      <div className="pointer-events-none fixed inset-0 [background:radial-gradient(1100px_520px_at_50%_-10%,rgba(255,0,60,.18),transparent_60%),radial-gradient(800px_360px_at_10%_10%,rgba(255,0,60,.12),transparent_60%),radial-gradient(800px_360px_at_90%_10%,rgba(255,255,255,.06),transparent_60%)]"></div>

      <nav className="sticky top-0 z-10 backdrop-blur supports-[backdrop-filter]:bg-black/40 border-b border-white/5">
        <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
          <Link href="/" className="group inline-flex items-center gap-2">
            <div className="relative size-6 rounded-full bg-brand-soft">
              <span className="absolute inset-0 rounded-full bg-brand opacity-70 blur-md animate-[neonPulse_2.6s_ease-in-out_infinite]"></span>
            </div>
            <span className="font-semibold tracking-wide">
              <span className="text-brand">Night</span> Vision
            </span>
          </Link>
          <div className="flex items-center gap-3">
            <Link
              href="/chat"
              className="rounded-xl border border-white/10 px-3 py-1.5 hover:border-white/25 hover:text-white transition"
            >
              Chat
            </Link>
            <a
              href="#cta"
              className="relative rounded-xl px-3.5 py-1.5 font-medium transition"
            >
              <span className="absolute -inset-0.5 rounded-xl bg-[radial-gradient(80%_80%_at_50%_50%,rgba(255,0,60,.55),transparent)] blur-md animate-[neonPulse_2.8s_ease-in-out_infinite]"></span>
              <span className="relative inline-block bg-brand-soft shadow-brand px-3.5 py-1.5 rounded-xl">
                Essayer maintenant
              </span>
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 pt-24 pb-16 text-center">
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
            Le chat qui voit <span className="text-brand">dans le noir</span>
          </h1>
          <p className="mt-5 text-zinc-400 md:text-lg">
            Night Vision analyse, répond et anticipe. Rapide. Discret. Taillé pour la nuit.
          </p>

          <div className="mt-8 flex items-center justify-center gap-3">
            <Link
              href="/chat"
              className="relative rounded-2xl glow-border"
            >
              <span className="glow-ring rounded-2xl"></span>
              <span className="relative inline-block bg-brand-soft px-6 py-3 font-semibold rounded-2xl shadow-brand hover:opacity-90 transition">
                Ouvrir le chat
              </span>
            </Link>

            <a
              href="#features"
              className="rounded-2xl border border-white/10 px-6 py-3 hover:border-white/25 transition"
            >
              Voir les features
            </a>
          </div>

          {/* mock “terminal” avec glow */}
          <div className="relative mt-14 mx-auto max-w-4xl rounded-2xl border border-white/10 bg-zinc-950/60 p-4 text-left overflow-hidden">
            <div className="absolute -inset-px rounded-2xl opacity-60 bg-[radial-gradient(70%_70%_at_50%_-10%,rgba(255,0,60,.25),transparent_60%)] blur-lg animate-[neonPulse_3s_ease-in-out_infinite]" />
            <div className="relative">
              <div className="flex gap-1 pb-3">
                <div className="size-2.5 rounded-full bg-[#ff003c]/90" />
                <div className="size-2.5 rounded-full bg-yellow-400/70" />
                <div className="size-2.5 rounded-full bg-green-500/70" />
              </div>
              <pre className="whitespace-pre-wrap text-sm md:text-base text-zinc-300">
{`> nightvision: status
Night Vision — Online ✅
Ready to assist. Type your request or /chat`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="border-t border-white/5">
        <div className="mx-auto max-w-6xl px-4 py-16 grid md:grid-cols-3 gap-6">
          {[
            ["Réponses instantanées", "Un moteur affûté pour aller droit au but, même sur des sujets sombres."],
            ["Mémoire contextuelle", "Comprend la conversation et adapte son ton au fil des échanges."],
            ["Mode nocturne total", "Design sobre, lisible et non intrusif. Idéal pour travailler tard."],
          ].map(([title, desc]) => (
            <div key={title} className="group relative rounded-2xl border border-white/10 p-5 bg-zinc-950/50 hover:border-white/20 transition overflow-hidden">
              <span className="pointer-events-none absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-60 blur-lg animate-[neonPulse_2.8s_ease-in-out_infinite] bg-[radial-gradient(50%_50%_at_50%_0%,rgba(255,0,60,.35),transparent_60%)]"></span>
              <h3 className="relative font-semibold">{title}</h3>
              <p className="relative mt-2 text-sm text-zinc-400">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="border-t border-white/5">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center">
          <h3 className="text-2xl font-semibold">Prêt à passer en vision nocturne ?</h3>
          <p className="mt-2 text-zinc-400">Démarre une session et teste le bot dès maintenant.</p>
          <Link
            href="/chat"
            className="relative inline-block rounded-2xl glow-border mt-6"
          >
            <span className="glow-ring rounded-2xl"></span>
            <span className="relative inline-block bg-brand-soft px-6 py-3 text-black font-semibold rounded-2xl shadow-brand hover:opacity-90 transition">
              Lancer le chat
            </span>
          </Link>
        </div>
      </section>

      <footer className="border-t border-white/5">
        <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-zinc-400 flex flex-col md:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Night Vision</p>
          <div className="opacity-70">Fait avec Next.js • Vercel</div>
        </div>
      </footer>
    </main>
  );
}
