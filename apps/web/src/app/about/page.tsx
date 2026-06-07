const principles = [
  {
    title: 'Fit should be personal',
    body: 'Standard sizes ask bodies to adapt to clothing. UGP starts from the opposite premise: clothing should adapt to the person wearing it.',
  },
  {
    title: 'Design should be simple',
    body: 'The process is intentionally clear: choose the garment, choose the branding, refine the details, and decide whether to personalize it.',
  },
  {
    title: 'Technology should disappear',
    body: 'Measurement tools, account data, order history, and production logic should make the experience smoother without making the customer feel like they are managing software.',
  },
  {
    title: 'Quality should be visible',
    body: 'From fabric choice to fit variation to delivery updates, UGP is built around transparency, durability, and garments that feel considered rather than mass produced.',
  },
];

const processSteps = [
  'Select the silhouette: boxers, boxer briefs, briefs, undershirts, t-shirts, and future essentials.',
  'Choose the branding and visual direction.',
  'Refine the garment details, including color, fabric, and fit variation where available.',
  'Add an optional monogram or keep the piece clean and unmarked.',
  'Use your profile, measurements, and order history to make future orders easier.',
];

export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 dark:text-white">
      <section className="mb-14">
        <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-4">About UGP</p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
          Custom garments for the body you actually have.
        </h1>
        <p className="text-lg leading-8 text-gray-700 dark:text-gray-300 max-w-3xl">
          UGP is being built for people who care about fit, design, and the quiet confidence of
          clothing that feels made for them. The goal is simple: make better everyday garments
          through a cleaner design process, smarter measurement tools, and a more personal
          relationship between customer and product.
        </p>
      </section>

      <section className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-black/20 p-6 sm:p-8 mb-14">
        <h2 className="text-2xl font-semibold mb-4">Why this exists</h2>
        <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-7">
          <p>
            Most clothing is sold through averages: small, medium, large, standard fits, standard
            bodies, standard assumptions. But bodies are not standard. Preferences are not standard.
            And the garments closest to the body should not feel like compromises.
          </p>
          <p>
            UGP is an attempt to rebuild that experience from the ground up. It combines custom
            clothing, guided product design, and measurement technology so that ordering a garment
            can become more precise over time, not more confusing.
          </p>
          <p>
            This is not about overcomplication. It is about removing the parts of shopping that feel
            generic: bad fit, unclear options, poor follow-up, and products that do not remember
            anything about the person buying them.
          </p>
        </div>
      </section>

      <section className="mb-14">
        <h2 className="text-2xl font-semibold mb-6">What UGP is building</h2>
        <div className="grid gap-5 sm:grid-cols-2">
          {principles.map((principle) => (
            <article
              key={principle.title}
              className="rounded-2xl border border-gray-200 dark:border-gray-800 p-5 bg-white dark:bg-black/20"
            >
              <h3 className="text-lg font-semibold mb-3">{principle.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-7">{principle.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-black/20 p-6 sm:p-8 mb-14">
        <h2 className="text-2xl font-semibold mb-4">The experience</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-7 mb-5">
          The product flow is designed to feel closer to a guided fitting than a typical online
          store. Each choice should make the garment more yours, while keeping the process fast
          enough to repeat.
        </p>
        <ol className="space-y-3 text-gray-700 dark:text-gray-300 leading-7 list-decimal pl-5">
          {processSteps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>

      <section className="mb-14">
        <h2 className="text-2xl font-semibold mb-4">Measurement, without the theater</h2>
        <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-7 max-w-3xl">
          <p>
            UGP is being designed around practical measurement tools that help translate a real body
            into better garment decisions. The ambition is not to make technology the point. The
            ambition is to make fit easier, more repeatable, and more useful each time a customer
            orders.
          </p>
          <p>
            Measurements, product preferences, and order history should work together so future
            purchases become simpler. The more the system understands what worked, the less the
            customer has to start from zero.
          </p>
        </div>
      </section>

      <section className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-black/20 p-6 sm:p-8">
        <h2 className="text-2xl font-semibold mb-4">The point</h2>
        <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-7">
          <p>
            UGP is for people who want clothing to feel intentional: not loud, not disposable, not
            generic. The first focus is everyday essentials, because those are the garments that
            have to work the hardest.
          </p>
          <p>
            The long-term vision is a clothing platform where fit, design, service, and production
            are connected; where the customer is remembered; and where custom does not mean
            complicated.
          </p>
        </div>
      </section>
    </main>
  );
}
