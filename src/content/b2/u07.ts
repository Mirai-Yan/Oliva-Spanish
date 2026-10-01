import type { Unit } from '../types'

export const u07: Unit = {
  id: 'b2-u07',
  level: 'B2',
  order: 7,
  title: '媒体与传话',
  titleEs: 'Según fuentes oficiales…',
  icon: '📰',
  goals: ['转述过去的各种问题：me preguntó si / dónde / qué…', '选用准确的引述动词，并区分“告知”（陈述式）和“要求”（虚拟式）', '转述问候、感谢、道歉等套话，概括别人说的话', '读懂新闻报道，辨别信息来源'],
  grammar: [
    {
      id: 'b2-referir-preguntas',
      title: '转述过去的问题',
      titleEs: 'Preguntas en estilo indirecto',
      level: 'B2',
      summary: '是非问句 → preguntó si…；特殊问句 → preguntó dónde / qué / cuándo…（疑问词保留重音）。主句是过去时，时态要“后退”。口语中常说 me preguntó que si…',
      body: `### 是非问句：si
| 原话 | 转述 |
|---|---|
| *«¿**Has estado** alguna vez en México?»* | *Me preguntó si **había estado** alguna vez en México.* |
| *«¿**Vendrás** a la cena?»* | *Me preguntó si **iría** a la cena.* |

### 特殊问句：保留疑问词（带重音）
| 原话 | 转述 |
|---|---|
| *«¿Dónde **vives**?»* | *Me preguntó dónde **vivía**.* |
| *«¿Qué **piensas** hacer?»* | *Quería saber qué **pensaba** hacer.* |
| *«¿Por qué no **viniste**?»* | *Me preguntó por qué no **había ido**.* |

### 口语里的 que si / que + 疑问词
*Me preguntó **que si** quería un café.*　*Me preguntó **que dónde** vivía.*
在西班牙口语里非常常见，书面语一般不加 *que*。

### 其他引出问题的说法
*quería saber si…*　*me preguntaba si…*（我心里想……）　*no sabía si…*`,
      examples: [
        ['Me preguntó si había estado alguna vez en México.', '他问我有没有去过墨西哥。'],
        ['La periodista le preguntó por qué había dimitido.', '记者问他为什么辞职。'],
        ['Quería saber qué pensaba hacer después de la carrera.', '他想知道我毕业后打算做什么。'],
        ['Me preguntó que si quería un café.', '他问我要不要来杯咖啡。'],
        ['Me preguntaba si era buena idea decírselo.', '我当时在想，告诉他是不是个好主意。'],
      ],
      origin: `**periódico** 来自希腊语 *periodikos*「周期性的」，*periodos* 原意是“绕一圈”。报纸就是按周期“转回来”的出版物。**periodista**（记者）则是 19 世纪才出现的词。

**interrogar**（审问）来自拉丁语 *inter*「之间」+ *rogare*「请求、问」——“在谈话之间反复问”。`,
      pitfalls: ['❌ *Me preguntó dónde vivo.*（过去转述）✅ *Me preguntó dónde vivía.*', '❌ *Me preguntó si quiero ir.* ✅ *Me preguntó si quería ir.*', '❌ *Me preguntó donde vivía.* ✅ *Me preguntó dónde vivía.*：间接疑问的疑问词也要加重音。'],
    },
    {
      id: 'b2-verbos-comunicacion',
      title: '引述动词：告知还是要求？',
      titleEs: 'Verbos de comunicación',
      level: 'B2',
      summary: '同一个动词（decir, insistir, advertir, recordar）表示“告知”时接陈述式，表示“要求、提醒去做”时接虚拟式。还有 prometer, amenazar con, acusar de, admitir, negar, sugerir, quejarse de 等。',
      body: `### 一个动词，两种意思
| 动词 | 告知 → 陈述式 | 要求 → 虚拟式 |
|---|---|---|
| *decir* | *Me dijo que **llegaba** tarde.*（他说他会晚到。） | *Me dijo que **llegara** pronto.*（他叫我早点到。） |
| *insistir en* | *Insistió en que **era** inocente.*（他坚称自己无辜。） | *Insistió en que **fuéramos** con él.*（他坚持要我们跟他去。） |
| *advertir* | *Nos advirtió que el puente **estaba** cortado.*（他提醒我们桥封了。） | *Nos advirtió que no **cruzáramos** el puente.*（他警告我们别过桥。） |
| *recordar* | *Me recordó que la reunión **era** a las diez.* | *Me recordó que **llamara** a mi madre.* |

### 更多引述动词和它们的结构
| 动词 | 结构 | 例句 |
|---|---|---|
| *afirmar / asegurar* | *que* + 陈述式 | *Aseguró que no **sabía** nada.* |
| *admitir / reconocer* | *que* + 陈述式 | *Reconoció que se **había equivocado**.* |
| *negar* | *que* + 虚拟式（多数情况） | *Negó que **hubiera** cobrado dinero.* |
| *prometer* | *que* + 条件式 | *Prometió que **bajaría** los impuestos.* |
| *amenazar con* | + 原形 | *Amenazó con **dimitir**.* |
| *acusar de* | + 原形 / 名词 | *Lo acusaron de **mentir**.* |
| *sugerir / proponer* | *que* + 虚拟式 | *Sugirió que **habláramos** con el director.* |
| *quejarse de que* | + 陈述式 / 虚拟式 | *Se quejó de que nadie le **escuchaba**.* |`,
      examples: [
        ['El ministro aseguró que no sabía nada del asunto.', '部长声称对此事一无所知。'],
        ['Reconoció que se había equivocado.', '他承认自己错了。'],
        ['Negó que hubiera cobrado dinero.', '他否认收过钱。'],
        ['La policía nos advirtió que no cruzáramos el puente.', '警察警告我们不要过桥。'],
        ['El jugador amenazó con dejar el equipo.', '那名球员威胁要离开球队。'],
      ],
      tables: [{ verbs: ['advertir', 'sugerir', 'admitir'], tense: 'pret' }],
      origin: `**advertir** 来自拉丁语 *advertere*「把（注意力）转向」：*ad*「向」+ *vertere*「转」。提醒别人，就是把他的注意力“转”过来。

**acusar** 来自 *accusare*：*ad* + *causa*「诉讼、理由」——“把人带上诉讼”。其中的 **causa** 我们在 B2 第 1 单元见过。`,
      pitfalls: ['❌ *Me recordó que llamaba a mi madre.*（提醒我去做）✅ *Me recordó que llamara a mi madre.*', '❌ *Amenazó de irse.* ✅ *Amenazó con irse.*', '❌ *Prometió que bajará los impuestos.*（过去转述）✅ *Prometió que bajaría los impuestos.*'],
    },
    {
      id: 'b2-resumir-discurso',
      title: '转述套话，概括说话内容',
      titleEs: 'Resumir y transmitir fórmulas',
      level: 'B2',
      summary: '问候、感谢、道歉、祝贺等套话，一般不逐字转述，而是用一个动词概括：«¡Gracias!» → Me dio las gracias. «Lo siento.» → Se disculpó. «¡Felicidades!» → Me felicitó. 也可以概括整段话：Me habló de… / Me contó lo de…',
      body: `### 套话用一个动词“打包”
| 原话 | 转述 |
|---|---|
| *«¡Hola! ¿Qué tal?»* | *Me **saludó**.* |
| *«¡Muchas gracias!»* | *Me **dio las gracias**.* / *Me **agradeció** la ayuda.* |
| *«Lo siento mucho.»* | *Se **disculpó**.* / *Me **pidió perdón**.* |
| *«¡Feliz cumpleaños!»* | *Me **felicitó** por mi cumpleaños.* |
| *«¡Qué bonito!»* | *Dijo que **era** muy bonito.* / *Le **encantó**.* |
| *«Adiós, hasta mañana.»* | *Se **despidió**.* |
| *«¡Cuidado!»* | *Me **advirtió** del peligro.* |
| *«Vale, de acuerdo.»* | ***Aceptó**.* / *Me **dio la razón**.* |

### 概括整段对话
- *Me **habló de** sus vacaciones.*（他跟我聊了他的假期。）
- *Me **contó lo de** su hermano.*（他跟我讲了他哥哥那件事。）
- *Estuvimos **hablando de** política toda la noche.*

### 时间和地点词的变化（复习）
*hoy → aquel día*，*mañana → al día siguiente*，*ayer → el día anterior*，*aquí → allí*，*este → aquel*，*ahora → entonces*`,
      examples: [
        ['Al verme, me saludó con mucho cariño.', '一看到我，他就很亲热地跟我打招呼。'],
        ['Me dio las gracias por la ayuda.', '他感谢我的帮助。'],
        ['Se disculpó por haber llegado tarde.', '他为迟到道了歉。'],
        ['Me felicitó por el nuevo trabajo.', '他祝贺我找到新工作。'],
        ['Me contó lo de su hermano.', '他跟我讲了他哥哥那件事。'],
      ],
      origin: `**resumir** 来自拉丁语 *resumere*「重新拿起」。概括就是把别人的话“重新拿起来”，只留下最重要的部分。

**citar**（引用；约见）来自 *citare*「召唤、使动起来」——引用一句话，就像把它“召唤”到你的文章里；*cita*（约会）也是被“召唤”去的见面。`,
      pitfalls: ['❌ *Me dijo que gracias.* ✅ *Me dio las gracias.*', '❌ *Me felicitó para mi cumpleaños.* ✅ *Me felicitó por mi cumpleaños.*', '❌ *Se disculpó de llegar tarde.* ✅ *Se disculpó por llegar tarde.*'],
    },
  ],
  words: [
    { id: 'periodismo', es: 'periodismo', zh: '新闻业；新闻学', pos: 'n', g: 'm', level: 'B2', tags: ['hobby', 'job'], ex: ['Estudió Periodismo en Madrid.', '他在马德里学新闻。'] },
    { id: 'reportaje', es: 'reportaje', zh: '新闻报道；专题', pos: 'n', g: 'm', level: 'B2', tags: ['hobby'], ex: ['Hicieron un reportaje sobre la despoblación.', '他们做了一期关于人口流失的专题报道。'] },
    { id: 'reportero', es: 'reportero', zh: '记者（采访记者）', pos: 'n', g: 'm', f: 'reportera', level: 'B2', tags: ['job'], ex: ['La reportera habló con los vecinos.', '记者采访了居民。'] },
    { id: 'entrevistar', es: 'entrevistar', zh: '采访；面试', pos: 'v', level: 'B2', tags: ['verb', 'job'], ex: ['Entrevistaron al alcalde en directo.', '他们现场直播采访了市长。'] },
    { id: 'entrevistado', es: 'entrevistado', zh: '受访者', pos: 'n', g: 'm', f: 'entrevistada', level: 'B2', tags: ['job'], ex: ['El entrevistado no quiso contestar.', '受访者不愿回答。'] },
    { id: 'rueda-de-prensa', es: 'rueda de prensa', zh: '新闻发布会', pos: 'n', g: 'f', level: 'B2', tags: ['hobby'], ex: ['El entrenador dio una rueda de prensa.', '教练召开了新闻发布会。'] },
    { id: 'comunicado', es: 'comunicado', zh: '公告；声明', pos: 'n', g: 'm', level: 'B2', tags: ['hobby'], ex: ['La empresa publicó un comunicado oficial.', '公司发布了一份正式声明。'] },
    { id: 'editorial', es: 'editorial', zh: '社论（m）；出版社（f）', pos: 'n', g: 'm', level: 'B2', tags: ['hobby'], ex: ['El editorial de hoy critica al gobierno.', '今天的社论批评了政府。'], note: 'el editorial = 社论；la editorial = 出版社。' },
    { id: 'columna', es: 'columna', zh: '专栏；柱子', pos: 'n', g: 'f', level: 'B2', tags: ['hobby'], ex: ['Escribe una columna semanal.', '他每周写一篇专栏。'] },
    { id: 'columnista', es: 'columnista', zh: '专栏作家', pos: 'n', g: 'mf', level: 'B2', tags: ['job'], ex: ['Es columnista de un periódico nacional.', '她是一家全国性报纸的专栏作家。'] },
    { id: 'cronica', es: 'crónica', zh: '纪实报道；编年史', pos: 'n', g: 'f', level: 'B2', tags: ['hobby'], ex: ['Leí la crónica del partido.', '我读了这场比赛的报道。'], ety: '希腊语 chronos「时间」：按时间记录的事。' },
    { id: 'portada', es: 'portada', zh: '头版；封面', pos: 'n', g: 'f', level: 'B2', tags: ['hobby'], ex: ['La noticia salió en portada.', '这条新闻上了头版。'] },
    { id: 'suscripcion', es: 'suscripción', zh: '订阅', pos: 'n', g: 'f', pl: 'suscripciones', level: 'B2', tags: ['hobby'], ex: ['Tengo una suscripción digital al periódico.', '我订了这份报纸的电子版。'] },
    { id: 'suscribirse', es: 'suscribirse', zh: '订阅', pos: 'v', level: 'B2', tags: ['verb', 'hobby'], ex: ['¡Suscríbete a nuestro canal!', '订阅我们的频道吧！'], note: '过去分词 suscrito。' },
    { id: 'audiencia', es: 'audiencia', zh: '观众；收视率；听证', pos: 'n', g: 'f', level: 'B2', tags: ['hobby'], ex: ['El programa tiene mucha audiencia.', '这个节目收视率很高。'] },
    { id: 'oyente', es: 'oyente', zh: '听众', pos: 'n', g: 'mf', level: 'B2', tags: ['hobby'], ex: ['Una oyente llamó al programa.', '一位听众给节目打来电话。'] },
    { id: 'espectador', es: 'espectador', zh: '观众', pos: 'n', g: 'm', f: 'espectadora', pl: 'espectadores', level: 'B2', tags: ['hobby'], ex: ['El partido tuvo cincuenta mil espectadores.', '这场比赛有五万名观众。'] },
    { id: 'emisora', es: 'emisora', zh: '电台', pos: 'n', g: 'f', level: 'B2', tags: ['hobby'], ex: ['Es la emisora de radio más escuchada.', '这是收听率最高的电台。'] },
    { id: 'locutor', es: 'locutor', zh: '播音员', pos: 'n', g: 'm', f: 'locutora', pl: 'locutores', level: 'B2', tags: ['job'], ex: ['Tiene voz de locutor.', '他的声音像播音员。'] },
    { id: 'tertulia', es: 'tertulia', zh: '座谈；聊天会', pos: 'n', g: 'f', level: 'B2', tags: ['hobby'], ex: ['Escucho una tertulia política por las mañanas.', '我早上听一档政治座谈节目。'], note: '西班牙传统：朋友们定期在咖啡馆聚会聊天也叫 tertulia。' },
    { id: 'escandalo', es: 'escándalo', zh: '丑闻；吵闹', pos: 'n', g: 'm', level: 'B2', tags: ['hobby'], ex: ['El escándalo salió en todos los periódicos.', '这桩丑闻登上了所有报纸。'] },
    { id: 'censura', es: 'censura', zh: '审查', pos: 'n', g: 'f', level: 'B2', tags: ['hobby'], ex: ['Durante la dictadura había censura.', '独裁时期有审查制度。'] },
    { id: 'censurar', es: 'censurar', zh: '审查；指责', pos: 'v', level: 'B2', tags: ['verb'], ex: ['La película fue censurada.', '这部电影被审查了。'] },
    { id: 'libertad-de-expresion', es: 'libertad de expresión', zh: '言论自由', pos: 'n', g: 'f', level: 'B2', tags: ['city'], ex: ['La libertad de expresión es un derecho fundamental.', '言论自由是一项基本权利。'] },
    { id: 'manipular', es: 'manipular', zh: '操纵；摆弄', pos: 'v', level: 'B2', tags: ['verb'], ex: ['Algunos medios manipulan la información.', '有些媒体操纵信息。'] },
    { id: 'manipulacion', es: 'manipulación', zh: '操纵', pos: 'n', g: 'f', level: 'B2', tags: ['hobby'], ex: ['Es un caso claro de manipulación.', '这是明显的操纵行为。'] },
    { id: 'sensacionalista', es: 'sensacionalista', zh: '哗众取宠的', pos: 'adj', level: 'B2', tags: ['hobby'], ex: ['No me gusta la prensa sensacionalista.', '我不喜欢哗众取宠的报刊。'] },
    { id: 'imparcial', es: 'imparcial', zh: '公正的；不偏不倚的', pos: 'adj', level: 'B2', tags: ['hobby'], ex: ['Un buen periodista debe ser imparcial.', '好记者应当不偏不倚。'] },
    { id: 'parcial', es: 'parcial', zh: '有偏见的；部分的；期中考试', pos: 'adj', level: 'B2', tags: ['hobby'], ex: ['Su opinión es muy parcial.', '他的观点很片面。'] },
    { id: 'rigor', es: 'rigor', zh: '严谨', pos: 'n', g: 'm', level: 'B2', tags: ['hobby'], ex: ['Hay que informar con rigor.', '报道要严谨。'] },
    { id: 'riguroso', es: 'riguroso', zh: '严谨的；严格的', pos: 'adj', f: 'rigurosa', level: 'B2', tags: ['hobby'], ex: ['Es un estudio muy riguroso.', '这是一项非常严谨的研究。'] },
    { id: 'contrastar', es: 'contrastar', zh: '核实；对比', pos: 'v', level: 'B2', tags: ['verb'], ex: ['Antes de publicar, hay que contrastar la información.', '发布前要核实信息。'] },
    { id: 'verificar', es: 'verificar', zh: '核实', pos: 'v', level: 'B2', tags: ['verb'], ex: ['No han podido verificar la noticia.', '他们还没能核实这条新闻。'], note: 'c→qu：verifiqué。' },
    { id: 'desmentir', es: 'desmentir', zh: '辟谣；否认', pos: 'v', level: 'B2', tags: ['verb'], ex: ['El gobierno ha desmentido la noticia.', '政府否认了这则消息。'], note: 'e→ie / i：desmiento，desmintió。' },
    { id: 'filtrar', es: 'filtrar', zh: '泄露；过滤', pos: 'v', level: 'B2', tags: ['verb'], ex: ['Alguien filtró el documento a la prensa.', '有人把文件泄露给了媒体。'] },
    { id: 'filtracion', es: 'filtración', zh: '泄露', pos: 'n', g: 'f', pl: 'filtraciones', level: 'B2', tags: ['hobby'], ex: ['Investigan una filtración de datos.', '他们在调查一起数据泄露。'] },
    { id: 'exclusiva', es: 'exclusiva', zh: '独家新闻', pos: 'n', g: 'f', level: 'B2', tags: ['hobby'], ex: ['La revista publicó una exclusiva.', '这家杂志发布了一条独家新闻。'] },
    { id: 'citar', es: 'citar', zh: '引用；约见', pos: 'v', level: 'B2', tags: ['verb'], ex: ['Siempre cita a Cervantes.', '他总是引用塞万提斯的话。'] },
    { id: 'admitir', es: 'admitir', zh: '承认；接纳', pos: 'v', level: 'B2', tags: ['verb'], ex: ['Admitió que había mentido.', '他承认自己撒了谎。'] },
    { id: 'amenazar', es: 'amenazar', zh: '威胁', pos: 'v', level: 'B2', tags: ['verb'], ex: ['Amenazó con contarlo todo.', '他威胁要把一切说出来。'], note: 'amenazar con + 原形 / 名词。' },
    { id: 'amenaza', es: 'amenaza', zh: '威胁', pos: 'n', g: 'f', level: 'B2', tags: ['func'], ex: ['El cambio climático es una amenaza real.', '气候变化是一个真实的威胁。'] },
    { id: 'acusar', es: 'acusar', zh: '指控', pos: 'v', level: 'B2', tags: ['verb'], ex: ['Lo acusaron de robar.', '他被指控偷窃。'], note: 'acusar a alguien de algo。' },
    { id: 'acusacion', es: 'acusación', zh: '指控', pos: 'n', g: 'f', pl: 'acusaciones', level: 'B2', tags: ['func'], ex: ['Niega todas las acusaciones.', '他否认所有指控。'] },
    { id: 'insinuar', es: 'insinuar', zh: '暗示', pos: 'v', level: 'B2', tags: ['verb'], ex: ['¿Qué estás insinuando?', '你在暗示什么？'], note: '重音：insinúo。' },
    { id: 'alegar', es: 'alegar', zh: '辩称；援引（理由）', pos: 'v', level: 'B2', tags: ['verb'], ex: ['Alegó que estaba enfermo.', '他辩称自己生病了。'] },
    { id: 'replicar', es: 'replicar', zh: '反驳', pos: 'v', level: 'B2', tags: ['verb'], ex: ['—No es verdad —replicó ella.', '“不是真的。”她反驳道。'] },
    { id: 'matizar', es: 'matizar', zh: '补充说明；细化', pos: 'v', level: 'B2', tags: ['verb'], ex: ['Quiero matizar lo que he dicho.', '我想对我刚才说的补充一点。'], ety: '来自 matiz「色调的细微差别」。' },
    { id: 'dar-las-gracias', es: 'dar las gracias', zh: '道谢', pos: 'phr', level: 'B2', tags: ['greet'], ex: ['Se fue sin dar las gracias.', '他连声谢谢都没说就走了。'] },
    { id: 'desinformacion', es: 'desinformación', zh: '虚假信息', pos: 'n', g: 'f', level: 'B2', tags: ['hobby'], ex: ['La desinformación se difunde muy rápido.', '虚假信息传播得非常快。'] },
  ],
  sentences: [
    { id: 's1', es: 'Me preguntó si había estado alguna vez en México.', zh: '他问我有没有去过墨西哥。', g: ['b2-referir-preguntas'], distract: ['he'] },
    { id: 's2', es: 'La periodista le preguntó por qué había dimitido.', zh: '记者问他为什么辞职。', g: ['b2-referir-preguntas'] },
    { id: 's3', es: 'Quería saber qué pensaba hacer después de la carrera.', zh: '他想知道我毕业后打算做什么。', g: ['b2-referir-preguntas'] },
    { id: 's4', es: 'Me preguntó que si quería un café.', zh: '他问我要不要来杯咖啡。', g: ['b2-referir-preguntas'] },
    { id: 's5', es: 'El ministro aseguró que no sabía nada del asunto.', zh: '部长声称对此事一无所知。', g: ['b2-verbos-comunicacion'] },
    { id: 's6', es: 'Reconoció que se había equivocado.', zh: '他承认自己错了。', g: ['b2-verbos-comunicacion'] },
    { id: 's7', es: 'Negó que hubiera cobrado dinero.', zh: '他否认收过钱。', g: ['b2-verbos-comunicacion'] },
    { id: 's8', es: 'La policía nos advirtió que no cruzáramos el puente.', zh: '警察警告我们不要过桥。', g: ['b2-verbos-comunicacion'], distract: ['cruzábamos'] },
    { id: 's9', es: 'El jugador amenazó con dejar el equipo.', zh: '那名球员威胁要离开球队。', g: ['b2-verbos-comunicacion'], distract: ['de'] },
    { id: 's10', es: 'Prometió que bajaría los impuestos.', zh: '他承诺会减税。', g: ['b2-verbos-comunicacion'] },
    { id: 's11', es: 'Me dio las gracias por la ayuda.', zh: '他感谢我的帮助。', g: ['b2-resumir-discurso'] },
    { id: 's12', es: 'Se disculpó por haber llegado tarde.', zh: '他为迟到道了歉。', g: ['b2-resumir-discurso'] },
    { id: 's13', es: 'Me felicitó por el nuevo trabajo.', zh: '他祝贺我找到新工作。', g: ['b2-resumir-discurso'], distract: ['para'] },
    { id: 's14', es: 'Me contó lo de su hermano.', zh: '他跟我讲了他哥哥那件事。', g: ['b2-resumir-discurso'] },
    { id: 's15', es: 'La noticia salió en portada.', zh: '这条新闻上了头版。' },
    { id: 's16', es: 'Antes de publicar, hay que contrastar la información.', zh: '发布前要核实信息。' },
    { id: 's17', es: 'El gobierno ha desmentido la noticia.', zh: '政府否认了这则消息。' },
    { id: 's18', es: 'Un buen periodista debe ser imparcial.', zh: '好记者应当不偏不倚。' },
    { id: 's19', es: 'Me recordó que llamara a mi madre.', zh: '他提醒我给我妈打电话。', g: ['b2-verbos-comunicacion'] },
    { id: 's20', es: 'Me recordó que la reunión era a las diez.', zh: '他提醒我会议是十点。', g: ['b2-verbos-comunicacion'] },
    { id: 's21', es: 'Insistió en que era inocente.', zh: '他坚称自己是无辜的。', g: ['b2-verbos-comunicacion'] },
    { id: 's22', es: 'Insistió en que fuéramos con él.', zh: '他坚持要我们跟他去。', g: ['b2-verbos-comunicacion'] },
    { id: 's23', es: 'Al verme, me saludó con mucho cariño.', zh: '一看到我，他就很亲热地跟我打招呼。', g: ['b2-resumir-discurso'] },
    { id: 's24', es: 'La desinformación se difunde muy rápido.', zh: '虚假信息传播得非常快。' },
    { id: 's25', es: '¿Qué estás insinuando?', zh: '你在暗示什么？' },
  ],
  cloze: [
    { id: 'c1', text: '«¿Vives sola?» → Me preguntó si ___ sola.', answers: ['vivía'], hint: 'vivir', zh: '他问我是不是一个人住。', g: ['b2-referir-preguntas'] },
    { id: 'c2', text: '«¿Dónde has dejado las llaves?» → Me preguntó dónde ___ las llaves.', answers: ['había dejado'], hint: 'dejar', zh: '他问我把钥匙放哪儿了。', g: ['b2-referir-preguntas'] },
    { id: 'c3', text: '«¿Vendrás a la boda?» → Me preguntó si ___ a la boda.', answers: ['iría'], hint: 'ir', zh: '他问我会不会去婚礼。', g: ['b2-referir-preguntas'] },
    { id: 'c4', text: 'La periodista quería saber ___ había dimitido el ministro.', answers: ['por qué'], options: ['por qué', 'porque', 'si'], zh: '记者想知道部长为什么辞职。', g: ['b2-referir-preguntas'] },
    { id: 'c5', text: 'Nos advirtió que la carretera ___ cortada por la nieve.', answers: ['estaba'], options: ['estaba', 'estuviera', 'esté'], zh: '他提醒我们公路因大雪封了。', g: ['b2-verbos-comunicacion'], explain: '这里是告知信息，用陈述式。' },
    { id: 'c6', text: 'Nos advirtió que no ___ por esa carretera.', answers: ['fuéramos', 'fuésemos'], hint: 'ir', zh: '他警告我们别走那条路。', g: ['b2-verbos-comunicacion'] },
    { id: 'c7', text: 'El alcalde prometió que ___ un nuevo hospital.', answers: ['construiría'], hint: 'construir', zh: '市长承诺会建一所新医院。', g: ['b2-verbos-comunicacion'] },
    { id: 'c8', text: 'Amenazó ___ llamar a la policía.', answers: ['con'], options: ['con', 'de', 'a'], zh: '他威胁要报警。', g: ['b2-verbos-comunicacion'] },
    { id: 'c9', text: 'Lo acusaron ___ haber filtrado el documento.', answers: ['de'], options: ['de', 'por', 'con'], zh: '他被指控泄露了文件。', g: ['b2-verbos-comunicacion'] },
    { id: 'c10', text: 'Reconoció que ___ un error.', answers: ['había cometido'], hint: 'cometer', zh: '他承认自己犯了错误。', g: ['b2-verbos-comunicacion'] },
    { id: 'c11', text: 'Negó que ___ (él) con la prensa.', answers: ['hubiera hablado', 'hubiese hablado'], hint: 'hablar', zh: '他否认和媒体谈过。', g: ['b2-verbos-comunicacion'] },
    { id: 'c12', text: 'Me recordó que ___ el pasaporte.', answers: ['llevara', 'llevase'], hint: 'llevar', zh: '他提醒我带上护照。', g: ['b2-verbos-comunicacion'] },
    { id: 'c13', text: '«¡Muchas gracias!» → Me ___ las gracias.', answers: ['dio'], options: ['dio', 'dijo', 'hizo'], zh: '他向我道谢。', g: ['b2-resumir-discurso'] },
    { id: 'c14', text: '«Perdona, lo siento.» → Se ___.', answers: ['disculpó'], options: ['disculpó', 'despidió', 'saludó'], zh: '他道了歉。', g: ['b2-resumir-discurso'] },
    { id: 'c15', text: '«¡Felicidades!» → Me felicitó ___ mi cumpleaños.', answers: ['por'], options: ['por', 'para', 'de'], zh: '他祝我生日快乐。', g: ['b2-resumir-discurso'] },
    { id: 'c16', text: '«Adiós, hasta mañana.» → Se ___ y se fue.', answers: ['despidió'], options: ['despidió', 'disculpó', 'felicitó'], zh: '他道了别就走了。', g: ['b2-resumir-discurso'] },
    { id: 'c17', text: '«Volveré mañana.» → Dijo que volvería al día ___.', answers: ['siguiente'], options: ['siguiente', 'anterior', 'mañana'], zh: '他说他第二天会回来。', g: ['b2-resumir-discurso'] },
    { id: 'c18', text: 'Antes de publicar una noticia, hay que ___ las fuentes.', answers: ['contrastar'], options: ['contrastar', 'filtrar', 'censurar'], zh: '发布新闻前要核实消息来源。' },
  ],
  conj: [
    { verbs: ['advertir', 'sugerir', 'admitir', 'desmentir', 'despedirse', 'reconocer'], tenses: ['pret'], g: 'b2-verbos-comunicacion' },
    { verbs: ['ir', 'venir', 'construir', 'bajar', 'hacer'], tenses: ['cond'], g: 'b2-verbos-comunicacion' },
  ],
  dialogues: [
    {
      id: 'b2-u07-d1',
      title: '采访之后 · Después de la entrevista',
      lines: [
        { who: 'Jefa', es: '¿Qué tal la entrevista con el alcalde? ¿Te dijo algo interesante?', zh: '采访市长怎么样？他说了什么有意思的吗？' },
        { who: 'Mei', es: 'Bastante. Le pregunté si iba a presentarse otra vez a las elecciones y, al principio, no quiso contestar.', zh: '挺多的。我问他会不会再次参选，一开始他不愿回答。' },
        { who: 'Jefa', es: '¿Y al final?', zh: '那最后呢？' },
        { who: 'Mei', es: 'Al final reconoció que se lo estaba pensando. Pero me pidió que no lo publicara todavía.', zh: '最后他承认正在考虑。但他请我先别发出来。' },
        { who: 'Jefa', es: 'Mmm… ¿Y lo del nuevo estadio?', zh: '嗯……那新体育场的事呢？' },
        { who: 'Mei', es: 'Negó que hubiera ningún problema con el presupuesto. Aseguró que las obras empezarían en septiembre.', zh: '他否认预算有任何问题。他保证九月开工。' },
        { who: 'Jefa', es: 'Pues ya sabes lo que hay que hacer: contrastar todo con otras fuentes antes de escribir.', zh: '那你知道该怎么做：动笔之前，所有内容都要和其他消息来源核实一遍。' },
        { who: 'Mei', es: 'Claro. Por cierto, se despidió muy amable y me dio las gracias por la entrevista. Me invitó a volver cuando quisiera.', zh: '当然。顺便说一句，他告别时很客气，还感谢我的采访，说欢迎我随时再来。' },
      ],
    },
  ],
  readings: [
    {
      id: 'b2-r13',
      level: 'B2',
      title: 'Una científica advierte sobre el calor',
      titleZh: '一位科学家对高温发出警告',
      topic: '新闻',
      paras: [
        [
          ['La climatóloga Ana Ferrer participó ayer en una rueda de prensa en Sevilla, donde advirtió que los veranos en el sur de España serán cada vez más largos y calurosos.', '气候学家安娜·费雷尔昨天在塞维利亚出席了一场新闻发布会，她警告说，西班牙南部的夏天会越来越长、越来越热。'],
          ['Según explicó, en las últimas cuatro décadas la temporada de calor se ha alargado varias semanas, y aseguró que la tendencia continuará si no se reducen las emisiones.', '她解释说，在过去四十年里，炎热季节延长了好几周；她还断言，如果不减少排放，这一趋势还会持续下去。'],
        ],
        [
          ['Cuando un periodista le preguntó qué podían hacer los ciudadanos, Ferrer recordó que cada gesto cuenta y recomendó que las ciudades plantaran más árboles para crear sombra.', '当一名记者问她普通市民能做什么时，费雷尔提醒说，每一个举动都很重要，并建议各城市多种树、多造些阴凉。'],
          ['Admitió, sin embargo, que las soluciones individuales no son suficientes y pidió a los gobiernos que actuaran «con valentía y sin más retrasos».', '不过，她也承认，个人的努力是不够的，并呼吁各国政府“拿出勇气、不再拖延”地采取行动。'],
        ],
        [
          ['Al final del acto, la investigadora agradeció a los periodistas su interés y se despidió con una frase que muchos medios han reproducido: «El calor ya no es una noticia del futuro; es una noticia de hoy».', '活动结束时，这位研究员感谢了记者们的关注，并以一句被众多媒体转载的话告别：“高温已经不是未来的新闻，而是今天的新闻。”'],
        ],
      ],
      gloss: { climatóloga: '气候学家', calurosos: '炎热的', alargado: '延长', tendencia: '趋势', emisiones: '排放', plantaran: '种植（虚拟式）', actuaran: '行动（虚拟式）', acto: '活动', reproducido: '转载' },
      questions: [
        { type: 'mc', q: '费雷尔建议城市做什么？', options: ['多建游泳池', '多种树', '禁止汽车'], answer: 1 },
        { type: 'tf', q: '费雷尔认为个人的努力就足够了。', answer: false, explain: 'Admitió… que las soluciones individuales no son suficientes' },
        { type: 'mc', q: '她请求政府怎样行动？', options: ['慢慢来', '勇敢、不再拖延', '等科学家的新研究'], answer: 1 },
      ],
    },
    {
      id: 'b2-r14',
      level: 'B2',
      title: 'El teléfono escacharrado',
      titleZh: '传话游戏：一条新闻是怎么变样的',
      topic: '媒体',
      paras: [
        [
          ['En una entrevista para una radio local, un investigador dijo: «Algunos estudios sugieren que tomar un café al día podría tener efectos positivos en la memoria, pero todavía hay que investigar más».', '在一次地方电台的采访中，一位研究人员说：“一些研究表明，每天喝一杯咖啡可能对记忆有好处，但还需要进一步研究。”'],
        ],
        [
          ['Al día siguiente, una web publicó: «Un científico asegura que el café mejora la memoria». Unas horas después, un periódico digital tituló: «Beber café previene el alzhéimer, según los expertos».', '第二天，一个网站发布：“科学家断言咖啡能改善记忆。”几个小时后，一家网络报纸的标题是：“专家称喝咖啡能预防阿尔茨海默病。”'],
          ['Por la tarde, el mensaje circulaba por las redes sociales con otra forma: «¡Los médicos recomiendan tomar cinco cafés al día!».', '到了下午，这条消息换了个样子在社交网络上流传：“医生建议每天喝五杯咖啡！”'],
        ],
        [
          ['El investigador tuvo que publicar un comunicado en el que desmentía esas afirmaciones. Explicó que nunca había dicho que el café previniera ninguna enfermedad y pidió a los medios que citaran sus palabras con rigor.', '这位研究人员不得不发布声明澄清。他解释说，他从没说过咖啡能预防任何疾病，并请媒体严谨地引用他的话。'],
          ['La lección es clara: antes de compartir una noticia, conviene preguntarse quién lo dijo, qué dijo exactamente y si alguien ha contrastado la información.', '教训很明显：在转发一条新闻之前，最好先问问自己：是谁说的？他到底说了什么？有没有人核实过这条信息？'],
        ],
      ],
      gloss: { escacharrado: '坏掉的（口语）', sugieren: '表明', efectos: '效果', tituló: '以……为标题', previene: '预防', alzhéimer: '阿尔茨海默病', circulaba: '流传', afirmaciones: '说法', previniera: '预防（虚拟式）', conviene: '最好' },
      questions: [
        { type: 'mc', q: '研究人员最初说了什么？', options: ['咖啡能预防阿尔茨海默病', '每天一杯咖啡可能对记忆有好处，但需要更多研究', '医生建议每天喝五杯咖啡'], answer: 1 },
        { type: 'tf', q: '研究人员后来发声明支持这些新闻标题。', answer: false, explain: 'tuvo que publicar un comunicado en el que desmentía esas afirmaciones' },
        { type: 'mc', q: '文章最后建议读者在转发新闻前做什么？', options: ['只看标题', '弄清是谁说的、说了什么、是否核实过', '问医生'], answer: 1 },
      ],
    },
  ],
  writing: [{ id: 'w1', prompt: '你昨天采访了一个人（老师、邻居、名人……可以虚构）。写一篇简短的报道，转述你问了什么、他 / 她怎么回答的，至少用五个不同的引述动词（afirmar, reconocer, negar, prometer, advertir, recordar…），并注意时态变化。', words: [130, 220], hints: ['Le pregunté si… / qué…', 'Reconoció que… / Negó que…', 'Prometió que… / Nos advirtió que…', 'Al final, me dio las gracias y se despidió.'] }],
}
