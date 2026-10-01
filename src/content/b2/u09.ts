import type { Unit } from '../types'

export const u09: Unit = {
  id: 'b2-u09',
  level: 'B2',
  order: 9,
  title: '人际与心理',
  titleEs: 'Como si nada',
  icon: '🧠',
  goals: ['用 como si + 虚拟式过去时 / 过去完成时 描述“好像……一样”', '用 no es que + 虚拟式、no porque…, sino porque… 澄清真正的原因', '用 tan… que、de ahí que、de tanto + 原形 表达结果', '谈论性格、情绪和人际关系中的误会'],
  grammar: [
    {
      id: 'b2-como-si',
      title: 'como si：好像……一样',
      titleEs: 'Como si + subjuntivo',
      level: 'B2',
      summary: 'como si 后面只用虚拟式过去时（同时发生）或虚拟式过去完成时（更早发生），不管主句是什么时态：Habla como si lo supiera todo. Me miró como si hubiera visto un fantasma.',
      body: `### 两种时态，没有例外
| 结构 | 关系 | 例句 |
|---|---|---|
| *como si* + **虚拟式过去时** | 和主句同时 | *Habla **como si** lo **supiera** todo.*（他说话的样子好像什么都知道。） |
| *como si* + **虚拟式过去完成时** | 比主句更早 | *Me miró **como si** **hubiera visto** un fantasma.*（他看着我，好像见了鬼似的。） |

即使主句是现在时，*como si* 后面也 **不用虚拟式现在时**：
❌ *Actúa como si sea el jefe.* ✅ *Actúa como si **fuera** el jefe.*

### 常见用法
- 描述外表、态度：*Gasta dinero **como si fuera** millonario.*
- 表示不满：*¡No me hables **como si fuera** un niño!*
- 固定说法：***como si nada***（若无其事）：*Llegó dos horas tarde **como si nada**.*

### ni que + 虚拟式过去时：口语里的不满
*¡**Ni que fuera** tu madre!*（我又不是你妈！）
*¡**Ni que** te **hubiera tocado** la lotería!*（好像你中了彩票似的！）`,
      examples: [
        ['Habla como si lo supiera todo.', '他说话的样子好像什么都知道。'],
        ['Me miró como si hubiera visto un fantasma.', '他看着我，好像见了鬼似的。'],
        ['No me hables como si fuera un niño.', '别把我当小孩一样跟我说话。'],
        ['Llegó dos horas tarde como si nada.', '他迟到了两个小时，却跟没事人一样。'],
        ['¡Ni que fuera tu criado!', '我又不是你的仆人！'],
      ],
      tables: [{ verbs: ['saber', 'ver', 'ser'], tense: 'subjImpf' }],
      origin: `**como** 来自拉丁语 *quomodo*「以什么方式」（*quo* + *modo*「方式」）。*como si* 字面上是“以……的方式，如果……的话”——假设一个不真实的条件，所以用虚拟式过去时，就像 *si tuviera…* 一样。

英语 as if 后面也常用虚拟语气（as if he were the boss）——两种语言在这里想法一致。`,
      pitfalls: ['❌ *Habla como si lo sabe todo.* ✅ *Habla como si lo supiera todo.*', '❌ *Actúa como si sea el jefe.* ✅ *Actúa como si fuera el jefe.*', '❌ *Me miró como si habría visto un fantasma.* ✅ *…como si hubiera visto un fantasma.*'],
    },
    {
      id: 'b2-causa-avanzada',
      title: '澄清原因：no es que…, no porque…, sino porque…',
      titleEs: 'Causas: negar y aclarar',
      level: 'B2',
      summary: '否定一个原因用虚拟式，给出真正的原因用陈述式：No es que no quiera, es que no puedo. No lo hago porque me guste, sino porque es necesario. 另外：dado que / visto que + 陈述式；por + 原形；de tanto + 原形。',
      body: `### no es que + 虚拟式, (es) que + 陈述式
*No es que no **quiera** ir, es que no **puedo**.*（不是我不想去，是我去不了。）
*No es que **sea** caro, es que no lo **necesito**.*

### no porque + 虚拟式, sino porque + 陈述式
*Estudio español **no porque** me lo **pidan**, **sino porque** me **encanta**.*
否定掉的原因（不真实）用虚拟式；真正的原因用陈述式。

### 其他表示原因的结构
| 结构 | 语气 | 例句 |
|---|---|---|
| *dado que / visto que* + 陈述式 | 正式，已知原因 | ***Dado que** no hay preguntas, terminamos.* |
| *en vista de que* + 陈述式 | 正式 | ***En vista de que** no llegaba, nos fuimos.* |
| *por* + 原形 | 因为（常带责备） | *Te pasa eso **por** no escuchar.* |
| *de tanto* + 原形 | 因为太多（常是负面） | ***De tanto** mirar la pantalla, me duelen los ojos.* |
| *a fuerza de* + 原形 | 靠反复…… | ***A fuerza de** practicar, aprendió.* |`,
      examples: [
        ['No es que no quiera ir, es que no puedo.', '不是我不想去，是我去不了。'],
        ['Estudio español no porque me lo pidan, sino porque me encanta.', '我学西班牙语不是因为别人要求，而是因为我喜欢。'],
        ['Dado que no hay más preguntas, terminamos la reunión.', '既然没有别的问题，会议就到这里。'],
        ['Te ha pasado eso por no escuchar.', '你会这样，就是因为不听话。'],
        ['De tanto mirar la pantalla, me duelen los ojos.', '盯屏幕盯得太久，我眼睛疼。'],
      ],
      origin: `**dado que** 里的 *dado* 是 *dar* 的过去分词，来自拉丁语 *datus*「被给予的」——“这一点既然已被给出”。英语 *given that* 是完全一样的思路。

*No es que…* 是西班牙人很爱用的“软化”句式：先否定一个可能的误会，再说出真正的原因，听起来不那么生硬。`,
      pitfalls: ['❌ *No es que no quiero.* ✅ *No es que no quiera.*', '❌ *No lo hago porque me gusta, sino porque es necesario.* ✅ *No lo hago porque me guste, sino porque es necesario.*', '❌ *De tanto estudio, me duele la cabeza.* ✅ *De tanto estudiar, me duele la cabeza.*'],
    },
    {
      id: 'b2-consecuencia',
      title: '结果：tan… que, de ahí que, conque',
      titleEs: 'Expresar consecuencias',
      level: 'B2',
      summary: 'tan + 形容词 / 副词 + que；tanto/a/os/as + 名词 + que；动词 + tanto que：如此……以至于（陈述式）。de ahí que + 虚拟式（书面）。conque（口语）、por consiguiente（书面）。',
      body: `### 程度 → 结果（陈述式）
| 结构 | 例句 |
|---|---|
| *tan* + 形容词 / 副词 + *que* | *Estaba **tan** cansado **que** me dormí en el metro.* |
| *tanto / tanta / tantos / tantas* + 名词 + *que* | *Había **tanta** gente **que** no pudimos entrar.* |
| 动词 + *tanto que* | *Se rio **tanto que** se le saltaron las lágrimas.* |

### de ahí que + 虚拟式（书面）
前面说原因，*de ahí que* 引出结果，**用虚拟式**：
*Llueve muy poco en esta zona; **de ahí que haya** tantos incendios.*

### 其他结果连接词
| 连接词 | 语体 | 例句 |
|---|---|---|
| *así que* | 口语 | *No tenía hambre, **así que** no cené.* |
| *conque* | 口语，常带责备或总结 | *Ya eres mayor, **conque** decide tú.* |
| *de modo / manera que* + 陈述式 | 中性 | *No llamó, **de modo que** nos fuimos.* |
| *por consiguiente / por lo tanto* | 书面 | *Los datos son incompletos; **por consiguiente**, no podemos concluir nada.* |

> *de modo que* + **虚拟式** 表示目的（为了……）：*Habla alto **de modo que** todos te **oigan**.*`,
      examples: [
        ['Estaba tan cansado que me dormí en el metro.', '我累得在地铁上睡着了。'],
        ['Había tanta gente que no pudimos entrar.', '人太多了，我们没进去。'],
        ['Se rio tanto que se le saltaron las lágrimas.', '他笑得眼泪都出来了。'],
        ['Llueve muy poco; de ahí que haya tantos incendios.', '这里雨水很少，因此火灾很多。'],
        ['Ya eres mayor, conque decide tú.', '你已经是大人了，所以你自己决定吧。'],
      ],
      origin: `**consecuencia** 来自拉丁语 *consequi*「紧跟着」：*con* + *sequi*「跟随」（和 *seguir* 同源）。结果就是“紧跟在原因后面的东西”。

**conque**（所以）和 *con que*（用什么……）写法不同：*conque* 是一个连词，*Tengo un cuchillo **con que** cortar* 里的 *con que* 是介词 + 关系词。`,
      pitfalls: ['❌ *Estaba tan cansado como me dormí.* ✅ *Estaba tan cansado que me dormí.*', '❌ *Había tanto gente que…* ✅ *Había tanta gente que…*：tanto 要和名词一致。', '❌ *De ahí que hay incendios.* ✅ *De ahí que haya incendios.*'],
    },
  ],
  words: [
    { id: 'comportamiento', es: 'comportamiento', zh: '行为；表现', pos: 'n', g: 'm', level: 'B2', tags: ['feel'], ex: ['Su comportamiento en la cena fue muy raro.', '他在晚饭时的表现很奇怪。'] },
    { id: 'comportarse', es: 'comportarse', zh: '表现；举止', pos: 'v', level: 'B2', tags: ['verb', 'feel'], ex: ['¡Compórtate, que estamos en público!', '注意点，这是公共场合！'] },
    { id: 'actitud', es: 'actitud', zh: '态度', pos: 'n', g: 'f', pl: 'actitudes', level: 'B2', tags: ['feel'], ex: ['Tiene una actitud muy positiva.', '他的态度很积极。'] },
    { id: 'caracter', es: 'carácter', zh: '性格', pos: 'n', g: 'm', pl: 'caracteres', level: 'B2', tags: ['feel'], ex: ['Tiene mucho carácter.', '他很有个性。'], note: '复数重音位置会变：caracteres（重音在 te）。' },
    { id: 'personalidad', es: 'personalidad', zh: '个性', pos: 'n', g: 'f', pl: 'personalidades', level: 'B2', tags: ['feel'], ex: ['Es una persona con mucha personalidad.', '他是个很有个性的人。'] },
    { id: 'conducta', es: 'conducta', zh: '行为（正式）', pos: 'n', g: 'f', level: 'B2', tags: ['feel'], ex: ['Su conducta no fue profesional.', '他的行为不专业。'] },
    { id: 'reaccion', es: 'reacción', zh: '反应', pos: 'n', g: 'f', pl: 'reacciones', level: 'B2', tags: ['feel'], ex: ['No esperaba esa reacción.', '我没料到会是这种反应。'] },
    { id: 'reaccionar', es: 'reaccionar', zh: '反应', pos: 'v', level: 'B2', tags: ['verb', 'feel'], ex: ['No supe cómo reaccionar.', '我不知道该怎么反应。'] },
    { id: 'impulsivo', es: 'impulsivo', zh: '冲动的', pos: 'adj', f: 'impulsiva', level: 'B2', tags: ['feel'], ex: ['Es muy impulsivo: decide sin pensar.', '他很冲动：不经思考就做决定。'] },
    { id: 'reflexivo', es: 'reflexivo', zh: '深思熟虑的', pos: 'adj', f: 'reflexiva', level: 'B2', tags: ['feel'], ex: ['Mi hermana es más reflexiva que yo.', '我姐姐比我更深思熟虑。'] },
    { id: 'inseguridad', es: 'inseguridad', zh: '不安全感；不自信', pos: 'n', g: 'f', level: 'B2', tags: ['feel'], ex: ['Su inseguridad le impide hablar en público.', '他的不自信让他无法当众讲话。'] },
    { id: 'seguridad', es: 'seguridad', zh: '安全；自信', pos: 'n', g: 'f', level: 'B2', tags: ['feel'], ex: ['Habla con mucha seguridad.', '他说话很有自信。'] },
    { id: 'timidez', es: 'timidez', zh: '害羞', pos: 'n', g: 'f', level: 'B2', tags: ['feel'], ex: ['Superó su timidez con el teatro.', '他通过演戏克服了害羞。'] },
    { id: 'mania', es: 'manía', zh: '怪癖；成见', pos: 'n', g: 'f', level: 'B2', tags: ['feel'], ex: ['Tiene la manía de ordenarlo todo por colores.', '他有个怪癖：什么都按颜色排。'], note: 'tenerle manía a alguien = 看某人不顺眼。' },
    { id: 'obsesion', es: 'obsesión', zh: '执念', pos: 'n', g: 'f', pl: 'obsesiones', level: 'B2', tags: ['feel'], ex: ['El orden es una obsesión para él.', '整洁对他来说是一种执念。'] },
    { id: 'obsesionarse', es: 'obsesionarse', zh: '着迷；钻牛角尖', pos: 'v', level: 'B2', tags: ['verb', 'feel'], ex: ['No te obsesiones con los detalles.', '别在细节上钻牛角尖。'] },
    { id: 'ansioso', es: 'ansioso', zh: '焦虑的；渴望的', pos: 'adj', f: 'ansiosa', level: 'B2', tags: ['feel'], ex: ['Estoy ansioso por conocer los resultados.', '我急着想知道结果。'] },
    { id: 'presion', es: 'presión', zh: '压力', pos: 'n', g: 'f', pl: 'presiones', level: 'B2', tags: ['feel'], ex: ['Trabaja bajo mucha presión.', '他在很大的压力下工作。'] },
    { id: 'frustracion', es: 'frustración', zh: '挫败感', pos: 'n', g: 'f', level: 'B2', tags: ['feel'], ex: ['Sentí mucha frustración.', '我感到非常挫败。'] },
    { id: 'frustrar', es: 'frustrar', zh: '使受挫；使落空', pos: 'v', level: 'B2', tags: ['verb', 'feel'], ex: ['Me frustra no poder expresarme bien.', '没法好好表达自己让我很沮丧。'] },
    { id: 'empatia', es: 'empatía', zh: '同理心', pos: 'n', g: 'f', level: 'B2', tags: ['feel'], ex: ['Le falta empatía.', '他缺乏同理心。'] },
    { id: 'empatico', es: 'empático', zh: '有同理心的', pos: 'adj', f: 'empática', level: 'B2', tags: ['feel'], ex: ['Es una persona muy empática.', '她是个很有同理心的人。'] },
    { id: 'egoismo', es: 'egoísmo', zh: '自私', pos: 'n', g: 'm', level: 'B2', tags: ['feel'], ex: ['Lo hizo por puro egoísmo.', '他这么做纯粹是出于自私。'] },
    { id: 'generosidad', es: 'generosidad', zh: '慷慨', pos: 'n', g: 'f', level: 'B2', tags: ['feel'], ex: ['Gracias por tu generosidad.', '谢谢你的慷慨。'] },
    { id: 'sinceridad', es: 'sinceridad', zh: '真诚', pos: 'n', g: 'f', level: 'B2', tags: ['feel'], ex: ['Te lo digo con toda sinceridad.', '我这话是真心的。'] },
    { id: 'hipocresia', es: 'hipocresía', zh: '虚伪', pos: 'n', g: 'f', level: 'B2', tags: ['feel'], ex: ['No soporto la hipocresía.', '我受不了虚伪。'], ety: '希腊语 hypokrisis「（演员）扮演角色」。' },
    { id: 'hipocrita', es: 'hipócrita', zh: '虚伪的；伪君子', pos: 'adj', level: 'B2', tags: ['feel'], ex: ['No seas hipócrita.', '别那么虚伪。'] },
    { id: 'cotilla', es: 'cotilla', zh: '爱八卦的（人）', pos: 'adj', level: 'B2', tags: ['feel'], ex: ['Mi vecina es muy cotilla.', '我的邻居很爱八卦。'] },
    { id: 'envidioso', es: 'envidioso', zh: '嫉妒的', pos: 'adj', f: 'envidiosa', level: 'B2', tags: ['feel'], ex: ['No seas envidioso.', '别嫉妒了。'] },
    { id: 'rencoroso', es: 'rencoroso', zh: '记仇的', pos: 'adj', f: 'rencorosa', level: 'B2', tags: ['feel'], ex: ['No soy rencoroso: ya lo he olvidado.', '我不记仇：早忘了。'] },
    { id: 'rencor', es: 'rencor', zh: '怨恨', pos: 'n', g: 'm', level: 'B2', tags: ['feel'], ex: ['No le guardo rencor.', '我不怨他。'] },
    { id: 'fingir', es: 'fingir', zh: '假装', pos: 'v', level: 'B2', tags: ['verb'], ex: ['Fingió que no me había visto.', '他装作没看见我。'], note: 'g→j：finjo。' },
    { id: 'disimular', es: 'disimular', zh: '掩饰；装作若无其事', pos: 'v', level: 'B2', tags: ['verb'], ex: ['Intentó disimular su enfado.', '他试图掩饰自己的怒气。'] },
    { id: 'aparentar', es: 'aparentar', zh: '装作；看起来像', pos: 'v', level: 'B2', tags: ['verb'], ex: ['No aparenta la edad que tiene.', '他看起来不像他的实际年龄。'] },
    { id: 'presumir', es: 'presumir', zh: '炫耀', pos: 'v', level: 'B2', tags: ['verb'], ex: ['Siempre está presumiendo de su coche.', '他总在炫耀他的车。'], note: 'presumir de algo。' },
    { id: 'ofender', es: 'ofender', zh: '冒犯', pos: 'v', level: 'B2', tags: ['verb'], ex: ['No quería ofenderte.', '我没想冒犯你。'] },
    { id: 'ofenderse', es: 'ofenderse', zh: '生气；觉得被冒犯', pos: 'v', level: 'B2', tags: ['verb', 'feel'], ex: ['Se ofende por cualquier cosa.', '他动不动就生气。'] },
    { id: 'ofendido', es: 'ofendido', zh: '被冒犯的', pos: 'adj', f: 'ofendida', level: 'B2', tags: ['feel'], ex: ['Se fue muy ofendida.', '她非常生气地走了。'] },
    { id: 'molesto', es: 'molesto', zh: '不悦的；令人烦的', pos: 'adj', f: 'molesta', level: 'B2', tags: ['feel'], ex: ['Está molesto conmigo.', '他对我不满。'] },
    { id: 'desahogarse', es: 'desahogarse', zh: '倾诉；发泄', pos: 'v', level: 'B2', tags: ['verb', 'feel'], ex: ['Necesitaba desahogarme con alguien.', '我需要找个人倾诉一下。'] },
    { id: 'comprender', es: 'comprender', zh: '理解', pos: 'v', level: 'B2', tags: ['verb'], ex: ['Comprendo cómo te sientes.', '我理解你的感受。'] },
    { id: 'comprension', es: 'comprensión', zh: '理解', pos: 'n', g: 'f', level: 'B2', tags: ['feel'], ex: ['Gracias por tu comprensión.', '谢谢你的理解。'] },
    { id: 'como-si', es: 'como si', zh: '好像……一样', pos: 'phr', level: 'B2', tags: ['func'], ex: ['Me trata como si fuera su hermano.', '他对我像对自己的兄弟一样。'] },
    { id: 'como-si-nada', es: 'como si nada', zh: '若无其事', pos: 'phr', level: 'B2', tags: ['func'], ex: ['Siguió comiendo como si nada.', '他若无其事地继续吃。'] },
    { id: 'no-es-que', es: 'no es que', zh: '并不是说……', pos: 'phr', level: 'B2', tags: ['func'], ex: ['No es que no me guste, es que estoy lleno.', '不是我不喜欢，是我吃饱了。'] },
    { id: 'dado-que', es: 'dado que', zh: '鉴于；既然', pos: 'phr', level: 'B2', tags: ['func'], ex: ['Dado que llueve, nos quedamos en casa.', '既然下雨，我们就待在家里。'] },
    { id: 'de-ahi-que', es: 'de ahí que', zh: '因此（书面）', pos: 'phr', level: 'B2', tags: ['func'], ex: ['No estudió; de ahí que suspendiera.', '他没学习，所以挂科了。'] },
    { id: 'de-tanto', es: 'de tanto', zh: '由于太多（做）……', pos: 'phr', level: 'B2', tags: ['func'], ex: ['De tanto gritar, se quedó afónico.', '他喊得太多，嗓子都哑了。'] },
    { id: 'conque', es: 'conque', zh: '所以；那么（口语）', pos: 'conj', level: 'B2', tags: ['func'], ex: ['Ya lo sabes, conque no te quejes.', '你早就知道了，所以别抱怨。'] },
    { id: 'ni-que', es: 'ni que', zh: '又不是……（口语，表不满）', pos: 'phr', level: 'B2', tags: ['func'], ex: ['¡Ni que fuera tu chófer!', '我又不是你的司机！'] },
  ],
  sentences: [
    { id: 's1', es: 'Habla como si lo supiera todo.', zh: '他说话的样子好像什么都知道。', g: ['b2-como-si'], distract: ['sabe'] },
    { id: 's2', es: 'Me miró como si hubiera visto un fantasma.', zh: '他看着我，好像见了鬼似的。', g: ['b2-como-si'], distract: ['habría'] },
    { id: 's3', es: 'No me hables como si fuera un niño.', zh: '别把我当小孩一样跟我说话。', g: ['b2-como-si'], distract: ['sea'] },
    { id: 's4', es: 'Llegó dos horas tarde como si nada.', zh: '他迟到了两个小时，却跟没事人一样。', g: ['b2-como-si'] },
    { id: 's5', es: '¡Ni que fuera tu criado!', zh: '我又不是你的仆人！', g: ['b2-como-si'] },
    { id: 's6', es: 'No es que no quiera ir, es que no puedo.', zh: '不是我不想去，是我去不了。', g: ['b2-causa-avanzada'], distract: ['quiero'] },
    { id: 's7', es: 'Estudio español no porque me lo pidan, sino porque me encanta.', zh: '我学西班牙语不是因为别人要求，而是因为我喜欢。', g: ['b2-causa-avanzada'] },
    { id: 's8', es: 'Dado que no hay más preguntas, terminamos la reunión.', zh: '既然没有别的问题，会议就到这里。', g: ['b2-causa-avanzada'] },
    { id: 's9', es: 'De tanto mirar la pantalla, me duelen los ojos.', zh: '盯屏幕盯得太久，我眼睛疼。', g: ['b2-causa-avanzada'] },
    { id: 's10', es: 'Estaba tan cansado que me dormí en el metro.', zh: '我累得在地铁上睡着了。', g: ['b2-consecuencia'], distract: ['como'] },
    { id: 's11', es: 'Había tanta gente que no pudimos entrar.', zh: '人太多了，我们没进去。', g: ['b2-consecuencia'], distract: ['tanto'] },
    { id: 's12', es: 'Llueve muy poco; de ahí que haya tantos incendios.', zh: '这里雨水很少，因此火灾很多。', g: ['b2-consecuencia'], distract: ['hay'] },
    { id: 's13', es: 'Ya eres mayor, conque decide tú.', zh: '你已经是大人了，所以你自己决定吧。', g: ['b2-consecuencia'] },
    { id: 's14', es: 'No le guardo rencor.', zh: '我不怨他。' },
    { id: 's15', es: 'Fingió que no me había visto.', zh: '他装作没看见我。' },
    { id: 's16', es: 'Se ofende por cualquier cosa.', zh: '他动不动就生气。' },
    { id: 's17', es: 'Necesitaba desahogarme con alguien.', zh: '我需要找个人倾诉一下。' },
    { id: 's18', es: 'Gracias por tu comprensión.', zh: '谢谢你的理解。' },
    { id: 's19', es: 'Se rio tanto que se le saltaron las lágrimas.', zh: '他笑得眼泪都出来了。', g: ['b2-consecuencia'] },
    { id: 's20', es: 'Te ha pasado eso por no escuchar.', zh: '你会这样，就是因为不听话。', g: ['b2-causa-avanzada'] },
    { id: 's21', es: 'Gasta dinero como si fuera millonario.', zh: '他花钱的样子好像他是百万富翁。', g: ['b2-como-si'] },
    { id: 's22', es: 'No es que sea caro, es que no lo necesito.', zh: '不是因为贵，而是我不需要。', g: ['b2-causa-avanzada'] },
    { id: 's23', es: 'Tiene la manía de llegar siempre tarde.', zh: '他有个坏毛病，总是迟到。' },
    { id: 's24', es: 'No te obsesiones con los detalles.', zh: '别在细节上钻牛角尖。' },
    { id: 's25', es: 'Habla alto de modo que todos te oigan.', zh: '说大声点，好让大家都能听到。', g: ['b2-consecuencia'] },
  ],
  cloze: [
    { id: 'c1', text: 'Me trata como si ___ (yo) su empleado.', answers: ['fuera', 'fuese'], hint: 'ser', zh: '他对我就像对他的雇员一样。', g: ['b2-como-si'] },
    { id: 'c2', text: 'Gasta como si ___ (él) mucho dinero.', answers: ['tuviera', 'tuviese'], hint: 'tener', zh: '他花钱的样子好像他很有钱。', g: ['b2-como-si'] },
    { id: 'c3', text: 'Me miró como si no me ___ nunca.', answers: ['hubiera visto', 'hubiese visto'], hint: 'ver', zh: '他看着我，好像从没见过我一样。', g: ['b2-como-si'] },
    { id: 'c4', text: 'Actúa como si ___ el jefe.', answers: ['fuera'], options: ['fuera', 'sea', 'es'], zh: '他表现得好像自己是老板。', g: ['b2-como-si'] },
    { id: 'c5', text: '¡Ni que ___ (tú) mi madre!', answers: ['fueras', 'fueses'], hint: 'ser', zh: '你又不是我妈！', g: ['b2-como-si'] },
    { id: 'c6', text: 'No es que no ___ (yo) ayudarte, es que no tengo tiempo.', answers: ['quiera'], hint: 'querer', zh: '不是我不想帮你，是我没时间。', g: ['b2-causa-avanzada'] },
    { id: 'c7', text: 'No vino no porque ___ enfermo, sino porque no quería.', answers: ['estuviera', 'estuviese'], hint: 'estar', zh: '他没来不是因为生病，而是因为不想来。', g: ['b2-causa-avanzada'] },
    { id: 'c8', text: 'Lo hago no porque me ___, sino porque es mi trabajo.', answers: ['guste'], hint: 'gustar', zh: '我这么做不是因为喜欢，而是因为这是我的工作。', g: ['b2-causa-avanzada'] },
    { id: 'c9', text: 'De tanto ___ en el ordenador, me duele la espalda.', answers: ['trabajar'], options: ['trabajar', 'trabajo', 'trabajando'], zh: '电脑前工作太久，我背疼。', g: ['b2-causa-avanzada'] },
    { id: 'c10', text: '___ que no llegaba, empezamos sin él.', answers: ['Visto', 'Dado'], options: ['Visto', 'Como si', 'De tanto'], zh: '见他一直没来，我们就不等他先开始了。', g: ['b2-causa-avanzada'] },
    { id: 'c11', text: 'La película era ___ aburrida que me dormí.', answers: ['tan'], options: ['tan', 'tanta', 'muy'], zh: '电影无聊得我都睡着了。', g: ['b2-consecuencia'] },
    { id: 'c12', text: 'Comí ___ que me dolió el estómago.', answers: ['tanto'], options: ['tanto', 'tan', 'mucho'], zh: '我吃得太多，胃都疼了。', g: ['b2-consecuencia'] },
    { id: 'c13', text: 'Había ___ coches que tardamos dos horas.', answers: ['tantos'], options: ['tantos', 'tanto', 'tan'], zh: '车太多了，我们花了两个小时。', g: ['b2-consecuencia'] },
    { id: 'c14', text: 'Habla muy rápido; de ahí que nadie lo ___.', answers: ['entienda'], hint: 'entender', zh: '他说话太快了，所以没人听得懂。', g: ['b2-consecuencia'] },
    { id: 'c15', text: 'Estaba tan nervioso ___ no pudo hablar.', answers: ['que'], options: ['que', 'como', 'de'], zh: '他紧张得说不出话来。', g: ['b2-consecuencia'] },
    { id: 'c16', text: 'Fingió que no ___ nada.', answers: ['sabía'], hint: 'saber', zh: '他假装什么都不知道。' },
    { id: 'c17', text: 'Siguió hablando como ___ nada.', answers: ['si'], options: ['si', 'que', 'cuando'], zh: '他若无其事地继续说。', g: ['b2-como-si'] },
    { id: 'c18', text: 'No le guardo ___: ya está olvidado.', answers: ['rencor'], options: ['rencor', 'envidia', 'manía'], zh: '我不怨他：早就忘了。' },
  ],
  conj: [
    { verbs: ['saber', 'ver', 'ser', 'tener', 'conocer', 'estar'], tenses: ['subjImpf', 'subjPlusc'], g: 'b2-como-si' },
    { verbs: ['fingir', 'ofender', 'reaccionar', 'comprender'], tenses: ['pres', 'pret'], g: 'b2-causa-avanzada' },
  ],
  dialogues: [
    {
      id: 'b2-u09-d1',
      title: '误会 · Un malentendido',
      lines: [
        { who: 'Paula', es: 'Oye, ¿te pasa algo conmigo? Ayer me saludaste como si no me conocieras.', zh: '哎，你是不是对我有意见？昨天你跟我打招呼，好像不认识我似的。' },
        { who: 'Lucas', es: '¿Yo? No es que estuviera enfadado contigo, es que iba con prisa.', zh: '我？我不是在生你的气，是我当时赶时间。' },
        { who: 'Paula', es: 'Ya… pero también dejaste mi mensaje en visto. Y me contestaste con un «ok», como si te diera igual.', zh: '好吧……可你也已读不回我的消息。还只回了个“ok”，好像无所谓似的。' },
        { who: 'Lucas', es: 'Uf, perdona. Tenía tanto trabajo que no podía ni pensar. No te contesté así porque no me importara, sino porque estaba agotado.', zh: '唉，对不起。我当时工作多得脑子都转不过来了。我那样回你不是因为不在乎，而是因为我累坏了。' },
        { who: 'Paula', es: 'Vale, lo entiendo. Es que a veces escribimos tan rápido que todo parece frío.', zh: '好吧，我理解。只是有时候我们打字太快，什么都显得很冷淡。' },
        { who: 'Lucas', es: 'Tienes razón. De ahí que haya tantos malentendidos por el móvil.', zh: '你说得对。所以用手机聊天才会有那么多误会。' },
        { who: 'Paula', es: 'Bueno, ¿hacemos las paces? Te invito a un café.', zh: '好啦，我们和好吧？我请你喝咖啡。' },
        { who: 'Lucas', es: '¡Ni que tuvieras que invitarme! Esta vez pago yo, que me toca pedir perdón.', zh: '哪用得着你请！这次我请，该我道歉。' },
      ],
    },
  ],
  readings: [
    {
      id: 'b2-r17',
      level: 'B2',
      title: 'El síndrome del impostor',
      titleZh: '冒名顶替综合征',
      topic: '心理',
      paras: [
        [
          ['Aprueba los exámenes con buenas notas, la ascienden en el trabajo, sus compañeros la admiran… y, sin embargo, Clara se siente como si todo fuera un error y en cualquier momento alguien fuera a descubrir que no vale tanto.', '考试成绩优秀，工作中获得晋升，同事们钦佩她……然而，克拉拉总觉得这一切好像都是个错误，随时会有人发现她其实没那么优秀。'],
        ],
        [
          ['Los psicólogos llaman a este fenómeno «síndrome del impostor». El término fue utilizado por primera vez en 1978 por dos psicólogas estadounidenses, Pauline Clance y Suzanne Imes.', '心理学家把这种现象称为“冒名顶替综合征”。这一术语由两位美国心理学家保利娜·克兰斯和苏珊娜·艾姆斯于 1978 年首次提出。'],
          ['No es que estas personas sean poco capaces, sino que atribuyen sus éxitos a la suerte y sus fracasos a su propia incapacidad. De ahí que vivan con una presión constante.', '不是这些人能力不足，而是他们把成功归于运气，把失败归于自己无能。因此，他们一直生活在持续的压力之下。'],
        ],
        [
          ['Los expertos recomiendan hablar de ello con personas de confianza, apuntar los logros conseguidos y aceptar que nadie lo sabe todo. Curiosamente, el síndrome es tan frecuente que, según algunos estudios, la mayoría de las personas lo ha sentido alguna vez.', '专家建议和信任的人聊一聊，把取得的成就记下来，并接受“没有人什么都懂”这一事实。有意思的是，这种综合征非常普遍，有些研究认为，大多数人都曾有过这种感受。'],
        ],
      ],
      gloss: { síndrome: '综合征', impostor: '冒名顶替者', 'no vale tanto': '没那么优秀', término: '术语', atribuyen: '归因于', incapacidad: '无能', constante: '持续的', apuntar: '记下', logros: '成就' },
      questions: [
        { type: 'mc', q: '有冒名顶替综合征的人把成功归因于什么？', options: ['自己的努力', '运气', '父母'], answer: 1 },
        { type: 'mc', q: '这个术语是什么时候首次使用的？', options: ['1958', '1978', '1998'], answer: 1 },
        { type: 'tf', q: '文章认为有这种综合征的人能力不足。', answer: false, explain: 'No es que estas personas sean poco capaces…' },
      ],
    },
    {
      id: 'b2-r18',
      level: 'B2',
      title: '¿Por qué discutimos tanto por mensajes?',
      titleZh: '为什么我们总在消息里吵架？',
      topic: '人际',
      paras: [
        [
          ['Cuando hablamos cara a cara, más de la mitad de la información no está en las palabras, sino en el tono de voz, los gestos y la expresión de la cara. En un mensaje escrito, todo eso desaparece.', '面对面交谈时，一半以上的信息不在话语本身，而在语气、手势和面部表情里。到了文字消息里，这些全都消失了。'],
        ],
        [
          ['Por eso, un simple «vale» puede interpretarse como si el otro estuviera enfadado, y un mensaje sin respuesta durante horas, como si no le importáramos. De tanto imaginar lo que el otro piensa, acabamos discutiendo por cosas que nunca ocurrieron.', '因此，一句简单的“好”可能会被理解成对方生气了；几个小时没回的消息，会被理解成对方不在乎我们。我们总是揣测对方的想法，最后为一些根本没发生过的事吵起来。'],
          ['No es que la tecnología sea mala, sino que la usamos con tanta prisa que olvidamos que al otro lado hay una persona.', '不是科技不好，而是我们用得太匆忙，忘了屏幕那头是一个人。'],
        ],
        [
          ['Los psicólogos dan un consejo sencillo: si notas que una conversación se está calentando, deja el móvil y llama. Una frase dicha con una sonrisa puede evitar una discusión de tres días.', '心理学家给出了一个简单的建议：如果你发现对话气氛越来越紧张，就放下手机，打个电话。一句带着微笑说出的话，也许就能避免一场持续三天的争吵。'],
        ],
      ],
      gloss: { 'cara a cara': '面对面', tono: '语气', gestos: '手势', interpretarse: '被理解为', importáramos: '（我们）重要（虚拟式）', 'se está calentando': '正在升温', evitar: '避免' },
      questions: [
        { type: 'mc', q: '文字消息里缺少了什么？', options: ['词汇', '语气、手势和表情', '标点'], answer: 1 },
        { type: 'tf', q: '文章认为科技本身是坏的。', answer: false, explain: 'No es que la tecnología sea mala…' },
        { type: 'mc', q: '心理学家建议怎么做？', options: ['不再联系', '放下手机打个电话', '发更长的消息'], answer: 1 },
      ],
    },
  ],
  writing: [{ id: 'w1', prompt: '写一段你和朋友 / 家人之间的一次误会：对方做了什么、看起来好像怎样（como si…）、真正的原因是什么（no es que…, es que… / no porque…, sino porque…），最后结果如何（tan… que / de ahí que…）。', words: [120, 200], hints: ['Me habló como si…', 'Pensé que… pero no es que…, es que…', 'Estaba tan… que…', 'Al final…'] }],
}
