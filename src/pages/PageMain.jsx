import React, { useState } from "react";
import { User, Coffee, Hamburger, Utensils } from "lucide-react";

const categories = [
  {
    id: "sarapan",
    side_label: "Pupolar",
    label: "Sarapan",
    icon: <Coffee size={38} />,
  },
  {
    id: "launch",
    side_label: "Special",
    label: "Launch",
    icon: <Hamburger size={38} />,
  },
  {
    id: "dinner",
    side_label: "Lovely",
    label: "Dinner",
    icon: <Utensils size={38} />,
  },
];

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

const launch = [
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
    image: "https://shelfcooking.com/wp-content/uploads/2019/08/dinner-ideas.png",
  },
  {
    id: 2,
    title: "Steak Ayam BBQ",
    price: "Rp 40.000",
    description: "Dada ayam panggang dengan saus BBQ dan kentang.",
    image: "https://shelfcooking.com/wp-content/uploads/2019/08/dinner-ideas.png",
  },
  {
    id: 3,
    title: "Nasi Goreng Spesial",
    price: "Rp 25.000",
    description: "Nasi goreng dengan telur mata sapi dan ayam goreng.",
    image: "https://shelfcooking.com/wp-content/uploads/2019/08/dinner-ideas.png",
  },
  {
    id: 4,
    title: "Capcay Kuah",
    price: "Rp 22.000",
    description: "Tumisan berbagai macam sayuran dengan kuah kental.",
    image: "https://shelfcooking.com/wp-content/uploads/2019/08/dinner-ideas.png",
  },
  {
    id: 5,
    title: "Sate Taichan",
    price: "Rp 25.000",
    description: "Sate ayam putih polos dengan sambal pedas jeruk nipis.",
    image: "https://shelfcooking.com/wp-content/uploads/2019/08/dinner-ideas.png",
  },
  {
    id: 6,
    title: "Fettuccine Carbonara",
    price: "Rp 45.000",
    description: "Pasta krim lembut dengan topping smoked beef.",
    image: "https://shelfcooking.com/wp-content/uploads/2019/08/dinner-ideas.png",
  },
  {
    id: 7,
    title: "Bakmi Godog Jawa",
    price: "Rp 20.000",
    description: "Bakmi rebus khas Jawa dengan campuran telur bebek.",
    image: "https://shelfcooking.com/wp-content/uploads/2019/08/dinner-ideas.png",
  },
  {
    id: 8,
    title: "Gurame Asam Manis",
    price: "Rp 55.000",
    description: "Ikan gurame fillet goreng tepung dengan saus nanas.",
    image: "https://shelfcooking.com/wp-content/uploads/2019/08/dinner-ideas.png",
  },
];

