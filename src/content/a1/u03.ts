import type { Unit } from '../types'

export const u03: Unit = {
  id: 'a1-u03',
  level: 'A1',
  order: 3,
  title: '我的家人',
  titleEs: 'Mi familia',
  icon: '👨‍👩‍👧',
  goals: ['介绍家庭成员', '说出“我的、你的、他的……”', '用 tener 说“有……”和年龄', '数到 100，问别人的年龄和电话号码'],
  grammar: [
    {
      id: 'a1-posesivos',
      title: '物主形容词：mi, tu, su…',
      titleEs: 'Los posesivos átonos',
      level: 'A1',
      summary: '物主形容词放在名词前，跟“被拥有的东西”保持性数一致，而不是跟拥有者。',
      body: `| 拥有者 | 单数名词 | 复数名词 |
|---|---|---|
| yo 我的 | **mi** hermano / **mi** hermana | **mis** hermanos |
| tú 你的 | **tu** padre | **tus** padres |
| él / ella / usted 他的 / 她的 / 您的 | **su** casa | **sus** casas |
| nosotros 我们的 | **nuestro** abuelo / **nuestra** abuela | **nuestros** / **nuestras** |
| vosotros 你们的 | **vuestro** tío / **vuestra** tía | **vuestros** / **vuestras** |
| ellos / ustedes 他们的 / 诸位的 | **su** familia | **sus** primos |

### 关键：跟“东西”一致，不跟“主人”一致
- *mis padres*：我的父母——主人是我（单数），但“父母”是复数，所以用 **mis**
- *nuestra madre*：我们的妈妈——主人是“我们”，但“妈妈”是阴性单数，所以用 **nuestra**
- 只有 **nuestro** 和 **vuestro** 有阴阳性变化，*mi、tu、su* 只变单复数

### su 有很多意思
*su libro* 可以是“他的 / 她的 / 您的 / 他们的 / 诸位的书”。意思不清楚时，换成 **el libro de + 人**：*el libro de Ana*（安娜的书）。

### 注意 tu 和 tú
**tu**（你的）没有重音符号，**tú**（你）有：*Tú tienes tu libro.*（你有你的书。）`,
      examples: [
        ['Mi hermana se llama Laura.', '我姐姐（妹妹）叫劳拉。'],
        ['¿Cómo se llaman tus padres?', '你父母叫什么名字？'],
        ['Nuestra casa es pequeña.', '我们的房子很小。'],
        ['Su hijo es médico.', '他（她 / 您）的儿子是医生。'],
        ['¿Es vuestro perro?', '这是你们的狗吗？'],
      ],
      origin: `西语物主形容词来自拉丁语物主形容词：
- **mi** ← *mīum / meum*（我的）的缩短形式，完整形式是 **mío**（以后会学 *es mío*“是我的”）
- **tu** ← *tuum*，完整形式 **tuyo**
- **su** ← *suum*：在拉丁语里 *suus* 是“他自己的”（反身物主词），西语把它扩大成了第三人称的通用物主词，所以 *su* 才会有这么多意思
- **nuestro** ← *nostrum*，**vuestro** ← *vostrum*（古拉丁语 *vestrum*）

放在名词前时，*mío、tuyo、suyo* 读得轻，逐渐缩短成了 *mi、tu、su*——这和英语 *my* 由 *mine* 缩短而来是同一种现象。`,
      pitfalls: ['让物主词跟主人一致：❌ *nuestro madre* ✅ *nuestra madre*；❌ *mi padres* ✅ *mis padres*。', '把 **tu**（你的）写成 **tú**（你）。'],
    },
    {
      id: 'a1-tener',
      title: '动词 tener（有）与年龄',
      titleEs: 'El verbo tener',
      level: 'A1',
      summary: 'tengo · tienes · tiene · tenemos · tenéis · tienen；年龄用 tener … años。',
      body: `**tener** 表示“有”，是不规则动词：

| 人称 | tener |
|---|---|
| yo | **tengo** |
| tú | **tienes** |
| él / ella / usted | **tiene** |
| nosotros | **tenemos** |
| vosotros | **tenéis** |
| ellos / ustedes | **tienen** |

> 规律：重读在词根上的人称 e 变成 **ie**（tienes、tiene、tienen）；第一人称是特殊的 **tengo**；nosotros 和 vosotros 保持规则。

### 用法
- 拥有：*Tengo dos hermanos.*（我有两个兄弟姐妹。）
- **年龄**：西语说“有……岁”，不用 ser：
  *¿Cuántos años tienes? — Tengo veinte años.*（你几岁？——我二十岁。）
- 否定：*No tengo hermanos.*（我没有兄弟姐妹。）——否定句里名词前通常不加冠词

### hermanos、padres 的复数
阳性复数可以包括男女：*mis hermanos* = 我的兄弟姐妹；*mis padres* = 我的父母；*mis abuelos* = 我的爷爷奶奶（外公外婆）。`,
      examples: [
        ['Tengo un hermano y una hermana.', '我有一个哥哥（弟弟）和一个姐姐（妹妹）。'],
        ['¿Cuántos años tiene tu abuela?', '你奶奶多大年纪了？'],
        ['Mi abuela tiene ochenta años.', '我奶奶八十岁了。'],
        ['No tenemos perro.', '我们没有狗。'],
        ['¿Tienes novio?', '你有男朋友吗？'],
      ],
      tables: [{ verbs: ['tener'], tense: 'pres' }],
      origin: `**为什么“有”是 tener，不是 haber？** 拉丁语的“有”是 *habere*，它在西语里变成了 **haber**，但后来专门用来构成复合时态（*he comido* 我吃过了）和表示“存在”（*hay* 有）。真正表示“拥有”的位置，被拉丁语 *tenere*（握住、抓住）占据了——“我把它握在手里” → “我拥有它”。

**tengo 里的 g 从哪来？** 古西语曾说 *teno*，后来受 *vengo*（我来）、*pongo*（我放）等词的类推影响，加上了 -g-。`,
      pitfalls: ['用 ser 说年龄：❌ *Soy veinte años.* ✅ *Tengo veinte años.*', '忘记 e→ie：❌ *tenes* ✅ *tienes*。'],
    },
    {
      id: 'a1-numeros',
      title: '数字 0–100',
      titleEs: 'Los números del 0 al 100',
      level: 'A1',
      summary: '16–29 写成一个词（dieciséis、veintidós），31 起用 y 连接（treinta y uno）。',
      body: `| | | | |
|---|---|---|---|
| 0 cero | 1 uno | 2 dos | 3 tres |
| 4 cuatro | 5 cinco | 6 seis | 7 siete |
| 8 ocho | 9 nueve | 10 diez | 11 once |
| 12 doce | 13 trece | 14 catorce | 15 quince |
| 16 dieciséis | 17 diecisiete | 18 dieciocho | 19 diecinueve |
| 20 veinte | 21 veintiuno | 22 veintidós | 23 veintitrés |
| 26 veintiséis | 30 treinta | 31 treinta y uno | 40 cuarenta |
| 50 cincuenta | 60 sesenta | 70 setenta | 80 ochenta |
| 90 noventa | 100 cien | | |

### 规律
- **16–19**：*diez y seis* 连写成 **dieciséis**（z 变 c）
- **21–29**：*veinte y uno* 连写成 **veintiuno**；注意重音：*veintidós、veintitrés、veintiséis*
- **31 起**：用三个词：*treinta y dos*、*cuarenta y cinco*、*noventa y nueve*
- **uno** 在阳性名词前变成 **un**，在阴性名词前变成 **una**：*un hermano, una hermana, veintiún años, treinta y una personas*
- **100** 单独说 **cien**

### 怎么问
- *¿Cuántos hermanos tienes?*（你有几个兄弟姐妹？）——问阳性名词用 **cuántos**
- *¿Cuántas hermanas tienes?*——问阴性名词用 **cuántas**
- *¿Cuál es tu número de teléfono?*（你的电话号码是多少？）——西班牙人习惯两位两位地读：6 12 34 56 78 读作 *seis, doce, treinta y cuatro…*`,
      examples: [
        ['Tengo veintiún años.', '我二十一岁。'],
        ['Mi abuelo tiene noventa y dos años.', '我爷爷九十二岁。'],
        ['¿Cuántas primas tienes?', '你有几个表姐妹（堂姐妹）？'],
        ['En mi clase hay treinta y un estudiantes.', '我班上有三十一个学生。'],
      ],
      origin: `- **once（11）到 quince（15）** 直接来自拉丁语 *undecim、duodecim、tredecim、quattuordecim、quindecim*，所以看起来和 *uno、dos、tres* 不太像。从 16 开始，西语改用“十加几”的说法 *diez y seis*，后来连写成 **dieciséis**。
- **veinte** ← *viginti*，**treinta** ← *triginta*，**cuarenta** ← *quadraginta*：这些 *-enta* 都来自拉丁语的 *-ginta*（“……个十”）。
- **cinco** ← 拉丁语 *quinque*：两个相似的音 qu…qu 中的第一个变成了 c（异化作用），说成 *cinque*，再变成 *cinco*。
- **cien** ← *centum*，英语 *cent、century* 同源。`,
      pitfalls: ['21 写成三个词：❌ *veinte y uno* ✅ *veintiuno*；但 31 是 *treinta y uno*。', '“21 岁”忘记变成 un：✅ *veintiún años*。', '把 *cuántos* 和 *cuántas* 用混：要和后面的名词一致。'],
    },
  ],
  words: [
    { id: 'familia', es: 'familia', zh: '家庭；家人', pos: 'n', g: 'f', level: 'A1', tags: ['family'], ex: ['Mi familia es grande.', '我家人很多。'], ety: '拉丁语 familia「一家之人（包括仆人）」，来自 famulus「仆人」。英语 family 同源。', emoji: '👨‍👩‍👧‍👦' },
    { id: 'padre', es: 'padre', zh: '父亲', pos: 'n', g: 'm', level: 'A1', tags: ['family'], ex: ['Mi padre es ingeniero.', '我父亲是工程师。'], ety: '拉丁语 patrem，元音之间的 t 变成 d。英语 paternal、father 同源。', note: '复数 padres 也表示“父母”。', emoji: '👨' },
    { id: 'madre', es: 'madre', zh: '母亲', pos: 'n', g: 'f', level: 'A1', tags: ['family'], ex: ['Mi madre tiene cuarenta y cinco años.', '我母亲四十五岁。'], ety: '拉丁语 matrem，t 变成 d。英语 maternal、mother 同源。', emoji: '👩' },
    { id: 'hijo', es: 'hijo', f: 'hija', zh: '儿子', pos: 'n', g: 'm', level: 'A1', tags: ['family'], ex: ['Tienen dos hijos.', '他们有两个孩子。'], ety: '拉丁语 filius：词首 f 变成了不发音的 h。英语 filial 同源。', note: '复数 hijos 也表示“孩子们（子女）”。', emoji: '👦' },
    { id: 'hermano', es: 'hermano', f: 'hermana', zh: '兄弟', pos: 'n', g: 'm', level: 'A1', tags: ['family'], ex: ['Mi hermano mayor vive en Madrid.', '我哥哥住在马德里。'], ety: '拉丁语 (frater) germanus「同父同母的（兄弟）」：西语把形容词 germanus 留下，变成了 hermano。', note: '哥哥 = hermano mayor，弟弟 = hermano menor / pequeño。', emoji: '👬' },
    { id: 'abuelo', es: 'abuelo', f: 'abuela', zh: '祖父；外祖父', pos: 'n', g: 'm', level: 'A1', tags: ['family'], ex: ['Mis abuelos viven en el campo.', '我的祖父母住在乡下。'], ety: '通俗拉丁语 aviolus，是 avus「祖父」的指小词。', emoji: '👴' },
    { id: 'nieto', es: 'nieto', f: 'nieta', zh: '孙子；外孙', pos: 'n', g: 'm', level: 'A1', tags: ['family'], ex: ['La abuela tiene cinco nietos.', '奶奶有五个孙辈。'], ety: '拉丁语 neptis「孙女」，西语先有 nieta，后来造出阳性 nieto。英语 nephew 同源。', emoji: '🧒' },
    { id: 'tio', es: 'tío', f: 'tía', zh: '叔叔；舅舅；伯伯', pos: 'n', g: 'm', level: 'A1', tags: ['family'], ex: ['Mi tío es taxista.', '我叔叔是出租车司机。'], ety: '希腊语 theîos 经拉丁语 thius 传入。', note: '西班牙口语里 tío / tía 还可以表示“伙计、哥们儿”。' },
    { id: 'primo', es: 'primo', f: 'prima', zh: '表兄弟；堂兄弟', pos: 'n', g: 'm', level: 'A1', tags: ['family'], ex: ['Tengo muchos primos.', '我有很多表兄弟姐妹。'], ety: '拉丁语 (consobrinus) primus「第一等的（表亲）」，后来只留下了 primus「第一」。' },
    { id: 'esposo', es: 'esposo', f: 'esposa', zh: '丈夫', pos: 'n', g: 'm', level: 'A1', tags: ['family'], ex: ['Su esposa es profesora.', '他的妻子是老师。'], ety: '拉丁语 sponsus「已订婚的人」，来自 spondere「许诺」。英语 spouse 同源。', note: '口语中丈夫也常说 marido，妻子说 mujer。' },
    { id: 'novio', es: 'novio', f: 'novia', zh: '男朋友；新郎', pos: 'n', g: 'm', level: 'A1', tags: ['family'], ex: ['¿Tienes novia?', '你有女朋友吗？'], ety: '一般认为来自通俗拉丁语 novius，与 novus「新的」有关（“新人”）。' },
    { id: 'hijo-unico', es: 'hijo único', f: 'hija única', zh: '独生子', pos: 'phr', level: 'A1', tags: ['family'], ex: ['Soy hija única.', '我是独生女。'] },
    { id: 'perro', es: 'perro', zh: '狗', pos: 'n', g: 'm', level: 'A1', tags: ['animal'], ex: ['Mi perro se llama Toby.', '我的狗叫托比。'], ety: '来源不详，只在伊比利亚半岛使用，取代了拉丁语 canis（狗）。', emoji: '🐶' },
    { id: 'gato', es: 'gato', zh: '猫', pos: 'n', g: 'm', level: 'A1', tags: ['animal'], ex: ['El gato es negro.', '这只猫是黑色的。'], ety: '晚期拉丁语 cattus。英语 cat 同源。', emoji: '🐱' },
    { id: 'casado', es: 'casado', f: 'casada', zh: '已婚的', pos: 'adj', level: 'A1', tags: ['family'], ex: ['Mi hermana está casada.', '我姐姐结婚了。'], ety: '来自 casarse「结婚」，原意是“成家，安顿一个 casa（家）”。', note: '常与 estar 连用：estar casado。' },
    { id: 'soltero', es: 'soltero', f: 'soltera', zh: '单身的', pos: 'adj', level: 'A1', tags: ['family'], ex: ['Mi primo es soltero.', '我表哥是单身。'], ety: '拉丁语 solitarius「独自的」。英语 solitary 同源。' },
    { id: 'mayor', es: 'mayor', zh: '年长的；较大的', pos: 'adj', level: 'A1', tags: ['family', 'adj'], ex: ['Mi hermana mayor tiene treinta años.', '我姐姐三十岁。'], ety: '拉丁语 maiorem「更大的」。英语 major、mayor 同源。', note: '阴阳同形。' },
    { id: 'menor', es: 'menor', zh: '年幼的；较小的', pos: 'adj', level: 'A1', tags: ['family', 'adj'], ex: ['Tengo un hermano menor.', '我有一个弟弟。'], ety: '拉丁语 minorem「更小的」。英语 minor 同源。' },
    { id: 'pequeno', es: 'pequeño', f: 'pequeña', zh: '小的', pos: 'adj', level: 'A1', tags: ['adj'], ex: ['Mi casa es pequeña.', '我家很小。'], ety: '来源不完全确定，可能来自表示“小”的口语词根 *pikk-。' },
    { id: 'grande', es: 'grande', zh: '大的', pos: 'adj', level: 'A1', tags: ['adj'], ex: ['Tengo una familia grande.', '我家人很多。'], ety: '拉丁语 grandis「大的，高大的」。英语 grand 同源。', note: '在单数名词前缩短为 gran：una gran ciudad（一座大城市）。' },
    { id: 'joven', es: 'joven', zh: '年轻的；年轻人', pos: 'adj', pl: 'jóvenes', level: 'A1', tags: ['adj', 'people'], ex: ['Mi madre es muy joven.', '我妈妈很年轻。'], ety: '拉丁语 iuvenem。英语 juvenile 同源。', note: '复数加重音：jóvenes。' },
    { id: 'alto', es: 'alto', f: 'alta', zh: '高的', pos: 'adj', level: 'A1', tags: ['adj', 'body'], ex: ['Mi padre es alto.', '我爸爸个子高。'], ety: '拉丁语 altus「高的，深的」。英语 altitude 同源。' },
    { id: 'bajo', es: 'bajo', f: 'baja', zh: '矮的；低的', pos: 'adj', level: 'A1', tags: ['adj', 'body'], ex: ['Mi abuela es baja.', '我奶奶个子矮。'], ety: '晚期拉丁语 bassus「矮胖的；低的」。英语 bass（低音）同源。' },
    { id: 'guapo', es: 'guapo', f: 'guapa', zh: '漂亮的；帅气的', pos: 'adj', level: 'A1', tags: ['adj'], ex: ['Tu hermana es muy guapa.', '你姐姐很漂亮。'], ety: '据西班牙皇家学院词典，来自拉丁语 vappa「变味的酒；没用的人」，词义后来发生了反转，指“勇敢、潇洒”，再到“好看”。' },
    { id: 'simpatico', es: 'simpático', f: 'simpática', zh: '和蔼的；讨人喜欢的', pos: 'adj', level: 'A1', tags: ['adj', 'feel'], ex: ['Mis primos son muy simpáticos.', '我的表兄弟们人很好。'], ety: '希腊语 sympathḗs「同感的」。注意它不是英语 sympathetic（同情的）的意思。', en: '“假朋友”：simpático ≠ sympathetic' },
    { id: 'tener', es: 'tener', zh: '有；拥有', pos: 'v', level: 'A1', tags: ['verb'], ex: ['Tengo dos hermanos.', '我有两个兄弟姐妹。'], ety: '拉丁语 tenere「握住」。英语 tenant、retain 同源。', note: '不规则：tengo, tienes, tiene, tenemos, tenéis, tienen' },
    { id: 'ano', es: 'año', zh: '年；岁', pos: 'n', g: 'm', level: 'A1', tags: ['time'], ex: ['Tengo dieciocho años.', '我十八岁。'], ety: '拉丁语 annus，nn 变成 ñ。英语 annual 同源。', note: '注意不要漏掉 ñ 上的波浪号：ano 是完全不同的词。' },
    { id: 'cumpleanos', es: 'cumpleaños', zh: '生日', pos: 'n', g: 'm', pl: 'cumpleaños', level: 'A1', tags: ['time'], ex: ['¡Feliz cumpleaños!', '生日快乐！'], ety: 'cumple（cumplir「完成，满」）+ años「岁数」：满了一岁。', emoji: '🎂' },
    { id: 'cuantos', es: '¿cuántos?', f: '¿cuántas?', zh: '多少？几个？', pos: 'det', level: 'A1', tags: ['func'], ex: ['¿Cuántos años tienes?', '你多大了？'], ety: '拉丁语 quantus「多么大的，多少」。' },
    { id: 'quien', es: '¿quién?', zh: '谁？', pos: 'pron', pl: '¿quiénes?', level: 'A1', tags: ['func'], ex: ['¿Quién es él?', '他是谁？'], ety: '拉丁语 quem「谁（宾格）」。' },
    { id: 'telefono', es: 'teléfono', zh: '电话', pos: 'n', g: 'm', level: 'A1', tags: ['home'], ex: ['¿Cuál es tu número de teléfono?', '你的电话号码是多少？'], ety: '希腊语 tēle「远」+ phōnḗ「声音」。', emoji: '📱' },
    { id: 'numero', es: 'número', zh: '数字；号码', pos: 'n', g: 'm', level: 'A1', tags: ['number'], ex: ['Mi número es el 612 345 678.', '我的号码是 612 345 678。'], ety: '拉丁语 numerus。英语 number 同源。' },
    { id: 'cero', es: 'cero', zh: '零', pos: 'num', level: 'A1', tags: ['number'], ety: '经意大利语来自阿拉伯语 ṣifr「空的」，同一个词还变成了英语 cipher。' },
    { id: 'uno', es: 'uno', f: 'una', zh: '一', pos: 'num', level: 'A1', tags: ['number'], ety: '拉丁语 unus。', note: '阳性名词前变成 un：un hermano。' },
    { id: 'dos', es: 'dos', zh: '二', pos: 'num', level: 'A1', tags: ['number'], ety: '拉丁语 duos。' },
    { id: 'tres', es: 'tres', zh: '三', pos: 'num', level: 'A1', tags: ['number'], ety: '拉丁语 tres。' },
    { id: 'cuatro', es: 'cuatro', zh: '四', pos: 'num', level: 'A1', tags: ['number'], ety: '拉丁语 quattuor。' },
    { id: 'cinco', es: 'cinco', zh: '五', pos: 'num', level: 'A1', tags: ['number'], ety: '拉丁语 quinque → cinque → cinco。' },
    { id: 'seis', es: 'seis', zh: '六', pos: 'num', level: 'A1', tags: ['number'], ety: '拉丁语 sex。' },
    { id: 'siete', es: 'siete', zh: '七', pos: 'num', level: 'A1', tags: ['number'], ety: '拉丁语 septem，重读的 e 变成 ie。' },
    { id: 'ocho', es: 'ocho', zh: '八', pos: 'num', level: 'A1', tags: ['number'], ety: '拉丁语 octo，ct 变成 ch（同样的变化：noctem → noche）。' },
    { id: 'nueve', es: 'nueve', zh: '九', pos: 'num', level: 'A1', tags: ['number'], ety: '拉丁语 novem，重读的 o 变成 ue。' },
    { id: 'diez', es: 'diez', zh: '十', pos: 'num', level: 'A1', tags: ['number'], ety: '拉丁语 decem，重读的 e 变成 ie。' },
    { id: 'veinte', es: 'veinte', zh: '二十', pos: 'num', level: 'A1', tags: ['number'], ety: '拉丁语 viginti。' },
    { id: 'cien', es: 'cien', zh: '一百', pos: 'num', level: 'A1', tags: ['number'], ety: '拉丁语 centum。英语 cent、century 同源。' },
  ],
  sentences: [
    { id: 's1', es: 'Mi familia es grande.', zh: '我家人很多。', g: ['a1-posesivos'] },
    { id: 's2', es: 'Mis padres son profesores.', zh: '我的父母是老师。', g: ['a1-posesivos'], distract: ['mi'] },
    { id: 's3', es: 'Tu hermana es muy guapa.', zh: '你姐姐很漂亮。', g: ['a1-posesivos'], distract: ['tú'] },
    { id: 's4', es: 'Nuestra madre es médica.', zh: '我们的妈妈是医生。', g: ['a1-posesivos'], distract: ['nuestro'] },
    { id: 's5', es: 'Su hijo tiene diez años.', zh: '他的儿子十岁。', g: ['a1-posesivos', 'a1-tener'] },
    { id: 's6', es: '¿Cómo se llaman tus abuelos?', zh: '你的祖父母叫什么名字？', g: ['a1-posesivos'] },
    { id: 's7', es: 'Vuestro perro es muy simpático.', zh: '你们的狗很可爱。', g: ['a1-posesivos'] },
    { id: 's8', es: 'Tengo dos hermanos.', zh: '我有两个兄弟姐妹。', g: ['a1-tener'] },
    { id: 's9', es: '¿Cuántos años tienes?', zh: '你多大了？', g: ['a1-tener', 'a1-numeros'] },
    { id: 's10', es: 'Tengo veinte años.', zh: '我二十岁。', g: ['a1-tener'], distract: ['soy'] },
    { id: 's11', es: 'No tengo hermanos.', zh: '我没有兄弟姐妹。', alt: ['Yo no tengo hermanos'], g: ['a1-tener'] },
    { id: 's12', es: 'Mi abuela tiene ochenta años.', zh: '我奶奶八十岁了。', g: ['a1-tener', 'a1-numeros'] },
    { id: 's13', es: '¿Tienes perro?', zh: '你养狗吗？', alt: ['¿Tú tienes perro?', '¿Tienes un perro?'], g: ['a1-tener'] },
    { id: 's14', es: 'Tenemos un gato negro.', zh: '我们有一只黑猫。', g: ['a1-tener'] },
    { id: 's15', es: 'Ellos tienen tres hijos.', zh: '他们有三个孩子。', alt: ['Tienen tres hijos'], g: ['a1-tener'] },
    { id: 's16', es: 'Soy hijo único.', zh: '我是独生子。', g: ['a1-tener'] },
    { id: 's17', es: 'Mi hermano mayor está casado.', zh: '我哥哥结婚了。', g: ['a1-posesivos'] },
    { id: 's18', es: 'Tengo veintiún años.', zh: '我二十一岁。', g: ['a1-numeros'], distract: ['veintiuno'] },
    { id: 's19', es: 'Mi padre tiene cincuenta y dos años.', zh: '我爸爸五十二岁。', g: ['a1-numeros'] },
    { id: 's20', es: '¿Cuántas primas tienes?', zh: '你有几个表姐妹？', g: ['a1-numeros'], distract: ['cuántos'] },
    { id: 's21', es: 'En mi clase hay treinta estudiantes.', zh: '我班上有三十个学生。', g: ['a1-numeros'] },
    { id: 's22', es: '¿Cuál es tu número de teléfono?', zh: '你的电话号码是多少？', g: ['a1-numeros'] },
    { id: 's23', es: '¿Quién es esa chica? Es mi prima.', zh: '那个女孩是谁？是我表妹。', g: ['a1-posesivos'] },
    { id: 's24', es: 'Mi tía tiene dos hijas.', zh: '我阿姨有两个女儿。', g: ['a1-tener'] },
    { id: 's25', es: '¡Feliz cumpleaños, abuelo!', zh: '爷爷，生日快乐！', g: ['a1-numeros'] },
  ],
  cloze: [
    { id: 'c1', text: '___ padres son de Sevilla.', answers: ['Mis'], options: ['Mis', 'Mi', 'Mí'], zh: '我的父母是塞维利亚人。', g: ['a1-posesivos'], explain: 'padres 是复数，所以用 mis。' },
    { id: 'c2', text: '¿Cómo se llama ___ hermano?', answers: ['tu'], options: ['tu', 'tú', 'tus'], zh: '你的哥哥叫什么名字？', g: ['a1-posesivos'], explain: '“你的”是 tu（没有重音符号）。' },
    { id: 'c3', text: '___ madre es muy simpática.', answers: ['Nuestra'], options: ['Nuestra', 'Nuestro', 'Nuestros'], zh: '我们的妈妈人很好。', g: ['a1-posesivos'], explain: 'madre 是阴性单数，所以用 nuestra。' },
    { id: 'c4', text: 'Ana y ___ marido tienen dos hijos.', answers: ['su'], options: ['su', 'sus', 'tu'], zh: '安娜和她丈夫有两个孩子。', g: ['a1-posesivos'] },
    { id: 'c5', text: '¿Son ___ hijos, señora?', answers: ['sus'], options: ['sus', 'su', 'tus'], zh: '女士，这些是您的孩子吗？', g: ['a1-posesivos'], explain: '“您的”用 su / sus，hijos 是复数。' },
    { id: 'c6', text: 'Chicos, ¿es ___ casa?', answers: ['vuestra'], options: ['vuestra', 'vuestro', 'vuestras'], zh: '孩子们，这是你们的家吗？', g: ['a1-posesivos'] },
    { id: 'c7', text: 'Yo ___ dos hermanas.', answers: ['tengo'], options: ['tengo', 'tiene', 'tienes'], zh: '我有两个姐妹。', g: ['a1-tener'] },
    { id: 'c8', text: '¿Cuántos años ___ tu padre?', answers: ['tiene'], options: ['tiene', 'es', 'tienes'], zh: '你爸爸多大年纪？', g: ['a1-tener'], explain: '年龄用 tener，“你爸爸”是第三人称。' },
    { id: 'c9', text: 'Nosotros no ___ perro.', answers: ['tenemos'], hint: 'tener', zh: '我们没有狗。', g: ['a1-tener'] },
    { id: 'c10', text: '¿Vosotros ___ hijos?', answers: ['tenéis'], hint: 'tener', zh: '你们有孩子吗？', g: ['a1-tener'] },
    { id: 'c11', text: 'Mis abuelos ___ ocho nietos.', answers: ['tienen'], hint: 'tener', zh: '我的祖父母有八个孙辈。', g: ['a1-tener'] },
    { id: 'c12', text: 'Mi hermana ___ quince años.', answers: ['tiene'], options: ['tiene', 'es', 'está'], zh: '我妹妹十五岁。', g: ['a1-tener'], explain: '西语说“有……岁”：tener … años。' },
    { id: 'c13', text: 'Tengo ___ años. (21)', answers: ['veintiún'], options: ['veintiún', 'veintiuno', 'veinte y uno'], zh: '我二十一岁。', g: ['a1-numeros'], explain: '在阳性名词 años 前，veintiuno 变成 veintiún。' },
    { id: 'c14', text: '¿___ hermanas tienes?', answers: ['Cuántas'], options: ['Cuántas', 'Cuántos', 'Cuánto'], zh: '你有几个姐妹？', g: ['a1-numeros'] },
    { id: 'c15', text: 'Mi abuelo tiene ___ años. (93)', answers: ['noventa y tres'], options: ['noventa y tres', 'noventitrés', 'nueve y tres'], zh: '我爷爷九十三岁。', g: ['a1-numeros'] },
    { id: 'c16', text: 'Somos ___ en mi familia. (5)', answers: ['cinco'], hint: '5', zh: '我家有五口人。', g: ['a1-numeros'] },
    { id: 'c17', text: 'Hay ___ personas en la clase. (16)', answers: ['dieciséis'], hint: '16', zh: '班上有十六个人。', g: ['a1-numeros'] },
    { id: 'c18', text: 'El padre de mi padre es mi ___.', answers: ['abuelo'], options: ['abuelo', 'tío', 'primo'], zh: '我父亲的父亲是我的祖父。', g: ['a1-posesivos'] },
    { id: 'c19', text: 'La hija de mi tía es mi ___.', answers: ['prima'], options: ['prima', 'hermana', 'sobrina'], zh: '我阿姨的女儿是我的表姐妹。', g: ['a1-posesivos'] },
    { id: 'c20', text: '¿___ es ese chico? — Es mi novio.', answers: ['Quién'], options: ['Quién', 'Qué', 'Cuántos'], zh: '那个男孩是谁？——是我男朋友。', g: ['a1-posesivos'] },
  ],
  conj: [{ verbs: ['tener'], tenses: ['pres'], g: 'a1-tener' }],
  dialogues: [
    {
      id: 'a1-u03-d1',
      title: '看全家福 · Una foto de familia',
      lines: [
        { who: 'Marta', es: '¿Quién es esta mujer?', zh: '这位女士是谁？' },
        { who: 'Zhang Wei', es: 'Es mi madre. Se llama Li Na y tiene cincuenta años.', zh: '是我妈妈。她叫李娜，五十岁。' },
        { who: 'Marta', es: '¡Es muy joven! ¿Y este chico alto?', zh: '她很年轻！那这个高个子男孩呢？' },
        { who: 'Zhang Wei', es: 'Es mi hermano menor. Tiene diecisiete años.', zh: '是我弟弟。他十七岁。' },
        { who: 'Marta', es: '¿Tienes más hermanos?', zh: '你还有别的兄弟姐妹吗？' },
        { who: 'Zhang Wei', es: 'No, solo uno. ¿Y tú? ¿Cuántos hermanos tienes?', zh: '没有，只有一个。你呢？你有几个兄弟姐妹？' },
        { who: 'Marta', es: 'Yo tengo dos hermanas. Somos cinco en mi familia.', zh: '我有两个姐妹。我家一共五口人。' },
      ],
    },
  ],
  readings: [
    {
      id: 'a1-r03',
      level: 'A1',
      title: 'La familia de Pablo',
      titleZh: '巴勃罗的家',
      topic: '家庭',
      paras: [
        [
          ['Me llamo Pablo y tengo veinticuatro años.', '我叫巴勃罗，二十四岁。'],
          ['Mi familia no es muy grande.', '我家人不算多。'],
          ['Mi padre se llama Antonio y es cocinero.', '我爸爸叫安东尼奥，是厨师。'],
          ['Mi madre se llama Isabel y es enfermera.', '我妈妈叫伊莎贝尔，是护士。'],
        ],
        [
          ['Tengo una hermana mayor, Clara.', '我有一个姐姐，叫克拉拉。'],
          ['Ella tiene treinta años, está casada y tiene un hijo.', '她三十岁，结婚了，有一个儿子。'],
          ['Mi sobrino se llama Leo y tiene tres años.', '我外甥叫莱奥，三岁。'],
        ],
        [
          ['También tenemos un perro, Toby.', '我们还有一只狗，叫托比。'],
          ['Es pequeño, blanco y muy simpático.', '它小小的，白色的，非常可爱。'],
          ['¡Toby es el rey de la casa!', '托比是家里的国王！'],
        ],
      ],
      gloss: { sobrino: '外甥；侄子', blanco: '白色的', rey: '国王', casa: '家', está: '（处于某种状态）' },
      questions: [
        { type: 'mc', q: '巴勃罗多大了？', options: ['21 岁', '24 岁', '30 岁'], answer: 1 },
        { type: 'tf', q: '巴勃罗的妈妈是厨师。', answer: false, explain: 'Mi madre … es enfermera. 妈妈是护士，爸爸才是厨师。' },
        { type: 'mc', q: 'Leo 是谁？', options: ['巴勃罗的弟弟', '巴勃罗的外甥', '巴勃罗的狗'], answer: 1 },
        { type: 'tf', q: '托比是一只大狗。', answer: false, explain: 'Es pequeño. 它很小。' },
      ],
    },
    {
      id: 'a1-r04',
      level: 'A1',
      title: 'Una familia china en Madrid',
      titleZh: '一个住在马德里的中国家庭',
      topic: '家庭',
      paras: [
        [
          ['La familia Wang es de Wenzhou, pero ahora vive en Madrid.', '王家来自温州，但现在住在马德里。'],
          ['El señor Wang tiene cuarenta y ocho años y tiene una tienda.', '王先生四十八岁，开了一家店。'],
          ['Su mujer, la señora Chen, trabaja con él.', '他的妻子陈女士和他一起工作。'],
        ],
        [
          ['Tienen dos hijos: Lin y Hao.', '他们有两个孩子：琳和浩。'],
          ['Lin tiene diecinueve años y es estudiante de Medicina.', '琳十九岁，是医学专业的学生。'],
          ['Hao tiene doce años y habla español mejor que sus padres.', '浩十二岁，西班牙语说得比父母还好。'],
        ],
        [
          ['Los abuelos viven en China.', '爷爷奶奶住在中国。'],
          ['Cada domingo, toda la familia habla con ellos por vídeo.', '每个星期天，全家人都和他们视频聊天。'],
        ],
      ],
      gloss: {
        pero: '但是',
        ahora: '现在',
        vive: '居住（第三人称）',
        tienda: '商店',
        trabaja: '工作（第三人称）',
        con: '和……一起',
        Medicina: '医学',
        habla: '说（第三人称）',
        mejor: '更好',
        que: '比',
        viven: '居住（他们）',
        Cada: '每个',
        domingo: '星期天',
        toda: '全部的',
        por: '通过',
        vídeo: '视频',
      },
      questions: [
        { type: 'mc', q: '王家现在住在哪里？', options: ['温州', '马德里', '巴塞罗那'], answer: 1 },
        { type: 'tf', q: 'Lin 是医学生。', answer: true },
        { type: 'mc', q: '谁的西班牙语说得最好？', options: ['王先生', '陈女士', 'Hao'], answer: 2 },
        { type: 'tf', q: '爷爷奶奶也住在马德里。', answer: false, explain: 'Los abuelos viven en China.' },
      ],
    },
  ],
  writing: [{ id: 'w1', prompt: '介绍你的家人：家里有几口人，他们叫什么、多大、做什么工作，还可以介绍你的宠物。', words: [30, 70], hints: ['En mi familia somos…', 'Mi padre se llama… y tiene… años.', 'Tengo un hermano / una hermana…'] }],
}
