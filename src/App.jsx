import { useState } from 'react'
import { CheckCircle, XCircle, Star, Trophy, RefreshCw, ChevronRight, Rocket } from 'lucide-react'
import './App.css'

const QUESTIONS = [
  {
    id: 1, category: 'Astronomia',
    question: 'Quantos planetas tem o Sistema Solar?',
    options: ['6 planetas', '7 planetas', '8 planetas', '9 planetas', '10 planetas'],
    correct: 2,
    explanation: 'O Sistema Solar tem 8 planetas: Mercúrio, Vênus, Terra, Marte, Júpiter, Saturno, Urano e Netuno!'
  },
  {
    id: 2, category: 'Astronomia',
    question: 'Qual é o planeta mais próximo do Sol?',
    options: ['Vênus', 'Terra', 'Saturno', 'Mercúrio', 'Marte'],
    correct: 3,
    explanation: 'Mercúrio é o planeta mais próximo do Sol — e por isso também é o mais rápido do Sistema Solar!'
  },
  {
    id: 3, category: 'Astronomia',
    question: 'Qual é o maior planeta do Sistema Solar?',
    options: ['Saturno', 'Júpiter', 'Urano', 'Netuno', 'Marte'],
    correct: 1,
    explanation: 'Júpiter é o maior planeta! Ele é tão grande que caberia mais de 1.300 Terras dentro dele.'
  },
  {
    id: 4, category: 'Astronomia',
    question: 'Qual astro está mais perto da Terra?',
    options: ['O Sol', 'Marte', 'Vênus', 'A Lua', 'Mercúrio'],
    correct: 3,
    explanation: 'A Lua é o astro mais próximo da Terra, a cerca de 384.000 km de distância!'
  },
  {
    id: 5, category: 'Astronomia',
    question: 'O Sol é uma...',
    options: ['Planeta', 'Lua', 'Galáxia', 'Asteroide', 'Estrela'],
    correct: 4,
    explanation: 'O Sol é uma estrela! É a estrela mais próxima da Terra e o centro do nosso Sistema Solar.'
  },
  {
    id: 6, category: 'Astronomia',
    question: 'Qual planeta tem os anéis mais famosos e lindos?',
    options: ['Júpiter', 'Urano', 'Saturno', 'Netuno', 'Marte'],
    correct: 2,
    explanation: 'Saturno tem os anéis mais lindos do Sistema Solar, formados por partículas de gelo e rocha!'
  },
  {
    id: 7, category: 'Astronomia',
    question: 'Em qual fase da Lua ela não é visível no céu noturno?',
    options: ['Lua Cheia', 'Quarto Crescente', 'Lua Nova', 'Quarto Minguante', 'Lua Gibbosa'],
    correct: 2,
    explanation: 'Na Lua Nova, a face iluminada fica voltada para o Sol. Por isso não vemos a Lua no céu à noite!'
  },
  {
    id: 8, category: 'Astronomia',
    question: 'Quanto mais longe do Sol, o planeta se move...',
    options: [
      'Mais rápido, pois tem mais espaço',
      'Mais devagar, pois está mais longe',
      'Na mesma velocidade sempre',
      'Muito mais rápido que os outros',
      'Fica parado no espaço'
    ],
    correct: 1,
    explanation: 'Quanto mais longe do Sol, mais devagar o planeta se move! Mercúrio é o mais rápido e Netuno é o mais lento.'
  },
  {
    id: 9, category: 'Astronomia',
    question: 'O Sol sempre nasce do lado...',
    options: ['Norte', 'Sul', 'Oeste', 'Leste', 'Nordeste'],
    correct: 3,
    explanation: 'O Sol sempre nasce do lado Leste (L) e se põe do lado Oeste (O). Isso vale em qualquer lugar do mundo!'
  },
  {
    id: 10, category: 'Astronomia',
    question: 'Quem é a principal responsável pelas marés na Terra?',
    options: ['O Sol', 'Marte', 'A Lua', 'Vênus', 'Júpiter'],
    correct: 2,
    explanation: 'A Lua é a principal responsável pelas marés! Sua força de gravidade puxa a água dos oceanos da Terra.'
  },
  {
    id: 11, category: 'Astronomia',
    question: 'Quantas fases principais a Lua tem?',
    options: ['2 fases', '3 fases', '5 fases', '4 fases', '6 fases'],
    correct: 3,
    explanation: 'A Lua tem 4 fases principais: Lua Nova, Quarto Crescente, Lua Cheia e Quarto Minguante!'
  },
  {
    id: 12, category: 'Astronomia',
    question: 'Qual planeta é conhecido pela sua cor avermelhada?',
    options: ['Vênus', 'Saturno', 'Júpiter', 'Marte', 'Mercúrio'],
    correct: 3,
    explanation: "Marte é vermelho porque seu solo tem muito ferro enferrujado. Por isso ele é chamado de 'Planeta Vermelho'!"
  },
  {
    id: 13, category: 'Astronomia',
    question: 'Qual é o planeta mais quente do Sistema Solar?',
    options: ['Mercúrio', 'Marte', 'Terra', 'Vênus', 'Júpiter'],
    correct: 3,
    explanation: 'Vênus é o mais quente! Apesar de Mercúrio ser mais próximo do Sol, Vênus tem uma atmosfera espessa que prende o calor.'
  },
  {
    id: 14, category: 'Astronomia',
    question: 'No eclipse SOLAR, o que fica entre o Sol e a Terra?',
    options: [
      'A Terra fica entre o Sol e a Lua',
      'Marte passa na frente do Sol',
      'O Sol fica entre a Terra e a Lua',
      'A Lua fica entre o Sol e a Terra',
      'Júpiter bloqueia o Sol'
    ],
    correct: 3,
    explanation: 'No eclipse solar, a Lua se posiciona entre o Sol e a Terra, bloqueando a luz solar. Você fica na sombra da Lua!'
  },
  {
    id: 15, category: 'Astronomia',
    question: 'Qual é o menor planeta do Sistema Solar?',
    options: ['Marte', 'Vênus', 'Terra', 'Urano', 'Mercúrio'],
    correct: 4,
    explanation: 'Mercúrio é o menor planeta do Sistema Solar. Plutão seria menor, mas é considerado um planeta anão!'
  },
  {
    id: 16, category: 'Astronomia',
    question: 'A Terra tem quantas luas naturais?',
    options: ['Duas luas', 'Três luas', 'Uma lua', 'Quatro luas', 'Nenhuma lua'],
    correct: 2,
    explanation: 'A Terra tem apenas 1 lua natural. Mas também temos milhares de satélites artificiais (feitos pelo homem) em órbita!'
  },
  {
    id: 17, category: 'Astronáutica',
    question: 'Para o foguete ir mais longe, ele deve ser lançado com que ângulo de inclinação?',
    options: ['90 graus (vertical)', '30 graus', '45 graus', '60 graus', '10 graus'],
    correct: 2,
    explanation: 'Lançado a 45 graus, o foguete equilibra o alcance horizontal e a altura, indo mais longe!'
  },
  {
    id: 18, category: 'Astronáutica',
    question: "O que são as 'empenas' de um foguete?",
    options: [
      'O motor do foguete',
      'O combustível do foguete',
      'A ponta pontiaguda do nariz',
      "As 'asas' que dão estabilidade ao voo",
      'A base de lançamento'
    ],
    correct: 3,
    explanation: "As empenas são como 'asinhas' no final do foguete. Elas dão estabilidade ao voo, como a cauda de uma flecha!"
  },
  {
    id: 19, category: 'Astronáutica',
    question: 'Qual astronauta brasileiro foi à Estação Espacial Internacional?',
    options: ['Santos Dumont', 'Pedro Álvares Cabral', 'Marcos Pontes', 'João Canalle', 'Carlos Moedas'],
    correct: 2,
    explanation: 'Marcos Pontes foi o primeiro astronauta brasileiro no espaço! Ele foi à ISS em 2006, na Missão Centenário.'
  },
  {
    id: 20, category: 'Astronáutica',
    question: 'Para que serve a contagem regressiva antes de um lançamento de foguete?',
    options: [
      'Para dar sorte ao foguete',
      'Para fazer o foguete voar mais alto',
      'Para alertar a todos que o foguete vai ser lançado',
      'Para deixar o foguete mais rápido',
      'Para o foguete não cair cedo'
    ],
    correct: 2,
    explanation: 'A contagem regressiva (5, 4, 3, 2, 1... Lançar!) avisa a todos que o lançamento está próximo e que ninguém deve entrar na área!'
  }
]

