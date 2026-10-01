import type { Unit } from '../types'

export const u10: Unit = {
  id: 'a2-u10',
  level: 'A2',
  order: 10,
  title: '经验与规矩',
  titleEs: 'Experiencias y normas',
  icon: '🚫',
  goals: ['区分现在完成时和简单过去时', '用否定命令式说“不要……”', '区分 por 和 para 的基本用法', '复习 A2 的主要过去时'],
  grammar: [
    {
      id: 'a2-perf-indef',
      title: '现在完成时 vs 简单过去时',
      titleEs: 'Pretérito perfecto e indefinido',
      level: 'A2',
      summary: '西班牙：时间段还没结束（hoy、esta semana）或说经历 → 现在完成时；时间已经结束（ayer、en 2020）→ 简单过去时。',
      body: `两个时态都表示“已经完成的动作”，区别在于 **说话人把时间放在哪里**：

| 现在完成时（he comido） | 简单过去时（comí） |
|---|---|
| 时间段 **包含现在**：*hoy, esta mañana, este año* | 时间段 **已经结束**：*ayer, el lunes, en 2019* |
| 经历（不说时间）：*¿Has estado en Perú?* | 具体时间的事件：*Estuve en Perú en 2018.* |
| 刚刚发生、和现在有关：*Se ha roto el vaso.* | 讲述过去的故事 |
| *ya, todavía no, nunca, alguna vez* | *hace dos años, la semana pasada* |

### 同一件事，两种说法
- *¿Has visto a Juan **esta semana**?* — *Sí, lo he visto hoy.* / *Sí, lo **vi ayer**.*
- *He estado en México dos veces. La primera vez **fui** en 2015.*（先说经历，再讲具体时间）

### 地区差异
这个区别主要是 **西班牙中北部** 的用法。在加那利群岛和大部分拉美国家，即使说今天的事也常用简单过去时：*Hoy comí con Ana.*`,
      examples: [
        ['Esta mañana he desayunado muy tarde.', '今天早上我早饭吃得很晚。'],
        ['Ayer desayuné en un bar.', '昨天我在小酒吧吃的早饭。'],
        ['¿Has estado alguna vez en Chile? — Sí, estuve allí en 2019.', '你去过智利吗？——去过，2019 年去的。'],
        ['Este año he viajado mucho.', '今年我旅行了很多次。'],
        ['El año pasado viajé a Japón.', '去年我去了日本。'],
      ],
      origin: `现在完成时（*he comido*）是通俗拉丁语后来“造”出来的，原意是“我拥有吃完的状态”——它天生就强调 **和现在的联系**。简单过去时（*comí*）来自拉丁语原本的完成时，强调 **已经结束**。两者在西班牙分工明确，而在拉美，简单过去时“占领”了大部分地盘——同一种语言在不同地方朝不同方向发展的典型例子。`,
      latam: '拉美大多数地区说今天发生的事也用简单过去时：*¿Qué hiciste hoy?* 现在完成时更多用于“到现在为止的经历”。',
      pitfalls: ['❌ *Ayer he ido al cine.* ✅ *Ayer fui al cine.*（西班牙标准）', '❌ *En 2015 he estado en Perú.* ✅ *En 2015 estuve en Perú.*'],
    },
    {
      id: 'a2-imp-negativo',
      title: '否定命令式：no + 虚拟式',
      titleEs: 'El imperativo negativo',
      level: 'A2',
      summary: 'no hables / no comas / no escribas：-ar → -es，-er / -ir → -as；代词放在动词前面：No te preocupes.',
      body: `否定命令式所有人称都用 **no + 虚拟式现在时**：

| | hablar | comer | escribir |
|---|---|---|---|
| tú | no habl**es** | no com**as** | no escrib**as** |
| usted | no habl**e** | no com**a** | no escrib**a** |
| vosotros | no habl**éis** | no com**áis** | no escrib**áis** |
| ustedes | no habl**en** | no com**an** | no escrib**an** |

### 怎么变？“元音互换”
从 **yo 的现在时** 出发，去掉 -o，-ar 动词换成 **e**，-er / -ir 动词换成 **a**：
*hablo → no hables*、*como → no comas*、*tengo → no tengas*、*hago → no hagas*、*pido → no pidas*、*pienso → no pienses*

不规则：*ir → no vayas*、*ser → no seas*、*estar → no estés*、*dar → no des*、*saber → no sepas*

### 代词放在动词 **前面**（和肯定命令式相反）
| 肯定 | 否定 |
|---|---|
| *Siéntate.* | ***No te** sientes.* |
| *Dímelo.* | ***No me lo** digas.* |
| *Cómpralo.* | ***No lo** compres.* |

### 常用说法
***No te preocupes.***（别担心。）· ***No te olvides.***（别忘了。）· ***No pasa nada.***（没关系。）`,
      examples: [
        ['No te preocupes, todo saldrá bien.', '别担心，一切都会好的。'],
        ['No hables tan alto, el bebé está durmiendo.', '别那么大声说话，宝宝在睡觉。'],
        ['No toque nada, por favor.', '请不要碰任何东西（您）。'],
        ['No me lo digas, ¡ya lo sé!', '别告诉我，我已经知道了！'],
        ['No lleguéis tarde.', '你们别迟到。'],
      ],
      tables: [{ verbs: ['hablar', 'comer', 'tener', 'ir'], tense: 'impNeg' }],
      origin: `拉丁语就规定 **否定命令不能用命令式**，要用 *ne* + 虚拟式（*ne feceris* 别做）。西语继承了这个规则：否定的指令全都借用虚拟式。所以你现在学的 *no hables* 其实已经是 B1 要学的 **虚拟式现在时** 了——提前认识一下。`,
      pitfalls: ['❌ *No habla.*（陈述句“他不说”）✅ *No hables.*', '❌ *No haz eso.* ✅ *No hagas eso.*', '❌ *No preocúpate.* ✅ *No te preocupes.*'],
    },
    {
      id: 'a2-por-para',
      title: 'por 和 para（基础）',
      titleEs: 'Por y para',
      level: 'A2',
      summary: 'para：目的、去向、对象、期限；por：原因、经过的地方、大概时间、方式、交换（价格）。',
      body: `| **para** | 例句 |
|---|---|
| 目的（为了） | *Estudio español **para** trabajar en México.* |
| 去向 | *Salgo **para** Madrid mañana.* |
| 对象（给谁） | *Este regalo es **para** ti.* |
| 期限 | *Necesito el informe **para** el lunes.* |
| 观点 | ***Para** mí, es la mejor película.* |

| **por** | 例句 |
|---|---|
| 原因 | *Gracias **por** tu ayuda.* / *Llegué tarde **por** el tráfico.* |
| 经过的地方 | *Paseamos **por** el parque.* |
| 一天中的时段 | ***por** la mañana / tarde / noche* |
| 方式、途径 | *Hablamos **por** teléfono.* |
| 交换、价格 | *Lo compré **por** veinte euros.* |
| 频率 | *dos veces **por** semana* |

### 一个快速判断
- “**为了**……，**去**……，**给**……” → **para**（看向目标、终点）
- “**因为**……，**经过**……，**通过**……” → **por**（看向原因、过程）

*Trabajo **para** ganar dinero.*（为了挣钱）vs *Trabajo **por** necesidad.*（因为需要）`,
      examples: [
        ['Este café es para ti.', '这杯咖啡是给你的。'],
        ['Estudio español para viajar por Latinoamérica.', '我学西语是为了去拉美旅行。'],
        ['Gracias por todo.', '谢谢你做的一切。'],
        ['Hablo con mis padres por videollamada.', '我和父母视频通话。'],
        ['Compré este bolso por treinta euros.', '我花三十欧买了这个包。'],
      ],
      origin: `- **por** 来自拉丁语 *pro*（为了，代替）和 *per*（经过）的混合，所以它既有“原因”也有“经过”的意思。
- **para** 是古西语 *pora* 的变体，来自 *pro + ad*（向着……）：“朝向一个目标”。
两个词都和 *pro* 有关，难怪容易混淆！`,
      pitfalls: ['❌ *Gracias para tu ayuda.* ✅ *Gracias por tu ayuda.*', '❌ *Estudio por aprender.*（为了学习）✅ *Estudio para aprender.*', '❌ *para la mañana* ✅ *por la mañana*（上午）'],
    },
  ],
  words: [
    { id: 'preocuparse', es: 'preocuparse', zh: '担心', pos: 'v', level: 'A2', tags: ['verb', 'feel'], ex: ['No te preocupes.', '别担心。'] },
    { id: 'no-pasa-nada', es: 'no pasa nada', zh: '没关系；没事', pos: 'phr', level: 'A2', tags: ['greet'], ex: ['—Perdona. —No pasa nada.', '——对不起。——没关系。'] },
    { id: 'molestar', es: 'molestar', zh: '打扰；使烦', pos: 'v', level: 'A2', tags: ['verb'], ex: ['No molestes a tu hermano.', '别烦你弟弟。'] },
    { id: 'prohibido', es: 'prohibido', f: 'prohibida', zh: '禁止的', pos: 'adj', level: 'A2', tags: ['city'], ex: ['Prohibido fumar.', '禁止吸烟。'] },
    { id: 'permitido', es: 'permitido', f: 'permitida', zh: '允许的', pos: 'adj', level: 'A2', tags: ['city'], ex: ['No está permitido usar el móvil.', '不允许使用手机。'] },
    { id: 'norma', es: 'norma', zh: '规定；规范', pos: 'n', g: 'f', level: 'A2', tags: ['func'], ex: ['Hay que respetar las normas.', '要遵守规定。'] },
    { id: 'respetar', es: 'respetar', zh: '尊重；遵守', pos: 'v', level: 'A2', tags: ['verb'], ex: ['Respeta a los mayores.', '尊敬长辈。'] },
    { id: 'hablar-alto', es: 'hablar alto', zh: '大声说话', pos: 'phr', level: 'A2', tags: ['func'], ex: ['No hables tan alto.', '别那么大声说话。'] },
    { id: 'videollamada', es: 'videollamada', zh: '视频通话', pos: 'n', g: 'f', level: 'A2', tags: ['home'], ex: ['Hablo con mi familia por videollamada.', '我和家人视频通话。'] },
    { id: 'latinoamerica', es: 'Latinoamérica', zh: '拉丁美洲', pos: 'n', g: 'f', level: 'A2', tags: ['country'], ex: ['Quiero viajar por Latinoamérica.', '我想去拉丁美洲旅行。'] },
    { id: 'por-ejemplo', es: 'por ejemplo', zh: '例如', pos: 'phr', level: 'A2', tags: ['func'], ex: ['Me gustan las frutas tropicales, por ejemplo, el mango.', '我喜欢热带水果，比如芒果。'] },
    { id: 'por-fin', es: 'por fin', zh: '终于', pos: 'phr', level: 'A2', tags: ['func'], ex: ['¡Por fin es viernes!', '终于到星期五了！'] },
    { id: 'por-supuesto', es: 'por supuesto', zh: '当然', pos: 'phr', level: 'A2', tags: ['greet'], ex: ['—¿Me ayudas? —¡Por supuesto!', '——你能帮我吗？——当然！'] },
    { id: 'para-mi', es: 'para mí', zh: '对我来说；我认为', pos: 'phr', level: 'A2', tags: ['func'], ex: ['Para mí, es la mejor ciudad del mundo.', '对我来说，这是世界上最好的城市。'] },
    { id: 'gracias-por', es: 'gracias por', zh: '谢谢（某事）', pos: 'phr', level: 'A2', tags: ['greet'], ex: ['Gracias por venir.', '谢谢你来。'] },
    { id: 'necesidad', es: 'necesidad', zh: '需要；必要', pos: 'n', g: 'f', level: 'A2', tags: ['func'], ex: ['Trabajo por necesidad.', '我是因为需要才工作的。'] },
    { id: 'silencio', es: 'silencio', zh: '安静；沉默', pos: 'n', g: 'm', level: 'A2', tags: ['func'], ex: ['Silencio, por favor.', '请安静。'] },
    { id: 'tirar', es: 'tirar', zh: '扔；拉', pos: 'v', level: 'A2', tags: ['verb'], ex: ['No tires papeles al suelo.', '别往地上扔纸。'], note: '门上写的 Tirar = 拉；Empujar = 推。' },
    { id: 'empujar', es: 'empujar', zh: '推', pos: 'v', level: 'A2', tags: ['verb'], ex: ['No empujes, por favor.', '请不要推。'] },
    { id: 'suelo', es: 'suelo', zh: '地面；地板', pos: 'n', g: 'm', level: 'A2', tags: ['home'], ex: ['El móvil se cayó al suelo.', '手机掉到地上了。'] },
    { id: 'basura', es: 'basura', zh: '垃圾', pos: 'n', g: 'f', level: 'A2', tags: ['home'], ex: ['¿Sacas la basura?', '你去倒垃圾好吗？'], emoji: '🗑️' },
    { id: 'reciclar', es: 'reciclar', zh: '回收', pos: 'v', level: 'A2', tags: ['verb', 'home'], ex: ['Hay que reciclar el plástico.', '要回收塑料。'], emoji: '♻️' },
    { id: 'plastico', es: 'plástico', zh: '塑料', pos: 'n', g: 'm', level: 'A2', tags: ['home'], ex: ['No uses bolsas de plástico.', '别用塑料袋。'] },
    { id: 'bolsa', es: 'bolsa', zh: '袋子', pos: 'n', g: 'f', level: 'A2', tags: ['shop'], ex: ['¿Necesita bolsa?', '您需要袋子吗？'] },
    { id: 'llegar-tarde', es: 'llegar tarde', zh: '迟到', pos: 'phr', level: 'A2', tags: ['time'], ex: ['No llegues tarde.', '别迟到。'] },
    { id: 'puntual', es: 'puntual', pl: 'puntuales', zh: '准时的', pos: 'adj', level: 'A2', tags: ['time', 'adj'], ex: ['Sé puntual, por favor.', '请准时。'] },
    { id: 'educado', es: 'educado', f: 'educada', zh: '有礼貌的', pos: 'adj', level: 'A2', tags: ['feel'], ex: ['Es un niño muy educado.', '他是个很有礼貌的孩子。'], en: '“假朋友”：educado ≠ educated（受过教育的），而是“有教养、有礼貌”。' },
    { id: 'maleducado', es: 'maleducado', f: 'maleducada', zh: '没礼貌的', pos: 'adj', level: 'A2', tags: ['feel'], ex: ['No seas maleducado.', '别没礼貌。'] },
  ],
  sentences: [
    { id: 's1', es: 'Esta mañana he desayunado muy tarde.', zh: '今天早上我早饭吃得很晚。', g: ['a2-perf-indef'], distract: ['desayuné'] },
    { id: 's2', es: 'Ayer desayuné en un bar.', zh: '昨天我在小酒吧吃的早饭。', g: ['a2-perf-indef'], distract: ['he'] },
    { id: 's3', es: '¿Has estado alguna vez en Chile?', zh: '你去过智利吗？', g: ['a2-perf-indef'] },
    { id: 's4', es: 'Estuve en Chile en 2019.', zh: '我 2019 年去过智利。', g: ['a2-perf-indef'] },
    { id: 's5', es: 'Este año he viajado mucho.', zh: '今年我旅行了很多次。', g: ['a2-perf-indef'] },
    { id: 's6', es: 'El año pasado viajé a Japón.', zh: '去年我去了日本。', g: ['a2-perf-indef'] },
    { id: 's7', es: 'No te preocupes.', zh: '别担心。', g: ['a2-imp-negativo'], distract: ['preocupa', 'preocúpate'] },
    { id: 's8', es: 'No hables tan alto.', zh: '别那么大声说话。', g: ['a2-imp-negativo'], distract: ['habla'] },
    { id: 's9', es: 'No toque nada, por favor.', zh: '请不要碰任何东西（您）。', g: ['a2-imp-negativo'] },
    { id: 's10', es: 'No me lo digas.', zh: '别告诉我。', g: ['a2-imp-negativo'], distract: ['dímelo'] },
    { id: 's11', es: 'No lleguéis tarde.', zh: '你们别迟到。', g: ['a2-imp-negativo'] },
    { id: 's12', es: 'No tires papeles al suelo.', zh: '别往地上扔纸。', g: ['a2-imp-negativo'] },
    { id: 's13', es: 'No te olvides de llamarme.', zh: '别忘了给我打电话。', g: ['a2-imp-negativo'] },
    { id: 's14', es: 'Este regalo es para ti.', zh: '这个礼物是给你的。', g: ['a2-por-para'], distract: ['por'] },
    { id: 's15', es: 'Gracias por tu ayuda.', zh: '谢谢你的帮助。', g: ['a2-por-para'], distract: ['para'] },
    { id: 's16', es: 'Estudio español para trabajar en México.', zh: '我学西语是为了去墨西哥工作。', g: ['a2-por-para'] },
    { id: 's17', es: 'Paseamos por el parque.', zh: '我们在公园里散步。', g: ['a2-por-para'] },
    { id: 's18', es: 'Necesito el informe para el lunes.', zh: '我周一之前需要这份报告。', g: ['a2-por-para'] },
    { id: 's19', es: 'Lo compré por veinte euros.', zh: '我花二十欧买的。', g: ['a2-por-para'] },
    { id: 's20', es: 'Para mí, es la mejor ciudad del mundo.', zh: '对我来说，这是世界上最好的城市。', g: ['a2-por-para'] },
  ],
  cloze: [
    { id: 'c1', text: 'Hoy ___ (yo) mucho en el trabajo.', answers: ['he trabajado'], options: ['he trabajado', 'trabajé', 'trabajaba'], zh: '今天我工作了很多。', g: ['a2-perf-indef'] },
    { id: 'c2', text: 'Ayer ___ (yo) con mi madre por teléfono.', answers: ['hablé'], options: ['hablé', 'he hablado', 'hablaba'], zh: '昨天我和妈妈打了电话。', g: ['a2-perf-indef'] },
    { id: 'c3', text: '¿___ alguna vez paella valenciana?', answers: ['Has comido'], options: ['Has comido', 'Comiste ayer', 'Comías'], zh: '你吃过瓦伦西亚海鲜饭吗？', g: ['a2-perf-indef'] },
    { id: 'c4', text: 'En 2020 ___ (nosotros) a Perú.', answers: ['fuimos'], options: ['fuimos', 'hemos ido', 'íbamos'], zh: '2020 年我们去了秘鲁。', g: ['a2-perf-indef'] },
    { id: 'c5', text: 'Esta semana no ___ al gimnasio.', answers: ['he ido'], options: ['he ido', 'fui', 'iba'], zh: '这周我没去健身房。', g: ['a2-perf-indef'] },
    { id: 'c6', text: 'No ___ (hablar, tú) tan rápido, por favor.', answers: ['hables'], options: ['hables', 'habla', 'hablas'], zh: '请别说那么快。', g: ['a2-imp-negativo'] },
    { id: 'c7', text: 'No ___ (comer, tú) tanto chocolate.', answers: ['comas'], options: ['comas', 'comes', 'come'], zh: '别吃那么多巧克力。', g: ['a2-imp-negativo'] },
    { id: 'c8', text: 'No ___ (hacer, tú) ruido, el bebé duerme.', answers: ['hagas'], options: ['hagas', 'haz', 'haces'], zh: '别出声，宝宝在睡觉。', g: ['a2-imp-negativo'] },
    { id: 'c9', text: 'No ___ (ir, tú) solo de noche.', answers: ['vayas'], options: ['vayas', 've', 'vas'], zh: '晚上别一个人去。', g: ['a2-imp-negativo'] },
    { id: 'c10', text: 'No ___ preocupes, no pasa nada.', answers: ['te'], options: ['te', 'se', 'tú'], zh: '别担心，没事的。', g: ['a2-imp-negativo'] },
    { id: 'c11', text: 'Señor, no ___ (fumar) aquí, por favor.', answers: ['fume'], options: ['fume', 'fumes', 'fuma'], zh: '先生，请不要在这里抽烟。', g: ['a2-imp-negativo'] },
    { id: 'c12', text: 'Este pastel es ___ tu madre.', answers: ['para'], options: ['para', 'por'], zh: '这个蛋糕是给你妈妈的。', g: ['a2-por-para'] },
    { id: 'c13', text: 'Gracias ___ el regalo.', answers: ['por'], options: ['por', 'para'], zh: '谢谢你的礼物。', g: ['a2-por-para'] },
    { id: 'c14', text: 'Ahorro dinero ___ comprar un coche.', answers: ['para'], options: ['para', 'por'], zh: '我存钱是为了买车。', g: ['a2-por-para'] },
    { id: 'c15', text: 'Me gusta pasear ___ la playa.', answers: ['por'], options: ['por', 'para'], zh: '我喜欢在海边散步。', g: ['a2-por-para'] },
    { id: 'c16', text: 'Estudio ___ la mañana y trabajo por la tarde.', answers: ['por'], options: ['por', 'para'], zh: '我上午学习，下午工作。', g: ['a2-por-para'] },
  ],
  conj: [{ verbs: ['hablar', 'comer', 'escribir', 'tener', 'hacer', 'ir', 'ser', 'decir', 'poner', 'salir'], tenses: ['impNeg'], persons: [1, 2, 4, 5], g: 'a2-imp-negativo' }],
  dialogues: [
    {
      id: 'a2-u10-d1',
      title: '合租规矩 · Las normas del piso',
      lines: [
        { who: 'Irene', es: 'Bienvenido al piso, Hao. Te explico las normas, ¿vale?', zh: '欢迎搬进来，浩。我跟你讲讲合租的规矩，好吗？' },
        { who: 'Hao', es: 'Claro, dime.', zh: '当然，你说。' },
        { who: 'Irene', es: 'Primero, no hagas ruido después de las once. Lucas trabaja muy temprano.', zh: '第一，晚上十一点后别弄出声音。卢卡斯上班很早。' },
        { who: 'Hao', es: 'Entendido. ¿Y la cocina?', zh: '明白。那厨房呢？' },
        { who: 'Irene', es: 'Limpia todo después de cocinar y no dejes platos sucios en el fregadero.', zh: '做完饭把东西都收拾干净，别把脏盘子留在水槽里。' },
        { who: 'Hao', es: '¿Hay que reciclar?', zh: '需要垃圾分类吗？' },
        { who: 'Irene', es: 'Sí, el plástico va en la bolsa amarilla. Y no te olvides: los lunes sacamos la basura.', zh: '要，塑料放黄色袋子。还有别忘了：每周一倒垃圾。' },
        { who: 'Hao', es: 'Perfecto. Gracias por explicármelo todo.', zh: '好的。谢谢你跟我讲这么清楚。' },
      ],
    },
  ],
  readings: [
    {
      id: 'a2-r19',
      level: 'A2',
      title: 'Consejos para tu primer viaje a España',
      titleZh: '第一次去西班牙的建议',
      topic: '文化',
      paras: [
        [
          ['¿Vas a viajar a España por primera vez? Aquí tienes algunos consejos para no tener problemas.', '第一次去西班牙？这里有些建议，帮你避免麻烦。'],
        ],
        [
          ['No cenes a las seis de la tarde: los restaurantes estarán vacíos. Los españoles cenan a las nueve o a las diez.', '别在下午六点吃晚饭：餐馆会是空的。西班牙人九点或十点才吃晚饭。'],
          ['No te sorprendas si la gente te da dos besos al saludarte. Es normal.', '如果有人打招呼时亲你两下脸颊，别惊讶。这很正常。'],
          ['No dejes tu cartera en la mesa de una terraza: en las zonas turísticas hay ladrones.', '别把钱包放在露天座的桌上：旅游区有小偷。'],
        ],
        [
          ['Prueba la comida local, habla con la gente y no tengas miedo de equivocarte en español.', '尝尝当地美食，多和人聊天，别怕说错西班牙语。'],
          ['Los españoles valoran mucho el esfuerzo. ¡Disfruta del viaje!', '西班牙人很看重你的努力。祝旅途愉快！'],
        ],
      ],
      gloss: { 'primera': '第一', vacíos: '空的', sorprendas: '惊讶（否定命令式）', saludarte: '跟你打招呼', zonas: '区域', turísticas: '旅游的', local: '当地的', equivocarte: '犯错', valoran: '重视', esfuerzo: '努力', Disfruta: '享受' },
      questions: [
        { type: 'mc', q: '西班牙人一般几点吃晚饭？', options: ['18:00', '19:00', '21:00–22:00'], answer: 2 },
        { type: 'tf', q: '在西班牙，见面亲两下脸颊很奇怪。', answer: false, explain: 'Es normal.' },
        { type: 'mc', q: '为什么不要把钱包放在桌上？', options: ['会被风吹走', '旅游区有小偷', '服务员会拿走'], answer: 1 },
      ],
    },
    {
      id: 'a2-r20',
      level: 'A2',
      title: 'Mi año en Valencia',
      titleZh: '我在瓦伦西亚的一年',
      topic: '留学',
      paras: [
        [
          ['Llegué a Valencia en septiembre del año pasado para estudiar un año en la universidad.', '我去年九月来到瓦伦西亚，在大学学习一年。'],
          ['Los primeros meses fueron difíciles: no entendía a la gente y echaba de menos a mi familia.', '最初几个月很难：我听不懂别人说话，还很想家。'],
        ],
        [
          ['Pero poco a poco todo cambió. Conocí a muchos amigos, viajé por toda España y probé comidas increíbles.', '但慢慢地一切都变了。我认识了很多朋友，走遍了西班牙，尝到了很多美食。'],
          ['Este mes he terminado los exámenes y he aprobado todas las asignaturas.', '这个月我考完了试，所有科目都通过了。'],
        ],
        [
          ['La semana que viene volveré a China. Estoy contento, pero también un poco triste.', '下周我就要回中国了。我很开心，但也有点难过。'],
          ['Ha sido el mejor año de mi vida. ¡Volveré pronto, Valencia!', '这是我人生中最好的一年。瓦伦西亚，我会很快回来的！'],
        ],
      ],
      gloss: { primeros: '最初的', entendía: '听懂（过去未完成时）', echaba: '（echar de menos）想念', poco: '少（poco a poco 慢慢地）', cambió: '变了', asignaturas: '科目', volveré: '我将回去', 'Ha': '（助动词）', sido: '是（过去分词）' },
      questions: [
        { type: 'mc', q: '作者什么时候到的瓦伦西亚？', options: ['去年九月', '今年九月', '去年一月'], answer: 0 },
        { type: 'tf', q: '刚到的几个月作者很快乐，一点也不想家。', answer: false, explain: 'Los primeros meses fueron difíciles… echaba de menos a mi familia.' },
        { type: 'tf', q: '作者所有考试都通过了。', answer: true },
        { type: 'mc', q: '作者什么时候回中国？', options: ['这周', '下周', '明年'], answer: 1 },
      ],
    },
  ],
  writing: [{ id: 'w1', prompt: '回顾你学西班牙语的这一年：今年做了什么（现在完成时）、印象最深的一件事是什么时候发生的（简单过去时），再给一位刚开始学西语的朋友三条“不要……”的建议。', words: [80, 150], hints: ['Este año he…', 'El mes pasado / En marzo…', 'No tengas miedo de… / No olvides…'] }],
}
