import type { Unit } from '../types'

export const u01: Unit = {
  id: 'a2-u01',
  level: 'A2',
  order: 1,
  title: '最近做了什么',
  titleEs: '¿Qué has hecho hoy?',
  icon: '✅',
  goals: ['说今天、这周、最近做过的事', '谈论人生经历：你去过……吗？', '用 ya、todavía no 说“已经 / 还没”', '掌握常见的不规则过去分词'],
  grammar: [
    {
      id: 'a2-perfecto',
      title: '现在完成时：he hablado',
      titleEs: 'El pretérito perfecto',
      level: 'A2',
      summary: 'haber 的现在时 + 过去分词（-ado / -ido）：he comido, has vivido…',
      body: `### 构成：haber（现在时）+ 过去分词
| 人称 | haber | 过去分词 |
|---|---|---|
| yo | **he** | habl**ado** |
| tú | **has** | com**ido** |
| él / ella / usted | **ha** | viv**ido** |
| nosotros | **hemos** | |
| vosotros | **habéis** | |
| ellos / ustedes | **han** | |

- -ar → **-ado**：*hablar → hablado*
- -er / -ir → **-ido**：*comer → comido*、*vivir → vivido*
- 过去分词在完成时里 **不变性数**：*Ana ha comido.* / *Ellas han comido.*
- haber 和分词之间 **不能插入** 任何词：❌ *He ya comido.* ✅ *Ya he comido.*
- 自反代词和否定词放在 haber 前：*No me he duchado.*（我还没洗澡。）

### 在西班牙，什么时候用现在完成时？
说 **还没结束的时间段** 里发生的事：
- *hoy, esta mañana, esta semana, este mes, este año*
- *últimamente*（最近）
- 没说时间、强调和现在有关的经历：*He estado en México.*（我去过墨西哥。）`,
      examples: [
        ['Hoy he comido en casa.', '今天我在家吃的饭。'],
        ['¿Qué has hecho esta mañana?', '你今天上午做了什么？'],
        ['Esta semana hemos trabajado mucho.', '这周我们工作很多。'],
        ['Mis padres han viajado mucho este año.', '我父母今年旅行了很多次。'],
        ['No me he levantado temprano.', '我没有早起。'],
      ],
      tables: [{ verbs: ['hablar', 'comer'], tense: 'pperf' }],
      origin: `**现在完成时是怎么“造”出来的？** 古典拉丁语没有这种时态。通俗拉丁语里有一种说法：*habeo litteras scriptas*，字面是“我拥有写好了的信”。久而久之，“拥有（habeo）+ 做完的东西（分词）”变成了“我已经写了信”，*habeo* 也就从“拥有”变成了纯粹的助动词 **haber**。

早期西语里分词还要跟着宾语变性数（*he escritas las cartas*），后来才固定成不变的 *-ado / -ido*。英语的 *I have written*、法语的 *j'ai écrit* 走的是同一条路。`,
      latam: '在大部分拉美国家，说今天发生的事也常用简单过去时：*Hoy comí en casa.* 现在完成时更多用来说“到现在为止的经历”。',
      pitfalls: ['用 tener 当助动词：❌ *Tengo comido.* ✅ *He comido.*', '分词跟主语变：❌ *Ella ha comida.* ✅ *Ella ha comido.*', '在 haber 和分词之间放词：❌ *He no comido.* ✅ *No he comido.*'],
    },
    {
      id: 'a2-participios',
      title: '不规则过去分词',
      titleEs: 'Participios irregulares',
      level: 'A2',
      summary: 'hecho, dicho, visto, escrito, puesto, vuelto, abierto, roto, muerto, descubierto…',
      body: `最常用的不规则过去分词（必背）：

| 不定式 | 过去分词 | 中文 |
|---|---|---|
| hacer | **hecho** | 做 |
| decir | **dicho** | 说 |
| ver | **visto** | 看 |
| escribir | **escrito** | 写 |
| poner | **puesto** | 放 |
| volver | **vuelto** | 回来 |
| abrir | **abierto** | 打开 |
| romper | **roto** | 打破 |
| morir | **muerto** | 死 |
| descubrir | **descubierto** | 发现 |
| resolver | **resuelto** | 解决 |

### 派生词也一样
*deshacer → deshecho*、*devolver → devuelto*、*componer → compuesto*、*describir → descrito*、*prever → previsto*

### 带重音的规则分词
词干以元音结尾的 -er / -ir 动词：*leer → leído*、*creer → creído*、*oír → oído*、*caer → caído*`,
      examples: [
        ['¿Has visto mis llaves?', '你看见我的钥匙了吗？'],
        ['Todavía no he hecho los deberes.', '我还没写作业。'],
        ['¿Quién ha abierto la ventana?', '谁把窗户打开了？'],
        ['Se me ha roto el móvil.', '我的手机摔坏了。'],
        ['¿Has leído este libro?', '你读过这本书吗？'],
      ],
      origin: `这些不规则分词其实大多是 **拉丁语原本的分词**：
- *factum → hecho*（ct → ch，f → h）
- *dictum → dicho*
- *scriptum → escrito*
- *positum → puesto*
- *mortuum → muerto*
- *ruptum → roto*

规则的 *-ado / -ido* 是后来通过类推扩散开的；最常用的动词因为太常用，反而保留了古老的形式。英语里常用动词也最不规则（*go → gone*、*see → seen*），道理一样。`,
      pitfalls: ['❌ *hacido* ✅ *hecho*；❌ *escribido* ✅ *escrito*；❌ *volvido* ✅ *vuelto*；❌ *abrido* ✅ *abierto*。'],
    },
    {
      id: 'a2-ya-todavia',
      title: '经历与 ya / todavía no / alguna vez / nunca',
      titleEs: 'Experiencias: ya, todavía no, alguna vez, nunca',
      level: 'A2',
      summary: '¿Ya has…? — Sí, ya he… / No, todavía no he…；¿Has … alguna vez? — Nunca he…',
      body: `| 表达 | 意思 | 例句 |
|---|---|---|
| **ya** | 已经 | *Ya he terminado.*（我已经做完了。） |
| **todavía no / aún no** | 还没 | *Todavía no he comido.*（我还没吃饭。） |
| **alguna vez** | 曾经（问经历） | *¿Has estado alguna vez en Perú?*（你去过秘鲁吗？） |
| **nunca** | 从没 | *Nunca he visto la nieve.*（我从没见过雪。） |
| **muchas veces / dos veces** | 很多次 / 两次 | *He ido a Madrid dos veces.* |

### 问答模式
- *¿**Ya** has comprado los billetes?* — *Sí, **ya** los he comprado.* / *No, **todavía no**.*
- *¿Has comido paella **alguna vez**?* — *Sí, **muchas veces**.* / *No, **nunca**.*

### 位置
*ya* 和 *nunca* 一般放在 haber 前：*Ya he cenado.* / *Nunca he ido a Japón.*
*todavía no* 也放在前面，或者回答时单独使用。`,
      examples: [
        ['¿Ya has hablado con tu jefe?', '你已经和老板谈过了吗？'],
        ['No, todavía no.', '不，还没有。'],
        ['¿Has comido churros alguna vez?', '你吃过吉事果吗？'],
        ['Nunca he estado en Argentina.', '我从没去过阿根廷。'],
        ['He visto esta película tres veces.', '这部电影我看过三遍。'],
      ],
      origin: `- **ya** 来自拉丁语 *iam*（已经；现在）。
- **todavía** 是 *toda vía*（“一路上，始终”）合成的，原意是“一直”，在否定句里变成了“还没”。
- **nunca** 来自 *numquam*（从不），**vez**（次）来自 *vicem*（轮换）。`,
      pitfalls: ['❌ *¿Has estado una vez en España?*（这是“一次”）✅ *¿Has estado alguna vez en España?*（曾经）', '❌ *Ya no he comido*（意思变成“不再”）✅ *Todavía no he comido.*'],
    },
  ],
  words: [
    { id: 'haber', es: 'haber', zh: '（助动词）有；存在', pos: 'v', level: 'A2', tags: ['verb'], ex: ['He terminado.', '我做完了。'], ety: '拉丁语 habere「拥有」，后来专门用作助动词和表示“存在”（hay）。', note: '现在时：he, has, ha, hemos, habéis, han' },
    { id: 'alguna-vez', es: 'alguna vez', zh: '曾经；某一次', pos: 'phr', level: 'A2', tags: ['time'], ex: ['¿Has estado alguna vez en Perú?', '你去过秘鲁吗？'] },
    { id: 'vez', es: 'vez', zh: '次；回', pos: 'n', g: 'f', pl: 'veces', level: 'A2', tags: ['time'], ex: ['Lo he hecho tres veces.', '我做过三次了。'], ety: '拉丁语 vicem「轮换」。' },
    { id: 'ultimamente', es: 'últimamente', zh: '最近', pos: 'adv', level: 'A2', tags: ['time'], ex: ['Últimamente duermo poco.', '我最近睡得很少。'], ety: 'último「最后的」+ -mente。' },
    { id: 'esta-manana', es: 'esta mañana', zh: '今天上午', pos: 'phr', level: 'A2', tags: ['time'], ex: ['Esta mañana he ido al médico.', '今天上午我去看医生了。'] },
    { id: 'romper', es: 'romper', zh: '打破；弄坏', pos: 'v', level: 'A2', tags: ['verb'], ex: ['He roto un vaso.', '我打碎了一个杯子。'], ety: '拉丁语 rumpere。英语 rupture 同源。', note: '过去分词 roto。' },
    { id: 'morir', es: 'morir', zh: '死', pos: 'v', level: 'A2', tags: ['verb'], ex: ['Mi abuelo murió en 2010.', '我爷爷 2010 年去世了。'], ety: '通俗拉丁语 morire（古典拉丁语 mori）。', note: 'o→ue；过去分词 muerto。' },
    { id: 'descubrir', es: 'descubrir', zh: '发现', pos: 'v', level: 'A2', tags: ['verb'], ex: ['He descubierto un restaurante genial.', '我发现了一家超棒的餐馆。'], ety: 'des-「去掉」+ cubrir「覆盖」：揭开盖子。英语 discover 同源。', note: '过去分词 descubierto。' },
    { id: 'resolver', es: 'resolver', zh: '解决', pos: 'v', level: 'A2', tags: ['verb'], ex: ['Ya hemos resuelto el problema.', '我们已经解决了问题。'], ety: '拉丁语 resolvere「解开」。', note: 'o→ue；过去分词 resuelto。' },
    { id: 'acabar', es: 'acabar', zh: '结束；完成', pos: 'v', level: 'A2', tags: ['verb'], ex: ['¿Has acabado los deberes?', '你作业写完了吗？'], ety: '来自 cabo「末端」：“到头”。', note: 'acabar de + 原形 = 刚刚做了某事。' },
    { id: 'probar', es: 'probar', zh: '尝；试', pos: 'v', level: 'A2', tags: ['verb', 'food'], ex: ['¿Has probado el gazpacho?', '你尝过西班牙冷汤吗？'], ety: '拉丁语 probare「检验」。', note: 'o→ue：pruebo…' },
    { id: 'estar-en', es: 'estar en', zh: '去过（某地）', pos: 'phr', level: 'A2', tags: ['travel'], ex: ['¿Has estado en Sevilla?', '你去过塞维利亚吗？'], note: '说“去过某地”常用 haber estado en。' },
    { id: 'perder-tren', es: 'perder el tren', zh: '错过火车', pos: 'phr', level: 'A2', tags: ['travel'], ex: ['He perdido el tren de las ocho.', '我错过了八点的火车。'] },
    { id: 'recibir', es: 'recibir', zh: '收到；接待', pos: 'v', level: 'A2', tags: ['verb'], ex: ['¿Has recibido mi mensaje?', '你收到我的消息了吗？'], ety: '拉丁语 recipere。英语 receive 同源。' },
    { id: 'mandar', es: 'mandar', zh: '寄；发；命令', pos: 'v', level: 'A2', tags: ['verb'], ex: ['Te he mandado un correo.', '我给你发了一封邮件。'], ety: '拉丁语 mandare「委托」。英语 mandate 同源。' },
    { id: 'correo', es: 'correo', zh: '邮件；邮局', pos: 'n', g: 'm', level: 'A2', tags: ['home'], ex: ['¿Cuál es tu correo electrónico?', '你的电子邮箱是什么？'], ety: '来自加泰罗尼亚语 correu「信使」。', emoji: '📧' },
    { id: 'reunion', es: 'reunión', zh: '会议；聚会', pos: 'n', g: 'f', pl: 'reuniones', level: 'A2', tags: ['job'], ex: ['Hoy he tenido tres reuniones.', '今天我开了三个会。'], ety: 're- + unión「联合」。' },
    { id: 'proyecto', es: 'proyecto', zh: '项目；计划', pos: 'n', g: 'm', level: 'A2', tags: ['job'], ex: ['Hemos terminado el proyecto.', '我们完成了这个项目。'], ety: '拉丁语 proiectum「向前抛出的东西」。' },
    { id: 'informe', es: 'informe', zh: '报告', pos: 'n', g: 'm', level: 'A2', tags: ['job'], ex: ['Ya he escrito el informe.', '我已经写好报告了。'] },
    { id: 'tarea', es: 'tarea', zh: '任务；（拉美）作业', pos: 'n', g: 'f', level: 'A2', tags: ['job', 'school'], ex: ['Tengo muchas tareas hoy.', '我今天有很多事要做。'], ety: '来自阿拉伯语 ṭarīḥa「分配的工作」。' },
    { id: 'compra', es: 'compra', zh: '购物；买的东西', pos: 'n', g: 'f', level: 'A2', tags: ['shop'], ex: ['¿Has hecho la compra?', '你买菜了吗？'], note: 'hacer la compra = 采购日用品、买菜。' },
    { id: 'lavadora', es: 'lavadora', zh: '洗衣机', pos: 'n', g: 'f', level: 'A2', tags: ['home'], ex: ['He puesto la lavadora.', '我开了洗衣机。'], emoji: '🧺' },
    { id: 'lavavajillas', es: 'lavavajillas', zh: '洗碗机', pos: 'n', g: 'm', pl: 'lavavajillas', level: 'A2', tags: ['home'], ex: ['El lavavajillas está roto.', '洗碗机坏了。'] },
    { id: 'gimnasio', es: 'gimnasio', zh: '健身房', pos: 'n', g: 'm', level: 'A2', tags: ['hobby', 'city'], ex: ['Esta semana no he ido al gimnasio.', '这周我没去健身房。'], ety: '希腊语 gymnásion，来自 gymnós「裸体的」（古希腊人裸体训练）。', emoji: '🏋️' },
    { id: 'entrada', es: 'entrada', zh: '门票；入口', pos: 'n', g: 'f', level: 'A2', tags: ['hobby'], ex: ['Ya hemos comprado las entradas.', '我们已经买好票了。'], latam: '拉美很多地方说 boleto。' },
    { id: 'concierto', es: 'concierto', zh: '音乐会', pos: 'n', g: 'm', level: 'A2', tags: ['hobby'], ex: ['¿Has ido a algún concierto este año?', '你今年去过音乐会吗？'], emoji: '🎶' },
    { id: 'experiencia', es: 'experiencia', zh: '经历；经验', pos: 'n', g: 'f', level: 'A2', tags: ['job'], ex: ['Ha sido una experiencia increíble.', '那是一段难以置信的经历。'] },
    { id: 'aventura', es: 'aventura', zh: '冒险', pos: 'n', g: 'f', level: 'A2', tags: ['travel'], ex: ['¡Qué aventura!', '真是一场冒险！'] },
    { id: 'saltar', es: 'saltar', zh: '跳', pos: 'v', level: 'A2', tags: ['verb', 'hobby'], ex: ['¿Has saltado alguna vez en paracaídas?', '你跳过伞吗？'], ety: '拉丁语 saltare。' },
    { id: 'montar', es: 'montar', zh: '骑；组装', pos: 'v', level: 'A2', tags: ['verb', 'hobby'], ex: ['Nunca he montado a caballo.', '我从没骑过马。'] },
    { id: 'escalar', es: 'escalar', zh: '攀登', pos: 'v', level: 'A2', tags: ['verb', 'hobby'], ex: ['Hemos escalado una montaña de 3000 metros.', '我们登上了一座三千米的山。'] },
    { id: 'comida-picante', es: 'comida picante', zh: '辣的食物', pos: 'phr', level: 'A2', tags: ['food'], ex: ['¿Has probado la comida picante de Sichuan?', '你尝过四川的辣菜吗？'] },
    { id: 'olvidarse', es: 'olvidarse de', zh: '忘记（某事）', pos: 'v', level: 'A2', tags: ['verb'], ex: ['Me he olvidado de tu cumpleaños.', '我忘了你的生日。'] },
    { id: 'perderse', es: 'perderse', zh: '迷路', pos: 'v', level: 'A2', tags: ['verb', 'travel'], ex: ['Me he perdido en el centro.', '我在市中心迷路了。'], note: 'e→ie：me pierdo。' },
    { id: 'todavia-no', es: 'todavía no', zh: '还没', pos: 'phr', level: 'A2', tags: ['time'], ex: ['Todavía no he comido.', '我还没吃饭。'], ety: 'toda vía「一路上，始终」。' },
    { id: 'aun', es: 'aún', zh: '还；仍然', pos: 'adv', level: 'A2', tags: ['time'], ex: ['Aún no ha llegado.', '他还没到。'], note: '带重音的 aún = todavía；不带重音的 aun = 甚至。' },
    { id: 'jamas', es: 'jamás', zh: '永不；从未', pos: 'adv', level: 'A2', tags: ['time'], ex: ['Jamás he visto algo así.', '我从没见过这样的东西。'], ety: '古西语 ja más「再也（不）」，来自拉丁语 iam magis。' },
  ],
  sentences: [
    { id: 's1', es: 'Hoy he comido en casa.', zh: '今天我在家吃的饭。', g: ['a2-perfecto'], distract: ['comí', 'tengo'] },
    { id: 's2', es: '¿Qué has hecho esta mañana?', zh: '你今天上午做了什么？', g: ['a2-perfecto', 'a2-participios'], distract: ['hacido'] },
    { id: 's3', es: 'Esta semana hemos trabajado mucho.', zh: '这周我们工作很多。', g: ['a2-perfecto'] },
    { id: 's4', es: 'Mis padres han viajado a Japón este año.', zh: '我父母今年去了日本旅行。', g: ['a2-perfecto'] },
    { id: 's5', es: 'No me he levantado temprano.', zh: '我没有早起。', g: ['a2-perfecto'] },
    { id: 's6', es: '¿Has terminado el informe?', zh: '你报告写完了吗？', g: ['a2-perfecto'] },
    { id: 's7', es: 'Ana ha llegado tarde a la reunión.', zh: '安娜开会迟到了。', g: ['a2-perfecto'] },
    { id: 's8', es: '¿Has visto mis llaves?', zh: '你看见我的钥匙了吗？', g: ['a2-participios'], distract: ['vido'] },
    { id: 's9', es: 'Todavía no he hecho los deberes.', zh: '我还没写作业。', g: ['a2-participios', 'a2-ya-todavia'] },
    { id: 's10', es: '¿Quién ha abierto la ventana?', zh: '谁把窗户打开了？', g: ['a2-participios'], distract: ['abrido'] },
    { id: 's11', es: 'He escrito un correo a mi profesora.', zh: '我给老师写了一封邮件。', g: ['a2-participios'] },
    { id: 's12', es: 'Mi hijo ha roto un vaso.', zh: '我儿子打碎了一个杯子。', g: ['a2-participios'] },
    { id: 's13', es: '¿Dónde has puesto el móvil?', zh: '你把手机放哪儿了？', g: ['a2-participios'] },
    { id: 's14', es: 'Mi padre ya ha vuelto del trabajo.', zh: '我爸爸已经下班回来了。', g: ['a2-participios', 'a2-ya-todavia'] },
    { id: 's15', es: '¿Ya has comprado los billetes?', zh: '你已经买好票了吗？', g: ['a2-ya-todavia'] },
    { id: 's16', es: 'No, todavía no.', zh: '不，还没有。', g: ['a2-ya-todavia'] },
    { id: 's17', es: '¿Has estado alguna vez en México?', zh: '你去过墨西哥吗？', g: ['a2-ya-todavia'], distract: ['una'] },
    { id: 's18', es: 'Nunca he visto la nieve.', zh: '我从没见过雪。', g: ['a2-ya-todavia'] },
    { id: 's19', es: 'He comido paella muchas veces.', zh: '我吃过很多次海鲜饭。', g: ['a2-ya-todavia'] },
    { id: 's20', es: 'Nunca he montado a caballo.', zh: '我从没骑过马。', g: ['a2-ya-todavia'] },
    { id: 's21', es: 'Me he perdido en el centro.', zh: '我在市中心迷路了。', g: ['a2-perfecto'] },
    { id: 's22', es: 'Ha sido un día muy largo.', zh: '这一天真漫长。', g: ['a2-perfecto'] },
    { id: 's23', es: '¿Habéis probado el gazpacho?', zh: '你们尝过西班牙冷汤吗？', g: ['a2-perfecto', 'a2-ya-todavia'] },
  ],
  cloze: [
    { id: 'c1', text: 'Hoy ___ trabajado mucho.', answers: ['he'], options: ['he', 'ha', 'has'], zh: '今天我工作了很多。', g: ['a2-perfecto'] },
    { id: 'c2', text: '¿Tú ___ comido ya?', answers: ['has'], options: ['has', 'ha', 'he'], zh: '你已经吃了吗？', g: ['a2-perfecto'] },
    { id: 'c3', text: 'Nosotros ___ visitado el museo esta tarde.', answers: ['hemos'], options: ['hemos', 'han', 'habéis'], zh: '今天下午我们参观了博物馆。', g: ['a2-perfecto'] },
    { id: 'c4', text: 'Mis amigos han ___ a la fiesta.', answers: ['venido'], hint: 'venir', zh: '我的朋友们来参加聚会了。', g: ['a2-perfecto'] },
    { id: 'c5', text: 'Esta mañana he ___ un café con Marta.', answers: ['tomado'], hint: 'tomar', zh: '今天上午我和玛尔塔喝了杯咖啡。', g: ['a2-perfecto'] },
    { id: 'c6', text: 'Ella ha ___ un libro muy interesante.', answers: ['leído'], hint: 'leer', zh: '她读了一本很有趣的书。', g: ['a2-participios'], explain: 'leer 的分词带重音：leído。' },
    { id: 'c7', text: '¿Qué has ___ este fin de semana?', answers: ['hecho'], hint: 'hacer', zh: '你这个周末做了什么？', g: ['a2-participios'] },
    { id: 'c8', text: 'Todavía no he ___ la carta.', answers: ['escrito'], hint: 'escribir', zh: '我还没写那封信。', g: ['a2-participios'] },
    { id: 'c9', text: '¿Quién ha ___ la puerta?', answers: ['abierto'], hint: 'abrir', zh: '谁开的门？', g: ['a2-participios'] },
    { id: 'c10', text: 'Ya hemos ___ de las vacaciones.', answers: ['vuelto'], hint: 'volver', zh: '我们已经度假回来了。', g: ['a2-participios'] },
    { id: 'c11', text: '¿Me has ___ la verdad?', answers: ['dicho'], hint: 'decir', zh: '你跟我说实话了吗？', g: ['a2-participios'] },
    { id: 'c12', text: 'No he ___ esa película.', answers: ['visto'], hint: 'ver', zh: '我没看过那部电影。', g: ['a2-participios'] },
    { id: 'c13', text: '¿Has estado ___ en Cuba?', answers: ['alguna vez'], options: ['alguna vez', 'una vez', 'ya no'], zh: '你去过古巴吗？', g: ['a2-ya-todavia'] },
    { id: 'c14', text: '¿Ya has terminado? — No, ___ no.', answers: ['todavía'], options: ['todavía', 'ya', 'nunca'], zh: '你已经做完了吗？——还没有。', g: ['a2-ya-todavia'] },
    { id: 'c15', text: '___ he probado la comida india. ¿Está buena?', answers: ['Nunca'], options: ['Nunca', 'Ya', 'Alguna vez'], zh: '我从没吃过印度菜。好吃吗？', g: ['a2-ya-todavia'] },
    { id: 'c16', text: '___ he hablado con el jefe: todo está bien.', answers: ['Ya'], options: ['Ya', 'Todavía no', 'Nunca'], zh: '我已经和老板谈过了：一切都好。', g: ['a2-ya-todavia'] },
    { id: 'c17', text: 'Mi hermana ___ roto su móvil otra vez.', answers: ['ha'], options: ['ha', 'he', 'es'], zh: '我妹妹又把手机摔坏了。', g: ['a2-perfecto'] },
    { id: 'c18', text: 'Esta semana no ___ (yo) al gimnasio.', answers: ['he ido'], hint: 'ir', zh: '这周我没去健身房。', g: ['a2-perfecto'] },
  ],
  conj: [
    { verbs: ['hablar', 'comer', 'vivir', 'trabajar', 'leer'], tenses: ['pperf'], g: 'a2-perfecto' },
    { verbs: ['hacer', 'decir', 'ver', 'escribir', 'poner', 'volver', 'abrir', 'romper'], tenses: ['pperf'], g: 'a2-participios' },
  ],
  dialogues: [
    {
      id: 'a2-u01-d1',
      title: '忙碌的一天 · Un día lleno',
      lines: [
        { who: 'Lucía', es: '¡Hola! Tienes cara de cansado. ¿Qué has hecho hoy?', zh: '嗨！你看起来很累。今天做什么了？' },
        { who: 'Wang Lei', es: 'Uf, de todo. Me he levantado a las seis y he ido al gimnasio.', zh: '唉，什么都做了。我六点起床，去了健身房。' },
        { who: 'Lucía', es: '¿A las seis? ¡Qué valiente!', zh: '六点？真勇敢！' },
        { who: 'Wang Lei', es: 'Después he trabajado toda la mañana y he tenido dos reuniones.', zh: '之后整个上午都在工作，开了两个会。' },
        { who: 'Lucía', es: '¿Y ya has comido?', zh: '那你吃饭了吗？' },
        { who: 'Wang Lei', es: 'No, todavía no. No he tenido tiempo.', zh: '没有，还没吃。没时间。' },
        { who: 'Lucía', es: 'Pues vamos a comer algo. ¿Has probado el restaurante nuevo de la esquina?', zh: '那我们去吃点东西吧。你试过街角那家新餐馆吗？' },
        { who: 'Wang Lei', es: 'Nunca he estado allí. ¡Vamos!', zh: '我从没去过。走吧！' },
      ],
    },
  ],
  readings: [
    {
      id: 'a2-r01',
      level: 'A2',
      title: 'Mi primer mes en Salamanca',
      titleZh: '我在萨拉曼卡的第一个月',
      topic: '留学经历',
      paras: [
        [
          ['Hace un mes que estoy en Salamanca y he hecho muchas cosas nuevas.', '我来萨拉曼卡一个月了，做了很多新鲜事。'],
          ['He empezado un curso de español en la universidad y he conocido a gente de todo el mundo.', '我在大学开始上西班牙语课，认识了来自世界各地的人。'],
        ],
        [
          ['También he probado muchas comidas típicas: el jamón, la tortilla, el hornazo…', '我还尝了很多当地特色菜：火腿、土豆饼、萨拉曼卡肉馅饼……'],
          ['Pero todavía no he comido churros con chocolate. ¡Dicen que son muy buenos!', '但我还没吃过吉事果配热巧克力。听说非常好吃！'],
        ],
        [
          ['Este fin de semana he visitado la catedral y he buscado la famosa rana de la fachada de la universidad.', '这个周末我参观了大教堂，还去找了大学正门上那只著名的青蛙。'],
          ['Me he pasado media hora mirando, pero al final la he encontrado.', '我找了半个小时，最后终于找到了。'],
          ['Dicen que si la encuentras, vas a aprobar todos los exámenes.', '据说找到它的人所有考试都会通过。'],
        ],
      ],
      gloss: { Hace: '……以来（hace + 时间）', cosas: '东西；事情', curso: '课程', mundo: '世界', típicas: '典型的', hornazo: '萨拉曼卡肉馅饼', churros: '吉事果（油条状甜点）', Dicen: '人们说', catedral: '大教堂', famosa: '著名的', rana: '青蛙', fachada: '（建筑）正面', pasado: '度过', media: '半', la: '它（宾格代词）', encontrado: '找到', encuentras: '你找到', aprobar: '通过（考试）' },
      questions: [
        { type: 'mc', q: '作者来萨拉曼卡多久了？', options: ['一周', '一个月', '一年'], answer: 1 },
        { type: 'tf', q: '作者已经吃过吉事果配热巧克力。', answer: false, explain: 'Todavía no he comido churros con chocolate.' },
        { type: 'mc', q: '作者在大学正门上找什么？', options: ['一只青蛙', '一个名字', '一扇门'], answer: 0 },
        { type: 'tf', q: '作者最后找到了。', answer: true },
      ],
    },
    {
      id: 'a2-r02',
      level: 'A2',
      title: '¿Lo has hecho alguna vez?',
      titleZh: '你做过吗？',
      topic: '经历',
      paras: [
        [
          ['Hemos preguntado a tres personas: «¿Qué es lo más loco que has hecho en tu vida?».', '我们问了三个人：“你这辈子做过最疯狂的事是什么？”'],
        ],
        [
          ['Marta, 34 años: «He saltado en paracaídas dos veces. La primera vez he tenido mucho miedo, pero ha sido increíble».', '玛尔塔，34 岁：“我跳过两次伞。第一次很害怕，但太棒了。”'],
        ],
        [
          ['Jorge, 22 años: «Nunca he hecho nada muy loco, pero este año he viajado solo por Asia con una mochila».', '豪尔赫，22 岁：“我从没做过特别疯狂的事，不过今年我背着背包一个人游了亚洲。”'],
        ],
        [
          ['Carmen, 67 años: «El año pasado aprendí a nadar y este verano he nadado en el mar por primera vez. ¡Nunca es tarde!».', '卡门，67 岁：“去年我学会了游泳，今年夏天第一次在大海里游泳。永远都不晚！”'],
        ],
      ],
      gloss: { lo: '……的事（中性）', más: '最', loco: '疯狂的', vida: '生活；一生', paracaídas: '降落伞', primera: '第一', increíble: '难以置信的', nada: '什么也（没）', solo: '独自', Asia: '亚洲', 'pasado': '过去的', aprendí: '我学会了（简单过去时）', por: '在……（第一次）', tarde: '晚' },
      questions: [
        { type: 'mc', q: '玛尔塔跳过几次伞？', options: ['一次', '两次', '从没跳过'], answer: 1 },
        { type: 'tf', q: '豪尔赫今年一个人去亚洲旅行了。', answer: true },
        { type: 'mc', q: '卡门今年夏天第一次做了什么？', options: ['坐飞机', '在大海里游泳', '跳伞'], answer: 1 },
      ],
    },
  ],
  writing: [{ id: 'w1', prompt: '写一写你这周做过的事，再说说一件你“从来没做过但很想做”的事和一件你“做过很多次”的事。', words: [50, 100], hints: ['Esta semana he…', 'Nunca he… pero quiero…', 'He… muchas veces.'] }],
}
