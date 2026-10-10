import { Mail, ArrowUp } from "lucide-react";
import { Github, WhatsApp, LinkedIn } from "@/components/ui/icons";
import { profile, navigation } from "@/data/profile";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="border-t border-border bg-bg-secondary" id="footer">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <a href="/" className="text-xl font-bold text-text-primary">
              {profile.firstName}
              <span className="text-accent">.</span>
            </a>
            <p className="mt-2 text-sm text-text-secondary">
              {profile.footer.tagline}
            </p>
            <p className="mt-1 text-sm text-text-tertiary">
              {profile.location}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-4">
              Navigation
            </h3>
            <nav className="flex flex-col gap-2" aria-label="Footer navigation">
              {navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm text-text-secondary hover:text-text-primary transition-colors w-fit"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-4">
              Connect
            </h3>
            <div className="flex flex-col gap-2">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors w-fit"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-[#0a66c2] transition-colors w-fit"
              >
                <LinkedIn className="w-4 h-4 text-[#0a66c2]" />
                LinkedIn
              </a>
              <a
                href={profile.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-emerald-400 transition-colors w-fit"
              >
                <WhatsApp className="w-4 h-4 text-emerald-400" />
                WhatsApp
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors w-fit"
              >
                <Mail className="w-4 h-4" />
                {profile.email}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-tertiary">
            © {currentYear} {profile.name}. Built with Next.js.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-1 text-xs text-text-tertiary hover:text-text-secondary transition-colors"
            aria-label="Back to top"
            id="back-to-top"
          >
            Back to top
            <ArrowUp className="w-3 h-3" />
          </a>
        </div>
      </div>
    </footer>
  );
}
