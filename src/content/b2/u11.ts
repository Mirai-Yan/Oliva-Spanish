import type { Unit } from '../types'

export const u11: Unit = {
  id: 'b2-u11',
  level: 'B2',
  order: 11,
  title: '正式书信与投诉',
  titleEs: 'Le agradecería que…',
  icon: '✉️',
  goals: ['用 le agradecería que + 虚拟式过去时 等结构提出正式请求', '按标准格式写一封投诉信', '把口语词换成正式用语：pedir → solicitar, dar → facilitar', '了解消费者和乘客的基本权利'],
  grammar: [
    {
      id: 'b2-cortesia-formal',
      title: '正式请求：le agradecería que…',
      titleEs: 'Peticiones formales',
      level: 'B2',
      summary: '条件式 + que + 虚拟式过去时：Le agradecería que me enviara… Les rogaría que… ¿Sería tan amable de + 原形? ¿Tendría la amabilidad de + 原形? Quisiera solicitar…',
      body: `### 从客气到非常客气
| 结构 | 例句 |
|---|---|
| *¿Podría* + 原形? | *¿**Podría** enviarme la factura?* |
| *Quisiera* + 原形 | ***Quisiera** solicitar información sobre…* |
| *Le agradecería que* + 虚拟式过去时 | ***Le agradecería que** me **enviara** la factura.* |
| *Les rogaría que* + 虚拟式过去时 | ***Les rogaría que** **revisaran** mi caso.* |
| *¿Sería tan amable de* + 原形? | *¿**Sería tan amable de** indicarme el horario?* |
| *¿Tendría la amabilidad de* + 原形? | *¿**Tendría la amabilidad de** firmar aquí?* |

### 为什么是虚拟式过去时？
主句用的是 **条件式**（*agradecería, rogaría*），按照时态呼应，从句要用 **虚拟式过去时**。
- *Le **agradezco** que me **haya escrito**.*（感谢您来信——已经发生）
- *Le **agradecería** que me **escribiera**.*（如果您能写信给我，我会很感激——请求）

### 结尾常用句
- *Agradeciendo de antemano su atención, …*（先行致谢）
- *Quedo a la espera de su respuesta.*
- *Sin otro particular, le saluda atentamente, …*（别无他事，此致）`,
      examples: [
        ['Le agradecería que me enviara la factura por correo electrónico.', '如果您能通过邮件把发票发给我，我将不胜感激。'],
        ['Les rogaría que revisaran mi caso lo antes posible.', '恳请贵方尽快审核我的情况。'],
        ['¿Sería tan amable de indicarme dónde está la sala de reuniones?', '请问您能告诉我会议室在哪里吗？'],
        ['Quisiera solicitar información sobre el curso de verano.', '我想咨询一下暑期课程的信息。'],
        ['Sin otro particular, le saluda atentamente, Lin Hua.', '别无他事，此致敬礼，林华。'],
      ],
      tables: [{ verbs: ['agradecer', 'rogar', 'poder'], tense: 'cond' }],
      origin: `**amabilidad** 来自拉丁语 *amabilis*「可爱的、值得爱的」（*amare*「爱」）——请求别人“有这份可爱之心”帮你一个忙。

**agradecer** 由 *a-* + 古西语 *gradecer* 组成，词根是拉丁语 *gratus*「感激的、令人愉快的」，和 *gracias*、*grato*（令人愉快的）同源：*Me es grato comunicarle…*（我很高兴通知您……）。`,
      pitfalls: ['❌ *Le agradecería que me envíe…* ✅ *Le agradecería que me enviara…*', '❌ *¿Sería tan amable para indicarme…?* ✅ *¿Sería tan amable de indicarme…?*', '❌ *Le agradecería si me envía…* ✅ *Le agradecería que me enviara…*'],
    },
    {
      id: 'b2-carta-reclamacion',
      title: '投诉信的结构',
      titleEs: 'La carta de reclamación',
      level: 'B2',
      summary: '称呼（Estimados señores:）→ 说明目的（Me dirijo a ustedes para…）→ 陈述事实（时间、地点、经过）→ 提出要求（Les ruego que / Exijo que + 虚拟式）→ 后果（En caso contrario, me veré obligado a…）→ 结尾。',
      body: `### 一封投诉信的六个部分
| 部分 | 常用表达 |
|---|---|
| **1. 称呼** | *Estimados señores:* / *Muy señores míos:* / *A la atención del Departamento de…* |
| **2. 目的** | *Me dirijo a ustedes **con el fin de** presentar una reclamación…* / *Por medio de la presente…* |
| **3. 事实** | *El pasado 3 de mayo **adquirí**… / **Según consta en** la factura adjunta…* |
| **4. 问题** | *Lamento comunicarles que… / **Para mi sorpresa**, … / A día de hoy, **todavía no** he recibido…* |
| **5. 要求** | ***Les ruego que** me devuelvan el importe.* / ***Exijo que** se me compense…* |
| **6. 后果和结尾** | ***En caso contrario**, **me veré obligado/a a** acudir a la Oficina del Consumidor. **A la espera de** sus noticias, les saluda atentamente,* |

### 细节
- 西班牙语书信的称呼后用 **冒号**。
- 日期写在右上角：*Sevilla, 12 de marzo de 2026*
- **Asunto**（事由）：*Asunto: Reclamación por retraso en la entrega*
- 用 **ustedes**（对公司）或 **usted**（对个人），全文保持一致。`,
      examples: [
        ['Me dirijo a ustedes con el fin de presentar una reclamación.', '我写信是为了提出投诉。'],
        ['El pasado 3 de mayo adquirí una lavadora en su tienda.', '我于 5 月 3 日在贵店购买了一台洗衣机。'],
        ['A día de hoy, todavía no he recibido ninguna respuesta.', '截至今日，我仍未收到任何答复。'],
        ['Les ruego que me devuelvan el importe íntegro.', '恳请贵方全额退款。'],
        ['En caso contrario, me veré obligada a acudir a la Oficina del Consumidor.', '否则，我将不得不向消费者办公室投诉。'],
      ],
      origin: `**reclamar** 来自拉丁语 *reclamare*「大声反对」：*re*「反」+ *clamare*「呼喊」。投诉就是“喊出你的不满”——不过在书信里要喊得很礼貌。

**la presente** 是 *la presente carta*（这封信）的省略：*Por medio de la presente le comunico…*（特此通知您……）。`,
      pitfalls: ['❌ *Estimados señores,* ✅ *Estimados señores:*：称呼后用冒号。', '❌ *En relación a su carta…* ✅ *En relación con su carta… / Con relación a su carta…*', '❌ *Les ruego que me devuelven el dinero.* ✅ *Les ruego que me devuelvan el dinero.*'],
    },
    {
      id: 'b2-registro-formal',
      title: '正式用语：换掉口语词',
      titleEs: 'Del registro coloquial al formal',
      level: 'B2',
      summary: '正式文体中，常把简单动词换成更正式的同义词：pedir → solicitar, dar → facilitar / proporcionar, decir → comunicar / informar, empezar → iniciar, terminar → finalizar, mandar → remitir, arreglar → subsanar, por eso → por ello。',
      body: `### 口语 → 正式
| 口语 | 正式 | 例句 |
|---|---|---|
| *pedir* | ***solicitar*** | *Solicito una cita con el director.* |
| *dar* | ***facilitar / proporcionar*** | *Le facilitamos el número de expediente.* |
| *decir* | ***comunicar / informar de*** | *Le comunicamos que su solicitud ha sido aceptada.* |
| *empezar / terminar* | ***iniciar / finalizar*** | *El plazo finaliza el 30 de junio.* |
| *mandar* | ***remitir / enviar*** | *Le remito la documentación solicitada.* |
| *arreglar* | ***subsanar / resolver*** | *Les rogamos que subsanen el error.* |
| *ver, mirar* | ***comprobar / revisar*** | *Hemos comprobado que…* |
| *poner* | ***colocar / incluir*** | *Coloque el documento en el sobre.* |
| *por eso* | ***por ello / por consiguiente*** | *Por ello, le solicitamos…* |
| *sobre* | ***con respecto a / en relación con*** | *Con respecto a su consulta, …* |
| *para* | ***con el fin de / a fin de*** | *A fin de agilizar el trámite, …* |

### 但别过头！
正式不等于复杂。一封好的正式信件应该 **清楚、简洁、有礼貌**。`,
      examples: [
        ['Le comunicamos que su solicitud ha sido aceptada.', '特此通知，您的申请已获批准。'],
        ['Le remito la documentación solicitada.', '现将所需材料寄送给您。'],
        ['El plazo de inscripción finaliza el 30 de junio.', '报名截止日期为 6 月 30 日。'],
        ['Les rogamos que subsanen el error en la factura.', '请贵方更正发票中的错误。'],
        ['Por ello, le solicitamos que nos facilite su número de cliente.', '因此，请您提供客户编号。'],
      ],
      origin: `**solicitar** 来自拉丁语 *sollicitare*「搅动、使不安」——最早的意思是“缠着别人、催促别人”，后来才变成礼貌的“申请”。英语 *solicit*（恳求）同源。

西班牙语的正式词汇大多是 **拉丁语的“学术借词”**：*facilitar*（← *facilis*「容易的」：让事情变容易）、*finalizar*（← *finis*「结束」）、*remitir*（← *remittere*「送回」）。它们进入西语比较晚，所以听起来更“书面”。`,
      pitfalls: ['❌ 在正式信件中用 *vale*、*o sea*、*¿sabes?* ✅ 用 *de acuerdo*、*es decir*。', '❌ *Les informamos que…*（在西班牙的正式书面语中被视为漏掉了 de）✅ *Les informamos de que…*', '❌ *Le hago saber a usted que…*（过于啰嗦）✅ *Le comunico que…*'],
    },
  ],
  words: [
    { id: 'hoja-de-reclamaciones', es: 'hoja de reclamaciones', zh: '投诉单', pos: 'n', g: 'f', level: 'B2', tags: ['shop'], ex: ['Quiero una hoja de reclamaciones, por favor.', '请给我一张投诉单。'], note: '在西班牙，所有商家都必须备有官方投诉单。' },
    { id: 'consumidor', es: 'consumidor', zh: '消费者', pos: 'n', g: 'm', f: 'consumidora', pl: 'consumidores', level: 'B2', tags: ['shop'], ex: ['Conozca sus derechos como consumidor.', '了解您作为消费者的权利。'] },
    { id: 'atencion-al-cliente', es: 'atención al cliente', zh: '客户服务', pos: 'n', g: 'f', level: 'B2', tags: ['shop'], ex: ['Llamé al servicio de atención al cliente.', '我给客服打了电话。'] },
    { id: 'servicio-tecnico', es: 'servicio técnico', zh: '售后维修服务', pos: 'n', g: 'm', level: 'B2', tags: ['shop'], ex: ['Hay que llevarlo al servicio técnico.', '得送去售后维修。'] },
    { id: 'reembolso', es: 'reembolso', zh: '退款', pos: 'n', g: 'm', level: 'B2', tags: ['shop'], ex: ['Solicité el reembolso del billete.', '我申请了退票款。'] },
    { id: 'indemnizacion', es: 'indemnización', zh: '赔偿金', pos: 'n', g: 'f', pl: 'indemnizaciones', level: 'B2', tags: ['shop'], ex: ['Recibió una indemnización por el retraso.', '他因延误获得了赔偿。'] },
    { id: 'indemnizar', es: 'indemnizar', zh: '赔偿', pos: 'v', level: 'B2', tags: ['verb', 'shop'], ex: ['La compañía debe indemnizar a los pasajeros.', '公司应当赔偿乘客。'] },
    { id: 'compensacion', es: 'compensación', zh: '补偿', pos: 'n', g: 'f', pl: 'compensaciones', level: 'B2', tags: ['shop'], ex: ['Exijo una compensación.', '我要求补偿。'] },
    { id: 'defectuoso', es: 'defectuoso', zh: '有缺陷的', pos: 'adj', f: 'defectuosa', level: 'B2', tags: ['shop'], ex: ['El producto llegó defectuoso.', '产品到货时就有缺陷。'] },
    { id: 'deficiente', es: 'deficiente', zh: '差劲的；不足的', pos: 'adj', level: 'B2', tags: ['shop'], ex: ['El servicio fue muy deficiente.', '服务非常差。'] },
    { id: 'incumplir', es: 'incumplir', zh: '违反；未履行', pos: 'v', level: 'B2', tags: ['verb'], ex: ['La empresa ha incumplido el contrato.', '公司违反了合同。'] },
    { id: 'incumplimiento', es: 'incumplimiento', zh: '违约；未履行', pos: 'n', g: 'm', level: 'B2', tags: ['shop'], ex: ['Reclamo por incumplimiento del plazo de entrega.', '我就未按期交货提出投诉。'] },
    { id: 'entrega', es: 'entrega', zh: '交付；送货', pos: 'n', g: 'f', level: 'B2', tags: ['shop'], ex: ['La entrega está prevista para el lunes.', '预计周一送达。'] },
    { id: 'anomalia', es: 'anomalía', zh: '异常', pos: 'n', g: 'f', level: 'B2', tags: ['func'], ex: ['Hemos detectado una anomalía en su cuenta.', '我们发现您的账户有异常。'] },
    { id: 'incidencia', es: 'incidencia', zh: '故障；问题（正式）', pos: 'n', g: 'f', level: 'B2', tags: ['func'], ex: ['Hemos registrado su incidencia.', '我们已登记您的问题。'] },
    { id: 'subsanar', es: 'subsanar', zh: '纠正；弥补（正式）', pos: 'v', level: 'B2', tags: ['verb'], ex: ['Les rogamos que subsanen el error.', '请贵方纠正错误。'] },
    { id: 'facilitar', es: 'facilitar', zh: '提供；使便利', pos: 'v', level: 'B2', tags: ['verb'], ex: ['¿Podría facilitarme su número de teléfono?', '您能提供一下您的电话号码吗？'] },
    { id: 'proporcionar', es: 'proporcionar', zh: '提供', pos: 'v', level: 'B2', tags: ['verb'], ex: ['La empresa proporciona alojamiento.', '公司提供住宿。'] },
    { id: 'comunicar', es: 'comunicar', zh: '通知；沟通；（电话）占线', pos: 'v', level: 'B2', tags: ['verb'], ex: ['Le comunicamos que su pedido ha sido enviado.', '特此通知，您的订单已发出。'], note: 'Está comunicando = 电话占线。' },
    { id: 'remitir', es: 'remitir', zh: '寄送；转交', pos: 'v', level: 'B2', tags: ['verb'], ex: ['Le remito el documento adjunto.', '随信附上文件。'] },
    { id: 'asunto', es: 'asunto', zh: '事由；事情', pos: 'n', g: 'm', level: 'B2', tags: ['job'], ex: ['Asunto: Solicitud de información.', '事由：咨询信息。'] },
    { id: 'destinatario', es: 'destinatario', zh: '收件人', pos: 'n', g: 'm', f: 'destinataria', level: 'B2', tags: ['job'], ex: ['El destinatario no estaba en casa.', '收件人不在家。'] },
    { id: 'remitente', es: 'remitente', zh: '寄件人', pos: 'n', g: 'mf', level: 'B2', tags: ['job'], ex: ['La carta no tiene remitente.', '这封信没有寄件人。'] },
    { id: 'firma', es: 'firma', zh: '签名；公司', pos: 'n', g: 'f', level: 'B2', tags: ['job'], ex: ['Falta su firma en la última página.', '最后一页还缺您的签名。'] },
    { id: 'gestion', es: 'gestión', zh: '办理；管理', pos: 'n', g: 'f', pl: 'gestiones', level: 'B2', tags: ['job'], ex: ['Tengo que hacer unas gestiones en el banco.', '我得去银行办点事。'] },
    { id: 'gestionar', es: 'gestionar', zh: '办理；管理', pos: 'v', level: 'B2', tags: ['verb', 'job'], ex: ['Gestionamos su solicitud en 48 horas.', '我们会在 48 小时内处理您的申请。'] },
    { id: 'tramitar', es: 'tramitar', zh: '办理（手续）', pos: 'v', level: 'B2', tags: ['verb', 'job'], ex: ['Estamos tramitando su reclamación.', '我们正在处理您的投诉。'] },
    { id: 'notificar', es: 'notificar', zh: '通知（正式）', pos: 'v', level: 'B2', tags: ['verb', 'job'], ex: ['Le notificaremos la resolución por correo.', '我们会通过邮件通知您结果。'] },
    { id: 'notificacion', es: 'notificación', zh: '通知；（手机）提醒', pos: 'n', g: 'f', pl: 'notificaciones', level: 'B2', tags: ['job'], ex: ['He recibido una notificación de Hacienda.', '我收到了税务局的通知。'] },
    { id: 'perjuicio', es: 'perjuicio', zh: '损害', pos: 'n', g: 'm', level: 'B2', tags: ['func'], ex: ['El retraso me causó graves perjuicios.', '延误给我造成了严重损失。'] },
    { id: 'danos-y-perjuicios', es: 'daños y perjuicios', zh: '损害赔偿（法律用语）', pos: 'phr', level: 'B2', tags: ['func'], ex: ['Reclamó por daños y perjuicios.', '他要求损害赔偿。'] },
    { id: 'demanda', es: 'demanda', zh: '起诉；需求', pos: 'n', g: 'f', level: 'B2', tags: ['city'], ex: ['Presentó una demanda contra la empresa.', '他起诉了公司。'] },
    { id: 'demandar', es: 'demandar', zh: '起诉；要求', pos: 'v', level: 'B2', tags: ['verb'], ex: ['Amenazó con demandarlos.', '他威胁要起诉他们。'] },
    { id: 'organismo', es: 'organismo', zh: '机构；有机体', pos: 'n', g: 'm', level: 'B2', tags: ['city'], ex: ['Es un organismo público.', '这是一个公共机构。'] },
    { id: 'administracion', es: 'administración', zh: '行政部门；管理', pos: 'n', g: 'f', pl: 'administraciones', level: 'B2', tags: ['city'], ex: ['La administración es muy lenta.', '行政部门办事很慢。'] },
    { id: 'instancia', es: 'instancia', zh: '申请书；审级', pos: 'n', g: 'f', level: 'B2', tags: ['city'], ex: ['Presente la instancia en el registro.', '请到登记处提交申请书。'], note: 'en última instancia = 最终、归根结底。' },
    { id: 'recurrir', es: 'recurrir', zh: '求助于；上诉', pos: 'v', level: 'B2', tags: ['verb'], ex: ['Si no responden, recurriremos a un abogado.', '如果他们不回应，我们就找律师。'] },
    { id: 'iniciar', es: 'iniciar', zh: '开始（正式）', pos: 'v', level: 'B2', tags: ['verb'], ex: ['El curso se inicia en octubre.', '课程十月开始。'] },
    { id: 'finalizar', es: 'finalizar', zh: '结束（正式）', pos: 'v', level: 'B2', tags: ['verb'], ex: ['El plazo finaliza mañana.', '期限明天截止。'] },
    { id: 'colocar', es: 'colocar', zh: '放置；安排', pos: 'v', level: 'B2', tags: ['verb'], ex: ['Coloque el equipaje en el compartimento superior.', '请把行李放在上方行李架上。'] },
    { id: 'por-ello', es: 'por ello', zh: '因此（正式）', pos: 'phr', level: 'B2', tags: ['func'], ex: ['Por ello, les solicito una compensación.', '因此，我要求贵方给予补偿。'] },
    { id: 'con-el-fin-de', es: 'con el fin de', zh: '为了（正式）', pos: 'phr', level: 'B2', tags: ['func'], ex: ['Le escribo con el fin de solicitar información.', '我写信是为了咨询信息。'] },
    { id: 'en-relacion-con', es: 'en relación con', zh: '关于', pos: 'phr', level: 'B2', tags: ['func'], ex: ['En relación con su consulta, le informamos de que…', '关于您的咨询，我们告知如下……'] },
    { id: 'a-la-espera-de', es: 'a la espera de', zh: '等待；期待', pos: 'phr', level: 'B2', tags: ['func'], ex: ['A la espera de sus noticias, le saludo atentamente.', '期待您的回音，此致敬礼。'] },
    { id: 'amabilidad', es: 'amabilidad', zh: '好意；亲切', pos: 'n', g: 'f', level: 'B2', tags: ['feel'], ex: ['Gracias por su amabilidad.', '感谢您的好意。'] },
  ],
  sentences: [
    { id: 's1', es: 'Le agradecería que me enviara la factura por correo electrónico.', zh: '如果您能通过邮件把发票发给我，我将不胜感激。', g: ['b2-cortesia-formal'], distract: ['envíe'] },
    { id: 's2', es: 'Les rogaría que revisaran mi caso lo antes posible.', zh: '恳请贵方尽快审核我的情况。', g: ['b2-cortesia-formal'] },
    { id: 's3', es: '¿Sería tan amable de indicarme dónde está la salida?', zh: '请问您能告诉我出口在哪里吗？', g: ['b2-cortesia-formal'], distract: ['para'] },
    { id: 's4', es: 'Quisiera solicitar información sobre el curso de verano.', zh: '我想咨询一下暑期课程的信息。', g: ['b2-cortesia-formal'] },
    { id: 's5', es: 'Me dirijo a ustedes con el fin de presentar una reclamación.', zh: '我写信是为了提出投诉。', g: ['b2-carta-reclamacion'] },
    { id: 's6', es: 'El pasado 3 de mayo adquirí una lavadora en su tienda.', zh: '我于 5 月 3 日在贵店购买了一台洗衣机。', g: ['b2-carta-reclamacion'] },
    { id: 's7', es: 'A día de hoy, todavía no he recibido ninguna respuesta.', zh: '截至今日，我仍未收到任何答复。', g: ['b2-carta-reclamacion'] },
    { id: 's8', es: 'Les ruego que me devuelvan el importe íntegro.', zh: '恳请贵方全额退款。', g: ['b2-carta-reclamacion'], distract: ['devuelven'] },
    { id: 's9', es: 'En caso contrario, me veré obligada a acudir a la Oficina del Consumidor.', zh: '否则，我将不得不向消费者办公室投诉。', g: ['b2-carta-reclamacion'] },
    { id: 's10', es: 'Le comunicamos que su solicitud ha sido aceptada.', zh: '特此通知，您的申请已获批准。', g: ['b2-registro-formal'] },
    { id: 's11', es: 'Le remito la documentación solicitada.', zh: '现将所需材料寄送给您。', g: ['b2-registro-formal'] },
    { id: 's12', es: 'El plazo de inscripción finaliza el 30 de junio.', zh: '报名截止日期为 6 月 30 日。', g: ['b2-registro-formal'] },
    { id: 's13', es: 'Por ello, le solicitamos que nos facilite su número de cliente.', zh: '因此，请您提供客户编号。', g: ['b2-registro-formal'] },
    { id: 's14', es: 'Quiero una hoja de reclamaciones, por favor.', zh: '请给我一张投诉单。' },
    { id: 's15', es: 'El producto llegó defectuoso.', zh: '产品到货时就有缺陷。' },
    { id: 's16', es: 'Hemos registrado su incidencia.', zh: '我们已登记您的问题。' },
    { id: 's17', es: 'Falta su firma en la última página.', zh: '最后一页还缺您的签名。' },
    { id: 's18', es: 'Gracias por su amabilidad.', zh: '感谢您的好意。' },
    { id: 's19', es: 'Sin otro particular, le saluda atentamente.', zh: '别无他事，此致敬礼。', g: ['b2-cortesia-formal'] },
    { id: 's20', es: 'A la espera de sus noticias, les saludo atentamente.', zh: '期待您的回音，此致敬礼。', g: ['b2-carta-reclamacion'] },
    { id: 's21', es: 'Le agradezco que me haya respondido tan rápido.', zh: '感谢您这么快回复我。', g: ['b2-cortesia-formal'] },
    { id: 's22', es: 'En relación con su consulta, le informamos de que el plazo está abierto.', zh: '关于您的咨询，特此告知申请期限现已开放。', g: ['b2-registro-formal'] },
    { id: 's23', es: 'La empresa ha incumplido el contrato.', zh: '公司违反了合同。' },
    { id: 's24', es: 'Si no responden, recurriremos a un abogado.', zh: '如果他们不回应，我们就找律师。' },
    { id: 's25', es: '¿Tendría la amabilidad de firmar aquí?', zh: '劳驾您在这里签个字好吗？', g: ['b2-cortesia-formal'] },
  ],
  cloze: [
    { id: 'c1', text: 'Le agradecería que me ___ (usted) el presupuesto.', answers: ['enviara', 'enviase'], hint: 'enviar', zh: '如果您能把报价发给我，我将不胜感激。', g: ['b2-cortesia-formal'] },
    { id: 'c2', text: 'Les rogaría que ___ (ustedes) el error lo antes posible.', answers: ['corrigieran', 'corrigiesen', 'subsanaran'], hint: 'corregir', zh: '恳请贵方尽快更正错误。', g: ['b2-cortesia-formal'] },
    { id: 'c3', text: '¿Sería tan amable ___ cerrar la puerta?', answers: ['de'], options: ['de', 'para', 'que'], zh: '劳驾您把门关上好吗？', g: ['b2-cortesia-formal'] },
    { id: 'c4', text: '¿Tendría la ___ de esperar un momento?', answers: ['amabilidad'], options: ['amabilidad', 'amable', 'amistad'], zh: '劳驾您稍等一下好吗？', g: ['b2-cortesia-formal'] },
    { id: 'c5', text: '___ solicitar una cita con el director.', answers: ['Quisiera'], options: ['Quisiera', 'Quiera', 'Quería de'], zh: '我想预约见一下主任。', g: ['b2-cortesia-formal'] },
    { id: 'c6', text: 'Le agradezco que me ___ (usted) tan rápido.', answers: ['haya contestado'], hint: 'contestar', zh: '感谢您这么快回复我。', g: ['b2-cortesia-formal'] },
    { id: 'c7', text: 'Me ___ a ustedes para presentar una queja.', answers: ['dirijo'], hint: 'dirigirse', zh: '我写信是为了提出投诉。', g: ['b2-carta-reclamacion'] },
    { id: 'c8', text: 'Estimados ___:', answers: ['señores'], options: ['señores', 'amigos', 'queridos'], zh: '尊敬的先生们 / 女士们：', g: ['b2-carta-reclamacion'] },
    { id: 'c9', text: 'Les ruego que me ___ el dinero.', answers: ['devuelvan'], hint: 'devolver', zh: '恳请贵方退款。', g: ['b2-carta-reclamacion'] },
    { id: 'c10', text: 'En caso ___, me veré obligado a acudir a los tribunales.', answers: ['contrario'], options: ['contrario', 'opuesto', 'distinto'], zh: '否则，我将不得不诉诸法律。', g: ['b2-carta-reclamacion'] },
    { id: 'c11', text: 'A la ___ de sus noticias, les saludo atentamente.', answers: ['espera'], options: ['espera', 'esperanza', 'esperando'], zh: '期待您的回音，此致敬礼。', g: ['b2-carta-reclamacion'] },
    { id: 'c12', text: 'En relación ___ su carta del 5 de mayo, …', answers: ['con'], options: ['con', 'a', 'de'], zh: '关于您 5 月 5 日的来信，……', g: ['b2-carta-reclamacion'] },
    { id: 'c13', text: 'Para ___ una beca, hay que rellenar este formulario.', answers: ['solicitar'], options: ['solicitar', 'pedir por', 'preguntar'], zh: '申请奖学金需要填写这张表。', g: ['b2-registro-formal'] },
    { id: 'c14', text: 'Les ___ de que la oficina estará cerrada el lunes.', answers: ['informamos'], options: ['informamos', 'decimos', 'contamos'], zh: '特此通知，办公室周一不开放。', g: ['b2-registro-formal'] },
    { id: 'c15', text: 'El plazo de entrega ___ el próximo viernes.', answers: ['finaliza'], options: ['finaliza', 'termina de', 'acaba de'], zh: '交付期限于下周五截止。', g: ['b2-registro-formal'] },
    { id: 'c16', text: '¿Podría ___ su número de pasaporte?', answers: ['facilitarnos'], options: ['facilitarnos', 'darnos de', 'decirnos de'], zh: '您能提供一下您的护照号码吗？', g: ['b2-registro-formal'] },
    { id: 'c17', text: 'Por ___, le solicitamos que revise la factura.', answers: ['ello'], options: ['ello', 'eso que', 'esto que'], zh: '因此，请您核对一下发票。', g: ['b2-registro-formal'] },
    { id: 'c18', text: 'Quiero una hoja de ___, por favor.', answers: ['reclamaciones'], options: ['reclamaciones', 'quejas', 'problemas'], zh: '请给我一张投诉单。' },
  ],
  conj: [
    { verbs: ['enviar', 'devolver', 'solucionar', 'poder', 'tener', 'informar', 'corregir'], tenses: ['subjImpf'], g: 'b2-cortesia-formal' },
    { verbs: ['agradecer', 'rogar', 'poder', 'ser', 'tener'], tenses: ['cond'], g: 'b2-cortesia-formal' },
  ],
  dialogues: [
    {
      id: 'b2-u11-d1',
      title: '客服电话 · Atención al cliente',
      lines: [
        { who: 'Operadora', es: 'Atención al cliente, le atiende Silvia. ¿En qué puedo ayudarle?', zh: '客服中心，我是西尔维娅。有什么可以帮您？' },
        { who: 'Li Na', es: 'Buenos días. Le llamo porque hace tres semanas compré un portátil en su web y todavía no lo he recibido.', zh: '早上好。我打电话是因为三周前我在你们网站上买了一台笔记本电脑，到现在还没收到。' },
        { who: 'Operadora', es: 'Lamento las molestias. ¿Sería tan amable de facilitarme el número de pedido?', zh: '很抱歉给您带来不便。您能提供一下订单号吗？' },
        { who: 'Li Na', es: 'Sí, es el 4-5-8-2-1. En la web pone que la entrega era en cinco días laborables.', zh: '好的，是 45821。网站上写的是五个工作日内送达。' },
        { who: 'Operadora', es: 'Efectivamente, veo que ha habido una incidencia con la empresa de transporte. Le pido disculpas.', zh: '确实，我看到物流公司那边出了问题。向您道歉。' },
        { who: 'Li Na', es: 'Entiendo, pero lo necesito para trabajar. Les agradecería que me lo enviaran urgentemente o que me devolvieran el dinero.', zh: '我理解，但我工作需要用它。希望你们能加急给我发货，或者给我退款。' },
        { who: 'Operadora', es: 'Por supuesto. Le enviamos uno nuevo hoy mismo con entrega en 24 horas y, como compensación, le reembolsamos los gastos de envío.', zh: '当然。我们今天就给您发一台新的，24 小时内送达，作为补偿，运费我们退给您。' },
        { who: 'Li Na', es: 'Muchas gracias por su amabilidad. ¿Me podría enviar la confirmación por correo electrónico?', zh: '非常感谢。您能把确认信息发到我的邮箱吗？' },
      ],
    },
  ],
  readings: [
    {
      id: 'b2-r21',
      level: 'B2',
      title: 'Una carta de reclamación',
      titleZh: '一封投诉信',
      topic: '书信',
      paras: [
        [
          ['Valencia, 14 de marzo de 2026. Asunto: Reclamación por producto defectuoso. Estimados señores:', '瓦伦西亚，2026 年 3 月 14 日。事由：产品质量投诉。尊敬的先生们 / 女士们：'],
          ['Me dirijo a ustedes con el fin de presentar una reclamación por la lavadora modelo L-300 que adquirí en su establecimiento el pasado 2 de febrero, según consta en la factura que adjunto.', '我写信是为了就 2 月 2 日在贵店购买的 L-300 型洗衣机提出投诉，购买凭证见随附发票。'],
        ],
        [
          ['Desde el primer día, el aparato hace un ruido muy fuerte y, a pesar de que su servicio técnico vino a revisarlo en dos ocasiones, el problema no ha sido subsanado. Además, en la segunda visita el técnico dañó el suelo de la cocina.', '从第一天起，这台机器就发出很大的噪音。尽管贵方售后两次上门检查，问题仍未解决。此外，第二次上门时，技术人员还损坏了厨房的地板。'],
        ],
        [
          ['Por todo ello, les ruego que sustituyan la lavadora por una nueva o que me devuelvan el importe íntegro, así como que se hagan cargo de los daños causados en el suelo. En caso contrario, me veré obligada a acudir a la Oficina Municipal de Información al Consumidor.', '鉴于以上情况，恳请贵方为我更换一台新洗衣机或全额退款，并承担地板的损坏费用。否则，我将不得不向市消费者信息办公室投诉。'],
          ['A la espera de sus noticias, les saluda atentamente, Carmen Ruiz Ortega', '期待您的回音，此致敬礼，卡门·鲁伊斯·奥尔特加'],
        ],
      ],
      gloss: { establecimiento: '商店', consta: '记载', ocasiones: '次', subsanado: '解决', dañó: '损坏', sustituyan: '更换（虚拟式）', importe: '金额', 'se hagan cargo': '负责（虚拟式）' },
      questions: [
        { type: 'mc', q: '洗衣机有什么问题？', options: ['不能开机', '噪音很大', '漏水'], answer: 1 },
        { type: 'mc', q: '卡门提出了哪些要求？', options: ['只要一个道歉', '换新或退款，并赔偿地板', '免费维修一年'], answer: 1 },
        { type: 'tf', q: '售后技术人员只来过一次。', answer: false, explain: 'vino a revisarlo en dos ocasiones' },
      ],
    },
    {
      id: 'b2-r22',
      level: 'B2',
      title: 'Tus derechos si tu vuelo se retrasa',
      titleZh: '航班延误时你的权利',
      topic: '消费者权益',
      paras: [
        [
          ['Si viajas en avión desde un aeropuerto de la Unión Europea, o con una compañía europea hacia la UE, una normativa europea protege tus derechos en caso de retraso, cancelación o denegación de embarque.', '如果你从欧盟机场出发，或乘坐欧洲航空公司飞往欧盟，一项欧盟法规会在航班延误、取消或被拒绝登机时保护你的权利。'],
        ],
        [
          ['Si el vuelo se retrasa varias horas, la compañía está obligada a proporcionarte comida y bebida, y, si es necesario, alojamiento y transporte al hotel. Si llegas a tu destino con más de tres horas de retraso, puedes tener derecho a una indemnización de entre 250 y 600 euros, según la distancia.', '如果航班延误数小时，航空公司有义务为你提供餐饮，必要时还要提供住宿和往返酒店的交通。如果你到达目的地时延误超过三小时，根据航程远近，你可能有权获得 250 至 600 欧元的赔偿。'],
          ['Sin embargo, la compañía no tiene que pagar si demuestra que el retraso se debió a «circunstancias extraordinarias», como una tormenta o una huelga de controladores aéreos.', '不过，如果航空公司能证明延误是由“特殊情况”造成的，比如暴风雨或空管罢工，就不必赔偿。'],
        ],
        [
          ['Para reclamar, guarda la tarjeta de embarque y todos los tiques de los gastos. Después, escribe a la compañía explicando lo ocurrido y solicitando la compensación. Si no recibes respuesta en un plazo razonable, puedes recurrir a la autoridad de aviación de tu país.', '要索赔，请保存好登机牌和所有花费的票据。然后给航空公司写信，说明经过并申请赔偿。如果在合理期限内没有收到回复，可以向本国的航空管理机构申诉。'],
        ],
      ],
      gloss: { normativa: '法规', cancelación: '取消', denegación: '拒绝', obligada: '有义务的', distancia: '距离', 'se debió a': '是由于', circunstancias: '情况', controladores: '管制员', tiques: '小票' },
      questions: [
        { type: 'mc', q: '到达延误超过几小时可能获得赔偿？', options: ['一小时', '两小时', '三小时'], answer: 2 },
        { type: 'tf', q: '暴风雨造成的延误，航空公司也必须赔偿。', answer: false, explain: 'no tiene que pagar si demuestra que… circunstancias extraordinarias' },
        { type: 'mc', q: '索赔时应该保存什么？', options: ['护照复印件', '登机牌和花费票据', '酒店照片'], answer: 1 },
      ],
    },
  ],
  writing: [{ id: 'w1', prompt: '写一封正式的投诉信（DELE B2 写作题型）：你在网上订了一家酒店，到了以后发现房间和照片完全不一样（脏、吵、没有空调……）。按格式写清日期、事由、称呼、经过、要求和结尾，至少用一次 le agradecería que、一次 les ruego que 和三个正式词汇。', words: [150, 180], hints: ['Asunto: Reclamación por…', 'Me dirijo a ustedes con el fin de…', 'Les ruego que… / Les agradecería que…', 'En caso contrario, me veré obligado/a a… A la espera de sus noticias,'] }],
}
