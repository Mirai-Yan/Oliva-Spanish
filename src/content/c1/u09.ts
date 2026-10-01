import type { Unit } from '../types'

export const u09: Unit = {
  id: 'c1-u09',
  level: 'C1',
  order: 9,
  title: '篇章的脉络',
  titleEs: 'Hilar el discurso',
  icon: '🧵',
  goals: ['使用高级论证标记：es más, ahora bien, con todo, por ende', '用重述标记换一种说法：o sea, mejor dicho, en fin, total', '听懂并恰当使用口语标记：bueno, pues, vamos, venga, oye, mira', '围绕“幸福”写一篇有条理的随笔'],
  grammar: [
    {
      id: 'c1-marcadores-argumentativos',
      title: '论证标记：补充、转折、推论',
      titleEs: 'Marcadores argumentativos',
      level: 'C1',
      summary: '补充：es más（不仅如此，更进一步）、encima（口语，而且还）、por añadidura（书面）。转折：ahora bien（不过）、con todo / aun así（尽管如此）、eso sí（但要说明的是）、por el contrario（相反）。推论：por ende、así pues、en consecuencia（因此）。',
      body: `### 补充：一个比一个更强
| 标记 | 语体 | 例句 |
|---|---|---|
| *además* | 通用 | *Es barato. **Además**, es bonito.* |
| ***es más*** | 通用，引出更强的论据 | *No me gusta. **Es más**, me parece horrible.* |
| *encima* | 口语，常带不满 | *Llega tarde y **encima** se queja.* |
| ***por añadidura*** | 书面 | *…y, **por añadidura**, carece de fondos.* |

### 转折：承认前一点，再提出限制
| 标记 | 意思 | 例句 |
|---|---|---|
| ***ahora bien*** | 不过、可是 | *El plan es bueno. **Ahora bien**, ¿quién lo va a pagar?* |
| ***con todo*** / *aun así* | 尽管如此 | *Hubo problemas. **Con todo**, el resultado fue positivo.* |
| ***eso sí*** | 不过（补充一个条件） | *Puedes ir. **Eso sí**, vuelve antes de las doce.* |
| ***por el contrario*** / *en cambio* | 相反 | *El norte es lluvioso; **por el contrario**, el sur es seco.* |

### 推论：从前面得出结论
***así pues*** · ***en consecuencia*** · ***por consiguiente*** · ***por ende***（很书面）
*Los datos son incompletos; **por ende**, no podemos concluir nada.*`,
      examples: [
        ['No me gusta. Es más, me parece horrible.', '我不喜欢。不仅如此，我觉得它很难看。'],
        ['El plan es bueno. Ahora bien, ¿quién lo va a pagar?', '计划不错。可是，谁来出钱呢？'],
        ['Hubo muchos problemas. Con todo, el resultado fue positivo.', '问题很多。尽管如此，结果还是好的。'],
        ['Puedes ir a la fiesta. Eso sí, vuelve antes de las doce.', '你可以去派对。不过，十二点前得回来。'],
        ['Los datos son incompletos; por ende, no podemos concluir nada.', '数据不完整；因此我们无法得出任何结论。'],
      ],
      origin: `**ende** 来自拉丁语 *inde*「从那里」。古西班牙语里 *ende* 是一个普通的副词，后来消失了，只在 ***por ende***（“由此”）这个固定说法里保留了下来，所以听起来很书面、很“老”。

**ahora bien** 字面是“现在呢，好吧”——先停一下，再提出“不过”。`,
      pitfalls: ['❌ 把 *ahora bien* 理解为“现在好了” ✅ 它的意思是“不过、可是”。', '❌ 在口语聊天中说 *por ende*（太书面）✅ *así que*', '❌ *Es más, además…*（重复）✅ 只用其一。'],
    },
    {
      id: 'c1-reformuladores',
      title: '重述标记：换个说法、修正、总结',
      titleEs: 'Reformuladores',
      level: 'C1',
      summary: '解释：es decir, o sea（口语）, esto es, a saber。修正：mejor dicho, más bien。总结：en definitiva, en resumidas cuentas, en fin, total（口语）, al fin y al cabo。保留态度：en cualquier caso, de todos modos。',
      body: `### 解释：换一种说法
| 标记 | 语体 | 例句 |
|---|---|---|
| *es decir* | 通用 | *Llegará en un lustro, **es decir**, en cinco años.* |
| *o sea* | 口语 | *No tengo dinero, **o sea**, que no voy.* |
| *esto es* | 书面 | *…el PIB, **esto es**, el producto interior bruto.* |
| *a saber* | 书面，引出列举 | *Hay tres opciones, **a saber**: …* |

### 修正：说得更准确
- ***mejor dicho***：*Vendrá el lunes, **mejor dicho**, el martes.*（他周一来，不对，是周二。）
- ***más bien***：*No es tímido; **más bien** es reservado.*（与其说他害羞，不如说他内敛。）

### 总结
- ***en definitiva / en resumidas cuentas***：总之
- ***en fin***：好吧，总之（常带无奈）：*En fin, ¿qué le vamos a hacer?*
- ***total***（口语）：*Total, que al final no fuimos.*
- ***al fin y al cabo***：说到底

### 不管前面说了什么
***en cualquier caso / de todos modos / de todas formas***：*No sé si vendrá. **En cualquier caso**, le guardaremos un sitio.*`,
      examples: [
        ['No tengo dinero, o sea, que no voy.', '我没钱，也就是说，我不去了。'],
        ['Vendrá el lunes; mejor dicho, el martes.', '他周一来；不对，是周二。'],
        ['No es tímido; más bien es reservado.', '与其说他害羞，不如说他内敛。'],
        ['En fin, ¿qué le vamos a hacer?', '算了，又能怎么样呢？'],
        ['Total, que al final no fuimos a ningún sitio.', '总之，最后我们哪儿也没去。'],
      ],
      origin: `**o sea** 其实是“或者就算是……吧”：*o* + *sea*（*ser* 的虚拟式）。本来是“换句话说”的意思，后来在口语中变成了万能的“就是说……”，甚至成了某些年轻人的口头禅。

**a saber** 字面是“为了知道”，相当于中文的“即：”，用来引出列举。`,
      pitfalls: ['❌ 在论文中反复用 *o sea* ✅ 书面语用 *es decir / esto es*。', '❌ *Mejor dicho* 用来补充 ✅ 它是“更正”：说错了，改一下。', '❌ *En fin* 放在正式结论段开头 ✅ 正式文体用 *En definitiva* 或 *En conclusión*。'],
    },
    {
      id: 'c1-marcadores-conversacionales',
      title: '口语标记：bueno, pues, vamos, venga…',
      titleEs: 'Marcadores conversacionales',
      level: 'C1',
      summary: '口语中的小词让对话自然：bueno（嗯、好吧）、pues（那么、嗯）、vamos（换句话说、加强语气）、venga（好了、加油）、vaya（哎呀）、anda（不会吧）、oye / mira（引起注意）、a ver（我们看看）、¿eh?, ¿no?（确认）、en plan（年轻人口语：像是、大概）。',
      body: `| 标记 | 常见作用 | 例句 |
|---|---|---|
| ***bueno*** | 开始说话、让步、转话题 | ***Bueno**, vamos a empezar. / —Es caro. —**Bueno**, no tanto.* |
| ***pues*** | 回应、开始回答 | *—¿Qué tal? —**Pues** bien, aquí estamos.* |
| ***vamos*** | 换个更直白的说法 | *Es caro; **vamos**, carísimo.* |
| ***venga*** | 催促、鼓励、同意 | ***Venga**, que llegamos tarde. / —¿Quedamos a las ocho? —**Venga**.* |
| ***vaya*** | 惊讶、失望 | ***¡Vaya!** Se me ha olvidado el móvil.* |
| ***anda*** | 惊讶、请求 | ***¡Anda!** ¿Tú por aquí? / **Anda**, ayúdame.* |
| ***oye / mira*** | 引起注意 | ***Oye**, ¿tienes un momento? / **Mira**, te voy a ser sincero.* |
| ***a ver*** | 思考、引起注意 | ***A ver**, ¿qué ha pasado?* |
| ***¿eh? / ¿no? / ¿vale?*** | 寻求确认 | *Mañana a las ocho, **¿vale?*** |
| ***en plan*** | 年轻人口语：像是、比如 | *Me miró **en plan** «¿y tú quién eres?».* |

### 注意
这些词大多来自 **动词的命令式**：*venga*（来）、*vaya*（去）、*anda*（走）、*oye*（听）、*mira*（看）。它们已经失去了原来的意思，变成了纯粹的“语气词”。
在 **书面语和正式场合** 尽量少用；在口语里用得恰当，会让你听起来非常地道。`,
      examples: [
        ['—¿Qué tal el examen? —Pues bien, creo que he aprobado.', '——考得怎么样？——嗯，还行，我觉得过了。'],
        ['Es caro; vamos, carísimo.', '很贵；说白了，贵得离谱。'],
        ['¡Venga, que llegamos tarde!', '快点，我们要迟到了！'],
        ['¡Anda! ¿Tú por aquí?', '哎呀！你怎么在这儿？'],
        ['A ver, ¿qué ha pasado exactamente?', '我们来看看，到底发生了什么？'],
      ],
      origin: `**venga, vaya, anda, oye, mira** 都是动词的命令式（或虚拟式），在长期使用中“语法化”成了语气词：*¡Venga!* 已经没有“来”的意思了，而是“加油、快点、好的”。

中文里也有类似现象：“走！”不一定真的要走，“看！”也不一定要你看——语言总是把最常用的动作词变成表达情绪的小工具。`,
      pitfalls: ['❌ 在正式演讲里每句话都以 *bueno* 开头 ✅ 正式场合换成 *En primer lugar*、*Para empezar*。', '❌ 把 *¡Vaya!* 理解为“去” ✅ 它表示惊讶或失望。', '❌ 在论文中写 *en plan*（年轻人口语）✅ *como*、*por ejemplo*。'],
    },
  ],
  words: [
    { id: 'marcador', es: 'marcador', zh: '标记；记分牌', pos: 'n', g: 'm', pl: 'marcadores', level: 'C1', tags: ['func'], ex: ['«Sin embargo» es un marcador del discurso.', '“sin embargo”是一个话语标记。'] },
    { id: 'conector', es: 'conector', zh: '连接词', pos: 'n', g: 'm', pl: 'conectores', level: 'C1', tags: ['func'], ex: ['Usa conectores para organizar el texto.', '用连接词来组织文章。'] },
    { id: 'es-mas', es: 'es más', zh: '不仅如此', pos: 'phr', level: 'C1', tags: ['func'], ex: ['No es caro; es más, es una ganga.', '不贵；不仅如此，还很划算。'] },
    { id: 'por-anadidura', es: 'por añadidura', zh: '此外（书面）', pos: 'phr', level: 'C1', tags: ['func'], ex: ['El proyecto es caro y, por añadidura, lento.', '这个项目很贵，而且进展缓慢。'] },
    { id: 'ahora-bien', es: 'ahora bien', zh: '不过；可是', pos: 'phr', level: 'C1', tags: ['func'], ex: ['La idea es buena. Ahora bien, no es realista.', '想法不错。可是，不现实。'] },
    { id: 'con-todo', es: 'con todo', zh: '尽管如此', pos: 'phr', level: 'C1', tags: ['func'], ex: ['Con todo, mereció la pena.', '尽管如此，还是值得的。'] },
    { id: 'eso-si', es: 'eso sí', zh: '不过（附加条件）', pos: 'phr', level: 'C1', tags: ['func'], ex: ['Es muy buen restaurante; eso sí, es carísimo.', '这家餐馆很好；不过，贵得要命。'] },
    { id: 'por-el-contrario', es: 'por el contrario', zh: '相反', pos: 'phr', level: 'C1', tags: ['func'], ex: ['No me molesta; por el contrario, me alegra.', '这并不让我烦；相反，我很高兴。'] },
    { id: 'por-ende', es: 'por ende', zh: '因此（很书面）', pos: 'phr', level: 'C1', tags: ['func'], ex: ['Es un recurso escaso y, por ende, valioso.', '这是稀缺资源，因此很珍贵。'] },
    { id: 'asi-pues', es: 'así pues', zh: '因此；那么', pos: 'phr', level: 'C1', tags: ['func'], ex: ['Así pues, empezaremos mañana.', '那么，我们明天开始。'] },
    { id: 'en-consecuencia', es: 'en consecuencia', zh: '因此', pos: 'phr', level: 'C1', tags: ['func'], ex: ['No se presentó; en consecuencia, perdió la plaza.', '他没来，因此失去了名额。'] },
    { id: 'esto-es', es: 'esto es', zh: '即；也就是', pos: 'phr', level: 'C1', tags: ['func'], ex: ['El 1 de enero, esto es, Año Nuevo.', '1 月 1 日，也就是新年。'] },
    { id: 'a-saber', es: 'a saber', zh: '即（引出列举）', pos: 'phr', level: 'C1', tags: ['func'], ex: ['Hay tres causas, a saber: la crisis, el paro y la inflación.', '有三个原因，即：危机、失业和通胀。'] },
    { id: 'mejor-dicho', es: 'mejor dicho', zh: '更确切地说；不对', pos: 'phr', level: 'C1', tags: ['func'], ex: ['Somos cinco; mejor dicho, seis.', '我们五个人；不对，六个。'] },
    { id: 'mas-bien', es: 'más bien', zh: '与其说……不如说', pos: 'phr', level: 'C1', tags: ['func'], ex: ['No está enfadado; más bien triste.', '与其说他生气，不如说他难过。'] },
    { id: 'en-fin', es: 'en fin', zh: '总之；算了', pos: 'phr', level: 'C1', tags: ['func'], ex: ['En fin, mañana será otro día.', '算了，明天又是新的一天。'] },
    { id: 'total', es: 'total', zh: '总之（口语）；总的', pos: 'adv', level: 'C1', tags: ['func'], ex: ['Total, que no vino nadie.', '总之，谁也没来。'] },
    { id: 'en-resumidas-cuentas', es: 'en resumidas cuentas', zh: '总而言之', pos: 'phr', level: 'C1', tags: ['func'], ex: ['En resumidas cuentas, fue un fracaso.', '总而言之，这是一次失败。'] },
    { id: 'vamos-marcador', es: 'vamos', zh: '说白了；就是说（口语标记）', pos: 'interj', level: 'C1', tags: ['func'], ex: ['Es lejos; vamos, lejísimos.', '很远；说白了，远得要命。'] },
    { id: 'venga', es: 'venga', zh: '快点；好的；加油（口语）', pos: 'interj', level: 'C1', tags: ['func'], ex: ['—¿Nos vemos a las ocho? —¡Venga!', '——八点见？——好嘞！'] },
    { id: 'vaya', es: 'vaya', zh: '哎呀（惊讶、失望）', pos: 'interj', level: 'C1', tags: ['feel'], ex: ['¡Vaya! Ha empezado a llover.', '哎呀！下雨了。'] },
    { id: 'anda', es: 'anda', zh: '哎呀；不会吧；拜托（口语）', pos: 'interj', level: 'C1', tags: ['feel'], ex: ['¡Anda! ¡Qué casualidad!', '哎呀！真巧！'] },
    { id: 'oye', es: 'oye', zh: '喂；听我说', pos: 'interj', level: 'C1', tags: ['greet'], ex: ['Oye, ¿tienes un minuto?', '喂，你有一分钟吗？'] },
    { id: 'mira', es: 'mira', zh: '你看；听我说', pos: 'interj', level: 'C1', tags: ['greet'], ex: ['Mira, te voy a ser sincero.', '听我说，我跟你实话实说。'] },
    { id: 'a-ver', es: 'a ver', zh: '我们看看；那么', pos: 'phr', level: 'C1', tags: ['func'], ex: ['A ver, ¿quién ha sido?', '那么，是谁干的？'] },
    { id: 'en-plan', es: 'en plan', zh: '像是；比如（年轻人口语）', pos: 'phr', level: 'C1', tags: ['func'], ex: ['Me habló en plan jefe.', '他用一副老板的腔调跟我说话。'] },
    { id: 'pues', es: 'pues', zh: '那么；嗯；因为', pos: 'conj', level: 'C1', tags: ['func'], ex: ['—¿Vienes? —Pues no sé.', '——你来吗？——嗯，不知道。'] },
    { id: 'plenitud', es: 'plenitud', zh: '充实；圆满', pos: 'n', g: 'f', level: 'C1', tags: ['feel'], ex: ['Vive con plenitud cada momento.', '他充实地过好每一刻。'] },
    { id: 'satisfaccion', es: 'satisfacción', zh: '满足', pos: 'n', g: 'f', level: 'C1', tags: ['feel'], ex: ['Siento una gran satisfacción.', '我感到非常满足。'] },
    { id: 'sentido-de-la-vida', es: 'sentido de la vida', zh: '人生的意义', pos: 'n', g: 'm', level: 'C1', tags: ['feel'], ex: ['¿Cuál es el sentido de la vida?', '人生的意义是什么？'] },
    { id: 'proposito', es: 'propósito', zh: '目的；决心', pos: 'n', g: 'm', level: 'C1', tags: ['feel'], ex: ['Tener un propósito da sentido a la vida.', '有目标会让生活有意义。'], note: 'a propósito = 故意地；顺便说。' },
    { id: 'placer', es: 'placer', zh: '快乐；乐趣', pos: 'n', g: 'm', pl: 'placeres', level: 'C1', tags: ['feel'], ex: ['Leer es uno de mis mayores placeres.', '阅读是我最大的乐趣之一。'] },
    { id: 'sufrimiento', es: 'sufrimiento', zh: '痛苦', pos: 'n', g: 'm', level: 'C1', tags: ['feel'], ex: ['El sufrimiento también enseña.', '痛苦也能教会人东西。'] },
    { id: 'serenidad', es: 'serenidad', zh: '平静；安详', pos: 'n', g: 'f', level: 'C1', tags: ['feel'], ex: ['Afrontó la noticia con serenidad.', '他平静地接受了这个消息。'] },
    { id: 'armonia', es: 'armonía', zh: '和谐', pos: 'n', g: 'f', level: 'C1', tags: ['feel'], ex: ['Viven en armonía con la naturaleza.', '他们与自然和谐相处。'] },
    { id: 'sencillez', es: 'sencillez', zh: '简单；朴素', pos: 'n', g: 'f', level: 'C1', tags: ['feel'], ex: ['Me gusta la sencillez de su estilo.', '我喜欢他风格的朴素。'] },
    { id: 'filosofo', es: 'filósofo', zh: '哲学家', pos: 'n', g: 'm', f: 'filósofa', level: 'C1', tags: ['people'], ex: ['Séneca fue un filósofo nacido en Córdoba.', '塞内卡是一位出生在科尔多瓦的哲学家。'] },
    { id: 'filosofia', es: 'filosofía', zh: '哲学；人生态度', pos: 'n', g: 'f', level: 'C1', tags: ['school'], ex: ['Su filosofía es vivir el presente.', '他的人生态度是活在当下。'] },
    { id: 'reflexion', es: 'reflexión', zh: '思考；反思', pos: 'n', g: 'f', pl: 'reflexiones', level: 'C1', tags: ['func'], ex: ['El libro invita a la reflexión.', '这本书引人深思。'] },
    { id: 'introspeccion', es: 'introspección', zh: '内省', pos: 'n', g: 'f', level: 'C1', tags: ['feel'], ex: ['Los viajes largos favorecen la introspección.', '长途旅行有助于内省。'] },
    { id: 'efimero', es: 'efímero', zh: '短暂的', pos: 'adj', f: 'efímera', level: 'C1', tags: ['feel'], ex: ['La fama es efímera.', '名声是短暂的。'], ety: '希腊语 ephemeros「只持续一天的」。' },
    { id: 'duradero', es: 'duradero', zh: '持久的', pos: 'adj', f: 'duradera', level: 'C1', tags: ['feel'], ex: ['Buscamos una solución duradera.', '我们在寻找一个长久的解决办法。'] },
    { id: 'pleno', es: 'pleno', zh: '充分的；在……正中', pos: 'adj', f: 'plena', level: 'C1', tags: ['feel'], ex: ['Estamos en pleno verano.', '我们正值盛夏。'] },
    { id: 'dicha', es: 'dicha', zh: '幸福；福气（文雅）', pos: 'n', g: 'f', level: 'C1', tags: ['feel'], ex: ['Nunca había sentido tanta dicha.', '我从未感到如此幸福。'] },
    { id: 'dichoso', es: 'dichoso', zh: '幸福的；（口语）讨厌的', pos: 'adj', f: 'dichosa', level: 'C1', tags: ['feel'], ex: ['¡Este dichoso ordenador no funciona!', '这台讨厌的电脑又坏了！'], note: '口语里常带反讽：el dichoso móvil = 那该死的手机。' },
    { id: 'hedonismo', es: 'hedonismo', zh: '享乐主义', pos: 'n', g: 'm', level: 'C1', tags: ['feel'], ex: ['El hedonismo busca el placer como fin.', '享乐主义把快乐作为目的。'] },
  ],
  sentences: [
    { id: 's1', es: 'No me gusta. Es más, me parece horrible.', zh: '我不喜欢。不仅如此，我觉得它很难看。', g: ['c1-marcadores-argumentativos'] },
    { id: 's2', es: 'El plan es bueno. Ahora bien, ¿quién lo va a pagar?', zh: '计划不错。可是，谁来出钱呢？', g: ['c1-marcadores-argumentativos'] },
    { id: 's3', es: 'Hubo muchos problemas. Con todo, el resultado fue positivo.', zh: '问题很多。尽管如此，结果还是好的。', g: ['c1-marcadores-argumentativos'] },
    { id: 's4', es: 'Puedes ir. Eso sí, vuelve antes de las doce.', zh: '你可以去。不过，十二点前得回来。', g: ['c1-marcadores-argumentativos'] },
    { id: 's5', es: 'Es un recurso escaso y, por ende, valioso.', zh: '这是稀缺资源，因此很珍贵。', g: ['c1-marcadores-argumentativos'] },
    { id: 's6', es: 'No tengo dinero, o sea, que no voy.', zh: '我没钱，也就是说，我不去了。', g: ['c1-reformuladores'] },
    { id: 's7', es: 'Vendrá el lunes; mejor dicho, el martes.', zh: '他周一来；不对，是周二。', g: ['c1-reformuladores'] },
    { id: 's8', es: 'No es tímido; más bien es reservado.', zh: '与其说他害羞，不如说他内敛。', g: ['c1-reformuladores'] },
    { id: 's9', es: 'En fin, ¿qué le vamos a hacer?', zh: '算了，又能怎么样呢？', g: ['c1-reformuladores'] },
    { id: 's10', es: 'Total, que al final no fuimos a ningún sitio.', zh: '总之，最后我们哪儿也没去。', g: ['c1-reformuladores'] },
    { id: 's11', es: '—¿Qué tal el examen? —Pues bien, creo que he aprobado.', zh: '——考得怎么样？——嗯，还行，我觉得过了。', g: ['c1-marcadores-conversacionales'] },
    { id: 's12', es: 'Es caro; vamos, carísimo.', zh: '很贵；说白了，贵得离谱。', g: ['c1-marcadores-conversacionales'] },
    { id: 's13', es: '¡Venga, que llegamos tarde!', zh: '快点，我们要迟到了！', g: ['c1-marcadores-conversacionales'] },
    { id: 's14', es: '¡Anda! ¿Tú por aquí?', zh: '哎呀！你怎么在这儿？', g: ['c1-marcadores-conversacionales'] },
    { id: 's15', es: 'A ver, ¿qué ha pasado exactamente?', zh: '我们来看看，到底发生了什么？', g: ['c1-marcadores-conversacionales'] },
    { id: 's16', es: 'La fama es efímera.', zh: '名声是短暂的。' },
    { id: 's17', es: 'Leer es uno de mis mayores placeres.', zh: '阅读是我最大的乐趣之一。' },
    { id: 's18', es: 'El libro invita a la reflexión.', zh: '这本书引人深思。' },
    { id: 's19', es: 'Hay tres causas, a saber: la crisis, el paro y la inflación.', zh: '有三个原因，即：危机、失业和通胀。', g: ['c1-reformuladores'] },
    { id: 's20', es: 'No me molesta; por el contrario, me alegra.', zh: '这并不让我烦；相反，我很高兴。', g: ['c1-marcadores-argumentativos'] },
    { id: 's21', es: 'Oye, ¿tienes un minuto?', zh: '喂，你有一分钟吗？', g: ['c1-marcadores-conversacionales'] },
    { id: 's22', es: 'Afrontó la noticia con serenidad.', zh: '他平静地接受了这个消息。' },
    { id: 's23', es: 'Mira, te voy a ser sincero.', zh: '听我说，我跟你实话实说。', g: ['c1-marcadores-conversacionales'] },
    { id: 's24', es: 'En resumidas cuentas, fue un éxito.', zh: '总而言之，这是一次成功。', g: ['c1-reformuladores'] },
    { id: 's25', es: '¡Este dichoso ordenador no funciona!', zh: '这台讨厌的电脑又坏了！' },
  ],
  cloze: [
    { id: 'c1', text: 'No es caro. ___, es una ganga.', answers: ['Es más'], options: ['Es más', 'Ahora bien', 'Mejor dicho'], zh: '不贵。不仅如此，还很划算。', g: ['c1-marcadores-argumentativos'] },
    { id: 'c2', text: 'La propuesta es interesante. ___, es demasiado cara.', answers: ['Ahora bien'], options: ['Ahora bien', 'Es más', 'Así pues'], zh: '这个提议很有意思。可是太贵了。', g: ['c1-marcadores-argumentativos'] },
    { id: 'c3', text: 'Fue un viaje agotador. Con ___, mereció la pena.', answers: ['todo'], options: ['todo', 'eso', 'más'], zh: '旅途很累。尽管如此，还是值得的。', g: ['c1-marcadores-argumentativos'] },
    { id: 'c4', text: 'Puedes usar mi coche; eso ___, llénale el depósito.', answers: ['sí'], options: ['sí', 'si', 'es'], zh: '你可以用我的车；不过，要把油加满。', g: ['c1-marcadores-argumentativos'] },
    { id: 'c5', text: 'El norte es lluvioso; por el ___, el sur es muy seco.', answers: ['contrario'], options: ['contrario', 'cambio', 'otro'], zh: '北方多雨；相反，南方很干燥。', g: ['c1-marcadores-argumentativos'] },
    { id: 'c6', text: 'Las pruebas son claras; por ___, el acusado es culpable.', answers: ['ende'], options: ['ende', 'ello que', 'tanto que'], zh: '证据很清楚；因此，被告有罪。', g: ['c1-marcadores-argumentativos'] },
    { id: 'c7', text: 'Llegará en un lustro, es ___, en cinco años.', answers: ['decir'], options: ['decir', 'más', 'sea'], zh: '他五年后，也就是一个“五年期”之后到。', g: ['c1-reformuladores'] },
    { id: 'c8', text: 'Te llamo el jueves; mejor ___, el viernes.', answers: ['dicho'], options: ['dicho', 'decir', 'bien'], zh: '我周四给你打电话；不对，是周五。', g: ['c1-reformuladores'] },
    { id: 'c9', text: 'No está enfadada; más ___ está cansada.', answers: ['bien'], options: ['bien', 'mejor', 'dicho'], zh: '与其说她生气，不如说她累了。', g: ['c1-reformuladores'] },
    { id: 'c10', text: '___, que al final nos quedamos en casa.', answers: ['Total'], options: ['Total', 'Todo', 'Final'], zh: '总之，最后我们待在家里了。', g: ['c1-reformuladores'] },
    { id: 'c11', text: 'En ___, mañana será otro día.', answers: ['fin'], options: ['fin', 'final', 'todo'], zh: '算了，明天又是新的一天。', g: ['c1-reformuladores'] },
    { id: 'c12', text: 'No sé si vendrá. En cualquier ___, le guardamos un sitio.', answers: ['caso'], options: ['caso', 'forma', 'modo'], zh: '不知道他来不来。无论如何，我们给他留个位子。', g: ['c1-reformuladores'] },
    { id: 'c13', text: '—¿Qué tal el viaje? —___ bien, un poco cansado.', answers: ['Pues'], options: ['Pues', 'Porque', 'Pero'], zh: '——旅途怎么样？——嗯，还行，有点累。', g: ['c1-marcadores-conversacionales'] },
    { id: 'c14', text: 'Es lejos; ___, lejísimos.', answers: ['vamos'], options: ['vamos', 'vaya', 'venga'], zh: '很远；说白了，远得要命。', g: ['c1-marcadores-conversacionales'] },
    { id: 'c15', text: '¡___! Se me ha olvidado el paraguas.', answers: ['Vaya'], options: ['Vaya', 'Venga', 'Vamos'], zh: '哎呀！我忘带伞了。', g: ['c1-marcadores-conversacionales'] },
    { id: 'c16', text: '—¿Quedamos a las ocho? —¡___!', answers: ['Venga'], options: ['Venga', 'Vaya', 'Anda'], zh: '——八点见？——好嘞！', g: ['c1-marcadores-conversacionales'] },
    { id: 'c17', text: 'A ___, ¿quién se ha comido mi chocolate?', answers: ['ver'], options: ['ver', 'mirar', 'saber'], zh: '那么，是谁吃了我的巧克力？', g: ['c1-marcadores-conversacionales'] },
    { id: 'c18', text: 'La fama es ___: hoy estás arriba y mañana nadie te recuerda.', answers: ['efímera'], options: ['efímera', 'duradera', 'eterna'], zh: '名声是短暂的：今天你在顶峰，明天就没人记得你了。' },
  ],
  conj: [
    { verbs: ['venir', 'ir', 'andar', 'oír', 'mirar'], tenses: ['imp', 'subj'], g: 'c1-marcadores-conversacionales' },
  ],
  dialogues: [
    {
      id: 'c1-u09-d1',
      title: '咖啡馆里的哲学 · Filosofía de café',
      lines: [
        { who: 'Paula', es: 'Oye, ¿tú eres feliz? Pero de verdad, ¿eh?', zh: '哎，你幸福吗？说真的哦？' },
        { who: 'Wang Lei', es: 'Pues… depende del día. Bueno, en general sí, aunque trabajo demasiado.', zh: '嗯……看哪天吧。好吧，总体来说是幸福的，虽然工作太多。' },
        { who: 'Paula', es: 'A ver, ¿qué es para ti la felicidad? ¿Tener éxito? ¿Dinero?', zh: '那我问你，对你来说幸福是什么？成功？钱？' },
        { who: 'Wang Lei', es: 'No exactamente. Más bien tener tiempo para la gente que quiero. Es más, creo que el éxito sin eso no sirve de mucho.', zh: '不完全是。与其说是那些，不如说是有时间陪我爱的人。不仅如此，我觉得没有这个，成功也没多大用。' },
        { who: 'Paula', es: 'Ya, pero sin dinero tampoco puedes disfrutar mucho, ¿no?', zh: '是啊，可是没钱你也享受不了多少吧？' },
        { who: 'Wang Lei', es: 'Hasta cierto punto. Ahora bien, a partir de un nivel, más dinero no te hace más feliz. Eso sí, un buen café ayuda.', zh: '在一定程度上是。不过，超过某个水平以后，钱再多也不会让你更幸福。当然啦，一杯好咖啡还是有帮助的。' },
        { who: 'Paula', es: '¡Ja, ja! O sea, que la felicidad está en esta taza.', zh: '哈哈！也就是说，幸福就在这杯咖啡里。' },
        { who: 'Wang Lei', es: 'Vamos, en esta taza y en esta conversación. Total, que hoy es un buen día.', zh: '说白了，就在这杯咖啡和这场聊天里。总之，今天是个好日子。' },
      ],
    },
  ],
  readings: [
    {
      id: 'c1-r17',
      level: 'C1',
      title: '¿Qué nos hace felices?',
      titleZh: '是什么让我们幸福？',
      topic: '随笔',
      paras: [
        [
          ['Desde los filósofos griegos hasta los libros de autoayuda, la pregunta por la felicidad atraviesa toda la historia del pensamiento. Ahora bien, ¿qué dice la ciencia?', '从古希腊哲学家到励志书籍，对幸福的追问贯穿了整个思想史。可是，科学怎么说呢？'],
        ],
        [
          ['Uno de los estudios más largos sobre el tema, iniciado en la Universidad de Harvard a finales de los años treinta, lleva décadas siguiendo a cientos de personas a lo largo de su vida. Su conclusión es sorprendentemente sencilla: lo que más influye en nuestro bienestar no es el dinero ni el éxito profesional, sino la calidad de nuestras relaciones.', '关于这个话题历时最长的研究之一，始于三十年代末的哈佛大学，几十年来一直跟踪数百人的一生。它的结论出奇地简单：对我们的幸福感影响最大的，不是金钱，也不是事业成功，而是我们人际关系的质量。'],
          ['Eso no significa que el dinero sea irrelevante. Es más, cuando faltan los recursos básicos, la preocupación económica pesa mucho. Con todo, a partir de cierto nivel de ingresos, el aumento de la riqueza apenas se traduce en más felicidad.', '这并不意味着钱无关紧要。不仅如此，当基本资源匮乏时，经济上的忧虑会让人倍感压力。尽管如此，在收入达到一定水平之后，财富的增加几乎不会转化为更多的幸福。'],
        ],
        [
          ['En definitiva, la felicidad parece depender menos de lo que tenemos que de cómo vivimos y con quién. O, dicho de otro modo, como resumía Séneca hace dos mil años: no es pobre el que tiene poco, sino el que desea más.', '总而言之，幸福似乎更少取决于我们拥有什么，而更多取决于我们如何生活、和谁在一起。换句话说，正如塞内卡两千年前所总结的：贫穷的不是拥有得少的人，而是渴望得更多的人。'],
        ],
      ],
      gloss: { autoayuda: '自助（励志）', atraviesa: '贯穿', 'a lo largo de': '在……的整个过程中', influye: '影响', irrelevante: '无关紧要的', pesa: '让人有压力', 'se traduce': '转化为', 'dicho de otro modo': '换句话说' },
      questions: [
        { type: 'mc', q: '哈佛的研究发现什么对幸福影响最大？', options: ['金钱', '事业成功', '人际关系的质量'], answer: 2 },
        { type: 'tf', q: '文章认为钱完全无关紧要。', answer: false, explain: 'Eso no significa que el dinero sea irrelevante.' },
        { type: 'mc', q: '塞内卡认为谁是穷人？', options: ['拥有得少的人', '渴望得更多的人', '没有工作的人'], answer: 1 },
      ],
    },
    {
      id: 'c1-r18',
      level: 'C1',
      title: 'Transcripción de una tertulia',
      titleZh: '电台座谈实录',
      topic: '口语',
      paras: [
        [
          ['PRESENTADORA: Bueno, pues empezamos. Hoy hablamos de la felicidad en el trabajo. A ver, Andrés, ¿se puede ser feliz trabajando cuarenta horas a la semana?', '主持人：好，那我们开始。今天我们谈谈工作中的幸福感。来，安德烈斯，每周工作四十小时，人能幸福吗？'],
          ['ANDRÉS: Hombre, depende. Si te gusta lo que haces, sí. Ahora bien, si te pasas el día mirando el reloj, vamos, es imposible.', '安德烈斯：哎，看情况。如果你喜欢你做的事，就能。可是，如果你一整天都在看表，说白了，那就不可能。'],
        ],
        [
          ['LUCÍA: Yo no estoy de acuerdo. O sea, el trabajo no tiene por qué hacerte feliz. Es más, creo que es peligroso esperar eso. El trabajo es una parte de la vida, no la vida entera.', '露西亚：我不同意。我的意思是，工作没有义务让你幸福。不仅如此，我觉得抱有这种期待是危险的。工作只是生活的一部分，不是全部。'],
          ['ANDRÉS: Ya, pero pasamos más tiempo en la oficina que con nuestra familia. Eso sí que es un problema.', '安德烈斯：是啊，可我们待在办公室的时间比陪家人的时间还多。这才是真正的问题。'],
        ],
        [
          ['PRESENTADORA: Venga, para terminar, una frase cada uno. Total, que tenemos un minuto.', '主持人：好了，最后每人说一句话。反正我们也只剩一分钟了。'],
          ['LUCÍA: Pues mi frase es: trabaja para vivir, no vivas para trabajar. ANDRÉS: Y la mía: si encuentras un trabajo que te guste, no tendrás que trabajar ni un día de tu vida… o eso dicen.', '露西亚：我的话是：为了生活而工作，别为了工作而生活。安德烈斯：我的是：如果你找到一份喜欢的工作，你这辈子一天都不用“工作”了……至少大家是这么说的。'],
        ],
      ],
      gloss: { tertulia: '座谈', presentadora: '女主持人', hombre: '哎（语气词）', 'no tiene por qué': '没有理由要', 'vida entera': '整个人生', 'eso sí que': '这才是' },
      questions: [
        { type: 'mc', q: '露西亚认为工作应该怎样？', options: ['必须让人幸福', '只是生活的一部分', '比家庭更重要'], answer: 1 },
        { type: 'mc', q: '安德烈斯说的“真正的问题”是什么？', options: ['工资太低', '在办公室的时间比陪家人还多', '老板太严'], answer: 1 },
        { type: 'tf', q: '主持人用“venga”来结束讨论。', answer: true, explain: 'Venga, para terminar, una frase cada uno.' },
      ],
    },
  ],
  writing: [{ id: 'w1', prompt: '写一篇关于“幸福”的随笔（什么让你幸福？钱、工作、关系、自由……）。要求：至少用三个论证标记（es más, ahora bien, con todo, por ende…）和两个重述标记（es decir, mejor dicho, en definitiva…），结构清楚，有个人观点。', words: [180, 250], hints: ['Se suele decir que… Ahora bien, …', 'En mi caso, … Es más, …', 'Con todo, no hay que olvidar que…', 'En definitiva, …'] }],
}
