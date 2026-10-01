import type { Unit } from '../types'

export const u01: Unit = {
  id: 'c1-u01',
  level: 'C1',
  order: 1,
  title: '语气的分寸',
  titleEs: 'Matices de modo',
  icon: '🎚️',
  goals: ['掌握陈述式和虚拟式都能用、但意思不同的动词（comprender, sentir, temer, decir…）', '用 el hecho de que / que + 虚拟式 作主语', '区分 lo que quieres 和 lo que quieras 这类关系从句', '体会语气选择背后说话人的态度'],
  grammar: [
    {
      id: 'c1-verbos-doble-modo',
      title: '一个动词，两种语气，两种意思',
      titleEs: 'Verbos que cambian de significado con el modo',
      level: 'C1',
      summary: 'comprender / entender que + 陈述式 = 意识到；+ 虚拟式 = 理解、接受。sentir que + 陈述式 = 感觉到；+ 虚拟式 = 遗憾。temer que + 陈述式 = 担心（恐怕是事实）；+ 虚拟式 = 害怕（可能发生）。',
      body: `### 语气改变意思
| 动词 | + 陈述式（陈述事实） | + 虚拟式（评价、情感） |
|---|---|---|
| *comprender / entender que* | 意识到：*Comprendí que **tenía** razón.*（我意识到他是对的。） | 理解、体谅：*Comprendo que **estés** enfadado.*（我能理解你生气。） |
| *sentir que* | 感觉到：*Siento que algo **va** mal.* | 遗憾：*Siento que no **puedas** venir.* |
| *temer(se) que* | 恐怕（委婉地说坏消息）：*Me temo que no **hay** entradas.* | 害怕：*Temo que **se pierda**.* |
| *decir que* | 告知：*Dice que **llega** tarde.* | 要求：*Dice que **lleguemos** pronto.* |
| *suponer que* | 猜想：*Supongo que **vendrá**.* | 假设（意味着）：*Eso supone que **tengamos** que repetirlo.* |
| *parecer* | *Me parece que **es** caro.*（我觉得） | *Me parece bien que **vengas**.*（我同意） |

### 否定认知动词：两种都可能
- *No sabía que **estabas** aquí.*（你在这里——我现在知道是事实）
- *No creo que **esté** aquí.*（我怀疑他在这里）

### 小结
**陈述式 = 说话人断言这是事实；虚拟式 = 说话人在评价、感受或不作断言。**`,
      examples: [
        ['Comprendí que tenía razón.', '我意识到他是对的。'],
        ['Comprendo que estés enfadado, pero escúchame.', '我理解你生气，但你听我说。'],
        ['Siento que algo va mal entre nosotros.', '我感觉我们之间出了点问题。'],
        ['Siento que no puedas venir a la boda.', '很遗憾你不能来参加婚礼。'],
        ['Me temo que no quedan entradas.', '恐怕票已经卖完了。'],
      ],
      origin: `西班牙语的语气选择，核心是一个问题：**说话人是否在“断言”这件事**。语言学家把陈述式叫作“断言的语气”，虚拟式叫作“非断言的语气”。

所以 *comprender que* + 陈述式 = “我得出结论：这是事实”；+ 虚拟式 = “（不讨论真假）我体谅这种情况”。同一个动词，换一个语气，就像换了一副眼镜。`,
      pitfalls: ['❌ *Comprendo que estás enfadado, pero…*（想表达体谅）✅ *Comprendo que estés enfadado, pero…*', '❌ *Siento que no puedes venir.*（想表达遗憾）✅ *Siento que no puedas venir.*', '❌ *Me temo que no haya entradas.*（委婉地告知事实）✅ *Me temo que no hay entradas.*'],
    },
    {
      id: 'c1-el-hecho-de-que',
      title: 'el hecho de que / que + 虚拟式 作主语',
      titleEs: 'El hecho de que…',
      level: 'C1',
      summary: '整个从句放在句首作主语时（que…, el hecho de que…），常用虚拟式，因为它是被“评价”的对象：Que no haya llamado me preocupa. El hecho de que sea gratis no significa que sea bueno.',
      body: `### que + 虚拟式 放在句首
句子开头的 *que* 从句通常是 **被评价的话题**，用虚拟式：
- ***Que** no **haya llamado** me preocupa.*（他没打电话，这让我担心。）
- ***Que** **llueva** en agosto es muy raro aquí.*

### el hecho de que
*El hecho de que* + 虚拟式（最常见）：把一个事实当作讨论的对象。
- *El hecho de que **sea** gratis no significa que **sea** bueno.*（免费不代表好。）
- *El hecho de que **hayas aprobado** demuestra que te esforzaste.*

如果强调“这是确凿的事实”，也可以用陈述式（较少，书面）：
*El hecho de que el paro **ha bajado** es indiscutible.*

### 放在后面时
同一个意思，从句放在主句后面，规则不变（评价 → 虚拟式）：
*Me preocupa **que no haya llamado**.*

### 其他类似结构
*La idea de que… / El que + 虚拟式…*：***El que** **tengas** razón no te da derecho a gritar.*（你有理也不代表你有权大喊。）`,
      examples: [
        ['Que no haya llamado me preocupa.', '他没打电话，这让我很担心。'],
        ['El hecho de que sea gratis no significa que sea bueno.', '免费不代表好。'],
        ['El que tengas razón no te da derecho a gritar.', '你有理也不代表你有权大喊大叫。'],
        ['Que llueva en agosto es muy raro en esta zona.', '这一带八月下雨很少见。'],
        ['El hecho de que hayas aprobado demuestra que te esforzaste.', '你通过了考试，说明你努力了。'],
      ],
      origin: `**hecho** 是 *hacer* 的过去分词（拉丁语 *factum*），作名词就是“已经做成的事”= 事实。英语 *fact* 也来自 *factum*。

为什么“事实”后面反而常用虚拟式？因为 *el hecho de que…* 不是在 **告诉** 你新信息，而是把一件已知的事拿出来 **讨论、评价**——这正是虚拟式的地盘。`,
      pitfalls: ['❌ *Que no ha llamado me preocupa.* ✅ *Que no haya llamado me preocupa.*', '❌ *El hecho que sea gratis…* ✅ *El hecho de que sea gratis…*：别丢掉 de。', '❌ *El hecho de que es gratis no significa que es bueno.* ✅ *…sea gratis… sea bueno.*'],
    },
    {
      id: 'c1-relativas-modo',
      title: 'lo que quieres / lo que quieras',
      titleEs: 'Modo en las relativas sin antecedente',
      level: 'C1',
      summary: '无先行词的关系从句（lo que, quien, donde, como, cuando）：指已知、具体的 → 陈述式；指不确定、随便哪一个 → 虚拟式。Haz lo que quieres（做你想做的那件事）/ Haz lo que quieras（随你的便）。',
      body: `### 已知 vs 随便
| 陈述式（具体、已知） | 虚拟式（不定、随便） |
|---|---|
| *Haz lo que **quieres**.*（做你想做的那件事——我知道是什么） | *Haz lo que **quieras**.*（随你便，做什么都行） |
| *Te espero donde **dijiste**.*（在你说过的那个地方） | *Te espero donde **digas**.*（你说哪儿就哪儿） |
| *Lo hice como me **explicaste**.* | *Hazlo como **puedas**.*（你能怎么做就怎么做） |
| *Quien **ha dicho** eso miente.*（说这话的那个人） | *Quien **diga** eso miente.*（谁说这话谁就在撒谎） |

### 俗语和格言中的虚拟式
- ***Quien** **quiera** venir, que venga.*（谁想来就来。）
- ***Donde fueres**, haz lo que vieres.*（入乡随俗——虚拟式将来时，见第 3 单元）

### cuando + 虚拟式（复习）
*Ven **cuando quieras**.*（你什么时候想来就来。）`,
      examples: [
        ['Haz lo que quieras, a mí me da igual.', '你想怎么做就怎么做，我无所谓。'],
        ['Te espero donde me digas.', '你说在哪儿我就在哪儿等你。'],
        ['Quien diga eso no te conoce.', '谁要是这么说，那他就不了解你。'],
        ['Lo hice exactamente como me explicaste.', '我完全是按你说的做的。'],
        ['Ven cuando quieras: siempre eres bienvenido.', '你什么时候想来就来：永远欢迎你。'],
      ],
      origin: `**quien** 在俗语里常常是“任何人”的意思：*Quien bien te quiere te hará llorar*（爱你的人才会让你哭——严师出高徒）。这些古老的谚语保存了大量不定指的关系从句。`,
      pitfalls: ['❌ *Haz lo que quieres*（想说“随你便”）✅ *Haz lo que quieras.*', '❌ *Ven cuando quieres.* ✅ *Ven cuando quieras.*', '❌ *Quien dice eso no sabe nada*（泛指“谁说”）✅ *Quien diga eso no sabe nada.*'],
    },
  ],
  words: [
    { id: 'matiz', es: 'matiz', zh: '细微差别；色调', pos: 'n', g: 'm', pl: 'matices', level: 'C1', tags: ['func'], ex: ['Hay un matiz importante entre las dos frases.', '这两句话之间有一个重要的细微差别。'] },
    { id: 'puntualizar', es: 'puntualizar', zh: '明确指出；补充说明', pos: 'v', level: 'C1', tags: ['verb'], ex: ['Quiero puntualizar algo.', '我想明确一点。'] },
    { id: 'aseverar', es: 'aseverar', zh: '断言', pos: 'v', level: 'C1', tags: ['verb'], ex: ['Aseveró que no conocía al acusado.', '他断言不认识被告。'] },
    { id: 'insinuacion', es: 'insinuación', zh: '暗示', pos: 'n', g: 'f', pl: 'insinuaciones', level: 'C1', tags: ['func'], ex: ['No me gustan sus insinuaciones.', '我不喜欢他话里有话。'] },
    { id: 'ambiguedad', es: 'ambigüedad', zh: '模棱两可', pos: 'n', g: 'f', pl: 'ambigüedades', level: 'C1', tags: ['func'], ex: ['La ambigüedad del mensaje causó confusión.', '信息模棱两可，造成了混乱。'] },
    { id: 'ambiguo', es: 'ambiguo', zh: '含糊的；模棱两可的', pos: 'adj', f: 'ambigua', level: 'C1', tags: ['func'], ex: ['Su respuesta fue muy ambigua.', '他的回答很含糊。'] },
    { id: 'tajante', es: 'tajante', zh: '斩钉截铁的', pos: 'adj', level: 'C1', tags: ['func'], ex: ['Fue tajante: no habrá más prórrogas.', '他斩钉截铁地说：不会再延期了。'] },
    { id: 'rotundo', es: 'rotundo', zh: '断然的；明确的', pos: 'adj', f: 'rotunda', level: 'C1', tags: ['func'], ex: ['La respuesta fue un no rotundo.', '回答是断然的“不”。'] },
    { id: 'sutil', es: 'sutil', zh: '微妙的；细腻的', pos: 'adj', pl: 'sutiles', level: 'C1', tags: ['func'], ex: ['Es una diferencia muy sutil.', '这是一个非常微妙的差别。'] },
    { id: 'sutileza', es: 'sutileza', zh: '微妙之处', pos: 'n', g: 'f', level: 'C1', tags: ['func'], ex: ['Le faltó sutileza al decírselo.', '他跟她说的时候不够委婉。'] },
    { id: 'entrever', es: 'entrever', zh: '隐约看出；透露', pos: 'v', level: 'C1', tags: ['verb'], ex: ['Dejó entrever que dimitiría.', '他暗示自己会辞职。'], note: '变位同 ver。' },
    { id: 'percibir', es: 'percibir', zh: '察觉；领取（工资）', pos: 'v', level: 'C1', tags: ['verb'], ex: ['Percibí cierta tensión en la sala.', '我察觉到会议室里有些紧张。'] },
    { id: 'intuir', es: 'intuir', zh: '凭直觉感到', pos: 'v', level: 'C1', tags: ['verb'], ex: ['Intuyo que no nos está diciendo la verdad.', '我直觉他没跟我们说实话。'], note: 'intuyo, intuyes…' },
    { id: 'intuicion', es: 'intuición', zh: '直觉', pos: 'n', g: 'f', pl: 'intuiciones', level: 'C1', tags: ['feel'], ex: ['Me fío de mi intuición.', '我相信自己的直觉。'] },
    { id: 'presentimiento', es: 'presentimiento', zh: '预感', pos: 'n', g: 'm', level: 'C1', tags: ['feel'], ex: ['Tengo el presentimiento de que algo va a pasar.', '我预感要出什么事。'] },
    { id: 'temerse', es: 'temerse', zh: '恐怕（委婉）', pos: 'v', level: 'C1', tags: ['verb'], ex: ['Me temo que no va a ser posible.', '恐怕不太可能了。'] },
    { id: 'recelo', es: 'recelo', zh: '戒心；疑虑', pos: 'n', g: 'm', level: 'C1', tags: ['feel'], ex: ['Lo miraba con recelo.', '她带着戒心看着他。'] },
    { id: 'reticente', es: 'reticente', zh: '不情愿的；有保留的', pos: 'adj', level: 'C1', tags: ['feel'], ex: ['Se mostró reticente a firmar.', '他对签字显得有些犹豫。'] },
    { id: 'reacio', es: 'reacio', zh: '不愿意的', pos: 'adj', f: 'reacia', level: 'C1', tags: ['feel'], ex: ['Es reacio a cualquier cambio.', '他抗拒任何改变。'] },
    { id: 'dispuesto', es: 'dispuesto', zh: '愿意的；准备好的', pos: 'adj', f: 'dispuesta', level: 'C1', tags: ['feel'], ex: ['Estoy dispuesta a negociar.', '我愿意谈判。'] },
    { id: 'empenarse', es: 'empeñarse', zh: '执意；坚持要', pos: 'v', level: 'C1', tags: ['verb'], ex: ['Se empeñó en pagar la cena.', '他执意要请晚饭。'], note: 'empeñarse en + 原形 / en que + 虚拟式。' },
    { id: 'empeno', es: 'empeño', zh: '执着；努力', pos: 'n', g: 'm', level: 'C1', tags: ['feel'], ex: ['Puso mucho empeño en el proyecto.', '他为这个项目付出了很多心血。'] },
    { id: 'consentir', es: 'consentir', zh: '同意；纵容', pos: 'v', level: 'C1', tags: ['verb'], ex: ['No consiento que me hables así.', '我不允许你这样跟我说话。'], note: 'e→ie / i：consiento。' },
    { id: 'tolerar', es: 'tolerar', zh: '容忍', pos: 'v', level: 'C1', tags: ['verb'], ex: ['No tolero la falta de respeto.', '我不能容忍不尊重人。'] },
    { id: 'lamentablemente', es: 'lamentablemente', zh: '遗憾的是', pos: 'adv', level: 'C1', tags: ['func'], ex: ['Lamentablemente, no podemos aceptar su propuesta.', '遗憾的是，我们无法接受您的提议。'] },
    { id: 'indiscutible', es: 'indiscutible', zh: '无可争议的', pos: 'adj', level: 'C1', tags: ['func'], ex: ['Su talento es indiscutible.', '他的才华是无可争议的。'] },
    { id: 'innegable', es: 'innegable', zh: '不可否认的', pos: 'adj', level: 'C1', tags: ['func'], ex: ['Es innegable que ha mejorado.', '不可否认，他进步了。'] },
    { id: 'cuestionable', es: 'cuestionable', zh: '值得怀疑的', pos: 'adj', level: 'C1', tags: ['func'], ex: ['Su método es bastante cuestionable.', '他的方法相当值得商榷。'] },
    { id: 'verosimil', es: 'verosímil', zh: '貌似真实的；可信的', pos: 'adj', pl: 'verosímiles', level: 'C1', tags: ['func'], ex: ['La historia no es muy verosímil.', '这个故事不太可信。'], ety: '拉丁语 verisimilis：veri「真的」+ similis「相似的」——“像真的一样”。' },
    { id: 'plausible', es: 'plausible', zh: '合理的；值得称赞的', pos: 'adj', level: 'C1', tags: ['func'], ex: ['Es una explicación plausible.', '这是一个合理的解释。'] },
    { id: 'conjetura', es: 'conjetura', zh: '猜测', pos: 'n', g: 'f', level: 'C1', tags: ['func'], ex: ['Por ahora son solo conjeturas.', '目前这些只是猜测。'] },
    { id: 'premisa', es: 'premisa', zh: '前提', pos: 'n', g: 'f', level: 'C1', tags: ['func'], ex: ['Parte de una premisa falsa.', '他从一个错误的前提出发。'] },
    { id: 'salvedad', es: 'salvedad', zh: '保留意见；例外', pos: 'n', g: 'f', pl: 'salvedades', level: 'C1', tags: ['func'], ex: ['Estoy de acuerdo, con una salvedad.', '我同意，但有一点保留。'] },
    { id: 'discrepar', es: 'discrepar', zh: '意见不同', pos: 'v', level: 'C1', tags: ['verb'], ex: ['Discrepo totalmente de esa opinión.', '我完全不同意这个观点。'] },
    { id: 'discrepancia', es: 'discrepancia', zh: '分歧', pos: 'n', g: 'f', level: 'C1', tags: ['func'], ex: ['Hay discrepancias entre los datos.', '数据之间存在出入。'] },
    { id: 'coincidir', es: 'coincidir', zh: '一致；巧遇', pos: 'v', level: 'C1', tags: ['verb'], ex: ['Coincido contigo en lo esencial.', '在要点上我和你看法一致。'] },
    { id: 'convencido', es: 'convencido', zh: '确信的', pos: 'adj', f: 'convencida', level: 'C1', tags: ['feel'], ex: ['Estoy convencido de que saldrá bien.', '我确信会顺利的。'] },
    { id: 'esceptico', es: 'escéptico', zh: '怀疑的', pos: 'adj', f: 'escéptica', level: 'C1', tags: ['feel'], ex: ['Sigo siendo escéptica.', '我仍然持怀疑态度。'] },
    { id: 'refran', es: 'refrán', zh: '谚语', pos: 'n', g: 'm', pl: 'refranes', level: 'C1', tags: ['func'], ex: ['Como dice el refrán, más vale tarde que nunca.', '正如谚语所说，迟做总比不做好。'] },
    { id: 'dicho', es: 'dicho', zh: '俗话；说过的', pos: 'n', g: 'm', level: 'C1', tags: ['func'], ex: ['Es un dicho popular.', '这是一句俗话。'], note: 'Dicho y hecho = 说到做到。' },
    { id: 'quienquiera', es: 'quienquiera', zh: '无论谁', pos: 'pron', level: 'C1', tags: ['func'], ex: ['Quienquiera que sea, que espere.', '不管是谁，让他等着。'], note: '后面接 que + 虚拟式。' },
    { id: 'dondequiera', es: 'dondequiera', zh: '无论哪里', pos: 'adv', level: 'C1', tags: ['func'], ex: ['Dondequiera que vayas, te seguiré.', '不管你去哪儿，我都会跟着你。'] },
    { id: 'comoquiera', es: 'comoquiera', zh: '无论怎样', pos: 'adv', level: 'C1', tags: ['func'], ex: ['Comoquiera que sea, hay que decidir hoy.', '不管怎样，今天必须做决定。'] },
    { id: 'el-hecho-de-que', es: 'el hecho de que', zh: '……这一事实', pos: 'phr', level: 'C1', tags: ['func'], ex: ['El hecho de que no conteste es preocupante.', '他不回复这件事让人担心。'] },
    { id: 'me-temo-que', es: 'me temo que', zh: '恐怕', pos: 'phr', level: 'C1', tags: ['func'], ex: ['Me temo que ya es tarde.', '恐怕已经太晚了。'] },
    { id: 'a-sabiendas', es: 'a sabiendas', zh: '明知故犯地', pos: 'phr', level: 'C1', tags: ['func'], ex: ['Lo hizo a sabiendas de que estaba prohibido.', '他明知被禁止还是做了。'] },
    { id: 'de-antemano', es: 'de antemano', zh: '事先', pos: 'phr', level: 'C1', tags: ['func'], ex: ['Gracias de antemano.', '先行致谢。'] },
    { id: 'pormenor', es: 'pormenor', zh: '细节', pos: 'n', g: 'm', pl: 'pormenores', level: 'C1', tags: ['func'], ex: ['Me contó todos los pormenores.', '他把所有细节都告诉了我。'] },
    { id: 'tonalidad', es: 'tonalidad', zh: '语调；色调', pos: 'n', g: 'f', level: 'C1', tags: ['func'], ex: ['La tonalidad de su voz cambió.', '他的语调变了。'] },
    { id: 'entonacion', es: 'entonación', zh: '语调', pos: 'n', g: 'f', level: 'C1', tags: ['func'], ex: ['La entonación cambia el sentido de la frase.', '语调会改变句子的意思。'] },
  ],
  sentences: [
    { id: 's1', es: 'Comprendí que tenía razón.', zh: '我意识到他是对的。', g: ['c1-verbos-doble-modo'], distract: ['tuviera'] },
    { id: 's2', es: 'Comprendo que estés enfadado, pero escúchame.', zh: '我理解你生气，但你听我说。', g: ['c1-verbos-doble-modo'], distract: ['estás'] },
    { id: 's3', es: 'Siento que algo va mal entre nosotros.', zh: '我感觉我们之间出了点问题。', g: ['c1-verbos-doble-modo'] },
    { id: 's4', es: 'Siento que no puedas venir a la boda.', zh: '很遗憾你不能来参加婚礼。', g: ['c1-verbos-doble-modo'] },
    { id: 's5', es: 'Me temo que no quedan entradas.', zh: '恐怕票已经卖完了。', g: ['c1-verbos-doble-modo'], distract: ['queden'] },
    { id: 's6', es: 'Que no haya llamado me preocupa.', zh: '他没打电话，这让我很担心。', g: ['c1-el-hecho-de-que'], distract: ['ha'] },
    { id: 's7', es: 'El hecho de que sea gratis no significa que sea bueno.', zh: '免费不代表好。', g: ['c1-el-hecho-de-que'] },
    { id: 's8', es: 'El que tengas razón no te da derecho a gritar.', zh: '你有理也不代表你有权大喊大叫。', g: ['c1-el-hecho-de-que'] },
    { id: 's9', es: 'Haz lo que quieras, a mí me da igual.', zh: '你想怎么做就怎么做，我无所谓。', g: ['c1-relativas-modo'], distract: ['quieres'] },
    { id: 's10', es: 'Te espero donde me digas.', zh: '你说在哪儿我就在哪儿等你。', g: ['c1-relativas-modo'] },
    { id: 's11', es: 'Quien diga eso no te conoce.', zh: '谁要是这么说，那他就不了解你。', g: ['c1-relativas-modo'] },
    { id: 's12', es: 'Lo hice exactamente como me explicaste.', zh: '我完全是按你说的做的。', g: ['c1-relativas-modo'] },
    { id: 's13', es: 'Dejó entrever que dimitiría.', zh: '他暗示自己会辞职。' },
    { id: 's14', es: 'Estoy de acuerdo, con una salvedad.', zh: '我同意，但有一点保留。' },
    { id: 's15', es: 'Tengo el presentimiento de que algo va a pasar.', zh: '我预感要出什么事。' },
    { id: 's16', es: 'Discrepo totalmente de esa opinión.', zh: '我完全不同意这个观点。' },
    { id: 's17', es: 'Se empeñó en pagar la cena.', zh: '他执意要请晚饭。' },
    { id: 's18', es: 'No consiento que me hables así.', zh: '我不允许你这样跟我说话。', g: ['c1-verbos-doble-modo'] },
    { id: 's19', es: 'Dondequiera que vayas, te seguiré.', zh: '不管你去哪儿，我都会跟着你。', g: ['c1-relativas-modo'] },
    { id: 's20', es: 'Me parece bien que vengas con nosotros.', zh: '你跟我们一起来，我觉得挺好。', g: ['c1-verbos-doble-modo'] },
    { id: 's21', es: 'Me parece que es demasiado caro.', zh: '我觉得太贵了。', g: ['c1-verbos-doble-modo'] },
    { id: 's22', es: 'Lo hizo a sabiendas de que estaba prohibido.', zh: '他明知被禁止还是做了。' },
    { id: 's23', es: 'Gracias de antemano por su atención.', zh: '先行感谢您的关注。' },
    { id: 's24', es: 'Ven cuando quieras: siempre eres bienvenido.', zh: '你什么时候想来就来：永远欢迎你。', g: ['c1-relativas-modo'] },
    { id: 's25', es: 'Me fío de mi intuición.', zh: '我相信自己的直觉。' },
  ],
  cloze: [
    { id: 'c1', text: 'De repente comprendí que me ___ mintiendo.', answers: ['estaba'], options: ['estaba', 'estuviera', 'esté'], zh: '我突然意识到他在骗我。', g: ['c1-verbos-doble-modo'], explain: '“意识到”一个事实 → 陈述式。' },
    { id: 'c2', text: 'Comprendo que ___ (tú) nervioso, es tu primer día.', answers: ['estés'], hint: 'estar', zh: '我理解你紧张，这是你第一天上班。', g: ['c1-verbos-doble-modo'] },
    { id: 'c3', text: 'Siento mucho que ___ (vosotros) que iros tan pronto.', answers: ['tengáis'], hint: 'tener', zh: '你们这么快就得走，我很遗憾。', g: ['c1-verbos-doble-modo'] },
    { id: 'c4', text: 'Siento que alguien me ___ desde hace días.', answers: ['sigue', 'está siguiendo'], options: ['sigue', 'siga', 'siguiera'], zh: '我感觉这几天有人在跟踪我。', g: ['c1-verbos-doble-modo'] },
    { id: 'c5', text: 'Me temo que el doctor no ___ hoy.', answers: ['viene'], options: ['viene', 'venga', 'vendrá de'], zh: '恐怕医生今天不来了。', g: ['c1-verbos-doble-modo'] },
    { id: 'c6', text: 'Temo que el niño ___ en el bosque.', answers: ['se pierda'], options: ['se pierda', 'se pierde', 'perderse'], zh: '我怕孩子在森林里迷路。', g: ['c1-verbos-doble-modo'] },
    { id: 'c7', text: 'Que no ___ (él) contestado todavía es muy extraño.', answers: ['haya'], hint: 'haber', zh: '他到现在还没回复，这很奇怪。', g: ['c1-el-hecho-de-que'] },
    { id: 'c8', text: 'El hecho ___ que sea famoso no le da derecho a todo.', answers: ['de'], options: ['de', 'que', 'en'], zh: '出名并不意味着他可以为所欲为。', g: ['c1-el-hecho-de-que'] },
    { id: 'c9', text: 'El hecho de que ___ caro no significa que sea mejor.', answers: ['sea'], hint: 'ser', zh: '贵并不意味着更好。', g: ['c1-el-hecho-de-que'] },
    { id: 'c10', text: 'Puedes pedir lo que ___ : invito yo.', answers: ['quieras'], hint: 'querer', zh: '你想点什么就点什么：我请客。', g: ['c1-relativas-modo'] },
    { id: 'c11', text: 'Le compré lo que me ___ ayer: el libro de Bolaño.', answers: ['pidió'], options: ['pidió', 'pidiera', 'pida'], zh: '我给他买了他昨天要的东西：波拉尼奥的书。', g: ['c1-relativas-modo'] },
    { id: 'c12', text: 'Quien ___ terminar antes, puede irse.', answers: ['quiera'], hint: 'querer', zh: '谁想先做完，谁就可以走。', g: ['c1-relativas-modo'] },
    { id: 'c13', text: 'Hazlo como ___, pero hazlo bien.', answers: ['puedas'], hint: 'poder', zh: '你能怎么做就怎么做，但要做好。', g: ['c1-relativas-modo'] },
    { id: 'c14', text: 'Quienquiera que ___, dile que no estoy.', answers: ['sea'], hint: 'ser', zh: '不管是谁，就说我不在。', g: ['c1-relativas-modo'] },
    { id: 'c15', text: 'Dejó ___ que no estaba contento.', answers: ['entrever'], options: ['entrever', 'entender de', 'ver a'], zh: '他流露出不满。' },
    { id: 'c16', text: 'Me parece bien que ___ (tú) estudiar fuera.', answers: ['quieras'], hint: 'querer', zh: '你想出国读书，我觉得很好。', g: ['c1-verbos-doble-modo'] },
    { id: 'c17', text: 'Se empeñó ___ que fuéramos a su casa.', answers: ['en'], options: ['en', 'a', 'de'], zh: '他执意要我们去他家。' },
    { id: 'c18', text: 'Discrepo ___ usted en este punto.', answers: ['de'], options: ['de', 'con', 'a'], zh: '在这一点上我和您意见不同。' },
  ],
  conj: [
    { verbs: ['comprender', 'sentir', 'temer', 'consentir', 'intuir', 'percibir'], tenses: ['pres', 'subj'], g: 'c1-verbos-doble-modo' },
    { verbs: ['querer', 'poder', 'decir', 'ser', 'haber'], tenses: ['subj', 'subjPerf'], g: 'c1-relativas-modo' },
  ],
  dialogues: [
    {
      id: 'c1-u01-d1',
      title: '委婉的拒绝 · Una respuesta con matices',
      lines: [
        { who: 'Marta', es: 'Oye, ¿has leído el correo de Recursos Humanos? Dicen que «comprenden que la situación sea difícil».', zh: '哎，你看人事部的邮件了吗？他们说“理解目前情况困难”。' },
        { who: 'Hao', es: 'Sí. Y luego añaden: «Nos tememos que no será posible atender su solicitud». O sea, un no rotundo, pero con guantes.', zh: '看了。然后还加了一句：“恐怕无法满足您的申请。”说白了，就是戴着手套的断然拒绝。' },
        { who: 'Marta', es: 'Fíjate en el detalle: no dicen que comprenden que la situación «es» difícil, sino que «sea». No admiten que lo sea; solo lo toleran.', zh: '注意这个细节：他们没说理解情况“是”困难的，而用了虚拟式。他们并不承认情况真的困难，只是表示体谅。' },
        { who: 'Hao', es: 'Qué sutileza… En chino también lo haríamos así, aunque con otras palabras. El hecho de que lo escriban tan educadamente no cambia nada.', zh: '真够微妙的……中文里我们也会这么做，只是用别的说法。写得再客气也改变不了什么。' },
        { who: 'Marta', es: 'Ya. Bueno, haz lo que quieras, pero yo pediría una reunión. Por escrito es fácil decir que no.', zh: '是啊。好吧，你想怎么做都行，但要是我，我会申请当面谈。写邮件拒绝太容易了。' },
        { who: 'Hao', es: 'Tienes razón. Tengo el presentimiento de que, si hablo con la directora, al menos me escuchará.', zh: '你说得对。我有预感，如果我去找总监谈，她至少会听我说。' },
      ],
    },
  ],
  readings: [
    {
      id: 'c1-r01',
      level: 'C1',
      title: 'El modo como actitud',
      titleZh: '语气即态度',
      topic: '语言',
      paras: [
        [
          ['Los estudiantes de español suelen aprender el subjuntivo como una lista de reglas: después de «quiero que», subjuntivo; después de «creo que», indicativo. Sin embargo, a partir de cierto nivel, esa lista se queda corta.', '学西班牙语的人往往把虚拟式当成一张规则清单来学：quiero que 后面用虚拟式，creo que 后面用陈述式。然而，到了一定水平，这张清单就不够用了。'],
          ['Muchos verbos admiten los dos modos, y la elección no es un capricho gramatical, sino una decisión del hablante sobre lo que quiere comunicar.', '很多动词两种语气都能接，而选择哪一种并不是语法上的随意，而是说话人对自己想传达什么所作的决定。'],
        ],
        [
          ['Compárense dos frases: «Entiendo que estás cansado» y «Entiendo que estés cansado». En la primera, el hablante deduce un hecho; en la segunda, lo da por sabido y muestra empatía. La información es la misma; la actitud, no.', '比较这两句话：“Entiendo que estás cansado”和“Entiendo que estés cansado”。第一句里，说话人推断出一个事实；第二句里，他默认这是已知的，并表示体谅。信息相同，态度却不同。'],
          ['Lo mismo ocurre con «el hecho de que», que, a pesar de su nombre, va casi siempre seguido de subjuntivo: no se usa para informar, sino para valorar algo que ya se sabe.', '“el hecho de que”也是如此：尽管名字叫“事实”，后面却几乎总是接虚拟式——因为它不是用来告知，而是用来评价已知的事情。'],
        ],
        [
          ['Dominar estos matices es lo que distingue a un usuario competente de uno experto. No se trata de memorizar más reglas, sino de preguntarse siempre: ¿estoy afirmando algo o lo estoy valorando?', '掌握这些细微差别，正是熟练使用者和专家级使用者之间的区别。关键不是背更多规则，而是时刻问自己：我是在断言，还是在评价？'],
        ],
      ],
      gloss: { 'se queda corta': '不够用', admiten: '允许', capricho: '随意', deduce: '推断', 'da por sabido': '视为已知', valorar: '评价', distingue: '区分', competente: '胜任的' },
      questions: [
        { type: 'mc', q: '根据文章，语气的选择是什么？', options: ['语法上的随意', '说话人对想传达内容的决定', '方言差异'], answer: 1 },
        { type: 'mc', q: '“Entiendo que estés cansado”表达了什么？', options: ['推断出一个事实', '默认已知并表示体谅', '怀疑对方'], answer: 1 },
        { type: 'tf', q: '“el hecho de que”后面通常接陈述式。', answer: false, explain: 'va casi siempre seguido de subjuntivo' },
      ],
    },
    {
      id: 'c1-r02',
      level: 'C1',
      title: 'El arte de decir que no',
      titleZh: '说“不”的艺术',
      topic: '交际',
      paras: [
        [
          ['En el ámbito profesional español rara vez se dice un «no» directo. En su lugar, se recurre a fórmulas que suavizan la negativa: «me temo que no va a ser posible», «lamentablemente, en este momento no podemos», «entiendo perfectamente que lo necesite, pero…».', '在西班牙的职场中，人们很少直接说“不”。取而代之的是一些缓和拒绝的说法：“恐怕不太可能”“很遗憾，目前我们做不到”“我完全理解您需要这个，但是……”'],
        ],
        [
          ['Estas expresiones cumplen una función social: proteger la imagen del interlocutor y mantener una buena relación. El hecho de que se diga «me temo» en lugar de «no» no cambia el contenido, pero sí la manera en que se recibe.', '这些表达承担着一种社交功能：保护对方的面子，维持良好的关系。用“恐怕”代替“不”并不会改变内容，但会改变对方接收它的方式。'],
          ['Para un hablante extranjero, el peligro está en no captar el mensaje real. Quien interprete «ya veremos» como una promesa puede llevarse una sorpresa: en muchos contextos, significa simplemente que no.', '对外国人来说，危险在于没听懂真正的意思。谁要是把“再说吧”理解成承诺，可能会大吃一惊：在很多场合，它其实就是“不”。'],
        ],
        [
          ['Curiosamente, los estudiantes chinos suelen manejar bien este código, ya que en su propia cultura la negativa indirecta también es habitual. Lo que les cuesta más es lo contrario: entender cuándo un español está siendo directo sin pretender ser descortés.', '有意思的是，中国学生通常能很好地掌握这套“密码”，因为在他们自己的文化中，委婉拒绝也很常见。他们更难掌握的反而是另一面：理解西班牙人什么时候只是直率，并没有失礼的意思。'],
        ],
      ],
      gloss: { ámbito: '领域', suavizan: '缓和', negativa: '拒绝', interlocutor: '对话者', imagen: '面子；形象', captar: '领会', código: '规则；密码', descortés: '失礼的' },
      questions: [
        { type: 'mc', q: '这些委婉说法的社交功能是什么？', options: ['节省时间', '保护对方面子、维持关系', '显得有学问'], answer: 1 },
        { type: 'mc', q: '“ya veremos”在很多场合实际上是什么意思？', options: ['一定会', '不', '明天再说'], answer: 1 },
        { type: 'tf', q: '文章认为中国学生最难理解的是西班牙人的委婉拒绝。', answer: false, explain: 'Lo que les cuesta más es lo contrario…' },
      ],
    },
  ],
  writing: [{ id: 'w1', prompt: '写一封邮件，委婉地拒绝一个请求（同事请你周末加班 / 朋友向你借一大笔钱 / 学生要求延期交作业）。至少用三个本单元的结构：comprendo que + 虚拟式、me temo que + 陈述式、el hecho de que…，并保持礼貌而清楚。', words: [150, 220], hints: ['Comprendo perfectamente que…', 'Sin embargo, me temo que…', 'El hecho de que… no significa que…', 'Si en otro momento…, estaré encantado/a de…'] }],
}
