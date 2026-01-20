export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full h-20 bg-[#F1F1F1]">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6">
        <div className="text-xl font-bold">LOGISCO</div>

        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>

        <button className="rounded-md bg-yellow-500 px-5 py-2 text-sm font-semibold text-black">
          Get a Quote
        </button>
      </div>
    </header>
  );
}
