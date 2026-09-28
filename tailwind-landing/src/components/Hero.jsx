function Hero() {
  return (
    <section className="py-16text-center flex flex-col items-center px-6 md:py-24">
      <h1 className="max-w-2xl text-4xl font-extrabold text-gray-900 md:text-5xl">
        Manage Your Projects<span className="text-blue-600">Effortlessly</span>
      </h1>
      <p className="mt-4 max-w-xl text-gray-600 md:text-lg">
        DevBoard helps small teams plan, track, and ship work without the
        clutter of bloated project management tools.
      </p>
      <div className="flx-col mt-8 flex gap-4 sm:flex-row">
        <button className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700">
          Start Free Trial
        </button>
        <button className="rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-700 hover:bg-gray-50">Watch Demo</button>
      </div>
    </section>
  );
}

export default Hero;
