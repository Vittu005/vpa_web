export default function HeroSection() {
  return (
    <section className="relative h-96 flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(/images/port.jpg)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-white">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold mb-4 font-sans leading-tight drop-shadow-lg">
            <span className="font-light">HIGHEST EVER</span>
            <br />
            <span className="font-black">THROUGHPUT OF</span>{" "}
            <span className="text-yellow-300 font-black">86.62 MMT</span>
            <br />
            <span className="font-light">IN FY 2023-24</span>
          </h1>
          <p className="text-lg text-blue-100 font-light leading-relaxed drop-shadow-md">
            Port performance figures - VPA Performance in Q3 and FY24 - Awarded with the 1st rank to Visakhapatnam among
            all major ports in 2023 by Ministry of Ports, Shipping and Waterways.
          </p>
        </div>
      </div>
    </section>
  );
}