'use client'

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-trans-blue font-bold mb-4">overdxse.dev</h3>
            <p className="text-gray-400 text-sm">
              Transfem developer building on the web & desktop.
            </p>
          </div>

          <div>
            <h3 className="text-trans-dark font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="text-gray-400 hover:text-trans-blue transition">About</a></li>
              <li><a href="#skills" className="text-gray-400 hover:text-trans-blue transition">Skills</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-trans-blue transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-trans-blue font-bold mb-4">Connect</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-400 flex items-center gap-2">
                <span>💜</span> overdxse.dev
              </li>
              <li className="text-gray-500 text-xs">More socials coming soon...</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; 2026 overdxse.dev. Built with Next.js & Tailwind CSS.</p>
          <p className="text-trans-blue mt-2">Trans rights are human rights. 💜</p>
        </div>
      </div>
    </footer>
  )
}
