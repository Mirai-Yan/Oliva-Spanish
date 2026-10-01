import type { Unit } from '../types'

export const u05: Unit = {
  id: 'b2-u05',
  level: 'B2',
  order: 5,
  title: '变化',
  titleEs: 'Cambiar',
  icon: '🦋',
  goals: ['区分表示“变成”的动词：ponerse, volverse, hacerse, convertirse en, llegar a ser, quedarse', '描述情绪、性格、身份和处境的变化', '用 acabar + 副动词 说“最后落得……”', '讲述人、城市或社会的变迁'],
  grammar: [
    {
      id: 'b2-ponerse-volverse',
      title: 'ponerse 和 volverse',
      titleEs: 'Ponerse y volverse',
      level: 'B2',
      summary: 'ponerse + 形容词：突然的、暂时的变化（情绪、身体、外表）：ponerse rojo / nervioso / enfermo。volverse + 形容词：持久的、往往出人意料的性格变化：volverse loco / egoísta / desconfiado。',
      body: `中文一个“变得”，西班牙语有好几个动词，关键看 **变化的性质**。

### ponerse：突然、暂时
| 例句 | 意思 |
|---|---|
| *Se **puso** rojo cuando lo vio.* | 他一看见她就脸红了。 |
| *Me **pongo** nervioso en los exámenes.* | 我考试时会紧张。 |
| *El cielo se **puso** negro.* | 天一下子黑了。 |
| *Se **ha puesto** muy guapa para la boda.* | 她为了婚礼打扮得很漂亮。 |

常见搭配：*ponerse triste / contento / enfermo / pálido / de mal humor / celoso*

### volverse：持久、根本，常带意外色彩
| 例句 | 意思 |
|---|---|
| *Con la fama, se **volvió** muy arrogante.* | 出名之后他变得很傲慢。 |
| *Desde el accidente se **ha vuelto** muy desconfiada.* | 事故之后她变得很多疑。 |
| *¡Te **has vuelto** loco!* | 你疯了吧！ |

常见搭配：*volverse loco / egoísta / insoportable / más tolerante / desconfiado*

### 对比
- *Se **puso** triste.*（那一刻难过了）
- *Se **volvió** una persona triste.*（变成了一个忧郁的人）`,
      examples: [
        ['Se puso rojo cuando ella le sonrió.', '她对他一笑，他就脸红了。'],
        ['Me pongo muy nervioso cuando hablo en público.', '当众讲话时我会很紧张。'],
        ['Con la fama, se volvió muy arrogante.', '出名之后他变得很傲慢。'],
        ['Desde el robo se ha vuelto muy desconfiada.', '被偷之后她变得很多疑。'],
        ['¿Te has vuelto loco? ¡Son las tres de la mañana!', '你疯了吗？现在是凌晨三点！'],
      ],
      tables: [{ verbs: ['ponerse', 'volverse'], tense: 'pret' }],
      origin: `**volver** 来自拉丁语 *volvere*「转动、翻滚」：*volverse* 就像人“翻了个面”，变成另一个样子。英语 *revolve*（旋转）、*evolve*（进化，“展开”）同源。

**ponerse** 来自 *ponere*「放置」：*ponerse nervioso* =“把自己放进紧张的状态里”——就像 *ponerse el abrigo*（穿上外套）一样，可以穿上，也可以脱下，所以是 **暂时的**。`,
      pitfalls: ['❌ *Me hice rojo.* ✅ *Me puse rojo.*', '❌ *Se volvió en loco.* ✅ *Se volvió loco.*：volverse 后面直接接形容词。', '❌ *Se puso egoísta para siempre.* ✅ *Se volvió egoísta.*'],
    },
    {
      id: 'b2-hacerse-convertirse',
      title: 'hacerse, convertirse en, llegar a ser',
      titleEs: 'Hacerse, convertirse en, llegar a ser',
      level: 'B2',
      summary: 'hacerse + 名词 / 形容词：逐渐的、常是主动选择的变化（身份、职业、信仰、年龄）：hacerse médico / rico / vegetariano / mayor。convertirse en + 名词：彻底的转变。llegar a ser：经过努力最终成为。',
      body: `### hacerse：逐渐地、主动地
| 例句 | 意思 |
|---|---|
| *Se **hizo** médico después de diez años de estudios.* | 学了十年，他成了医生。 |
| *Me **he hecho** vegetariana.* | 我开始吃素了。 |
| *Se **hicieron** ricos con el turismo.* | 他们靠旅游业发了财。 |
| *Nos **hacemos** mayores.* | 我们都老了。 |
| *Se **hizo** famoso con una canción.* | 他靠一首歌出了名。 |

### convertirse en + 名词：彻底的变身
| 例句 | 意思 |
|---|---|
| *El pueblo se **convirtió en** una ciudad turística.* | 那个村子变成了旅游城市。 |
| *La rana se **convirtió en** príncipe.* | 青蛙变成了王子。 |
| *Su afición se **ha convertido en** su trabajo.* | 他的爱好变成了他的工作。 |

> *convertirse* 后面一定有 **en**，而且接 **名词**。

### llegar a ser：努力之后的“终于成为”
*Empezó como camarera y **llegó a ser** directora del hotel.*（她从服务员做起，最终当上了酒店总经理。）

### 小结
| 动词 | 变化 | 接什么 |
|---|---|---|
| *ponerse* | 突然、暂时 | 形容词 |
| *volverse* | 持久、出乎意料 | 形容词 |
| *hacerse* | 逐渐、主动 | 名词 / 形容词 |
| *convertirse en* | 彻底 | 名词 |
| *llegar a ser* | 努力后达到 | 名词 / 形容词 |`,
      examples: [
        ['Se hizo médico después de diez años de estudios.', '学了十年，他成了医生。'],
        ['Me he hecho vegetariana este año.', '我今年开始吃素了。'],
        ['El pueblo se convirtió en una ciudad turística.', '那个村子变成了一座旅游城市。'],
        ['Su afición se ha convertido en su trabajo.', '他的爱好变成了他的工作。'],
        ['Empezó como camarera y llegó a ser directora del hotel.', '她从服务员做起，最终当上了酒店总经理。'],
      ],
      tables: [{ verbs: ['hacerse', 'convertir'], tense: 'pret' }],
      origin: `**convertir** 来自拉丁语 *convertere*：*con*「完全」+ *vertere*「转」——“彻底转过来”。最早多指宗教上的“皈依”，英语 *convert* 也是这样。

**hacerse** 就是“把自己做成”：*hacerse médico*，像是一点一点把自己“造”成了医生，所以强调过程和主动。`,
      pitfalls: ['❌ *Se puso médico.* ✅ *Se hizo médico.*', '❌ *Se convirtió famoso.* ✅ *Se hizo famoso.* / *Se convirtió en una estrella.*', '❌ *Se convirtió a una ciudad.* ✅ *Se convirtió en una ciudad.*'],
    },
    {
      id: 'b2-quedarse',
      title: 'quedarse 和 acabar：事件留下的结果',
      titleEs: 'Quedarse y acabar',
      level: 'B2',
      summary: 'quedarse + 形容词 / 分词：某件事之后留下的状态（常是负面或突然的）：quedarse ciego / viudo / sin trabajo / dormido / embarazada。acabar / terminar + 副动词：最后落得……',
      body: `### quedarse：某事发生后“留在”某种状态
| 例句 | 意思 |
|---|---|
| *Se **quedó** ciego a los cuarenta años.* | 他四十岁时失明了。 |
| *Mi abuela se **quedó** viuda muy joven.* | 我奶奶很年轻就守了寡。 |
| *Con la crisis, muchos se **quedaron sin** trabajo.* | 经济危机中很多人失业了。 |
| *Me **quedé** dormido en el sofá.* | 我在沙发上睡着了。 |
| *Se **quedó** embarazada en mayo.* | 她五月怀孕了。 |
| *Nos **quedamos** sorprendidos.* | 我们都愣住了。 |

### quedarse en blanco：脑子一片空白
*En el examen **me quedé en blanco**.*（考试时我脑子一片空白。）

### acabar / terminar + 副动词：最后落得……
*Estudió Derecho, pero **acabó trabajando** de cocinero.*（他学的是法律，最后却当了厨师。）
*Si sigues así, **vas a terminar odiando** tu trabajo.*（你再这样下去，最后会恨上你的工作的。）

也可以接形容词：*Acabé **harto** de tanto ruido.*`,
      examples: [
        ['Se quedó ciego a los cuarenta años.', '他四十岁时失明了。'],
        ['Con la crisis, muchos se quedaron sin trabajo.', '经济危机中很多人失业了。'],
        ['Me quedé dormido viendo la película.', '看电影时我睡着了。'],
        ['En el examen me quedé en blanco.', '考试时我脑子一片空白。'],
        ['Estudió Derecho, pero acabó trabajando de cocinero.', '他学的是法律，最后却当了厨师。'],
      ],
      origin: `**quedar** 来自通俗拉丁语 *quietare*「使安静、使停住」，源自 *quietus*「安静的」。所以 *quedarse* 的核心意思是“停留在（某种状态里）”：*quedarse en casa*（待在家里），*quedarse ciego*（停在了失明的状态）。

**viudo / viuda** 来自拉丁语 *viduus*「失去的、空的」，英语 *widow* 也来自同一个印欧语词根。`,
      pitfalls: ['❌ *Se puso viuda.* ✅ *Se quedó viuda.*', '❌ *Me quedé dormir.* ✅ *Me quedé dormido.*', '❌ *Acabó a trabajar de camarero.* ✅ *Acabó trabajando de camarero.*'],
    },
  ],
  words: [
    { id: 'transformacion', es: 'transformación', zh: '转变', pos: 'n', g: 'f', pl: 'transformaciones', level: 'B2', tags: ['func'], ex: ['La ciudad ha sufrido una gran transformación.', '这座城市经历了巨大的转变。'] },
    { id: 'transformar', es: 'transformar', zh: '使转变', pos: 'v', level: 'B2', tags: ['verb'], ex: ['La tecnología ha transformado nuestra vida.', '科技改变了我们的生活。'] },
    { id: 'evolucion', es: 'evolución', zh: '演变；进化', pos: 'n', g: 'f', pl: 'evoluciones', level: 'B2', tags: ['func'], ex: ['La evolución del idioma es constante.', '语言一直在演变。'] },
    { id: 'evolucionar', es: 'evolucionar', zh: '发展；演变', pos: 'v', level: 'B2', tags: ['verb'], ex: ['El paciente evoluciona favorablemente.', '病人情况好转。'] },
    { id: 'transicion', es: 'transición', zh: '过渡', pos: 'n', g: 'f', pl: 'transiciones', level: 'B2', tags: ['func'], ex: ['La Transición española empezó en 1975.', '西班牙民主过渡始于 1975 年。'] },
    { id: 'madurar', es: 'madurar', zh: '成熟', pos: 'v', level: 'B2', tags: ['verb'], ex: ['Ha madurado mucho este año.', '他今年成熟了很多。'] },
    { id: 'envejecer', es: 'envejecer', zh: '变老', pos: 'v', level: 'B2', tags: ['verb'], ex: ['La población española envejece.', '西班牙人口正在老龄化。'], note: '-cer → -zco：envejezco。' },
    { id: 'rejuvenecer', es: 'rejuvenecer', zh: '变年轻', pos: 'v', level: 'B2', tags: ['verb'], ex: ['¡Pareces rejuvenecido!', '你看起来年轻了！'] },
    { id: 'calvo', es: 'calvo', zh: '秃头的', pos: 'adj', f: 'calva', level: 'B2', tags: ['body'], ex: ['Mi padre se quedó calvo a los treinta.', '我爸三十岁就秃了。'] },
    { id: 'canas', es: 'canas', zh: '白头发', pos: 'n', g: 'f', level: 'B2', tags: ['body'], ex: ['Ya me están saliendo canas.', '我已经开始长白头发了。'] },
    { id: 'arruga', es: 'arruga', zh: '皱纹；褶皱', pos: 'n', g: 'f', level: 'B2', tags: ['body'], ex: ['Tiene arrugas alrededor de los ojos.', '他眼角有皱纹。'] },
    { id: 'vejez', es: 'vejez', zh: '老年', pos: 'n', g: 'f', level: 'B2', tags: ['time'], ex: ['Quiero una vejez tranquila.', '我想要一个安稳的晚年。'] },
    { id: 'viudo', es: 'viudo', zh: '丧偶的；鳏夫', pos: 'adj', f: 'viuda', level: 'B2', tags: ['family'], ex: ['Se quedó viuda a los cincuenta.', '她五十岁时丧偶。'] },
    { id: 'huerfano', es: 'huérfano', zh: '孤儿', pos: 'n', g: 'm', f: 'huérfana', level: 'B2', tags: ['family'], ex: ['Se quedó huérfano de niño.', '他小时候就成了孤儿。'] },
    { id: 'divorciado', es: 'divorciado', zh: '离婚的', pos: 'adj', f: 'divorciada', level: 'B2', tags: ['family'], ex: ['Sus padres están divorciados.', '他父母离婚了。'] },
    { id: 'jubilado', es: 'jubilado', zh: '退休的；退休人员', pos: 'adj', f: 'jubilada', level: 'B2', tags: ['job'], ex: ['Mi abuelo está jubilado.', '我爷爷退休了。'] },
    { id: 'parado', es: 'parado', zh: '失业的；失业者', pos: 'adj', f: 'parada', level: 'B2', tags: ['job'], ex: ['Lleva un año parado.', '他失业一年了。'], latam: '拉美更常说 desempleado。' },
    { id: 'enriquecerse', es: 'enriquecerse', zh: '致富', pos: 'v', level: 'B2', tags: ['verb'], ex: ['Se enriqueció con la construcción.', '他靠建筑业发了财。'] },
    { id: 'arruinarse', es: 'arruinarse', zh: '破产；毁掉', pos: 'v', level: 'B2', tags: ['verb'], ex: ['Se arruinó en el casino.', '他在赌场输得倾家荡产。'] },
    { id: 'ruina', es: 'ruina', zh: '破产；废墟', pos: 'n', g: 'f', level: 'B2', tags: ['func'], ex: ['La empresa está en la ruina.', '公司濒临破产。'] },
    { id: 'fama', es: 'fama', zh: '名声', pos: 'n', g: 'f', level: 'B2', tags: ['people'], ex: ['La fama le cambió.', '出名改变了他。'] },
    { id: 'vegetariano', es: 'vegetariano', zh: '素食的；素食者', pos: 'adj', f: 'vegetariana', level: 'B2', tags: ['food'], ex: ['Me hice vegetariano hace dos años.', '我两年前开始吃素。'] },
    { id: 'vegano', es: 'vegano', zh: '纯素的；纯素食者', pos: 'adj', f: 'vegana', level: 'B2', tags: ['food'], ex: ['¿Hay opciones veganas en el menú?', '菜单上有纯素的选择吗？'] },
    { id: 'creyente', es: 'creyente', zh: '信教的；信徒', pos: 'adj', level: 'B2', tags: ['people'], ex: ['No soy creyente.', '我不信教。'] },
    { id: 'ateo', es: 'ateo', zh: '无神论的；无神论者', pos: 'adj', f: 'atea', level: 'B2', tags: ['people'], ex: ['Se hizo ateo en la universidad.', '他在大学里成了无神论者。'] },
    { id: 'adaptacion', es: 'adaptación', zh: '适应；改编', pos: 'n', g: 'f', pl: 'adaptaciones', level: 'B2', tags: ['func'], ex: ['La adaptación a un nuevo país lleva tiempo.', '适应一个新国家需要时间。'] },
    { id: 'irreconocible', es: 'irreconocible', zh: '认不出来的', pos: 'adj', level: 'B2', tags: ['adj'], ex: ['Está irreconocible con el pelo corto.', '他剪了短发，都认不出来了。'] },
    { id: 'desconfiado', es: 'desconfiado', zh: '多疑的', pos: 'adj', f: 'desconfiada', level: 'B2', tags: ['feel'], ex: ['Se ha vuelto muy desconfiado.', '他变得很多疑。'] },
    { id: 'amargado', es: 'amargado', zh: '愤世嫉俗的；心怀怨恨的', pos: 'adj', f: 'amargada', level: 'B2', tags: ['feel'], ex: ['No seas tan amargado.', '别那么愤世嫉俗。'] },
    { id: 'loco', es: 'loco', zh: '疯的', pos: 'adj', f: 'loca', level: 'B2', tags: ['feel'], ex: ['¡Estás loco!', '你疯了！'], note: 'volverse loco = 发疯；estar loco por alguien = 为某人着迷。' },
    { id: 'histerico', es: 'histérico', zh: '歇斯底里的', pos: 'adj', f: 'histérica', level: 'B2', tags: ['feel'], ex: ['Se puso histérica cuando vio la araña.', '她看到蜘蛛就歇斯底里起来。'] },
    { id: 'palido', es: 'pálido', zh: '苍白的', pos: 'adj', f: 'pálida', level: 'B2', tags: ['body'], ex: ['Te has puesto pálido. ¿Estás bien?', '你脸色发白。你没事吧？'] },
    { id: 'colorado', es: 'colorado', zh: '脸红的；红色的', pos: 'adj', f: 'colorada', level: 'B2', tags: ['body'], ex: ['Se puso colorado de vergüenza.', '他羞得满脸通红。'] },
    { id: 'superficial', es: 'superficial', zh: '肤浅的', pos: 'adj', level: 'B2', tags: ['feel'], ex: ['Es una persona muy superficial.', '他是个很肤浅的人。'] },
    { id: 'materialista', es: 'materialista', zh: '物质主义的', pos: 'adj', level: 'B2', tags: ['feel'], ex: ['La sociedad se ha vuelto más materialista.', '社会变得更物质了。'] },
    { id: 'consumista', es: 'consumista', zh: '消费主义的', pos: 'adj', level: 'B2', tags: ['shop'], ex: ['Vivimos en una sociedad consumista.', '我们生活在消费主义社会里。'] },
    { id: 'despoblacion', es: 'despoblación', zh: '人口流失', pos: 'n', g: 'f', level: 'B2', tags: ['city'], ex: ['La despoblación afecta a muchos pueblos.', '人口流失影响着很多村镇。'] },
    { id: 'despoblado', es: 'despoblado', zh: '人口稀少的；荒无人烟的', pos: 'adj', f: 'despoblada', level: 'B2', tags: ['city'], ex: ['Es una zona muy despoblada.', '那是个人烟稀少的地区。'], note: '西班牙内陆人口流失严重的地区被称为 la España vaciada。' },
    { id: 'pueblo-fantasma', es: 'pueblo fantasma', zh: '鬼镇（被遗弃的村子）', pos: 'n', g: 'm', level: 'B2', tags: ['city'], ex: ['En Aragón hay muchos pueblos fantasma.', '阿拉贡有很多无人村。'] },
    { id: 'rascacielos', es: 'rascacielos', zh: '摩天大楼', pos: 'n', g: 'm', pl: 'rascacielos', level: 'B2', tags: ['city'], ex: ['Benidorm está lleno de rascacielos.', '贝尼多姆到处是摩天大楼。'], ety: 'rasca「刮」+ cielos「天空」：“刮天空的东西”，仿照英语 skyscraper。' },
    { id: 'modernizar', es: 'modernizar', zh: '使现代化', pos: 'v', level: 'B2', tags: ['verb'], ex: ['Han modernizado el centro de la ciudad.', '他们把市中心改造得很现代。'] },
    { id: 'progreso', es: 'progreso', zh: '进步', pos: 'n', g: 'm', level: 'B2', tags: ['func'], ex: ['Has hecho muchos progresos.', '你进步很大。'] },
    { id: 'retroceso', es: 'retroceso', zh: '倒退', pos: 'n', g: 'm', level: 'B2', tags: ['func'], ex: ['Esta ley es un retroceso.', '这项法律是一种倒退。'] },
    { id: 'turistico', es: 'turístico', zh: '旅游的', pos: 'adj', f: 'turística', level: 'B2', tags: ['travel'], ex: ['Es una zona muy turística.', '那是个旅游区。'] },
    { id: 'hacerse-mayor', es: 'hacerse mayor', zh: '长大；变老', pos: 'phr', level: 'B2', tags: ['time'], ex: ['¡Cómo te has hecho mayor!', '你都长这么大了！'] },
    { id: 'quedarse-en-blanco', es: 'quedarse en blanco', zh: '脑子一片空白', pos: 'phr', level: 'B2', tags: ['feel'], ex: ['Me quedé en blanco en la entrevista.', '面试时我脑子一片空白。'] },
    { id: 'volverse-loco', es: 'volverse loco', zh: '发疯', pos: 'phr', level: 'B2', tags: ['feel'], ex: ['Con tanto ruido me voy a volver loca.', '这么吵我要疯了。'] },
    { id: 'llegar-a-ser', es: 'llegar a ser', zh: '最终成为', pos: 'phr', level: 'B2', tags: ['job'], ex: ['Llegó a ser presidenta de la empresa.', '她最终当上了公司总裁。'] },
    { id: 'convertirse', es: 'convertirse', zh: '变成', pos: 'v', level: 'B2', tags: ['verb'], ex: ['Se convirtió en un gran escritor.', '他成了一位伟大的作家。'], note: '一定接 en + 名词；e→ie / i：se convierte，se convirtió。' },
    { id: 'volverse', es: 'volverse', zh: '变得（持久变化）；转身', pos: 'v', level: 'B2', tags: ['verb'], ex: ['Se volvió y me miró.', '他转过身看着我。'] },
    { id: 'ponerse', es: 'ponerse', zh: '变得（暂时变化）；穿上', pos: 'v', level: 'B2', tags: ['verb'], ex: ['Se puso muy contenta.', '她特别高兴。'] },
    { id: 'hacerse', es: 'hacerse', zh: '成为；变得（逐渐）', pos: 'v', level: 'B2', tags: ['verb'], ex: ['Se hizo rico con internet.', '他靠互联网发了财。'] },
  ],
  sentences: [
    { id: 's1', es: 'Se puso rojo cuando ella le sonrió.', zh: '她对他一笑，他就脸红了。', g: ['b2-ponerse-volverse'], distract: ['hizo'] },
    { id: 's2', es: 'Me pongo muy nervioso cuando hablo en público.', zh: '当众讲话时我会很紧张。', g: ['b2-ponerse-volverse'] },
    { id: 's3', es: 'Con la fama, se volvió muy arrogante.', zh: '出名之后他变得很傲慢。', g: ['b2-ponerse-volverse'], distract: ['puso'] },
    { id: 's4', es: '¿Te has vuelto loco?', zh: '你疯了吗？', g: ['b2-ponerse-volverse'] },
    { id: 's5', es: 'Se hizo médico después de diez años de estudios.', zh: '学了十年，他成了医生。', g: ['b2-hacerse-convertirse'], distract: ['puso'] },
    { id: 's6', es: 'Me he hecho vegetariana este año.', zh: '我今年开始吃素了。', g: ['b2-hacerse-convertirse'] },
    { id: 's7', es: 'El pueblo se convirtió en una ciudad turística.', zh: '那个村子变成了一座旅游城市。', g: ['b2-hacerse-convertirse'], distract: ['a'] },
    { id: 's8', es: 'Empezó como camarera y llegó a ser directora del hotel.', zh: '她从服务员做起，最终当上了酒店总经理。', g: ['b2-hacerse-convertirse'] },
    { id: 's9', es: 'Se quedó ciego a los cuarenta años.', zh: '他四十岁时失明了。', g: ['b2-quedarse'] },
    { id: 's10', es: 'Con la crisis, muchos se quedaron sin trabajo.', zh: '经济危机中很多人失业了。', g: ['b2-quedarse'] },
    { id: 's11', es: 'Me quedé dormido viendo la película.', zh: '看电影时我睡着了。', g: ['b2-quedarse'] },
    { id: 's12', es: 'En el examen me quedé en blanco.', zh: '考试时我脑子一片空白。', g: ['b2-quedarse'] },
    { id: 's13', es: 'Estudió Derecho, pero acabó trabajando de cocinero.', zh: '他学的是法律，最后却当了厨师。', g: ['b2-quedarse'] },
    { id: 's14', es: '¡Cómo te has hecho mayor!', zh: '你都长这么大了！', g: ['b2-hacerse-convertirse'] },
    { id: 's15', es: 'Ya me están saliendo canas.', zh: '我已经开始长白头发了。' },
    { id: 's16', es: 'La población española envejece.', zh: '西班牙人口正在老龄化。' },
    { id: 's17', es: 'Te has puesto pálido. ¿Estás bien?', zh: '你脸色发白。你没事吧？', g: ['b2-ponerse-volverse'] },
    { id: 's18', es: 'Su afición se ha convertido en su trabajo.', zh: '他的爱好变成了他的工作。', g: ['b2-hacerse-convertirse'] },
    { id: 's19', es: 'Mi abuela se quedó viuda muy joven.', zh: '我奶奶很年轻就守了寡。', g: ['b2-quedarse'] },
    { id: 's20', es: 'Se hicieron ricos con el turismo.', zh: '他们靠旅游业发了财。', g: ['b2-hacerse-convertirse'] },
    { id: 's21', es: 'Desde el robo se ha vuelto muy desconfiada.', zh: '被偷之后她变得很多疑。', g: ['b2-ponerse-volverse'] },
    { id: 's22', es: 'Nos quedamos sorprendidos con la noticia.', zh: '听到这个消息，我们都愣住了。', g: ['b2-quedarse'] },
    { id: 's23', es: 'La despoblación afecta a muchos pueblos.', zh: '人口流失影响着很多村镇。' },
    { id: 's24', es: 'Está irreconocible con el pelo corto.', zh: '他剪了短发，都认不出来了。' },
    { id: 's25', es: 'Si sigues así, vas a acabar odiando tu trabajo.', zh: '你再这样下去，最后会恨上你的工作的。', g: ['b2-quedarse'] },
  ],
  cloze: [
    { id: 'c1', text: 'Cuando me miró, me ___ rojo.', answers: ['puse'], options: ['puse', 'volví', 'hice'], zh: '他一看我，我就脸红了。', g: ['b2-ponerse-volverse'] },
    { id: 'c2', text: 'Mi madre se ___ muy contenta con la noticia.', answers: ['puso'], options: ['puso', 'hizo', 'convirtió'], zh: '听到这个消息，我妈妈特别高兴。', g: ['b2-ponerse-volverse'] },
    { id: 'c3', text: 'Desde que es rico, se ha ___ muy egoísta.', answers: ['vuelto'], options: ['vuelto', 'puesto', 'quedado'], zh: '自从有了钱，他变得很自私。', g: ['b2-ponerse-volverse'] },
    { id: 'c4', text: 'Con tanto trabajo me voy a ___ loca.', answers: ['volver'], options: ['volver', 'poner', 'hacer'], zh: '这么多工作我要疯了。', g: ['b2-ponerse-volverse'] },
    { id: 'c5', text: 'Estudió mucho y se ___ abogada.', answers: ['hizo'], options: ['hizo', 'puso', 'volvió'], zh: '她刻苦学习，成了律师。', g: ['b2-hacerse-convertirse'] },
    { id: 'c6', text: 'El antiguo mercado se ha convertido ___ un centro cultural.', answers: ['en'], options: ['en', 'a', 'de'], zh: '旧市场变成了一个文化中心。', g: ['b2-hacerse-convertirse'] },
    { id: 'c7', text: 'Gracias a su esfuerzo, llegó ___ ser ministra.', answers: ['a'], options: ['a', 'de', 'en'], zh: '凭着自己的努力，她当上了部长。', g: ['b2-hacerse-convertirse'] },
    { id: 'c8', text: 'Mi hermano se ___ vegano el año pasado.', answers: ['hizo'], options: ['hizo', 'puso', 'quedó'], zh: '我哥去年开始吃纯素了。', g: ['b2-hacerse-convertirse'] },
    { id: 'c9', text: 'Con esa canción se ___ famosa en todo el mundo.', answers: ['hizo'], options: ['hizo', 'convirtió', 'puso'], zh: '凭那首歌她红遍了全世界。', g: ['b2-hacerse-convertirse'] },
    { id: 'c10', text: 'Después del accidente se ___ sordo de un oído.', answers: ['quedó'], options: ['quedó', 'puso', 'hizo'], zh: '事故之后他一只耳朵聋了。', g: ['b2-quedarse'] },
    { id: 'c11', text: 'Cuando cerró la fábrica, mi padre se quedó ___ trabajo.', answers: ['sin'], options: ['sin', 'de', 'en'], zh: '工厂倒闭后，我爸失业了。', g: ['b2-quedarse'] },
    { id: 'c12', text: 'Me quedé ___ en el autobús y me pasé de parada.', answers: ['dormido'], options: ['dormido', 'dormir', 'durmiendo'], zh: '我在公交车上睡着了，坐过了站。', g: ['b2-quedarse'] },
    { id: 'c13', text: 'Quería ser actor, pero acabó ___ en un banco.', answers: ['trabajando'], hint: 'trabajar', zh: '他想当演员，最后却在银行上班。', g: ['b2-quedarse'] },
    { id: 'c14', text: 'Cuando vio la sangre, se ___ pálido.', answers: ['puso'], options: ['puso', 'volvió', 'quedó'], zh: '一看到血，他脸色就白了。', g: ['b2-ponerse-volverse'] },
    { id: 'c15', text: 'La rana se ___ en príncipe.', answers: ['convirtió'], hint: 'convertirse', zh: '青蛙变成了王子。', g: ['b2-hacerse-convertirse'] },
    { id: 'c16', text: 'En la entrevista me quedé en ___.', answers: ['blanco'], options: ['blanco', 'negro', 'rojo'], zh: '面试时我脑子一片空白。', g: ['b2-quedarse'] },
    { id: 'c17', text: '¡Cómo te has ___ mayor!', answers: ['hecho'], options: ['hecho', 'puesto', 'vuelto'], zh: '你都长这么大了！', g: ['b2-hacerse-convertirse'] },
    { id: 'c18', text: 'Me ___ nerviosa siempre que voy al dentista.', answers: ['pongo'], options: ['pongo', 'vuelvo', 'hago'], zh: '我每次去看牙医都会紧张。', g: ['b2-ponerse-volverse'] },
  ],
  conj: [
    { verbs: ['ponerse', 'volverse', 'hacerse', 'quedarse', 'convertir'], tenses: ['pret', 'pperf'], g: 'b2-hacerse-convertirse' },
    { verbs: ['envejecer', 'enriquecerse', 'madurar', 'acabar'], tenses: ['pres'], g: 'b2-quedarse' },
  ],
  dialogues: [
    {
      id: 'b2-u05-d1',
      title: '十五年后重逢 · Quince años después',
      lines: [
        { who: 'Elena', es: '¿Andrés? ¡No me lo puedo creer! Estás irreconocible.', zh: '安德烈斯？真不敢相信！你变得我都认不出来了。' },
        { who: 'Andrés', es: '¡Elena! Ya, me he quedado calvo, ¿eh? Tú, en cambio, estás igual.', zh: '埃莱娜！是啊，我秃了，对吧？你倒是一点没变。' },
        { who: 'Elena', es: 'Qué va, ya tengo canas. Oye, ¿sigues siendo ingeniero?', zh: '哪有，我都有白头发了。哎，你还在当工程师吗？' },
        { who: 'Andrés', es: 'No, hace cinco años me quedé sin trabajo y, después de pensarlo mucho, me hice panadero. Ahora tengo mi propia panadería.', zh: '没有，五年前我失业了，想了很久之后，我当了面包师。现在我有自己的面包店。' },
        { who: 'Elena', es: '¡Qué cambio! ¿Y no te arrepientes?', zh: '变化真大！你不后悔吗？' },
        { who: 'Andrés', es: 'Para nada. Antes me ponía de mal humor cada lunes. Ahora me levanto a las cuatro, pero soy feliz. ¿Y tú?', zh: '一点也不。以前每个星期一我心情都很差。现在我四点起床，但很开心。你呢？' },
        { who: 'Elena', es: 'Yo me fui a vivir a un pueblo de Teruel. Se estaba quedando vacío y con otros vecinos lo hemos convertido en un pueblo de teletrabajadores.', zh: '我搬到特鲁埃尔的一个村子去住了。那里人越来越少，我和其他村民把它变成了一个远程办公者之村。' },
        { who: 'Andrés', es: '¡Vaya! Al final los dos hemos acabado haciendo cosas que nunca habríamos imaginado.', zh: '哇！最后我们俩都做了从没想过的事。' },
      ],
    },
  ],
  readings: [
    {
      id: 'b2-r09',
      level: 'B2',
      title: 'Benidorm: de pueblo de pescadores a ciudad de rascacielos',
      titleZh: '贝尼多姆：从渔村到摩天大楼之城',
      topic: '城市',
      paras: [
        [
          ['A mediados del siglo XX, Benidorm era un pequeño pueblo de pescadores y agricultores en la costa de Alicante. Muchos de sus jóvenes emigraban porque no había trabajo.', '二十世纪中叶，贝尼多姆还是阿利坎特海岸边一个由渔民和农民组成的小村子。因为没有工作，很多年轻人都外出谋生。'],
        ],
        [
          ['En los años cincuenta, el alcalde Pedro Zaragoza decidió que el futuro del pueblo estaba en el turismo. Según cuenta la leyenda, incluso viajó en Vespa hasta Madrid para defender que las turistas extranjeras pudieran llevar bikini en sus playas, algo que entonces escandalizaba a muchos.', '五十年代，市长佩德罗·萨拉戈萨认定小镇的未来在旅游业。据传说，他甚至骑着韦士柏摩托车一路到马德里，为外国女游客能在当地海滩穿比基尼争取许可，这在当时令很多人震惊。'],
          ['En pocas décadas, el pueblo se convirtió en una de las ciudades turísticas más famosas de Europa. Los pescadores se hicieron hoteleros y los campos de almendros se llenaron de edificios.', '短短几十年，这个村子就变成了欧洲最著名的旅游城市之一。渔民们开起了酒店，杏树田里盖满了楼房。'],
        ],
        [
          ['Hoy Benidorm tiene uno de los perfiles urbanos más llamativos del Mediterráneo, con decenas de rascacielos. Para algunos se ha vuelto un símbolo del turismo de masas; para otros, es un ejemplo de ciudad compacta que ocupa poco territorio.', '如今，贝尼多姆拥有地中海沿岸最引人注目的城市天际线之一，矗立着数十座摩天大楼。在一些人眼里，它成了大众旅游的象征；在另一些人看来，它是紧凑型城市的典范，占地很少。'],
          ['Lo que nadie discute es que aquel pueblo de pescadores llegó a ser algo que sus abuelos nunca habrían imaginado.', '没人否认的是，那个渔村最终变成了祖辈们做梦都想不到的样子。'],
        ],
      ],
      gloss: { 'A mediados': '在……中期', agricultores: '农民', escandalizaba: '使震惊', décadas: '几十年', hoteleros: '酒店经营者', almendros: '杏树', perfiles: '轮廓', llamativos: '引人注目的', masas: '大众', compacta: '紧凑的' },
      questions: [
        { type: 'mc', q: '五十年代以前贝尼多姆是什么样的？', options: ['工业城市', '渔民和农民的小村子', '军事基地'], answer: 1 },
        { type: 'mc', q: '据传说，市长为什么去马德里？', options: ['争取穿比基尼的许可', '买摩托车', '找工作'], answer: 0 },
        { type: 'tf', q: '所有人都认为贝尼多姆是城市规划的好榜样。', answer: false, explain: 'Para algunos se ha vuelto un símbolo del turismo de masas; para otros…' },
      ],
    },
    {
      id: 'b2-r10',
      level: 'B2',
      title: 'De abogada a quesera',
      titleZh: '从律师到奶酪师',
      topic: '人生',
      paras: [
        [
          ['Durante quince años, Laura trabajó en un gran bufete de Madrid. Ganaba mucho dinero, pero se pasaba el día en la oficina y cada domingo por la noche se ponía de mal humor pensando en el lunes.', '十五年来，劳拉在马德里一家大律师事务所工作。她赚很多钱，但整天待在办公室里，每个星期天晚上一想到星期一就心情变差。'],
        ],
        [
          ['«Un día me di cuenta de que me estaba volviendo una persona amargada», cuenta. Ese mismo año se quedó embarazada de su primer hijo y decidió que había llegado el momento de cambiar de vida.', '“有一天我意识到，我正在变成一个愤世嫉俗的人，”她说。就在那一年，她怀上了第一个孩子，于是决定是时候换一种生活了。'],
          ['Se mudó con su familia al pueblo de su abuela, en la sierra, hizo un curso de elaboración de quesos y, poco a poco, se convirtió en una de las queseras más conocidas de la comarca.', '她和家人搬到了奶奶在山区的村子，参加了一个奶酪制作课程，渐渐地成了当地最有名的奶酪师之一。'],
        ],
        [
          ['No todo fue fácil: el primer invierno estuvo a punto de arruinarse. «Me puse muy nerviosa, pero no me rendí». Hoy vende sus quesos en toda España y da trabajo a seis personas del pueblo.', '并非一帆风顺：第一个冬天她差点破产。“我当时特别紧张，但我没放弃。”如今她的奶酪卖到了全西班牙，还为村里的六个人提供了工作。'],
          ['«No me he hecho rica», dice riéndose, «pero me he hecho feliz, que es mucho más difícil».', '“我没发财，”她笑着说，“但我变得幸福了，这可难多了。”'],
        ],
      ],
      gloss: { bufete: '律师事务所', amargada: '愤世嫉俗的', sierra: '山区', elaboración: '制作', queseras: '奶酪师', comarca: '地区', 'a punto de': '差点' },
      questions: [
        { type: 'mc', q: '劳拉为什么决定换一种生活？', options: ['被公司开除了', '意识到自己正在变得愤世嫉俗', '中了彩票'], answer: 1 },
        { type: 'tf', q: '劳拉做奶酪的第一年就很成功。', answer: false, explain: 'el primer invierno estuvo a punto de arruinarse' },
        { type: 'mc', q: '劳拉说什么比发财更难？', options: ['做奶酪', '变得幸福', '找到工作'], answer: 1 },
      ],
    },
  ],
  writing: [{ id: 'w1', prompt: '描述一个改变很大的人或地方（你自己、家人、朋友、你的家乡……）：过去怎么样，发生了什么，现在变成了什么样。至少用到 ponerse、volverse、hacerse、convertirse en、quedarse 中的四个。', words: [130, 220], hints: ['Antes era… / Hace diez años…', 'Después de…, se quedó… / se puso…', 'Con el tiempo se volvió… / se hizo…', 'Hoy se ha convertido en…'] }],
}
