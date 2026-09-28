function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 shadow-sm md:px-12">
      <span className="text-xl font-bold text-blue-600">DevBoard</span>
      <div className="hidden gap-8 text-sm font-medium text-gray-600 md:flex">
        <a href="" className="hover:text-blue-600">
          Home
        </a>
        <a href="" className="hover:text-blue-600">
          Features
        </a>
        <a href="" className="hover:text-blue-600">
          Pricing
        </a>
        <a href="" className="hover:text-blue-600">
          Contact
        </a>
      </div>
      <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">
        Get Started
      </button>
    </nav>
  );
}

export default Navbar;
