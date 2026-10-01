import type { Unit } from '../types'

export const u09: Unit = {
  id: 'a1-u09',
  level: 'A1',
  order: 9,
  title: '你感觉怎么样？',
  titleEs: '¿Cómo estás?',
  icon: '🤒',
  goals: ['区分 ser 和 estar 描述人和东西', '说出身体部位和哪里疼', '表达饿、渴、冷、热、困、怕', '区分 muy 和 mucho'],
  grammar: [
    {
      id: 'a1-ser-estar',
      title: 'ser 还是 estar？',
      titleEs: 'Ser y estar',
      level: 'A1',
      summary: 'ser 说“是什么样的人 / 东西”（本质、特征）；estar 说“处于什么状态”（暂时的情况、感受）和位置。',
      body: `两个动词都可以翻译成“是”，但用法不同：

| ser | estar |
|---|---|
| 身份、名字：*Soy Ana.* | 位置：*Estoy en casa.* |
| 职业：*Es médico.* | 暂时的状态：*Estoy cansado.* |
| 国籍、来源：*Es de China.* | 感受、心情：*Está triste.* |
| 性格、外貌：*Es alto y simpático.* | 身体状况：*Estoy enfermo.* |
| 时间、日期：*Son las tres.* | 婚姻状况（常用）：*Está casado.* |
| 材料、所属：*Es de madera. / Es de Ana.* | |

### 同一个形容词，意思不同
- *Juan **es** aburrido.*（胡安是个无聊的人。）——性格
- *Juan **está** aburrido.*（胡安现在觉得无聊。）——此刻的状态
- *Ella **es** nerviosa.*（她是个容易紧张的人。）
- *Ella **está** nerviosa.*（她现在很紧张。）

### 只能用 estar 的
**bien / mal** 表示状态时只能用 estar：*¿Cómo estás? — Estoy bien.*（❌ *Soy bien.*）

> 一个简单的问法：这是“这个人 / 东西 **是什么样**”（ser），还是“**现在怎么样**、**在哪儿**”（estar）？`,
      examples: [
        ['Mi madre es muy alegre.', '我妈妈是个很开朗的人。'],
        ['Hoy estoy un poco cansado.', '我今天有点累。'],
        ['¿Estás bien? Estás muy pálida.', '你没事吧？你脸色很苍白。'],
        ['El examen es difícil y estoy nervioso.', '考试很难，我很紧张。'],
        ['La sopa está fría.', '汤凉了。'],
      ],
      origin: `- **ser** 来自拉丁语 *esse*（是）和 *sedere*（坐）的合并：一种“稳定的存在”。
- **estar** 来自 *stare*（站立）：站着的姿势是 **暂时的**，所以 estar 表示状态和位置。

拉丁语只有一个 *esse*，“站”和“是”的分工是西语和葡萄牙语后来发展出来的。所以理解 ser / estar，可以想象“坐着的本质”和“站着的状态”。`,
      pitfalls: ['感受用 ser：❌ *Soy cansado.* ✅ *Estoy cansado.*', '性格用 estar：❌ *Mi padre está alto.* ✅ *Mi padre es alto.*', '❌ *Soy bien.* ✅ *Estoy bien.*'],
    },
    {
      id: 'a1-doler',
      title: '身体与 doler（疼）',
      titleEs: 'El cuerpo y el verbo doler',
      level: 'A1',
      summary: '和 gustar 一样的结构：me duele + 单数，me duelen + 复数；身体部位前用定冠词。',
      body: `**doler**（疼）的结构和 *gustar* 一样：疼的部位是主语。

| 谁疼 | 单数部位 | 复数部位 |
|---|---|---|
| me / te / le / nos / os / les | **duele** la cabeza | **duelen** los pies |

- *Me duele **la** cabeza.*（我头疼。）
- *¿Te duelen **los** ojos?*（你眼睛疼吗？）
- *A mi abuelo le duele **la** espalda.*（我爷爷背疼。）

### 身体部位前用 el / la，不用 mi / tu
西语里说身体部位时，用 **定冠词** 而不是物主形容词，因为代词 *me、te* 已经说明了是谁的：
❌ *Me duele mi cabeza.* ✅ *Me duele **la** cabeza.*
同样：*Me lavo **las** manos.*（我洗手。）

### 看病时常说的话
- *¿Qué te pasa?*（你怎么了？）
- *Estoy enfermo / enferma.*（我病了。）
- *Tengo fiebre / tos / gripe.*（我发烧 / 咳嗽 / 得了流感。）
- *Tengo que ir al médico.*（我得去看医生。）`,
      examples: [
        ['Me duele la cabeza.', '我头疼。'],
        ['Me duelen los pies.', '我脚疼。'],
        ['¿Qué te pasa? — Me duele el estómago.', '你怎么了？——我肚子疼。'],
        ['A mi madre le duele la espalda.', '我妈妈背疼。'],
        ['Tengo fiebre y me duele la garganta.', '我发烧，嗓子疼。'],
      ],
      origin: `**doler** 来自拉丁语 *dolere*（疼痛），名词 *dolor*（痛）英语 *dolorous*（悲伤的）同源。它和 *poder* 一样是 **o→ue** 动词：*duele, duelen*。

**cabeza**（头）来自通俗拉丁语 *capitia*，词根 *caput*（头）。英语 *capital*（首都 / 首字母）、*captain*（船长）都来自 *caput*——“头”就是“最重要的”。`,
      pitfalls: ['用物主词：❌ *Me duele mi cabeza.* ✅ *Me duele la cabeza.*', '复数用 duele：❌ *Me duele los ojos.* ✅ *Me duelen los ojos.*'],
    },
    {
      id: 'a1-tener-expr',
      title: 'tener + 名词：饿、渴、冷、热……',
      titleEs: 'Expresiones con tener',
      level: 'A1',
      summary: '中文“我饿了”西语说“我有饥饿”：tengo hambre / sed / frío / calor / sueño / miedo / prisa；tener que + 原形 = 必须。',
      body: `表达身体感受，西语用 **tener + 名词**：

| 西语 | 中文 |
|---|---|
| **tener hambre** | 饿 |
| **tener sed** | 渴 |
| **tener frío / calor** | （人觉得）冷 / 热 |
| **tener sueño** | 困 |
| **tener miedo (de)** | 害怕 |
| **tener prisa** | 赶时间 |
| **tener razón** | 有道理，说得对 |
| **tener suerte** | 运气好 |

- 因为后面是名词，“很”要用 **mucho / mucha**，不用 *muy*：
  *Tengo **mucha** hambre.*（我很饿。）——hambre 是阴性
  *Tengo **mucho** frío.*（我很冷。）
- 对比天气：*Hace frío*（天冷）vs *Tengo frío*（我觉得冷）

### tener que + 动词原形：必须、得
*Tengo que estudiar.*（我得学习。）
*Tienes que descansar.*（你得休息。）`,
      examples: [
        ['Tengo mucha hambre. ¿Comemos?', '我好饿。吃饭吧？'],
        ['¿Tienes frío? Hay una manta en el sofá.', '你冷吗？沙发上有条毯子。'],
        ['Los niños tienen sueño.', '孩子们困了。'],
        ['Tengo miedo de los perros grandes.', '我怕大狗。'],
        ['Lo siento, tengo prisa.', '不好意思，我赶时间。'],
        ['Tienes razón.', '你说得对。'],
      ],
      origin: `- **hambre** 来自拉丁语 *famen*（饥饿）：词首 f 变成 h，和 *hijo（filius）、hacer（facere）* 一样。英语 *famine* 同源。
- **sed** 来自 *sitim*（渴）。
- **sueño** 来自 *somnum*（睡眠），所以 *sueño* 既是“困意”也是“梦”。
- **miedo** 来自 *metum*（恐惧），重读 e 变成 ie。`,
      pitfalls: ['用 estar：❌ *Estoy hambre.* ✅ *Tengo hambre.*', '用 muy：❌ *Tengo muy frío.* ✅ *Tengo mucho frío.*'],
    },
    {
      id: 'a1-muy-mucho',
      title: 'muy 还是 mucho？',
      titleEs: 'Muy y mucho',
      level: 'A1',
      summary: 'muy + 形容词 / 副词；mucho + 名词（要变性数）；动词 + mucho（不变）。',
      body: `| 用法 | 例句 |
|---|---|
| **muy** + 形容词 | *Es **muy** alto.*（他很高。） |
| **muy** + 副词 | *Hablas **muy** bien.*（你说得很好。） |
| **mucho / mucha / muchos / muchas** + 名词 | *Tengo **muchos** amigos.* / *Hay **mucha** gente.* |
| 动词 + **mucho**（不变） | *Trabajo **mucho**.*（我工作很多。）/ *Me gusta **mucho**.* |

### 小测试
- 很累：estoy ___ cansado → **muy**（形容词）
- 很多书：___ libros → **muchos**（名词，阳性复数）
- 我很喜欢：me gusta ___ → **mucho**（修饰动词）

⚠️ *mucho* 单独修饰形容词是错的：❌ *Es mucho alto.*`,
      examples: [
        ['Estoy muy cansada.', '我很累。（女性）'],
        ['Hay muchas personas en la calle.', '街上有很多人。'],
        ['Mi padre trabaja mucho.', '我爸爸工作很辛苦。'],
        ['No me gusta mucho el café.', '我不太喜欢咖啡。'],
        ['Hablas español muy bien.', '你西班牙语说得很好。'],
      ],
      origin: `**muy** 和 **mucho** 其实是同一个拉丁语词 *multum*（很多）的两个变体：*multum → muito → mucho*（完整形式），而在形容词前读得轻，缩短成了 *muy*。所以它们“一个修饰形容词、一个修饰名词和动词”的分工，是读音轻重造成的。`,
      pitfalls: ['❌ *Es mucho interesante.* ✅ *Es muy interesante.*', '❌ *Hay muy gente.* ✅ *Hay mucha gente.*', '❌ *Me gusta muy.* ✅ *Me gusta mucho.*'],
    },
  ],
  words: [
    { id: 'cuerpo', es: 'cuerpo', zh: '身体', pos: 'n', g: 'm', level: 'A1', tags: ['body'], ex: ['Hacer deporte es bueno para el cuerpo.', '运动对身体好。'], ety: '拉丁语 corpus。英语 corpse、corporate 同源。', emoji: '🧍' },
    { id: 'cabeza', es: 'cabeza', zh: '头', pos: 'n', g: 'f', level: 'A1', tags: ['body'], ex: ['Me duele la cabeza.', '我头疼。'], ety: '通俗拉丁语 capitia，来自 caput「头」。英语 capital、captain 同源。', emoji: '🗣️' },
    { id: 'ojo', es: 'ojo', zh: '眼睛', pos: 'n', g: 'm', level: 'A1', tags: ['body'], ex: ['Tiene los ojos azules.', '他有一双蓝眼睛。'], ety: '拉丁语 oculum。英语 ocular 同源。', note: '口语 ¡Ojo! 意思是“小心！”', emoji: '👁️' },
    { id: 'nariz', es: 'nariz', zh: '鼻子', pos: 'n', g: 'f', pl: 'narices', level: 'A1', tags: ['body'], ex: ['Tengo la nariz roja por el frío.', '我的鼻子冻红了。'], ety: '通俗拉丁语 naricae，来自 nares「鼻孔」。', emoji: '👃' },
    { id: 'boca', es: 'boca', zh: '嘴', pos: 'n', g: 'f', level: 'A1', tags: ['body'], ex: ['Abre la boca, por favor.', '请张开嘴。'], ety: '拉丁语 bucca「脸颊」→「嘴」。', emoji: '👄' },
    { id: 'oreja', es: 'oreja', zh: '耳朵（外耳）', pos: 'n', g: 'f', level: 'A1', tags: ['body'], ex: ['Me duele la oreja.', '我耳朵疼。'], ety: '拉丁语 auricula「小耳朵」。', note: '内耳 / 听觉说 oído。', emoji: '👂' },
    { id: 'diente', es: 'diente', zh: '牙齿', pos: 'n', g: 'm', level: 'A1', tags: ['body'], ex: ['Me lavo los dientes tres veces al día.', '我一天刷三次牙。'], ety: '拉丁语 dentem，重读 e 变 ie。英语 dentist 同源。', emoji: '🦷' },
    { id: 'garganta', es: 'garganta', zh: '喉咙', pos: 'n', g: 'f', level: 'A1', tags: ['body'], ex: ['Me duele la garganta.', '我嗓子疼。'], ety: '来自拟声词根 garg-（漱口的声音）。英语 gargle 同源。' },
    { id: 'cuello', es: 'cuello', zh: '脖子；领子', pos: 'n', g: 'm', level: 'A1', tags: ['body'], ex: ['Tengo dolor de cuello.', '我脖子疼。'], ety: '拉丁语 collum。英语 collar 同源。' },
    { id: 'brazo', es: 'brazo', zh: '胳膊', pos: 'n', g: 'm', level: 'A1', tags: ['body'], ex: ['Me duele el brazo derecho.', '我右胳膊疼。'], ety: '拉丁语 bracchium。英语 bracelet 同源。', emoji: '💪' },
    { id: 'pierna', es: 'pierna', zh: '腿', pos: 'n', g: 'f', level: 'A1', tags: ['body'], ex: ['Tiene las piernas muy largas.', '她的腿很长。'], ety: '拉丁语 perna「火腿；大腿」。', emoji: '🦵' },
    { id: 'pie', es: 'pie', zh: '脚', pos: 'n', g: 'm', level: 'A1', tags: ['body'], ex: ['Voy a pie.', '我走路去。'], ety: '拉丁语 pedem。英语 pedal、pedestrian 同源。', emoji: '🦶' },
    { id: 'espalda', es: 'espalda', zh: '背', pos: 'n', g: 'f', level: 'A1', tags: ['body'], ex: ['Me duele la espalda.', '我背疼。'], ety: '晚期拉丁语 spatula「肩胛骨」。英语 spatula（锅铲）同源。' },
    { id: 'estomago', es: 'estómago', zh: '胃；肚子', pos: 'n', g: 'm', level: 'A1', tags: ['body'], ex: ['Me duele el estómago.', '我肚子疼。'], ety: '希腊语 stómachos，经拉丁语传入。英语 stomach 同源。' },
    { id: 'pelo', es: 'pelo', zh: '头发；毛', pos: 'n', g: 'm', level: 'A1', tags: ['body'], ex: ['Tiene el pelo largo y negro.', '她有一头黑色长发。'], ety: '拉丁语 pilum「毛发」。' },
    { id: 'doler', es: 'doler', zh: '疼', pos: 'v', level: 'A1', tags: ['verb', 'body'], ex: ['Me duelen los pies.', '我脚疼。'], ety: '拉丁语 dolere。', note: '结构同 gustar；o→ue：duele, duelen。' },
    { id: 'pasar', es: 'pasar', zh: '发生；经过；度过', pos: 'v', level: 'A1', tags: ['verb'], ex: ['¿Qué te pasa?', '你怎么了？'], ety: '通俗拉丁语 passare，来自 passus「步子」。英语 pass 同源。' },
    { id: 'enfermo', es: 'enfermo', f: 'enferma', zh: '生病的；病人', pos: 'adj', level: 'A1', tags: ['body', 'feel'], ex: ['Hoy estoy enfermo.', '我今天病了。'], ety: '拉丁语 infirmus「不结实的」。英语 infirmary 同源。' },
    { id: 'cansado', es: 'cansado', f: 'cansada', zh: '累的', pos: 'adj', level: 'A1', tags: ['feel'], ex: ['Estoy muy cansada.', '我很累。'], ety: '来自 cansar「使疲劳」< 拉丁语 campsare「绕过（海角）」，引申为“劳顿”。' },
    { id: 'contento', es: 'contento', f: 'contenta', zh: '高兴的；满意的', pos: 'adj', level: 'A1', tags: ['feel'], ex: ['Estoy muy contento con mi trabajo.', '我对我的工作很满意。'], ety: '拉丁语 contentus「满足的」。英语 content 同源。', emoji: '😊' },
    { id: 'triste', es: 'triste', zh: '难过的', pos: 'adj', level: 'A1', tags: ['feel'], ex: ['¿Por qué estás triste?', '你为什么难过？'], ety: '拉丁语 tristis。', emoji: '😢' },
    { id: 'nervioso', es: 'nervioso', f: 'nerviosa', zh: '紧张的', pos: 'adj', level: 'A1', tags: ['feel'], ex: ['Estoy nervioso por el examen.', '我因为考试很紧张。'], ety: '来自 nervio「神经」< 拉丁语 nervus。', emoji: '😬' },
    { id: 'enfadado', es: 'enfadado', f: 'enfadada', zh: '生气的', pos: 'adj', level: 'A1', tags: ['feel'], ex: ['Mi madre está enfadada conmigo.', '我妈妈在生我的气。'], ety: '来自 enfadar「使厌烦」，词源不完全确定。', latam: '拉美常说 enojado。', emoji: '😠' },
    { id: 'aburrido', es: 'aburrido', f: 'aburrida', zh: '无聊的；感到无聊的', pos: 'adj', level: 'A1', tags: ['feel'], ex: ['Esta película es aburrida.', '这部电影很无聊。'], ety: '来自 aburrir < 拉丁语 abhorrere「厌恶」。英语 abhor 同源。', note: 'ser aburrido = 无聊的（人 / 事）；estar aburrido = 觉得无聊。', emoji: '🥱' },
    { id: 'alegre', es: 'alegre', zh: '开朗的；欢快的', pos: 'adj', level: 'A1', tags: ['feel', 'adj'], ex: ['Mi hermana es muy alegre.', '我姐姐很开朗。'], ety: '通俗拉丁语 alecrem < 拉丁语 alacer「活泼的」。' },
    { id: 'feliz', es: 'feliz', pl: 'felices', zh: '幸福的；快乐的', pos: 'adj', level: 'A1', tags: ['feel'], ex: ['¡Feliz Navidad!', '圣诞快乐！'], ety: '拉丁语 felicem。英语 felicity 同源。', emoji: '😄' },
    { id: 'preocupado', es: 'preocupado', f: 'preocupada', zh: '担心的', pos: 'adj', level: 'A1', tags: ['feel'], ex: ['Estoy preocupada por mi abuela.', '我担心我奶奶。'], ety: '拉丁语 praeoccupare「预先占据（心思）」。' },
    { id: 'tranquilo', es: 'tranquilo', f: 'tranquila', zh: '平静的；安静的', pos: 'adj', level: 'A1', tags: ['feel', 'adj'], ex: ['¡Tranquilo, no pasa nada!', '别担心，没事的！'], ety: '拉丁语 tranquillus。' },
    { id: 'hambre', es: 'hambre', zh: '饥饿', pos: 'n', g: 'f', level: 'A1', tags: ['body', 'food'], ex: ['Tengo mucha hambre.', '我很饿。'], ety: '拉丁语 famen：f 变成 h。英语 famine 同源。', note: '阴性，但单数前用 el：el hambre；“很饿”= mucha hambre。' },
    { id: 'sed', es: 'sed', zh: '渴', pos: 'n', g: 'f', level: 'A1', tags: ['body', 'food'], ex: ['Tengo sed.', '我渴了。'], ety: '拉丁语 sitim。' },
    { id: 'sueno', es: 'sueño', zh: '困意；梦', pos: 'n', g: 'm', level: 'A1', tags: ['body'], ex: ['Tengo mucho sueño.', '我很困。'], ety: '拉丁语 somnum：mn 变成 ñ。', emoji: '😴' },
    { id: 'miedo', es: 'miedo', zh: '害怕', pos: 'n', g: 'm', level: 'A1', tags: ['feel'], ex: ['Tengo miedo de los perros.', '我怕狗。'], ety: '拉丁语 metum。', emoji: '😨' },
    { id: 'prisa', es: 'prisa', zh: '匆忙', pos: 'n', g: 'f', level: 'A1', tags: ['time'], ex: ['Tengo prisa.', '我赶时间。'], ety: '拉丁语 pressa「压紧的」→“紧迫”。' },
    { id: 'razon', es: 'razón', zh: '道理；理由', pos: 'n', g: 'f', pl: 'razones', level: 'A1', tags: ['func'], ex: ['Tienes razón.', '你说得对。'], ety: '拉丁语 rationem。英语 reason、ration 同源。' },
    { id: 'fiebre', es: 'fiebre', zh: '发烧', pos: 'n', g: 'f', level: 'A1', tags: ['body'], ex: ['Tengo fiebre.', '我发烧了。'], ety: '拉丁语 febrem。英语 fever 同源。', emoji: '🤒' },
    { id: 'mucho', es: 'mucho', f: 'mucha', zh: '很多；很', pos: 'det', level: 'A1', tags: ['func'], ex: ['Tengo muchos amigos.', '我有很多朋友。'], ety: '拉丁语 multum。muy 是它的缩短形式。', note: '修饰名词时变性数：mucho, mucha, muchos, muchas。' },
  ],
  sentences: [
    { id: 's1', es: 'Mi madre es muy alegre.', zh: '我妈妈是个很开朗的人。', g: ['a1-ser-estar'], distract: ['está'] },
    { id: 's2', es: 'Hoy estoy un poco cansado.', zh: '我今天有点累。', alt: ['Hoy estoy un poco cansada'], g: ['a1-ser-estar'], distract: ['soy'] },
    { id: 's3', es: '¿Estás bien?', zh: '你还好吗？', g: ['a1-ser-estar'], distract: ['eres'] },
    { id: 's4', es: 'Mi hermano es alto y simpático.', zh: '我哥哥个子高，人很好。', g: ['a1-ser-estar'] },
    { id: 's5', es: 'Ella está nerviosa por el examen.', zh: '她因为考试很紧张。', g: ['a1-ser-estar'] },
    { id: 's6', es: 'La sopa está fría.', zh: '汤凉了。', g: ['a1-ser-estar'] },
    { id: 's7', es: 'Estoy enfermo y no puedo ir a clase.', zh: '我病了，不能去上课。', alt: ['Estoy enferma y no puedo ir a clase'], g: ['a1-ser-estar'] },
    { id: 's8', es: 'Me duele la cabeza.', zh: '我头疼。', g: ['a1-doler'], distract: ['mi', 'duelen'] },
    { id: 's9', es: 'Me duelen los pies.', zh: '我脚疼。', g: ['a1-doler'], distract: ['duele'] },
    { id: 's10', es: '¿Qué te pasa?', zh: '你怎么了？', g: ['a1-doler'] },
    { id: 's11', es: 'A mi abuelo le duele la espalda.', zh: '我爷爷背疼。', g: ['a1-doler'] },
    { id: 's12', es: 'Tengo fiebre y me duele la garganta.', zh: '我发烧，嗓子疼。', g: ['a1-doler'] },
    { id: 's13', es: 'Tengo mucha hambre.', zh: '我很饿。', g: ['a1-tener-expr'], distract: ['muy', 'estoy'] },
    { id: 's14', es: '¿Tienes frío?', zh: '你冷吗？', g: ['a1-tener-expr'] },
    { id: 's15', es: 'Los niños tienen sueño.', zh: '孩子们困了。', g: ['a1-tener-expr'] },
    { id: 's16', es: 'Tengo miedo de los perros.', zh: '我怕狗。', g: ['a1-tener-expr'] },
    { id: 's17', es: 'Lo siento, tengo prisa.', zh: '抱歉，我赶时间。', g: ['a1-tener-expr'] },
    { id: 's18', es: 'Tienes razón.', zh: '你说得对。', g: ['a1-tener-expr'] },
    { id: 's19', es: 'Tengo que ir al médico.', zh: '我得去看医生。', g: ['a1-tener-expr'] },
    { id: 's20', es: 'Estoy muy cansada.', zh: '我很累。（女性）', g: ['a1-muy-mucho'], distract: ['mucho'] },
    { id: 's21', es: 'Hay mucha gente en la calle.', zh: '街上有很多人。', g: ['a1-muy-mucho'], distract: ['muy'] },
    { id: 's22', es: 'Mi padre trabaja mucho.', zh: '我爸爸工作很辛苦。', g: ['a1-muy-mucho'] },
    { id: 's23', es: 'Hablas español muy bien.', zh: '你西班牙语说得很好。', g: ['a1-muy-mucho'] },
    { id: 's24', es: 'No me gusta mucho el café.', zh: '我不太喜欢咖啡。', g: ['a1-muy-mucho'] },
  ],
  cloze: [
    { id: 'c1', text: 'Mi novio ___ muy simpático.', answers: ['es'], options: ['es', 'está', 'tiene'], zh: '我男朋友人很好。', g: ['a1-ser-estar'], explain: '性格用 ser。' },
    { id: 'c2', text: 'Hoy ___ muy cansado.', answers: ['estoy'], options: ['estoy', 'soy', 'tengo'], zh: '我今天很累。', g: ['a1-ser-estar'], explain: '暂时的状态用 estar。' },
    { id: 'c3', text: '¿Cómo ___? — Bien, gracias.', answers: ['estás'], options: ['estás', 'eres', 'tienes'], zh: '你好吗？——很好，谢谢。', g: ['a1-ser-estar'] },
    { id: 'c4', text: 'El café ___ frío. Voy a calentarlo.', answers: ['está'], options: ['está', 'es', 'hace'], zh: '咖啡凉了。我去热一下。', g: ['a1-ser-estar'] },
    { id: 'c5', text: 'Mis abuelos ___ de Cantón.', answers: ['son'], options: ['son', 'están', 'tienen'], zh: '我的祖父母是广州人。', g: ['a1-ser-estar'] },
    { id: 'c6', text: 'Ana ___ triste porque su gato está enfermo.', answers: ['está'], options: ['está', 'es', 'tiene'], zh: '安娜很难过，因为她的猫病了。', g: ['a1-ser-estar'] },
    { id: 'c7', text: 'Me ___ la cabeza.', answers: ['duele'], options: ['duele', 'duelen', 'dolor'], zh: '我头疼。', g: ['a1-doler'] },
    { id: 'c8', text: 'Me ___ los ojos.', answers: ['duelen'], options: ['duelen', 'duele', 'dolen'], zh: '我眼睛疼。', g: ['a1-doler'] },
    { id: 'c9', text: 'A mi padre ___ duele la espalda.', answers: ['le'], options: ['le', 'se', 'lo'], zh: '我爸爸背疼。', g: ['a1-doler'] },
    { id: 'c10', text: 'Me duele ___ estómago.', answers: ['el'], options: ['el', 'mi', 'un'], zh: '我肚子疼。', g: ['a1-doler'], explain: '身体部位前用定冠词，不用 mi。' },
    { id: 'c11', text: '¿Qué te ___? Estás muy pálido.', answers: ['pasa'], options: ['pasa', 'duele', 'tiene'], zh: '你怎么了？你脸色很苍白。', g: ['a1-doler'] },
    { id: 'c12', text: 'Tengo ___. ¿Hay agua?', answers: ['sed'], options: ['sed', 'hambre', 'sueño'], zh: '我渴了。有水吗？', g: ['a1-tener-expr'] },
    { id: 'c13', text: '___ mucho calor. ¿Abro la ventana?', answers: ['Tengo'], options: ['Tengo', 'Estoy', 'Soy'], zh: '我好热。我开窗吧？', g: ['a1-tener-expr'] },
    { id: 'c14', text: 'Tengo ___ hambre.', answers: ['mucha'], options: ['mucha', 'mucho', 'muy'], zh: '我很饿。', g: ['a1-tener-expr', 'a1-muy-mucho'], explain: 'hambre 是阴性名词，用 mucha。' },
    { id: 'c15', text: 'Mañana tengo ___ trabajar temprano.', answers: ['que'], options: ['que', 'de', 'a'], zh: '明天我得早起上班。', g: ['a1-tener-expr'] },
    { id: 'c16', text: 'Este libro es ___ interesante.', answers: ['muy'], options: ['muy', 'mucho', 'mucha'], zh: '这本书很有意思。', g: ['a1-muy-mucho'] },
    { id: 'c17', text: 'En mi clase hay ___ estudiantes chinos.', answers: ['muchos'], options: ['muchos', 'muy', 'mucho'], zh: '我班上有很多中国学生。', g: ['a1-muy-mucho'] },
    { id: 'c18', text: 'Me gusta ___ bailar.', answers: ['mucho'], options: ['mucho', 'muy', 'mucha'], zh: '我很喜欢跳舞。', g: ['a1-muy-mucho'] },
    { id: 'c19', text: 'Hablas chino ___ bien.', answers: ['muy'], options: ['muy', 'mucho', 'muchos'], zh: '你中文说得很好。', g: ['a1-muy-mucho'] },
  ],
  conj: [
    { verbs: ['ser', 'estar'], tenses: ['pres'], g: 'a1-ser-estar' },
    { verbs: ['tener'], tenses: ['pres'], g: 'a1-tener-expr' },
  ],
  dialogues: [
    {
      id: 'a1-u09-d1',
      title: '在诊所 · En el médico',
      lines: [
        { who: 'Médica', es: 'Buenos días. Siéntese, por favor. ¿Qué le pasa?', zh: '早上好。请坐。您哪里不舒服？' },
        { who: 'Zhao Lei', es: 'Buenos días. Estoy enfermo desde ayer. Me duele mucho la garganta.', zh: '早上好。我从昨天起就病了。嗓子很疼。' },
        { who: 'Médica', es: '¿Tiene fiebre?', zh: '您发烧吗？' },
        { who: 'Zhao Lei', es: 'Sí, un poco. Y también me duele la cabeza.', zh: '有一点。我头也疼。' },
        { who: 'Médica', es: 'Abra la boca, por favor… Sí, tiene la garganta muy roja. Es un resfriado.', zh: '请张开嘴……是的，您的喉咙很红。是感冒了。' },
        { who: 'Zhao Lei', es: '¿Es grave?', zh: '严重吗？' },
        { who: 'Médica', es: 'No, tranquilo. Tiene que beber mucha agua y descansar.', zh: '不严重，别担心。您得多喝水，多休息。' },
        { who: 'Zhao Lei', es: 'Muchas gracias, doctora.', zh: '非常感谢，医生。' },
      ],
    },
  ],
  readings: [
    {
      id: 'a1-r15',
      level: 'A1',
      title: 'Un lunes horrible',
      titleZh: '糟糕的星期一',
      topic: '感受',
      paras: [
        [
          ['Hoy es lunes y Marta está de mal humor.', '今天是星期一，玛尔塔心情很差。'],
          ['Normalmente es una chica muy alegre, pero hoy todo va mal.', '平时她是个很开朗的女孩，但今天什么都不顺。'],
        ],
        [
          ['Por la mañana tiene mucho sueño y llega tarde al trabajo.', '早上她很困，上班迟到了。'],
          ['A mediodía tiene hambre, pero no tiene tiempo para comer.', '中午她饿了，但没时间吃饭。'],
          ['Por la tarde le duele la cabeza y está muy cansada.', '下午她头疼，而且很累。'],
        ],
        [
          ['Por la noche, su novio prepara una cena rica y ven una película divertida.', '晚上，她男朋友做了一顿好吃的晚饭，两人看了一部有趣的电影。'],
          ['Ahora Marta está contenta. ¡El martes va a ser mejor!', '现在玛尔塔开心了。星期二会更好的！'],
        ],
      ],
      gloss: { humor: '心情', todo: '一切', va: '进行（ir 第三人称）', 'tiempo': '时间', para: '为了', su: '她的', prepara: '准备，做', ven: '（他们）看', divertida: '有趣的', Ahora: '现在', mejor: '更好' },
      questions: [
        { type: 'tf', q: '玛尔塔平时是个开朗的人。', answer: true },
        { type: 'mc', q: '早上发生了什么？', options: ['她头疼', '她上班迟到了', '她没吃早饭'], answer: 1 },
        { type: 'mc', q: '晚上为什么玛尔塔开心了？', options: ['她早早睡了', '男朋友做了晚饭，一起看电影', '她去了健身房'], answer: 1 },
      ],
    },
    {
      id: 'a1-r16',
      level: 'A1',
      title: 'Consejos para un resfriado',
      titleZh: '感冒小建议',
      topic: '健康',
      paras: [
        [
          ['¿Tienes un resfriado? ¿Te duele la garganta y tienes mucho sueño?', '感冒了吗？嗓子疼，很困？'],
          ['Aquí tienes algunos consejos.', '这里有一些建议。'],
        ],
        [
          ['Primero, tienes que descansar mucho y dormir ocho horas o más.', '首先，你要多休息，睡八个小时以上。'],
          ['También tienes que beber mucha agua, zumo de naranja o té con miel.', '你还要多喝水、橙汁或者蜂蜜茶。'],
          ['La sopa caliente es muy buena.', '热汤很好。'],
        ],
        [
          ['Si tienes fiebre alta o estás muy mal, tienes que ir al médico.', '如果发高烧或者很难受，就要去看医生。'],
          ['¡Que te mejores!', '祝你早日康复！'],
        ],
      ],
      gloss: { resfriado: '感冒', algunos: '一些', consejos: '建议', Primero: '首先', descansar: '休息', miel: '蜂蜜', caliente: '热的', Si: '如果', alta: '高的', mejores: '好起来（虚拟式）' },
      questions: [
        { type: 'mc', q: '感冒时建议睡多久？', options: ['六个小时', '八个小时或更多', '十二个小时'], answer: 1 },
        { type: 'tf', q: '文章建议多喝水和热汤。', answer: true },
        { type: 'mc', q: '什么时候要去看医生？', options: ['只要嗓子疼', '发高烧或很难受时', '每天早上'], answer: 1 },
        { type: 'mc', q: '“¡Que te mejores!” 是什么意思？', options: ['祝你早日康复', '你要多吃饭', '明天见'], answer: 0 },
      ],
    },
  ],
  writing: [{ id: 'w1', prompt: '写一写你今天的状态：心情怎么样、累不累、有没有哪里不舒服，再描述一个你认识的人的性格和外貌（注意 ser 和 estar）。', words: [30, 80], hints: ['Hoy estoy… porque…', 'Me duele…', 'Mi amigo/a es… Hoy está…'] }],
}
