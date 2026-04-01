import { useEffect, useState } from 'react';

const cookieTypes = [
  {
    name: 'Strictly Necessary Cookies',
    icon: '🔒',
    description: 'These cookies are essential for the website to function and cannot be switched off. They are usually set in response to actions you take such as logging in or filling in forms.',
    examples: ['Session management', 'Security tokens (CSRF protection)', 'Load balancing'],
    canDisable: false,
  },
  {
    name: 'Performance & Analytics Cookies',
    icon: '📊',
    description: 'These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously, allowing us to improve our site.',
    examples: ['Page view counts', 'Traffic sources', 'User behaviour analytics'],
    canDisable: true,
  },
  {
    name: 'Functional Cookies',
    icon: '⚙️',
    description: 'These cookies enable the website to provide enhanced functionality and personalisation. They may be set by us or by third-party providers whose services we have added to our pages.',
    examples: ['Language preferences', 'User interface customisations', 'Chat widget sessions'],
    canDisable: true,
  },
  {
    name: 'Marketing & Targeting Cookies',
    icon: '🎯',
    description: 'These cookies may be set through our site by our advertising partners to build a profile of your interests and show you relevant advertisements on other sites.',
    examples: ['Ad retargeting', 'Campaign performance tracking', 'Social media integrations'],
    canDisable: true,
  },
];

