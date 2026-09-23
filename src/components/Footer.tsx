export default function Footer() {
  return (
    <footer className="bg-[#F4F4F1] dark:bg-[#0A2540] w-full py-12 px-8">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto gap-8">
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#006B5C] dark:text-[#00BFA5]">spa</span>
            <span className="font-manrope font-bold text-[#0A2540] dark:text-[#F9F9F6] text-xl">Silver Tech Concierge</span>
          </div>
          <p className="font-public-sans text-sm tracking-wide text-[#1A1C1B] dark:text-[#F9F9F6] opacity-60">
            © 2024 Silver Tech Concierge. Digital Hospitality for Seniors.
          </p>
        </div>
        <div className="flex gap-8">
          <a className="text-[#1A1C1B] dark:text-[#F9F9F6] opacity-60 hover:text-[#00BFA5] transition-colors font-public-sans text-sm tracking-wide" href="#">Privacy Policy</a>
          <a className="text-[#1A1C1B] dark:text-[#F9F9F6] opacity-60 hover:text-[#00BFA5] transition-colors font-public-sans text-sm tracking-wide" href="#">Terms of Service</a>
          <a className="text-[#1A1C1B] dark:text-[#F9F9F6] opacity-60 hover:text-[#00BFA5] transition-colors font-public-sans text-sm tracking-wide" href="#">Help Center</a>
        </div>
      </div>
    </footer>
  );
}
