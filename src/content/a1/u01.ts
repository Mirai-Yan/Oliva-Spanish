import type { Unit } from '../types'

export const u01: Unit = {
  id: 'a1-u01',
  level: 'A1',
  order: 1,
  title: '你好！',
  titleEs: '¡Hola!',
  icon: '👋',
  goals: ['用西语打招呼、告别、道谢', '介绍自己的名字，询问别人的名字', '区分“你”（tú）和“您”（usted）', '用 ser 说“我是……”'],
  grammar: [
    {
      id: 'a1-saludos',
      title: '打招呼与自我介绍',
      titleEs: 'Saludos y presentaciones',
      level: 'A1',
      summary: '一天不同时间用不同的问候；用 “Me llamo…” 介绍名字。',
      body: `### 问候
| 西语 | 中文 | 什么时候用 |
|---|---|---|
| **¡Hola!** | 你好 | 任何时候，比较随意 |
| **Buenos días** | 早上好 | 早上到吃午饭前（西班牙大约下午两点） |
| **Buenas tardes** | 下午好 | 午饭后到天黑 |
| **Buenas noches** | 晚上好 / 晚安 | 天黑以后，见面和告别都能用 |
| **¿Qué tal?** | 怎么样？ | 朋友之间的“你好吗” |

回答：**Bien, gracias. ¿Y tú?**（很好，谢谢。你呢？）/ **Muy bien.**（很好）/ **Regular.**（一般）/ **Mal.**（不好）

### 告别
**Adiós**（再见）· **Hasta luego**（回头见）· **Hasta mañana**（明天见）

### 名字
| 问 | 答 |
|---|---|
| **¿Cómo te llamas?** 你叫什么？ | **Me llamo Ana.** 我叫安娜。 |
| **¿Cómo se llama usted?** 您叫什么？ | **Me llamo Luis García.** |
| **¿Cómo se llama él?** 他叫什么？ | **Se llama Pablo.** 他叫巴勃罗。 |

认识新朋友时说：**Mucho gusto**（很高兴认识你），或者 **Encantado**（男性说）/ **Encantada**（女性说）。

### 倒写的问号和感叹号
西语在句首加 **¿** 和 **¡**，句尾是正常的 **?** 和 **!**：*¿Qué tal?*、*¡Hola!*。这样读长句时一开始就知道是疑问句。

### 礼貌用语
**Gracias**（谢谢）— **De nada**（不客气）· **Por favor**（请）· **Perdón**（对不起；打扰一下）`,
      examples: [
        ['¡Hola! ¿Qué tal?', '你好！怎么样？'],
        ['Muy bien, gracias. ¿Y tú?', '很好，谢谢。你呢？'],
        ['¿Cómo te llamas?', '你叫什么名字？'],
        ['Me llamo Carmen. Mucho gusto.', '我叫卡门。很高兴认识你。'],
        ['Buenas noches, hasta mañana.', '晚安，明天见。'],
      ],
      tables: [{ verbs: ['llamarse'], tense: 'pres' }],
      origin: `- **adiós** 是 *a Dios* 两个词合起来的，意思是“（把你托付）给上帝”，和法语 *adieu* 同理。
- **gracias** 来自拉丁语 *gratia*（感激、恩惠）的复数；英语 *grace、gratitude* 是它的亲戚。
- **llamarse** 来自拉丁语 *clamare*（喊、叫），“Me llamo Ana” 字面意思是“我把自己叫作安娜”。英语 *claim、clamor* 也来自 *clamare*。
- **buenos días** 用复数，是中世纪的祝福习惯（祝你有美好的日子），*buenas tardes*、*buenas noches* 也跟着用了复数。`,
      pitfalls: ['用 *Buenas noches* 表示“下午好”：西班牙人午饭晚，天黑之前都说 *Buenas tardes*。', '女生说成 *Encantado*。说话人是女性就用 **Encantada**。', '忘记句首的 **¿ ¡**，书写时要加上。'],
      latam: '拉美更常用 **¿Cómo estás?**；墨西哥等地也常说 **Mucho gusto**。午后问候的时间界限比西班牙早。',
    },
    {
      id: 'a1-pronombres',
      title: '主语人称代词：yo, tú, usted…',
      titleEs: 'Los pronombres personales',
      level: 'A1',
      summary: '“你”分熟悉的 tú 和礼貌的 usted；复数分阴阳性；动词变位清楚时代词常省略。',
      body: `| | 单数 | 复数 |
|---|---|---|
| 第一人称 | **yo** 我 | **nosotros / nosotras** 我们 |
| 第二人称（熟悉） | **tú** 你 | **vosotros / vosotras** 你们 |
| 第三人称 | **él** 他 · **ella** 她 · **usted** 您 | **ellos / ellas** 他们 / 她们 · **ustedes** 诸位 |

### tú 还是 usted？
- **tú**：朋友、家人、同学、同龄人、小孩。在西班牙，年轻人之间、同事之间也普遍用 tú。
- **usted**：对陌生的长辈、正式场合、顾客。
- ⚠️ **usted / ustedes** 虽然意思是“您 / 你们”，动词却用 **第三人称**：*Usted **es** muy amable.*（您人真好。）

### 复数的阴阳性
- 全是女性：**nosotras、vosotras、ellas**
- 有男有女（哪怕只有一个男性）：**nosotros、vosotros、ellos**

### 代词经常省略
西语动词本身就能看出人称，所以主语代词一般省略，只在强调或区分时才说：
- *Soy estudiante.*（我是学生。）——不用说 *Yo soy*
- *Yo soy estudiante y él es profesor.*（我是学生，而他是老师。）——对比时要说`,
      examples: [
        ['Ella es Ana y él es Luis.', '她是安娜，他是路易斯。'],
        ['¿Usted es la señora López?', '您是洛佩斯女士吗？'],
        ['Nosotras somos amigas.', '我们（女生）是朋友。'],
        ['¿Y vosotros?', '那你们呢？'],
      ],
      origin: `- **usted** 来自 **vuestra merced**（“您的恩典”）。这个敬称在 16–17 世纪用得太多，读得越来越快：*vuestra merced → vuesa merced → vuesarced → usted*。因为它原本是“您的恩典”这个名词短语，所以动词用 **第三人称**——这就是 *usted es* 的由来！缩写 *Ud.、Vd.* 也保留了原来的首字母。
- **nosotros / vosotros** = *nos*（我们）+ *otros*（其他人），原意是“我们这些人”，中世纪用来和单纯的 *nos* 区分，后来固定下来。
- **él / ella** 来自拉丁语指示代词 *ille / illa*（那个）。拉丁语本来没有“他、她”，是用“那个人”来指代的。
- **yo** 来自拉丁语 *ego*：*ego → eo → yo*。`,
      pitfalls: ['对 **usted** 用第二人称动词：❌ *Usted eres…* ✅ *Usted **es**…*', '每句话都加 *yo*：*Yo soy… Yo me llamo…* 听起来很生硬，除非是对比或强调。'],
      latam: '拉美几乎不用 **vosotros**，“你们”一律用 **ustedes**（动词第三人称复数）。阿根廷、乌拉圭等地还用 **vos** 代替 tú：*vos sos*（你是）。',
    },
    {
      id: 'a1-ser',
      title: '动词 ser（是）的现在时',
      titleEs: 'El verbo ser',
      level: 'A1',
      summary: 'soy · eres · es · somos · sois · son ——用来说身份、名字、职业和来自哪里。',
      body: `**ser** 相当于“是”，是最常用的动词之一，而且完全不规则，需要背下来：

| 人称 | ser |
|---|---|
| yo | **soy** |
| tú | **eres** |
| él / ella / usted | **es** |
| nosotros / nosotras | **somos** |
| vosotros / vosotras | **sois** |
| ellos / ellas / ustedes | **son** |

### ser 的基本用法
- 身份、名字：*Soy Ana.*（我是安娜。）
- 职业：*Eres estudiante.*（你是学生。）——注意：职业前 **不加冠词**，不说 *soy un estudiante*
- 来自哪里：*Somos de China.*（我们来自中国。）——下一单元细讲

### 否定和疑问
- 否定：在动词前加 **no**：*No soy profesor.*（我不是老师。）
- 一般疑问：语序可以不变，语调上扬：*¿Eres estudiante?*（你是学生吗？）
- 回答：*Sí, soy estudiante.* / *No, no soy estudiante.*——第一个 *no* 是“不”，第二个是“不是”`,
      examples: [
        ['Soy estudiante.', '我是学生。'],
        ['¿Eres profesora?', '你是老师吗？（问女性）'],
        ['No, no soy profesora. Soy estudiante.', '不，我不是老师。我是学生。'],
        ['Ellos son amigos.', '他们是朋友。'],
        ['Vosotros sois muy simpáticos.', '你们人很好。'],
      ],
      tables: [{ verbs: ['ser'], tense: 'pres' }],
      origin: `**ser 是两个拉丁语动词的“合体”**：
- 大部分变位来自拉丁语 *esse*（是）：*sum → so(y)*、*est → es*、*sumus → somos*、*sunt → son*。
- 但不定式 **ser** 本身、以及以后会学的虚拟式 *sea*，来自另一个动词 *sedere*（坐）：*sedere → seer → ser*。

**为什么是 eres？** 拉丁语现在时“你是”是 *es*，会和“他是 *es*”撞车，于是西语借用了拉丁语 **将来时** 的 *eris*（你将是）→ **eres**。

**soy 的 y**：古西语是 *so*，一般认为后来加上了一个来自拉丁语 *ibi*（那里）的 *-y*，同样的现象还有 *estoy、voy、doy* 和 *hay*。`,
      pitfalls: ['职业前加冠词：❌ *Soy un médico.* ✅ *Soy médico.*', '把 *eres* 和 *es* 搞混：*tú eres*，*él / usted es*。'],
    },
  ],
  words: [
    { id: 'hola', es: 'hola', zh: '你好', pos: 'interj', level: 'A1', tags: ['greet'], ex: ['¡Hola, Ana!', '你好，安娜！'], ety: '来源不详，可能来自一个用来招呼别人的感叹词，15 世纪起见于文献。和英语 hello 没有直接关系。', emoji: '👋' },
    { id: 'buenos-dias', es: 'buenos días', zh: '早上好；上午好', pos: 'phr', level: 'A1', tags: ['greet'], ex: ['Buenos días, señora.', '女士，早上好。'], ety: 'bueno < 拉丁语 bonus「好的」；día < 拉丁语 dies「日」。', emoji: '🌅' },
    { id: 'buenas-tardes', es: 'buenas tardes', zh: '下午好', pos: 'phr', level: 'A1', tags: ['greet'], ex: ['Buenas tardes, ¿qué tal?', '下午好，怎么样？'], ety: 'tarde < 拉丁语 tarde「迟，晚」，引申为“一天中较晚的时候”。英语 tardy 同源。', emoji: '🌇' },
    { id: 'buenas-noches', es: 'buenas noches', zh: '晚上好；晚安', pos: 'phr', level: 'A1', tags: ['greet'], ex: ['Buenas noches, hasta mañana.', '晚安，明天见。'], ety: 'noche < 拉丁语 noctem「夜」。英语 night、nocturnal 同源。', emoji: '🌙' },
    { id: 'que-tal', es: '¿qué tal?', zh: '怎么样？（你好吗）', pos: 'phr', level: 'A1', tags: ['greet'], ex: ['Hola, Pedro, ¿qué tal?', '你好，佩德罗，怎么样？'], ety: 'tal < 拉丁语 talis「这样的」。' },
    { id: 'adios', es: 'adiós', zh: '再见', pos: 'interj', level: 'A1', tags: ['greet'], ex: ['Adiós, hasta luego.', '再见，回头见。'], ety: '由 a Dios「（托付）给上帝」合成，和法语 adieu 同理。', emoji: '🙋' },
    { id: 'hasta-luego', es: 'hasta luego', zh: '回头见', pos: 'phr', level: 'A1', tags: ['greet'], ex: ['Hasta luego, Marta.', '回头见，玛尔塔。'], ety: 'hasta 来自阿拉伯语 ḥattā「直到」；luego < 拉丁语 (in) loco「在那个地方 → 随即」。' },
    { id: 'hasta-manana', es: 'hasta mañana', zh: '明天见', pos: 'phr', level: 'A1', tags: ['greet'], ex: ['¡Hasta mañana, chicos!', '明天见，孩子们！'], ety: 'mañana < 拉丁语 (hora) maneana「早早的时辰」，所以它既是“早上”也是“明天”。' },
    { id: 'gracias', es: 'gracias', zh: '谢谢', pos: 'interj', level: 'A1', tags: ['greet'], ex: ['Muchas gracias.', '非常感谢。'], ety: '拉丁语 gratia「恩惠，感激」的复数。英语 grace、gratitude 同源。', emoji: '🙏' },
    { id: 'por-favor', es: 'por favor', zh: '请', pos: 'phr', level: 'A1', tags: ['greet'], ex: ['Un café, por favor.', '请来一杯咖啡。'], ety: 'favor < 拉丁语 favor「好意」。字面意思是“出于好意”。英语 favor 同源。' },
    { id: 'de-nada', es: 'de nada', zh: '不客气', pos: 'phr', level: 'A1', tags: ['greet'], ex: ['—Gracias. —De nada.', '——谢谢。——不客气。'], ety: 'nada < 拉丁语 (res) nata「生出来的（东西）」，后来在否定句里表示“一点东西也（没有）”，最终变成“什么都没有”。' },
    { id: 'perdon', es: 'perdón', zh: '对不起；打扰一下', pos: 'interj', level: 'A1', tags: ['greet'], ex: ['Perdón, ¿cómo te llamas?', '打扰一下，你叫什么名字？'], ety: '来自 perdonar < 拉丁语 per-「彻底」+ donare「给予」。英语 pardon 同源。' },
    { id: 'si', es: 'sí', zh: '是的；对', pos: 'adv', level: 'A1', tags: ['func'], ex: ['Sí, soy estudiante.', '是的，我是学生。'], ety: '拉丁语 sic「这样」。注意带重音符号，区别于 si「如果」。' },
    { id: 'no', es: 'no', zh: '不；没有', pos: 'adv', level: 'A1', tags: ['func'], ex: ['No, no soy profesor.', '不，我不是老师。'], ety: '拉丁语 non。' },
    { id: 'bien', es: 'bien', zh: '好；好地', pos: 'adv', level: 'A1', tags: ['feel'], ex: ['Estoy bien, gracias.', '我很好，谢谢。'], ety: '拉丁语 bene「好地」。英语 benefit（做好事 → 好处）同源。' },
    { id: 'mal', es: 'mal', zh: '不好；坏地', pos: 'adv', level: 'A1', tags: ['feel'], ex: ['Hoy estoy mal.', '我今天不太好。'], ety: '拉丁语 male「坏地」。英语 malware、malfunction 里的 mal- 同源。' },
    { id: 'muy', es: 'muy', zh: '很；非常', pos: 'adv', level: 'A1', tags: ['func'], ex: ['Muy bien, gracias.', '很好，谢谢。'], ety: '拉丁语 multum「很多」→ muito → muy。mucho 也来自同一个词。' },
    { id: 'tambien', es: 'también', zh: '也', pos: 'adv', level: 'A1', tags: ['func'], ex: ['Yo también soy estudiante.', '我也是学生。'], ety: 'tan「这样」+ bien「好」合成，原意“同样好地”。' },
    { id: 'y', es: 'y', zh: '和；而且', pos: 'conj', level: 'A1', tags: ['func'], ex: ['Ana y Luis son amigos.', '安娜和路易斯是朋友。'], ety: '拉丁语 et（和）。' },
    { id: 'llamarse', es: 'llamarse', zh: '名叫', pos: 'v', level: 'A1', tags: ['people', 'verb'], ex: ['Me llamo Lucía.', '我叫露西亚。'], ety: '拉丁语 clamare「喊叫」，cl- 变成了 ll-。英语 claim、clamor 同源。', note: '自反动词，“名叫”：me llamo, te llamas, se llama…' },
    { id: 'ser', es: 'ser', zh: '是', pos: 'v', level: 'A1', tags: ['verb'], ex: ['Soy de China.', '我来自中国。'], ety: '拉丁语 esse「是」和 sedere「坐」两个动词合并而成。', note: '完全不规则：soy, eres, es, somos, sois, son' },
    { id: 'yo', es: 'yo', zh: '我', pos: 'pron', level: 'A1', tags: ['func'], ex: ['Yo soy Ana.', '我是安娜。'], ety: '拉丁语 ego → eo → yo。' },
    { id: 'tu-pron', es: 'tú', zh: '你', pos: 'pron', level: 'A1', tags: ['func'], ex: ['¿Y tú?', '那你呢？'], ety: '拉丁语 tu。带重音符号，区别于物主形容词 tu「你的」。' },
    { id: 'el-pron', es: 'él', zh: '他', pos: 'pron', level: 'A1', tags: ['func'], ex: ['Él es mi amigo.', '他是我的朋友。'], ety: '拉丁语指示代词 ille「那个」。定冠词 el 也来自它，所以代词加重音符号来区分。' },
    { id: 'ella', es: 'ella', zh: '她', pos: 'pron', level: 'A1', tags: ['func'], ex: ['Ella es profesora.', '她是老师。'], ety: '拉丁语 illa「那个（阴性）」。' },
    { id: 'usted', es: 'usted', zh: '您', pos: 'pron', level: 'A1', tags: ['func'], ex: ['¿Cómo se llama usted?', '您叫什么名字？'], ety: 'vuestra merced「您的恩典」→ vuesarced → usted。所以动词用第三人称。缩写 Ud. / Vd.', note: '礼貌称呼，动词用第三人称单数。' },
    { id: 'nosotros', es: 'nosotros', f: 'nosotras', zh: '我们', pos: 'pron', level: 'A1', tags: ['func'], ex: ['Nosotros somos estudiantes.', '我们是学生。'], ety: 'nos「我们」+ otros「其他人」。' },
    { id: 'vosotros', es: 'vosotros', f: 'vosotras', zh: '你们', pos: 'pron', level: 'A1', tags: ['func'], ex: ['¿Vosotros sois amigos?', '你们是朋友吗？'], ety: 'vos「你们」+ otros「其他人」。', latam: '拉美不用 vosotros，用 ustedes。' },
    { id: 'ellos', es: 'ellos', f: 'ellas', zh: '他们', pos: 'pron', level: 'A1', tags: ['func'], ex: ['Ellos son de México.', '他们来自墨西哥。'], ety: '拉丁语 illos / illas「那些」。' },
    { id: 'ustedes', es: 'ustedes', zh: '诸位；你们（礼貌）', pos: 'pron', level: 'A1', tags: ['func'], ex: ['¿Ustedes son profesores?', '诸位是老师吗？'], ety: 'usted 的复数。', latam: '在拉美，ustedes 是“你们”的唯一说法，不论熟不熟。' },
    { id: 'senor', es: 'señor', zh: '先生', pos: 'n', g: 'm', f: 'señora', level: 'A1', tags: ['people'], ex: ['Buenos días, señor García.', '早上好，加西亚先生。'], ety: '拉丁语 senior「年长者」。英语 senior、sir、法语 seigneur 同源。', note: '称呼时不加冠词：Buenos días, señor…；提到别人时加：El señor García es profesor.' },
    { id: 'amigo', es: 'amigo', zh: '朋友', pos: 'n', g: 'm', f: 'amiga', level: 'A1', tags: ['people'], ex: ['Pablo es mi amigo.', '巴勃罗是我的朋友。'], ety: '拉丁语 amicus，来自 amare「爱」。英语 amicable、amiable 同源。', emoji: '🤝' },
    { id: 'estudiante', es: 'estudiante', zh: '学生', pos: 'n', g: 'mf', level: 'A1', tags: ['people', 'school'], ex: ['Soy estudiante de español.', '我是学西班牙语的学生。'], ety: '拉丁语 studere「努力；学习」的现在分词 studentem。英语 student、study 同源。', emoji: '🧑‍🎓', note: '阴阳同形：el estudiante / la estudiante。' },
    { id: 'profesor', es: 'profesor', zh: '老师；教授', pos: 'n', g: 'm', f: 'profesora', level: 'A1', tags: ['people', 'job', 'school'], ex: ['Mi profesora es de Madrid.', '我的老师是马德里人。'], ety: '拉丁语 professor「公开宣讲者」，来自 profiteri「公开宣称」。英语 professor 同源。', emoji: '👩‍🏫' },
    { id: 'encantado', es: 'encantado', f: 'encantada', zh: '很高兴认识你', pos: 'adj', level: 'A1', tags: ['greet'], ex: ['—Me llamo Ana. —Encantado.', '——我叫安娜。——很高兴认识你。'], ety: 'encantar「使着迷」< 拉丁语 incantare「施咒语」。英语 enchanted 同源。', note: '说话人是男性说 encantado，女性说 encantada。' },
    { id: 'mucho-gusto', es: 'mucho gusto', zh: '很高兴认识你', pos: 'phr', level: 'A1', tags: ['greet'], ex: ['Mucho gusto, señora.', '很高兴认识您，女士。'], ety: 'gusto < 拉丁语 gustus「味觉，品尝」→“愉悦”。英语 gusto、disgust 同源。' },
    { id: 'nombre', es: 'nombre', zh: '名字', pos: 'n', g: 'm', level: 'A1', tags: ['people'], ex: ['¿Cuál es tu nombre?', '你的名字是什么？'], ety: '拉丁语 nomen（宾格 nominem）。中间的 m-n 变成了 -mbr-。英语 name、noun 同源。' },
  ],
  sentences: [
    { id: 's1', es: '¡Hola! ¿Qué tal?', zh: '你好！怎么样？', g: ['a1-saludos'] },
    { id: 's2', es: 'Muy bien, gracias. ¿Y tú?', zh: '很好，谢谢。你呢？', g: ['a1-saludos'] },
    { id: 's3', es: '¿Cómo te llamas?', zh: '你叫什么名字？', g: ['a1-saludos'] },
    { id: 's4', es: 'Me llamo Carlos.', zh: '我叫卡洛斯。', g: ['a1-saludos'] },
    { id: 's5', es: '¿Cómo se llama usted?', zh: '您叫什么名字？', g: ['a1-saludos', 'a1-pronombres'] },
    { id: 's6', es: 'Buenos días, señora.', zh: '早上好，女士。', g: ['a1-saludos'] },
    { id: 's7', es: 'Adiós, hasta mañana.', zh: '再见，明天见。', g: ['a1-saludos'] },
    { id: 's8', es: 'Mucho gusto.', zh: '很高兴认识你。', alt: ['Encantado', 'Encantada'], g: ['a1-saludos'] },
    { id: 's9', es: 'Yo soy Ana.', zh: '我是安娜。', alt: ['Soy Ana'], g: ['a1-ser'] },
    { id: 's10', es: 'Tú eres estudiante.', zh: '你是学生。', alt: ['Eres estudiante'], g: ['a1-ser'] },
    { id: 's11', es: 'Él es profesor.', zh: '他是老师。', g: ['a1-ser', 'a1-pronombres'] },
    { id: 's12', es: 'Ella es mi amiga.', zh: '她是我的朋友。', g: ['a1-ser', 'a1-pronombres'] },
    { id: 's13', es: 'Nosotros somos estudiantes.', zh: '我们是学生。', alt: ['Somos estudiantes'], g: ['a1-ser'] },
    { id: 's14', es: 'Vosotros sois amigos.', zh: '你们是朋友。', alt: ['Sois amigos'], g: ['a1-ser'] },
    { id: 's15', es: 'Ellos son profesores.', zh: '他们是老师。', alt: ['Son profesores'], g: ['a1-ser'] },
    { id: 's16', es: 'No soy profesor.', zh: '我不是老师。', alt: ['Yo no soy profesor'], g: ['a1-ser'] },
    { id: 's17', es: '¿Eres estudiante?', zh: '你是学生吗？', alt: ['¿Tú eres estudiante?'], g: ['a1-ser'] },
    { id: 's18', es: 'Sí, soy estudiante.', zh: '是的，我是学生。', g: ['a1-ser'] },
    { id: 's19', es: 'Usted es muy amable.', zh: '您人真好。', g: ['a1-pronombres', 'a1-ser'], distract: ['eres', 'tú'] },
    { id: 's20', es: 'Ella es Ana y él es Luis.', zh: '她是安娜，他是路易斯。', g: ['a1-pronombres'] },
    { id: 's21', es: 'Nosotras somos amigas.', zh: '我们（女生）是朋友。', g: ['a1-pronombres'], distract: ['nosotros', 'amigos'] },
    { id: 's22', es: 'Yo también soy estudiante.', zh: '我也是学生。', alt: ['También soy estudiante'], g: ['a1-ser'] },
    { id: 's23', es: 'Gracias, de nada.', zh: '谢谢，不客气。', g: ['a1-saludos'] },
    { id: 's24', es: 'Perdón, ¿eres Marta?', zh: '打扰一下，你是玛尔塔吗？', alt: ['Perdón, ¿tú eres Marta?'], g: ['a1-ser'] },
  ],
  cloze: [
    { id: 'c1', text: 'Yo ___ estudiante.', answers: ['soy'], options: ['soy', 'eres', 'es'], zh: '我是学生。', g: ['a1-ser'] },
    { id: 'c2', text: 'Tú ___ profesor.', answers: ['eres'], options: ['eres', 'es', 'soy'], zh: '你是老师。', g: ['a1-ser'] },
    { id: 'c3', text: 'Ella ___ Ana.', answers: ['es'], options: ['es', 'eres', 'son'], zh: '她是安娜。', g: ['a1-ser'] },
    { id: 'c4', text: 'Nosotros ___ amigos.', answers: ['somos'], options: ['somos', 'sois', 'son'], zh: '我们是朋友。', g: ['a1-ser'] },
    { id: 'c5', text: 'Vosotros ___ estudiantes.', answers: ['sois'], options: ['sois', 'somos', 'son'], zh: '你们是学生。', g: ['a1-ser'] },
    { id: 'c6', text: 'Ellos ___ profesores.', answers: ['son'], options: ['son', 'sois', 'es'], zh: '他们是老师。', g: ['a1-ser'] },
    { id: 'c7', text: 'Usted ___ el señor Ruiz, ¿verdad?', answers: ['es'], options: ['es', 'eres', 'soy'], zh: '您是鲁伊斯先生，对吗？', g: ['a1-ser', 'a1-pronombres'], explain: 'usted 虽然是“您”，动词用第三人称：usted es。' },
    { id: 'c8', text: '¿Cómo te ___?', answers: ['llamas'], options: ['llamas', 'llamo', 'llama'], zh: '你叫什么名字？', g: ['a1-saludos'] },
    { id: 'c9', text: 'Me ___ Pedro.', answers: ['llamo'], options: ['llamo', 'llamas', 'llama'], zh: '我叫佩德罗。', g: ['a1-saludos'] },
    { id: 'c10', text: 'Buenas ___, ¿qué tal?', answers: ['tardes'], options: ['tardes', 'días', 'gracias'], zh: '下午好，怎么样？', g: ['a1-saludos'], explain: 'día 是阳性：buenos días；tarde、noche 是阴性：buenas tardes / noches。' },
    { id: 'c11', text: '¿Cómo se llama ___?', answers: ['usted'], options: ['usted', 'tú', 'yo'], zh: '您叫什么名字？', g: ['a1-pronombres'] },
    { id: 'c12', text: '___ soy Marta.', answers: ['Yo'], options: ['Yo', 'Tú', 'Ella'], zh: '我是玛尔塔。', g: ['a1-pronombres'] },
    { id: 'c13', text: 'Muy bien, ___. ¿Y tú?', answers: ['gracias'], options: ['gracias', 'adiós', 'perdón'], zh: '很好，谢谢。你呢？', g: ['a1-saludos'] },
    { id: 'c14', text: '—Gracias. —De ___.', answers: ['nada'], options: ['nada', 'favor', 'gusto'], zh: '——谢谢。——不客气。', g: ['a1-saludos'] },
    { id: 'c15', text: 'Ellas ___ estudiantes.', answers: ['son'], hint: 'ser', zh: '她们是学生。', g: ['a1-ser'] },
    { id: 'c16', text: 'Yo no ___ profesora.', answers: ['soy'], hint: 'ser', zh: '我不是老师。', g: ['a1-ser'] },
    { id: 'c17', text: 'Ana y yo ___ amigas.', answers: ['somos'], hint: 'ser', zh: '安娜和我是朋友。', g: ['a1-ser'], explain: '“安娜和我” = nosotras，所以用 somos。' },
    { id: 'c18', text: 'Él se ___ Pablo.', answers: ['llama'], hint: 'llamarse', zh: '他叫巴勃罗。', g: ['a1-saludos'] },
    { id: 'c19', text: '(Responde una mujer) —Me llamo Luis. —___.', answers: ['Encantada'], options: ['Encantada', 'Encantado', 'Hola'], zh: '（说话的是女性）——我叫路易斯。——很高兴认识你。', g: ['a1-saludos'], explain: '说话人是女性，所以说 encantada。' },
    { id: 'c20', text: '¿Usted y su amigo ___ de Madrid?', answers: ['son'], options: ['son', 'sois', 'es'], zh: '您和您的朋友是马德里人吗？', g: ['a1-pronombres', 'a1-ser'], explain: 'usted + 另一人 = ustedes，动词用第三人称复数 son。' },
  ],
  conj: [
    { verbs: ['ser'], tenses: ['pres'], g: 'a1-ser' },
    { verbs: ['llamarse'], tenses: ['pres'], persons: [0, 1, 2, 5], g: 'a1-saludos' },
  ],
  dialogues: [
    {
      id: 'a1-u01-d1',
      title: '第一堂课 · En clase',
      lines: [
        { who: 'Profesora', es: '¡Buenos días! Soy la profesora García. ¿Cómo te llamas?', zh: '早上好！我是加西亚老师。你叫什么名字？' },
        { who: 'Li Ming', es: 'Buenos días. Me llamo Li Ming.', zh: '早上好。我叫李明。' },
        { who: 'Profesora', es: 'Encantada, Li Ming. ¿Y tú?', zh: '很高兴认识你，李明。你呢？' },
        { who: 'Ana', es: 'Hola, me llamo Ana. Yo también soy estudiante.', zh: '你好，我叫安娜。我也是学生。' },
        { who: 'Li Ming', es: 'Mucho gusto, Ana.', zh: '很高兴认识你，安娜。' },
        { who: 'Ana', es: 'Encantada. ¿Qué tal?', zh: '很高兴认识你。你怎么样？' },
        { who: 'Li Ming', es: 'Muy bien, gracias. ¿Y tú?', zh: '很好，谢谢。你呢？' },
        { who: 'Ana', es: '¡Yo también estoy bien!', zh: '我也很好！' },
      ],
    },
  ],
  readings: [
    {
      id: 'a1-r01',
      level: 'A1',
      title: 'Hola, soy Lucía',
      titleZh: '你好，我是露西亚',
      topic: '自我介绍',
      paras: [
        [
          ['¡Hola! Me llamo Lucía y soy estudiante.', '你好！我叫露西亚，我是学生。'],
          ['Mi profesor se llama Javier.', '我的老师叫哈维尔。'],
          ['Él es muy simpático.', '他人很好。'],
        ],
        [
          ['Pablo y Marta son mis amigos.', '巴勃罗和玛尔塔是我的朋友。'],
          ['Ellos también son estudiantes.', '他们也是学生。'],
          ['Nosotros somos compañeros de clase.', '我们是同班同学。'],
        ],
        [
          ['En clase, el profesor dice: «¡Buenos días, chicos!».', '上课时，老师说：“早上好，同学们！”'],
          ['Y nosotros decimos: «¡Buenos días, profesor!».', '我们说：“老师早上好！”'],
        ],
      ],
      gloss: {
        Mi: '我的',
        mi: '我的',
        mis: '我的（复数）',
        simpático: '和蔼的，讨人喜欢的',
        compañeros: '同伴（复数）',
        clase: '课；班级',
        En: '在……里',
        dice: '说（第三人称）',
        decimos: '我们说',
        chicos: '孩子们；同学们',
        el: '（阳性定冠词）',
        de: '……的',
      },
      questions: [
        { type: 'tf', q: '露西亚是一名老师。', answer: false, explain: '她说 “soy estudiante”，她是学生。' },
        { type: 'mc', q: '露西亚的老师叫什么？', options: ['Pablo', 'Javier', 'Marta'], answer: 1 },
        { type: 'tf', q: 'Pablo 和 Marta 也是学生。', answer: true, explain: 'Ellos también son estudiantes.' },
        { type: 'mc', q: '上课时，学生们怎么跟老师打招呼？', options: ['¡Buenas noches!', '¡Buenos días, profesor!', '¡Hasta luego!'], answer: 1 },
      ],
    },
  ],
  writing: [{ id: 'w1', prompt: '用西班牙语做一个简单的自我介绍：打招呼、说出你的名字和身份（学生、老师……），再介绍一位朋友。', words: [15, 40], hints: ['¡Hola! Me llamo…', 'Soy…', 'Mi amigo/a se llama… Él/Ella es…'] }],
}
