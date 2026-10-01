import type { Unit } from '../types'

export const u02: Unit = {
  id: 'b2-u02',
  level: 'B2',
  order: 2,
  title: '要是当初……',
  titleEs: 'Si lo hubiera sabido…',
  icon: '🔙',
  goals: ['掌握虚拟式过去完成时和复合条件式', '用 si hubiera…, habría… 谈论过去没有发生的事', '用混合条件句连接过去和现在', '表达遗憾、责备和“马后炮”'],
  grammar: [
    {
      id: 'b2-subj-plusc',
      title: '虚拟式过去完成时',
      titleEs: 'El pretérito pluscuamperfecto de subjuntivo',
      level: 'B2',
      summary: 'hubiera / hubiese + 过去分词。主句是过去时，从句说的是更早已经完成的事：Me alegré de que hubieras venido. Ojalá hubiera estudiado más.',
      body: `### 构成：haber 的虚拟式过去时 + 过去分词
| 人称 | -ra | -se | + 过去分词 |
|---|---|---|---|
| yo | **hubiera** | **hubiese** | hablado |
| tú | **hubieras** | **hubieses** | comido |
| él / ella / usted | **hubiera** | **hubiese** | vivido |
| nosotros | **hubiéramos** | **hubiésemos** | hecho |
| vosotros | **hubierais** | **hubieseis** | dicho |
| ellos / ustedes | **hubieran** | **hubiesen** | visto |

### 用法 1：过去主句 + 更早的动作
*Me alegré de que **hubieras venido**.*（你来了，我当时很高兴。）
*No creía que lo **hubiera hecho** él.*（我当时不相信是他干的。）

### 用法 2：ojalá + 过去完成时 = 对过去的遗憾
*Ojalá **hubiera estudiado** más.*（要是当初多学点就好了。）
*Ojalá no se lo **hubiera dicho**.*（要是我没告诉他就好了。）

### 用法 3：过去的假设（见下一个语法点）
*Si **hubiera salido** antes, no **habría perdido** el tren.*`,
      examples: [
        ['Me alegré mucho de que hubieras venido.', '你来了，我当时特别高兴。'],
        ['No creía que lo hubiera hecho él.', '我当时不相信是他干的。'],
        ['Ojalá hubiera estudiado más en el instituto.', '要是高中时多学点就好了。'],
        ['Ojalá no se lo hubiera contado a nadie.', '要是我没告诉任何人就好了。'],
        ['Fue una pena que no hubieras visto la exposición.', '你没看到那个展览，真可惜。'],
      ],
      tables: [{ verbs: ['hacer', 'ver', 'decir'], tense: 'subjPlusc' }],
      origin: `西班牙语的复合时态全部用 **haber** 做助动词。但在中世纪，表示移动的动词用的是 **ser**，就像今天的法语、意大利语：*es venido*（他来了），对应法语 *il est venu*、意大利语 *è venuto*。到 16、17 世纪，*haber* 一统天下，*ser* 才退出了复合时态。

**haber** 来自拉丁语 *habere*「拥有」：*he comido* 最初的意思是“我拥有一个吃过的（东西）”——一种“完成后的状态”。`,
      pitfalls: ['❌ *Ojalá habría venido.* ✅ *Ojalá hubiera venido.*', '❌ *hubieramos* ✅ *hubiéramos*（重音）。', '❌ *Me alegré de que habías venido.* ✅ *Me alegré de que hubieras venido.*'],
    },
    {
      id: 'b2-si-pasado',
      title: '过去的非真实条件：si hubiera…, habría…',
      titleEs: 'Condicionales irreales en pasado',
      level: 'B2',
      summary: 'si + 虚拟式过去完成时，复合条件式（habría + 过去分词）：谈论过去没有发生的事及其想象中的结果。主句也可以用 hubiera + 过去分词（但不能用 hubiese）。',
      body: `### 结构
**Si + hubiera + 过去分词, habría + 过去分词**

*Si **hubiera salido** antes, no **habría perdido** el tren.*
（要是早点出门，我就不会错过火车了。——但我没早出门，也确实错过了）

### 复合条件式：habría, habrías, habría, habríamos, habríais, habrían + 过去分词

### 主句的两种说法
| 主句 | 例句 | 说明 |
|---|---|---|
| *habría* + 过去分词 | *…no **habría perdido** el tren.* | 最标准 |
| *hubiera* + 过去分词 | *…no **hubiera perdido** el tren.* | 也正确，口语很常见 |
| ~~*hubiese* + 过去分词~~ | | 主句里 **不能** 用 -se 形式 |

### 更简洁的说法：de + haber + 过去分词
***De haberlo sabido**, no habría venido.* = *Si lo hubiera sabido, …*（早知道我就不来了。）

### 后悔的另外两种说法
- *(No) Debería / Tendría que **haber** + 过去分词*：*Debería haber estudiado más.*（我本该多学点的。）
- *(No) Debí + 原形*：*No debí decírselo.*（我不该告诉他的。）`,
      examples: [
        ['Si hubiera salido antes, no habría perdido el tren.', '要是早点出门，我就不会错过火车了。'],
        ['Si me lo hubieras dicho, te habría ayudado.', '你要是告诉了我，我就帮你了。'],
        ['De haberlo sabido, no habría venido.', '早知道我就不来了。'],
        ['Debería haber estudiado más para el examen.', '我本该为考试多学点的。'],
        ['No debí decírselo.', '我不该告诉他的。'],
      ],
      tables: [{ verbs: ['poder', 'tener', 'ir'], tense: 'condperf' }],
      origin: `为什么主句能用 *hubiera* 却不能用 *hubiese*？答案在上个单元：**-ra 形式来自拉丁语的陈述式过去完成时**（*amaveram*「我曾爱过」），原本就能单独做主句；而 **-se** 来自虚拟式（*amavissem*），一直只用于从句。所以 *no hubiera venido* 里，-ra 还保留着它“陈述式”的老身份。`,
      pitfalls: ['❌ *Si habría sabido…* ✅ *Si hubiera sabido…*：si 后面不用条件式。', '❌ *…no hubiese venido.*（主句）✅ *…no habría venido / no hubiera venido.*', '❌ *Debería de haber ido.*（义务）✅ *Debería haber ido.*'],
    },
    {
      id: 'b2-mixtas',
      title: '混合条件句：过去的条件，现在的结果',
      titleEs: 'Condicionales mixtas',
      level: 'B2',
      summary: '过去的条件 → 现在的结果：Si hubiera estudiado medicina, ahora sería médica. 现在（一贯）的条件 → 过去的结果：Si fuera más ordenado, no habría perdido las llaves.',
      body: `现实生活中，“如果”和“结果”常常不在同一个时间。

### 过去的条件 → 现在的结果
**si + 虚拟式过去完成时，条件式（简单）**
*Si **hubiera aceptado** aquel trabajo, ahora **viviría** en Barcelona.*
（要是当初接受了那份工作，我现在就住在巴塞罗那了。）
*Si no **hubiéramos perdido** el vuelo, ahora **estaríamos** en la playa.*

### 现在的特点 → 过去的结果
**si + 虚拟式过去时，复合条件式**
*Si **fuera** más ordenado, no **habría perdido** las llaves.*
（我要是更有条理一点，就不会丢钥匙了。——我一贯没条理）
*Si **hablara** bien inglés, me **habrían dado** el puesto.*

### 小结
| 条件 | 结果 | 结构 |
|---|---|---|
| 过去 | 过去 | *hubiera* + 分词 → *habría* + 分词 |
| 过去 | **现在** | *hubiera* + 分词 → **条件式** |
| **现在** | 过去 | **虚拟式过去时** → *habría* + 分词 |

### 马后炮
***A toro pasado**, todo el mundo sabe lo que habría hecho.*（事后诸葛亮谁都会当。）`,
      examples: [
        ['Si hubiera aceptado aquel trabajo, ahora viviría en Barcelona.', '要是当初接受了那份工作，我现在就住在巴塞罗那了。'],
        ['Si hubiera estudiado medicina, ahora sería médica.', '要是当初学了医，我现在就是医生了。'],
        ['Si fuera más ordenado, no habría perdido las llaves.', '我要是更有条理，就不会丢钥匙了。'],
        ['Si hablara bien inglés, me habrían dado el puesto.', '要是我英语说得好，他们就会给我那个职位了。'],
        ['A toro pasado, todo el mundo sabe lo que habría hecho.', '事后诸葛亮谁都会当。'],
      ],
      origin: `**arrepentirse** 来自拉丁语 *paenitere*「感到懊悔」，和 *penitencia*（忏悔、苦修）同根。英语 *repent*（悔改）、*penitent*（悔过的）也来自它。

**a toro pasado**（字面：“牛跑过去之后”）来自斗牛：牛冲过去以后，谁都能说出刚才该怎么躲——这就是西班牙版的“事后诸葛亮”。`,
      pitfalls: ['❌ *Si hubiera estudiado medicina, ahora habría sido médica.* ✅ *…ahora sería médica.*：结果在现在，用简单条件式。', '❌ *Si sería más ordenado…* ✅ *Si fuera más ordenado…*'],
    },
  ],
  words: [
    { id: 'arrepentimiento', es: 'arrepentimiento', zh: '后悔', pos: 'n', g: 'm', level: 'B2', tags: ['feel'], ex: ['No siento ningún arrepentimiento.', '我一点也不后悔。'] },
    { id: 'lamentar', es: 'lamentar', zh: '遗憾；惋惜', pos: 'v', level: 'B2', tags: ['verb', 'feel'], ex: ['Lamento mucho lo que pasó.', '对发生的事我深感遗憾。'], note: 'lamentar que + 虚拟式。' },
    { id: 'remordimiento', es: 'remordimiento', zh: '内疚；良心不安', pos: 'n', g: 'm', level: 'B2', tags: ['feel'], ex: ['Tenía remordimientos por no haberla llamado.', '没给她打电话，他心里很内疚。'], ety: '来自 remorder「反复咬」：良心一遍遍地“咬”你。' },
    { id: 'equivocacion', es: 'equivocación', zh: '错误；失误', pos: 'n', g: 'f', pl: 'equivocaciones', level: 'B2', tags: ['func'], ex: ['Fue una equivocación.', '那是个失误。'] },
    { id: 'acertar', es: 'acertar', zh: '猜中；做对', pos: 'v', level: 'B2', tags: ['verb'], ex: ['Acertaste con el regalo.', '你的礼物选对了。'], note: 'e→ie：acierto。' },
    { id: 'acierto', es: 'acierto', zh: '正确的选择', pos: 'n', g: 'm', level: 'B2', tags: ['func'], ex: ['Mudarnos aquí fue un acierto.', '搬到这里是个明智的决定。'] },
    { id: 'decision', es: 'decisión', zh: '决定', pos: 'n', g: 'f', pl: 'decisiones', level: 'B2', tags: ['func'], ex: ['Fue la decisión más difícil de mi vida.', '这是我一生中最难的决定。'], note: 'tomar una decisión = 做决定。' },
    { id: 'eleccion', es: 'elección', zh: '选择；选举', pos: 'n', g: 'f', pl: 'elecciones', level: 'B2', tags: ['func'], ex: ['No tuve elección.', '我别无选择。'] },
    { id: 'escoger', es: 'escoger', zh: '挑选', pos: 'v', level: 'B2', tags: ['verb'], ex: ['Escoge el que más te guste.', '挑一个你最喜欢的。'], note: 'g→j：escojo。' },
    { id: 'dejar-pasar', es: 'dejar pasar', zh: '错过；放过', pos: 'phr', level: 'B2', tags: ['func'], ex: ['No dejes pasar esta oportunidad.', '别错过这个机会。'] },
    { id: 'consecuencia', es: 'consecuencia', zh: '后果', pos: 'n', g: 'f', level: 'B2', tags: ['func'], ex: ['Tendrás que asumir las consecuencias.', '你得承担后果。'] },
    { id: 'desgracia', es: 'desgracia', zh: '不幸；灾祸', pos: 'n', g: 'f', level: 'B2', tags: ['feel'], ex: ['Fue una desgracia para toda la familia.', '这对全家来说是一场不幸。'] },
    { id: 'tragedia', es: 'tragedia', zh: '悲剧', pos: 'n', g: 'f', level: 'B2', tags: ['feel'], ex: ['No es una tragedia: solo es un examen.', '这不是什么悲剧：只是一场考试而已。'] },
    { id: 'catastrofe', es: 'catástrofe', zh: '灾难', pos: 'n', g: 'f', level: 'B2', tags: ['weather'], ex: ['El terremoto fue una catástrofe.', '那场地震是一场灾难。'] },
    { id: 'advertir', es: 'advertir', zh: '警告；提醒', pos: 'v', level: 'B2', tags: ['verb'], ex: ['Te lo advertí.', '我早就提醒过你。'], note: 'e→ie / i：advierto，advirtió。' },
    { id: 'advertencia', es: 'advertencia', zh: '警告', pos: 'n', g: 'f', level: 'B2', tags: ['func'], ex: ['No hizo caso de la advertencia.', '他没理会警告。'] },
    { id: 'imprudencia', es: 'imprudencia', zh: '轻率；鲁莽', pos: 'n', g: 'f', level: 'B2', tags: ['feel'], ex: ['El accidente fue por una imprudencia.', '事故是鲁莽造成的。'] },
    { id: 'despiste', es: 'despiste', zh: '一时疏忽；走神', pos: 'n', g: 'm', level: 'B2', tags: ['feel'], ex: ['Perdona, ha sido un despiste.', '抱歉，是我一时疏忽。'] },
    { id: 'descuido', es: 'descuido', zh: '疏忽', pos: 'n', g: 'm', level: 'B2', tags: ['feel'], ex: ['Por un descuido, dejó la puerta abierta.', '他一时疏忽没关门。'] },
    { id: 'olvido', es: 'olvido', zh: '遗忘；疏忽', pos: 'n', g: 'm', level: 'B2', tags: ['feel'], ex: ['Fue un olvido, no lo hice a propósito.', '是我忘了，不是故意的。'] },
    { id: 'distraccion', es: 'distracción', zh: '分心；消遣', pos: 'n', g: 'f', pl: 'distracciones', level: 'B2', tags: ['feel'], ex: ['El móvil es una distracción constante.', '手机让人不断分心。'] },
    { id: 'demasiado-tarde', es: 'demasiado tarde', zh: '太迟了', pos: 'phr', level: 'B2', tags: ['time'], ex: ['Cuando me di cuenta, ya era demasiado tarde.', '等我意识到时，已经太迟了。'] },
    { id: 'retroceder', es: 'retroceder', zh: '后退；倒退', pos: 'v', level: 'B2', tags: ['verb'], ex: ['Si pudiera retroceder en el tiempo…', '要是能让时光倒流……'] },
    { id: 'rectificar', es: 'rectificar', zh: '改正；纠正', pos: 'v', level: 'B2', tags: ['verb'], ex: ['Rectificar es de sabios.', '知错能改是智者所为。'], note: 'c→qu：rectifiqué。' },
    { id: 'corregir', es: 'corregir', zh: '改正；批改', pos: 'v', level: 'B2', tags: ['verb'], ex: ['La profesora corrige los exámenes los domingos.', '老师周日批改试卷。'], note: 'e→i，g→j：corrijo。' },
    { id: 'compensar', es: 'compensar', zh: '弥补；值得', pos: 'v', level: 'B2', tags: ['verb'], ex: ['¿Cómo puedo compensarte?', '我怎么补偿你？'], note: 'No me compensa = 不值得。' },
    { id: 'asumir', es: 'asumir', zh: '承担；接受', pos: 'v', level: 'B2', tags: ['verb'], ex: ['Hay que asumir los errores.', '要敢于承认错误。'], en: '“假朋友”：asumir 主要是“承担”，英语 assume（假设）多说 suponer。' },
    { id: 'reprochar', es: 'reprochar', zh: '责备', pos: 'v', level: 'B2', tags: ['verb'], ex: ['No te reprocho nada.', '我不怪你。'] },
    { id: 'reproche', es: 'reproche', zh: '责备', pos: 'n', g: 'm', level: 'B2', tags: ['feel'], ex: ['Me miró con reproche.', '他用责备的眼神看着我。'] },
    { id: 'echar-en-cara', es: 'echar en cara', zh: '当面指责；翻旧账', pos: 'phr', level: 'B2', tags: ['people'], ex: ['Siempre me echa en cara que llegué tarde a su boda.', '他总拿我参加他婚礼迟到的事说我。'] },
    { id: 'disculpa', es: 'disculpa', zh: '道歉；借口', pos: 'n', g: 'f', level: 'B2', tags: ['people'], ex: ['Te debo una disculpa.', '我欠你一个道歉。'], note: 'pedir disculpas = 道歉。' },
    { id: 'disculparse', es: 'disculparse', zh: '道歉', pos: 'v', level: 'B2', tags: ['verb', 'people'], ex: ['Se disculpó por el retraso.', '他为迟到道了歉。'] },
    { id: 'batalla', es: 'batalla', zh: '战役；斗争', pos: 'n', g: 'f', level: 'B2', tags: ['city'], ex: ['La batalla duró tres días.', '战斗持续了三天。'] },
    { id: 'derrota', es: 'derrota', zh: '失败', pos: 'n', g: 'f', level: 'B2', tags: ['hobby'], ex: ['Fue una derrota dolorosa.', '这是一场惨痛的失败。'] },
    { id: 'victoria', es: 'victoria', zh: '胜利', pos: 'n', g: 'f', level: 'B2', tags: ['hobby'], ex: ['Celebraron la victoria toda la noche.', '他们庆祝胜利到天亮。'] },
    { id: 'vencer', es: 'vencer', zh: '战胜；到期', pos: 'v', level: 'B2', tags: ['verb'], ex: ['Venció el miedo y habló en público.', '他战胜了恐惧，当众发言。'], note: 'c→z：venzo。' },
    { id: 'imperio', es: 'imperio', zh: '帝国', pos: 'n', g: 'm', level: 'B2', tags: ['city'], ex: ['El Imperio romano duró siglos.', '罗马帝国延续了几个世纪。'] },
    { id: 'hecho', es: 'hecho', zh: '事实；事件', pos: 'n', g: 'm', level: 'B2', tags: ['func'], ex: ['Es un hecho histórico.', '这是一个历史事实。'] },
    { id: 'acontecimiento', es: 'acontecimiento', zh: '大事；事件', pos: 'n', g: 'm', level: 'B2', tags: ['func'], ex: ['Fue el acontecimiento del año.', '这是年度大事。'] },
    { id: 'transcurrir', es: 'transcurrir', zh: '（时间）流逝；（事情）进行', pos: 'v', level: 'B2', tags: ['verb'], ex: ['La reunión transcurrió sin problemas.', '会议进行得很顺利。'] },
    { id: 'rumbo', es: 'rumbo', zh: '方向；航向', pos: 'n', g: 'm', level: 'B2', tags: ['travel'], ex: ['Su vida cambió de rumbo.', '他的人生改变了方向。'] },
    { id: 'encrucijada', es: 'encrucijada', zh: '十字路口；抉择关头', pos: 'n', g: 'f', level: 'B2', tags: ['func'], ex: ['Estoy en una encrucijada.', '我正处在人生的十字路口。'], ety: '来自 cruz「十字」。' },
    { id: 'dilema', es: 'dilema', zh: '两难', pos: 'n', g: 'm', level: 'B2', tags: ['func'], ex: ['Tengo un dilema.', '我左右为难。'], note: '以 -a 结尾的阳性名词：el dilema。' },
    { id: 'vacilar', es: 'vacilar', zh: '犹豫；（口语）开玩笑', pos: 'v', level: 'B2', tags: ['verb'], ex: ['Aceptó sin vacilar.', '他毫不犹豫地答应了。'], note: '西班牙口语：¿Me estás vacilando? = 你在逗我吗？' },
    { id: 'indeciso', es: 'indeciso', zh: '犹豫不决的', pos: 'adj', f: 'indecisa', level: 'B2', tags: ['feel'], ex: ['Soy muy indeciso.', '我很优柔寡断。'] },
    { id: 'decidido', es: 'decidido', zh: '果断的；下定决心的', pos: 'adj', f: 'decidida', level: 'B2', tags: ['feel'], ex: ['Está decidida a cambiar de trabajo.', '她决心换工作。'] },
    { id: 'consolar', es: 'consolar', zh: '安慰', pos: 'v', level: 'B2', tags: ['verb', 'feel'], ex: ['Intenté consolarla.', '我试着安慰她。'], note: 'o→ue：consuelo。' },
    { id: 'consuelo', es: 'consuelo', zh: '安慰', pos: 'n', g: 'm', level: 'B2', tags: ['feel'], ex: ['Es un pequeño consuelo.', '这算是个小小的安慰。'] },
    { id: 'resignarse', es: 'resignarse', zh: '认命；无奈接受', pos: 'v', level: 'B2', tags: ['verb', 'feel'], ex: ['No me resigno a perder.', '我不甘心输。'], en: '“假朋友”：resignarse 是“认命”，英语 resign（辞职）是 dimitir。' },
    { id: 'mirar-atras', es: 'mirar atrás', zh: '回首过去', pos: 'phr', level: 'B2', tags: ['feel'], ex: ['No hay que mirar atrás.', '不要回头看。'] },
    { id: 'pasar-pagina', es: 'pasar página', zh: '翻篇；向前看', pos: 'phr', level: 'B2', tags: ['feel'], ex: ['Ya es hora de pasar página.', '是时候翻篇了。'] },
    { id: 'a-toro-pasado', es: 'a toro pasado', zh: '事后（诸葛亮）', pos: 'phr', level: 'B2', tags: ['func'], ex: ['A toro pasado es muy fácil opinar.', '事后评论谁都会。'] },
    { id: 'mas-vale-tarde-que-nunca', es: 'más vale tarde que nunca', zh: '迟做总比不做好', pos: 'phr', level: 'B2', tags: ['func'], ex: ['Empecé a estudiar piano a los cincuenta: más vale tarde que nunca.', '我五十岁开始学钢琴：迟到总比不到好。'] },
  ],
  sentences: [
    { id: 's1', es: 'Me alegré mucho de que hubieras venido.', zh: '你来了，我当时特别高兴。', g: ['b2-subj-plusc'], distract: ['habías'] },
    { id: 's2', es: 'No creía que lo hubiera hecho él.', zh: '我当时不相信是他干的。', g: ['b2-subj-plusc'] },
    { id: 's3', es: 'Ojalá hubiera estudiado más en el instituto.', zh: '要是高中时多学点就好了。', g: ['b2-subj-plusc'], distract: ['habría'] },
    { id: 's4', es: 'Ojalá no se lo hubiera contado a nadie.', zh: '要是我没告诉任何人就好了。', g: ['b2-subj-plusc'] },
    { id: 's5', es: 'Si hubiera salido antes, no habría perdido el tren.', zh: '要是早点出门，我就不会错过火车了。', g: ['b2-si-pasado'], distract: ['habría'] },
    { id: 's6', es: 'Si me lo hubieras dicho, te habría ayudado.', zh: '你要是告诉了我，我就帮你了。', g: ['b2-si-pasado'] },
    { id: 's7', es: 'De haberlo sabido, no habría venido.', zh: '早知道我就不来了。', g: ['b2-si-pasado'] },
    { id: 's8', es: 'Debería haber estudiado más para el examen.', zh: '我本该为考试多学点的。', g: ['b2-si-pasado'], distract: ['de'] },
    { id: 's9', es: 'No debí decírselo.', zh: '我不该告诉他的。', g: ['b2-si-pasado'] },
    { id: 's10', es: 'Si hubiera aceptado aquel trabajo, ahora viviría en Barcelona.', zh: '要是当初接受了那份工作，我现在就住在巴塞罗那了。', g: ['b2-mixtas'] },
    { id: 's11', es: 'Si hubiera estudiado medicina, ahora sería médica.', zh: '要是当初学了医，我现在就是医生了。', g: ['b2-mixtas'], distract: ['habría'] },
    { id: 's12', es: 'Si fuera más ordenado, no habría perdido las llaves.', zh: '我要是更有条理，就不会丢钥匙了。', g: ['b2-mixtas'] },
    { id: 's13', es: 'A toro pasado es muy fácil opinar.', zh: '事后评论谁都会。', g: ['b2-mixtas'] },
    { id: 's14', es: 'Te lo advertí, pero no me hiciste caso.', zh: '我提醒过你，可你不听。' },
    { id: 's15', es: 'Te debo una disculpa.', zh: '我欠你一个道歉。' },
    { id: 's16', es: 'Ya es hora de pasar página.', zh: '是时候翻篇了。' },
    { id: 's17', es: 'Estoy en una encrucijada.', zh: '我正处在人生的十字路口。' },
    { id: 's18', es: 'No dejes pasar esta oportunidad.', zh: '别错过这个机会。' },
    { id: 's19', es: 'Si no hubiéramos perdido el vuelo, ahora estaríamos en la playa.', zh: '要是没误机，我们现在就在海滩上了。', g: ['b2-mixtas'] },
    { id: 's20', es: 'Si lo hubiera sabido, no hubiera venido.', zh: '要是我早知道，就不来了。', g: ['b2-si-pasado'] },
    { id: 's21', es: 'Hay que asumir las consecuencias.', zh: '要承担后果。' },
    { id: 's22', es: 'Fue una pena que no hubieras visto la exposición.', zh: '你没看到那个展览，真可惜。', g: ['b2-subj-plusc'] },
    { id: 's23', es: 'Más vale tarde que nunca.', zh: '迟做总比不做好。' },
    { id: 's24', es: 'Tendríamos que haber reservado mesa.', zh: '我们本该订位的。', g: ['b2-si-pasado'] },
    { id: 's25', es: 'Perdona, ha sido un despiste.', zh: '抱歉，是我一时疏忽。' },
  ],
  cloze: [
    { id: 'c1', text: 'Ojalá ___ (yo) más atención en clase.', answers: ['hubiera prestado', 'hubiese prestado'], hint: 'prestar', zh: '要是我上课时多用点心就好了。', g: ['b2-subj-plusc'] },
    { id: 'c2', text: 'Me sorprendió que no ___ (tú) nada.', answers: ['hubieras dicho', 'hubieses dicho'], hint: 'decir', zh: '你什么都没说，我很惊讶。', g: ['b2-subj-plusc'] },
    { id: 'c3', text: 'No creía que ___ (ellos) ya.', answers: ['hubieran llegado', 'hubiesen llegado'], hint: 'llegar', zh: '我当时不相信他们已经到了。', g: ['b2-subj-plusc'] },
    { id: 'c4', text: 'Si ___ (yo) antes, no habría perdido el autobús.', answers: ['hubiera salido', 'hubiese salido'], hint: 'salir', zh: '要是我早点出门，就不会错过公交车了。', g: ['b2-si-pasado'] },
    { id: 'c5', text: 'Si me lo hubieras pedido, te ___ ayudado.', answers: ['habría', 'hubiera'], options: ['habría', 'hubiese', 'había'], zh: '你要是开口，我就帮你了。', g: ['b2-si-pasado'], explain: '主句可以用 habría 或 hubiera，但不能用 hubiese。' },
    { id: 'c6', text: 'Si hubiéramos reservado, ahora no ___ que esperar.', answers: ['tendríamos'], hint: 'tener', zh: '要是我们订了位，现在就不用等了。', g: ['b2-mixtas'] },
    { id: 'c7', text: 'Si ___ (tú) más cuidado, no te habrías caído.', answers: ['tuvieras', 'tuvieses'], hint: 'tener', zh: '你要是更小心一点，就不会摔倒了。', g: ['b2-mixtas'] },
    { id: 'c8', text: 'De ___ sabido, te habría avisado.', answers: ['haberlo'], options: ['haberlo', 'lo haber', 'haber'], zh: '要是我早知道，就提醒你了。', g: ['b2-si-pasado'] },
    { id: 'c9', text: 'Deberías ___ llamado antes de venir.', answers: ['haber'], options: ['haber', 'de haber', 'habías'], zh: '你本该来之前打个电话的。', g: ['b2-si-pasado'] },
    { id: 'c10', text: 'Si no ___ (nosotros) el vuelo, ahora estaríamos en Roma.', answers: ['hubiéramos perdido', 'hubiésemos perdido'], hint: 'perder', zh: '要是没误机，我们现在已经在罗马了。', g: ['b2-mixtas'] },
    { id: 'c11', text: 'Si yo ___ rico, te habría comprado aquel coche.', answers: ['fuera', 'fuese'], hint: 'ser', zh: '要是我有钱，当时就给你买那辆车了。', g: ['b2-mixtas'] },
    { id: 'c12', text: 'Ojalá no ___ (yo) aquel mensaje.', answers: ['hubiera enviado', 'hubiese enviado'], hint: 'enviar', zh: '要是我没发那条消息就好了。', g: ['b2-subj-plusc'] },
    { id: 'c13', text: 'Si hubieras estudiado idiomas, ahora ___ trabajar en el extranjero.', answers: ['podrías'], hint: 'poder', zh: '要是你当初学了外语，现在就能去国外工作了。', g: ['b2-mixtas'] },
    { id: 'c14', text: 'Te lo ___, pero no me escuchaste.', answers: ['advertí'], hint: 'advertir', zh: '我提醒过你，可你没听。' },
    { id: 'c15', text: 'No ___ comer tanto anoche: me duele el estómago.', answers: ['debí'], options: ['debí', 'debía', 'debería'], zh: '我昨晚不该吃那么多的：胃疼。', g: ['b2-si-pasado'] },
    { id: 'c16', text: 'Fue una pena que no ___ (vosotros) a la boda.', answers: ['hubierais venido', 'hubieseis venido'], hint: 'venir', zh: '你们没来婚礼真可惜。', g: ['b2-subj-plusc'] },
    { id: 'c17', text: 'Si ___ (yo) que estabas enfermo, habría ido a verte.', answers: ['hubiera sabido', 'hubiese sabido'], hint: 'saber', zh: '要是我知道你病了，我就去看你了。', g: ['b2-si-pasado'] },
    { id: 'c18', text: 'Ya es hora de pasar ___.', answers: ['página'], options: ['página', 'hoja', 'libro'], zh: '是时候翻篇了。' },
  ],
  conj: [
    { verbs: ['hacer', 'ver', 'decir', 'poner', 'volver', 'escribir', 'romper', 'abrir', 'tener', 'saber'], tenses: ['subjPlusc'], g: 'b2-subj-plusc' },
    { verbs: ['poder', 'tener', 'ir', 'hacer', 'decir', 'venir'], tenses: ['condperf'], g: 'b2-si-pasado' },
  ],
  dialogues: [
    {
      id: 'b2-u02-d1',
      title: '那份工作 · Aquel trabajo en Barcelona',
      lines: [
        { who: 'Paula', es: 'Te noto un poco raro. ¿Te pasa algo?', zh: '你看起来有点怪。怎么了？' },
        { who: 'Hao', es: 'Nada… Es que me he enterado de que la empresa de Barcelona que me ofreció trabajo el año pasado acaba de abrir una oficina en Shanghái.', zh: '没什么……就是我听说去年给我 offer 的那家巴塞罗那公司刚在上海开了分公司。' },
        { who: 'Paula', es: '¿Y?', zh: '然后呢？' },
        { who: 'Hao', es: 'Pues que si hubiera aceptado aquel puesto, ahora sería el responsable de esa oficina. Y estaría ganando el doble.', zh: '就是说，要是当时接受了那个职位，现在那个分公司就归我管了。工资也会翻倍。' },
        { who: 'Paula', es: 'Hombre, eso no lo sabes. A toro pasado todo parece muy fácil.', zh: '哎，这你又不知道。事后看什么都简单。' },
        { who: 'Hao', es: 'Ya, pero debería haberme arriesgado. Si no fuera tan prudente, no habría dejado pasar la oportunidad.', zh: '是啊，可我本该冒个险的。要不是我这么谨慎，也不会错过这个机会。' },
        { who: 'Paula', es: 'Y si te hubieras ido a Barcelona, no nos habríamos conocido. ¿Eso no cuenta?', zh: '可要是你去了巴塞罗那，我们就不会认识了。这不算吗？' },
        { who: 'Hao', es: 'Vale, vale… tienes razón. Hay que pasar página.', zh: '好吧好吧……你说得对。该翻篇了。' },
      ],
    },
  ],
  readings: [
    {
      id: 'b2-r03',
      level: 'B2',
      title: '¿Y si Colón no hubiera llegado a América?',
      titleZh: '如果哥伦布没有到达美洲？',
      topic: '历史',
      paras: [
        [
          ['En 1492, después de años de rechazos, Cristóbal Colón consiguió que los Reyes Católicos financiaran su viaje hacia las Indias. Pero ¿qué habría pasado si no lo hubieran apoyado?', '1492 年，在被拒绝多年之后，克里斯托弗·哥伦布终于说服天主教双王资助他前往“印度”的航行。可是，如果他们当初没有支持他，会发生什么？'],
        ],
        [
          ['Probablemente otro navegante habría llegado al continente pocos años después: los portugueses, por ejemplo, alcanzaron Brasil en 1500. Sin embargo, la historia habría sido muy distinta.', '很可能几年后另一位航海家也会到达这片大陆：比如葡萄牙人就在 1500 年抵达了巴西。然而，历史会大不相同。'],
          ['Si España no hubiera conquistado gran parte de América, hoy el español no sería la lengua materna de casi quinientos millones de personas, y quizá tú no estarías aprendiéndolo.', '如果西班牙没有征服美洲的大片土地，今天西班牙语就不会是近五亿人的母语，你也许也不会在学它。'],
        ],
        [
          ['También la cocina europea sería irreconocible. Sin el intercambio entre continentes, los italianos no habrían conocido el tomate, los irlandeses no habrían cultivado patatas y nadie en Europa habría probado el chocolate.', '欧洲菜也会变得面目全非。没有两大洲之间的交流，意大利人不会认识番茄，爱尔兰人不会种土豆，欧洲也没人尝过巧克力。'],
          ['Por supuesto, tampoco habrían ocurrido muchas tragedias: millones de indígenas murieron por las guerras y, sobre todo, por enfermedades que llegaron de Europa. Imaginar otra historia nos ayuda a entender mejor la que realmente sucedió.', '当然，很多悲剧也不会发生：数以百万计的原住民死于战争，尤其是死于从欧洲传来的疾病。想象另一种历史，能帮助我们更好地理解真实发生过的历史。'],
        ],
      ],
      gloss: { rechazos: '拒绝', financiaran: '资助（虚拟式）', navegante: '航海家', continente: '大陆', conquistado: '征服', materna: '母亲的', irreconocible: '认不出的', cultivado: '种植', indígenas: '原住民' },
      questions: [
        { type: 'mc', q: '葡萄牙人哪一年到达了巴西？', options: ['1492', '1500', '1521'], answer: 1 },
        { type: 'mc', q: '根据文章，没有美洲交流的话，意大利人不会认识什么？', options: ['土豆', '番茄', '咖啡'], answer: 1 },
        { type: 'tf', q: '文章认为原住民大量死亡主要是由疾病造成的。', answer: true, explain: 'murieron por las guerras y, sobre todo, por enfermedades' },
      ],
    },
    {
      id: 'b2-r04',
      level: 'B2',
      title: 'Carta a mi yo de dieciocho años',
      titleZh: '写给十八岁的自己',
      topic: '人生',
      paras: [
        [
          ['Querida yo: te escribo desde los treinta y cinco. No te voy a decir que lo hayas hecho todo mal, pero hay algunas cosas que me habría gustado que supieras.', '亲爱的自己：我在三十五岁给你写信。我不会说你什么都做错了，但有些事，我真希望你当时就知道。'],
        ],
        [
          ['Si hubieras aprendido a decir «no» antes, te habrías ahorrado muchas noches sin dormir. Y si no hubieras tenido tanto miedo de equivocarte, habrías probado muchas más cosas.', '如果你早点学会说“不”，就能少熬很多个不眠之夜。如果你不那么害怕犯错，就会去尝试更多的事情。'],
          ['Ojalá hubieras ido aquel verano a Italia con tus amigas. Dijiste que no tenías dinero, pero la verdad es que tenías miedo. Ahora ellas todavía hablan de aquel viaje.', '要是那年夏天你和朋友们去了意大利就好了。你说你没钱，但其实是害怕。到现在她们还在聊那次旅行。'],
        ],
        [
          ['Pero no todo fueron errores. Si no hubieras suspendido aquel examen de matemáticas, no habrías descubierto que lo tuyo eran las lenguas. Y hoy no serías traductora.', '但也不全是错误。要不是那次数学考试挂了科，你就不会发现自己擅长的是语言。今天你也不会成为翻译。'],
          ['Así que, a pesar de todo, gracias. Cada decisión, buena o mala, me ha traído hasta aquí. Un abrazo fuerte, tu yo del futuro.', '所以，尽管如此，谢谢你。每一个决定，无论好坏，都把我带到了这里。紧紧拥抱你，来自未来的你。'],
        ],
      ],
      gloss: { 'yo': '我（这里作名词：自我）', supieras: '知道（虚拟式）', ahorrado: '省下', equivocarte: '犯错', suspendido: '挂科', 'lo tuyo': '你擅长的东西', traductora: '女翻译', 'a pesar de todo': '尽管如此' },
      questions: [
        { type: 'mc', q: '作者希望十八岁的自己早点学会什么？', options: ['说“不”', '学数学', '开车'], answer: 0 },
        { type: 'mc', q: '那年夏天作者为什么没去意大利？', options: ['真的没钱', '其实是害怕', '要考试'], answer: 1 },
        { type: 'tf', q: '数学挂科让作者发现了自己擅长语言。', answer: true, explain: 'Si no hubieras suspendido aquel examen…, no habrías descubierto que lo tuyo eran las lenguas.' },
      ],
    },
  ],
  writing: [{ id: 'w1', prompt: '给五年前（或十年前）的自己写一封信：说说你后悔的两件事（si hubiera…, habría… / ojalá hubiera…），一件幸好发生了的事（si no hubiera…, ahora no…），最后给自己一个建议。', words: [120, 200], hints: ['Querido/a yo:', 'Si hubieras…, habrías…', 'Ojalá hubieras…', 'Si no hubieras…, ahora no serías…'] }],
}