const STAR_DATA = Array.from({ length: 55 }, (_, i) => ({
  id: i,
  top: (i * 17 + 7) % 100,
  left: (i * 13 + 3) % 100,
  size: (i % 3) + 1,
  delay: (i * 0.71) % 5,
  duration: 2.5 + (i % 3),
}))

function StarField() {
  return (
    <div className="star-field" aria-hidden="true">
      {STAR_DATA.map(s => (
        <div
          key={s.id}
          className="star"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: s.size,
            height: s.size,
            '--dur': `${s.duration}s`,
            '--delay': `${s.delay}s`,
          }}
        />
      ))}
    </div>
  )
}

export default function SpaceQuiz() {
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState(null)
  const [score, setScore] = useState(0)
  const [done, setDone] = useState(false)

  const q = QUESTIONS[current]
  const progress = Math.round((current / QUESTIONS.length) * 100)
  const isCorrect = selected === q?.correct

  const choose = (idx) => {
    if (selected !== null) return
    setSelected(idx)
    if (idx === q.correct) setScore(s => s + 1)
  }

  const next = () => {
    if (current + 1 >= QUESTIONS.length) setDone(true)
    else { setCurrent(c => c + 1); setSelected(null) }
  }

  const restart = () => {
    setCurrent(0); setSelected(null); setScore(0); setDone(false)
  }

  const getOptionClass = (idx) => {
    if (selected === null) return 'option-btn'
    if (idx === q.correct) return 'option-btn correct'
    if (idx === selected) return 'option-btn wrong'
    return 'option-btn dimmed'
  }

  const getLetterClass = (idx) => {
    if (selected === null) return 'letter'
    if (idx === q.correct) return 'letter correct'
    if (idx === selected) return 'letter wrong'
    return 'letter'
  }

  // ── End screen ─────────────────────────────────────────────────
  if (done) {
    const pct = Math.round((score / QUESTIONS.length) * 100)
    const starCount = pct >= 80 ? 3 : pct >= 50 ? 2 : 1
    const msgs = [
      'Não desanime! Revise os assuntos e tente novamente.',
      'Bom trabalho! Estude mais um pouco e vai arrasar!',
      'Incrível! Você está pronto para a OBA!'
    ]

    return (
      <div className="app">
        <StarField />
        <div className="container">
          <div className="end-card">
            <div className="trophy-circle">
              <Trophy size={34} color="#ffb347" aria-hidden="true" />
            </div>
            <h1 className="end-title">Quiz concluído!</h1>
            <p className="end-subtitle">OBA · Nível 2 · Astronomia & Astronáutica</p>

            <div className="score-box">
              <div className="score-number">
                {score}<span className="score-denom">/{QUESTIONS.length}</span>
              </div>
              <div className="score-pct">{pct}% de acertos</div>
            </div>

            <div className="stars-row" aria-label={`${starCount} de 3 estrelas`}>
              {[1, 2, 3].map(s => (
                <Star
                  key={s} size={38}
                  fill={s <= starCount ? '#ffb347' : 'transparent'}
                  color={s <= starCount ? '#ffb347' : 'rgba(255,255,255,0.2)'}
                  aria-hidden="true"
                />
              ))}
            </div>

            <p className="end-msg">{msgs[starCount - 1]}</p>

            <button className="restart-btn" onClick={restart}>
              <RefreshCw size={15} aria-hidden="true" />
              Tentar novamente
            </button>
          </div>
        </div>
      </div>
    )
  }

  // ── Quiz screen ─────────────────────────────────────────────────
  return (
    <div className="app">
      <StarField />
      <div className="container">

        <header className="header">
          <div className="header-logo">
            <Rocket size={17} color="#88aaff" aria-hidden="true" />
            OBA · Nível 2
          </div>
          <div className="header-score">
            <Star size={14} fill="#ffb347" color="#ffb347" aria-hidden="true" />
            {score} {score === 1 ? 'certa' : 'certas'}
          </div>
        </header>

        <div className="progress-wrap">
          <div className="progress-labels">
            <span>Questão {current + 1} de {QUESTIONS.length}</span>
            <span>{progress}%</span>
          </div>
          <div className="progress-bar" role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100}>
            <div className="progress-fill" style={{ width: `${progress}%` }} />
          </div>
        </div>

        <main className="card">
          <span className={`badge ${q.category === 'Astronáutica' ? 'badge-rocket' : 'badge-astro'}`}>
            {q.category === 'Astronáutica' && <Rocket size={11} aria-hidden="true" />}
            {q.category}
          </span>

          <h2 className="question">{q.question}</h2>

          <div className="options" role="group" aria-label="Opções de resposta">
            {q.options.map((opt, idx) => (
              <button
                key={idx}
                className={getOptionClass(idx)}
                onClick={() => choose(idx)}
                disabled={selected !== null}
                aria-label={`Opção ${String.fromCharCode(65 + idx)}: ${opt}`}
                aria-pressed={selected === idx}
              >
                <span className={getLetterClass(idx)} aria-hidden="true">
                  {String.fromCharCode(65 + idx)}
                </span>
                <span className="option-text">{opt}</span>
                {selected !== null && idx === q.correct && (
                  <CheckCircle size={18} className="option-icon" color="currentColor" aria-hidden="true" />
                )}
                {selected !== null && idx === selected && idx !== q.correct && (
                  <XCircle size={18} className="option-icon" color="currentColor" aria-hidden="true" />
                )}
              </button>
            ))}
          </div>

          {selected !== null && (
            <div className={`feedback ${isCorrect ? 'correct' : 'wrong'}`} role="alert">
              <p className="feedback-title">
                {isCorrect
                  ? 'Correto! Muito bem!'
                  : `Errado — a resposta certa era: ${q.options[q.correct]}`}
              </p>
              <p className="feedback-text">{q.explanation}</p>
            </div>
          )}
        </main>

        {selected !== null && (
          <div className="next-wrap">
            <button className="next-btn" onClick={next}>
              {current + 1 < QUESTIONS.length ? 'Próxima questão' : 'Ver resultado'}
              <ChevronRight size={16} aria-hidden="true" />
            </button>
          </div>
        )}

      </div>
    </div>
  )
}
