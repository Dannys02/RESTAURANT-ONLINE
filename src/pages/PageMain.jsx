function PageMain() {
    return (
        <section className="pt-6 md:pt-0 min-h-screen relative flex flex-col md:flex-row justify-center items-center">
            <img
                src="https://portablepartitions.com.au/wp-content/uploads/2022/06/hotel-restaurant-design.jpg"
                className="absolute inset-0 w-full h-full object-cover opacity-10"
            />
            <div className="max-w-md relative flex justify-end text-white p-6">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-2">Nikmati Cita Rasa <span className="text-yellow-500">Terbaik</span> di Setiap Gigitan</h2>
                <p className="mb-4 text-gray-300">
                    Hidangan dibuat dari bahan segar pilihan, disajikan dengan
                    rasa autentik yang tak terlupakan.
                </p>
                <div className="flex items-center space-x-2">
                    <a href="#" className="py-2 px-4 bg-yellow-500 rounded-md">
                        Lihat Menu
                    </a>
                    <a href="#" className="py-2 px-4 border border-yellow-500 rounded-md">
                        Pesan Sekarang
                    </a>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center p-6">
                <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/ac/fb/9e/ha-noi-s-traditional.jpg" alt="Menu Makanan" className="h-[340px] aspect-square border-3 border-white object-cover rounded-full" />
            </div>
        </section>
    );
}

export default PageMain;
