import type { Unit } from '../types'

export const u12: Unit = {
  id: 'b2-u12',
  level: 'B2',
  order: 12,
  title: '未来的工作',
  titleEs: 'El trabajo del futuro',
  icon: '🤖',
  goals: ['用 venir / andar + 副动词、tener + 过去分词 等短语表达细微的体貌意义', '用 echarse a、romper a、llegar a、quedar en 等短语', '按 DELE B2 的要求写一篇结构完整的议论文', '讨论远程办公、人工智能和工作的未来'],
  grammar: [
    {
      id: 'b2-perifrasis-gerundio',
      title: '副动词短语：venir, andar, ir, llevar, seguir',
      titleEs: 'Perífrasis de gerundio',
      level: 'B2',
      summary: 'venir + 副动词：从过去一直持续到现在、不断积累（Vengo diciéndolo desde hace años）。andar + 副动词：到处、反复地做（常带贬义：Anda diciendo que…）。ir + 副动词：逐渐。llevar + 时间 + 副动词：已经做了多久。seguir + 副动词：仍在。',
      body: `### 五个“动作在进行”的短语
| 短语 | 细微含义 | 例句 |
|---|---|---|
| *estar* + 副动词 | 此刻正在 | *Estoy escribiendo un informe.* |
| ***venir*** + 副动词 | 从过去一直到现在，不断积累 | ***Vengo diciendo** desde hace años que esto iba a pasar.* |
| ***andar*** + 副动词 | 东奔西走地做；常带贬义 | *Anda **diciendo** por ahí que lo van a despedir.* |
| *ir* + 副动词 | 一点一点地 | *Poco a poco **vamos adaptándonos** al teletrabajo.* |
| *llevar* + 时间 + 副动词 | 已经……多久了 | ***Llevo** dos años **trabajando** desde casa.* |
| *seguir* + 副动词 | 还在、仍然 | *A pesar de todo, **sigue confiando** en él.* |

### venir + 副动词 常见于新闻和正式文体
*Los expertos **vienen advirtiendo** de este problema desde 2010.*（专家们自 2010 年以来就一直在警告这个问题。）

### andar + 副动词 常带“到处、不正经”的意味
*¿Qué **andas haciendo**?*（你在瞎忙什么呢？）
*Anda **buscando** trabajo desde enero.*（他从一月起就一直在到处找工作。）`,
      examples: [
        ['Vengo diciendo desde hace años que esto iba a pasar.', '我好几年前就一直在说这事迟早会发生。'],
        ['Los expertos vienen advirtiendo de este problema desde hace tiempo.', '专家们很早以前就一直在警告这个问题。'],
        ['Anda diciendo por ahí que lo van a despedir.', '他到处跟人说他要被炒鱿鱼了。'],
        ['Poco a poco vamos adaptándonos al teletrabajo.', '我们正一点点适应远程办公。'],
        ['Llevo dos años trabajando desde casa.', '我在家办公已经两年了。'],
      ],
      origin: `拉丁语没有专门的“进行时”。西班牙语用 **移动动词**（*ir, venir, andar*）加副动词，创造出了一整套表示“动作怎样展开”的说法：
- *ir* =“往前走着做”→ 逐渐
- *venir* =“一路走过来地做”→ 从过去持续到现在
- *andar* =“四处走着做”→ 到处、反复

把时间想象成空间里的移动——很多语言都有这种隐喻，中文的“走过来”“一路走来”也是。`,
      pitfalls: ['❌ *Vengo de decirte que…*（模仿法语 je viens de）✅ *Acabo de decirte que…*：venir de + 原形 是“刚从……回来”。', '❌ *Llevo dos años trabajo aquí.* ✅ *Llevo dos años trabajando aquí.*', '❌ *Vengo diciéndote ayer.* ✅ *Te lo dije ayer.*：venir + 副动词 表示持续一段时间，不用于单一时刻。'],
    },
    {
      id: 'b2-perifrasis-infinitivo',
      title: '原形短语和分词短语',
      titleEs: 'Perífrasis de infinitivo y de participio',
      level: 'B2',
      summary: 'echarse a / romper a + 原形：突然开始（哭、笑、跑）。llegar a + 原形：甚至到了……地步。acabar por + 原形：最终。quedar en + 原形：约定。tener + 过去分词（与宾语一致）：已积累了。dar por + 过去分词：视为已……',
      body: `### 原形短语
| 短语 | 意思 | 例句 |
|---|---|---|
| *echarse a* + 原形 | 突然开始（*reír, llorar, correr, temblar*） | *Al oír la noticia, **se echó a llorar**.* |
| *romper a* + 原形 | 突然爆发（*llorar, reír, hablar*） | *El bebé **rompió a llorar**.* |
| *llegar a* + 原形 | 甚至到了……的程度 | *Trabajaba tanto que **llegó a dormir** en la oficina.* |
| *acabar por* + 原形 | 最终（经过一番过程） | *Al final **acabó por aceptar** la oferta.* |
| *quedar en* + 原形 | 约好、说定 | ***Quedamos en vernos** el lunes.* |
| *estar por* + 原形 | 还没有……；（口语）很想 | *La reunión **está por** confirmar.* |

### 分词短语：分词要和宾语一致！
| 短语 | 意思 | 例句 |
|---|---|---|
| *tener* + 过去分词 | 已经（积累地）做了 | ***Tengo leídas** treinta páginas.* / *Te **tengo dicho** que…*（我跟你说过多少遍了） |
| *llevar* + 过去分词 | 已经做了（多少） | ***Llevo corregidos** veinte exámenes.* |
| *dar por* + 过去分词 | 认为……已经…… | ***Doy por terminada** la reunión.* |
| *dejar* + 过去分词 | 使处于……状态 | ***Dejé preparada** la cena.* |`,
      examples: [
        ['Al oír la noticia, se echó a llorar.', '一听到这个消息，她就哭了起来。'],
        ['Trabajaba tanto que llegó a dormir en la oficina.', '他工作拼到甚至睡在了办公室。'],
        ['Quedamos en vernos el lunes para hablarlo.', '我们说好周一见面谈这事。'],
        ['Llevo corregidos veinte exámenes y me quedan diez.', '我已经改了二十份试卷，还剩十份。'],
        ['Si nadie tiene más preguntas, doy por terminada la reunión.', '如果没有别的问题，会议就到此结束。'],
      ],
      origin: `**echar** 来自拉丁语 *iactare*「扔」：*echarse a correr* =“把自己扔进奔跑里”，所以有“突然、猛地”的意味。

**romper a llorar** 和英语 *burst into tears*（“爆”出眼泪）想法一样：情绪像东西一样突然“破开”。`,
      pitfalls: ['❌ *Se echó a reírse.* ✅ *Se echó a reír.*', '❌ *Tengo leído tres libros.* ✅ *Tengo leídos tres libros.*：分词和宾语一致。', '❌ *Quedamos de vernos.*（墨西哥等地口语）在西班牙说 ✅ *Quedamos en vernos.*'],
    },
    {
      id: 'b2-argumentacion',
      title: '写议论文：结构和表达',
      titleEs: 'El texto argumentativo',
      level: 'B2',
      summary: '引言（提出话题和观点）→ 论点（至少两个，配例子）→ 反方观点及反驳（Si bien es cierto que…, no lo es menos que…）→ 结论（En definitiva…）。DELE B2 写作二一般要求 150–180 词。',
      body: `### 四段结构
| 部分 | 作用 | 常用表达 |
|---|---|---|
| **引言** | 引出话题、表明立场 | *Hoy en día… / En los últimos años, cada vez más… / Se trata de un tema que genera mucha polémica.* |
| **论点** | 支持你的观点 | *En primer lugar, … Además, … Un claro ejemplo de ello es… / Cabe destacar que…* |
| **反方与反驳** | 承认对方，再反驳 | *Hay quien sostiene que… Sin embargo, … / **Si bien es cierto que** el teletrabajo aísla, **no lo es menos que** ahorra tiempo.* |
| **结论** | 总结、重申 | *En definitiva, … / A modo de conclusión, … / Todo ello me lleva a pensar que…* |

### 让论证更有分量
- 表示观点：*Considero que… / Desde mi punto de vista, … / Estoy convencido de que…*
- 表示让步：*Es verdad que…, pero… / Aunque…*
- 举例：*Así, por ejemplo, … / Tal es el caso de…*
- 强调：*Conviene tener en cuenta que… / No hay que olvidar que…*

### 写作小贴士
1. 每段一个中心意思。
2. 用连接词，但别“堆砌”。
3. 用不同的结构表达观点：*creo que* 用一次就够了。`,
      examples: [
        ['Hoy en día, cada vez más empresas permiten el teletrabajo.', '如今，越来越多的公司允许远程办公。'],
        ['Hay quien sostiene que la inteligencia artificial destruirá empleo.', '有人认为人工智能会消灭就业岗位。'],
        ['Si bien es cierto que el teletrabajo aísla, no lo es menos que ahorra mucho tiempo.', '远程办公的确让人孤立，但同样不可否认，它节省了大量时间。'],
        ['Conviene tener en cuenta que no todos los trabajos pueden hacerse desde casa.', '需要考虑到，并不是所有工作都能在家完成。'],
        ['En definitiva, la tecnología no es buena ni mala: depende de cómo la usemos.', '总而言之，科技本身无所谓好坏：关键在于我们怎么用。'],
      ],
      origin: `**argumento** 来自拉丁语 *arguere*「使清楚、证明」。英语 *argue* 同源——不过西语的 *argumento* 是“论据”，而“吵架”是 *discusión*。

**debate** 来自法语 *débattre*：*de* + *battre*「打」——辩论就是用语言“交锋”。`,
      pitfalls: ['❌ *En mi opinión personal, yo creo que…*（重复）✅ *En mi opinión, …* / *Creo que…*', '❌ *En conclusión final…* ✅ *En conclusión, …*', '❌ *A nivel de empresa…*（滥用）✅ *En las empresas…*'],
    },
  ],
  words: [
    { id: 'teletrabajo', es: 'teletrabajo', zh: '远程办公', pos: 'n', g: 'm', level: 'B2', tags: ['job'], ex: ['El teletrabajo se extendió mucho en 2020.', '2020 年远程办公大规模普及。'] },
    { id: 'trabajar-en-remoto', es: 'trabajar en remoto', zh: '远程工作', pos: 'phr', level: 'B2', tags: ['job'], ex: ['Trabajo en remoto tres días a la semana.', '我每周远程工作三天。'] },
    { id: 'presencial', es: 'presencial', zh: '线下的；到场的', pos: 'adj', level: 'B2', tags: ['job'], ex: ['Las clases son presenciales.', '课程是线下的。'] },
    { id: 'hibrido', es: 'híbrido', zh: '混合的', pos: 'adj', f: 'híbrida', level: 'B2', tags: ['job'], ex: ['Tenemos un modelo de trabajo híbrido.', '我们采用混合办公模式。'] },
    { id: 'conciliar', es: 'conciliar', zh: '兼顾；调和', pos: 'v', level: 'B2', tags: ['verb', 'job'], ex: ['Es difícil conciliar el trabajo y la familia.', '工作和家庭很难兼顾。'], note: 'conciliar el sueño = 入睡。' },
    { id: 'conciliacion', es: 'conciliación', zh: '（工作与家庭的）平衡', pos: 'n', g: 'f', level: 'B2', tags: ['job'], ex: ['La empresa apuesta por la conciliación.', '公司重视员工工作与家庭的平衡。'] },
    { id: 'horario-flexible', es: 'horario flexible', zh: '弹性工作时间', pos: 'n', g: 'm', level: 'B2', tags: ['job'], ex: ['Tengo horario flexible.', '我的工作时间是弹性的。'] },
    { id: 'productividad', es: 'productividad', zh: '生产率；效率', pos: 'n', g: 'f', level: 'B2', tags: ['job'], ex: ['La productividad ha aumentado.', '生产率提高了。'] },
    { id: 'productivo', es: 'productivo', zh: '高效的；有成效的', pos: 'adj', f: 'productiva', level: 'B2', tags: ['job'], ex: ['Hoy ha sido un día muy productivo.', '今天效率很高。'] },
    { id: 'rendimiento', es: 'rendimiento', zh: '表现；效率', pos: 'n', g: 'm', level: 'B2', tags: ['job'], ex: ['Su rendimiento ha mejorado.', '他的表现有所提高。'] },
    { id: 'automatizacion', es: 'automatización', zh: '自动化', pos: 'n', g: 'f', level: 'B2', tags: ['job'], ex: ['La automatización cambiará muchos empleos.', '自动化会改变很多工作。'] },
    { id: 'automatizar', es: 'automatizar', zh: '使自动化', pos: 'v', level: 'B2', tags: ['verb', 'job'], ex: ['Han automatizado la fábrica.', '工厂实现了自动化。'] },
    { id: 'inteligencia-artificial', es: 'inteligencia artificial', zh: '人工智能', pos: 'n', g: 'f', level: 'B2', tags: ['school'], ex: ['La inteligencia artificial ya traduce textos.', '人工智能已经能翻译文本了。'] },
    { id: 'algoritmo', es: 'algoritmo', zh: '算法', pos: 'n', g: 'm', level: 'B2', tags: ['school'], ex: ['El algoritmo decide qué vídeos ves.', '算法决定你看到哪些视频。'], ety: '来自九世纪波斯数学家花拉子米（al-Khwārizmī）的名字。' },
    { id: 'digital', es: 'digital', zh: '数字的', pos: 'adj', level: 'B2', tags: ['school'], ex: ['Vivimos en la era digital.', '我们生活在数字时代。'] },
    { id: 'digitalizacion', es: 'digitalización', zh: '数字化', pos: 'n', g: 'f', level: 'B2', tags: ['school'], ex: ['La digitalización de la administración avanza.', '政务数字化在推进。'] },
    { id: 'brecha-digital', es: 'brecha digital', zh: '数字鸿沟', pos: 'n', g: 'f', level: 'B2', tags: ['school'], ex: ['Hay que reducir la brecha digital.', '要缩小数字鸿沟。'] },
    { id: 'competencia', es: 'competencia', zh: '竞争；能力', pos: 'n', g: 'f', level: 'B2', tags: ['job'], ex: ['Hay mucha competencia para ese puesto.', '那个职位竞争很激烈。'], note: 'competencias digitales = 数字技能。' },
    { id: 'reciclarse', es: 'reciclarse', zh: '再培训；更新知识', pos: 'v', level: 'B2', tags: ['verb', 'job'], ex: ['Los trabajadores tienen que reciclarse.', '员工必须更新技能。'] },
    { id: 'precariedad', es: 'precariedad', zh: '（工作）不稳定', pos: 'n', g: 'f', level: 'B2', tags: ['job'], ex: ['La precariedad laboral afecta a los jóvenes.', '工作不稳定影响着年轻人。'] },
    { id: 'precario', es: 'precario', zh: '不稳定的；朝不保夕的', pos: 'adj', f: 'precaria', level: 'B2', tags: ['job'], ex: ['Tiene un empleo muy precario.', '他的工作很不稳定。'] },
    { id: 'contrato-indefinido', es: 'contrato indefinido', zh: '无固定期限合同', pos: 'n', g: 'm', level: 'B2', tags: ['job'], ex: ['Por fin tengo un contrato indefinido.', '我终于签了无固定期限合同。'] },
    { id: 'contrato-temporal', es: 'contrato temporal', zh: '临时合同', pos: 'n', g: 'm', level: 'B2', tags: ['job'], ex: ['Encadena contratos temporales desde hace años.', '他这些年一直在签一个接一个的临时合同。'] },
    { id: 'desigualdad', es: 'desigualdad', zh: '不平等', pos: 'n', g: 'f', pl: 'desigualdades', level: 'B2', tags: ['city'], ex: ['La desigualdad ha aumentado.', '不平等加剧了。'] },
    { id: 'globalizacion', es: 'globalización', zh: '全球化', pos: 'n', g: 'f', level: 'B2', tags: ['city'], ex: ['La globalización tiene ventajas e inconvenientes.', '全球化有利也有弊。'] },
    { id: 'deslocalizacion', es: 'deslocalización', zh: '产业外迁', pos: 'n', g: 'f', level: 'B2', tags: ['job'], ex: ['La deslocalización cerró muchas fábricas.', '产业外迁使很多工厂关闭了。'] },
    { id: 'sostener', es: 'sostener', zh: '主张；支撑', pos: 'v', level: 'B2', tags: ['verb'], ex: ['Hay quien sostiene que es una moda.', '有人认为这只是一时的潮流。'], note: '变位同 tener：sostengo。' },
    { id: 'argumentar', es: 'argumentar', zh: '论证', pos: 'v', level: 'B2', tags: ['verb'], ex: ['Argumenta muy bien sus ideas.', '他很会论证自己的观点。'] },
    { id: 'argumento', es: 'argumento', zh: '论据；（故事）情节', pos: 'n', g: 'm', level: 'B2', tags: ['func'], ex: ['Es un argumento muy convincente.', '这是个很有说服力的论据。'] },
    { id: 'defender', es: 'defender', zh: '捍卫；为……辩护', pos: 'v', level: 'B2', tags: ['verb'], ex: ['Defiende el teletrabajo con pasión.', '他热情地为远程办公辩护。'], note: 'e→ie：defiendo。' },
    { id: 'refutar', es: 'refutar', zh: '驳斥', pos: 'v', level: 'B2', tags: ['verb'], ex: ['Refutó todos los argumentos.', '他驳斥了所有论点。'] },
    { id: 'rebatir', es: 'rebatir', zh: '反驳', pos: 'v', level: 'B2', tags: ['verb'], ex: ['Es difícil rebatir esos datos.', '这些数据很难反驳。'] },
    { id: 'plantear', es: 'plantear', zh: '提出（问题）；造成', pos: 'v', level: 'B2', tags: ['verb'], ex: ['La inteligencia artificial plantea muchas preguntas.', '人工智能引出了很多问题。'] },
    { id: 'cuestion', es: 'cuestión', zh: '问题；事情', pos: 'n', g: 'f', pl: 'cuestiones', level: 'B2', tags: ['func'], ex: ['Es una cuestión de tiempo.', '这是时间问题。'] },
    { id: 'a-favor', es: 'a favor', zh: '赞成', pos: 'phr', level: 'B2', tags: ['func'], ex: ['Estoy a favor de la semana de cuatro días.', '我赞成每周四天工作制。'] },
    { id: 'en-contra', es: 'en contra', zh: '反对', pos: 'phr', level: 'B2', tags: ['func'], ex: ['La mayoría votó en contra.', '大多数人投了反对票。'] },
    { id: 'inconveniente', es: 'inconveniente', zh: '缺点；不便', pos: 'n', g: 'm', level: 'B2', tags: ['func'], ex: ['El principal inconveniente es el precio.', '主要的缺点是价格。'], note: 'No hay inconveniente = 没问题。' },
    { id: 'beneficio', es: 'beneficio', zh: '好处；利润', pos: 'n', g: 'm', level: 'B2', tags: ['func'], ex: ['El ejercicio tiene muchos beneficios.', '运动有很多好处。'] },
    { id: 'perjudicar', es: 'perjudicar', zh: '损害', pos: 'v', level: 'B2', tags: ['verb'], ex: ['El estrés perjudica la salud.', '压力有害健康。'], note: 'c→qu：perjudiqué。' },
    { id: 'beneficiar', es: 'beneficiar', zh: '使受益', pos: 'v', level: 'B2', tags: ['verb'], ex: ['La medida beneficia a las familias.', '这项措施让家庭受益。'] },
    { id: 'a-largo-plazo', es: 'a largo plazo', zh: '从长远看', pos: 'phr', level: 'B2', tags: ['time'], ex: ['A largo plazo, es una buena inversión.', '从长远看，这是一项好投资。'] },
    { id: 'a-corto-plazo', es: 'a corto plazo', zh: '短期内', pos: 'phr', level: 'B2', tags: ['time'], ex: ['A corto plazo no veremos cambios.', '短期内我们看不到变化。'] },
    { id: 'en-definitiva', es: 'en definitiva', zh: '总而言之', pos: 'phr', level: 'B2', tags: ['func'], ex: ['En definitiva, la idea es buena.', '总而言之，这个主意不错。'] },
    { id: 'hoy-en-dia', es: 'hoy en día', zh: '如今', pos: 'phr', level: 'B2', tags: ['time'], ex: ['Hoy en día todo el mundo tiene móvil.', '如今人人都有手机。'] },
    { id: 'echarse-a', es: 'echarse a', zh: '突然开始（哭、笑、跑）', pos: 'phr', level: 'B2', tags: ['func'], ex: ['Se echó a reír.', '他突然笑了起来。'] },
    { id: 'romper-a', es: 'romper a', zh: '突然（哭、笑）起来', pos: 'phr', level: 'B2', tags: ['func'], ex: ['El niño rompió a llorar.', '孩子突然放声大哭。'] },
    { id: 'llegar-a', es: 'llegar a', zh: '甚至到了……的地步', pos: 'phr', level: 'B2', tags: ['func'], ex: ['Llegó a trabajar catorce horas al día.', '他甚至每天工作十四个小时。'] },
    { id: 'dar-por', es: 'dar por', zh: '认为……已经……', pos: 'phr', level: 'B2', tags: ['func'], ex: ['Lo dimos por perdido.', '我们以为它丢了。'] },
    { id: 'quedar-en', es: 'quedar en', zh: '约定；说好', pos: 'phr', level: 'B2', tags: ['func'], ex: ['Quedamos en llamarnos mañana.', '我们说好明天通电话。'] },
    { id: 'estar-por', es: 'estar por', zh: '尚未（被）……', pos: 'phr', level: 'B2', tags: ['func'], ex: ['La fecha está por decidir.', '日期尚未确定。'] },
  ],
  sentences: [
    { id: 's1', es: 'Vengo diciendo desde hace años que esto iba a pasar.', zh: '我好几年前就一直在说这事迟早会发生。', g: ['b2-perifrasis-gerundio'], distract: ['decir'] },
    { id: 's2', es: 'Anda diciendo por ahí que lo van a despedir.', zh: '他到处跟人说他要被炒鱿鱼了。', g: ['b2-perifrasis-gerundio'] },
    { id: 's3', es: 'Poco a poco vamos adaptándonos al teletrabajo.', zh: '我们正一点点适应远程办公。', g: ['b2-perifrasis-gerundio'] },
    { id: 's4', es: 'Llevo dos años trabajando desde casa.', zh: '我在家办公已经两年了。', g: ['b2-perifrasis-gerundio'], distract: ['trabajo'] },
    { id: 's5', es: 'Los expertos vienen advirtiendo de este problema desde hace tiempo.', zh: '专家们很早以前就一直在警告这个问题。', g: ['b2-perifrasis-gerundio'] },
    { id: 's6', es: 'Al oír la noticia, se echó a llorar.', zh: '一听到这个消息，她就哭了起来。', g: ['b2-perifrasis-infinitivo'] },
    { id: 's7', es: 'Trabajaba tanto que llegó a dormir en la oficina.', zh: '他工作拼到甚至睡在了办公室。', g: ['b2-perifrasis-infinitivo'] },
    { id: 's8', es: 'Quedamos en vernos el lunes.', zh: '我们说好周一见。', g: ['b2-perifrasis-infinitivo'], distract: ['de'] },
    { id: 's9', es: 'Llevo corregidos veinte exámenes.', zh: '我已经改了二十份试卷。', g: ['b2-perifrasis-infinitivo'], distract: ['corregido'] },
    { id: 's10', es: 'Doy por terminada la reunión.', zh: '会议到此结束。', g: ['b2-perifrasis-infinitivo'] },
    { id: 's11', es: 'Hoy en día, cada vez más empresas permiten el teletrabajo.', zh: '如今，越来越多的公司允许远程办公。', g: ['b2-argumentacion'] },
    { id: 's12', es: 'Hay quien sostiene que la inteligencia artificial destruirá empleo.', zh: '有人认为人工智能会消灭就业岗位。', g: ['b2-argumentacion'] },
    { id: 's13', es: 'Si bien es cierto que el teletrabajo aísla, no lo es menos que ahorra tiempo.', zh: '远程办公的确让人孤立，但同样不可否认，它节省了时间。', g: ['b2-argumentacion'] },
    { id: 's14', es: 'En definitiva, la tecnología no es buena ni mala.', zh: '总而言之，科技本身无所谓好坏。', g: ['b2-argumentacion'] },
    { id: 's15', es: 'Es difícil conciliar el trabajo y la familia.', zh: '工作和家庭很难兼顾。' },
    { id: 's16', es: 'Por fin tengo un contrato indefinido.', zh: '我终于签了无固定期限合同。' },
    { id: 's17', es: 'Los trabajadores tendrán que reciclarse.', zh: '员工们将不得不更新技能。' },
    { id: 's18', es: 'El algoritmo decide qué vídeos ves.', zh: '算法决定你看到哪些视频。' },
    { id: 's19', es: 'Te tengo dicho que no llegues tarde.', zh: '我跟你说过多少遍了，别迟到。', g: ['b2-perifrasis-infinitivo'] },
    { id: 's20', es: 'Al final acabó por aceptar la oferta.', zh: '最后他还是接受了这份工作。', g: ['b2-perifrasis-infinitivo'] },
    { id: 's21', es: 'Conviene tener en cuenta que no todos los trabajos pueden hacerse desde casa.', zh: '需要考虑到，并非所有工作都能在家完成。', g: ['b2-argumentacion'] },
    { id: 's22', es: 'Estoy a favor de la semana laboral de cuatro días.', zh: '我赞成每周四天工作制。' },
    { id: 's23', es: 'El principal inconveniente es el aislamiento.', zh: '主要的缺点是孤立感。' },
    { id: 's24', es: 'La fecha de la reunión está por decidir.', zh: '会议日期尚未确定。', g: ['b2-perifrasis-infinitivo'] },
    { id: 's25', es: '¿Qué andas haciendo?', zh: '你在瞎忙什么呢？', g: ['b2-perifrasis-gerundio'] },
  ],
  cloze: [
    { id: 'c1', text: 'Los científicos ___ advirtiendo de este peligro desde los años noventa.', answers: ['vienen'], options: ['vienen', 'van', 'están'], zh: '科学家们从九十年代起就一直在警告这一危险。', g: ['b2-perifrasis-gerundio'] },
    { id: 'c2', text: 'Ese chico anda ___ mentiras sobre mí.', answers: ['contando'], hint: 'contar', zh: '那个男孩到处散布关于我的谎话。', g: ['b2-perifrasis-gerundio'] },
    { id: 'c3', text: 'Poco a poco ___ acostumbrándome a la nueva oficina.', answers: ['voy'], options: ['voy', 'vengo', 'ando'], zh: '我正慢慢习惯新办公室。', g: ['b2-perifrasis-gerundio'] },
    { id: 'c4', text: '___ tres meses buscando piso.', answers: ['Llevo'], options: ['Llevo', 'Tengo', 'Hago'], zh: '我找房子已经找了三个月了。', g: ['b2-perifrasis-gerundio'] },
    { id: 'c5', text: 'A pesar de las críticas, ___ defendiendo su proyecto.', answers: ['sigue'], options: ['sigue', 'lleva', 'acaba'], zh: '尽管有批评，他仍在为自己的项目辩护。', g: ['b2-perifrasis-gerundio'] },
    { id: 'c6', text: 'Cuando vio el resultado, se echó ___ reír.', answers: ['a'], options: ['a', 'de', 'por'], zh: '看到结果，他突然笑了起来。', g: ['b2-perifrasis-infinitivo'] },
    { id: 'c7', text: 'El bebé ___ a llorar en mitad de la noche.', answers: ['rompió'], options: ['rompió', 'llegó', 'quedó'], zh: '宝宝半夜突然大哭起来。', g: ['b2-perifrasis-infinitivo'] },
    { id: 'c8', text: 'Quedamos ___ comer juntos el viernes.', answers: ['en'], options: ['en', 'de', 'a'], zh: '我们说好星期五一起吃饭。', g: ['b2-perifrasis-infinitivo'] },
    { id: 'c9', text: 'Se enfadó tanto que llegó ___ insultarme.', answers: ['a'], options: ['a', 'de', 'en'], zh: '他气得甚至骂了我。', g: ['b2-perifrasis-infinitivo'] },
    { id: 'c10', text: 'Tengo ___ dos capítulos de la tesis.', answers: ['escritos'], options: ['escritos', 'escrito', 'escribidos'], zh: '我已经写好了论文的两章。', g: ['b2-perifrasis-infinitivo'] },
    { id: 'c11', text: 'Damos por ___ el asunto.', answers: ['cerrado'], hint: 'cerrar', zh: '这件事我们就当了结了。', g: ['b2-perifrasis-infinitivo'] },
    { id: 'c12', text: 'Después de mucho insistir, acabó ___ darme la razón.', answers: ['por'], options: ['por', 'de', 'en'], zh: '我坚持了很久，他最终承认我是对的。', g: ['b2-perifrasis-infinitivo'] },
    { id: 'c13', text: '___ en día, casi todo el mundo usa internet.', answers: ['Hoy'], options: ['Hoy', 'Ahora', 'Este'], zh: '如今几乎人人都上网。', g: ['b2-argumentacion'] },
    { id: 'c14', text: 'Hay ___ sostiene que el teletrabajo reduce la productividad.', answers: ['quien'], options: ['quien', 'que', 'el que'], zh: '有人认为远程办公会降低效率。', g: ['b2-argumentacion'] },
    { id: 'c15', text: 'Si bien es cierto que es caro, no lo es ___ que es muy útil.', answers: ['menos'], options: ['menos', 'más', 'tanto'], zh: '它的确贵，但同样不可否认它非常有用。', g: ['b2-argumentacion'] },
    { id: 'c16', text: 'Conviene tener en ___ que no todos tienen ordenador.', answers: ['cuenta'], options: ['cuenta', 'mente', 'cuento'], zh: '需要考虑到，并非人人都有电脑。', g: ['b2-argumentacion'] },
    { id: 'c17', text: 'En ___, el teletrabajo tiene más ventajas que inconvenientes.', answers: ['definitiva'], options: ['definitiva', 'final', 'conclusión final'], zh: '总而言之，远程办公利大于弊。', g: ['b2-argumentacion'] },
    { id: 'c18', text: 'Es difícil ___ la vida laboral y familiar.', answers: ['conciliar'], options: ['conciliar', 'combinar de', 'juntar con'], zh: '很难兼顾工作和家庭。' },
  ],
  conj: [
    { verbs: ['venir', 'andar', 'ir', 'llevar', 'seguir'], tenses: ['pres', 'impf'], g: 'b2-perifrasis-gerundio' },
    { verbs: ['sostener', 'defender', 'plantear', 'refutar', 'conciliar'], tenses: ['pres', 'pret'], g: 'b2-argumentacion' },
  ],
  dialogues: [
    {
      id: 'b2-u12-d1',
      title: '回不回办公室？ · ¿Volver a la oficina?',
      lines: [
        { who: 'Elena', es: '¿Te has enterado? La empresa quiere que volvamos a la oficina cinco días a la semana.', zh: '你听说了吗？公司想让我们每周五天都回办公室上班。' },
        { who: 'Wang Lei', es: 'Sí, el jefe lleva semanas diciéndolo. Yo no lo entiendo: llevamos tres años trabajando en remoto y la productividad no ha bajado.', zh: '听说了，老板说了好几个星期了。我不理解：我们远程办公三年了，效率也没下降。' },
        { who: 'Elena', es: 'Bueno, si bien es cierto que somos productivos, también lo es que nos vemos muy poco. Los nuevos no conocen a nadie.', zh: '嗯，我们效率确实不低，但我们见面也确实太少了。新同事谁都不认识。' },
        { who: 'Wang Lei', es: 'En eso tienes razón. Pero yo vivo a hora y media de la oficina. Si tuviera que ir todos los días, llegaría a pasar quince horas a la semana en el tren.', zh: '这点你说得对。可我住的地方离办公室一个半小时。要是每天都得去，我每周要在火车上花十五个小时。' },
        { who: 'Elena', es: 'Uf, eso es mucho. Quizá la solución sea un modelo híbrido: dos días en la oficina y tres en casa.', zh: '哇，这也太多了。也许解决办法是混合模式：两天在办公室，三天在家。' },
        { who: 'Wang Lei', es: 'Eso sería perfecto para conciliar. ¿Por qué no se lo planteamos juntos al jefe?', zh: '那样工作生活就好平衡了。我们一起去跟老板提吧？' },
        { who: 'Elena', es: 'Vale. Quedamos en hablarlo mañana después de la reunión. Yo preparo los argumentos.', zh: '好。我们说好明天开完会后去谈。我来准备论据。' },
        { who: 'Wang Lei', es: 'Y yo los datos. ¡A ver si acaba por darnos la razón!', zh: '我来准备数据。看他最后会不会认同我们！' },
      ],
    },
  ],
  readings: [
    {
      id: 'b2-r23',
      level: 'B2',
      title: 'El teletrabajo, unos años después',
      titleZh: '远程办公，几年之后',
      topic: '工作',
      paras: [
        [
          ['Durante la pandemia de 2020, millones de personas se pusieron a trabajar desde casa de un día para otro, con el ordenador en la mesa de la cocina. Muchos pensaron que sería algo temporal.', '2020 年疫情期间，数百万人一夜之间开始在家办公，把电脑摆在厨房的餐桌上。很多人以为这只是暂时的。'],
          ['Sin embargo, el teletrabajo se ha ido consolidando, sobre todo en su versión híbrida, que combina días en casa y días en la oficina.', '然而，远程办公却逐渐固定了下来，尤其是在家和办公室相结合的混合模式。'],
        ],
        [
          ['Sus defensores vienen señalando varias ventajas: menos tiempo en desplazamientos, más facilidad para conciliar y la posibilidad de vivir lejos de las grandes ciudades. Algunos pueblos han llegado a recuperar población gracias a los «nómadas digitales».', '支持者们一直在指出它的好处：通勤时间更少，更容易兼顾工作和家庭，还可以住在远离大城市的地方。有些村镇甚至靠“数字游民”恢复了人口。'],
        ],
        [
          ['Los críticos, en cambio, advierten del aislamiento y de la dificultad de separar la vida personal de la laboral. «Llevo tres años trabajando desde casa y a veces siento que vivo en la oficina», reconoce una diseñadora gráfica.', '而批评者则警告说，远程办公会让人孤立，也很难把个人生活和工作分开。一位平面设计师承认：“我在家工作三年了，有时觉得自己住在办公室里。”'],
          ['Todo parece indicar que el futuro no será ni totalmente presencial ni totalmente remoto. La cuestión que está por resolver es cómo encontrar el equilibrio.', '一切迹象表明，未来既不会是完全线下，也不会是完全远程。尚待解决的问题是如何找到平衡。'],
        ],
      ],
      gloss: { pandemia: '疫情', 'de un día para otro': '一夜之间', consolidando: '巩固', defensores: '支持者', desplazamientos: '通勤', nómadas: '游民', aislamiento: '孤立', remoto: '远程的', equilibrio: '平衡' },
      questions: [
        { type: 'mc', q: '如今哪种远程办公形式最为固定？', options: ['完全在家办公', '混合模式', '完全回办公室'], answer: 1 },
        { type: 'mc', q: '下面哪一项是支持者提到的好处？', options: ['工资更高', '通勤时间更少', '和同事见面更多'], answer: 1 },
        { type: 'tf', q: '那位设计师觉得工作和生活分得很清楚。', answer: false, explain: 'a veces siento que vivo en la oficina' },
      ],
    },
    {
      id: 'b2-r24',
      level: 'B2',
      title: '¿Nos quitará el trabajo la inteligencia artificial?',
      titleZh: '人工智能会抢走我们的工作吗？',
      topic: '议论文',
      paras: [
        [
          ['En los últimos años, la inteligencia artificial ha pasado de la ciencia ficción a nuestra vida diaria: escribe textos, traduce, diagnostica enfermedades y conduce coches. Por ello, cada vez más personas se preguntan si acabará por quitarnos el trabajo.', '近些年，人工智能已经从科幻小说走进了我们的日常生活：它会写文章、做翻译、诊断疾病、驾驶汽车。因此，越来越多的人在问：它最终会不会抢走我们的工作？'],
        ],
        [
          ['Hay quien sostiene que millones de empleos desaparecerán, sobre todo los más repetitivos. Y, si bien es cierto que algunas profesiones están cambiando muy deprisa, no lo es menos que la historia ofrece motivos para el optimismo: la máquina de vapor, la electricidad o internet también destruyeron empleos, pero crearon muchos más.', '有人认为数以百万计的岗位将会消失，尤其是那些重复性最强的工作。的确，有些职业正在飞速变化，但同样不可否认，历史给了我们乐观的理由：蒸汽机、电力和互联网也曾消灭了一些岗位，但创造的岗位要多得多。'],
          ['Además, conviene tener en cuenta que la inteligencia artificial necesita personas que la diseñen, la supervisen y decidan cómo usarla.', '此外，需要考虑到，人工智能需要有人来设计、监督，并决定如何使用它。'],
        ],
        [
          ['En definitiva, considero que la inteligencia artificial no nos quitará el trabajo, pero sí lo transformará. La clave estará en la formación: quienes sepan reciclarse y trabajar junto a las máquinas tendrán más oportunidades. El verdadero riesgo no es la tecnología, sino quedarse atrás.', '总而言之，我认为人工智能不会抢走我们的工作，但会改变它。关键在于培训：懂得更新技能、与机器协作的人会有更多机会。真正的风险不在于技术本身，而在于掉队。'],
        ],
      ],
      gloss: { 'ciencia ficción': '科幻', diagnostica: '诊断', repetitivos: '重复性的', deprisa: '迅速地', optimismo: '乐观', supervisen: '监督（虚拟式）', clave: '关键', 'quedarse atrás': '落后' },
      questions: [
        { type: 'mc', q: '作者用什么来支持乐观的看法？', options: ['专家的预测', '历史上的技术革命', '政府的承诺'], answer: 1 },
        { type: 'mc', q: '作者认为关键在于什么？', options: ['禁止人工智能', '培训和更新技能', '减少工作时间'], answer: 1 },
        { type: 'tf', q: '作者认为人工智能会彻底消灭人类的工作。', answer: false, explain: 'no nos quitará el trabajo, pero sí lo transformará' },
      ],
    },
  ],
  writing: [{ id: 'w1', prompt: 'DELE B2 写作练习：“远程办公利大于弊吗？”写一篇议论文：引言提出观点，至少两个论据（配例子），一个反方观点及反驳（si bien es cierto que…, no lo es menos que…），结论。请至少用两个本单元的动词短语。', words: [150, 180], hints: ['Hoy en día, cada vez más…', 'En primer lugar, … Un claro ejemplo de ello es…', 'Si bien es cierto que…, no lo es menos que…', 'En definitiva, considero que…'] }],
}
