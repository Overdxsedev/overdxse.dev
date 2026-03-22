'use client'

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center animate-fade-in">
          <span className="text-trans-blue">Let&apos;s</span>
          <span className="text-gray-400"> </span>
          <span className="text-trans-dark">Connect</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-lg mx-auto">
          <a
            href="https://github.com/Overdxsedev"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 bg-gray-900 border border-gray-800 rounded-lg transition transform hover:scale-105 duration-200 animate-slide-up group"
            style={{ transitionProperty: 'background-color, border-color' }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#DC143C'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#111827'}
          >
            <div className="text-3xl mb-3 flex justify-center group-hover:scale-110 transition duration-200">🐙</div>
            <h3 className="text-trans-blue font-bold text-center mb-2">GitHub</h3>
            <p className="text-gray-400 text-sm text-center">Check out my projects and contributions</p>
          </a>

          <div
            className="p-6 bg-gray-900 border border-gray-800 rounded-lg transition transform hover:scale-105 duration-200 animate-slide-up group"
            style={{ 
              animationDelay: '0.1s',
              transitionProperty: 'background-color, border-color'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#DC143C'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#111827'}
          >
            <div className="text-3xl mb-3 flex justify-center group-hover:scale-110 transition duration-200">💜</div>
            <h3 className="text-trans-dark font-bold text-center mb-2">Discord</h3>
            <p className="text-gray-400 text-sm text-center">Message me @overdxse.dev</p>
          </div>
        </div>
      </div>
    </section>
  )
}
