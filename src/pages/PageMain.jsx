import { useState } from "react";
import NavbarMain from "../components/NavbarMain";
import {
  User,
  Coffee,
  Hamburger,
  Utensils,
  Truck,
  Clock,
  ShieldCheck,
  Award,
  Heart,
} from "lucide-react";

// kategori menu
const categories = [
  {
    id: "sarapan",
    side_label: "Populer",
    label: "Sarapan",
    icon: <Coffee size={38} />,
  },
  {
    id: "lunch",
    side_label: "Spesial",
    label: "lunch",
    icon: <Hamburger size={38} />,
  },
  {
    id: "dinner",
    side_label: "Menarik",
    label: "Dinner",
    icon: <Utensils size={38} />,
  },
];

// data layanan
const services = [
  {
    id: 1,
    title: "Master Chefs",
    icon: <User size={60} />,
    desc: "Koki berpengalaman yang ahli dalam meracik bumbu autentik khas nusantara.",
  },
  {
    id: 2,
    title: "Bahan Segar",
    icon: <Heart size={60} />,
    desc: "Kami hanya menggunakan bahan baku yang dipasok langsung dari petani lokal setiap pagi.",
  },
  {
    id: 3,
    title: "Pengiriman Cepat",
    icon: <Truck size={60} />,
    desc: "Layanan delivery yang menjamin makanan sampai ke tangan Anda dalam kondisi tetap hangat.",
  },
  {
    id: 4,
    title: "Halal & Higienis",
    icon: <ShieldCheck size={60} />,
    desc: "Standar kebersihan dapur yang ketat dan jaminan 100% bahan makanan halal.",
  },
  {
    id: 5,
    title: "Pelayanan 24/7",
    icon: <Clock size={60} />,
    desc: "Siap melayani pesanan Anda kapan saja dengan sistem booking yang sangat mudah.",
  },
  {
    id: 6,
    title: "Rasa Berkualitas",
    icon: <Award size={60} />,
    desc: "Resep turun temurun yang telah memenangkan berbagai penghargaan kuliner lokal.",
  },
  {
    id: 7,
    title: "Kopi Premium",
    icon: <Coffee size={60} />,
    desc: "Pilihan biji kopi terbaik untuk menemani waktu santai atau meeting kerja Anda.",
  },
  {
    id: 8,
    title: "Alat Makan Steril",
    icon: <Utensils size={60} />,
    desc: "Semua peralatan makan diproses melalui sterilisasi suhu tinggi sebelum digunakan.",
  },
];

// data menu
const sarapan = [
  {
    id: 1,
    title: "Nasi Uduk Betawi",
    price: "Rp 15.000",
    description: "Nasi uduk harum dengan bihun, tempe orek, dan sambal.",
    image:
      "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/6/3/1/FNM_070111-Fried-Chicken-026_s4x3.jpg.rend.hgtvcom.1280.960.suffix/1382539796174.webp",
  },
  {
    id: 2,
    title: "Bubur Ayam Kaldu",
    price: "Rp 12.000",
    description: "Bubur lembut dengan cakwe, ayam suwir, dan kerupuk.",
    image:
      "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/6/3/1/FNM_070111-Fried-Chicken-026_s4x3.jpg.rend.hgtvcom.1280.960.suffix/1382539796174.webp",
  },
  {
    id: 3,
    title: "Lontong Sayur",
    price: "Rp 15.000",
    description: "Lontong dengan kuah gulai labu siam dan telur rebus.",
    image:
      "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/6/3/1/FNM_070111-Fried-Chicken-026_s4x3.jpg.rend.hgtvcom.1280.960.suffix/1382539796174.webp",
  },
  {
    id: 4,
    title: "Omelet Sayur",
    price: "Rp 18.000",
    description: "Telur dadar tebal dengan potongan wortel dan daun bawang.",
    image:
      "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/6/3/1/FNM_070111-Fried-Chicken-026_s4x3.jpg.rend.hgtvcom.1280.960.suffix/1382539796174.webp",
  },
  {
    id: 5,
    title: "Pancake Madu",
    price: "Rp 20.000",
    description: "Pancake lembut dengan siraman madu murni dan mentega.",
    image:
      "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/6/3/1/FNM_070111-Fried-Chicken-026_s4x3.jpg.rend.hgtvcom.1280.960.suffix/1382539796174.webp",
  },
  {
    id: 6,
    title: "Sandwich Gandum",
    price: "Rp 22.000",
    description: "Roti gandum isi telur, keju, dan selada segar.",
    image:
      "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/6/3/1/FNM_070111-Fried-Chicken-026_s4x3.jpg.rend.hgtvcom.1280.960.suffix/1382539796174.webp",
  },
  {
    id: 7,
    title: "Nasi Kuning",
    price: "Rp 15.000",
    description: "Nasi kuning gurih dengan perkedel dan telur suwir.",
    image:
      "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/6/3/1/FNM_070111-Fried-Chicken-026_s4x3.jpg.rend.hgtvcom.1280.960.suffix/1382539796174.webp",
  },
  {
    id: 8,
    title: "Bubur Kacang Ijo",
    price: "Rp 10.000",
    description: "Kacang hijau manis dengan santan kental hangat.",
    image:
      "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/6/3/1/FNM_070111-Fried-Chicken-026_s4x3.jpg.rend.hgtvcom.1280.960.suffix/1382539796174.webp",
  },
];

