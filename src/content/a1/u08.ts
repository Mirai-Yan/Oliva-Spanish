import type { Unit } from '../types'

export const u08: Unit = {
  id: 'a1-u08',
  level: 'A1',
  order: 8,
  title: '空闲时间',
  titleEs: 'Tiempo libre',
  icon: '⚽',
  goals: ['谈论爱好和周末活动', '用 ir 说去哪里，用 ir a + 动词说计划', '描述天气和季节', '说出月份和日期'],
  grammar: [
    {
      id: 'a1-ir',
      title: '动词 ir（去）',
      titleEs: 'El verbo ir',
      level: 'A1',
      summary: 'voy · vas · va · vamos · vais · van；去某地用 ir a + 地点（a + el = al）。',
      body: `| 人称 | ir |
|---|---|
| yo | **voy** |
| tú | **vas** |
| él / ella / usted | **va** |
| nosotros | **vamos** |
| vosotros | **vais** |
| ellos / ustedes | **van** |

### ir a + 地点
- *Voy **a la** playa.*（我去海滩。）
- *Vamos **al** cine.*（我们去电影院。）——**a + el = al**
- *¿**Adónde** vas?*（你去哪儿？）——问“去哪儿”用 *adónde*（或 *a dónde*）

### 交通方式：en / a pie
*Voy **en** metro / autobús / coche / bicicleta.*（我坐地铁 / 公交 / 开车 / 骑车去。）
*Voy **a pie** / **andando**.*（我走路去。）

### vamos：我们走吧！
*¡Vamos!* 也可以表示“走吧！”“加油！”——西班牙球迷常喊 *¡Vamos, España!*`,
      examples: [
        ['¿Adónde vas?', '你去哪儿？'],
        ['Voy al gimnasio tres veces por semana.', '我每周去三次健身房。'],
        ['Los domingos vamos a la montaña.', '我们每个星期天去爬山。'],
        ['Mi hermano va al colegio en autobús.', '我弟弟坐公交车上学。'],
        ['¿Vais a la fiesta?', '你们去聚会吗？'],
      ],
      tables: [{ verbs: ['ir'], tense: 'pres' }],
      origin: `**ir 是三个拉丁语动词拼起来的！**
- 现在时 **voy, vas, va…** 来自拉丁语 *vadere*（走）
- 不定式 **ir** 和将来时 *iré* 来自 *ire*（去）
- 过去时 *fui, fuiste…*（A2 会学）则借用了 *ser* 的过去时，来自 *esse*（是）

这种“一个动词用不同词根”的现象叫 **异根形式（supletismo）**。英语的 *go / went*、中文里没有，但很多语言都有：常用的动词经常这样“拼凑”。`,
      pitfalls: ['忘记缩合：❌ *Voy a el cine.* ✅ *Voy al cine.*', '交通工具用 a：❌ *Voy a metro.* ✅ *Voy en metro.*；但“走路”是 *a pie*。'],
    },
    {
      id: 'a1-ir-a',
      title: 'ir a + 动词原形：打算做……',
      titleEs: 'Ir a + infinitivo',
      level: 'A1',
      summary: '表示计划和马上要发生的事：Voy a estudiar. 时间词：esta tarde, mañana, el fin de semana que viene…',
      body: `**ir**（变位）+ **a** + **动词原形** = 打算、将要：

- *Esta tarde **voy a estudiar**.*（今天下午我要学习。）
- *¿Qué **vas a hacer** el fin de semana?*（你周末打算做什么？）
- *Mañana **vamos a ir** a la playa.*（明天我们要去海滩。）
- *Mira las nubes: **va a llover**.*（看那些云，要下雨了。）

### 常用的将来时间词
| 西语 | 中文 |
|---|---|
| **esta tarde / esta noche** | 今天下午 / 今晚 |
| **mañana** | 明天 |
| **pasado mañana** | 后天 |
| **el fin de semana** | 这个周末 |
| **la semana que viene / la próxima semana** | 下周 |
| **el año que viene** | 明年 |

### 和自反动词连用
代词可以放在 *ir* 前，也可以连在原形后：
*Me voy a duchar.* = *Voy a ducharme.*（我要去洗澡。）`,
      examples: [
        ['¿Qué vas a hacer esta noche?', '你今晚打算做什么？'],
        ['Voy a ver una película.', '我要看一部电影。'],
        ['El sábado vamos a jugar al fútbol.', '星期六我们要去踢足球。'],
        ['El año que viene voy a estudiar en España.', '明年我要去西班牙留学。'],
        ['Creo que va a hacer calor.', '我觉得天会热。'],
      ],
      origin: `“去 + 做某事”表示将来，在很多语言里都很常见：英语 *be going to*、法语 *aller + 动词*，和西语 *ir a* 完全是同一个思路——“我正走向那件事”。在口语中，*ir a* 比 A2 要学的将来时 *estudiaré* 用得更多。`,
      pitfalls: ['漏掉 a：❌ *Voy estudiar.* ✅ *Voy a estudiar.*', '原形也变位：❌ *Voy a estudio.* ✅ *Voy a estudiar.*'],
    },
    {
      id: 'a1-tiempo',
      title: '天气、季节和日期',
      titleEs: 'El tiempo, las estaciones y las fechas',
      level: 'A1',
      summary: '天气用 hace calor / frío / sol / viento、llueve、nieva、está nublado；日期说 el cinco de mayo。',
      body: `### 天气
| 西语 | 中文 |
|---|---|
| ¿Qué tiempo hace? | 天气怎么样？ |
| **Hace** buen / mal tiempo. | 天气好 / 不好。 |
| **Hace** calor / frío. | 热 / 冷。 |
| **Hace** sol / viento. | 晴天 / 有风。 |
| **Llueve.** / Está lloviendo. | 下雨（了）。 |
| **Nieva.** | 下雪。 |
| **Está** nublado. | 多云。 |
| **Hay** niebla / tormenta. | 有雾 / 有暴风雨。 |
| Estamos a 25 grados. | 现在 25 度。 |

> 天气的“热”用 *hace calor*；人觉得热用 *tengo calor*（第 9 单元）。

### 季节
**la primavera**（春）· **el verano**（夏）· **el otoño**（秋）· **el invierno**（冬）
*En verano hace mucho calor en Sevilla.*（塞维利亚夏天很热。）

### 月份（小写）
enero, febrero, marzo, abril, mayo, junio, julio, agosto, septiembre, octubre, noviembre, diciembre

### 日期
- *Hoy es el cinco de mayo.*（今天是五月五日。）
- *Mi cumpleaños es **el** doce **de** octubre.*（我的生日是十月十二日。）
- *¿Qué día es hoy? — Es lunes, tres de marzo.*
- 月份前用 **en**：*en julio*（在七月）；具体日期用 **el**：*el 15 de julio*
- 一号常说 *el uno* 或 *el primero*（拉美更常用 *primero*）`,
      examples: [
        ['¿Qué tiempo hace hoy?', '今天天气怎么样？'],
        ['Hoy hace sol y mucho calor.', '今天晴天，很热。'],
        ['En Harbin nieva mucho en invierno.', '哈尔滨冬天经常下雪。'],
        ['Mi cumpleaños es el veinte de abril.', '我的生日是四月二十日。'],
        ['En agosto voy a la playa.', '八月我去海边。'],
      ],
      origin: `**月份名都来自古罗马历法**：
- **enero** ← *Ianuarius*，门神雅努斯（Janus）之月
- **marzo** ← *Martius*，战神玛尔斯之月
- **julio** ← *Iulius*，以尤利乌斯·恺撒命名；**agosto** ← *Augustus*，以奥古斯都命名
- **septiembre** 到 **diciembre** 原意是“第七月”到“第十月”（*septem* 七、*octo* 八、*novem* 九、*decem* 十）——因为最早的罗马历法从三月开始算！

**hace calor** 为什么用“做”（hacer）？因为这里把“天”当作隐含的主语：“（天）造出了热”。拉丁语和其他罗曼语也有类似说法，法语说 *il fait chaud*。`,
      pitfalls: ['月份大写：❌ *Mayo* ✅ *mayo*。', '天气用 ser / estar：❌ *Es calor.* ✅ *Hace calor.*'],
    },
    {
      id: 'a1-jugar-tocar',
      title: '爱好：jugar, tocar, hacer',
      titleEs: 'Hablar de aficiones',
      level: 'A1',
      summary: '玩游戏 / 运动用 jugar a；演奏乐器用 tocar；hacer deporte / yoga；jugar 是 u→ue。',
      body: `### jugar：u → ue
| yo | tú | él | nosotros | vosotros | ellos |
|---|---|---|---|---|---|
| **jue**go | **jue**gas | **jue**ga | jugamos | jugáis | **jue**gan |

- 玩游戏、做球类运动：**jugar a** + 运动 / 游戏（a + el = al）
  *Juego **al** fútbol / **al** tenis / **a las** cartas.*

### tocar：演奏乐器
*Toco **la** guitarra / **el** piano.*（我弹吉他 / 钢琴。）——中文都说“玩”“打”“弹”，西语只用 *tocar*

### hacer：做（某项运动或活动）
*hacer deporte*（做运动）· *hacer yoga* · *hacer senderismo*（徒步）· *hacer fotos*（拍照）

### 其他常见爱好
*leer*（读书）· *bailar*（跳舞）· *cantar*（唱歌）· *nadar*（游泳）· *correr*（跑步）· *viajar*（旅行）· *ver series*（看剧）· *salir con amigos*（和朋友出去玩）

### 谈论爱好
- *¿Qué haces en tu tiempo libre?*（你空闲时做什么？）
- *Me gusta mucho bailar.* / *Me encanta viajar.*`,
      examples: [
        ['Juego al baloncesto los martes.', '我每周二打篮球。'],
        ['Mi hermana toca el piano muy bien.', '我姐姐钢琴弹得很好。'],
        ['¿Haces deporte?', '你做运动吗？'],
        ['En mi tiempo libre leo y veo series.', '我空闲时看书和追剧。'],
        ['Los niños juegan en el parque.', '孩子们在公园里玩。'],
      ],
      tables: [{ verbs: ['jugar'], tense: 'pres' }],
      origin: `**jugar** 来自拉丁语 *iocari*（开玩笑），名词 *iocus*（玩笑）→ 西语 *juego*（游戏）、英语 *joke*（玩笑）。*jugar* 是西语里唯一一个 **u→ue** 的动词，因为它在古西语里曾是 *jogar*（o→ue 的规律），后来词根变成了 u，但变位依然保留了 *ue*。

**tocar** 原本是“碰、敲”（拟声词 *toc*），从“敲击乐器”发展出“演奏”的意思。英语 *touch* 同源。`,
      pitfalls: ['乐器用 jugar：❌ *Juego la guitarra.* ✅ *Toco la guitarra.*', '运动漏掉 a / al：❌ *Juego fútbol.* ✅ *Juego al fútbol.*（拉美常说 *juego fútbol*）'],
      latam: '在很多拉美国家，*jugar fútbol*（不加 al）也很常见。',
    },
  ],
  words: [
    { id: 'ir', es: 'ir', zh: '去', pos: 'v', level: 'A1', tags: ['verb', 'travel'], ex: ['Voy al cine.', '我去电影院。'], ety: '由拉丁语 vadere（voy…）、ire（ir）和 esse（fui…）三个动词拼成。', note: '不规则：voy, vas, va, vamos, vais, van' },
    { id: 'hacer', es: 'hacer', zh: '做；制作', pos: 'v', level: 'A1', tags: ['verb'], ex: ['¿Qué haces?', '你在做什么？'], ety: '拉丁语 facere：f 变成了 h。英语 fact、factory 同源。', note: '第一人称 hago；过去分词 hecho。' },
    { id: 'jugar', es: 'jugar', zh: '玩；（打球等）运动', pos: 'v', level: 'A1', tags: ['verb', 'hobby'], ex: ['Juego al tenis.', '我打网球。'], ety: '拉丁语 iocari「开玩笑」。英语 joke 同源。', note: 'u→ue：juego, juegas…；jugar a + 运动' },
    { id: 'tocar', es: 'tocar', zh: '演奏；触碰', pos: 'v', level: 'A1', tags: ['verb', 'hobby'], ex: ['Toco la guitarra.', '我弹吉他。'], ety: '来自拟声词 toc「敲」。英语 touch 同源。' },
    { id: 'bailar', es: 'bailar', zh: '跳舞', pos: 'v', level: 'A1', tags: ['verb', 'hobby'], ex: ['Me encanta bailar salsa.', '我超爱跳萨尔萨舞。'], ety: '来自古奥克语 balar，源于晚期拉丁语 ballare。英语 ballet、ball（舞会）同源。', emoji: '💃' },
    { id: 'cantar', es: 'cantar', zh: '唱歌', pos: 'v', level: 'A1', tags: ['verb', 'hobby'], ex: ['Canto en un coro.', '我在合唱团唱歌。'], ety: '拉丁语 cantare。英语 chant 同源。', emoji: '🎤' },
    { id: 'nadar', es: 'nadar', zh: '游泳', pos: 'v', level: 'A1', tags: ['verb', 'hobby'], ex: ['Nado en verano.', '我夏天游泳。'], ety: '拉丁语 natare。', emoji: '🏊' },
    { id: 'correr', es: 'correr', zh: '跑步', pos: 'v', level: 'A1', tags: ['verb', 'hobby'], ex: ['Corro en el parque.', '我在公园跑步。'], ety: '拉丁语 currere。英语 current、course 同源。', emoji: '🏃' },
    { id: 'viajar', es: 'viajar', zh: '旅行', pos: 'v', level: 'A1', tags: ['verb', 'travel'], ex: ['Me encanta viajar.', '我很喜欢旅行。'], ety: '来自 viaje「旅行」< 加泰罗尼亚语 viatge < 拉丁语 viaticum「路费」。', emoji: '✈️' },
    { id: 'ver', es: 'ver', zh: '看；看见', pos: 'v', level: 'A1', tags: ['verb'], ex: ['Veo la tele por la noche.', '我晚上看电视。'], ety: '拉丁语 videre：d 脱落。英语 video、vision 同源。', note: '第一人称 veo；过去分词 visto。' },
    { id: 'salir', es: 'salir', zh: '出去；离开', pos: 'v', level: 'A1', tags: ['verb'], ex: ['Salgo con mis amigos los viernes.', '我每周五和朋友出去玩。'], ety: '拉丁语 salire「跳」。', note: '第一人称 salgo。' },
    { id: 'tiempo-libre', es: 'tiempo libre', zh: '空闲时间', pos: 'n', g: 'm', level: 'A1', tags: ['hobby'], ex: ['¿Qué haces en tu tiempo libre?', '你空闲时做什么？'], ety: 'tiempo < 拉丁语 tempus；libre < liber「自由的」。' },
    { id: 'deporte', es: 'deporte', zh: '运动', pos: 'n', g: 'm', level: 'A1', tags: ['hobby'], ex: ['Hago deporte tres veces por semana.', '我每周运动三次。'], ety: '来自古西语 deportarse「娱乐，消遣」。英语 sport 也来自同源的古法语 desport（消遣）。', emoji: '🏅' },
    { id: 'futbol', es: 'fútbol', zh: '足球', pos: 'n', g: 'm', level: 'A1', tags: ['hobby'], ex: ['El fútbol es muy popular en España.', '足球在西班牙很受欢迎。'], ety: '来自英语 football。', latam: '墨西哥等地也写 futbol（不带重音）。', emoji: '⚽' },
    { id: 'baloncesto', es: 'baloncesto', zh: '篮球', pos: 'n', g: 'm', level: 'A1', tags: ['hobby'], ex: ['Juego al baloncesto con mis amigos.', '我和朋友们打篮球。'], ety: 'balón「球」+ cesto「篮子」，是对英语 basketball 的仿译。', latam: '拉美多说 básquetbol 或 básquet。', emoji: '🏀' },
    { id: 'tenis', es: 'tenis', zh: '网球', pos: 'n', g: 'm', level: 'A1', tags: ['hobby'], ex: ['¿Juegas al tenis?', '你打网球吗？'], emoji: '🎾' },
    { id: 'guitarra', es: 'guitarra', zh: '吉他', pos: 'n', g: 'f', level: 'A1', tags: ['hobby'], ex: ['Toco la guitarra española.', '我弹西班牙吉他。'], ety: '经阿拉伯语 qīṯāra 来自希腊语 kithára（一种弦乐器）。', emoji: '🎸' },
    { id: 'piano', es: 'piano', zh: '钢琴', pos: 'n', g: 'm', level: 'A1', tags: ['hobby'], ex: ['Mi hija toca el piano.', '我女儿弹钢琴。'], ety: '来自意大利语 pianoforte「弱—强」，因为它能弹出强弱变化。', emoji: '🎹' },
    { id: 'musica', es: 'música', zh: '音乐', pos: 'n', g: 'f', level: 'A1', tags: ['hobby'], ex: ['Me gusta la música pop.', '我喜欢流行音乐。'], ety: '希腊语 mousikḗ「缪斯女神的（艺术）」。', emoji: '🎵' },
    { id: 'cine', es: 'cine', zh: '电影院；电影', pos: 'n', g: 'm', level: 'A1', tags: ['hobby', 'city'], ex: ['¿Vamos al cine?', '我们去看电影吧？'], ety: 'cinematógrafo 的缩写，来自希腊语 kínēma「运动」。', emoji: '🎬' },
    { id: 'pelicula', es: 'película', zh: '电影', pos: 'n', g: 'f', level: 'A1', tags: ['hobby'], ex: ['Es una película muy buena.', '这是一部很好的电影。'], ety: '拉丁语 pellicula「小块皮，薄膜」→ 胶片 → 电影。', emoji: '🎞️' },
    { id: 'serie', es: 'serie', zh: '连续剧；系列', pos: 'n', g: 'f', level: 'A1', tags: ['hobby'], ex: ['Veo una serie española.', '我在看一部西班牙剧。'], ety: '拉丁语 series「一串」。', emoji: '📺' },
    { id: 'playa', es: 'playa', zh: '海滩', pos: 'n', g: 'f', level: 'A1', tags: ['travel', 'weather'], ex: ['En verano vamos a la playa.', '夏天我们去海边。'], ety: '晚期拉丁语 plagia「海岸」。', emoji: '🏖️' },
    { id: 'montana', es: 'montaña', zh: '山', pos: 'n', g: 'f', level: 'A1', tags: ['travel', 'weather'], ex: ['Vamos a la montaña el domingo.', '星期天我们去爬山。'], ety: '通俗拉丁语 montanea，来自 mons「山」。', emoji: '⛰️' },
    { id: 'fiesta', es: 'fiesta', zh: '聚会；节日', pos: 'n', g: 'f', level: 'A1', tags: ['hobby'], ex: ['El sábado hay una fiesta en mi casa.', '周六我家有个聚会。'], ety: '拉丁语 festa「节日」。英语 feast、festival 同源。', emoji: '🎉' },
    { id: 'tiempo', es: 'tiempo', zh: '时间；天气', pos: 'n', g: 'm', level: 'A1', tags: ['weather', 'time'], ex: ['¿Qué tiempo hace?', '天气怎么样？'], ety: '拉丁语 tempus：重读的 e 变成 ie。英语 temporary 同源。', note: '既指“时间”，也指“天气”。' },
    { id: 'calor', es: 'calor', zh: '热', pos: 'n', g: 'm', level: 'A1', tags: ['weather'], ex: ['Hace mucho calor.', '很热。'], ety: '拉丁语 calor。英语 calorie 同源。', note: '阳性：el calor。', emoji: '🥵' },
    { id: 'frio', es: 'frío', f: 'fría', zh: '冷的；寒冷', pos: 'adj', level: 'A1', tags: ['weather'], ex: ['Hace frío en invierno.', '冬天冷。'], ety: '拉丁语 frigidus。英语 frigid、fridge 同源。', emoji: '🥶' },
    { id: 'sol', es: 'sol', zh: '太阳；阳光', pos: 'n', g: 'm', level: 'A1', tags: ['weather'], ex: ['Hoy hace sol.', '今天是晴天。'], ety: '拉丁语 sol。英语 solar 同源。', emoji: '☀️' },
    { id: 'llover', es: 'llover', zh: '下雨', pos: 'v', level: 'A1', tags: ['weather', 'verb'], ex: ['Hoy llueve mucho.', '今天雨很大。'], ety: '拉丁语 pluere / plovere，pl- 变成 ll-。', note: '只用第三人称：llueve。', emoji: '🌧️' },
    { id: 'nevar', es: 'nevar', zh: '下雪', pos: 'v', level: 'A1', tags: ['weather', 'verb'], ex: ['En Harbin nieva mucho.', '哈尔滨经常下雪。'], ety: '来自 nieve「雪」< 拉丁语 nivem。', note: '只用第三人称：nieva。', emoji: '❄️' },
    { id: 'primavera', es: 'primavera', zh: '春天', pos: 'n', g: 'f', level: 'A1', tags: ['weather', 'time'], ex: ['En primavera hay muchas flores.', '春天有很多花。'], ety: '拉丁语 primo vere「在春天之初」。', emoji: '🌸' },
    { id: 'verano', es: 'verano', zh: '夏天', pos: 'n', g: 'm', level: 'A1', tags: ['weather', 'time'], ex: ['En verano hace calor.', '夏天很热。'], ety: '通俗拉丁语 veranum (tempus)「春末的时节」。', emoji: '🌞' },
    { id: 'otono', es: 'otoño', zh: '秋天', pos: 'n', g: 'm', level: 'A1', tags: ['weather', 'time'], ex: ['Me gusta el otoño.', '我喜欢秋天。'], ety: '拉丁语 autumnus。英语 autumn 同源。', emoji: '🍂' },
    { id: 'invierno', es: 'invierno', zh: '冬天', pos: 'n', g: 'm', level: 'A1', tags: ['weather', 'time'], ex: ['En invierno nieva.', '冬天下雪。'], ety: '拉丁语 (tempus) hibernum「冬天的时节」。英语 hibernate 同源。', emoji: '⛄' },
    { id: 'enero', es: 'enero', zh: '一月', pos: 'n', g: 'm', level: 'A1', tags: ['time'], ety: '拉丁语 Ianuarius「门神雅努斯之月」。' },
    { id: 'febrero', es: 'febrero', zh: '二月', pos: 'n', g: 'm', level: 'A1', tags: ['time'], ety: '拉丁语 Februarius，来自古罗马的净化节。' },
    { id: 'marzo', es: 'marzo', zh: '三月', pos: 'n', g: 'm', level: 'A1', tags: ['time'], ety: '拉丁语 Martius「战神玛尔斯之月」。' },
    { id: 'abril', es: 'abril', zh: '四月', pos: 'n', g: 'm', level: 'A1', tags: ['time'], ety: '拉丁语 Aprilis。' },
    { id: 'mayo', es: 'mayo', zh: '五月', pos: 'n', g: 'm', level: 'A1', tags: ['time'], ety: '拉丁语 Maius，来自女神迈亚（Maia）。' },
    { id: 'junio', es: 'junio', zh: '六月', pos: 'n', g: 'm', level: 'A1', tags: ['time'], ety: '拉丁语 Iunius，来自女神朱诺（Juno）。' },
    { id: 'julio', es: 'julio', zh: '七月', pos: 'n', g: 'm', level: 'A1', tags: ['time'], ety: '拉丁语 Iulius，以尤利乌斯·恺撒命名。' },
    { id: 'agosto', es: 'agosto', zh: '八月', pos: 'n', g: 'm', level: 'A1', tags: ['time'], ety: '拉丁语 Augustus，以奥古斯都皇帝命名。' },
    { id: 'septiembre', es: 'septiembre', zh: '九月', pos: 'n', g: 'm', level: 'A1', tags: ['time'], ety: '拉丁语 September「第七月」（古罗马历从三月开始）。', note: '也可以写作 setiembre。' },
    { id: 'octubre', es: 'octubre', zh: '十月', pos: 'n', g: 'm', level: 'A1', tags: ['time'], ety: '拉丁语 October「第八月」。' },
    { id: 'noviembre', es: 'noviembre', zh: '十一月', pos: 'n', g: 'm', level: 'A1', tags: ['time'], ety: '拉丁语 November「第九月」。' },
    { id: 'diciembre', es: 'diciembre', zh: '十二月', pos: 'n', g: 'm', level: 'A1', tags: ['time'], ety: '拉丁语 December「第十月」。' },
  ],
  sentences: [
    { id: 's1', es: '¿Adónde vas?', zh: '你去哪儿？', alt: ['¿A dónde vas?'], g: ['a1-ir'] },
    { id: 's2', es: 'Voy al cine con mis amigos.', zh: '我和朋友们去看电影。', g: ['a1-ir'], distract: ['a el'] },
    { id: 's3', es: 'Los domingos vamos a la montaña.', zh: '我们每个星期天去爬山。', g: ['a1-ir'] },
    { id: 's4', es: 'Mi hermano va al colegio en autobús.', zh: '我弟弟坐公交车上学。', g: ['a1-ir'] },
    { id: 's5', es: 'Voy a la universidad a pie.', zh: '我走路去大学。', g: ['a1-ir'] },
    { id: 's6', es: '¿Qué vas a hacer el fin de semana?', zh: '你周末打算做什么？', g: ['a1-ir-a'] },
    { id: 's7', es: 'Esta tarde voy a estudiar.', zh: '今天下午我要学习。', alt: ['Voy a estudiar esta tarde'], g: ['a1-ir-a'], distract: ['estudio'] },
    { id: 's8', es: 'Mañana vamos a ir a la playa.', zh: '明天我们要去海边。', g: ['a1-ir-a'] },
    { id: 's9', es: 'Va a llover.', zh: '要下雨了。', g: ['a1-ir-a'] },
    { id: 's10', es: 'El año que viene voy a viajar a México.', zh: '明年我要去墨西哥旅行。', g: ['a1-ir-a'] },
    { id: 's11', es: '¿Qué tiempo hace hoy?', zh: '今天天气怎么样？', g: ['a1-tiempo'] },
    { id: 's12', es: 'Hoy hace sol y mucho calor.', zh: '今天晴天，很热。', g: ['a1-tiempo'], distract: ['es', 'está'] },
    { id: 's13', es: 'En invierno nieva mucho.', zh: '冬天经常下雪。', g: ['a1-tiempo'] },
    { id: 's14', es: 'Está nublado y hace frío.', zh: '多云，很冷。', g: ['a1-tiempo'] },
    { id: 's15', es: 'Mi cumpleaños es el doce de octubre.', zh: '我的生日是十月十二日。', g: ['a1-tiempo'] },
    { id: 's16', es: 'En agosto voy de vacaciones.', zh: '八月我去度假。', g: ['a1-tiempo'] },
    { id: 's17', es: 'Me gusta mucho la primavera.', zh: '我很喜欢春天。', g: ['a1-tiempo'] },
    { id: 's18', es: 'Juego al fútbol los sábados.', zh: '我每周六踢足球。', g: ['a1-jugar-tocar'], distract: ['toco'] },
    { id: 's19', es: 'Mi hermana toca el piano.', zh: '我姐姐弹钢琴。', g: ['a1-jugar-tocar'], distract: ['juega'] },
    { id: 's20', es: '¿Haces deporte?', zh: '你做运动吗？', g: ['a1-jugar-tocar'] },
    { id: 's21', es: '¿Qué haces en tu tiempo libre?', zh: '你空闲时做什么？', g: ['a1-jugar-tocar'] },
    { id: 's22', es: 'Me encanta bailar y cantar.', zh: '我超爱跳舞和唱歌。', g: ['a1-jugar-tocar'] },
    { id: 's23', es: 'Los niños juegan en el parque.', zh: '孩子们在公园里玩。', g: ['a1-jugar-tocar'] },
  ],
  cloze: [
    { id: 'c1', text: 'Yo ___ al gimnasio los lunes.', answers: ['voy'], hint: 'ir', zh: '我每周一去健身房。', g: ['a1-ir'] },
    { id: 'c2', text: '¿Adónde ___ (vosotros) este verano?', answers: ['vais'], hint: 'ir', zh: '你们今年夏天去哪儿？', g: ['a1-ir'] },
    { id: 'c3', text: 'Mis padres ___ a la playa en agosto.', answers: ['van'], hint: 'ir', zh: '我父母八月去海边。', g: ['a1-ir'] },
    { id: 'c4', text: 'Vamos ___ cine esta noche.', answers: ['al'], options: ['al', 'a el', 'en el'], zh: '我们今晚去电影院。', g: ['a1-ir'] },
    { id: 'c5', text: 'Voy al trabajo ___ metro.', answers: ['en'], options: ['en', 'a', 'por'], zh: '我坐地铁上班。', g: ['a1-ir'] },
    { id: 'c6', text: 'Esta noche voy ___ ver una película.', answers: ['a'], options: ['a', 'de', '—'], zh: '今晚我要看电影。', g: ['a1-ir-a'] },
    { id: 'c7', text: '¿Qué ___ a hacer mañana?', answers: ['vas'], options: ['vas', 'va', 'voy'], zh: '你明天打算做什么？', g: ['a1-ir-a'] },
    { id: 'c8', text: 'Mira las nubes: va a ___.', answers: ['llover'], options: ['llover', 'llueve', 'lluvia'], zh: '看那些云，要下雨了。', g: ['a1-ir-a'] },
    { id: 'c9', text: 'Nosotros ___ a estudiar en España el año que viene.', answers: ['vamos'], hint: 'ir', zh: '明年我们要去西班牙读书。', g: ['a1-ir-a'] },
    { id: 'c10', text: 'Hoy ___ mucho calor.', answers: ['hace'], options: ['hace', 'es', 'está'], zh: '今天很热。', g: ['a1-tiempo'] },
    { id: 'c11', text: 'En invierno ___ mucho en Harbin.', answers: ['nieva'], options: ['nieva', 'neva', 'hace nieve'], zh: '哈尔滨冬天经常下雪。', g: ['a1-tiempo'] },
    { id: 'c12', text: 'Hoy ___ nublado.', answers: ['está'], options: ['está', 'hace', 'es'], zh: '今天多云。', g: ['a1-tiempo'] },
    { id: 'c13', text: 'Mi cumpleaños es ___ tres de mayo.', answers: ['el'], options: ['el', 'en', 'en el'], zh: '我的生日是五月三日。', g: ['a1-tiempo'] },
    { id: 'c14', text: 'Siempre voy a Sevilla ___ abril.', answers: ['en'], options: ['en', 'el', 'a'], zh: '我总是在四月去塞维利亚。', g: ['a1-tiempo'] },
    { id: 'c15', text: 'Mi hijo ___ al tenis los jueves.', answers: ['juega'], hint: 'jugar', zh: '我儿子每周四打网球。', g: ['a1-jugar-tocar'] },
    { id: 'c16', text: 'Nosotros ___ al baloncesto.', answers: ['jugamos'], hint: 'jugar', zh: '我们打篮球。', g: ['a1-jugar-tocar'], explain: 'nosotros 不变：jugamos。' },
    { id: 'c17', text: 'Mi novio ___ la guitarra.', answers: ['toca'], options: ['toca', 'juega', 'hace'], zh: '我男朋友弹吉他。', g: ['a1-jugar-tocar'] },
    { id: 'c18', text: '¿___ deporte todos los días?', answers: ['Haces'], options: ['Haces', 'Juegas', 'Tocas'], zh: '你每天运动吗？', g: ['a1-jugar-tocar'] },
  ],
  conj: [
    { verbs: ['ir'], tenses: ['pres'], g: 'a1-ir' },
    { verbs: ['jugar'], tenses: ['pres'], g: 'a1-jugar-tocar' },
  ],
  dialogues: [
    {
      id: 'a1-u08-d1',
      title: '周末计划 · Planes para el fin de semana',
      lines: [
        { who: 'Sofía', es: '¿Qué vas a hacer este fin de semana?', zh: '这个周末你打算做什么？' },
        { who: 'Hao', es: 'El sábado voy a jugar al baloncesto con unos amigos. ¿Y tú?', zh: '星期六我要和几个朋友打篮球。你呢？' },
        { who: 'Sofía', es: 'Voy a ir a la montaña, pero el tiempo no es muy bueno.', zh: '我要去爬山，但天气不太好。' },
        { who: 'Hao', es: 'Sí, dicen que va a llover el domingo.', zh: '是啊，听说星期天要下雨。' },
        { who: 'Sofía', es: 'Entonces, ¿vamos al cine el domingo?', zh: '那我们星期天去看电影吧？' },
        { who: 'Hao', es: '¡Buena idea! Hay una película española nueva.', zh: '好主意！有一部新的西班牙电影。' },
        { who: 'Sofía', es: 'Perfecto. ¿A las seis en la puerta del cine?', zh: '太好了。六点在电影院门口见？' },
        { who: 'Hao', es: 'Vale, hasta el domingo.', zh: '好的，星期天见。' },
      ],
    },
  ],
  readings: [
    {
      id: 'a1-r13',
      level: 'A1',
      title: 'Un verano en Galicia',
      titleZh: '在加利西亚的夏天',
      topic: '旅行与天气',
      paras: [
        [
          ['Este verano voy a pasar dos semanas en Galicia, en el noroeste de España.', '今年夏天我要在西班牙西北部的加利西亚待两个星期。'],
          ['En Galicia el verano no es muy caluroso: normalmente estamos a veinticinco grados.', '加利西亚的夏天不太热：通常二十五度左右。'],
          ['Pero a veces llueve, ¡incluso en agosto!', '但有时候会下雨，甚至在八月！'],
        ],
        [
          ['Voy a ir con mi amiga Laura.', '我要和朋友劳拉一起去。'],
          ['Vamos a visitar Santiago de Compostela y vamos a comer mucho marisco.', '我们要去参观圣地亚哥-德孔波斯特拉，还要吃很多海鲜。'],
          ['También vamos a ir a la playa, pero el agua del mar está muy fría.', '我们还要去海边，不过海水很凉。'],
        ],
        [
          ['Laura toca la gaita, un instrumento típico de Galicia.', '劳拉会吹风笛，这是加利西亚的传统乐器。'],
          ['¡Va a ser un viaje muy divertido!', '这一定会是一次很有趣的旅行！'],
        ],
      ],
      gloss: { pasar: '度过', noroeste: '西北', caluroso: '炎热的', estamos: '（气温）在', grados: '度', incluso: '甚至', visitar: '参观', marisco: '海鲜', mar: '海', gaita: '风笛', instrumento: '乐器', típico: '典型的，传统的', viaje: '旅行', divertido: '有趣的' },
      questions: [
        { type: 'mc', q: '加利西亚在西班牙的哪个方向？', options: ['东南', '西北', '中部'], answer: 1 },
        { type: 'tf', q: '加利西亚的夏天非常热。', answer: false, explain: 'El verano no es muy caluroso.' },
        { type: 'mc', q: 'Laura 会演奏什么乐器？', options: ['吉他', '钢琴', '风笛'], answer: 2 },
        { type: 'tf', q: '那里的海水很暖和。', answer: false, explain: 'El agua del mar está muy fría.' },
      ],
    },
    {
      id: 'a1-r14',
      level: 'A1',
      title: 'El tiempo libre de los españoles',
      titleZh: '西班牙人的空闲时间',
      topic: '爱好',
      paras: [
        [
          ['¿Qué hacen los españoles en su tiempo libre?', '西班牙人空闲时做什么？'],
          ['Muchos salen con sus amigos: van a bares, a restaurantes o pasean por la ciudad.', '很多人和朋友出去：去酒吧、餐馆，或者在城里散步。'],
        ],
        [
          ['El fútbol es el deporte más popular.', '足球是最受欢迎的运动。'],
          ['Mucha gente juega al fútbol o ve los partidos en la tele.', '很多人踢足球或者在电视上看比赛。'],
          ['También hay muchas personas que corren o van en bicicleta.', '也有很多人跑步或骑自行车。'],
        ],
        [
          ['Los domingos por la tarde, muchas familias dan un paseo y toman un helado.', '星期天下午，很多家庭去散步、吃冰淇淋。'],
          ['Y tú, ¿qué haces en tu tiempo libre?', '那你呢？你空闲时做什么？'],
        ],
      ],
      gloss: { hacen: '（他们）做', salen: '（他们）出去', pasean: '散步（他们）', popular: '受欢迎的', partidos: '比赛', que: '……的（关系词）', bicicleta: '自行车', dan: '（他们）给；dar un paseo 散步', paseo: '散步' },
      questions: [
        { type: 'mc', q: '西班牙最受欢迎的运动是？', options: ['篮球', '网球', '足球'], answer: 2 },
        { type: 'tf', q: '很多西班牙人空闲时和朋友出去。', answer: true },
        { type: 'mc', q: '星期天下午很多家庭做什么？', options: ['在家看电视', '散步、吃冰淇淋', '去健身房'], answer: 1 },
      ],
    },
  ],
  writing: [{ id: 'w1', prompt: '写一写你的爱好和这个周末的计划，再说说你最喜欢的季节和那时候的天气。', words: [40, 80], hints: ['En mi tiempo libre…', 'Este fin de semana voy a…', 'Mi estación favorita es… porque hace…'] }],
}
