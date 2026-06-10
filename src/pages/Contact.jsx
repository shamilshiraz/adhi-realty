import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock3,
} from "lucide-react";

export default function Contact() {
  return (
    <main className="bg-white pt-36">
      {/* Header */}
      <section className="pb-24">
        <div className="mx-auto w-[92%] max-w-7xl">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#C9A86A]">
            Contact Us
          </p>

          <div className="grid gap-12 lg:grid-cols-2">
            <h1 className="text-5xl font-semibold leading-tight md:text-7xl">
              Let's Start A
              <br />
              Conversation.
            </h1>

            <p className="max-w-xl text-lg leading-relaxed text-slate-600">
              Whether you're exploring opportunities, attending a roadshow,
              or looking to schedule a consultation, our team is ready to
              assist you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="pb-24">
        <div className="mx-auto grid w-[92%] max-w-7xl gap-6 lg:grid-cols-3">
          {[
            {
              icon: Mail,
              title: "Email Us",
              value: "info@adhirealty.com",
            },
            {
              icon: Phone,
              title: "Call Us",
              value: "+971 XX XXX XXXX",
            },
            {
              icon: MapPin,
              title: "Visit Us",
              value: "Dubai, UAE",
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-[32px] border border-slate-200 p-8"
              >
                <Icon
                  className="mb-5 text-[#C9A86A]"
                  size={34}
                />

                <h3 className="text-2xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-3 text-slate-600">
                  {item.value}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Form + Info */}
      <section className="pb-32">
        <div className="mx-auto grid w-[92%] max-w-7xl gap-12 lg:grid-cols-5">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="rounded-[40px] bg-[#F8FAFC] p-10">
              <h2 className="mb-8 text-3xl font-semibold">
                Send A Message
              </h2>

              <div className="space-y-5">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 outline-none"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 outline-none"
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 outline-none"
                />

                <textarea
                  rows="6"
                  placeholder="How can we help you?"
                  className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 outline-none"
                />

                <button className="rounded-full bg-[#C9A86A] px-8 py-4 text-white transition hover:scale-105">
                  Send Message
                </button>
              </div>
            </div>
          </motion.div>

          {/* Sidebar */}
          <div className="lg:col-span-2">
            <div className="rounded-[40px] bg-slate-950 p-10 text-white">
              <Clock3
                size={36}
                className="mb-6 text-[#C9A86A]"
              />

              <h3 className="text-3xl font-semibold">
                Response Time
              </h3>

              <p className="mt-4 text-white/70">
                Our team typically responds within one business day.
              </p>

              <div className="mt-10 border-t border-white/10 pt-8">
                <p className="text-sm uppercase tracking-widest text-[#C9A86A]">
                  Office Hours
                </p>

                <div className="mt-4 space-y-2 text-white/70">
                  <p>Monday — Friday</p>
                  <p>9:00 AM — 6:00 PM</p>
                </div>
              </div>

              <div className="mt-10 border-t border-white/10 pt-8">
                <p className="text-sm uppercase tracking-widest text-[#C9A86A]">
                  Location
                </p>

                <p className="mt-4 text-white/70">
                  Dubai, United Arab Emirates
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Image */}
      <section className="pb-32">
        <div className="mx-auto w-[92%] max-w-7xl">
          <div className="overflow-hidden rounded-[40px]">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
              alt="Dubai Office"
              className="h-[650px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="pb-32">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-5xl font-semibold md:text-7xl">
            Ready To Explore
            <br />
            Dubai Real Estate?
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg text-slate-600">
            Reach out today and let us help you navigate opportunities
            across one of the world's most exciting property markets.
          </p>
        </div>
      </section>
    </main>
  );
}