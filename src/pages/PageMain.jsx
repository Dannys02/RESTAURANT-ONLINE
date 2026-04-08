import { User, Coffee, Hamburger, Utensils } from "lucide-react";

function PageMain() {

  const food = [
    { id: 1, title: "Nasi Uduk Spesial", price: "Rp 25.000", description: "Nasi uduk gurih dengan semur jengkol dan ayam goreng.", image: "/images/nasi-uduk.jpg" },
    { id: 2, title: "Bubur Ayam Cianjur", price: "Rp 15.000", description: "Bubur lembut dengan topping melimpah dan kuah kuning.", image: "/images/bubur-ayam.jpg" },
    { id: 3, title: "Sate Ayam Madura", price: "Rp 30.000", description: "Sate ayam dengan bumbu kacang kental dan lontong.", image: "/images/sate-ayam.jpg" },
    { id: 4, title: "Nasi Goreng Gila", price: "Rp 28.000", description: "Nasi goreng pedas dengan campuran sosis, bakso, dan telur.", image: "/images/nasgor.jpg" },
    { id: 5, title: "Soto Betawi", price: "Rp 35.000", description: "Soto daging sapi kuah santan dengan emping renyah.", image: "/images/soto-betawi.jpg" },
    { id: 6, title: "Ayam Bakar Taliwang", price: "Rp 45.000", description: "Ayam bakar khas Lombok dengan bumbu pedas meresap.", image: "/images/ayam-taliwang.jpg" },
    { id: 7, title: "Gado-Gado", price: "Rp 20.000", description: "Sayuran segar dengan siraman saus kacang autentik.", image: "/images/gado-gado.jpg" },
    { id: 8, title: "Mie Ayam Jamur", price: "Rp 22.000", description: "Mie kenyal dengan topping ayam bumbu jamur dan pangsit.", image: "/images/mie-ayam.jpg" }
  ];

  const drinks = [
    { id: 1, title: "Es Teh Manis", price: "Rp 5.000", description: "Teh melati segar dengan gula asli.", image: "/images/es-teh.jpg" },
    { id: 2, title: "Jus Alpukat Kocok", price: "Rp 18.000", description: "Alpukat mentega dengan topping cokelat kental.", image: "/images/jus-alpukat.jpg" },
    { id: 3, title: "Kopi Susu Gula Aren", price: "Rp 20.000", description: "Espresso base dengan susu segar dan gula aren.", image: "/images/kopi-aren.jpg" },
    { id: 4, title: "Wedang Jahe", price: "Rp 12.000", description: "Minuman jahe hangat untuk stamina tubuh.", image: "/images/wedang-jahe.jpg" },
    { id: 5, title: "Es Jeruk Peras", price: "Rp 10.000", description: "Jeruk peras murni tanpa pemanis buatan.", image: "/images/es-jeruk.jpg" },
    { id: 6, title: "Matcha Latte", price: "Rp 25.000", description: "Bubuk matcha premium dengan steamed milk.", image: "/images/matcha.jpg" },
    { id: 7, title: "Smoothie Berry", price: "Rp 22.000", description: "Campuran strawberry dan blueberry segar.", image: "/images/smoothie.jpg" },
    { id: 8, title: "Lemon Tea Hot/Ice", price: "Rp 8.000", description: "Paduan teh dan segarnya irisan lemon.", image: "/images/lemon-tea.jpg" }
  ];

  const desserts = [
    { id: 1, title: "Pisang Goreng Keju", price: "Rp 15.000", description: "Pisang kepok manis dengan taburan keju melimpah.", image: "/images/pisang-keju.jpg" },
    { id: 2, title: "Puding Cokelat", price: "Rp 12.000", description: "Puding cokelat lembut dengan vla vanilla.", image: "/images/puding.jpg" },
    { id: 3, title: "Es Krim Gelato", price: "Rp 25.000", description: "Dua scoop gelato dengan varian rasa pilihan.", image: "/images/gelato.jpg" },
    { id: 4, title: "Brownies Panggang", price: "Rp 20.000", description: "Brownies cokelat dengan tekstur fudgy.", image: "/images/brownies.jpg" },
    { id: 5, title: "Klepon Lumer", price: "Rp 10.000", description: "Kue tradisional dengan isi gula merah cair.", image: "/images/klepon.jpg" },
    { id: 6, title: "Cheesecake", price: "Rp 30.000", description: "Kue keju lembut dengan lapisan biskuit di bawah.", image: "/images/cheesecake.jpg" },
    { id: 7, title: "Salad Buah", price: "Rp 20.000", description: "Potongan buah segar dengan dressing mayo manis.", image: "/images/salad-buah.jpg" },
    { id: 8, title: "Mango Sticky Rice", price: "Rp 28.000", description: "Ketan gurih disajikan dengan mangga manis.", image: "/images/mango-rice.jpg" }
  ];

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

      <section id="service" className="mt-8 py-8 bg-gray-100">
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

      <section id="menu" className="mt-8 pp-8">
        <h2 className="font-bold text-center text-2xl md:text-4xl mb-12">
          Pilihan Menu Populer
        </h2>

        <div className="container w-fit mx-auto flex justify-center items-center mb-12 space-x-12 border-b-2 border-gray-200">
          <div className="flex items-center pb-4 cursor-pointer border-b-2 border-orange-500 space-x-2">
            <h5>
              <Coffee className="text-orange-500" size={45} />
            </h5>
            <div className="">
              <p className="text-gray-500">Popular</p>
              <p className="uppercase font-semibold">Breakfast</p>
            </div>
          </div>
   
          <div className="flex items-center pb-4 cursor-pointer space-x-2">
            <h5>
              <Hamburger className="text-orange-500" size={45} />
            </h5>
            <div className="">
              <p className="text-gray-500">Special</p>
              <p className="uppercase font-semibold">Launch</p>
            </div>
          </div>

          <div className="flex items-center pb-4 cursor-pointer space-x-2">
            <h5>
              <Utensils className="text-orange-500" size={45} />
            </h5>
            <div className="">
              <p className="text-gray-500">Lovely</p>
              <p className="uppercase font-semibold">Dinner</p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6 md:px-12">
          <div className="grid-cols-1 md:grid-cols-2">

            <div className="">

            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default PageMain;
