import { describe, expect, it } from 'vitest'
import { buildFormIndex, conjugate, gerund, participle, type Tense } from './index'
import { attachEnclitic, stressIndex, syllabify } from '../text/syllables'

const T: [string, Tense, string][] = [
  // regular
  ['hablar', 'pres', 'hablo hablas habla hablamos habláis hablan'],
  ['comer', 'pres', 'como comes come comemos coméis comen'],
  ['vivir', 'pres', 'vivo vives vive vivimos vivís viven'],
  ['hablar', 'pret', 'hablé hablaste habló hablamos hablasteis hablaron'],
  ['comer', 'pret', 'comí comiste comió comimos comisteis comieron'],
  ['hablar', 'impf', 'hablaba hablabas hablaba hablábamos hablabais hablaban'],
  ['vivir', 'impf', 'vivía vivías vivía vivíamos vivíais vivían'],
  ['hablar', 'fut', 'hablaré hablarás hablará hablaremos hablaréis hablarán'],
  ['comer', 'cond', 'comería comerías comería comeríamos comeríais comerían'],
  ['hablar', 'subj', 'hable hables hable hablemos habléis hablen'],
  ['vivir', 'subj', 'viva vivas viva vivamos viváis vivan'],
  ['hablar', 'subjImpf', 'hablara hablaras hablara habláramos hablarais hablaran'],
  ['comer', 'subjImpfSe', 'comiese comieses comiese comiésemos comieseis comiesen'],
  ['hablar', 'subjFut', 'hablare hablares hablare habláremos hablareis hablaren'],
  // spelling changes
  ['buscar', 'pret', 'busqué buscaste buscó buscamos buscasteis buscaron'],
  ['llegar', 'subj', 'llegue llegues llegue lleguemos lleguéis lleguen'],
  ['empezar', 'pres', 'empiezo empiezas empieza empezamos empezáis empiezan'],
  ['empezar', 'subj', 'empiece empieces empiece empecemos empecéis empiecen'],
  ['averiguar', 'pret', 'averigüé averiguaste averiguó averiguamos averiguasteis averiguaron'],
  ['coger', 'pres', 'cojo coges coge cogemos cogéis cogen'],
  ['elegir', 'pres', 'elijo eliges elige elegimos elegís eligen'],
  ['vencer', 'pres', 'venzo vences vence vencemos vencéis vencen'],
  ['conocer', 'pres', 'conozco conoces conoce conocemos conocéis conocen'],
  ['conocer', 'subj', 'conozca conozcas conozca conozcamos conozcáis conozcan'],
  ['seguir', 'pres', 'sigo sigues sigue seguimos seguís siguen'],
  ['seguir', 'pret', 'seguí seguiste siguió seguimos seguisteis siguieron'],
  ['construir', 'pres', 'construyo construyes construye construimos construís construyen'],
  ['construir', 'pret', 'construí construiste construyó construimos construisteis construyeron'],
  ['leer', 'pret', 'leí leíste leyó leímos leísteis leyeron'],
  ['creer', 'subjImpf', 'creyera creyeras creyera creyéramos creyerais creyeran'],
  // stem changes
  ['pensar', 'pres', 'pienso piensas piensa pensamos pensáis piensan'],
  ['volver', 'pres', 'vuelvo vuelves vuelve volvemos volvéis vuelven'],
  ['dormir', 'pret', 'dormí dormiste durmió dormimos dormisteis durmieron'],
  ['dormir', 'subj', 'duerma duermas duerma durmamos durmáis duerman'],
  ['sentir', 'subj', 'sienta sientas sienta sintamos sintáis sientan'],
  ['pedir', 'pres', 'pido pides pide pedimos pedís piden'],
  ['pedir', 'pret', 'pedí pediste pidió pedimos pedisteis pidieron'],
  ['jugar', 'pres', 'juego juegas juega jugamos jugáis juegan'],
  ['jugar', 'pret', 'jugué jugaste jugó jugamos jugasteis jugaron'],
  ['enviar', 'pres', 'envío envías envía enviamos enviáis envían'],
  ['avergonzar', 'pres', 'avergüenzo avergüenzas avergüenza avergonzamos avergonzáis avergüenzan'],
  ['avergonzar', 'subj', 'avergüence avergüences avergüence avergoncemos avergoncéis avergüencen'],
  ['arrepentir', 'pret', 'arrepentí arrepentiste arrepintió arrepentimos arrepentisteis arrepintieron'],
  ['continuar', 'pres', 'continúo continúas continúa continuamos continuáis continúan'],
  ['reunir', 'pres', 'reúno reúnes reúne reunimos reunís reúnen'],
  ['oler', 'pres', 'huelo hueles huele olemos oléis huelen'],
  // irregular
  ['ser', 'pres', 'soy eres es somos sois son'],
  ['ser', 'pret', 'fui fuiste fue fuimos fuisteis fueron'],
  ['ser', 'impf', 'era eras era éramos erais eran'],
  ['ser', 'subjImpf', 'fuera fueras fuera fuéramos fuerais fueran'],
  ['ir', 'pres', 'voy vas va vamos vais van'],
  ['ir', 'impf', 'iba ibas iba íbamos ibais iban'],
  ['ir', 'fut', 'iré irás irá iremos iréis irán'],
  ['estar', 'pret', 'estuve estuviste estuvo estuvimos estuvisteis estuvieron'],
  ['tener', 'pres', 'tengo tienes tiene tenemos tenéis tienen'],
  ['tener', 'pret', 'tuve tuviste tuvo tuvimos tuvisteis tuvieron'],
  ['tener', 'fut', 'tendré tendrás tendrá tendremos tendréis tendrán'],
  ['tener', 'subj', 'tenga tengas tenga tengamos tengáis tengan'],
  ['venir', 'pres', 'vengo vienes viene venimos venís vienen'],
  ['venir', 'pret', 'vine viniste vino vinimos vinisteis vinieron'],
  ['hacer', 'pret', 'hice hiciste hizo hicimos hicisteis hicieron'],
  ['hacer', 'fut', 'haré harás hará haremos haréis harán'],
  ['hacer', 'subj', 'haga hagas haga hagamos hagáis hagan'],
  ['decir', 'pres', 'digo dices dice decimos decís dicen'],
  ['decir', 'pret', 'dije dijiste dijo dijimos dijisteis dijeron'],
  ['decir', 'cond', 'diría dirías diría diríamos diríais dirían'],
  ['poder', 'pres', 'puedo puedes puede podemos podéis pueden'],
  ['poder', 'pret', 'pude pudiste pudo pudimos pudisteis pudieron'],
  ['querer', 'fut', 'querré querrás querrá querremos querréis querrán'],
  ['saber', 'pres', 'sé sabes sabe sabemos sabéis saben'],
  ['saber', 'subj', 'sepa sepas sepa sepamos sepáis sepan'],
  ['caber', 'pres', 'quepo cabes cabe cabemos cabéis caben'],
  ['dar', 'pret', 'di diste dio dimos disteis dieron'],
  ['ver', 'impf', 'veía veías veía veíamos veíais veían'],
  ['oír', 'pret', 'oí oíste oyó oímos oísteis oyeron'],
  ['oír', 'subj', 'oiga oigas oiga oigamos oigáis oigan'],
  ['traer', 'pret', 'traje trajiste trajo trajimos trajisteis trajeron'],
  ['conducir', 'pres', 'conduzco conduces conduce conducimos conducís conducen'],
  ['conducir', 'pret', 'conduje condujiste condujo condujimos condujisteis condujeron'],
  ['caer', 'pret', 'caí caíste cayó caímos caísteis cayeron'],
  ['haber', 'subjImpf', 'hubiera hubieras hubiera hubiéramos hubierais hubieran'],
  ['andar', 'pret', 'anduve anduviste anduvo anduvimos anduvisteis anduvieron'],
  ['reír', 'pres', 'río ríes ríe reímos reís ríen'],
  // RAE 2010: orthographic monosyllables take no accent; hiatus keeps it
  ['guiar', 'pret', 'guie guiaste guio guiamos guiasteis guiaron'],
  ['guiar', 'pres', 'guío guías guía guiamos guiais guían'],
  ['criar', 'subj', 'críe críes críe criemos crieis críen'],
  ['fiar', 'pret', 'fie fiaste fio fiamos fiasteis fiaron'],
  ['huir', 'pres', 'huyo huyes huye huimos huis huyen'],
  ['huir', 'pret', 'hui huiste huyó huimos huisteis huyeron'],
  ['sonreír', 'pret', 'sonreí sonreíste sonrió sonreímos sonreísteis sonrieron'],
  ['sonreír', 'subj', 'sonría sonrías sonría sonriamos sonriáis sonrían'],
  ['dar', 'subj', 'dé des dé demos deis den'],
  ['oír', 'pres', 'oigo oyes oye oímos oís oyen'],
  // irregular verbs added after the spelling audit
  ['satisfacer', 'pres', 'satisfago satisfaces satisface satisfacemos satisfacéis satisfacen'],
  ['satisfacer', 'pret', 'satisfice satisficiste satisfizo satisficimos satisficisteis satisficieron'],
  ['bendecir', 'pres', 'bendigo bendices bendice bendecimos bendecís bendicen'],
  ['bendecir', 'fut', 'bendeciré bendecirás bendecirá bendeciremos bendeciréis bendecirán'],
  ['delinquir', 'subj', 'delinca delincas delinca delincamos delincáis delincan'],
  ['errar', 'pres', 'yerro yerras yerra erramos erráis yerran'],
  ['rehacer', 'pret', 'rehíce rehiciste rehízo rehicimos rehicisteis rehicieron'],
  ['atenerse', 'pres', 'me atengo te atienes se atiene nos atenemos os atenéis se atienen'],
  // derived
  ['mantener', 'pres', 'mantengo mantienes mantiene mantenemos mantenéis mantienen'],
  ['proponer', 'pret', 'propuse propusiste propuso propusimos propusisteis propusieron'],
  ['prever', 'pres', 'preveo prevés prevé prevemos prevéis prevén'],
  // compound
  ['hablar', 'pperf', 'he hablado has hablado ha hablado hemos hablado habéis hablado han hablado'],
  ['hacer', 'plusc', 'había hecho habías hecho había hecho habíamos hecho habíais hecho habían hecho'],
]

