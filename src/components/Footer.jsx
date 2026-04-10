import { Utensils } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center text-orange-500 font-bold space-x-2">
              <Utensils size={32} />
              <h1 className="text-2xl tracking-wider uppercase">Restoran</h1>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Menyajikan kebahagiaan di setiap piring sejak 2009. Bahan segar,
              resep rahasia, dan pelayanan sepenuh hati.
            </p>
            <div className="flex space-x-4 pt-2">
              {["FB", "IG", "TW", "YT"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-700 hover:bg-orange-500 hover:text-slate-900 transition-all duration-300"
                >
                  <span className="text-xs font-bold">{social}</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 border-b-2 border-orange-500 w-fit">
              Tautan Cepat
            </h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  Beranda
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-orange-500 transition-colors"
                >
                  Tentang Kami
                </a>
              </li>
              <li>
                <a
                  href="#menu"
                  className="hover:text-orange-500 transition-colors"
                >
                  Layanan kami
                </a>
              </li>
              <li>
                <a
                  href="#menu"
                  className="hover:text-orange-500 transition-colors"
                >
                  Menu Spesial
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-orange-500 transition-colors"
                >
                  Kontak
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 border-b-2 border-orange-500 w-fit">
              Jam Buka
            </h4>
            <div className="space-y-3 text-gray-400">
              <div>
                <p className="text-white font-medium">Senin - Sabtu:</p>
                <p>09.00 - 21.00 WIB</p>
              </div>
              <div>
                <p className="text-white font-medium">Minggu:</p>
                <p>10.00 - 18.00 WIB</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 border-b-2 border-orange-500 w-fit">
              Lokasi Kami
            </h4>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-start space-x-3">
                <div className="text-orange-500 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <p>Jl. KH Imam Bahri No.10, Jawa Timur, Indonesia</p>
              </div>
              <a
                href="https://maps.app.goo.gl/N26JHsQbBHwLKL7B6"
                target="_blank"
                className="inline-block mt-2 bg-slate-800 hover:bg-slate-700 text-orange-500 px-4 py-2 rounded-lg text-sm font-semibold transition-all border border-orange-500/30"
              >
                Buka di Google Maps
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          <p>© 2026 Restoran UMKM. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