const lunch = [
  {
    id: 1,
    title: "Ayam Goreng Penyet",
    price: "Rp 25.000",
    description: "Ayam goreng dengan sambal korek super pedas.",
    image:
      "https://img.freepik.com/foto-gratis/piring-makanan-laut-dengan-udang-kerang-lobster-disajikan-dengan-lemon_140725-8798.jpg?semt=ais_hybrid&w=740&q=80",
  },
  {
    id: 2,
    title: "Soto Ayam Lamongan",
    price: "Rp 20.000",
    description: "Soto ayam kuah kuning dengan taburan koya gurih.",
    image:
      "https://img.freepik.com/foto-gratis/piring-makanan-laut-dengan-udang-kerang-lobster-disajikan-dengan-lemon_140725-8798.jpg?semt=ais_hybrid&w=740&q=80",
  },
  {
    id: 3,
    title: "Gado-Gado Siram",
    price: "Rp 18.000",
    description: "Sayuran lengkap dengan saus kacang yang dihaluskan.",
    image:
      "https://img.freepik.com/foto-gratis/piring-makanan-laut-dengan-udang-kerang-lobster-disajikan-dengan-lemon_140725-8798.jpg?semt=ais_hybrid&w=740&q=80",
  },
  {
    id: 4,
    title: "Ikan Bakar Nila",
    price: "Rp 35.000",
    description: "Ikan nila bakar bumbu kecap pedas manis.",
    image:
      "https://img.freepik.com/foto-gratis/piring-makanan-laut-dengan-udang-kerang-lobster-disajikan-dengan-lemon_140725-8798.jpg?semt=ais_hybrid&w=740&q=80",
  },
  {
    id: 5,
    title: "Nasi Padang Komplit",
    price: "Rp 30.000",
    description: "Nasi dengan rendang sapi, daun singkong, dan gulai.",
    image:
      "https://img.freepik.com/foto-gratis/piring-makanan-laut-dengan-udang-kerang-lobster-disajikan-dengan-lemon_140725-8798.jpg?semt=ais_hybrid&w=740&q=80",
  },
  {
    id: 6,
    title: "Mie Goreng Seafood",
    price: "Rp 28.000",
    description: "Mie goreng dengan udang, cumi, dan bakso ikan.",
    image:
      "https://img.freepik.com/foto-gratis/piring-makanan-laut-dengan-udang-kerang-lobster-disajikan-dengan-lemon_140725-8798.jpg?semt=ais_hybrid&w=740&q=80",
  },
  {
    id: 7,
    title: "Sate Kambing",
    price: "Rp 45.000",
    description: "Sate kambing muda dengan bumbu kecap dan irisan tomat.",
    image:
      "https://img.freepik.com/foto-gratis/piring-makanan-laut-dengan-udang-kerang-lobster-disajikan-dengan-lemon_140725-8798.jpg?semt=ais_hybrid&w=740&q=80",
  },
  {
    id: 8,
    title: "Rawon Daging",
    price: "Rp 35.000",
    description: "Sup daging hitam khas Jatim dengan tauge pendek.",
    image:
      "https://img.freepik.com/foto-gratis/piring-makanan-laut-dengan-udang-kerang-lobster-disajikan-dengan-lemon_140725-8798.jpg?semt=ais_hybrid&w=740&q=80",
  },
];

