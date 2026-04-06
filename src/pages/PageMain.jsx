function PageMain() {
  return (
    <section className="relative overflow-hidden py-16 lg:py-24">
      <div className="absolute inset-0 z-0">
        <img
          src="https://portablepartitions.com.au/wp-content/uploads/2022/06/hotel-restaurant-design.jpg"
          className="h-full w-full object-cover opacity-5"
          alt="background"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <div className="max-w-xl rounded-2xl p-8 shadow-2xl md:p-12">
              <h2 className="mb-6 text-4xl font-extrabold leading-tight text-white md:text-6xl">
                Nikmati Cita Rasa{" "}
                <span className="text-yellow-400">Terbaik</span> di Setiap
                Gigitan
              </h2>
              <p className="mb-8 text-lg text-red-100">
                Hidangan dibuat dari bahan segar pilihan, disajikan dengan rasa
                autentik yang tak terlupakan oleh chef berpengalaman.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#"
                  className="inline-block rounded-lg bg-yellow-500 px-8 py-3 font-semibold text-red-900 transition-all ease hover:bg-yellow-400 hover:shadow-lg active:scale-95"
                >
                  Lihat Menu
                </a>
                <a
                  href="#"
                  className="inline-block rounded-lg border-2 border-yellow-500 px-8 py-3 font-semibold text-yellow-500 transition-all ease hover:bg-yellow-500 hover:text-red-900 active:scale-95"
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
                className="relative h-64 w-64 rounded-full border-8 border-white object-cover sm:h-80 sm:w-80 lg:h-[450px] lg:w-[450px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PageMain;
