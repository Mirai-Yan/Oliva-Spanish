import type { Unit } from '../types'

export const u08: Unit = {
  id: 'a2-u08',
  level: 'A2',
  order: 8,
  title: '比一比',
  titleEs: 'Comparar',
  icon: '⚖️',
  goals: ['比较人、地方和东西', '使用 mejor / peor / mayor / menor', '说“最……”和“非常……”（-ísimo）', '对比城市和乡村的生活'],
  grammar: [
    {
      id: 'a2-comparativos',
      title: '比较级：más… que, menos… que, tan… como',
      titleEs: 'Los comparativos',
      level: 'A2',
      summary: '更……：más + 形容词 + que；不如……：menos… que；和……一样：tan + 形容词 + como / tanto + 名词 + como。',
      body: `### 形容词和副词的比较
| 结构 | 意思 | 例句 |
|---|---|---|
| **más** + 形容词 + **que** | 比……更 | *Madrid es **más** grande **que** Sevilla.* |
| **menos** + 形容词 + **que** | 不如……那么 | *El tren es **menos** caro **que** el avión.* |
| **tan** + 形容词 + **como** | 和……一样 | *Mi hermano es **tan** alto **como** yo.* |

### 名词和动词的比较
| 结构 | 例句 |
|---|---|
| **más / menos** + 名词 + **que** | *Tengo **más** libros **que** tú.* |
| **tanto / tanta / tantos / tantas** + 名词 + **como** | *No tengo **tanto** dinero **como** él.* |
| 动词 + **más / menos que** | *Trabajo **más que** antes.* |
| 动词 + **tanto como** | *No duermo **tanto como** tú.* |

> *tanto* 修饰名词时要变性数：*tanta gente, tantos coches, tantas horas*

### 比较后面的人称代词
*que* / *como* 后面用主格代词：*más alto que **yo**, tan inteligente como **tú***（❌ *que mí*）

### 数字前用 de
*más **de** cien personas*（一百多人）、*menos **de** diez euros*（不到十欧元）`,
      examples: [
        ['Shanghái es más grande que Madrid.', '上海比马德里大。'],
        ['El metro es menos caro que el taxi.', '地铁比出租车便宜。'],
        ['Mi hermana es tan alta como mi padre.', '我妹妹和我爸爸一样高。'],
        ['En la ciudad hay más tráfico que en el pueblo.', '城市里的车比村子里多。'],
        ['No tengo tanto tiempo como antes.', '我没有以前那么多时间了。'],
      ],
      origin: `**más** 来自拉丁语 *magis*（更）。有意思的是，罗曼语在这里分成了两派：西语、葡语、罗马尼亚语用 *magis*（*más, mais, mai*），而法语、意大利语用 *plus*（*plus, più*）。语言学家常用这个特征说明伊比利亚半岛保留了比较古老的拉丁语用法。

**tan / tanto** 来自 *tantum*（这么多），**como** 来自 *quomodo*（以什么方式）。`,
      pitfalls: ['❌ *más grande de Sevilla* ✅ *más grande que Sevilla*（数字前才用 de）', '❌ *tan alto que yo* ✅ *tan alto como yo*。', '❌ *tan dinero como* ✅ *tanto dinero como*。'],
    },
    {
      id: 'a2-comp-irregulares',
      title: '不规则比较级：mejor, peor, mayor, menor',
      titleEs: 'Comparativos irregulares',
      level: 'A2',
      summary: 'bueno / bien → mejor；malo / mal → peor；年龄大 → mayor；年龄小 → menor。',
      body: `| 原级 | 比较级 | 例句 |
|---|---|---|
| bueno / bien | **mejor** | *Este hotel es **mejor** que el otro.* / *Hablas **mejor** que yo.* |
| malo / mal | **peor** | *El tiempo hoy es **peor** que ayer.* |
| （年龄）mayor | **mayor** | *Mi hermana es **mayor** que yo.*（姐姐比我大） |
| （年龄）pequeño / joven | **menor** | *Soy **menor** que mi primo.* |

- ❌ *más bueno、más malo*（说人好坏时有时可以用，但说质量时用 *mejor / peor*）
- 说 **大小**（尺寸）用 *más grande / más pequeño*；说 **年龄** 用 *mayor / menor*
- 复数：*mejores, peores, mayores, menores*

### 其他有用的表达
- *cada vez más / menos*：越来越……：*Hay **cada vez más** turistas.*
- *mucho más / mucho mejor*：……得多：*Es **mucho más** barato.*`,
      examples: [
        ['Tu español es mucho mejor que el mío.', '你的西班牙语比我好得多。'],
        ['Hoy me encuentro peor que ayer.', '我今天感觉比昨天还差。'],
        ['Mi hermano es tres años mayor que yo.', '我哥哥比我大三岁。'],
        ['Las ciudades son cada vez más caras.', '城市越来越贵了。'],
      ],
      origin: `这四个不规则形式直接来自 **拉丁语的不规则比较级**：*meliorem → mejor*、*peiorem → peor*、*maiorem → mayor*、*minorem → menor*。英语 *ameliorate*（改善）、*pejorative*（贬义的）、*major / minor* 都是它们的亲戚。`,
      pitfalls: ['❌ *más mejor* ✅ *mejor*；❌ *más bueno que* （说质量）✅ *mejor que*。', '说年龄用 más grande：口语有人说，但 ✅ *mayor que yo* 更标准。'],
    },
    {
      id: 'a2-superlativos',
      title: '最高级和 -ísimo',
      titleEs: 'El superlativo',
      level: 'A2',
      summary: '最……：el / la / los / las (+ 名词) + más + 形容词 + de；非常……：形容词去掉词尾 + -ísimo。',
      body: `### 相对最高级：“最……”
**定冠词 (+ 名词) + más / menos + 形容词 + de + 范围**
- *Es **el** edificio **más alto de** la ciudad.*（这是城里最高的楼。）
- *Es **la** chica **más simpática de** la clase.*
- 不规则：*el mejor, el peor, el mayor, el menor*：*Es **el mejor** restaurante **del** barrio.*
- 范围用 **de**，不用 *en*：❌ *en la ciudad* ✅ *de la ciudad*

### 绝对最高级：-ísimo（非常、极其）
| 规则 | 例 |
|---|---|
| 去掉最后的元音 + **-ísimo / -ísima** | *bueno → buenísimo*、*caro → carísimo* |
| 辅音结尾直接加 | *fácil → facilísimo* |
| 拼写变化 | *rico → riquísimo*（c → qu）、*largo → larguísimo*（g → gu）、*feliz → felicísimo* |

*La paella está **buenísima**.*（海鲜饭超级好吃。）
*-ísimo* 已经是“非常”的意思，不能再加 *muy*：❌ *muy buenísimo*`,
      examples: [
        ['Es el edificio más alto de la ciudad.', '这是城里最高的楼。'],
        ['Es el mejor restaurante del barrio.', '这是这一带最好的餐馆。'],
        ['Agosto es el mes más caluroso del año.', '八月是一年中最热的月份。'],
        ['Este piso es carísimo.', '这套公寓贵得要命。'],
        ['La tarta está riquísima.', '蛋糕好吃极了。'],
      ],
      origin: `**-ísimo** 来自拉丁语的最高级词尾 *-issimus*：*altissimus*（最高的）。中世纪西语里它几乎消失了，文艺复兴时期又从拉丁语和意大利语重新借了回来，所以带有一点“书面、夸张”的味道——今天在口语里用来表示强调非常常见。`,
      pitfalls: ['❌ *el más alto en la ciudad* ✅ *el más alto de la ciudad*。', '❌ *ricísimo* ✅ *riquísimo*。', '❌ *muy carísimo* ✅ *carísimo*。'],
    },
  ],
  words: [
    { id: 'mas-que', es: 'más… que', zh: '比……更', pos: 'phr', level: 'A2', tags: ['func'], ex: ['Es más alto que yo.', '他比我高。'] },
    { id: 'tan-como', es: 'tan… como', zh: '和……一样', pos: 'phr', level: 'A2', tags: ['func'], ex: ['Es tan caro como el otro.', '它和另一个一样贵。'] },
    { id: 'tanto', es: 'tanto', f: 'tanta', zh: '这么多；那么多', pos: 'det', level: 'A2', tags: ['func'], ex: ['No tengo tanto tiempo.', '我没有那么多时间。'] },
    { id: 'cada-vez-mas', es: 'cada vez más', zh: '越来越……', pos: 'phr', level: 'A2', tags: ['func'], ex: ['Hay cada vez más coches.', '车越来越多了。'] },
    { id: 'capital', es: 'capital', zh: '首都；省会', pos: 'n', g: 'f', pl: 'capitales', level: 'A2', tags: ['city'], ex: ['Madrid es la capital de España.', '马德里是西班牙的首都。'] },
    { id: 'habitante', es: 'habitante', zh: '居民', pos: 'n', g: 'mf', level: 'A2', tags: ['city'], ex: ['Es una ciudad de dos millones de habitantes.', '这是一座有两百万居民的城市。'] },
    { id: 'contaminacion', es: 'contaminación', zh: '污染', pos: 'n', g: 'f', level: 'A2', tags: ['city', 'weather'], ex: ['En las ciudades hay más contaminación.', '城市里污染更严重。'] },
    { id: 'naturaleza', es: 'naturaleza', zh: '大自然', pos: 'n', g: 'f', level: 'A2', tags: ['weather'], ex: ['En el pueblo estás en contacto con la naturaleza.', '在乡下可以接触大自然。'] },
    { id: 'aire', es: 'aire', zh: '空气', pos: 'n', g: 'm', level: 'A2', tags: ['weather'], ex: ['El aire del campo es más limpio.', '乡下的空气更干净。'] },
    { id: 'ruidoso', es: 'ruidoso', f: 'ruidosa', zh: '吵闹的', pos: 'adj', level: 'A2', tags: ['city', 'adj'], ex: ['Mi calle es muy ruidosa.', '我那条街很吵。'] },
    { id: 'moderno', es: 'moderno', f: 'moderna', zh: '现代的', pos: 'adj', level: 'A2', tags: ['adj'], ex: ['Shenzhen es una ciudad muy moderna.', '深圳是一座非常现代的城市。'] },
    { id: 'antiguo', es: 'antiguo', f: 'antigua', zh: '古老的；以前的', pos: 'adj', level: 'A2', tags: ['adj'], ex: ['Toledo es una ciudad antigua.', '托莱多是一座古城。'] },
    { id: 'peligroso', es: 'peligroso', f: 'peligrosa', zh: '危险的', pos: 'adj', level: 'A2', tags: ['adj'], ex: ['Esta carretera es peligrosa.', '这条公路很危险。'] },
    { id: 'seguro', es: 'seguro', f: 'segura', zh: '安全的；确定的', pos: 'adj', level: 'A2', tags: ['adj'], ex: ['Es un barrio muy seguro.', '这是一个很安全的街区。'] },
    { id: 'animado', es: 'animado', f: 'animada', zh: '热闹的；兴致勃勃的', pos: 'adj', level: 'A2', tags: ['adj'], ex: ['El centro es muy animado por la noche.', '市中心晚上很热闹。'] },
    { id: 'caluroso', es: 'caluroso', f: 'calurosa', zh: '炎热的', pos: 'adj', level: 'A2', tags: ['weather'], ex: ['El verano en Sevilla es muy caluroso.', '塞维利亚的夏天很热。'] },
    { id: 'lluvioso', es: 'lluvioso', f: 'lluviosa', zh: '多雨的', pos: 'adj', level: 'A2', tags: ['weather'], ex: ['Galicia es una región lluviosa.', '加利西亚是个多雨的地区。'] },
    { id: 'mejor-adj', es: 'mejor', zh: '更好的；最好的', pos: 'adj', pl: 'mejores', level: 'A2', tags: ['adj'], ex: ['Es mi mejor amiga.', '她是我最好的朋友。'], ety: '拉丁语 meliorem。英语 ameliorate 同源。' },
    { id: 'peor-adj', es: 'peor', zh: '更差的；最差的', pos: 'adj', pl: 'peores', level: 'A2', tags: ['adj'], ex: ['Es la peor película del año.', '这是今年最烂的电影。'], ety: '拉丁语 peiorem。英语 pejorative 同源。' },
    { id: 'vivienda', es: 'vivienda', zh: '住房', pos: 'n', g: 'f', level: 'A2', tags: ['home'], ex: ['La vivienda es muy cara en Barcelona.', '巴塞罗那的房子很贵。'] },
    { id: 'alquiler', es: 'alquiler', zh: '租金；出租', pos: 'n', g: 'm', level: 'A2', tags: ['home'], ex: ['El alquiler cuesta ochocientos euros.', '房租是八百欧。'] },
    { id: 'metro-cuadrado', es: 'metro cuadrado', zh: '平方米', pos: 'n', g: 'm', level: 'A2', tags: ['home', 'number'], ex: ['El piso tiene ochenta metros cuadrados.', '这套公寓八十平方米。'] },
    { id: 'luminoso', es: 'luminoso', f: 'luminosa', zh: '明亮的', pos: 'adj', level: 'A2', tags: ['home', 'adj'], ex: ['Es un piso muy luminoso.', '这套公寓很明亮。'] },
    { id: 'amplio', es: 'amplio', f: 'amplia', zh: '宽敞的', pos: 'adj', level: 'A2', tags: ['home', 'adj'], ex: ['El salón es muy amplio.', '客厅很宽敞。'] },
    { id: 'practico', es: 'práctico', f: 'práctica', zh: '实用的；方便的', pos: 'adj', level: 'A2', tags: ['adj'], ex: ['Vivir en el centro es más práctico.', '住在市中心更方便。'] },
    { id: 'transporte', es: 'transporte público', zh: '公共交通', pos: 'n', g: 'm', level: 'A2', tags: ['city', 'travel'], ex: ['El transporte público es muy bueno.', '公共交通很好。'] },
    { id: 'atasco', es: 'atasco', zh: '堵车', pos: 'n', g: 'm', level: 'A2', tags: ['city'], ex: ['Hay un atasco enorme.', '堵车堵得很厉害。'] },
    { id: 'distancia', es: 'distancia', zh: '距离', pos: 'n', g: 'f', level: 'A2', tags: ['travel'], ex: ['¿Qué distancia hay entre Madrid y Barcelona?', '马德里和巴塞罗那之间有多远？'] },
    { id: 'vida-nocturna', es: 'vida nocturna', zh: '夜生活', pos: 'n', g: 'f', level: 'A2', tags: ['city', 'hobby'], ex: ['Madrid tiene mucha vida nocturna.', '马德里的夜生活很丰富。'] },
    { id: 'ventaja', es: 'ventaja', zh: '优点；优势', pos: 'n', g: 'f', level: 'A2', tags: ['func'], ex: ['Vivir en el campo tiene muchas ventajas.', '住在乡下有很多好处。'] },
    { id: 'desventaja', es: 'desventaja', zh: '缺点；劣势', pos: 'n', g: 'f', level: 'A2', tags: ['func'], ex: ['La mayor desventaja es el ruido.', '最大的缺点是噪音。'] },
    { id: 'en-cambio', es: 'en cambio', zh: '相反；然而', pos: 'phr', level: 'A2', tags: ['func'], ex: ['Mi hermano vive en la ciudad; yo, en cambio, prefiero el campo.', '我哥哥住城里；而我更喜欢乡下。'] },
  ],
  sentences: [
    { id: 's1', es: 'Shanghái es más grande que Madrid.', zh: '上海比马德里大。', g: ['a2-comparativos'], distract: ['de', 'como'] },
    { id: 's2', es: 'El metro es menos caro que el taxi.', zh: '地铁比出租车便宜。', g: ['a2-comparativos'] },
    { id: 's3', es: 'Mi hermana es tan alta como mi padre.', zh: '我妹妹和我爸爸一样高。', g: ['a2-comparativos'], distract: ['que'] },
    { id: 's4', es: 'En la ciudad hay más tráfico que en el pueblo.', zh: '城市里车比村子里多。', g: ['a2-comparativos'] },
    { id: 's5', es: 'No tengo tanto tiempo como antes.', zh: '我没有以前那么多时间了。', g: ['a2-comparativos'], distract: ['tan'] },
    { id: 's6', es: 'Hay más de cien personas.', zh: '有一百多人。', g: ['a2-comparativos'], distract: ['que'] },
    { id: 's7', es: 'Trabajo más que antes.', zh: '我比以前工作得多。', g: ['a2-comparativos'] },
    { id: 's8', es: 'Tu español es mucho mejor que el mío.', zh: '你的西班牙语比我好得多。', g: ['a2-comp-irregulares'], distract: ['bueno'] },
    { id: 's9', es: 'Hoy me encuentro peor que ayer.', zh: '我今天感觉比昨天还差。', g: ['a2-comp-irregulares'] },
    { id: 's10', es: 'Mi hermano es tres años mayor que yo.', zh: '我哥哥比我大三岁。', g: ['a2-comp-irregulares'], distract: ['grande'] },
    { id: 's11', es: 'Las ciudades son cada vez más caras.', zh: '城市越来越贵了。', g: ['a2-comp-irregulares'] },
    { id: 's12', es: 'Es el edificio más alto de la ciudad.', zh: '这是城里最高的楼。', g: ['a2-superlativos'], distract: ['en'] },
    { id: 's13', es: 'Es el mejor restaurante del barrio.', zh: '这是这一带最好的餐馆。', g: ['a2-superlativos'] },
    { id: 's14', es: 'Agosto es el mes más caluroso del año.', zh: '八月是一年中最热的月份。', g: ['a2-superlativos'] },
    { id: 's15', es: 'Este piso es carísimo.', zh: '这套公寓贵得要命。', g: ['a2-superlativos'] },
    { id: 's16', es: 'La tarta está riquísima.', zh: '蛋糕好吃极了。', g: ['a2-superlativos'] },
    { id: 's17', es: 'Vivir en el centro es más práctico.', zh: '住在市中心更方便。', g: ['a2-comparativos'] },
    { id: 's18', es: 'El aire del campo es más limpio.', zh: '乡下的空气更干净。', g: ['a2-comparativos'] },
    { id: 's19', es: 'Yo, en cambio, prefiero el campo.', zh: '而我更喜欢乡下。', g: ['a2-comparativos'] },
  ],
  cloze: [
    { id: 'c1', text: 'Pekín es más grande ___ Barcelona.', answers: ['que'], options: ['que', 'de', 'como'], zh: '北京比巴塞罗那大。', g: ['a2-comparativos'] },
    { id: 'c2', text: 'Mi hermano es tan alto ___ yo.', answers: ['como'], options: ['como', 'que', 'de'], zh: '我哥哥和我一样高。', g: ['a2-comparativos'] },
    { id: 'c3', text: 'No tengo ___ amigos como tú.', answers: ['tantos'], options: ['tantos', 'tan', 'tanto'], zh: '我的朋友没你那么多。', g: ['a2-comparativos'] },
    { id: 'c4', text: 'En esta ciudad hay ___ gente como en Shanghái.', answers: ['tanta'], options: ['tanta', 'tanto', 'tan'], zh: '这座城市的人和上海一样多。', g: ['a2-comparativos'] },
    { id: 'c5', text: 'El billete cuesta más ___ cien euros.', answers: ['de'], options: ['de', 'que', 'como'], zh: '票价超过一百欧。', g: ['a2-comparativos'], explain: '数字前用 más de。' },
    { id: 'c6', text: 'Este café es ___ que el de ayer.', answers: ['mejor'], options: ['mejor', 'más bueno', 'más mejor'], zh: '这杯咖啡比昨天的好。', g: ['a2-comp-irregulares'] },
    { id: 'c7', text: 'Mi abuela es ___ que mi abuelo: tiene 82 años y él, 79.', answers: ['mayor'], options: ['mayor', 'más grande', 'menor'], zh: '我奶奶比我爷爷大：她 82 岁，他 79 岁。', g: ['a2-comp-irregulares'] },
    { id: 'c8', text: 'Hoy hace ___ tiempo que ayer: llueve mucho.', answers: ['peor'], options: ['peor', 'más malo', 'mejor'], zh: '今天天气比昨天差：雨很大。', g: ['a2-comp-irregulares'] },
    { id: 'c9', text: 'Es el chico más simpático ___ la clase.', answers: ['de'], options: ['de', 'en', 'que'], zh: '他是班里最友善的男孩。', g: ['a2-superlativos'] },
    { id: 'c10', text: 'Es ___ mejor película del año.', answers: ['la'], options: ['la', 'una', 'lo'], zh: '这是今年最好的电影。', g: ['a2-superlativos'] },
    { id: 'c11', text: 'El examen fue ___. (muy fácil)', answers: ['facilísimo'], options: ['facilísimo', 'muy facilísimo', 'fácilísimo'], zh: '考试超级简单。', g: ['a2-superlativos'] },
    { id: 'c12', text: 'La comida está ___. (muy rica)', answers: ['riquísima'], options: ['riquísima', 'ricísima', 'muy riquísima'], zh: '饭菜好吃极了。', g: ['a2-superlativos'] },
    { id: 'c13', text: 'Hay ___ vez más turistas en el pueblo.', answers: ['cada'], options: ['cada', 'más', 'tanta'], zh: '村子里的游客越来越多。', g: ['a2-comp-irregulares'] },
    { id: 'c14', text: 'El tren es ___ rápido que el autobús.', answers: ['más'], options: ['más', 'tan', 'tanto'], zh: '火车比大巴快。', g: ['a2-comparativos'] },
  ],
  dialogues: [
    {
      id: 'a2-u08-d1',
      title: '城市还是乡村？· ¿Ciudad o pueblo?',
      lines: [
        { who: 'Raúl', es: 'Estoy pensando en mudarme al pueblo de mis padres. En Madrid todo es carísimo.', zh: '我在考虑搬回我父母的村子。马德里什么都贵得要命。' },
        { who: 'Yu', es: '¿En serio? Pero en el pueblo hay menos trabajo que aquí.', zh: '真的吗？可是村里的工作机会比这儿少。' },
        { who: 'Raúl', es: 'Sí, pero puedo trabajar desde casa. Y el alquiler es mucho más barato.', zh: '是啊，不过我可以在家办公。而且房租便宜得多。' },
        { who: 'Yu', es: 'Es verdad. Además, el aire es más limpio y hay menos ruido.', zh: '确实。而且空气更干净，噪音也更少。' },
        { who: 'Raúl', es: 'Exacto. Lo peor es que no hay tanta vida nocturna como en Madrid.', zh: '没错。最糟的是夜生活没有马德里那么丰富。' },
        { who: 'Yu', es: 'Bueno, siempre puedes venir a visitarnos los fines de semana.', zh: '没关系，你周末随时可以回来看我们。' },
      ],
    },
  ],
  readings: [
    {
      id: 'a2-r15',
      level: 'A2',
      title: 'Madrid y Barcelona',
      titleZh: '马德里和巴塞罗那',
      topic: '城市',
      paras: [
        [
          ['Madrid y Barcelona son las dos ciudades más grandes de España.', '马德里和巴塞罗那是西班牙最大的两座城市。'],
          ['Madrid tiene más habitantes que Barcelona: más de tres millones, frente a un millón y medio.', '马德里的人口比巴塞罗那多：三百多万，而巴塞罗那是一百五十万。'],
        ],
        [
          ['Barcelona tiene playa y su clima es más suave.', '巴塞罗那有海滩，气候更温和。'],
          ['En Madrid, en cambio, los veranos son más calurosos y los inviernos, más fríos.', '而马德里夏天更热，冬天更冷。'],
        ],
        [
          ['Las dos ciudades tienen museos importantísimos y una vida cultural muy animada.', '两座城市都有非常重要的博物馆，文化生活都很丰富。'],
          ['¿Cuál es la mejor? Depende de lo que te guste: el mar o los museos, el catalán o el castellano…', '哪一座最好？那要看你喜欢什么：大海还是博物馆，加泰罗尼亚语还是卡斯蒂利亚语……'],
          ['¡Lo mejor es visitar las dos!', '最好的办法是两座都去！'],
        ],
      ],
      gloss: { frente: '对比（frente a 相对于）', medio: '半', clima: '气候', suave: '温和的', 'cambio': '变化（en cambio 而）', cultural: '文化的', Depende: '取决于', guste: '让你喜欢（虚拟式）', catalán: '加泰罗尼亚语', castellano: '卡斯蒂利亚语（西班牙语）' },
      questions: [
        { type: 'mc', q: '哪座城市人口更多？', options: ['马德里', '巴塞罗那', '一样多'], answer: 0 },
        { type: 'tf', q: '马德里的冬天比巴塞罗那冷。', answer: true },
        { type: 'mc', q: '巴塞罗那有什么马德里没有的？', options: ['博物馆', '海滩', '夜生活'], answer: 1 },
      ],
    },
    {
      id: 'a2-r16',
      level: 'A2',
      title: 'Dejé la ciudad',
      titleZh: '我离开了城市',
      topic: '生活方式',
      paras: [
        [
          ['Hace dos años vivía en Barcelona y trabajaba en una oficina diez horas al día.', '两年前我住在巴塞罗那，每天在办公室工作十个小时。'],
          ['Tenía más dinero que ahora, pero menos tiempo y mucho más estrés.', '那时我比现在有钱，但时间更少，压力也大得多。'],
        ],
        [
          ['Ahora vivo en un pueblo de los Pirineos de doscientos habitantes.', '现在我住在比利牛斯山区一个两百人的村子里。'],
          ['Trabajo desde casa y por las tardes paseo por la montaña.', '我在家办公，下午就去山里散步。'],
          ['Mi casa es más grande y el alquiler es la mitad que en Barcelona.', '我的房子更大，房租只有巴塞罗那的一半。'],
        ],
        [
          ['No todo es perfecto: el invierno es larguísimo y el supermercado más cercano está a veinte kilómetros.', '也不是一切都完美：冬天特别漫长，最近的超市在二十公里外。'],
          ['Pero soy mucho más feliz. No cambio esta vida por nada.', '但我比以前幸福得多。给我什么我都不换这样的生活。'],
        ],
      ],
      gloss: { Dejé: '我离开了', Pirineos: '比利牛斯山', paseo: '我散步', mitad: '一半', perfecto: '完美的', larguísimo: '非常长的', cercano: '近的', kilómetros: '公里', cambio: '我换' },
      questions: [
        { type: 'tf', q: '作者以前在巴塞罗那挣的钱比现在多。', answer: true },
        { type: 'mc', q: '作者现在住的村子有多少人？', options: ['两百人', '两千人', '两万人'], answer: 0 },
        { type: 'mc', q: '住在村子里的缺点是什么？', options: ['房租贵', '冬天很长、超市很远', '没有网络'], answer: 1 },
      ],
    },
  ],
  writing: [{ id: 'w1', prompt: '比较你的家乡和你现在住的（或想去的）城市：大小、天气、价格、交通、生活方式，最后说说你更喜欢哪里、为什么。', words: [70, 130], hints: ['… es más / menos … que …', '… no es tan … como …', 'Lo mejor de… es… / Lo peor es…'] }],
}
