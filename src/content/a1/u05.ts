import type { Unit } from '../types'

export const u05: Unit = {
  id: 'a1-u05',
  level: 'A1',
  order: 5,
  title: '我的一天',
  titleEs: 'Mi día a día',
  icon: '⏰',
  goals: ['描述日常作息', '用规则动词现在时说“我做……”', '使用自反动词：levantarse、ducharse…', '说时间和星期，表达频率'],
  grammar: [
    {
      id: 'a1-presente',
      title: '规则动词现在时：-ar / -er / -ir',
      titleEs: 'El presente de indicativo regular',
      level: 'A1',
      summary: '去掉 -ar / -er / -ir，加上对应的词尾：hablo, como, vivo…',
      body: `西语动词按不定式词尾分三类。去掉 *-ar / -er / -ir* 得到词根，再加上人称词尾：

| 人称 | hablar 说 | comer 吃 | vivir 住 |
|---|---|---|---|
| yo | habl**o** | com**o** | viv**o** |
| tú | habl**as** | com**es** | viv**es** |
| él / ella / usted | habl**a** | com**e** | viv**e** |
| nosotros | habl**amos** | com**emos** | viv**imos** |
| vosotros | habl**áis** | com**éis** | viv**ís** |
| ellos / ustedes | habl**an** | com**en** | viv**en** |

### 记忆技巧
- 第一人称 **yo** 永远是 **-o**
- -ar 动词的词尾里都是 **a**，-er 和 -ir 动词都是 **e**
- -er 和 -ir 只在 nosotros、vosotros 不同：*comemos / vivimos*、*coméis / vivís*

### 现在时表示什么？
- 习惯、日常：*Trabajo de lunes a viernes.*（我周一到周五上班。）
- 现在的状态：*Vivo en Madrid.*（我住在马德里。）
- 很快要发生的计划：*Mañana ceno con mis padres.*（明天我和父母吃晚饭。）`,
      examples: [
        ['Trabajo en un banco.', '我在银行工作。'],
        ['¿Dónde vives?', '你住在哪儿？'],
        ['Mis padres comen a las dos.', '我父母两点吃午饭。'],
        ['Nosotros estudiamos español.', '我们学西班牙语。'],
        ['¿Bebéis café?', '你们喝咖啡吗？'],
      ],
      tables: [
        { verbs: ['hablar', 'comer', 'vivir'], tense: 'pres' },
      ],
      origin: `西语现在时词尾几乎原封不动地继承自拉丁语：

| 拉丁语 *amare*（爱） | 西语 *amar* |
|---|---|
| *amo* | **amo** |
| *amas* | **amas** |
| *amat* | **ama**（词尾 t 脱落） |
| *amamus* | **amamos** |
| *amatis* | **amáis** |
| *amant* | **aman** |

**vosotros 的词尾为什么是 -áis？** 拉丁语 *-atis* 在古西语里先变成 *-ades*（如 *amades*），后来中间的 d 脱落，变成 *amaes*，最后变成 **amáis**。所以 *-áis、-éis* 的重音符号标出的正是原来那个重读元音。`,
      pitfalls: ['所有人称都用原形：❌ *Yo trabajar en Pekín.* ✅ *Yo trabajo en Pekín.*', '-er 和 -ir 的 nosotros 搞混：❌ *vivemos* ✅ *vivimos*；❌ *comimos*（这是过去时）✅ *comemos*。'],
    },
    {
      id: 'a1-reflexivos',
      title: '自反动词：levantarse, ducharse…',
      titleEs: 'Los verbos reflexivos',
      level: 'A1',
      summary: '动作作用在自己身上时，动词带自反代词 me / te / se / nos / os / se。',
      body: `很多描述日常作息的动词是 **自反动词**（不定式以 *-se* 结尾）：动作作用在主语自己身上。

| 人称 | 代词 | levantarse 起床 |
|---|---|---|
| yo | **me** | me levanto |
| tú | **te** | te levantas |
| él / ella / usted | **se** | se levanta |
| nosotros | **nos** | nos levantamos |
| vosotros | **os** | os levantáis |
| ellos / ustedes | **se** | se levantan |

### 常用自反动词
*levantarse*（起床）、*ducharse*（洗澡）、*lavarse*（洗）、*vestirse*（穿衣服）、*acostarse*（上床睡觉）、*despertarse*（醒来）、*llamarse*（名叫）

### 代词放在哪儿？
- 变位动词 **前面**：*Me ducho por la mañana.*（我早上洗澡。）
- 否定词 no 在代词前面：*No me levanto temprano.*（我不早起。）
- 和不定式连用时可以 **连在后面**：*Voy a ducharme.*（我要去洗澡。）

### 自反和不自反
*Lavo el coche.*（我洗车。）——作用在车上
*Me lavo.*（我洗漱。）——作用在自己身上

> 小心：*acostarse* 是 o→ue（*me acuesto*），*despertarse* 是 e→ie（*me despierto*），*vestirse* 是 e→i（*me visto*）。这些变化在第 6 单元和第 10 单元会细讲，这里先当作固定说法记住。`,
      examples: [
        ['Me levanto a las siete.', '我七点起床。'],
        ['¿A qué hora te acuestas?', '你几点睡觉？'],
        ['Mi hermano se ducha por la noche.', '我弟弟晚上洗澡。'],
        ['Nos vestimos muy rápido.', '我们穿衣服很快。'],
      ],
      tables: [{ verbs: ['levantarse'], tense: 'pres' }],
      origin: `西语的自反代词 **me、te、se、nos、os** 直接来自拉丁语的宾格代词 *me、te、se、nos、vos*。拉丁语也有“把自己……”的说法（*se lavat* 他洗自己），但西语把它大大扩展了，很多动作都用自反形式表达。

**os** 来自 *vos*：古西语说 *levantadvos*（你们起来吧），后来 v 脱落成 *os*。`,
      pitfalls: ['忘了代词：❌ *Levanto a las siete.* ✅ *Me levanto a las siete.*', '代词人称不一致：❌ *Yo se levanto.* ✅ *Yo me levanto.*'],
    },
    {
      id: 'a1-hora',
      title: '时间：¿Qué hora es?',
      titleEs: 'La hora',
      level: 'A1',
      summary: 'Es la una / Son las dos；y cuarto、y media、menos cuarto；“几点做某事”用 a las…',
      body: `### 现在几点？
| 时间 | 西语 |
|---|---|
| 1:00 | **Es la una.** |
| 2:00 | **Son las dos.** |
| 3:05 | Son las tres **y cinco**. |
| 4:15 | Son las cuatro **y cuarto**. |
| 5:30 | Son las cinco **y media**. |
| 6:40 | Son las siete **menos veinte**. |
| 8:45 | Son las nueve **menos cuarto**. |
| 12:00 | Son las doce / **Es mediodía**. |

- 一点用单数 **es la una**，其他用复数 **son las…**
- 过了半点以后，一般说“差几分到下一个钟点”：*las siete menos veinte*（差二十分七点）

### 几点做某事？
用 **a la / a las**：
*¿A qué hora comes? — Como **a las** dos.*（你几点吃午饭？——两点。）

### 上午、下午、晚上
*a las diez **de la mañana***（上午十点）· *a las cinco **de la tarde***（下午五点）· *a las once **de la noche***（晚上十一点）
泛指时用 **por**：*Estudio **por la mañana**.*（我上午学习。）

> 西班牙的作息比中国晚：午饭一般 14:00–15:00，晚饭 21:00 左右。`,
      examples: [
        ['¿Qué hora es? — Son las ocho y media.', '几点了？——八点半。'],
        ['Es la una y cuarto.', '一点一刻。'],
        ['Ceno a las nueve de la noche.', '我晚上九点吃晚饭。'],
        ['La clase empieza a las diez menos cuarto.', '课九点四十五开始。'],
      ],
      origin: `**为什么是 es la una / son las dos？** 因为后面省略了阴性名词 *hora*（小时）：*es la (hora) una*、*son las (horas) dos*。所以时间前面一律用阴性冠词 *la / las*。

**hora** 来自拉丁语 *hora*（时刻），英语 *hour* 同源——拉丁语的 h 在西语里一直不发音。`,
      pitfalls: ['所有时间都用 son：❌ *Son la una.* ✅ *Es la una.*', '漏掉冠词：❌ *Como a dos.* ✅ *Como a las dos.*'],
    },
    {
      id: 'a1-dias',
      title: '星期与频率',
      titleEs: 'Los días de la semana y la frecuencia',
      level: 'A1',
      summary: '星期都是阳性、小写；el lunes = 这个周一，los lunes = 每个周一；siempre / a veces / nunca…',
      body: `| 星期一 | 星期二 | 星期三 | 星期四 | 星期五 | 星期六 | 星期日 |
|---|---|---|---|---|---|---|
| lunes | martes | miércoles | jueves | viernes | sábado | domingo |

- 星期名都是 **阳性**、**小写**
- **el lunes**：（这个）星期一；**los lunes**：每个星期一
  *El sábado voy al cine.*（这周六我去看电影。）
  *Los sábados voy al cine.*（我每周六都去看电影。）
- 不用介词 en：❌ *en lunes* ✅ *el lunes*
- *lunes* 到 *viernes* 单复数同形：*el martes / los martes*

### 频率副词（从多到少）
**siempre**（总是）› **normalmente**（通常）› **a menudo**（经常）› **a veces**（有时）› **casi nunca**（几乎从不）› **nunca**（从不）

- *nunca* 放在动词前：*Nunca como carne.*（我从不吃肉。）
- 放在动词后要加 no：*No como carne nunca.*`,
      examples: [
        ['Los domingos como con mis abuelos.', '每个星期天我和祖父母一起吃饭。'],
        ['El viernes tengo un examen.', '这周五我有个考试。'],
        ['Siempre desayuno café con leche.', '我早饭总是喝牛奶咖啡。'],
        ['A veces estudio en la biblioteca.', '我有时在图书馆学习。'],
        ['Nunca me levanto tarde.', '我从不晚起。'],
      ],
      origin: `西语的星期名几乎都来自拉丁语的 **行星（神明）名**：
- **lunes** ← *(dies) Lunae*，月亮之日
- **martes** ← *Martis*，战神玛尔斯（火星）之日
- **miércoles** ← *Mercurii*，墨丘利（水星）之日
- **jueves** ← *Iovis*，朱庇特（木星）之日
- **viernes** ← *Veneris*，维纳斯（金星）之日
- **sábado** ← 拉丁语 *sabbatum* ← 希伯来语 *šabbāt*（安息日）
- **domingo** ← *(dies) dominicus*，“主的日子”

有趣的是，中文的“星期一（月曜日）”和日语、韩语一样，也是“七曜”（日月火水木金土）体系，和这些拉丁语名字的来源其实是同一套古代天文传统。`,
      pitfalls: ['星期大写：❌ *Lunes* ✅ *lunes*（句首除外）。', '“在星期一”加 en：❌ *en el lunes* ✅ *el lunes*。'],
    },
  ],
  words: [
    { id: 'levantarse', es: 'levantarse', zh: '起床；站起来', pos: 'v', level: 'A1', tags: ['verb', 'time'], ex: ['Me levanto a las siete.', '我七点起床。'], ety: '来自 levantar「抬起」，词根是拉丁语 levare「举起」。英语 elevator 同源。', emoji: '🌅' },
    { id: 'ducharse', es: 'ducharse', zh: '淋浴', pos: 'v', level: 'A1', tags: ['verb'], ex: ['Me ducho por la mañana.', '我早上洗澡。'], ety: '来自 ducha「淋浴」< 法语 douche，再往前是意大利语 doccia「水管」。', emoji: '🚿' },
    { id: 'acostarse', es: 'acostarse', zh: '上床睡觉', pos: 'v', level: 'A1', tags: ['verb', 'time'], ex: ['Me acuesto a las doce.', '我十二点睡觉。'], ety: '来自 costa「侧面，肋」：“侧身躺下”。', note: 'o→ue：me acuesto, te acuestas…' },
    { id: 'despertarse', es: 'despertarse', zh: '醒来', pos: 'v', level: 'A1', tags: ['verb', 'time'], ex: ['Me despierto muy temprano.', '我醒得很早。'], ety: '来自拉丁语 expertus「醒来的」的派生词。', note: 'e→ie：me despierto…' },
    { id: 'desayunar', es: 'desayunar', zh: '吃早饭', pos: 'v', level: 'A1', tags: ['verb', 'food'], ex: ['Desayuno pan con tomate.', '我早饭吃番茄面包。'], ety: 'des-「解除」+ ayuno「斋戒，空腹」：“结束空腹”。英语 breakfast（break + fast）是完全同样的构词！', emoji: '🥐' },
    { id: 'comer', es: 'comer', zh: '吃；吃午饭', pos: 'v', level: 'A1', tags: ['verb', 'food'], ex: ['Comemos a las dos.', '我们两点吃午饭。'], ety: '拉丁语 comedere「吃光」= com-「一起，完全」+ edere「吃」。', note: '在西班牙 comer 也专指“吃午饭”。' },
    { id: 'cenar', es: 'cenar', zh: '吃晚饭', pos: 'v', level: 'A1', tags: ['verb', 'food'], ex: ['¿A qué hora cenáis?', '你们几点吃晚饭？'], ety: '拉丁语 cenare，来自 cena「（罗马人一天的）正餐」。' },
    { id: 'trabajar', es: 'trabajar', zh: '工作', pos: 'v', level: 'A1', tags: ['verb', 'job'], ex: ['Trabajo de nueve a cinco.', '我九点到五点上班。'], ety: '来自通俗拉丁语 tripaliare「用 tripalium（一种三根木桩的刑具）折磨」，词义从“受苦”变成了“劳动”。', emoji: '💼' },
    { id: 'estudiar', es: 'estudiar', zh: '学习', pos: 'v', level: 'A1', tags: ['verb', 'school'], ex: ['Estudio español todos los días.', '我每天学西班牙语。'], ety: '来自 estudio < 拉丁语 studium「热情，努力」。', emoji: '📚' },
    { id: 'vivir', es: 'vivir', zh: '生活；居住', pos: 'v', level: 'A1', tags: ['verb'], ex: ['Vivo en Pekín.', '我住在北京。'], ety: '拉丁语 vivere。英语 vivid、survive 同源。' },
    { id: 'beber', es: 'beber', zh: '喝', pos: 'v', level: 'A1', tags: ['verb', 'food'], ex: ['Bebo mucha agua.', '我喝很多水。'], ety: '拉丁语 bibere。英语 beverage 同源。' },
    { id: 'leer', es: 'leer', zh: '读', pos: 'v', level: 'A1', tags: ['verb', 'school'], ex: ['Leo un libro antes de dormir.', '我睡前读书。'], ety: '拉丁语 legere「收集；阅读」。英语 legend、lecture 同源。' },
    { id: 'escribir', es: 'escribir', zh: '写', pos: 'v', level: 'A1', tags: ['verb', 'school'], ex: ['Escribo un correo a mi profesor.', '我给老师写一封邮件。'], ety: '拉丁语 scribere，词首加了 e（西语词首不能是 s + 辅音）。英语 scribe、script 同源。', note: '过去分词不规则：escrito。' },
    { id: 'llegar', es: 'llegar', zh: '到达', pos: 'v', level: 'A1', tags: ['verb'], ex: ['Llego a casa a las seis.', '我六点到家。'], ety: '拉丁语 plicare「折叠」：水手把帆折起来 → 靠岸 → 到达。pl- 变成了 ll-。' },
    { id: 'empezar', es: 'empezar', zh: '开始', pos: 'v', level: 'A1', tags: ['verb'], ex: ['La clase empieza a las nueve.', '课九点开始。'], ety: 'en- + pieza「一块」：“切下第一块”→ 开始。', note: 'e→ie：empiezo, empiezas…' },
    { id: 'terminar', es: 'terminar', zh: '结束', pos: 'v', level: 'A1', tags: ['verb'], ex: ['Termino de trabajar a las cinco.', '我五点下班。'], ety: '拉丁语 terminare，来自 terminus「界限」。英语 terminal 同源。' },
    { id: 'hora', es: 'hora', zh: '小时；时刻', pos: 'n', g: 'f', level: 'A1', tags: ['time'], ex: ['¿Qué hora es?', '几点了？'], ety: '拉丁语 hora。英语 hour 同源。', emoji: '🕒' },
    { id: 'manana', es: 'mañana', zh: '早上；明天', pos: 'n', g: 'f', level: 'A1', tags: ['time'], ex: ['Por la mañana tomo café.', '我早上喝咖啡。'], ety: '拉丁语 (hora) maneana「早早的时辰」。', note: 'la mañana 是“早上”，副词 mañana 是“明天”。' },
    { id: 'tarde', es: 'tarde', zh: '下午；晚，迟', pos: 'n', g: 'f', level: 'A1', tags: ['time'], ex: ['Por la tarde estudio.', '我下午学习。'], ety: '拉丁语副词 tarde「迟」。', note: '作副词表示“晚，迟”：Llego tarde.（我迟到了。）' },
    { id: 'noche', es: 'noche', zh: '夜晚', pos: 'n', g: 'f', level: 'A1', tags: ['time'], ex: ['Leo por la noche.', '我晚上看书。'], ety: '拉丁语 noctem，ct 变成 ch。英语 night 同源。', emoji: '🌙' },
    { id: 'mediodia', es: 'mediodía', zh: '中午', pos: 'n', g: 'm', level: 'A1', tags: ['time'], ex: ['Comemos a mediodía.', '我们中午吃饭。'], ety: 'medio「一半」+ día「白天」。' },
    { id: 'semana', es: 'semana', zh: '星期，周', pos: 'n', g: 'f', level: 'A1', tags: ['time'], ex: ['Trabajo cinco días a la semana.', '我一周工作五天。'], ety: '拉丁语 septimana「七天」，来自 septem「七」。' },
    { id: 'fin-de-semana', es: 'fin de semana', zh: '周末', pos: 'n', g: 'm', level: 'A1', tags: ['time'], ex: ['El fin de semana descanso.', '周末我休息。'], ety: 'fin「结束」+ de semana「一周的」。' },
    { id: 'lunes', es: 'lunes', zh: '星期一', pos: 'n', g: 'm', pl: 'lunes', level: 'A1', tags: ['time'], ety: '拉丁语 (dies) Lunae「月亮之日」。' },
    { id: 'martes', es: 'martes', zh: '星期二', pos: 'n', g: 'm', pl: 'martes', level: 'A1', tags: ['time'], ety: '拉丁语 (dies) Martis「战神玛尔斯之日」。' },
    { id: 'miercoles', es: 'miércoles', zh: '星期三', pos: 'n', g: 'm', pl: 'miércoles', level: 'A1', tags: ['time'], ety: '拉丁语 (dies) Mercurii「墨丘利之日」。' },
    { id: 'jueves', es: 'jueves', zh: '星期四', pos: 'n', g: 'm', pl: 'jueves', level: 'A1', tags: ['time'], ety: '拉丁语 (dies) Iovis「朱庇特之日」。' },
    { id: 'viernes', es: 'viernes', zh: '星期五', pos: 'n', g: 'm', pl: 'viernes', level: 'A1', tags: ['time'], ety: '拉丁语 (dies) Veneris「维纳斯之日」。' },
    { id: 'sabado', es: 'sábado', zh: '星期六', pos: 'n', g: 'm', level: 'A1', tags: ['time'], ety: '拉丁语 sabbatum < 希伯来语 šabbāt「安息日」。' },
    { id: 'domingo', es: 'domingo', zh: '星期日', pos: 'n', g: 'm', level: 'A1', tags: ['time'], ety: '拉丁语 (dies) dominicus「主的日子」。' },
    { id: 'siempre', es: 'siempre', zh: '总是', pos: 'adv', level: 'A1', tags: ['time', 'func'], ex: ['Siempre llego tarde.', '我总是迟到。'], ety: '拉丁语 semper。' },
    { id: 'nunca', es: 'nunca', zh: '从不', pos: 'adv', level: 'A1', tags: ['time', 'func'], ex: ['Nunca bebo café.', '我从不喝咖啡。'], ety: '拉丁语 numquam「从不」。' },
    { id: 'a-veces', es: 'a veces', zh: '有时', pos: 'phr', level: 'A1', tags: ['time', 'func'], ex: ['A veces ceno en un restaurante.', '我有时在餐馆吃晚饭。'], ety: 'vez「次」< 拉丁语 vicem「轮换」。' },
    { id: 'normalmente', es: 'normalmente', zh: '通常', pos: 'adv', level: 'A1', tags: ['time', 'func'], ex: ['Normalmente me acuesto a las once.', '我通常十一点睡觉。'], ety: 'normal + -mente（副词词尾，来自拉丁语 mente「以……的心态」）。' },
    { id: 'temprano', es: 'temprano', zh: '早', pos: 'adv', level: 'A1', tags: ['time'], ex: ['Me levanto temprano.', '我起得早。'], ety: '拉丁语 temporanus「及时的」，来自 tempus「时间」。' },
    { id: 'despues', es: 'después', zh: '之后', pos: 'adv', level: 'A1', tags: ['time', 'func'], ex: ['Después de cenar, veo la tele.', '吃完晚饭后我看电视。'], ety: 'de + ex + post「在……之后」。' },
    { id: 'antes', es: 'antes', zh: '之前', pos: 'adv', level: 'A1', tags: ['time', 'func'], ex: ['Antes de dormir, leo un poco.', '睡前我读一会儿书。'], ety: '拉丁语 ante「在前」+ 副词词尾 -s。' },
    { id: 'todos-los-dias', es: 'todos los días', zh: '每天', pos: 'phr', level: 'A1', tags: ['time'], ex: ['Estudio español todos los días.', '我每天学西班牙语。'] },
  ],
  sentences: [
    { id: 's1', es: 'Trabajo en un hospital.', zh: '我在医院工作。', alt: ['Yo trabajo en un hospital'], g: ['a1-presente'] },
    { id: 's2', es: '¿Dónde vives?', zh: '你住在哪里？', alt: ['¿Dónde vives tú?', '¿Tú dónde vives?'], g: ['a1-presente'] },
    { id: 's3', es: 'Mis padres comen a las dos.', zh: '我父母两点吃午饭。', g: ['a1-presente', 'a1-hora'] },
    { id: 's4', es: 'Estudiamos español todos los días.', zh: '我们每天学西班牙语。', alt: ['Nosotros estudiamos español todos los días'], g: ['a1-presente'] },
    { id: 's5', es: '¿Bebes café por la mañana?', zh: '你早上喝咖啡吗？', g: ['a1-presente'] },
    { id: 's6', es: 'Mi hermana escribe muy bien.', zh: '我姐姐写得很好。', g: ['a1-presente'] },
    { id: 's7', es: 'Ellos viven en un piso pequeño.', zh: '他们住在一套小公寓里。', alt: ['Viven en un piso pequeño'], g: ['a1-presente'] },
    { id: 's8', es: 'Me levanto a las siete.', zh: '我七点起床。', alt: ['Yo me levanto a las siete'], g: ['a1-reflexivos', 'a1-hora'], distract: ['se', 'levanta'] },
    { id: 's9', es: '¿A qué hora te acuestas?', zh: '你几点睡觉？', g: ['a1-reflexivos'] },
    { id: 's10', es: 'Mi hermano se ducha por la noche.', zh: '我弟弟晚上洗澡。', g: ['a1-reflexivos'], distract: ['me'] },
    { id: 's11', es: 'No me levanto temprano los sábados.', zh: '我周六不早起。', g: ['a1-reflexivos', 'a1-dias'] },
    { id: 's12', es: 'Nos acostamos a las once.', zh: '我们十一点睡觉。', g: ['a1-reflexivos'] },
    { id: 's13', es: '¿Qué hora es?', zh: '几点了？', g: ['a1-hora'] },
    { id: 's14', es: 'Son las ocho y media.', zh: '八点半。', g: ['a1-hora'], distract: ['es'] },
    { id: 's15', es: 'Es la una y cuarto.', zh: '一点一刻。', g: ['a1-hora'], distract: ['son', 'las'] },
    { id: 's16', es: 'La clase empieza a las nueve.', zh: '课九点开始。', g: ['a1-hora'] },
    { id: 's17', es: 'Ceno a las nueve de la noche.', zh: '我晚上九点吃晚饭。', g: ['a1-hora'] },
    { id: 's18', es: 'Son las siete menos cuarto.', zh: '六点四十五。', g: ['a1-hora'] },
    { id: 's19', es: 'Los domingos como con mis abuelos.', zh: '每个星期天我和祖父母吃饭。', g: ['a1-dias'] },
    { id: 's20', es: 'El viernes tengo un examen.', zh: '这周五我有考试。', g: ['a1-dias'], distract: ['en'] },
    { id: 's21', es: 'Siempre desayuno café con leche.', zh: '我早饭总是喝牛奶咖啡。', g: ['a1-dias', 'a1-presente'] },
    { id: 's22', es: 'A veces estudio en la biblioteca.', zh: '我有时在图书馆学习。', g: ['a1-dias'] },
    { id: 's23', es: 'Nunca llego tarde.', zh: '我从不迟到。', g: ['a1-dias'] },
    { id: 's24', es: 'Trabajo de lunes a viernes.', zh: '我周一到周五上班。', g: ['a1-dias'] },
    { id: 's25', es: 'Después de comer, descanso un poco.', zh: '吃完午饭，我休息一会儿。', g: ['a1-presente'] },
  ],
  cloze: [
    { id: 'c1', text: 'Yo ___ en un banco.', answers: ['trabajo'], hint: 'trabajar', zh: '我在银行工作。', g: ['a1-presente'] },
    { id: 'c2', text: '¿Tú ___ en Madrid?', answers: ['vives'], hint: 'vivir', zh: '你住在马德里吗？', g: ['a1-presente'] },
    { id: 'c3', text: 'Ana ___ mucho café.', answers: ['bebe'], hint: 'beber', zh: '安娜喝很多咖啡。', g: ['a1-presente'] },
    { id: 'c4', text: 'Nosotros ___ en un restaurante chino.', answers: ['comemos'], hint: 'comer', zh: '我们在一家中餐馆吃饭。', g: ['a1-presente'] },
    { id: 'c5', text: 'Nosotros ___ cerca de la universidad.', answers: ['vivimos'], hint: 'vivir', zh: '我们住在大学附近。', g: ['a1-presente'], explain: '-ir 动词 nosotros 用 -imos。' },
    { id: 'c6', text: '¿Vosotros ___ inglés?', answers: ['habláis'], hint: 'hablar', zh: '你们说英语吗？', g: ['a1-presente'] },
    { id: 'c7', text: 'Mis amigos ___ muchos libros.', answers: ['leen'], hint: 'leer', zh: '我的朋友们读很多书。', g: ['a1-presente'] },
    { id: 'c8', text: 'Yo ___ levanto a las siete.', answers: ['me'], options: ['me', 'se', 'te'], zh: '我七点起床。', g: ['a1-reflexivos'] },
    { id: 'c9', text: '¿A qué hora ___ duchas?', answers: ['te'], options: ['te', 'se', 'me'], zh: '你几点洗澡？', g: ['a1-reflexivos'] },
    { id: 'c10', text: 'Mis padres ___ acuestan tarde.', answers: ['se'], options: ['se', 'nos', 'os'], zh: '我父母睡得晚。', g: ['a1-reflexivos'] },
    { id: 'c11', text: 'Nosotros nos ___ a las ocho.', answers: ['levantamos'], hint: 'levantarse', zh: '我们八点起床。', g: ['a1-reflexivos'] },
    { id: 'c12', text: '___ la una y media.', answers: ['Es'], options: ['Es', 'Son', 'Está'], zh: '一点半。', g: ['a1-hora'], explain: '一点用单数 es la una。' },
    { id: 'c13', text: '___ las cuatro y cuarto.', answers: ['Son'], options: ['Son', 'Es', 'Están'], zh: '四点一刻。', g: ['a1-hora'] },
    { id: 'c14', text: 'Como ___ las dos.', answers: ['a'], options: ['a', 'en', 'de'], zh: '我两点吃午饭。', g: ['a1-hora'] },
    { id: 'c15', text: 'Son las seis ___ cuarto. (5:45)', answers: ['menos'], options: ['menos', 'y', 'de'], zh: '五点四十五。', g: ['a1-hora'] },
    { id: 'c16', text: 'Estudio por ___ tarde.', answers: ['la'], options: ['la', 'las', 'el'], zh: '我下午学习。', g: ['a1-hora'] },
    { id: 'c17', text: '___ sábados voy al gimnasio.', answers: ['Los'], options: ['Los', 'El', 'En'], zh: '我每周六去健身房。', g: ['a1-dias'], explain: '“每个星期六”用复数冠词 los。' },
    { id: 'c18', text: 'Tengo una reunión ___ martes.', answers: ['el'], options: ['el', 'en', 'en el'], zh: '我（这个）星期二有个会。', g: ['a1-dias'] },
    { id: 'c19', text: '___ como carne: soy vegetariano.', answers: ['Nunca'], options: ['Nunca', 'Siempre', 'A veces'], zh: '我从不吃肉：我是素食者。', g: ['a1-dias'] },
    { id: 'c20', text: 'La clase ___ a las diez.', answers: ['empieza'], options: ['empieza', 'empeza', 'empiezan'], zh: '课十点开始。', g: ['a1-presente'] },
  ],
  conj: [
    { verbs: ['hablar', 'trabajar', 'estudiar', 'cenar', 'llegar'], tenses: ['pres'], g: 'a1-presente' },
    { verbs: ['comer', 'beber', 'leer', 'vivir', 'escribir'], tenses: ['pres'], g: 'a1-presente' },
    { verbs: ['levantarse', 'ducharse'], tenses: ['pres'], g: 'a1-reflexivos' },
  ],
  dialogues: [
    {
      id: 'a1-u05-d1',
      title: '你的作息 · ¿Cómo es tu día?',
      lines: [
        { who: 'Carlos', es: 'Oye, ¿a qué hora te levantas normalmente?', zh: '嘿，你一般几点起床？' },
        { who: 'Xiao Mei', es: 'A las siete. Me ducho, desayuno y voy a clase.', zh: '七点。洗个澡，吃早饭，然后去上课。' },
        { who: 'Carlos', es: '¿A qué hora empiezan tus clases?', zh: '你的课几点开始？' },
        { who: 'Xiao Mei', es: 'A las nueve y terminan a la una y media.', zh: '九点开始，一点半结束。' },
        { who: 'Carlos', es: '¿Y por la tarde?', zh: '那下午呢？' },
        { who: 'Xiao Mei', es: 'Por la tarde estudio en la biblioteca. Los viernes trabajo en una cafetería.', zh: '下午我在图书馆学习。每周五我在一家咖啡馆打工。' },
        { who: 'Carlos', es: '¡Qué día tan largo! ¿Y a qué hora te acuestas?', zh: '一天好漫长啊！那你几点睡觉？' },
        { who: 'Xiao Mei', es: 'A las doce, más o menos.', zh: '大概十二点。' },
      ],
    },
  ],
  readings: [
    {
      id: 'a1-r07',
      level: 'A1',
      title: 'Un día normal de Elena',
      titleZh: '埃莱娜普通的一天',
      topic: '日常作息',
      paras: [
        [
          ['Elena es enfermera y trabaja en un hospital de Valencia.', '埃莱娜是护士，在瓦伦西亚的一家医院工作。'],
          ['De lunes a viernes, se levanta a las seis y media.', '周一到周五，她六点半起床。'],
          ['Se ducha, desayuna un café con tostadas y sale de casa a las siete y cuarto.', '她洗个澡，早饭喝一杯咖啡、吃几片吐司，七点一刻出门。'],
        ],
        [
          ['Empieza a trabajar a las ocho.', '她八点开始上班。'],
          ['Come en el hospital a las dos con sus compañeras.', '两点她和同事们在医院吃午饭。'],
          ['Termina a las tres y media y vuelve a casa en autobús.', '三点半下班，坐公交车回家。'],
        ],
        [
          ['Por la tarde, a veces corre en el parque y a veces lee en el sofá.', '下午她有时去公园跑步，有时在沙发上看书。'],
          ['Cena a las nueve con su novio y se acuesta a las once.', '九点她和男朋友吃晚饭，十一点睡觉。'],
          ['Los fines de semana, nunca se levanta antes de las diez.', '周末她从不在十点前起床。'],
        ],
      ],
      gloss: { tostadas: '吐司（复数）', sale: '出门（salir 第三人称）', compañeras: '女同事们', vuelve: '回来（volver 第三人称）', autobús: '公交车', corre: '跑步（第三人称）', su: '她的', fines: '结束；末（fin 的复数）' },
      questions: [
        { type: 'mc', q: '埃莱娜工作日几点起床？', options: ['6:00', '6:30', '7:15'], answer: 1 },
        { type: 'tf', q: '她在家吃午饭。', answer: false, explain: 'Come en el hospital. 她在医院吃午饭。' },
        { type: 'mc', q: '她怎么回家？', options: ['走路', '坐地铁', '坐公交车'], answer: 2 },
        { type: 'tf', q: '周末她起得很早。', answer: false, explain: 'Nunca se levanta antes de las diez.' },
      ],
    },
    {
      id: 'a1-r08',
      level: 'A1',
      title: 'Horarios españoles',
      titleZh: '西班牙人的作息',
      topic: '文化',
      paras: [
        [
          ['Muchos estudiantes chinos en España tienen la misma sorpresa: ¡los españoles comen muy tarde!', '很多在西班牙的中国学生都有同样的惊讶：西班牙人吃饭好晚！'],
          ['Normalmente desayunan poco: un café y una tostada.', '他们早饭通常吃得很少：一杯咖啡加一片吐司。'],
        ],
        [
          ['A media mañana, muchas personas toman otro café.', '上午过半，很多人还会再喝一杯咖啡。'],
          ['La comida es entre las dos y las tres y media, y es la comida más grande del día.', '午饭在两点到三点半之间，是一天中最丰盛的一顿。'],
        ],
        [
          ['Por la tarde, a las seis, los niños meriendan: un bocadillo o fruta.', '下午六点，孩子们吃下午点心：一个三明治或者水果。'],
          ['Y la cena es a las nueve o a las diez de la noche.', '晚饭在晚上九点或十点。'],
          ['¿Y tú? ¿A qué hora cenas?', '你呢？你几点吃晚饭？'],
        ],
      ],
      gloss: { misma: '同样的', sorpresa: '惊讶', españoles: '西班牙人', desayunan: '吃早饭（他们）', poco: '少', media: '中间的', toman: '喝；吃（他们）', otro: '另一个', comida: '午饭；食物', más: '最；更', meriendan: '吃下午点心', bocadillo: '（西班牙式）三明治', fruta: '水果', cena: '晚饭', cenas: '你吃晚饭' },
      questions: [
        { type: 'tf', q: '西班牙人早饭吃得很多。', answer: false, explain: 'Normalmente desayunan poco.' },
        { type: 'mc', q: '西班牙人一天中最丰盛的一顿是？', options: ['早饭', '午饭', '晚饭'], answer: 1 },
        { type: 'mc', q: '西班牙人一般几点吃晚饭？', options: ['18:00–19:00', '19:00–20:00', '21:00–22:00'], answer: 2 },
      ],
    },
  ],
  writing: [{ id: 'w1', prompt: '描述你普通的一天：几点起床、做什么、几点吃饭、周末和工作日有什么不同。', words: [40, 80], hints: ['Me levanto a las…', 'Por la mañana… / Por la tarde…', 'Los fines de semana…'] }],
}
