import type { Unit } from '../types'

export const u06: Unit = {
  id: 'a2-u06',
  level: 'A2',
  order: 6,
  title: '下厨房',
  titleEs: 'En la cocina',
  icon: '🍳',
  goals: ['用宾格代词 lo / la / los / las 代替东西和人', '用与格代词 le / les 说“给谁”', '把两个代词连用：se lo, me la…', '看懂和讲解一份简单的菜谱'],
  grammar: [
    {
      id: 'a2-od',
      title: '直接宾语代词：lo, la, los, las',
      titleEs: 'Pronombres de objeto directo',
      level: 'A2',
      summary: 'me, te, lo / la, nos, os, los / las：代替前面说过的东西或人，放在变位动词前面。',
      body: `为了不重复名词，用 **直接宾语代词** 代替它：

| 人称 | 代词 | 例句 |
|---|---|---|
| 我 | **me** | *Ana **me** llama todos los días.* |
| 你 | **te** | ***Te** quiero.* |
| 他 / 它（阳）/ 您（男） | **lo** | *¿El pan? **Lo** compro yo.* |
| 她 / 它（阴）/ 您（女） | **la** | *¿La sopa? **La** hace mi madre.* |
| 我们 | **nos** | *¿**Nos** ves?* |
| 你们 | **os** | ***Os** espero en la puerta.* |
| 他们 / 它们（阳） | **los** | *¿Los tomates? **Los** lavo ahora.* |
| 她们 / 它们（阴） | **las** | *¿Las llaves? No **las** encuentro.* |

### 位置
1. 变位动词 **前面**：*La como.* / *No la como.*
2. 和 **原形** 或 **副动词** 连用时，可以放在前面，也可以 **连在后面**：
   - *La voy a comprar.* = *Voy a comprar**la**.*
   - *Lo estoy haciendo.* = *Estoy haciéndo**lo**.*（连写后可能要加重音）
3. 肯定命令式必须连在后面（下一单元）：*¡Cómpra**lo**!*

### 中性的 lo
代替一整件事或一句话：*¿Sabes que Ana se casa? — Sí, **lo** sé.*（是的，我知道。）`,
      examples: [
        ['¿Dónde está la sal? — No la veo.', '盐在哪儿？——我没看见。'],
        ['Este pastel lo ha hecho mi abuela.', '这个蛋糕是我奶奶做的。'],
        ['¿Me llamas mañana?', '你明天给我打电话好吗？'],
        ['Voy a lavarlos ahora.', '我现在去洗它们。'],
        ['—¿Sabes dónde vive Luis? —No, no lo sé.', '——你知道路易斯住在哪儿吗？——不知道。'],
      ],
      origin: `宾格代词来自拉丁语指示代词 *ille*（那个）的宾格：
- *illum → lo*，*illam → la*，*illos → los*，*illas → las*

和定冠词 *el, la, los, las* 是“同一家族”，所以长得很像。*me、te、nos、os* 则来自拉丁语的人称代词 *me、te、nos、vos*。

**leísmo**：在西班牙，指 **男性的人** 时，常用 *le* 代替 *lo*（*Le vi ayer* = 我昨天见到他了），RAE 认可这种用法；但指东西时一定要用 *lo*。`,
      pitfalls: ['代词放错位置：❌ *Como la.* ✅ *La como.*', '阴阳性不一致：❌ *¿La pizza? Lo quiero.* ✅ *¿La pizza? La quiero.*', '和人称 a 混淆：*Veo **a** Ana* → *La veo*（不说 *a la veo*）。'],
    },
    {
      id: 'a2-oi',
      title: '间接宾语代词：le, les',
      titleEs: 'Pronombres de objeto indirecto',
      level: 'A2',
      summary: 'me, te, le, nos, os, les：表示“给谁、对谁”；常和 a + 人 一起重复出现。',
      body: `**间接宾语** 回答“给谁？对谁？”：

| 人称 | 代词 |
|---|---|
| 我 | **me** |
| 你 | **te** |
| 他 / 她 / 您 | **le** |
| 我们 | **nos** |
| 你们 | **os** |
| 他们 / 她们 / 诸位 | **les** |

- *Mi madre **me** da dinero.*（我妈妈给我钱。）
- ***Le** escribo un mensaje.*（我给他写条消息。）
- *¿**Te** presto mi libro?*（我把书借给你吧？）

### 常带间接宾语的动词
*dar*（给）· *decir*（告诉）· *regalar*（送）· *enviar / mandar*（寄）· *prestar*（借给）· *preguntar*（问）· *explicar*（解释）· *pedir*（向……要）· *traer*（带给）

### “重复”的习惯
西语常常 **同时** 说代词和 **a + 名词**，这不是啰嗦，而是正常用法：
*Le doy el libro **a Juan**.*（我把书给胡安。）
*¿**Les** has dicho la verdad **a tus padres**?*（你跟父母说实话了吗？）

> 你已经见过它们了：*me gusta*、*le duele* 里的 *me、le* 就是间接宾语代词。`,
      examples: [
        ['Le he regalado un libro a mi novia.', '我送了女朋友一本书。'],
        ['¿Me pasas la sal, por favor?', '请把盐递给我好吗？'],
        ['El profesor nos explicó la receta.', '老师给我们讲解了菜谱。'],
        ['¿Qué les vas a decir a tus padres?', '你打算跟你父母说什么？'],
        ['Mi hermano siempre me pide dinero.', '我哥哥总是找我要钱。'],
      ],
      origin: `**le / les** 来自拉丁语 *ille* 的与格 *illi*（给他）和复数 *illis*。拉丁语用词尾变化区分“他（主格）/ 他（宾格）/ 给他（与格）”，西语丢掉了名词的格变化，却在代词里保留了一部分：*él / lo / le*。`,
      pitfalls: ['给“他们”用 le：❌ *Le doy el regalo a mis padres.* ✅ *Les doy el regalo a mis padres.*', '用 lo 表示“给他”：❌ *Lo digo la verdad.* ✅ *Le digo la verdad.*'],
    },
    {
      id: 'a2-se-lo',
      title: '两个代词连用：me lo, se lo',
      titleEs: 'Dos pronombres juntos',
      level: 'A2',
      summary: '顺序：间接（给谁）+ 直接（什么）：me lo, te la…；le / les + lo / la → se lo / se la。',
      body: `两个代词同时出现时，**间接宾语在前，直接宾语在后**：

- *¿Me das el libro? — Sí, **te lo** doy.*（是的，我给你。）
- *¿Nos traes las fotos? — Sí, **os las** traigo.*

### le / les 遇到 lo / la → se
*le lo* 和 *les la* 读起来很别扭，所以 **le / les 变成 se**：
- *Le doy **el regalo** a Ana.* → ***Se lo** doy.*
- *Les explico **la receta** a mis amigos.* → ***Se la** explico.*

### 位置规则和单个代词一样
- 变位动词前：*Se lo digo.*
- 原形 / 副动词后可以连写：*Voy a decír**selo**.* / *Estoy explicándo**selo**.*（注意重音）

### 小技巧：先找“给谁”，再找“什么”
*¿Le has dado **las llaves** **a tu hermano**?* → 给谁：a tu hermano（le → se）；什么：las llaves（las）→ ***Se las** he dado.*`,
      examples: [
        ['—¿Me prestas tu bici? —Sí, te la presto.', '——你的自行车借我好吗？——好，借给你。'],
        ['¿El regalo? Se lo di ayer a Marta.', '礼物吗？我昨天给玛尔塔了。'],
        ['¿Las fotos? Te las mando esta noche.', '照片吗？我今晚发给你。'],
        ['Voy a explicárselo a mis padres.', '我要去跟我父母解释这件事。'],
        ['—¿Le has dicho la verdad? —No, todavía no se la he dicho.', '——你跟他说实话了吗？——还没有。'],
      ],
      origin: `**se lo 里的 se 是怎么来的？** 这个 *se* 和自反代词 *se* 本来不是一个词！古西语里“给他 + 它”说 **ge lo**（来自拉丁语 *illi illum*），*ge* 的读音后来和自反代词 *se* 变得相同，就写成了 *se*。所以 *se lo doy* 里的 *se* 实际上是“给他 / 她 / 他们”。`,
      pitfalls: ['❌ *Le lo doy.* ✅ *Se lo doy.*', '顺序颠倒：❌ *Lo te doy.* ✅ *Te lo doy.*', '连写后忘了重音：❌ *explicarselo* ✅ *explicárselo*。'],
    },
  ],
  words: [
    { id: 'receta', es: 'receta', zh: '菜谱；药方', pos: 'n', g: 'f', level: 'A2', tags: ['food'], ex: ['¿Me das la receta de la tortilla?', '你把土豆饼的做法告诉我好吗？'], ety: '拉丁语 recepta「收下的（东西）」。英语 recipe、receipt 同源。', emoji: '📝' },
    { id: 'ingrediente', es: 'ingrediente', zh: '配料；原料', pos: 'n', g: 'm', level: 'A2', tags: ['food'], ex: ['Estos son los ingredientes.', '这些是配料。'] },
    { id: 'cortar', es: 'cortar', zh: '切；剪', pos: 'v', level: 'A2', tags: ['verb', 'food'], ex: ['Corta la cebolla en trozos pequeños.', '把洋葱切成小块。'], ety: '拉丁语 curtare「截短」。' },
    { id: 'pelar', es: 'pelar', zh: '削皮；剥', pos: 'v', level: 'A2', tags: ['verb', 'food'], ex: ['Primero pelo las patatas.', '我先削土豆皮。'], ety: '来自 pelo「毛」：原意“拔毛”。' },
    { id: 'freir', es: 'freír', zh: '炸；煎', pos: 'v', level: 'A2', tags: ['verb', 'food'], ex: ['Freímos las patatas en aceite de oliva.', '我们用橄榄油炸土豆。'], ety: '拉丁语 frigere。英语 fry 同源。', note: '变位类似 reír：frío, fríes…；过去分词 frito。' },
    { id: 'hervir', es: 'hervir', zh: '煮沸；煮', pos: 'v', level: 'A2', tags: ['verb', 'food'], ex: ['Hierve el agua y añade la pasta.', '把水烧开，放入意面。'], note: 'e→ie / e→i：hierve；hirvió。' },
    { id: 'anadir', es: 'añadir', zh: '加入', pos: 'v', level: 'A2', tags: ['verb', 'food'], ex: ['Añade un poco de sal.', '加一点盐。'], ety: '拉丁语 inaddere「加上」。' },
    { id: 'mezclar', es: 'mezclar', zh: '混合；搅拌', pos: 'v', level: 'A2', tags: ['verb', 'food'], ex: ['Mezcla los huevos con las patatas.', '把鸡蛋和土豆拌在一起。'], ety: '通俗拉丁语 misculare。英语 mix 同源。' },
    { id: 'batir', es: 'batir', zh: '搅打（鸡蛋等）', pos: 'v', level: 'A2', tags: ['verb', 'food'], ex: ['Bate los huevos en un bol.', '在碗里把鸡蛋打散。'], ety: '拉丁语 battuere「敲打」。英语 batter 同源。' },
    { id: 'calentar', es: 'calentar', zh: '加热', pos: 'v', level: 'A2', tags: ['verb', 'food'], ex: ['Calienta el aceite en una sartén.', '在平底锅里把油烧热。'], note: 'e→ie：caliento。' },
    { id: 'asar', es: 'asar', zh: '烤', pos: 'v', level: 'A2', tags: ['verb', 'food'], ex: ['Asamos el pollo en el horno.', '我们在烤箱里烤鸡。'] },
    { id: 'echar', es: 'echar', zh: '放入；倒；扔', pos: 'v', level: 'A2', tags: ['verb', 'food'], ex: ['Echa el arroz en la olla.', '把米倒进锅里。'], ety: '拉丁语 iactare「扔」。' },
    { id: 'sarten', es: 'sartén', zh: '平底锅', pos: 'n', g: 'f', pl: 'sartenes', level: 'A2', tags: ['food', 'home'], ex: ['Necesito una sartén grande.', '我需要一个大平底锅。'], note: '阴性：la sartén。', emoji: '🍳' },
    { id: 'olla', es: 'olla', zh: '锅（深锅）', pos: 'n', g: 'f', level: 'A2', tags: ['food', 'home'], ex: ['Pon la olla al fuego.', '把锅放到火上。'] },
    { id: 'horno', es: 'horno', zh: '烤箱', pos: 'n', g: 'm', level: 'A2', tags: ['food', 'home'], ex: ['El pastel está en el horno.', '蛋糕在烤箱里。'], ety: '拉丁语 furnus：f 变成 h。英语 furnace 同源。' },
    { id: 'fuego', es: 'fuego', zh: '火', pos: 'n', g: 'm', level: 'A2', tags: ['food'], ex: ['Cocina a fuego lento.', '用小火煮。'], ety: '拉丁语 focum「火炉」。', emoji: '🔥' },
    { id: 'cucharada', es: 'cucharada', zh: '一勺（的量）', pos: 'n', g: 'f', level: 'A2', tags: ['food'], ex: ['Añade dos cucharadas de azúcar.', '加两勺糖。'] },
    { id: 'trozo', es: 'trozo', zh: '块；片', pos: 'n', g: 'm', level: 'A2', tags: ['food'], ex: ['¿Quieres un trozo de pastel?', '你要一块蛋糕吗？'] },
    { id: 'harina', es: 'harina', zh: '面粉', pos: 'n', g: 'f', level: 'A2', tags: ['food'], ex: ['Para la masa necesitas harina y agua.', '做面团需要面粉和水。'], ety: '拉丁语 farina：f 变成 h。' },
    { id: 'mantequilla', es: 'mantequilla', zh: '黄油', pos: 'n', g: 'f', level: 'A2', tags: ['food'], ex: ['Pan con mantequilla.', '抹黄油的面包。'] },
    { id: 'pimienta', es: 'pimienta', zh: '胡椒', pos: 'n', g: 'f', level: 'A2', tags: ['food'], ex: ['Sal y pimienta al gusto.', '盐和胡椒适量。'], ety: '拉丁语 pigmenta「颜料，香料」。' },
    { id: 'pastel', es: 'pastel', zh: '蛋糕', pos: 'n', g: 'm', pl: 'pasteles', level: 'A2', tags: ['food'], ex: ['Le hice un pastel de cumpleaños.', '我给他做了一个生日蛋糕。'], emoji: '🎂' },
    { id: 'gramo', es: 'gramo', zh: '克', pos: 'n', g: 'm', level: 'A2', tags: ['food', 'number'], ex: ['Doscientos gramos de harina.', '两百克面粉。'] },
    { id: 'litro', es: 'litro', zh: '升', pos: 'n', g: 'm', level: 'A2', tags: ['food', 'number'], ex: ['Medio litro de leche.', '半升牛奶。'] },
    { id: 'prestar', es: 'prestar', zh: '借给', pos: 'v', level: 'A2', tags: ['verb'], ex: ['¿Me prestas tu coche?', '你的车借我好吗？'], ety: '拉丁语 praestare「提供」。', note: '“借给别人”是 prestar；“向别人借”是 pedir prestado。' },
    { id: 'regalar', es: 'regalar', zh: '送（礼物）', pos: 'v', level: 'A2', tags: ['verb'], ex: ['¿Qué le regalas a tu madre?', '你送妈妈什么？'] },
    { id: 'explicar', es: 'explicar', zh: '解释；讲解', pos: 'v', level: 'A2', tags: ['verb', 'school'], ex: ['¿Me lo puedes explicar otra vez?', '你能再给我解释一遍吗？'], ety: '拉丁语 explicare「展开」。' },
    { id: 'devolver', es: 'devolver', zh: '归还；退（货）', pos: 'v', level: 'A2', tags: ['verb', 'shop'], ex: ['Te devuelvo el libro mañana.', '我明天把书还给你。'], note: 'o→ue；过去分词 devuelto。' },
    { id: 'invitado', es: 'invitado', f: 'invitada', zh: '客人', pos: 'n', g: 'm', level: 'A2', tags: ['people'], ex: ['Esta noche tenemos invitados.', '今晚我们家来客人。'] },
    { id: 'delicioso', es: 'delicioso', f: 'deliciosa', zh: '美味的', pos: 'adj', level: 'A2', tags: ['food', 'adj'], ex: ['¡Esta sopa está deliciosa!', '这汤太好喝了！'] },
    { id: 'salado', es: 'salado', f: 'salada', zh: '咸的', pos: 'adj', level: 'A2', tags: ['food', 'adj'], ex: ['La carne está un poco salada.', '肉有点咸。'] },
    { id: 'dulce', es: 'dulce', zh: '甜的；甜食', pos: 'adj', level: 'A2', tags: ['food', 'adj'], ex: ['No me gustan las cosas dulces.', '我不喜欢甜的东西。'], ety: '拉丁语 dulcis。' },
    { id: 'picante', es: 'picante', zh: '辣的', pos: 'adj', level: 'A2', tags: ['food', 'adj'], ex: ['La comida de Sichuan es muy picante.', '四川菜很辣。'], emoji: '🌶️' },
    { id: 'crudo', es: 'crudo', f: 'cruda', zh: '生的', pos: 'adj', level: 'A2', tags: ['food', 'adj'], ex: ['El pollo todavía está crudo.', '鸡肉还是生的。'], ety: '拉丁语 crudus。英语 crude 同源。' },
  ],
  sentences: [
    { id: 's1', es: '¿Dónde está la sal? No la veo.', zh: '盐在哪儿？我没看见。', g: ['a2-od'], distract: ['lo', 'le'] },
    { id: 's2', es: 'Este pastel lo ha hecho mi abuela.', zh: '这个蛋糕是我奶奶做的。', g: ['a2-od'] },
    { id: 's3', es: '¿Los tomates? Los lavo ahora.', zh: '西红柿吗？我现在洗。', g: ['a2-od'], distract: ['las'] },
    { id: 's4', es: 'Voy a comprarlo mañana.', zh: '我明天去买。', alt: ['Lo voy a comprar mañana'], g: ['a2-od'] },
    { id: 's5', es: 'No lo sé.', zh: '我不知道。', g: ['a2-od'] },
    { id: 's6', es: 'Te espero en la puerta.', zh: '我在门口等你。', g: ['a2-od'] },
    { id: 's7', es: '¿Me llamas esta noche?', zh: '你今晚给我打电话好吗？', g: ['a2-od'] },
    { id: 's8', es: 'Le he regalado un libro a mi novia.', zh: '我送了女朋友一本书。', g: ['a2-oi'], distract: ['la'] },
    { id: 's9', es: '¿Me pasas la sal, por favor?', zh: '请把盐递给我好吗？', g: ['a2-oi'] },
    { id: 's10', es: 'El profesor nos explicó la receta.', zh: '老师给我们讲解了菜谱。', g: ['a2-oi'] },
    { id: 's11', es: '¿Qué les vas a decir a tus padres?', zh: '你打算跟父母说什么？', g: ['a2-oi'], distract: ['le'] },
    { id: 's12', es: 'Mi hermano siempre me pide dinero.', zh: '我哥哥总是找我要钱。', g: ['a2-oi'] },
    { id: 's13', es: 'Te lo presto.', zh: '我借给你。', g: ['a2-se-lo'], distract: ['lo te'] },
    { id: 's14', es: 'Se lo di ayer.', zh: '我昨天给他了。', g: ['a2-se-lo'], distract: ['le'] },
    { id: 's15', es: 'Te las mando esta noche.', zh: '我今晚发给你。', g: ['a2-se-lo'] },
    { id: 's16', es: 'Voy a explicárselo a mis padres.', zh: '我要去跟父母解释这件事。', alt: ['Se lo voy a explicar a mis padres'], g: ['a2-se-lo'] },
    { id: 's17', es: 'Corta la cebolla en trozos pequeños.', zh: '把洋葱切成小块。', g: ['a2-od'] },
    { id: 's18', es: 'Añade un poco de sal y pimienta.', zh: '加一点盐和胡椒。', g: ['a2-od'] },
    { id: 's19', es: 'Calienta el aceite en una sartén.', zh: '在平底锅里把油烧热。', g: ['a2-od'] },
    { id: 's20', es: '¡Esta sopa está deliciosa!', zh: '这汤太好喝了！', g: ['a2-od'] },
  ],
  cloze: [
    { id: 'c1', text: '¿El pan? Yo ___ compro.', answers: ['lo'], options: ['lo', 'la', 'le'], zh: '面包吗？我来买。', g: ['a2-od'] },
    { id: 'c2', text: '¿La paella? Mi padre ___ hace los domingos.', answers: ['la'], options: ['la', 'lo', 'le'], zh: '海鲜饭吗？我爸爸每周日做。', g: ['a2-od'] },
    { id: 'c3', text: '¿Las llaves? No ___ encuentro.', answers: ['las'], options: ['las', 'los', 'les'], zh: '钥匙吗？我找不到。', g: ['a2-od'] },
    { id: 'c4', text: '¿Dónde están mis libros? No ___ veo.', answers: ['los'], options: ['los', 'las', 'les'], zh: '我的书在哪儿？我没看见。', g: ['a2-od'] },
    { id: 'c5', text: 'Voy a ___ ahora mismo. (llamar a Ana)', answers: ['llamarla'], options: ['llamarla', 'llamarle', 'la llamar'], zh: '我马上给她（安娜）打电话。', g: ['a2-od'] },
    { id: 'c6', text: '—¿Sabes que Juan se va a casar? —Sí, ya ___ sé.', answers: ['lo'], options: ['lo', 'le', 'la'], zh: '——你知道胡安要结婚了吗？——知道。', g: ['a2-od'], explain: '代替一整件事，用中性的 lo。' },
    { id: 'c7', text: '___ he escrito un correo a la profesora.', answers: ['Le'], options: ['Le', 'La', 'Lo'], zh: '我给老师写了一封邮件。', g: ['a2-oi'], explain: '“给老师”是间接宾语，用 le。' },
    { id: 'c8', text: '¿Qué ___ regalaste a tus hermanos?', answers: ['les'], options: ['les', 'le', 'los'], zh: '你送了你兄弟姐妹什么？', g: ['a2-oi'] },
    { id: 'c9', text: 'Mi abuela siempre ___ cuenta historias. (a mí)', answers: ['me'], options: ['me', 'mi', 'le'], zh: '我奶奶总给我讲故事。', g: ['a2-oi'] },
    { id: 'c10', text: '¿Me prestas el diccionario? — Sí, te ___ presto.', answers: ['lo'], options: ['lo', 'le', 'la'], zh: '词典借我好吗？——好，借给你。', g: ['a2-se-lo'] },
    { id: 'c11', text: '¿Le has dado el regalo a Ana? — Sí, ___ lo di ayer.', answers: ['se'], options: ['se', 'le', 'la'], zh: '你把礼物给安娜了吗？——给了，昨天给的。', g: ['a2-se-lo'], explain: 'le + lo → se lo。' },
    { id: 'c12', text: '¿Las fotos? Te ___ mando ahora.', answers: ['las'], options: ['las', 'les', 'los'], zh: '照片吗？我现在发给你。', g: ['a2-se-lo'] },
    { id: 'c13', text: 'Voy a ___ a mis padres. (explicar la situación)', answers: ['explicársela'], options: ['explicársela', 'explicarsela', 'explicarlesla'], zh: '我要向父母解释这个情况。', g: ['a2-se-lo'] },
    { id: 'c14', text: '___ la cebolla en trozos pequeños.', answers: ['Corta'], options: ['Corta', 'Cortas', 'Cortar'], zh: '把洋葱切成小块。', g: ['a2-od'] },
  ],
  dialogues: [
    {
      id: 'a2-u06-d1',
      title: '一起做土豆饼 · Hacemos una tortilla',
      lines: [
        { who: 'Marta', es: 'Hoy te enseño a hacer una tortilla de patatas. ¿Tienes los ingredientes?', zh: '今天我教你做西班牙土豆饼。配料都有吗？' },
        { who: 'Zhang Wei', es: 'Sí, tengo patatas, huevos, cebolla y aceite. ¿Las patatas las pelo yo?', zh: '有，土豆、鸡蛋、洋葱和油。土豆我来削皮吧？' },
        { who: 'Marta', es: 'Sí, pélalas y córtalas en trozos finos. Yo corto la cebolla.', zh: '好，你削皮然后切成薄片。我来切洋葱。' },
        { who: 'Zhang Wei', es: '¿Y el aceite? ¿Lo caliento ya?', zh: '油呢？现在热油吗？' },
        { who: 'Marta', es: 'Sí, caliéntalo en la sartén y fríe las patatas con la cebolla a fuego lento.', zh: '对，在平底锅里把油烧热，用小火把土豆和洋葱一起炸。' },
        { who: 'Zhang Wei', es: '¿Y los huevos?', zh: '鸡蛋呢？' },
        { who: 'Marta', es: 'Los batimos en un bol, añadimos sal y los mezclamos con las patatas.', zh: '在碗里打散，加盐，和土豆拌在一起。' },
        { who: 'Zhang Wei', es: '¡Qué bien huele! Luego le mando la receta a mi madre.', zh: '好香啊！等会儿我把菜谱发给我妈妈。' },
      ],
    },
  ],
  readings: [
    {
      id: 'a2-r11',
      level: 'A2',
      title: 'Receta: gazpacho andaluz',
      titleZh: '菜谱：安达卢西亚冷汤',
      topic: '饮食',
      paras: [
        [
          ['El gazpacho es una sopa fría típica de Andalucía. Es perfecta para los días de calor.', '西班牙冷汤是安达卢西亚的特色冷汤，最适合炎热的日子。'],
          ['Ingredientes para cuatro personas: un kilo de tomates, un pimiento verde, un pepino, un diente de ajo, aceite de oliva, vinagre, sal y un poco de pan.', '四人份配料：一公斤番茄、一个青椒、一根黄瓜、一瓣蒜、橄榄油、醋、盐和一点面包。'],
        ],
        [
          ['Primero, lava bien los tomates, el pimiento y el pepino, y córtalos en trozos.', '首先，把番茄、青椒和黄瓜洗干净，切成块。'],
          ['Después, ponlos en la batidora con el ajo y el pan.', '然后，把它们和蒜、面包一起放进搅拌机。'],
          ['Bátelo todo y añade el aceite, el vinagre y la sal.', '全部打碎，再加入橄榄油、醋和盐。'],
        ],
        [
          ['Por último, mételo en la nevera durante dos horas.', '最后，放进冰箱冷藏两个小时。'],
          ['Sírvelo muy frío. ¡Buen provecho!', '冰凉时享用。祝你胃口好！'],
        ],
      ],
      gloss: { gazpacho: '西班牙冷汤', perfecta: '完美的', kilo: '公斤', pimiento: '辣椒（甜椒）', pepino: '黄瓜', diente: '瓣（蒜）', vinagre: '醋', córtalos: '把它们切（命令式）', ponlos: '把它们放（命令式）', batidora: '搅拌机', Bátelo: '把它打碎', mételo: '把它放进', Sírvelo: '把它端上', provecho: '益处（buen provecho 用餐愉快）' },
      questions: [
        { type: 'mc', q: '西班牙冷汤来自哪里？', options: ['加利西亚', '安达卢西亚', '加泰罗尼亚'], answer: 1 },
        { type: 'tf', q: '冷汤里要放鸡蛋。', answer: false, explain: '配料里没有鸡蛋。' },
        { type: 'mc', q: '做好后要在冰箱里放多久？', options: ['半小时', '两个小时', '一整夜'], answer: 1 },
        { type: 'mc', q: '“córtalos” 里的 los 指什么？', options: ['番茄、青椒和黄瓜', '面包', '盐'], answer: 0 },
      ],
    },
    {
      id: 'a2-r12',
      level: 'A2',
      title: 'Los regalos de Navidad',
      titleZh: '圣诞礼物',
      topic: '节日',
      paras: [
        [
          ['En España, los niños reciben regalos dos veces: el 25 de diciembre y el 6 de enero.', '在西班牙，孩子们会收到两次礼物：12 月 25 日和 1 月 6 日。'],
          ['El 25 se los trae Papá Noel y el 6 se los traen los Reyes Magos.', '25 号是圣诞老人送来，6 号是东方三博士送来。'],
        ],
        [
          ['La noche del 5 de enero, los niños dejan sus zapatos en la ventana.', '1 月 5 日晚上，孩子们把鞋子放在窗边。'],
          ['Por la mañana, ¡los encuentran llenos de regalos!', '第二天早上，他们发现鞋子里装满了礼物！'],
          ['A los niños malos, los Reyes les dejan carbón, pero es un carbón de azúcar.', '对不乖的孩子，三博士会留下“煤块”，不过那是糖做的煤块。'],
        ],
        [
          ['Este año le he comprado una bicicleta a mi hijo. Ya se lo he dicho a los Reyes… ¡pero es un secreto!', '今年我给儿子买了一辆自行车。我已经跟三博士说好了……不过这是个秘密！'],
        ],
      ],
      gloss: { Navidad: '圣诞节', reciben: '收到', Papá: '爸爸', Noel: '诺埃尔（Papá Noel 圣诞老人）', Reyes: '国王们', Magos: '博士，术士（Reyes Magos 东方三博士）', dejan: '留下；放', llenos: '满的', malos: '不乖的', carbón: '煤', secreto: '秘密' },
      questions: [
        { type: 'mc', q: '西班牙的孩子几号收到东方三博士的礼物？', options: ['12 月 25 日', '1 月 1 日', '1 月 6 日'], answer: 2 },
        { type: 'tf', q: '孩子们把袜子挂在床边。', answer: false, explain: 'Dejan sus zapatos en la ventana. 是把鞋子放在窗边。' },
        { type: 'mc', q: '不乖的孩子会收到什么？', options: ['什么都没有', '糖做的煤块', '一本书'], answer: 1 },
      ],
    },
  ],
  writing: [{ id: 'w1', prompt: '写一份你家乡的家常菜做法（配料和步骤），尽量用宾格代词避免重复：Lavo los tomates y los corto…', words: [60, 120], hints: ['Ingredientes: …', 'Primero, lava… y córtalo/los…', 'Después… Por último…'] }],
}
