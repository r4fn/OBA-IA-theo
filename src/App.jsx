import { useState } from 'react'
import { CheckCircle, XCircle, Star, Trophy, RefreshCw, ChevronRight, Rocket } from 'lucide-react'
import './App.css'

const ALL_QUESTIONS = [
  // ── Questões originais (1-20) ──────────────────────────────────
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
    explanation: 'A Terra tem apenas 1 lua natural. Mas também temos milhares de satélites artificiais em órbita!'
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
  },

  // ── Novas questões (21-50) ──────────────────────────────────────
  {
    id: 21, category: 'Astronomia',
    question: 'Qual planeta tem o dia mais curto do Sistema Solar?',
    options: ['Terra', 'Marte', 'Saturno', 'Júpiter', 'Netuno'],
    correct: 3,
    explanation: 'Júpiter tem o dia mais curto: apenas 9,9 horas! Ele gira muito rápido ao redor do próprio eixo.'
  },
  {
    id: 22, category: 'Astronomia',
    question: 'Qual planeta tem o dia mais longo do Sistema Solar?',
    options: ['Marte', 'Mercúrio', 'Urano', 'Saturno', 'Netuno'],
    correct: 1,
    explanation: 'Mercúrio tem o dia mais longo: 4.222 horas! Isso porque ele gira muito devagar ao redor do próprio eixo.'
  },
  {
    id: 23, category: 'Astronomia',
    question: 'Quantas direções cardeais principais existem?',
    options: ['2', '3', '4', '5', '6'],
    correct: 2,
    explanation: 'As 4 direções cardeais são: Norte (N), Sul (S), Leste (L) e Oeste (O)!'
  },
  {
    id: 24, category: 'Astronomia',
    question: 'Para qual lado o Sol sempre se põe (se esconde)?',
    options: ['Norte', 'Leste', 'Sul', 'Nordeste', 'Oeste'],
    correct: 4,
    explanation: 'O Sol sempre se põe do lado Oeste (O). E sempre nasce do lado Leste (L)!'
  },
  {
    id: 25, category: 'Astronomia',
    question: 'Qual constelação aparece na bandeira do Brasil?',
    options: ['Órion', 'Ursa Maior', 'Cruzeiro do Sul', 'Escorpião', 'Sagitário'],
    correct: 2,
    explanation: 'O Cruzeiro do Sul (Crux) é uma constelação do hemisfério sul que aparece na bandeira do Brasil!'
  },
  {
    id: 26, category: 'Astronomia',
    question: 'Como se chama a galáxia onde vivemos?',
    options: ['Andrômeda', 'Via Láctea', 'Magalhães', 'Centauro', 'Olho Negro'],
    correct: 1,
    explanation: 'Vivemos na galáxia Via Láctea! Ela contém bilhões de estrelas, incluindo o nosso Sol.'
  },
  {
    id: 27, category: 'Astronomia',
    question: 'O que é um cometa?',
    options: [
      'Uma estrela cadente',
      'Um meteorito que cai na Terra',
      'Um corpo de gelo e poeira com cauda luminosa',
      'Um asteroide gigante',
      'Um satélite natural'
    ],
    correct: 2,
    explanation: 'Um cometa é feito de gelo e poeira. Quando se aproxima do Sol, o calor faz o gelo evaporar, formando uma bela cauda luminosa!'
  },
  {
    id: 28, category: 'Astronomia',
    question: 'Qual foi o primeiro animal enviado ao espaço?',
    options: [
      'Um macaco chamado Ham',
      'Um gato chamado Félix',
      'Uma cadela chamada Laika',
      'Um camundongo',
      'Uma tartaruga'
    ],
    correct: 2,
    explanation: 'Laika foi uma cadela soviética que viajou ao espaço em 1957 a bordo do Sputnik 2 — o primeiro ser vivo em órbita!'
  },
  {
    id: 29, category: 'Astronomia',
    question: 'O que é uma nebulosa?',
    options: [
      'Um tipo de planeta',
      'Uma estrela muito brilhante',
      'Uma nuvem de gás e poeira no espaço',
      'Um cometa grande',
      'Uma galáxia pequena'
    ],
    correct: 2,
    explanation: "Nebulosas são nuvens de gás e poeira no espaço. Muitas são 'berçários de estrelas' — locais onde novas estrelas nascem!"
  },
  {
    id: 30, category: 'Astronomia',
    question: 'Qual é o nome do movimento da Terra ao redor do Sol?',
    options: ['Rotação', 'Translação', 'Gravitação', 'Orbitação', 'Revolução do eixo'],
    correct: 1,
    explanation: 'A Translação é o movimento da Terra ao redor do Sol e dura 365 dias (1 ano). Já a Rotação é o giro ao redor do próprio eixo!'
  },
  {
    id: 31, category: 'Astronomia',
    question: 'Qual é o nome do movimento da Terra ao redor do próprio eixo?',
    options: ['Translação', 'Gravitação', 'Rotação', 'Orbitação', 'Revolução solar'],
    correct: 2,
    explanation: 'A Rotação é o giro da Terra ao redor do próprio eixo. Ela dura cerca de 24 horas e é responsável pelo dia e pela noite!'
  },
  {
    id: 32, category: 'Astronomia',
    question: 'Por que ocorrem as estações do ano (verão, outono, inverno e primavera)?',
    options: [
      'Porque a Terra se aproxima e se afasta do Sol',
      'Porque o eixo da Terra é inclinado enquanto ela orbita o Sol',
      'Porque a Lua muda de fase ao longo do ano',
      'Porque os planetas bloqueiam o Sol periodicamente',
      'Porque o Sol fica mais quente em alguns meses'
    ],
    correct: 1,
    explanation: 'As estações do ano ocorrem porque o eixo da Terra é inclinado. Assim, diferentes partes recebem mais ou menos luz solar ao longo do ano!'
  },
  {
    id: 33, category: 'Astronomia',
    question: 'O que é uma "estrela cadente"?',
    options: [
      'Uma estrela que está morrendo',
      'A Lua caindo no horizonte',
      'Um meteoro: fragmento de rocha que brilha ao entrar na atmosfera',
      'Um cometa passando perto da Terra',
      'Um satélite artificial caindo'
    ],
    correct: 2,
    explanation: 'Estrelas cadentes são meteoros — fragmentos de rocha que entram na atmosfera e queimam pelo atrito com o ar, formando um risco de luz!'
  },
  {
    id: 34, category: 'Astronomia',
    question: 'O que mantém os planetas em órbita ao redor do Sol?',
    options: ['O vento solar', 'A luz do Sol', 'A gravidade do Sol', 'O magnetismo', 'A velocidade deles'],
    correct: 2,
    explanation: 'É a gravidade do Sol que mantém todos os planetas em órbita! A mesma força que faz uma maçã cair no chão segura os planetas no espaço.'
  },
  {
    id: 35, category: 'Astronomia',
    question: 'Qual instrumento os astrônomos usam para observar astros distantes?',
    options: ['Microscópio', 'Binóculo', 'Telescópio', 'Periscópio', 'Caleidoscópio'],
    correct: 2,
    explanation: 'O telescópio permite enxergar astros muito distantes! Existem telescópios em terra e no espaço, como o famoso Hubble.'
  },
  {
    id: 36, category: 'Astronomia',
    question: 'Qual planeta tem o ano mais longo do Sistema Solar?',
    options: ['Saturno', 'Júpiter', 'Urano', 'Netuno', 'Marte'],
    correct: 3,
    explanation: 'Netuno tem o ano mais longo: 60.190 dias terrestres! Isso equivale a quase 165 anos da Terra.'
  },
  {
    id: 37, category: 'Astronomia',
    question: 'Qual planeta tem uma enorme Mancha Vermelha — uma tempestade gigante?',
    options: ['Marte', 'Saturno', 'Netuno', 'Júpiter', 'Urano'],
    correct: 3,
    explanation: 'A Grande Mancha Vermelha de Júpiter é uma tempestade que dura há centenas de anos. Ela é maior que a própria Terra!'
  },
  {
    id: 38, category: 'Astronomia',
    question: 'Quantas luas Marte tem?',
    options: ['0', '1', '2', '4', '7'],
    correct: 2,
    explanation: 'Marte tem 2 luas: Fobos e Deimos. São bem pequenas, parecidas com asteroides capturados pela gravidade de Marte!'
  },
  {
    id: 39, category: 'Astronomia',
    question: 'O que é o ano de um planeta?',
    options: [
      'O tempo que ele gira ao redor do próprio eixo',
      'O tempo que leva para dar uma volta completa ao redor do Sol',
      'A quantidade de dias no seu calendário',
      'O tempo de uma estação do ano nele',
      'A sua idade em bilhões de anos'
    ],
    correct: 1,
    explanation: 'O ano de um planeta é o tempo que ele leva para dar uma volta completa ao redor do Sol. O ano da Terra tem 365 dias!'
  },
  {
    id: 40, category: 'Astronomia',
    question: 'Qual é o planeta mais brilhante visto do céu noturno (depois da Lua)?',
    options: ['Marte', 'Júpiter', 'Vênus', 'Sirius', 'Saturno'],
    correct: 2,
    explanation: "Vênus é o planeta mais brilhante no céu noturno! Às vezes é chamado de 'Estrela d'Alva' quando aparece ao anoitecer ou ao amanhecer."
  },
  {
    id: 41, category: 'Astronomia',
    question: 'Em qual fase da Lua toda a face iluminada fica visível da Terra?',
    options: ['Lua Nova', 'Quarto Crescente', 'Quarto Minguante', 'Lua Cheia', 'Lua Gibbosa'],
    correct: 3,
    explanation: 'Na Lua Cheia, toda a face iluminada da Lua fica voltada para a Terra. Por isso ela aparece como um círculo completo!'
  },
  {
    id: 42, category: 'Astronomia',
    question: 'Quais são os planetas rochosos do Sistema Solar?',
    options: [
      'Júpiter, Saturno, Urano e Netuno',
      'Mercúrio, Vênus, Terra e Marte',
      'Marte, Júpiter, Saturno e Urano',
      'Terra, Marte, Júpiter e Saturno',
      'Todos os oito planetas são rochosos'
    ],
    correct: 1,
    explanation: 'Os planetas rochosos são Mercúrio, Vênus, Terra e Marte — os quatro mais próximos do Sol, com superfície sólida!'
  },
  {
    id: 43, category: 'Astronomia',
    question: 'De qual cor é o céu de Marte?',
    options: ['Azul como o da Terra', 'Preto como o espaço', 'Alaranjado/avermelhado', 'Verde', 'Roxo'],
    correct: 2,
    explanation: 'O céu de Marte é alaranjado/avermelhado! Isso porque a poeira marciana contém partículas de ferro que tingem o céu dessa cor.'
  },
  {
    id: 44, category: 'Astronomia',
    question: 'No eclipse LUNAR, o que fica entre o Sol e a Lua?',
    options: [
      'A Lua fica entre o Sol e a Terra',
      'Marte fica entre o Sol e a Lua',
      'A Terra fica entre o Sol e a Lua',
      'O Sol fica entre a Terra e a Lua',
      'Júpiter bloqueia a Lua'
    ],
    correct: 2,
    explanation: 'No eclipse lunar, a Terra fica entre o Sol e a Lua. A Lua entra na sombra da Terra e fica com uma cor avermelhada!'
  },
  {
    id: 45, category: 'Astronomia',
    question: 'Qual é o nome da linha imaginária no céu por onde o Sol parece se mover ao longo do ano?',
    options: ['Equador celeste', 'Eclíptica', 'Meridiano', 'Horizonte', 'Zodíaco'],
    correct: 1,
    explanation: 'A Eclíptica é a linha imaginária no céu por onde o Sol parece se mover ao longo do ano. Os planetas também seguem aproximadamente esse caminho!'
  },
  {
    id: 46, category: 'Astronáutica',
    question: 'Em que ano o primeiro satélite artificial foi lançado ao espaço?',
    options: ['1945', '1950', '1957', '1961', '1969'],
    correct: 2,
    explanation: 'O Sputnik 1, lançado pela União Soviética em 1957, foi o primeiro satélite artificial colocado em órbita da Terra!'
  },
  {
    id: 47, category: 'Astronáutica',
    question: 'Qual é o nome da estação espacial que orbita a Terra atualmente?',
    options: ['Mir', 'Salyut', 'Estação Espacial Internacional (ISS)', 'Hubble', 'Apollo'],
    correct: 2,
    explanation: 'A ISS (Estação Espacial Internacional) orbita a Terra a cerca de 400 km de altura e é habitada por astronautas de vários países!'
  },
  {
    id: 48, category: 'Astronáutica',
    question: 'Qual é o nome do famoso telescópio espacial lançado em 1990?',
    options: ['James Webb', 'Hubble', 'Kepler', 'Chandra', 'Spitzer'],
    correct: 1,
    explanation: 'O Telescópio Espacial Hubble foi lançado em 1990 e tirou fotos incríveis de galáxias, nebulosas e planetas distantes!'
  },
  {
    id: 49, category: 'Astronáutica',
    question: 'Qual missão levou o homem à Lua pela primeira vez?',
    options: ['Apollo 7', 'Gemini', 'Saturn V', 'Apollo 11', 'Voyager 1'],
    correct: 3,
    explanation: 'A Apollo 11 levou os astronautas Armstrong e Aldrin à Lua em 20 de julho de 1969. Um momento histórico para a humanidade!'
  },
  {
    id: 50, category: 'Astronáutica',
    question: 'Por que a ponta do foguete deve ser fina e pontiaguda?',
    options: [
      'Para ficar mais bonito',
      'Para caber na base de lançamento',
      'Para diminuir a resistência do ar e ir mais longe',
      'Para pesar menos',
      'Para ser mais resistente ao calor'
    ],
    correct: 2,
    explanation: 'A ponta fina e pontiaguda do foguete diminui a resistência do ar (arrasto), permitindo que ele corte o vento e chegue mais longe!'
  },
]

