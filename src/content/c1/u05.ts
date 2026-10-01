import type { Unit } from '../types'

export const u05: Unit = {
  id: 'c1-u05',
  level: 'C1',
  order: 5,
  title: '强调与焦点',
  titleEs: 'Poner el acento',
  icon: '🔦',
  goals: ['利用语序突出“话题”和“新信息”', '使用分裂句强调：Fue en Madrid donde… / Lo que necesito es…', '用 lo + 形容词 + que、¡con lo… que…!、sí que 等强调结构', '分析广告和演讲中的说服技巧'],
  grammar: [
    {
      id: 'c1-orden-palabras',
      title: '语序：旧信息在前，新信息在后',
      titleEs: 'El orden de las palabras',
      level: 'C1',
      summary: '西班牙语语序很灵活：已知的话题（tema）放前面，新信息（rema）放后面。所以主语常常放在动词后面：Ha llamado tu madre. 宾语提前作话题时要用代词重复；为了对比而提前（焦点前置）时不用代词：Eso mismo pensaba yo.',
      body: `### 新信息放在最后
| 问题 | 自然的回答 |
|---|---|
| *¿Quién ha llamado?* | *Ha llamado **tu madre**.*（新信息是“谁”） |
| *¿Qué ha hecho tu madre?* | *Tu madre **ha llamado**.*（新信息是“做了什么”） |

很多不及物动词习惯把主语放后面：*Llegaron **los invitados**. Se ha roto **la lavadora**. Falta **sal**.*

### 话题前置（复习）：要重复代词
*El informe **lo** termino mañana.*（报告嘛，我明天写完。）

### 焦点前置：为了对比，不重复代词
把要强调、对比的成分放到句首，动词紧跟其后，**不加代词**，重读：
- ***Eso mismo** pensaba yo.*（我也正是这么想的。）
- ***Poco** dinero tienes tú para tanto viaje.*（你的钱可不够你这么旅行。）
- ***Mucho** trabajo me ha costado.*（这可费了我不少功夫。）

### gustar 类动词
感受的人（已知）在前，东西（新信息）在后：*A mí me encanta **el cine**.*`,
      examples: [
        ['—¿Quién ha llamado? —Ha llamado tu madre.', '——谁来电话了？——你妈妈打来的。'],
        ['Llegaron los invitados y empezó la fiesta.', '客人们到了，派对开始了。'],
        ['El informe lo termino mañana.', '报告嘛，我明天写完。'],
        ['Eso mismo pensaba yo.', '我也正是这么想的。'],
        ['Mucho trabajo me ha costado llegar hasta aquí.', '走到今天可费了我不少功夫。'],
      ],
      origin: `为什么西语语序这么自由？因为动词词尾已经告诉了我们主语是谁：*Llegaron los invitados* 里的 *-aron* 就说明是“他们”。英语没有丰富的词尾，只能靠固定语序（主—谓—宾）区分角色。

语言学家把句子分成 **主题**（*tema*，已知信息）和 **述题**（*rema*，新信息）。西语倾向于“从已知走向未知”，这和中文的“话题—说明”结构其实很像。`,
      pitfalls: ['❌ *Tu madre ha llamado.*（回答“谁打电话了”）✅ *Ha llamado tu madre.*', '❌ *El informe termino mañana.* ✅ *El informe lo termino mañana.*', '❌ *Eso mismo lo pensaba yo.*（对比焦点前置）✅ *Eso mismo pensaba yo.*'],
    },
    {
      id: 'c1-perifrasticas-relativo',
      title: '分裂句：Fue en Madrid donde…',
      titleEs: 'Oraciones copulativas enfáticas',
      level: 'C1',
      summary: 'ser + 被强调成分 + 关系词（que, quien, donde, cuando, como）：Fue en Madrid donde se conocieron. Es Ana quien lo sabe. 带介词时介词要重复：Es a ti a quien quiero. 伪分裂句：Lo que necesito es descansar.',
      body: `### 强调不同成分，选不同的关系词
| 被强调的成分 | 结构 | 例句 |
|---|---|---|
| 人 | *ser … quien / el que* | *Es **Ana** quien lo sabe.* |
| 地点 | *ser … donde* | *Fue **en Madrid** donde se conocieron.* |
| 时间 | *ser … cuando* | *Fue **en 1992** cuando se celebraron los Juegos.* |
| 方式 | *ser … como* | *Es **así** como se hace.* |
| 原因 | *ser … por lo que* | *Es **por eso** por lo que no vine.* |
| 带介词的成分 | 介词重复 | *Es **a ti** **a** quien quiero.* / *Fue **con Luis** **con** quien hablé.* |

### 伪分裂句：lo que / quien / donde … es
***Lo que** necesito **es** descansar.*（我需要的是休息。）
***Lo que** más me molesta **es** que no me avise.*
***Quien** tiene la culpa **es** él.*
***Donde** mejor se come **es** en el norte.*

### 时态一致
*ser* 的时态通常和后面的动词一致：***Fue** en Madrid donde se **conocieron**.*`,
      examples: [
        ['Fue en Madrid donde se conocieron.', '他们正是在马德里认识的。'],
        ['Es Ana quien lo sabe todo.', '什么都知道的是安娜。'],
        ['Es por eso por lo que no vine.', '正是因为这个，我才没来。'],
        ['Es a ti a quien quiero.', '我爱的是你。'],
        ['Lo que más me molesta es que no me avise.', '最让我烦的是他不提前告诉我。'],
      ],
      origin: `**Es por eso que…** 是从法语 *c'est pour ça que* 借来的说法（“法语腔”），在口语和拉美很常见，但规范语言更推荐 *Es por eso por lo que…* 或干脆说 *Por eso…*。

分裂句的作用就像一盏聚光灯（*foco*）：把句子的一部分“切”出来照亮。英语的 *It was in Madrid that…* 和中文的“正是……才……”也是同样的手段。`,
      pitfalls: ['❌ *Es por eso que no vine.*（不规范）✅ *Es por eso por lo que no vine.* / *Por eso no vine.*', '❌ *Fue en Madrid que se conocieron.* ✅ *Fue en Madrid donde se conocieron.*', '❌ *Es a ti que quiero.* ✅ *Es a ti a quien quiero.*', '❌ *Es ellos quienes…* ✅ *Son ellos quienes…*：ser 和被强调成分一致。'],
    },
    {
      id: 'c1-enfasis',
      title: '口语中的强调结构',
      titleEs: 'Estructuras enfáticas',
      level: 'C1',
      summary: 'lo + 形容词 / 副词 + que：¡Lo bien que canta! No sabes lo cansada que estoy. ¡Con lo + 形容词 + que…!（明明那么……还……）。sí que：Eso sí que es una sorpresa. pero que muy, ni + 名词（No tengo ni idea）。',
      body: `### lo + 形容词 / 副词 + que
| 例句 | 意思 |
|---|---|
| *¡**Lo bien que** canta!* | 他唱得可真好！ |
| *No sabes **lo cansada que** estoy.* | 你不知道我有多累。 |
| *Me sorprendió **lo rápido que** aprendió.* | 他学得那么快，让我很惊讶。 |

> 形容词要和后面的人或物一致：*lo cansad**a** que estoy*（我是女生）。

### ¡Con lo + 形容词 + que…!：明明……却……（惋惜、责备）
*¡**Con lo guapa que** eres y siempre vas en chándal!*（你明明那么漂亮，却总穿运动服！）
*¡**Con lo que** te he ayudado!*（我帮了你那么多！）

### 其他强调
| 结构 | 例句 |
|---|---|
| *sí que* | *Eso **sí que** es una sorpresa.*（这可真是个惊喜。） |
| *pero que muy* | *Es **pero que muy** caro.*（贵得要命。） |
| *ni* + 名词 | *No tengo **ni idea**. / No dijo **ni una palabra**.* |
| *¡Qué de…!* | *¡**Qué de** gente!*（好多人！） |
| 名词重复 | *Quiero un café **café**, no un descafeinado.*（真正的咖啡） |
| *¡Si será…!* | *¡**Si será** tonto!*（他可真够傻的！） |`,
      examples: [
        ['¡Lo bien que canta tu hermana!', '你姐姐唱得可真好！'],
        ['No sabes lo cansada que estoy.', '你不知道我有多累。'],
        ['¡Con lo guapa que eres y siempre vas en chándal!', '你明明那么漂亮，却总穿运动服！'],
        ['Eso sí que es una sorpresa.', '这可真是个惊喜。'],
        ['No tengo ni idea de dónde están las llaves.', '我完全不知道钥匙在哪儿。'],
      ],
      origin: `**énfasis** 来自希腊语 *emphasis*「显示、表现」。**hincapié**（*hacer hincapié en* = 强调）则来自 *hincar el pie*「把脚牢牢踩住」——说话时“站稳脚跟”，突出重点。

*lo + 形容词 + que* 是西班牙语独有的妙招：*lo* 把形容词变成一个“程度”，就像中文的“有多……”：*lo cansada que estoy* =“我有多累”。`,
      pitfalls: ['❌ *¡Lo bien canta!* ✅ *¡Lo bien que canta!*', '❌ *No sabes lo cansado que estoy*（说话人是女生）✅ *No sabes lo cansada que estoy.*', '❌ *Hacer hincapié a…* ✅ *Hacer hincapié en…*'],
    },
  ],
  words: [
    { id: 'publicidad', es: 'publicidad', zh: '广告；宣传', pos: 'n', g: 'f', level: 'C1', tags: ['hobby'], ex: ['La publicidad nos rodea.', '广告无处不在。'] },
    { id: 'publicitario', es: 'publicitario', zh: '广告的；广告人', pos: 'adj', f: 'publicitaria', level: 'C1', tags: ['hobby'], ex: ['Es una campaña publicitaria muy original.', '这是一次很有创意的广告宣传。'] },
    { id: 'eslogan', es: 'eslogan', zh: '口号；广告语', pos: 'n', g: 'm', pl: 'eslóganes', level: 'C1', tags: ['hobby'], ex: ['Todo el mundo recuerda ese eslogan.', '人人都记得那句广告语。'] },
    { id: 'persuasivo', es: 'persuasivo', zh: '有说服力的', pos: 'adj', f: 'persuasiva', level: 'C1', tags: ['func'], ex: ['Es un orador muy persuasivo.', '他是个很有说服力的演说家。'] },
    { id: 'persuasion', es: 'persuasión', zh: '说服', pos: 'n', g: 'f', level: 'C1', tags: ['func'], ex: ['Tiene una gran capacidad de persuasión.', '他很有说服力。'] },
    { id: 'discurso', es: 'discurso', zh: '演讲；话语', pos: 'n', g: 'm', level: 'C1', tags: ['func'], ex: ['Su discurso emocionó a todos.', '他的演讲打动了所有人。'] },
    { id: 'orador', es: 'orador', zh: '演说者', pos: 'n', g: 'm', f: 'oradora', pl: 'oradores', level: 'C1', tags: ['people'], ex: ['Es una oradora brillante.', '她是一位出色的演说家。'] },
    { id: 'oratoria', es: 'oratoria', zh: '演讲术', pos: 'n', g: 'f', level: 'C1', tags: ['func'], ex: ['Hice un curso de oratoria.', '我上过一门演讲课。'] },
    { id: 'enfasis', es: 'énfasis', zh: '强调', pos: 'n', g: 'm', pl: 'énfasis', level: 'C1', tags: ['func'], ex: ['Puso énfasis en la educación.', '他着重强调了教育。'] },
    { id: 'enfatizar', es: 'enfatizar', zh: '强调', pos: 'v', level: 'C1', tags: ['verb'], ex: ['Quiero enfatizar este punto.', '我想强调这一点。'] },
    { id: 'recalcar', es: 'recalcar', zh: '反复强调', pos: 'v', level: 'C1', tags: ['verb'], ex: ['Recalcó que no habrá excepciones.', '他再三强调不会有例外。'], note: 'c→qu：recalqué。' },
    { id: 'hacer-hincapie', es: 'hacer hincapié en', zh: '着重强调', pos: 'phr', level: 'C1', tags: ['func'], ex: ['La profesora hizo hincapié en la pronunciación.', '老师着重强调了发音。'] },
    { id: 'protagonismo', es: 'protagonismo', zh: '主角地位；突出作用', pos: 'n', g: 'm', level: 'C1', tags: ['func'], ex: ['Le gusta tener protagonismo.', '他喜欢出风头。'] },
    { id: 'relevancia', es: 'relevancia', zh: '重要性；相关性', pos: 'n', g: 'f', level: 'C1', tags: ['func'], ex: ['Es un dato de gran relevancia.', '这是一个非常重要的数据。'] },
    { id: 'primordial', es: 'primordial', zh: '首要的', pos: 'adj', level: 'C1', tags: ['func'], ex: ['La seguridad es primordial.', '安全是首要的。'] },
    { id: 'trascendental', es: 'trascendental', zh: '极其重要的', pos: 'adj', level: 'C1', tags: ['func'], ex: ['Fue una decisión trascendental.', '这是一个至关重要的决定。'] },
    { id: 'clave', es: 'clave', zh: '关键；密码', pos: 'n', g: 'f', level: 'C1', tags: ['func'], ex: ['La clave del éxito es la constancia.', '成功的关键在于坚持。'], note: '作形容词不变：un factor clave, dos factores clave。' },
    { id: 'impactante', es: 'impactante', zh: '令人震撼的', pos: 'adj', level: 'C1', tags: ['func'], ex: ['Las imágenes son impactantes.', '画面令人震撼。'] },
    { id: 'llamativo', es: 'llamativo', zh: '引人注目的；花哨的', pos: 'adj', f: 'llamativa', level: 'C1', tags: ['func'], ex: ['Lleva un vestido muy llamativo.', '她穿着一条很显眼的裙子。'] },
    { id: 'contundente', es: 'contundente', zh: '有力的；令人信服的', pos: 'adj', level: 'C1', tags: ['func'], ex: ['Dio una respuesta contundente.', '他给出了有力的回答。'] },
    { id: 'conciso', es: 'conciso', zh: '简洁的', pos: 'adj', f: 'concisa', level: 'C1', tags: ['func'], ex: ['Sé conciso: tienes dos minutos.', '简洁点：你只有两分钟。'] },
    { id: 'escueto', es: 'escueto', zh: '简短的；干巴巴的', pos: 'adj', f: 'escueta', level: 'C1', tags: ['func'], ex: ['Su respuesta fue muy escueta.', '他的回答非常简短。'] },
    { id: 'prolijo', es: 'prolijo', zh: '冗长的', pos: 'adj', f: 'prolija', level: 'C1', tags: ['func'], ex: ['El informe es demasiado prolijo.', '报告太冗长了。'], latam: '在阿根廷、乌拉圭，prolijo 意思是“整洁、细致的”。' },
    { id: 'redundante', es: 'redundante', zh: '多余的；重复的', pos: 'adj', level: 'C1', tags: ['func'], ex: ['«Subir arriba» es redundante.', '“往上上去”是重复的说法。'] },
    { id: 'claridad', es: 'claridad', zh: '清晰', pos: 'n', g: 'f', level: 'C1', tags: ['func'], ex: ['Explica las cosas con mucha claridad.', '他讲东西很清楚。'] },
    { id: 'coherencia', es: 'coherencia', zh: '连贯性；一致性', pos: 'n', g: 'f', level: 'C1', tags: ['func'], ex: ['A tu texto le falta coherencia.', '你的文章缺乏连贯性。'] },
    { id: 'cohesion', es: 'cohesión', zh: '衔接；凝聚力', pos: 'n', g: 'f', level: 'C1', tags: ['func'], ex: ['Los conectores dan cohesión al texto.', '连接词让文章衔接紧密。'] },
    { id: 'estructura', es: 'estructura', zh: '结构', pos: 'n', g: 'f', level: 'C1', tags: ['func'], ex: ['La estructura del discurso es muy clara.', '演讲的结构非常清晰。'] },
    { id: 'registro', es: 'registro', zh: '语体；登记', pos: 'n', g: 'm', level: 'C1', tags: ['func'], ex: ['Hay que adaptar el registro al contexto.', '语体要根据场合调整。'] },
    { id: 'jerga', es: 'jerga', zh: '行话；黑话', pos: 'n', g: 'f', level: 'C1', tags: ['func'], ex: ['No entiendo la jerga de los informáticos.', '我听不懂程序员的行话。'] },
    { id: 'lema', es: 'lema', zh: '座右铭；口号', pos: 'n', g: 'm', level: 'C1', tags: ['func'], ex: ['Mi lema es «nunca te rindas».', '我的座右铭是“永不放弃”。'] },
    { id: 'receptor', es: 'receptor', zh: '接收者', pos: 'n', g: 'm', f: 'receptora', pl: 'receptores', level: 'C1', tags: ['func'], ex: ['El mensaje debe adaptarse al receptor.', '信息应根据接收者调整。'] },
    { id: 'emisor', es: 'emisor', zh: '发送者', pos: 'n', g: 'm', f: 'emisora', pl: 'emisores', level: 'C1', tags: ['func'], ex: ['El emisor y el receptor comparten un código.', '发送者和接收者共享一套代码。'] },
    { id: 'publico', es: 'público', zh: '公众；观众；公共的', pos: 'n', g: 'm', level: 'C1', tags: ['people'], ex: ['El público aplaudió durante cinco minutos.', '观众鼓掌了五分钟。'] },
    { id: 'captar', es: 'captar', zh: '吸引（注意）；领会', pos: 'v', level: 'C1', tags: ['verb'], ex: ['El anuncio capta la atención enseguida.', '这则广告一下子就吸引了注意力。'] },
    { id: 'cautivar', es: 'cautivar', zh: '迷住', pos: 'v', level: 'C1', tags: ['verb'], ex: ['Su voz cautivó al público.', '她的歌声迷住了观众。'] },
    { id: 'seducir', es: 'seducir', zh: '吸引；诱惑', pos: 'v', level: 'C1', tags: ['verb'], ex: ['La idea me seduce.', '这个主意很吸引我。'], note: 'seduzco；过去时 seduje。' },
    { id: 'dar-en-el-clavo', es: 'dar en el clavo', zh: '说到点子上', pos: 'phr', level: 'C1', tags: ['func'], ex: ['¡Has dado en el clavo!', '你说到点子上了！'] },
    { id: 'andarse-por-las-ramas', es: 'andarse por las ramas', zh: '绕圈子；说话不着边际', pos: 'phr', level: 'C1', tags: ['func'], ex: ['No te andes por las ramas y dime la verdad.', '别绕圈子了，跟我说实话。'] },
    { id: 'poner-el-acento-en', es: 'poner el acento en', zh: '着重于', pos: 'phr', level: 'C1', tags: ['func'], ex: ['El informe pone el acento en la prevención.', '报告着重于预防。'] },
    { id: 'no-tener-ni-idea', es: 'no tener ni idea', zh: '一无所知', pos: 'phr', level: 'C1', tags: ['func'], ex: ['No tengo ni idea de lo que dices.', '我完全不明白你在说什么。'] },
    { id: 'ni-mucho-menos', es: 'ni mucho menos', zh: '远非如此', pos: 'phr', level: 'C1', tags: ['func'], ex: ['No es fácil, ni mucho menos.', '这一点也不容易。'] },
    { id: 'ni-de-broma', es: 'ni de broma', zh: '门儿都没有（口语）', pos: 'phr', level: 'C1', tags: ['func'], ex: ['—¿Vienes a correr a las seis? —¡Ni de broma!', '——六点去跑步吗？——想都别想！'] },
    { id: 'si-que', es: 'sí que', zh: '确实；真的（强调）', pos: 'phr', level: 'C1', tags: ['func'], ex: ['Esto sí que es vida.', '这才叫生活。'] },
    { id: 'pero-que-muy', es: 'pero que muy', zh: '非常非常（口语强调）', pos: 'phr', level: 'C1', tags: ['func'], ex: ['Es pero que muy simpática.', '她人可真是好极了。'] },
    { id: 'chandal', es: 'chándal', zh: '运动服', pos: 'n', g: 'm', pl: 'chándales', level: 'C1', tags: ['clothes'], ex: ['Los domingos voy en chándal.', '星期天我穿运动服。'], latam: '拉美多说 buzo、pants（墨西哥）或 sudadera。' },
  ],
  sentences: [
    { id: 's1', es: '—¿Quién ha llamado? —Ha llamado tu madre.', zh: '——谁来电话了？——你妈妈打来的。', g: ['c1-orden-palabras'] },
    { id: 's2', es: 'Llegaron los invitados y empezó la fiesta.', zh: '客人们到了，派对开始了。', g: ['c1-orden-palabras'] },
    { id: 's3', es: 'Eso mismo pensaba yo.', zh: '我也正是这么想的。', g: ['c1-orden-palabras'], distract: ['lo'] },
    { id: 's4', es: 'Fue en Madrid donde se conocieron.', zh: '他们正是在马德里认识的。', g: ['c1-perifrasticas-relativo'], distract: ['que'] },
    { id: 's5', es: 'Es Ana quien lo sabe todo.', zh: '什么都知道的是安娜。', g: ['c1-perifrasticas-relativo'] },
    { id: 's6', es: 'Es por eso por lo que no vine.', zh: '正是因为这个，我才没来。', g: ['c1-perifrasticas-relativo'] },
    { id: 's7', es: 'Es a ti a quien quiero.', zh: '我爱的是你。', g: ['c1-perifrasticas-relativo'] },
    { id: 's8', es: 'Lo que más me molesta es que no me avise.', zh: '最让我烦的是他不提前告诉我。', g: ['c1-perifrasticas-relativo'] },
    { id: 's9', es: '¡Lo bien que canta tu hermana!', zh: '你姐姐唱得可真好！', g: ['c1-enfasis'] },
    { id: 's10', es: 'No sabes lo cansada que estoy.', zh: '你不知道我有多累。', g: ['c1-enfasis'] },
    { id: 's11', es: '¡Con lo guapa que eres y siempre vas en chándal!', zh: '你明明那么漂亮，却总穿运动服！', g: ['c1-enfasis'] },
    { id: 's12', es: 'Eso sí que es una sorpresa.', zh: '这可真是个惊喜。', g: ['c1-enfasis'] },
    { id: 's13', es: 'No tengo ni idea de dónde están las llaves.', zh: '我完全不知道钥匙在哪儿。', g: ['c1-enfasis'] },
    { id: 's14', es: 'No te andes por las ramas.', zh: '别绕圈子。' },
    { id: 's15', es: '¡Has dado en el clavo!', zh: '你说到点子上了！' },
    { id: 's16', es: 'La clave del éxito es la constancia.', zh: '成功的关键在于坚持。' },
    { id: 's17', es: 'Lo que necesito es descansar una semana.', zh: '我需要的是休息一个星期。', g: ['c1-perifrasticas-relativo'] },
    { id: 's18', es: 'Fue entonces cuando me di cuenta del error.', zh: '正是在那时我意识到了错误。', g: ['c1-perifrasticas-relativo'] },
    { id: 's19', es: 'El informe lo termino mañana.', zh: '报告嘛，我明天写完。', g: ['c1-orden-palabras'] },
    { id: 's20', es: 'Me sorprendió lo rápido que aprendió.', zh: '他学得那么快，让我很惊讶。', g: ['c1-enfasis'] },
    { id: 's21', es: 'Se ha roto la lavadora otra vez.', zh: '洗衣机又坏了。', g: ['c1-orden-palabras'] },
    { id: 's22', es: 'La profesora hizo hincapié en la pronunciación.', zh: '老师着重强调了发音。' },
    { id: 's23', es: 'Su discurso emocionó a todos.', zh: '他的演讲打动了所有人。' },
    { id: 's24', es: 'No es fácil, ni mucho menos.', zh: '这一点也不容易。' },
    { id: 's25', es: 'Es así como se hace.', zh: '就是这样做的。', g: ['c1-perifrasticas-relativo'] },
  ],
  cloze: [
    { id: 'c1', text: '—¿Quién ha ganado? —Ha ganado ___.', answers: ['mi equipo'], options: ['mi equipo', 'mi equipo ha', 'lo mi equipo'], zh: '——谁赢了？——我的球队赢了。', g: ['c1-orden-palabras'] },
    { id: 'c2', text: 'La película ya ___ he visto.', answers: ['la'], options: ['la', 'lo', '—'], zh: '那部电影我已经看过了。', g: ['c1-orden-palabras'] },
    { id: 'c3', text: 'Fue en Sevilla ___ nací.', answers: ['donde'], options: ['donde', 'que', 'cuando'], zh: '我正是在塞维利亚出生的。', g: ['c1-perifrasticas-relativo'] },
    { id: 'c4', text: 'Fue en 1992 ___ se celebraron los Juegos Olímpicos de Barcelona.', answers: ['cuando'], options: ['cuando', 'donde', 'que cuando'], zh: '巴塞罗那奥运会正是在 1992 年举办的。', g: ['c1-perifrasticas-relativo'] },
    { id: 'c5', text: 'Es con Luis ___ quien tienes que hablar.', answers: ['con'], options: ['con', 'a', '—'], zh: '你该谈的人是路易斯。', g: ['c1-perifrasticas-relativo'] },
    { id: 'c6', text: 'Es por eso ___ lo que me fui.', answers: ['por'], options: ['por', 'de', 'que'], zh: '正是因为这个我才走的。', g: ['c1-perifrasticas-relativo'] },
    { id: 'c7', text: '___ ellos quienes tomaron la decisión.', answers: ['Fueron'], options: ['Fueron', 'Fue', 'Es'], zh: '做出决定的是他们。', g: ['c1-perifrasticas-relativo'] },
    { id: 'c8', text: 'Lo que más me gusta de ti ___ tu sinceridad.', answers: ['es'], options: ['es', 'son', 'está'], zh: '我最喜欢你的是你的真诚。', g: ['c1-perifrasticas-relativo'] },
    { id: 'c9', text: '¡Lo bien ___ habla español!', answers: ['que'], options: ['que', 'como', 'qué'], zh: '他西班牙语说得可真好！', g: ['c1-enfasis'] },
    { id: 'c10', text: 'No te imaginas lo ___ que estamos con la noticia. (nosotras)', answers: ['contentas'], options: ['contentas', 'contento', 'contentos'], zh: '你想象不到我们听到这个消息有多高兴。', g: ['c1-enfasis'] },
    { id: 'c11', text: '¡Con lo ___ que estudiaste y has suspendido!', answers: ['mucho'], options: ['mucho', 'muy', 'tan'], zh: '你明明学了那么多，怎么还挂科了！', g: ['c1-enfasis'] },
    { id: 'c12', text: 'Esto ___ que es una buena noticia.', answers: ['sí'], options: ['sí', 'si', 'así'], zh: '这可真是个好消息。', g: ['c1-enfasis'] },
    { id: 'c13', text: 'No dijo ___ una palabra en toda la cena.', answers: ['ni'], options: ['ni', 'no', 'nada'], zh: '整顿晚饭他一句话都没说。', g: ['c1-enfasis'] },
    { id: 'c14', text: '¡Qué ___ gente hay hoy en la playa!', answers: ['de'], options: ['de', 'mucha', 'tanta'], zh: '今天海滩上人可真多！', g: ['c1-enfasis'] },
    { id: 'c15', text: 'El ministro hizo ___ en la importancia de la educación.', answers: ['hincapié'], options: ['hincapié', 'énfasis de', 'acento'], zh: '部长着重强调了教育的重要性。' },
    { id: 'c16', text: 'No te andes por las ___: ¿qué quieres?', answers: ['ramas'], options: ['ramas', 'hojas', 'nubes'], zh: '别绕圈子了：你到底想要什么？' },
    { id: 'c17', text: 'Con esa respuesta has dado en el ___.', answers: ['clavo'], options: ['clavo', 'blanco de', 'punto'], zh: '你这个回答说到点子上了。' },
    { id: 'c18', text: 'Es ___ como se resuelve el problema.', answers: ['así'], options: ['así', 'como', 'tal'], zh: '问题就是这样解决的。', g: ['c1-perifrasticas-relativo'] },
  ],
  conj: [
    { verbs: ['recalcar', 'enfatizar', 'captar', 'seducir', 'cautivar'], tenses: ['pres', 'pret'], g: 'c1-enfasis' },
    { verbs: ['ser'], tenses: ['pres', 'pret', 'impf'], g: 'c1-perifrasticas-relativo' },
  ],
  dialogues: [
    {
      id: 'c1-u05-d1',
      title: '准备演讲 · Preparando el discurso',
      lines: [
        { who: 'Raúl', es: 'Mañana es la presentación del proyecto y no sé cómo empezar. ¿Me ayudas?', zh: '明天就要介绍项目了，我不知道怎么开头。你能帮帮我吗？' },
        { who: 'Mei', es: 'Claro. Lo que tienes que hacer es captar la atención en los primeros treinta segundos.', zh: '当然。你要做的就是在头三十秒抓住听众的注意力。' },
        { who: 'Raúl', es: 'Había pensado empezar con los datos del estudio…', zh: '我本来想从研究数据讲起……' },
        { who: 'Mei', es: 'No, no. Es con una historia con lo que hay que empezar. Los datos, déjalos para después.', zh: '不不。得用一个故事开头。数据嘛，留到后面再说。' },
        { who: 'Raúl', es: 'Vale. ¿Y cómo hago para que se acuerden del mensaje principal?', zh: '好的。那怎么让他们记住主要信息呢？' },
        { who: 'Mei', es: 'Repítelo al final y sé conciso. No sabes lo aburrido que es escuchar a alguien que se anda por las ramas.', zh: '在结尾重复一遍，而且要简洁。你不知道听一个人绕来绕去有多无聊。' },
        { who: 'Raúl', es: '¡Con lo que me cuesta resumir! Pero tienes razón. Eso sí que me lo voy a apuntar.', zh: '我最不擅长概括了！不过你说得对。这一点我可得记下来。' },
        { who: 'Mei', es: 'Y una última cosa: es al público a quien le hablas, no a la pantalla. Míralos a los ojos.', zh: '还有最后一点：你是在对观众说话，不是对屏幕。要看着他们的眼睛。' },
      ],
    },
  ],
  readings: [
    {
      id: 'c1-r09',
      level: 'C1',
      title: 'Lo que de verdad vende un anuncio',
      titleZh: '广告真正卖的是什么',
      topic: '广告',
      paras: [
        [
          ['Los publicistas lo saben desde hace décadas: lo que vende un anuncio no es el producto, sino la emoción que asociamos a él. Un coche no se anuncia por sus caballos de potencia, sino por la libertad que promete.', '广告人几十年前就明白这一点：一则广告卖的不是产品，而是我们和它联系在一起的情感。汽车广告宣传的不是马力，而是它许诺的自由。'],
        ],
        [
          ['Para conseguirlo, el lenguaje publicitario recurre a todo tipo de recursos enfáticos. Es en el eslogan donde se concentra la mayor carga persuasiva: frases breves, fáciles de recordar y, a menudo, con rima o juegos de palabras.', '为此，广告语言动用了各种强调手段。说服力最集中的地方正是广告语：简短、好记，而且常常押韵或带有文字游戏。'],
          ['Tampoco es casual el orden de las palabras. Lo que aparece al final de la frase es lo que el cerebro registra como información nueva, y por eso muchos anuncios reservan para ese lugar la palabra clave: «Porque tú lo vales».', '语序也不是偶然的。句末出现的内容会被大脑记录为新信息，所以很多广告会把关键词留在这个位置：“因为你值得拥有”。'],
        ],
        [
          ['Conocer estas técnicas no nos hace inmunes, ni mucho menos, pero sí nos permite mirar los anuncios con otros ojos. Al fin y al cabo, es el consumidor quien tiene la última palabra.', '了解这些技巧并不能让我们免疫，远非如此，但它的确能让我们换个眼光看广告。说到底，最终拍板的是消费者。'],
        ],
      ],
      gloss: { publicistas: '广告人', asociamos: '联系', 'caballos de potencia': '马力', recurre: '求助于', carga: '负荷；分量', rima: '押韵', casual: '偶然的', registra: '记录', inmunes: '免疫的' },
      questions: [
        { type: 'mc', q: '根据文章，广告真正卖的是什么？', options: ['产品的价格', '和产品相关的情感', '产品的质量'], answer: 1 },
        { type: 'mc', q: '为什么很多广告把关键词放在句末？', options: ['为了押韵', '大脑把句末内容当作新信息', '因为语法规定'], answer: 1 },
        { type: 'tf', q: '作者认为了解这些技巧就能完全不受广告影响。', answer: false, explain: 'Conocer estas técnicas no nos hace inmunes, ni mucho menos' },
      ],
    },
    {
      id: 'c1-r10',
      level: 'C1',
      title: 'Hablar en público: lo que nadie te cuenta',
      titleZh: '当众讲话：没人告诉你的事',
      topic: '演讲',
      paras: [
        [
          ['Las encuestas lo repiten una y otra vez: hablar en público es uno de los miedos más extendidos. Lo curioso es que no es la falta de conocimientos lo que más nos paraliza, sino el miedo a hacer el ridículo.', '调查一再显示：当众讲话是最普遍的恐惧之一。奇怪的是，最让我们发怵的不是知识不足，而是怕出丑。'],
        ],
        [
          ['Los expertos en oratoria coinciden en que es en los primeros segundos cuando se gana o se pierde a la audiencia. Por eso recomiendan empezar con una pregunta, una anécdota o un dato impactante, nunca con un «bueno, eh… voy a hablar de…».', '演讲专家一致认为，赢得还是失去听众，就在最初的几秒钟。所以他们建议用一个问题、一个小故事或一个令人震撼的数据开头，千万别用“嗯，那个……我要讲的是……”。'],
          ['Otro consejo, quizá el más difícil de seguir, es ser conciso. Lo que el público recuerda no es la cantidad de información, sino dos o tres ideas bien expuestas.', '另一个建议——也许是最难做到的——是简洁。听众记住的不是信息的多少，而是两三个讲清楚的观点。'],
        ],
        [
          ['Y, sobre todo, practicar. No sabes lo distinto que suena un discurso cuando lo has ensayado en voz alta diez veces. Lo que parece talento natural es, casi siempre, trabajo invisible.', '最重要的是练习。你不知道一篇演讲在你大声排练十遍后听起来有多么不同。看似天赋的东西，几乎总是看不见的努力。'],
        ],
      ],
      gloss: { extendidos: '普遍的', paraliza: '使瘫痪', 'hacer el ridículo': '出丑', audiencia: '听众', anécdota: '小故事', impactante: '令人震撼的', expuestas: '阐述的', ensayado: '排练', invisible: '看不见的' },
      questions: [
        { type: 'mc', q: '文章认为最让人发怵的是什么？', options: ['知识不足', '怕出丑', '声音太小'], answer: 1 },
        { type: 'mc', q: '专家建议怎么开头？', options: ['先介绍自己', '用问题、故事或震撼的数据', '先感谢观众'], answer: 1 },
        { type: 'tf', q: '作者认为看似天赋的东西其实多是努力的结果。', answer: true, explain: 'Lo que parece talento natural es, casi siempre, trabajo invisible.' },
      ],
    },
  ],
  writing: [{ id: 'w1', prompt: '写一段 2 分钟的演讲开场白（主题自选：保护母语、少用手机、学外语的意义……）。要求：开头抓住注意力，至少用两个分裂句（Es… donde / Lo que… es…）、一个 lo + 形容词 + que 和一个话题前置。', words: [150, 220], hints: ['¿Sabían ustedes que…?', 'Lo que quiero proponerles hoy es…', 'Es precisamente en… donde…', 'No se imaginan lo importante que es…'] }],
}