describe('conjugate', () => {
  for (const [verb, tense, expected] of T) {
    it(`${verb} ${tense}`, () => {
      const forms = conjugate(verb, tense).join(' ')
      expect(forms).toBe(expected)
    })
  }

  it('imperatives', () => {
    expect(conjugate('hablar', 'imp')).toEqual([null, 'habla', 'hable', 'hablemos', 'hablad', 'hablen'])
    expect(conjugate('tener', 'imp')).toEqual([null, 'ten', 'tenga', 'tengamos', 'tened', 'tengan'])
    expect(conjugate('ir', 'imp')).toEqual([null, 've', 'vaya', 'vamos', 'id', 'vayan'])
    expect(conjugate('decir', 'imp')[1]).toBe('di')
    expect(conjugate('mantener', 'imp')[1]).toBe('mantén')
    expect(conjugate('componer', 'imp')[1]).toBe('compón')
    expect(conjugate('predecir', 'imp')[1]).toBe('predice')
    expect(conjugate('hablar', 'impNeg')).toEqual([null, 'no hables', 'no hable', 'no hablemos', 'no habléis', 'no hablen'])
  })

  it('reflexive', () => {
    expect(conjugate('levantarse', 'pres')).toEqual(['me levanto', 'te levantas', 'se levanta', 'nos levantamos', 'os levantáis', 'se levantan'])
    expect(conjugate('levantarse', 'imp')).toEqual([null, 'levántate', 'levántese', 'levantémonos', 'levantaos', 'levántense'])
    expect(conjugate('vestirse', 'imp')[4]).toBe('vestíos')
    expect(conjugate('ponerse', 'imp')[1]).toBe('ponte')
    expect(conjugate('irse', 'imp')[3]).toBe('vámonos')
    expect(conjugate('levantarse', 'pperf')[0]).toBe('me he levantado')
    expect(conjugate('acostarse', 'impNeg')[1]).toBe('no te acuestes')
  })

  it('defective verbs', () => {
    expect(conjugate('soler', 'fut').every((f) => f == null)).toBe(true)
    expect(conjugate('soler', 'pres')[0]).toBe('suelo')
    expect(conjugate('haber', 'imp').every((f) => f == null)).toBe(true)
  })

  it('gerunds & participles', () => {
    expect(gerund('hablar')).toBe('hablando')
    expect(gerund('leer')).toBe('leyendo')
    expect(gerund('dormir')).toBe('durmiendo')
    expect(gerund('decir')).toBe('diciendo')
    expect(gerund('ir')).toBe('yendo')
    expect(gerund('poder')).toBe('pudiendo')
    expect(gerund('construir')).toBe('construyendo')
    expect(gerund('levantarse')).toBe('levantándose')
    expect(participle('leer')).toBe('leído')
    expect(participle('construir')).toBe('construido')
    expect(participle('escribir')).toBe('escrito')
    expect(participle('describir')).toBe('descrito')
    expect(participle('volver')).toBe('vuelto')
    expect(participle('descubrir')).toBe('descubierto')
    expect(participle('ver')).toBe('visto')
    expect(participle('mover')).toBe('movido')
    expect(participle('satisfacer')).toBe('satisfecho')
    expect(participle('bendecir')).toBe('bendecido')
  })

  it('reverse index', () => {
    const idx = buildFormIndex(['tener', 'hablar', 'ir', 'ser'])
    expect(idx.get('tuvimos')?.[0]).toMatchObject({ verb: 'tener', tense: 'pret', person: 3 })
    expect(idx.get('fue')?.map((h) => h.verb).sort()).toEqual(['ir', 'ser'])
    expect(idx.get('hablo')?.[0]).toMatchObject({ verb: 'hablar', tense: 'pres', person: 0 })
  })
})

