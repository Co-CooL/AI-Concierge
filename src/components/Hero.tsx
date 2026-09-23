import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left Column: Content */}
        <div className="flex flex-col space-y-8 max-w-xl">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-extrabold text-[#0A2540] leading-[1.1] tracking-tight">
              Stop fighting over tech. Start connecting again.
            </h1>
            <p className="text-xl md:text-2xl text-on-surface-variant font-body leading-relaxed opacity-90">
              We help your parents master their iPads, smart TVs, and health apps with unlimited, ultra-patient remote support.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
            <Link to="/book" className="w-full sm:w-auto bg-primary-container text-on-primary-container px-8 py-5 rounded-xl font-bold text-lg hover:scale-105 transition-transform duration-300 active:scale-95 shadow-lg shadow-primary-container/20 flex items-center justify-center">
              Take the Free Tech Assessment
            </Link>
            <Link to="/book" className="w-full sm:w-auto px-8 py-5 rounded-xl border-2 border-[#0A2540]/20 text-[#0A2540] font-bold text-lg hover:bg-[#0A2540]/5 hover:border-[#0A2540]/40 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
              Or book a $49 one-time fix
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
          <div className="pt-12 flex items-center gap-4">
            <div className="flex -space-x-3">
              <div className="w-10 h-10 rounded-full border-2 border-surface bg-secondary-container flex items-center justify-center overflow-hidden">
                <img alt="Concierge Profile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhWvF7Fu4Qkowl3rpsTL-d5iKjCP_q4TBKHq46wvZ58tkEbv_guVB8kKSJndDzNvmWJXIbQLhYcaf7Ni5LEUuKZhJVJrC-v-tb0hN_hbm6rfLzOPuQdHWPx_ie_nApGrsml3l7VOAIg9_kvph7KXGRYie6kTVDb_Ma7onEqMSqT9UAlcUg57IXv1uW2wtkRI8Q2yuWUAfHvpe9RJ9Z4T9TwkmiKjIE1N3J0Tg1BdtF-gmNFlgIxt1FRdNICKivo58RttYkv9Dp40s" referrerPolicy="no-referrer" />
              </div>
              <div className="w-10 h-10 rounded-full border-2 border-surface bg-tertiary-container flex items-center justify-center overflow-hidden">
                <img alt="Concierge Profile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqtRviC8al6rfrV_1SxGCJkCER4noHGHTwlcJQX6uxrN09gcSFUEc5nfPmsB2BAq8bhIbUW9kMt2ut2c8mnjDOf_sPFUV0zjja0F0K0pp_JISgPENwzz80RUCmiTyvTbMTke_fmH3z8Rkz-EQdh7PYvaB2qFdR258nyzb-M1tNwTT3i11--DgZLALuh8XvzsjFjRTA1wudvKp8-aHNy6pedXEsh1SolPxjjZzJ3-3vkM5RIxEzmpkxpZte-bO2EkDzwIkcpTdZ2s4" referrerPolicy="no-referrer" />
              </div>
              <div className="w-10 h-10 rounded-full border-2 border-surface bg-primary-fixed flex items-center justify-center overflow-hidden">
                <img alt="Concierge Profile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4jZUTph2bGwSsoLvT2WhbJ7mOk1HgUUOQhg6lf05k6twHzdHNfG7szV59B4lvfLavcZ87f5FKVxENeZU98JKnj5kVzYW0625ZZ9lSKvkv6xOgS-V6rCuVfcfv4AwP08ebU1lkdHQPYcwVxGw4LUH7AX2oa9qIOZTylxSlOhSYj0lZswguL9CQvzJ11Iddx7LNWFpi9jetxxuclBOouVGLcQhdypotk4VgfghwDcERkKQOf-_8MaHXmlU3D5lsIB-bUyfthdth9hQ" referrerPolicy="no-referrer" />
              </div>
            </div>
            <p className="text-sm text-on-surface-variant font-medium">
              Joined by <span className="text-primary font-bold">1,200+ families</span> this month
            </p>
          </div>
        </div>
        {/* Right Column: Visual Anchor */}
        <div className="relative">
          <div className="absolute -top-12 -left-12 w-64 h-64 bg-primary-container/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-12 -right-12 w-80 h-80 bg-secondary-container/20 rounded-full blur-3xl"></div>
          <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-[#1A1C1B]/10 rotate-1 transform hover:rotate-0 transition-transform duration-700 aspect-[4/5]">
            <img alt="Senior using tablet" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpQgt8SjujDZYu8-4sH4sGHD1cyrTaduylR2i6byVUtM87_w1mO01w0VY1BU7_bMvd2IRWCB-iuvRLwuydh4P8p_Ubi8POlBE1u7fIrCC5NnNO4g9AOtFhrgUs3WwwLI9DoelMS1kc1mfPrZ5Ok2yOm6BE0yiTn36JqBDi8NgrqtLqD-CigbfBYemicnOTVtnuXdRkzIkqmKlLkr3_V52vFqBo_257EL_DmUd0hzTO_lmIbxVcZfOVS3d1B8pvFOooG6vzJjtQEXU" referrerPolicy="no-referrer" />
            {/* Floating Assistance Beacon */}
            <div className="absolute bottom-8 right-8 bg-surface/80 backdrop-blur-xl p-6 rounded-3xl shadow-xl max-w-[240px] flex items-start gap-4">
              <div className="bg-primary-container p-2 rounded-full">
                <span className="material-symbols-outlined text-on-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>support_agent</span>
              </div>
              <div>
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Live Concierge</p>
                <p className="text-sm font-semibold text-[#0A2540]">"Hi Margaret! I can help with those photos."</p>
              </div>
            </div>
          </div>
          {/* Decorative Asymmetric Element */}
          <div className="absolute top-1/2 -right-8 w-48 h-48 bg-white/60 backdrop-blur-md rounded-2xl shadow-lg p-6 hidden lg:flex flex-col justify-center -translate-y-1/2">
            <span className="material-symbols-outlined text-primary-container text-4xl mb-4">verified_user</span>
            <p className="text-sm font-bold text-[#0A2540]">Ultra-Patient Support</p>
            <p className="text-xs text-on-surface-variant mt-2">Zero jargon. Infinite kindness.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
