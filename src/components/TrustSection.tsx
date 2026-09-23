export default function TrustSection() {
  return (
    <section className="bg-surface-container-low py-16">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-[#0A2540] mb-2 tracking-tight">Trusted by leading family care organizations</h2>
          <p className="text-on-surface-variant font-body">Featured in Forbes, AARP, and Senior Living Magazine.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-12 opacity-40 grayscale contrast-125">
          <span className="text-2xl font-black font-headline tracking-tighter">AARP</span>
          <span className="text-2xl font-black font-headline tracking-tighter">FORBES</span>
          <span className="text-2xl font-black font-headline tracking-tighter">NBC NEWS</span>
          <span className="text-2xl font-black font-headline tracking-tighter">TECHCARE</span>
        </div>
      </div>
    </section>
  );
}
