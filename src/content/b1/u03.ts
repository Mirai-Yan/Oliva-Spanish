import type { Unit } from '../types'

export const u03: Unit = {
  id: 'b1-u03',
  level: 'B1',
  order: 3,
  title: '感受与观点',
  titleEs: 'Sentimientos y opiniones',
  icon: '💬',
  goals: ['用 me alegra que / me molesta que + 虚拟式表达情感', '用 es normal que / es una pena que 评价事情', '区分 creo que + 陈述式 和 no creo que + 虚拟式', '就社交网络、手机等话题表达和反驳观点'],
  grammar: [
    {
      id: 'b1-sentimientos',
      title: '表达情感：me alegra que + 虚拟式',
      titleEs: 'Expresar sentimientos',
      level: 'B1',
      summary: '对别人的行为或某件事产生情感时：情感动词 + que + 虚拟式。Me alegra que estés aquí. 主语相同或泛指时用原形：Me alegra verte.',
      body: `### 和 gustar 一样的结构
很多情感动词的结构和 *gustar* 相同：**感受的人是间接宾语**，引起情感的事是主语。

| 动词 / 短语 | 意思 |
|---|---|
| *me alegra* | 让我高兴 |
| *me molesta* | 让我烦 |
| *me preocupa* | 让我担心 |
| *me sorprende* | 让我惊讶 |
| *me da pena / me da miedo / me da igual* | 让我难过 / 害怕 / 无所谓 |
| *me encanta / no soporto / odio* | 我很喜欢 / 受不了 / 讨厌 |

### 原形还是 que + 虚拟式？
| 情况 | 结构 | 例句 |
|---|---|---|
| 我自己做的事，或泛指 | + **原形** | *Me molesta **hacer** cola.*（排队让我心烦。） |
| 别人做的事 | + **que + 虚拟式** | *Me molesta que **la gente hable** alto.*（别人大声说话让我心烦。） |

### 其他常见结构
- *Estoy contento de que…* / *Tengo miedo de que…* + 虚拟式
- *Siento que…* + 虚拟式 = 我很遗憾……：*Siento que no **puedas** venir.*

### 注意动词的数
主语是 *que* 从句时，动词用单数：*Me molesta**n** los ruidos* 但 *Me molest**a** que **haya** ruido*。`,
      examples: [
        ['Me alegra que estés aquí.', '你在这里我很高兴。'],
        ['Me molesta que la gente hable alto en el tren.', '别人在火车上大声说话让我心烦。'],
        ['Me preocupa que mi hermano pase tantas horas con el móvil.', '我弟弟在手机上花那么多时间，让我很担心。'],
        ['Siento que no puedas venir a la fiesta.', '很遗憾你来不了派对。'],
        ['Me da igual que llueva.', '下不下雨我无所谓。'],
      ],
      tables: [{ verbs: ['poder', 'querer', 'jugar'], tense: 'subj' }],
      origin: `**emoción** ← 拉丁语 *emovere*：*e*「向外」+ *movere*「动」——情感就是“把人从内心推动出来的东西”。英语 *emotion*、*motion*、*move* 都是一家。

**pena** ← 拉丁语 *poena*「惩罚」。从“受罚”到“痛苦”，再到“难过、可惜”：*¡Qué pena!*（真可惜！）。英语 *pain*（痛）、*penalty*（处罚、点球）同源。`,
      pitfalls: ['❌ *Me alegra que estás aquí.* ✅ *Me alegra que estés aquí.*', '❌ *Me molesta que hacer cola.* ✅ *Me molesta hacer cola.*', '❌ *Yo molesto el ruido.* ✅ *Me molesta el ruido.*（和 gustar 一样的结构）'],
      latam: '在墨西哥，*me da pena* 除了“让我难过”，更常表示“让我不好意思”：*Me da pena hablar en público.*',
    },
    {
      id: 'b1-valoracion',
      title: '评价事情：es normal que / es una pena que',
      titleEs: 'Valorar con es + adjetivo + que',
      level: 'B1',
      summary: '评价（normal, lógico, raro, una pena, genial…）+ que + 虚拟式；陈述事实（es verdad, es evidente, está claro…）+ que + 陈述式。',
      body: `### 评价 → 虚拟式
说话人不是在告诉你一件新事实，而是在 **评价** 它：
*Es normal / lógico / raro / increíble / genial / injusto / ridículo / una pena / una lástima* **que + 虚拟式**

- *Es normal que **estés** nervioso antes del examen.*（考试前紧张很正常。）
- *Es una pena que no **haya** más zonas verdes.*（绿地不多真可惜。）
- *¡Qué pena que **te vayas**!*（你要走了，真遗憾！）

### 陈述事实 → 陈述式
*Es verdad / es cierto / es evidente / es obvio / está claro / está demostrado* **que + 陈述式**

- *Es evidente que el móvil **cambia** nuestra vida.*（很明显手机改变了我们的生活。）
- *Está claro que **necesitamos** descansar.*

### 否定会改变语气
*No es verdad que **sea** tan difícil.*（不是那么难。）——否定了事实，就不再是“陈述”，用虚拟式。

| 评价（虚拟式） | 事实（陈述式） |
|---|---|
| *Es lógico que **esté** cansado.* | *Es cierto que **está** cansado.* |
| *Es raro que no **conteste**.* | *Es evidente que no **contesta**.* |`,
      examples: [
        ['Es normal que estés nervioso antes del examen.', '考试前紧张很正常。'],
        ['Es una pena que no haya más parques en la ciudad.', '城里公园不多，真可惜。'],
        ['Es evidente que el móvil ha cambiado nuestra vida.', '很明显，手机改变了我们的生活。'],
        ['¡Qué pena que te vayas tan pronto!', '你这么快就要走，真遗憾！'],
        ['No es verdad que los jóvenes no lean.', '说年轻人不读书，不是真的。'],
      ],
      origin: `**lástima** 和 *blasfemia*（亵渎）是亲戚！它来自动词 *lastimar*「伤害」，而 *lastimar* 来自通俗拉丁语 *blastemare*，即 *blasphemare*「辱骂」。从“辱骂”到“伤害”，再到“让人心疼、可惜”：*¡Qué lástima!*

**evidente** ← *evidens*：*e*「向外」+ *videre*「看见」——“一眼就能看出来的”，所以只能用陈述式。`,
      pitfalls: ['❌ *Es normal que estás nervioso.* ✅ *Es normal que estés nervioso.*', '❌ *Es evidente que sea difícil.* ✅ *Es evidente que es difícil.*', '❌ *Es una pena que no vienes.* ✅ *Es una pena que no vengas.*'],
    },
    {
      id: 'b1-opinion',
      title: '表达观点：creo que / no creo que',
      titleEs: 'Dar la opinión',
      level: 'B1',
      summary: '肯定的观点 + 陈述式：Creo que tienes razón. 否定的观点 + 虚拟式：No creo que tengas razón.',
      body: `### 肯定 → 陈述式；否定 → 虚拟式
| 肯定（陈述式） | 否定（虚拟式） |
|---|---|
| *Creo que **es** una buena idea.* | *No creo que **sea** una buena idea.* |
| *Pienso que **tiene** razón.* | *No pienso que **tenga** razón.* |
| *Me parece que **está** enfadado.* | *No me parece que **esté** enfadado.* |
| *Estoy seguro de que **viene**.* | *No estoy seguro de que **venga**.* |

**为什么？** 说 *creo que* 时，你在 **断言** 一件事是真的（陈述式就是断言的语气）；说 *no creo que* 时，你不再断言，从句只是一个被怀疑的“可能”。

### 其他表达观点的方式
- ***En mi opinión**, …* / ***Para mí**, …* / ***Desde mi punto de vista**, …*
- *(No) **estoy de acuerdo** contigo / con la idea de que…*
- *Tienes razón.*（你说得对。）/ *Te equivocas.*（你错了。）

### 疑问句
*¿Crees que **va** a llover?* —— 疑问句一般用陈述式。`,
      examples: [
        ['Creo que las redes sociales tienen cosas buenas y malas.', '我觉得社交网络有好有坏。'],
        ['No creo que sea una buena idea.', '我不认为这是个好主意。'],
        ['Me parece que tienes razón.', '我觉得你说得对。'],
        ['No estoy seguro de que venga.', '我不确定他会来。'],
        ['Desde mi punto de vista, el problema es otro.', '在我看来，问题在别处。'],
      ],
      origin: `**creer** ← 拉丁语 *credere*「相信；托付」。银行的 *crédito*（信用、贷款）就是“相信你会还”。英语 *credit*、*credible* 同源。

**opinión** ← *opinio*，来自 *opinari*「认为、猜想」。在古罗马，*opinio* 是“看法”，和确定的 *scientia*（知识）相对——所以“观点”本来就带一点不确定。`,
      pitfalls: ['❌ *Creo que sea verdad.* ✅ *Creo que es verdad.*', '❌ *No creo que es verdad.* ✅ *No creo que sea verdad.*', '❌ *Estoy de acuerdo de ti.* ✅ *Estoy de acuerdo contigo.*', '❌ *Tengo razón de…* 表“你说得对”：✅ *Tienes razón.*'],
    },
  ],
  words: [
    { id: 'emocion', es: 'emoción', zh: '情感；激动', pos: 'n', g: 'f', pl: 'emociones', level: 'B1', tags: ['feel'], ex: ['No sabe controlar sus emociones.', '他不会控制自己的情绪。'] },
    { id: 'sentimiento', es: 'sentimiento', zh: '感情；感受', pos: 'n', g: 'm', level: 'B1', tags: ['feel'], ex: ['Es difícil expresar los sentimientos.', '表达感情很难。'], ety: '来自 sentir（拉丁语 sentire「感觉」）。' },
    { id: 'preocupar', es: 'preocupar', zh: '使担心', pos: 'v', level: 'B1', tags: ['verb', 'feel'], ex: ['Me preocupa tu salud.', '我担心你的健康。'], note: '和 gustar 同结构。preocuparse por = 担心……' },
    { id: 'dar-pena', es: 'dar pena', zh: '让人难过；让人觉得可惜', pos: 'phr', level: 'B1', tags: ['feel'], ex: ['Me da pena verlo tan triste.', '看他这么伤心我很难过。'] },
    { id: 'dar-miedo', es: 'dar miedo', zh: '让人害怕', pos: 'phr', level: 'B1', tags: ['feel'], ex: ['Me dan miedo las arañas.', '我怕蜘蛛。'] },
    { id: 'dar-igual', es: 'dar igual', zh: '无所谓', pos: 'phr', level: 'B1', tags: ['feel'], ex: ['—¿Pizza o pasta? —Me da igual.', '——比萨还是意面？——都行。'] },
    { id: 'soportar', es: 'soportar', zh: '忍受；承受', pos: 'v', level: 'B1', tags: ['verb', 'feel'], ex: ['No soporto el calor.', '我受不了热。'], en: '“假朋友”：soportar 主要是“忍受”，英语 support（支持）是 apoyar。' },
    { id: 'aguantar', es: 'aguantar', zh: '忍住；坚持；扛住', pos: 'v', level: 'B1', tags: ['verb', 'feel'], ex: ['¡No aguanto más!', '我再也受不了了！'] },
    { id: 'harto', es: 'harto', zh: '厌烦的；受够了的', pos: 'adj', f: 'harta', level: 'B1', tags: ['feel'], ex: ['Estoy harto de tanto ruido.', '我受够了这么吵。'], note: 'estar harto de + 名词 / 原形。' },
    { id: 'agobiado', es: 'agobiado', zh: '压力大的；喘不过气的', pos: 'adj', f: 'agobiada', level: 'B1', tags: ['feel'], ex: ['Estoy agobiado con tantos exámenes.', '考试这么多，我压力好大。'], latam: '拉美更常说 estresado 或 abrumado。' },
    { id: 'ilusionado', es: 'ilusionado', zh: '满怀期待的', pos: 'adj', f: 'ilusionada', level: 'B1', tags: ['feel'], ex: ['Está muy ilusionada con su viaje a Japón.', '她对去日本旅行满怀期待。'] },
    { id: 'decepcionado', es: 'decepcionado', zh: '失望的', pos: 'adj', f: 'decepcionada', level: 'B1', tags: ['feel'], ex: ['Me siento decepcionado con el resultado.', '我对结果很失望。'], en: '“假朋友”：decepcionar 是“让人失望”，英语 deceive（欺骗）是 engañar。' },
    { id: 'emocionado', es: 'emocionado', zh: '激动的；感动的', pos: 'adj', f: 'emocionada', level: 'B1', tags: ['feel'], ex: ['Estoy muy emocionado: ¡mañana empiezo a trabajar!', '我好激动：明天开始上班了！'] },
    { id: 'satisfecho', es: 'satisfecho', zh: '满意的', pos: 'adj', f: 'satisfecha', level: 'B1', tags: ['feel'], ex: ['Estamos satisfechos con el trabajo.', '我们对这份工作很满意。'], note: 'satisfacer 的过去分词。' },
    { id: 'ansiedad', es: 'ansiedad', zh: '焦虑', pos: 'n', g: 'f', level: 'B1', tags: ['feel', 'body'], ex: ['Las redes sociales pueden causar ansiedad.', '社交网络可能引起焦虑。'] },
    { id: 'opinion', es: 'opinión', zh: '观点；意见', pos: 'n', g: 'f', pl: 'opiniones', level: 'B1', tags: ['func'], ex: ['En mi opinión, es demasiado caro.', '在我看来，这太贵了。'] },
    { id: 'punto-de-vista', es: 'punto de vista', zh: '观点；角度', pos: 'n', g: 'm', level: 'B1', tags: ['func'], ex: ['Respeto tu punto de vista.', '我尊重你的看法。'] },
    { id: 'estar-de-acuerdo', es: 'estar de acuerdo', zh: '同意', pos: 'phr', level: 'B1', tags: ['func'], ex: ['No estoy de acuerdo contigo.', '我不同意你的看法。'], note: '同意某人：con alguien；同意某事：con algo / en algo。' },
    { id: 'tener-razon', es: 'tener razón', zh: '有道理；说得对', pos: 'phr', level: 'B1', tags: ['func'], ex: ['Tienes toda la razón.', '你说得完全对。'] },
    { id: 'equivocarse', es: 'equivocarse', zh: '弄错；犯错', pos: 'v', level: 'B1', tags: ['verb'], ex: ['Perdona, me he equivocado de número.', '抱歉，我打错电话了。'], note: 'c→qu：me equivoqué，虚拟式 me equivoque。' },
    { id: 'lastima', es: 'lástima', zh: '可惜；遗憾', pos: 'n', g: 'f', level: 'B1', tags: ['feel'], ex: ['¡Qué lástima que no puedas venir!', '你来不了，真可惜！'] },
    { id: 'pena', es: 'pena', zh: '难过；可惜；刑罚', pos: 'n', g: 'f', level: 'B1', tags: ['feel'], ex: ['¡Qué pena!', '真可惜！'], note: 'valer la pena = 值得。' },
    { id: 'logico', es: 'lógico', zh: '合乎逻辑的；理所当然的', pos: 'adj', f: 'lógica', level: 'B1', tags: ['adj'], ex: ['Es lógico que esté cansado.', '他累了是理所当然的。'], ety: '希腊语 logikos，来自 logos「话语、理性」。' },
    { id: 'evidente', es: 'evidente', zh: '明显的', pos: 'adj', level: 'B1', tags: ['adj'], ex: ['Es evidente que no ha estudiado.', '很明显他没学习。'] },
    { id: 'obvio', es: 'obvio', zh: '显而易见的', pos: 'adj', f: 'obvia', level: 'B1', tags: ['adj'], ex: ['Es obvio que le gustas.', '很明显他喜欢你。'], ety: '拉丁语 obvius「在路上迎面碰到的」：ob + via「路」。' },
    { id: 'cierto', es: 'cierto', zh: '真实的；确定的；某个', pos: 'adj', f: 'cierta', level: 'B1', tags: ['adj'], ex: ['Es cierto que el piso es caro.', '房子确实贵。'], note: '放在名词前意思是“某个”：cierta persona = 某人。' },
    { id: 'ridiculo', es: 'ridículo', zh: '可笑的；荒唐的', pos: 'adj', f: 'ridícula', level: 'B1', tags: ['adj'], ex: ['Es ridículo pagar tanto por un café.', '一杯咖啡付这么多钱太荒唐了。'] },
    { id: 'injusto', es: 'injusto', zh: '不公平的', pos: 'adj', f: 'injusta', level: 'B1', tags: ['adj'], ex: ['Es injusto que siempre trabaje yo.', '总是我干活，太不公平了。'] },
    { id: 'justo', es: 'justo', zh: '公平的；正好', pos: 'adj', f: 'justa', level: 'B1', tags: ['adj'], ex: ['Llegamos justo a tiempo.', '我们正好赶上。'] },
    { id: 'absurdo', es: 'absurdo', zh: '荒谬的', pos: 'adj', f: 'absurda', level: 'B1', tags: ['adj'], ex: ['Me parece una norma absurda.', '我觉得这条规定很荒谬。'] },
    { id: 'opinar', es: 'opinar', zh: '认为；发表意见', pos: 'v', level: 'B1', tags: ['verb'], ex: ['¿Tú qué opinas?', '你怎么看？'] },
    { id: 'criticar', es: 'criticar', zh: '批评；说坏话', pos: 'v', level: 'B1', tags: ['verb'], ex: ['No me gusta criticar a la gente.', '我不喜欢说别人的坏话。'], note: 'c→qu：critiqué，虚拟式 critique。' },
    { id: 'comentario', es: 'comentario', zh: '评论；留言', pos: 'n', g: 'm', level: 'B1', tags: ['hobby'], ex: ['Tu foto tiene cien comentarios.', '你的照片有一百条评论。'] },
    { id: 'seguidor', es: 'seguidor', zh: '粉丝；追随者', pos: 'n', g: 'm', f: 'seguidora', pl: 'seguidores', level: 'B1', tags: ['hobby'], ex: ['Tiene más de un millón de seguidores.', '他有一百多万粉丝。'] },
    { id: 'enganchado', es: 'enganchado', zh: '上瘾的；被勾住的', pos: 'adj', f: 'enganchada', level: 'B1', tags: ['hobby', 'feel'], ex: ['Estoy enganchado a esta serie.', '我追这部剧追上瘾了。'], ety: '来自 gancho「钩子」。' },
    { id: 'desconectar', es: 'desconectar', zh: '断开；放松（不想工作）', pos: 'v', level: 'B1', tags: ['verb', 'hobby'], ex: ['En vacaciones necesito desconectar.', '假期里我需要彻底放松一下。'] },
    { id: 'privacidad', es: 'privacidad', zh: '隐私', pos: 'n', g: 'f', level: 'B1', tags: ['hobby'], ex: ['Hay que proteger nuestra privacidad en internet.', '要在网上保护自己的隐私。'] },
    { id: 'bulo', es: 'bulo', zh: '谣言；假消息', pos: 'n', g: 'm', level: 'B1', tags: ['hobby'], ex: ['Esa noticia es un bulo.', '那条新闻是假的。'], latam: '拉美多说 noticia falsa 或直接用英语 fake news。' },
    { id: 'fiable', es: 'fiable', zh: '可靠的', pos: 'adj', level: 'B1', tags: ['adj'], ex: ['¿Es una página web fiable?', '这个网站可靠吗？'], ety: '来自 fiar「信任」（拉丁语 fidere）。', latam: '拉美常说 confiable。' },
    { id: 'polemica', es: 'polémica', zh: '争议；论战', pos: 'n', g: 'f', level: 'B1', tags: ['func'], ex: ['La nueva ley ha creado mucha polémica.', '新法律引起了很大争议。'], ety: '希腊语 polemikos「好战的」，来自 polemos「战争」。' },
    { id: 'debate', es: 'debate', zh: '辩论；讨论', pos: 'n', g: 'm', level: 'B1', tags: ['func'], ex: ['Ayer vi un debate en la tele.', '我昨天在电视上看了一场辩论。'] },
    { id: 'tema', es: 'tema', zh: '话题；主题', pos: 'n', g: 'm', level: 'B1', tags: ['func'], ex: ['Cambiemos de tema.', '我们换个话题吧。'], note: '以 -a 结尾的阳性名词（希腊语来源）：el tema。' },
    { id: 'envidia', es: 'envidia', zh: '嫉妒；羡慕', pos: 'n', g: 'f', level: 'B1', tags: ['feel'], ex: ['¡Qué envidia! Yo también quiero ir.', '好羡慕！我也想去。'], ety: '拉丁语 invidia：in + videre「看」——“盯着看别人的东西”。' },
    { id: 'celos', es: 'celos', zh: '（感情上的）嫉妒', pos: 'n', g: 'm', level: 'B1', tags: ['feel'], ex: ['Tiene celos de su hermano pequeño.', '他嫉妒自己的弟弟。'], note: '用复数：tener celos；形容词 celoso。' },
    { id: 'soledad', es: 'soledad', zh: '孤独', pos: 'n', g: 'f', level: 'B1', tags: ['feel'], ex: ['Muchas personas mayores sufren soledad.', '很多老人饱受孤独。'], ety: '来自 solo「单独的」。' },
  ],
  sentences: [
    { id: 's1', es: 'Me alegra que estés aquí.', zh: '你在这里我很高兴。', g: ['b1-sentimientos'], distract: ['estás'] },
    { id: 's2', es: 'Me molesta que la gente hable alto en el tren.', zh: '别人在火车上大声说话让我心烦。', g: ['b1-sentimientos'], distract: ['habla'] },
    { id: 's3', es: 'Me preocupa que mi hermano pase tantas horas con el móvil.', zh: '我弟弟花那么多时间玩手机，让我很担心。', g: ['b1-sentimientos'] },
    { id: 's4', es: 'Siento que no puedas venir.', zh: '很遗憾你来不了。', g: ['b1-sentimientos'], distract: ['puedes'] },
    { id: 's5', es: 'Me da igual que llueva.', zh: '下不下雨我无所谓。', g: ['b1-sentimientos'] },
    { id: 's6', es: 'Es normal que estés nervioso.', zh: '你紧张很正常。', g: ['b1-valoracion'], distract: ['estás'] },
    { id: 's7', es: 'Es una pena que no haya más parques.', zh: '公园不多真可惜。', g: ['b1-valoracion'], distract: ['hay'] },
    { id: 's8', es: 'Es evidente que el móvil ha cambiado nuestra vida.', zh: '很明显，手机改变了我们的生活。', g: ['b1-valoracion'] },
    { id: 's9', es: '¡Qué pena que te vayas tan pronto!', zh: '你这么快就要走，真遗憾！', g: ['b1-valoracion'] },
    { id: 's10', es: 'No es verdad que los jóvenes no lean.', zh: '说年轻人不读书，不是真的。', g: ['b1-valoracion'] },
    { id: 's11', es: 'Creo que tienes razón.', zh: '我觉得你说得对。', g: ['b1-opinion'], distract: ['tengas'] },
    { id: 's12', es: 'No creo que sea una buena idea.', zh: '我不认为这是个好主意。', g: ['b1-opinion'], distract: ['es'] },
    { id: 's13', es: 'Me parece que está enfadado.', zh: '我觉得他生气了。', g: ['b1-opinion'] },
    { id: 's14', es: 'No estoy seguro de que venga.', zh: '我不确定他会来。', g: ['b1-opinion'] },
    { id: 's15', es: 'Desde mi punto de vista, el problema es otro.', zh: '在我看来，问题在别处。', g: ['b1-opinion'] },
    { id: 's16', es: 'No estoy de acuerdo contigo.', zh: '我不同意你的看法。', g: ['b1-opinion'] },
    { id: 's17', es: 'Estoy harto de tanto ruido.', zh: '我受够了这么吵。' },
    { id: 's18', es: 'Me encanta que me escribas cartas.', zh: '我很喜欢你给我写信。', g: ['b1-sentimientos'] },
    { id: 's19', es: 'Es lógico que esté cansada: ha trabajado doce horas.', zh: '她累是理所当然的：她工作了十二个小时。', g: ['b1-valoracion'] },
    { id: 's20', es: 'Está claro que necesitamos descansar.', zh: '很明显我们需要休息。', g: ['b1-valoracion'] },
    { id: 's21', es: 'Tengo miedo de que se pierda.', zh: '我怕他迷路。', g: ['b1-sentimientos'] },
    { id: 's22', es: '¿Crees que va a llover?', zh: '你觉得会下雨吗？', g: ['b1-opinion'] },
    { id: 's23', es: 'Esa noticia es un bulo.', zh: '那条新闻是假的。' },
    { id: 's24', es: 'Estoy enganchado a esta serie.', zh: '我追这部剧上瘾了。' },
    { id: 's25', es: 'No pienso que las redes sociales sean malas.', zh: '我不认为社交网络是坏东西。', g: ['b1-opinion'] },
    { id: 's26', es: 'Me sorprende que no conozcas esta canción.', zh: '你居然不知道这首歌，我很惊讶。', g: ['b1-sentimientos'] },
  ],
  cloze: [
    { id: 'c1', text: 'Me alegra que ___ (tú) bien.', answers: ['estés'], hint: 'estar', zh: '你好我就高兴。', g: ['b1-sentimientos'] },
    { id: 'c2', text: 'Me molesta que mi compañero no ___ los platos.', answers: ['friegue'], hint: 'fregar', zh: '室友不洗碗让我很烦。', g: ['b1-sentimientos'] },
    { id: 'c3', text: 'Me encanta ___ en la playa.', answers: ['leer'], options: ['leer', 'que lea', 'leo'], zh: '我很喜欢在海边看书。', g: ['b1-sentimientos'], explain: '是我自己读书，用原形。' },
    { id: 'c4', text: 'Siento que no ___ (tú) venir.', answers: ['puedas'], hint: 'poder', zh: '很遗憾你来不了。', g: ['b1-sentimientos'] },
    { id: 'c5', text: 'Me preocupa que ___ (haber) tanta contaminación.', answers: ['haya'], hint: 'haber', zh: '污染这么严重让我很担心。', g: ['b1-sentimientos'] },
    { id: 'c6', text: 'Es normal que ___ (tú) cansado.', answers: ['estés'], hint: 'estar', zh: '你累了很正常。', g: ['b1-valoracion'] },
    { id: 'c7', text: 'Es una pena que no ___ (nosotros) más tiempo.', answers: ['tengamos'], hint: 'tener', zh: '可惜我们没有更多时间。', g: ['b1-valoracion'] },
    { id: 'c8', text: 'Es evidente que el clima ___ cambiando.', answers: ['está'], options: ['está', 'esté', 'es'], zh: '很明显气候正在变化。', g: ['b1-valoracion'], explain: 'es evidente que 陈述事实，用陈述式。' },
    { id: 'c9', text: 'Es raro que Pablo no ___ el teléfono.', answers: ['conteste'], hint: 'contestar', zh: '巴勃罗不接电话，真奇怪。', g: ['b1-valoracion'] },
    { id: 'c10', text: 'Creo que ___ una buena idea.', answers: ['es'], options: ['es', 'sea', 'está'], zh: '我觉得这是个好主意。', g: ['b1-opinion'] },
    { id: 'c11', text: 'No creo que ___ una buena idea.', answers: ['sea'], options: ['sea', 'es', 'esté'], zh: '我不觉得这是个好主意。', g: ['b1-opinion'] },
    { id: 'c12', text: 'No me parece que ___ (él) enfadado.', answers: ['esté'], hint: 'estar', zh: '我不觉得他生气了。', g: ['b1-opinion'] },
    { id: 'c13', text: 'Pienso que los jóvenes ___ demasiado tiempo en internet.', answers: ['pasan'], hint: 'pasar', zh: '我认为年轻人在网上花的时间太多了。', g: ['b1-opinion'] },
    { id: 'c14', text: 'No estoy seguro de que ___ (ellos) la verdad.', answers: ['digan'], hint: 'decir', zh: '我不确定他们说的是实话。', g: ['b1-opinion'] },
    { id: 'c15', text: 'Estoy de acuerdo ___ Marta.', answers: ['con'], options: ['con', 'de', 'a'], zh: '我同意玛尔塔的看法。', g: ['b1-opinion'] },
    { id: 'c16', text: 'Me da miedo que mi hija ___ sola por la noche.', answers: ['vuelva'], hint: 'volver', zh: '女儿晚上一个人回家让我害怕。', g: ['b1-sentimientos'] },
    { id: 'c17', text: 'Es verdad que ___ (nosotros) mucho.', answers: ['trabajamos'], hint: 'trabajar', zh: '我们确实工作很多。', g: ['b1-valoracion'] },
    { id: 'c18', text: 'No es verdad que el español ___ tan difícil.', answers: ['sea'], hint: 'ser', zh: '西班牙语并没有那么难。', g: ['b1-valoracion'] },
    { id: 'c19', text: '¡Qué lástima que ___ (vosotros) tan pronto!', answers: ['os vayáis'], options: ['os vayáis', 'os vais', 'iros'], zh: '你们这么快就走，真可惜！', g: ['b1-valoracion'] },
  ],
  conj: [
    { verbs: ['poder', 'querer', 'entender', 'jugar', 'perder', 'preferir', 'contar'], tenses: ['subj'], g: 'b1-sentimientos' },
    { verbs: ['ser', 'estar', 'tener', 'decir', 'haber', 'ir'], tenses: ['subj'], g: 'b1-opinion' },
  ],
  dialogues: [
    {
      id: 'b1-u03-d1',
      title: '社交网络好不好？ · ¿Redes sociales sí o no?',
      lines: [
        { who: 'Paula', es: '¿Has visto esto? Dicen que los jóvenes pasan seis horas al día con el móvil.', zh: '你看到这个了吗？说年轻人每天玩六个小时手机。' },
        { who: 'Wang Lei', es: 'No me sorprende. Yo creo que las redes sociales son una adicción.', zh: '我一点也不惊讶。我觉得社交网络就是一种瘾。' },
        { who: 'Paula', es: 'Hombre, no creo que sean tan malas. Yo hablo con mi familia de Chile todos los días gracias a ellas.', zh: '哎，我不觉得它们那么糟。多亏了它们，我每天都能和智利的家人聊天。' },
        { who: 'Wang Lei', es: 'Tienes razón en eso. Pero me preocupa que la gente crea todos los bulos que lee.', zh: '这一点你说得对。可是让我担心的是，人们看到什么谣言都信。' },
        { who: 'Paula', es: 'Sí, es verdad que hay muchas noticias falsas. Es importante comprobar las fuentes.', zh: '是啊，假新闻确实很多。核实信息来源很重要。' },
        { who: 'Wang Lei', es: 'Y a mí me molesta que mis amigos miren el móvil cuando estamos cenando.', zh: '还有，我朋友们吃饭的时候看手机，我很烦。' },
        { who: 'Paula', es: '¡Ja, ja! En eso estoy totalmente de acuerdo contigo. Propongo una regla: en la mesa, móviles fuera.', zh: '哈哈！这点我完全同意。我提议立个规矩：吃饭时手机收起来。' },
      ],
    },
  ],
  readings: [
    {
      id: 'b1-r05',
      level: 'B1',
      title: 'Una semana sin móvil',
      titleZh: '一周不用手机',
      topic: '科技与生活',
      paras: [
        [
          ['Hace una semana decidí hacer un experimento: siete días sin teléfono móvil. Hoy es el último día y quiero contar cómo ha sido.', '一周前我决定做个实验：七天不用手机。今天是最后一天，我想说说感受。'],
        ],
        [
          ['Los primeros días fueron muy difíciles. Me sentía nervioso y, sin darme cuenta, buscaba el móvil en el bolsillo cada cinco minutos.', '头几天特别难熬。我很焦躁，一不留神就每五分钟去摸一次口袋里的手机。'],
          ['Además, me molesta que hoy en día casi todo dependa del teléfono: pagar, comprar billetes, hablar con el banco…', '而且，让我烦的是现在几乎什么都离不开手机：付钱、买票、跟银行联系……'],
        ],
        [
          ['Pero a partir del tercer día empecé a dormir mejor y a leer por las noches. He terminado dos novelas.', '但从第三天起，我开始睡得更好，晚上也开始看书了。我读完了两本小说。'],
          ['Me alegra que mis amigos me hayan apoyado: me llamaban al teléfono fijo de casa, ¡como en los años noventa!', '让我高兴的是朋友们都支持我：他们打我家的座机，就像九十年代一样！'],
        ],
        [
          ['No creo que pueda vivir siempre sin móvil, pero es evidente que lo uso demasiado. A partir de ahora, lo voy a apagar todas las noches a las diez.', '我不觉得自己能一直不用手机，但很明显我用得太多了。从现在起，我每晚十点关机。'],
        ],
      ],
      gloss: { experimento: '实验', 'darme cuenta': '意识到', bolsillo: '口袋', dependa: '依赖（虚拟式）', 'a partir del': '从……起', hayan: '（完成时助动词，虚拟式）', apoyado: '支持', fijo: '固定的' },
      questions: [
        { type: 'mc', q: '作者的实验持续了多久？', options: ['三天', '一周', '一个月'], answer: 1 },
        { type: 'tf', q: '作者觉得以后可以永远不用手机。', answer: false, explain: 'No creo que pueda vivir siempre sin móvil.' },
        { type: 'mc', q: '没有手机后，作者开始做什么？', options: ['看电视', '晚上看书', '去健身房'], answer: 1 },
      ],
    },
    {
      id: 'b1-r06',
      level: 'B1',
      title: 'Foro: ¿móviles en clase?',
      titleZh: '论坛：课堂上该不该用手机？',
      topic: '观点',
      paras: [
        [
          ['Pregunta del foro: Algunos colegios han prohibido los móviles en clase. ¿Qué opináis?', '论坛提问：一些学校已经禁止在课堂上使用手机。大家怎么看？'],
        ],
        [
          ['Carmen, profesora: Estoy totalmente de acuerdo con la prohibición. Es evidente que los alumnos se distraen y no prestan atención.', '卡门，老师：我完全同意禁止。很明显，学生会分心，不专心听讲。'],
        ],
        [
          ['Diego, 16 años: Pues yo no creo que sea justo. Usamos el móvil para buscar información y hacer ejercicios. Es una pena que los profesores solo vean lo malo.', '迭戈，16 岁：可我不觉得这公平。我们用手机查资料、做练习。可惜老师们只看到坏的一面。'],
        ],
        [
          ['Rosa, madre: Me parece que la solución está en el medio. Es lógico que los chicos usen la tecnología, pero es importante que aprendan a desconectar.', '罗莎，家长：我觉得答案在中间。孩子们用科技是理所当然的，但学会放下手机也很重要。'],
        ],
      ],
      gloss: { foro: '论坛', prohibición: '禁止', distraen: '分心', prestan: '给予（prestar atención = 注意）', justo: '公平的', medio: '中间', aprendan: '学会（虚拟式）' },
      questions: [
        { type: 'mc', q: '卡门对禁止手机的态度是什么？', options: ['完全同意', '完全反对', '无所谓'], answer: 0 },
        { type: 'mc', q: '迭戈认为手机在课堂上有什么用？', options: ['玩游戏', '查资料和做练习', '给父母打电话'], answer: 1 },
        { type: 'tf', q: '罗莎认为应该找一个折中的办法。', answer: true, explain: 'la solución está en el medio' },
      ],
    },
  ],
  writing: [{ id: 'w1', prompt: '社交网络让我们更快乐还是更孤独？写一段话表达你的观点：至少用一次 creo que、一次 no creo que、一个情感表达（me preocupa que…）和一个评价（es una pena que…）。', words: [80, 150], hints: ['En mi opinión, …', 'Creo que… / No creo que…', 'Me preocupa que…', 'Es una pena que… / Es evidente que…'] }],
}
