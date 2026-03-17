import { COPY } from '../../lib/constants'

export function Footer() {
  return (
    <footer className="bg-forge-dark text-white py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img
            src="/img/logo-removebg-preview.png"
            alt="ForgeApps"
            className="h-8 w-auto brightness-0 invert"
          />
          <span className="text-sm text-white/60">{COPY.footer.tagline}</span>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-white/60">
          <span>© {new Date().getFullYear()} ForgeApps</span>
        </div>
      </div>
    </footer>
  )
}
