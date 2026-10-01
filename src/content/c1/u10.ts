import type { Unit } from '../types'

export const u10: Unit = {
  id: 'c1-u10',
  level: 'C1',
  order: 10,
  title: '社会议题与总复习',
  titleEs: 'Argumentar con matices',
  icon: '🏛️',
  goals: ['用 no cabe duda de que / sería deseable que 等结构表达不同程度的确信和评价', '用 lejos de、frente a quienes、en contra de lo que 等结构反驳他人观点', '系统复习虚拟式的全部用法', '就人口、住房、科技伦理等社会问题写出有分量的议论文'],
  grammar: [
    {
      id: 'c1-modalizacion',
      title: '确信程度与评价：从“毫无疑问”到“值得商榷”',
      titleEs: 'La modalización en la argumentación',
      level: 'C1',
      summary: '确信 → 陈述式：No cabe duda de que…, Es innegable que…, Todo parece indicar que…。评价、建议、愿望 → 虚拟式：Sería deseable que…, Convendría que…, Es de esperar que…, Resulta difícil creer que…。也可以用原形：Habría que…, Cabría preguntarse si…',
      body: `### 确信（陈述式）
| 结构 | 例句 |
|---|---|
| *No cabe duda de que* | *No cabe duda de que el problema **es** grave.* |
| *Es innegable / indiscutible que* | *Es innegable que la población **envejece**.* |
| *Todo parece indicar que* | *Todo parece indicar que la tendencia **continuará**.* |
| *Está demostrado que* | *Está demostrado que el ejercicio **mejora** la salud.* |

### 评价、建议、愿望（虚拟式）
| 结构 | 例句 |
|---|---|
| *Sería deseable que* + 虚拟式过去时 | *Sería deseable que el gobierno **invirtiera** más en vivienda.* |
| *Convendría que* + 虚拟式过去时 | *Convendría que se **revisara** la ley.* |
| *Es de esperar que* + 虚拟式现在时 | *Es de esperar que la situación **mejore**.* |
| *Resulta difícil creer que* | *Resulta difícil creer que nadie lo **supiera**.* |
| *Es lamentable que* | *Es lamentable que no se **haya hecho** nada.* |

### 原形结构（不点名“谁”）
- ***Habría que** replantear el modelo.*（应当重新思考这一模式。）
- ***Cabría preguntarse** si esta medida es suficiente.*（不禁要问，这一措施是否足够。）
- ***Cabe** destacar que…*

### 个人观点的书面表达
*A mi juicio, … / A mi entender, … / Desde mi punto de vista, … / Considero que…*`,
      examples: [
        ['No cabe duda de que el acceso a la vivienda es un problema grave.', '毫无疑问，住房问题是一个严重的问题。'],
        ['Todo parece indicar que la tendencia continuará.', '一切迹象表明，这一趋势将会持续。'],
        ['Sería deseable que el gobierno invirtiera más en vivienda pública.', '政府若能在公共住房上投入更多就好了。'],
        ['Cabría preguntarse si esta medida es suficiente.', '不禁要问，这一措施是否足够。'],
        ['Es de esperar que la situación mejore en los próximos años.', '预计情况会在未来几年有所改善。'],
      ],
      tables: [{ verbs: ['invertir', 'revisar', 'mejorar'], tense: 'subjImpf' }],
      origin: `**cabría** 是 *caber*（容得下）的条件式。*Cabría preguntarse…* 字面意思是“也许容得下这样一个问题”——用条件式让质疑显得克制、有礼，这是学术和社论文章里非常典型的语气。

语言学把这种表达说话人态度的手段叫作 **modalización**（情态化），来自拉丁语 *modus*「方式」——和语法上的 *modo*（语气）是同一个词。`,
      pitfalls: ['❌ *No cabe duda de que sea grave.* ✅ *No cabe duda de que es grave.*', '❌ *Sería deseable que el gobierno invierte más.* ✅ *Sería deseable que el gobierno invirtiera más.*', '❌ *Es de esperar que mejorará.* ✅ *Es de esperar que mejore.*'],
    },
    {
      id: 'c1-contraargumentacion',
      title: '反驳的艺术',
      titleEs: 'La contraargumentación',
      level: 'C1',
      summary: '先引出对方观点（Hay quienes sostienen que… / Se suele argumentar que…），再反驳（Sin embargo, lo cierto es que… / Nada más lejos de la realidad）。常用结构：lejos de + 原形 / 名词（非但没有……反而），frente a quienes…，en contra de lo que se suele pensar…',
      body: `### 引出对方观点
*Hay quienes sostienen que… / Se suele argumentar que… / Algunos defienden que… / Desde ciertos sectores se afirma que…*

### 反驳
| 结构 | 例句 |
|---|---|
| *Sin embargo, lo cierto es que…* | *Sin embargo, **lo cierto es que** los datos dicen lo contrario.* |
| *Nada más lejos de la realidad.* | *Se dice que los jóvenes no leen. **Nada más lejos de la realidad.*** |
| *lejos de* + 原形 / 名词 | ***Lejos de mejorar**, la situación ha empeorado.*（情况非但没有好转，反而恶化了。） |
| *frente a quienes* + 陈述式 | ***Frente a quienes** piensan que la tecnología aísla, considero que…* |
| *en contra de lo que se suele pensar* | ***En contra de lo que se suele pensar**, el campo atrae a muchos jóvenes.* |
| *no es que… sino que…* | ***No es que** falten viviendas, **sino que** son inaccesibles.* |

### 让步式反驳（先退后进）
*Es cierto que…; ahora bien, … / Si bien es cierto que…, no lo es menos que… / Por muy… que…, …*

### 小技巧
好的反驳 **先准确地复述对方的观点**，再用数据、例子或逻辑推翻它——而不是攻击对方本人。`,
      examples: [
        ['Hay quienes sostienen que los jóvenes no quieren trabajar.', '有人认为年轻人不想工作。'],
        ['Nada más lejos de la realidad.', '事实远非如此。'],
        ['Lejos de mejorar, la situación ha empeorado.', '情况非但没有好转，反而恶化了。'],
        ['En contra de lo que se suele pensar, muchos jóvenes quieren vivir en el campo.', '与人们通常的看法相反，很多年轻人想住在乡下。'],
        ['No es que falten viviendas, sino que son inaccesibles.', '不是房子不够，而是买不起。'],
      ],
      origin: `**refutar**（驳斥）来自拉丁语 *refutare*「推回去」：把对方的论点“推”回去。**rebatir**（反驳）则是 *re* + *batir*「打」——一来一回地“打”。

西班牙语的议论文传统深受古典修辞学影响：先 *confirmatio*（立论），再 *refutatio*（驳论）——今天的 DELE C1 写作考的依然是这套本领。`,
      pitfalls: ['❌ *Lejos de mejora…* ✅ *Lejos de mejorar…*', '❌ *Hay quien sostienen…* ✅ *Hay quien sostiene… / Hay quienes sostienen…*', '❌ 反驳时说 *Eso es una tontería.*（攻击性太强）✅ *No comparto esa idea, ya que…*'],
    },
    {
      id: 'c1-repaso-subjuntivo',
      title: '虚拟式总复习：一张表看全',
      titleEs: 'Repaso general del subjuntivo',
      level: 'C1',
      summary: '虚拟式出现在：愿望和影响、情感和评价、怀疑和否定、目的、将来的时间、假设的让步与条件、不确定的先行词、como si、重叠结构和独立句中。核心：说话人不“断言”时用虚拟式。',
      body: `| 类别 | 触发词 | 例句 |
|---|---|---|
| 愿望 | *ojalá, querer que, esperar que* | *Ojalá **llueva**.* |
| 影响 | *pedir, aconsejar, prohibir que* | *Te pido que **vengas**.* |
| 情感 | *me alegra / molesta que* | *Me alegra que **estés** aquí.* |
| 评价 | *es normal / una pena que* | *Es una pena que no **puedas**.* |
| 怀疑、否定 | *no creo que, dudo que, quizás* | *No creo que **sea** verdad.* |
| 目的 | *para que, a fin de que* | *Te lo digo para que lo **sepas**.* |
| 将来的时间 | *cuando, en cuanto, antes de que* | *Cuando **llegues**, avísame.* |
| 条件 | *si* + 过去时、*a no ser que, siempre y cuando* | *Si **tuviera** tiempo, iría.* |
| 让步 | *aunque*（假设）、*por mucho que* | *Aunque **llueva**, iré.* |
| 关系从句 | 不确定的先行词 | *Busco a alguien que **hable** ruso.* |
| como si | — | *Habla como si lo **supiera** todo.* |
| 重叠结构 | — | *Digan lo que **digan**, …* |
| 独立句 | *que…, ¡viva!, que yo sepa* | *¡Que te **mejores**!* |
| 主语从句 | *el hecho de que, que…* | *Que no **haya llamado** me preocupa.* |

### 时态的选择（时态呼应）
- 主句现在 / 将来 / 命令 → **虚拟式现在时 / 现在完成时**
- 主句过去 / 条件式 → **虚拟式过去时 / 过去完成时**

### 一句话记住
**陈述式 = 我在断言这是事实；虚拟式 = 我在希望、评价、怀疑、假设，或者事情还没发生。**`,
      examples: [
        ['Te lo digo para que lo sepas.', '我告诉你，是为了让你知道。'],
        ['Busco a alguien que hable ruso.', '我在找一个会说俄语的人。'],
        ['Que no haya llamado me preocupa.', '他没打电话，这让我担心。'],
        ['Si tuviera más tiempo, aprendería otro idioma.', '如果我有更多时间，我会再学一门语言。'],
        ['Digan lo que digan, seguiré estudiando español.', '不管别人说什么，我都会继续学西班牙语。'],
      ],
      origin: `早在几十年前，就有人预言虚拟式会在西班牙语里慢慢消失——就像它在英语里几乎消失了一样。事实却恰恰相反：今天的西班牙语，从马德里到布宜诺斯艾利斯，虚拟式依然充满活力，是母语者表达态度、分寸和可能性的核心工具。

掌握它，你就不再只是在“说西班牙语”，而是在用西班牙语 **思考**。`,
      pitfalls: ['❌ *Cuando llegarás, avísame.* ✅ *Cuando llegues, avísame.*', '❌ *Busco a alguien que habla ruso.*（不确定有没有这样的人）✅ *…que hable ruso.*', '❌ *Si tendría tiempo…* ✅ *Si tuviera tiempo…*'],
    },
  ],
  words: [
    { id: 'brecha', es: 'brecha', zh: '缺口；差距', pos: 'n', g: 'f', level: 'C1', tags: ['city'], ex: ['La brecha entre ricos y pobres sigue aumentando.', '贫富差距持续扩大。'] },
    { id: 'emancipacion', es: 'emancipación', zh: '（年轻人）独立生活；解放', pos: 'n', g: 'f', level: 'C1', tags: ['city'], ex: ['La edad de emancipación supera los treinta años.', '年轻人独立生活的平均年龄超过三十岁。'] },
    { id: 'natalidad', es: 'natalidad', zh: '出生率', pos: 'n', g: 'f', level: 'C1', tags: ['city'], ex: ['La natalidad está en mínimos históricos.', '出生率处于历史最低水平。'] },
    { id: 'longevidad', es: 'longevidad', zh: '长寿', pos: 'n', g: 'f', level: 'C1', tags: ['body'], ex: ['España es uno de los países con mayor longevidad.', '西班牙是最长寿的国家之一。'] },
    { id: 'pension', es: 'pensión', zh: '养老金；膳宿公寓', pos: 'n', g: 'f', pl: 'pensiones', level: 'C1', tags: ['city'], ex: ['Hay que garantizar las pensiones.', '必须保障养老金。'] },
    { id: 'pensionista', es: 'pensionista', zh: '领养老金的人', pos: 'n', g: 'mf', level: 'C1', tags: ['city'], ex: ['Los pensionistas se manifestaron frente al Congreso.', '退休人员在议会前示威。'] },
    { id: 'sostenibilidad', es: 'sostenibilidad', zh: '可持续性', pos: 'n', g: 'f', level: 'C1', tags: ['city'], ex: ['Se cuestiona la sostenibilidad del sistema.', '这一体系的可持续性受到质疑。'] },
    { id: 'politica-publica', es: 'política pública', zh: '公共政策', pos: 'n', g: 'f', level: 'C1', tags: ['city'], ex: ['Hacen falta políticas públicas eficaces.', '需要有效的公共政策。'] },
    { id: 'subvencion', es: 'subvención', zh: '补贴', pos: 'n', g: 'f', pl: 'subvenciones', level: 'C1', tags: ['city'], ex: ['Recibió una subvención para el proyecto.', '他为这个项目获得了一笔补贴。'] },
    { id: 'fiscal', es: 'fiscal', zh: '税务的；检察官', pos: 'adj', level: 'C1', tags: ['city'], ex: ['Proponen una reforma fiscal.', '他们提议进行税制改革。'] },
    { id: 'recaudacion', es: 'recaudación', zh: '征收（款项）；收入', pos: 'n', g: 'f', level: 'C1', tags: ['city'], ex: ['La recaudación de impuestos ha aumentado.', '税收增加了。'] },
    { id: 'desequilibrio', es: 'desequilibrio', zh: '失衡', pos: 'n', g: 'm', level: 'C1', tags: ['city'], ex: ['Existe un fuerte desequilibrio territorial.', '存在严重的地区失衡。'] },
    { id: 'equidad', es: 'equidad', zh: '公平', pos: 'n', g: 'f', level: 'C1', tags: ['city'], ex: ['El sistema debe basarse en la equidad.', '这一体系应以公平为基础。'] },
    { id: 'justicia-social', es: 'justicia social', zh: '社会公正', pos: 'n', g: 'f', level: 'C1', tags: ['city'], ex: ['Defiende la justicia social.', '他捍卫社会公正。'] },
    { id: 'exclusion', es: 'exclusión', zh: '排斥；排除', pos: 'n', g: 'f', level: 'C1', tags: ['city'], ex: ['Hay que combatir la exclusión social.', '必须打击社会排斥。'] },
    { id: 'marginacion', es: 'marginación', zh: '边缘化', pos: 'n', g: 'f', level: 'C1', tags: ['city'], ex: ['La pobreza conduce a la marginación.', '贫困导致边缘化。'] },
    { id: 'vulnerable', es: 'vulnerable', zh: '弱势的；脆弱的', pos: 'adj', level: 'C1', tags: ['city'], ex: ['Hay que proteger a los colectivos más vulnerables.', '要保护最弱势的群体。'] },
    { id: 'ciudadania', es: 'ciudadanía', zh: '公民；公民身份', pos: 'n', g: 'f', level: 'C1', tags: ['city'], ex: ['La ciudadanía exige respuestas.', '公民要求得到答复。'] },
    { id: 'participacion', es: 'participación', zh: '参与', pos: 'n', g: 'f', level: 'C1', tags: ['city'], ex: ['La participación fue del setenta por ciento.', '投票率为百分之七十。'] },
    { id: 'activismo', es: 'activismo', zh: '社会活动；行动主义', pos: 'n', g: 'm', level: 'C1', tags: ['city'], ex: ['El activismo climático ha crecido entre los jóvenes.', '气候行动在年轻人中日益壮大。'] },
    { id: 'activista', es: 'activista', zh: '活动人士', pos: 'n', g: 'mf', level: 'C1', tags: ['city'], ex: ['Es una activista por los derechos humanos.', '她是一位人权活动人士。'] },
    { id: 'polarizacion', es: 'polarización', zh: '两极分化', pos: 'n', g: 'f', level: 'C1', tags: ['city'], ex: ['La polarización política es preocupante.', '政治两极分化令人担忧。'] },
    { id: 'consenso', es: 'consenso', zh: '共识', pos: 'n', g: 'm', level: 'C1', tags: ['city'], ex: ['No hubo consenso entre los partidos.', '各党派没有达成共识。'] },
    { id: 'etica', es: 'ética', zh: '伦理；道德', pos: 'n', g: 'f', level: 'C1', tags: ['city'], ex: ['La ética de la inteligencia artificial es un tema clave.', '人工智能伦理是一个关键议题。'] },
    { id: 'etico', es: 'ético', zh: '伦理的；道德的', pos: 'adj', f: 'ética', level: 'C1', tags: ['city'], ex: ['¿Es ético usar los datos sin permiso?', '未经许可使用数据合乎道德吗？'] },
    { id: 'regulacion', es: 'regulación', zh: '监管；规范', pos: 'n', g: 'f', level: 'C1', tags: ['city'], ex: ['El sector necesita una regulación más estricta.', '这个行业需要更严格的监管。'] },
    { id: 'vigilancia', es: 'vigilancia', zh: '监视；监控', pos: 'n', g: 'f', level: 'C1', tags: ['city'], ex: ['Hay cámaras de vigilancia en todas las calles.', '每条街都有监控摄像头。'] },
    { id: 'transparencia', es: 'transparencia', zh: '透明', pos: 'n', g: 'f', level: 'C1', tags: ['city'], ex: ['Se exige más transparencia a las empresas.', '公众要求企业更加透明。'] },
    { id: 'rendicion-de-cuentas', es: 'rendición de cuentas', zh: '问责', pos: 'n', g: 'f', level: 'C1', tags: ['city'], ex: ['La democracia exige rendición de cuentas.', '民主要求问责。'] },
    { id: 'ponderar', es: 'ponderar', zh: '权衡', pos: 'v', level: 'C1', tags: ['verb'], ex: ['Hay que ponderar los pros y los contras.', '要权衡利弊。'] },
    { id: 'sopesar', es: 'sopesar', zh: '掂量；权衡', pos: 'v', level: 'C1', tags: ['verb'], ex: ['Sopesó todas las opciones antes de decidir.', '他在决定前权衡了所有选择。'] },
    { id: 'paliar', es: 'paliar', zh: '缓解', pos: 'v', level: 'C1', tags: ['verb'], ex: ['Las ayudas buscan paliar la crisis.', '这些补助旨在缓解危机。'] },
    { id: 'erradicar', es: 'erradicar', zh: '根除', pos: 'v', level: 'C1', tags: ['verb'], ex: ['El objetivo es erradicar la pobreza.', '目标是根除贫困。'], note: 'c→qu：erradiqué。' },
    { id: 'mermar', es: 'mermar', zh: '减少；削弱', pos: 'v', level: 'C1', tags: ['verb'], ex: ['La crisis mermó los ahorros de las familias.', '危机削减了家庭的积蓄。'] },
    { id: 'abogar-por', es: 'abogar por', zh: '倡导；主张', pos: 'phr', level: 'C1', tags: ['func'], ex: ['Aboga por una sociedad más justa.', '他倡导建立一个更公正的社会。'] },
    { id: 'irrefutable', es: 'irrefutable', zh: '无可辩驳的', pos: 'adj', level: 'C1', tags: ['func'], ex: ['Los datos son irrefutables.', '数据无可辩驳。'] },
    { id: 'controvertido', es: 'controvertido', zh: '有争议的', pos: 'adj', f: 'controvertida', level: 'C1', tags: ['func'], ex: ['Es un tema muy controvertido.', '这是一个很有争议的话题。'] },
    { id: 'acuciante', es: 'acuciante', zh: '紧迫的', pos: 'adj', level: 'C1', tags: ['func'], ex: ['La falta de vivienda es un problema acuciante.', '住房短缺是一个紧迫的问题。'] },
    { id: 'lejos-de', es: 'lejos de', zh: '非但没有……；远非', pos: 'phr', level: 'C1', tags: ['func'], ex: ['Lejos de resolverse, el conflicto se ha agravado.', '冲突非但没有解决，反而加剧了。'] },
    { id: 'frente-a', es: 'frente a', zh: '面对；与……相对', pos: 'phr', level: 'C1', tags: ['func'], ex: ['Frente a quienes piden prohibir, propongo educar.', '与主张禁止的人不同，我提议教育。'] },
    { id: 'en-contra-de-lo-que', es: 'en contra de lo que', zh: '与……相反', pos: 'phr', level: 'C1', tags: ['func'], ex: ['En contra de lo que se cree, el chocolate no causa acné.', '与人们的看法相反，巧克力并不会导致长痘。'] },
    { id: 'nada-mas-lejos-de-la-realidad', es: 'nada más lejos de la realidad', zh: '事实远非如此', pos: 'phr', level: 'C1', tags: ['func'], ex: ['Dicen que es fácil. Nada más lejos de la realidad.', '人们说这很容易。事实远非如此。'] },
    { id: 'cabria-preguntarse', es: 'cabría preguntarse', zh: '不禁要问', pos: 'phr', level: 'C1', tags: ['func'], ex: ['Cabría preguntarse quién se beneficia de esta medida.', '不禁要问，谁会从这一措施中获益。'] },
    { id: 'no-cabe-duda', es: 'no cabe duda', zh: '毫无疑问', pos: 'phr', level: 'C1', tags: ['func'], ex: ['No cabe duda de que tienes talento.', '毫无疑问，你很有天赋。'] },
    { id: 'todo-parece-indicar', es: 'todo parece indicar', zh: '一切迹象表明', pos: 'phr', level: 'C1', tags: ['func'], ex: ['Todo parece indicar que habrá elecciones.', '一切迹象表明将会举行选举。'] },
    { id: 'es-de-esperar', es: 'es de esperar', zh: '可以预期', pos: 'phr', level: 'C1', tags: ['func'], ex: ['Es de esperar que los precios bajen.', '预计价格会下降。'] },
    { id: 'seria-deseable', es: 'sería deseable', zh: '若能……就好了；最好', pos: 'phr', level: 'C1', tags: ['func'], ex: ['Sería deseable que hubiera más diálogo.', '若能有更多对话就好了。'] },
    { id: 'habria-que', es: 'habría que', zh: '应当', pos: 'phr', level: 'C1', tags: ['func'], ex: ['Habría que cambiar la ley.', '应当修改法律。'] },
    { id: 'a-mi-juicio', es: 'a mi juicio', zh: '在我看来', pos: 'phr', level: 'C1', tags: ['func'], ex: ['A mi juicio, la medida es insuficiente.', '在我看来，这一措施是不够的。'] },
    { id: 'a-mi-entender', es: 'a mi entender', zh: '依我之见', pos: 'phr', level: 'C1', tags: ['func'], ex: ['A mi entender, el problema es otro.', '依我之见，问题在别处。'] },
  ],
  sentences: [
    { id: 's1', es: 'No cabe duda de que el acceso a la vivienda es un problema grave.', zh: '毫无疑问，住房问题是一个严重的问题。', g: ['c1-modalizacion'], distract: ['sea'] },
    { id: 's2', es: 'Todo parece indicar que la tendencia continuará.', zh: '一切迹象表明，这一趋势将会持续。', g: ['c1-modalizacion'] },
    { id: 's3', es: 'Sería deseable que el gobierno invirtiera más en vivienda pública.', zh: '政府若能在公共住房上投入更多就好了。', g: ['c1-modalizacion'], distract: ['invierte'] },
    { id: 's4', es: 'Cabría preguntarse si esta medida es suficiente.', zh: '不禁要问，这一措施是否足够。', g: ['c1-modalizacion'] },
    { id: 's5', es: 'Es de esperar que la situación mejore.', zh: '预计情况会有所改善。', g: ['c1-modalizacion'], distract: ['mejorará'] },
    { id: 's6', es: 'Hay quienes sostienen que los jóvenes no quieren trabajar.', zh: '有人认为年轻人不想工作。', g: ['c1-contraargumentacion'] },
    { id: 's7', es: 'Nada más lejos de la realidad.', zh: '事实远非如此。', g: ['c1-contraargumentacion'] },
    { id: 's8', es: 'Lejos de mejorar, la situación ha empeorado.', zh: '情况非但没有好转，反而恶化了。', g: ['c1-contraargumentacion'] },
    { id: 's9', es: 'En contra de lo que se suele pensar, muchos jóvenes quieren vivir en el campo.', zh: '与人们通常的看法相反，很多年轻人想住在乡下。', g: ['c1-contraargumentacion'] },
    { id: 's10', es: 'No es que falten viviendas, sino que son inaccesibles.', zh: '不是房子不够，而是买不起。', g: ['c1-contraargumentacion'] },
    { id: 's11', es: 'Te lo digo para que lo sepas.', zh: '我告诉你，是为了让你知道。', g: ['c1-repaso-subjuntivo'] },
    { id: 's12', es: 'Busco a alguien que hable ruso.', zh: '我在找一个会说俄语的人。', g: ['c1-repaso-subjuntivo'] },
    { id: 's13', es: 'Si tuviera más tiempo, aprendería otro idioma.', zh: '如果我有更多时间，我会再学一门语言。', g: ['c1-repaso-subjuntivo'] },
    { id: 's14', es: 'Digan lo que digan, seguiré estudiando español.', zh: '不管别人说什么，我都会继续学西班牙语。', g: ['c1-repaso-subjuntivo'] },
    { id: 's15', es: 'La brecha entre ricos y pobres sigue aumentando.', zh: '贫富差距持续扩大。' },
    { id: 's16', es: 'Hay que ponderar los pros y los contras.', zh: '要权衡利弊。' },
    { id: 's17', es: 'La natalidad está en mínimos históricos.', zh: '出生率处于历史最低水平。' },
    { id: 's18', es: 'A mi juicio, la medida es insuficiente.', zh: '在我看来，这一措施是不够的。', g: ['c1-modalizacion'] },
    { id: 's19', es: 'Habría que replantear todo el modelo.', zh: '应当重新思考整个模式。', g: ['c1-modalizacion'] },
    { id: 's20', es: 'Frente a quienes piden prohibir, propongo educar.', zh: '与主张禁止的人不同，我提议教育。', g: ['c1-contraargumentacion'] },
    { id: 's21', es: 'Es lamentable que no se haya hecho nada.', zh: '什么都没做，真令人遗憾。', g: ['c1-modalizacion'] },
    { id: 's22', es: 'No hubo consenso entre los partidos.', zh: '各党派没有达成共识。' },
    { id: 's23', es: 'Se exige más transparencia a las empresas.', zh: '公众要求企业更加透明。' },
    { id: 's24', es: 'Cuando llegues, avísame.', zh: '你到了告诉我。', g: ['c1-repaso-subjuntivo'] },
    { id: 's25', es: 'Es un tema muy controvertido.', zh: '这是一个很有争议的话题。' },
  ],
  cloze: [
    { id: 'c1', text: 'No cabe duda de que el clima ___ cambiando.', answers: ['está'], options: ['está', 'esté', 'estuviera'], zh: '毫无疑问，气候正在变化。', g: ['c1-modalizacion'] },
    { id: 'c2', text: 'Sería deseable que las empresas ___ más transparentes.', answers: ['fueran', 'fuesen'], hint: 'ser', zh: '企业若能更透明就好了。', g: ['c1-modalizacion'] },
    { id: 'c3', text: 'Convendría que se ___ la ley cuanto antes.', answers: ['revisara', 'revisase'], hint: 'revisar', zh: '最好尽快修订法律。', g: ['c1-modalizacion'] },
    { id: 'c4', text: 'Es de esperar que el paro ___ este año.', answers: ['baje'], hint: 'bajar', zh: '预计今年失业率会下降。', g: ['c1-modalizacion'] },
    { id: 'c5', text: 'Resulta difícil creer que nadie lo ___.', answers: ['supiera', 'supiese'], hint: 'saber', zh: '很难相信居然没有人知道。', g: ['c1-modalizacion'] },
    { id: 'c6', text: 'Todo parece ___ que la economía se recuperará.', answers: ['indicar'], options: ['indicar', 'indica', 'que indique'], zh: '一切迹象表明经济会复苏。', g: ['c1-modalizacion'] },
    { id: 'c7', text: '___ preguntarse si es la mejor solución.', answers: ['Cabría'], options: ['Cabría', 'Cabe de', 'Cabiera'], zh: '不禁要问，这是否是最好的解决办法。', g: ['c1-modalizacion'] },
    { id: 'c8', text: 'Lejos de ___ el problema, la medida lo ha agravado.', answers: ['resolver'], options: ['resolver', 'resuelve', 'resolviendo'], zh: '这项措施非但没有解决问题，反而让它更严重了。', g: ['c1-contraargumentacion'] },
    { id: 'c9', text: 'Hay ___ sostienen que la tecnología nos aísla.', answers: ['quienes'], options: ['quienes', 'que', 'los que'], zh: '有人认为科技让我们彼此孤立。', g: ['c1-contraargumentacion'] },
    { id: 'c10', text: 'En ___ de lo que se suele pensar, el español no es difícil.', answers: ['contra'], options: ['contra', 'contrario', 'frente'], zh: '与人们通常的看法相反，西班牙语并不难。', g: ['c1-contraargumentacion'] },
    { id: 'c11', text: 'Nada más ___ de la realidad.', answers: ['lejos'], options: ['lejos', 'cerca', 'falso'], zh: '事实远非如此。', g: ['c1-contraargumentacion'] },
    { id: 'c12', text: 'No es que no ___ (yo) ir, es que no puedo.', answers: ['quiera'], hint: 'querer', zh: '不是我不想去，是我去不了。', g: ['c1-contraargumentacion'] },
    { id: 'c13', text: 'Necesitamos a alguien que ___ experiencia en el sector.', answers: ['tenga'], hint: 'tener', zh: '我们需要一个在该行业有经验的人。', g: ['c1-repaso-subjuntivo'] },
    { id: 'c14', text: 'En cuanto ___ los resultados, te los envío.', answers: ['tenga'], hint: 'tener', zh: '我一拿到结果就发给你。', g: ['c1-repaso-subjuntivo'] },
    { id: 'c15', text: 'Me miró como si no me ___.', answers: ['conociera', 'conociese'], hint: 'conocer', zh: '他看着我，好像不认识我似的。', g: ['c1-repaso-subjuntivo'] },
    { id: 'c16', text: 'Si lo ___ sabido, te lo habría dicho.', answers: ['hubiera', 'hubiese'], hint: 'haber', zh: '要是我早知道，就告诉你了。', g: ['c1-repaso-subjuntivo'] },
    { id: 'c17', text: 'Pase lo que ___, no me rendiré.', answers: ['pase'], hint: 'pasar', zh: '无论发生什么，我都不会放弃。', g: ['c1-repaso-subjuntivo'] },
    { id: 'c18', text: 'Antes de tomar una decisión, hay que ___ los pros y los contras.', answers: ['ponderar'], options: ['ponderar', 'pensar de', 'pesar a'], zh: '做决定前要权衡利弊。' },
  ],
  conj: [
    { verbs: ['invertir', 'revisar', 'mejorar', 'saber', 'ser', 'haber'], tenses: ['subjImpf'], g: 'c1-modalizacion' },
    { verbs: ['tener', 'conocer', 'pasar', 'querer', 'hablar'], tenses: ['subj', 'subjImpf'], g: 'c1-repaso-subjuntivo' },
  ],
  dialogues: [
    {
      id: 'c1-u10-d1',
      title: '电视辩论 · Un debate televisado',
      lines: [
        { who: 'Moderadora', es: 'Buenas noches. Hoy debatimos sobre el acceso a la vivienda. Señora Ruiz, ¿por qué los jóvenes se emancipan tan tarde?', zh: '晚上好。今天我们讨论住房问题。鲁伊斯女士，为什么年轻人这么晚才独立生活？' },
        { who: 'Ruiz', es: 'No cabe duda de que el problema principal es el precio. Los sueldos no han subido al mismo ritmo que los alquileres.', zh: '毫无疑问，主要问题是价格。工资的涨幅赶不上房租。' },
        { who: 'Gómez', es: 'Permítame matizar. Hay quienes sostienen que todo se debe a los precios, pero también influye la precariedad laboral.', zh: '请允许我补充一点。有人认为一切都是价格造成的，但工作不稳定也有影响。' },
        { who: 'Ruiz', es: 'Estoy de acuerdo en parte. Ahora bien, lejos de mejorar, la situación ha empeorado en los últimos diez años.', zh: '我部分同意。不过，过去十年情况非但没有好转，反而恶化了。' },
        { who: 'Moderadora', es: '¿Y qué medidas proponen?', zh: '那你们提出什么措施？' },
        { who: 'Gómez', es: 'A mi juicio, sería deseable que se construyera más vivienda pública de alquiler, como se hace en otros países europeos.', zh: '在我看来，最好能像其他欧洲国家那样，建更多公共租赁住房。' },
        { who: 'Ruiz', es: 'Eso sí, cabría preguntarse quién la va a financiar y en cuánto tiempo. Las familias no pueden esperar veinte años.', zh: '不过，不禁要问，谁来出资、需要多长时间。家庭可等不了二十年。' },
        { who: 'Moderadora', es: 'Es un tema controvertido, sin duda. Seguiremos después de la pausa.', zh: '这无疑是一个有争议的话题。休息之后我们继续。' },
      ],
    },
  ],
  readings: [
    {
      id: 'c1-r19',
      level: 'C1',
      title: 'La España vaciada',
      titleZh: '被掏空的西班牙',
      topic: '社会',
      paras: [
        [
          ['Mientras ciudades como Madrid o Barcelona no dejan de crecer, buena parte del interior de España se está quedando sin habitantes. Provincias como Soria o Teruel tienen densidades de población comparables a las de algunas zonas de Laponia.', '马德里、巴塞罗那这样的城市不断扩张的同时，西班牙内陆的大片地区却在人去村空。索里亚、特鲁埃尔等省份的人口密度，可以和拉普兰的一些地区相比。'],
        ],
        [
          ['Las causas son conocidas: la falta de empleo, el cierre de escuelas y centros de salud, o unas comunicaciones deficientes. En consecuencia, los jóvenes se marchan y los pueblos envejecen. Hay quienes sostienen que se trata de un proceso inevitable. Sin embargo, lo cierto es que algunas experiencias recientes demuestran lo contrario.', '原因众所周知：缺少工作，学校和医疗中心关闭，交通不便。因此，年轻人纷纷离开，村庄日益老龄化。有人认为这是一个不可避免的过程。然而，最近的一些实践证明事实并非如此。'],
          ['Gracias al teletrabajo y a ciertas ayudas públicas, algunos pueblos han conseguido atraer a nuevos vecinos. Con todo, los expertos advierten de que, sin buenas conexiones a internet y sin servicios básicos, estas iniciativas difícilmente tendrán éxito a largo plazo.', '得益于远程办公和一些公共补助，一些村庄成功吸引了新居民。尽管如此，专家们提醒，如果没有良好的网络连接和基本服务，这些举措很难长期成功。'],
        ],
        [
          ['En los últimos años, el problema ha llegado incluso a la política: movimientos vecinales han conseguido representación en el Parlamento con un mensaje sencillo, que su territorio también existe. Sería deseable que su voz sirviera para algo más que para abrir los telediarios.', '近年来，这个问题甚至进入了政坛：一些居民运动凭着一个简单的口号——“我们的土地也存在”——在议会中赢得了席位。人们希望，他们的声音不只是让新闻开头报道一下而已。'],
        ],
      ],
      gloss: { densidades: '密度', comparables: '可比较的', Laponia: '拉普兰', deficientes: '不足的', 'se marchan': '离开', iniciativas: '举措', vecinales: '居民的', representación: '代表席位', telediarios: '电视新闻' },
      questions: [
        { type: 'mc', q: '内陆人口流失的原因不包括哪一项？', options: ['缺少工作', '学校和医疗中心关闭', '气候太热'], answer: 2 },
        { type: 'tf', q: '作者认为人口流失是不可避免的。', answer: false, explain: 'Sin embargo, lo cierto es que algunas experiencias recientes demuestran lo contrario.' },
        { type: 'mc', q: '专家认为村庄吸引新居民的长期关键是什么？', options: ['更多节日', '良好的网络和基本服务', '更便宜的房子'], answer: 1 },
      ],
    },
    {
      id: 'c1-r20',
      level: 'C1',
      title: '¿Quién vigila al algoritmo?',
      titleZh: '谁来监督算法？',
      topic: '科技伦理',
      paras: [
        [
          ['Los algoritmos deciden cada vez más aspectos de nuestra vida: qué noticias leemos, si un banco nos concede un préstamo o incluso qué candidatos pasan la primera fase de un proceso de selección. No cabe duda de que estas herramientas aportan eficiencia. Ahora bien, ¿quién garantiza que sus decisiones son justas?', '算法正在决定我们生活中越来越多的方面：我们读什么新闻，银行是否给我们贷款，甚至哪些应聘者能通过招聘的第一轮。毫无疑问，这些工具提高了效率。可是，谁来保证它们的决定是公正的？'],
        ],
        [
          ['Frente a quienes ven en la inteligencia artificial un juez neutral, numerosos estudios han demostrado que los algoritmos pueden reproducir los sesgos de los datos con los que se entrenan. Si un sistema aprende de decisiones pasadas que discriminaban a ciertos colectivos, lejos de corregir esa injusticia, la perpetuará.', '与那些把人工智能视为中立裁判的人看法相反，许多研究表明，算法可能会复制训练数据中的偏见。如果一个系统学习的是过去那些歧视某些群体的决定，那么它非但不会纠正这种不公，反而会让它延续下去。'],
          ['Por ello, cada vez más voces abogan por una regulación que exija transparencia y rendición de cuentas. La Unión Europea, por ejemplo, ha aprobado normas específicas para los sistemas considerados de alto riesgo.', '因此，越来越多的人呼吁出台监管，要求透明和问责。比如，欧盟已经针对被视为高风险的系统通过了专门的法规。'],
        ],
        [
          ['A mi juicio, el debate no debería plantearse como una elección entre tecnología y derechos, sino como una cuestión de diseño. Sería deseable que los algoritmos que afectan a la vida de las personas pudieran ser explicados, revisados y, en su caso, corregidos. Al fin y al cabo, no se trata de frenar el progreso, sino de decidir hacia dónde queremos que avance.', '在我看来，这场讨论不应被看成科技与权利之间的二选一，而应被视为一个设计问题。影响人们生活的算法，最好能够被解释、被审查，并在必要时被纠正。说到底，问题不在于阻止进步，而在于决定我们希望它朝哪个方向前进。'],
        ],
      ],
      gloss: { concede: '给予', 'proceso de selección': '招聘流程', eficiencia: '效率', neutral: '中立的', reproducir: '复制', entrenan: '训练', colectivos: '群体', perpetuará: '会使延续', 'alto riesgo': '高风险', frenar: '阻止' },
      questions: [
        { type: 'mc', q: '算法为什么可能不公正？', options: ['因为程序员很坏', '因为它们会复制训练数据中的偏见', '因为运算太慢'], answer: 1 },
        { type: 'mc', q: '作者认为这场讨论应该被看作什么？', options: ['科技与权利二选一', '一个设计问题', '一个经济问题'], answer: 1 },
        { type: 'tf', q: '作者主张阻止人工智能的发展。', answer: false, explain: 'no se trata de frenar el progreso, sino de decidir hacia dónde queremos que avance' },
      ],
    },
  ],
  writing: [{ id: 'w1', prompt: 'DELE C1 写作练习：就一个社会议题（住房、人口老龄化、人工智能、远程教育……）写一篇 220–250 词的议论文。要求：引言、两个以上论据、引出并反驳对立观点、结论；至少用三个确信 / 评价结构、两个反驳结构，并正确使用虚拟式。', words: [220, 260], hints: ['En los últimos años, … se ha convertido en uno de los problemas más acuciantes…', 'No cabe duda de que… / Todo parece indicar que…', 'Hay quienes sostienen que…; sin embargo, lo cierto es que…', 'A mi juicio, sería deseable que…'] }],
}