function PageMain() {
  const [category, setCategory] = useState("sarapan");
  const MENU_DATA = {
    sarapan: sarapan,
    launch: launch,
    dinner: dinner,
  };
  const currentMenu = MENU_DATA[category];

  return (
    <>
      <section className="relative min-h-screen bg-slate-900 overflow-hidden">
        <header className="relative z-100 flex justify-between items-center px-6 py-4">
          <div className="flex items-center text-yellow-500 font-bold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              class="bi bi-fork-knife"
              viewBox="0 0 16 16"
            >
              <path d="M13 .5c0-.276-.226-.506-.498-.465-1.703.257-2.94 2.012-3 8.462a.5.5 0 0 0 .498.5c.56.01 1 .13 1 1.003v5.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5zM4.25 0a.25.25 0 0 1 .25.25v5.122a.128.128 0 0 0 .256.006l.233-5.14A.25.25 0 0 1 5.24 0h.522a.25.25 0 0 1 .25.238l.233 5.14a.128.128 0 0 0 .256-.006V.25A.25.25 0 0 1 6.75 0h.29a.5.5 0 0 1 .498.458l.423 5.07a1.69 1.69 0 0 1-1.059 1.711l-.053.022a.92.92 0 0 0-.58.884L6.47 15a.971.971 0 1 1-1.942 0l.202-6.855a.92.92 0 0 0-.58-.884l-.053-.022a1.69 1.69 0 0 1-1.059-1.712L3.462.458A.5.5 0 0 1 3.96 0z" />
            </svg>
            <h1 className="text-2xl">Restoran</h1>
          </div>
          <nav className="hidden md:flex items-center space-x-5 text-white font-medium uppercase">
            <a href="#" className="text-yellow-500">
              Beranda
            </a>
            <a href="#about">Tentang</a>
            <a href="#service">Jasa</a>
            <a href="#menu">Menu</a>
            <a href="#contact">Kontak</a>
            <button className="px-4 py-2 bg-yellow-500 text-white rounded-md ">
              Pesan Sekarang
            </button>
          </nav>
          <div className="block md:hidden text-2xl text-white">☰</div>
        </header>

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

      <section id="about" className="container mx-auto py-8 px-4">
        <h2 className="font-bold text-center text-2xl md:text-4xl mb-12">
          Tentang Kami
        </h2>

        <div className="container mx-auto px-2 flex flex-col lg:flex-row items-center gap-12">
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
            <div className="group bg-white shadow-sm shadow-gray-300 py-10 px-6 cursor-pointer rounded-md hover:bg-orange-400 transition-colors duration-300 ease">
              <User
                className="mb-4 text-yellow-500 group-hover:text-gray-50 transition-colors duration-300 ease"
                size={60}
              />
              <h2 className="font-bold text-xl mb-2 group-hover:text-gray-50 transition-colors duration-300 ease">
                Master Chefs
              </h2>
              <p className="text-gray-500 group-hover:text-gray-100 transition-colors duration-300 ease">
                Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                amet diam
              </p>
            </div>

            <div className="group bg-white shadow-sm shadow-gray-300 py-10 px-6 cursor-pointer rounded-md hover:bg-orange-400 transition-colors duration-300 ease">
              <User
                className="mb-4 text-yellow-500 group-hover:text-gray-50 transition-colors duration-300 ease"
                size={60}
              />
              <h2 className="font-bold text-xl mb-2 group-hover:text-gray-50 transition-colors duration-300 ease">
                Master Chefs
              </h2>
              <p className="text-gray-500 group-hover:text-gray-100 transition-colors duration-300 ease">
                Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                amet diam
              </p>
            </div>

            <div className="group bg-white shadow-sm shadow-gray-300 py-10 px-6 cursor-pointer rounded-md hover:bg-orange-400 transition-colors duration-300 ease">
              <User
                className="mb-4 text-yellow-500 group-hover:text-gray-50 transition-colors duration-300 ease"
                size={60}
              />
              <h2 className="font-bold text-xl mb-2 group-hover:text-gray-50 transition-colors duration-300 ease">
                Master Chefs
              </h2>
              <p className="text-gray-500 group-hover:text-gray-100 transition-colors duration-300 ease">
                Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                amet diam
              </p>
            </div>

            <div className="group bg-white shadow-sm shadow-gray-300 py-10 px-6 cursor-pointer rounded-md hover:bg-orange-400 transition-colors duration-300 ease">
              <User
                className="mb-4 text-yellow-500 group-hover:text-gray-50 transition-colors duration-300 ease"
                size={60}
              />
              <h2 className="font-bold text-xl mb-2 group-hover:text-gray-50 transition-colors duration-300 ease">
                Master Chefs
              </h2>
              <p className="text-gray-500 group-hover:text-gray-100 transition-colors duration-300 ease">
                Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                amet diam
              </p>
            </div>

            <div className="group bg-white shadow-sm shadow-gray-300 py-10 px-6 cursor-pointer rounded-md hover:bg-orange-400 transition-colors duration-300 ease">
              <User
                className="mb-4 text-yellow-500 group-hover:text-gray-50 transition-colors duration-300 ease"
                size={60}
              />
              <h2 className="font-bold text-xl mb-2 group-hover:text-gray-50 transition-colors duration-300 ease">
                Master Chefs
              </h2>
              <p className="text-gray-500 group-hover:text-gray-100 transition-colors duration-300 ease">
                Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                amet diam
              </p>
            </div>

            <div className="group bg-white shadow-sm shadow-gray-300 py-10 px-6 cursor-pointer rounded-md hover:bg-orange-400 transition-colors duration-300 ease">
              <User
                className="mb-4 text-yellow-500 group-hover:text-gray-50 transition-colors duration-300 ease"
                size={60}
              />
              <h2 className="font-bold text-xl mb-2 group-hover:text-gray-50 transition-colors duration-300 ease">
                Master Chefs
              </h2>
              <p className="text-gray-500 group-hover:text-gray-100 transition-colors duration-300 ease">
                Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                amet diam
              </p>
            </div>

            <div className="group bg-white shadow-sm shadow-gray-300 py-10 px-6 cursor-pointer rounded-md hover:bg-orange-400 transition-colors duration-300 ease">
              <User
                className="mb-4 text-yellow-500 group-hover:text-gray-50 transition-colors duration-300 ease"
                size={60}
              />
              <h2 className="font-bold text-xl mb-2 group-hover:text-gray-50 transition-colors duration-300 ease">
                Master Chefs
              </h2>
              <p className="text-gray-500 group-hover:text-gray-100 transition-colors duration-300 ease">
                Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                amet diam
              </p>
            </div>

            <div className="group bg-white shadow-sm shadow-gray-300 py-10 px-6 cursor-pointer rounded-md hover:bg-orange-400 transition-colors duration-300 ease">
              <User
                className="mb-4 text-yellow-500 group-hover:text-gray-50 transition-colors duration-300 ease"
                size={60}
              />
              <h2 className="font-bold text-xl mb-2 group-hover:text-gray-50 transition-colors duration-300 ease">
                Master Chefs
              </h2>
              <p className="text-gray-500 group-hover:text-gray-100 transition-colors duration-300 ease">
                Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                amet diam
              </p>
            </div>
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
                    <button className="py-2 px-6 bg-orange-500 rounded-md text-white">
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
    </>
  );
}

export default PageMain;
