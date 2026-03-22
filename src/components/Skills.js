'use client'

export default function Skills() {
  const skillGroups = [
    {
      category: 'Core Languages',
      skills: ['JavaScript (ES6+)', 'HTML5', 'CSS3', 'React']
    },
    {
      category: 'Frameworks & Tools',
      skills: ['Next.js', 'Tailwind CSS', 'Electron', 'Node.js']
    },
    {
      category: 'Developer Tools',
      skills: ['Git', 'VS Code', 'npm/yarn', 'Responsive Design']
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 bg-gray-950 bg-opacity-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center animate-fade-in">
          <span className="text-trans-dark">Skills</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skillGroups.map((group, idx) => (
            <div 
              key={idx} 
              className="bg-gray-900 p-6 rounded-lg border border-gray-800 transition transform hover:scale-105 duration-200 animate-slide-up"
              style={{ 
                animationDelay: `${idx * 0.1}s`,
                transitionProperty: 'background-color, border-color'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#DC143C'
                e.currentTarget.style.borderColor = '#DC143C'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#111827'
                e.currentTarget.style.borderColor = '#1f2937'
              }}
            >
              <h3 className="text-trans-blue font-bold text-xl mb-4">{group.category}</h3>
              <ul className="space-y-2">
                {group.skills.map((skill, i) => (
                  <li key={i} className="text-gray-300 flex items-center">
                    <span className="text-trans-blue mr-2">→</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
