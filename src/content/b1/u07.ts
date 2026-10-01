import type { Unit } from '../types'

export const u07: Unit = {
  id: 'b1-u07',
  level: 'B1',
  order: 7,
  title: '猜一猜',
  titleEs: 'Hacer hipótesis',
  icon: '🔍',
  goals: ['用将来时、将来完成时和条件式推测现在和过去', '用 quizás、tal vez、a lo mejor、puede que 表达不同程度的可能', '区分 deber + 原形（必须）和 deber de + 原形（大概）', '讨论谜团、传说和看不懂的现象'],
  grammar: [
    {
      id: 'b1-futuro-probabilidad',
      title: '用将来时和条件式来猜测',
      titleEs: 'El futuro y el condicional de probabilidad',
      level: 'B1',
      summary: '猜测现在 → 将来时：Estará en casa. 猜测刚才 / 已经发生的事 → 将来完成时：Habrá salido. 猜测过去 → 条件式：Serían las diez.',
      body: `西班牙语的将来时和条件式除了表示“将来”，还经常用来表示 **猜测**。

| 确定的说法 | 猜测的说法 | 意思 |
|---|---|---|
| *Está en casa.* | *Estará en casa.* | 他（现在）**大概**在家。 |
| *Ha salido.* | *Habrá salido.* | 他（刚才）**大概**出去了。 |
| *Eran las diez.* | *Serían las diez.* | 那时**大概**十点。 |
| *Tenía veinte años.* | *Tendría veinte años.* | 他那时**大概**二十岁。 |

### 将来完成时：habré, habrás, habrá, habremos, habréis, habrán + 过去分词
*—Pablo no contesta. —**Habrá dejado** el móvil en casa.*（他大概把手机落在家里了。）

### 常见用法：问自己问题
*¿Dónde **estará** mi cartera?*（我的钱包会在哪儿呢？）
*¿Quién **será** a estas horas?*（这个点会是谁呢？）
*¿Qué hora **sería** cuando llegaste?*（你到的时候大概几点？）`,
      examples: [
        ['—¿Dónde está Lucas? —No sé, estará en un atasco.', '——卢卡斯在哪儿？——不知道，大概在堵车吧。'],
        ['¿Quién será a estas horas?', '这个点会是谁呢？'],
        ['No contesta: habrá dejado el móvil en casa.', '他不接电话：大概把手机落家里了。'],
        ['Cuando llegué serían las tres de la mañana.', '我到的时候大概是凌晨三点。'],
        ['Mi abuelo tendría veinte años en esta foto.', '这张照片里我爷爷大概二十岁。'],
      ],
      tables: [{ verbs: ['estar', 'tener', 'ser'], tense: 'fut' }, { verbs: ['salir', 'olvidar', 'perder'], tense: 'futperf' }],
      origin: `为什么用“将来”表示“猜测”？因为将来的事还 **没有被证实**。说 *Estará en casa*，意思是“等我们去确认时，会发现他在家”。很多语言都有这个现象，英语也说 *That'll be the postman.*（那大概是邮递员。）

**probable** 来自拉丁语 *probabilis*「可以证明的、值得认可的」，来自 *probare*「检验、证明」——和 *probar*（尝、试）是同一个词。`,
      pitfalls: ['❌ *Serán las diez cuando llegó.* ✅ *Serían las diez cuando llegó.*：猜过去用条件式。', '❌ *Habrá salir.* ✅ *Habrá salido.*', '❌ 把猜测当成将来：*Estará en casa* 不是“他将会在家”，而是“他（现在）大概在家”。'],
    },
    {
      id: 'b1-quizas',
      title: 'quizás、a lo mejor、puede que：可能性有多大？',
      titleEs: 'Expresar probabilidad',
      level: 'B1',
      summary: 'a lo mejor / igual + 陈述式；puede que / es posible que / es probable que + 虚拟式；quizás / tal vez / probablemente + 陈述式或虚拟式（越不确定越用虚拟式）。',
      body: `### 可能性从高到低
| 可能性 | 表达 | 例句 |
|---|---|---|
| 很高 | *seguramente, seguro que* + 陈述式 | *Seguro que **viene**.* |
| 较高 | *probablemente* + 陈述式 / 虚拟式 | *Probablemente **llegue** tarde.* |
| 一般 | *quizás, tal vez* + 陈述式 / 虚拟式 | *Quizás **tiene** / **tenga** razón.* |
| 一般 | ***a lo mejor, igual*** + **只用陈述式** | *A lo mejor **llueve** mañana.* |
| 较低 | *puede (ser) que, es posible que* + **只用虚拟式** | *Puede que **llueva** mañana.* |

### 三条规则就够了
1. **a lo mejor / igual** 后面永远是 **陈述式**（口语里最常用）。
2. **puede que / es posible que / es probable que** 后面永远是 **虚拟式**（因为它们是“es + 形容词 + que”的评价结构）。
3. **quizás / tal vez / probablemente** 两种都行：用虚拟式显得更不确定。

### 小心位置
*quizás* 放在动词 **后面** 时，只能用陈述式：*Tiene razón, quizás.*`,
      examples: [
        ['A lo mejor llueve mañana.', '明天可能会下雨。'],
        ['Puede que no venga a la fiesta.', '他可能不来派对了。'],
        ['Quizás tengas razón.', '也许你是对的。'],
        ['Es probable que lleguemos tarde.', '我们很可能会迟到。'],
        ['Igual nos vemos en el concierto.', '说不定我们在音乐会上碰到。'],
      ],
      origin: `**quizá(s)** 来自古西语 *quiçab*，再往前是拉丁语 *qui sapit*「谁知道呢」——一个“谁知道”就成了“也许”。结尾的 *-s* 是后来加上的，和 *antes, entonces* 一样是副词常见的尾巴，所以 *quizá* 和 *quizás* 两种写法都正确。

**tal vez** 字面是“这样一次”：说不定就这一次是这样。`,
      pitfalls: ['❌ *A lo mejor venga.* ✅ *A lo mejor viene.*', '❌ *Puede que viene.* ✅ *Puede que venga.*', '❌ *Es probable que llegará tarde.* ✅ *Es probable que llegue tarde.*'],
      latam: '在阿根廷、乌拉圭的口语里，常用 *capaz que* 表示“也许”：*Capaz que llueve.*',
    },
    {
      id: 'b1-deber-de',
      title: 'deber 还是 deber de？supongo que, me imagino que',
      titleEs: 'Deber / deber de + infinitivo',
      level: 'B1',
      summary: 'deber + 原形 = 应该、必须（义务）；deber de + 原形 = 大概、想必（推测）。supongo que / me imagino que + 陈述式 也表示推测。',
      body: `### 义务 vs 推测
| 结构 | 意思 | 例句 |
|---|---|---|
| ***deber** + 原形* | 应该（义务、建议） | *Debes estudiar más.*（你应该多学习。） |
| ***deber de** + 原形* | 大概、想必（推测） | *Debe de tener unos cuarenta años.*（他大概四十岁左右。） |

> 口语中很多人用 *deber* 表示推测，西班牙皇家学院（RAE）也接受；但 **用 *deber de* 表示义务是错误的**。所以：表示义务时千万别加 *de*。

### 其他表示推测的方式
- ***Supongo que** está enfermo.*（我猜他病了。）
- ***Me imagino que** estarás cansado.*（我想你一定累了。）
- ***Tiene pinta de** ser caro.*（看起来挺贵的。）——口语
- ***Seguro que** te gusta.*（你肯定会喜欢。）

### 推测过去：deber de + haber + 过去分词
*Debe de haber salido.* = *Habrá salido.*（他大概已经出去了。）`,
      examples: [
        ['Debe de tener unos cuarenta años.', '他大概四十岁左右。'],
        ['Debes descansar más.', '你应该多休息。'],
        ['Supongo que está enfermo.', '我猜他病了。'],
        ['Me imagino que estarás cansado después del viaje.', '旅途之后你一定累了吧。'],
        ['No hay luz: deben de haber salido.', '灯是黑的：他们大概出去了。'],
      ],
      origin: `**deber** 来自拉丁语 *debere*，由 *de*「从」+ *habere*「拥有」组成——“从别人那里拿着的东西”，也就是 **欠**。英语 *debt*（债）、*debit*（借方）同源。所以 *deber* 的本义就是“欠着要做的事”→“应该”。

**suponer** ← *supponere*：*sub*「下面」+ *ponere*「放」——推测就是“先放在下面当作基础”的东西。英语 *suppose* 同源。`,
      pitfalls: ['❌ *Debes de estudiar más.*（义务）✅ *Debes estudiar más.*', '❌ *Supongo que esté enfermo.* ✅ *Supongo que está enfermo.*', '❌ *Debe de ser las diez.* ✅ *Deben de ser las diez.*：主语是 las diez，动词用复数。'],
    },
  ],
  words: [
    { id: 'tal-vez', es: 'tal vez', zh: '也许', pos: 'phr', level: 'B1', tags: ['func'], ex: ['Tal vez nos veamos mañana.', '也许我们明天见。'] },
    { id: 'a-lo-mejor', es: 'a lo mejor', zh: '说不定；也许', pos: 'phr', level: 'B1', tags: ['func'], ex: ['A lo mejor no le gusta el regalo.', '说不定他不喜欢这个礼物。'], note: '后面永远用陈述式。' },
    { id: 'posiblemente', es: 'posiblemente', zh: '可能', pos: 'adv', level: 'B1', tags: ['func'], ex: ['Posiblemente llegue mañana.', '他可能明天到。'] },
    { id: 'probable', es: 'probable', zh: '很可能的', pos: 'adj', level: 'B1', tags: ['adj'], ex: ['Es probable que llueva.', '很可能会下雨。'] },
    { id: 'improbable', es: 'improbable', zh: '不太可能的', pos: 'adj', level: 'B1', tags: ['adj'], ex: ['Es improbable que gane.', '他不太可能赢。'] },
    { id: 'probabilidad', es: 'probabilidad', zh: '可能性；概率', pos: 'n', g: 'f', level: 'B1', tags: ['func'], ex: ['Hay un treinta por ciento de probabilidad de lluvia.', '降雨概率百分之三十。'] },
    { id: 'suponer', es: 'suponer', zh: '猜想；假定；意味着', pos: 'v', level: 'B1', tags: ['verb'], ex: ['Supongo que tienes razón.', '我想你是对的。'], note: '变位同 poner：supongo, supuse。' },
    { id: 'imaginarse', es: 'imaginarse', zh: '想象；猜想', pos: 'v', level: 'B1', tags: ['verb'], ex: ['Me imagino que estarás cansado.', '我想你一定累了。'] },
    { id: 'adivinar', es: 'adivinar', zh: '猜', pos: 'v', level: 'B1', tags: ['verb'], ex: ['¡Adivina quién ha venido!', '猜猜谁来了！'], ety: '来自 divino「神的」：猜测原本是“像神一样预知”。' },
    { id: 'adivinanza', es: 'adivinanza', zh: '谜语', pos: 'n', g: 'f', level: 'B1', tags: ['hobby'], ex: ['Te voy a contar una adivinanza.', '我给你出个谜语。'] },
    { id: 'hipotesis', es: 'hipótesis', zh: '假设', pos: 'n', g: 'f', pl: 'hipótesis', level: 'B1', tags: ['func'], ex: ['Es solo una hipótesis.', '这只是个假设。'], ety: '希腊语 hypothesis：hypo「下面」+ thesis「放置」——和 suponer 的构词一模一样。' },
    { id: 'teoria', es: 'teoría', zh: '理论', pos: 'n', g: 'f', level: 'B1', tags: ['func'], ex: ['Tengo una teoría.', '我有个推论。'] },
    { id: 'duda', es: 'duda', zh: '疑问；怀疑', pos: 'n', g: 'f', level: 'B1', tags: ['func'], ex: ['Sin duda, es el mejor.', '毫无疑问，他是最好的。'], note: '¿Tienes alguna duda? = 你有什么问题吗？' },
    { id: 'dudar', es: 'dudar', zh: '怀疑；犹豫', pos: 'v', level: 'B1', tags: ['verb'], ex: ['Dudo que venga.', '我怀疑他不会来。'], note: 'dudar que + 虚拟式。', ety: '拉丁语 dubitare，来自 duo「二」：在两个选择之间摇摆。' },
    { id: 'inseguro', es: 'inseguro', zh: '没把握的；不安全的', pos: 'adj', f: 'insegura', level: 'B1', tags: ['feel'], ex: ['Me siento inseguro cuando hablo en público.', '当众讲话时我没自信。'] },
    { id: 'certeza', es: 'certeza', zh: '确定；把握', pos: 'n', g: 'f', level: 'B1', tags: ['func'], ex: ['No lo sé con certeza.', '我不确定。'] },
    { id: 'extraterrestre', es: 'extraterrestre', zh: '外星人；外星的', pos: 'n', g: 'mf', level: 'B1', tags: ['hobby'], ex: ['¿Crees en los extraterrestres?', '你相信有外星人吗？'], emoji: '👽' },
    { id: 'ovni', es: 'ovni', zh: '不明飞行物', pos: 'n', g: 'm', level: 'B1', tags: ['hobby'], ex: ['Dicen que vieron un ovni.', '他们说看到了不明飞行物。'], note: '缩写自 objeto volador no identificado。', emoji: '🛸' },
    { id: 'fantasma', es: 'fantasma', zh: '鬼魂；（口语）爱吹牛的人', pos: 'n', g: 'm', level: 'B1', tags: ['hobby'], ex: ['Dicen que en este castillo hay un fantasma.', '据说这座城堡里有鬼。'], emoji: '👻', note: '以 -a 结尾的阳性名词：el fantasma。' },
    { id: 'leyenda', es: 'leyenda', zh: '传说', pos: 'n', g: 'f', level: 'B1', tags: ['hobby'], ex: ['Según la leyenda, aquí hay un tesoro.', '据传说，这里有宝藏。'], ety: '拉丁语 legenda「应该读的东西」，来自 legere「读」。' },
    { id: 'magia', es: 'magia', zh: '魔法；魔术', pos: 'n', g: 'f', level: 'B1', tags: ['hobby'], ex: ['¡Parece magia!', '简直像魔法！'] },
    { id: 'mago', es: 'mago', zh: '魔术师；巫师', pos: 'n', g: 'm', f: 'maga', level: 'B1', tags: ['hobby'], ex: ['Los Reyes Magos traen regalos el seis de enero.', '东方三贤士在一月六日带来礼物。'] },
    { id: 'bruja', es: 'bruja', zh: '女巫', pos: 'n', g: 'f', level: 'B1', tags: ['hobby'], ex: ['En Galicia hay muchas historias de brujas.', '加利西亚有很多女巫的故事。'] },
    { id: 'horoscopo', es: 'horóscopo', zh: '星座运势', pos: 'n', g: 'm', level: 'B1', tags: ['hobby'], ex: ['¿Lees el horóscopo?', '你看星座运势吗？'] },
    { id: 'signo', es: 'signo', zh: '星座；符号', pos: 'n', g: 'm', level: 'B1', tags: ['hobby'], ex: ['¿De qué signo eres?', '你是什么星座？'] },
    { id: 'predecir', es: 'predecir', zh: '预言；预测', pos: 'v', level: 'B1', tags: ['verb'], ex: ['Nadie puede predecir el futuro.', '没人能预测未来。'], note: '变位同 decir：predigo, predije。' },
    { id: 'adivino', es: 'adivino', zh: '算命先生', pos: 'n', g: 'm', f: 'adivina', level: 'B1', tags: ['hobby'], ex: ['¡No soy adivino!', '我又不是神算子！'] },
    { id: 'inexplicable', es: 'inexplicable', zh: '无法解释的', pos: 'adj', level: 'B1', tags: ['adj'], ex: ['Es un fenómeno inexplicable.', '这是一个无法解释的现象。'] },
    { id: 'fenomeno', es: 'fenómeno', zh: '现象；（口语）了不起的人', pos: 'n', g: 'm', level: 'B1', tags: ['func'], ex: ['¡Eres un fenómeno!', '你太厉害了！'] },
    { id: 'prueba', es: 'prueba', zh: '证据；测试；试穿', pos: 'n', g: 'f', level: 'B1', tags: ['func'], ex: ['No hay pruebas de que exista.', '没有证据证明它存在。'] },
    { id: 'demostrar', es: 'demostrar', zh: '证明；表现出', pos: 'v', level: 'B1', tags: ['verb'], ex: ['¿Puedes demostrarlo?', '你能证明吗？'], note: 'o→ue：demuestro。' },
    { id: 'existir', es: 'existir', zh: '存在', pos: 'v', level: 'B1', tags: ['verb'], ex: ['¿Existen los fantasmas?', '鬼魂存在吗？'] },
    { id: 'realidad', es: 'realidad', zh: '现实', pos: 'n', g: 'f', level: 'B1', tags: ['func'], ex: ['En realidad, no es tan difícil.', '其实没那么难。'], note: 'en realidad = 其实。' },
    { id: 'imaginacion', es: 'imaginación', zh: '想象力', pos: 'n', g: 'f', level: 'B1', tags: ['func'], ex: ['Tiene mucha imaginación.', '他想象力很丰富。'] },
    { id: 'pesadilla', es: 'pesadilla', zh: '噩梦', pos: 'n', g: 'f', level: 'B1', tags: ['feel'], ex: ['Anoche tuve una pesadilla.', '我昨晚做了个噩梦。'], ety: '来自 pesada「沉重的」：噩梦像有东西压在胸口。' },
    { id: 'despertador', es: 'despertador', zh: '闹钟', pos: 'n', g: 'm', pl: 'despertadores', level: 'B1', tags: ['home'], ex: ['No ha sonado el despertador.', '闹钟没响。'], emoji: '⏰' },
    { id: 'retrasarse', es: 'retrasarse', zh: '晚点；耽搁', pos: 'v', level: 'B1', tags: ['verb', 'travel'], ex: ['El tren se ha retrasado.', '火车晚点了。'] },
    { id: 'explicacion', es: 'explicación', zh: '解释', pos: 'n', g: 'f', pl: 'explicaciones', level: 'B1', tags: ['func'], ex: ['Tiene que haber una explicación.', '一定有个解释。'] },
    { id: 'razonable', es: 'razonable', zh: '合理的', pos: 'adj', level: 'B1', tags: ['adj'], ex: ['Es un precio razonable.', '这是个合理的价格。'] },
    { id: 'piramide', es: 'pirámide', zh: '金字塔', pos: 'n', g: 'f', level: 'B1', tags: ['city'], ex: ['¿Cómo construyeron las pirámides?', '金字塔是怎么建成的？'] },
    { id: 'universo', es: 'universo', zh: '宇宙', pos: 'n', g: 'm', level: 'B1', tags: ['weather'], ex: ['¿Estamos solos en el universo?', '宇宙中只有我们吗？'] },
    { id: 'mentiroso', es: 'mentiroso', zh: '爱说谎的；骗子', pos: 'adj', f: 'mentirosa', level: 'B1', tags: ['feel'], ex: ['¡No te creo, mentiroso!', '我才不信你，骗子！'] },
    { id: 'apagado', es: 'apagado', zh: '关着的；熄灭的', pos: 'adj', f: 'apagada', level: 'B1', tags: ['adj'], ex: ['Tendrá el móvil apagado.', '他大概关机了。'] },
    { id: 'encendido', es: 'encendido', zh: '开着的；点着的', pos: 'adj', f: 'encendida', level: 'B1', tags: ['adj'], ex: ['Te has dejado la luz encendida.', '你没关灯。'] },
  ],
  sentences: [
    { id: 's1', es: 'No sé dónde está; estará en un atasco.', zh: '我不知道他在哪儿；大概在堵车吧。', g: ['b1-futuro-probabilidad'] },
    { id: 's2', es: '¿Quién será a estas horas?', zh: '这个点会是谁呢？', g: ['b1-futuro-probabilidad'], distract: ['es'] },
    { id: 's3', es: 'No contesta: habrá dejado el móvil en casa.', zh: '他不接电话：大概把手机落家里了。', g: ['b1-futuro-probabilidad'] },
    { id: 's4', es: 'Cuando llegué serían las tres de la mañana.', zh: '我到的时候大概是凌晨三点。', g: ['b1-futuro-probabilidad'], distract: ['serán'] },
    { id: 's5', es: 'Mi abuelo tendría veinte años en esta foto.', zh: '这张照片里我爷爷大概二十岁。', g: ['b1-futuro-probabilidad'] },
    { id: 's6', es: 'A lo mejor llueve mañana.', zh: '明天可能会下雨。', g: ['b1-quizas'], distract: ['llueva'] },
    { id: 's7', es: 'Puede que no venga a la fiesta.', zh: '他可能不来派对了。', g: ['b1-quizas'], distract: ['viene'] },
    { id: 's8', es: 'Quizás tengas razón.', zh: '也许你是对的。', g: ['b1-quizas'] },
    { id: 's9', es: 'Es probable que lleguemos tarde.', zh: '我们很可能会迟到。', g: ['b1-quizas'], distract: ['llegaremos'] },
    { id: 's10', es: 'Igual nos vemos en el concierto.', zh: '说不定我们在音乐会上碰到。', g: ['b1-quizas'] },
    { id: 's11', es: 'Debe de tener unos cuarenta años.', zh: '他大概四十岁左右。', g: ['b1-deber-de'] },
    { id: 's12', es: 'Debes descansar más.', zh: '你应该多休息。', g: ['b1-deber-de'], distract: ['de'] },
    { id: 's13', es: 'Supongo que está enfermo.', zh: '我猜他病了。', g: ['b1-deber-de'], distract: ['esté'] },
    { id: 's14', es: 'Me imagino que estarás cansado.', zh: '我想你一定累了。', g: ['b1-deber-de'] },
    { id: 's15', es: 'Tiene que haber una explicación.', zh: '一定有个解释。' },
    { id: 's16', es: '¿Crees en los fantasmas?', zh: '你相信有鬼吗？' },
    { id: 's17', es: 'Anoche tuve una pesadilla.', zh: '我昨晚做了个噩梦。' },
    { id: 's18', es: 'No ha sonado el despertador.', zh: '闹钟没响。' },
    { id: 's19', es: 'Dudo que venga hoy.', zh: '我怀疑他今天不会来。', g: ['b1-quizas'] },
    { id: 's20', es: '¿Dónde estarán mis llaves?', zh: '我的钥匙会在哪儿呢？', g: ['b1-futuro-probabilidad'] },
    { id: 's21', es: 'Seguro que te gusta.', zh: '你肯定会喜欢的。', g: ['b1-quizas'] },
    { id: 's22', es: 'Es posible que haya una huelga.', zh: '可能会有罢工。', g: ['b1-quizas'] },
    { id: 's23', es: 'No hay luz: deben de haber salido.', zh: '灯是黑的：他们大概出去了。', g: ['b1-deber-de'] },
    { id: 's24', es: 'Tal vez nos veamos mañana.', zh: '也许我们明天见。', g: ['b1-quizas'] },
    { id: 's25', es: 'Nadie puede predecir el futuro.', zh: '没人能预测未来。' },
  ],
  cloze: [
    { id: 'c1', text: '—¿Dónde está Ana? —No sé, ___ en la biblioteca.', answers: ['estará'], options: ['estará', 'estaría', 'esté'], zh: '——安娜在哪儿？——不知道，大概在图书馆。', g: ['b1-futuro-probabilidad'] },
    { id: 'c2', text: '—¿Qué hora es? —No tengo reloj, ___ las cinco.', answers: ['serán'], hint: 'ser', zh: '——几点了？——我没戴表，大概五点吧。', g: ['b1-futuro-probabilidad'] },
    { id: 'c3', text: 'No contesta: ___ (él) el móvil en casa.', answers: ['habrá dejado'], hint: 'dejar', zh: '他不接电话：大概把手机落在家里了。', g: ['b1-futuro-probabilidad'] },
    { id: 'c4', text: 'Cuando nos conocimos, ella ___ unos veinte años.', answers: ['tendría'], options: ['tendría', 'tendrá', 'tenga'], zh: '我们认识的时候，她大概二十岁。', g: ['b1-futuro-probabilidad'], explain: '猜测过去用条件式。' },
    { id: 'c5', text: '¿Quién ___ a estas horas?', answers: ['será'], hint: 'ser', zh: '这个点会是谁呢？', g: ['b1-futuro-probabilidad'] },
    { id: 'c6', text: 'A lo mejor ___ (nosotros) al cine esta noche.', answers: ['vamos'], options: ['vamos', 'vayamos', 'iremos a'], zh: '说不定我们今晚去看电影。', g: ['b1-quizas'], explain: 'a lo mejor 后面用陈述式。' },
    { id: 'c7', text: 'Puede que ___ (llover) esta tarde.', answers: ['llueva'], hint: 'llover', zh: '今天下午可能下雨。', g: ['b1-quizas'] },
    { id: 'c8', text: 'Es probable que el tren ___ retraso.', answers: ['tenga'], hint: 'tener', zh: '火车很可能晚点。', g: ['b1-quizas'] },
    { id: 'c9', text: 'Es posible que mis padres todavía no lo ___.', answers: ['sepan'], hint: 'saber', zh: '我父母可能还不知道。', g: ['b1-quizas'] },
    { id: 'c10', text: 'Igual ___ (yo) mañana: no estoy seguro.', answers: ['vengo'], options: ['vengo', 'venga', 'vendría'], zh: '说不定我明天来：我不确定。', g: ['b1-quizas'] },
    { id: 'c11', text: 'Dudo que ___ (él) la verdad.', answers: ['diga'], hint: 'decir', zh: '我怀疑他说的是实话。', g: ['b1-quizas'] },
    { id: 'c12', text: 'Ese reloj debe ___ ser muy caro.', answers: ['de'], options: ['de', 'que', 'a'], zh: '那块表想必很贵。', g: ['b1-deber-de'] },
    { id: 'c13', text: 'Si estás cansado, ___ descansar.', answers: ['debes'], options: ['debes', 'debes de', 'deberás de'], zh: '你累了的话，应该休息。', g: ['b1-deber-de'], explain: '表示义务，不加 de。' },
    { id: 'c14', text: 'Supongo que ___ (él) enfermo.', answers: ['está'], options: ['está', 'esté', 'estar'], zh: '我猜他病了。', g: ['b1-deber-de'] },
    { id: 'c15', text: 'Me imagino que ___ (tú) muy cansado después del viaje.', answers: ['estarás'], hint: 'estar', zh: '我想你旅途之后一定很累。', g: ['b1-deber-de'] },
    { id: 'c16', text: 'Las luces están apagadas: ___ salido.', answers: ['habrán'], hint: 'haber', zh: '灯都关着：他们大概出去了。', g: ['b1-futuro-probabilidad'] },
    { id: 'c17', text: 'Quizás ___ (tú) razón.', answers: ['tengas', 'tienes'], hint: 'tener', zh: '也许你是对的。', g: ['b1-quizas'] },
    { id: 'c18', text: 'No sé si es verdad, pero ___ que sí.', answers: ['supongo'], hint: 'suponer', zh: '我不知道是不是真的，但我想是吧。', g: ['b1-deber-de'] },
  ],
  conj: [
    { verbs: ['estar', 'tener', 'ser', 'haber', 'hacer', 'poder', 'saber', 'salir'], tenses: ['fut'], g: 'b1-futuro-probabilidad' },
    { verbs: ['salir', 'olvidar', 'perder', 'ir', 'hacer', 'decir'], tenses: ['futperf'], g: 'b1-futuro-probabilidad' },
    { verbs: ['ser', 'estar', 'tener', 'haber'], tenses: ['cond'], g: 'b1-futuro-probabilidad' },
  ],
  dialogues: [
    {
      id: 'b1-u07-d1',
      title: '卢卡斯怎么还没来？ · ¿Dónde estará Lucas?',
      lines: [
        { who: 'Elena', es: 'Son las nueve y media y Lucas no ha llegado. ¿Dónde estará?', zh: '都九点半了卢卡斯还没到。他会在哪儿呢？' },
        { who: 'Wang Lei', es: 'Estará en un atasco. A esta hora hay mucho tráfico.', zh: '大概在堵车吧。这个点车很多。' },
        { who: 'Elena', es: 'Pero si siempre viene en metro…', zh: '可他一直是坐地铁来的呀……' },
        { who: 'Wang Lei', es: 'Pues a lo mejor se ha quedado dormido. Ayer trabajó hasta muy tarde.', zh: '那说不定他睡过头了。他昨天工作到很晚。' },
        { who: 'Elena', es: 'Puede ser. Lo he llamado dos veces y no contesta.', zh: '有可能。我给他打了两次电话都没人接。' },
        { who: 'Wang Lei', es: 'Habrá dejado el móvil en silencio. O se habrá quedado sin batería, como siempre.', zh: '他大概把手机调静音了。要不然就是又没电了，老样子。' },
        { who: 'Elena', es: 'Debe de estar a punto de llegar. ¡Mira! Ahí viene… ¡con un ramo de flores!', zh: '他应该快到了。看！他来了……还拿着一束花！' },
        { who: 'Wang Lei', es: 'Ah, claro. ¡Hoy es tu cumpleaños! Ya decía yo…', zh: '啊，对了。今天是你生日！我就说嘛……' },
      ],
    },
  ],
  readings: [
    {
      id: 'b1-r13',
      level: 'B1',
      title: 'El misterio de las líneas de Nazca',
      titleZh: '纳斯卡线条之谜',
      topic: '谜团',
      paras: [
        [
          ['En el desierto del sur de Perú hay cientos de figuras gigantes dibujadas en el suelo: un mono, una araña, un colibrí… Solo se pueden ver bien desde el aire.', '在秘鲁南部的沙漠里，地面上画着数百个巨大的图形：一只猴子、一只蜘蛛、一只蜂鸟……只有从空中才能看清楚。'],
        ],
        [
          ['Los expertos creen que las hizo la cultura nazca hace unos dos mil años. Pero ¿para qué? Nadie lo sabe con certeza.', '专家们认为，这些图形是纳斯卡文化大约两千年前留下的。可是，为什么要画它们？没人知道确切答案。'],
          ['Según una teoría, las líneas serían un enorme calendario que servía para saber cuándo empezaban las estaciones. Otros piensan que quizás formaban parte de ceremonias para pedir agua, porque en el desierto casi nunca llueve.', '有一种理论认为，这些线条可能是一部巨大的历法，用来判断季节何时开始。也有人认为，它们也许是求雨仪式的一部分，因为沙漠里几乎从不下雨。'],
        ],
        [
          ['También hay hipótesis más fantásticas: algunas personas dicen que a lo mejor eran señales para los extraterrestres. Los científicos, por supuesto, no están de acuerdo.', '也有更离奇的假设：有人说，它们说不定是给外星人的信号。当然，科学家们并不认同。'],
          ['Puede que nunca sepamos la verdad. Y tal vez por eso las líneas de Nazca son tan fascinantes.', '也许我们永远不会知道真相。说不定正因如此，纳斯卡线条才这么迷人。'],
        ],
      ],
      gloss: { figuras: '图形', gigantes: '巨大的', araña: '蜘蛛', colibrí: '蜂鸟', expertos: '专家', calendario: '历法', estaciones: '季节', ceremonias: '仪式', señales: '信号', fascinantes: '迷人的' },
      questions: [
        { type: 'mc', q: '纳斯卡线条从哪里看得最清楚？', options: ['地面上', '空中', '山顶上'], answer: 1 },
        { type: 'mc', q: '下面哪一个不是文中提到的理论？', options: ['历法', '求雨仪式', '古代道路'], answer: 2 },
        { type: 'tf', q: '科学家们相信这些线条是给外星人的信号。', answer: false, explain: 'Los científicos, por supuesto, no están de acuerdo.' },
      ],
    },
    {
      id: 'b1-r14',
      level: 'B1',
      title: 'La foto del abuelo',
      titleZh: '爷爷的老照片',
      topic: '推测',
      paras: [
        [
          ['Ayer, ordenando el trastero de mis abuelos, encontré una foto antigua en blanco y negro. No tiene fecha, pero será de los años sesenta.', '昨天整理爷爷奶奶家储物间时，我找到一张黑白老照片。上面没有日期，大概是六十年代的。'],
        ],
        [
          ['En la foto hay un grupo de jóvenes delante de una fábrica. El chico de la izquierda debe de ser mi abuelo: tiene la misma sonrisa. Tendría unos veinte años.', '照片上是一群年轻人，站在一家工厂前面。左边那个小伙子想必是我爷爷：笑容一模一样。那时他大概二十岁左右。'],
          ['La chica que está a su lado no es mi abuela. ¿Quién será? A lo mejor era una compañera de trabajo… o quizás fue su primera novia.', '他旁边的女孩不是我奶奶。会是谁呢？说不定是同事……也可能是他的初恋。'],
        ],
        [
          ['Esta tarde se la voy a enseñar. Seguro que me cuenta una historia interesante. Mi abuela, por supuesto, también querrá saber quién es esa chica.', '今天下午我要拿给爷爷看。他肯定会给我讲一个有意思的故事。当然，奶奶也会想知道那个女孩是谁。'],
        ],
      ],
      gloss: { ordenando: '整理', trastero: '储物间', antigua: '旧的', grupo: '一群', fábrica: '工厂', sonrisa: '笑容', compañera: '同事', querrá: '会想（querer 将来时）' },
      questions: [
        { type: 'mc', q: '作者怎么知道左边的人是爷爷？', options: ['照片背面写着名字', '笑容一样', '奶奶告诉他的'], answer: 1 },
        { type: 'mc', q: '照片大概是什么时候拍的？', options: ['五十年代', '六十年代', '八十年代'], answer: 1 },
        { type: 'tf', q: '作者确定旁边的女孩是爷爷的初恋。', answer: false, explain: 'A lo mejor era una compañera… o quizás fue su primera novia.' },
      ],
    },
  ],
  writing: [{ id: 'w1', prompt: '找一张你不太了解的照片（或者想象一张），猜一猜：照片里的人是谁、在哪里、多大年纪、在做什么、后来发生了什么。用上将来时、条件式和 a lo mejor / puede que。', words: [80, 140], hints: ['Será… / Estarán en…', 'Tendría unos… años.', 'A lo mejor… / Puede que…', 'Debe de ser…'] }],
}