// ── Embaralhamento Fisher-Yates ──────────────────────────────────────
const shuffle = (arr) => {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

const getQuestions = () => shuffle(ALL_QUESTIONS).slice(0, 20)

// ── Estrelas decorativas ────────────────────────────────────────────
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

// ── Componente principal ────────────────────────────────────────────
export default function SpaceQuiz() {
  const [questions, setQuestions] = useState(() => getQuestions())
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState(null)
  const [score, setScore] = useState(0)
  const [done, setDone] = useState(false)

  const q = questions[current]
  const progress = Math.round((current / questions.length) * 100)
  const isCorrect = selected === q?.correct

  const choose = (idx) => {
    if (selected !== null) return
    setSelected(idx)
    if (idx === q.correct) setScore(s => s + 1)
  }

  const next = () => {
    if (current + 1 >= questions.length) setDone(true)
    else { setCurrent(c => c + 1); setSelected(null) }
  }

  const restart = () => {
    setQuestions(getQuestions())
    setCurrent(0)
    setSelected(null)
    setScore(0)
    setDone(false)
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

  // ── Tela final ────────────────────────────────────────────────────
  if (done) {
    const pct = Math.round((score / questions.length) * 100)
    const starCount = pct >= 80 ? 3 : pct >= 50 ? 2 : 1
    const msgs = [
      'Não desanime! Revise os assuntos e tente novamente — as questões mudam a cada rodada!',
      'Bom trabalho! Estude mais um pouco e vai arrasar na próxima!',
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
                {score}<span className="score-denom">/{questions.length}</span>
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
            <p className="end-info">Banco com {ALL_QUESTIONS.length} questões · 20 sorteadas por rodada</p>

            <button className="restart-btn" onClick={restart}>
              <RefreshCw size={15} aria-hidden="true" />
              Nova rodada
            </button>
          </div>
        </div>
      </div>
    )
  }

  // ── Tela do quiz ──────────────────────────────────────────────────
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
            <span>Questão {current + 1} de {questions.length}</span>
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
              {current + 1 < questions.length ? 'Próxima questão' : 'Ver resultado'}
              <ChevronRight size={16} aria-hidden="true" />
            </button>
          </div>
        )}

      </div>
    </div>
  )
}
