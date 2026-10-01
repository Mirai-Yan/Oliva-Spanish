import type { Unit } from '../types'

export const u12: Unit = {
  id: 'b1-u12',
  level: 'B1',
  order: 12,
  title: '求职与工作',
  titleEs: 'El mundo laboral',
  icon: '💼',
  goals: ['用 empezar a、acabar de、dejar de、volver a 等动词短语描述动作的阶段', '用 llevar + 时间 + 副动词、seguir + 副动词 说持续的动作', '写一封正式的求职邮件', '参加面试，介绍自己的经历和能力'],
  grammar: [
    {
      id: 'b1-perifrasis-fase',
      title: '动词短语（一）：开始、结束、重复',
      titleEs: 'Perífrasis de infinitivo',
      level: 'B1',
      summary: 'empezar a / ponerse a（开始）、acabar de（刚刚）、terminar de（做完）、dejar de（停止、戒掉）、volver a（再次）、estar a punto de（正要）+ 原形。',
      body: `这些短语由“变位动词 + 介词 + **原形**”组成，用来描述一个动作处于哪个 **阶段**。

| 阶段 | 短语 | 例句 |
|---|---|---|
| 正要开始 | ***estar a punto de*** | *Estoy a punto de salir.*（我正要出门。） |
| 开始 | ***empezar a / comenzar a*** | *Empecé a trabajar a los veinte años.* |
| 突然开始 | ***ponerse a*** | *De repente se puso a llover.* |
| 做完 | ***terminar de*** | *¿Has terminado de comer?* |
| 刚刚做完 | ***acabar de*** | *Acabo de llegar a la oficina.*（我刚到办公室。） |
| 停止 / 戒掉 | ***dejar de*** | *Dejé de fumar hace un año.* |
| 再次 | ***volver a*** | *Vuelve a llamarme mañana.*（明天再给我打电话。） |

### acabar de：“刚刚”
- 现在时 *acabo de* = 刚刚：*Acaba de salir.*（他刚走。）
- 过去未完成时 *acababa de* = 那时刚刚：*Cuando llamaste, **acababa de** salir.*

### volver a：比 otra vez 更地道
*Lo voy a intentar **otra vez**.* = *Lo voy a **volver a** intentar.*`,
      examples: [
        ['Acabo de enviar mi currículum.', '我刚把简历发出去。'],
        ['Empecé a trabajar a los veintidós años.', '我二十二岁开始工作。'],
        ['Dejé de fumar hace un año.', '我一年前戒了烟。'],
        ['Mañana vuelvo a tener una entrevista.', '明天我又有一场面试。'],
        ['Estaba a punto de salir cuando sonó el teléfono.', '我正要出门，电话响了。'],
      ],
      origin: `**perífrasis** 来自希腊语 *periphrasis*「绕着说」：*peri*「周围」+ *phrasis*「说」——不用一个词，而是用好几个词“绕”着表达。

**acabar** 来自 *cabo*「尽头」（拉丁语 *caput*「头」）：*a + cabo* =“走到头”。所以 *acabar de hacer algo* 字面意思是“刚刚从做某事的尽头走出来”——也就是“刚做完”。`,
      pitfalls: ['❌ *Acabo de terminado.* ✅ *Acabo de terminar.*：介词后面接原形。', '❌ *Dejé fumar.* ✅ *Dejé de fumar.*', '❌ *Estoy a punto a salir.* ✅ *Estoy a punto de salir.*', '❌ *Volví de llamar.* ✅ *Volví a llamar.*'],
    },
    {
      id: 'b1-perifrasis-gerundio',
      title: '动词短语（二）：持续的动作',
      titleEs: 'Perífrasis de gerundio',
      level: 'B1',
      summary: 'llevar + 时间 + 副动词（已经做了多久）；llevar + 时间 + sin + 原形（多久没做了）；seguir / continuar + 副动词（还在做）；ir + 副动词（逐渐）。',
      body: `### llevar + 时间 + 副动词：已经……多久了
*Llevo tres años **estudiando** español.*（我学西班牙语已经三年了。）
= *Hace tres años que **estudio** español.*
= *Estudio español **desde hace** tres años.*

否定：***llevar + 时间 + sin + 原形***
*Llevo dos semanas **sin ver** a mis padres.*（我已经两周没见到父母了。）

问：*¿Cuánto tiempo **llevas** trabajando aquí?*（你在这里工作多久了？）

### seguir / continuar + 副动词：还在……
*¿**Sigues** viviendo en Valencia?*（你还住在瓦伦西亚吗？）
*Sigo **sin** entender este documento.*（我还是看不懂这份文件。）

> ❌ *Sigo a vivir…* ✅ *Sigo viviendo…*

### ir + 副动词：逐渐、一点点地
*Poco a poco **voy entendiendo** cómo funciona la empresa.*（我渐渐弄懂了公司是怎么运作的。）`,
      examples: [
        ['Llevo tres años trabajando en esta empresa.', '我在这家公司工作三年了。'],
        ['Llevo dos semanas sin ver a mis padres.', '我已经两周没见到父母了。'],
        ['¿Sigues viviendo en Valencia?', '你还住在瓦伦西亚吗？'],
        ['Poco a poco voy entendiendo cómo funciona todo.', '我渐渐弄懂了一切是怎么运作的。'],
        ['¿Cuánto tiempo llevas buscando trabajo?', '你找工作多久了？'],
      ],
      origin: `**llevar** 来自拉丁语 *levare*「举起」——举起来就能“带走”。*Llevo tres años aquí* 就像“我身上背着三年的时间”。英语 *lever*（杠杆）、*elevate*（提升）同源。

**seguir** 来自 *sequi*「跟随」：*sigo trabajando* =“我跟着这个动作继续走”。英语 *sequel*（续集）、*consequence*（后果）同源。`,
      pitfalls: ['❌ *Llevo dos años estudio español.* ✅ *Llevo dos años estudiando español.*', '❌ *Sigo a trabajar aquí.* ✅ *Sigo trabajando aquí.*', '❌ *Llevo dos semanas no ver a mis padres.* ✅ *Llevo dos semanas sin ver a mis padres.*'],
    },
    {
      id: 'b1-correo-formal',
      title: '正式邮件和求职信',
      titleEs: 'El correo formal',
      level: 'B1',
      summary: '称呼：Estimado/a señor/a + 姓:（用冒号）；开头：Le escribo para… / Me pongo en contacto con usted para…；结尾：Quedo a la espera de su respuesta. Atentamente / Un cordial saludo。全文用 usted。',
      body: `### 结构
| 部分 | 常用表达 |
|---|---|
| **称呼** | *Estimado señor García:* / *Estimada señora López:* / *Estimados señores:* |
| **说明目的** | *Le escribo para solicitar el puesto de…* / *Me pongo en contacto con usted en relación con…* |
| **主体** | *Tengo experiencia en… / Domino… / Me considero una persona…* |
| **附件** | *Le adjunto mi currículum.* / *Adjunto le envío…* |
| **结束** | *Quedo a la espera de su respuesta.* / *Estoy a su disposición para una entrevista.* |
| **落款** | *Atentamente,* / *Un cordial saludo,* + 姓名 |

### 三个细节
1. 称呼后面用 **冒号**，不是逗号：*Estimada señora López**:***
2. 正式邮件全程用 **usted**：*le escribo*、*su empresa*、*¿Podría…?*
3. 用条件式让请求更客气：*Me **gustaría** saber si… / ¿**Podría** enviarme…?*

### 正式 vs 非正式
| 非正式 | 正式 |
|---|---|
| *Hola, Ana:* | *Estimada señora Ruiz:* |
| *Te escribo porque…* | *Le escribo para…* |
| *Un abrazo* | *Atentamente* |`,
      examples: [
        ['Estimada señora López:', '尊敬的洛佩斯女士：'],
        ['Le escribo para solicitar el puesto de recepcionista.', '我写信是为了申请前台的职位。'],
        ['Le adjunto mi currículum.', '随信附上我的简历。'],
        ['Quedo a la espera de su respuesta.', '期待您的回复。'],
        ['Estoy a su disposición para una entrevista.', '我随时可以参加面试。'],
      ],
      origin: `**currículum** 是拉丁语 *curriculum vitae*「人生的跑道」，来自 *currere*「跑」。英语 *current*（水流）、*course*（课程、路线）都是它的亲戚。

**atentamente** 来自 *atento*「专注的、殷勤的」（拉丁语 *attentus*）。**estimado** 来自 *estimar*「看重」（拉丁语 *aestimare*「估价」，英语 *estimate* 同源）——写 *Estimado señor* 就是“被我看重的先生”。`,
      pitfalls: ['❌ *Querido señor García,* ✅ *Estimado señor García:*（querido 太亲密，称呼后用冒号）', '❌ *Te adjunto mi currículum.*（给陌生公司）✅ *Le adjunto mi currículum.*', '❌ *Atentamente tuyo* ✅ *Atentamente,*'],
    },
  ],
  words: [
    { id: 'puesto', es: 'puesto', zh: '职位；摊位', pos: 'n', g: 'm', level: 'B1', tags: ['job'], ex: ['Busco un puesto de trabajo en marketing.', '我在找市场营销方面的工作。'] },
    { id: 'candidato', es: 'candidato', zh: '候选人；应聘者', pos: 'n', g: 'm', f: 'candidata', level: 'B1', tags: ['job'], ex: ['Hay cincuenta candidatos para el puesto.', '有五十个人应聘这个职位。'], ety: '拉丁语 candidatus「穿白袍的」：古罗马竞选者穿白色（candidus）长袍。' },
    { id: 'candidatura', es: 'candidatura', zh: '应聘；候选资格', pos: 'n', g: 'f', level: 'B1', tags: ['job'], ex: ['Hemos recibido su candidatura.', '我们已收到您的应聘申请。'] },
    { id: 'vacante', es: 'vacante', zh: '空缺职位', pos: 'n', g: 'f', level: 'B1', tags: ['job'], ex: ['Hay una vacante en el departamento de ventas.', '销售部有一个空缺。'] },
    { id: 'formacion', es: 'formación', zh: '教育背景；培训', pos: 'n', g: 'f', level: 'B1', tags: ['job', 'school'], ex: ['¿Qué formación tiene?', '您是什么教育背景？'] },
    { id: 'practicas', es: 'prácticas', zh: '实习', pos: 'n', g: 'f', level: 'B1', tags: ['job'], ex: ['Hice las prácticas en un hotel.', '我在一家酒店实习过。'], note: '用复数：hacer prácticas。' },
    { id: 'becario', es: 'becario', zh: '实习生；奖学金获得者', pos: 'n', g: 'm', f: 'becaria', level: 'B1', tags: ['job'], ex: ['Empecé como becario.', '我是从实习生做起的。'] },
    { id: 'contratar', es: 'contratar', zh: '雇用；签约', pos: 'v', level: 'B1', tags: ['verb', 'job'], ex: ['La empresa va a contratar a diez personas.', '公司要招十个人。'] },
    { id: 'despedir', es: 'despedir', zh: '解雇；送别', pos: 'v', level: 'B1', tags: ['verb', 'job'], ex: ['Lo despidieron el año pasado.', '他去年被解雇了。'], note: 'e→i：despido；despedirse = 告别。' },
    { id: 'despido', es: 'despido', zh: '解雇', pos: 'n', g: 'm', level: 'B1', tags: ['job'], ex: ['Ha habido muchos despidos.', '裁了很多人。'] },
    { id: 'dimitir', es: 'dimitir', zh: '辞职', pos: 'v', level: 'B1', tags: ['verb', 'job'], ex: ['El director ha dimitido.', '经理辞职了。'], note: '一般员工辞职常说 dejar el trabajo。' },
    { id: 'ascender', es: 'ascender', zh: '升职；上升', pos: 'v', level: 'B1', tags: ['verb', 'job'], ex: ['La han ascendido a jefa de equipo.', '她被提升为组长。'], note: 'e→ie：asciendo。' },
    { id: 'ascenso', es: 'ascenso', zh: '升职', pos: 'n', g: 'm', level: 'B1', tags: ['job'], ex: ['¡Enhorabuena por el ascenso!', '恭喜升职！'] },
    { id: 'jornada', es: 'jornada', zh: '工作日；工时', pos: 'n', g: 'f', level: 'B1', tags: ['job'], ex: ['Trabajo a jornada completa.', '我全职工作。'], ety: '来自古奥克语 jornada「一天的路程」，源于拉丁语 diurnus「白天的」。' },
    { id: 'media-jornada', es: 'media jornada', zh: '半职；兼职', pos: 'n', g: 'f', level: 'B1', tags: ['job'], ex: ['Busco un trabajo de media jornada.', '我在找半职工作。'] },
    { id: 'salario', es: 'salario', zh: '工资', pos: 'n', g: 'm', level: 'B1', tags: ['job'], ex: ['El salario depende de la experiencia.', '工资视经验而定。'], ety: '拉丁语 salarium，来自 sal「盐」：传说罗马士兵的部分报酬是买盐的钱。' },
    { id: 'baja', es: 'baja', zh: '病假；离职', pos: 'n', g: 'f', level: 'B1', tags: ['job', 'body'], ex: ['Está de baja por enfermedad.', '他请了病假。'], note: 'baja por maternidad = 产假。' },
    { id: 'autonomo', es: 'autónomo', zh: '自由职业者；自治的', pos: 'n', g: 'm', f: 'autónoma', level: 'B1', tags: ['job'], ex: ['Trabajo como autónomo.', '我是自由职业者。'] },
    { id: 'emprender', es: 'emprender', zh: '创业；着手', pos: 'v', level: 'B1', tags: ['verb', 'job'], ex: ['Quiere emprender su propio negocio.', '他想自己创业。'] },
    { id: 'emprendedor', es: 'emprendedor', zh: '创业者；有进取心的', pos: 'n', g: 'm', f: 'emprendedora', pl: 'emprendedores', level: 'B1', tags: ['job'], ex: ['Es una mujer muy emprendedora.', '她是个很有进取心的女人。'] },
    { id: 'plantilla', es: 'plantilla', zh: '全体员工；模板；鞋垫', pos: 'n', g: 'f', level: 'B1', tags: ['job'], ex: ['La plantilla tiene doscientas personas.', '公司有两百名员工。'] },
    { id: 'departamento', es: 'departamento', zh: '部门；（拉美）公寓', pos: 'n', g: 'm', level: 'B1', tags: ['job'], ex: ['Trabajo en el departamento de ventas.', '我在销售部工作。'], latam: '在阿根廷、墨西哥等地，departamento 也指“公寓”。' },
    { id: 'recursos-humanos', es: 'recursos humanos', zh: '人力资源', pos: 'n', g: 'm', level: 'B1', tags: ['job'], ex: ['Envíe su currículum al departamento de recursos humanos.', '请把简历发给人力资源部。'] },
    { id: 'sede', es: 'sede', zh: '总部；所在地', pos: 'n', g: 'f', level: 'B1', tags: ['job'], ex: ['La sede de la empresa está en Madrid.', '公司总部在马德里。'] },
    { id: 'sucursal', es: 'sucursal', zh: '分公司；分行', pos: 'n', g: 'f', pl: 'sucursales', level: 'B1', tags: ['job'], ex: ['El banco tiene una sucursal en mi barrio.', '这家银行在我住的街区有一家分行。'] },
    { id: 'adjuntar', es: 'adjuntar', zh: '附上', pos: 'v', level: 'B1', tags: ['verb', 'job'], ex: ['Le adjunto el documento.', '随信附上文件。'] },
    { id: 'adjunto', es: 'adjunto', zh: '附件；附上的', pos: 'adj', f: 'adjunta', level: 'B1', tags: ['job'], ex: ['Le envío adjunta la factura.', '附上发票。'] },
    { id: 'estimado', es: 'estimado', zh: '尊敬的（信件称呼）', pos: 'adj', f: 'estimada', level: 'B1', tags: ['job'], ex: ['Estimada señora Ruiz:', '尊敬的鲁伊斯女士：'] },
    { id: 'atentamente', es: 'atentamente', zh: '此致敬礼（信件落款）；专心地', pos: 'adv', level: 'B1', tags: ['job'], ex: ['Atentamente, Li Na', '此致敬礼，李娜'] },
    { id: 'cordial', es: 'cordial', zh: '亲切的；诚挚的', pos: 'adj', level: 'B1', tags: ['job'], ex: ['Un cordial saludo.', '诚挚问候。'], ety: '来自拉丁语 cor「心」：“发自内心的”。' },
    { id: 'disponibilidad', es: 'disponibilidad', zh: '可用的时间；可调配性', pos: 'n', g: 'f', level: 'B1', tags: ['job'], ex: ['Tengo disponibilidad inmediata.', '我可以马上入职。'] },
    { id: 'incorporarse', es: 'incorporarse', zh: '加入；入职', pos: 'v', level: 'B1', tags: ['verb', 'job'], ex: ['Me incorporo a la empresa el lunes.', '我星期一入职。'] },
    { id: 'motivado', es: 'motivado', zh: '有干劲的', pos: 'adj', f: 'motivada', level: 'B1', tags: ['job', 'feel'], ex: ['Buscamos personas motivadas.', '我们在找有干劲的人。'] },
    { id: 'eficaz', es: 'eficaz', zh: '有效的；能干的', pos: 'adj', pl: 'eficaces', level: 'B1', tags: ['job'], ex: ['Es una solución muy eficaz.', '这是个非常有效的办法。'] },
    { id: 'capaz', es: 'capaz', zh: '有能力的', pos: 'adj', pl: 'capaces', level: 'B1', tags: ['job'], ex: ['Eres capaz de hacerlo.', '你能做到的。'], note: 'ser capaz de + 原形 = 能够……' },
    { id: 'habilidad', es: 'habilidad', zh: '技能；本领', pos: 'n', g: 'f', pl: 'habilidades', level: 'B1', tags: ['job'], ex: ['Tiene muchas habilidades sociales.', '他社交能力很强。'] },
    { id: 'trabajo-en-equipo', es: 'trabajo en equipo', zh: '团队合作', pos: 'n', g: 'm', level: 'B1', tags: ['job'], ex: ['Se me da bien el trabajo en equipo.', '我很擅长团队合作。'] },
    { id: 'convocatoria', es: 'convocatoria', zh: '招聘公告；（考试）通知', pos: 'n', g: 'f', level: 'B1', tags: ['job'], ex: ['Han publicado la convocatoria de becas.', '奖学金申请通知已经发布。'] },
    { id: 'reunirse', es: 'reunirse', zh: '开会；聚在一起', pos: 'v', level: 'B1', tags: ['verb', 'job'], ex: ['Nos reunimos todos los lunes.', '我们每周一开会。'], note: '重音：me reúno。' },
    { id: 'sector', es: 'sector', zh: '行业；领域', pos: 'n', g: 'm', pl: 'sectores', level: 'B1', tags: ['job'], ex: ['Trabajo en el sector del turismo.', '我在旅游业工作。'] },
    { id: 'acabar-de', es: 'acabar de', zh: '刚刚（做完）', pos: 'phr', level: 'B1', tags: ['func'], ex: ['Acabo de llegar.', '我刚到。'] },
    { id: 'dejar-de', es: 'dejar de', zh: '停止；戒掉', pos: 'phr', level: 'B1', tags: ['func'], ex: ['¡Deja de mirar el móvil!', '别再看手机了！'] },
    { id: 'volver-a', es: 'volver a', zh: '再次（做）', pos: 'phr', level: 'B1', tags: ['func'], ex: ['No vuelvas a hacerlo.', '别再这么做了。'] },
    { id: 'estar-a-punto-de', es: 'estar a punto de', zh: '正要；差点', pos: 'phr', level: 'B1', tags: ['func'], ex: ['Estuve a punto de perder el tren.', '我差点误了火车。'] },
    { id: 'ponerse-a', es: 'ponerse a', zh: '开始（做）', pos: 'phr', level: 'B1', tags: ['func'], ex: ['Se puso a llorar.', '她哭了起来。'] },
  ],
  sentences: [
    { id: 's1', es: 'Acabo de enviar mi currículum.', zh: '我刚把简历发出去。', g: ['b1-perifrasis-fase'], distract: ['enviado'] },
    { id: 's2', es: 'Empecé a trabajar a los veintidós años.', zh: '我二十二岁开始工作。', g: ['b1-perifrasis-fase'] },
    { id: 's3', es: 'Dejé de fumar hace un año.', zh: '我一年前戒了烟。', g: ['b1-perifrasis-fase'] },
    { id: 's4', es: 'Mañana vuelvo a tener una entrevista.', zh: '明天我又有一场面试。', g: ['b1-perifrasis-fase'] },
    { id: 's5', es: 'Estaba a punto de salir cuando sonó el teléfono.', zh: '我正要出门，电话响了。', g: ['b1-perifrasis-fase'] },
    { id: 's6', es: 'Llevo tres años trabajando en esta empresa.', zh: '我在这家公司工作三年了。', g: ['b1-perifrasis-gerundio'], distract: ['trabajo'] },
    { id: 's7', es: 'Llevo dos semanas sin ver a mis padres.', zh: '我已经两周没见到父母了。', g: ['b1-perifrasis-gerundio'] },
    { id: 's8', es: '¿Sigues viviendo en Valencia?', zh: '你还住在瓦伦西亚吗？', g: ['b1-perifrasis-gerundio'] },
    { id: 's9', es: 'Poco a poco voy entendiendo cómo funciona todo.', zh: '我渐渐弄懂了一切是怎么运作的。', g: ['b1-perifrasis-gerundio'] },
    { id: 's10', es: '¿Cuánto tiempo llevas buscando trabajo?', zh: '你找工作多久了？', g: ['b1-perifrasis-gerundio'] },
    { id: 's11', es: 'Le escribo para solicitar el puesto de recepcionista.', zh: '我写信是为了申请前台的职位。', g: ['b1-correo-formal'], distract: ['Te'] },
    { id: 's12', es: 'Le adjunto mi currículum.', zh: '随信附上我的简历。', g: ['b1-correo-formal'] },
    { id: 's13', es: 'Quedo a la espera de su respuesta.', zh: '期待您的回复。', g: ['b1-correo-formal'] },
    { id: 's14', es: 'Estoy a su disposición para una entrevista.', zh: '我随时可以参加面试。', g: ['b1-correo-formal'] },
    { id: 's15', es: 'Trabajo a jornada completa.', zh: '我全职工作。' },
    { id: 's16', es: 'Hice las prácticas en un hotel de Barcelona.', zh: '我在巴塞罗那的一家酒店实习过。' },
    { id: 's17', es: 'La han ascendido a jefa de equipo.', zh: '她被提升为组长了。' },
    { id: 's18', es: 'Se me da bien el trabajo en equipo.', zh: '我很擅长团队合作。' },
    { id: 's19', es: 'Tengo disponibilidad inmediata.', zh: '我可以马上入职。' },
    { id: 's20', es: 'De repente se puso a llover.', zh: '突然下起雨来。', g: ['b1-perifrasis-fase'] },
    { id: 's21', es: 'Sigo sin entender este documento.', zh: '我还是看不懂这份文件。', g: ['b1-perifrasis-gerundio'] },
    { id: 's22', es: 'Me incorporo a la empresa el lunes.', zh: '我星期一入职。' },
    { id: 's23', es: '¿Has terminado de escribir el informe?', zh: '你报告写完了吗？', g: ['b1-perifrasis-fase'] },
    { id: 's24', es: 'Estimada señora López:', zh: '尊敬的洛佩斯女士：', g: ['b1-correo-formal'] },
    { id: 's25', es: 'Quiere emprender su propio negocio.', zh: '他想自己创业。' },
  ],
  cloze: [
    { id: 'c1', text: 'Acabo ___ hablar con el jefe.', answers: ['de'], options: ['de', 'a', 'que'], zh: '我刚和老板谈完。', g: ['b1-perifrasis-fase'] },
    { id: 'c2', text: 'Empecé ___ estudiar español en 2020.', answers: ['a'], options: ['a', 'de', 'por'], zh: '我 2020 年开始学西班牙语。', g: ['b1-perifrasis-fase'] },
    { id: 'c3', text: 'Mi padre dejó ___ fumar hace diez años.', answers: ['de'], options: ['de', 'a', 'en'], zh: '我爸十年前戒了烟。', g: ['b1-perifrasis-fase'] },
    { id: 'c4', text: 'Si no contesta, ___ a llamarlo mañana.', answers: ['vuelve'], options: ['vuelve', 'vuelves', 'volver'], zh: '如果他不接，明天再给他打。', g: ['b1-perifrasis-fase'] },
    { id: 'c5', text: 'Estábamos a punto ___ cenar cuando llegaron.', answers: ['de'], options: ['de', 'a', 'para'], zh: '我们正要吃晚饭，他们就到了。', g: ['b1-perifrasis-fase'] },
    { id: 'c6', text: 'Cuando vio la nota, se ___ a llorar.', answers: ['puso'], options: ['puso', 'pone', 'ponía'], zh: '看到成绩，她哭了起来。', g: ['b1-perifrasis-fase'] },
    { id: 'c7', text: 'Llevo cinco años ___ en Madrid.', answers: ['viviendo'], hint: 'vivir', zh: '我在马德里住了五年了。', g: ['b1-perifrasis-gerundio'] },
    { id: 'c8', text: 'Llevo una semana sin ___ bien.', answers: ['dormir'], options: ['dormir', 'durmiendo', 'duermo'], zh: '我已经一周没睡好了。', g: ['b1-perifrasis-gerundio'] },
    { id: 'c9', text: '¿Sigues ___ en el mismo hospital?', answers: ['trabajando'], hint: 'trabajar', zh: '你还在那家医院工作吗？', g: ['b1-perifrasis-gerundio'] },
    { id: 'c10', text: '¿Cuánto tiempo ___ (tú) esperando?', answers: ['llevas'], hint: 'llevar', zh: '你等了多久了？', g: ['b1-perifrasis-gerundio'] },
    { id: 'c11', text: 'Poco a poco ___ aprendiendo a cocinar.', answers: ['voy'], options: ['voy', 'llevo', 'acabo'], zh: '我在一点点学做饭。', g: ['b1-perifrasis-gerundio'] },
    { id: 'c12', text: 'Hace tres años ___ trabajo aquí.', answers: ['que'], options: ['que', 'de', 'cuando'], zh: '我在这里工作三年了。', g: ['b1-perifrasis-gerundio'] },
    { id: 'c13', text: '___ señor García:', answers: ['Estimado'], options: ['Estimado', 'Querido', 'Hola'], zh: '尊敬的加西亚先生：', g: ['b1-correo-formal'] },
    { id: 'c14', text: '___ escribo para solicitar información sobre el curso.', answers: ['Le'], options: ['Le', 'Te', 'Lo'], zh: '我写信是想咨询课程信息。', g: ['b1-correo-formal'] },
    { id: 'c15', text: 'Quedo a la ___ de su respuesta.', answers: ['espera'], options: ['espera', 'esperanza', 'esperando'], zh: '期待您的回复。', g: ['b1-correo-formal'] },
    { id: 'c16', text: 'Le ___ mi currículum.', answers: ['adjunto'], options: ['adjunto', 'adjunta', 'adjuntado'], zh: '随信附上我的简历。', g: ['b1-correo-formal'] },
    { id: 'c17', text: '¿___ enviarme más información, por favor?', answers: ['Podría'], options: ['Podría', 'Puedes', 'Podrás'], zh: '您能给我发更多信息吗？', g: ['b1-correo-formal'] },
    { id: 'c18', text: '¿Has terminado ___ leer el contrato?', answers: ['de'], options: ['de', 'a', 'por'], zh: '你看完合同了吗？', g: ['b1-perifrasis-fase'] },
  ],
  conj: [
    { verbs: ['seguir', 'volver', 'ponerse', 'despedir', 'ascender', 'reunirse'], tenses: ['pres'], g: 'b1-perifrasis-gerundio' },
    { verbs: ['empezar', 'dejar', 'ponerse', 'despedir', 'dimitir', 'seguir'], tenses: ['pret'], g: 'b1-perifrasis-fase' },
  ],
  dialogues: [
    {
      id: 'b1-u12-d1',
      title: '面试 · La entrevista de trabajo',
      lines: [
        { who: 'Entrevistadora', es: 'Buenos días. Siéntese, por favor. Cuénteme un poco sobre usted.', zh: '早上好。请坐。先简单介绍一下您自己吧。' },
        { who: 'Li Na', es: 'Me llamo Li Na. Soy licenciada en Turismo y llevo dos años trabajando en un hotel en Shanghái.', zh: '我叫李娜。我是旅游专业本科毕业，在上海一家酒店工作了两年。' },
        { who: 'Entrevistadora', es: '¿Y por qué quiere trabajar en España?', zh: '那您为什么想在西班牙工作？' },
        { who: 'Li Na', es: 'Empecé a estudiar español en la universidad y me enamoré del país. Además, cada vez vienen más turistas chinos y creo que puedo ayudar a atenderlos.', zh: '我在大学开始学西班牙语，就爱上了这个国家。而且来西班牙的中国游客越来越多，我觉得我能帮忙接待他们。' },
        { who: 'Entrevistadora', es: 'Muy bien. ¿Cuáles son sus puntos fuertes?', zh: '很好。您的优点是什么？' },
        { who: 'Li Na', es: 'Soy muy organizada y se me da bien el trabajo en equipo. También hablo chino, inglés y español.', zh: '我很有条理，擅长团队合作。我还会说中文、英文和西班牙语。' },
        { who: 'Entrevistadora', es: '¿Y algún punto débil?', zh: '那缺点呢？' },
        { who: 'Li Na', es: 'A veces soy demasiado perfeccionista, pero estoy aprendiendo a delegar. Y tengo disponibilidad inmediata.', zh: '有时我太追求完美了，不过我正在学着分派任务。另外我可以马上入职。' },
        { who: 'Entrevistadora', es: 'Perfecto. Acabamos de terminar las entrevistas de hoy; le llamaremos la semana que viene.', zh: '好的。今天的面试刚刚全部结束；我们下周给您打电话。' },
      ],
    },
  ],
  readings: [
    {
      id: 'b1-r23',
      level: 'B1',
      title: 'Oferta de empleo y carta de presentación',
      titleZh: '招聘启事和求职信',
      topic: '求职',
      paras: [
        [
          ['OFERTA: Hotel de cuatro estrellas en Sevilla busca recepcionista. Requisitos: experiencia mínima de un año, nivel alto de inglés y disponibilidad para trabajar los fines de semana. Se valorarán otros idiomas. Contrato de un año, jornada completa.', '招聘：塞维利亚一家四星级酒店招聘前台。要求：至少一年工作经验，英语水平高，能在周末工作。会其他语言者优先。合同一年，全职。'],
        ],
        [
          ['Estimados señores: Me pongo en contacto con ustedes para solicitar el puesto de recepcionista publicado en su página web.', '尊敬的先生们 / 女士们：我写信是为了申请贵酒店在官网上发布的前台职位。'],
          ['Soy licenciado en Turismo y llevo un año y medio trabajando en la recepción de un hotel en Pekín. Hablo chino, inglés y español, y acabo de aprobar el examen DELE B2.', '我是旅游专业本科毕业，在北京一家酒店的前台工作了一年半。我会说中文、英文和西班牙语，并且刚刚通过了 DELE B2 考试。'],
        ],
        [
          ['Me considero una persona responsable, amable y con mucha capacidad de trabajo en equipo. Además, tengo disponibilidad inmediata y no me importa trabajar los fines de semana.', '我认为自己是一个负责、友善、很有团队合作能力的人。此外，我可以立即入职，也不介意周末工作。'],
          ['Les adjunto mi currículum. Quedo a la espera de su respuesta. Atentamente, Zhang Wei', '随信附上我的简历。期待您的回复。此致敬礼，张伟'],
        ],
      ],
      gloss: { requisitos: '要求', mínima: '最少的', valorarán: '会优先考虑', licenciado: '本科毕业的', recepción: '前台', considero: '认为', capacidad: '能力', adjunto: '附上' },
      questions: [
        { type: 'mc', q: '下面哪一项不是招聘要求？', options: ['一年工作经验', '会开车', '能在周末工作'], answer: 1 },
        { type: 'mc', q: '张伟在北京做前台多久了？', options: ['半年', '一年半', '三年'], answer: 1 },
        { type: 'tf', q: '张伟不想在周末工作。', answer: false, explain: 'no me importa trabajar los fines de semana' },
      ],
    },
    {
      id: 'b1-r24',
      level: 'B1',
      title: 'De becaria a directora',
      titleZh: '从实习生到总监',
      topic: '职业',
      paras: [
        [
          ['Carmen Ortega empezó a trabajar en una pequeña empresa de software de Valencia cuando tenía veintitrés años. Entró como becaria y su sueldo era muy bajo.', '卡门·奥尔特加二十三岁时开始在瓦伦西亚一家小型软件公司工作。她以实习生身份入职，工资很低。'],
        ],
        [
          ['«Al principio no sabía nada», recuerda. «Pero me ponía a estudiar todas las noches y poco a poco fui aprendiendo». Dos años después, la contrataron con un contrato fijo.', '“一开始我什么都不会，”她回忆道，“但我每天晚上都学习，一点点学会了。”两年后，公司跟她签了正式合同。'],
          ['Durante la crisis, la empresa estuvo a punto de cerrar y despidieron a la mitad de la plantilla. Ella siguió trabajando y, además, volvió a estudiar: hizo un máster por las noches.', '经济危机期间，公司差点倒闭，裁掉了一半员工。她继续工作，还重新回到学校：晚上读了一个硕士。'],
        ],
        [
          ['Hoy Carmen lleva quince años en la empresa y acaba de ser nombrada directora general. «Nunca dejé de aprender», dice. «Ese es mi único secreto».', '如今卡门已经在这家公司工作了十五年，刚刚被任命为总经理。“我从未停止学习，”她说，“这是我唯一的秘诀。”'],
        ],
      ],
      gloss: { software: '软件', sueldo: '工资', fijo: '固定的；正式的', crisis: '危机', mitad: '一半', plantilla: '全体员工', máster: '硕士', nombrada: '被任命', directora: '总监' },
      questions: [
        { type: 'mc', q: '卡门是以什么身份进入公司的？', options: ['总经理', '实习生', '程序员'], answer: 1 },
        { type: 'mc', q: '经济危机时公司发生了什么？', options: ['搬到了马德里', '差点倒闭，裁了一半员工', '招了很多人'], answer: 1 },
        { type: 'tf', q: '卡门在公司工作了十五年。', answer: true, explain: 'lleva quince años en la empresa' },
      ],
    },
  ],
  writing: [{ id: 'w1', prompt: '找一则你感兴趣的招聘启事（或者自己编一则），写一封正式的求职邮件：介绍你的学历和经验（用 llevar + 副动词、acabar de 等），说明你为什么适合这个职位，最后礼貌地结尾。', words: [100, 180], hints: ['Estimados señores: / Estimada señora…:', 'Le escribo para solicitar…', 'Llevo… años trabajando… / Acabo de…', 'Quedo a la espera de su respuesta. Atentamente,'] }],
}
