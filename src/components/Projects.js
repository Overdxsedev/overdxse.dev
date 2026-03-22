'use client'

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-gray-950 bg-opacity-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center animate-fade-in">
          <span className="text-trans-dark">Projects</span>
        </h2>

        <div className="flex items-center justify-center min-h-64">
          <div className="text-center">
            <div className="mb-4 animate-bounce-gentle">
              <span className="text-6xl">🚀</span>
            </div>
            <h3 className="text-2xl font-bold mb-2 text-gray-300">Coming Soon</h3>
            <p className="text-gray-400 text-lg">
              I&apos;m working on some cool stuff. Check back soon to see what I&apos;ve built!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
