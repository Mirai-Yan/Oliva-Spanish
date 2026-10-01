import type { Unit } from '../types'

export const u04: Unit = {
  id: 'a2-u04',
  level: 'A2',
  order: 4,
  title: '小时候',
  titleEs: 'Cuando era niño',
  icon: '🧸',
  goals: ['描述小时候的习惯和生活', '用过去未完成时描述过去的人、地方和情况', '用 soler 和 antes / ahora 对比过去和现在'],
  grammar: [
    {
      id: 'a2-imperfecto',
      title: '过去未完成时',
      titleEs: 'El pretérito imperfecto',
      level: 'A2',
      summary: '-ar → -aba，-er / -ir → -ía；只有 ser（era）、ir（iba）、ver（veía）三个不规则。',
      body: `### 构成
| 人称 | hablar | comer | vivir |
|---|---|---|---|
| yo | habl**aba** | com**ía** | viv**ía** |
| tú | habl**abas** | com**ías** | viv**ías** |
| él / ella / usted | habl**aba** | com**ía** | viv**ía** |
| nosotros | habl**ábamos** | com**íamos** | viv**íamos** |
| vosotros | habl**abais** | com**íais** | viv**íais** |
| ellos / ustedes | habl**aban** | com**ían** | viv**ían** |

> yo 和 él 的形式相同，需要时加主语区分。

### 只有三个不规则动词！
| ser | ir | ver |
|---|---|---|
| era, eras, era, éramos, erais, eran | iba, ibas, iba, íbamos, ibais, iban | veía, veías, veía, veíamos… |

### 用法 1：过去的习惯
*De pequeño **jugaba** al fútbol todos los días.*（小时候我每天踢足球。）
常和 *siempre, todos los días, a menudo, a veces, normalmente* 连用。

### 用法 2：描述过去的人、事物、情况
*Mi abuela **era** muy alta y **tenía** el pelo blanco.*（我奶奶个子很高，头发花白。）
*La casa **estaba** cerca del río.*（房子在河边。）

### 用法 3：过去的年龄和时间
*Cuando **tenía** diez años…*（我十岁的时候……）
***Eran** las ocho de la mañana.*（那时是早上八点。）`,
      examples: [
        ['Cuando era niña, vivía en un pueblo.', '我小时候住在一个村子里。'],
        ['Todos los veranos íbamos a la playa.', '每年夏天我们都去海边。'],
        ['Mi abuelo era pescador.', '我爷爷是渔民。'],
        ['Antes no había internet en mi casa.', '以前我家没有网。'],
        ['¿Qué querías ser de mayor?', '你小时候长大想当什么？'],
      ],
      tables: [
        { verbs: ['hablar', 'comer'], tense: 'impf' },
        { verbs: ['ser', 'ir'], tense: 'impf' },
      ],
      origin: `过去未完成时几乎原样来自拉丁语：
- *amabam → amaba*（-ar 动词保留了 b）
- *habebam → había*、*tenebam → tenía*（-er / -ir 动词的 b 在元音之间脱落了）
- *eram → era*、*ibam → iba* ——三个不规则动词其实是“最忠实于拉丁语”的
- *videbam → veía*：*ver* 的古形式是 *veer*，所以留下了一个 e

注意 nosotros 的重音：*hablábamos、comíamos*——重音落在拉丁语原来的位置。`,
      pitfalls: ['-er/-ir 动词写成 -aba：❌ *comaba* ✅ *comía*。', '忘了 nosotros 的重音：❌ *hablabamos* ✅ *hablábamos*。', '❌ *seía* ✅ *era*；❌ *iría*（这是条件式）✅ *iba*。'],
    },
    {
      id: 'a2-soler-antes',
      title: 'soler + 原形；antes 和 ahora',
      titleEs: 'Soler + infinitivo; antes y ahora',
      level: 'A2',
      summary: 'soler + 原形 = 通常、习惯做；solía = 以前常常；ya no = 不再；todavía = 还。',
      body: `### soler + 动词原形
表示 **习惯**，现在时和过去未完成时都很常用：
- *Suelo levantarme a las siete.*（我一般七点起床。）
- *De niño **solía** ir a casa de mis abuelos.*（我小时候常去祖父母家。）
soler 是 o→ue 动词：*suelo, sueles, suele, solemos, soléis, suelen*。

### 对比过去和现在
| 西语 | 中文 |
|---|---|
| **antes** … , **ahora** … | 以前……，现在…… |
| **ya no** + 动词 | 不再…… |
| **todavía** / **aún** + 动词 | 仍然、还…… |
| **de pequeño / de niño** | 小时候 |
| **cuando era joven** | 年轻的时候 |

- *Antes vivía en Pekín, ahora vivo en Madrid.*
- *Antes fumaba, pero **ya no** fumo.*（我以前抽烟，现在不抽了。）
- ***Todavía** tengo mis juguetes de niño.*（我还留着小时候的玩具。）`,
      examples: [
        ['Suelo cenar a las nueve.', '我一般九点吃晚饭。'],
        ['De pequeño solía jugar en la calle.', '我小时候常在街上玩。'],
        ['Antes mi barrio era muy tranquilo, ahora hay mucho tráfico.', '以前我们街区很安静，现在车很多。'],
        ['Ya no vivo con mis padres.', '我不再和父母住了。'],
        ['Mi abuela todavía trabaja en el campo.', '我奶奶还在地里干活。'],
      ],
      tables: [{ verbs: ['soler'], tense: 'pres' }],
      origin: `**soler** 来自拉丁语 *solere*（惯于），英语 *insolent*（傲慢的，原意“不合习惯的”）同源。它是一个 **缺位动词**：没有将来时、条件式和命令式——因为“将会习惯做”在逻辑上很少用。`,
      pitfalls: ['soler 后面变位：❌ *Suelo voy.* ✅ *Suelo ir.*', '❌ *No más fumo.* ✅ *Ya no fumo.*'],
    },
    {
      id: 'a2-habia',
      title: '描述过去：había、estaba、tenía',
      titleEs: 'Describir en pasado',
      level: 'A2',
      summary: 'hay → había（有），está → estaba（在），tiene → tenía（有）：描述过去的场景都用过去未完成时。',
      body: `描述过去的场景时，把现在时“搬”到过去未完成时就行：

| 现在 | 过去 | 例句 |
|---|---|---|
| **hay** | **había** | *En mi pueblo **había** una plaza muy bonita.* |
| **está** | **estaba** | *La escuela **estaba** al lado de la iglesia.* |
| **es** | **era** | *Mi primera maestra **era** muy simpática.* |
| **tiene** | **tenía** | *Mi casa **tenía** un jardín pequeño.* |

### había 和 hay 一样不变
单复数都用 **había**：*Había muchos niños.*（有很多孩子。）——❌ *Habían muchos niños*（口语常见，但标准西语不用）

### 描述人
*Mi abuelo **era** alto y delgado. **Tenía** bigote y **llevaba** siempre un sombrero.*（我爷爷又高又瘦，留着小胡子，总戴着一顶帽子。）`,
      examples: [
        ['En mi clase había treinta niños.', '我们班有三十个孩子。'],
        ['La casa de mis abuelos estaba en el campo.', '我祖父母家在乡下。'],
        ['Mi primer móvil era muy pequeño.', '我的第一部手机很小。'],
        ['Mi padre tenía el pelo largo cuando era joven.', '我爸爸年轻时留长发。'],
        ['No había coches en mi calle.', '我那条街上没有车。'],
      ],
      origin: `**había** 和 **hay** 都来自动词 *haber*。表示“存在”时，*haber* 只用第三人称单数（“无人称”用法），所以复数名词前也说 *había*、*hubo*。很多母语者口语里说 *habían muchos niños*，但 RAE 认为这是不规范的。`,
      pitfalls: ['❌ *Habían muchas personas.* ✅ *Había muchas personas.*', '描述用简单过去时：❌ *Mi casa tuvo un jardín.* ✅ *Mi casa tenía un jardín.*'],
    },
  ],
  words: [
    { id: 'ninez', es: 'niñez', zh: '童年', pos: 'n', g: 'f', level: 'A2', tags: ['people'], ex: ['Tengo buenos recuerdos de mi niñez.', '我对童年有美好的回忆。'] },
    { id: 'de-pequeno', es: 'de pequeño', f: 'de pequeña', zh: '小时候', pos: 'phr', level: 'A2', tags: ['time'], ex: ['De pequeño era muy tímido.', '我小时候很害羞。'] },
    { id: 'juguete', es: 'juguete', zh: '玩具', pos: 'n', g: 'm', level: 'A2', tags: ['hobby'], ex: ['Mi juguete favorito era un coche rojo.', '我最喜欢的玩具是一辆红色小汽车。'], ety: '来自 juego「游戏」。', emoji: '🧸' },
    { id: 'muneca', es: 'muñeca', zh: '娃娃；手腕', pos: 'n', g: 'f', level: 'A2', tags: ['hobby'], ex: ['Mi hermana tenía muchas muñecas.', '我妹妹有很多娃娃。'], emoji: '🪆' },
    { id: 'pelota', es: 'pelota', zh: '球', pos: 'n', g: 'f', level: 'A2', tags: ['hobby'], ex: ['Jugábamos con una pelota en la calle.', '我们在街上玩球。'], emoji: '⚽' },
    { id: 'escondite', es: 'escondite', zh: '捉迷藏；藏身处', pos: 'n', g: 'm', level: 'A2', tags: ['hobby'], ex: ['Jugábamos al escondite en el parque.', '我们在公园里玩捉迷藏。'], ety: '来自 esconder「藏」。' },
    { id: 'recreo', es: 'recreo', zh: '课间休息', pos: 'n', g: 'm', level: 'A2', tags: ['school'], ex: ['En el recreo comíamos un bocadillo.', '课间我们吃三明治。'] },
    { id: 'maestro', es: 'maestro', f: 'maestra', zh: '（小学）老师；大师', pos: 'n', g: 'm', level: 'A2', tags: ['school', 'job'], ex: ['Mi maestra de primaria era muy simpática.', '我的小学老师很和蔼。'], ety: '拉丁语 magister「老师，主人」。英语 master 同源。' },
    { id: 'primaria', es: 'primaria', zh: '小学教育', pos: 'n', g: 'f', level: 'A2', tags: ['school'], ex: ['Estudié la primaria en mi pueblo.', '我在村里上的小学。'] },
    { id: 'travieso', es: 'travieso', f: 'traviesa', zh: '淘气的', pos: 'adj', level: 'A2', tags: ['feel'], ex: ['Era un niño muy travieso.', '我小时候很淘气。'] },
    { id: 'timido', es: 'tímido', f: 'tímida', zh: '害羞的', pos: 'adj', level: 'A2', tags: ['feel'], ex: ['De pequeña era muy tímida.', '我小时候很害羞。'] },
    { id: 'obediente', es: 'obediente', zh: '听话的', pos: 'adj', level: 'A2', tags: ['feel'], ex: ['Mi hermano era más obediente que yo.', '我弟弟比我听话。'] },
    { id: 'soler', es: 'soler', zh: '惯于；通常', pos: 'v', level: 'A2', tags: ['verb', 'time'], ex: ['Suelo ir al trabajo en metro.', '我一般坐地铁上班。'], ety: '拉丁语 solere「惯于」。', note: 'o→ue；缺位动词，没有将来时和命令式。' },
    { id: 'ya-no', es: 'ya no', zh: '不再', pos: 'phr', level: 'A2', tags: ['time'], ex: ['Ya no vivo en Pekín.', '我已经不住在北京了。'] },
    { id: 'mientras', es: 'mientras', zh: '在……的时候；而', pos: 'conj', level: 'A2', tags: ['func'], ex: ['Mi madre cocinaba mientras yo hacía los deberes.', '我写作业的时候，妈妈在做饭。'] },
    { id: 'cuento', es: 'cuento', zh: '故事；童话', pos: 'n', g: 'm', level: 'A2', tags: ['hobby'], ex: ['Mi abuela me contaba cuentos.', '我奶奶给我讲故事。'], ety: '来自 contar「讲述」。' },
    { id: 'contar', es: 'contar', zh: '讲述；数', pos: 'v', level: 'A2', tags: ['verb'], ex: ['Cuéntame una historia.', '给我讲个故事吧。'], ety: '拉丁语 computare「计算」。', note: 'o→ue：cuento, cuentas…' },
    { id: 'granja', es: 'granja', zh: '农场', pos: 'n', g: 'f', level: 'A2', tags: ['animal'], ex: ['Mis abuelos tenían una granja.', '我祖父母有个农场。'], emoji: '🚜' },
    { id: 'vaca', es: 'vaca', zh: '奶牛', pos: 'n', g: 'f', level: 'A2', tags: ['animal'], ex: ['En la granja había vacas y gallinas.', '农场里有奶牛和鸡。'], emoji: '🐄' },
    { id: 'gallina', es: 'gallina', zh: '母鸡', pos: 'n', g: 'f', level: 'A2', tags: ['animal'], ety: '拉丁语 gallina。', emoji: '🐔' },
    { id: 'banarse', es: 'bañarse', zh: '洗澡；游泳', pos: 'v', level: 'A2', tags: ['verb'], ex: ['En verano nos bañábamos en el río.', '夏天我们在河里游泳。'] },
    { id: 'trepar', es: 'trepar', zh: '爬（树等）', pos: 'v', level: 'A2', tags: ['verb'], ex: ['Me encantaba trepar a los árboles.', '我以前特别喜欢爬树。'] },
    { id: 'dibujos-animados', es: 'dibujos animados', zh: '动画片', pos: 'n', g: 'm', level: 'A2', tags: ['hobby'], ex: ['Veía dibujos animados todas las tardes.', '我每天下午看动画片。'] },
    { id: 'dibujar', es: 'dibujar', zh: '画画', pos: 'v', level: 'A2', tags: ['verb', 'hobby'], ex: ['Me gustaba mucho dibujar.', '我以前很喜欢画画。'] },
    { id: 'patio', es: 'patio', zh: '院子；操场', pos: 'n', g: 'm', level: 'A2', tags: ['home', 'school'], ex: ['Jugábamos en el patio del colegio.', '我们在学校操场上玩。'] },
    { id: 'iglesia', es: 'iglesia', zh: '教堂', pos: 'n', g: 'f', level: 'A2', tags: ['city'], ex: ['Había una iglesia en la plaza.', '广场上有一座教堂。'], ety: '希腊语 ekklēsía「集会」。' },
    { id: 'fumar', es: 'fumar', zh: '抽烟', pos: 'v', level: 'A2', tags: ['verb', 'body'], ex: ['Antes fumaba, pero ya no.', '我以前抽烟，现在不抽了。'], ety: '拉丁语 fumare「冒烟」。' },
    { id: 'trafico', es: 'tráfico', zh: '交通（车流）', pos: 'n', g: 'm', level: 'A2', tags: ['city'], ex: ['Hay mucho tráfico por la mañana.', '早上车很多。'] },
    { id: 'tranquilidad', es: 'tranquilidad', zh: '宁静', pos: 'n', g: 'f', level: 'A2', tags: ['feel'], ex: ['Echo de menos la tranquilidad del pueblo.', '我想念村子里的宁静。'] },
    { id: 'echar-de-menos', es: 'echar de menos', zh: '想念', pos: 'phr', level: 'A2', tags: ['feel'], ex: ['Echo de menos a mi familia.', '我想念家人。'], latam: '拉美多说 extrañar。' },
    { id: 'bigote', es: 'bigote', zh: '小胡子', pos: 'n', g: 'm', level: 'A2', tags: ['body'], ex: ['Mi abuelo tenía bigote.', '我爷爷留着小胡子。'] },
    { id: 'barba', es: 'barba', zh: '胡子；下巴', pos: 'n', g: 'f', level: 'A2', tags: ['body'], ex: ['Mi padre lleva barba.', '我爸爸留胡子。'] },
    { id: 'sombrero', es: 'sombrero', zh: '帽子', pos: 'n', g: 'm', level: 'A2', tags: ['clothes'], ex: ['Siempre llevaba un sombrero.', '他总戴着一顶帽子。'], ety: '来自 sombra「阴影」：遮阴的东西。', emoji: '👒' },
    { id: 'cambio', es: 'cambio', zh: '变化；零钱', pos: 'n', g: 'm', level: 'A2', tags: ['func'], ex: ['¡Qué cambio!', '变化真大！'] },
    { id: 'de-mayor', es: 'de mayor', zh: '长大以后', pos: 'phr', level: 'A2', tags: ['time'], ex: ['De mayor quería ser astronauta.', '我小时候想长大后当宇航员。'] },
    { id: 'pescador', es: 'pescador', f: 'pescadora', zh: '渔民', pos: 'n', g: 'm', level: 'A2', tags: ['job'], ex: ['Mi abuelo era pescador.', '我爷爷是渔民。'] },
    { id: 'campesino', es: 'campesino', f: 'campesina', zh: '农民', pos: 'n', g: 'm', level: 'A2', tags: ['job'], ex: ['Mis bisabuelos eran campesinos.', '我的曾祖父母是农民。'] },
  ],
  sentences: [
    { id: 's1', es: 'Cuando era niña, vivía en un pueblo.', zh: '我小时候住在一个村子里。', g: ['a2-imperfecto'], distract: ['fui', 'viví'] },
    { id: 's2', es: 'Todos los veranos íbamos a la playa.', zh: '每年夏天我们都去海边。', g: ['a2-imperfecto'], distract: ['fuimos'] },
    { id: 's3', es: 'Mi abuelo era pescador.', zh: '我爷爷是渔民。', g: ['a2-imperfecto'] },
    { id: 's4', es: 'De pequeño jugaba al fútbol todos los días.', zh: '我小时候每天踢足球。', g: ['a2-imperfecto'] },
    { id: 's5', es: 'Mi madre nos contaba cuentos por la noche.', zh: '妈妈晚上给我们讲故事。', g: ['a2-imperfecto'] },
    { id: 's6', es: '¿Qué querías ser de mayor?', zh: '你小时候长大想当什么？', g: ['a2-imperfecto'] },
    { id: 's7', es: 'Cuando tenía diez años, me encantaba dibujar.', zh: '我十岁的时候特别喜欢画画。', g: ['a2-imperfecto'] },
    { id: 's8', es: 'Veíamos dibujos animados todas las tardes.', zh: '我们每天下午看动画片。', g: ['a2-imperfecto'] },
    { id: 's9', es: 'Suelo levantarme a las siete.', zh: '我一般七点起床。', g: ['a2-soler-antes'] },
    { id: 's10', es: 'De niño solía ir a casa de mis abuelos.', zh: '我小时候常去祖父母家。', g: ['a2-soler-antes'] },
    { id: 's11', es: 'Antes fumaba, pero ya no fumo.', zh: '我以前抽烟，但现在不抽了。', g: ['a2-soler-antes'] },
    { id: 's12', es: 'Ya no vivo con mis padres.', zh: '我不再和父母住了。', g: ['a2-soler-antes'] },
    { id: 's13', es: 'Mi abuela todavía trabaja en el campo.', zh: '我奶奶还在地里干活。', g: ['a2-soler-antes'] },
    { id: 's14', es: 'Antes vivía en Pekín y ahora vivo en Madrid.', zh: '我以前住北京，现在住马德里。', g: ['a2-soler-antes'] },
    { id: 's15', es: 'Echo de menos a mi familia.', zh: '我想念我的家人。', g: ['a2-soler-antes'] },
    { id: 's16', es: 'En mi pueblo había una plaza muy bonita.', zh: '我们村有一个很漂亮的广场。', g: ['a2-habia'], distract: ['habían', 'hay'] },
    { id: 's17', es: 'La escuela estaba al lado de la iglesia.', zh: '学校在教堂旁边。', g: ['a2-habia'] },
    { id: 's18', es: 'Mi casa tenía un jardín pequeño.', zh: '我家有一个小花园。', g: ['a2-habia'] },
    { id: 's19', es: 'Mi abuelo era alto y tenía bigote.', zh: '我爷爷个子高，留着小胡子。', g: ['a2-habia'] },
    { id: 's20', es: 'No había coches en mi calle.', zh: '我那条街上没有车。', g: ['a2-habia'] },
    { id: 's21', es: 'En la granja había vacas y gallinas.', zh: '农场里有奶牛和鸡。', g: ['a2-habia'] },
  ],
  cloze: [
    { id: 'c1', text: 'De pequeño ___ (yo) en un pueblo.', answers: ['vivía'], hint: 'vivir', zh: '我小时候住在一个村子里。', g: ['a2-imperfecto'] },
    { id: 'c2', text: 'Todos los domingos ___ (nosotros) con mis abuelos.', answers: ['comíamos'], hint: 'comer', zh: '每个星期天我们都和祖父母一起吃饭。', g: ['a2-imperfecto'] },
    { id: 'c3', text: 'Mi madre ___ en un hospital.', answers: ['trabajaba'], hint: 'trabajar', zh: '我妈妈以前在医院工作。', g: ['a2-imperfecto'] },
    { id: 'c4', text: 'Cuando ___ niño, me gustaban los dinosaurios.', answers: ['era'], options: ['era', 'fui', 'estaba'], zh: '我小时候喜欢恐龙。', g: ['a2-imperfecto'] },
    { id: 'c5', text: 'Todos los veranos ___ (nosotros) a la playa.', answers: ['íbamos'], hint: 'ir', zh: '每年夏天我们都去海边。', g: ['a2-imperfecto'] },
    { id: 'c6', text: '¿Qué programas ___ (tú) en la tele?', answers: ['veías'], hint: 'ver', zh: '你以前看什么电视节目？', g: ['a2-imperfecto'] },
    { id: 'c7', text: 'Mis hermanos ___ mucho en el patio.', answers: ['jugaban'], hint: 'jugar', zh: '我的兄弟姐妹以前常在院子里玩。', g: ['a2-imperfecto'] },
    { id: 'c8', text: 'Cuando ___ diez años, me mudé a Shanghái.', answers: ['tenía'], options: ['tenía', 'tuve', 'era'], zh: '我十岁时搬到了上海。', g: ['a2-imperfecto'], explain: '过去的年龄用过去未完成时 tenía。' },
    { id: 'c9', text: '___ cenar a las nueve.', hint: '我通常', answers: ['Suelo'], options: ['Suelo', 'Solo', 'Sueño'], zh: '我通常九点吃晚饭。', g: ['a2-soler-antes'] },
    { id: 'c10', text: 'De niña ___ ir al parque con mi abuela.', answers: ['solía'], options: ['solía', 'suelo', 'solí'], zh: '我小时候常和奶奶去公园。', g: ['a2-soler-antes'] },
    { id: 'c11', text: 'Antes vivía en Cantón, pero ___ no vivo allí.', answers: ['ya'], options: ['ya', 'todavía', 'nunca'], zh: '我以前住在广州，但现在不住了。', g: ['a2-soler-antes'] },
    { id: 'c12', text: '¿___ trabajas en ese banco? — Sí, todavía.', answers: ['Todavía'], options: ['Todavía', 'Ya no', 'Antes'], zh: '你还在那家银行工作吗？——是的，还在。', g: ['a2-soler-antes'] },
    { id: 'c13', text: 'En mi clase ___ treinta alumnos.', answers: ['había'], options: ['había', 'habían', 'hay'], zh: '我们班（当时）有三十个学生。', g: ['a2-habia'], explain: '表示存在时 haber 只用单数：había。' },
    { id: 'c14', text: 'La casa ___ cerca del río.', answers: ['estaba'], options: ['estaba', 'era', 'había'], zh: '房子在河边。', g: ['a2-habia'] },
    { id: 'c15', text: 'Mi abuela ___ el pelo blanco.', answers: ['tenía'], hint: 'tener', zh: '我奶奶头发花白。', g: ['a2-habia'] },
    { id: 'c16', text: 'Mi primera profesora ___ muy simpática.', answers: ['era'], options: ['era', 'estaba', 'fue'], zh: '我的第一位老师很和蔼。', g: ['a2-habia'] },
  ],
  conj: [
    { verbs: ['hablar', 'jugar', 'comer', 'vivir', 'tener', 'querer'], tenses: ['impf'], g: 'a2-imperfecto' },
    { verbs: ['ser', 'ir', 'ver'], tenses: ['impf'], g: 'a2-imperfecto' },
  ],
  dialogues: [
    {
      id: 'a2-u04-d1',
      title: '老照片 · Una foto antigua',
      lines: [
        { who: 'Sara', es: '¿Este niño eres tú? ¡Qué gracioso!', zh: '这个小男孩是你吗？好可爱！' },
        { who: 'Chen Hao', es: 'Sí, tenía seis años. Vivíamos en un pueblo cerca de Guilin.', zh: '是的，那时我六岁。我们住在桂林附近的一个村子里。' },
        { who: 'Sara', es: '¿Y qué hacías allí? ¿Te gustaba?', zh: '那你在那儿都做什么？喜欢那里吗？' },
        { who: 'Chen Hao', es: 'Me encantaba. Siempre jugaba con mis primos en el río y trepábamos a los árboles.', zh: '特别喜欢。我总和表兄弟在河边玩，还一起爬树。' },
        { who: 'Sara', es: '¿Eras un niño travieso?', zh: '你小时候淘气吗？' },
        { who: 'Chen Hao', es: '¡Muy travieso! Mi abuela siempre se enfadaba conmigo.', zh: '非常淘气！我奶奶总是生我的气。' },
        { who: 'Sara', es: '¿Todavía vas al pueblo?', zh: '你现在还回村子吗？' },
        { who: 'Chen Hao', es: 'Sí, en Año Nuevo. Pero ahora ya no hay tantos niños.', zh: '回的，过年的时候。不过现在孩子没那么多了。' },
      ],
    },
  ],
  readings: [
    {
      id: 'a2-r07',
      level: 'A2',
      title: 'Los veranos en el pueblo',
      titleZh: '在村里度过的夏天',
      topic: '回忆',
      paras: [
        [
          ['Cuando era pequeña, pasaba todos los veranos en el pueblo de mis abuelos, en Asturias.', '我小时候每年夏天都在阿斯图里亚斯的祖父母家度过。'],
          ['Era un pueblo muy pequeño: había una iglesia, un bar y unas veinte casas.', '那是个很小的村子：有一座教堂、一家小酒吧和大约二十户人家。'],
        ],
        [
          ['Por las mañanas, ayudaba a mi abuelo con las vacas.', '早上我帮爷爷照看奶牛。'],
          ['Por las tardes, mis primos y yo nos bañábamos en el río y jugábamos al escondite hasta la noche.', '下午，我和表兄弟姐妹在河里游泳，玩捉迷藏一直玩到晚上。'],
          ['No teníamos televisión ni móvil, pero nunca nos aburríamos.', '我们没有电视也没有手机，但从来不觉得无聊。'],
        ],
        [
          ['Mi abuela hacía un arroz con leche buenísimo.', '我奶奶做的牛奶米布丁好吃极了。'],
          ['Ahora vivo en Madrid y ya no voy mucho al pueblo, pero echo de menos aquellos veranos.', '现在我住在马德里，不常回村子了，但我很怀念那些夏天。'],
        ],
      ],
      gloss: { pasaba: '度过（过去未完成时）', Asturias: '阿斯图里亚斯（西班牙北部）', unas: '大约', ayudaba: '帮忙', nos: '我们（自反）', ni: '也不', aburríamos: '觉得无聊', 'arroz': '米', buenísimo: '非常好吃的', aquellos: '那些' },
      questions: [
        { type: 'mc', q: '祖父母住在哪里？', options: ['马德里', '阿斯图里亚斯的一个村子', '海边的城市'], answer: 1 },
        { type: 'tf', q: '村子里有很多商店。', answer: false, explain: '只有一座教堂、一家酒吧和大约二十户人家。' },
        { type: 'mc', q: '下午孩子们做什么？', options: ['看电视', '在河里游泳、玩捉迷藏', '帮爷爷干活'], answer: 1 },
        { type: 'tf', q: '作者现在还常回村子。', answer: false, explain: 'Ya no voy mucho al pueblo.' },
      ],
    },
    {
      id: 'a2-r08',
      level: 'A2',
      title: 'Antes y ahora',
      titleZh: '以前和现在',
      topic: '社会变化',
      paras: [
        [
          ['Mi abuelo tiene ochenta años y siempre dice que la vida antes era muy diferente.', '我爷爷八十岁了，他总说以前的生活很不一样。'],
          ['Cuando él era joven, no había internet ni teléfonos móviles.', '他年轻的时候，没有互联网，也没有手机。'],
          ['Para hablar con su novia, le escribía cartas.', '为了和女朋友说话，他给她写信。'],
        ],
        [
          ['La gente solía vivir en el mismo pueblo toda la vida y conocía a todos sus vecinos.', '人们通常一辈子住在同一个村子里，认识所有的邻居。'],
          ['Los niños jugaban en la calle y no veían tanta televisión.', '孩子们在街上玩，不怎么看电视。'],
        ],
        [
          ['Ahora todo es más rápido y más cómodo, pero mi abuelo cree que antes la gente tenía más tiempo para hablar.', '现在一切都更快更方便了，但我爷爷觉得以前人们有更多时间聊天。'],
          ['¿Y tú qué piensas?', '你怎么看？'],
        ],
      ],
      gloss: { dice: '说', diferente: '不同的', cartas: '信', mismo: '同一个', conocía: '认识', vecinos: '邻居们', tanta: '那么多的', cómodo: '方便的', cree: '认为', piensas: '你认为' },
      questions: [
        { type: 'tf', q: '爷爷年轻时用手机给女朋友发消息。', answer: false, explain: 'Le escribía cartas. 他写信。' },
        { type: 'mc', q: '以前的孩子在哪里玩？', options: ['在家看电视', '在街上', '在商场'], answer: 1 },
        { type: 'mc', q: '爷爷认为以前比现在好在哪里？', options: ['东西更便宜', '人们有更多时间聊天', '交通更方便'], answer: 1 },
      ],
    },
  ],
  writing: [{ id: 'w1', prompt: '描述你的童年：你住在哪里、是个什么样的孩子、常做什么、和现在有什么不同。', words: [60, 120], hints: ['Cuando era pequeño/a, vivía en…', 'Era un niño / una niña muy…', 'Todos los días… / Solía…', 'Ahora ya no…'] }],
}
