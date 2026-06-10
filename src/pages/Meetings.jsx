import { motion } from "framer-motion";

const meetingTypes = [
  {
    title: "Investment Consultation",
    description:
      "Discuss your goals, budget and preferred investment strategy with our advisors.",
  },
  {
    title: "Project Presentation",
    description:
      "Receive a detailed walkthrough of carefully selected developments and opportunities.",
  },
  {
    title: "Portfolio Review",
    description:
      "Evaluate your current holdings and identify opportunities for growth and diversification.",
  },
];

export default function Meetings() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative flex h-screen items-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/65" />

        <div className="relative mx-auto w-[92%] max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#C9A86A]">
              Private Meetings
            </p>

            <h1 className="max-w-5xl text-5xl font-semibold text-white md:text-7xl">
              Strategic Conversations.
              <br />
              Meaningful Decisions.
            </h1>

            <p className="mt-8 max-w-2xl text-lg text-white/75">
              Meet with our team to explore investment opportunities,
              understand market trends and build a strategy aligned with your
              goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Meeting Types */}
      <section className="py-32">
        <div className="mx-auto w-[92%] max-w-7xl">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#C9A86A]">
            Meeting Types
          </p>

          <h2 className="mb-16 text-5xl font-semibold">
            Tailored To Your Needs
          </h2>

          <div className="grid gap-px overflow-hidden rounded-[32px] bg-slate-200 lg:grid-cols-3">
            {meetingTypes.map((item) => (
              <div key={item.title} className="bg-white p-10">
                <h3 className="text-2xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-4 leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What To Expect */}
      <section className="bg-[#F8FAFC] py-32">
        <div className="mx-auto grid w-[92%] max-w-7xl gap-20 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#C9A86A]">
              What To Expect
            </p>

            <h2 className="text-5xl font-semibold">
              Every Meeting Is
              <br />
              Built Around You.
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-slate-600">
              We focus on understanding your objectives before presenting
              opportunities, ensuring every recommendation aligns with your
              investment strategy.
            </p>
          </div>

          <div className="space-y-10">
            {[
              "Personalized guidance",
              "Market insights",
              "Project recommendations",
              "Clear next steps",
            ].map((item, index) => (
              <div key={item}>
                <p className="mb-2 text-sm text-[#C9A86A]">
                  0{index + 1}
                </p>

                <h3 className="text-2xl font-semibold">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisor Section */}
      <section className="py-32">
        <div className="mx-auto grid w-[92%] max-w-7xl items-center gap-16 lg:grid-cols-2">
          <div className="overflow-hidden rounded-[40px]">
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2070&auto=format&fit=crop"
              alt=""
              className="h-[700px] w-full object-cover"
            />
          </div>

          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#C9A86A]">
              Dedicated Guidance
            </p>

            <h2 className="text-5xl font-semibold">
              Professional Advice,
              <br />
              Personalized Attention.
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-slate-600">
              Our advisors work closely with investors to identify
              opportunities that align with both short-term objectives and
              long-term growth strategies.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-32">
        <div className="mx-auto w-[92%] max-w-5xl text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#C9A86A]">
            Schedule A Meeting
          </p>

          <h2 className="text-5xl font-semibold md:text-7xl">
            Let's Talk About
            <br />
            Your Next Investment.
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg text-slate-600">
            Arrange a private consultation with the Adhi Realty team and
            explore opportunities tailored to your goals.
          </p>

          <button className="mt-10 rounded-full bg-[#C9A86A] px-8 py-4 text-white transition hover:scale-105">
            Book A Meeting
          </button>
        </div>
      </section>
    </main>
  );
}