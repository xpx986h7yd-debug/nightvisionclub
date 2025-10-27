// app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-zinc-200 selection:bg-red-500/40">
      {/* Gradient + noise */}
      <div className="pointer-events-none fixed inset-0 [background:radial-gradient(1200px_600px_at_50%_-10%,rgba(244,63,94,.18),transparent_60%),radial-gradient(800px_400px_at_10%_10%,rgba(244,63,94,.12),transparent_60%),radial-gradient(800px_400px_at_90%_10%,rgba(255,255,255,.06),transparent_60%)]"></div>

      <nav className="sticky top-0 z-10 backdrop-blur supports-[backdrop-filter]:bg-black/40 border-b border-white/5">
        <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
          <Link href="/" className="group inline-flex items-center gap-2">
            <div className="size-6 rounded-full bg-red-500/90 shadow-[0_0_25px_6px_rgba(244,63,94,.45)]" />
            <span className="font-semibold tracking-wide">
              <span className="text-red-400">Night</span> Vision
            </span>
          </Link>
          <div className="flex items-center gap-3">
            <Link
              href="/chat"
              className="rounded-xl border border-white/10 px-3 py-1.5 hover:border-red-500/60 hover:text-white transition"
            >
              Chat
            </Link>
            <a
              href="#cta"
              className="rounded-xl bg-red-500/90 px-3.5 py-1.5 font-medium text-black hover:bg-red-400 transition shadow-[0_0_20px_rgba(244,63,94,.35)]"
            >
              Essayer maintenant
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 pt-24 pb-16 text-center">
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
            Le chat qui voit <span className="text-red-400">dans le noir</span>
          </h1>
          <p className="mt-5 text-zinc-400 md:text-lg">
            Night Vision analyse, répond et anticipe. Rapide. Discret. Taillé pour la nuit.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <Link
              href="/chat"
              className="rounded-2xl bg-red-500/90 px-6 py-3 text-black font-semibold hover:bg-red-400 transition shadow-[0_0_30px_rgba(244,63,94,.35)]"
            >
              Ouvrir le chat
            </Link>
            <a
              href="#features"
              className="rounded-2xl border border-white/10 px-6 py-3 hover:border-white/25 transition"
            >
              Voir les features
            </a>
          </div>

          {/* mock “terminal” */}
          <div className="mt-14 mx-auto max-w-4xl rounded-2xl border border-white/10 bg-zinc-950/60 p-4 text-left shadow-[0_0_60px_rgba(244,63,94,.12)]">
            <div className="flex gap-1 pb-3">
              <div className="size-2.5 rounded-full bg-red-500/80" />
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
      </section>

      {/* FEATURES */}
      <section id="features" className="border-t border-white/5">
        <div className="mx-auto max-w-6xl px-4 py-16 grid md:grid-cols-3 gap-6">
          {[
            ["Réponses instantanées", "Un moteur affûté pour aller droit au but, même sur des sujets sombres."],
            ["Mémoire contextuelle", "Comprend la conversation et adapte son ton au fil des échanges."],
            ["Mode nocturne total", "Design sobre, lisible et non intrusif. Idéal pour travailler tard."],
          ].map(([title, desc]) => (
            <div key={title} className="group rounded-2xl border border-white/10 p-5 bg-zinc-950/50 hover:border-red-500/40 transition">
              <div className="mb-3 h-8 w-8 rounded-lg bg-red-500/20 group-hover:bg-red-500/30" />
              <h3 className="font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-zinc-400">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SHOWCASE */}
      <section className="border-t border-white/5">
        <div className="mx-auto max-w-6xl px-4 py-16 grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-white/10 p-6 bg-gradient-to-br from-zinc-950 to-black">
            <h4 className="text-lg font-semibold">Plug & Play</h4>
            <p className="mt-2 text-zinc-400">
              Une API simple pour brancher Night Vision sur vos outils internes, site, ou support.
            </p>
            <pre className="mt-5 text-xs md:text-sm overflow-x-auto rounded-xl border border-white/10 p-4 bg-black/60">
{`POST /api/chat
{
  "messages": [
    { "role": "user", "content": "Analyse ce log nocturne" }
  ]
}`}
            </pre>
          </div>
          <div className="rounded-2xl border border-white/10 p-6 bg-zinc-950/60">
            <h4 className="text-lg font-semibold">Sécurité & confidentialité</h4>
            <p className="mt-2 text-zinc-400">
              Journaux chiffrés, stockage minimal, et contrôle précis des accès.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-zinc-300">
              <li>• Chiffrement en transit (TLS)</li>
              <li>• Journaux expirables</li>
              <li>• Environnements isolés</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="border-t border-white/5">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center">
          <h3 className="text-2xl font-semibold">Prêt à passer en vision nocturne ?</h3>
          <p className="mt-2 text-zinc-400">Démarre une session et teste le bot dès maintenant.</p>
          <Link
            href="/chat"
            className="mt-6 inline-block rounded-2xl bg-red-500/90 px-6 py-3 text-black font-semibold hover:bg-red-400 transition shadow-[0_0_30px_rgba(244,63,94,.35)]"
          >
            Lancer le chat
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
