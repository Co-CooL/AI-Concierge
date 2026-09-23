export default function HowItWorks() {
  const steps = [
    {
      icon: "touch_app",
      title: "1. Request Help",
      description: "Caregivers can book a session online, or seniors can request help directly with a single tap from their device."
    },
    {
      icon: "phonelink_ring",
      title: "2. One-Tap Connection",
      description: "No apps to download or passwords to remember. We send a secure link via text message that opens right in the browser."
    },
    {
      icon: "favorite",
      title: "3. Patient Resolution",
      description: "Our US-based concierges patiently guide them through the issue using screen sharing and zero technical jargon."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0A2540] mb-6 tracking-tight">
            Tech support that actually respects their time (and yours).
          </h2>
          <p className="text-xl text-on-surface-variant font-body">
            We've removed every point of friction. No holding music, no confusing menus, and absolutely no downloads required.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-surface-container-highest z-0"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-surface-container-low border-8 border-surface flex items-center justify-center mb-6 shadow-sm">
                <span className="material-symbols-outlined text-4xl text-primary">{step.icon}</span>
              </div>
              <h3 className="text-2xl font-bold text-[#0A2540] mb-4">{step.title}</h3>
              <p className="text-on-surface-variant leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
