import type { Unit } from '../types'

export const u02: Unit = {
  id: 'a2-u02',
  level: 'A2',
  order: 2,
  title: '人生故事',
  titleEs: 'Biografías',
  icon: '📜',
  goals: ['用简单过去时讲述过去发生的事', '用 ayer、el año pasado、hace… 等说明时间', '读出年份和日期', '讲述一个人的生平'],
  grammar: [
    {
      id: 'a2-indefinido',
      title: '简单过去时（规则动词）',
      titleEs: 'El pretérito indefinido: verbos regulares',
      level: 'A2',
      summary: '-ar：-é, -aste, -ó, -amos, -asteis, -aron；-er / -ir：-í, -iste, -ió, -imos, -isteis, -ieron。',
      body: `**简单过去时**（*pretérito indefinido*）表示在 **已经结束的时间** 里完成的动作。

| 人称 | hablar | comer | vivir |
|---|---|---|---|
| yo | habl**é** | com**í** | viv**í** |
| tú | habl**aste** | com**iste** | viv**iste** |
| él / ella / usted | habl**ó** | com**ió** | viv**ió** |
| nosotros | habl**amos** | com**imos** | viv**imos** |
| vosotros | habl**asteis** | com**isteis** | viv**isteis** |
| ellos / ustedes | habl**aron** | com**ieron** | viv**ieron** |

### 注意重音符号
第一、第三人称单数的重音在 **词尾**，一定要写：
*hablo*（我说）↔ *habló*（他说了）；*hable*（虚拟式）↔ *hablé*（我说了）

### nosotros 和现在时一样
-ar 和 -ir 动词的 nosotros 形式与现在时相同：*hablamos、vivimos*——靠时间词区分。

### 拼写变化（为了保持读音）
| 词尾 | yo 形式 | 例 |
|---|---|---|
| -car | c → **qu** | *buscar → busqué*、*tocar → toqué* |
| -gar | g → **gu** | *llegar → llegué*、*jugar → jugué* |
| -zar | z → **c** | *empezar → empecé* |
| 元音 + -er / -ir | i → **y**（第三人称） | *leer → leyó, leyeron*、*oír → oyó* |`,
      examples: [
        ['Ayer trabajé hasta las nueve.', '我昨天工作到九点。'],
        ['¿Qué comiste anoche?', '你昨晚吃了什么？'],
        ['Mis padres vivieron en Cantón diez años.', '我父母在广州住过十年。'],
        ['Llegué a España en 2023.', '我 2023 年到的西班牙。'],
        ['¿Leíste el mensaje? — Sí, lo leí ayer.', '你看了消息吗？——看了，昨天看的。'],
      ],
      tables: [{ verbs: ['hablar', 'comer', 'vivir'], tense: 'pret' }],
      origin: `西语的简单过去时直接来自 **拉丁语的完成时**：
- *amavi → amé*、*amavit → amó*（-avit → -aut → -ó）
- *amaverunt → amaron*

拉丁语完成时本来就是“已完成的过去”，而现在完成时（*he amado*）是后来新造的。所以在西班牙，*indefinido* 用于“和现在没关系、已经结束的时间”，*perfecto* 用于“和现在有关的时间”——两个时态各有分工。`,
      pitfalls: ['漏写重音：❌ *Ayer hablo con ella.*（变成了现在时）✅ *Ayer hablé con ella.*', '❌ *buscé* ✅ *busqué*；❌ *llegé* ✅ *llegué*；❌ *empezé* ✅ *empecé*。', '❌ *leió* ✅ *leyó*。'],
    },
    {
      id: 'a2-marcadores',
      title: '过去的时间词：ayer, el año pasado, hace…',
      titleEs: 'Marcadores temporales del pasado',
      level: 'A2',
      summary: '结束的时间用简单过去时：ayer, anoche, el lunes pasado, en 2010, hace dos años…；hoy、esta semana 用现在完成时。',
      body: `### 用简单过去时（时间已经结束）
| 西语 | 中文 |
|---|---|
| **ayer / anteayer** | 昨天 / 前天 |
| **anoche** | 昨晚 |
| **el lunes pasado** | 上周一 |
| **la semana / el mes / el año pasado** | 上周 / 上个月 / 去年 |
| **en 2015 / en verano / en mayo** | 在 2015 年 / 在夏天 / 在五月 |
| **hace dos días / hace un año** | 两天前 / 一年前 |
| **el otro día** | 前几天 |

### 用现在完成时（时间还没结束）
*hoy, esta mañana, esta semana, este año, últimamente*

| 对比 | |
|---|---|
| *Esta semana **he ido** al cine.* | 这周我去看了电影。（这周还没过完） |
| *La semana pasada **fui** al cine.* | 上周我去看了电影。（上周已结束） |

### hace + 时间：……之前
*Llegué a Madrid **hace** tres meses.*（我三个月前到的马德里。）
注意：中文是“三个月 **前**”，西语是“**hace** 三个月”，hace 放在时间前面。

### 叙述顺序
**primero**（首先）→ **luego / después**（然后）→ **más tarde**（后来）→ **al final / finalmente**（最后）`,
      examples: [
        ['Anoche cené con mis amigos.', '我昨晚和朋友吃了晚饭。'],
        ['El año pasado viajamos a Perú.', '去年我们去秘鲁旅行了。'],
        ['Empecé a estudiar español hace dos años.', '我两年前开始学西班牙语。'],
        ['Primero desayuné, luego salí de casa.', '我先吃了早饭，然后出了门。'],
        ['Hoy he hablado con Ana, pero ayer no hablé con ella.', '今天我和安娜说话了，但昨天没有。'],
      ],
      origin: `- **ayer** 来自拉丁语 *heri*（昨天）。
- **anoche** = *a* + *noche*，“在（昨天的）夜里”。
- **hace dos años** 字面是“（时间）做了两年”：动词 *hacer* 在这里表示时间的流逝，所以永远用第三人称单数 *hace*。`,
      latam: '在大部分拉美国家，*hoy* 和 *esta semana* 里的事也常用简单过去时：*Hoy fui al cine.*',
      pitfalls: ['❌ *Hace dos años que llegué*（可以，但更常说）✅ *Llegué hace dos años.*', '和 ayer 连用现在完成时：❌ *Ayer he comido paella.* ✅ *Ayer comí paella.*（西班牙标准）'],
    },
    {
      id: 'a2-anios',
      title: '年份、日期和生平',
      titleEs: 'Años, fechas y biografías',
      level: 'A2',
      summary: '年份按普通数字读：1998 = mil novecientos noventa y ocho；2024 = dos mil veinticuatro。生平常用 nacer, estudiar, casarse, morir…',
      body: `### 年份怎么读
年份当作普通数字读，不像英语那样两位两位读：
| 年份 | 西语 |
|---|---|
| 1492 | mil cuatrocientos noventa y dos |
| 1998 | mil novecientos noventa y ocho |
| 2008 | dos mil ocho |
| 2024 | dos mil veinticuatro |

- “在某年”用 **en**：*en 1998*
- 完整日期：*el 12 de octubre de 1492*
- 世纪用罗马数字：*el siglo XXI*（读作 *veintiuno*）

### 讲生平常用的动词
*nacer*（出生）· *crecer*（长大）· *estudiar* · *terminar la carrera*（大学毕业）· *empezar a trabajar* · *conocer a*（认识某人）· *casarse con*（和……结婚）· *tener hijos* · *mudarse a*（搬到）· *jubilarse*（退休）· *morir*（去世）

### 时间段
- **durante** + 时间：*Vivió en París durante diez años.*（他在巴黎住了十年。）
- **de … a …** / **desde … hasta …**：*Trabajó allí de 1990 a 2005.*`,
      examples: [
        ['Nací en 2001 en Hangzhou.', '我 2001 年出生在杭州。'],
        ['Mis abuelos se casaron en 1975.', '我祖父母 1975 年结的婚。'],
        ['Colón llegó a América en 1492.', '哥伦布 1492 年到达美洲。'],
        ['Vivió en Francia durante treinta años.', '他在法国住了三十年。'],
        ['Se jubiló a los sesenta y cinco años.', '他六十五岁退休了。'],
      ],
      origin: `**siglo**（世纪）来自拉丁语 *saeculum*（一代人的时间、时代），英语 *secular*（世俗的）原意是“属于这个时代的”。

**nacer**（出生）来自通俗拉丁语 *nascere*，英语 *native、nation、nature* 都是它的亲戚——“出生的地方 / 生来的样子”。`,
      pitfalls: ['年份两位两位读：❌ *diecinueve noventa y ocho* ✅ *mil novecientos noventa y ocho*。', '❌ *en el 1998*（口语中有人说，但标准是）✅ *en 1998*。'],
    },
  ],
  words: [
    { id: 'nacer', es: 'nacer', zh: '出生', pos: 'v', level: 'A2', tags: ['verb', 'people'], ex: ['Nací en Shanghái.', '我出生在上海。'], ety: '通俗拉丁语 nascere。英语 native、nation 同源。', note: '第一人称现在时 nazco。' },
    { id: 'crecer', es: 'crecer', zh: '长大；增长', pos: 'v', level: 'A2', tags: ['verb'], ex: ['Crecí en un pueblo pequeño.', '我在一个小村子里长大。'], ety: '拉丁语 crescere。英语 increase 同源。' },
    { id: 'casarse', es: 'casarse', zh: '结婚', pos: 'v', level: 'A2', tags: ['verb', 'family'], ex: ['Se casaron en 2015.', '他们 2015 年结婚了。'], ety: '来自 casa「家」：成家。', note: '和某人结婚：casarse con alguien。' },
    { id: 'divorciarse', es: 'divorciarse', zh: '离婚', pos: 'v', level: 'A2', tags: ['verb', 'family'], ex: ['Mis tíos se divorciaron hace años.', '我叔叔阿姨几年前离婚了。'] },
    { id: 'mudarse', es: 'mudarse', zh: '搬家', pos: 'v', level: 'A2', tags: ['verb', 'home'], ex: ['Nos mudamos a Valencia en 2020.', '我们 2020 年搬到了瓦伦西亚。'], ety: '拉丁语 mutare「改变」。英语 mutation 同源。' },
    { id: 'dejar', es: 'dejar', zh: '离开；放下；允许', pos: 'v', level: 'A2', tags: ['verb'], ex: ['Dejó su trabajo para viajar.', '他辞了工作去旅行。'], note: 'dejar de + 原形 = 停止做某事。' },
    { id: 'enamorarse', es: 'enamorarse', zh: '爱上', pos: 'v', level: 'A2', tags: ['verb', 'feel'], ex: ['Se enamoró de una chica argentina.', '他爱上了一个阿根廷女孩。'], ety: 'en- + amor「爱」。' },
    { id: 'pintar', es: 'pintar', zh: '画；涂', pos: 'v', level: 'A2', tags: ['verb', 'hobby'], ex: ['Picasso pintó el Guernica en 1937.', '毕加索 1937 年画了《格尔尼卡》。'], ety: '通俗拉丁语 pinctare，来自 pingere「画」。英语 paint 同源。', emoji: '🎨' },
    { id: 'cumplir', es: 'cumplir', zh: '满（岁）；履行', pos: 'v', level: 'A2', tags: ['verb'], ex: ['Ayer cumplí veinte años.', '我昨天满二十岁。'], ety: '拉丁语 complere「填满」。英语 complete 同源。' },
    { id: 'jubilarse', es: 'jubilarse', zh: '退休', pos: 'v', level: 'A2', tags: ['verb', 'job'], ex: ['Mi padre se jubiló el año pasado.', '我爸爸去年退休了。'], ety: '拉丁语 iubilare「欢呼」——退休是值得欢呼的事！' },
    { id: 'graduarse', es: 'graduarse', zh: '毕业', pos: 'v', level: 'A2', tags: ['verb', 'school'], ex: ['Me gradué en Derecho en 2022.', '我 2022 年法学专业毕业。'], note: '重音：me gradúo（现在时）。' },
    { id: 'publicar', es: 'publicar', zh: '出版；发布', pos: 'v', level: 'A2', tags: ['verb'], ex: ['Publicó su primera novela a los veinte años.', '他二十岁出版了第一部小说。'] },
    { id: 'inventar', es: 'inventar', zh: '发明；编造', pos: 'v', level: 'A2', tags: ['verb'], ex: ['¿Quién inventó el teléfono?', '谁发明了电话？'] },
    { id: 'premio', es: 'premio', zh: '奖', pos: 'n', g: 'm', level: 'A2', tags: ['job'], ex: ['Ganó el Premio Nobel en 1982.', '他 1982 年获得了诺贝尔奖。'], ety: '拉丁语 praemium「奖赏」。英语 premium 同源。', emoji: '🏆' },
    { id: 'vida', es: 'vida', zh: '生活；生命', pos: 'n', g: 'f', level: 'A2', tags: ['people'], ex: ['Tuvo una vida muy interesante.', '他的一生很精彩。'], ety: '拉丁语 vita。英语 vital 同源。' },
    { id: 'infancia', es: 'infancia', zh: '童年', pos: 'n', g: 'f', level: 'A2', tags: ['people'], ex: ['Pasó su infancia en el campo.', '他在乡下度过了童年。'], ety: '拉丁语 infantia，原意“不会说话的时期”。' },
    { id: 'juventud', es: 'juventud', zh: '青春；青年时代', pos: 'n', g: 'f', level: 'A2', tags: ['people'], ex: ['En su juventud fue futbolista.', '他年轻时是足球运动员。'] },
    { id: 'guerra', es: 'guerra', zh: '战争', pos: 'n', g: 'f', level: 'A2', tags: ['people'], ex: ['La guerra civil española empezó en 1936.', '西班牙内战 1936 年爆发。'], ety: '日耳曼语 *werra「混乱」。英语 war 同源。' },
    { id: 'siglo', es: 'siglo', zh: '世纪', pos: 'n', g: 'm', level: 'A2', tags: ['time'], ex: ['Vivimos en el siglo XXI.', '我们生活在 21 世纪。'], ety: '拉丁语 saeculum「一代人；时代」。' },
    { id: 'epoca', es: 'época', zh: '时代；时期', pos: 'n', g: 'f', level: 'A2', tags: ['time'], ex: ['En aquella época no había internet.', '那个时候还没有互联网。'], ety: '希腊语 epokhḗ「停顿」。' },
    { id: 'historia', es: 'historia', zh: '历史；故事', pos: 'n', g: 'f', level: 'A2', tags: ['school'], ex: ['Me encanta la historia de España.', '我很喜欢西班牙历史。'], ety: '希腊语 historía「调查，叙述」。' },
    { id: 'pintor', es: 'pintor', f: 'pintora', zh: '画家', pos: 'n', g: 'm', level: 'A2', tags: ['job'], ex: ['Velázquez fue un pintor muy famoso.', '委拉斯开兹是一位非常有名的画家。'] },
    { id: 'escritor', es: 'escritor', f: 'escritora', zh: '作家', pos: 'n', g: 'm', level: 'A2', tags: ['job'], ex: ['Es mi escritor favorito.', '他是我最喜欢的作家。'] },
    { id: 'cantante', es: 'cantante', zh: '歌手', pos: 'n', g: 'mf', level: 'A2', tags: ['job'], ex: ['Shakira es una cantante colombiana.', '夏奇拉是哥伦比亚歌手。'] },
    { id: 'actor', es: 'actor', f: 'actriz', zh: '演员', pos: 'n', g: 'm', level: 'A2', tags: ['job'], ex: ['Penélope Cruz es una actriz española.', '佩内洛普·克鲁兹是西班牙女演员。'], note: '阴性 actriz，复数 actrices。' },
    { id: 'cientifico', es: 'científico', f: 'científica', zh: '科学家', pos: 'n', g: 'm', level: 'A2', tags: ['job'], ex: ['Fue una científica muy importante.', '她是一位非常重要的科学家。'] },
    { id: 'carrera', es: 'carrera', zh: '（大学）专业；职业生涯；赛跑', pos: 'n', g: 'f', level: 'A2', tags: ['school', 'job'], ex: ['Terminé la carrera en 2020.', '我 2020 年大学毕业。'], ety: '来自 carro「车」：原指“车道”，后来指人生的道路。' },
    { id: 'novela', es: 'novela', zh: '小说', pos: 'n', g: 'f', level: 'A2', tags: ['hobby'], ex: ['Escribió más de veinte novelas.', '他写了二十多部小说。'], ety: '来自意大利语 novella「新鲜事」。英语 novel 同源。', emoji: '📖' },
    { id: 'obra', es: 'obra', zh: '作品；工程', pos: 'n', g: 'f', level: 'A2', tags: ['hobby'], ex: ['Es su obra más famosa.', '这是他最有名的作品。'], ety: '拉丁语 opera「工作」。' },
    { id: 'anoche', es: 'anoche', zh: '昨晚', pos: 'adv', level: 'A2', tags: ['time'], ex: ['Anoche dormí muy mal.', '我昨晚睡得很不好。'] },
    { id: 'anteayer', es: 'anteayer', zh: '前天', pos: 'adv', level: 'A2', tags: ['time'], ex: ['Llegué anteayer.', '我前天到的。'] },
    { id: 'pasado', es: 'pasado', f: 'pasada', zh: '过去的；上一个的', pos: 'adj', level: 'A2', tags: ['time'], ex: ['El año pasado fui a Cuba.', '去年我去了古巴。'] },
    { id: 'hace-tiempo', es: 'hace', zh: '（时间）……之前', pos: 'phr', level: 'A2', tags: ['time'], ex: ['Llegué hace tres meses.', '我三个月前到的。'], note: 'hace + 时间段 = ……之前。' },
    { id: 'durante', es: 'durante', zh: '在……期间', pos: 'prep', level: 'A2', tags: ['time', 'func'], ex: ['Estudié durante dos horas.', '我学习了两个小时。'], ety: '来自 durar「持续」。英语 during 同源。' },
    { id: 'entonces', es: 'entonces', zh: '那时；那么', pos: 'adv', level: 'A2', tags: ['time', 'func'], ex: ['Entonces no tenía móvil.', '那时我还没有手机。'] },
    { id: 'finalmente', es: 'finalmente', zh: '最后', pos: 'adv', level: 'A2', tags: ['time', 'func'], ex: ['Finalmente encontré trabajo.', '最后我找到了工作。'] },
    { id: 'famoso', es: 'famoso', f: 'famosa', zh: '有名的', pos: 'adj', level: 'A2', tags: ['adj'], ex: ['Es un pintor muy famoso.', '他是一位很有名的画家。'] },
    { id: 'mundo', es: 'mundo', zh: '世界', pos: 'n', g: 'm', level: 'A2', tags: ['travel'], ex: ['Quiero viajar por todo el mundo.', '我想周游世界。'], ety: '拉丁语 mundus。', emoji: '🌍' },
  ],
  sentences: [
    { id: 's1', es: 'Ayer trabajé hasta las nueve.', zh: '我昨天工作到九点。', g: ['a2-indefinido', 'a2-marcadores'], distract: ['trabajo', 'he'] },
    { id: 's2', es: '¿Qué comiste anoche?', zh: '你昨晚吃了什么？', g: ['a2-indefinido', 'a2-marcadores'] },
    { id: 's3', es: 'Mis padres vivieron en Cantón diez años.', zh: '我父母在广州住过十年。', g: ['a2-indefinido'] },
    { id: 's4', es: 'Llegué a España en 2023.', zh: '我 2023 年到的西班牙。', g: ['a2-indefinido', 'a2-anios'], distract: ['llegé'] },
    { id: 's5', es: 'Busqué mis llaves por toda la casa.', zh: '我在家里到处找钥匙。', g: ['a2-indefinido'], distract: ['buscé'] },
    { id: 's6', es: 'Empecé a estudiar español hace dos años.', zh: '我两年前开始学西班牙语。', g: ['a2-indefinido', 'a2-marcadores'] },
    { id: 's7', es: '¿Leíste el libro que te regalé?', zh: '你读了我送你的那本书吗？', g: ['a2-indefinido'] },
    { id: 's8', es: 'El año pasado viajamos a Perú.', zh: '去年我们去秘鲁旅行了。', g: ['a2-marcadores'] },
    { id: 's9', es: 'Anoche cené con mis amigos.', zh: '我昨晚和朋友吃了晚饭。', g: ['a2-marcadores'] },
    { id: 's10', es: 'La semana pasada compré un ordenador.', zh: '上周我买了一台电脑。', g: ['a2-marcadores'] },
    { id: 's11', es: 'Primero desayuné y luego salí de casa.', zh: '我先吃了早饭，然后出了门。', g: ['a2-marcadores'] },
    { id: 's12', es: 'Me mudé a Madrid hace tres meses.', zh: '我三个月前搬到了马德里。', g: ['a2-marcadores'] },
    { id: 's13', es: 'Nací en 2001 en Hangzhou.', zh: '我 2001 年出生在杭州。', g: ['a2-anios'] },
    { id: 's14', es: 'Mis abuelos se casaron en 1975.', zh: '我祖父母 1975 年结的婚。', g: ['a2-anios'] },
    { id: 's15', es: 'Vivió en Francia durante treinta años.', zh: '他在法国住了三十年。', g: ['a2-anios'] },
    { id: 's16', es: 'Mi padre se jubiló el año pasado.', zh: '我爸爸去年退休了。', g: ['a2-anios', 'a2-marcadores'] },
    { id: 's17', es: 'Terminé la carrera en 2020.', zh: '我 2020 年大学毕业。', g: ['a2-anios'] },
    { id: 's18', es: '¿Dónde naciste?', zh: '你在哪里出生？', g: ['a2-anios'] },
    { id: 's19', es: 'Se conocieron en la universidad.', zh: '他们是在大学认识的。', g: ['a2-indefinido'] },
    { id: 's20', es: 'Ayer cumplí veinte años.', zh: '我昨天满二十岁。', g: ['a2-indefinido'] },
    { id: 's21', es: 'Mis amigos llegaron tarde a la fiesta.', zh: '我的朋友们聚会迟到了。', g: ['a2-indefinido'] },
    { id: 's22', es: '¿Cuándo empezaste a trabajar?', zh: '你什么时候开始工作的？', g: ['a2-indefinido'] },
  ],
  cloze: [
    { id: 'c1', text: 'Ayer ___ (yo) con mi madre por teléfono.', answers: ['hablé'], hint: 'hablar', zh: '昨天我和妈妈打了电话。', g: ['a2-indefinido'] },
    { id: 'c2', text: '¿A qué hora ___ (tú) anoche?', answers: ['cenaste'], hint: 'cenar', zh: '你昨晚几点吃的晚饭？', g: ['a2-indefinido'] },
    { id: 'c3', text: 'Mi hermano ___ en Londres dos años.', answers: ['vivió'], hint: 'vivir', zh: '我哥哥在伦敦住过两年。', g: ['a2-indefinido'] },
    { id: 'c4', text: 'Nosotros ___ mucho en la fiesta.', answers: ['bailamos'], hint: 'bailar', zh: '我们在聚会上跳了很多舞。', g: ['a2-indefinido'] },
    { id: 'c5', text: 'Los niños ___ toda la tarde en el parque.', answers: ['jugaron'], hint: 'jugar', zh: '孩子们整个下午都在公园玩。', g: ['a2-indefinido'] },
    { id: 'c6', text: 'Yo ___ a casa a las once.', answers: ['llegué'], hint: 'llegar', zh: '我十一点到的家。', g: ['a2-indefinido'], explain: '-gar 动词第一人称：g → gu，llegué。' },
    { id: 'c7', text: 'Yo ___ a trabajar en 2019.', answers: ['empecé'], hint: 'empezar', zh: '我 2019 年开始工作。', g: ['a2-indefinido'], explain: '-zar 动词第一人称：z → c，empecé。' },
    { id: 'c8', text: 'Mi padre ___ el periódico en el tren.', answers: ['leyó'], hint: 'leer', zh: '我爸爸在火车上看了报纸。', g: ['a2-indefinido'] },
    { id: 'c9', text: '¿Vosotros ___ la película?', answers: ['visteis'], options: ['visteis', 'vistéis', 'veisteis'], zh: '你们看那部电影了吗？', g: ['a2-indefinido'] },
    { id: 'c10', text: '___ fui a la playa con mis primos.', answers: ['Ayer'], options: ['Ayer', 'Hoy', 'Esta semana'], zh: '昨天我和表兄弟姐妹去了海边。', g: ['a2-marcadores'], explain: 'fui 是简单过去时，配合已经结束的时间 ayer。' },
    { id: 'c11', text: 'Esta mañana ___ un café con Ana.', answers: ['he tomado'], options: ['he tomado', 'tomé ayer', 'tomaré'], zh: '今天上午我和安娜喝了杯咖啡。', g: ['a2-marcadores'], explain: 'esta mañana 是还没结束的时间段，西班牙常用现在完成时。' },
    { id: 'c12', text: 'Llegué a China ___ cinco años.', answers: ['hace'], options: ['hace', 'desde', 'durante'], zh: '我五年前来的中国。', g: ['a2-marcadores'] },
    { id: 'c13', text: 'El año ___ estudié en Salamanca.', answers: ['pasado'], options: ['pasado', 'próximo', 'que viene'], zh: '去年我在萨拉曼卡学习。', g: ['a2-marcadores'] },
    { id: 'c14', text: 'Viví en Pekín ___ seis años.', answers: ['durante'], options: ['durante', 'hace', 'en'], zh: '我在北京住了六年。', g: ['a2-anios'] },
    { id: 'c15', text: 'Mi madre nació ___ 1972.', answers: ['en'], options: ['en', 'el', 'a'], zh: '我妈妈出生于 1972 年。', g: ['a2-anios'] },
    { id: 'c16', text: 'Picasso ___ en Málaga en 1881.', answers: ['nació'], hint: 'nacer', zh: '毕加索 1881 年出生在马拉加。', g: ['a2-anios'] },
    { id: 'c17', text: 'Mis padres se ___ en 1995.', answers: ['casaron'], hint: 'casarse', zh: '我父母 1995 年结婚。', g: ['a2-anios'] },
    { id: 'c18', text: 'Primero estudié inglés y ___ empecé con el español.', answers: ['luego'], options: ['luego', 'antes', 'nunca'], zh: '我先学了英语，后来开始学西语。', g: ['a2-marcadores'] },
  ],
  conj: [{ verbs: ['hablar', 'comer', 'vivir', 'trabajar', 'llegar', 'buscar', 'empezar', 'leer', 'escribir', 'nacer'], tenses: ['pret'], g: 'a2-indefinido' }],
  dialogues: [
    {
      id: 'a2-u02-d1',
      title: '周末过得怎么样？· ¿Qué tal el fin de semana?',
      lines: [
        { who: 'Pedro', es: '¡Hola, Mei! ¿Qué tal el fin de semana?', zh: '嗨，小美！周末过得怎么样？' },
        { who: 'Mei', es: 'Muy bien. El sábado visité Toledo con unos compañeros de clase.', zh: '很好。星期六我和几个同学去了托莱多。' },
        { who: 'Pedro', es: '¡Qué bonito! ¿Cómo fuisteis?', zh: '真好！你们怎么去的？' },
        { who: 'Mei', es: 'En autobús. Salimos a las nueve y llegamos en una hora.', zh: '坐大巴。九点出发，一个小时就到了。' },
        { who: 'Pedro', es: '¿Y qué hicisteis allí?', zh: '那你们在那儿做了什么？' },
        { who: 'Mei', es: 'Paseamos por el centro, visitamos la catedral y comimos mazapán.', zh: '在市中心逛了逛，参观了大教堂，还吃了杏仁糖。' },
        { who: 'Pedro', es: '¿Y el domingo?', zh: '那星期天呢？' },
        { who: 'Mei', es: 'El domingo descansé y estudié un poco. ¿Y tú?', zh: '星期天我休息了一下，学了一会儿。你呢？' },
      ],
    },
  ],
  readings: [
    {
      id: 'a2-r03',
      level: 'A2',
      title: 'Pablo Picasso',
      titleZh: '巴勃罗·毕加索',
      topic: '人物传记',
      paras: [
        [
          ['Pablo Picasso nació en Málaga en 1881.', '巴勃罗·毕加索 1881 年出生在马拉加。'],
          ['Su padre fue profesor de dibujo y le enseñó a pintar cuando era muy pequeño.', '他的父亲是绘画老师，在他很小的时候就教他画画。'],
          ['De joven, estudió arte en Barcelona y en Madrid.', '年轻时，他在巴塞罗那和马德里学习艺术。'],
        ],
        [
          ['En 1904 se mudó a París, la capital del arte en aquella época.', '1904 年他搬到了巴黎——那个时代的艺术之都。'],
          ['Allí conoció a muchos artistas y creó, con Georges Braque, el cubismo.', '在那里他认识了很多艺术家，并和乔治·布拉克一起开创了立体主义。'],
        ],
        [
          ['En 1937 pintó el Guernica, un cuadro contra la guerra.', '1937 年他画了《格尔尼卡》，一幅反对战争的画。'],
          ['Hoy está en el Museo Reina Sofía de Madrid.', '今天这幅画收藏在马德里的索菲亚王后博物馆。'],
          ['Picasso vivió casi toda su vida en Francia y murió allí en 1973, a los noventa y un años.', '毕加索几乎一生都住在法国，1973 年在那里去世，享年九十一岁。'],
        ],
      ],
      gloss: { dibujo: '素描，绘画', enseñó: '教了', era: '是（过去未完成时）', pequeño: '小', arte: '艺术', capital: '首都', aquella: '那个', artistas: '艺术家们', creó: '创造了', cubismo: '立体主义', contra: '反对', Museo: '博物馆', casi: '几乎', murió: '去世了' },
      questions: [
        { type: 'mc', q: '毕加索出生在哪里？', options: ['巴塞罗那', '马拉加', '巴黎'], answer: 1 },
        { type: 'tf', q: '毕加索的父亲是医生。', answer: false, explain: 'Su padre fue profesor de dibujo.' },
        { type: 'mc', q: '他哪一年搬到巴黎？', options: ['1881', '1904', '1937'], answer: 1 },
        { type: 'mc', q: '《格尔尼卡》现在在哪里？', options: ['马德里', '巴黎', '马拉加'], answer: 0 },
      ],
    },
    {
      id: 'a2-r04',
      level: 'A2',
      title: 'La vida de mi abuela',
      titleZh: '我奶奶的一生',
      topic: '家庭',
      paras: [
        [
          ['Mi abuela nació en 1948 en un pueblo pequeño de Sichuan.', '我奶奶 1948 年出生在四川的一个小村子里。'],
          ['Empezó a trabajar en el campo a los doce años.', '她十二岁就开始下地干活。'],
        ],
        [
          ['En 1968 se mudó a Chengdu y trabajó en una fábrica de tela.', '1968 年她搬到成都，在一家纺织厂工作。'],
          ['Allí conoció a mi abuelo. Se casaron dos años después.', '在那里她认识了我爷爷。两年后他们结婚了。'],
        ],
        [
          ['Mi abuela nunca estudió en la universidad, pero aprendió a leer y escribir sola.', '我奶奶从没上过大学，但她自学了读书写字。'],
          ['Se jubiló en 2003 y desde entonces cocina para toda la familia.', '她 2003 年退休，从那以后就给全家人做饭。'],
          ['¡Su comida es la mejor del mundo!', '她做的菜是世界上最好吃的！'],
        ],
      ],
      gloss: { pueblo: '村子', campo: '田野', fábrica: '工厂', tela: '布', después: '之后', universidad: '大学', aprendió: '学会了', sola: '独自', 'desde': '从', entonces: '那时', comida: '饭菜', mejor: '最好的' },
      questions: [
        { type: 'mc', q: '奶奶几岁开始下地干活？', options: ['十二岁', '二十岁', '六岁'], answer: 0 },
        { type: 'tf', q: '奶奶在纺织厂认识了爷爷。', answer: true },
        { type: 'mc', q: '奶奶什么时候退休的？', options: ['1968 年', '1970 年', '2003 年'], answer: 2 },
        { type: 'tf', q: '奶奶上过大学。', answer: false, explain: 'Nunca estudió en la universidad.' },
      ],
    },
  ],
  writing: [{ id: 'w1', prompt: '写一位你熟悉的人（家人或名人）的简短生平：在哪里出生、在哪里长大、学了什么、做过什么重要的事。', words: [50, 100], hints: ['Nació en… en…', 'Estudió… / Empezó a trabajar…', 'En… se mudó a… / se casó…'] }],
}
