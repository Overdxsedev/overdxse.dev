'use client'

export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 animate-fade-in">
          <span className="text-trans-blue">About</span>
          <span className="text-trans-dark"> Me</span>
        </h2>

        <div className="space-y-6 text-gray-300 text-lg">
          <p className="animate-slide-up">
            Hey! I&apos;m a transfem developer who loves building cool things on the web and desktop. 
            I specialize in modern JavaScript and work with HTML, CSS, and Electron to create 
            beautiful, functional applications.
          </p>

          <p className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
            I&apos;m really passionate about VRChat and creating avatars &amp; content for it&mdash;there&apos;s something special 
            about building experiences where people can be themselves and express their creativity. It&apos;s inspired 
            a lot of my approach to development.
          </p>

          <p className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Always learning, always experimenting, and always looking for interesting projects. If you&apos;ve got 
            something cool in mind, think we&apos;d vibe on a project, or just want to chat about development or 
            VRChat&mdash;I&apos;d love to hear from you!
          </p>
        </div>
      </div>
    </section>
  )
}
