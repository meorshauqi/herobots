import { useEffect, useState } from 'react';

const sections = [
  {
    id: 'introduction',
    number: '1',
    title: 'Introduction',
    content: (
      <>
        <p className="text-gray-300 leading-relaxed mb-4">
          This Privacy Policy is issued in compliance with the <span className="text-indigo-400 font-medium">Personal Data Protection Act 2010 (PDPA)</span> of Malaysia.
        </p>
        <p className="text-gray-300 leading-relaxed mb-4">
          Herobots Sdn Bhd ("we", "our", "us") is committed to protecting your personal data and ensuring that it is processed in accordance with applicable laws. This policy explains how we collect, use, disclose, and safeguard your personal data.
        </p>
        <p className="text-gray-300 leading-relaxed">
          By accessing or using our website and services, you consent to the processing of your personal data in accordance with this Privacy Policy.
        </p>
      </>
    ),
  },
  {
    id: 'data-collected',
    number: '2',
    title: 'Types of Personal Data Collected',
    content: (
      <>
        <p className="text-gray-300 leading-relaxed mb-4">We may collect and process the following personal data:</p>
        <div className="space-y-5">
          {[
            {
              label: '(a) Personal Identification Information',
              items: ['Full name', 'Email address', 'Phone number', 'Identification details (if required for verification)', 'Company name and designation'],
            },
            {
              label: '(b) Transaction & Service Data',
              items: ['Booking details', 'Payment-related information (processed via third-party providers)', 'Communication records'],
            },
            {
              label: '(c) Technical & Usage Data',
              items: ['IP address', 'Browser type and device information', 'Website usage data and analytics'],
            },
          ].map((group) => (
            <div key={group.label}>
              <p className="text-white font-medium mb-2">{group.label}</p>
              <ul className="space-y-1 ml-4">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start space-x-2 text-gray-300">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <p className="text-white font-medium mb-2">(d) Cookies &amp; Tracking Data</p>
            <p className="text-gray-300 leading-relaxed ml-4">
              We use cookies and similar technologies to enhance user experience and analyse website traffic. Please refer to our{' '}
              <a href="/cookie-policy" className="text-indigo-400 hover:text-indigo-300 underline underline-offset-2 transition-colors">Cookie Policy</a> for more details.
            </p>
          </div>
        </div>
      </>
    ),
  },
  {
    id: 'purpose',
    number: '3',
    title: 'Purpose of Processing Personal Data',
    content: (
      <>
        <p className="text-gray-300 leading-relaxed mb-4">Your personal data is collected and processed for the following purposes:</p>
        <ul className="space-y-2 mb-4">
          {[
            'To provide and manage our services (including bookings and collaborations)',
            'To process transactions and payments',
            'To communicate with you regarding services, updates, or support',
            'To improve our website, services, and user experience',
            'To comply with legal and regulatory requirements',
            'For marketing purposes (only with your consent, where required)',
          ].map((item) => (
            <li key={item} className="flex items-start space-x-2 text-gray-300">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-gray-300 leading-relaxed">
          We will not process your personal data for any purpose other than those stated above without your consent.
        </p>
      </>
    ),
  },
  {
    id: 'disclosure',
    number: '4',
    title: 'Disclosure of Personal Data',
    content: (
      <>
        <p className="text-gray-300 leading-relaxed mb-4">We may disclose your personal data to:</p>
        <ul className="space-y-2 mb-4">
          {[
            'Service providers (e.g., payment processors, IT service providers, analytics providers)',
            'Professional advisors (e.g., auditors, lawyers)',
            'Regulatory authorities or law enforcement agencies where required by law',
            'Business partners strictly for operational purposes',
          ].map((item) => (
            <li key={item} className="flex items-start space-x-2 text-gray-300">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-gray-300 leading-relaxed">
          All third parties are required to maintain the confidentiality and security of your personal data.
        </p>
      </>
    ),
  },
  {
    id: 'transfer',
    number: '5',
    title: 'Transfer of Personal Data Outside Malaysia',
    content: (
      <p className="text-gray-300 leading-relaxed">
        Your personal data may be transferred to, stored, or processed in countries outside Malaysia. Where such transfer occurs, we will take reasonable steps to ensure that the receiving party provides a level of data protection comparable to that under the PDPA.
      </p>
    ),
  },
  {
    id: 'retention',
    number: '6',
    title: 'Data Retention',
    content: (
      <>
        <p className="text-gray-300 leading-relaxed mb-4">
          We will retain your personal data only for as long as necessary to fulfil the purposes stated in this Privacy Policy or as required by applicable laws and regulations.
        </p>
        <p className="text-gray-300 leading-relaxed">
          When your personal data is no longer required, we will take reasonable steps to ensure it is securely deleted or anonymised.
        </p>
      </>
    ),
  },
  {
    id: 'security',
    number: '7',
    title: 'Security of Personal Data',
    content: (
      <>
        <p className="text-gray-300 leading-relaxed mb-4">
          We implement appropriate technical and organisational measures to safeguard your personal data against loss, misuse, unauthorised access, disclosure, alteration, or destruction.
        </p>
        <p className="text-gray-300 leading-relaxed">
          However, no method of transmission over the internet is completely secure, and we do not guarantee absolute security.
        </p>
      </>
    ),
  },
  {
    id: 'rights',
    number: '8',
    title: 'Your Rights Under PDPA',
    content: (
      <>
        <p className="text-gray-300 leading-relaxed mb-4">Under the PDPA, you have the right to:</p>
        <ul className="space-y-2 mb-4">
          {[
            'Request access to your personal data',
            'Request correction of inaccurate or incomplete data',
            'Withdraw your consent for processing',
            'Limit the processing of your personal data',
          ].map((item) => (
            <li key={item} className="flex items-start space-x-2 text-gray-300">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-gray-300 leading-relaxed">
          Requests may be subject to applicable fees and legal limitations. To exercise your rights, please contact us using the details in Section 13.
        </p>
      </>
    ),
  },
  {
    id: 'obligation',
    number: '9',
    title: 'Obligation to Provide Personal Data',
    content: (
      <p className="text-gray-300 leading-relaxed">
        The provision of your personal data is voluntary. However, failure to provide necessary personal data may result in our inability to provide you with services or fulfil contractual obligations.
      </p>
    ),
  },
  {
    id: 'third-party',
    number: '10',
    title: 'Third-Party Websites',
    content: (
      <p className="text-gray-300 leading-relaxed">
        Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of such websites. We encourage you to review the privacy policies of any third-party sites you visit.
      </p>
    ),
  },
  {
    id: 'cookies',
    number: '11',
    title: 'Cookies Policy',
    content: (
      <p className="text-gray-300 leading-relaxed">
        By using our website, you consent to our use of cookies. You may control or disable cookies through your browser settings. However, doing so may affect website functionality. For full details, please refer to our{' '}
        <a href="/cookie-policy" className="text-indigo-400 hover:text-indigo-300 underline underline-offset-2 transition-colors">Cookie Policy</a>.
      </p>
    ),
  },
  {
    id: 'changes',
    number: '12',
    title: 'Changes to This Privacy Policy',
    content: (
      <p className="text-gray-300 leading-relaxed">
        We reserve the right to update this Privacy Policy at any time. Any changes will be published on this page with the updated effective date. We encourage you to review this policy periodically to stay informed of how we protect your personal data.
      </p>
    ),
  },
  {
    id: 'contact',
    number: '13',
    title: 'Contact Information',
    content: (
      <>
        <p className="text-gray-300 leading-relaxed mb-5">
          If you have any questions, requests, or complaints regarding your personal data, please contact our Data Protection Officer:
        </p>
        <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-3">
          {[
            { label: 'Company', value: 'Herobots Sdn Bhd' },
            { label: 'Email', value: 'info@herobots.net', href: 'mailto:info@herobots.net' },
            { label: 'Phone', value: '+60 18-224 5123', href: 'tel:+60182245123' },
            { label: 'Address', value: 'Unit L1.01, 1st Floor, Cova Square, Jalan Teknologi, Kota Damansara, 47810 Petaling Jaya, Selangor, Malaysia' },
          ].map(({ label, value, href }) => (
            <div key={label} className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-3">
              <span className="text-gray-400 text-sm w-20 flex-shrink-0 font-medium">{label}</span>
              {href ? (
                <a href={href} className="text-indigo-400 hover:text-indigo-300 transition-colors text-sm">
                  {value}
                </a>
              ) : (
                <span className="text-gray-200 text-sm">{value}</span>
              )}
            </div>
          ))}
        </div>
      </>
    ),
  },
];

function PrivacyPolicy() {
  const [visibleSections, setVisibleSections] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-section-id');
            if (id) setVisibleSections((prev) => new Set([...prev, id]));
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const els = document.querySelectorAll('[data-section-id]');
    els.forEach((el) => observer.observe(el));
    return () => els.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 via-black to-purple-900/30" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />
        <div className="relative container mx-auto px-4 sm:px-6 text-center">
          <div
            data-section-id="hero"
            className={`transition-all duration-700 ${visibleSections.has('hero') || true ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-widest uppercase bg-indigo-500/20 border border-indigo-500/40 text-indigo-300 rounded-full mb-6">
              PDPA Compliant
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              Privacy{' '}
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Policy
              </span>
            </h1>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              How we collect, use, and protect your personal data in accordance with the Personal Data Protection Act 2010 (PDPA) of Malaysia.
            </p>
            <p className="mt-4 text-gray-500 text-sm">Effective Date: 1 April 2026</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">

          {/* Quick nav */}
          <nav
            data-section-id="nav"
            className={`mb-12 p-5 rounded-2xl bg-white/5 border border-white/10 transition-all duration-700 ${visibleSections.has('nav') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <p className="text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wider">Table of Contents</p>
            <ol className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
              {sections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="flex items-center space-x-2 text-sm text-gray-400 hover:text-indigo-300 transition-colors group"
                  >
                    <span className="w-5 h-5 rounded-full bg-indigo-500/20 text-indigo-400 text-xs flex items-center justify-center font-bold group-hover:bg-indigo-500/40 transition-colors flex-shrink-0">
                      {s.number}
                    </span>
                    <span>{s.title}</span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {/* Sections */}
          <div className="space-y-10">
            {sections.map((s, i) => (
              <div
                key={s.id}
                id={s.id}
                data-section-id={s.id}
                className={`p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-500/30 transition-all duration-700 ${
                  visibleSections.has(s.id) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${(i % 4) * 80}ms` }}
              >
                <div className="flex items-center space-x-3 mb-5">
                  <span className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {s.number}
                  </span>
                  <h2 className="text-xl font-bold text-white">{s.title}</h2>
                </div>
                <div className="ml-12">{s.content}</div>
              </div>
            ))}
          </div>

          {/* Footer note */}
          <div
            data-section-id="footer-note"
            className={`mt-12 p-6 rounded-2xl bg-gradient-to-r from-indigo-900/30 to-purple-900/30 border border-indigo-500/20 text-center transition-all duration-700 ${
              visibleSections.has('footer-note') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="text-gray-300 text-sm leading-relaxed">
              By continuing to use our website, you acknowledge that you have read and understood this Privacy Policy and agree to its terms.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default PrivacyPolicy;
