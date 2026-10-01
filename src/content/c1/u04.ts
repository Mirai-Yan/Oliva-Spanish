import type { Unit } from '../types'

export const u04: Unit = {
  id: 'c1-u04',
  level: 'C1',
  order: 4,
  title: '学术写作',
  titleEs: 'Escribir con rigor',
  icon: '🎓',
  goals: ['用名词化让文字更紧凑、更书面：aumentar → el aumento de…', '用无人称和“谦虚复数”写学术语言：se ha demostrado, consideramos', '用 cabe señalar、en este sentido、en suma 等组织学术文本', '正确引用资料，避免抄袭'],
  grammar: [
    {
      id: 'c1-nominalizacion',
      title: '名词化：把动作变成“东西”',
      titleEs: 'La nominalización',
      level: 'C1',
      summary: '书面和学术语言常把动词、形容词变成名词：Los precios han aumentado → el aumento de los precios。常见后缀：-ción, -miento, -dad, -ez(a), -ura, -aje, -encia / -ancia。也可以用 el + 原形：el fumar, el saber。',
      body: `### 从句子到名词短语
| 口语（动词） | 书面（名词化） |
|---|---|
| *Los precios **han aumentado**, y eso preocupa.* | *El **aumento** de los precios preocupa.* |
| *Si **se reduce** el consumo, …* | *La **reducción** del consumo…* |
| *Cuando **llegaron** los turistas…* | *Con la **llegada** de los turistas…* |
| *Los resultados son **débiles**.* | *La **debilidad** de los resultados…* |

### 常见名词后缀
| 后缀 | 来自 | 例子 |
|---|---|---|
| *-ción / -sión* | 动词 | *reducir → reducción, decidir → decisión* |
| *-miento* | 动词 | *crecer → crecimiento, conocer → conocimiento* |
| *-dad / -idad* | 形容词 | *débil → debilidad, objetivo → objetividad* |
| *-ez / -eza* | 形容词 | *rápido → rapidez, fuerte → fortaleza* |
| *-ura* | 形容词 | *alto → altura, amargo → amargura* |
| *-encia / -ancia* | 动词 / 形容词 | *preferir → preferencia, tolerante → tolerancia* |
| 无后缀（去词尾） | 动词 | *aumentar → aumento, cambiar → cambio* |

### el + 原形
*El **saber** no ocupa lugar.*（知识不嫌多。）*El **fumar** perjudica la salud.*

### 别过头！
❌ *Se procedió a la realización de un análisis de los datos.*（四个名词，太“重”）
✅ *Se analizaron los datos.*`,
      examples: [
        ['El aumento de los precios preocupa a los consumidores.', '物价上涨让消费者担忧。'],
        ['La reducción del consumo de agua es urgente.', '减少用水迫在眉睫。'],
        ['Con la llegada del verano, la ciudad se llena de turistas.', '夏天一到，城里到处是游客。'],
        ['La debilidad de los resultados obliga a ser prudentes.', '结果说服力不强，因此需要谨慎。'],
        ['El saber no ocupa lugar.', '知识不嫌多。'],
      ],
      origin: `西语的名词后缀大多直接来自拉丁语：
- *-ción* ← *-tionem*：*nationem → nación*（英语 *-tion*）
- *-miento* ← *-mentum*：*fundamentum → fundamento*（英语 *-ment*）
- *-dad* ← *-tatem*：*libertatem → libertad*（英语 *-ty*，*liberty*）

所以如果你认识英语的 *reduction, development, objectivity*，西语的 *reducción, desarrollo, objetividad* 也就不难猜了。`,
      pitfalls: ['❌ *Se llevó a cabo la realización de un estudio.* ✅ *Se realizó un estudio.*：别堆砌名词。', '❌ *el aumento en los precios*（受英语 increase in 影响）✅ *el aumento de los precios*', '❌ *la reduccion* ✅ *la reducción*：-ción 一定带重音。'],
    },
    {
      id: 'c1-academico-impersonal',
      title: '学术语气：无人称、谦虚复数和留有余地',
      titleEs: 'Impersonalidad y atenuación en el discurso académico',
      level: 'C1',
      summary: '学术文本少用“我”：用 se（se ha demostrado, se observa）、谦虚复数（consideramos, como hemos visto）和留有余地的说法（parece que, cabe suponer, podría afirmarse, en cierta medida）。',
      body: `### 不说“我”
| 口语 | 学术语言 |
|---|---|
| *Yo creo que…* | *Cabe pensar que… / Consideramos que…* |
| *He visto que…* | *Se observa que… / Como se ha visto, …* |
| *Está claro que…* | *Los datos indican que… / Se ha demostrado que…* |

### 谦虚复数（*plural de modestia*）
一个作者也用 *nosotros*：*En este trabajo **analizamos**… / Como **hemos señalado** anteriormente, …*

### 留有余地（atenuación）
学术写作要谨慎，不要把话说死：
| 结构 | 例句 |
|---|---|
| *parece que / al parecer* | *Parece que existe una relación entre…* |
| *cabe + 原形* | ***Cabe suponer** que el efecto es temporal.* |
| *podría* + 原形 | ***Podría afirmarse** que…* |
| *en cierta medida / hasta cierto punto* | *Los resultados confirman, **en cierta medida**, la hipótesis.* |
| *tiende a* | *La población urbana **tiende a** envejecer.* |
| *según los datos disponibles* | *Según los datos disponibles, …* |`,
      examples: [
        ['Se ha demostrado que el ejercicio mejora la memoria.', '已有研究证明运动能改善记忆。'],
        ['En este trabajo analizamos el uso del móvil en el aula.', '本文分析了课堂上手机的使用情况。'],
        ['Cabe suponer que el efecto es solo temporal.', '可以推测这种影响只是暂时的。'],
        ['Los resultados confirman, en cierta medida, nuestra hipótesis.', '结果在一定程度上证实了我们的假设。'],
        ['Como hemos señalado anteriormente, la muestra es reducida.', '如前所述，样本量较小。'],
      ],
      origin: `“谦虚复数”在拉丁语里叫 *pluralis modestiae*：作者不说“我”，而说“我们”，把读者一起拉进思考的过程，也显得不那么自以为是。

**cabe** 来自 *caber*「容得下」：*Cabe pensar que…* 字面上是“容得下这样的想法”——也就是“可以这样认为”，比 *creo* 客观得多。`,
      pitfalls: ['❌ *Yo pienso que este estudio es muy bueno.*（学术文本）✅ *Consideramos que el estudio aporta datos relevantes.*', '❌ *Se ha demostrado que es 100 % seguro.*（话说得太死）✅ *Los datos sugieren que es seguro.*', '❌ *Cabe de señalar…* ✅ *Cabe señalar…*'],
    },
    {
      id: 'c1-conectores-academicos',
      title: '学术文本的组织和引用',
      titleEs: 'Organizar el texto y citar fuentes',
      level: 'C1',
      summary: '组织：en primer término, en lo que respecta a, en este sentido, dicho esto, por consiguiente, en suma / en síntesis。引用：según X (2020), tal y como señala X, de acuerdo con los datos de…；直接引用用西班牙引号 « »。',
      body: `### 组织学术文本
| 作用 | 连接词 |
|---|---|
| 引出话题 | *En lo que respecta a… / En cuanto a… / Por lo que se refiere a…* |
| 强调 | *Cabe señalar / destacar que… / Es preciso subrayar que…* |
| 承上启下 | *En este sentido, … / Dicho esto, … / A este respecto, …* |
| 推论 | *Por consiguiente, … / De ello se deduce que… / Así pues, …* |
| 总结 | *En suma, … / En síntesis, … / A modo de conclusión, …* |

### 引用资料
| 方式 | 例句 |
|---|---|
| 间接引用 | ***Según** García (2020), el turismo…* |
| | ***Tal y como señala** López (2018), …* |
| 直接引用 | *Como afirma Pérez, «el lenguaje es un acto social» (2019: 45).* |
| 数据来源 | ***De acuerdo con los datos del** INE, …* |

### 关于抄袭（plagio）
- 引用原话一定要加引号并注明出处。
- 转述（parafrasear）也要注明出处。
- 参考文献（bibliografía）按字母顺序排列。`,
      examples: [
        ['En lo que respecta a la metodología, se realizaron cien encuestas.', '在方法上，我们进行了一百份问卷调查。'],
        ['Cabe señalar que la muestra no es representativa.', '需要指出的是，样本不具代表性。'],
        ['Tal y como señala García (2020), el fenómeno no es nuevo.', '正如加西亚（2020）所指出的，这一现象并不新鲜。'],
        ['De ello se deduce que la hipótesis inicial era correcta.', '由此可推断，最初的假设是正确的。'],
        ['En suma, los datos apuntan a un cambio de tendencia.', '总之，数据显示趋势正在转变。'],
      ],
      origin: `**plagio** 来自拉丁语 *plagium*「拐卖奴隶」。罗马诗人马提亚尔抱怨别人“绑架”了他的诗，把抄袭者称为 *plagiarius*（拐子）——从此，偷别人的文字就成了“拐卖”。

西班牙语的引号 **« »** 叫 *comillas latinas* 或 *angulares*，是皇家学院推荐的首选；英文式的 “ ” 用于引号内再引用。`,
      pitfalls: ['❌ *Según García (2020) dice que…* ✅ *Según García (2020), …* / *García (2020) afirma que…*', '❌ *En base a los datos…* ✅ *A partir de los datos… / Según los datos…*', '❌ *En resumidas palabras* ✅ *En resumidas cuentas* / *En suma*'],
    },
  ],
  words: [
    { id: 'metodologia', es: 'metodología', zh: '方法论；研究方法', pos: 'n', g: 'f', level: 'C1', tags: ['school'], ex: ['La metodología del estudio es muy rigurosa.', '这项研究的方法非常严谨。'] },
    { id: 'muestra', es: 'muestra', zh: '样本；样品；展示', pos: 'n', g: 'f', level: 'C1', tags: ['school'], ex: ['La muestra incluye a 500 estudiantes.', '样本包括 500 名学生。'] },
    { id: 'dato', es: 'dato', zh: '数据；资料', pos: 'n', g: 'm', level: 'C1', tags: ['school'], ex: ['Los datos indican un cambio de tendencia.', '数据显示趋势在变化。'] },
    { id: 'cifra', es: 'cifra', zh: '数字；数额', pos: 'n', g: 'f', level: 'C1', tags: ['school'], ex: ['Las cifras de paro han mejorado.', '失业数据有所好转。'], ety: '阿拉伯语 ṣifr「零」：数字“0”从阿拉伯传入欧洲。英语 cipher、zero 都与之有关。' },
    { id: 'porcentaje', es: 'porcentaje', zh: '百分比', pos: 'n', g: 'm', level: 'C1', tags: ['school'], ex: ['Un alto porcentaje de jóvenes vive con sus padres.', '很大比例的年轻人和父母住在一起。'] },
    { id: 'tasa', es: 'tasa', zh: '比率；税费', pos: 'n', g: 'f', level: 'C1', tags: ['school'], ex: ['La tasa de natalidad sigue bajando.', '出生率持续下降。'] },
    { id: 'indice', es: 'índice', zh: '指数；目录；食指', pos: 'n', g: 'm', level: 'C1', tags: ['school'], ex: ['Consulta el índice del libro.', '查一下书的目录。'] },
    { id: 'tendencia', es: 'tendencia', zh: '趋势', pos: 'n', g: 'f', level: 'C1', tags: ['school'], ex: ['Se observa una tendencia al alza.', '呈上升趋势。'] },
    { id: 'variable', es: 'variable', zh: '变量；多变的', pos: 'n', g: 'f', level: 'C1', tags: ['school'], ex: ['Hay que tener en cuenta varias variables.', '需要考虑多个变量。'] },
    { id: 'conclusion', es: 'conclusión', zh: '结论', pos: 'n', g: 'f', pl: 'conclusiones', level: 'C1', tags: ['school'], ex: ['Llegamos a la conclusión de que…', '我们得出的结论是……'] },
    { id: 'bibliografia', es: 'bibliografía', zh: '参考文献', pos: 'n', g: 'f', level: 'C1', tags: ['school'], ex: ['Incluye la bibliografía al final del trabajo.', '在论文最后附上参考文献。'] },
    { id: 'referencia', es: 'referencia', zh: '参考；提及', pos: 'n', g: 'f', level: 'C1', tags: ['school'], ex: ['Hace referencia a un estudio anterior.', '他提到了之前的一项研究。'] },
    { id: 'autor', es: 'autor', zh: '作者', pos: 'n', g: 'm', f: 'autora', pl: 'autores', level: 'C1', tags: ['school'], ex: ['Según el autor, la crisis empezó antes.', '据作者所言，危机开始得更早。'] },
    { id: 'trabajo-de-fin-de-grado', es: 'trabajo de fin de grado', zh: '本科毕业论文', pos: 'n', g: 'm', level: 'C1', tags: ['school'], ex: ['Estoy escribiendo el trabajo de fin de grado.', '我在写本科毕业论文。'], note: '常缩写为 TFG；硕士论文是 TFM（trabajo de fin de máster）。' },
    { id: 'plagio', es: 'plagio', zh: '抄袭', pos: 'n', g: 'm', level: 'C1', tags: ['school'], ex: ['El plagio está severamente penalizado.', '抄袭会受到严厉处罚。'] },
    { id: 'plagiar', es: 'plagiar', zh: '抄袭', pos: 'v', level: 'C1', tags: ['verb', 'school'], ex: ['Lo acusaron de plagiar su tesis.', '他被指控抄袭博士论文。'] },
    { id: 'redactar', es: 'redactar', zh: '撰写；起草', pos: 'v', level: 'C1', tags: ['verb', 'school'], ex: ['Tengo que redactar un informe.', '我得写一份报告。'] },
    { id: 'borrador', es: 'borrador', zh: '草稿；板擦', pos: 'n', g: 'm', pl: 'borradores', level: 'C1', tags: ['school'], ex: ['Te envío el primer borrador.', '我把初稿发给你。'] },
    { id: 'capitulo', es: 'capítulo', zh: '章节；（剧集）一集', pos: 'n', g: 'm', level: 'C1', tags: ['school'], ex: ['En el segundo capítulo se analizan los datos.', '第二章分析数据。'] },
    { id: 'epigrafe', es: 'epígrafe', zh: '小标题；题词', pos: 'n', g: 'm', level: 'C1', tags: ['school'], ex: ['Cada epígrafe trata un aspecto distinto.', '每个小标题论述一个不同的方面。'] },
    { id: 'nota-a-pie-de-pagina', es: 'nota a pie de página', zh: '脚注', pos: 'n', g: 'f', level: 'C1', tags: ['school'], ex: ['La fuente aparece en una nota a pie de página.', '出处见脚注。'] },
    { id: 'parrafo', es: 'párrafo', zh: '段落', pos: 'n', g: 'm', level: 'C1', tags: ['school'], ex: ['Cada párrafo debe tener una idea principal.', '每段都应该有一个中心思想。'] },
    { id: 'argumentacion', es: 'argumentación', zh: '论证', pos: 'n', g: 'f', level: 'C1', tags: ['school'], ex: ['La argumentación es sólida.', '论证很扎实。'] },
    { id: 'objetividad', es: 'objetividad', zh: '客观性', pos: 'n', g: 'f', level: 'C1', tags: ['school'], ex: ['La objetividad total es imposible.', '完全的客观是不可能的。'] },
    { id: 'subjetivo', es: 'subjetivo', zh: '主观的', pos: 'adj', f: 'subjetiva', level: 'C1', tags: ['school'], ex: ['Es una valoración muy subjetiva.', '这是一个很主观的评价。'] },
    { id: 'sesgo', es: 'sesgo', zh: '偏差；偏见', pos: 'n', g: 'm', level: 'C1', tags: ['school'], ex: ['El estudio tiene un sesgo evidente.', '这项研究有明显的偏差。'] },
    { id: 'inferir', es: 'inferir', zh: '推断', pos: 'v', level: 'C1', tags: ['verb'], ex: ['De los datos se infiere que…', '从数据可以推断……'], note: 'e→ie / i：infiero，infirió。' },
    { id: 'corroborar', es: 'corroborar', zh: '证实', pos: 'v', level: 'C1', tags: ['verb'], ex: ['Los resultados corroboran la hipótesis.', '结果证实了假设。'] },
    { id: 'constatar', es: 'constatar', zh: '确认；证实', pos: 'v', level: 'C1', tags: ['verb'], ex: ['Hemos constatado un aumento de los casos.', '我们确认病例有所增加。'] },
    { id: 'postular', es: 'postular', zh: '主张；提出（假说）', pos: 'v', level: 'C1', tags: ['verb'], ex: ['El autor postula que el cambio es irreversible.', '作者主张这种变化不可逆转。'] },
    { id: 'ahondar', es: 'ahondar', zh: '深入（探讨）', pos: 'v', level: 'C1', tags: ['verb'], ex: ['No vamos a ahondar en este tema.', '我们不打算深入探讨这个话题。'] },
    { id: 'profundizar', es: 'profundizar', zh: '深入研究', pos: 'v', level: 'C1', tags: ['verb'], ex: ['Conviene profundizar en este aspecto.', '这一方面值得深入研究。'] },
    { id: 'sintetizar', es: 'sintetizar', zh: '概括；合成', pos: 'v', level: 'C1', tags: ['verb'], ex: ['Intenta sintetizar las ideas principales.', '试着概括主要观点。'] },
    { id: 'sintesis', es: 'síntesis', zh: '综合；概要', pos: 'n', g: 'f', pl: 'síntesis', level: 'C1', tags: ['school'], ex: ['Haz una síntesis del capítulo.', '写一份这一章的概要。'] },
    { id: 'ambito', es: 'ámbito', zh: '领域；范围', pos: 'n', g: 'm', level: 'C1', tags: ['school'], ex: ['En el ámbito educativo, …', '在教育领域，……'] },
    { id: 'enfoque', es: 'enfoque', zh: '视角；方法', pos: 'n', g: 'm', level: 'C1', tags: ['school'], ex: ['Proponemos un enfoque interdisciplinar.', '我们提出一种跨学科的视角。'] },
    { id: 'marco-teorico', es: 'marco teórico', zh: '理论框架', pos: 'n', g: 'm', level: 'C1', tags: ['school'], ex: ['El primer capítulo presenta el marco teórico.', '第一章介绍理论框架。'] },
    { id: 'estado-de-la-cuestion', es: 'estado de la cuestión', zh: '研究现状（文献综述）', pos: 'n', g: 'm', level: 'C1', tags: ['school'], ex: ['Empieza con un estado de la cuestión.', '从研究现状写起。'] },
    { id: 'novedoso', es: 'novedoso', zh: '新颖的', pos: 'adj', f: 'novedosa', level: 'C1', tags: ['school'], ex: ['Es un planteamiento muy novedoso.', '这是一个很新颖的思路。'] },
    { id: 'aumento', es: 'aumento', zh: '增加', pos: 'n', g: 'm', level: 'C1', tags: ['school'], ex: ['Se registró un aumento del 5 %.', '记录到了 5% 的增长。'] },
    { id: 'reduccion', es: 'reducción', zh: '减少', pos: 'n', g: 'f', pl: 'reducciones', level: 'C1', tags: ['school'], ex: ['La reducción de emisiones es prioritaria.', '减排是当务之急。'] },
    { id: 'disminucion', es: 'disminución', zh: '减少', pos: 'n', g: 'f', pl: 'disminuciones', level: 'C1', tags: ['school'], ex: ['Hubo una ligera disminución de las ventas.', '销量略有下降。'] },
    { id: 'debilidad', es: 'debilidad', zh: '弱点；偏爱', pos: 'n', g: 'f', pl: 'debilidades', level: 'C1', tags: ['feel'], ex: ['Tengo debilidad por el chocolate.', '我对巧克力毫无抵抗力。'] },
    { id: 'fortaleza', es: 'fortaleza', zh: '优点；堡垒；坚强', pos: 'n', g: 'f', level: 'C1', tags: ['feel'], ex: ['¿Cuáles son las fortalezas del proyecto?', '这个项目的优势是什么？'] },
    { id: 'revisar', es: 'revisar', zh: '审阅；检查', pos: 'v', level: 'C1', tags: ['verb'], ex: ['Revisa el texto antes de entregarlo.', '交之前检查一下文章。'] },
    { id: 'cabe-senalar', es: 'cabe señalar', zh: '需要指出的是', pos: 'phr', level: 'C1', tags: ['func'], ex: ['Cabe señalar que los datos son provisionales.', '需要指出的是，数据是初步的。'] },
    { id: 'en-este-sentido', es: 'en este sentido', zh: '在这方面；就此而言', pos: 'phr', level: 'C1', tags: ['func'], ex: ['En este sentido, el estudio aporta datos nuevos.', '在这方面，这项研究提供了新数据。'] },
    { id: 'dicho-esto', es: 'dicho esto', zh: '话虽如此', pos: 'phr', level: 'C1', tags: ['func'], ex: ['Dicho esto, hay que reconocer sus límites.', '话虽如此，也要承认它的局限。'] },
    { id: 'en-suma', es: 'en suma', zh: '总之', pos: 'phr', level: 'C1', tags: ['func'], ex: ['En suma, se trata de un problema complejo.', '总之，这是一个复杂的问题。'] },
    { id: 'a-tenor-de', es: 'a tenor de', zh: '根据', pos: 'phr', level: 'C1', tags: ['func'], ex: ['A tenor de los resultados, conviene repetir el experimento.', '根据结果，最好重做实验。'] },
    { id: 'de-ello-se-deduce', es: 'de ello se deduce', zh: '由此可推断', pos: 'phr', level: 'C1', tags: ['func'], ex: ['De ello se deduce que el método funciona.', '由此可推断该方法有效。'] },
  ],
  sentences: [
    { id: 's1', es: 'El aumento de los precios preocupa a los consumidores.', zh: '物价上涨让消费者担忧。', g: ['c1-nominalizacion'], distract: ['en'] },
    { id: 's2', es: 'La reducción del consumo de agua es urgente.', zh: '减少用水迫在眉睫。', g: ['c1-nominalizacion'] },
    { id: 's3', es: 'Con la llegada del verano, la ciudad se llena de turistas.', zh: '夏天一到，城里到处是游客。', g: ['c1-nominalizacion'] },
    { id: 's4', es: 'El saber no ocupa lugar.', zh: '知识不嫌多。', g: ['c1-nominalizacion'] },
    { id: 's5', es: 'Se ha demostrado que el ejercicio mejora la memoria.', zh: '已有研究证明运动能改善记忆。', g: ['c1-academico-impersonal'] },
    { id: 's6', es: 'En este trabajo analizamos el uso del móvil en el aula.', zh: '本文分析了课堂上手机的使用情况。', g: ['c1-academico-impersonal'] },
    { id: 's7', es: 'Cabe suponer que el efecto es solo temporal.', zh: '可以推测这种影响只是暂时的。', g: ['c1-academico-impersonal'] },
    { id: 's8', es: 'Los resultados confirman, en cierta medida, nuestra hipótesis.', zh: '结果在一定程度上证实了我们的假设。', g: ['c1-academico-impersonal'] },
    { id: 's9', es: 'Cabe señalar que la muestra no es representativa.', zh: '需要指出的是，样本不具代表性。', g: ['c1-conectores-academicos'] },
    { id: 's10', es: 'Tal y como señala García, el fenómeno no es nuevo.', zh: '正如加西亚所指出的，这一现象并不新鲜。', g: ['c1-conectores-academicos'] },
    { id: 's11', es: 'De ello se deduce que la hipótesis inicial era correcta.', zh: '由此可推断，最初的假设是正确的。', g: ['c1-conectores-academicos'] },
    { id: 's12', es: 'En suma, los datos apuntan a un cambio de tendencia.', zh: '总之，数据显示趋势正在转变。', g: ['c1-conectores-academicos'] },
    { id: 's13', es: 'Te envío el primer borrador del trabajo.', zh: '我把论文初稿发给你。' },
    { id: 's14', es: 'El plagio está severamente penalizado.', zh: '抄袭会受到严厉处罚。' },
    { id: 's15', es: 'La tasa de natalidad sigue bajando.', zh: '出生率持续下降。' },
    { id: 's16', es: 'Tengo debilidad por el chocolate.', zh: '我对巧克力毫无抵抗力。' },
    { id: 's17', es: 'Se analizaron los datos de quinientos estudiantes.', zh: '分析了五百名学生的数据。', g: ['c1-nominalizacion'] },
    { id: 's18', es: 'Como hemos señalado anteriormente, la muestra es reducida.', zh: '如前所述，样本量较小。', g: ['c1-academico-impersonal'] },
    { id: 's19', es: 'En lo que respecta a la metodología, se realizaron cien encuestas.', zh: '在方法上，进行了一百份问卷调查。', g: ['c1-conectores-academicos'] },
    { id: 's20', es: 'Dicho esto, hay que reconocer sus límites.', zh: '话虽如此，也要承认它的局限。', g: ['c1-conectores-academicos'] },
    { id: 's21', es: 'La población urbana tiende a envejecer.', zh: '城市人口趋于老龄化。', g: ['c1-academico-impersonal'] },
    { id: 's22', es: 'Cada párrafo debe tener una idea principal.', zh: '每段都应有一个中心思想。' },
    { id: 's23', es: 'El estudio tiene un sesgo evidente.', zh: '这项研究有明显的偏差。' },
    { id: 's24', es: 'Conviene profundizar en este aspecto.', zh: '这一方面值得深入研究。' },
    { id: 's25', es: 'El fumar perjudica seriamente la salud.', zh: '吸烟严重危害健康。', g: ['c1-nominalizacion'] },
  ],
  cloze: [
    { id: 'c1', text: 'Los salarios han subido. → La ___ de los salarios.', answers: ['subida'], options: ['subida', 'subición', 'subimiento'], zh: '工资上涨。', g: ['c1-nominalizacion'] },
    { id: 'c2', text: 'El paro ha disminuido. → La ___ del paro.', answers: ['disminución'], options: ['disminución', 'disminuimiento', 'disminuida'], zh: '失业率下降。', g: ['c1-nominalizacion'] },
    { id: 'c3', text: 'La economía crece. → El ___ de la economía.', answers: ['crecimiento'], options: ['crecimiento', 'crecición', 'crecida'], zh: '经济增长。', g: ['c1-nominalizacion'] },
    { id: 'c4', text: 'El proceso es lento. → La ___ del proceso.', answers: ['lentitud'], options: ['lentitud', 'lentez', 'lentidad'], zh: '过程很慢。', g: ['c1-nominalizacion'] },
    { id: 'c5', text: 'Los datos son escasos. → La ___ de datos.', answers: ['escasez'], options: ['escasez', 'escaseza', 'escasidad'], zh: '数据稀缺。', g: ['c1-nominalizacion'] },
    { id: 'c6', text: 'Se ___ que existe una relación entre ambos factores.', answers: ['observa'], options: ['observa', 'observan', 'observo'], zh: '可以观察到两个因素之间存在关联。', g: ['c1-academico-impersonal'] },
    { id: 'c7', text: 'Cabe ___ que los resultados son provisionales.', answers: ['señalar'], options: ['señalar', 'de señalar', 'señala'], zh: '需要指出的是，结果是初步的。', g: ['c1-academico-impersonal'] },
    { id: 'c8', text: 'Los datos confirman, en cierta ___, la hipótesis.', answers: ['medida'], options: ['medida', 'manera', 'parte de'], zh: '数据在一定程度上证实了假设。', g: ['c1-academico-impersonal'] },
    { id: 'c9', text: 'Como ___ visto en el capítulo anterior, …', answers: ['hemos'], options: ['hemos', 'he', 'han'], zh: '正如我们在上一章所见……', g: ['c1-academico-impersonal'] },
    { id: 'c10', text: 'El consumo de azúcar ___ a aumentar en los jóvenes.', answers: ['tiende'], options: ['tiende', 'tienda', 'tiene'], zh: '年轻人的糖摄入量呈上升趋势。', g: ['c1-academico-impersonal'] },
    { id: 'c11', text: 'En lo que ___ a la muestra, participaron 200 personas.', answers: ['respecta'], options: ['respecta', 'respeta', 'refiere'], zh: '至于样本，共有 200 人参与。', g: ['c1-conectores-academicos'] },
    { id: 'c12', text: '___ y como señala Pérez (2019), el problema es estructural.', answers: ['Tal'], options: ['Tal', 'Así', 'Como'], zh: '正如佩雷斯（2019）所指出的，这个问题是结构性的。', g: ['c1-conectores-academicos'] },
    { id: 'c13', text: 'De ello se ___ que el tratamiento es eficaz.', answers: ['deduce'], options: ['deduce', 'deducen', 'deduzca'], zh: '由此可推断该疗法有效。', g: ['c1-conectores-academicos'] },
    { id: 'c14', text: 'En ___, se trata de un fenómeno complejo.', answers: ['suma'], options: ['suma', 'total de', 'final'], zh: '总之，这是一个复杂的现象。', g: ['c1-conectores-academicos'] },
    { id: 'c15', text: '___ los datos del INE, la población ha crecido.', answers: ['Según'], options: ['Según', 'En base a', 'Por'], zh: '根据国家统计局的数据，人口增长了。', g: ['c1-conectores-academicos'] },
    { id: 'c16', text: 'Si copias sin citar, cometes ___.', answers: ['plagio'], options: ['plagio', 'sesgo', 'borrador'], zh: '不注明出处就抄，就是抄袭。' },
    { id: 'c17', text: 'Los resultados ___ la hipótesis inicial.', answers: ['corroboran'], options: ['corroboran', 'corroboren', 'corroborando'], zh: '结果证实了最初的假设。' },
    { id: 'c18', text: 'Antes de entregarlo, ___ el texto con calma.', answers: ['revisa'], options: ['revisa', 'revises', 'revisando'], zh: '交之前好好检查一下文章。' },
  ],
  conj: [
    { verbs: ['inferir', 'deducir', 'concluir', 'constatar', 'profundizar', 'sintetizar'], tenses: ['pres', 'pret'], g: 'c1-academico-impersonal' },
    { verbs: ['analizar', 'demostrar', 'observar', 'señalar'], tenses: ['pperf'], g: 'c1-academico-impersonal' },
  ],
  dialogues: [
    {
      id: 'c1-u04-d1',
      title: '和导师谈论文 · En la tutoría',
      lines: [
        { who: 'Tutora', es: 'He leído tu borrador. El contenido es interesante, pero el estilo todavía es demasiado oral.', zh: '我看了你的初稿。内容很有意思，但文风还是太口语化了。' },
        { who: 'Mei', es: '¿Qué quiere decir exactamente?', zh: '您具体指什么？' },
        { who: 'Tutora', es: 'Por ejemplo, aquí escribes «yo creo que los jóvenes usan mucho el móvil». En un trabajo académico, mejor: «los datos sugieren un uso intensivo del móvil entre los jóvenes».', zh: '比如这里你写的是“我认为年轻人用手机很多”。在学术论文里，最好写成：“数据表明年轻人大量使用手机。”' },
        { who: 'Mei', es: 'Entiendo: menos «yo» y más nominalización.', zh: '明白了：少用“我”，多用名词化。' },
        { who: 'Tutora', es: 'Exacto, pero sin exagerar. Y otra cosa: en el segundo capítulo citas a varios autores sin indicar la fuente. Eso podría considerarse plagio.', zh: '没错，但别过头。还有一点：第二章你引用了几位作者，却没注明出处。这可能会被视为抄袭。' },
        { who: 'Mei', es: '¡Uy! No era mi intención. Lo corrijo hoy mismo.', zh: '哎呀！我不是有意的。我今天就改。' },
        { who: 'Tutora', es: 'Bien. Dicho esto, la estructura es sólida y la conclusión está bien argumentada. Envíame la nueva versión cuando la tengas.', zh: '好。话虽如此，你的结构很扎实，结论也论证得很好。改好后把新版本发给我。' },
        { who: 'Mei', es: 'Muchas gracias por sus comentarios. Se la mando el viernes.', zh: '非常感谢您的意见。我周五发给您。' },
      ],
    },
  ],
  readings: [
    {
      id: 'c1-r07',
      level: 'C1',
      title: 'Del habla a la escritura académica',
      titleZh: '从口语到学术写作',
      topic: '学术写作',
      paras: [
        [
          ['Escribir un trabajo académico en español no consiste únicamente en dominar la gramática. Requiere, además, adoptar un registro específico, caracterizado por la precisión, la objetividad y la cohesión.', '用西班牙语写学术论文，不仅仅在于掌握语法。它还要求采用一种特定的语体，其特点是准确、客观和连贯。'],
        ],
        [
          ['Uno de los rasgos más característicos de este registro es la nominalización. En lugar de «los precios subieron y la gente compró menos», el texto académico prefiere «la subida de los precios provocó una disminución del consumo». La información es la misma, pero se presenta de forma más condensada.', '这种语体最典型的特征之一是名词化。学术文本不说“价格上涨了，人们买得少了”，而更喜欢说“价格的上涨导致了消费的下降”。信息相同，但表达得更紧凑。'],
          ['Otro rasgo es la atenuación: el investigador evita las afirmaciones categóricas y prefiere fórmulas como «los resultados parecen indicar» o «cabe suponer». No se trata de falta de seguridad, sino de honestidad intelectual.', '另一个特征是语气的缓和：研究者避免绝对化的断言，更喜欢“结果似乎表明”“可以推测”这样的说法。这并非缺乏自信，而是一种学术上的诚实。'],
        ],
        [
          ['Por último, la escritura académica exige citar con rigor. Toda idea ajena debe ir acompañada de su fuente, ya sea mediante una cita literal entre comillas o mediante una paráfrasis. En suma, escribir bien en la universidad es, ante todo, una cuestión de respeto: hacia el lector y hacia el trabajo de otros.', '最后，学术写作要求严谨地引用。任何他人的观点都必须注明出处，不论是加引号的直接引用，还是转述。总之，在大学里写好文章，归根结底是一种尊重：尊重读者，也尊重他人的劳动。'],
        ],
      ],
      gloss: { registro: '语体', caracterizado: '以……为特征', cohesión: '连贯', rasgos: '特征', condensada: '紧凑的', atenuación: '缓和', categóricas: '绝对的', ajena: '他人的', literal: '逐字的', paráfrasis: '转述' },
      questions: [
        { type: 'mc', q: '学术语体的三个特点是什么？', options: ['生动、幽默、简短', '准确、客观、连贯', '口语化、个人化、情绪化'], answer: 1 },
        { type: 'mc', q: '研究者为什么用“结果似乎表明”这样的说法？', options: ['缺乏自信', '出于学术上的诚实', '为了凑字数'], answer: 1 },
        { type: 'tf', q: '文章认为转述别人的观点不需要注明出处。', answer: false, explain: 'ya sea mediante una cita literal… o mediante una paráfrasis' },
      ],
    },
    {
      id: 'c1-r08',
      level: 'C1',
      title: 'Resumen: el móvil en el aula',
      titleZh: '论文摘要：课堂上的手机',
      topic: '学术',
      paras: [
        [
          ['El presente trabajo analiza el impacto del uso del teléfono móvil en el rendimiento académico de estudiantes universitarios. Para ello, se diseñó una encuesta que fue respondida por una muestra de 320 alumnos de tres facultades.', '本文分析了手机使用对大学生学业成绩的影响。为此，我们设计了一份问卷，由来自三个学院的 320 名学生作答。'],
        ],
        [
          ['Los resultados obtenidos parecen indicar una relación negativa entre el tiempo dedicado a las redes sociales durante las clases y las calificaciones finales. No obstante, cabe señalar que dicha relación no implica necesariamente causalidad.', '所得结果似乎表明，课堂上使用社交网络的时间与期末成绩之间存在负相关。不过，需要指出的是，这种相关性并不一定意味着因果关系。'],
          ['Asimismo, se constató que el uso del móvil con fines académicos, como la consulta de diccionarios o bases de datos, no tiene efectos negativos e incluso podría resultar beneficioso.', '此外，研究还证实，出于学习目的使用手机，例如查词典或数据库，并没有负面影响，甚至可能有益。'],
        ],
        [
          ['En suma, el estudio sugiere que el problema no reside en el dispositivo en sí, sino en el uso que se hace de él. A tenor de estos datos, se recomienda a las universidades promover un uso responsable en lugar de recurrir a la prohibición.', '总之，研究表明问题不在于设备本身，而在于如何使用它。根据这些数据，建议各大学提倡负责任的使用，而不是诉诸禁止。'],
        ],
      ],
      gloss: { impacto: '影响', rendimiento: '成绩', diseñó: '设计', causalidad: '因果关系', 'con fines': '出于……目的', 'bases de datos': '数据库', reside: '在于', dispositivo: '设备', 'en sí': '本身' },
      questions: [
        { type: 'mc', q: '研究样本有多少名学生？', options: ['120', '320', '3200'], answer: 1 },
        { type: 'tf', q: '作者认为社交网络使用和成绩之间一定存在因果关系。', answer: false, explain: 'dicha relación no implica necesariamente causalidad' },
        { type: 'mc', q: '研究建议大学怎么做？', options: ['完全禁止手机', '提倡负责任地使用', '给每个学生发手机'], answer: 1 },
      ],
    },
  ],
  writing: [{ id: 'w1', prompt: '为一项（可以是虚构的）研究写一段 150–200 词的学术摘要：研究对象、方法、主要结果、结论。要求：用第一人称复数或无人称结构，至少三处名词化，至少两处缓和语气（parece, cabe suponer, en cierta medida…），并用 en suma / a tenor de 等连接词。', words: [150, 220], hints: ['El presente trabajo analiza…', 'Para ello, se… / Se realizó…', 'Los resultados parecen indicar que…; no obstante, cabe señalar que…', 'En suma, …'] }],
}