const sections = [
  {
    id: 'what-are-cookies',
    number: '1',
    title: 'What Are Cookies?',
    content: (
      <>
        <p className="text-gray-300 leading-relaxed mb-4">
          Cookies are small text files that are placed on your device (computer, tablet, or mobile) when you visit a website. They are widely used to make websites work efficiently and to provide information to website owners.
        </p>
        <p className="text-gray-300 leading-relaxed">
          Cookies do not typically contain any information that personally identifies you, but personal data that we store about you may be linked to the information stored in and obtained from cookies.
        </p>
      </>
    ),
  },
  {
    id: 'how-we-use',
    number: '2',
    title: 'How We Use Cookies',
    content: (
      <>
        <p className="text-gray-300 leading-relaxed mb-4">
          Herobots Sdn Bhd uses cookies and similar tracking technologies to:
        </p>
        <ul className="space-y-2">
          {[
            'Ensure the website functions correctly and securely',
            'Remember your preferences and settings',
            'Analyse how our website is used so we can improve it',
            'Measure the effectiveness of our marketing campaigns',
            'Provide a personalised experience',
          ].map((item) => (
            <li key={item} className="flex items-start space-x-2 text-gray-300">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-teal-400 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    id: 'types',
    number: '3',
    title: 'Types of Cookies We Use',
    content: (
      <div className="space-y-5">
        {cookieTypes.map((ct) => (
          <div key={ct.name} className="rounded-xl border border-white/10 bg-white/5 p-5">
            <div className="flex items-start justify-between mb-2 gap-3">
              <h3 className="text-white font-semibold">{ct.name}</h3>
              <span
                className={`px-2.5 py-0.5 rounded-full text-xs font-medium flex-shrink-0 ${
                  ct.canDisable
                    ? 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30'
                    : 'bg-green-500/20 text-green-300 border border-green-500/30'
                }`}
              >
                {ct.canDisable ? 'Optional' : 'Required'}
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-3">{ct.description}</p>
            <div className="flex flex-wrap gap-2">
              {ct.examples.map((ex) => (
                <span key={ex} className="px-2.5 py-1 bg-white/10 rounded-lg text-xs text-gray-300">
                  {ex}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: 'third-party',
    number: '4',
    title: 'Third-Party Cookies',
    content: (
      <>
        <p className="text-gray-300 leading-relaxed mb-4">
          Some cookies on our website are set by third-party services that appear on our pages. We use services from the following categories of third parties:
        </p>
        <ul className="space-y-2 mb-4">
          {[
            'Analytics providers (e.g., Google Analytics) — to understand website usage',
            'Hosting and infrastructure providers — for website performance and security',
            'Marketing and advertising platforms — for campaign measurement',
            'Customer support tools — for live chat or helpdesk functionality',
          ].map((item) => (
            <li key={item} className="flex items-start space-x-2 text-gray-300">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-teal-400 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-gray-300 leading-relaxed">
          These third parties have their own privacy and cookie policies. We encourage you to review them.
        </p>
      </>
    ),
  },
  {
    id: 'duration',
    number: '5',
    title: 'Cookie Duration',
    content: (
      <>
        <p className="text-gray-300 leading-relaxed mb-4">Cookies can remain on your device for different lengths of time:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { type: 'Session Cookies', desc: 'Temporary cookies that are deleted when you close your browser. They help our website remember your actions during your visit.' },
            { type: 'Persistent Cookies', desc: 'These remain on your device for a set period or until you delete them. They help us recognise you on return visits and remember your preferences.' },
          ].map(({ type, desc }) => (
            <div key={type} className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-white font-medium mb-2">{type}</p>
              <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    id: 'manage',
    number: '6',
    title: 'Managing & Disabling Cookies',
    content: (
      <>
        <p className="text-gray-300 leading-relaxed mb-4">
          You can control and manage cookies in various ways. Please bear in mind that removing or blocking cookies can impact your user experience and parts of our website may no longer be fully accessible.
        </p>
        <p className="text-gray-300 leading-relaxed mb-4">
          Most browsers allow you to manage cookie preferences. Here is how to manage cookies in common browsers:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
          {[
            { browser: 'Google Chrome', path: 'Settings → Privacy and Security → Cookies' },
            { browser: 'Mozilla Firefox', path: 'Options → Privacy & Security → Cookies' },
            { browser: 'Safari', path: 'Preferences → Privacy → Manage Website Data' },
            { browser: 'Microsoft Edge', path: 'Settings → Cookies and Site Permissions' },
          ].map(({ browser, path }) => (
            <div key={browser} className="rounded-lg border border-white/10 bg-white/5 p-3">
              <p className="text-white text-sm font-medium mb-1">{browser}</p>
              <p className="text-gray-400 text-xs">{path}</p>
            </div>
          ))}
        </div>
        <p className="text-gray-300 leading-relaxed text-sm">
          For more information on managing cookies, visit{' '}
          <a
            href="https://www.allaboutcookies.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors"
          >
            allaboutcookies.org
          </a>
          .
        </p>
      </>
    ),
  },
  {
    id: 'consent',
    number: '7',
    title: 'Your Consent',
    content: (
      <p className="text-gray-300 leading-relaxed">
        By continuing to use our website without changing your browser settings, you consent to our use of cookies as described in this Cookie Policy. You may withdraw your consent at any time by adjusting your browser settings or by contacting us.
      </p>
    ),
  },
  {
    id: 'changes',
    number: '8',
    title: 'Changes to This Cookie Policy',
    content: (
      <p className="text-gray-300 leading-relaxed">
        We may update this Cookie Policy from time to time to reflect changes in technology, law, or our practices. Any changes will be published on this page with the updated effective date. We encourage you to review this policy periodically.
      </p>
    ),
  },
  {
    id: 'contact',
    number: '9',
    title: 'Contact Us',
    content: (
      <>
        <p className="text-gray-300 leading-relaxed mb-5">
          If you have any questions or concerns about our use of cookies, please contact us:
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
                <a href={href} className="text-teal-400 hover:text-teal-300 transition-colors text-sm">
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

function CookiePolicy() {
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
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900/40 via-black to-cyan-900/30" />
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-teal-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl" />
        <div className="relative container mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-widest uppercase bg-teal-500/20 border border-teal-500/40 text-teal-300 rounded-full mb-6">
            Transparency
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Cookie{' '}
            <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              Policy
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Learn about the cookies we use on our website, why we use them, and how you can manage your preferences.
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
                    className="flex items-center space-x-2 text-sm text-gray-400 hover:text-teal-300 transition-colors group"
                  >
                    <span className="w-5 h-5 rounded-full bg-teal-500/20 text-teal-400 text-xs flex items-center justify-center font-bold group-hover:bg-teal-500/40 transition-colors flex-shrink-0">
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
                className={`p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-teal-500/30 transition-all duration-700 ${
                  visibleSections.has(s.id) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${(i % 4) * 80}ms` }}
              >
                <div className="flex items-center space-x-3 mb-5">
                  <span className="w-9 h-9 rounded-full bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center text-sm font-bold flex-shrink-0">
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
            className={`mt-12 p-6 rounded-2xl bg-gradient-to-r from-teal-900/30 to-cyan-900/30 border border-teal-500/20 text-center transition-all duration-700 ${
              visibleSections.has('footer-note') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="text-gray-300 text-sm leading-relaxed">
              By continuing to use our website, you consent to the use of cookies as described in this Cookie Policy.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default CookiePolicy;
