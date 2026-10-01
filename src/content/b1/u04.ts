import type { Unit } from '../types'

export const u04: Unit = {
  id: 'b1-u04',
  level: 'B1',
  order: 4,
  title: '找房子',
  titleEs: 'Busco piso',
  icon: '🔑',
  goals: ['用 que、donde、quien、lo que 连接句子，描述人、东西和地方', '区分“已知的”（陈述式）和“想找的”（虚拟式）先行词', '用 el que / la que 和介词组成关系从句', '看懂租房广告，和中介沟通需求'],
  grammar: [
    {
      id: 'b1-relativos',
      title: '关系代词：que, donde, quien, lo que',
      titleEs: 'Los pronombres relativos',
      level: 'B1',
      summary: 'que 最常用（人和物都行）；donde 指地点；quien 指人，多用在介词或逗号后；lo que = “……的事 / 东西”。',
      body: `关系从句像中文的“……的”，但 **放在名词后面**：
*la chica **que vive arriba***（住在楼上**的**女孩）

| 关系词 | 指代 | 例句 |
|---|---|---|
| **que** | 人或物（最常用） | *El piso **que** hemos visto es muy luminoso.* |
| **donde** | 地点 | *Este es el barrio **donde** nací.* |
| **quien / quienes** | 人（多在介词后或逗号后） | *La chica **con quien** comparto piso es italiana.* |
| **lo que** | 抽象的“……的事 / 东西” | ***Lo que** más me gusta es la terraza.* |

### que 是万能的
没有介词、没有逗号时，指人也用 **que**，不用 *quien*：
*El hombre **que** me alquila el piso es muy amable.*

### lo que 的两个常见用法
- 作主语：***Lo que** necesito es un piso tranquilo.*（我需要的是一套安静的房子。）
- 作宾语：*No entiendo **lo que** dices.*（我不明白你说的话。）`,
      examples: [
        ['El piso que hemos visto esta mañana es muy luminoso.', '我们今天上午看的那套房子采光很好。'],
        ['Este es el barrio donde nací.', '这是我出生的街区。'],
        ['La chica con quien comparto piso es italiana.', '和我合租的女生是意大利人。'],
        ['Lo que más me gusta del piso es la terraza.', '这套房子我最喜欢的是露台。'],
        ['No entiendo lo que dice el contrato.', '我看不懂合同上写的东西。'],
      ],
      origin: `**donde** 原本的意思是“从哪里”！它来自拉丁语 *de unde*（*unde* =「从哪里」），中世纪西语写作 *de onde → donde*。后来“从”的意思慢慢磨损，人们只好再加一个 *de*：***de dónde** eres?*——其实里面有两个“从”。

**quien** 来自拉丁语 *quem*（*qui*「谁」的宾格）。它原本没有复数，《堂吉诃德》时代还常用 *quien* 指很多人；复数 **quienes** 是 16 世纪左右才普及的。`,
      pitfalls: ['❌ *La chica quien vive arriba es simpática.* ✅ *La chica que vive arriba es simpática.*', '❌ *Lo cual más me gusta es…* ✅ *Lo que más me gusta es…*', '❌ *El que más me gusta es la terraza.*（说抽象的“东西”）✅ *Lo que más me gusta es la terraza.*'],
    },
    {
      id: 'b1-relativo-subj',
      title: '关系从句里的虚拟式：tiene 还是 tenga？',
      titleEs: 'Indicativo o subjuntivo en las relativas',
      level: 'B1',
      summary: '先行词是已知、存在的 → 陈述式：Vivo en un piso que tiene terraza. 先行词是想找的、不确定的、不存在的 → 虚拟式：Busco un piso que tenga terraza. No hay nadie que sepa…',
      body: `关系从句用什么语气，取决于说话人 **是否知道那个东西存在**。

| 先行词 | 语气 | 例句 |
|---|---|---|
| **已知、确实存在** | 陈述式 | *Vivo en un piso que **tiene** terraza.*（我住的房子有露台。） |
| **想要的、还没找到的** | 虚拟式 | *Busco un piso que **tenga** terraza.*（我在找带露台的房子。） |
| **不存在的**（nadie, nada, ningún…） | 虚拟式 | *No hay **nadie** que **sepa** chino aquí.*（这里没人会中文。） |

### 更多对比
- *Tengo un amigo que **habla** japonés.* ↔ *¿Conoces a alguien que **hable** japonés?*
- *Quiero el piso que **está** en el centro.*（那套具体的房子）↔ *Quiero un piso que **esté** en el centro.*（随便哪套，只要在市中心）

### 小细节：人前面的 a
找一个 **不确定的人** 时，常常不用 *a*：
*Busco **una** compañera que **sea** ordenada.* ↔ *Busco **a la** compañera que **vive** aquí.*（具体某人）

### 常见句型
*Necesito algo que…*、*¿Hay alguien que…?*、*No conozco a nadie que…*、*No hay nada que…*、*Cualquier persona que…*`,
      examples: [
        ['Busco un piso que tenga terraza y que esté cerca del metro.', '我在找一套带露台、离地铁近的房子。'],
        ['Vivo en un piso que tiene una terraza enorme.', '我住的房子有个很大的露台。'],
        ['¿Conoces a alguien que hable japonés?', '你认识会说日语的人吗？'],
        ['No hay nadie que sepa arreglar la lavadora.', '没人会修洗衣机。'],
        ['Queremos un barrio que no sea muy ruidoso.', '我们想要一个不太吵的街区。'],
      ],
      tables: [{ verbs: ['tener', 'saber', 'conocer'], tense: 'subj' }],
      origin: `**cualquier / cualquiera** 里藏着一个虚拟式！它由 *cual*「哪个」+ *quiera*（*querer* 的虚拟式）组成，字面意思是“你想要的哪一个都行”。

这正好说明了关系从句里虚拟式的逻辑：说的不是某个具体存在的东西，而是“符合条件的任何一个”。`,
      pitfalls: ['❌ *Busco un piso que tiene terraza.*（还没找到）✅ *Busco un piso que tenga terraza.*', '❌ *No hay nadie que sabe…* ✅ *No hay nadie que sepa…*', '❌ *¿Hay algún restaurante que es barato?* ✅ *¿Hay algún restaurante que sea barato?*'],
    },
    {
      id: 'b1-el-que',
      title: '介词 + el que / la que',
      titleEs: 'Preposición + artículo + que',
      level: 'B1',
      summary: '关系从句需要介词时，用“介词 + 冠词 + que”：la casa en la que vivo，el chico con el que salgo。el que 也可以单独表示“……的那个人 / 那个”。',
      body: `### 介词不能丢，也不能放到句尾
中文说“我住的房子”，英语可以把介词放在句尾（the house I live in），但西语必须把介词放在关系词 **前面**：

| ❌ | ✅ |
|---|---|
| *la casa que vivo* | *la casa **en la que** vivo* |
| *el chico que salgo* | *el chico **con el que** salgo* |
| *la chica que te hablé* | *la chica **de la que** te hablé* |

冠词要和先行词 **性数一致**：*el / la / los / las que*。

| 介词 | 例句 |
|---|---|
| en | *El pueblo **en el que** crecí es muy pequeño.* |
| con | *Los amigos **con los que** viajé eran muy divertidos.* |
| de | *Es la película **de la que** todo el mundo habla.* |
| para | *La empresa **para la que** trabajo es alemana.* |

### el que / la que 单独使用 = “……的那个”
- ***El que** llega tarde paga los cafés.*（谁迟到谁请咖啡。）
- *—¿Qué piso prefieres? —**El que** tiene balcón.*（有阳台的那套。）`,
      examples: [
        ['La casa en la que vivo tiene cien años.', '我住的房子有一百年了。'],
        ['Es la película de la que todo el mundo habla.', '这就是大家都在谈论的那部电影。'],
        ['La empresa para la que trabajo es alemana.', '我工作的公司是德国的。'],
        ['El que llega tarde paga los cafés.', '谁迟到谁请咖啡。'],
        ['—¿Qué piso prefieres? —El que tiene balcón.', '——你喜欢哪套？——有阳台的那套。'],
      ],
      origin: `冠词 **el / la** 来自拉丁语的指示词 *ille / illa*「那个」。所以 **el que** 最初就是“那个……的”：*el que llega tarde* =「那个迟到的（人）」——这就是它能单独当名词用的原因。`,
      pitfalls: ['❌ *La casa que vivo.* ✅ *La casa en la que vivo.* / *La casa donde vivo.*', '❌ *El chico con que salgo.* ✅ *El chico con el que salgo.*', '❌ *Las amigas con los que viajé.* ✅ *Las amigas con las que viajé.*（冠词要和先行词一致）'],
    },
  ],
  words: [
    { id: 'inmobiliaria', es: 'inmobiliaria', zh: '房产中介', pos: 'n', g: 'f', level: 'B1', tags: ['home'], ex: ['Hemos encontrado el piso a través de una inmobiliaria.', '我们是通过中介找到这套房子的。'], ety: '来自 inmueble「不动产」：in- + mueble「可移动的」。' },
    { id: 'agencia', es: 'agencia', zh: '代理机构；公司', pos: 'n', g: 'f', level: 'B1', tags: ['job'], ex: ['Trabaja en una agencia de viajes.', '她在一家旅行社工作。'] },
    { id: 'amueblado', es: 'amueblado', zh: '带家具的', pos: 'adj', f: 'amueblada', level: 'B1', tags: ['home'], ex: ['Se alquila piso amueblado.', '出租带家具的公寓。'], ety: '来自 mueble「家具」。' },
    { id: 'exterior', es: 'exterior', zh: '外面的；朝街的', pos: 'adj', level: 'B1', tags: ['home'], ex: ['Es un piso exterior, con mucha luz.', '这套房子朝外，光线很好。'], note: '在西班牙租房广告里，exterior 指窗户朝向街道，interior 指朝向内院。' },
    { id: 'interior', es: 'interior', zh: '里面的；朝内院的', pos: 'adj', level: 'B1', tags: ['home'], ex: ['Los pisos interiores son más tranquilos.', '朝内院的房子更安静。'] },
    { id: 'centrico', es: 'céntrico', zh: '位于市中心的', pos: 'adj', f: 'céntrica', level: 'B1', tags: ['home', 'city'], ex: ['Buscamos un hotel céntrico.', '我们在找一家位于市中心的酒店。'] },
    { id: 'reformado', es: 'reformado', zh: '翻修过的', pos: 'adj', f: 'reformada', level: 'B1', tags: ['home'], ex: ['La cocina está recién reformada.', '厨房刚翻修过。'], note: 'reforma = 装修、改革。' },
    { id: 'trastero', es: 'trastero', zh: '储物间', pos: 'n', g: 'm', level: 'B1', tags: ['home'], ex: ['Las bicicletas están en el trastero.', '自行车放在储物间里。'], ety: '来自 trastos「旧杂物」。' },
    { id: 'vecindario', es: 'vecindario', zh: '街坊；邻里', pos: 'n', g: 'm', level: 'B1', tags: ['city'], ex: ['Es un vecindario muy tranquilo.', '这是个很安静的街区。'] },
    { id: 'zona', es: 'zona', zh: '区域', pos: 'n', g: 'f', level: 'B1', tags: ['city'], ex: ['Es una zona con muchos restaurantes.', '这一带饭馆很多。'] },
    { id: 'ambiente', es: 'ambiente', zh: '氛围；环境', pos: 'n', g: 'm', level: 'B1', tags: ['city'], ex: ['El barrio tiene muy buen ambiente.', '这个街区氛围很好。'], note: 'medio ambiente = 自然环境。' },
    { id: 'comercio', es: 'comercio', zh: '商店；商业', pos: 'n', g: 'm', level: 'B1', tags: ['city', 'shop'], ex: ['En mi calle hay muchos comercios.', '我那条街上有很多商店。'] },
    { id: 'negociar', es: 'negociar', zh: '谈判；商量', pos: 'v', level: 'B1', tags: ['verb'], ex: ['Podemos negociar el precio.', '价格可以商量。'] },
    { id: 'firmar', es: 'firmar', zh: '签名；签署', pos: 'v', level: 'B1', tags: ['verb'], ex: ['Firme aquí, por favor.', '请在这里签字。'], ety: '拉丁语 firmare「使牢固」：签了名，协议就“牢固”了。' },
    { id: 'mostrar', es: 'mostrar', zh: '展示；出示', pos: 'v', level: 'B1', tags: ['verb'], ex: ['El agente nos mostró tres pisos.', '中介带我们看了三套房子。'], note: 'o→ue：muestro。' },
    { id: 'disponible', es: 'disponible', zh: '可用的；有空的', pos: 'adj', level: 'B1', tags: ['adj'], ex: ['El piso está disponible desde el uno de marzo.', '房子三月一日起可以入住。'] },
    { id: 'urgente', es: 'urgente', zh: '紧急的', pos: 'adj', level: 'B1', tags: ['adj'], ex: ['Necesito una habitación urgente.', '我急需一个房间。'] },
    { id: 'requisito', es: 'requisito', zh: '条件；要求', pos: 'n', g: 'm', level: 'B1', tags: ['job'], ex: ['¿Cuáles son los requisitos para alquilar el piso?', '租这套房子有什么条件？'] },
    { id: 'nomina', es: 'nómina', zh: '工资单', pos: 'n', g: 'f', level: 'B1', tags: ['job'], ex: ['Nos piden las tres últimas nóminas.', '他们要我们最近三个月的工资单。'] },
    { id: 'mensual', es: 'mensual', zh: '每月的', pos: 'adj', level: 'B1', tags: ['time'], ex: ['El alquiler mensual es de 800 euros.', '月租 800 欧元。'] },
    { id: 'propio', es: 'propio', zh: '自己的；本身的', pos: 'adj', f: 'propia', level: 'B1', tags: ['adj'], ex: ['Cada habitación tiene su propio baño.', '每个房间都有独立卫生间。'] },
    { id: 'privado', es: 'privado', zh: '私人的', pos: 'adj', f: 'privada', level: 'B1', tags: ['adj'], ex: ['Es una calle privada.', '这是条私人道路。'] },
    { id: 'comun', es: 'común', zh: '共同的；普通的', pos: 'adj', pl: 'comunes', level: 'B1', tags: ['adj'], ex: ['La cocina es una zona común.', '厨房是公共区域。'] },
    { id: 'espacio', es: 'espacio', zh: '空间；太空', pos: 'n', g: 'm', level: 'B1', tags: ['home'], ex: ['Necesitamos más espacio.', '我们需要更多空间。'] },
    { id: 'vistas', es: 'vistas', zh: '景色；视野', pos: 'n', g: 'f', level: 'B1', tags: ['home'], ex: ['El ático tiene unas vistas preciosas.', '顶层公寓的景色很美。'], note: '表示“窗外的景色”时常用复数。' },
    { id: 'piscina', es: 'piscina', zh: '游泳池', pos: 'n', g: 'f', level: 'B1', tags: ['home', 'hobby'], ex: ['La urbanización tiene piscina.', '小区有游泳池。'], emoji: '🏊', ety: '拉丁语 piscina「鱼塘」，来自 piscis「鱼」。', latam: '墨西哥说 alberca，阿根廷说 pileta。' },
    { id: 'portal', es: 'portal', zh: '（楼的）门厅；门户网站', pos: 'n', g: 'm', pl: 'portales', level: 'B1', tags: ['home'], ex: ['Te espero en el portal.', '我在楼门口等你。'] },
    { id: 'planta', es: 'planta', zh: '楼层；植物', pos: 'n', g: 'f', level: 'B1', tags: ['home'], ex: ['Vivo en la tercera planta.', '我住在四楼（第三层）。'], note: '西班牙的 planta baja 是一楼，primera planta 相当于中国的二楼。' },
    { id: 'atico', es: 'ático', zh: '顶层公寓；阁楼', pos: 'n', g: 'm', level: 'B1', tags: ['home'], ex: ['Viven en un ático con terraza.', '他们住在一套带露台的顶层公寓。'], ety: '来自 Ática（雅典所在地区）：古典建筑屋顶上方的装饰层叫 piso ático。' },
    { id: 'chale', es: 'chalé', zh: '独栋别墅', pos: 'n', g: 'm', level: 'B1', tags: ['home'], ex: ['Tienen un chalé en la sierra.', '他们在山里有一栋别墅。'], ety: '来自法语 chalet（瑞士山间木屋）。' },
    { id: 'adosado', es: 'adosado', zh: '联排别墅', pos: 'n', g: 'm', level: 'B1', tags: ['home'], ex: ['Vivimos en un adosado a las afueras.', '我们住在郊区的一栋联排别墅里。'] },
    { id: 'estudio', es: 'estudio', zh: '单间公寓；书房；学习', pos: 'n', g: 'm', level: 'B1', tags: ['home'], ex: ['Alquilo un estudio de treinta metros.', '我租了一个三十平米的单间。'] },
    { id: 'aparato', es: 'aparato', zh: '器具；电器', pos: 'n', g: 'm', level: 'B1', tags: ['home'], ex: ['¿Para qué sirve este aparato?', '这个器具是干什么用的？'] },
    { id: 'herramienta', es: 'herramienta', zh: '工具', pos: 'n', g: 'f', level: 'B1', tags: ['home'], ex: ['Necesito una herramienta que sirva para abrir esto.', '我需要一个能打开这个的工具。'], ety: '拉丁语 ferramenta「铁器」，来自 ferrum「铁」。', emoji: '🔧' },
    { id: 'dueno', es: 'dueño', zh: '主人；所有者', pos: 'n', g: 'm', f: 'dueña', level: 'B1', tags: ['home'], ex: ['¿Quién es el dueño de este perro?', '这只狗的主人是谁？'], ety: '拉丁语 dominus「主人」。英语 dominate 同源。' },
    { id: 'lugar', es: 'lugar', zh: '地方', pos: 'n', g: 'm', pl: 'lugares', level: 'B1', tags: ['city'], ex: ['Es el lugar donde nos conocimos.', '这是我们相识的地方。'], note: '《堂吉诃德》第一句：En un lugar de la Mancha…' },
    { id: 'sitio', es: 'sitio', zh: '地方；位置', pos: 'n', g: 'm', level: 'B1', tags: ['city'], ex: ['¿Hay sitio para mí?', '还有我的位置吗？'], note: '比 lugar 更口语。' },
    { id: 'objeto', es: 'objeto', zh: '物品；目的', pos: 'n', g: 'm', level: 'B1', tags: ['home'], ex: ['He perdido un objeto de valor.', '我丢了一件贵重物品。'] },
    { id: 'cualquier', es: 'cualquier', zh: '任何一个', pos: 'det', level: 'B1', tags: ['func'], ex: ['Llámame a cualquier hora.', '随时给我打电话。'], note: '名词前用 cualquier，单独用 cualquiera：Cualquiera puede hacerlo。' },
    { id: 'ninguno', es: 'ninguno', zh: '没有一个', pos: 'det', level: 'B1', tags: ['func'], ex: ['No me gusta ninguno.', '我一个也不喜欢。'], note: '阳性单数名词前缩写为 ningún：ningún piso。' },
    { id: 'alguno', es: 'alguno', zh: '某个；一些', pos: 'det', level: 'B1', tags: ['func'], ex: ['¿Tienes alguno más barato?', '你有便宜一点的吗？'], note: '阳性单数名词前缩写为 algún：algún día。' },
    { id: 'ideal', es: 'ideal', zh: '理想的', pos: 'adj', level: 'B1', tags: ['adj'], ex: ['Es el piso ideal para una familia.', '这是适合一家人住的理想房子。'] },
    { id: 'cercano', es: 'cercano', zh: '附近的；亲近的', pos: 'adj', f: 'cercana', level: 'B1', tags: ['adj'], ex: ['Hay un hospital cercano.', '附近有一家医院。'] },
    { id: 'situado', es: 'situado', zh: '位于……的', pos: 'adj', f: 'situada', level: 'B1', tags: ['home'], ex: ['El hotel está situado en el centro.', '酒店位于市中心。'] },
    { id: 'dar-a', es: 'dar a', zh: '朝向', pos: 'phr', level: 'B1', tags: ['home'], ex: ['Mi ventana da a un parque.', '我的窗户朝着一个公园。'] },
  ],
  sentences: [
    { id: 's1', es: 'El piso que hemos visto es muy luminoso.', zh: '我们看的那套房子采光很好。', g: ['b1-relativos'] },
    { id: 's2', es: 'Este es el barrio donde nací.', zh: '这是我出生的街区。', g: ['b1-relativos'], distract: ['que'] },
    { id: 's3', es: 'La chica con quien comparto piso es italiana.', zh: '和我合租的女生是意大利人。', g: ['b1-relativos'] },
    { id: 's4', es: 'Lo que más me gusta es la terraza.', zh: '我最喜欢的是露台。', g: ['b1-relativos'], distract: ['el'] },
    { id: 's5', es: 'No entiendo lo que dice el contrato.', zh: '我看不懂合同上写的。', g: ['b1-relativos'] },
    { id: 's6', es: 'Busco un piso que tenga terraza.', zh: '我在找一套带露台的房子。', g: ['b1-relativo-subj'], distract: ['tiene'] },
    { id: 's7', es: 'Vivo en un piso que tiene una terraza enorme.', zh: '我住的房子有个很大的露台。', g: ['b1-relativo-subj'], distract: ['tenga'] },
    { id: 's8', es: '¿Conoces a alguien que hable japonés?', zh: '你认识会说日语的人吗？', g: ['b1-relativo-subj'] },
    { id: 's9', es: 'No hay nadie que sepa arreglar la lavadora.', zh: '没人会修洗衣机。', g: ['b1-relativo-subj'], distract: ['sabe'] },
    { id: 's10', es: 'Queremos un barrio que no sea muy ruidoso.', zh: '我们想要一个不太吵的街区。', g: ['b1-relativo-subj'] },
    { id: 's11', es: 'La casa en la que vivo tiene cien años.', zh: '我住的房子有一百年了。', g: ['b1-el-que'] },
    { id: 's12', es: 'Es la película de la que todo el mundo habla.', zh: '这就是大家都在谈论的那部电影。', g: ['b1-el-que'] },
    { id: 's13', es: 'La empresa para la que trabajo es alemana.', zh: '我工作的公司是德国的。', g: ['b1-el-que'] },
    { id: 's14', es: 'El que llega tarde paga los cafés.', zh: '谁迟到谁请咖啡。', g: ['b1-el-que'] },
    { id: 's15', es: 'Mi ventana da a un parque.', zh: '我的窗户朝着一个公园。' },
    { id: 's16', es: 'Busco una compañera que sea ordenada.', zh: '我在找一个爱整洁的室友。', g: ['b1-relativo-subj'] },
    { id: 's17', es: 'El piso está disponible desde el uno de marzo.', zh: '房子三月一日起可以入住。' },
    { id: 's18', es: 'Necesito algo que sirva para abrir esta caja.', zh: '我需要一个能打开这个盒子的东西。', g: ['b1-relativo-subj'] },
    { id: 's19', es: 'Los amigos con los que viajé eran muy divertidos.', zh: '和我一起旅行的朋友们很有意思。', g: ['b1-el-que'] },
    { id: 's20', es: 'Te espero en el portal.', zh: '我在楼门口等你。' },
    { id: 's21', es: 'No conozco ningún restaurante que abra los lunes.', zh: '我不知道有哪家餐馆周一开门。', g: ['b1-relativo-subj'] },
    { id: 's22', es: 'Es el lugar donde nos conocimos.', zh: '这是我们相识的地方。', g: ['b1-relativos'] },
    { id: 's23', es: 'Haz lo que quieras.', zh: '你想做什么就做什么吧。', g: ['b1-relativo-subj'] },
    { id: 's24', es: 'Cada habitación tiene su propio baño.', zh: '每个房间都有独立卫生间。' },
    { id: 's25', es: 'El hombre que me alquila el piso es muy amable.', zh: '把房子租给我的那个人很和气。', g: ['b1-relativos'] },
  ],
  cloze: [
    { id: 'c1', text: 'Este es el pueblo ___ crecí.', answers: ['donde'], options: ['donde', 'que', 'quien'], zh: '这就是我长大的村子。', g: ['b1-relativos'] },
    { id: 'c2', text: 'La mujer ___ vive enfrente es médica.', answers: ['que'], options: ['que', 'quien', 'lo que'], zh: '住在对面的女士是医生。', g: ['b1-relativos'], explain: '没有介词也没有逗号时，指人也用 que。' },
    { id: 'c3', text: '___ más me gusta de Madrid es la gente.', answers: ['Lo que'], options: ['Lo que', 'El que', 'Que'], zh: '马德里我最喜欢的是人。', g: ['b1-relativos'] },
    { id: 'c4', text: 'El chico con ___ hablé ayer es mi vecino.', answers: ['quien'], options: ['quien', 'que', 'donde'], zh: '我昨天说话的那个男孩是我邻居。', g: ['b1-relativos'] },
    { id: 'c5', text: 'Busco un piso que ___ cerca de la universidad.', answers: ['esté'], hint: 'estar', zh: '我在找一套离大学近的房子。', g: ['b1-relativo-subj'] },
    { id: 'c6', text: 'Vivo en un piso que ___ dos baños.', answers: ['tiene'], options: ['tiene', 'tenga', 'tener'], zh: '我住的房子有两个卫生间。', g: ['b1-relativo-subj'], explain: '房子是已知、存在的，用陈述式。' },
    { id: 'c7', text: '¿Hay alguien aquí que ___ inglés?', answers: ['hable'], hint: 'hablar', zh: '这里有人会说英语吗？', g: ['b1-relativo-subj'] },
    { id: 'c8', text: 'No hay nada que me ___ más que la música.', answers: ['guste'], hint: 'gustar', zh: '没有什么比音乐更让我喜欢。', g: ['b1-relativo-subj'] },
    { id: 'c9', text: 'Tengo un amigo que ___ en Valencia.', answers: ['vive'], hint: 'vivir', zh: '我有个朋友住在瓦伦西亚。', g: ['b1-relativo-subj'] },
    { id: 'c10', text: 'Necesitamos una persona que ___ conducir.', answers: ['sepa'], hint: 'saber', zh: '我们需要一个会开车的人。', g: ['b1-relativo-subj'] },
    { id: 'c11', text: 'La casa en ___ que vivo es pequeña.', answers: ['la'], options: ['la', 'el', 'lo'], zh: '我住的房子很小。', g: ['b1-el-que'] },
    { id: 'c12', text: 'Los compañeros con ___ que trabajo son muy simpáticos.', answers: ['los'], options: ['los', 'las', 'lo'], zh: '和我一起工作的同事们都很好。', g: ['b1-el-que'] },
    { id: 'c13', text: 'Es el libro ___ el que te hablé.', answers: ['de'], options: ['de', 'en', 'a'], zh: '这就是我跟你说过的那本书。', g: ['b1-el-que'] },
    { id: 'c14', text: '—¿Qué chaqueta te gusta? —___ que está en el escaparate.', answers: ['La'], options: ['La', 'Lo', 'El'], zh: '——你喜欢哪件外套？——橱窗里的那件。', g: ['b1-el-que'] },
    { id: 'c15', text: 'No conozco a nadie que ___ en Japón.', answers: ['haya estado'], options: ['haya estado', 'ha estado', 'estar'], zh: '我不认识去过日本的人。', g: ['b1-relativo-subj'] },
    { id: 'c16', text: 'Haz lo que ___ (tú).', answers: ['quieras'], hint: 'querer', zh: '你想做什么就做什么。', g: ['b1-relativo-subj'] },
    { id: 'c17', text: 'Queremos un piso que no ___ muy caro.', answers: ['sea'], hint: 'ser', zh: '我们想要一套不太贵的房子。', g: ['b1-relativo-subj'] },
    { id: 'c18', text: 'Mi ventana ___ a la calle.', answers: ['da'], options: ['da', 'está', 'mira de'], zh: '我的窗户朝着街道。' },
  ],
  conj: [
    { verbs: ['tener', 'poder', 'saber', 'conocer', 'dar', 'ofrecer', 'incluir'], tenses: ['subj'], g: 'b1-relativo-subj' },
    { verbs: ['servir', 'abrir', 'estar', 'ser', 'quedar'], tenses: ['subj'], g: 'b1-relativo-subj' },
  ],
  dialogues: [
    {
      id: 'b1-u04-d1',
      title: '在中介 · En la inmobiliaria',
      lines: [
        { who: 'Agente', es: 'Buenos días. ¿Qué tipo de piso están buscando?', zh: '早上好。你们想找什么样的房子？' },
        { who: 'Elena', es: 'Buscamos un piso que tenga dos habitaciones y que esté cerca del metro.', zh: '我们想找一套两室、离地铁近的房子。' },
        { who: 'Wang Lei', es: 'Y que no sea muy ruidoso, por favor. Yo trabajo desde casa.', zh: '最好不要太吵。我在家办公。' },
        { who: 'Agente', es: 'Tengo uno que les puede interesar. Es un piso exterior, reformado, en una calle donde casi no pasan coches.', zh: '我有一套你们可能会感兴趣。朝街、翻修过，在一条几乎没有车经过的街上。' },
        { who: 'Elena', es: '¿Está amueblado? Lo que no queremos es comprar muebles.', zh: '带家具吗？我们不想买家具。' },
        { who: 'Agente', es: 'Sí, completamente. Lo único es que está en una cuarta planta sin ascensor.', zh: '是的，家具齐全。唯一的问题是在五楼，没有电梯。' },
        { who: 'Wang Lei', es: 'Uf… ¿No tiene alguno que esté en una planta más baja?', zh: '唉……您有没有楼层低一点的？' },
        { who: 'Agente', es: 'Hay otro en la primera planta, pero es interior. Si quieren, les enseño los dos esta tarde.', zh: '二楼还有一套，但是朝内院的。你们愿意的话，今天下午两套都带你们去看。' },
      ],
    },
  ],
  readings: [
    {
      id: 'b1-r07',
      level: 'B1',
      title: 'Anuncios: se alquila, se busca',
      titleZh: '租房广告',
      topic: '租房',
      paras: [
        [
          ['SE BUSCA compañera de piso. Somos dos chicas tranquilas que trabajamos en el centro. Buscamos a alguien que sea ordenado, que no fume y a quien le gusten los animales: tenemos un gato que se llama Tomate.', '招室友。我们是两个在市中心上班的安静女生。希望找一个爱整洁、不抽烟、喜欢动物的人：我们有一只叫“番茄”的猫。'],
        ],
        [
          ['SE ALQUILA estudio de 35 metros en el barrio de Lavapiés. Es un piso exterior, con balcón que da a una plaza. Está amueblado y tiene una cocina que está recién reformada. 750 euros al mes, gastos no incluidos.', '出租：拉瓦皮耶斯区 35 平米单间公寓。朝街，阳台面向一个广场。带家具，厨房刚翻修过。月租 750 欧元，不含水电。'],
        ],
        [
          ['BUSCO piso de tres habitaciones para una familia con dos niños. Necesitamos un piso que tenga ascensor, que esté cerca de un colegio y que no cueste más de 1.200 euros. No es imprescindible que tenga garaje.', '求租：一家四口（两个孩子）想租三室的房子。需要有电梯、离学校近、月租不超过 1200 欧元。车库不是必需的。'],
        ],
      ],
      gloss: { tranquilas: '安静的', ordenado: '爱整洁的', estudio: '单间公寓', balcón: '阳台', recién: '刚刚', incluidos: '包括', cueste: '花费（虚拟式）', imprescindible: '必不可少的' },
      questions: [
        { type: 'mc', q: '第一则广告的室友必须满足哪个条件？', options: ['会做饭', '喜欢动物', '有车'], answer: 1 },
        { type: 'mc', q: '那个单间公寓的阳台朝向哪里？', options: ['一个公园', '一个广场', '一条小街'], answer: 1 },
        { type: 'tf', q: '那家人一定要找带车库的房子。', answer: false, explain: 'No es imprescindible que tenga garaje.' },
      ],
    },
    {
      id: 'b1-r08',
      level: 'B1',
      title: 'El barrio donde crecí',
      titleZh: '我长大的街区',
      topic: '回忆',
      paras: [
        [
          ['El barrio donde crecí está en las afueras de Chengdu. Es un lugar que ha cambiado muchísimo en los últimos veinte años.', '我长大的街区在成都郊区。这个地方在过去二十年里变化非常大。'],
        ],
        [
          ['La casa en la que vivíamos era pequeña, pero tenía un patio donde mi abuela cultivaba verduras. Lo que más me gustaba era el olor de la comida que preparaba cada tarde.', '我们住的房子很小，但有一个院子，奶奶在那里种菜。我最喜欢的是她每天傍晚做饭的香味。'],
          ['Los vecinos con los que jugaba de niño eran como una gran familia. No había nadie que no conociera a todo el mundo.', '小时候一起玩的邻居就像一个大家庭。没有谁不认识所有人。'],
        ],
        [
          ['Hoy, donde estaba nuestra casa hay un edificio de treinta plantas. Es una pena que el patio ya no exista, pero el barrio tiene ahora un metro que llega al centro en veinte minutos.', '如今，我们家原来的位置矗立着一栋三十层的大楼。院子没了很可惜，但现在街区有地铁，二十分钟就能到市中心。'],
          ['Cuando vuelvo, siempre busco un rincón que me recuerde a mi infancia.', '每次回去，我总会寻找一个能让我想起童年的角落。'],
        ],
      ],
      gloss: { afueras: '郊区', patio: '院子', cultivaba: '种植', olor: '气味', conociera: '认识（虚拟式过去时）', exista: '存在（虚拟式）', rincón: '角落', recuerde: '让……想起（虚拟式）', infancia: '童年' },
      questions: [
        { type: 'mc', q: '奶奶在院子里做什么？', options: ['养鸡', '种菜', '晾衣服'], answer: 1 },
        { type: 'tf', q: '作者以前住的房子现在还在。', answer: false, explain: 'donde estaba nuestra casa hay un edificio de treinta plantas' },
        { type: 'mc', q: '现在的街区有什么好处？', options: ['有地铁通市中心', '房子更便宜', '更安静了'], answer: 0 },
      ],
    },
  ],
  writing: [{ id: 'w1', prompt: '写一则租房或找室友的广告：说明你想要什么样的房子 / 室友（至少三个条件，用虚拟式），再介绍一下你自己或你的房子（用陈述式）。', words: [60, 120], hints: ['Busco un piso / una persona que…', 'Es importante que… / No es imprescindible que…', 'Soy una persona que… / El piso tiene…', 'Lo que más me importa es…'] }],
}
