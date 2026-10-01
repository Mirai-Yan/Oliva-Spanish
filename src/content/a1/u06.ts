import type { Unit } from '../types'

export const u06: Unit = {
  id: 'a1-u06',
  level: 'A1',
  order: 6,
  title: '吃饭啦！',
  titleEs: '¡A comer!',
  icon: '🥘',
  goals: ['说出喜欢和不喜欢的食物', '使用词根变化动词：querer、preferir、poder…', '在餐馆点餐、买单', '了解西班牙的饮食习惯'],
  grammar: [
    {
      id: 'a1-gustar',
      title: 'gustar：喜欢',
      titleEs: 'El verbo gustar',
      level: 'A1',
      summary: '“我喜欢 X” 在西语里是 “X 让我喜欢”：me gusta + 单数 / 不定式，me gustan + 复数。',
      body: `西语说“喜欢”的方式和中文正好反过来：**被喜欢的东西是主语**，人用间接宾语代词表示。

| 谁喜欢 | 代词 | 喜欢单数 / 动作 | 喜欢复数 |
|---|---|---|---|
| (a mí) | **me** | gusta el café | gustan los tomates |
| (a ti) | **te** | gusta | gustan |
| (a él / ella / usted) | **le** | gusta | gustan |
| (a nosotros) | **nos** | gusta | gustan |
| (a vosotros) | **os** | gusta | gustan |
| (a ellos / ustedes) | **les** | gusta | gustan |

- **gusta** + 单数名词 / 动词原形：*Me gusta el chocolate.* / *Me gusta cocinar.*
- **gustan** + 复数名词：*Me gustan las fresas.*
- 名词前要加 **定冠词**：❌ *Me gusta café.* ✅ *Me gusta **el** café.*

### 强调和对比：a mí, a ti…
*A mí me gusta el té, pero **a mi hermano** le gusta el café.*（我喜欢茶，但我哥哥喜欢咖啡。）

### 同意和不同意
| 对方说 | 我也是 | 我不是 |
|---|---|---|
| *Me gusta el pescado.* | **A mí también.** | **A mí no.** |
| *No me gusta el pescado.* | **A mí tampoco.** | **A mí sí.** |

### encantar：非常喜欢
用法和 gustar 一样：*Me **encanta** la paella.*（我超爱海鲜饭。）——encantar 本身已经是“很喜欢”，不要再加 *mucho*。`,
      examples: [
        ['Me gusta mucho el chocolate.', '我很喜欢巧克力。'],
        ['¿Te gustan las verduras?', '你喜欢蔬菜吗？'],
        ['A mi padre le encanta cocinar.', '我爸爸特别喜欢做饭。'],
        ['No nos gusta el café.', '我们不喜欢咖啡。'],
        ['—No me gusta el pescado. —A mí tampoco.', '——我不喜欢鱼。——我也不喜欢。'],
      ],
      origin: `**gustar** 来自拉丁语 *gustare*（品尝）。“这道菜让我尝起来很好” → “这道菜合我的口味” → “我喜欢它”。所以西语的结构其实很符合它的本义：东西是主语，“我”是“被取悦的人”。

古英语里也有类似的说法：*it likes me*（它让我喜欢），直到后来才变成 *I like it*。`,
      pitfalls: ['用中文语序：❌ *Yo gusto el café.* ✅ *Me gusta el café.*', '复数忘了用 gustan：❌ *Me gusta los tomates.* ✅ *Me gustan los tomates.*', '名词前不加冠词：❌ *Me gusta paella.* ✅ *Me gusta la paella.*'],
    },
    {
      id: 'a1-e-ie',
      title: '词根变化动词 e → ie',
      titleEs: 'Verbos irregulares e > ie',
      level: 'A1',
      summary: 'querer, preferir, pensar, empezar：重读时词根的 e 变成 ie（nosotros、vosotros 不变）。',
      body: `有一类动词，在词根 **重读** 的人称里，词根的 **e** 变成 **ie**：

| 人称 | querer 想要 | preferir 更喜欢 | pensar 想 |
|---|---|---|---|
| yo | qu**ie**ro | pref**ie**ro | p**ie**nso |
| tú | qu**ie**res | pref**ie**res | p**ie**nsas |
| él / ella / usted | qu**ie**re | pref**ie**re | p**ie**nsa |
| nosotros | queremos | preferimos | pensamos |
| vosotros | queréis | preferís | pensáis |
| ellos / ustedes | qu**ie**ren | pref**ie**ren | p**ie**nsan |

> 记忆方法：变化的人称在表格里画出来像一只 **“靴子”**（1、2、3、6 人称），nosotros 和 vosotros 不变。

### querer 的两种用法
- *querer* + 名词：*Quiero un café.*（我要一杯咖啡。）
- *querer* + 动词原形：*Quiero comer paella.*（我想吃海鲜饭。）
- *querer* + 人：*Te quiero.*（我爱你。）

### preferir：A 还是 B？
*¿Prefieres té o café? — Prefiero té.*（你更喜欢茶还是咖啡？——我更喜欢茶。）`,
      examples: [
        ['Quiero un vaso de agua, por favor.', '请给我一杯水。'],
        ['¿Qué quieres comer?', '你想吃什么？'],
        ['Prefiero el pescado a la carne.', '比起肉，我更喜欢鱼。'],
        ['¿Queréis ir a un restaurante chino?', '你们想去中餐馆吗？'],
        ['Pienso que es una buena idea.', '我觉得这是个好主意。'],
      ],
      tables: [{ verbs: ['querer', 'preferir'], tense: 'pres' }],
      origin: `还记得 A0 发音单元讲过的吗？拉丁语里 **重读的短 e** 在西语里变成了 **ie**（*terra → tierra*）。动词也是一样：
- 拉丁语 *quaero*（我寻求），e 重读 → **quiero**
- 但 *quaerimus*（我们寻求）的重音在后面，e 不重读 → **queremos**

所以“靴子”规律其实是 **重音规律**：只有词根被重读时才变成 ie。`,
      pitfalls: ['所有人称都变：❌ *quieremos* ✅ *queremos*。', '忘记变化：❌ *Yo quero* ✅ *Yo quiero*。'],
    },
    {
      id: 'a1-o-ue',
      title: '词根变化动词 o → ue',
      titleEs: 'Verbos irregulares o > ue',
      level: 'A1',
      summary: 'poder, volver, costar, almorzar, dormir：重读时 o 变成 ue。',
      body: `和 e→ie 一样的“靴子”规律，只是 **o** 变成 **ue**：

| 人称 | poder 能够 | volver 回来 | costar 价值 |
|---|---|---|---|
| yo | p**ue**do | v**ue**lvo | — |
| tú | p**ue**des | v**ue**lves | — |
| él / ella / usted | p**ue**de | v**ue**lve | c**ue**sta |
| nosotros | podemos | volvemos | — |
| vosotros | podéis | volvéis | — |
| ellos / ustedes | p**ue**den | v**ue**lven | c**ue**stan |

### poder + 动词原形
- 能力 / 可能：*No puedo comer picante.*（我不能吃辣。）
- 请求：*¿Puedo ver el menú?*（我可以看看菜单吗？）
- 请别人做事：*¿Puede traer la cuenta, por favor?*（请您把账单拿来好吗？）

### 问价钱
*¿Cuánto **cuesta** el menú del día?*（今日套餐多少钱？）——单数
*¿Cuánto **cuestan** las fresas?*（草莓多少钱？）——复数

### 其他 o→ue 动词
*almorzar*（吃午饭）、*dormir*（睡觉）、*volver*（回来）、*encontrar*（找到）、*recordar*（记得）`,
      examples: [
        ['¿Puedo pagar con tarjeta?', '我可以刷卡吗？'],
        ['¿Cuánto cuesta un café?', '一杯咖啡多少钱？'],
        ['Mis hijos duermen ocho horas.', '我的孩子们睡八个小时。'],
        ['Vuelvo a casa a las seis.', '我六点回家。'],
        ['No podemos ir hoy.', '我们今天去不了。'],
      ],
      tables: [{ verbs: ['poder', 'volver'], tense: 'pres' }],
      origin: `同样是重音规律：拉丁语 **重读的短 o** 变成了 **ue**（*porta → puerta*，*novem → nueve*）。
- 拉丁语 *pot(e)o* → **puedo**（重音在词根上）
- *potemus* → **podemos**（重音在词尾）

**poder** 来自通俗拉丁语 *potere*，是古典拉丁语 *posse*（能够）的改造形式。英语 *potent、potential* 同源。`,
      pitfalls: ['❌ *puedemos* ✅ *podemos*；❌ *pode* ✅ *puede*。', '问价格时单复数不一致：❌ *¿Cuánto cuesta los zapatos?* ✅ *¿Cuánto cuestan los zapatos?*'],
    },
    {
      id: 'a1-restaurante',
      title: '在餐馆点餐',
      titleEs: 'En el restaurante',
      level: 'A1',
      summary: '西班牙午餐常吃“今日套餐”：第一道菜、第二道菜、甜点；点餐说 Para mí… / De primero…',
      body: `### 今日套餐（menú del día）
西班牙很多餐馆中午供应 **menú del día**：价格固定，包括
- **de primero**（第一道菜）：沙拉、汤、蔬菜等
- **de segundo**（第二道菜）：肉或鱼
- **de postre**（甜点）或咖啡
- 面包和一杯饮料

### 常用表达
| 服务员说 | 顾客说 |
|---|---|
| *¿Qué van a tomar?* 你们要点什么？ | ***De primero**, una ensalada.* 第一道菜要沙拉。 |
| *¿Y de segundo?* 第二道呢？ | ***Para mí**, pescado.* 我要鱼。 |
| *¿Para beber?* 喝什么？ | *Agua, **por favor**.* 请给我水。 |
| *¿Algo más?* 还要别的吗？ | *No, gracias. **La cuenta, por favor**.* 不用了，谢谢。请结账。 |

### 礼貌地点餐
- *Quería un café.*（我想要一杯咖啡。）——比 *quiero* 更客气（这是过去未完成时，A2 会学，这里先当固定说法）
- *¿Me pone un café?*（给我来杯咖啡好吗？）——西班牙酒吧里很常见
- *¿Me trae la cuenta, por favor?*（请把账单拿给我好吗？）`,
      examples: [
        ['De primero quiero una sopa.', '第一道菜我要汤。'],
        ['Para mí, el pollo con patatas.', '我要鸡肉配土豆。'],
        ['¿Qué hay de postre?', '甜点有什么？'],
        ['La cuenta, por favor.', '请结账。'],
        ['¿Me pone una caña?', '给我来一小杯啤酒好吗？'],
      ],
      origin: `- **postre**（甜点）来自拉丁语 *postremus*（最后的）：“最后一道菜”。
- **cuenta**（账单）来自动词 *contar*（数，计算）< 拉丁语 *computare*。英语 *count、compute* 同源。
- **menú** 来自法语 *menu*（细小的 → 详细的清单），最终来自拉丁语 *minutus*（细小的）。`,
      latam: '拉美没有固定的“menú del día”说法，各国叫法不同（如墨西哥的 *comida corrida*）。“服务员”在墨西哥是 *mesero*，“账单”很多地方也说 *la cuenta*。',
      pitfalls: ['把 *la cuenta*（账单）说成 *el cuento*（故事）。'],
    },
  ],
  words: [
    { id: 'comida', es: 'comida', zh: '食物；午饭', pos: 'n', g: 'f', level: 'A1', tags: ['food'], ex: ['Me gusta la comida china.', '我喜欢中国菜。'], ety: '来自 comer「吃」。', emoji: '🍲' },
    { id: 'desayuno', es: 'desayuno', zh: '早饭', pos: 'n', g: 'm', level: 'A1', tags: ['food'], ex: ['El desayuno es a las ocho.', '早饭八点。'], ety: 'des-「解除」+ ayuno「空腹」。', emoji: '🥐' },
    { id: 'cena', es: 'cena', zh: '晚饭', pos: 'n', g: 'f', level: 'A1', tags: ['food'], ex: ['La cena está lista.', '晚饭做好了。'], ety: '拉丁语 cena「正餐」。', emoji: '🍽️' },
    { id: 'pan', es: 'pan', zh: '面包', pos: 'n', g: 'm', pl: 'panes', level: 'A1', tags: ['food'], ex: ['Compro pan todos los días.', '我每天买面包。'], ety: '拉丁语 panem。', emoji: '🥖' },
    { id: 'agua', es: 'agua', zh: '水', pos: 'n', g: 'f', level: 'A1', tags: ['food'], ex: ['Un vaso de agua, por favor.', '请给我一杯水。'], ety: '拉丁语 aqua。英语 aquarium 同源。', note: '阴性名词，但以重读 a 开头，单数用 el：el agua fría。', emoji: '💧' },
    { id: 'leche', es: 'leche', zh: '牛奶', pos: 'n', g: 'f', level: 'A1', tags: ['food'], ex: ['Tomo café con leche.', '我喝牛奶咖啡。'], ety: '拉丁语 lactem，ct 变成 ch。英语 lactose 同源。', emoji: '🥛' },
    { id: 'cafe', es: 'café', zh: '咖啡；咖啡馆', pos: 'n', g: 'm', pl: 'cafés', level: 'A1', tags: ['food'], ex: ['¿Quieres un café?', '你要来杯咖啡吗？'], ety: '经意大利语来自土耳其语 kahve < 阿拉伯语 qahwa。', emoji: '☕' },
    { id: 'te', es: 'té', zh: '茶', pos: 'n', g: 'm', pl: 'tés', level: 'A1', tags: ['food'], ex: ['Prefiero el té verde.', '我更喜欢绿茶。'], ety: '来自闽南话“茶”（te）的读音，经荷兰商人传入欧洲。带重音符号，区别于代词 te。', emoji: '🍵' },
    { id: 'zumo', es: 'zumo', zh: '果汁', pos: 'n', g: 'm', level: 'A1', tags: ['food'], ex: ['Un zumo de naranja, por favor.', '请来一杯橙汁。'], ety: '来自阿拉伯语 zūm「汁液」。', latam: '拉美说 jugo。', emoji: '🧃' },
    { id: 'vino', es: 'vino', zh: '葡萄酒', pos: 'n', g: 'm', level: 'A1', tags: ['food'], ex: ['¿Vino tinto o blanco?', '红葡萄酒还是白葡萄酒？'], ety: '拉丁语 vinum。英语 wine 同源。', emoji: '🍷' },
    { id: 'cerveza', es: 'cerveza', zh: '啤酒', pos: 'n', g: 'f', level: 'A1', tags: ['food'], ex: ['Una cerveza bien fría.', '一杯冰啤酒。'], ety: '拉丁语 cervesia，据说是高卢语来源。', emoji: '🍺' },
    { id: 'fruta', es: 'fruta', zh: '水果', pos: 'n', g: 'f', level: 'A1', tags: ['food'], ex: ['Como mucha fruta.', '我吃很多水果。'], ety: '拉丁语 fructa（fructus「果实」的复数）。英语 fruit 同源。', emoji: '🍎' },
    { id: 'manzana', es: 'manzana', zh: '苹果', pos: 'n', g: 'f', level: 'A1', tags: ['food'], ex: ['Una manzana al día.', '一天一个苹果。'], ety: '拉丁语 (mala) Matiana「马蒂乌斯（一位罗马农学家）品种的苹果」。', emoji: '🍏' },
    { id: 'naranja', es: 'naranja', zh: '橙子', pos: 'n', g: 'f', level: 'A1', tags: ['food'], ex: ['Me gustan las naranjas de Valencia.', '我喜欢瓦伦西亚的橙子。'], ety: '来自阿拉伯语 nāranj < 波斯语 nārang < 梵语。英语 orange 也来自同一个词（a naranj → an orange）。', emoji: '🍊' },
    { id: 'platano', es: 'plátano', zh: '香蕉', pos: 'n', g: 'm', level: 'A1', tags: ['food'], ex: ['Desayuno un plátano.', '我早饭吃一根香蕉。'], ety: '原指“法国梧桐”（希腊语 plátanos「宽叶的」），后来因叶子相似被用来指香蕉树。', latam: '很多拉美国家说 banana（阿根廷）、banano 或 guineo。', emoji: '🍌' },
    { id: 'carne', es: 'carne', zh: '肉', pos: 'n', g: 'f', level: 'A1', tags: ['food'], ex: ['No como carne roja.', '我不吃红肉。'], ety: '拉丁语 carnem。英语 carnival、carnivore 同源。', emoji: '🥩' },
    { id: 'pollo', es: 'pollo', zh: '鸡肉；小鸡', pos: 'n', g: 'm', level: 'A1', tags: ['food'], ex: ['Pollo con patatas, por favor.', '请来一份鸡肉配土豆。'], ety: '拉丁语 pullus「幼崽，小鸡」。英语 poultry 同源。', emoji: '🍗' },
    { id: 'pescado', es: 'pescado', zh: '鱼（食物）', pos: 'n', g: 'm', level: 'A1', tags: ['food'], ex: ['Prefiero el pescado.', '我更喜欢吃鱼。'], ety: '来自 pescar「捕鱼」：“被捕上来的”。活鱼叫 pez。', note: 'pez 是活的鱼，pescado 是作为食物的鱼。', emoji: '🐟' },
    { id: 'arroz', es: 'arroz', zh: '米饭；大米', pos: 'n', g: 'm', pl: 'arroces', level: 'A1', tags: ['food'], ex: ['La paella es un plato de arroz.', '海鲜饭是一道米饭菜。'], ety: '来自阿拉伯语 ar-ruzz，经希腊语等辗转传入，最终源自南亚的语言。西语很多以 a- 开头的词带着阿拉伯语冠词 al-。', emoji: '🍚' },
    { id: 'huevo', es: 'huevo', zh: '鸡蛋', pos: 'n', g: 'm', level: 'A1', tags: ['food'], ex: ['Desayuno dos huevos.', '我早饭吃两个鸡蛋。'], ety: '拉丁语 ovum：重读 o 变成 ue，词首加了不发音的 h。英语 oval 同源。', emoji: '🥚' },
    { id: 'queso', es: 'queso', zh: '奶酪', pos: 'n', g: 'm', level: 'A1', tags: ['food'], ex: ['El queso manchego es muy famoso.', '曼切戈奶酪很有名。'], ety: '拉丁语 caseus。英语 cheese、casein 同源。', emoji: '🧀' },
    { id: 'jamon', es: 'jamón', zh: '火腿', pos: 'n', g: 'm', pl: 'jamones', level: 'A1', tags: ['food'], ex: ['El jamón ibérico es caro.', '伊比利亚火腿很贵。'], ety: '来自法语 jambon，词根 jambe「腿」。', emoji: '🍖' },
    { id: 'ensalada', es: 'ensalada', zh: '沙拉', pos: 'n', g: 'f', level: 'A1', tags: ['food'], ex: ['De primero, una ensalada mixta.', '第一道菜要一份什锦沙拉。'], ety: '来自 sal「盐」：“加了盐的（菜）”。英语 salad 同源。', emoji: '🥗' },
    { id: 'sopa', es: 'sopa', zh: '汤', pos: 'n', g: 'f', level: 'A1', tags: ['food'], ex: ['La sopa está muy caliente.', '汤很烫。'], ety: '源自日耳曼语 *suppa「泡在汤里的面包」。英语 soup 同源。', emoji: '🍜' },
    { id: 'patata', es: 'patata', zh: '土豆', pos: 'n', g: 'f', level: 'A1', tags: ['food'], ex: ['Me encantan las patatas fritas.', '我超爱薯条。'], ety: '混合了泰诺语 batata「红薯」和克丘亚语 papa「土豆」两个美洲词。', latam: '拉美说 papa。', emoji: '🥔' },
    { id: 'tomate', es: 'tomate', zh: '番茄', pos: 'n', g: 'm', level: 'A1', tags: ['food'], ex: ['Pan con tomate, por favor.', '请来一份番茄面包。'], ety: '来自纳瓦特尔语 tomatl。西班牙人把这种美洲植物带到了欧洲。', emoji: '🍅' },
    { id: 'verdura', es: 'verdura', zh: '蔬菜', pos: 'n', g: 'f', level: 'A1', tags: ['food'], ex: ['Hay que comer verdura.', '要吃蔬菜。'], ety: '来自 verde「绿色的」< 拉丁语 viridis。', emoji: '🥦' },
    { id: 'postre', es: 'postre', zh: '甜点', pos: 'n', g: 'm', level: 'A1', tags: ['food'], ex: ['¿Qué hay de postre?', '甜点有什么？'], ety: '拉丁语 postremus「最后的」。', emoji: '🍮' },
    { id: 'helado', es: 'helado', zh: '冰淇淋', pos: 'n', g: 'm', level: 'A1', tags: ['food'], ex: ['Un helado de chocolate.', '一个巧克力冰淇淋。'], ety: '来自 helar「冻结」< 拉丁语 gelare。英语 gelato、jelly 同源。', emoji: '🍨' },
    { id: 'menu', es: 'menú', zh: '菜单；套餐', pos: 'n', g: 'm', pl: 'menús', level: 'A1', tags: ['food'], ex: ['El menú del día cuesta doce euros.', '今日套餐十二欧元。'], ety: '来自法语 menu「详细的（清单）」< 拉丁语 minutus「细小的」。' },
    { id: 'cuenta', es: 'cuenta', zh: '账单；账户', pos: 'n', g: 'f', level: 'A1', tags: ['food', 'shop'], ex: ['La cuenta, por favor.', '请结账。'], ety: '来自 contar「计算」< 拉丁语 computare。英语 count、account 同源。', emoji: '🧾' },
    { id: 'plato', es: 'plato', zh: '盘子；菜肴', pos: 'n', g: 'm', level: 'A1', tags: ['food', 'home'], ex: ['La paella es un plato típico.', '海鲜饭是一道传统菜。'], ety: '通俗拉丁语 plattus「平的」。英语 plate 同源。', emoji: '🍽️' },
    { id: 'gustar', es: 'gustar', zh: '喜欢（使……喜欢）', pos: 'v', level: 'A1', tags: ['verb', 'feel'], ex: ['Me gusta el café.', '我喜欢咖啡。'], ety: '拉丁语 gustare「品尝」。', note: '被喜欢的东西作主语：me gusta(n)…' },
    { id: 'encantar', es: 'encantar', zh: '非常喜欢', pos: 'v', level: 'A1', tags: ['verb', 'feel'], ex: ['Me encanta la paella.', '我超爱海鲜饭。'], ety: '拉丁语 incantare「施咒语」→“迷住”。', note: '用法同 gustar，不加 mucho。' },
    { id: 'querer', es: 'querer', zh: '想要；爱', pos: 'v', level: 'A1', tags: ['verb'], ex: ['Quiero un café.', '我要一杯咖啡。'], ety: '拉丁语 quaerere「寻求」。英语 query、question 同源。', note: 'e→ie：quiero, quieres…' },
    { id: 'preferir', es: 'preferir', zh: '更喜欢', pos: 'v', level: 'A1', tags: ['verb'], ex: ['Prefiero el té.', '我更喜欢茶。'], ety: '拉丁语 praeferre「放在前面」。英语 prefer 同源。', note: 'e→ie：prefiero, prefieres…' },
    { id: 'poder', es: 'poder', zh: '能够；可以', pos: 'v', level: 'A1', tags: ['verb'], ex: ['¿Puedo pagar con tarjeta?', '我可以刷卡吗？'], ety: '通俗拉丁语 potere。英语 potent 同源。', note: 'o→ue：puedo, puedes…' },
    { id: 'costar', es: 'costar', zh: '价值；花费', pos: 'v', level: 'A1', tags: ['verb', 'shop'], ex: ['¿Cuánto cuesta?', '多少钱？'], ety: '拉丁语 constare「定价为」。英语 cost 同源。', note: 'o→ue：cuesta, cuestan。' },
    { id: 'volver', es: 'volver', zh: '回来；返回', pos: 'v', level: 'A1', tags: ['verb'], ex: ['Vuelvo a casa a las seis.', '我六点回家。'], ety: '拉丁语 volvere「转动」。英语 revolve 同源。', note: 'o→ue：vuelvo…；过去分词 vuelto。' },
    { id: 'dormir', es: 'dormir', zh: '睡觉', pos: 'v', level: 'A1', tags: ['verb'], ex: ['Duermo ocho horas.', '我睡八个小时。'], ety: '拉丁语 dormire。英语 dormant 同源。', note: 'o→ue：duermo, duermes…' },
    { id: 'tomar', es: 'tomar', zh: '拿；吃，喝', pos: 'v', level: 'A1', tags: ['verb', 'food'], ex: ['¿Qué vas a tomar?', '你要点什么？'], ety: '来源不确定，可能来自古代口语词。', note: '在西班牙，tomar 常用来表示“吃、喝”：tomar un café。' },
    { id: 'pagar', es: 'pagar', zh: '付钱', pos: 'v', level: 'A1', tags: ['verb', 'shop'], ex: ['Pago yo.', '我来付。'], ety: '拉丁语 pacare「使平静」→“（用钱）安抚债主”。英语 pay 同源。' },
    { id: 'rico', es: 'rico', f: 'rica', zh: '好吃的；富有的', pos: 'adj', level: 'A1', tags: ['food', 'adj'], ex: ['¡Qué rica está la tortilla!', '这个土豆饼真好吃！'], ety: '来自哥特语 reiks「有权势的」。英语 rich 同源。' },
  ],
  sentences: [
    { id: 's1', es: 'Me gusta mucho el chocolate.', zh: '我很喜欢巧克力。', g: ['a1-gustar'], distract: ['gusto', 'yo'] },
    { id: 's2', es: '¿Te gustan las verduras?', zh: '你喜欢蔬菜吗？', g: ['a1-gustar'], distract: ['gusta'] },
    { id: 's3', es: 'A mi padre le encanta cocinar.', zh: '我爸爸特别喜欢做饭。', g: ['a1-gustar'] },
    { id: 's4', es: 'No nos gusta el café.', zh: '我们不喜欢咖啡。', g: ['a1-gustar'] },
    { id: 's5', es: 'Me gustan las naranjas.', zh: '我喜欢橙子。', g: ['a1-gustar'], distract: ['gusta'] },
    { id: 's6', es: 'A mí también.', zh: '我也是。', g: ['a1-gustar'], distract: ['tampoco'] },
    { id: 's7', es: 'A mí tampoco.', zh: '我也不。', g: ['a1-gustar'], distract: ['también'] },
    { id: 's8', es: 'Quiero un vaso de agua.', zh: '我要一杯水。', alt: ['Quiero un vaso de agua, por favor'], g: ['a1-e-ie'] },
    { id: 's9', es: '¿Qué quieres comer?', zh: '你想吃什么？', g: ['a1-e-ie'] },
    { id: 's10', es: 'Prefiero el té.', zh: '我更喜欢茶。', g: ['a1-e-ie'] },
    { id: 's11', es: 'Queremos una mesa para dos.', zh: '我们要一张两人桌。', g: ['a1-e-ie', 'a1-restaurante'], distract: ['quieremos'] },
    { id: 's12', es: '¿Prefieres carne o pescado?', zh: '你更喜欢肉还是鱼？', g: ['a1-e-ie'] },
    { id: 's13', es: '¿Puedo pagar con tarjeta?', zh: '我可以刷卡吗？', g: ['a1-o-ue'], distract: ['podo'] },
    { id: 's14', es: '¿Cuánto cuesta el menú?', zh: '套餐多少钱？', g: ['a1-o-ue'] },
    { id: 's15', es: 'No puedo comer picante.', zh: '我不能吃辣。', g: ['a1-o-ue'] },
    { id: 's16', es: 'Mis hijos duermen mucho.', zh: '我的孩子们睡得很多。', g: ['a1-o-ue'] },
    { id: 's17', es: 'Vuelvo a casa a las seis.', zh: '我六点回家。', g: ['a1-o-ue'] },
    { id: 's18', es: 'De primero, una ensalada.', zh: '第一道菜要一份沙拉。', g: ['a1-restaurante'] },
    { id: 's19', es: 'Para mí, el pollo con patatas.', zh: '我要鸡肉配土豆。', g: ['a1-restaurante'] },
    { id: 's20', es: 'La cuenta, por favor.', zh: '请结账。', g: ['a1-restaurante'] },
    { id: 's21', es: '¿Qué hay de postre?', zh: '甜点有什么？', g: ['a1-restaurante'] },
    { id: 's22', es: 'Un café con leche, por favor.', zh: '请来一杯牛奶咖啡。', g: ['a1-restaurante'] },
    { id: 's23', es: '¿Os gusta la comida española?', zh: '你们喜欢西班牙菜吗？', g: ['a1-gustar'] },
    { id: 's24', es: 'La paella está muy rica.', zh: '海鲜饭很好吃。', g: ['a1-restaurante'] },
  ],
  cloze: [
    { id: 'c1', text: 'Me ___ el café con leche.', answers: ['gusta'], options: ['gusta', 'gustan', 'gusto'], zh: '我喜欢牛奶咖啡。', g: ['a1-gustar'] },
    { id: 'c2', text: 'Me ___ las fresas.', answers: ['gustan'], options: ['gustan', 'gusta', 'gusto'], zh: '我喜欢草莓。', g: ['a1-gustar'], explain: 'las fresas 是复数，用 gustan。' },
    { id: 'c3', text: '¿___ gusta cocinar?', answers: ['Te'], options: ['Te', 'Tú', 'Tu'], zh: '你喜欢做饭吗？', g: ['a1-gustar'] },
    { id: 'c4', text: 'A mis padres ___ gusta el vino.', answers: ['les'], options: ['les', 'le', 'se'], zh: '我父母喜欢葡萄酒。', g: ['a1-gustar'] },
    { id: 'c5', text: 'A nosotros ___ encanta la comida china.', answers: ['nos'], options: ['nos', 'les', 'os'], zh: '我们超爱中国菜。', g: ['a1-gustar'] },
    { id: 'c6', text: '—No me gusta la cerveza. —A mí ___.', answers: ['tampoco'], options: ['tampoco', 'también', 'sí'], zh: '——我不喜欢啤酒。——我也不喜欢。', g: ['a1-gustar'] },
    { id: 'c7', text: 'Me gusta ___ paella.', answers: ['la'], options: ['la', 'una', '—'], zh: '我喜欢海鲜饭。', g: ['a1-gustar'], explain: 'gustar 后面的名词要加定冠词。' },
    { id: 'c8', text: 'Yo ___ un zumo de naranja.', answers: ['quiero'], hint: 'querer', zh: '我要一杯橙汁。', g: ['a1-e-ie'] },
    { id: 'c9', text: 'Nosotros ___ ir a un restaurante italiano.', answers: ['queremos'], hint: 'querer', zh: '我们想去意大利餐馆。', g: ['a1-e-ie'], explain: 'nosotros 不变：queremos。' },
    { id: 'c10', text: '¿Tú ___ té o café?', answers: ['prefieres'], hint: 'preferir', zh: '你更喜欢茶还是咖啡？', g: ['a1-e-ie'] },
    { id: 'c11', text: 'Mis amigos ___ la carne.', answers: ['prefieren'], hint: 'preferir', zh: '我的朋友们更喜欢肉。', g: ['a1-e-ie'] },
    { id: 'c12', text: '¿___ pagar con tarjeta?', answers: ['Puedo'], options: ['Puedo', 'Podo', 'Pueda'], zh: '我可以刷卡吗？', g: ['a1-o-ue'] },
    { id: 'c13', text: 'Nosotros no ___ venir mañana.', answers: ['podemos'], hint: 'poder', zh: '我们明天来不了。', g: ['a1-o-ue'] },
    { id: 'c14', text: '¿Cuánto ___ las manzanas?', answers: ['cuestan'], options: ['cuestan', 'cuesta', 'costan'], zh: '苹果多少钱？', g: ['a1-o-ue'] },
    { id: 'c15', text: 'Mi abuela ___ la siesta todos los días.', answers: ['duerme'], hint: 'dormir', zh: '我奶奶每天睡午觉。', g: ['a1-o-ue'] },
    { id: 'c16', text: '¿A qué hora ___ (tú) a casa?', answers: ['vuelves'], hint: 'volver', zh: '你几点回家？', g: ['a1-o-ue'] },
    { id: 'c17', text: 'De ___, quiero una sopa.', answers: ['primero'], options: ['primero', 'postre', 'segundo'], zh: '第一道菜我要汤。', g: ['a1-restaurante'] },
    { id: 'c18', text: 'La ___, por favor.', answers: ['cuenta'], options: ['cuenta', 'cuento', 'carta'], zh: '请结账。', g: ['a1-restaurante'] },
    { id: 'c19', text: '¿Qué hay de ___? — Flan o helado.', answers: ['postre'], options: ['postre', 'primero', 'beber'], zh: '甜点有什么？——布丁或冰淇淋。', g: ['a1-restaurante'] },
  ],
  conj: [
    { verbs: ['querer', 'preferir', 'pensar', 'empezar'], tenses: ['pres'], g: 'a1-e-ie' },
    { verbs: ['poder', 'volver', 'dormir', 'almorzar'], tenses: ['pres'], g: 'a1-o-ue' },
  ],
  dialogues: [
    {
      id: 'a1-u06-d1',
      title: '今日套餐 · El menú del día',
      lines: [
        { who: 'Camarero', es: 'Buenas tardes. ¿Qué van a tomar?', zh: '下午好。你们要点什么？' },
        { who: 'Ana', es: 'De primero, una ensalada mixta, por favor.', zh: '第一道菜请来一份什锦沙拉。' },
        { who: 'Li Ming', es: 'Para mí, la sopa de verduras.', zh: '我要蔬菜汤。' },
        { who: 'Camarero', es: '¿Y de segundo?', zh: '第二道菜呢？' },
        { who: 'Ana', es: 'Yo quiero el pescado. ¿Y tú?', zh: '我要鱼。你呢？' },
        { who: 'Li Ming', es: 'Prefiero el pollo con patatas.', zh: '我更想要鸡肉配土豆。' },
        { who: 'Camarero', es: 'Muy bien. ¿Y para beber?', zh: '好的。喝点什么？' },
        { who: 'Ana', es: 'Agua para los dos. ¿Podemos pagar con tarjeta?', zh: '两杯水。我们可以刷卡吗？' },
        { who: 'Camarero', es: 'Sí, claro.', zh: '当然可以。' },
      ],
    },
  ],
  readings: [
    {
      id: 'a1-r09',
      level: 'A1',
      title: '¿Qué te gusta comer?',
      titleZh: '你喜欢吃什么？',
      topic: '饮食',
      paras: [
        [
          ['Me llamo Javier y me encanta comer.', '我叫哈维尔，我特别喜欢吃。'],
          ['Me gusta mucho la comida española, sobre todo la tortilla de patatas y el jamón.', '我很喜欢西班牙菜，尤其是土豆饼和火腿。'],
          ['También me gusta la comida china: las empanadillas chinas son mis favoritas.', '我也喜欢中国菜：饺子是我的最爱。'],
        ],
        [
          ['Mi novia, Mei, es vegetariana.', '我女朋友小美是素食者。'],
          ['No come carne ni pescado, pero le encantan las verduras y la fruta.', '她不吃肉也不吃鱼，但特别喜欢蔬菜和水果。'],
          ['Los domingos cocinamos juntos: ella prepara verduras al estilo chino y yo hago una ensalada.', '每周日我们一起做饭：她做中式蔬菜，我做沙拉。'],
        ],
        [
          ['¿Lo que no me gusta? ¡El picante!', '我不喜欢什么？辣！'],
          ['A Mei le encanta, pero yo no puedo comer chile.', '小美特别喜欢，但我不能吃辣椒。'],
        ],
      ],
      gloss: { 'sobre': '在……之上', todo: '一切', tortilla: '（西班牙）土豆鸡蛋饼', empanadillas: '小馅饼（这里指饺子）', favoritas: '最喜爱的', vegetariana: '素食者', ni: '也不', cocinamos: '我们做饭', juntos: '一起', prepara: '准备，做', estilo: '风格', hago: '我做', Lo: '……的东西', picante: '辣的；辣味', chile: '辣椒' },
      questions: [
        { type: 'mc', q: '哈维尔最喜欢的中国菜是？', options: ['米饭', '饺子', '面条'], answer: 1 },
        { type: 'tf', q: '小美吃鱼。', answer: false, explain: 'No come carne ni pescado.' },
        { type: 'mc', q: '周日他们做什么？', options: ['去餐馆', '一起做饭', '去市场'], answer: 1 },
        { type: 'tf', q: '哈维尔喜欢吃辣。', answer: false, explain: 'Yo no puedo comer chile.' },
      ],
    },
    {
      id: 'a1-r10',
      level: 'A1',
      title: 'Las tapas',
      titleZh: '塔帕斯小吃',
      topic: '文化',
      paras: [
        [
          ['En España, mucha gente toma tapas con los amigos.', '在西班牙，很多人和朋友一起吃塔帕斯小吃。'],
          ['Una tapa es un plato pequeño: unas aceitunas, un poco de queso o unas patatas bravas.', '塔帕斯是一小盘菜：几颗橄榄、一点奶酪或者一份辣味土豆。'],
        ],
        [
          ['En algunas ciudades, como Granada, la tapa es gratis con la bebida.', '在一些城市，比如格拉纳达，点饮料就送一份塔帕斯。'],
          ['Las personas van de bar en bar y en cada bar toman una tapa diferente.', '人们一家酒吧接一家酒吧地逛，在每家吃一种不同的小吃。'],
        ],
        [
          ['Las tapas no son solo comida: son una manera de estar con los amigos.', '塔帕斯不只是食物，更是一种和朋友相聚的方式。'],
        ],
      ],
      gloss: { gente: '人们', aceitunas: '橄榄（复数）', bravas: '辣味的（patatas bravas 辣味土豆）', algunas: '一些', como: '比如', gratis: '免费的', bebida: '饮料', van: '去（他们）', cada: '每个', diferente: '不同的', solo: '仅仅', manera: '方式' },
      questions: [
        { type: 'tf', q: '塔帕斯是一大盘主菜。', answer: false, explain: 'Una tapa es un plato pequeño.' },
        { type: 'mc', q: '在格拉纳达，塔帕斯有什么特别？', options: ['很贵', '点饮料免费送', '只有晚上才有'], answer: 1 },
        { type: 'mc', q: '“ir de bar en bar” 是什么意思？', options: ['一直待在一家酒吧', '一家接一家地逛酒吧', '在家里吃饭'], answer: 1 },
      ],
    },
  ],
  writing: [{ id: 'w1', prompt: '写一写你的饮食喜好：喜欢和不喜欢吃什么、喝什么，你最喜欢的一道菜是什么。', words: [30, 70], hints: ['Me gusta(n)… / No me gusta(n)…', 'Me encanta…', 'Prefiero… a…'] }],
}
