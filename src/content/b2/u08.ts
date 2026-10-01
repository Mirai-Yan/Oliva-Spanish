import type { Unit } from '../types'

export const u08: Unit = {
  id: 'b2-u08',
  level: 'B2',
  order: 8,
  title: '科学与发明',
  titleEs: 'Inventos y descubrimientos',
  icon: '🔬',
  goals: ['在介词后使用 el cual / la cual / lo cual', '用 cuyo / cuya / cuyos / cuyas 表示“……的”（所属关系）', '区分限定性和解释性关系从句（有无逗号）', '介绍一项发明或一位科学家'],
  grammar: [
    {
      id: 'b2-el-cual',
      title: 'el cual, la cual, lo cual',
      titleEs: 'El cual y lo cual',
      level: 'B2',
      summary: '介词 + el cual / la cual / los cuales / las cuales：比 el que 更正式，常用在长介词后（gracias al cual, a través de la cual, sin el cual）。lo cual / lo que 指代前面的整句话。',
      body: `### 介词 + el cual（正式）
意思和 *el que* 一样，但更书面，常见于科普、新闻和学术文章：

| 介词 | 例句 |
|---|---|
| *gracias a* | *Es la vacuna **gracias a la cual** se salvaron millones de vidas.* |
| *a través de* | *Es un tubo **a través del cual** pasa el agua.* |
| *sin* | *Es un invento **sin el cual** no podríamos vivir.* |
| *según* | *Hay una teoría **según la cual** el universo se expande.* |
| *por medio de* | *Inventó un sistema **por medio del cual** los barcos se comunicaban.* |

> 冠词和先行词 **性数一致**：*el invento sin **el** cual*，*las máquinas con **las** cuales*。

### lo cual / lo que：指代整句话
*El experimento falló tres veces, **lo cual** desanimó a todo el equipo.*
（实验失败了三次，这让整个团队都很沮丧。）

逗号后面指代整句时，*lo cual* 和 *lo que* 都可以；但 *lo cual* 不能单独作句首主语：
❌ *Lo cual más me gusta…* ✅ *Lo que más me gusta…*`,
      examples: [
        ['Es la vacuna gracias a la cual se salvaron millones de vidas.', '正是这种疫苗挽救了数百万人的生命。'],
        ['Es un invento sin el cual no podríamos vivir.', '这是一项我们离不开的发明。'],
        ['Hay una teoría según la cual el universo se expande.', '有一种理论认为宇宙在膨胀。'],
        ['El experimento falló tres veces, lo cual desanimó al equipo.', '实验失败了三次，这让团队很沮丧。'],
        ['Llegó tarde a la presentación, lo que no le gustó nada al jefe.', '他汇报迟到了，老板对此很不满。'],
      ],
      origin: `**cual** 来自拉丁语 *qualis*「什么样的」，英语 *quality*（性质）同源。

为什么长介词后面更喜欢 *el cual*？因为 *el cual* 是重读的词，放在 *a través de*、*gracias a* 这种“重”的介词后面，句子读起来更平衡；而 *el que* 里的 *que* 不重读，容易“站不稳”。`,
      pitfalls: ['❌ *El experimento falló, que desanimó al equipo.* ✅ *El experimento falló, lo cual / lo que desanimó al equipo.*', '❌ *Lo cual más me interesa es la química.* ✅ *Lo que más me interesa es la química.*', '❌ *la máquina con el cual* ✅ *la máquina con la cual*'],
    },
    {
      id: 'b2-cuyo',
      title: 'cuyo, cuya, cuyos, cuyas',
      titleEs: 'El relativo cuyo',
      level: 'B2',
      summary: 'cuyo = “……的”（表示所属），放在被拥有的名词前，和 **被拥有的东西** 性数一致：el científico cuyas investigaciones… / la escritora cuyo libro…',
      body: `### 结构
**先行词（拥有者）+ cuyo / cuya / cuyos / cuyas + 名词（被拥有的东西）**

*Es un científico. **Sus** descubrimientos cambiaron la medicina.*
→ *Es un científico **cuyos** descubrimientos cambiaron la medicina.*

### 和谁一致？和 **后面** 的名词！
| 例句 | 一致对象 |
|---|---|
| *la inventora **cuyo** invento…* | *invento*（阳性单数） |
| *el pintor **cuya** obra…* | *obra*（阴性单数） |
| *la ciudad **cuyos** museos…* | *museos*（阳性复数） |
| *el país **cuyas** playas…* | *playas*（阴性复数） |

### 介词 + cuyo
*Es un pueblo **en cuyas** calles se rodaron muchas películas.*
*Es la profesora **de cuya** clase te hablé.*

### 口语中的错误：que su
很多人口语里会说 *que su*，但这是不规范的：
❌ *Es el científico **que su** descubrimiento…* ✅ *Es el científico **cuyo** descubrimiento…*`,
      examples: [
        ['Es un científico cuyos descubrimientos cambiaron la medicina.', '他是一位其发现改变了医学的科学家。'],
        ['Conocí a una inventora cuyo invento se vende en todo el mundo.', '我认识一位发明家，她的发明卖到了全世界。'],
        ['Es un pueblo en cuyas calles se rodaron muchas películas.', '这是一个很多电影在其街道上取景的小镇。'],
        ['Marie Curie, cuyas investigaciones sobre la radiactividad fueron fundamentales, ganó dos premios Nobel.', '玛丽·居里对放射性的研究至关重要，她获得了两次诺贝尔奖。'],
        ['El libro, cuyo autor es anónimo, fue escrito en el siglo XVI.', '这本书作者不详，写于十六世纪。'],
      ],
      origin: `**cuyo** 来自拉丁语 *cuius*「谁的」——关系代词 *qui* 的属格。它是西班牙语里 **唯一像形容词一样变性数的关系词**。

在日常口语中，*cuyo* 越来越少见，常被 *que su* 代替；但在书面语、新闻和考试（DELE B2 写作）里，用对 *cuyo* 是很加分的。`,
      pitfalls: ['❌ *El científico que su descubrimiento…* ✅ *El científico cuyo descubrimiento…*', '❌ *el chico cuyo madre* ✅ *el chico cuya madre*：和后面的名词一致。', '❌ *la mujer cuya el marido* ✅ *la mujer cuyo marido*：cuyo 后面不加冠词。'],
    },
    {
      id: 'b2-explicativas',
      title: '限定性 vs 解释性关系从句',
      titleEs: 'Relativas especificativas y explicativas',
      level: 'B2',
      summary: '没有逗号：限定性（缩小范围，指“其中那些……的”）。有逗号：解释性（补充说明，指“全部，而且他们……”）。解释性从句里可以用 quien / el cual 作主语，不用虚拟式。',
      body: `### 逗号改变意思
| 句子 | 意思 |
|---|---|
| *Los alumnos **que aprobaron** fueron a la fiesta.* | 只有 **通过考试的那些学生** 去了派对。 |
| *Los alumnos, **que aprobaron**, fueron a la fiesta.* | 学生们 **（全部）都通过了**，他们去了派对。 |

### 解释性从句的特点
1. 前后都有 **逗号**（读的时候有停顿）。
2. 可以用 ***quien* / *el cual*** 作主语：*Mi hermana, **quien** vive en Londres, viene mañana.*
3. 用 **陈述式**，不用虚拟式（因为说的是已知的事实）。
4. 专有名词和独一无二的东西后面只能用解释性：*Madrid, **que** es la capital, …* / *Mi madre, **que**…*

### 其他关系副词
- *donde*（地点）：*la ciudad **donde** nací*
- *cuando*（时间，多用于解释性）：*En 1492, **cuando** Colón llegó a América, …*
- *como*（方式）：*la manera **como** / en que lo explicó*
- *el día (en) que*：*el día **(en) que** te conocí*`,
      examples: [
        ['Los alumnos que aprobaron fueron a la fiesta.', '通过考试的学生去了派对。'],
        ['Los alumnos, que aprobaron, fueron a la fiesta.', '学生们都通过了考试，然后去了派对。'],
        ['Mi hermana, quien vive en Londres, viene mañana.', '我姐姐住在伦敦，她明天来。'],
        ['En 1969, cuando el hombre llegó a la Luna, mi abuelo tenía veinte años.', '1969 年人类登月时，我爷爷二十岁。'],
        ['Nunca olvidaré el día en que te conocí.', '我永远不会忘记认识你的那一天。'],
      ],
      origin: `西班牙语的逗号 **coma** 来自希腊语 *komma*「切下来的一小段」。在关系从句里，一对逗号就像一把剪刀，把补充说明的部分“剪”出来——去掉它，句子的基本意思不变。

**quien** 只能指人，而且在限定性从句里一般不能直接作主语：❌ *el chico quien vino* ✅ *el chico que vino*。`,
      pitfalls: ['❌ *Mi madre que es médica…*（只有一个妈妈）✅ *Mi madre, que es médica, …*', '❌ *El chico quien vino ayer…* ✅ *El chico que vino ayer…*', '❌ *La razón porque lo hizo…* ✅ *La razón por la que / por la cual lo hizo…*'],
    },
  ],
  words: [
    { id: 'invento', es: 'invento', zh: '发明', pos: 'n', g: 'm', level: 'B2', tags: ['school'], ex: ['La rueda es uno de los inventos más importantes.', '轮子是最重要的发明之一。'] },
    { id: 'inventor', es: 'inventor', zh: '发明家', pos: 'n', g: 'm', f: 'inventora', pl: 'inventores', level: 'B2', tags: ['job'], ex: ['El inventor de la fregona fue un español.', '拖把的发明者是一个西班牙人。'] },
    { id: 'descubrimiento', es: 'descubrimiento', zh: '发现', pos: 'n', g: 'm', level: 'B2', tags: ['school'], ex: ['Fue un descubrimiento por casualidad.', '这是一个偶然的发现。'] },
    { id: 'investigador', es: 'investigador', zh: '研究员', pos: 'n', g: 'm', f: 'investigadora', pl: 'investigadores', level: 'B2', tags: ['job'], ex: ['Trabaja como investigadora en un hospital.', '她在一家医院当研究员。'] },
    { id: 'laboratorio', es: 'laboratorio', zh: '实验室', pos: 'n', g: 'm', level: 'B2', tags: ['school'], ex: ['Pasa el día en el laboratorio.', '他整天待在实验室里。'] },
    { id: 'experimento', es: 'experimento', zh: '实验', pos: 'n', g: 'm', level: 'B2', tags: ['school'], ex: ['El experimento salió mal.', '实验失败了。'] },
    { id: 'avance', es: 'avance', zh: '进展；进步', pos: 'n', g: 'm', level: 'B2', tags: ['school'], ex: ['Es un gran avance para la medicina.', '这是医学上的一大进步。'] },
    { id: 'hallazgo', es: 'hallazgo', zh: '发现（找到的东西）', pos: 'n', g: 'm', level: 'B2', tags: ['school'], ex: ['El hallazgo de los restos fue una sorpresa.', '发现这些遗骸出人意料。'] },
    { id: 'hallar', es: 'hallar', zh: '找到；发现', pos: 'v', level: 'B2', tags: ['verb'], ex: ['Hallaron una solución al problema.', '他们找到了解决问题的办法。'], ety: '拉丁语 afflare「吹向」：猎犬嗅到气味就“找到了”。比 encontrar 更书面。' },
    { id: 'patente', es: 'patente', zh: '专利', pos: 'n', g: 'f', level: 'B2', tags: ['school'], ex: ['Registró la patente en 1956.', '他在 1956 年注册了专利。'] },
    { id: 'patentar', es: 'patentar', zh: '申请专利', pos: 'v', level: 'B2', tags: ['verb'], ex: ['Patentó su invento.', '他为自己的发明申请了专利。'] },
    { id: 'prototipo', es: 'prototipo', zh: '原型；样机', pos: 'n', g: 'm', level: 'B2', tags: ['school'], ex: ['Han presentado el primer prototipo.', '他们展示了第一台样机。'] },
    { id: 'innovacion', es: 'innovación', zh: '创新', pos: 'n', g: 'f', pl: 'innovaciones', level: 'B2', tags: ['school'], ex: ['La empresa invierte mucho en innovación.', '公司在创新上投入很多。'] },
    { id: 'innovador', es: 'innovador', zh: '创新的', pos: 'adj', f: 'innovadora', level: 'B2', tags: ['school'], ex: ['Es un proyecto muy innovador.', '这是一个很有创新性的项目。'] },
    { id: 'tecnologico', es: 'tecnológico', zh: '科技的', pos: 'adj', f: 'tecnológica', level: 'B2', tags: ['school'], ex: ['Vivimos una revolución tecnológica.', '我们正经历一场科技革命。'] },
    { id: 'revolucionario', es: 'revolucionario', zh: '革命性的', pos: 'adj', f: 'revolucionaria', level: 'B2', tags: ['school'], ex: ['Fue un invento revolucionario.', '这是一项革命性的发明。'] },
    { id: 'revolucionar', es: 'revolucionar', zh: '彻底改变', pos: 'v', level: 'B2', tags: ['verb'], ex: ['Internet revolucionó la comunicación.', '互联网彻底改变了通信方式。'] },
    { id: 'ingenieria', es: 'ingeniería', zh: '工程（学）', pos: 'n', g: 'f', level: 'B2', tags: ['school'], ex: ['Estudia Ingeniería Informática.', '他学计算机工程。'] },
    { id: 'biologia', es: 'biología', zh: '生物学', pos: 'n', g: 'f', level: 'B2', tags: ['school'], ex: ['Me encantaba la biología en el instituto.', '中学时我很喜欢生物。'] },
    { id: 'antibiotico', es: 'antibiótico', zh: '抗生素', pos: 'n', g: 'm', level: 'B2', tags: ['body'], ex: ['No tomes antibióticos sin receta.', '没有处方别吃抗生素。'] },
    { id: 'penicilina', es: 'penicilina', zh: '青霉素', pos: 'n', g: 'f', level: 'B2', tags: ['body'], ex: ['Fleming descubrió la penicilina en 1928.', '弗莱明于 1928 年发现了青霉素。'] },
    { id: 'bacteria', es: 'bacteria', zh: '细菌', pos: 'n', g: 'f', level: 'B2', tags: ['body'], ex: ['Algunas bacterias son buenas para la salud.', '有些细菌对健康有益。'] },
    { id: 'virus', es: 'virus', zh: '病毒', pos: 'n', g: 'm', pl: 'virus', level: 'B2', tags: ['body'], ex: ['El ordenador tiene un virus.', '电脑中病毒了。'], ety: '拉丁语 virus「毒液」。' },
    { id: 'celula', es: 'célula', zh: '细胞', pos: 'n', g: 'f', level: 'B2', tags: ['body'], ex: ['El cuerpo humano tiene billones de células.', '人体有数万亿个细胞。'], ety: '拉丁语 cellula「小房间」：显微镜下的细胞像一间间小屋。' },
    { id: 'genetico', es: 'genético', zh: '遗传的；基因的', pos: 'adj', f: 'genética', level: 'B2', tags: ['body'], ex: ['Es una enfermedad genética.', '这是一种遗传病。'] },
    { id: 'microscopio', es: 'microscopio', zh: '显微镜', pos: 'n', g: 'm', level: 'B2', tags: ['school'], ex: ['Lo observamos con el microscopio.', '我们用显微镜观察它。'], emoji: '🔬' },
    { id: 'telescopio', es: 'telescopio', zh: '望远镜', pos: 'n', g: 'm', level: 'B2', tags: ['school'], ex: ['Galileo mejoró el telescopio.', '伽利略改进了望远镜。'], emoji: '🔭', ety: '希腊语 tele「远」+ skopein「看」。' },
    { id: 'satelite', es: 'satélite', zh: '卫星', pos: 'n', g: 'm', level: 'B2', tags: ['weather'], ex: ['La Luna es el satélite de la Tierra.', '月球是地球的卫星。'] },
    { id: 'astronauta', es: 'astronauta', zh: '宇航员', pos: 'n', g: 'mf', level: 'B2', tags: ['job'], ex: ['De niño quería ser astronauta.', '小时候我想当宇航员。'], emoji: '👩‍🚀' },
    { id: 'nave-espacial', es: 'nave espacial', zh: '宇宙飞船', pos: 'n', g: 'f', level: 'B2', tags: ['weather'], ex: ['La nave espacial llegó a Marte.', '宇宙飞船抵达了火星。'] },
    { id: 'orbita', es: 'órbita', zh: '轨道', pos: 'n', g: 'f', level: 'B2', tags: ['weather'], ex: ['El satélite está en órbita.', '卫星已进入轨道。'] },
    { id: 'galaxia', es: 'galaxia', zh: '星系', pos: 'n', g: 'f', level: 'B2', tags: ['weather'], ex: ['Vivimos en la galaxia de la Vía Láctea.', '我们生活在银河系。'], ety: '希腊语 gala「奶」：银河看起来像洒出的牛奶。' },
    { id: 'gravedad', es: 'gravedad', zh: '重力；严重性', pos: 'n', g: 'f', level: 'B2', tags: ['school'], ex: ['Newton explicó la ley de la gravedad.', '牛顿解释了万有引力定律。'] },
    { id: 'atomo', es: 'átomo', zh: '原子', pos: 'n', g: 'm', level: 'B2', tags: ['school'], ex: ['Todo está formado por átomos.', '万物都由原子构成。'], ety: '希腊语 atomos「不可切分的」。' },
    { id: 'electricidad', es: 'electricidad', zh: '电', pos: 'n', g: 'f', level: 'B2', tags: ['home'], ex: ['El precio de la electricidad ha subido.', '电价上涨了。'], ety: '希腊语 elektron「琥珀」：摩擦琥珀会产生静电。' },
    { id: 'imprenta', es: 'imprenta', zh: '印刷术；印刷厂', pos: 'n', g: 'f', level: 'B2', tags: ['school'], ex: ['La imprenta cambió la historia de la cultura.', '印刷术改变了文化史。'] },
    { id: 'brujula', es: 'brújula', zh: '指南针', pos: 'n', g: 'f', level: 'B2', tags: ['travel'], ex: ['La brújula se inventó en China.', '指南针是在中国发明的。'], emoji: '🧭' },
    { id: 'polvora', es: 'pólvora', zh: '火药', pos: 'n', g: 'f', level: 'B2', tags: ['school'], ex: ['La pólvora llegó a Europa desde China.', '火药从中国传到了欧洲。'] },
    { id: 'maquina-de-vapor', es: 'máquina de vapor', zh: '蒸汽机', pos: 'n', g: 'f', level: 'B2', tags: ['school'], ex: ['La máquina de vapor impulsó la Revolución Industrial.', '蒸汽机推动了工业革命。'] },
    { id: 'genio', es: 'genio', zh: '天才；脾气', pos: 'n', g: 'm', level: 'B2', tags: ['people'], ex: ['¡Eres un genio!', '你真是个天才！'], note: 'tener mal genio = 脾气不好。' },
    { id: 'sabio', es: 'sabio', zh: '智者；有学问的', pos: 'adj', f: 'sabia', level: 'B2', tags: ['people'], ex: ['Mi abuela es una mujer muy sabia.', '我奶奶是个很有智慧的女人。'] },
    { id: 'ingenio', es: 'ingenio', zh: '才智；巧思', pos: 'n', g: 'm', level: 'B2', tags: ['people'], ex: ['Con un poco de ingenio, todo tiene solución.', '动点脑筋，什么都能解决。'], note: '《堂吉诃德》的全名是 El ingenioso hidalgo don Quijote de la Mancha。' },
    { id: 'ingenioso', es: 'ingenioso', zh: '巧妙的；机智的', pos: 'adj', f: 'ingeniosa', level: 'B2', tags: ['people'], ex: ['Es una solución muy ingeniosa.', '这是个很巧妙的办法。'] },
    { id: 'aportacion', es: 'aportación', zh: '贡献', pos: 'n', g: 'f', pl: 'aportaciones', level: 'B2', tags: ['school'], ex: ['Su aportación a la ciencia es enorme.', '他对科学的贡献巨大。'] },
    { id: 'contribuir', es: 'contribuir', zh: '贡献；促成', pos: 'v', level: 'B2', tags: ['verb'], ex: ['Todos podemos contribuir.', '我们都能出一份力。'], note: 'contribuyo, contribuyes…' },
    { id: 'premio-nobel', es: 'premio Nobel', zh: '诺贝尔奖', pos: 'n', g: 'm', level: 'B2', tags: ['school'], ex: ['Ramón y Cajal ganó el premio Nobel en 1906.', '拉蒙·伊·卡哈尔于 1906 年获得诺贝尔奖。'] },
    { id: 'cuyo', es: 'cuyo', zh: '……的（关系词，表所属）', pos: 'det', level: 'B2', tags: ['func'], ex: ['Es un autor cuyas novelas me encantan.', '我很喜欢这位作家的小说。'] },
    { id: 'lo-cual', es: 'lo cual', zh: '这（指前面整件事）', pos: 'phr', level: 'B2', tags: ['func'], ex: ['No me llamó, lo cual me extrañó.', '他没给我打电话，这让我很奇怪。'] },
  ],
  sentences: [
    { id: 's1', es: 'Es la vacuna gracias a la cual se salvaron millones de vidas.', zh: '正是这种疫苗挽救了数百万人的生命。', g: ['b2-el-cual'], distract: ['el'] },
    { id: 's2', es: 'Es un invento sin el cual no podríamos vivir.', zh: '这是一项我们离不开的发明。', g: ['b2-el-cual'] },
    { id: 's3', es: 'Hay una teoría según la cual el universo se expande.', zh: '有一种理论认为宇宙在膨胀。', g: ['b2-el-cual'] },
    { id: 's4', es: 'El experimento falló tres veces, lo cual desanimó al equipo.', zh: '实验失败了三次，这让团队很沮丧。', g: ['b2-el-cual'], distract: ['que'] },
    { id: 's5', es: 'Es un científico cuyos descubrimientos cambiaron la medicina.', zh: '他是一位其发现改变了医学的科学家。', g: ['b2-cuyo'], distract: ['cuyo'] },
    { id: 's6', es: 'Conocí a una inventora cuyo invento se vende en todo el mundo.', zh: '我认识一位发明家，她的发明卖到了全世界。', g: ['b2-cuyo'], distract: ['cuya'] },
    { id: 's7', es: 'Es un pueblo en cuyas calles se rodaron muchas películas.', zh: '这是一个很多电影在那里的街道上取景的小镇。', g: ['b2-cuyo'] },
    { id: 's8', es: 'El libro, cuyo autor es anónimo, fue escrito en el siglo XVI.', zh: '这本书作者不详，写于十六世纪。', g: ['b2-cuyo'] },
    { id: 's9', es: 'Los alumnos que aprobaron fueron a la fiesta.', zh: '通过考试的学生去了派对。', g: ['b2-explicativas'] },
    { id: 's10', es: 'Mi hermana, quien vive en Londres, viene mañana.', zh: '我姐姐住在伦敦，她明天来。', g: ['b2-explicativas'] },
    { id: 's11', es: 'Nunca olvidaré el día en que te conocí.', zh: '我永远不会忘记认识你的那一天。', g: ['b2-explicativas'] },
    { id: 's12', es: 'La brújula se inventó en China.', zh: '指南针是在中国发明的。' },
    { id: 's13', es: 'Fleming descubrió la penicilina por casualidad.', zh: '弗莱明偶然发现了青霉素。' },
    { id: 's14', es: 'Es un gran avance para la medicina.', zh: '这是医学上的一大进步。' },
    { id: 's15', es: 'Con un poco de ingenio, todo tiene solución.', zh: '动点脑筋，什么都能解决。' },
    { id: 's16', es: 'No me llamó, lo cual me extrañó mucho.', zh: '他没给我打电话，这让我很奇怪。', g: ['b2-el-cual'] },
    { id: 's17', es: 'Es la razón por la cual dejé el trabajo.', zh: '这就是我辞职的原因。', g: ['b2-el-cual'] },
    { id: 's18', es: 'Madrid, que es la capital, tiene más de tres millones de habitantes.', zh: '首都马德里有三百多万人口。', g: ['b2-explicativas'] },
    { id: 's19', es: 'Es una escritora de cuya obra todo el mundo habla.', zh: '她是一位作品人人谈论的作家。', g: ['b2-cuyo'] },
    { id: 's20', es: 'Su aportación a la ciencia es enorme.', zh: '他对科学的贡献巨大。' },
    { id: 's21', es: 'Todo está formado por átomos.', zh: '万物都由原子构成。' },
    { id: 's22', es: 'Inventó un sistema por medio del cual los barcos se comunicaban.', zh: '他发明了一种让船只相互通信的系统。', g: ['b2-el-cual'] },
    { id: 's23', es: 'Mi madre, que es médica, nunca toma antibióticos.', zh: '我妈妈是医生，她从不吃抗生素。', g: ['b2-explicativas'] },
    { id: 's24', es: '¡Eres un genio!', zh: '你真是个天才！' },
    { id: 's25', es: 'Patentó su invento en 1956.', zh: '他在 1956 年为自己的发明申请了专利。' },
  ],
  cloze: [
    { id: 'c1', text: 'Es una herramienta sin ___ cual no podría trabajar.', answers: ['la'], options: ['la', 'el', 'lo'], zh: '这是一个没有它我就没法工作的工具。', g: ['b2-el-cual'] },
    { id: 'c2', text: 'Existe una teoría según ___ cual los dinosaurios tenían plumas.', answers: ['la'], options: ['la', 'el', 'lo'], zh: '有一种理论认为恐龙有羽毛。', g: ['b2-el-cual'] },
    { id: 'c3', text: 'Son los motivos por los ___ decidí irme.', answers: ['cuales'], options: ['cuales', 'cual', 'que'], zh: '这些就是我决定离开的原因。', g: ['b2-el-cual'] },
    { id: 'c4', text: 'Perdió el tren, ___ cual le obligó a coger un taxi.', answers: ['lo'], options: ['lo', 'el', 'la'], zh: '他错过了火车，于是不得不打车。', g: ['b2-el-cual'] },
    { id: 'c5', text: '___ más me interesa de la ciencia es la astronomía.', answers: ['Lo que'], options: ['Lo que', 'Lo cual', 'El cual'], zh: '科学中我最感兴趣的是天文学。', g: ['b2-el-cual'] },
    { id: 'c6', text: 'Es una escritora ___ novelas se han traducido a treinta idiomas.', answers: ['cuyas'], options: ['cuyas', 'cuya', 'que sus'], zh: '这位作家的小说被译成了三十种语言。', g: ['b2-cuyo'] },
    { id: 'c7', text: 'Ese es el vecino ___ perro ladra toda la noche.', answers: ['cuyo'], options: ['cuyo', 'cuya', 'que su'], zh: '就是那个邻居，他的狗整夜叫。', g: ['b2-cuyo'] },
    { id: 'c8', text: 'Es una ciudad ___ playas son famosas en todo el mundo.', answers: ['cuyas'], options: ['cuyas', 'cuyos', 'cuya'], zh: '这座城市的海滩闻名世界。', g: ['b2-cuyo'] },
    { id: 'c9', text: 'El científico, ___ nombre no recuerdo, ganó el premio.', answers: ['cuyo'], options: ['cuyo', 'cuya', 'que'], zh: '那位科学家——我记不得他的名字了——得了奖。', g: ['b2-cuyo'] },
    { id: 'c10', text: 'Es la profesora de ___ clase te hablé.', answers: ['cuya'], options: ['cuya', 'cuyo', 'la que'], zh: '她就是我跟你说过的那个老师（我跟你说过她的课）。', g: ['b2-cuyo'] },
    { id: 'c11', text: 'Mi padre, ___ trabaja en un laboratorio, sabe mucho de química.', answers: ['que', 'quien'], options: ['que', 'cuyo', 'lo cual'], zh: '我爸爸在实验室工作，他很懂化学。', g: ['b2-explicativas'] },
    { id: 'c12', text: 'Los estudiantes ___ quieran participar deben inscribirse.', answers: ['que'], options: ['que', 'quienes', 'los cuales'], zh: '想参加的学生必须报名。', g: ['b2-explicativas'] },
    { id: 'c13', text: 'Nunca olvidaré el día en ___ nació mi hija.', answers: ['que'], options: ['que', 'cual', 'cuando que'], zh: '我永远不会忘记女儿出生的那一天。', g: ['b2-explicativas'] },
    { id: 'c14', text: 'En 1492, ___ Colón llegó a América, se publicó la primera gramática del castellano.', answers: ['cuando'], options: ['cuando', 'donde', 'que'], zh: '1492 年，哥伦布到达美洲那年，第一部卡斯蒂利亚语语法出版了。', g: ['b2-explicativas'] },
    { id: 'c15', text: 'Esta es la casa ___ nació Picasso.', answers: ['donde', 'en la que'], options: ['donde', 'que', 'cuya'], zh: '这就是毕加索出生的房子。', g: ['b2-explicativas'] },
    { id: 'c16', text: 'Fleming ___ la penicilina en 1928.', answers: ['descubrió'], hint: 'descubrir', zh: '弗莱明于 1928 年发现了青霉素。' },
    { id: 'c17', text: 'Todos podemos ___ a cuidar el planeta.', answers: ['contribuir'], options: ['contribuir', 'contribuyendo', 'contribuimos'], zh: '我们都能为保护地球出一份力。' },
    { id: 'c18', text: 'Es la razón por la ___ no vine.', answers: ['cual', 'que'], options: ['cual', 'cuyo', 'quien'], zh: '这就是我没来的原因。', g: ['b2-el-cual'] },
  ],
  conj: [
    { verbs: ['descubrir', 'inventar', 'hallar', 'contribuir', 'construir', 'demostrar'], tenses: ['pret'], g: 'b2-explicativas' },
    { verbs: ['contribuir', 'demostrar', 'producir', 'investigar'], tenses: ['pres', 'subj'], g: 'b2-el-cual' },
  ],
  dialogues: [
    {
      id: 'b2-u08-d1',
      title: '科学博物馆 · En el museo de la ciencia',
      lines: [
        { who: 'Guía', es: 'Esta sala está dedicada a los inventos sin los cuales nuestra vida sería muy diferente.', zh: '这个展厅展示的是一些发明，没有它们，我们的生活会大不一样。' },
        { who: 'Wang Lei', es: 'Mira, la imprenta. ¿Sabías que en China ya se usaban tipos móviles cuatro siglos antes de Gutenberg?', zh: '看，印刷术。你知道吗？早在古腾堡之前四百年，中国就已经在用活字了。' },
        { who: 'Paula', es: 'No tenía ni idea. ¿Y quién los inventó?', zh: '我完全不知道。那是谁发明的？' },
        { who: 'Wang Lei', es: 'Un artesano llamado Bi Sheng, cuyo nombre casi nadie conoce fuera de China.', zh: '一个叫毕昇的工匠，在中国以外几乎没人知道他的名字。' },
        { who: 'Guía', es: 'Exacto. Y aquí tienen la fregona, un invento español cuyo creador, Manuel Jalón, era ingeniero aeronáutico.', zh: '没错。这里是拖把，一项西班牙发明，它的发明者曼努埃尔·哈隆是一名航空工程师。' },
        { who: 'Paula', es: '¡Ja! Un ingeniero de aviones que inventó la fregona, lo cual demuestra que el ingenio está en todas partes.', zh: '哈！一个飞机工程师发明了拖把，这说明聪明才智无处不在。' },
        { who: 'Guía', es: 'Así es. La siguiente sala, en la cual verán el submarino de Isaac Peral, es mi favorita.', zh: '确实。下一个展厅是我最喜欢的，在那里你们会看到伊萨克·佩拉尔的潜水艇。' },
        { who: 'Wang Lei', es: '¿Un submarino español también? Hoy estoy aprendiendo un montón.', zh: '潜水艇也是西班牙的？今天我学到好多东西。' },
      ],
    },
  ],
  readings: [
    {
      id: 'b2-r15',
      level: 'B2',
      title: 'Ramón y Cajal, el científico que dibujaba neuronas',
      titleZh: '拉蒙·伊·卡哈尔：画神经元的科学家',
      topic: '科学',
      paras: [
        [
          ['Santiago Ramón y Cajal nació en 1852 en un pequeño pueblo de Navarra. De niño quería ser pintor, un sueño al cual su padre, médico, se opuso con firmeza.', '圣地亚哥·拉蒙·伊·卡哈尔 1852 年出生在纳瓦拉的一个小村子里。小时候他想当画家，但他当医生的父亲坚决反对。'],
          ['Finalmente estudió Medicina, aunque nunca dejó de dibujar, lo cual resultaría decisivo para su carrera.', '最终他学了医，但从未停止画画，而这一点后来对他的事业起到了决定性的作用。'],
        ],
        [
          ['Con un microscopio, cuyo precio pagó con sus propios ahorros, empezó a estudiar el sistema nervioso. Descubrió que el cerebro no es una red continua, como se creía entonces, sino que está formado por células independientes: las neuronas.', '他用自己攒钱买来的显微镜开始研究神经系统。他发现，大脑并不像当时人们认为的那样是一张连续的网，而是由一个个独立的细胞——神经元——构成的。'],
          ['Sus dibujos de neuronas, en los cuales combinaba precisión científica y sensibilidad artística, todavía se usan hoy en libros de texto de todo el mundo.', '他画的神经元，将科学的精确与艺术的敏感结合在一起，至今仍被用于世界各地的教科书中。'],
        ],
        [
          ['En 1906 recibió el premio Nobel de Medicina, que compartió con el italiano Camillo Golgi, con quien, curiosamente, no estaba de acuerdo. Hoy se le considera el padre de la neurociencia moderna.', '1906 年，他获得了诺贝尔医学奖，与意大利人卡米洛·高尔基共享——有趣的是，他们两人的观点并不一致。如今他被视为现代神经科学之父。'],
        ],
      ],
      gloss: { 'se opuso': '反对', firmeza: '坚决', decisivo: '决定性的', 'sistema nervioso': '神经系统', continua: '连续的', neuronas: '神经元', precisión: '精确', sensibilidad: '敏感', neurociencia: '神经科学' },
      questions: [
        { type: 'mc', q: '卡哈尔小时候想当什么？', options: ['医生', '画家', '工程师'], answer: 1 },
        { type: 'mc', q: '卡哈尔发现大脑是由什么构成的？', options: ['一张连续的网', '独立的细胞——神经元', '血管'], answer: 1 },
        { type: 'tf', q: '卡哈尔和高尔基的观点完全一致。', answer: false, explain: 'con quien, curiosamente, no estaba de acuerdo' },
      ],
    },
    {
      id: 'b2-r16',
      level: 'B2',
      title: 'La imprenta: un invento con dos padres',
      titleZh: '印刷术：一项有两位“父亲”的发明',
      topic: '历史',
      paras: [
        [
          ['En Europa se suele decir que la imprenta fue inventada por Johannes Gutenberg hacia 1450. Sin embargo, la historia es más larga y más interesante.', '在欧洲，人们常说印刷术是约翰内斯·古腾堡在 1450 年左右发明的。然而，真实的历史更长，也更有意思。'],
        ],
        [
          ['Unos cuatrocientos años antes, en la China de la dinastía Song, un artesano llamado Bi Sheng creó un sistema de tipos móviles de cerámica, gracias al cual se podían componer textos con piezas reutilizables.', '大约四百年前，在中国宋朝，一位名叫毕昇的工匠发明了陶瓷活字系统，借助它，人们可以用可重复使用的字块排版。'],
          ['El problema era el chino, cuya escritura tiene miles de caracteres distintos, lo cual hacía el proceso lento y caro. En cambio, el alfabeto latino, con solo unas pocas decenas de letras, era perfecto para los tipos móviles.', '问题在于中文：中文书写有成千上万个不同的字，这让排版又慢又贵。相反，拉丁字母只有几十个字母，非常适合活字印刷。'],
        ],
        [
          ['Gutenberg, cuya máquina combinaba tipos de metal, una tinta especial y una prensa adaptada de las que se usaban para el vino, consiguió producir libros de forma rápida. Su invento, sin el cual no se entendería el Renacimiento, cambió para siempre la manera en que circulan las ideas.', '古腾堡的印刷机把金属活字、一种特制油墨和由葡萄酒压榨机改造而来的印刷机结合在一起，实现了快速印书。没有他的发明，就无法理解文艺复兴；它永远改变了思想传播的方式。'],
        ],
      ],
      gloss: { 'se suele decir': '人们常说', dinastía: '朝代', artesano: '工匠', 'tipos móviles': '活字', componer: '排版', reutilizables: '可重复使用的', caracteres: '字符', tinta: '墨水', Renacimiento: '文艺复兴', circulan: '流传' },
      questions: [
        { type: 'mc', q: '毕昇的活字是用什么做的？', options: ['金属', '木头', '陶瓷'], answer: 2 },
        { type: 'mc', q: '为什么活字印刷在中国推广较慢？', options: ['没有纸', '汉字数量太多', '政府禁止'], answer: 1 },
        { type: 'tf', q: '古腾堡的印刷机部分改造自葡萄酒压榨机。', answer: true, explain: 'una prensa adaptada de las que se usaban para el vino' },
      ],
    },
  ],
  writing: [{ id: 'w1', prompt: '介绍一项你认为最重要的发明或一位科学家：是谁、什么时候、怎么发明 / 发现的，它为什么重要。至少用两次 cuyo、两次“介词 + el cual”、一次 lo cual，并注意解释性从句的逗号。', words: [130, 220], hints: ['…, cuyo / cuya…, …', 'Es un invento gracias al cual / sin el cual…', '…, lo cual…', 'En mi opinión, …'] }],
}
