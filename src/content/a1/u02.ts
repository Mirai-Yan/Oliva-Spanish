import type { Unit } from '../types'

export const u02: Unit = {
  id: 'a1-u02',
  level: 'A1',
  order: 2,
  title: '你从哪里来？',
  titleEs: '¿De dónde eres?',
  icon: '🌍',
  goals: ['说出自己的国籍、来自哪里、做什么工作', '判断名词的阴阳性，正确使用冠词', '把名词和形容词变成复数，并做到性数一致'],
  grammar: [
    {
      id: 'a1-genero',
      title: '名词的阴阳性',
      titleEs: 'El género de los sustantivos',
      level: 'A1',
      summary: '所有名词都有性：一般 -o 结尾是阳性、-a 结尾是阴性，但有常见例外。',
      body: `西语的 **每个名词** 都有语法上的性别：阳性（masculino）或阴性（femenino）。这不只是“男女”，桌子、书、城市也都有性。

### 基本规律
| 词尾 | 性 | 例词 |
|---|---|---|
| **-o** | 大多是阳性 | *el libro*（书）、*el chico*（男孩） |
| **-a** | 大多是阴性 | *la casa*（房子）、*la chica*（女孩） |
| **-ción、-sión、-dad、-tad** | 阴性 | *la canción*（歌）、*la ciudad*（城市） |
| **-or、-aje** | 大多是阳性 | *el profesor*、*el viaje*（旅行） |
| **-e、其他辅音** | 都有可能，要单独记 | *el coche*（车）、*la noche*（夜晚） |

### 常见例外（必背！）
- 阳性但以 -a 结尾：**el día**（天）、**el mapa**（地图）、**el idioma**（语言）、**el problema**（问题）、**el sofá**
- 阴性但以 -o 结尾：**la mano**（手）、**la foto**（照片）、**la moto**（摩托车）、**la radio**

### 表示人的名词
- 换词尾：*el profesor → la profesora*，*el médico → la médica*，*el alemán → la alemana*
- 阴阳同形，只换冠词：*el / la estudiante*，*el / la periodista*，*el / la taxista*
- 完全不同的词：*el hombre*（男人）/ *la mujer*（女人），*el padre / la madre*

> 💡 学单词时 **连冠词一起记**：不记 *día*，记 *el día*。`,
      examples: [
        ['El día es bonito.', '天气（这一天）很好。'],
        ['La mano y el pie.', '手和脚。'],
        ['El problema es el idioma.', '问题在于语言。'],
        ['Ella es periodista.', '她是记者。'],
      ],
      origin: `**为什么桌子是阴性的？** 拉丁语的名词有三种性：阳性、阴性和 **中性**。西语在演变中把中性取消了，大部分中性名词并入了阳性。

有个有趣的例外：拉丁语中性名词的 **复数** 以 *-a* 结尾，有些在西语里被当成了阴性单数：
- *folia*（许多叶子）→ **la hoja**（叶子）
- *ligna*（许多木头）→ **la leña**（柴火）

而 **el día、el mapa、el problema** 以 -a 结尾却是阳性，是因为它们在拉丁语或希腊语里本来就是阳性或中性（*problema、idioma* 来自希腊语中性名词）。`,
      pitfalls: ['看到 -a 就认定是阴性：❌ *la día* ✅ **el día**，❌ *la problema* ✅ **el problema**。', '忘记阴性形式：她是医生 → *Ella es **médica***（口语里也有人说 *la médico*）。'],
    },
    {
      id: 'a1-articulos',
      title: '定冠词和不定冠词',
      titleEs: 'Los artículos',
      level: 'A1',
      summary: 'el / la / los / las 相当于“这个、那个”；un / una / unos / unas 相当于“一个、一些”。',
      body: `冠词要和名词的 **性、数** 保持一致：

| | 阳性单数 | 阴性单数 | 阳性复数 | 阴性复数 |
|---|---|---|---|---|
| **定冠词** | el | la | los | las |
| **不定冠词** | un | una | unos | unas |

### 什么时候用哪个？
- **不定冠词 un / una**：第一次提到、说明“某一个”：*Tengo **un** amigo en México.*（我在墨西哥有个朋友。）
- **定冠词 el / la**：已经知道是哪一个，或泛指一类事物：***El** amigo de Ana es mexicano.*（安娜的那个朋友是墨西哥人。）

### 特殊规则
- **a + el = al**，**de + el = del**：*Soy **del** norte.*（我来自北方。）
- 以重读 *a-* 或 *ha-* 开头的阴性名词，单数用 **el / un**（为了好读）：***el** agua*（水）、***el** aula*（教室）——但它们仍是阴性：*el agua fría*（冷水），复数 *las aguas*。
- 说职业、国籍时 **不用冠词**：*Soy **profesor**.*、*Es **china**.*`,
      examples: [
        ['Es un chico español.', '他是一个西班牙男孩。'],
        ['La chica es de Colombia.', '那个女孩来自哥伦比亚。'],
        ['Los estudiantes son chinos.', '学生们是中国人。'],
        ['Soy del sur de China.', '我来自中国南方。'],
      ],
      origin: `**拉丁语没有冠词！** 西语的冠词是后来“造”出来的：
- 定冠词 **el / la / los / las** 来自拉丁语指示代词 *ille / illa / illos / illas*（那个 / 那些）。说得多了，意思变弱，就成了冠词。所以 *el* 和代词 *él*（他）是“亲兄弟”。
- 不定冠词 **un / una** 来自拉丁语数词 *unus / una*（一）。

法语（le, la, un）、意大利语（il, la, un）也是这样演变出来的。`,
      pitfalls: ['说职业时加冠词：❌ *Es una médica.* ✅ *Es médica.*（除非后面有形容词：*Es una médica muy buena.*）', '忘记缩合：❌ *de el profesor* ✅ **del** *profesor*。'],
    },
    {
      id: 'a1-plural',
      title: '复数与性数一致',
      titleEs: 'El plural y la concordancia',
      level: 'A1',
      summary: '元音结尾加 -s，辅音结尾加 -es；形容词要和名词的性、数一致。',
      body: `### 名词变复数
| 规则 | 单数 → 复数 |
|---|---|
| 元音结尾：加 **-s** | *libro → libros*，*estudiante → estudiantes* |
| 辅音结尾：加 **-es** | *profesor → profesores*，*ciudad → ciudades* |
| **-z** 结尾：z 变 c，加 -es | *lápiz → lápices* |
| 重音符号可能消失或出现 | *canción → canciones*，*alemán → alemanes*，*joven → jóvenes* |

> 重音符号为什么会变？因为加了一个音节后，重读位置不变，但重音规则的判断变了（回顾 A0 重音规则）。

### 形容词的性数一致
形容词要跟着名词变：
| | 阳性 | 阴性 |
|---|---|---|
| -o 结尾 | *chino / chinos* | *china / chinas* |
| 国籍（辅音结尾） | *español / españoles* | ***española** / españolas* |
| -e 或其他辅音结尾 | *amable*、*estadounidense* | 同形 |

*Él es chino.* / *Ella es china.* / *Ellos son chinos.* / *Ellas son chinas.*

⚠️ 国籍形容词的阴性要加 **-a**：*inglés → inglesa*，*alemán → alemana*，*francés → francesa*（重音符号去掉）。

### 形容词一般放在名词后面
*un chico **chino***（一个中国男孩），*la ciudad **grande***（大城市）`,
      examples: [
        ['Ellas son españolas.', '她们是西班牙人。'],
        ['Los profesores son alemanes.', '老师们是德国人。'],
        ['Es una ciudad española.', '这是一座西班牙城市。'],
        ['Tres canciones inglesas.', '三首英语歌。'],
      ],
      origin: `西语复数词尾 **-s** 来自拉丁语名词的 **宾格复数**：*libros* ← 拉丁语 *libros*（宾格）、*casas* ← *casas*、*ciudades* ← *civitates*。西班牙语、葡萄牙语、法语（书写上）都用 -s 做复数，而意大利语用 -i / -e，是因为意大利语继承的是拉丁语的 **主格复数**（*libri*）。`,
      pitfalls: ['国籍阴性忘记变：❌ *Ella es español.* ✅ *Ella es **española**.*', '复数忘了去掉重音：❌ *canciónes* ✅ *canciones*。'],
    },
    {
      id: 'a1-origen',
      title: '说国籍、来源和职业',
      titleEs: 'Nacionalidad, origen y profesión',
      level: 'A1',
      summary: '¿De dónde eres? — Soy de China. / Soy chino.  ¿A qué te dedicas? — Soy médico.',
      body: `### 问来源和国籍
| 问 | 答 |
|---|---|
| **¿De dónde eres?** 你是哪里人？ | **Soy de** China / Pekín. 我来自中国 / 北京。 |
| **¿De dónde es usted?** 您是哪里人？ | **Soy chino / china.** 我是中国人。 |
| **¿De dónde sois?** 你们是哪里人？ | **Somos de** Shanghái. |

- ***ser de* + 地点**：来自某地
- ***ser* + 国籍形容词**：是某国人（形容词要性数一致）
- 国家名首字母大写（*China, España*），**国籍形容词和语言小写**（*chino, español*）

### 问职业
| 问 | 答 |
|---|---|
| **¿A qué te dedicas?** 你是做什么的？ | **Soy** ingeniero. 我是工程师。 |
| **¿Qué haces?** 你做什么？（口语） | **Soy** estudiante. |
| **¿En qué trabajas?** 你做什么工作？ | **Trabajo en** un hospital. 我在医院工作。 |

### 语言
国籍的阳性形式同时也是语言名：*el chino*（汉语）、*el español*（西班牙语）、*el inglés*（英语）。
*Hablo chino y un poco de español.*（我说汉语和一点点西班牙语。）`,
      examples: [
        ['¿De dónde eres?', '你是哪里人？'],
        ['Soy de China, de Pekín.', '我来自中国北京。'],
        ['Ella es mexicana y es médica.', '她是墨西哥人，是医生。'],
        ['¿A qué te dedicas?', '你是做什么的？'],
        ['Hablo chino, inglés y un poco de español.', '我会说汉语、英语和一点西班牙语。'],
      ],
      origin: `**¿A qué te dedicas?** 里的 *dedicarse*（致力于）来自拉丁语 *dedicare*（奉献）。英语 *dedicate* 同源。“你把自己奉献给什么？”——西语用这种说法礼貌地问职业。

**español 的来历有点特别**：它并不是从 *España* 直接派生的西语词，一般认为是从普罗旺斯语 *espaignol* 借来的（中世纪法国南部商人这样称呼伊比利亚人）。`,
      latam: '拉美问职业也常说 **¿A qué te dedicas?** 或 **¿Qué haces?**；“服务员” 在西班牙是 *camarero*，在墨西哥是 *mesero*，阿根廷是 *mozo*。',
      pitfalls: ['国籍大写：❌ *Soy Chino.* ✅ *Soy chino.*', '把“我来自中国”说成 ❌ *Soy China*（=我是中国这个国家）✅ *Soy **de** China* 或 *Soy chino/china*。'],
    },
  ],
  words: [
    { id: 'pais', es: 'país', zh: '国家', pos: 'n', g: 'm', pl: 'países', level: 'A1', tags: ['country'], ex: ['España es un país bonito.', '西班牙是个美丽的国家。'], ety: '来自古法语 païs < 拉丁语 pagensis「乡间的」，来自 pagus「乡村」。', emoji: '🗺️' },
    { id: 'china-pais', es: 'China', zh: '中国', pos: 'n', g: 'f', level: 'A1', tags: ['country'], ex: ['Soy de China.', '我来自中国。'], ety: '经由葡萄牙语、波斯语等传入，一般认为源于“秦”。', emoji: '🇨🇳' },
    { id: 'espana', es: 'España', zh: '西班牙', pos: 'n', g: 'f', level: 'A1', tags: ['country'], ex: ['Vivo en España.', '我住在西班牙。'], ety: '拉丁语 Hispania（罗马行省名）→ España。', emoji: '🇪🇸' },
    { id: 'mexico', es: 'México', zh: '墨西哥', pos: 'n', g: 'm', level: 'A1', tags: ['country'], ex: ['México es muy grande.', '墨西哥很大。'], ety: '来自纳瓦特尔语 Mēxihco（阿兹特克人的首都）。x 保留古拼写，读 [x]。', emoji: '🇲🇽' },
    { id: 'chino', es: 'chino', f: 'china', zh: '中国的；中国人；汉语', pos: 'adj', level: 'A1', tags: ['country'], ex: ['Mi amiga es china.', '我的朋友是中国人。'], note: '作名词 el chino 表示“汉语”。' },
    { id: 'espanol', es: 'español', f: 'española', zh: '西班牙的；西班牙人；西班牙语', pos: 'adj', level: 'A1', tags: ['country'], ex: ['Hablo un poco de español.', '我会说一点西班牙语。'], ety: '一般认为借自古普罗旺斯语 espaignol，来自中世纪拉丁语 Hispaniolus。', note: '阴性：española；复数：españoles。' },
    { id: 'ingles', es: 'inglés', f: 'inglesa', zh: '英国的；英国人；英语', pos: 'adj', level: 'A1', tags: ['country'], ex: ['Él es inglés, de Londres.', '他是英国人，伦敦人。'], note: '阴性、复数没有重音符号：inglesa, ingleses。' },
    { id: 'frances', es: 'francés', f: 'francesa', zh: '法国的；法国人；法语', pos: 'adj', level: 'A1', tags: ['country'], ex: ['La profesora es francesa.', '老师是法国人。'] },
    { id: 'aleman', es: 'alemán', f: 'alemana', zh: '德国的；德国人；德语', pos: 'adj', level: 'A1', tags: ['country'], ex: ['Tengo un amigo alemán.', '我有一个德国朋友。'], ety: '来自日耳曼部落名 Alamanni（阿勒曼尼人），意为“所有的人”。' },
    { id: 'mexicano', es: 'mexicano', f: 'mexicana', zh: '墨西哥的；墨西哥人', pos: 'adj', level: 'A1', tags: ['country'], ex: ['La comida mexicana es rica.', '墨西哥菜很好吃。'] },
    { id: 'estadounidense', es: 'estadounidense', zh: '美国的；美国人', pos: 'adj', level: 'A1', tags: ['country'], ex: ['Él es estadounidense.', '他是美国人。'], note: '阴阳同形。口语也说 americano，但在拉美 americano 可以指整个美洲的人。' },
    { id: 'medico', es: 'médico', f: 'médica', zh: '医生', pos: 'n', g: 'm', level: 'A1', tags: ['job', 'body'], ex: ['Mi madre es médica.', '我妈妈是医生。'], ety: '拉丁语 medicus「医生」，来自 mederi「治疗」。英语 medical、medicine 同源。', emoji: '🧑‍⚕️' },
    { id: 'enfermero', es: 'enfermero', f: 'enfermera', zh: '护士', pos: 'n', g: 'm', level: 'A1', tags: ['job', 'body'], ex: ['Ella es enfermera en un hospital.', '她是医院的护士。'], ety: 'enfermo「病人」< 拉丁语 infirmus「不强壮的」。英语 infirm 同源。', emoji: '👩‍⚕️' },
    { id: 'ingeniero', es: 'ingeniero', f: 'ingeniera', zh: '工程师', pos: 'n', g: 'm', level: 'A1', tags: ['job'], ex: ['Soy ingeniero informático.', '我是软件工程师。'], ety: '来自 ingenio「机智，机械」< 拉丁语 ingenium「天资」。英语 engineer、ingenious 同源。', emoji: '👷' },
    { id: 'abogado', es: 'abogado', f: 'abogada', zh: '律师', pos: 'n', g: 'm', level: 'A1', tags: ['job'], ex: ['Su padre es abogado.', '他的父亲是律师。'], ety: '拉丁语 advocatus「被叫来（帮忙）的人」。英语 advocate 同源。', emoji: '⚖️' },
    { id: 'camarero', es: 'camarero', f: 'camarera', zh: '服务员', pos: 'n', g: 'm', level: 'A1', tags: ['job', 'food'], ex: ['El camarero es muy amable.', '服务员很友善。'], ety: '来自 cámara「房间」，原指“侍从”。', latam: '墨西哥：mesero；阿根廷：mozo。', emoji: '🧑‍🍳' },
    { id: 'cocinero', es: 'cocinero', f: 'cocinera', zh: '厨师', pos: 'n', g: 'm', level: 'A1', tags: ['job', 'food'], ex: ['Mi hermano es cocinero.', '我哥哥是厨师。'], ety: 'cocina「厨房」< 拉丁语 coquina，来自 coquere「煮」。英语 cook、kitchen 同源。', emoji: '👨‍🍳' },
    { id: 'periodista', es: 'periodista', zh: '记者', pos: 'n', g: 'mf', level: 'A1', tags: ['job'], ex: ['Ella es periodista.', '她是记者。'], ety: 'periódico「报纸」+ -ista。', note: '阴阳同形：el/la periodista。', emoji: '📰' },
    { id: 'taxista', es: 'taxista', zh: '出租车司机', pos: 'n', g: 'mf', level: 'A1', tags: ['job', 'travel'], ex: ['El taxista es de Madrid.', '出租车司机是马德里人。'], emoji: '🚕' },
    { id: 'hombre', es: 'hombre', zh: '男人；人', pos: 'n', g: 'm', level: 'A1', tags: ['people'], ex: ['El hombre es alto.', '那个男人很高。'], ety: '拉丁语 hominem「人」：m-n 变成了 -mbr-，h 是拉丁语原有的。', emoji: '👨' },
    { id: 'mujer', es: 'mujer', zh: '女人；妻子', pos: 'n', g: 'f', pl: 'mujeres', level: 'A1', tags: ['people'], ex: ['La mujer es española.', '那位女士是西班牙人。'], ety: '拉丁语 mulier「女人」。', emoji: '👩' },
    { id: 'chico', es: 'chico', f: 'chica', zh: '男孩；小伙子', pos: 'n', g: 'm', level: 'A1', tags: ['people'], ex: ['Los chicos son estudiantes.', '这些小伙子是学生。'], ety: '拉丁语 ciccum「小东西」，原义“小的”。', emoji: '🧒' },
    { id: 'persona', es: 'persona', zh: '人', pos: 'n', g: 'f', level: 'A1', tags: ['people'], ex: ['Es una persona muy simpática.', '他（她）是个很好的人。'], ety: '拉丁语 persona「面具（演员戴的）」。英语 person、personality 同源。', note: '永远是阴性，指男性也一样：Juan es una persona amable。' },
    { id: 'ciudad', es: 'ciudad', zh: '城市', pos: 'n', g: 'f', pl: 'ciudades', level: 'A1', tags: ['city'], ex: ['Madrid es una ciudad grande.', '马德里是一座大城市。'], ety: '拉丁语 civitatem「公民的集体」。英语 city、civil 同源。', emoji: '🏙️' },
    { id: 'idioma', es: 'idioma', zh: '语言', pos: 'n', g: 'm', level: 'A1', tags: ['school'], ex: ['El español es un idioma bonito.', '西班牙语是一门美丽的语言。'], ety: '希腊语 idíōma「特有的（说法）」，希腊语中性名词，所以在西语中是阳性。英语 idiom 同源。', note: '以 -a 结尾，但是阳性：el idioma。' },
    { id: 'dia', es: 'día', zh: '天；白天', pos: 'n', g: 'm', level: 'A1', tags: ['time'], ex: ['Hoy es un día bonito.', '今天是美好的一天。'], ety: '拉丁语 dies。', note: '以 -a 结尾，但是阳性：el día, buenos días。', emoji: '☀️' },
    { id: 'mapa', es: 'mapa', zh: '地图', pos: 'n', g: 'm', level: 'A1', tags: ['travel'], ex: ['El mapa de España.', '西班牙地图。'], ety: '拉丁语 mappa「布，餐巾」→ mappa mundi「世界之布」。英语 map 同源。', note: '阳性：el mapa。', emoji: '🗺️' },
    { id: 'problema', es: 'problema', zh: '问题', pos: 'n', g: 'm', level: 'A1', tags: ['func'], ex: ['No hay problema.', '没问题。'], ety: '希腊语 próblēma（中性）。所以是阳性。', note: '阳性：el problema。' },
    { id: 'mano', es: 'mano', zh: '手', pos: 'n', g: 'f', level: 'A1', tags: ['body'], ex: ['Levanta la mano.', '举手。'], ety: '拉丁语 manus（阴性）。英语 manual、manicure 同源。', note: '以 -o 结尾，但是阴性：la mano。', emoji: '✋' },
    { id: 'foto', es: 'foto', zh: '照片', pos: 'n', g: 'f', level: 'A1', tags: ['hobby'], ex: ['Es una foto de mi familia.', '这是我家人的照片。'], ety: 'fotografía 的缩写，所以是阴性。希腊语 phōs「光」+ graphein「写」。', note: '阴性：la foto。', emoji: '📷' },
    { id: 'libro', es: 'libro', zh: '书', pos: 'n', g: 'm', level: 'A1', tags: ['school'], ex: ['El libro es de Ana.', '这本书是安娜的。'], ety: '拉丁语 liber「树皮 → 书」（古人在树皮上写字）。英语 library 同源。', emoji: '📘' },
    { id: 'cancion', es: 'canción', zh: '歌', pos: 'n', g: 'f', pl: 'canciones', level: 'A1', tags: ['hobby'], ex: ['Es una canción española.', '这是一首西班牙歌。'], ety: '拉丁语 cantionem，来自 canere「唱」。', emoji: '🎵' },
    { id: 'de-donde', es: '¿de dónde?', zh: '从哪里？', pos: 'phr', level: 'A1', tags: ['func'], ex: ['¿De dónde eres?', '你是哪里人？'], ety: 'dónde < 拉丁语 de unde「从哪里」。有趣的是 unde 本来就是“从哪里”，后来又加了一个 de。' },
    { id: 'hablar', es: 'hablar', zh: '说；讲', pos: 'v', level: 'A1', tags: ['verb'], ex: ['¿Hablas español?', '你说西班牙语吗？'], ety: '拉丁语 fabulari「聊天」（来自 fabula「故事」）：词首 f 变成了不发音的 h。英语 fable 同源。' },
    { id: 'un-poco', es: 'un poco', zh: '一点儿', pos: 'phr', level: 'A1', tags: ['func'], ex: ['Hablo un poco de español.', '我会说一点西班牙语。'], ety: 'poco < 拉丁语 paucum「少」。英语 paucity 同源。' },
  ],
  sentences: [
    { id: 's1', es: '¿De dónde eres?', zh: '你是哪里人？', g: ['a1-origen'] },
    { id: 's2', es: 'Soy de China.', zh: '我来自中国。', g: ['a1-origen'] },
    { id: 's3', es: 'Ella es española.', zh: '她是西班牙人。', g: ['a1-plural', 'a1-origen'], distract: ['español', 'de'] },
    { id: 's4', es: 'Ellos son mexicanos.', zh: '他们是墨西哥人。', g: ['a1-plural'], distract: ['mexicano', 'es'] },
    { id: 's5', es: '¿A qué te dedicas?', zh: '你是做什么的？', g: ['a1-origen'] },
    { id: 's6', es: 'Soy ingeniero.', zh: '我是工程师。', alt: ['Soy ingeniera'], g: ['a1-origen', 'a1-articulos'], distract: ['un', 'una'] },
    { id: 's7', es: 'Mi madre es médica.', zh: '我妈妈是医生。', g: ['a1-genero'], distract: ['médico', 'una'] },
    { id: 's8', es: 'El día es bonito.', zh: '天气（这一天）很好。', g: ['a1-genero'], distract: ['la', 'bonita'] },
    { id: 's9', es: 'La mano de Ana.', zh: '安娜的手。', g: ['a1-genero'], distract: ['el'] },
    { id: 's10', es: 'El idioma es el problema.', zh: '语言是个问题。', g: ['a1-genero'], distract: ['la'] },
    { id: 's11', es: 'Es un chico español.', zh: '他是一个西班牙男孩。', g: ['a1-articulos'], distract: ['una', 'española'] },
    { id: 's12', es: 'La chica es de Colombia.', zh: '那个女孩来自哥伦比亚。', g: ['a1-articulos'] },
    { id: 's13', es: 'Los estudiantes son chinos.', zh: '学生们是中国人。', g: ['a1-articulos', 'a1-plural'] },
    { id: 's14', es: 'Tengo un amigo en México.', zh: '我在墨西哥有一个朋友。', g: ['a1-articulos'] },
    { id: 's15', es: 'Soy del sur de China.', zh: '我来自中国南方。', g: ['a1-articulos'], distract: ['el'] },
    { id: 's16', es: 'Los profesores son alemanes.', zh: '老师们是德国人。', g: ['a1-plural'] },
    { id: 's17', es: 'Ellas son inglesas.', zh: '她们是英国人。', g: ['a1-plural'], distract: ['ingleses'] },
    { id: 's18', es: 'Madrid es una ciudad grande.', zh: '马德里是一座大城市。', g: ['a1-articulos'] },
    { id: 's19', es: 'Hablo chino y un poco de español.', zh: '我说汉语和一点西班牙语。', g: ['a1-origen'] },
    { id: 's20', es: 'Ella es periodista.', zh: '她是记者。', g: ['a1-genero', 'a1-origen'], distract: ['una'] },
    { id: 's21', es: 'Somos estudiantes chinos.', zh: '我们是中国学生。', g: ['a1-plural'] },
    { id: 's22', es: 'Es una canción francesa.', zh: '这是一首法语歌。', g: ['a1-plural'], distract: ['francés'] },
    { id: 's23', es: 'El taxista es de Madrid.', zh: '出租车司机是马德里人。', g: ['a1-origen'] },
    { id: 's24', es: '¿Hablas inglés?', zh: '你会说英语吗？', g: ['a1-origen'] },
  ],
  cloze: [
    { id: 'c1', text: '___ día es bonito.', answers: ['El'], options: ['El', 'La', 'Un'], zh: '天气很好。', g: ['a1-genero'], explain: 'día 虽然以 -a 结尾，但是阳性。' },
    { id: 'c2', text: 'Levanta ___ mano.', answers: ['la'], options: ['la', 'el', 'los'], zh: '举手。', g: ['a1-genero'], explain: 'mano 以 -o 结尾，但是阴性。' },
    { id: 'c3', text: '___ problema es el idioma.', answers: ['El'], options: ['El', 'La', 'Una'], zh: '问题在于语言。', g: ['a1-genero'], explain: 'problema 虽然以 -a 结尾，却是阳性：el problema。' },
    { id: 'c4', text: 'Es ___ foto de Madrid.', answers: ['una'], options: ['una', 'un', 'unos'], zh: '这是一张马德里的照片。', g: ['a1-genero', 'a1-articulos'], explain: 'foto 是 fotografía 的缩写，阴性。' },
    { id: 'c5', text: 'Tengo ___ amigo mexicano.', answers: ['un'], options: ['un', 'una', 'el'], zh: '我有一个墨西哥朋友。', g: ['a1-articulos'] },
    { id: 'c6', text: '___ estudiantes son de Shanghái.', answers: ['Los'], options: ['Los', 'El', 'Las'], zh: '（这些）学生来自上海。', g: ['a1-articulos'] },
    { id: 'c7', text: 'Soy ___ norte de España.', answers: ['del'], options: ['del', 'de el', 'de la'], zh: '我来自西班牙北部。', g: ['a1-articulos'], explain: 'de + el 要缩合成 del。' },
    { id: 'c8', text: 'Ella es ___.', answers: ['médica'], options: ['médica', 'una médica', 'médico'], zh: '她是医生。', g: ['a1-articulos', 'a1-genero'], explain: '说职业不加冠词，女性用阴性形式。' },
    { id: 'c9', text: 'María es ___.', answers: ['española'], options: ['española', 'español', 'españolas'], zh: '玛丽亚是西班牙人。', g: ['a1-plural'] },
    { id: 'c10', text: 'Ellos son ___.', answers: ['alemanes'], options: ['alemanes', 'alemán', 'alemanas'], zh: '他们是德国人。', g: ['a1-plural'] },
    { id: 'c11', text: 'Tres ___ españolas.', answers: ['canciones'], options: ['canciones', 'canciónes', 'cancions'], zh: '三首西班牙歌。', g: ['a1-plural'], explain: 'canción → canciones，加了一个音节后不再需要重音符号。' },
    { id: 'c12', text: '¿De ___ eres?', answers: ['dónde'], options: ['dónde', 'donde', 'qué'], zh: '你是哪里人？', g: ['a1-origen'], explain: '疑问词要带重音符号：dónde。' },
    { id: 'c13', text: '¿A qué te ___?', answers: ['dedicas'], options: ['dedicas', 'dedico', 'dedica'], zh: '你是做什么的？', g: ['a1-origen'] },
    { id: 'c14', text: 'Soy ___ China.', answers: ['de'], options: ['de', 'en', 'la'], zh: '我来自中国。', g: ['a1-origen'] },
    { id: 'c15', text: 'Ellas son ___.', answers: ['inglesas'], hint: 'inglés', zh: '她们是英国人。', g: ['a1-plural'] },
    { id: 'c16', text: 'Los dos ___ son de Pekín.', answers: ['profesores'], hint: 'profesor', zh: '两位老师来自北京。', g: ['a1-plural'] },
    { id: 'c17', text: 'Es ___ ciudad muy bonita.', answers: ['una'], hint: 'un / una', zh: '这是一座很美的城市。', g: ['a1-articulos'] },
    { id: 'c18', text: 'Marta es ___ y trabaja en un hospital.', answers: ['enfermera'], hint: 'enfermero', zh: '玛尔塔是护士，在医院工作。', g: ['a1-genero'] },
    { id: 'c19', text: '___ agua está fría.', answers: ['El'], options: ['El', 'La', 'Los'], zh: '水是冷的。', g: ['a1-articulos'], explain: 'agua 是阴性，但以重读的 a- 开头，单数前用 el。形容词仍用阴性 fría。' },
    { id: 'c20', text: 'Juan es una persona muy ___.', answers: ['simpática'], options: ['simpática', 'simpático', 'simpáticos'], zh: '胡安是个很友善的人。', g: ['a1-plural', 'a1-genero'], explain: 'persona 永远是阴性，形容词跟着 persona 变：simpática。' },
  ],
  dialogues: [
    {
      id: 'a1-u02-d1',
      title: '在语言交换活动上 · En un intercambio',
      lines: [
        { who: 'Carmen', es: 'Hola, soy Carmen. ¿Cómo te llamas?', zh: '你好，我是卡门。你叫什么名字？' },
        { who: 'Wang Lei', es: 'Hola, me llamo Wang Lei. Mucho gusto.', zh: '你好，我叫王磊。很高兴认识你。' },
        { who: 'Carmen', es: 'Encantada. ¿De dónde eres?', zh: '很高兴认识你。你是哪里人？' },
        { who: 'Wang Lei', es: 'Soy chino, de Shanghái. ¿Y tú?', zh: '我是中国人，上海的。你呢？' },
        { who: 'Carmen', es: 'Yo soy española, de Sevilla. ¿A qué te dedicas?', zh: '我是西班牙人，塞维利亚的。你是做什么的？' },
        { who: 'Wang Lei', es: 'Soy ingeniero. ¿Y tú?', zh: '我是工程师。你呢？' },
        { who: 'Carmen', es: 'Soy profesora de inglés. ¿Hablas inglés?', zh: '我是英语老师。你会说英语吗？' },
        { who: 'Wang Lei', es: 'Sí, y un poco de español.', zh: '会，还会一点西班牙语。' },
      ],
    },
  ],
  readings: [
    {
      id: 'a1-r02',
      level: 'A1',
      title: 'Una clase internacional',
      titleZh: '一个国际化的班级',
      topic: '国籍与职业',
      paras: [
        [
          ['En mi clase de español hay estudiantes de muchos países.', '我的西班牙语班上有来自很多国家的学生。'],
          ['Yo soy china, de Chengdu.', '我是中国人，成都的。'],
          ['Tom es estadounidense y Anna es alemana.', '汤姆是美国人，安娜是德国人。'],
        ],
        [
          ['Tom es ingeniero y Anna es enfermera.', '汤姆是工程师，安娜是护士。'],
          ['Los dos hablan inglés muy bien.', '他们俩英语都说得很好。'],
          ['Yo soy estudiante de periodismo.', '我是学新闻的学生。'],
        ],
        [
          ['La profesora se llama Elena. Es mexicana, de Guadalajara.', '老师叫埃莱娜。她是墨西哥人，瓜达拉哈拉的。'],
          ['Es una persona muy simpática.', '她是一个很友善的人。'],
          ['¡Somos una clase muy internacional!', '我们是一个非常国际化的班级！'],
        ],
      ],
      gloss: {
        hay: '有',
        muchos: '许多',
        clase: '课；班级',
        mi: '我的',
        dos: '两个',
        hablan: '（他们）说',
        periodismo: '新闻学',
        simpática: '友善的',
        internacional: '国际化的',
        muy: '很',
        Somos: '我们是',
      },
      questions: [
        { type: 'mc', q: '作者来自哪里？', options: ['墨西哥', '中国成都', '德国'], answer: 1 },
        { type: 'tf', q: 'Anna 是一名护士。', answer: true },
        { type: 'mc', q: 'Tom 是哪国人？', options: ['英国人', '德国人', '美国人'], answer: 2 },
        { type: 'tf', q: '老师 Elena 是西班牙人。', answer: false, explain: 'Es mexicana, de Guadalajara. 她是墨西哥人。' },
      ],
    },
  ],
  writing: [{ id: 'w1', prompt: '介绍你自己和一位朋友：你们叫什么、来自哪里、是哪国人、做什么工作或学什么。', words: [25, 60], hints: ['Me llamo… Soy de…', 'Soy chino/china.', 'Mi amigo/a se llama… Es… y es…'] }],
}
