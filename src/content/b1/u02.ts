import type { Unit } from '../types'

export const u02: Unit = {
  id: 'b1-u02',
  level: 'B1',
  order: 2,
  title: '合租与规矩',
  titleEs: 'Convivir con otros',
  icon: '🧹',
  goals: ['用 recomendar、pedir、prohibir 等动词 + que + 虚拟式提要求和建议', '用 es necesario / es importante 表达规则和必要性', '分清 pedir 和 preguntar', '和室友、邻居、房东礼貌地沟通问题'],
  grammar: [
    {
      id: 'b1-influencia',
      title: '影响类动词 + que + 虚拟式',
      titleEs: 'Verbos de influencia + subjuntivo',
      level: 'B1',
      summary: '想影响别人的行为（建议、请求、命令、允许、禁止）时：主句动词 + que + 虚拟式。Te recomiendo que descanses.',
      body: `当我们 **建议、请求、命令、允许或禁止** 别人做某事时，那件事还没发生，只是“我们希望它发生”，所以从句用 **虚拟式**。

| 意图 | 动词 | 例句 |
|---|---|---|
| 建议 | *recomendar, aconsejar, sugerir* | *Te **recomiendo** que **descanses**.* |
| 请求 | *pedir, rogar* | *Os **pido** que no **hagáis** ruido.* |
| 命令、要求 | *decir, exigir, insistir en* | *El casero **exige** que **paguemos** a tiempo.* |
| 允许、禁止 | *permitir, dejar, prohibir* | *Mis padres no me **dejan** que **salga** tarde.* |

### 常和间接宾语代词一起用
*(A ti) **Te** aconsejo que… / (A él) **Le** pido que… / (A vosotros) **Os** prohíbo que…*

### permitir、dejar、prohibir 也可以直接接原形
- *Te prohíbo **que fumes** aquí.* = *Te prohíbo **fumar** aquí.*
- *No me dejan **salir**.* = *No me dejan **que salga**.*

### decir 的两种意思
- *decir* = 告知（陈述式）：*Me dice que **está** cansado.*（他告诉我他累了。）
- *decir* = 命令（虚拟式）：*Me dice que **esté** en casa a las diez.*（他叫我十点前在家。）`,
      examples: [
        ['Te recomiendo que hables con tu compañero de piso.', '我建议你和室友谈谈。'],
        ['El médico me ha dicho que beba más agua.', '医生叫我多喝水。'],
        ['Os pido que no hagáis ruido después de las once.', '请你们十一点以后别弄出声音。'],
        ['La casera no permite que tengamos mascotas.', '房东不允许我们养宠物。'],
        ['Mi madre insiste en que lleve abrigo.', '我妈妈坚持要我穿外套。'],
      ],
      tables: [{ verbs: ['hacer', 'poner', 'traer'], tense: 'subj' }],
      origin: `这些动词的拉丁“出身”本身就带着“推动、阻止”的画面：
- **prohibir** ← *prohibere*：*pro*「在前面」+ *habere*「拿着」→ 挡在前面，不让过去
- **permitir** ← *permittere*：*per*「穿过」+ *mittere*「放出」→ 放行。英语 *permit* 同源
- **exigir** ← *exigere*「赶出来；索取」：*ex* + *agere*「推动」。英语 *exact*（精确的，原义“被严格要求的”）同源
- **sugerir** ← *suggerere*「从下面递上去」——悄悄地把想法递给别人`,
      pitfalls: ['❌ *Te recomiendo que vas al médico.* ✅ *Te recomiendo que vayas al médico.*', '❌ *Le pido que me ayuda.* ✅ *Le pido que me ayude.*', '❌ *Insiste que venga.* ✅ *Insiste en que venga.*：insistir 要带 en。'],
    },
    {
      id: 'b1-es-necesario',
      title: 'es necesario / es importante + 原形 还是 que + 虚拟式？',
      titleEs: 'Es necesario (que)…',
      level: 'B1',
      summary: '泛指所有人 → 原形：Es importante dormir bien. 指具体的人 → que + 虚拟式：Es importante que duermas bien.',
      body: `表达 **必要、重要、合适** 的无人称句：
*es necesario, es importante, es mejor, es conveniente, es fundamental, es imprescindible, es obligatorio, hace falta*

| 说谁？ | 结构 | 例句 |
|---|---|---|
| **泛指**（大家都应该） | + **原形** | *Es importante **reciclar**.* |
| **具体某人** | + **que + 虚拟式** | *Es importante que **recicléis**.* |

更多例子：
- *Hace falta **comprar** papel higiénico.* ↔ *Hace falta que **alguien compre** papel higiénico.*
- *Es mejor **llamar** antes.* ↔ *Es mejor que **llames** antes.*
- *No es necesario **traer** nada.* ↔ *No es necesario que **traigas** nada.*

### 注意
如果是在陈述 **事实**（*es verdad, es cierto, es evidente, está claro*），后面用 **陈述式**：
*Es verdad que el piso **es** pequeño.*（房子确实小。）——下个单元会详细讲。`,
      examples: [
        ['Es necesario que limpiemos la cocina hoy.', '我们今天得打扫厨房。'],
        ['Es mejor llamar antes de ir.', '去之前最好先打个电话。'],
        ['No hace falta que traigas nada.', '你什么都不用带。'],
        ['Es fundamental que todos respeten las normas.', '所有人遵守规定是最基本的。'],
        ['Es obligatorio llevar casco.', '必须戴头盔。'],
      ],
      origin: `**hacer falta** 里的 *falta* 来自 *faltar*，它的远祖是拉丁语 *fallere*「欺骗；落空」——东西“落空”了，就是“缺”。英语 *fail*（失败）、*fault*（过错）都是同一个家族。

**necesario** ← *necessarius*，来自 *ne* + *cedere*「不让步」：躲不开、绕不过的事，就是“必需的”。`,
      pitfalls: ['❌ *Es importante que estudiar.* ✅ *Es importante estudiar.* / *Es importante que estudies.*', '❌ *Es necesario que vienes.* ✅ *Es necesario que vengas.*', '❌ *Es verdad que sea caro.* ✅ *Es verdad que es caro.*（陈述事实用陈述式）'],
    },
    {
      id: 'b1-pedir-preguntar',
      title: 'pedir 还是 preguntar？',
      titleEs: 'Pedir y preguntar',
      level: 'B1',
      summary: 'pedir = 要东西、请求别人做事（pedir que + 虚拟式）；preguntar = 问问题、打听信息（preguntar si / qué / por）。',
      body: `中文的“请求”和“问”分得清，但中国学生常常用错，因为英语的 *ask* 两个意思都有。

| | **pedir** | **preguntar** |
|---|---|---|
| 意思 | 要东西；请求做事 | 问问题；打听信息 |
| 接名词 | *pedir **un favor / la cuenta / ayuda*** | *preguntar **la hora / el precio*** |
| 接从句 | *pedir **que + 虚拟式*** | *preguntar **si / qué / dónde…*** |
| 例句 | *Le **pido** que me **ayude**.* | *Le **pregunto** si **puede** ayudarme.* |

### 常用搭配
- ***pedir** permiso*（请求允许）、*pedir perdón*（道歉）、*pedir prestado*（借）、*pedir cita*（预约）
- ***preguntar por** alguien*（打听某人的情况）：*Tu abuela **pregunta por** ti.*（你奶奶问起你。）

### 比较
- *Le **pregunto** al casero **si** puedo tener un gato.*（我问房东我能不能养猫。）
- *Le **pido** al casero **que** me **deje** tener un gato.*（我请求房东让我养猫。）`,
      examples: [
        ['¿Puedo pedirte un favor?', '我能请你帮个忙吗？'],
        ['Le pregunté a la vecina si tenía una escalera.', '我问邻居有没有梯子。'],
        ['Mi compañero me pide que baje la música.', '我的室友叫我把音乐调小一点。'],
        ['Tu abuela siempre pregunta por ti.', '你奶奶总是问起你。'],
        ['Tienes que pedir permiso al casero.', '你得征得房东的同意。'],
      ],
      origin: `**pedir** ← 拉丁语 *petere*「奔向；追求；请求」。英语 *petition*（请愿）、*appetite*（食欲，“奔向食物”）、*compete*（竞争，“一起追”）都来自它。

**preguntar** ← *percontari*「询问、调查」。据说它和 *contus*「篙」有关：水手用长篙一点点探测水深——“问问题”就是一点点“探底”。`,
      pitfalls: ['❌ *Le pregunté un favor.* ✅ *Le pedí un favor.*', '❌ *Pedí al profesor si había clase.* ✅ *Pregunté al profesor si había clase.*', '❌ *Me pregunta que le ayude.* ✅ *Me pide que le ayude.*（请求 → pedir）'],
    },
  ],
  words: [
    { id: 'convivencia', es: 'convivencia', zh: '共同生活；相处', pos: 'n', g: 'f', level: 'B1', tags: ['home', 'people'], ex: ['La convivencia no siempre es fácil.', '一起生活并不总是容易的。'], ety: 'con「一起」+ vivir「生活」。' },
    { id: 'companero-de-piso', es: 'compañero de piso', zh: '室友（合租的人）', pos: 'n', g: 'm', f: 'compañera de piso', level: 'B1', tags: ['home', 'people'], ex: ['Mi compañero de piso es italiano.', '我的室友是意大利人。'], latam: '拉美说 compañero de cuarto / de departamento，墨西哥口语 roomie。' },
    { id: 'regla', es: 'regla', zh: '规则；尺子', pos: 'n', g: 'f', level: 'B1', tags: ['home'], ex: ['En esta casa hay pocas reglas.', '这个家规矩不多。'], ety: '拉丁语 regula「直尺」：规则就是“衡量的直尺”。英语 rule 同源。' },
    { id: 'permiso', es: 'permiso', zh: '许可；假期；（打扰时）借过', pos: 'n', g: 'm', level: 'B1', tags: ['job'], ex: ['Con permiso, ¿puedo pasar?', '劳驾，我能过去吗？'], note: 'permiso de trabajo = 工作许可；estar de permiso = 在休假。' },
    { id: 'prohibir', es: 'prohibir', zh: '禁止', pos: 'v', level: 'B1', tags: ['verb'], ex: ['Se prohíbe fumar.', '禁止吸烟。'], note: '重音在 i 上：prohíbo, prohíbes, prohíbe, prohíben。' },
    { id: 'permitir', es: 'permitir', zh: '允许', pos: 'v', level: 'B1', tags: ['verb'], ex: ['No se permiten perros.', '不允许带狗。'] },
    { id: 'exigir', es: 'exigir', zh: '要求；苛求', pos: 'v', level: 'B1', tags: ['verb'], ex: ['El jefe exige que lleguemos puntuales.', '老板要求我们准时到。'], note: 'g→j：exijo，虚拟式 exija。' },
    { id: 'obligar', es: 'obligar', zh: '强迫；迫使', pos: 'v', level: 'B1', tags: ['verb'], ex: ['Nadie te obliga a venir.', '没人逼你来。'], note: 'obligar a + 原形。' },
    { id: 'insistir', es: 'insistir', zh: '坚持；一再要求', pos: 'v', level: 'B1', tags: ['verb'], ex: ['Insiste en pagar él.', '他坚持要自己付钱。'], note: 'insistir en + 原形 / en que + 虚拟式。' },
    { id: 'sugerir', es: 'sugerir', zh: '建议；暗示', pos: 'v', level: 'B1', tags: ['verb'], ex: ['Te sugiero que compres los billetes con tiempo.', '我建议你提前买票。'], note: 'e→ie / i：sugiero，sugiramos。' },
    { id: 'rogar', es: 'rogar', zh: '恳请；请求', pos: 'v', level: 'B1', tags: ['verb'], ex: ['Se ruega silencio.', '请保持安静。'], note: 'o→ue：ruego；常见于正式告示。' },
    { id: 'propietario', es: 'propietario', zh: '房主；业主', pos: 'n', g: 'm', f: 'propietaria', level: 'B1', tags: ['home'], ex: ['El propietario vive en el piso de abajo.', '房主住在楼下。'] },
    { id: 'casero', es: 'casero', zh: '房东（口语）', pos: 'n', g: 'm', f: 'casera', level: 'B1', tags: ['home'], ex: ['El casero no contesta mis mensajes.', '房东不回我消息。'], note: '形容词 casero 是“家常的、自制的”：comida casera。' },
    { id: 'inquilino', es: 'inquilino', zh: '租客', pos: 'n', g: 'm', f: 'inquilina', level: 'B1', tags: ['home'], ex: ['Los inquilinos pagan el alquiler el día uno.', '租客每月一号交房租。'], ety: '拉丁语 inquilinus「住在别人家的人」。' },
    { id: 'fianza', es: 'fianza', zh: '押金', pos: 'n', g: 'f', level: 'B1', tags: ['home'], ex: ['Hay que pagar un mes de fianza.', '要付一个月的押金。'], latam: '拉美多说 depósito。' },
    { id: 'factura', es: 'factura', zh: '账单；发票', pos: 'n', g: 'f', level: 'B1', tags: ['home', 'shop'], ex: ['Este mes la factura de la luz es muy alta.', '这个月的电费账单很高。'] },
    { id: 'gastos', es: 'gastos', zh: '开销；费用', pos: 'n', g: 'm', level: 'B1', tags: ['home'], ex: ['Compartimos los gastos de la casa.', '我们平摊家里的开销。'], note: 'gastos incluidos = 包水电等费用。' },
    { id: 'comunidad', es: 'comunidad', zh: '社区；（楼的）业主委员会', pos: 'n', g: 'f', pl: 'comunidades', level: 'B1', tags: ['home', 'city'], ex: ['La reunión de la comunidad es el martes.', '业主大会在周二。'], note: '在西班牙，comunidad de vecinos 指同一栋楼的全体住户。' },
    { id: 'portero', es: 'portero', zh: '门卫；（足球）守门员', pos: 'n', g: 'm', f: 'portera', level: 'B1', tags: ['home', 'job'], ex: ['El portero me ha dado un paquete.', '门卫给了我一个包裹。'], latam: '拉美多说 conserje。' },
    { id: 'turno', es: 'turno', zh: '轮班；轮次', pos: 'n', g: 'm', level: 'B1', tags: ['home', 'job'], ex: ['Esta semana te toca a ti: es tu turno.', '这周轮到你了。'] },
    { id: 'limpieza', es: 'limpieza', zh: '清洁；打扫', pos: 'n', g: 'f', level: 'B1', tags: ['home'], ex: ['Hacemos la limpieza los sábados.', '我们每周六大扫除。'] },
    { id: 'aspiradora', es: 'aspiradora', zh: '吸尘器', pos: 'n', g: 'f', level: 'B1', tags: ['home'], ex: ['¿Puedes pasar la aspiradora?', '你能用吸尘器吸一下地吗？'], ety: '来自 aspirar「吸」。' },
    { id: 'cubo-de-la-basura', es: 'cubo de la basura', zh: '垃圾桶', pos: 'n', g: 'm', level: 'B1', tags: ['home'], ex: ['El cubo de la basura está lleno.', '垃圾桶满了。'], emoji: '🗑️', latam: '拉美说 bote (墨西哥)、tacho (阿根廷)、caneca (哥伦比亚)。' },
    { id: 'queja', es: 'queja', zh: '抱怨；投诉', pos: 'n', g: 'f', level: 'B1', tags: ['home'], ex: ['Los vecinos han puesto una queja.', '邻居们投诉了。'] },
    { id: 'respeto', es: 'respeto', zh: '尊重', pos: 'n', g: 'm', level: 'B1', tags: ['people'], ex: ['Hay que tratar a todos con respeto.', '要尊重每一个人。'], ety: '拉丁语 respectus「回头看」：re + specere「看」——尊重就是“再看一眼、重视”。' },
    { id: 'acuerdo', es: 'acuerdo', zh: '协议；一致意见', pos: 'n', g: 'm', level: 'B1', tags: ['people'], ex: ['Llegamos a un acuerdo.', '我们达成了一致。'] },
    { id: 'mascota', es: 'mascota', zh: '宠物；吉祥物', pos: 'n', g: 'f', level: 'B1', tags: ['animal'], ex: ['¿Se pueden tener mascotas en el piso?', '公寓里可以养宠物吗？'], ety: '来自法语 mascotte「护身符」。' },
    { id: 'ladrar', es: 'ladrar', zh: '（狗）叫', pos: 'v', level: 'B1', tags: ['verb', 'animal'], ex: ['El perro del vecino ladra toda la noche.', '邻居家的狗叫了一整夜。'], ety: '拉丁语 latrare。' },
    { id: 'reparar', es: 'reparar', zh: '修理', pos: 'v', level: 'B1', tags: ['verb', 'home'], ex: ['Tienen que reparar la lavadora.', '他们得修洗衣机。'], note: '比 arreglar 更正式。' },
    { id: 'averia', es: 'avería', zh: '故障', pos: 'n', g: 'f', level: 'B1', tags: ['home'], ex: ['Hay una avería en el ascensor.', '电梯出故障了。'], ety: '源自阿拉伯语 ʿawār「瑕疵」（经意大利语 avaria）。' },
    { id: 'fontanero', es: 'fontanero', zh: '水管工', pos: 'n', g: 'm', f: 'fontanera', level: 'B1', tags: ['home', 'job'], ex: ['Hay que llamar al fontanero: el grifo gotea.', '得叫水管工了：水龙头在滴水。'], ety: '来自 fontana「泉水」。', latam: '拉美说 plomero（来自 plomo「铅」：旧时水管是铅做的）。' },
    { id: 'electricista', es: 'electricista', zh: '电工', pos: 'n', g: 'mf', level: 'B1', tags: ['home', 'job'], ex: ['El electricista viene mañana.', '电工明天来。'] },
    { id: 'cerradura', es: 'cerradura', zh: '锁', pos: 'n', g: 'f', level: 'B1', tags: ['home'], ex: ['La llave no entra en la cerradura.', '钥匙插不进锁孔。'], ety: '来自 cerrar「关」。', emoji: '🔒' },
    { id: 'tender', es: 'tender', zh: '晾（衣服）；伸展；倾向于', pos: 'v', level: 'B1', tags: ['verb', 'home'], ex: ['Voy a tender la ropa en el balcón.', '我去阳台晾衣服。'], note: 'e→ie：tiendo。' },
    { id: 'colada', es: 'colada', zh: '要洗 / 刚洗好的一批衣服', pos: 'n', g: 'f', level: 'B1', tags: ['home'], ex: ['Hoy me toca poner la colada.', '今天轮到我洗衣服。'], note: '西班牙说法：poner la colada = 开洗衣机洗衣服。' },
    { id: 'ensuciar', es: 'ensuciar', zh: '弄脏', pos: 'v', level: 'B1', tags: ['verb', 'home'], ex: ['No ensucies la cocina.', '别把厨房弄脏。'], ety: 'en- + sucio「脏的」。' },
    { id: 'recoger', es: 'recoger', zh: '收拾；捡起；接（人）', pos: 'v', level: 'B1', tags: ['verb', 'home'], ex: ['Recoge tu ropa, por favor.', '请把你的衣服收好。'], note: 'g→j：recojo，虚拟式 recoja。' },
    { id: 'desordenado', es: 'desordenado', zh: '乱的；（人）不爱整理的', pos: 'adj', f: 'desordenada', level: 'B1', tags: ['feel', 'home'], ex: ['Mi habitación está muy desordenada.', '我的房间很乱。'] },
    { id: 'ordenado', es: 'ordenado', zh: '整齐的；（人）爱整洁的', pos: 'adj', f: 'ordenada', level: 'B1', tags: ['feel', 'home'], ex: ['Es una persona muy ordenada.', '她是个很爱整洁的人。'] },
    { id: 'volumen', es: 'volumen', zh: '音量；体积', pos: 'n', g: 'm', pl: 'volúmenes', level: 'B1', tags: ['home'], ex: ['¿Puedes bajar el volumen?', '你能把音量调小吗？'], note: '复数要加重音：volúmenes。' },
    { id: 'obligatorio', es: 'obligatorio', zh: '必须的；强制的', pos: 'adj', f: 'obligatoria', level: 'B1', tags: ['adj'], ex: ['Es obligatorio llevar mascarilla.', '必须戴口罩。'] },
    { id: 'conveniente', es: 'conveniente', zh: '合适的；可取的', pos: 'adj', level: 'B1', tags: ['adj'], ex: ['Es conveniente reservar antes.', '最好提前预订。'], en: '注意：西语 conveniente 是“合适、可取”，英语 convenient（方便的）常说 práctico / cómodo。' },
    { id: 'fundamental', es: 'fundamental', zh: '根本的；最重要的', pos: 'adj', level: 'B1', tags: ['adj'], ex: ['La comunicación es fundamental.', '沟通是最重要的。'] },
    { id: 'imprescindible', es: 'imprescindible', zh: '必不可少的', pos: 'adj', level: 'B1', tags: ['adj'], ex: ['El pasaporte es imprescindible.', '护照是必不可少的。'], ety: 'im- + prescindir「舍弃」：不可舍弃的。' },
    { id: 'hace-falta', es: 'hace falta', zh: '需要', pos: 'phr', level: 'B1', tags: ['func'], ex: ['No hace falta que vengas.', '你不必来。'] },
    { id: 'aviso', es: 'aviso', zh: '通知；警告', pos: 'n', g: 'm', level: 'B1', tags: ['home'], ex: ['Hay un aviso en el ascensor.', '电梯里贴了一张通知。'] },
  ],
  sentences: [
    { id: 's1', es: 'Te recomiendo que hables con tu compañero de piso.', zh: '我建议你和室友谈谈。', g: ['b1-influencia'], distract: ['hablas'] },
    { id: 's2', es: 'El médico me ha dicho que beba más agua.', zh: '医生叫我多喝水。', g: ['b1-influencia'], distract: ['bebo'] },
    { id: 's3', es: 'Os pido que no hagáis ruido después de las once.', zh: '请你们十一点以后别弄出声音。', g: ['b1-influencia'], distract: ['hacéis'] },
    { id: 's4', es: 'La casera no permite que tengamos mascotas.', zh: '房东不允许我们养宠物。', g: ['b1-influencia'] },
    { id: 's5', es: 'Mi madre insiste en que lleve abrigo.', zh: '我妈妈坚持要我穿外套。', g: ['b1-influencia'] },
    { id: 's6', es: 'Es necesario que limpiemos la cocina hoy.', zh: '我们今天得打扫厨房。', g: ['b1-es-necesario'], distract: ['limpiamos'] },
    { id: 's7', es: 'Es mejor llamar antes de ir.', zh: '去之前最好先打个电话。', g: ['b1-es-necesario'] },
    { id: 's8', es: 'No hace falta que traigas nada.', zh: '你什么都不用带。', g: ['b1-es-necesario'], distract: ['traes'] },
    { id: 's9', es: 'Es importante que todos respeten las normas.', zh: '大家都遵守规定很重要。', g: ['b1-es-necesario'] },
    { id: 's10', es: '¿Puedo pedirte un favor?', zh: '我能请你帮个忙吗？', g: ['b1-pedir-preguntar'], distract: ['preguntarte'] },
    { id: 's11', es: 'Le pregunté a la vecina si tenía una escalera.', zh: '我问邻居有没有梯子。', g: ['b1-pedir-preguntar'], distract: ['pedí'] },
    { id: 's12', es: 'Mi compañero me pide que baje la música.', zh: '我的室友叫我把音乐调小。', g: ['b1-pedir-preguntar'] },
    { id: 's13', es: 'Tu abuela siempre pregunta por ti.', zh: '你奶奶总是问起你。', g: ['b1-pedir-preguntar'] },
    { id: 's14', es: 'Tienes que pedir permiso al casero.', zh: '你得征得房东同意。', g: ['b1-pedir-preguntar'] },
    { id: 's15', es: 'Te aconsejo que no firmes el contrato todavía.', zh: '我劝你先别签合同。', g: ['b1-influencia'] },
    { id: 's16', es: 'Nuestros padres no nos dejan salir entre semana.', zh: '我们父母不让我们工作日出去玩。', g: ['b1-influencia'] },
    { id: 's17', es: 'El casero exige que paguemos el alquiler el día uno.', zh: '房东要求我们每月一号交房租。', g: ['b1-influencia'] },
    { id: 's18', es: 'Esta semana te toca sacar la basura.', zh: '这周轮到你倒垃圾。' },
    { id: 's19', es: '¿Puedes bajar el volumen, por favor?', zh: '你能把音量调小点吗？' },
    { id: 's20', es: 'Hay una avería en el ascensor.', zh: '电梯出故障了。' },
    { id: 's21', es: 'Te sugiero que pongas un cartel en la puerta.', zh: '我建议你在门上贴张告示。', g: ['b1-influencia'] },
    { id: 's22', es: 'Se ruega no fumar en la escalera.', zh: '请勿在楼梯间吸烟。' },
    { id: 's23', es: 'Es fundamental que haya buena comunicación.', zh: '良好的沟通是最基本的。', g: ['b1-es-necesario'] },
    { id: 's24', es: 'Hace falta comprar papel higiénico.', zh: '得买卫生纸了。', g: ['b1-es-necesario'] },
    { id: 's25', es: 'Me dice que está cansado.', zh: '他告诉我他累了。', g: ['b1-influencia'] },
    { id: 's26', es: 'Me dice que esté en casa a las diez.', zh: '他叫我十点前到家。', g: ['b1-influencia'] },
  ],
  cloze: [
    { id: 'c1', text: 'Te recomiendo que ___ (tú) al médico.', answers: ['vayas'], hint: 'ir', zh: '我建议你去看医生。', g: ['b1-influencia'] },
    { id: 'c2', text: 'Os pido que no ___ ruido.', answers: ['hagáis'], hint: 'hacer', zh: '请你们别弄出声音。', g: ['b1-influencia'] },
    { id: 'c3', text: 'El casero no permite que ___ (nosotros) animales.', answers: ['tengamos'], hint: 'tener', zh: '房东不允许我们养动物。', g: ['b1-influencia'] },
    { id: 'c4', text: 'Mi madre me pide que la ___ todos los días.', answers: ['llame'], hint: 'llamar', zh: '我妈妈要我每天给她打电话。', g: ['b1-influencia'] },
    { id: 'c5', text: 'Te aconsejo que ___ el contrato con calma.', answers: ['leas'], hint: 'leer', zh: '我建议你好好读一读合同。', g: ['b1-influencia'] },
    { id: 'c6', text: 'Es necesario que ___ (vosotros) la cocina.', answers: ['limpiéis'], hint: 'limpiar', zh: '你们得打扫厨房。', g: ['b1-es-necesario'] },
    { id: 'c7', text: 'Es importante ___ ocho horas.', answers: ['dormir'], options: ['dormir', 'que duermas', 'duermes'], zh: '睡八小时很重要。', g: ['b1-es-necesario'], explain: '泛指所有人，用原形。' },
    { id: 'c8', text: 'No hace falta que ___ (tú) nada.', answers: ['traigas'], hint: 'traer', zh: '你什么都不用带。', g: ['b1-es-necesario'] },
    { id: 'c9', text: 'Es mejor que ___ (ustedes) antes de venir.', answers: ['llamen'], hint: 'llamar', zh: '你们来之前最好先打电话。', g: ['b1-es-necesario'] },
    { id: 'c10', text: 'Le ___ al camarero la cuenta.', answers: ['pedí'], options: ['pedí', 'pregunté', 'dije'], zh: '我向服务员要了账单。', g: ['b1-pedir-preguntar'] },
    { id: 'c11', text: 'Le ___ a la profesora si había clase mañana.', answers: ['pregunté'], options: ['pregunté', 'pedí', 'dejé'], zh: '我问老师明天有没有课。', g: ['b1-pedir-preguntar'] },
    { id: 'c12', text: 'Mi compañero me pide que ___ la música.', answers: ['baje'], hint: 'bajar', zh: '我的室友叫我把音乐调小。', g: ['b1-influencia'] },
    { id: 'c13', text: 'El jefe exige que ___ (nosotros) puntuales.', answers: ['seamos'], hint: 'ser', zh: '老板要求我们守时。', g: ['b1-influencia'] },
    { id: 'c14', text: 'Te sugiero que ___ (tú) los billetes hoy.', answers: ['compres'], hint: 'comprar', zh: '我建议你今天就买票。', g: ['b1-influencia'] },
    { id: 'c15', text: 'Es fundamental que todos ___ las normas.', answers: ['respeten'], hint: 'respetar', zh: '所有人都必须遵守规定。', g: ['b1-es-necesario'] },
    { id: 'c16', text: 'Insisto ___ que vengas a cenar.', answers: ['en'], options: ['en', 'a', 'de'], zh: '我坚持要你来吃晚饭。', g: ['b1-influencia'] },
    { id: 'c17', text: 'Es verdad que el piso ___ pequeño.', answers: ['es'], options: ['es', 'sea', 'esté'], zh: '房子确实小。', g: ['b1-es-necesario'], explain: '陈述事实（es verdad que）用陈述式。' },
    { id: 'c18', text: 'Mis padres no me dejan que ___ (yo) tarde.', answers: ['salga'], hint: 'salir', zh: '我父母不让我晚回家。', g: ['b1-influencia'] },
    { id: 'c19', text: 'Te prohíbo que ___ (tú) en mi coche.', answers: ['fumes'], hint: 'fumar', zh: '我不准你在我车里抽烟。', g: ['b1-influencia'] },
  ],
  conj: [
    { verbs: ['pedir', 'seguir', 'repetir', 'servir', 'poner', 'traer', 'oír'], tenses: ['subj'], g: 'b1-influencia' },
    { verbs: ['recoger', 'apagar', 'sacar', 'exigir', 'limpiar', 'dejar'], tenses: ['subj'], g: 'b1-influencia' },
  ],
  dialogues: [
    {
      id: 'b1-u02-d1',
      title: '合租会议 · Reunión de piso',
      lines: [
        { who: 'Elena', es: 'Chicos, tenemos que hablar. La cocina está fatal otra vez.', zh: '各位，我们得谈谈。厨房又乱得一塌糊涂了。' },
        { who: 'Lucas', es: 'Vale, lo siento. Anoche cené tarde y no fregué los platos.', zh: '好吧，对不起。我昨晚吃得晚，没洗碗。' },
        { who: 'Elena', es: 'No pasa nada, pero propongo que hagamos turnos de limpieza.', zh: '没关系，但我提议我们排个打扫值日表。' },
        { who: 'Xiao Yu', es: 'Me parece bien. Y también os pido que no pongáis música alta después de las doce. Tengo clase a las ocho.', zh: '我同意。还有，请你们十二点以后别放很大声的音乐。我八点有课。' },
        { who: 'Lucas', es: 'Entendido. ¿Y la factura de la luz? Este mes es altísima.', zh: '明白。那电费呢？这个月贵得要命。' },
        { who: 'Elena', es: 'Es importante que apaguemos la calefacción cuando no estamos en casa.', zh: '我们不在家的时候一定要把暖气关掉。' },
        { who: 'Xiao Yu', es: 'De acuerdo. Escribo las normas y las ponemos en la nevera, ¿vale?', zh: '好的。我把规矩写下来，贴在冰箱上，行吗？' },
        { who: 'Lucas', es: '¡Perfecto! Pero te pido que no sean muy estrictas, ¿eh?', zh: '完美！不过拜托别定得太严哦。' },
      ],
    },
  ],
  readings: [
    {
      id: 'b1-r03',
      level: 'B1',
      title: 'Normas de la residencia',
      titleZh: '学生宿舍守则',
      topic: '规则',
      paras: [
        [
          ['Bienvenidos a la Residencia Universitaria Los Olivos. Para que la convivencia sea agradable, les rogamos que lean y respeten estas normas.', '欢迎入住橄榄树大学生公寓。为了让大家相处愉快，请仔细阅读并遵守以下规定。'],
        ],
        [
          ['Es obligatorio mostrar la tarjeta de residente al entrar. No se permite que entren visitas después de las diez de la noche.', '进门时必须出示住宿卡。晚上十点以后不允许访客进入。'],
          ['Está prohibido fumar en todo el edificio, incluidas las habitaciones.', '整栋楼内禁止吸烟，房间内也不例外。'],
        ],
        [
          ['Les pedimos que mantengan silencio entre las once de la noche y las ocho de la mañana.', '晚上十一点到早上八点之间，请保持安静。'],
          ['Es necesario que cada residente deje la cocina limpia después de usarla. Les recomendamos que no guarden comida en las habitaciones.', '每位住客用完厨房后都要清理干净。建议大家不要在房间里存放食物。'],
        ],
        [
          ['Si tienen cualquier problema o avería, es importante que avisen en recepción lo antes posible. ¡Les deseamos una feliz estancia!', '如有任何问题或设施故障，请尽快通知前台。祝大家入住愉快！'],
        ],
      ],
      gloss: { residencia: '学生公寓', agradable: '愉快的', mostrar: '出示', visitas: '访客', incluidas: '包括', mantengan: '保持（虚拟式）', guarden: '存放（虚拟式）', avisen: '通知（虚拟式）', estancia: '居住期间' },
      questions: [
        { type: 'mc', q: '晚上十点以后，下面哪件事不允许？', options: ['做饭', '访客进入', '洗澡'], answer: 1 },
        { type: 'tf', q: '可以在自己的房间里吸烟。', answer: false, explain: 'Está prohibido fumar en todo el edificio, incluidas las habitaciones.' },
        { type: 'mc', q: '设施出故障时应该怎么做？', options: ['自己修', '给房东打电话', '尽快通知前台'], answer: 2 },
      ],
    },
    {
      id: 'b1-r04',
      level: 'B1',
      title: 'Consultorio: mi compañera de piso no limpia nunca',
      titleZh: '读者来信：我的室友从来不打扫',
      topic: '建议',
      paras: [
        [
          ['«Hola, me llamo Mei y comparto piso con una chica muy simpática, pero nunca limpia. Deja los platos sucios en el fregadero durante días. Ya no sé qué hacer».', '“你好，我叫美，和一个很好相处的女生合租，但她从来不打扫。脏碗在水槽里一放就是好几天。我真不知道该怎么办了。”'],
        ],
        [
          ['Querida Mei: es muy normal tener este problema. Lo primero, te recomiendo que hables con ella con tranquilidad, sin gritar y sin enviarle mensajes enfadados.', '亲爱的美：这种问题很常见。首先，我建议你心平气和地和她谈谈，别吼，也别给她发生气的消息。'],
          ['Es posible que ella no se dé cuenta del problema. Explícale cómo te sientes.', '她可能根本没意识到问题。告诉她你的感受。'],
        ],
        [
          ['Después, os aconsejo que hagáis una lista de tareas con turnos y que la pongáis en un lugar visible, por ejemplo en la nevera.', '然后，我建议你们列一张有轮值的家务清单，贴在显眼的地方，比如冰箱上。'],
          ['Si nada cambia, es mejor que habléis con el casero o que busques otro piso. ¡Mucha suerte!', '如果什么都没改变，最好和房东谈谈，或者你另找房子。祝你好运！'],
        ],
      ],
      gloss: { comparto: '我合住', fregadero: '水槽', tranquilidad: '平静', enfadados: '生气的', 'dé': 'darse cuenta 的虚拟式：意识到', 'Explícale': '向她解释', tareas: '家务', visible: '显眼的' },
      questions: [
        { type: 'mc', q: '美的问题是什么？', options: ['室友太吵', '室友从不打扫', '房东不修东西'], answer: 1 },
        { type: 'tf', q: '专栏作者建议美给室友发消息表达不满。', answer: false, explain: 'sin enviarle mensajes enfadados' },
        { type: 'mc', q: '作者的第二个建议是什么？', options: ['马上搬走', '做一张轮值家务表', '报警'], answer: 1 },
      ],
    },
  ],
  writing: [{ id: 'w1', prompt: '给室友或邻居写一封礼貌的短信 / 邮件：说明一个问题（噪音、卫生、宠物、垃圾……），提出两三个请求或建议。', words: [70, 130], hints: ['Hola, …: te escribo porque…', 'Te pido que… / Os agradecería…', 'Es importante que…', 'Te propongo que…'] }],
}
