'use client'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight animate-slide-up">
          <span className="text-trans-blue">Over</span>
          <span className="text-trans-dark">dose</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.1s' }}>
          Building beautiful, functional experiences with JavaScript, HTML, CSS & Electron.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <a
            href="#contact"
            className="px-8 py-3 text-white font-bold rounded-lg transition transform hover:scale-105 duration-200"
            style={{ backgroundColor: '#DC143C' }}
          >
            Get in Touch
          </a>
          <a
            href="#about"
            className="px-8 py-3 border-2 border-trans-blue text-trans-blue font-bold rounded-lg hover:bg-trans-blue hover:text-gray-950 transition"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  )
}
