import type { Unit } from '../types'

export const u10: Unit = {
  id: 'b2-u10',
  level: 'B2',
  order: 10,
  title: '倒霉的意外',
  titleEs: 'Se me olvidó',
  icon: '🙈',
  goals: ['用“意外的 se”说“不小心……了”：se me olvidó, se me cayó', '在宾语提前或强调时正确重复代词：El libro lo compré ayer', '了解 leísmo、laísmo、loísmo 和 se 的各种用法', '讲述生活中的小意外，并为自己开脱'],
  grammar: [
    {
      id: 'b2-se-accidental',
      title: '意外的 se：se me olvidó, se le cayó',
      titleEs: 'El se accidental',
      level: 'B2',
      summary: 'se + 间接宾语代词（me, te, le, nos, os, les）+ 第三人称动词 + 主语（东西）：表示“不小心、非故意”。动词和东西保持单复数一致：Se me olvidó la llave. Se me olvidaron las llaves.',
      body: `### 结构
**se + me / te / le / nos / os / les + 动词（第三人称）+ 东西**

| 例句 | 意思 |
|---|---|
| *Se **me** olvid**ó** la cartera.* | 我（不小心）忘了带钱包。 |
| *Se **me** olvid**aron** las llaves.* | 我忘了带钥匙。（复数） |
| *Se **le** cayó el vaso.* | 他把杯子摔了。 |
| *Se **nos** rompió el coche en la autopista.* | 我们的车在高速上坏了。 |
| *Se **te** ha manchado la camisa.* | 你的衬衫弄脏了。 |
| *Se **me** acabó la batería.* | 我手机没电了。 |
| *Se **me** ocurrió una idea.* | 我突然想到一个主意。 |

### 和普通说法比较
- *Rompí el vaso.*（我打碎了杯子——可能是故意的）
- *Se me rompió el vaso.*（杯子在我手里碎了——不是我的错！）

西班牙人很爱用这种说法：它把责任推给了“东西”。

### 顺序：se 永远在最前面
❌ *Me se cayó.* ✅ ***Se me** cayó.*`,
      examples: [
        ['Se me olvidó la cartera en casa.', '我把钱包忘在家里了。'],
        ['Se me olvidaron las llaves.', '我忘了带钥匙。'],
        ['A Lucas se le cayó el móvil al río.', '卢卡斯的手机掉进河里了。'],
        ['Se nos rompió el coche en la autopista.', '我们的车在高速上坏了。'],
        ['De repente se me ocurrió una idea genial.', '我突然想到一个绝妙的主意。'],
      ],
      tables: [{ verbs: ['caer', 'romper', 'perder'], tense: 'pret' }],
      origin: `这里的 *me, te, le* 在拉丁语法里叫“利害与格”（*dativus incommodi*）：表示 **谁受到了影响**。*Se me rompió el vaso* 字面上是“杯子自己碎了——在我身上”。

中文的“我的杯子碎了”“我把钥匙给忘了”，也常常带着“不是故意的”的意思——西班牙语只是用一个小小的 *se* 把它语法化了。`,
      pitfalls: ['❌ *Me se cayó.* ✅ *Se me cayó.*', '❌ *Se me olvidó las llaves.* ✅ *Se me olvidaron las llaves.*：动词和东西一致。', '❌ *Me olvidé las llaves.*（口语常见但不规范）✅ *Se me olvidaron las llaves.* / *Olvidé las llaves.*'],
    },
    {
      id: 'b2-duplicacion',
      title: '宾语前置和代词重复',
      titleEs: 'Duplicación de los complementos',
      level: 'B2',
      summary: '直接宾语放在动词前面时，必须用代词重复：El libro lo compré ayer. 间接宾语几乎总是重复：Le di el regalo a mi madre. A mí me parece…',
      body: `### 直接宾语提前 → 必须重复
想强调“话题”时，把宾语放到句首，后面一定要用 *lo / la / los / las*：
| 正常语序 | 宾语提前 |
|---|---|
| *Compré el libro ayer.* | *El libro **lo** compré ayer.* |
| *Ya he visto esa película.* | *Esa película ya **la** he visto.* |
| *No conozco a tus primos.* | *A tus primos no **los** conozco.* |

### 间接宾语 → 几乎总是重复
即使间接宾语在动词后面，口语和书面语都习惯加 *le / les*：
- ***Le** di el regalo **a mi madre**.*
- ***Les** he dicho **a los niños** que se acuesten.*
- ***A mí me** parece bien. **A ti te** toca.*（强调人称时）

### todo 作宾语时也要重复
*Lo sé **todo**.*　*Me **lo** ha contado **todo**.*

### 中文对比
中文说“那本书我昨天买了”，不需要再加“它”；西班牙语一定要说 *El libro **lo** compré ayer*。`,
      examples: [
        ['El libro lo compré ayer.', '那本书我昨天买的。'],
        ['Esa película ya la he visto.', '那部电影我已经看过了。'],
        ['Le di el regalo a mi madre.', '我把礼物给了我妈。'],
        ['A tus primos no los conozco.', '你的表兄弟我不认识。'],
        ['Me lo ha contado todo.', '他把一切都告诉我了。'],
      ],
      origin: `西班牙语的宾语代词来自拉丁语的指示词 *ille*「那个」：*illum → lo*，*illam → la*，*illi → le*。拉丁语里并没有“重复宾语”的习惯；这是西班牙语在中世纪以后慢慢发展出来的，今天的拉美西语甚至比西班牙更爱重复。`,
      pitfalls: ['❌ *El libro compré ayer.* ✅ *El libro lo compré ayer.*', '❌ *A María vi en el parque.* ✅ *A María la vi en el parque.*', '❌ *A mí parece bien.* ✅ *A mí me parece bien.*'],
    },
    {
      id: 'b2-leismo-se',
      title: 'leísmo、laísmo、loísmo 和 se 的七种用法',
      titleEs: 'Leísmo, laísmo y los valores de se',
      level: 'B2',
      summary: '规范用法：lo / la 作直接宾语，le 作间接宾语。西班牙中北部常用 le 指男性人（A Juan le vi），RAE 接受；用 la 作间接宾语（laísmo）和用 lo 作间接宾语（loísmo）不规范。',
      body: `### 标准用法
| | 阳性 | 阴性 |
|---|---|---|
| 直接宾语 | *lo / los* | *la / las* |
| 间接宾语 | *le / les* | *le / les* |

### 三个“-ismo”
| 现象 | 例句 | 规范吗？ |
|---|---|---|
| **leísmo**（男性人作直接宾语用 *le*） | *A Juan **le** vi ayer.* | 单数 **可以接受**（西班牙常见） |
| leísmo（指物） | ~~*El coche **le** aparqué ahí.*~~ | ❌ 应为 *lo* |
| **laísmo**（阴性间接宾语用 *la*） | ~~***La** dije que viniera.*~~ | ❌ 应为 *Le dije* |
| **loísmo**（阳性间接宾语用 *lo*） | ~~***Lo** di un regalo.*~~ | ❌ 应为 *Le di* |

> 在马德里和卡斯蒂利亚的口语里，常能听到 laísmo（*la dije*），但书面语和考试中一定要避免。

### se 的七种用法（总复习）
| 用法 | 例句 |
|---|---|
| 反身 | *Se lava las manos.* |
| 相互 | *Se quieren mucho.* |
| 代词式动词 | *Se fue. Se queda. Se arrepiente.* |
| 替代 le | *Se lo di.* |
| 无人称 | *Se vive bien aquí.* |
| 被动 | *Se venden pisos.* |
| 意外 | *Se me rompió.* |`,
      examples: [
        ['A Juan le vi ayer en el metro.', '我昨天在地铁里看到胡安了。'],
        ['Le dije a María que viniera.', '我让玛丽亚过来。'],
        ['El coche lo aparqué en la esquina.', '车我停在拐角了。'],
        ['Mis padres se quieren mucho.', '我父母很相爱。'],
        ['Se lo di a mi hermano.', '我把它给了我哥。'],
      ],
      origin: `为什么会有 leísmo？拉丁语靠 **格**（宾格 *illum*、与格 *illi*）来区分直接和间接宾语；而说西班牙语的人越来越在乎 **人还是物**、**男还是女**。于是在卡斯蒂利亚，人们开始用 *le* 专门指“男性的人”，用 *lo* 指“物”——一种新的区分方式代替了旧的格。

RAE 的态度很务实：用得太广、历史太久的 *le*（指男性单数人）被接受了；但 laísmo 和 loísmo 仍被视为不规范。`,
      pitfalls: ['❌ *La dije que viniera.* ✅ *Le dije que viniera.*', '❌ *El libro le leí ayer.* ✅ *El libro lo leí ayer.*（指物不能用 le）', '❌ *Lo di un beso.* ✅ *Le di un beso.*'],
      latam: '拉美基本没有 leísmo：*A Juan **lo** vi ayer.* 这也是最“安全”的用法——学习者用 *lo / la* 作直接宾语永远不会错。',
    },
  ],
  words: [
    { id: 'mancha', es: 'mancha', zh: '污渍；斑点', pos: 'n', g: 'f', level: 'B2', tags: ['home'], ex: ['Tienes una mancha de café en la camisa.', '你衬衫上有块咖啡渍。'] },
    { id: 'derramar', es: 'derramar', zh: '洒出；溢出', pos: 'v', level: 'B2', tags: ['verb', 'home'], ex: ['Se me derramó el vino en el mantel.', '我把酒洒在桌布上了。'] },
    { id: 'volcar', es: 'volcar', zh: '打翻；翻车', pos: 'v', level: 'B2', tags: ['verb'], ex: ['El camión volcó en la curva.', '卡车在弯道翻了。'], note: 'o→ue：vuelco，c→qu：volqué。' },
    { id: 'estropearse', es: 'estropearse', zh: '坏掉', pos: 'v', level: 'B2', tags: ['verb', 'home'], ex: ['Se nos ha estropeado la lavadora.', '我们的洗衣机坏了。'] },
    { id: 'averiarse', es: 'averiarse', zh: '出故障', pos: 'v', level: 'B2', tags: ['verb', 'travel'], ex: ['El tren se averió a mitad de camino.', '火车半路出了故障。'], note: '重音：se avería。' },
    { id: 'pincharse', es: 'pincharse', zh: '扎破；（轮胎）爆胎', pos: 'v', level: 'B2', tags: ['verb', 'travel'], ex: ['Se nos pinchó una rueda.', '我们的一个轮胎爆了。'] },
    { id: 'pinchazo', es: 'pinchazo', zh: '扎孔；爆胎', pos: 'n', g: 'm', level: 'B2', tags: ['travel'], ex: ['Tuvimos un pinchazo en la autopista.', '我们在高速上爆胎了。'] },
    { id: 'cortarse', es: 'cortarse', zh: '割伤；（电、水）断', pos: 'v', level: 'B2', tags: ['verb', 'body'], ex: ['Me corté con el cuchillo.', '我被刀割伤了。'] },
    { id: 'escaparse', es: 'escaparse', zh: '逃走；（不小心）溜走', pos: 'v', level: 'B2', tags: ['verb'], ex: ['Se me escapó el autobús por un minuto.', '我差一分钟没赶上公交车。'] },
    { id: 'acabarse', es: 'acabarse', zh: '用完；结束', pos: 'v', level: 'B2', tags: ['verb'], ex: ['Se nos ha acabado la leche.', '我们的牛奶喝完了。'] },
    { id: 'agotarse', es: 'agotarse', zh: '耗尽；售罄', pos: 'v', level: 'B2', tags: ['verb'], ex: ['Se agotaron las entradas en una hora.', '票一小时就卖光了。'] },
    { id: 'ocurrirse', es: 'ocurrirse', zh: '（念头）突然想到', pos: 'v', level: 'B2', tags: ['verb'], ex: ['¿Cómo se te ocurrió esa idea?', '你怎么想到这个主意的？'], note: '用法：se me ocurre / se me ocurrió + 主意。' },
    { id: 'pasarse', es: 'pasarse', zh: '（时间）过去；忘记；做过头', pos: 'v', level: 'B2', tags: ['verb'], ex: ['Se me pasó llamarte.', '我忘了给你打电话。'], note: 'Te has pasado = 你过分了。' },
    { id: 'hacerse-tarde', es: 'hacerse tarde', zh: '时间不早了；（不知不觉）晚了', pos: 'phr', level: 'B2', tags: ['time'], ex: ['Se me hizo tarde y perdí el tren.', '一不留神就晚了，我错过了火车。'] },
    { id: 'olvidadizo', es: 'olvidadizo', zh: '健忘的', pos: 'adj', f: 'olvidadiza', level: 'B2', tags: ['feel'], ex: ['Con la edad me he vuelto olvidadizo.', '上了年纪我变得健忘了。'] },
    { id: 'distraido', es: 'distraído', zh: '心不在焉的', pos: 'adj', f: 'distraída', level: 'B2', tags: ['feel'], ex: ['Iba distraído y se chocó con una farola.', '他走路心不在焉，撞到了路灯柱。'] },
    { id: 'descuidado', es: 'descuidado', zh: '粗心的；不修边幅的', pos: 'adj', f: 'descuidada', level: 'B2', tags: ['feel'], ex: ['Es muy descuidado con sus cosas.', '他对自己的东西很不上心。'] },
    { id: 'patoso', es: 'patoso', zh: '笨手笨脚的（口语）', pos: 'adj', f: 'patosa', level: 'B2', tags: ['feel'], ex: ['¡Qué patosa soy! Se me ha caído otra vez.', '我真是笨手笨脚！又掉了。'], ety: '来自 pato「鸭子」：像鸭子一样走路摇摇晃晃。' },
    { id: 'cristal', es: 'cristal', zh: '玻璃；水晶', pos: 'n', g: 'm', pl: 'cristales', level: 'B2', tags: ['home'], ex: ['Se rompió el cristal de la ventana.', '窗户玻璃碎了。'] },
    { id: 'anicos', es: 'añicos', zh: '碎片', pos: 'n', g: 'm', level: 'B2', tags: ['home'], ex: ['El jarrón se hizo añicos.', '花瓶摔得粉碎。'], note: '只用复数：hacerse añicos = 摔得粉碎。' },
    { id: 'pegamento', es: 'pegamento', zh: '胶水', pos: 'n', g: 'm', level: 'B2', tags: ['home'], ex: ['Lo arreglé con pegamento.', '我用胶水把它粘好了。'] },
    { id: 'arreglo', es: 'arreglo', zh: '修理；安排', pos: 'n', g: 'm', level: 'B2', tags: ['home'], ex: ['Esto no tiene arreglo.', '这没救了。'] },
    { id: 'llavero', es: 'llavero', zh: '钥匙扣', pos: 'n', g: 'm', level: 'B2', tags: ['home'], ex: ['Se me perdió el llavero con todas las llaves.', '我把钥匙串连同所有钥匙都弄丢了。'] },
    { id: 'cerrajero', es: 'cerrajero', zh: '锁匠', pos: 'n', g: 'm', f: 'cerrajera', level: 'B2', tags: ['job'], ex: ['Tuvimos que llamar a un cerrajero.', '我们只好叫了锁匠。'] },
    { id: 'grua', es: 'grúa', zh: '拖车；起重机', pos: 'n', g: 'f', level: 'B2', tags: ['travel'], ex: ['La grúa se llevó mi coche.', '拖车把我的车拖走了。'] },
    { id: 'repuesto', es: 'repuesto', zh: '备用品；零件', pos: 'n', g: 'm', level: 'B2', tags: ['travel'], ex: ['Siempre llevo un cargador de repuesto.', '我总是带一个备用充电器。'] },
    { id: 'rueda-de-repuesto', es: 'rueda de repuesto', zh: '备胎', pos: 'n', g: 'f', level: 'B2', tags: ['travel'], ex: ['La rueda de repuesto está en el maletero.', '备胎在后备厢里。'] },
    { id: 'contratiempo', es: 'contratiempo', zh: '意外的麻烦', pos: 'n', g: 'm', level: 'B2', tags: ['func'], ex: ['Tuvimos un pequeño contratiempo.', '我们遇到了一点小麻烦。'] },
    { id: 'imprevisto', es: 'imprevisto', zh: '意外情况', pos: 'n', g: 'm', level: 'B2', tags: ['func'], ex: ['Me ha surgido un imprevisto.', '我这边突然有点事。'] },
    { id: 'percance', es: 'percance', zh: '小事故', pos: 'n', g: 'm', level: 'B2', tags: ['func'], ex: ['Sufrió un percance con la bici.', '他骑车出了点小意外。'] },
    { id: 'apuro', es: 'apuro', zh: '窘境；为难', pos: 'n', g: 'm', level: 'B2', tags: ['feel'], ex: ['Me sacaste de un apuro.', '你帮我解了围。'], note: 'Me da apuro = 我不好意思。' },
    { id: 'hacer-el-ridiculo', es: 'hacer el ridículo', zh: '出洋相', pos: 'phr', level: 'B2', tags: ['feel'], ex: ['Hice el ridículo delante de todos.', '我在大家面前出了洋相。'] },
    { id: 'meter-la-pata', es: 'meter la pata', zh: '说错话；搞砸', pos: 'phr', level: 'B2', tags: ['feel'], ex: ['¡He metido la pata! Le he contado lo de la fiesta sorpresa.', '我搞砸了！我把惊喜派对的事告诉他了。'], ety: '字面：“把腿伸进去”——像动物一脚踩进陷阱。' },
    { id: 'desastre', es: 'desastre', zh: '灾难；一团糟', pos: 'n', g: 'm', level: 'B2', tags: ['func'], ex: ['¡Qué desastre de día!', '真是糟糕透顶的一天！'], ety: '意大利语 disastro：dis-「不好的」+ astro「星星」——“星象不吉”。' },
    { id: 'caos', es: 'caos', zh: '混乱', pos: 'n', g: 'm', level: 'B2', tags: ['func'], ex: ['El aeropuerto era un caos.', '机场一片混乱。'] },
    { id: 'resbalar', es: 'resbalar', zh: '滑倒；打滑', pos: 'v', level: 'B2', tags: ['verb'], ex: ['Resbalé en el suelo mojado.', '我在湿地板上滑了一跤。'] },
    { id: 'resbaladizo', es: 'resbaladizo', zh: '滑的', pos: 'adj', f: 'resbaladiza', level: 'B2', tags: ['adj'], ex: ['Cuidado, el suelo está resbaladizo.', '小心，地很滑。'] },
    { id: 'atascarse', es: 'atascarse', zh: '卡住；堵住', pos: 'v', level: 'B2', tags: ['verb'], ex: ['Se me ha atascado la cremallera.', '我的拉链卡住了。'] },
    { id: 'cremallera', es: 'cremallera', zh: '拉链', pos: 'n', g: 'f', level: 'B2', tags: ['clothes'], ex: ['Súbete la cremallera.', '把拉链拉上。'], latam: '拉美多说 cierre 或 zíper。' },
    { id: 'quedarse-sin', es: 'quedarse sin', zh: '……用完了；没有了', pos: 'phr', level: 'B2', tags: ['func'], ex: ['Me quedé sin dinero en mitad del viaje.', '旅行到一半我钱花光了。'] },
    { id: 'por-los-pelos', es: 'por los pelos', zh: '差一点；险些', pos: 'phr', level: 'B2', tags: ['func'], ex: ['Cogí el tren por los pelos.', '我差点没赶上火车。'] },
    { id: 'menos-mal', es: 'menos mal', zh: '幸好；还好', pos: 'phr', level: 'B2', tags: ['feel'], ex: ['¡Menos mal que llevabas paraguas!', '幸好你带了伞！'] },
  ],
  sentences: [
    { id: 's1', es: 'Se me olvidó la cartera en casa.', zh: '我把钱包忘在家里了。', g: ['b2-se-accidental'], distract: ['Me'] },
    { id: 's2', es: 'Se me olvidaron las llaves.', zh: '我忘了带钥匙。', g: ['b2-se-accidental'], distract: ['olvidó'] },
    { id: 's3', es: 'A Lucas se le cayó el móvil al río.', zh: '卢卡斯的手机掉进河里了。', g: ['b2-se-accidental'] },
    { id: 's4', es: 'Se nos rompió el coche en la autopista.', zh: '我们的车在高速上坏了。', g: ['b2-se-accidental'] },
    { id: 's5', es: 'De repente se me ocurrió una idea genial.', zh: '我突然想到一个绝妙的主意。', g: ['b2-se-accidental'] },
    { id: 's6', es: 'El libro lo compré ayer.', zh: '那本书我昨天买的。', g: ['b2-duplicacion'] },
    { id: 's7', es: 'Esa película ya la he visto.', zh: '那部电影我已经看过了。', g: ['b2-duplicacion'] },
    { id: 's8', es: 'Le di el regalo a mi madre.', zh: '我把礼物给了我妈。', g: ['b2-duplicacion'] },
    { id: 's9', es: 'A tus primos no los conozco.', zh: '你的表兄弟我不认识。', g: ['b2-duplicacion'] },
    { id: 's10', es: 'Me lo ha contado todo.', zh: '他把一切都告诉我了。', g: ['b2-duplicacion'] },
    { id: 's11', es: 'Le dije a María que viniera.', zh: '我让玛丽亚过来。', g: ['b2-leismo-se'], distract: ['La'] },
    { id: 's12', es: 'El coche lo aparqué en la esquina.', zh: '车我停在拐角了。', g: ['b2-leismo-se'], distract: ['le'] },
    { id: 's13', es: 'Mis padres se quieren mucho.', zh: '我父母很相爱。', g: ['b2-leismo-se'] },
    { id: 's14', es: 'Se lo di a mi hermano.', zh: '我把它给了我哥。', g: ['b2-leismo-se'] },
    { id: 's15', es: 'Se nos ha acabado la leche.', zh: '我们的牛奶喝完了。', g: ['b2-se-accidental'] },
    { id: 's16', es: 'Se me hizo tarde y perdí el tren.', zh: '一不留神就晚了，我错过了火车。', g: ['b2-se-accidental'] },
    { id: 's17', es: 'Cogí el tren por los pelos.', zh: '我差点没赶上火车。' },
    { id: 's18', es: '¡He metido la pata!', zh: '我搞砸了！' },
    { id: 's19', es: '¡Menos mal que llevabas paraguas!', zh: '幸好你带了伞！' },
    { id: 's20', es: 'Me ha surgido un imprevisto.', zh: '我这边突然有点事。' },
    { id: 's21', es: 'Cuidado, el suelo está resbaladizo.', zh: '小心，地很滑。' },
    { id: 's22', es: 'Se te ha manchado la camisa.', zh: '你的衬衫弄脏了。', g: ['b2-se-accidental'] },
    { id: 's23', es: 'Se me pasó llamarte.', zh: '我忘了给你打电话。', g: ['b2-se-accidental'] },
    { id: 's24', es: 'A mí me parece una buena idea.', zh: '我觉得这是个好主意。', g: ['b2-duplicacion'] },
    { id: 's25', es: 'El jarrón se hizo añicos.', zh: '花瓶摔得粉碎。' },
  ],
  cloze: [
    { id: 'c1', text: 'Se ___ olvidó el pasaporte. (a mí)', answers: ['me'], options: ['me', 'le', 'se'], zh: '我把护照忘了。', g: ['b2-se-accidental'] },
    { id: 'c2', text: 'Se me ___ las gafas en el tren.', answers: ['olvidaron'], options: ['olvidaron', 'olvidó', 'olvidé'], zh: '我把眼镜忘在火车上了。', g: ['b2-se-accidental'] },
    { id: 'c3', text: 'A mi hermana se ___ cayó el helado al suelo.', answers: ['le'], options: ['le', 'la', 'se'], zh: '我妹妹的冰淇淋掉在地上了。', g: ['b2-se-accidental'] },
    { id: 'c4', text: 'Se nos ___ la batería del coche.', answers: ['acabó'], hint: 'acabar', zh: '我们的车没电了。', g: ['b2-se-accidental'] },
    { id: 'c5', text: '¿Se ___ ha ocurrido algo? (a ti)', answers: ['te'], options: ['te', 'ti', 'tú'], zh: '你想到什么办法了吗？', g: ['b2-se-accidental'] },
    { id: 'c6', text: 'Perdona, se me ___ los platos al fregarlos.', answers: ['rompieron'], hint: 'romper', zh: '抱歉，我洗碗的时候把盘子打碎了。', g: ['b2-se-accidental'] },
    { id: 'c7', text: 'Esta canción ya ___ he escuchado mil veces.', answers: ['la'], options: ['la', 'lo', 'le'], zh: '这首歌我已经听了一千遍了。', g: ['b2-duplicacion'] },
    { id: 'c8', text: 'Los deberes ya ___ he hecho.', answers: ['los'], options: ['los', 'les', 'lo'], zh: '作业我已经做完了。', g: ['b2-duplicacion'] },
    { id: 'c9', text: '___ di las llaves al portero.', answers: ['Le'], options: ['Le', 'Lo', 'La'], zh: '我把钥匙给了门卫。', g: ['b2-duplicacion'] },
    { id: 'c10', text: 'A mis padres ___ encanta viajar.', answers: ['les'], options: ['les', 'los', 'le'], zh: '我父母很喜欢旅行。', g: ['b2-duplicacion'] },
    { id: 'c11', text: 'Me ___ ha contado todo.', answers: ['lo'], options: ['lo', 'le', 'la'], zh: '他把一切都告诉我了。', g: ['b2-duplicacion'] },
    { id: 'c12', text: 'Ayer vi a Ana y ___ dije que viniera a la fiesta.', answers: ['le'], options: ['le', 'la', 'lo'], zh: '我昨天见到安娜，叫她来派对。', g: ['b2-leismo-se'], explain: 'dije 的间接宾语，用 le（用 la 是 laísmo）。' },
    { id: 'c13', text: 'El coche nuevo ___ compramos el mes pasado.', answers: ['lo'], options: ['lo', 'le', 'la'], zh: '新车我们是上个月买的。', g: ['b2-leismo-se'] },
    { id: 'c14', text: '—¿Le has dado el libro a Pedro? —Sí, ya ___ he dado.', answers: ['se lo'], options: ['se lo', 'le lo', 'lo le'], zh: '——你把书给佩德罗了吗？——给了。', g: ['b2-leismo-se'] },
    { id: 'c15', text: 'Juan y Marta ___ conocieron en la universidad.', answers: ['se'], options: ['se', 'les', 'los'], zh: '胡安和玛尔塔是在大学认识的。', g: ['b2-leismo-se'] },
    { id: 'c16', text: 'Cogimos el último tren por los ___.', answers: ['pelos'], options: ['pelos', 'pies', 'dedos'], zh: '我们差点没赶上末班车。' },
    { id: 'c17', text: '¡Menos ___ que no ha llovido!', answers: ['mal'], options: ['mal', 'bien', 'mejor'], zh: '幸好没下雨！' },
    { id: 'c18', text: 'He metido la ___: le he contado el secreto.', answers: ['pata'], options: ['pata', 'mano', 'pierna'], zh: '我搞砸了：把秘密告诉他了。' },
  ],
  conj: [
    { verbs: ['caer', 'romper', 'perder', 'olvidar', 'ocurrir', 'acabar', 'escapar'], tenses: ['pret', 'pperf'], g: 'b2-se-accidental' },
    { verbs: ['volcar', 'resbalar', 'derramar', 'averiarse'], tenses: ['pret'], g: 'b2-se-accidental' },
  ],
  dialogues: [
    {
      id: 'b2-u10-d1',
      title: '一连串的倒霉事 · Todo me sale mal',
      lines: [
        { who: 'Paula', es: '¡Por fin! Llevamos media hora esperándote. ¿Qué te ha pasado?', zh: '终于来了！我们等你半个小时了。你怎么了？' },
        { who: 'Hao', es: 'Ni te lo imaginas. Primero se me hizo tarde porque no sonó el despertador.', zh: '你想都想不到。先是闹钟没响，我起晚了。' },
        { who: 'Paula', es: 'Vaya. ¿Y luego?', zh: '唉。然后呢？' },
        { who: 'Hao', es: 'Al salir de casa se me cayó el café encima de la camisa, así que tuve que volver a cambiarme.', zh: '出门的时候我把咖啡洒在衬衫上了，只好回去换衣服。' },
        { who: 'Paula', es: '¡Qué patoso eres! ¿Y por qué no nos llamaste?', zh: '你真是笨手笨脚！那你怎么不给我们打电话？' },
        { who: 'Hao', es: 'Porque se me había acabado la batería. Y para colmo, el metro se averió entre dos estaciones.', zh: '因为我手机没电了。更倒霉的是，地铁在两站之间出了故障。' },
        { who: 'Paula', es: 'Menos mal que has llegado. Por cierto, ¿has traído las entradas del concierto?', zh: '还好你到了。对了，你带音乐会的票了吗？' },
        { who: 'Hao', es: 'Las entradas… las entradas las dejé encima de la mesa. ¡Se me han olvidado!', zh: '票……票我放在桌子上了。我忘带了！' },
      ],
    },
  ],
  readings: [
    {
      id: 'b2-r19',
      level: 'B2',
      title: 'El día en que todo se me rompió',
      titleZh: '那天我什么都弄坏了',
      topic: '故事',
      paras: [
        [
          ['Aquel lunes empezó mal. Al levantarme, se me enganchó el pie en la sábana y me caí de la cama. «No pasa nada», pensé. Pero solo era el principio.', '那个星期一一开始就不顺。起床时，我的脚被床单缠住，从床上摔了下来。“没事，”我想。但这只是个开始。'],
        ],
        [
          ['En la ducha se me acabó el agua caliente, y al vestirme se me rompió la cremallera del pantalón. Mientras preparaba el desayuno, se me quemaron las tostadas y, al intentar salvarlas, se me cayó la taza favorita de mi abuela, que se hizo añicos.', '洗澡时热水用完了，穿衣服时裤子拉链坏了。准备早餐时面包烤糊了，我想抢救一下，结果把奶奶最喜欢的杯子摔得粉碎。'],
          ['Ya en la calle, se me escapó el autobús por segundos y, cuando por fin llegué a la oficina, me di cuenta de que se me habían olvidado las llaves… dentro de casa.', '到了街上，公交车差几秒开走了。等我终于到了办公室，才发现钥匙忘在家里了……锁在里面。'],
        ],
        [
          ['Esa noche, mientras esperaba al cerrajero sentado en la escalera, se me ocurrió una idea: escribir todo lo que me había pasado. Mis amigos se rieron tanto con la historia que me animaron a publicarla. Hoy tengo un blog sobre desastres cotidianos con miles de seguidores. Menos mal que aquel día todo me salió mal.', '那天晚上，我坐在楼梯上等锁匠时，突然想到一个主意：把发生的一切都写下来。朋友们看了笑得不行，鼓励我发出来。如今我有一个讲日常倒霉事的博客，有好几千粉丝。幸好那天一切都不顺。'],
        ],
      ],
      gloss: { enganchó: '勾住', sábana: '床单', principio: '开始', tostadas: '烤面包片', 'se hizo añicos': '摔得粉碎', 'por segundos': '差几秒', cerrajero: '锁匠', cotidianos: '日常的' },
      questions: [
        { type: 'mc', q: '作者把谁的杯子摔碎了？', options: ['自己的', '奶奶最喜欢的', '室友的'], answer: 1 },
        { type: 'tf', q: '作者把钥匙忘在办公室了。', answer: false, explain: 'se me habían olvidado las llaves… dentro de casa' },
        { type: 'mc', q: '这一天最后带来了什么好结果？', options: ['找到了新工作', '开了一个很受欢迎的博客', '买了新房子'], answer: 1 },
      ],
    },
    {
      id: 'b2-r20',
      level: 'B2',
      title: '¿Le vi o lo vi? El lío de los pronombres',
      titleZh: '是 le vi 还是 lo vi？代词的乱局',
      topic: '语言',
      paras: [
        [
          ['Si viajas por España, notarás que muchas personas dicen «A Juan le vi ayer» en lugar de «A Juan lo vi ayer». Este fenómeno se llama leísmo y es muy frecuente en el centro y el norte del país.', '如果你在西班牙旅行，会注意到很多人说“A Juan le vi ayer”，而不是“A Juan lo vi ayer”。这种现象叫 leísmo，在西班牙中部和北部非常普遍。'],
          ['La Real Academia Española lo acepta cuando se refiere a un hombre, en singular, porque está muy extendido, incluso entre escritores clásicos.', '西班牙皇家学院接受它用来指单个男性，因为这种用法非常普遍，连经典作家都在用。'],
        ],
        [
          ['Más polémico es el laísmo, es decir, usar «la» como complemento indirecto: «La dije que viniera». Se oye mucho en Madrid y en Castilla, pero la Academia lo considera incorrecto, igual que el loísmo («Lo di un regalo»), que es mucho menos común.', '更有争议的是 laísmo，即用 la 作间接宾语：“La dije que viniera”。在马德里和卡斯蒂利亚经常能听到，但学院认为它不正确；loísmo（“Lo di un regalo”）也一样，不过要少见得多。'],
        ],
        [
          ['En América Latina, en cambio, casi nadie es leísta: allí se dice «lo vi» y «le dije». Por eso, el consejo para los estudiantes es sencillo: usa «lo» y «la» para el complemento directo y «le» para el indirecto, y nunca te equivocarás.', '而在拉丁美洲，几乎没有人用 leísmo：那里说“lo vi”和“le dije”。所以给学习者的建议很简单：直接宾语用 lo 和 la，间接宾语用 le，这样永远不会错。'],
        ],
      ],
      gloss: { fenómeno: '现象', extendido: '普遍的', clásicos: '经典的', polémico: '有争议的', complemento: '补语（宾语）', leísta: '使用 leísmo 的人' },
      questions: [
        { type: 'mc', q: '皇家学院接受哪种用法？', options: ['用 le 指单个男性作直接宾语', '用 la 作间接宾语', '用 lo 作间接宾语'], answer: 0 },
        { type: 'mc', q: 'laísmo 在哪里比较常见？', options: ['拉丁美洲', '马德里和卡斯蒂利亚', '加那利群岛'], answer: 1 },
        { type: 'tf', q: '在拉丁美洲，leísmo 非常普遍。', answer: false, explain: 'En América Latina, en cambio, casi nadie es leísta' },
      ],
    },
  ],
  writing: [{ id: 'w1', prompt: '讲一讲你最倒霉的一天：用至少六个“意外的 se”（se me olvidó, se me cayó, se me rompió, se me acabó…），再用两次宾语前置 + 代词重复（Las llaves las…），最后用 menos mal que… 结尾。', words: [120, 200], hints: ['Aquel día todo empezó cuando se me…', 'Luego se me… y se me…', 'Las llaves las había dejado…', 'Menos mal que…'] }],
}
