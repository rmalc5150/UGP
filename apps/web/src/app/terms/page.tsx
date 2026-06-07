const sections = [
  {
    title: '1. About these Terms',
    body: [
      'These Terms and Conditions govern your access to and use of UGP, including our website, mobile applications, measurement tools, product customization tools, account features, checkout, and related services.',
      'By using UGP, creating an account, placing an order, or submitting measurements or design choices, you agree to these Terms. If you do not agree, you should not use the service.',
    ],
  },
  {
    title: '2. Eligibility and accounts',
    body: [
      'You must be legally able to enter into a binding agreement to use UGP or place an order. If you create an account, you are responsible for keeping your login details secure and for all activity under your account.',
      'You agree to provide accurate, current, and complete information, including your name, contact details, shipping address, billing information, body measurements, and product preferences.',
    ],
  },
  {
    title: '3. Measurements and fit',
    body: [
      'UGP may use information you provide, including photos, device information, selected phone model, manual inputs, and measurement-related data, to help estimate garment sizing and fit.',
      'You are responsible for following the measurement instructions carefully. Fit results may vary depending on pose, lighting, camera angle, clothing worn during measurement, device placement, body changes, fabric type, product style, and manufacturing tolerances.',
      'UGP may recommend sizes or generate custom specifications, but we do not guarantee a perfect fit in every case.',
    ],
  },
  {
    title: '4. Custom and made-to-order products',
    body: [
      'Many UGP products may be customized, made-to-order, personalized, or manufactured according to your selected measurements, silhouette, color, fabric, branding, monogram, fit choices, and other design preferences.',
      'You are responsible for reviewing all product details before submitting your order. Once production begins, changes or cancellations may not be possible.',
      'Minor differences in color, fabric appearance, stitching, placement, sizing, and finishing may occur due to screen settings, fabric behavior, production methods, and normal manufacturing variation.',
    ],
  },
  {
    title: '5. Orders, pricing, and payment',
    body: [
      'Prices, product availability, shipping costs, taxes, promotions, and delivery estimates may change at any time before an order is confirmed.',
      'Payment must be completed through the checkout process using the payment methods made available by UGP. By submitting payment information, you confirm that you are authorized to use that payment method.',
      'We may refuse, cancel, or limit an order if we suspect fraud, abuse, pricing errors, availability issues, payment problems, or a violation of these Terms.',
    ],
  },
  {
    title: '6. Shipping and delivery',
    body: [
      'Delivery dates are estimates and are not guaranteed unless expressly stated at checkout. Delays may occur due to production timing, carrier delays, customs, incorrect address information, weather, holidays, or events outside our control.',
      'You are responsible for providing a complete and accurate shipping address. Risk of loss may transfer to you once the order is delivered to the address provided or otherwise marked as delivered by the carrier.',
    ],
  },
  {
    title: '7. Returns, exchanges, and alterations',
    body: [
      'Because customized, personalized, and made-to-order products are produced specifically for you, they may not be eligible for return or exchange unless they are defective, damaged, incorrectly produced, or returnable under applicable consumer law.',
      'If you believe there is a problem with your order, contact us promptly with your order number, a description of the issue, and clear photos where relevant.',
      'Where appropriate, we may offer a repair, alteration, replacement, store credit, refund, or another remedy at our discretion and in accordance with applicable law.',
    ],
  },
  {
    title: '8. Product care',
    body: [
      'You are responsible for following all product care instructions. UGP is not responsible for damage caused by misuse, improper washing or drying, alterations by third parties, normal wear and tear, or failure to follow care guidance.',
    ],
  },
  {
    title: '9. User content and design inputs',
    body: [
      'You may submit text, images, measurements, monograms, preferences, feedback, reviews, or other content through UGP. You confirm that you have the right to submit that content and that it does not violate the rights of any other person or entity.',
      'You may not submit content that is unlawful, abusive, discriminatory, obscene, misleading, infringing, or otherwise inappropriate for use on a retail customization platform.',
    ],
  },
  {
    title: '10. Privacy and data',
    body: [
      'Our collection and use of personal information is described in our Privacy Policy. This may include account information, contact information, order information, payment-related information, measurement data, device information, analytics, and customer support communications.',
      'By using UGP, you understand that accurate measurement and order fulfillment may require processing information that is specific to your body, product choices, and order history.',
    ],
  },
  {
    title: '11. Acceptable use',
    body: [
      'You agree not to misuse UGP, interfere with its operation, attempt unauthorized access, scrape or copy the service, upload malicious code, reverse engineer protected systems, abuse promotions, or use the service for unlawful purposes.',
      'We may suspend or terminate access if we believe your use violates these Terms, creates risk, or harms UGP, other users, partners, suppliers, or service providers.',
    ],
  },
  {
    title: '12. Intellectual property',
    body: [
      'UGP and its content, designs, software, branding, interfaces, measurement tools, product visuals, text, images, videos, and other materials are owned by UGP or its licensors and are protected by intellectual property laws.',
      'You may use UGP only for personal, non-commercial shopping and account purposes unless we give you written permission otherwise.',
    ],
  },
  {
    title: '13. Third-party services',
    body: [
      'UGP may rely on third-party services for payments, hosting, authentication, analytics, shipping, customer support, communications, and other operational functions. Those services may have their own terms and privacy practices.',
    ],
  },
  {
    title: '14. Disclaimers',
    body: [
      'UGP is provided on an as-is and as-available basis. To the fullest extent permitted by law, we disclaim warranties that the service will be uninterrupted, error-free, perfectly accurate, or meet every expectation.',
      'Nothing in these Terms limits any rights you may have under applicable consumer protection laws.',
    ],
  },
  {
    title: '15. Limitation of liability',
    body: [
      'To the fullest extent permitted by law, UGP will not be liable for indirect, incidental, special, consequential, punitive, or exemplary damages, including loss of profits, data, goodwill, or business opportunity.',
      'Where liability cannot be excluded, our liability will be limited to the maximum extent permitted by applicable law.',
    ],
  },
  {
    title: '16. Changes to these Terms',
    body: [
      'We may update these Terms from time to time. The updated version will be posted on this page with a revised last updated date. Continued use of UGP after changes means you accept the updated Terms.',
    ],
  },
  {
    title: '17. Contact',
    body: [
      'Questions about these Terms, your order, or your account can be sent through the contact or customer support options provided by UGP.',
    ],
  },
];

export default function TermsPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 dark:text-white">
      <h1 className="text-3xl font-bold mb-2">Terms and Conditions</h1>
      <p className="text-gray-400 text-sm mb-8">Last updated: 1 April 2026</p>

      <div className="space-y-8">
        {sections.map((section) => (
          <section key={section.title}>
            <h2 className="text-xl font-semibold mb-3">{section.title}</h2>
            <div className="space-y-3 text-gray-700 dark:text-gray-300 leading-7">
              {section.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