const dinner = [
  {
    id: 1,
    title: "Sop Buntut",
    price: "Rp 65.000",
    description: "Sop buntut sapi premium dengan sayuran segar.",
    image:
      "https://shelfcooking.com/wp-content/uploads/2019/08/dinner-ideas.png",
  },
  {
    id: 2,
    title: "Steak Ayam BBQ",
    price: "Rp 40.000",
    description: "Dada ayam panggang dengan saus BBQ dan kentang.",
    image:
      "https://shelfcooking.com/wp-content/uploads/2019/08/dinner-ideas.png",
  },
  {
    id: 3,
    title: "Nasi Goreng Spesial",
    price: "Rp 25.000",
    description: "Nasi goreng dengan telur mata sapi dan ayam goreng.",
    image:
      "https://shelfcooking.com/wp-content/uploads/2019/08/dinner-ideas.png",
  },
  {
    id: 4,
    title: "Capcay Kuah",
    price: "Rp 22.000",
    description: "Tumisan berbagai macam sayuran dengan kuah kental.",
    image:
      "https://shelfcooking.com/wp-content/uploads/2019/08/dinner-ideas.png",
  },
  {
    id: 5,
    title: "Sate Taichan",
    price: "Rp 25.000",
    description: "Sate ayam putih polos dengan sambal pedas jeruk nipis.",
    image:
      "https://shelfcooking.com/wp-content/uploads/2019/08/dinner-ideas.png",
  },
  {
    id: 6,
    title: "Fettuccine Carbonara",
    price: "Rp 45.000",
    description: "Pasta krim lembut dengan topping smoked beef.",
    image:
      "https://shelfcooking.com/wp-content/uploads/2019/08/dinner-ideas.png",
  },
  {
    id: 7,
    title: "Bakmi Godog Jawa",
    price: "Rp 20.000",
    description: "Bakmi rebus khas Jawa dengan campuran telur bebek.",
    image:
      "https://shelfcooking.com/wp-content/uploads/2019/08/dinner-ideas.png",
  },
  {
    id: 8,
    title: "Gurame Asam Manis",
    price: "Rp 55.000",
    description: "Ikan gurame fillet goreng tepung dengan saus nanas.",
    image:
      "https://shelfcooking.com/wp-content/uploads/2019/08/dinner-ideas.png",
  },
];

