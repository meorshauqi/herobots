import { useEffect, useState } from 'react';

const sections = [
  {
    id: 'acceptance',
    number: '1',
    title: 'Acceptance of Terms',
    content: (
      <>
        <p className="text-gray-300 leading-relaxed mb-4">
          By accessing or using the website and services provided by <span className="text-indigo-400 font-medium">Herobots Sdn Bhd</span> ("Herobots", "we", "our", "us"), you agree to be bound by these Terms of Service ("Terms").
        </p>
        <p className="text-gray-300 leading-relaxed">
          If you do not agree with any part of these Terms, you must not access or use our website or services. These Terms apply to all visitors, users, and others who access or use our services.
        </p>
      </>
    ),
  },
  {
    id: 'services',
    number: '2',
    title: 'Description of Services',
    content: (
      <>
        <p className="text-gray-300 leading-relaxed mb-4">
          Herobots provides technology solutions including but not limited to:
        </p>
        <ul className="space-y-2 mb-4">
          {[
            'AI-powered security and surveillance systems',
            'Licence Plate Recognition (LPR) solutions',
            'Smart Patrolling systems',
            'Visitor Management Systems (VMS)',
            'Robotics integration and consulting services',
            'Related software, hardware, and support services',
          ].map((item) => (
            <li key={item} className="flex items-start space-x-2 text-gray-300">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-gray-300 leading-relaxed">
          We reserve the right to modify, suspend, or discontinue any service at any time with or without notice.
        </p>
      </>
    ),
  },
  {
    id: 'use',
    number: '3',
    title: 'Acceptable Use',
    content: (
      <>
        <p className="text-gray-300 leading-relaxed mb-4">
          You agree to use our website and services only for lawful purposes. You must not:
        </p>
        <ul className="space-y-2">
          {[
            'Use our services in any way that violates applicable local, national, or international laws or regulations',
            'Transmit or procure the sending of any unsolicited or unauthorised advertising or promotional material',
            'Attempt to gain unauthorised access to our systems, servers, or databases',
            'Interfere with, disrupt, or damage any part of our website or services',
            'Reproduce, duplicate, copy, or resell any part of our services without express written permission',
            'Use automated tools to scrape, crawl, or extract data from our website',
          ].map((item) => (
            <li key={item} className="flex items-start space-x-2 text-gray-300">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-pink-400 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    id: 'intellectual-property',
    number: '4',
    title: 'Intellectual Property',
    content: (
      <>
        <p className="text-gray-300 leading-relaxed mb-4">
          All content on this website — including but not limited to text, graphics, logos, images, audio clips, and software — is the property of Herobots Sdn Bhd or its content suppliers and is protected by applicable intellectual property laws.
        </p>
        <p className="text-gray-300 leading-relaxed">
          You may not reproduce, distribute, modify, or create derivative works of any content without our prior written consent. Any unauthorised use may result in legal action.
        </p>
      </>
    ),
  },
  {
    id: 'disclaimer',
    number: '5',
    title: 'Disclaimer of Warranties',
    content: (
      <>
        <p className="text-gray-300 leading-relaxed mb-4">
          Our website and services are provided on an "as is" and "as available" basis without any warranties of any kind, either express or implied.
        </p>
        <p className="text-gray-300 leading-relaxed">
          We do not warrant that our services will be uninterrupted, error-free, or free of viruses or other harmful components. We make no warranties regarding the accuracy, completeness, or suitability of any information provided on our website.
        </p>
      </>
    ),
  },
  {
    id: 'liability',
    number: '6',
    title: 'Limitation of Liability',
    content: (
      <>
        <p className="text-gray-300 leading-relaxed mb-4">
          To the fullest extent permitted by law, Herobots Sdn Bhd shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our website or services.
        </p>
        <p className="text-gray-300 leading-relaxed">
          Our total liability to you for any claims arising from these Terms or your use of the services shall not exceed the amount paid by you to us in the three (3) months preceding the claim.
        </p>
      </>
    ),
  },
  {
    id: 'third-party',
    number: '7',
    title: 'Third-Party Links & Services',
    content: (
      <p className="text-gray-300 leading-relaxed">
        Our website may contain links to third-party websites or services that are not owned or controlled by Herobots. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites. We encourage you to review the terms and privacy policies of any third-party sites you visit.
      </p>
    ),
  },
  {
    id: 'privacy',
    number: '8',
    title: 'Privacy',
    content: (
      <p className="text-gray-300 leading-relaxed">
        Your use of our website is also governed by our{' '}
        <a href="/privacy-policy" className="text-indigo-400 hover:text-indigo-300 underline underline-offset-2 transition-colors">Privacy Policy</a>, which is incorporated into these Terms by reference. By using our services, you consent to the collection and use of information as described in our Privacy Policy.
      </p>
    ),
  },
  {
    id: 'indemnification',
    number: '9',
    title: 'Indemnification',
    content: (
      <p className="text-gray-300 leading-relaxed">
        You agree to indemnify, defend, and hold harmless Herobots Sdn Bhd, its officers, directors, employees, agents, and licensors from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from your use of our services, your violation of these Terms, or your violation of any rights of a third party.
      </p>
    ),
  },
  {
    id: 'governing-law',
    number: '10',
    title: 'Governing Law',
    content: (
      <p className="text-gray-300 leading-relaxed">
        These Terms shall be governed by and construed in accordance with the laws of Malaysia. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts of Malaysia.
      </p>
    ),
  },
  {
    id: 'changes',
    number: '11',
    title: 'Changes to Terms',
    content: (
      <p className="text-gray-300 leading-relaxed">
        We reserve the right to revise these Terms at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services after any changes constitutes your acceptance of the new Terms. We encourage you to review these Terms periodically.
      </p>
    ),
  },
  {
    id: 'contact',
    number: '12',
    title: 'Contact Us',
    content: (
      <>
        <p className="text-gray-300 leading-relaxed mb-5">
          If you have any questions about these Terms of Service, please contact us:
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

function TermsOfService() {
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
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-black to-indigo-900/30" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl" />
        <div className="relative container mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-widest uppercase bg-purple-500/20 border border-purple-500/40 text-purple-300 rounded-full mb-6">
            Legal Agreement
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Terms of{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
              Service
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Please read these terms carefully before using our website or services. By using Herobots services, you agree to these terms.
          </p>
          <p className="mt-4 text-gray-500 text-sm">Effective Date: 1 April 2026</p>
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
                    className="flex items-center space-x-2 text-sm text-gray-400 hover:text-purple-300 transition-colors group"
                  >
                    <span className="w-5 h-5 rounded-full bg-purple-500/20 text-purple-400 text-xs flex items-center justify-center font-bold group-hover:bg-purple-500/40 transition-colors flex-shrink-0">
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
                className={`p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-all duration-700 ${
                  visibleSections.has(s.id) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${(i % 4) * 80}ms` }}
              >
                <div className="flex items-center space-x-3 mb-5">
                  <span className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-sm font-bold flex-shrink-0">
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
            className={`mt-12 p-6 rounded-2xl bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-500/20 text-center transition-all duration-700 ${
              visibleSections.has('footer-note') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="text-gray-300 text-sm leading-relaxed">
              By continuing to use our website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default TermsOfService;
