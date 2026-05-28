import { Component } from 'react'

const PERSON = {
  fullName:   'Lamine Yamal',
  profession: 'Ailier droit',
  imgSrc:     'https://i.pinimg.com/736x/69/51/f4/6951f4dd09e610c1f4c217e886a27fbd.jpg',
  bio:        "Né le 13 juillet 2007, Lamine Yamal est la nouvelle star du FC Barcelona et de la sélection espagnole. Plus jeune buteur de l'histoire de l'Euro 2024 à 16 ans, il impressionne le monde entier par sa technique cristalline, sa vitesse et une maturité bien au-delà de son âge.",
}

export default class App extends Component {

  // ── équivalent de useState({ show: false, seconds: 0 })
  state = {
    show:    false,
    seconds: 0,
  }

  // ── équivalent de useEffect(() => { ... }, [])
  componentDidMount() {
    this.intervalId = setInterval(
      () => this.setState(prev => ({ seconds: prev.seconds + 1 })),
      1000
    )
  }

  // ── équivalent du return () => clearInterval(id)
  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  // ── équivalent de () => setShow(v => !v)
  toggleShow = () => {
    this.setState(prev => ({ show: !prev.show }))
  }

  render() {
    const { show, seconds } = this.state
    const person = PERSON

    const mm = String(Math.floor(seconds / 60)).padStart(2, '0')
    const ss = String(seconds % 60).padStart(2, '0')

    return (
      <div className="min-h-screen bg-[#0a0a0f] text-white flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-2xl rounded-3xl border border-red-500 bg-linear-to-b from-black to-blue-500 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl">

          {/* ── HEADER ── */}
          <header className="mb-10 text-center">
            <p className="inline-flex items-center gap-2 mb-5 text-[11px] font-mono text-blue-400/70 uppercase tracking-[0.18em]">
              <span className="w-2 h-2 rounded-full bg-blue-400" aria-hidden="true" />
              <span className="text-[11px] font-mono text-blue-400/70 tracking-[0.18em] uppercase">
                React · Class · Checkpoint
              </span>
            </p>
            <h1 className="text-[52px] font-black leading-none tracking-tight text-white">Profile</h1>
            <p className="text-[52px] font-black leading-none tracking-tight bg-gradient-to-b from-blue-400 to-red-400 bg-clip-text text-transparent">
              Viewer
            </p>
          </header>

          {/* ── MAIN ── */}
          <main className="flex flex-col gap-8">

            {/* TIMER */}
            <section aria-label="Temps depuis le montage" className="rounded-2xl border border-white/8 bg-white/[0.03] p-6 flex items-center justify-center">
              <div>
                <p className="text-[10px] font-mono text-white/30 uppercase tracking-widest mb-3">
                  Temps depuis le montage
                </p>
                <time dateTime={`PT${mm}M${ss}S`} className="flex items-center gap-1">
                  <span className="text-5xl font-black font-mono tabular-nums leading-none">{mm}</span>
                  <span className="text-3xl font-black font-mono text-blue-400 leading-none animate-pulse" aria-hidden="true">:</span>
                  <span className="text-5xl font-black font-mono tabular-nums leading-none">{ss}</span>
                </time>
              </div>
              <aside className="text-right flex flex-col items-end gap-2">
                <p className="flex items-center gap-2 bg-blue-500/15 border border-blue-500/25 rounded-full px-3 py-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" aria-hidden="true" />
                  <span className="text-[11px] font-mono text-blue-300 tracking-wider">LIVE</span>
                </p>
                <small className="text-white/25 font-mono">{seconds}s écoulées</small>
              </aside>
            </section>

            {/* BOUTON TOGGLE */}
            <div>
              <button
                onClick={this.toggleShow}
                aria-expanded={show}
                aria-controls="profile-card"
                className={`w-full py-4 rounded-xl font-bold text-base tracking-wide transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer
                  ${show
                    ? 'bg-gradient-to-r from-blue-600 via-red-600 to-indigo-700 border-white/12 text-white hover:bg-white/10'
                    : 'bg-gradient-to-r from-red-500 to-blue-500 text-white hover:opacity-90 shadow-[0_4px_30px_rgba(99,102,241,0.3)]'
                  }`}
              >
                {show ? (
                  <>
                    <svg className="w-5 h-5 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18" />
                    </svg>
                    Masquer le profil
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    Afficher le profil
                  </>
                )}

                <p className="ml-20 font-bold text-[16px] text-white border-2 border-red-400 rounded-full px-3 py-1.5">
                  show = <span className={show ? 'text-green-500' : 'text-red-700'}>{show ? 'true' : 'false'}</span>
                </p>

              </button>
            </div>

            {/* CARTE PROFIL */}
            {show && (
              <article id="profile-card" className="rounded-2xl border border-white/8 bg-gradient-to-b from-blue-600 via-red-700 overflow-hidden profile-card">

                <div className="h-2 bg-gradient-to-r from-blue-600 via-red-700 to-indigo-700 relative overflow-hidden" aria-hidden="true">
                  <div className="absolute inset-0" />
                </div>

                <div className="px-6 pb-6 mt-10">
                  <figure className="flex items-center gap-4 mb-5 m-0">
                    <img
                      src={person.imgSrc}
                      alt={`Photo de ${person.fullName}`}
                      className="w-50 h-50 rounded-xl object-cover object-top border-4 border-[#0a0a0f] shadow-xl shrink-0"
                      onError={e => {
                        e.target.style.display = 'none'
                        e.target.parentElement.classList.add('fallback-avatar')
                      }}
                    />
                    <figcaption className="pb-0.5">
                      <h2 className="text-xl font-black text-white">{person.fullName}</h2>
                      <p className="text-sm text-black font-medium">{person.profession}</p>
                      <p className="flex items-center gap-1.5 mt-1">
                        <span className="w-1 h-1 rounded-full bg-green-400" aria-hidden="true" />
                        <small className="text-white font-mono">Actif · Espagne</small>
                      </p>
                    </figcaption>
                  </figure>

                  <div className="flex items-center gap-3 mb-4" aria-hidden="true">
                    <hr className="flex-1 border-white/8" />
                    <span className="text-[10px] font-bold text-black uppercase tracking-widest">Biographie</span>
                    <hr className="flex-1 border-white/8" />
                  </div>

                  <p className="text-white text-sm leading-7">{person.bio}</p>

                  <ul className="mt-5 grid grid-cols-3 gap-3 list-none p-0">
                    {[
                      { label: 'Âge',   value: '18 ans' },
                      { label: 'Club',  value: 'FCB'    },
                      { label: 'Poste', value: 'Ailier' },
                    ].map(s => (
                      <li key={s.label} className="bg-white/4 border border-white/6 rounded-xl py-3 flex flex-col items-center gap-1">
                        <strong className="text-base font-black text-red-600">{s.value}</strong>
                        <small className="font-mono text-white uppercase tracking-wider">{s.label}</small>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            )}

          </main>

          {/* ── FOOTER ── */}
          <footer className="border-t border-white/6 pt-4 mt-8 flex flex-col gap-2 text-center text-black sm:flex-row sm:justify-between sm:text-left">
            <p className="text-sm">&copy; 2026 - Checkpoint React developed by WinchLabs</p>
          </footer>

        </div>
      </div>
    )
  }
}