function PageMain() {
  const [category, setCategory] = useState("sarapan");
  const ALL_MENUS = {
    sarapan: sarapan,
    lunch: lunch,
    dinner: dinner,
  };
  const currentMenu = ALL_MENUS[category] || [];

  return (
    <main>
      <section className="relative min-h-screen bg-slate-900 overflow-hidden">
        <NavbarMain />

        <div className="py-16">
          <div className="absolute inset-0 z-0">
            <img
              src="https://portablepartitions.com.au/wp-content/uploads/2022/06/hotel-restaurant-design.jpg"
              className="h-full w-full object-cover opacity-5"
              alt="background"
            />
          </div>

          <div className="container mx-auto px-2 relative z-10">
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div className="order-2 md:order-1">
                <div className="max-w-xl rounded-2xl p-8 md:p-12">
                  <h2 className="mb-6 text-4xl font-extrabold leading-tight text-white md:text-6xl">
                    Nikmati Cita Rasa{" "}
                    <span className="text-yellow-400">Terbaik</span> di Setiap
                    Gigitan
                  </h2>
                  <p className="mb-8 text-lg text-red-100">
                    Hidangan dibuat dari bahan segar pilihan, disajikan dengan
                    rasa autentik yang tak terlupakan oleh chef berpengalaman.
                  </p>

                  <div className="flex items-center text-sm md:text-base gap-4">
                    <a
                      href="#menu"
                      className="inline-block rounded-lg bg-yellow-500 px-6 py-3 font-semibold text-red-900 transition-all easex hover:bg-yellow-400 hover:shadow-lg active:scale-95"
                    >
                      Lihat Menu
                    </a>
                    <a
                      href="#"
                      className="inline-block rounded-lg border-2 border-yellow-500 px-6 py-3 font-semibold text-yellow-500 transition-all easex hover:bg-yellow-500 hover:text-red-900 active:scale-95"
                    >
                      Pesan Sekarang
                    </a>
                  </div>
                </div>
              </div>

              <div className="order-1 flex justify-center md:order-2">
                <div className="relative">
                  <div className="absolute -inset-4 rounded-full"></div>

                  <img
                    src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/ac/fb/9e/ha-noi-s-traditional.jpg"
                    alt="Menu Makanan"
                    className="animation-rotate relative h-64 aspect-square rounded-full border-8 border-white object-cover sm:h-80 sm:w-80 lg:h-[450px] lg:w-[450px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-12">
        <h2 className="font-bold text-center text-2xl md:text-4xl mb-12">
          Tentang Kami
        </h2>

        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 w-full">
            <div className="grid grid-cols-2 gap-3">
              <div className="text-left">
                <img
                  src="https://themewagon.github.io/restoran/img/about-1.jpg"
                  alt=""
                  className="rounded w-full"
                />
              </div>
              <div className="relative text-left mt-[25%]">
                <img
                  src="https://themewagon.github.io/restoran/img/about-2.jpg"
                  alt=""
                  className="absolute bottom-0 left-0 rounded w-3/4"
                />
              </div>
              <div className="relative">
                <img
                  src="https://themewagon.github.io/restoran/img/about-3.jpg"
                  alt=""
                  className="absolute top-0 right-0 rounded w-3/4"
                />
              </div>
              <div className="text-right">
                <img
                  src="https://themewagon.github.io/restoran/img/about-4.jpg"
                  alt=""
                  className="rounded w-full"
                />
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <h3 className="text-2xl text-yellow-600 italic mb-2">
              Tentang Kami
            </h3>
            <h2 className="text-4xl font-bold mb-6">
              Selamat Datang di{" "}
              <span className="text-yellow-600">RESTARURANT</span>
            </h2>

            <p className="text-gray-500 mb-6 max-w-lg">
              Di <span className="text-yellow-600">RESTAURANT</span>, kami
              percaya bahwa makanan bukan sekadar pengisi perut, melainkan
              sebuah cerita. Berawal dari kecintaan kami pada bahan lokal
              pilihan dan rempah autentik, kami menghadirkan simfoni rasa yang
              memanjakan lidah.
            </p>

            <p className="text-gray-500 mb-6 max-w-lg">
              Setiap piring yang kami sajikan adalah hasil kurasi penuh
              ketelitian—memadukan tradisi kuliner dengan sentuhan modern. Kami
              mengundang Anda untuk duduk sejenak, melepas lelah, dan merayakan
              momen berharga bersama orang tercinta dalam kehangatan suasana
              kami.
            </p>

            <div className="flex flex-col md:flex-row items-start space-y-4 md:space-x-4">
              <div className="bg-gray-100 rounded-md flex items-center justify-center px-4 py-1 border-l-6 border-yellow-500 space-x-2">
                <h2 className=" font-bold pb-2 text-5xl lg:text-6xl text-yellow-500">
                  15
                </h2>
                <div>
                  <p className="text-gray-500">Tahun</p>
                  <p className="uppercase font-semibold">Pengalaman</p>
                </div>
              </div>

              <div className="bg-gray-100 rounded-md flex items-center justify-center px-4 py-1 border-l-6 border-yellow-500 space-x-2">
                <h2 className=" font-bold pb-2 text-5xl lg:text-6xl text-yellow-500">
                  50
                </h2>
                <div>
                  <p className="text-gray-500">Populer</p>
                  <p className="uppercase font-semibold">Master Chefs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="service" className="py-12 bg-gray-100">
        <h2 className="font-bold text-center text-2xl md:text-4xl mb-12">
          Jasa Yang Kami Sediakan
        </h2>

        <div className="container mx-auto px-6 md:px-12">
          <div className="grid gird-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className="group bg-white shadow-sm shadow-gray-300 py-10 px-6 cursor-pointer rounded-md hover:bg-orange-400 transition-colors duration-300 ease"
              >
                <div className="mb-4 text-yellow-500 group-hover:text-gray-50 transition-colors duration-300 ease">
                  {service.icon}
                </div>
                <h2 className="font-bold text-xl mb-2 group-hover:text-gray-50 transition-colors duration-300 ease">
                  {service.title}
                </h2>
                <p className="text-gray-500 group-hover:text-gray-100 transition-colors duration-300 ease">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="menu" className="py-12">
        <h2 className="font-bold text-center text-2xl md:text-4xl mb-12">
          Menu Kami
        </h2>

        <div className="container w-fit mx-auto flex justify-center items-center mb-12 space-x-6 border-b-2 border-gray-200">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setCategory(cat.id)}
              className={`flex items-center pb-4 cursor-pointer space-x-2 border-b-2 ${category === cat.id ? "border-orange-500" : "border-white"}`}
            >
              <h5 className="text-orange-500">{cat.icon}</h5>
              <div className="text-left text-sm">
                <p className="text-gray-500">{cat.side_label}</p>
                <p className="uppercase font-bold">{cat.label}</p>
              </div>
            </button>
          ))}
        </div>

        <div className="container w-full mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-4 lg:gap-6">
            {currentMenu.map((item) => (
              <div
                key={item.id}
                className="flex flex-col h-full shadow-sm shadow-gray-300 rounded-xl cursor-pointer"
              >
                <div className="w-full h-48">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover rounded-t-md"
                  />
                </div>
                <div className="p-4 flex flex-col h-full">
                  <h2 className="font-bold text-xl mb-2">{item.title}</h2>
                  <p className="text-gray-700 mb-4 flex-grow">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <button className="py-2 px-6 bg-orange-500 rounded-md text-white cursor-pointer">
                      Pesan
                    </button>
                    <p className="text-gray-700 italic">{item.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-gray-100 py-12">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <h3 className="text-xl md:text-2xl text-yellow-600 italic">
              Kontak Kami
            </h3>
            <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900">
              Ada Pertanyaan?{" "}
              <span className="text-orange-500">Hubungi Kami</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Nama Anda"
                    className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                  <input
                    type="email"
                    placeholder="Email Anda"
                    className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subjek"
                  className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <textarea
                  rows="4"
                  placeholder="Pesan Anda"
                  className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                ></textarea>
                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-lg transition-all active:scale-95">
                  Kirim Pesan
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-orange-100 p-3 rounded-full text-orange-600">
                    <Coffee size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-700 uppercase font-bold">
                      Booking
                    </p>
                    <p className="text-gray-900 font-medium">
                      restaurant112@gmail.com
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-orange-100 p-3 rounded-full text-orange-600">
                    <User size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-700 uppercase font-bold">
                      WhatsApp
                    </p>
                    <p className="text-gray-900 font-medium">
                      +62 852-4459-8210
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full h-64 bg-gray-300 rounded-2xl overflow-hidden transition-all duration-500">
                <iframe className="h-full w-full"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3947.496082055429!2d114.15515417413027!3d-8.352760584158618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd154d9bec38cf9%3A0x8c62fbc05274d015!2sSMK%20Muhammadiyah%201%20Genteng!5e0!3m2!1sid!2sid!4v1775723763470!5m2!1sid!2sid"
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default PageMain;
