import { FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { HiArrowUpRight } from "react-icons/hi2";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto w-[92%] max-w-7xl py-24">
        {/* Top */}
        <div className="grid gap-16 border-b border-white/10 pb-16 lg:grid-cols-2">
          {/* Left */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#C9A86A] text-lg font-bold text-white">
                A
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Adhi Realty
                </h3>

                <p className="text-sm text-white/50">
                  Dubai Real Estate Investments
                </p>
              </div>
            </div>

            <h2 className="max-w-xl text-4xl font-semibold leading-tight md:text-5xl">
              Unlock Dubai's Most
              <span className="block text-[#C9A86A]">
                Exceptional Opportunities.
              </span>
            </h2>
          </div>

          {/* Right */}
          <div className="flex flex-col justify-end lg:items-end">
            <p className="max-w-md text-lg leading-relaxed text-white/60 lg:text-right">
              Connecting investors with premium developments,
              exclusive roadshows and strategic opportunities
              across Dubai.
            </p>

            <button className="mt-8 flex items-center gap-2 rounded-full bg-[#C9A86A] px-6 py-3 font-medium text-white transition hover:scale-105">
              Book a Consultation
              <HiArrowUpRight />
            </button>
          </div>
        </div>

        {/* Middle */}
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h4 className="mb-5 text-sm uppercase tracking-[0.2em] text-[#C9A86A]">
              Navigation
            </h4>

            <div className="space-y-3 text-white/70">
              <a href="/">Home</a>
              <br />
              <a href="/about">About</a>
              <br />
              <a href="/events">Events</a>
              <br />
              <a href="/roadshow">Roadshow</a>
            </div>
          </div>

          <div>
            <h4 className="mb-5 text-sm uppercase tracking-[0.2em] text-[#C9A86A]">
              Company
            </h4>

            <div className="space-y-3 text-white/70">
              <a href="/meetings">Meetings</a>
              <br />
              <a href="/contact">Contact</a>
              <br />
              <a href="/">Privacy Policy</a>
              <br />
              <a href="/">Terms & Conditions</a>
            </div>
          </div>

          <div>
            <h4 className="mb-5 text-sm uppercase tracking-[0.2em] text-[#C9A86A]">
              Contact
            </h4>

            <div className="space-y-3 text-white/70">
              <p>Dubai, UAE</p>
              <p>info@adhirealty.com</p>
              <p>+971 XX XXX XXXX</p>
            </div>
          </div>

          <div>
            <h4 className="mb-5 text-sm uppercase tracking-[0.2em] text-[#C9A86A]">
              Follow
            </h4>

            <div className="flex gap-4">
              <a
                href="/"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 transition hover:border-[#C9A86A]"
              >
                <FaInstagram />
              </a>

              <a
                href="/"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 transition hover:border-[#C9A86A]"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="/"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 transition hover:border-[#C9A86A]"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-white/40 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Adhi Realty. All rights reserved.</p>

          <p>
            Designed for premium real estate experiences.
          </p>
        </div>
      </div>
    </footer>
  );
}