export default function Footer() {
  return (
    <footer className="py-16 px-6 md:px-12 border-t border-base-dark/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-base-dark/60 text-sm">
            <p className="font-medium mb-2">Ann Maina</p>
            <p>Product Designer</p>
          </div>
          <div className="flex flex-col md:flex-row gap-6 text-sm text-base-dark/60">
            <a
              href="mailto:annmaina.info@gmail.com"
              className="hover:text-base-dark transition-colors"
            >
              annmaina.info@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/maina-anne-37797820b/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-base-dark transition-colors"
            >
              LinkedIn
            </a>
            <span className="text-base-dark/40">Nairobi, Kenya (EAT)</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
