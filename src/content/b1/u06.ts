import type { Unit } from '../types'

export const u06: Unit = {
  id: 'b1-u06',
  level: 'B1',
  order: 6,
  title: '转告与传话',
  titleEs: 'Dice que…',
  icon: '📞',
  goals: ['用 dice que / pregunta si 转述别人的话', '用 dijo que 转述过去说的话，掌握时态和时间词的变化', '用 decir que + 虚拟式 转述请求和命令', '转告留言、讲八卦、复述新闻'],
  grammar: [
    {
      id: 'b1-indirecto-presente',
      title: '间接引语（一）：dice que…',
      titleEs: 'El estilo indirecto en presente',
      level: 'B1',
      summary: '引述动词是现在时或现在完成时（dice que, ha dicho que）时，时态不变，只改人称、物主词和指示词。转述命令：dice que + 虚拟式。转述问题：pregunta si / qué / dónde…',
      body: `### 陈述句：时态不变，人称要变
| 原话 | 转述 |
|---|---|
| *«**Estoy** cansado.»* | *Dice que **está** cansado.* |
| *«**Mi** madre **vive** en Sevilla.»* | *Dice que **su** madre **vive** en Sevilla.* |
| *«**Te llamo** mañana.»* | *Dice que **te llama** mañana.* |

### 问题：一般疑问句用 si，特殊疑问句保留疑问词
| 原话 | 转述 |
|---|---|
| *«¿**Vienes** a la fiesta?»* | *Pregunta **si** vienes a la fiesta.* |
| *«¿**Dónde** está el baño?»* | *Pregunta **dónde** está el baño.* |
| *«¿**Qué** hora es?»* | *Pregunta **qué** hora es.* |

转述时疑问词 **保留重音**，但不再用问号。

### 命令和请求：decir / pedir + que + 虚拟式
| 原话 | 转述 |
|---|---|
| *«**Llama** a tu abuela.»* | *Dice que **llames** a tu abuela.* |
| *«No **lleguéis** tarde.»* | *Dice que no **lleguéis** tarde.* |
| *«¿Me **ayudas**?»* | *Me pide que le **ayude**.* |

### 别忘了这些词也要跟着变
*aquí → allí*，*este → ese*，*venir → ir*，*traer → llevar*（看说话人和听话人在哪里）`,
      examples: [
        ['Tu madre dice que la llames esta noche.', '你妈妈说让你今晚给她打电话。'],
        ['Pablo pregunta si quieres ir al cine.', '巴勃罗问你想不想去看电影。'],
        ['La profesora ha dicho que el examen es el lunes.', '老师说考试在星期一。'],
        ['Mi jefe me pide que termine el informe hoy.', '我老板要我今天把报告写完。'],
        ['Pregunta dónde está la estación.', '他问车站在哪儿。'],
      ],
      origin: `**decir** 来自拉丁语 *dicere*「说」。英语 *dictate*（口述）、*dictionary*（词典，“说出来的词的集合”）、*predict*（预言，“提前说”）都是它的后代。

**contar** 来自 *computare*「计算」——讲故事就是把事情 *一件一件数出来*。英语里也一样：*count*（数）和 *recount*、*account*（讲述、叙述）同源。`,
      pitfalls: ['❌ *Dice que vienes mañana.*（转述命令）✅ *Dice que vengas mañana.*', '❌ *Pregunta que ¿vienes?* ✅ *Pregunta si vienes.*', '❌ *Me pregunta donde vivo.* ✅ *Me pregunta dónde vivo.*：间接疑问里疑问词仍带重音。'],
    },
    {
      id: 'b1-indirecto-pasado',
      title: '间接引语（二）：dijo que…',
      titleEs: 'El estilo indirecto en pasado',
      level: 'B1',
      summary: '引述动词是过去时（dijo, preguntó）时，时态“往后退一步”：现在时 → 过去未完成时；过去时 / 完成时 → 过去完成时；将来时 → 条件式。时间词也要变：mañana → al día siguiente。',
      body: `### 时态后退
| 原话 | 转述（*Dijo que…*） |
|---|---|
| 现在时：*«**Estoy** enfermo.»* | 过去未完成时：*…**estaba** enfermo.* |
| 现在完成时：*«**He perdido** el tren.»* | 过去完成时：*…**había perdido** el tren.* |
| 简单过去时：*«**Fui** a Roma.»* | 过去完成时 / 不变：*…**había ido** / **fue** a Roma.* |
| 将来时：*«**Iré** mañana.»* | 条件式：*…**iría** al día siguiente.* |
| *ir a* + 原形：*«**Voy a** comprarlo.»* | *…**iba a** comprarlo.* |
| 过去未完成时：*«**Era** muy feliz.»* | 不变：*…**era** muy feliz.* |

### 时间和地点词
| 原话 | 转述 |
|---|---|
| *hoy* | *aquel día* |
| *ayer* | *el día anterior* |
| *mañana* | *al día siguiente* |
| *la semana que viene* | *la semana siguiente* |
| *aquí* | *allí* |

### 什么时候可以不变？
如果说的内容 **到现在仍然成立**，可以保留原时态：
*Me dijo que **es** de Chengdu.*（他现在仍然是成都人。）

### 小预告：过去的命令
*Me dijo que **fuera** a verla.*（她让我去看她。）——这里用的是虚拟式过去时，B2 会详细学。`,
      examples: [
        ['Me dijo que estaba muy cansado.', '他跟我说他很累。'],
        ['Ana me contó que había perdido el móvil.', '安娜跟我说她把手机弄丢了。'],
        ['Dijeron que vendrían al día siguiente.', '他们说第二天会来。'],
        ['Me preguntó si quería cenar con ella.', '她问我想不想和她一起吃晚饭。'],
        ['Nos explicó que iba a cambiar de trabajo.', '他跟我们说他要换工作了。'],
      ],
      tables: [{ verbs: ['venir', 'poder', 'hacer'], tense: 'cond' }],
      origin: `这种“时态后退”不是西班牙语独有的，拉丁语语法书里就有一条著名的规则 *consecutio temporum*「时态的接续」，西语叫 *concordancia de tiempos*（时态呼应）。英语、法语里也一样（He said he was tired）。

为什么将来时要变成条件式？还记得吗：将来时 = 原形 + *he*（现在），条件式 = 原形 + *(hab)ía*（过去）。把“现在的将来”搬到过去，就成了“过去的将来”——也就是条件式。`,
      pitfalls: ['❌ *Me dijo que vendrá mañana.*（说话时的“明天”已经过去）✅ *Me dijo que vendría al día siguiente.*', '❌ *Ayer le dije que estoy cansado.* ✅ *Ayer le dije que estaba cansado.*', '❌ *Me preguntó si quiero ir.* ✅ *Me preguntó si quería ir.*'],
    },
    {
      id: 'b1-verbos-decir',
      title: '引述动词：不只是 decir',
      titleEs: 'Verbos para transmitir',
      level: 'B1',
      summary: '用更准确的动词转述：comentar, contar, explicar, asegurar, prometer, responder, añadir, negar, recordar, quejarse de que… 也可以用 según, al parecer, por lo visto 表示消息来源。',
      body: `### 选对动词，转述更生动
| 动词 | 意思 | 例句 |
|---|---|---|
| *comentar* | 随口提到 | *Me **comentó** que se iba a mudar.* |
| *contar* | 讲（一件事） | *Nos **contó** que había conocido a alguien.* |
| *explicar* | 解释 | *Nos **explicó** por qué llegaba tarde.* |
| *asegurar* | 保证、断言 | ***Asegura** que no ha sido él.* |
| *prometer* | 答应 | *Me **prometió** que me llamaría.* |
| *responder / contestar* | 回答 | ***Respondió** que no lo sabía.* |
| *añadir* | 补充 | ***Añadió** que estaba muy contento.* |
| *negar* | 否认 | ***Negó** que fuera verdad.*（否认 + 虚拟式） |
| *recordar* | 提醒 | *Te **recuerdo** que mañana hay reunión.* |
| *quejarse de que* | 抱怨 | *Se **queja de que** nadie le ayuda.* |

### 说明消息来源
- ***Según** Marta, la fiesta es el sábado.*（据玛尔塔说……）
- ***Al parecer**, el jefe se va a jubilar.*（好像……）
- ***Por lo visto**, han cerrado el bar de la esquina.*（看来……）
- ***Me he enterado de que** te casas.*（我听说你要结婚了。）`,
      examples: [
        ['Me comentó que se iba a mudar a Barcelona.', '他跟我提了一句，说要搬到巴塞罗那去。'],
        ['Me prometió que me llamaría, pero no lo hizo.', '他答应我会打电话，但他没打。'],
        ['Según el periódico, mañana habrá huelga de metro.', '据报纸说，明天地铁要罢工。'],
        ['Por lo visto, han cerrado el bar de la esquina.', '看来，街角那家酒吧关门了。'],
        ['Me he enterado de que te casas. ¡Enhorabuena!', '我听说你要结婚了。恭喜！'],
      ],
      origin: `**asegurar** 来自 *seguro*「安全的；确定的」，而 *seguro* 来自拉丁语 *securus* = *se*「没有」+ *cura*「忧虑」——“无忧无虑的”。所以 *asegurar* 就是“让人放心”。

**enterarse** 来自 *entero*「完整的」：*enterar* 原意是“使完整”，后来变成“让人知道事情的全貌”。*Me he enterado* 就是“我知道全部了”。`,
      pitfalls: ['❌ *Me contó de que…* ✅ *Me contó que…*（大多数引述动词后面直接接 que）', '❌ *Se queja que…* ✅ *Se queja de que…*', '❌ *Según a Marta…* ✅ *Según Marta…*：según 后面直接接人。'],
    },
  ],
  words: [
    { id: 'recado', es: 'recado', zh: '口信；（要办的）小事', pos: 'n', g: 'm', level: 'B1', tags: ['people'], ex: ['¿Quiere dejarle un recado?', '您要给他留个口信吗？'], note: 'hacer recados = 跑腿、办杂事。' },
    { id: 'comentar', es: 'comentar', zh: '提到；评论', pos: 'v', level: 'B1', tags: ['verb'], ex: ['Me comentó que estaba buscando trabajo.', '他跟我提过他在找工作。'] },
    { id: 'asegurar', es: 'asegurar', zh: '保证；断言；投保', pos: 'v', level: 'B1', tags: ['verb'], ex: ['Te aseguro que es verdad.', '我向你保证这是真的。'] },
    { id: 'afirmar', es: 'afirmar', zh: '声称；肯定', pos: 'v', level: 'B1', tags: ['verb'], ex: ['El ministro afirmó que no subirán los impuestos.', '部长声称不会加税。'] },
    { id: 'negar', es: 'negar', zh: '否认；拒绝', pos: 'v', level: 'B1', tags: ['verb'], ex: ['Niega haber estado allí.', '他否认去过那里。'], note: 'e→ie：niego。' },
    { id: 'responder', es: 'responder', zh: '回答；回应', pos: 'v', level: 'B1', tags: ['verb'], ex: ['No ha respondido a mi correo.', '他还没回我的邮件。'] },
    { id: 'cotilleo', es: 'cotilleo', zh: '八卦；闲话', pos: 'n', g: 'm', level: 'B1', tags: ['people'], ex: ['¡Me encantan los cotilleos!', '我超爱听八卦！'], note: '动词 cotillear；爱八卦的人 cotilla。' },
    { id: 'rumor', es: 'rumor', zh: '传闻', pos: 'n', g: 'm', pl: 'rumores', level: 'B1', tags: ['people'], ex: ['Hay un rumor de que la empresa va a cerrar.', '有传闻说公司要倒闭。'], ety: '拉丁语 rumor「嘈杂声、低语」。' },
    { id: 'chisme', es: 'chisme', zh: '闲话；小玩意儿', pos: 'n', g: 'm', level: 'B1', tags: ['people'], ex: ['No me cuentes chismes.', '别跟我讲闲话。'], latam: '拉美最常用 chisme 表示“八卦”；西班牙更常说 cotilleo。' },
    { id: 'enterarse', es: 'enterarse', zh: '得知；听说', pos: 'v', level: 'B1', tags: ['verb'], ex: ['¿Te has enterado de la noticia?', '你听说那个消息了吗？'], note: 'enterarse de algo。' },
    { id: 'anunciar', es: 'anunciar', zh: '宣布；做广告', pos: 'v', level: 'B1', tags: ['verb'], ex: ['Han anunciado que el vuelo sale con retraso.', '广播说航班晚点了。'] },
    { id: 'declarar', es: 'declarar', zh: '声明；申报；作证', pos: 'v', level: 'B1', tags: ['verb'], ex: ['¿Tiene algo que declarar?', '您有需要申报的物品吗？'] },
    { id: 'declaracion', es: 'declaración', zh: '声明；表白', pos: 'n', g: 'f', pl: 'declaraciones', level: 'B1', tags: ['func'], ex: ['El presidente hizo unas declaraciones a la prensa.', '总统向媒体发表了讲话。'] },
    { id: 'portavoz', es: 'portavoz', zh: '发言人', pos: 'n', g: 'mf', pl: 'portavoces', level: 'B1', tags: ['job'], ex: ['Según el portavoz, no hay heridos.', '据发言人说，没有人受伤。'], ety: 'porta「携带」+ voz「声音」：“带着声音的人”。' },
    { id: 'segun', es: 'según', zh: '根据；据……说', pos: 'prep', level: 'B1', tags: ['func'], ex: ['Según el médico, no es grave.', '据医生说，不严重。'], note: '后面接人称代词用主格：según tú, según él。' },
    { id: 'al-parecer', es: 'al parecer', zh: '似乎；据说', pos: 'phr', level: 'B1', tags: ['func'], ex: ['Al parecer, el accidente no fue grave.', '据说事故不严重。'] },
    { id: 'por-lo-visto', es: 'por lo visto', zh: '看来；听说', pos: 'phr', level: 'B1', tags: ['func'], ex: ['Por lo visto, se han separado.', '听说他们分开了。'] },
    { id: 'susurrar', es: 'susurrar', zh: '低语；耳语', pos: 'v', level: 'B1', tags: ['verb'], ex: ['Me susurró algo al oído.', '他在我耳边说了句悄悄话。'], ety: '拟声词：模仿低语的“沙沙”声。' },
    { id: 'llamada', es: 'llamada', zh: '电话；呼叫', pos: 'n', g: 'f', level: 'B1', tags: ['hobby'], ex: ['Tienes tres llamadas perdidas.', '你有三个未接来电。'] },
    { id: 'contestador', es: 'contestador', zh: '答录机；语音信箱', pos: 'n', g: 'm', pl: 'contestadores', level: 'B1', tags: ['hobby'], ex: ['Te he dejado un mensaje en el contestador.', '我在你的语音信箱里留了言。'] },
    { id: 'marcar', es: 'marcar', zh: '拨号；标记；进（球）', pos: 'v', level: 'B1', tags: ['verb'], ex: ['Marca el número otra vez.', '再拨一次号码。'], note: 'c→qu：marqué。' },
    { id: 'cobertura', es: 'cobertura', zh: '（手机）信号；覆盖范围', pos: 'n', g: 'f', level: 'B1', tags: ['hobby'], ex: ['Aquí no hay cobertura.', '这里没信号。'], latam: '拉美多说 señal。' },
    { id: 'bateria', es: 'batería', zh: '电池；架子鼓', pos: 'n', g: 'f', level: 'B1', tags: ['hobby'], ex: ['Me he quedado sin batería.', '我手机没电了。'], emoji: '🔋' },
    { id: 'cargar', es: 'cargar', zh: '充电；装载', pos: 'v', level: 'B1', tags: ['verb', 'hobby'], ex: ['Tengo que cargar el móvil.', '我得给手机充电。'], note: 'g→gu：cargué。' },
    { id: 'cargador', es: 'cargador', zh: '充电器', pos: 'n', g: 'm', pl: 'cargadores', level: 'B1', tags: ['hobby'], ex: ['¿Me dejas tu cargador?', '能借我你的充电器吗？'] },
    { id: 'audio', es: 'audio', zh: '语音消息；音频', pos: 'n', g: 'm', level: 'B1', tags: ['hobby'], ex: ['Te mando un audio.', '我给你发条语音。'] },
    { id: 'reenviar', es: 'reenviar', zh: '转发', pos: 'v', level: 'B1', tags: ['verb', 'hobby'], ex: ['¿Me puedes reenviar el correo?', '你能把那封邮件转发给我吗？'], note: '重音：reenvío, reenvías。' },
    { id: 'saludo', es: 'saludo', zh: '问候', pos: 'n', g: 'm', level: 'B1', tags: ['greet'], ex: ['Un saludo a tu familia.', '代我问候你家人。'], note: '邮件结尾常用 Un saludo / Saludos。' },
    { id: 'dar-recuerdos', es: 'dar recuerdos', zh: '代为问候', pos: 'phr', level: 'B1', tags: ['greet'], ex: ['Dale recuerdos a tu madre de mi parte.', '代我问候你妈妈。'] },
    { id: 'de-parte-de', es: 'de parte de', zh: '代表……；以……的名义', pos: 'phr', level: 'B1', tags: ['greet'], ex: ['—¿De parte de quién? —De Lucía.', '——请问您是哪位？——我是露西亚。'], note: '电话里问“请问是谁”：¿De parte de quién?' },
    { id: 'confiar', es: 'confiar', zh: '信任；托付', pos: 'v', level: 'B1', tags: ['verb'], ex: ['Confío en ti.', '我信任你。'], note: 'confiar en alguien；重音：confío。' },
    { id: 'discreto', es: 'discreto', zh: '谨慎的；嘴严的', pos: 'adj', f: 'discreta', level: 'B1', tags: ['feel'], ex: ['Puedes contárselo: es muy discreta.', '你可以告诉她：她嘴很严。'] },
    { id: 'chismoso', es: 'chismoso', zh: '爱说闲话的', pos: 'adj', f: 'chismosa', level: 'B1', tags: ['feel'], ex: ['¡No seas chismoso!', '别那么八卦！'] },
    { id: 'titular', es: 'titular', zh: '（新闻）标题', pos: 'n', g: 'm', pl: 'titulares', level: 'B1', tags: ['hobby'], ex: ['Solo leo los titulares.', '我只看新闻标题。'] },
    { id: 'prensa', es: 'prensa', zh: '新闻界；报刊', pos: 'n', g: 'f', level: 'B1', tags: ['hobby'], ex: ['La noticia salió en la prensa.', '这条新闻上了报纸。'], ety: '来自 prensar「压」：印刷机就是“压”出文字的机器。英语 press 同理。' },
    { id: 'medios-de-comunicacion', es: 'medios de comunicación', zh: '媒体', pos: 'n', g: 'm', level: 'B1', tags: ['hobby'], ex: ['Los medios de comunicación hablan del tema.', '媒体在报道这个话题。'] },
    { id: 'mencionar', es: 'mencionar', zh: '提及', pos: 'v', level: 'B1', tags: ['verb'], ex: ['No mencionó nada de la fiesta.', '他对派对只字未提。'] },
    { id: 'aclarar', es: 'aclarar', zh: '澄清；弄清楚', pos: 'v', level: 'B1', tags: ['verb'], ex: ['Quiero aclarar una cosa.', '我想澄清一件事。'], ety: '来自 claro「清楚的」。' },
    { id: 'malentendido', es: 'malentendido', zh: '误会', pos: 'n', g: 'm', level: 'B1', tags: ['people'], ex: ['Ha sido un malentendido.', '这是个误会。'] },
    { id: 'interrumpir', es: 'interrumpir', zh: '打断', pos: 'v', level: 'B1', tags: ['verb'], ex: ['Perdona que te interrumpa.', '抱歉打断你一下。'] },
    { id: 'expresar', es: 'expresar', zh: '表达', pos: 'v', level: 'B1', tags: ['verb'], ex: ['No sé expresar lo que siento.', '我不知道怎么表达我的感受。'] },
    { id: 'siguiente', es: 'siguiente', zh: '下一个的；接下来的', pos: 'adj', level: 'B1', tags: ['time'], ex: ['Al día siguiente me llamó.', '第二天他给我打了电话。'] },
    { id: 'anterior', es: 'anterior', zh: '之前的；前面的', pos: 'adj', level: 'B1', tags: ['time'], ex: ['El día anterior había llovido.', '前一天下过雨。'] },
  ],
  sentences: [
    { id: 's1', es: 'Tu madre dice que la llames esta noche.', zh: '你妈妈说让你今晚给她打电话。', g: ['b1-indirecto-presente'], distract: ['llamas'] },
    { id: 's2', es: 'Pablo pregunta si quieres ir al cine.', zh: '巴勃罗问你想不想去看电影。', g: ['b1-indirecto-presente'], distract: ['que'] },
    { id: 's3', es: 'La profesora ha dicho que el examen es el lunes.', zh: '老师说考试在星期一。', g: ['b1-indirecto-presente'] },
    { id: 's4', es: 'Mi jefe me pide que termine el informe hoy.', zh: '我老板要我今天把报告写完。', g: ['b1-indirecto-presente'] },
    { id: 's5', es: 'Pregunta dónde está la estación.', zh: '他问车站在哪儿。', g: ['b1-indirecto-presente'] },
    { id: 's6', es: 'Me dijo que estaba muy cansado.', zh: '他跟我说他很累。', g: ['b1-indirecto-pasado'], distract: ['está'] },
    { id: 's7', es: 'Ana me contó que había perdido el móvil.', zh: '安娜跟我说她把手机弄丢了。', g: ['b1-indirecto-pasado'] },
    { id: 's8', es: 'Dijeron que vendrían al día siguiente.', zh: '他们说第二天会来。', g: ['b1-indirecto-pasado'], distract: ['vendrán'] },
    { id: 's9', es: 'Me preguntó si quería cenar con ella.', zh: '她问我想不想和她一起吃晚饭。', g: ['b1-indirecto-pasado'] },
    { id: 's10', es: 'Nos explicó que iba a cambiar de trabajo.', zh: '他跟我们说他要换工作了。', g: ['b1-indirecto-pasado'] },
    { id: 's11', es: 'Me prometió que me llamaría.', zh: '他答应我会打电话。', g: ['b1-verbos-decir'] },
    { id: 's12', es: 'Según el periódico, mañana habrá huelga.', zh: '据报纸说，明天有罢工。', g: ['b1-verbos-decir'] },
    { id: 's13', es: 'Por lo visto, han cerrado el bar de la esquina.', zh: '看来，街角那家酒吧关门了。', g: ['b1-verbos-decir'] },
    { id: 's14', es: 'Me he enterado de que te casas.', zh: '我听说你要结婚了。', g: ['b1-verbos-decir'] },
    { id: 's15', es: '¿Quiere dejarle un recado?', zh: '您要给他留个口信吗？' },
    { id: 's16', es: 'Me he quedado sin batería.', zh: '我手机没电了。' },
    { id: 's17', es: 'Dale recuerdos a tu madre de mi parte.', zh: '代我问候你妈妈。' },
    { id: 's18', es: 'Aquí no hay cobertura.', zh: '这里没信号。' },
    { id: 's19', es: 'Se queja de que nadie le ayuda.', zh: '他抱怨没人帮他。', g: ['b1-verbos-decir'] },
    { id: 's20', es: 'Asegura que no ha sido él.', zh: '他保证不是他干的。', g: ['b1-verbos-decir'] },
    { id: 's21', es: 'Me dijo que es de Chengdu.', zh: '他跟我说他是成都人。', g: ['b1-indirecto-pasado'] },
    { id: 's22', es: 'Le pregunté qué hora era.', zh: '我问他几点了。', g: ['b1-indirecto-pasado'] },
    { id: 's23', es: 'Ha sido un malentendido.', zh: '这是个误会。' },
    { id: 's24', es: 'Perdona que te interrumpa.', zh: '抱歉打断你一下。' },
    { id: 's25', es: 'El médico dice que no comas tanta sal.', zh: '医生说你别吃那么多盐。', g: ['b1-indirecto-presente'] },
  ],
  cloze: [
    { id: 'c1', text: '«Estoy enfermo.» → Dice que ___ enfermo.', answers: ['está'], options: ['está', 'estaba', 'esté'], zh: '他说他病了。', g: ['b1-indirecto-presente'] },
    { id: 'c2', text: '«Llámame.» → Dice que la ___ (tú).', answers: ['llames'], hint: 'llamar', zh: '她说让你给她打电话。', g: ['b1-indirecto-presente'] },
    { id: 'c3', text: '«¿Vienes?» → Pregunta ___ vienes.', answers: ['si'], options: ['si', 'que', 'sí'], zh: '他问你来不来。', g: ['b1-indirecto-presente'] },
    { id: 'c4', text: '«¿Dónde vives?» → Me pregunta ___ vivo.', answers: ['dónde'], options: ['dónde', 'donde', 'si'], zh: '他问我住在哪儿。', g: ['b1-indirecto-presente'] },
    { id: 'c5', text: '«No hagáis ruido.» → Dice que no ___ ruido.', answers: ['hagáis'], hint: 'hacer', zh: '他说让你们别弄出声音。', g: ['b1-indirecto-presente'] },
    { id: 'c6', text: '«Estoy cansada.» → Me dijo que ___ cansada.', answers: ['estaba'], options: ['estaba', 'está', 'estuvo'], zh: '她跟我说她很累。', g: ['b1-indirecto-pasado'] },
    { id: 'c7', text: '«He perdido el tren.» → Me contó que ___ el tren.', answers: ['había perdido'], options: ['había perdido', 'ha perdido', 'perdía'], zh: '他跟我说他错过了火车。', g: ['b1-indirecto-pasado'] },
    { id: 'c8', text: '«Iré mañana.» → Dijo que ___ al día siguiente.', answers: ['iría'], hint: 'ir', zh: '他说他第二天会去。', g: ['b1-indirecto-pasado'] },
    { id: 'c9', text: '«Voy a comprarlo.» → Dijo que ___ a comprarlo.', answers: ['iba'], hint: 'ir', zh: '他说他打算买。', g: ['b1-indirecto-pasado'] },
    { id: 'c10', text: '«¿Tienes hambre?» → Me preguntó si ___ hambre.', answers: ['tenía'], hint: 'tener', zh: '他问我饿不饿。', g: ['b1-indirecto-pasado'] },
    { id: 'c11', text: '«Ayer fui al médico.» → Me dijo que el día ___ había ido al médico.', answers: ['anterior'], options: ['anterior', 'siguiente', 'ayer'], zh: '他跟我说他前一天去看了医生。', g: ['b1-indirecto-pasado'] },
    { id: 'c12', text: '«Os llamaré mañana.» → Prometió que nos ___ al día siguiente.', answers: ['llamaría'], hint: 'llamar', zh: '他答应第二天给我们打电话。', g: ['b1-indirecto-pasado'] },
    { id: 'c13', text: '___ el periódico, va a llover toda la semana.', answers: ['Según'], options: ['Según', 'Para', 'Por'], zh: '据报纸说，整个星期都会下雨。', g: ['b1-verbos-decir'] },
    { id: 'c14', text: 'Se queja ___ que nadie le escucha.', answers: ['de'], options: ['de', 'en', 'a'], zh: '他抱怨没人听他说话。', g: ['b1-verbos-decir'] },
    { id: 'c15', text: '¿Te has ___ de la noticia?', answers: ['enterado'], options: ['enterado', 'sabido', 'conocido'], zh: '你听说那个消息了吗？', g: ['b1-verbos-decir'] },
    { id: 'c16', text: 'Por lo ___, el bar ha cerrado.', answers: ['visto'], options: ['visto', 'ver', 'vista'], zh: '看来那家酒吧关门了。', g: ['b1-verbos-decir'] },
    { id: 'c17', text: '«Ayúdame, por favor.» → Me pide que le ___.', answers: ['ayude'], hint: 'ayudar', zh: '他请我帮帮他。', g: ['b1-indirecto-presente'] },
    { id: 'c18', text: '«Tendré cuidado.» → Me aseguró que ___ cuidado.', answers: ['tendría'], hint: 'tener', zh: '他向我保证会小心。', g: ['b1-indirecto-pasado'] },
  ],
  conj: [
    { verbs: ['ir', 'venir', 'hacer', 'decir', 'poder', 'tener', 'salir', 'saber', 'llamar'], tenses: ['cond'], g: 'b1-indirecto-pasado' },
    { verbs: ['ser', 'ir', 'ver', 'estar', 'tener', 'querer'], tenses: ['impf'], g: 'b1-indirecto-pasado' },
  ],
  dialogues: [
    {
      id: 'b1-u06-d1',
      title: '你妈妈来电话了 · Te ha llamado tu madre',
      lines: [
        { who: 'Elena', es: '¡Por fin llegas! Te ha llamado tu madre tres veces.', zh: '你终于回来了！你妈妈给你打了三次电话。' },
        { who: 'Xiao Yu', es: '¡Uf! Me he quedado sin batería. ¿Qué te ha dicho?', zh: '唉！我手机没电了。她跟你说什么了？' },
        { who: 'Elena', es: 'Dice que la llames en cuanto puedas, que no es nada grave. Y pregunta si vas a volver a China en Navidad.', zh: '她说让你有空就给她回电话，说不是什么要紧事。还问你圣诞节回不回中国。' },
        { who: 'Xiao Yu', es: 'Vale. ¿Algo más?', zh: '好的。还有别的吗？' },
        { who: 'Elena', es: 'Sí, también ha llamado Lucas. Me ha contado que ha encontrado trabajo en Londres y que se va el mes que viene.', zh: '有，卢卡斯也打来了。他跟我说他在伦敦找到工作了，下个月就走。' },
        { who: 'Xiao Yu', es: '¿En serio? ¡Pero si la semana pasada me dijo que no quería irse de Madrid!', zh: '真的吗？可他上周还跟我说不想离开马德里呢！' },
        { who: 'Elena', es: 'Por lo visto, le han ofrecido un sueldo muy bueno. Dice que quiere hacer una fiesta de despedida el sábado.', zh: '听说人家给他开了很高的工资。他说周六想办个送别会。' },
        { who: 'Xiao Yu', es: 'Pues dile que cuente conmigo. Ahora llamo a mi madre.', zh: '那你告诉他算我一个。我现在给我妈打电话。' },
      ],
    },
  ],
  readings: [
    {
      id: 'b1-r11',
      level: 'B1',
      title: 'Mensajes en el contestador',
      titleZh: '语音信箱里的留言',
      topic: '留言',
      paras: [
        [
          ['Mensaje 1: «Hola, soy Carmen, de la academia. Te llamo para decirte que mañana no hay clase porque la profesora está enferma. La clase será el jueves a la misma hora».', '留言一：“你好，我是语言学校的卡门。打电话告诉你明天没课，因为老师病了。课改到星期四同一时间。”'],
        ],
        [
          ['Mensaje 2: «Buenos días, le llamamos de la clínica dental. Le recordamos que tiene cita el viernes a las diez. Por favor, llegue diez minutos antes».', '留言二：“早上好，这里是牙科诊所。提醒您周五十点有预约。请提前十分钟到。”'],
        ],
        [
          ['Mensaje 3: «¡Hola, cariño! Soy mamá. ¿Por qué no contestas? ¿Has comido bien? Llámame cuando puedas. ¡Ah! Y tu abuela pregunta si vas a venir en verano».', '留言三：“喂，宝贝！我是妈妈。你怎么不接电话？吃得好吗？有空给我打电话。啊！还有，你奶奶问你暑假回不回来。”'],
        ],
        [
          ['Cuando su compañero de piso llegó, Hao le resumió los mensajes: «Carmen me ha dicho que mañana no hay clase. El dentista me recuerda que tengo cita el viernes. Y mi madre quiere que la llame y pregunta si voy a volver en verano… como siempre».', '室友回来后，浩把留言概括给他听：“卡门说明天没课。牙医提醒我周五有预约。还有我妈要我给她回电话，问我暑假回不回去……老样子。”'],
        ],
      ],
      gloss: { academia: '培训学校', clínica: '诊所', dental: '牙科的', cita: '预约', llegue: '到达（命令式）', cariño: '亲爱的', resumió: '概括' },
      questions: [
        { type: 'mc', q: '明天为什么没课？', options: ['放假', '老师病了', '学校搬家'], answer: 1 },
        { type: 'mc', q: '牙科诊所要求浩做什么？', options: ['改时间', '提前十分钟到', '带上保险卡'], answer: 1 },
        { type: 'tf', q: '浩的奶奶问他圣诞节回不回家。', answer: false, explain: 'pregunta si vas a venir en verano' },
      ],
    },
    {
      id: 'b1-r12',
      level: 'B1',
      title: 'Así nace un rumor',
      titleZh: '谣言是这样诞生的',
      topic: '八卦',
      paras: [
        [
          ['El lunes por la mañana, Rosa vio a su compañero Andrés en el ascensor con una caja llena de cosas. Rosa le comentó a Javier que Andrés estaba recogiendo sus cosas.', '星期一早上，罗莎在电梯里看到同事安德烈斯抱着一个装满东西的箱子。罗莎跟哈维尔提了一句，说安德烈斯在收拾东西。'],
        ],
        [
          ['A la hora del café, Javier le contó a Marta que, por lo visto, Andrés se iba de la empresa. Marta le dijo a todo el departamento que habían despedido a Andrés.', '喝咖啡的时候，哈维尔告诉玛尔塔，看样子安德烈斯要离开公司了。玛尔塔又跟整个部门说安德烈斯被炒了。'],
        ],
        [
          ['Por la tarde, el jefe recibió diez correos: todos preguntaban por qué había despedido a Andrés. El jefe, sorprendido, llamó a Andrés a su despacho.', '下午，老板收到了十封邮件：都在问他为什么开除安德烈斯。老板一头雾水，把安德烈斯叫到了办公室。'],
          ['Andrés se rio mucho. Explicó que no se iba a ninguna parte: solo se había cambiado de mesa porque quería estar al lado de la ventana.', '安德烈斯笑得不行。他解释说自己哪儿也不去：只是换了张桌子，因为他想坐在窗边。'],
        ],
      ],
      gloss: { caja: '箱子', recogiendo: '收拾', departamento: '部门', despedido: '解雇', despacho: '办公室', rio: '笑了（reírse）', parte: '地方' },
      questions: [
        { type: 'mc', q: '罗莎在电梯里看到了什么？', options: ['安德烈斯在哭', '安德烈斯拿着一箱东西', '老板很生气'], answer: 1 },
        { type: 'mc', q: '谁告诉整个部门安德烈斯被开除了？', options: ['罗莎', '哈维尔', '玛尔塔'], answer: 2 },
        { type: 'tf', q: '安德烈斯其实只是换了张桌子。', answer: true, explain: 'solo se había cambiado de mesa' },
      ],
    },
  ],
  writing: [{ id: 'w1', prompt: '你的室友外出时有三个人给他 / 她留了言（家人、老师、朋友……）。写一条消息，把这三段留言转述给室友，至少用一次 dice que + 虚拟式，一次 pregunta si，一次 dijo que + 时态变化。', words: [70, 130], hints: ['Te ha llamado… Dice que…', 'Pregunta si… / Quiere saber qué…', 'Ayer… me dijo que…', 'Por lo visto…'] }],
}
