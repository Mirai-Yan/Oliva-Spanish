import type { Unit } from '../types'

export const u06: Unit = {
  id: 'c1-u06',
  level: 'C1',
  order: 6,
  title: '习语与谚语',
  titleEs: 'Dichos y refranes',
  icon: '🗝️',
  goals: ['理解并使用常见的身体、动物、食物习语', '掌握二十句常用谚语及其使用场合', '能把西语习语和中文成语、俗语做比较', '在口语中自然地用习语，避免逐字翻译'],
  grammar: [
    {
      id: 'c1-modismos-cuerpo',
      title: '和身体有关的习语',
      titleEs: 'Expresiones con partes del cuerpo',
      level: 'C1',
      summary: 'ser uña y carne（形影不离）、no pegar ojo（一夜没合眼）、hablar por los codos（话多）、estar con el agua al cuello（焦头烂额）、poner la mano en el fuego（担保）、irse de la lengua（说漏嘴）、tener mano izquierda（会处理人际关系）……',
      body: `| 习语 | 字面意思 | 真正意思 | 例句 |
|---|---|---|---|
| *ser uña y carne* | 是指甲和肉 | 形影不离 | *Mis hijas **son uña y carne**.* |
| *no pegar ojo* | 一只眼睛也没粘上 | 一夜没合眼 | *Con el calor **no pegué ojo**.* |
| *hablar por los codos* | 用手肘说话 | 话特别多 | *Mi vecina **habla por los codos**.* |
| *estar con el agua al cuello* | 水淹到脖子 | 焦头烂额（多指经济困难） | *Con la hipoteca **estamos con el agua al cuello**.* |
| *poner la mano en el fuego* | 把手放进火里 | 打包票 | ***Pongo la mano en el fuego** por él.* |
| *irse de la lengua* | 舌头跑了 | 说漏嘴 | *No le cuentes nada: **se va de la lengua**.* |
| *tener mano izquierda* | 有左手 | 处事圆滑、会周旋 | *Para ese puesto hay que **tener mano izquierda**.* |
| *dar la cara* | 露出脸 | 敢于承担 | *Cuando hay problemas, ella siempre **da la cara**.* |
| *lavarse las manos* | 洗手 | 撇清责任 | *El jefe **se lavó las manos**.* |
| *quedarse con la boca abierta* | 张着嘴 | 目瞪口呆 | *Nos **quedamos con la boca abierta**.* |
| *no dar pie con bola* | 脚碰不到球 | 什么都做不对 | *Hoy **no doy pie con bola**.* |
| *ser el ojito derecho de alguien* | 某人的右眼珠 | 宠儿、心头肉 | *Es **el ojito derecho** de su abuela.* |

### 用法提示
- 习语里的 **动词要变位**，但 **名词通常不变**：*Ayer no **pegué** ojo*（不是 *ojos*）。
- 物主词要换成冠词：*poner **la** mano en el fuego*（不说 *mi mano*）。`,
      examples: [
        ['Mis hijas son uña y carne.', '我的两个女儿形影不离。'],
        ['Con el calor no pegué ojo en toda la noche.', '天太热，我一整夜没合眼。'],
        ['Pongo la mano en el fuego por él: es incapaz de mentir.', '我为他打包票：他不会撒谎。'],
        ['No le cuentes nada, que se va de la lengua.', '什么都别跟他说，他会说漏嘴的。'],
        ['Hoy no doy pie con bola.', '我今天干什么都不顺。'],
      ],
      origin: `**no pegar ojo** 里的 *pegar* 是“粘住”：上下眼皮一夜都没“粘”在一起。中文说“没合眼”，思路一模一样。

**ser uña y carne** 来自指甲和下面的肉紧紧长在一起、无法分开的画面——相当于中文的“如胶似漆”“形影不离”。`,
      pitfalls: ['❌ *No pegué ojos.* ✅ *No pegué ojo.*：习语里的名词不变。', '❌ *Pongo mi mano en el fuego.* ✅ *Pongo la mano en el fuego.*', '❌ *Habla por sus codos.* ✅ *Habla por los codos.*'],
    },
    {
      id: 'c1-modismos-animales-comida',
      title: '动物、食物和颜色习语',
      titleEs: 'Animales, comida y colores',
      level: 'C1',
      summary: 'estar como pez en el agua（如鱼得水）、dar gato por liebre（以次充好）、pedir peras al olmo（缘木求鱼）、estar como una cabra（疯疯癫癫）、ponerse como un tomate（脸红）、estar sin blanca（身无分文）、verlo todo negro（悲观）……',
      body: `### 动物
| 习语 | 意思 | 对应中文 |
|---|---|---|
| *estar como pez en el agua* | 很自在 | 如鱼得水 |
| *dar gato por liebre* | 以次充好、骗人 | 挂羊头卖狗肉 |
| *buscarle tres pies al gato* | 自找麻烦、吹毛求疵 | 鸡蛋里挑骨头 |
| *estar como una cabra* | 疯疯癫癫 | 神经兮兮 |
| *ser un gallina* | 胆小鬼 | 胆小如鼠 |
| *ser la oveja negra* | 害群之马 | 害群之马 |
| *llevarse el gato al agua* | 占了上风、赢了 | 拔得头筹 |

### 食物
| 习语 | 意思 | 对应中文 |
|---|---|---|
| *pedir peras al olmo* | 要求不可能的事 | 缘木求鱼 |
| *importar un pimiento* | 毫不在乎 | 一点都不在乎 |
| *ponerse como un tomate* | 脸红 | 脸红得像番茄 |
| *mandar a freír espárragos* | 打发走 | 让人滚蛋 |
| *ahogarse en un vaso de agua* | 小题大做、遇事就慌 | 杞人忧天 |
| *de higos a brevas* | 很少、偶尔 | 难得一回 |

### 颜色
*verlo todo negro*（什么都往坏处想）、*estar sin blanca*（身无分文）、*ponerse morado*（吃撑了）、*el príncipe azul*（白马王子）

### 时间
*cuando las ranas críen pelo*（青蛙长毛的时候 = 永远不可能，相当于“太阳从西边出来”）`,
      examples: [
        ['En la cocina, mi padre está como pez en el agua.', '在厨房里，我爸如鱼得水。'],
        ['En ese restaurante te dan gato por liebre.', '那家餐馆以次充好。'],
        ['Pedirle puntualidad a Juan es pedir peras al olmo.', '要胡安守时，简直是缘木求鱼。'],
        ['Me puse como un tomate cuando me llamó por mi nombre.', '他叫我名字的时候，我脸红得像个番茄。'],
        ['Este mes estoy sin blanca.', '这个月我身无分文。'],
      ],
      tables: [],
      origin: `**dar gato por liebre** 据说来自中世纪的客栈：不良店主把猫肉当兔肉卖给旅客。所以要是在西班牙觉得被骗了，就可以说 *¡Me han dado gato por liebre!*

**estar sin blanca** 里的 *blanca* 是一种中世纪的小铜币；身上连一枚 *blanca* 都没有，就是一文不名。`,
      pitfalls: ['❌ *Estoy como un pescado en el agua.* ✅ *Estoy como pez en el agua.*：pescado 是已经捕上来、要吃的鱼。', '❌ *Me importa un pimentón.* ✅ *Me importa un pimiento.*', '❌ *dar liebre por gato* ✅ *dar gato por liebre*（是用猫冒充兔子）。'],
    },
    {
      id: 'c1-refranes',
      title: '谚语：怎么用才地道',
      titleEs: 'Usar los refranes',
      level: 'C1',
      summary: '谚语常用来总结、劝告或评论：Como dice el refrán… / Ya sabes lo que dicen… 地道的说话人常常只说前半句：Dime con quién andas… 要注意语域：谚语偏口语、略显老派，正式写作中少用。',
      body: `### 二十句常用谚语
| 谚语 | 意思 |
|---|---|
| *Más vale pájaro en mano que ciento volando.* | 一鸟在手胜过百鸟在林。 |
| *No por mucho madrugar amanece más temprano.* | 欲速则不达。 |
| *A quien madruga, Dios le ayuda.* | 早起的鸟儿有虫吃。 |
| *En boca cerrada no entran moscas.* | 祸从口出（闭嘴不惹事）。 |
| *Dime con quién andas y te diré quién eres.* | 近朱者赤，近墨者黑。 |
| *Ojos que no ven, corazón que no siente.* | 眼不见，心不烦。 |
| *Del dicho al hecho hay mucho trecho.* | 说起来容易做起来难。 |
| *Perro ladrador, poco mordedor.* | 会叫的狗不咬人。 |
| *Cría cuervos y te sacarán los ojos.* | 养虎为患。 |
| *A caballo regalado no le mires el diente.* | 别人送的东西别挑剔。 |
| *Quien mucho abarca, poco aprieta.* | 贪多嚼不烂。 |
| *Más vale prevenir que curar.* | 预防胜于治疗。 |
| *Al mal tiempo, buena cara.* | 逆境中保持乐观。 |
| *No hay mal que por bien no venga.* | 塞翁失马，焉知非福。 |
| *Agua pasada no mueve molino.* | 过去的就让它过去吧。 |
| *Camarón que se duerme, se lo lleva la corriente.* | 不进则退。 |
| *Cada loco con su tema.* | 人各有所好。 |
| *En casa del herrero, cuchillo de palo.* | 鞋匠的孩子没鞋穿。 |
| *Zapatero, a tus zapatos.* | 各司其职（别管闲事）。 |
| *Donde hay patrón no manda marinero.* | 有老板在，伙计说了不算。 |

### 怎么引出谚语
*Como dice el refrán, … / Ya sabes lo que dicen: … / Como decía mi abuela, …*

### 只说半句
*—Me he hecho amigo de los chicos más vagos de la clase. —Ya sabes: **dime con quién andas**…*`,
      examples: [
        ['Como dice el refrán, no hay mal que por bien no venga.', '正如谚语所说，塞翁失马，焉知非福。'],
        ['Ya sabes lo que dicen: en boca cerrada no entran moscas.', '你知道人们怎么说：闭上嘴就不惹事。'],
        ['Del dicho al hecho hay mucho trecho.', '说起来容易做起来难。'],
        ['No te preocupes por él: perro ladrador, poco mordedor.', '别担心他：会叫的狗不咬人。'],
        ['Agua pasada no mueve molino: olvídalo.', '过去的就让它过去吧：忘了它。'],
      ],
      origin: `西班牙的谚语传统非常深厚。15 世纪就有了据传由桑蒂利亚纳侯爵整理的谚语集《老妇人在炉火边说的谚语》。到了《堂吉诃德》，桑丘·潘沙更是一开口就是一串谚语，常常把堂吉诃德气得半死。

谚语讲究 **押韵和对称**，这样才好记：*dicho / hecho / trecho*、*ladrador / mordedor*——和中文的对仗、押韵有异曲同工之妙。`,
      pitfalls: ['❌ *Más vale un pájaro en la mano que cien volando.*（改动太多就不像谚语了）✅ *Más vale pájaro en mano que ciento volando.*', '❌ 在正式论文里堆砌谚语 ✅ 谚语适合口语、个人随笔和书信。', '❌ *No hay mal que por bien no viene.* ✅ *No hay mal que por bien no venga.*'],
    },
  ],
  words: [
    { id: 'modismo', es: 'modismo', zh: '习语', pos: 'n', g: 'm', level: 'C1', tags: ['func'], ex: ['Los modismos son difíciles de traducir.', '习语很难翻译。'] },
    { id: 'locucion', es: 'locución', zh: '短语；惯用语', pos: 'n', g: 'f', pl: 'locuciones', level: 'C1', tags: ['func'], ex: ['«A pesar de» es una locución preposicional.', '“a pesar de”是一个介词短语。'] },
    { id: 'refranero', es: 'refranero', zh: '谚语集', pos: 'n', g: 'm', level: 'C1', tags: ['func'], ex: ['El refranero español es riquísimo.', '西班牙的谚语宝库极其丰富。'] },
    { id: 'moraleja', es: 'moraleja', zh: '寓意；教训', pos: 'n', g: 'f', level: 'C1', tags: ['func'], ex: ['¿Cuál es la moraleja de la historia?', '这个故事的寓意是什么？'] },
    { id: 'sabiduria-popular', es: 'sabiduría popular', zh: '民间智慧', pos: 'n', g: 'f', level: 'C1', tags: ['func'], ex: ['Los refranes recogen la sabiduría popular.', '谚语凝聚了民间智慧。'] },
    { id: 'literal', es: 'literal', zh: '字面的', pos: 'adj', level: 'C1', tags: ['func'], ex: ['La traducción literal no tiene sentido.', '直译讲不通。'] },
    { id: 'ser-una-y-carne', es: 'ser uña y carne', zh: '形影不离', pos: 'phr', level: 'C1', tags: ['people'], ex: ['Desde niños son uña y carne.', '他们从小就形影不离。'] },
    { id: 'no-pegar-ojo', es: 'no pegar ojo', zh: '一夜没合眼', pos: 'phr', level: 'C1', tags: ['body'], ex: ['No pegué ojo por los nervios.', '我紧张得一夜没合眼。'] },
    { id: 'hablar-por-los-codos', es: 'hablar por los codos', zh: '话特别多', pos: 'phr', level: 'C1', tags: ['people'], ex: ['Mi compañero habla por los codos.', '我的同事话特别多。'] },
    { id: 'estar-con-el-agua-al-cuello', es: 'estar con el agua al cuello', zh: '焦头烂额；手头拮据', pos: 'phr', level: 'C1', tags: ['feel'], ex: ['Con tantas deudas, están con el agua al cuello.', '欠了这么多债，他们焦头烂额。'] },
    { id: 'poner-la-mano-en-el-fuego', es: 'poner la mano en el fuego', zh: '打包票', pos: 'phr', level: 'C1', tags: ['people'], ex: ['No pondría la mano en el fuego por nadie.', '我不会为任何人打包票。'] },
    { id: 'dar-la-cara', es: 'dar la cara', zh: '敢于承担；出面', pos: 'phr', level: 'C1', tags: ['people'], ex: ['Hay que dar la cara y pedir perdón.', '要敢于承担、道歉。'] },
    { id: 'lavarse-las-manos', es: 'lavarse las manos', zh: '撇清责任', pos: 'phr', level: 'C1', tags: ['people'], ex: ['El director se lavó las manos.', '经理撇清了自己的责任。'] },
    { id: 'quedarse-con-la-boca-abierta', es: 'quedarse con la boca abierta', zh: '目瞪口呆', pos: 'phr', level: 'C1', tags: ['feel'], ex: ['Al ver el precio, me quedé con la boca abierta.', '看到价格，我目瞪口呆。'] },
    { id: 'irse-de-la-lengua', es: 'irse de la lengua', zh: '说漏嘴', pos: 'phr', level: 'C1', tags: ['people'], ex: ['Se fue de la lengua y contó el secreto.', '他说漏了嘴，把秘密说了出去。'] },
    { id: 'tener-mano-izquierda', es: 'tener mano izquierda', zh: '处事圆滑；会周旋', pos: 'phr', level: 'C1', tags: ['people'], ex: ['Para negociar hay que tener mano izquierda.', '谈判要会周旋。'] },
    { id: 'no-dar-pie-con-bola', es: 'no dar pie con bola', zh: '什么都做不对', pos: 'phr', level: 'C1', tags: ['feel'], ex: ['Estoy tan cansado que no doy pie con bola.', '我累得什么都做不好。'] },
    { id: 'ser-el-ojito-derecho', es: 'ser el ojito derecho', zh: '是（某人的）宠儿', pos: 'phr', level: 'C1', tags: ['family'], ex: ['Es el ojito derecho de su madre.', '他是他妈妈的心头肉。'] },
    { id: 'estar-como-pez-en-el-agua', es: 'estar como pez en el agua', zh: '如鱼得水', pos: 'phr', level: 'C1', tags: ['feel'], ex: ['En las fiestas está como pez en el agua.', '在派对上他如鱼得水。'] },
    { id: 'dar-gato-por-liebre', es: 'dar gato por liebre', zh: '以次充好；蒙骗', pos: 'phr', level: 'C1', tags: ['shop'], ex: ['Cuidado, que en ese mercado te dan gato por liebre.', '小心，那个市场以次充好。'] },
    { id: 'buscarle-tres-pies-al-gato', es: 'buscarle tres pies al gato', zh: '吹毛求疵；自找麻烦', pos: 'phr', level: 'C1', tags: ['feel'], ex: ['No le busques tres pies al gato: es así de sencillo.', '别钻牛角尖了：事情就这么简单。'] },
    { id: 'estar-como-una-cabra', es: 'estar como una cabra', zh: '疯疯癫癫（口语）', pos: 'phr', level: 'C1', tags: ['feel'], ex: ['Mi tío está como una cabra, pero es muy divertido.', '我叔叔疯疯癫癫的，但很有趣。'] },
    { id: 'ser-un-gallina', es: 'ser un gallina', zh: '是个胆小鬼', pos: 'phr', level: 'C1', tags: ['feel'], ex: ['No seas gallina y salta.', '别当胆小鬼，跳吧。'] },
    { id: 'ser-la-oveja-negra', es: 'ser la oveja negra', zh: '是害群之马；家里的“异类”', pos: 'phr', level: 'C1', tags: ['family'], ex: ['Soy la oveja negra de la familia.', '我是家里的异类。'] },
    { id: 'llevarse-el-gato-al-agua', es: 'llevarse el gato al agua', zh: '占上风；赢得胜利', pos: 'phr', level: 'C1', tags: ['func'], ex: ['Al final, fue ella quien se llevó el gato al agua.', '最后占上风的是她。'] },
    { id: 'pedir-peras-al-olmo', es: 'pedir peras al olmo', zh: '缘木求鱼', pos: 'phr', level: 'C1', tags: ['func'], ex: ['Esperar que cambie es pedir peras al olmo.', '指望他改变就是缘木求鱼。'] },
    { id: 'importar-un-pimiento', es: 'importar un pimiento', zh: '毫不在乎', pos: 'phr', level: 'C1', tags: ['feel'], ex: ['Lo que digan me importa un pimiento.', '他们说什么我一点都不在乎。'] },
    { id: 'ponerse-como-un-tomate', es: 'ponerse como un tomate', zh: '脸红得像番茄', pos: 'phr', level: 'C1', tags: ['feel'], ex: ['Se puso como un tomate.', '他脸一下子红了。'] },
    { id: 'mandar-a-freir-esparragos', es: 'mandar a freír espárragos', zh: '把人打发走（让人滚蛋）', pos: 'phr', level: 'C1', tags: ['people'], ex: ['Le pedí ayuda y me mandó a freír espárragos.', '我请他帮忙，他让我一边去。'] },
    { id: 'ahogarse-en-un-vaso-de-agua', es: 'ahogarse en un vaso de agua', zh: '小题大做；遇点小事就慌', pos: 'phr', level: 'C1', tags: ['feel'], ex: ['No te ahogues en un vaso de agua.', '别为一点小事就慌了神。'] },
    { id: 'de-higos-a-brevas', es: 'de higos a brevas', zh: '难得一回', pos: 'phr', level: 'C1', tags: ['time'], ex: ['Nos vemos de higos a brevas.', '我们难得见一面。'] },
    { id: 'cuando-las-ranas-crien-pelo', es: 'cuando las ranas críen pelo', zh: '永远不可能（太阳从西边出来）', pos: 'phr', level: 'C1', tags: ['time'], ex: ['¿Que va a ordenar su cuarto? Sí, cuando las ranas críen pelo.', '他会收拾房间？是啊，等太阳从西边出来吧。'] },
    { id: 'verlo-todo-negro', es: 'verlo todo negro', zh: '什么都往坏处想', pos: 'phr', level: 'C1', tags: ['feel'], ex: ['Últimamente lo veo todo negro.', '最近我看什么都悲观。'] },
    { id: 'estar-sin-blanca', es: 'estar sin blanca', zh: '身无分文', pos: 'phr', level: 'C1', tags: ['shop'], ex: ['A final de mes siempre estoy sin blanca.', '到月底我总是一分钱都没有。'] },
    { id: 'ponerse-morado', es: 'ponerse morado', zh: '吃撑', pos: 'phr', level: 'C1', tags: ['food'], ex: ['En la boda nos pusimos morados.', '在婚礼上我们吃撑了。'] },
    { id: 'principe-azul', es: 'príncipe azul', zh: '白马王子', pos: 'n', g: 'm', level: 'C1', tags: ['people'], ex: ['Ya no espera a ningún príncipe azul.', '她已经不再等什么白马王子了。'] },
    { id: 'tener-mala-pata', es: 'tener mala pata', zh: '运气不好', pos: 'phr', level: 'C1', tags: ['feel'], ex: ['¡Qué mala pata! Se ha pinchado otra rueda.', '真倒霉！又爆了一个胎。'] },
    { id: 'estar-en-el-quinto-pino', es: 'estar en el quinto pino', zh: '在老远的地方', pos: 'phr', level: 'C1', tags: ['city'], ex: ['Su casa está en el quinto pino.', '他家在老远的地方。'] },
    { id: 'faltar-un-tornillo', es: 'faltarle un tornillo', zh: '脑子缺根弦（口语）', pos: 'phr', level: 'C1', tags: ['feel'], ex: ['A ese le falta un tornillo.', '那家伙脑子缺根弦。'] },
    { id: 'tirar-la-toalla', es: 'tirar la toalla', zh: '认输；放弃', pos: 'phr', level: 'C1', tags: ['feel'], ex: ['No tires la toalla tan pronto.', '别这么快就认输。'], ety: '来自拳击：教练把毛巾扔进拳台表示认输。' },
    { id: 'echar-lena-al-fuego', es: 'echar leña al fuego', zh: '火上浇油', pos: 'phr', level: 'C1', tags: ['people'], ex: ['No eches leña al fuego.', '别火上浇油。'] },
    { id: 'coger-el-toro-por-los-cuernos', es: 'coger el toro por los cuernos', zh: '迎难而上', pos: 'phr', level: 'C1', tags: ['feel'], ex: ['Decidió coger el toro por los cuernos y hablar con su jefe.', '他决定迎难而上，去找老板谈。'] },
    { id: 'en-un-abrir-y-cerrar-de-ojos', es: 'en un abrir y cerrar de ojos', zh: '转眼之间', pos: 'phr', level: 'C1', tags: ['time'], ex: ['Lo hizo en un abrir y cerrar de ojos.', '他转眼间就做完了。'] },
    { id: 'a-pedir-de-boca', es: 'a pedir de boca', zh: '称心如意', pos: 'phr', level: 'C1', tags: ['feel'], ex: ['Todo salió a pedir de boca.', '一切都称心如意。'] },
    { id: 'no-hay-mal-que-por-bien-no-venga', es: 'no hay mal que por bien no venga', zh: '塞翁失马，焉知非福', pos: 'phr', level: 'C1', tags: ['func'], ex: ['Perdí el tren, pero conocí a mi mujer: no hay mal que por bien no venga.', '我错过了火车，却因此认识了我妻子：塞翁失马，焉知非福。'] },
    { id: 'del-dicho-al-hecho', es: 'del dicho al hecho hay mucho trecho', zh: '说起来容易做起来难', pos: 'phr', level: 'C1', tags: ['func'], ex: ['Prometió cambiar, pero del dicho al hecho hay mucho trecho.', '他答应会改，但说起来容易做起来难。'] },
    { id: 'en-boca-cerrada', es: 'en boca cerrada no entran moscas', zh: '闭上嘴就不惹事', pos: 'phr', level: 'C1', tags: ['func'], ex: ['Mejor no digas nada: en boca cerrada no entran moscas.', '最好什么都别说：闭上嘴就不惹事。'] },
    { id: 'dime-con-quien-andas', es: 'dime con quién andas y te diré quién eres', zh: '近朱者赤，近墨者黑', pos: 'phr', level: 'C1', tags: ['func'], ex: ['Ojo con esos amigos: dime con quién andas y te diré quién eres.', '小心那些朋友：近朱者赤，近墨者黑。'] },
    { id: 'agua-pasada', es: 'agua pasada no mueve molino', zh: '过去的就让它过去吧', pos: 'phr', level: 'C1', tags: ['func'], ex: ['Olvídalo ya: agua pasada no mueve molino.', '忘了吧：过去的就让它过去。'] },
    { id: 'perro-ladrador', es: 'perro ladrador, poco mordedor', zh: '会叫的狗不咬人', pos: 'phr', level: 'C1', tags: ['func'], ex: ['Grita mucho, pero perro ladrador, poco mordedor.', '他嗓门大，但会叫的狗不咬人。'] },
  ],
  sentences: [
    { id: 's1', es: 'Mis hijas son uña y carne.', zh: '我的两个女儿形影不离。', g: ['c1-modismos-cuerpo'] },
    { id: 's2', es: 'Con el calor no pegué ojo en toda la noche.', zh: '天太热，我一整夜没合眼。', g: ['c1-modismos-cuerpo'], distract: ['ojos'] },
    { id: 's3', es: 'Pongo la mano en el fuego por él.', zh: '我为他打包票。', g: ['c1-modismos-cuerpo'], distract: ['mi'] },
    { id: 's4', es: 'No le cuentes nada, que se va de la lengua.', zh: '什么都别跟他说，他会说漏嘴的。', g: ['c1-modismos-cuerpo'] },
    { id: 's5', es: 'Hoy no doy pie con bola.', zh: '我今天干什么都不顺。', g: ['c1-modismos-cuerpo'] },
    { id: 's6', es: 'En la cocina, mi padre está como pez en el agua.', zh: '在厨房里，我爸如鱼得水。', g: ['c1-modismos-animales-comida'], distract: ['pescado'] },
    { id: 's7', es: 'En ese restaurante te dan gato por liebre.', zh: '那家餐馆以次充好。', g: ['c1-modismos-animales-comida'] },
    { id: 's8', es: 'Pedirle puntualidad a Juan es pedir peras al olmo.', zh: '要胡安守时，简直是缘木求鱼。', g: ['c1-modismos-animales-comida'] },
    { id: 's9', es: 'Este mes estoy sin blanca.', zh: '这个月我身无分文。', g: ['c1-modismos-animales-comida'] },
    { id: 's10', es: 'Lo que digan me importa un pimiento.', zh: '他们说什么我一点都不在乎。', g: ['c1-modismos-animales-comida'] },
    { id: 's11', es: 'Como dice el refrán, no hay mal que por bien no venga.', zh: '正如谚语所说，塞翁失马，焉知非福。', g: ['c1-refranes'] },
    { id: 's12', es: 'Del dicho al hecho hay mucho trecho.', zh: '说起来容易做起来难。', g: ['c1-refranes'] },
    { id: 's13', es: 'Agua pasada no mueve molino: olvídalo.', zh: '过去的就让它过去吧：忘了它。', g: ['c1-refranes'] },
    { id: 's14', es: 'No te preocupes: perro ladrador, poco mordedor.', zh: '别担心：会叫的狗不咬人。', g: ['c1-refranes'] },
    { id: 's15', es: 'No tires la toalla tan pronto.', zh: '别这么快就认输。' },
    { id: 's16', es: 'No eches leña al fuego.', zh: '别火上浇油。' },
    { id: 's17', es: 'Todo salió a pedir de boca.', zh: '一切都称心如意。' },
    { id: 's18', es: 'Su casa está en el quinto pino.', zh: '他家在老远的地方。' },
    { id: 's19', es: 'Me puse como un tomate.', zh: '我脸红得像个番茄。', g: ['c1-modismos-animales-comida'] },
    { id: 's20', es: 'Nos vemos de higos a brevas.', zh: '我们难得见一面。', g: ['c1-modismos-animales-comida'] },
    { id: 's21', es: 'Ya sabes lo que dicen: en boca cerrada no entran moscas.', zh: '你知道人们怎么说：闭上嘴就不惹事。', g: ['c1-refranes'] },
    { id: 's22', es: 'Hay que dar la cara y pedir perdón.', zh: '要敢于承担、道歉。', g: ['c1-modismos-cuerpo'] },
    { id: 's23', es: 'Lo hizo en un abrir y cerrar de ojos.', zh: '他转眼间就做完了。' },
    { id: 's24', es: 'Es el ojito derecho de su abuela.', zh: '他是奶奶的心头肉。', g: ['c1-modismos-cuerpo'] },
    { id: 's25', es: 'No le busques tres pies al gato.', zh: '别钻牛角尖了。', g: ['c1-modismos-animales-comida'] },
  ],
  cloze: [
    { id: 'c1', text: 'Estaba tan nervioso que no pegué ___ en toda la noche.', answers: ['ojo'], options: ['ojo', 'ojos', 'la boca'], zh: '我紧张得一整夜没合眼。', g: ['c1-modismos-cuerpo'] },
    { id: 'c2', text: 'Mi abuela habla por los ___.', answers: ['codos'], options: ['codos', 'dientes', 'pies'], zh: '我奶奶话特别多。', g: ['c1-modismos-cuerpo'] },
    { id: 'c3', text: 'Desde la escuela, Ana y Marta son uña y ___.', answers: ['carne'], options: ['carne', 'dedo', 'piel'], zh: '从上学起，安娜和玛尔塔就形影不离。', g: ['c1-modismos-cuerpo'] },
    { id: 'c4', text: 'Con tantos gastos, estamos con el agua al ___.', answers: ['cuello'], options: ['cuello', 'pecho', 'cuerpo'], zh: '开销这么大，我们焦头烂额。', g: ['c1-modismos-cuerpo'] },
    { id: 'c5', text: 'No cuentes nada delante de él: siempre se ___ de la lengua.', answers: ['va'], options: ['va', 'cae', 'sale'], zh: '别在他面前说什么：他老是说漏嘴。', g: ['c1-modismos-cuerpo'] },
    { id: 'c6', text: 'Cuando le pregunté por su novia, se puso como un ___.', answers: ['tomate'], options: ['tomate', 'pimiento', 'limón'], zh: '我问起他女朋友时，他脸红得像个番茄。', g: ['c1-modismos-animales-comida'] },
    { id: 'c7', text: 'Ese vendedor te dará gato por ___.', answers: ['liebre'], options: ['liebre', 'perro', 'conejo'], zh: '那个商贩会蒙你的。', g: ['c1-modismos-animales-comida'] },
    { id: 'c8', text: 'En su nuevo trabajo está como ___ en el agua.', answers: ['pez'], options: ['pez', 'pescado', 'pato'], zh: '在新工作里他如鱼得水。', g: ['c1-modismos-animales-comida'] },
    { id: 'c9', text: 'Esperar que llegue puntual es pedir ___ al olmo.', answers: ['peras'], options: ['peras', 'manzanas', 'flores'], zh: '指望他准时到就是缘木求鱼。', g: ['c1-modismos-animales-comida'] },
    { id: 'c10', text: 'No me queda nada: estoy sin ___.', answers: ['blanca'], options: ['blanca', 'negra', 'plata'], zh: '我一分钱都没了。', g: ['c1-modismos-animales-comida'] },
    { id: 'c11', text: 'Más vale pájaro en mano que ciento ___.', answers: ['volando'], options: ['volando', 'cantando', 'en el árbol'], zh: '一鸟在手胜过百鸟在林。', g: ['c1-refranes'] },
    { id: 'c12', text: 'No por mucho madrugar ___ más temprano.', answers: ['amanece'], options: ['amanece', 'anochece', 'llega'], zh: '欲速则不达。', g: ['c1-refranes'] },
    { id: 'c13', text: 'Ojos que no ven, corazón que no ___.', answers: ['siente'], options: ['siente', 'llora', 'sabe'], zh: '眼不见，心不烦。', g: ['c1-refranes'] },
    { id: 'c14', text: 'Quien mucho abarca, poco ___.', answers: ['aprieta'], options: ['aprieta', 'come', 'tiene'], zh: '贪多嚼不烂。', g: ['c1-refranes'] },
    { id: 'c15', text: 'No hay mal que por bien no ___.', answers: ['venga'], options: ['venga', 'viene', 'vendrá'], zh: '塞翁失马，焉知非福。', g: ['c1-refranes'] },
    { id: 'c16', text: 'A pesar de todo, no pienso tirar la ___.', answers: ['toalla'], options: ['toalla', 'sábana', 'bandera'], zh: '尽管如此，我也不打算认输。' },
    { id: 'c17', text: 'No eches más ___ al fuego, por favor.', answers: ['leña'], options: ['leña', 'agua', 'aceite'], zh: '请别再火上浇油了。' },
    { id: 'c18', text: 'Su pueblo está en el quinto ___.', answers: ['pino'], options: ['pino', 'árbol', 'monte'], zh: '他的村子在老远的地方。' },
  ],
  conj: [
    { verbs: ['pegar', 'dar', 'irse', 'poner', 'tirar', 'echar'], tenses: ['pret', 'pres'], g: 'c1-modismos-cuerpo' },
  ],
  dialogues: [
    {
      id: 'c1-u06-d1',
      title: '习语接龙 · Una tarde de refranes',
      lines: [
        { who: 'Abuela', es: 'Hijo, ¿qué te pasa? Tienes una cara…', zh: '孩子，你怎么了？脸色这么难看……' },
        { who: 'Wang Lei', es: 'Nada, abuela. Que no he pegado ojo. Mañana tengo el examen del DELE y estoy con el agua al cuello.', zh: '没什么，奶奶。我一晚上没合眼。明天就考 DELE 了，我焦头烂额。' },
        { who: 'Abuela', es: 'Ay, no te ahogues en un vaso de agua. Has estudiado muchísimo. Pongo la mano en el fuego por ti.', zh: '哎呀，别为点小事就慌了神。你学得那么用功。我为你打包票。' },
        { who: 'Wang Lei', es: 'Ya, pero del dicho al hecho hay mucho trecho… ¿Y si me quedo en blanco?', zh: '是啊，可说起来容易做起来难……要是我脑子一片空白怎么办？' },
        { who: 'Abuela', es: 'Pues respiras hondo y sigues. Al mal tiempo, buena cara. Además, no hay mal que por bien no venga.', zh: '那就深呼吸，接着做。逆境中要保持乐观。再说了，塞翁失马，焉知非福。' },
        { who: 'Wang Lei', es: '¡Abuela, hablas solo con refranes! Pareces Sancho Panza.', zh: '奶奶，您说话全是谚语！像桑丘·潘沙一样。' },
        { who: 'Abuela', es: 'Ja, ja. Pues ahí va otro: a quien madruga, Dios le ayuda. ¡A la cama, que mañana es el gran día!', zh: '哈哈。那再送你一句：早起的鸟儿有虫吃。快去睡吧，明天可是大日子！' },
      ],
    },
  ],
  readings: [
    {
      id: 'c1-r11',
      level: 'C1',
      title: 'Un pueblo que habla con refranes',
      titleZh: '一个用谚语说话的民族',
      topic: '语言文化',
      paras: [
        [
          ['Se calcula que el español cuenta con decenas de miles de refranes. Algunos tienen siglos de antigüedad y ya aparecían en colecciones medievales; otros han caído en desuso y solo los recuerdan las personas mayores.', '据估计，西班牙语有数万句谚语。有些已有几百年历史，早在中世纪的谚语集里就出现了；另一些已经不再使用，只有老人还记得。'],
        ],
        [
          ['El personaje literario más famoso por su afición a los refranes es Sancho Panza. En el Quijote, el escudero los encadena uno tras otro, a menudo sin venir a cuento, lo que saca de quicio a su señor.', '文学作品中最以爱说谚语著称的人物是桑丘·潘沙。在《堂吉诃德》中，这位侍从一句接一句地说谚语，常常牛头不对马嘴，把他的主人气得够呛。'],
          ['Los refranes funcionan como pequeñas cápsulas de sabiduría popular: son breves, suelen tener rima y transmiten un consejo o una observación sobre la vida.', '谚语就像一颗颗民间智慧的小胶囊：简短，常常押韵，传达一个建议或对生活的观察。'],
        ],
        [
          ['Hoy en día, muchos jóvenes los usan con ironía o los modifican para crear juegos de palabras. Aun así, siguen vivos. Al fin y al cabo, como dice el propio refranero, «refranes viejos son evangelios chicos».', '如今，很多年轻人带着讽刺的语气使用谚语，或者改编它们来玩文字游戏。即便如此，谚语依然鲜活。毕竟，正如谚语本身所说：“老谚语就是小福音。”'],
        ],
      ],
      gloss: { antigüedad: '历史', desuso: '不再使用', escudero: '侍从', encadena: '一连串地说', 'sin venir a cuento': '不合时宜', 'saca de quicio': '让人抓狂', cápsulas: '胶囊', evangelios: '福音' },
      questions: [
        { type: 'mc', q: '哪个文学人物以爱说谚语出名？', options: ['堂吉诃德', '桑丘·潘沙', '杜尔西内娅'], answer: 1 },
        { type: 'mc', q: '文章说谚语有哪些特点？', options: ['很长、很复杂', '简短、常押韵、传达建议', '只在书面语中使用'], answer: 1 },
        { type: 'tf', q: '文章认为年轻人已经完全不用谚语了。', answer: false, explain: 'muchos jóvenes los usan con ironía… Aun así, siguen vivos.' },
      ],
    },
    {
      id: 'c1-r12',
      level: 'C1',
      title: 'Traducir lo intraducible',
      titleZh: '翻译不可翻译之物',
      topic: '翻译',
      paras: [
        [
          ['Para un traductor, los modismos son una trampa constante. Si se traducen palabra por palabra, el resultado es absurdo: nadie entendería en chino una frase sobre «pedir peras a un olmo».', '对译者来说，习语是一个无处不在的陷阱。逐字翻译的话，结果会很荒谬：用中文说“向榆树要梨”，谁也听不懂。'],
        ],
        [
          ['La solución suele ser buscar una expresión equivalente en la otra lengua. Así, «pedir peras al olmo» puede convertirse en «缘木求鱼», y «dar gato por liebre» en «挂羊头卖狗肉». Curiosamente, en ambos casos cambia el animal o el objeto, pero se mantiene la idea.', '解决办法通常是在另一种语言中找一个对应的说法。于是，“向榆树要梨”可以译成“缘木求鱼”，“以猫充兔”可以译成“挂羊头卖狗肉”。有意思的是，两个例子里动物或物件都变了，但意思保留了下来。'],
          ['Otras veces la coincidencia es casi total: «estar como pez en el agua» y «如鱼得水» comparten la misma imagen, lo que demuestra que ciertas metáforas son universales.', '还有些时候，两者几乎完全一致：“像鱼在水里”和“如鱼得水”用的是同一个意象，这说明有些比喻是全人类共通的。'],
        ],
        [
          ['Cuando no existe equivalente, el traductor tiene que explicar el sentido, aunque se pierda el color de la expresión original. Por eso se dice que traducir es, en el fondo, elegir qué se gana y qué se pierde.', '当找不到对应说法时，译者只能把意思解释出来，哪怕失去了原文的色彩。所以人们说，翻译归根结底就是选择得到什么、失去什么。'],
        ],
      ],
      gloss: { trampa: '陷阱', 'palabra por palabra': '逐字地', equivalente: '对应的', ambos: '两个', coincidencia: '一致', universales: '普遍的', 'en el fondo': '归根结底' },
      questions: [
        { type: 'mc', q: '逐字翻译习语会怎样？', options: ['很准确', '结果荒谬', '更有诗意'], answer: 1 },
        { type: 'mc', q: '哪一对习语用的是同一个意象？', options: ['pedir peras al olmo / 缘木求鱼', 'dar gato por liebre / 挂羊头卖狗肉', 'estar como pez en el agua / 如鱼得水'], answer: 2 },
        { type: 'tf', q: '找不到对应说法时，译者会保留原文的全部色彩。', answer: false, explain: 'aunque se pierda el color de la expresión original' },
      ],
    },
  ],
  writing: [{ id: 'w1', prompt: '选三句你最喜欢的西班牙谚语或习语，找出意思相近的中文成语或俗语，并写一段话比较它们：意象有什么不同？哪一句更生动？再用其中一句讲一个你自己的小故事。', words: [150, 220], hints: ['El refrán «…» equivale al chino «…».', 'En ambos casos…, aunque…', 'Curiosamente, …', 'Me acuerdo de una vez en que…'] }],
}
