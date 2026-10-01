import type { Unit } from '../types'

export const u04: Unit = {
  id: 'b2-u04',
  level: 'B2',
  order: 4,
  title: '克服困难',
  titleEs: 'A pesar de todo',
  icon: '🏅',
  goals: ['区分 aunque + 陈述式 / 虚拟式现在时 / 虚拟式过去时 的不同含义', '用 por mucho que、por muy… que 表达“无论多么……”', '用 a pesar de、pese a、si bien、aun así、y eso que 表达让步', '讲述克服困难、坚持到底的故事'],
  grammar: [
    {
      id: 'b2-aunque',
      title: 'aunque：陈述式还是虚拟式？',
      titleEs: 'Aunque + indicativo / subjuntivo',
      level: 'B2',
      summary: 'aunque + 陈述式：承认一个事实（虽然）。aunque + 虚拟式现在时：假设或不重要的事实（即使、就算）。aunque + 虚拟式过去时：不太可能 / 与现实相反（即使……也……）。',
      body: `### 四种 aunque
| 结构 | 意思 | 例句 |
|---|---|---|
| *aunque* + **陈述式** | 虽然（我告诉你一个事实） | *Aunque **llueve**, voy a salir.*（虽然在下雨，我还是要出去。） |
| *aunque* + **虚拟式现在时** | 即使（可能发生，或我不在乎是不是事实） | *Aunque **llueva**, voy a salir.*（就算下雨，我也要出去。） |
| *aunque* + **虚拟式过去时** | 即使（不太可能 / 与现实相反） | *Aunque **tuviera** dinero, no me compraría ese coche.* |
| *aunque* + **虚拟式过去完成时** | 即使当初（与过去事实相反） | *Aunque me lo **hubieras pedido**, no habría ido.* |

### 同一个事实，两种态度
- *Aunque **es** caro, lo compro.*（我告诉你：它确实贵，但我还是买。）
- *Aunque **sea** caro, lo compro.*（我知道它贵也好、不贵也好，都无所谓，反正买。）

说话人用虚拟式时，是在说“这一点不重要”，也常用于 **承认对方的观点**：
*—Es muy difícil. —Ya, **aunque sea** difícil, hay que intentarlo.*

### 别加 pero
中文说“虽然……但是……”，西语只用一个：
❌ *Aunque estoy cansado, pero sigo.* ✅ *Aunque estoy cansado, sigo.*`,
      examples: [
        ['Aunque llueve, voy a salir a correr.', '虽然在下雨，我还是要出去跑步。'],
        ['Aunque llueva mañana, el partido se jugará.', '就算明天下雨，比赛也照常进行。'],
        ['Aunque tuviera dinero, no me compraría ese coche.', '就算我有钱，也不会买那辆车。'],
        ['Aunque me lo hubieras pedido, no habría ido.', '就算你当时求我，我也不会去。'],
        ['Aunque sea difícil, hay que intentarlo.', '就算很难，也得试一试。'],
      ],
      tables: [{ verbs: ['ser', 'llover', 'costar'], tense: 'subj' }],
      origin: `**aunque** = *aun* + *que*。**aun** 来自拉丁语 *adhuc*「直到现在、仍然」。所以 *aunque* 字面上是“即使这样也仍然……”。

注意重音：**aún**（带重音）= “还、仍然”（*todavía*）；**aun**（不带重音）= “甚至”（*incluso*）：*Aún no ha llegado.*（他还没到。）*Aun así, lo intentaré.*（即便如此，我也要试试。）`,
      pitfalls: ['❌ *Aunque llueve mañana, iré.* ✅ *Aunque llueva mañana, iré.*：将来的事是假设，用虚拟式。', '❌ *Aunque estoy cansado, pero sigo.* ✅ *Aunque estoy cansado, sigo.*', '❌ *Aunque tendría dinero…* ✅ *Aunque tuviera dinero…*'],
    },
    {
      id: 'b2-por-mucho-que',
      title: '“无论多么……”：por mucho que, por muy… que',
      titleEs: 'Por mucho que / por más que / por muy… que',
      level: 'B2',
      summary: 'por mucho que / por más que + 动词；por muy + 形容词 / 副词 + que；por mucho / mucha / muchos + 名词 + que。说一般情况或将来 → 虚拟式；说已知事实 → 陈述式也可以。',
      body: `### 三种结构
| 结构 | 例句 |
|---|---|
| *por mucho que / por más que* + 动词 | *Por mucho que **estudies**, no lo aprenderás todo en un mes.* |
| *por muy* + 形容词 / 副词 + *que* | *Por muy cansado que **esté**, siempre me ayuda.* |
| *por mucho / mucha / muchos / muchas* + 名词 + *que* | *Por muchas veces que lo **repitas**, no me convencerás.* |

### 陈述式还是虚拟式？
- 一般情况、将来、假设 → **虚拟式**：*Por más que **insistas**, no voy a ir.*
- 强调一个 **已经发生的事实** → 也可以用 **陈述式**：*Por más que **estudia**, no aprueba.*（他确实一直在学，可就是考不过。）

### 和 aunque 比较
*Por mucho que estudies* ≈ *Aunque estudies mucho*，但语气更强：“不管你多么……都没用”。`,
      examples: [
        ['Por mucho que estudies, no lo aprenderás todo en un mes.', '不管你多用功，一个月也学不完所有东西。'],
        ['Por muy cansado que esté, siempre me ayuda.', '不管多累，他总是帮我。'],
        ['Por más que insistas, no voy a cambiar de opinión.', '不管你怎么坚持，我都不会改主意。'],
        ['Por más que entrena, no consigue bajar de los cuatro minutos.', '他再怎么训练，也跑不进四分钟。'],
        ['Por muchas veces que lo intentes, no se abre.', '不管你试多少次，它都打不开。'],
      ],
      origin: `**superar**（克服）来自拉丁语 *superare*「越过」，*super* =「在上面」。**obstáculo** 来自 *obstaculum*：*ob*「对着」+ *stare*「站立」——“挡在你面前站着的东西”。

*por mucho que* 里的 *por* 表示“尽管”，在古西语里很常见：*por bien que lo haga*（不管他做得多好）。`,
      pitfalls: ['❌ *Por mucho que estudias, no aprobarás.* ✅ *Por mucho que estudies, no aprobarás.*', '❌ *Por muy cansado esté…* ✅ *Por muy cansado que esté…*：别丢掉 que。', '❌ *Por mucha que trabaja…* ✅ *Por mucho que trabaja…*：修饰动词时 mucho 不变。'],
    },
    {
      id: 'b2-a-pesar-de',
      title: 'a pesar de, pese a, si bien, aun así, y eso que',
      titleEs: 'Otros conectores concesivos',
      level: 'B2',
      summary: 'a pesar de / pese a + 名词 / 原形 / que；si bien（书面，+ 陈述式）；aun así（即便如此）；y eso que（口语，+ 陈述式：而且还……呢）。',
      body: `### 各种“尽管”
| 连接词 | 语体 | 例句 |
|---|---|---|
| *a pesar de* + 名词 / 原形 | 通用 | ***A pesar de** la lluvia, salimos.* / ***A pesar de** estar cansada, terminó.* |
| *a pesar de que* + 陈述式 / 虚拟式 | 通用 | ***A pesar de que** llovía, salimos.* |
| *pese a (que)* | 书面、新闻 | ***Pese a** la lesión, ganó la carrera.* |
| *si bien* + 陈述式 | 书面 | ***Si bien** es cierto que hay problemas, la situación ha mejorado.* |
| *aun así* | 通用，放在第二句开头 | *Era difícil. **Aun así**, lo consiguió.* |
| *y eso que* + 陈述式 | 口语，放在句尾 | *Ha suspendido, **y eso que** estudió muchísimo.* |

### y eso que：中文的“……还……呢”
*No ha venido nadie, **y eso que** lo anunciamos en todas partes.*
（一个人都没来，我们还到处宣传了呢。）

### aun + 副动词 = 即使……
***Aun sabiendo** que era peligroso, siguió adelante.*（明知危险，他还是继续往前走。）`,
      examples: [
        ['A pesar de la lluvia, el maratón se celebró.', '尽管下雨，马拉松还是举行了。'],
        ['Pese a la lesión, ganó la medalla de oro.', '尽管受了伤，他还是拿了金牌。'],
        ['Era muy difícil. Aun así, lo consiguió.', '那非常难。即便如此，他还是做到了。'],
        ['Ha suspendido, y eso que estudió muchísimo.', '他挂科了，他还学得那么用功呢。'],
        ['Aun sabiendo que era peligroso, siguió adelante.', '明知危险，他还是继续往前走。'],
      ],
      origin: `**pesar** 本义是“称重量”（拉丁语 *pensare*），后来引申为“让人心里沉重、难过”：*Me pesa haberlo dicho.*（我后悔说了那话。）*a pesar de algo* 原本是“不顾（某人的）难过”，例如 *a pesar mío*（违背我的意愿）。

新闻常用的 **pese a** 来自同一个词，还留下了一句俗语：***pese a quien pese***（不管谁不高兴）。`,
      pitfalls: ['❌ *A pesar que llovía…* ✅ *A pesar de que llovía…*', '❌ *Aún así, lo consiguió.* ✅ *Aun así, lo consiguió.*：这里的 aun 意思是“即使”，不带重音。', '❌ *Y eso que* 放在句首：✅ 放在后半句，*…, y eso que…*'],
    },
  ],
  words: [
    { id: 'superacion', es: 'superación', zh: '克服困难；超越自我', pos: 'n', g: 'f', level: 'B2', tags: ['feel'], ex: ['Es una historia de superación.', '这是一个战胜困难的故事。'] },
    { id: 'obstaculo', es: 'obstáculo', zh: '障碍', pos: 'n', g: 'm', level: 'B2', tags: ['func'], ex: ['Superó todos los obstáculos.', '他克服了所有障碍。'] },
    { id: 'dificultad', es: 'dificultad', zh: '困难', pos: 'n', g: 'f', pl: 'dificultades', level: 'B2', tags: ['func'], ex: ['Tuvimos muchas dificultades al principio.', '一开始我们遇到了很多困难。'] },
    { id: 'reto', es: 'reto', zh: '挑战', pos: 'n', g: 'm', level: 'B2', tags: ['func'], ex: ['Aprender chino es todo un reto.', '学中文真是个挑战。'] },
    { id: 'desafio', es: 'desafío', zh: '挑战', pos: 'n', g: 'm', level: 'B2', tags: ['func'], ex: ['El cambio climático es un desafío global.', '气候变化是全球性的挑战。'] },
    { id: 'constancia', es: 'constancia', zh: '恒心', pos: 'n', g: 'f', level: 'B2', tags: ['feel'], ex: ['Con constancia, todo se consigue.', '只要有恒心，什么都能做到。'] },
    { id: 'perseverancia', es: 'perseverancia', zh: '毅力', pos: 'n', g: 'f', level: 'B2', tags: ['feel'], ex: ['Su perseverancia tuvo recompensa.', '他的坚持得到了回报。'] },
    { id: 'perseverar', es: 'perseverar', zh: '坚持不懈', pos: 'v', level: 'B2', tags: ['verb'], ex: ['Hay que perseverar.', '要坚持不懈。'] },
    { id: 'voluntad', es: 'voluntad', zh: '意志；意愿', pos: 'n', g: 'f', pl: 'voluntades', level: 'B2', tags: ['feel'], ex: ['Lo hizo por voluntad propia.', '他是自愿这么做的。'] },
    { id: 'fuerza-de-voluntad', es: 'fuerza de voluntad', zh: '意志力', pos: 'n', g: 'f', level: 'B2', tags: ['feel'], ex: ['Para dejar de fumar hace falta fuerza de voluntad.', '戒烟需要意志力。'] },
    { id: 'rendirse', es: 'rendirse', zh: '放弃；投降', pos: 'v', level: 'B2', tags: ['verb'], ex: ['¡No te rindas!', '别放弃！'], note: 'e→i：me rindo。' },
    { id: 'lesion', es: 'lesión', zh: '（运动）伤', pos: 'n', g: 'f', pl: 'lesiones', level: 'B2', tags: ['body'], ex: ['Una lesión de rodilla lo dejó fuera del equipo.', '膝伤让他离开了球队。'] },
    { id: 'lesionarse', es: 'lesionarse', zh: '受伤', pos: 'v', level: 'B2', tags: ['verb', 'body'], ex: ['Se lesionó en el último partido.', '他在上一场比赛中受了伤。'] },
    { id: 'recuperacion', es: 'recuperación', zh: '康复；恢复', pos: 'n', g: 'f', level: 'B2', tags: ['body'], ex: ['La recuperación fue muy lenta.', '康复过程很慢。'] },
    { id: 'entrenamiento', es: 'entrenamiento', zh: '训练', pos: 'n', g: 'm', level: 'B2', tags: ['hobby'], ex: ['El entrenamiento empieza a las siete.', '训练七点开始。'] },
    { id: 'competicion', es: 'competición', zh: '比赛；竞争', pos: 'n', g: 'f', pl: 'competiciones', level: 'B2', tags: ['hobby'], ex: ['Es su primera competición internacional.', '这是他第一次参加国际比赛。'] },
    { id: 'campeonato', es: 'campeonato', zh: '锦标赛', pos: 'n', g: 'm', level: 'B2', tags: ['hobby'], ex: ['Ganaron el campeonato de liga.', '他们赢得了联赛冠军。'] },
    { id: 'campeon', es: 'campeón', zh: '冠军', pos: 'n', g: 'm', f: 'campeona', pl: 'campeones', level: 'B2', tags: ['hobby'], ex: ['Es campeona del mundo de natación.', '她是世界游泳冠军。'] },
    { id: 'medalla', es: 'medalla', zh: '奖牌', pos: 'n', g: 'f', level: 'B2', tags: ['hobby'], ex: ['Ganó una medalla de plata.', '他赢得了一枚银牌。'], emoji: '🥇' },
    { id: 'record', es: 'récord', zh: '纪录', pos: 'n', g: 'm', pl: 'récords', level: 'B2', tags: ['hobby'], ex: ['Batió el récord del mundo.', '他打破了世界纪录。'] },
    { id: 'marca', es: 'marca', zh: '品牌；（个人）成绩；记号', pos: 'n', g: 'f', level: 'B2', tags: ['hobby'], ex: ['Hizo su mejor marca personal.', '他创造了个人最好成绩。'] },
    { id: 'atleta', es: 'atleta', zh: '运动员（田径）', pos: 'n', g: 'mf', level: 'B2', tags: ['hobby'], ex: ['Los atletas entrenan seis horas al día.', '运动员每天训练六小时。'] },
    { id: 'deportista', es: 'deportista', zh: '运动员；爱运动的人', pos: 'n', g: 'mf', level: 'B2', tags: ['hobby'], ex: ['Es una deportista de élite.', '她是一名顶尖运动员。'] },
    { id: 'discapacidad', es: 'discapacidad', zh: '残疾', pos: 'n', g: 'f', pl: 'discapacidades', level: 'B2', tags: ['body'], ex: ['Las personas con discapacidad tienen los mismos derechos.', '残障人士享有同等权利。'], note: '尊重的说法：persona con discapacidad。' },
    { id: 'silla-de-ruedas', es: 'silla de ruedas', zh: '轮椅', pos: 'n', g: 'f', level: 'B2', tags: ['body'], ex: ['Juega al baloncesto en silla de ruedas.', '他打轮椅篮球。'] },
    { id: 'ciego', es: 'ciego', zh: '盲的；盲人', pos: 'adj', f: 'ciega', level: 'B2', tags: ['body'], ex: ['Se quedó ciego a los diez años.', '他十岁时失明了。'] },
    { id: 'sordo', es: 'sordo', zh: '聋的；聋人', pos: 'adj', f: 'sorda', level: 'B2', tags: ['body'], ex: ['Mi abuelo está un poco sordo.', '我爷爷有点耳背。'] },
    { id: 'inclusion', es: 'inclusión', zh: '包容；融合', pos: 'n', g: 'f', level: 'B2', tags: ['people'], ex: ['El deporte favorece la inclusión.', '体育有助于社会融合。'] },
    { id: 'barrera', es: 'barrera', zh: '障碍；栏杆', pos: 'n', g: 'f', level: 'B2', tags: ['city'], ex: ['Todavía hay muchas barreras arquitectónicas.', '仍然有很多无障碍设施的问题。'] },
    { id: 'accesible', es: 'accesible', zh: '无障碍的；容易接近的', pos: 'adj', level: 'B2', tags: ['city'], ex: ['El museo es accesible para sillas de ruedas.', '博物馆可供轮椅通行。'] },
    { id: 'adversidad', es: 'adversidad', zh: '逆境', pos: 'n', g: 'f', level: 'B2', tags: ['feel'], ex: ['Supo enfrentarse a la adversidad.', '他懂得面对逆境。'] },
    { id: 'tropiezo', es: 'tropiezo', zh: '绊倒；挫折', pos: 'n', g: 'm', level: 'B2', tags: ['feel'], ex: ['Un tropiezo no es un fracaso.', '一次挫折不等于失败。'] },
    { id: 'caida', es: 'caída', zh: '摔倒；下降', pos: 'n', g: 'f', level: 'B2', tags: ['body'], ex: ['Después de la caída, se levantó y siguió corriendo.', '摔倒之后，他爬起来继续跑。'] },
    { id: 'coraje', es: 'coraje', zh: '勇气；（口语）恼火', pos: 'n', g: 'm', level: 'B2', tags: ['feel'], ex: ['Hace falta mucho coraje para decir la verdad.', '说真话需要很大的勇气。'], ety: '来自法语 courage，源于拉丁语 cor「心」。' },
    { id: 'valentia', es: 'valentía', zh: '勇敢', pos: 'n', g: 'f', level: 'B2', tags: ['feel'], ex: ['Admiro su valentía.', '我钦佩他的勇敢。'] },
    { id: 'admirar', es: 'admirar', zh: '钦佩；欣赏', pos: 'v', level: 'B2', tags: ['verb', 'feel'], ex: ['Admiro mucho a mi abuela.', '我非常敬佩我奶奶。'] },
    { id: 'admiracion', es: 'admiración', zh: '钦佩', pos: 'n', g: 'f', level: 'B2', tags: ['feel'], ex: ['Siento una gran admiración por ella.', '我非常钦佩她。'] },
    { id: 'ejemplo', es: 'ejemplo', zh: '例子；榜样', pos: 'n', g: 'm', level: 'B2', tags: ['func'], ex: ['Es un ejemplo para todos nosotros.', '他是我们所有人的榜样。'] },
    { id: 'inspirar', es: 'inspirar', zh: '启发；吸气', pos: 'v', level: 'B2', tags: ['verb'], ex: ['Su historia me inspiró mucho.', '他的故事给了我很大启发。'] },
    { id: 'inspiracion', es: 'inspiración', zh: '灵感；启发', pos: 'n', g: 'f', level: 'B2', tags: ['feel'], ex: ['Busco inspiración en la naturaleza.', '我在大自然中寻找灵感。'] },
    { id: 'humildad', es: 'humildad', zh: '谦逊', pos: 'n', g: 'f', level: 'B2', tags: ['feel'], ex: ['Habla de sus éxitos con humildad.', '他谈起自己的成就时很谦逊。'] },
    { id: 'sacrificio', es: 'sacrificio', zh: '牺牲', pos: 'n', g: 'm', level: 'B2', tags: ['feel'], ex: ['Ser deportista exige muchos sacrificios.', '当运动员要做出很多牺牲。'] },
    { id: 'sacrificar', es: 'sacrificar', zh: '牺牲', pos: 'v', level: 'B2', tags: ['verb'], ex: ['Sacrificó su juventud para entrenar.', '为了训练，他牺牲了青春。'], note: 'c→qu：sacrifiqué。' },
    { id: 'agotador', es: 'agotador', zh: '让人筋疲力尽的', pos: 'adj', f: 'agotadora', level: 'B2', tags: ['feel'], ex: ['Fue un día agotador.', '那是让人筋疲力尽的一天。'] },
    { id: 'tenaz', es: 'tenaz', zh: '顽强的', pos: 'adj', pl: 'tenaces', level: 'B2', tags: ['feel'], ex: ['Es una mujer muy tenaz.', '她是个非常顽强的女人。'] },
    { id: 'paralimpico', es: 'paralímpico', zh: '残奥会的', pos: 'adj', f: 'paralímpica', level: 'B2', tags: ['hobby'], ex: ['Ganó cinco medallas en los Juegos Paralímpicos.', '他在残奥会上赢得了五枚奖牌。'] },
    { id: 'podio', es: 'podio', zh: '领奖台', pos: 'n', g: 'm', level: 'B2', tags: ['hobby'], ex: ['Subió al podio con lágrimas en los ojos.', '他含着泪水登上领奖台。'] },
    { id: 'a-pesar-de', es: 'a pesar de', zh: '尽管', pos: 'phr', level: 'B2', tags: ['func'], ex: ['A pesar de todo, soy feliz.', '尽管如此，我很幸福。'] },
    { id: 'pese-a', es: 'pese a', zh: '尽管（书面）', pos: 'phr', level: 'B2', tags: ['func'], ex: ['Pese a la crisis, las ventas han subido.', '尽管经济危机，销量还是上涨了。'] },
    { id: 'por-mucho-que', es: 'por mucho que', zh: '不管多么……', pos: 'phr', level: 'B2', tags: ['func'], ex: ['Por mucho que corras, no llegarás a tiempo.', '不管你跑多快，都来不及了。'] },
    { id: 'aun-asi', es: 'aun así', zh: '即便如此', pos: 'phr', level: 'B2', tags: ['func'], ex: ['Aun así, no pienso rendirme.', '即便如此，我也不打算放弃。'] },
    { id: 'y-eso-que', es: 'y eso que', zh: '……还……呢（口语）', pos: 'phr', level: 'B2', tags: ['func'], ex: ['Llegó tarde, y eso que vive al lado.', '他迟到了，他还就住在旁边呢。'] },
    { id: 'si-bien', es: 'si bien', zh: '虽然（书面）', pos: 'phr', level: 'B2', tags: ['func'], ex: ['Si bien es cierto que hay problemas, hemos avanzado.', '虽然确实存在问题，但我们有了进步。'] },
  ],
  sentences: [
    { id: 's1', es: 'Aunque llueve, voy a salir a correr.', zh: '虽然在下雨，我还是要出去跑步。', g: ['b2-aunque'] },
    { id: 's2', es: 'Aunque llueva mañana, el partido se jugará.', zh: '就算明天下雨，比赛也照常进行。', g: ['b2-aunque'], distract: ['llueve'] },
    { id: 's3', es: 'Aunque tuviera dinero, no me compraría ese coche.', zh: '就算我有钱，也不会买那辆车。', g: ['b2-aunque'] },
    { id: 's4', es: 'Aunque me lo hubieras pedido, no habría ido.', zh: '就算你当时求我，我也不会去。', g: ['b2-aunque'] },
    { id: 's5', es: 'Aunque sea difícil, hay que intentarlo.', zh: '就算很难，也得试一试。', g: ['b2-aunque'] },
    { id: 's6', es: 'Por mucho que estudies, no lo aprenderás todo en un mes.', zh: '不管你多用功，一个月也学不完所有东西。', g: ['b2-por-mucho-que'], distract: ['estudias'] },
    { id: 's7', es: 'Por muy cansado que esté, siempre me ayuda.', zh: '不管多累，他总是帮我。', g: ['b2-por-mucho-que'] },
    { id: 's8', es: 'Por más que insistas, no voy a cambiar de opinión.', zh: '不管你怎么坚持，我都不会改主意。', g: ['b2-por-mucho-que'] },
    { id: 's9', es: 'Por más que entrena, no consigue mejorar su marca.', zh: '他再怎么训练，也没能提高成绩。', g: ['b2-por-mucho-que'] },
    { id: 's10', es: 'A pesar de la lluvia, el maratón se celebró.', zh: '尽管下雨，马拉松还是举行了。', g: ['b2-a-pesar-de'] },
    { id: 's11', es: 'Pese a la lesión, ganó la medalla de oro.', zh: '尽管受了伤，他还是拿了金牌。', g: ['b2-a-pesar-de'] },
    { id: 's12', es: 'Era muy difícil. Aun así, lo consiguió.', zh: '那非常难。即便如此，他还是做到了。', g: ['b2-a-pesar-de'] },
    { id: 's13', es: 'Ha suspendido, y eso que estudió muchísimo.', zh: '他挂科了，他还学得那么用功呢。', g: ['b2-a-pesar-de'] },
    { id: 's14', es: 'Aun sabiendo que era peligroso, siguió adelante.', zh: '明知危险，他还是继续往前走。', g: ['b2-a-pesar-de'] },
    { id: 's15', es: '¡No te rindas!', zh: '别放弃！' },
    { id: 's16', es: 'Aprender chino es todo un reto.', zh: '学中文真是个挑战。' },
    { id: 's17', es: 'Batió el récord del mundo.', zh: '他打破了世界纪录。' },
    { id: 's18', es: 'Con constancia, todo se consigue.', zh: '只要有恒心，什么都能做到。' },
    { id: 's19', es: 'Ser deportista exige muchos sacrificios.', zh: '当运动员要做出很多牺牲。' },
    { id: 's20', es: 'Aunque estoy cansado, sigo trabajando.', zh: '虽然我很累，我还在继续工作。', g: ['b2-aunque'], distract: ['pero'] },
    { id: 's21', es: 'A pesar de que llovía, salimos a pasear.', zh: '尽管在下雨，我们还是出去散步了。', g: ['b2-a-pesar-de'] },
    { id: 's22', es: 'Si bien es cierto que hay problemas, hemos avanzado.', zh: '虽然确实存在问题，但我们有了进步。', g: ['b2-a-pesar-de'] },
    { id: 's23', es: 'Por muchas veces que lo intentes, no se abre.', zh: '不管你试多少次，它都打不开。', g: ['b2-por-mucho-que'] },
    { id: 's24', es: 'Admiro mucho su valentía.', zh: '我非常钦佩他的勇敢。' },
    { id: 's25', es: 'Después de la caída, se levantó y siguió corriendo.', zh: '摔倒之后，他爬起来继续跑。' },
  ],
  cloze: [
    { id: 'c1', text: 'Aunque ___ mucho frío ahora, voy a salir.', answers: ['hace'], options: ['hace', 'haga', 'hiciera'], zh: '虽然现在很冷，我还是要出去。', g: ['b2-aunque'], explain: '说的是现在的事实，用陈述式。' },
    { id: 'c2', text: 'Aunque ___ frío mañana, iremos a la montaña.', answers: ['haga'], options: ['haga', 'hace', 'hará'], zh: '就算明天冷，我们也去爬山。', g: ['b2-aunque'] },
    { id: 'c3', text: 'Aunque ___ (yo) millonario, seguiría trabajando.', answers: ['fuera', 'fuese'], hint: 'ser', zh: '就算我是百万富翁，我也会继续工作。', g: ['b2-aunque'] },
    { id: 'c4', text: 'Aunque me lo ___ (tú) antes, no habría podido ayudarte.', answers: ['hubieras dicho', 'hubieses dicho'], hint: 'decir', zh: '就算你早点告诉我，我也帮不了你。', g: ['b2-aunque'] },
    { id: 'c5', text: '—Es muy caro. —Ya, pero aunque ___ caro, lo necesito.', answers: ['sea'], hint: 'ser', zh: '——这个很贵。——是啊，但就算贵我也需要。', g: ['b2-aunque'] },
    { id: 'c6', text: 'Por mucho que ___ (tú), no te creerá.', answers: ['insistas'], hint: 'insistir', zh: '不管你怎么坚持，他都不会信你。', g: ['b2-por-mucho-que'] },
    { id: 'c7', text: 'Por muy difícil que ___, no me voy a rendir.', answers: ['sea'], hint: 'ser', zh: '不管多难，我都不会放弃。', g: ['b2-por-mucho-que'] },
    { id: 'c8', text: 'Por muy temprano que ___ (yo), siempre hay cola.', answers: ['llegue'], hint: 'llegar', zh: '不管我来得多早，总是排着队。', g: ['b2-por-mucho-que'] },
    { id: 'c9', text: 'Por ___ que corras, no lo alcanzarás.', answers: ['más', 'mucho'], options: ['más', 'muy', 'tanto'], zh: '不管你跑得多快，都追不上他。', g: ['b2-por-mucho-que'] },
    { id: 'c10', text: 'Por muy cansada ___ esté, siempre me llama.', answers: ['que'], options: ['que', 'como', 'cuando'], zh: '不管多累，她总会给我打电话。', g: ['b2-por-mucho-que'] },
    { id: 'c11', text: 'A pesar ___ la lluvia, salimos.', answers: ['de'], options: ['de', 'que', 'a'], zh: '尽管下雨，我们还是出去了。', g: ['b2-a-pesar-de'] },
    { id: 'c12', text: 'A pesar de ___ estaba enfermo, fue a trabajar.', answers: ['que'], options: ['que', 'de', 'si'], zh: '尽管病了，他还是去上班了。', g: ['b2-a-pesar-de'] },
    { id: 'c13', text: 'Era muy tarde. Aun ___, decidimos seguir.', answers: ['así'], options: ['así', 'que', 'bien'], zh: '已经很晚了。即便如此，我们决定继续。', g: ['b2-a-pesar-de'] },
    { id: 'c14', text: 'No ha aprobado, y ___ que estudió todo el fin de semana.', answers: ['eso'], options: ['eso', 'esto', 'aun'], zh: '他没考过，他还学了一整个周末呢。', g: ['b2-a-pesar-de'] },
    { id: 'c15', text: '___ la crisis, la empresa ha crecido.', answers: ['Pese a'], options: ['Pese a', 'Aunque', 'Por mucho'], zh: '尽管有经济危机，公司还是发展了。', g: ['b2-a-pesar-de'] },
    { id: 'c16', text: '___ sabiendo la verdad, no dijo nada.', answers: ['Aun'], options: ['Aun', 'Aún', 'Aunque'], zh: '即使知道真相，他也什么都没说。', g: ['b2-a-pesar-de'] },
    { id: 'c17', text: 'Aunque estoy agotada, ___ terminar el informe.', answers: ['voy a'], options: ['voy a', 'pero voy a', 'sin embargo voy a'], zh: '虽然我累坏了，还是要把报告写完。', g: ['b2-aunque'] },
    { id: 'c18', text: '¡No te ___! Ya casi lo tienes.', answers: ['rindas'], hint: 'rendirse', zh: '别放弃！你就快成功了。' },
  ],
  conj: [
    { verbs: ['ser', 'llover', 'costar', 'insistir', 'llegar', 'intentar'], tenses: ['subj'], g: 'b2-aunque' },
    { verbs: ['tener', 'ser', 'poder', 'rendirse', 'vencer'], tenses: ['subjImpf'], g: 'b2-aunque' },
  ],
  dialogues: [
    {
      id: 'b2-u04-d1',
      title: '第一次马拉松 · Mi primera maratón',
      lines: [
        { who: 'Javier', es: '¿Sabes que me he apuntado a la maratón de Valencia?', zh: '你知道吗，我报名了瓦伦西亚马拉松。' },
        { who: 'Mei', es: '¿En serio? Pero si hace un año ni siquiera corrías.', zh: '真的吗？可你一年前连跑步都不跑啊。' },
        { who: 'Javier', es: 'Ya, pero me he propuesto terminarla, aunque tenga que hacer los últimos kilómetros andando.', zh: '是啊，但我下定决心要跑完，哪怕最后几公里得走着。' },
        { who: 'Mei', es: 'Me parece genial. Yo, en cambio, aunque me pagaran, no correría cuarenta y dos kilómetros.', zh: '我觉得太棒了。换作我，就算给我钱，我也不跑四十二公里。' },
        { who: 'Javier', es: '¡Ja, ja! El mes pasado me lesioné el tobillo y pensé en dejarlo. Aun así, seguí entrenando en la piscina.', zh: '哈哈！上个月我扭伤了脚踝，想过放弃。即便如此，我还是在游泳池里继续训练。' },
        { who: 'Mei', es: 'Eso es fuerza de voluntad. ¿Y cómo vas ahora?', zh: '这就是意志力啊。那你现在怎么样？' },
        { who: 'Javier', es: 'Bien, aunque por mucho que entreno, no consigo bajar de las cuatro horas en las pruebas.', zh: '还行，不过我怎么练，测试时都跑不进四小时。' },
        { who: 'Mei', es: 'Por muy lento que vayas, terminarla ya es una victoria. ¡Allí estaré animándote!', zh: '不管你跑得多慢，能跑完就已经是胜利了。我会去给你加油的！' },
      ],
    },
  ],
  readings: [
    {
      id: 'b2-r07',
      level: 'B2',
      title: 'Nadar contra corriente',
      titleZh: '逆流而上',
      topic: '人物',
      paras: [
        [
          ['Cuando Marta tuvo el accidente de moto, tenía diecinueve años y acababa de empezar la carrera de Fisioterapia. Los médicos le dijeron que no volvería a caminar.', '玛尔塔出摩托车事故时十九岁，刚开始读物理治疗专业。医生说她再也不能走路了。'],
          ['«Aunque al principio lo único que quería era quedarme en la cama, mi madre no me dejaba en paz», recuerda riéndose. «Me obligó a ir a la piscina de rehabilitación».', '“虽然一开始我只想躺在床上，可我妈就是不放过我，”她笑着回忆道，“她逼我去康复泳池。”'],
        ],
        [
          ['Allí descubrió que en el agua se sentía libre. Pese a las dificultades y a que nadie en su familia había hecho deporte de competición, empezó a entrenar seis días a la semana.', '在那里，她发现自己在水里感到自由。尽管困难重重，家里也从来没人参加过竞技体育，她还是开始每周训练六天。'],
          ['Los primeros años fueron duros. Por mucho que se esforzaba, siempre llegaba la última. «Y eso que me levantaba a las cinco para entrenar antes de clase», dice.', '最初几年很艰难。不管她怎么努力，总是最后一个到达终点。“我还每天五点起床，课前训练呢，”她说。'],
        ],
        [
          ['Diez años después, Marta ha subido al podio en dos Juegos Paralímpicos y trabaja como fisioterapeuta. Si bien reconoce que ha tenido suerte con su entorno, insiste en que la clave fue no rendirse.', '十年后，玛尔塔已经在两届残奥会上登上领奖台，并且成了一名物理治疗师。虽然她承认自己的周围环境给了她很多帮助，但她坚持说，关键在于不放弃。'],
          ['«Por muy negro que lo veas todo, siempre hay una salida. A veces solo tienes que mirarla desde otro lado de la piscina».', '“不管一切看起来多么黑暗，总有出路。有时候你只是需要从泳池的另一边去看它。”'],
        ],
      ],
      gloss: { Fisioterapia: '物理治疗', 'en paz': '安宁', rehabilitación: '康复', competición: '竞技', 'se esforzaba': '努力', entorno: '周围环境', clave: '关键', salida: '出路' },
      questions: [
        { type: 'mc', q: '谁让玛尔塔开始去游泳池？', options: ['她的医生', '她的妈妈', '她的教练'], answer: 1 },
        { type: 'tf', q: '玛尔塔一开始训练就赢得了比赛。', answer: false, explain: 'Por mucho que se esforzaba, siempre llegaba la última.' },
        { type: 'mc', q: '玛尔塔认为成功的关键是什么？', options: ['运气', '不放弃', '好的教练'], answer: 1 },
      ],
    },
    {
      id: 'b2-r08',
      level: 'B2',
      title: 'El Camino de Santiago: caminar a pesar de todo',
      titleZh: '圣地亚哥之路：无论如何都要走下去',
      topic: '旅行',
      paras: [
        [
          ['Cada año, cientos de miles de personas de todo el mundo recorren a pie alguna de las rutas del Camino de Santiago. La más famosa, el Camino Francés, tiene unos ochocientos kilómetros.', '每年都有来自世界各地的数十万人徒步走圣地亚哥之路的某条路线。最著名的“法国之路”全长约八百公里。'],
          ['Para recibir la Compostela, el certificado oficial, hay que caminar al menos los últimos cien kilómetros.', '要拿到官方证书“朝圣证书”（Compostela），至少要徒步走完最后一百公里。'],
        ],
        [
          ['Los motivos son muy variados. Aunque el origen del Camino es religioso, hoy muchos peregrinos lo hacen por deporte, por cultura o, simplemente, para pensar.', '人们的动机多种多样。虽然这条路起源于宗教，但如今很多朝圣者是为了运动、为了文化，或者只是为了思考。'],
          ['Casi todos coinciden en algo: por muy preparado que estés, habrá días en que te duelan los pies y quieras abandonar.', '几乎所有人都认同一点：不管你准备得多充分，总会有脚疼、想放弃的日子。'],
        ],
        [
          ['«El cuarto día tenía unas ampollas horribles», cuenta Chen, un ingeniero de Shanghái. «Aun así, seguí, y eso que al principio solo quería probar una semana. Al final llegué a Santiago».', '“第四天我脚上起了可怕的水泡，”来自上海的工程师陈说，“即便如此，我还是继续走了，我本来只想试一个星期呢。最后我走到了圣地亚哥。”'],
          ['Quizá por eso el Camino tiene tanto éxito: a pesar del cansancio, enseña que cada paso, por pequeño que sea, te acerca a la meta.', '也许这正是圣地亚哥之路如此受欢迎的原因：尽管很累，它教会人们，每一步不管多小，都让你离目标更近。'],
        ],
      ],
      gloss: { recorren: '走遍', certificado: '证书', motivos: '动机', variados: '多样的', religioso: '宗教的', peregrinos: '朝圣者', coinciden: '意见一致', ampollas: '水泡', meta: '终点；目标' },
      questions: [
        { type: 'mc', q: '要拿到 Compostela 证书，至少要徒步走多少公里？', options: ['50', '100', '800'], answer: 1 },
        { type: 'mc', q: '文章提到的现代朝圣者动机中，不包括哪一项？', options: ['运动', '思考', '工作'], answer: 2 },
        { type: 'tf', q: '陈原本就计划走完全程。', answer: false, explain: 'al principio solo quería probar una semana' },
      ],
    },
  ],
  writing: [{ id: 'w1', prompt: '写一个你或身边的人克服困难的故事（学外语、运动、生病、找工作……）：用到 aunque（陈述式和虚拟式各一次）、por mucho que、a pesar de、aun así 和 y eso que。', words: [130, 220], hints: ['Aunque al principio…, …', 'Por mucho que…, …', 'A pesar de…, …', 'Aun así, … / …, y eso que…'] }],
}
