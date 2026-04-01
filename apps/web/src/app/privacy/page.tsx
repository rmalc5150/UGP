export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 dark:text-white">
      <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
      <p className="text-gray-400 text-sm mb-10">Last updated: 1 April 2026</p>

      <div className="prose prose-sm max-w-none space-y-8 text-gray-600 text-sm leading-relaxed">
        <section>
          <h2 className="text-base font-semibold mb-2">1. Who we are</h2>
          <p>
            Untitled Garment Project (&ldquo;UGP&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) is the
            data controller responsible for your personal data. We are subject to the EU General
            Data Protection Regulation (GDPR) (Regulation (EU) 2016/679).
          </p>
          <p className="mt-2">
            Contact: <a href="mailto:privacy@ugp.com">privacy@ugp.com</a>
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-2">2. Data we collect</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Account data</strong> — name, email address, password (hashed).
            </li>
            <li>
              <strong>Order data</strong> — shipping address, billing information, purchase history.
            </li>
            <li>
              <strong>Usage data</strong> — pages visited, search queries, device and browser type,
              IP address.
            </li>
            <li>
              <strong>Communications</strong> — messages sent via the contact form or email.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-2">
            3. Legal basis for processing (GDPR Article 6)
          </h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Contract (Art. 6(1)(b))</strong> — processing necessary to fulfil your order.
            </li>
            <li>
              <strong>Legitimate interests (Art. 6(1)(f))</strong> — fraud prevention, site
              security, and improving our services.
            </li>
            <li>
              <strong>Consent (Art. 6(1)(a))</strong> — marketing emails. You may withdraw consent
              at any time.
            </li>
            <li>
              <strong>Legal obligation (Art. 6(1)(c))</strong> — tax and accounting requirements.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-2">4. How we use your data</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Processing and delivering orders.</li>
            <li>Managing your account and authentication.</li>
            <li>Sending order confirmations and shipping updates.</li>
            <li>Sending marketing communications (with your consent).</li>
            <li>Improving our website and product offering.</li>
            <li>Complying with legal obligations.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-2">5. Data retention</h2>
          <p>
            We retain your personal data only as long as necessary for the purposes described above.
            Order records are kept for 7 years to comply with EU tax law. Account data is deleted
            within 30 days of account closure upon request.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-2">6. Third parties</h2>
          <p>
            We do not sell your personal data. We share data only with trusted processors (payment
            providers, shipping couriers, hosting providers) under Data Processing Agreements
            compliant with GDPR Chapter V for any international transfers.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-2">7. Cookies</h2>
          <p>
            We use strictly necessary cookies for session management and, with your consent,
            analytics cookies to understand how visitors use our site. You can manage cookie
            preferences at any time via your browser settings.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-2">8. Your rights under GDPR</h2>
          <p>Under the GDPR you have the right to:</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>
              <strong>Access</strong> — request a copy of the personal data we hold about you (Art.
              15).
            </li>
            <li>
              <strong>Rectification</strong> — correct inaccurate or incomplete data (Art. 16).
            </li>
            <li>
              <strong>Erasure</strong> — request deletion of your data (&ldquo;right to be
              forgotten&rdquo;) (Art. 17).
            </li>
            <li>
              <strong>Restriction</strong> — limit how we process your data in certain circumstances
              (Art. 18).
            </li>
            <li>
              <strong>Data portability</strong> — receive your data in a structured,
              machine-readable format (Art. 20).
            </li>
            <li>
              <strong>Object</strong> — object to processing based on legitimate interests or for
              direct marketing (Art. 21).
            </li>
            <li>
              <strong>Withdraw consent</strong> — at any time where processing is based on consent.
            </li>
          </ul>
          <p className="mt-3">
            To exercise any of these rights, email{' '}
            <a href="mailto:privacy@ugp.com" className="hover:underline">
              privacy@ugp.com
            </a>
            . We will respond within 30 days. You also have the right to lodge a complaint with your
            local supervisory authority.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-2">9. Security</h2>
          <p>
            We implement appropriate technical and organisational measures to protect your personal
            data against unauthorised access, loss, or destruction, in accordance with Art. 32 GDPR.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-2">10. Changes to this policy</h2>
          <p>
            We may update this policy from time to time. Material changes will be communicated by
            email or a prominent notice on our website. Continued use of our services after the
            effective date constitutes acceptance of the revised policy.
          </p>
        </section>
      </div>
    </div>
  );
}
