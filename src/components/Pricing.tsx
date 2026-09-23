import { Link } from 'react-router-dom';

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0A2540] mb-6 tracking-tight">
            Simple, transparent pricing.
          </h2>
          <p className="text-xl text-on-surface-variant font-body">
            Choose the level of support that fits your family's needs. No hidden fees or long-term contracts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* One-Time Fix Card */}
          <div className="bg-surface rounded-[2rem] p-10 shadow-sm border border-surface-container-highest flex flex-col">
            <h3 className="text-2xl font-bold text-[#0A2540] mb-2">One-Time Fix</h3>
            <p className="text-on-surface-variant mb-6">Perfect for a single stubborn issue.</p>
            <div className="mb-8">
              <span className="text-5xl font-extrabold text-[#0A2540]">$49</span>
              <span className="text-on-surface-variant"> / session</span>
            </div>
            
            <ul className="space-y-4 mb-10 flex-grow">
              {['Up to 1 hour of patient support', 'Fixes for iPads, TVs, printers, and more', '7-day resolution guarantee', 'No subscription required'].map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
                  <span className="text-on-surface-variant font-medium">{feature}</span>
                </li>
              ))}
            </ul>
            
            <Link to="/book" className="w-full py-4 rounded-xl font-bold text-lg border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-300 flex items-center justify-center">
              Book a Session
            </Link>
          </div>

          {/* Subscription Card */}
          <div className="bg-[#0A2540] rounded-[2rem] p-10 shadow-xl relative flex flex-col transform md:-translate-y-4">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary-container text-on-primary-container px-4 py-1 rounded-full text-sm font-bold tracking-wide uppercase">
              Most Popular
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Unlimited Family Plan</h3>
            <p className="text-white/70 mb-6">Peace of mind for the whole family.</p>
            <div className="mb-8">
              <span className="text-5xl font-extrabold text-white">$29</span>
              <span className="text-white/70"> / month</span>
            </div>
            
            <ul className="space-y-4 mb-10 flex-grow">
              {['Unlimited remote support sessions', 'Family dashboard & device tracking', 'Proactive scam-prevention check-ins', 'Priority booking with preferred concierges', 'Cancel anytime'].map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary-container mt-0.5">check_circle</span>
                  <span className="text-white/90 font-medium">{feature}</span>
                </li>
              ))}
            </ul>
            
            <Link to="/book" className="w-full py-4 rounded-xl font-bold text-lg bg-primary-container text-on-primary-container hover:scale-[1.02] active:scale-[0.98] transition-transform duration-300 shadow-lg shadow-primary-container/20 flex items-center justify-center">
              Start Free Assessment
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
