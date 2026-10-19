import VersionPill from './VersionPill'

const DISCORD = 'https://discord.gg/fddE3NAQN8'

const features = [
  ['Join alerts', "When someone on the list joins your instance, you get a popup with their name and why they're listed."],
  ['In VR', 'Alerts also show up in XSOverlay and OVR Toolkit.'],
  ['Read aloud', 'Lantern can read alerts out loud, and you can pick a sound for each type.'],
  ['Reports', 'Report someone with notes and evidence. Staff look at every report before anyone gets listed.'],
  ['New and alt accounts', 'Very new accounts and likely alts are marked in the player list.'],
  ['Configurable', 'Turn popups, sounds and VR overlays on or off, and pick which events get read aloud. Voice, speed and volume are adjustable.'],
]

const steps = [
  ['Someone gets reported', 'Members report a player and include evidence.'],
  ['Staff review it', 'Nobody is listed until staff have checked the evidence.'],
  ['You get alerted', 'When a listed player joins your instance, Lantern tells you.'],
]

const ext = { target: '_blank', rel: 'noopener noreferrer' }

export default function Home() {
  return (
    <main>
      <header className="nav wrap">
        <span className="brand"><img src="/icon-512.png" alt="" width="28" height="28" />Lantern</span>
        <a className="btn btn-sm" href={DISCORD} {...ext}>Join the Discord</a>
      </header>

      <section className="hero wrap">
        <div>
          <VersionPill />
          <h1>Lantern</h1>
          <p className="lead">A shared VRChat watchlist of known troublemakers and predators. Lantern lets you know when one of them joins your instance.</p>
          <div className="cta">
            <a className="btn" href={DISCORD} {...ext}>Join the Discord</a>
            <a className="btn btn-ghost" href="#features">Features</a>
          </div>
          <p className="note">You need an access key to use it. We hand them out on Discord.</p>
        </div>
        <div className="mark" role="img" aria-label="Lantern">
          <img className="l-glow" src="/layers/glow.webp" alt="" />
          <img src="/layers/lantern.webp" alt="" />
          <img className="l-flame" src="/layers/flame.webp" alt="" />
          <img className="l-core" src="/layers/flame-core.webp" alt="" />
        </div>
      </section>

      <section className="wrap">
        <h2>How it works</h2>
        <ol className="grid steps">
          {steps.map(([t, d], i) => (
            <li className="card" key={t}><span className="num">{i + 1}</span><h3>{t}</h3><p>{d}</p></li>
          ))}
        </ol>
      </section>

      <section id="features" className="wrap dots">
        <h2>What it does</h2>
        <div className="grid">
          {features.map(([t, d]) => (
            <div className="card" key={t}><h3>{t}</h3><p>{d}</p></div>
          ))}
        </div>
      </section>

      <section className="wrap final">
        <h2>Getting Lantern</h2>
        <p className="muted">Ask for a key in the Discord and you’ll get the download there.</p>
        <a className="btn" href={DISCORD} {...ext}>Join the Discord</a>
      </section>

      <footer className="wrap foot">by overdxse.dev · <a href="https://discord.com/users/521781080802590750" {...ext}>Contact me on Discord</a></footer>
    </main>
  )
}
