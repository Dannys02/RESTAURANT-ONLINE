function NavbarMain({ open, btnBurger, handlePesanSekarang }) {

  return (
    <header className="relative z-20 flex justify-between items-center px-6 py-4">
      <div className="flex items-center text-orange-500 font-bold">
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
        <a href="#" className="text-orange-500">
          Beranda
        </a>
        <a href="#about">Tentang</a>
        <a href="#service">Jasa</a>
        <a href="#menu">Menu</a>
        <a href="#contact">Kontak</a>
        <button
          onClick={handlePesanSekarang}
          className="px-4 py-2 bg-orange-500 hover:bg-orange-400 transition-all easex text-white cursor-pointer rounded-md "
        >
          Pesan Sekarang
        </button>
      </nav>
      <button
        onClick={btnBurger}
        className="relative z-50 block md:hidden text-2xl text-white"
      >
        {open ? "✕" : "☰"}
      </button>

      <div
        className={`
        fixed top-0 left-0 w-full h-screen bg-gray-900 flex flex-col items-center justify-center space-y-8 text-white text-xl font-bold uppercase transition-transform duration-300 ease-in-out z-40
        ${open ? "translate-x-0" : "translate-x-full"} md:hidden
      `}
      >
        <a href="#" onClick={btnBurger}>
          Beranda
        </a>
        <a href="#about" onClick={btnBurger}>
          Tentang
        </a>
        <a href="#service" onClick={btnBurger}>
          Jasa
        </a>
        <a href="#menu" onClick={btnBurger}>
          Menu
        </a>
        <a href="#contact" onClick={btnBurger}>
          Kontak
        </a>
        <button
          onClick={handlePesanSekarang}
          className="px-6 py-3 bg-orange-500 text-white rounded-md"
        >
          Pesan Sekarang
        </button>
      </div>
    </header>
  );
}

export default NavbarMain;
