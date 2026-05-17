import Link from "next/link";
import AuroraBackgroundClient from "@/components/AuroraBackgroundClient";

export default function NotFound() {
  return (
    <main className="relative min-h-dvh flex items-center justify-center px-4">
      <AuroraBackgroundClient />

      <div className="relative z-10 flex flex-col items-center text-center gap-6 max-w-md">
        {/* Terminal-style 404 */}
        <div className="font-mono text-[120px] sm:text-[160px] font-black leading-none text-foreground/8 select-none">
          404
        </div>

        <div className="-mt-8 flex flex-col items-center gap-3">
          <span className="font-mono text-xs text-blue-400 border border-blue-500/25 bg-blue-500/8 rounded-full px-3 py-1">
            page_not_found
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            Esta página no existe
          </h1>
          <p className="text-sm text-muted-foreground leading-loose">
            La ruta que buscas no existe o fue movida.
          </p>
        </div>

        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-border bg-background/60 hover:bg-white/5 hover:border-border/80 text-sm font-medium text-foreground transition-all"
        >
          ← Volver al inicio
        </Link>
      </div>
    </main>
  );
}