describe('syllables', () => {
  const cases: [string, string][] = [
    ['casa', 'ca-sa'],
    ['perro', 'pe-rro'],
    ['calle', 'ca-lle'],
    ['muchacho', 'mu-cha-cho'],
    ['guitarra', 'gui-ta-rra'],
    ['queso', 'que-so'],
    ['agua', 'a-gua'],
    ['ciudad', 'ciu-dad'],
    ['día', 'dí-a'],
    ['país', 'pa-ís'],
    ['leer', 'le-er'],
    ['hablar', 'ha-blar'],
    ['instante', 'ins-tan-te'],
    ['construir', 'cons-truir'],
    ['estoy', 'es-toy'],
    ['ayer', 'a-yer'],
    ['pingüino', 'pin-güi-no'],
    ['obstáculo', 'obs-tá-cu-lo'],
    ['España', 'Es-pa-ña'],
  ]
  for (const [w, exp] of cases) {
    it(w, () => expect(syllabify(w).join('-')).toBe(exp))
  }
  it('stress', () => {
    expect(stressIndex('casa')).toBe(0)
    expect(stressIndex('hablar')).toBe(1)
    expect(stressIndex('estoy')).toBe(1)
    expect(stressIndex('teléfono')).toBe(1)
    expect(stressIndex('examen')).toBe(1)
    expect(stressIndex('reloj')).toBe(1)
  })
  it('enclitics', () => {
    expect(attachEnclitic('dame'.slice(0, 2), 'me')).toBe('dame')
    expect(attachEnclitic('compra', 'lo')).toBe('cómpralo')
    expect(attachEnclitic('di', 'me')).toBe('dime')
    expect(attachEnclitic('diciendo', 'lo')).toBe('diciéndolo')
  })
})
