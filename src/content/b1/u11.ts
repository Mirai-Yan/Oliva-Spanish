import type { Unit } from '../types'

export const u11: Unit = {
  id: 'b1-u11',
  level: 'B1',
  order: 11,
  title: '保护环境',
  titleEs: 'El medio ambiente',
  icon: '♻️',
  goals: ['用 en primer lugar、además、por último 组织观点', '用 como、ya que、por eso、por lo tanto 说明原因和结果', '用 sin embargo、aunque、en cambio、sino 表达对比和让步', '写一篇结构清楚的议论短文'],
  grammar: [
    {
      id: 'b1-ordenar',
      title: '组织观点的连接词',
      titleEs: 'Conectores para ordenar las ideas',
      level: 'B1',
      summary: '开始：en primer lugar, para empezar；补充：además, también, por otro lado；结束：por último, en conclusión, en resumen。',
      body: `一篇好的议论文就像一条清楚的路：读者总知道自己走到了哪里。

| 作用 | 连接词 |
|---|---|
| **开始** | *En primer lugar… / Para empezar… / Ante todo…* |
| **继续** | *En segundo lugar… / Después… / Luego…* |
| **补充** | *Además… / También… / Asimismo…（正式）* |
| **两个方面** | *Por un lado… Por otro (lado)…* |
| **举例** | *Por ejemplo… / Como…* |
| **结束** | *Por último… / Finalmente…* |
| **总结** | *En conclusión… / En resumen… / En definitiva…* |

### 一段话的样子
***En primer lugar**, el plástico tarda cientos de años en desaparecer. **Además**, muchas bolsas acaban en el mar. **Por último**, reciclar es caro. **En conclusión**, hay que usar menos plástico.*

### 标点
句首的连接词后面一般加 **逗号**：*Además, …*　*En conclusión, …*`,
      examples: [
        ['En primer lugar, el plástico tarda siglos en desaparecer.', '首先，塑料要几百年才能降解。'],
        ['Además, muchas bolsas acaban en el mar.', '此外，很多塑料袋最后进了大海。'],
        ['Por un lado, el coche es cómodo; por otro, contamina mucho.', '一方面汽车很方便；另一方面，它污染很严重。'],
        ['Por último, quiero hablar de las soluciones.', '最后，我想谈谈解决办法。'],
        ['En conclusión, todos podemos hacer algo.', '总之，我们每个人都能做点什么。'],
      ],
      origin: `**además** 由 *a-* + *demás*（*de + más*「多出来的」）组成：“在多出来的东西之上”。

**conclusión** 来自拉丁语 *concludere*：*con* + *claudere*「关上」——结论就是把讨论“关上”。英语 *close*、*include*（关在里面）同源。`,
      pitfalls: ['❌ *En primero lugar…* ✅ *En primer lugar…*：在阳性单数名词前 primero 要变成 primer。', '❌ *Por otra lado…* ✅ *Por otro lado…*', '❌ *En conclusión que…* ✅ *En conclusión, …*'],
    },
    {
      id: 'b1-causa',
      title: '原因和结果',
      titleEs: 'Causa y consecuencia',
      level: 'B1',
      summary: '原因：porque（不放句首）, como（只放句首）, ya que / puesto que, debido a, gracias a；结果：por eso, así que, por lo tanto, de modo que。',
      body: `### 原因
| 连接词 | 位置 / 语气 | 例句 |
|---|---|---|
| *porque* | 一般 **不放在句首** | *No salimos **porque** llovía.* |
| *como* | **只放在句首** | ***Como** llovía, no salimos.* |
| *ya que / puesto que* | 句首、句中都行；更书面 | ***Ya que** estás aquí, ayúdame.* |
| *debido a* + 名词 | 正式 | *El vuelo se canceló **debido a** la niebla.* |
| *gracias a* + 名词 | 好的原因 | ***Gracias a** ti, he aprobado.* |
| *a causa de* + 名词 | 中性 / 坏的原因 | *Hay sequía **a causa de** la falta de lluvia.* |

### 结果
| 连接词 | 语气 | 例句 |
|---|---|---|
| *así que* | 口语 | *Llovía, **así que** no salimos.* |
| *por eso* | 口语、书面 | *Contamina mucho; **por eso** voy en bici.* |
| *por lo tanto* | 书面 | *Los recursos son limitados; **por lo tanto**, hay que ahorrar.* |
| *de modo que / de manera que* | 书面 | *No hay agua, **de modo que** hay que esperar.* |`,
      examples: [
        ['Como llovía mucho, nos quedamos en casa.', '因为雨下得很大，我们待在家里了。'],
        ['No uso el coche porque contamina mucho.', '我不开车，因为它污染很严重。'],
        ['El vuelo se canceló debido a la niebla.', '航班因为大雾取消了。'],
        ['Gracias a los voluntarios, la playa está limpia.', '多亏了志愿者，海滩很干净。'],
        ['El agua es un recurso limitado; por lo tanto, hay que ahorrarla.', '水是有限的资源；因此必须节约。'],
      ],
      origin: `**porque** 就是 *por + que*「为了那个」。而口语常用的 **pues**（那么、因为）来自拉丁语 *post*「在……之后」：时间上“在后面”的事，慢慢被理解成“因此发生的”事——中文的“然后”有时也有“所以”的意思。

**causa** 来自拉丁语 *causa*「理由；诉讼」，有趣的是法语 *chose*、西语 **cosa**（东西）也来自这个词。`,
      pitfalls: ['❌ *No salimos como llovía.* ✅ *No salimos porque llovía.* / *Como llovía, no salimos.*', '❌ *A causa que llovía…* ✅ *A causa de la lluvia…*', '❌ *Gracias a la contaminación, hay más enfermedades.* ✅ *A causa de / Debido a la contaminación…*：坏结果不用 gracias a。'],
    },
    {
      id: 'b1-contraste',
      title: '对比和让步：sin embargo, aunque, en cambio, sino',
      titleEs: 'Contraste y concesión',
      level: 'B1',
      summary: 'pero / sin embargo / no obstante：但是；aunque + 陈述式：虽然（事实）；en cambio / mientras que：而；no… sino…：不是……而是……',
      body: `### 转折
| 连接词 | 语气 | 例句 |
|---|---|---|
| *pero* | 口语、书面 | *Es caro, **pero** merece la pena.* |
| *sin embargo* | 书面，常放句首 | *Reciclamos más. **Sin embargo**, el problema sigue.* |
| *no obstante* | 很正式 | ***No obstante**, hay motivos para el optimismo.* |

### 让步：aunque + 陈述式
说一个 **已知的事实**，但它不影响结果：
***Aunque** el transporte público **es** barato, mucha gente prefiere el coche.*
（虽然公共交通便宜，很多人还是喜欢开车。）

> *aunque* + 虚拟式（“即使、就算”）会在 B2 学习。

### 对比两个事物：en cambio / mientras que
*En el norte llueve mucho; **en cambio**, en el sur casi nunca llueve.*
*Mi hermano recicla todo, **mientras que** yo soy un desastre.*

### pero 还是 sino？
前面是 **否定**，后面给出 **正确的替代** 时，用 *sino*：
*No es un problema local, **sino** global.*（这不是局部问题，而是全球问题。）
*No solo… sino también…*（不仅……而且……）：*No solo contamina, **sino que también** gasta mucha energía.*`,
      examples: [
        ['Reciclamos más que antes. Sin embargo, el problema sigue.', '我们比以前回收得多了。然而问题依然存在。'],
        ['Aunque el metro es barato, mucha gente prefiere el coche.', '虽然地铁很便宜，很多人还是喜欢开车。'],
        ['En el norte llueve mucho; en cambio, en el sur hay sequía.', '北方雨水很多；而南方却在闹旱灾。'],
        ['No es un problema local, sino global.', '这不是局部问题，而是全球问题。'],
        ['No solo contamina, sino que también gasta mucha agua.', '它不仅造成污染，而且还很费水。'],
      ],
      origin: `**sin embargo** 字面意思是“没有障碍”。*embargo* 来自动词 *embargar*「阻拦、扣押」（今天“禁运”还叫 *embargo*，英语也借去了）。所以 *sin embargo* = “这一点并不妨碍……”，也就是“然而”。

**aunque** = *aun*「即使、还」+ *que*。`,
      pitfalls: ['❌ *No es caro, pero barato.* ✅ *No es caro, sino barato.*', '❌ *Sin embargo de eso…* ✅ *Sin embargo, …*', '❌ *Aunque es caro, pero lo compro.* ✅ *Aunque es caro, lo compro.*：中文说“虽然……但是……”，西语只用一个。'],
    },
  ],
  words: [
    { id: 'medio-ambiente', es: 'medio ambiente', zh: '环境（自然环境）', pos: 'n', g: 'm', level: 'B1', tags: ['weather'], ex: ['Hay que proteger el medio ambiente.', '要保护环境。'] },
    { id: 'cambio-climatico', es: 'cambio climático', zh: '气候变化', pos: 'n', g: 'm', level: 'B1', tags: ['weather'], ex: ['El cambio climático es un problema global.', '气候变化是全球性问题。'] },
    { id: 'calentamiento-global', es: 'calentamiento global', zh: '全球变暖', pos: 'n', g: 'm', level: 'B1', tags: ['weather'], ex: ['El calentamiento global derrite los glaciares.', '全球变暖让冰川融化。'] },
    { id: 'residuo', es: 'residuo', zh: '废弃物；垃圾', pos: 'n', g: 'm', level: 'B1', tags: ['weather'], ex: ['Hay que reducir los residuos.', '要减少垃圾。'] },
    { id: 'reciclaje', es: 'reciclaje', zh: '回收利用', pos: 'n', g: 'm', level: 'B1', tags: ['weather'], ex: ['El reciclaje empieza en casa.', '垃圾回收从家里做起。'] },
    { id: 'contenedor', es: 'contenedor', zh: '垃圾箱；集装箱', pos: 'n', g: 'm', pl: 'contenedores', level: 'B1', tags: ['city'], ex: ['El vidrio va al contenedor verde.', '玻璃扔进绿色垃圾箱。'], note: '西班牙：黄色 = 塑料和金属，蓝色 = 纸，绿色 = 玻璃。' },
    { id: 'energia', es: 'energía', zh: '能源；精力', pos: 'n', g: 'f', level: 'B1', tags: ['weather'], ex: ['Hoy no tengo energía para nada.', '今天我干什么都没劲。'], ety: '希腊语 energeia「活动」：en「在里面」+ ergon「工作」。' },
    { id: 'renovable', es: 'renovable', zh: '可再生的', pos: 'adj', level: 'B1', tags: ['weather'], ex: ['España produce mucha energía renovable.', '西班牙生产大量可再生能源。'] },
    { id: 'solar', es: 'solar', zh: '太阳的', pos: 'adj', level: 'B1', tags: ['weather'], ex: ['Hemos puesto placas solares en el tejado.', '我们在屋顶装了太阳能板。'] },
    { id: 'consumo', es: 'consumo', zh: '消费；消耗', pos: 'n', g: 'm', level: 'B1', tags: ['shop'], ex: ['El consumo de agua ha bajado.', '用水量下降了。'] },
    { id: 'consumir', es: 'consumir', zh: '消费；消耗', pos: 'v', level: 'B1', tags: ['verb'], ex: ['Este coche consume poca gasolina.', '这辆车很省油。'] },
    { id: 'desperdiciar', es: 'desperdiciar', zh: '浪费', pos: 'v', level: 'B1', tags: ['verb'], ex: ['No desperdicies la comida.', '别浪费食物。'] },
    { id: 'recurso', es: 'recurso', zh: '资源；手段', pos: 'n', g: 'm', level: 'B1', tags: ['weather'], ex: ['El agua es un recurso limitado.', '水是有限的资源。'] },
    { id: 'sequia', es: 'sequía', zh: '干旱', pos: 'n', g: 'f', level: 'B1', tags: ['weather'], ex: ['Este año hay una sequía terrible.', '今年旱得厉害。'], ety: '来自 seco「干的」。' },
    { id: 'inundacion', es: 'inundación', zh: '洪水', pos: 'n', g: 'f', pl: 'inundaciones', level: 'B1', tags: ['weather'], ex: ['Las lluvias causaron inundaciones.', '大雨引发了洪水。'], ety: '拉丁语 inundare：in + unda「波浪」。' },
    { id: 'incendio', es: 'incendio', zh: '火灾', pos: 'n', g: 'm', level: 'B1', tags: ['weather'], ex: ['Un incendio ha quemado mil hectáreas.', '一场大火烧毁了一千公顷土地。'], note: '小的火是 fuego，大火灾是 incendio。' },
    { id: 'especie', es: 'especie', zh: '物种；种类', pos: 'n', g: 'f', level: 'B1', tags: ['animal'], ex: ['El lince ibérico es una especie protegida.', '伊比利亚猞猁是受保护物种。'], note: '单复数同形：una especie, dos especies。' },
    { id: 'extincion', es: 'extinción', zh: '灭绝', pos: 'n', g: 'f', level: 'B1', tags: ['animal'], ex: ['El oso panda ya no está en peligro de extinción.', '大熊猫已经不再是濒危物种了。'], note: 'en peligro de extinción = 濒临灭绝。' },
    { id: 'ecologico', es: 'ecológico', zh: '生态的；环保的；有机的', pos: 'adj', f: 'ecológica', level: 'B1', tags: ['weather'], ex: ['Compro fruta ecológica.', '我买有机水果。'] },
    { id: 'sostenible', es: 'sostenible', zh: '可持续的', pos: 'adj', level: 'B1', tags: ['weather'], ex: ['Necesitamos un turismo más sostenible.', '我们需要更可持续的旅游方式。'] },
    { id: 'contaminar', es: 'contaminar', zh: '污染', pos: 'v', level: 'B1', tags: ['verb', 'weather'], ex: ['Los coches contaminan mucho.', '汽车污染很严重。'] },
    { id: 'emision', es: 'emisión', zh: '排放；播出', pos: 'n', g: 'f', pl: 'emisiones', level: 'B1', tags: ['weather'], ex: ['Hay que reducir las emisiones de CO2.', '必须减少二氧化碳排放。'] },
    { id: 'envase', es: 'envase', zh: '包装；容器', pos: 'n', g: 'm', level: 'B1', tags: ['shop'], ex: ['Los envases de plástico van al contenedor amarillo.', '塑料包装扔进黄色垃圾箱。'] },
    { id: 'reutilizar', es: 'reutilizar', zh: '重复使用', pos: 'v', level: 'B1', tags: ['verb'], ex: ['Reutilizo las bolsas del supermercado.', '我重复使用超市的购物袋。'], note: 'z→c：reutilice。' },
    { id: 'medida', es: 'medida', zh: '措施；尺寸', pos: 'n', g: 'f', level: 'B1', tags: ['func'], ex: ['El gobierno ha tomado nuevas medidas.', '政府采取了新措施。'] },
    { id: 'gobierno', es: 'gobierno', zh: '政府', pos: 'n', g: 'm', level: 'B1', tags: ['city'], ex: ['El gobierno ha aprobado una nueva ley.', '政府通过了一项新法律。'], ety: '拉丁语 gubernare「掌舵」：治国就像驾船。英语 govern 同源。' },
    { id: 'ley', es: 'ley', zh: '法律', pos: 'n', g: 'f', pl: 'leyes', level: 'B1', tags: ['city'], ex: ['La ley prohíbe las bolsas de plástico gratis.', '法律禁止免费提供塑料袋。'], ety: '拉丁语 lex, legem。' },
    { id: 'ciudadano', es: 'ciudadano', zh: '公民；市民', pos: 'n', g: 'm', f: 'ciudadana', level: 'B1', tags: ['people'], ex: ['Los ciudadanos también tienen responsabilidad.', '公民也有责任。'] },
    { id: 'responsabilidad', es: 'responsabilidad', zh: '责任', pos: 'n', g: 'f', pl: 'responsabilidades', level: 'B1', tags: ['people'], ex: ['Es responsabilidad de todos.', '这是大家的责任。'] },
    { id: 'concienciar', es: 'concienciar', zh: '使认识到；提高意识', pos: 'v', level: 'B1', tags: ['verb'], ex: ['Hay que concienciar a la gente.', '要提高人们的意识。'], latam: '拉美多说 concientizar。' },
    { id: 'ya-que', es: 'ya que', zh: '既然；因为', pos: 'phr', level: 'B1', tags: ['func'], ex: ['Ya que estás aquí, ayúdame.', '既然你在这儿，帮帮我吧。'] },
    { id: 'puesto-que', es: 'puesto que', zh: '由于；既然', pos: 'phr', level: 'B1', tags: ['func'], ex: ['Puesto que no hay preguntas, terminamos.', '既然没有问题，我们就结束吧。'] },
    { id: 'sin-embargo', es: 'sin embargo', zh: '然而', pos: 'phr', level: 'B1', tags: ['func'], ex: ['Sin embargo, no todos están de acuerdo.', '然而，并不是所有人都同意。'] },
    { id: 'no-obstante', es: 'no obstante', zh: '然而（正式）', pos: 'phr', level: 'B1', tags: ['func'], ex: ['No obstante, hay algunas excepciones.', '不过，也有一些例外。'] },
    { id: 'por-lo-tanto', es: 'por lo tanto', zh: '因此', pos: 'phr', level: 'B1', tags: ['func'], ex: ['Por lo tanto, debemos actuar ya.', '因此，我们必须马上行动。'] },
    { id: 'de-modo-que', es: 'de modo que', zh: '所以；以便', pos: 'phr', level: 'B1', tags: ['func'], ex: ['No hay agua, de modo que hay que esperar.', '没水了，所以只能等着。'] },
    { id: 'debido-a', es: 'debido a', zh: '由于', pos: 'phr', level: 'B1', tags: ['func'], ex: ['El tren llega tarde debido a la nieve.', '由于下雪，火车晚点了。'] },
    { id: 'gracias-a', es: 'gracias a', zh: '多亏；由于', pos: 'phr', level: 'B1', tags: ['func'], ex: ['Gracias a tu ayuda, lo he conseguido.', '多亏你的帮助，我成功了。'] },
    { id: 'a-causa-de', es: 'a causa de', zh: '因为（原因）', pos: 'phr', level: 'B1', tags: ['func'], ex: ['Cerraron la playa a causa de la contaminación.', '海滩因为污染关闭了。'] },
    { id: 'mientras-que', es: 'mientras que', zh: '而（对比）', pos: 'phr', level: 'B1', tags: ['func'], ex: ['Yo reciclo todo, mientras que mi hermano no recicla nada.', '我什么都回收，而我哥什么都不回收。'] },
    { id: 'en-primer-lugar', es: 'en primer lugar', zh: '首先', pos: 'phr', level: 'B1', tags: ['func'], ex: ['En primer lugar, quiero dar las gracias a todos.', '首先，我要感谢大家。'] },
    { id: 'por-un-lado', es: 'por un lado', zh: '一方面', pos: 'phr', level: 'B1', tags: ['func'], ex: ['Por un lado, es barato; por otro, es lento.', '一方面很便宜；另一方面很慢。'] },
    { id: 'por-ultimo', es: 'por último', zh: '最后', pos: 'phr', level: 'B1', tags: ['func'], ex: ['Por último, hablaré de las soluciones.', '最后，我会谈谈解决办法。'] },
    { id: 'en-conclusion', es: 'en conclusión', zh: '总之', pos: 'phr', level: 'B1', tags: ['func'], ex: ['En conclusión, todos podemos ayudar.', '总之，我们都能出一份力。'] },
    { id: 'en-resumen', es: 'en resumen', zh: '概括地说', pos: 'phr', level: 'B1', tags: ['func'], ex: ['En resumen, fue un éxito.', '概括地说，这次很成功。'] },
  ],
  sentences: [
    { id: 's1', es: 'En primer lugar, el plástico tarda siglos en desaparecer.', zh: '首先，塑料要几百年才能降解。', g: ['b1-ordenar'], distract: ['primero'] },
    { id: 's2', es: 'Además, muchas bolsas acaban en el mar.', zh: '此外，很多塑料袋最后进了大海。', g: ['b1-ordenar'] },
    { id: 's3', es: 'Por un lado, el coche es cómodo; por otro, contamina mucho.', zh: '一方面汽车很方便；另一方面，它污染很严重。', g: ['b1-ordenar'] },
    { id: 's4', es: 'En conclusión, todos podemos hacer algo.', zh: '总之，我们每个人都能做点什么。', g: ['b1-ordenar'] },
    { id: 's5', es: 'Como llovía mucho, nos quedamos en casa.', zh: '因为雨下得很大，我们待在家里了。', g: ['b1-causa'], distract: ['Porque'] },
    { id: 's6', es: 'No uso el coche porque contamina mucho.', zh: '我不开车，因为它污染很严重。', g: ['b1-causa'], distract: ['como'] },
    { id: 's7', es: 'El vuelo se canceló debido a la niebla.', zh: '航班因为大雾取消了。', g: ['b1-causa'] },
    { id: 's8', es: 'Gracias a los voluntarios, la playa está limpia.', zh: '多亏了志愿者，海滩很干净。', g: ['b1-causa'] },
    { id: 's9', es: 'El agua es un recurso limitado; por lo tanto, hay que ahorrarla.', zh: '水是有限的资源；因此必须节约。', g: ['b1-causa'] },
    { id: 's10', es: 'Reciclamos más que antes. Sin embargo, el problema sigue.', zh: '我们比以前回收得多了。然而问题依然存在。', g: ['b1-contraste'] },
    { id: 's11', es: 'Aunque el metro es barato, mucha gente prefiere el coche.', zh: '虽然地铁很便宜，很多人还是喜欢开车。', g: ['b1-contraste'], distract: ['pero'] },
    { id: 's12', es: 'En el norte llueve mucho; en cambio, en el sur hay sequía.', zh: '北方雨水很多；而南方却在闹旱灾。', g: ['b1-contraste'] },
    { id: 's13', es: 'No es un problema local, sino global.', zh: '这不是局部问题，而是全球问题。', g: ['b1-contraste'], distract: ['pero'] },
    { id: 's14', es: 'No solo contamina, sino que también gasta mucha agua.', zh: '它不仅造成污染，而且还很费水。', g: ['b1-contraste'] },
    { id: 's15', es: 'Hay que proteger el medio ambiente.', zh: '要保护环境。' },
    { id: 's16', es: 'El vidrio va al contenedor verde.', zh: '玻璃扔进绿色垃圾箱。' },
    { id: 's17', es: 'No desperdicies la comida.', zh: '别浪费食物。' },
    { id: 's18', es: 'Este año hay una sequía terrible.', zh: '今年旱得厉害。' },
    { id: 's19', es: 'Ya que estás aquí, ayúdame a reciclar.', zh: '既然你在这儿，帮我分一下垃圾吧。', g: ['b1-causa'] },
    { id: 's20', es: 'Llovía, así que no salimos.', zh: '下雨了，所以我们没出门。', g: ['b1-causa'] },
    { id: 's21', es: 'Yo voy en bici, mientras que mi hermano usa el coche para todo.', zh: '我骑自行车，而我哥干什么都开车。', g: ['b1-contraste'] },
    { id: 's22', es: 'Es responsabilidad de todos.', zh: '这是大家的责任。' },
    { id: 's23', es: 'Por último, quiero hablar de las soluciones.', zh: '最后，我想谈谈解决办法。', g: ['b1-ordenar'] },
    { id: 's24', es: 'El lince ibérico está en peligro de extinción.', zh: '伊比利亚猞猁濒临灭绝。' },
    { id: 's25', es: 'Es caro, pero merece la pena.', zh: '很贵，但值得。', g: ['b1-contraste'] },
  ],
  cloze: [
    { id: 'c1', text: 'En ___ lugar, quiero presentarme.', answers: ['primer'], options: ['primer', 'primero', 'primera'], zh: '首先，我想自我介绍一下。', g: ['b1-ordenar'] },
    { id: 'c2', text: 'El plástico contamina. ___, es muy difícil de reciclar.', answers: ['Además'], options: ['Además', 'Sin embargo', 'Como'], zh: '塑料会造成污染。此外，它很难回收。', g: ['b1-ordenar'] },
    { id: 'c3', text: 'Por un lado, vivir en el campo es tranquilo; por ___, hay pocos servicios.', answers: ['otro'], options: ['otro', 'otra', 'el otro de'], zh: '一方面住在乡下很安静；另一方面，服务设施很少。', g: ['b1-ordenar'] },
    { id: 'c4', text: '___ hacía frío, nos quedamos en casa.', answers: ['Como'], options: ['Como', 'Porque', 'Por eso'], zh: '因为天冷，我们待在家里了。', g: ['b1-causa'], explain: '放在句首说原因用 como。' },
    { id: 'c5', text: 'No fui a clase ___ estaba enfermo.', answers: ['porque'], options: ['porque', 'como', 'por eso'], zh: '我没去上课，因为我病了。', g: ['b1-causa'] },
    { id: 'c6', text: 'He aprobado ___ a tu ayuda.', answers: ['gracias'], options: ['gracias', 'debido', 'causa'], zh: '多亏你的帮助，我通过了。', g: ['b1-causa'] },
    { id: 'c7', text: 'El partido se suspendió a causa ___ la lluvia.', answers: ['de'], options: ['de', 'que', 'por'], zh: '比赛因雨暂停了。', g: ['b1-causa'] },
    { id: 'c8', text: 'Estaba cansado, ___ que me fui a dormir.', answers: ['así'], options: ['así', 'como', 'ya'], zh: '我累了，所以就去睡了。', g: ['b1-causa'] },
    { id: 'c9', text: 'Los recursos son limitados; por lo ___, hay que ahorrar.', answers: ['tanto'], options: ['tanto', 'menos', 'mismo'], zh: '资源是有限的；因此要节约。', g: ['b1-causa'] },
    { id: 'c10', text: 'Hace sol. Sin ___, hace mucho frío.', answers: ['embargo'], options: ['embargo', 'duda', 'obstante'], zh: '出太阳了。然而，天很冷。', g: ['b1-contraste'] },
    { id: 'c11', text: '___ estoy cansado, voy a terminar el trabajo.', answers: ['Aunque'], options: ['Aunque', 'Pero', 'Como'], zh: '虽然我很累，我还是要把工作做完。', g: ['b1-contraste'] },
    { id: 'c12', text: 'No es mi hermano, ___ mi primo.', answers: ['sino'], options: ['sino', 'pero', 'si no'], zh: '他不是我哥哥，而是我表哥。', g: ['b1-contraste'] },
    { id: 'c13', text: 'Mi madre es muy ordenada; en ___, mi padre es un desastre.', answers: ['cambio'], options: ['cambio', 'vez', 'lugar'], zh: '我妈妈很爱整洁；而我爸爸是一团糟。', g: ['b1-contraste'] },
    { id: 'c14', text: 'No solo es barato, ___ también es ecológico.', answers: ['sino'], options: ['sino', 'pero', 'además'], zh: '它不仅便宜，而且还环保。', g: ['b1-contraste'] },
    { id: 'c15', text: 'Aunque es caro, ___ compro.', answers: ['lo'], options: ['lo', 'pero lo', 'sin embargo lo'], zh: '虽然很贵，我还是要买。', g: ['b1-contraste'], explain: '有了 aunque，后面不能再用 pero。' },
    { id: 'c16', text: 'En ___, el problema tiene solución.', answers: ['conclusión'], options: ['conclusión', 'final', 'último'], zh: '总之，这个问题是能解决的。', g: ['b1-ordenar'] },
    { id: 'c17', text: '___ que no hay más preguntas, terminamos la reunión.', answers: ['Puesto'], options: ['Puesto', 'Debido', 'Gracias'], zh: '既然没有别的问题了，会议就到这里。', g: ['b1-causa'] },
    { id: 'c18', text: 'El vuelo llegó tarde ___ a la niebla.', answers: ['debido'], options: ['debido', 'gracias', 'como'], zh: '航班因为大雾晚点了。', g: ['b1-causa'] },
  ],
  conj: [
    { verbs: ['reducir', 'contribuir', 'destruir', 'proteger', 'producir', 'consumir'], tenses: ['pres', 'subj'], g: 'b1-causa' },
    { verbs: ['reducir', 'producir', 'traducir', 'conducir'], tenses: ['pret'], g: 'b1-causa' },
  ],
  dialogues: [
    {
      id: 'b1-u11-d1',
      title: '准备小组展示 · Preparando la presentación',
      lines: [
        { who: 'Lucas', es: 'Bueno, ¿cómo organizamos la presentación sobre el plástico?', zh: '好啦，我们关于塑料的展示怎么安排？' },
        { who: 'Mei', es: 'Yo propongo tres partes. En primer lugar, los datos: cuánto plástico usamos y dónde acaba.', zh: '我建议分三部分。首先是数据：我们用了多少塑料、它们最后去了哪里。' },
        { who: 'Lucas', es: 'Vale. Y después, las consecuencias. Como el plástico tarda tanto en desaparecer, los mares están llenos de basura.', zh: '好。然后是后果。因为塑料要很久才能降解，海洋里到处都是垃圾。' },
        { who: 'Mei', es: 'Exacto. Además, los peces comen microplásticos y, por lo tanto, nosotros también.', zh: '没错。而且鱼会吃下微塑料，所以我们也会吃到。' },
        { who: 'Lucas', es: '¡Qué asco! ¿Y por último?', zh: '真恶心！那最后呢？' },
        { who: 'Mei', es: 'Por último, las soluciones. Aunque el problema es enorme, cada persona puede hacer algo.', zh: '最后是解决办法。虽然问题很严重，但每个人都能做点什么。' },
        { who: 'Lucas', es: 'Sí, pero no solo las personas, sino también las empresas y el gobierno.', zh: '对，不过不只是个人，企业和政府也要出力。' },
        { who: 'Mei', es: 'Muy buena idea. En conclusión, ¡ya tenemos el esquema! Ahora, a buscar información.', zh: '好主意。总之，提纲有了！现在去找资料吧。' },
      ],
    },
  ],
  readings: [
    {
      id: 'b1-r21',
      level: 'B1',
      title: 'El plástico: un problema de todos',
      titleZh: '塑料：大家的问题',
      topic: '环境',
      paras: [
        [
          ['Cada año se producen en el mundo más de 400 millones de toneladas de plástico. Sin embargo, menos del diez por ciento se recicla.', '全世界每年生产超过四亿吨塑料。然而，被回收的不到百分之十。'],
        ],
        [
          ['En primer lugar, el plástico es un material muy duradero: una botella puede tardar cientos de años en desaparecer. Por eso, gran parte acaba en los ríos y, finalmente, en el mar.', '首先，塑料是一种非常耐久的材料：一个瓶子可能要几百年才能降解。所以，大部分塑料最后流进河里，最终进入大海。'],
          ['Además, con el tiempo se rompe en trozos muy pequeños, los microplásticos, que comen los peces. Como nosotros comemos pescado, esos plásticos también llegan a nuestro cuerpo.', '而且，随着时间推移，它会碎成很小的颗粒，也就是微塑料，被鱼吃掉。因为我们吃鱼，这些塑料也进入了我们的身体。'],
        ],
        [
          ['¿Qué podemos hacer? Por un lado, los gobiernos deben aprobar leyes más duras. Por otro, los ciudadanos podemos cambiar nuestros hábitos: llevar nuestra propia bolsa, beber agua del grifo y reutilizar los envases.', '我们能做什么？一方面，政府应该出台更严格的法律。另一方面，我们普通公民可以改变习惯：自带购物袋、喝自来水、重复使用包装。'],
          ['En conclusión, el problema no es solo de los científicos o de los políticos, sino de todos.', '总之，这不只是科学家或政治家的问题，而是我们所有人的问题。'],
        ],
      ],
      gloss: { toneladas: '吨', duradero: '耐久的', trozos: '碎片', microplásticos: '微塑料', aprobar: '通过（法律）', duras: '严厉的', políticos: '政治家' },
      questions: [
        { type: 'mc', q: '全世界被回收的塑料占多少？', options: ['不到 10%', '大约 50%', '超过 90%'], answer: 0 },
        { type: 'mc', q: '塑料是怎么进入人体的？', options: ['通过空气', '通过吃鱼', '通过喝茶'], answer: 1 },
        { type: 'tf', q: '作者认为塑料只是科学家的问题。', answer: false, explain: 'no es solo de los científicos…, sino de todos' },
      ],
    },
    {
      id: 'b1-r22',
      level: 'B1',
      title: 'Opinión: mi ciudad sin coches',
      titleZh: '读者观点：没有汽车的城市',
      topic: '城市',
      paras: [
        [
          ['Hace dos años, el ayuntamiento de mi ciudad cerró el centro a los coches. Al principio, muchos vecinos estaban en contra. Yo, en cambio, pensaba que era una buena idea.', '两年前，我所在城市的市政府禁止汽车进入市中心。起初很多居民反对。而我觉得这是个好主意。'],
        ],
        [
          ['Hoy los resultados están claros. En primer lugar, el aire está mucho más limpio y hay menos ruido. Además, las calles se han llenado de terrazas, bicicletas y niños jugando.', '如今效果很明显。首先，空气干净多了，噪音也少了。此外，街上到处是露天咖啡座、自行车和玩耍的孩子。'],
          ['Gracias a eso, las tiendas del centro venden más, ya que la gente pasea con tranquilidad.', '多亏了这样，市中心的商店卖得更多了，因为人们可以悠闲地逛街。'],
        ],
        [
          ['Sin embargo, no todo es perfecto. Las personas mayores que viven en las afueras tienen más dificultades para llegar, puesto que el transporte público todavía no es suficiente.', '然而，并非一切都完美。住在郊区的老人更难进城，因为公共交通还不够。'],
          ['Por lo tanto, creo que la medida es positiva, pero el ayuntamiento tiene que mejorar los autobuses. No se trata de prohibir, sino de ofrecer alternativas.', '因此，我认为这个措施是积极的，但市政府必须改善公交。关键不在于禁止，而在于提供其他选择。'],
        ],
      ],
      gloss: { 'en contra': '反对', resultados: '结果', terrazas: '露天座', pasea: '散步', dificultades: '困难', suficiente: '足够的', positiva: '积极的', 'se trata de': '关键在于', alternativas: '替代选择' },
      questions: [
        { type: 'mc', q: '起初大多数居民的态度是什么？', options: ['支持', '反对', '无所谓'], answer: 1 },
        { type: 'mc', q: '为什么市中心的商店卖得更多了？', options: ['东西更便宜', '人们能悠闲地逛街', '开了更多商店'], answer: 1 },
        { type: 'tf', q: '作者认为应该改善公交车。', answer: true, explain: 'el ayuntamiento tiene que mejorar los autobuses' },
      ],
    },
  ],
  writing: [{ id: 'w1', prompt: '写一篇议论短文：“应不应该禁止一次性塑料制品？”要求：开头提出观点，中间至少给出两个理由和一个反方观点，结尾总结。至少用六个本单元的连接词。', words: [120, 200], hints: ['En mi opinión, …', 'En primer lugar… Además…', 'Sin embargo, algunas personas piensan que…', 'En conclusión, …'] }],
}
