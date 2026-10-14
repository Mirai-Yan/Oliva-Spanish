import type { Scenario } from '../../content/types'

export const TUTOR_PERSONA = `你是「Oliva」，一位耐心、风趣、专业的西班牙语老师。你的学生是中文母语者。
规则：
- 用简体中文讲解，西班牙语例句用 **粗体**，并在后面附中文翻译。
- 以西班牙本土西语为标准（包括 vosotros），遇到差异时补充拉美的说法。
- 讲语法时，如果有帮助，可以简要介绍这条语法的来源或演变（例如来自拉丁语的哪种结构）；讲单词时可以补充词源、同源词（包括英语同源词）。只讲公认的词源，没把握时要说明「可能」或不讲。
- 针对中国学生的常见难点（阴阳性、性数一致、ser/estar、动词变位、r/rr 发音等）给出易懂的提示和记忆方法。
- 如果学生写了西语句子，先指出错误并解释原因，再给出正确和更地道的说法。
- 回答简洁、有条理，优先使用短段落和列表；除非学生要求，不要写太长。
- 解释要符合学生当前水平，不要一下子引入太多超纲语法。`

export function tutorSystem(level: string, context: string): string {
  return `${TUTOR_PERSONA}

学生当前大致水平：${level}。${context ? `\n学生此刻正在看的内容（用来理解他的问题）：\n${context}` : ''}`
}

export const PRONUNCIATION_SCHEMA = {
  type: 'OBJECT',
  properties: {
    transcript: { type: 'STRING', description: '听到的西班牙语原文' },
    score: { type: 'INTEGER', description: '0-100 发音与准确度得分' },
    feedback: { type: 'STRING', description: '中文点评，指出具体的发音问题和改进方法，1-3 句' },
  },
  required: ['transcript', 'score', 'feedback'],
}

export function pronunciationPrompt(target: string) {
  return `这是一名中文母语的西班牙语学习者朗读下面这句话的录音：
「${target}」
请先写出你实际听到的内容，然后按 0-100 给发音和准确度打分（漏词、读错音都要扣分），并用中文给出简短、具体的改进建议（比如 r/rr、b/v、元音是否饱满、重音位置）。`
}

export const WRITING_SCHEMA = {
  type: 'OBJECT',
  properties: {
    score: { type: 'INTEGER', description: '0-100' },
    cefr: { type: 'STRING', description: '这篇作文体现的大致 CEFR 水平，例如 A1、A2+' },
    summary: { type: 'STRING', description: '中文总评，2-3 句，先肯定优点再指出问题' },
    corrections: {
      type: 'ARRAY',
      items: {
        type: 'OBJECT',
        properties: {
          original: { type: 'STRING' },
          corrected: { type: 'STRING' },
          explanation: { type: 'STRING', description: '中文解释' },
        },
        required: ['original', 'corrected', 'explanation'],
      },
    },
    improved: { type: 'STRING', description: '保留原意、符合学生水平的修改后全文' },
  },
  required: ['score', 'cefr', 'summary', 'corrections', 'improved'],
}

export function writingPrompt(task: string, text: string, level: string) {
  return `你是西班牙语写作老师，请批改一名中文母语学生的西语作文。
学生水平：${level}
写作任务：${task}
学生作文：
"""
${text}
"""
要求：逐条找出语法、拼写（包括重音符号）、用词和搭配错误（大小写不算错误，不要列出，也不扣分）；解释用中文；按学生水平给分（完成任务、准确度、丰富度）；修改后的全文要尽量保留学生原意，不要写得超出学生水平太多。`
}

export const JUDGE_SCHEMA = {
  type: 'OBJECT',
  properties: {
    acceptable: { type: 'BOOLEAN', description: '学生答案在意思和语法上是否可以接受' },
    explanation: { type: 'STRING', description: '中文解释，1-3 句' },
  },
  required: ['acceptable', 'explanation'],
}

export function judgePrompt(question: string, user: string, expected: string[]) {
  return `一道西班牙语练习题。
题目：${question}
参考答案：${expected.join(' ／ ')}
学生答案：${user}
请判断学生的答案是否也正确（意思准确、语法正确即可，不必和参考答案一字不差；标点和大小写忽略；缺少重音符号算小错但可以接受）。用中文简短说明理由，如果不对，指出错在哪里。`
}

// ---------- role-play ----------

export function roleplaySystem(s: Scenario, level: string) {
  return `你在和一名中文母语的西班牙语学习者做情景对话练习。
场景：${s.setting}
你的角色：${s.aiRole}
学生的角色：${s.userRole}
学生要完成的任务：${s.goals.join('；')}
学生水平：${level}

规则：
- 只说西班牙语（西班牙本土用法），始终保持角色，难度符合学生水平：短句、常用词，每次回复 1–3 句。
- 对话中不要纠正学生的错误（结束后会统一点评）。如果完全听不懂，就像真实场景里那样礼貌地请对方再说一遍。
- 如果学生说中文，用简单的西语温和地鼓励他用西语说，并给出一句可以模仿的西语。
- 自然地推进对话，帮助学生完成所有任务；任务都完成后，用一两句话自然地结束对话。
- 只输出角色说的话，不要 Markdown、不要括号里的动作说明、不要翻译。`
}

export function roleplayTranscript(lines: { role: 'user' | 'model'; text: string }[]) {
  return lines.map((l) => `${l.role === 'user' ? '学生' : '角色'}：${l.text}`).join('\n')
}

export const ROLEPLAY_REPORT_SCHEMA = {
  type: 'OBJECT',
  properties: {
    score: { type: 'INTEGER', description: '0-100，综合任务完成、准确度、流利度' },
    summary: { type: 'STRING', description: '中文总评，2-3 句，先肯定再建议' },
    goals: {
      type: 'ARRAY',
      items: { type: 'OBJECT', properties: { goal: { type: 'STRING' }, done: { type: 'BOOLEAN' } }, required: ['goal', 'done'] },
    },
    corrections: {
      type: 'ARRAY',
      description: '学生句子里的错误',
      items: {
        type: 'OBJECT',
        properties: { original: { type: 'STRING' }, corrected: { type: 'STRING' }, explanation: { type: 'STRING', description: '中文解释' } },
        required: ['original', 'corrected', 'explanation'],
      },
    },
    better: {
      type: 'ARRAY',
      description: '没错但可以说得更地道的句子',
      items: {
        type: 'OBJECT',
        properties: { original: { type: 'STRING' }, better: { type: 'STRING' }, explanation: { type: 'STRING' } },
        required: ['original', 'better', 'explanation'],
      },
    },
  },
  required: ['score', 'summary', 'goals', 'corrections', 'better'],
}

export function roleplayReportPrompt(s: Scenario, transcript: string, level: string) {
  return `下面是一名中文母语的西班牙语学习者（水平 ${level}）完成的情景对话练习。
场景：${s.title}（${s.setting}）
任务：${s.goals.map((g, i) => `${i + 1}. ${g}`).join('；')}

对话记录：
${transcript}

请给出点评：每个任务是否完成；逐条找出学生句子里的语法、拼写（含重音符号）、用词错误并用中文解释（大小写和标点不算错误，不要列出）；指出可以说得更地道的地方；按学生水平给分。只点评“学生”说的话。`
}

export const HINT_SCHEMA = {
  type: 'OBJECT',
  properties: {
    suggestions: {
      type: 'ARRAY',
      items: { type: 'OBJECT', properties: { es: { type: 'STRING' }, zh: { type: 'STRING' } }, required: ['es', 'zh'] },
    },
  },
  required: ['suggestions'],
}

export function hintPrompt(s: Scenario, transcript: string, level: string) {
  return `情景对话练习：${s.title}。学生水平 ${level}，任务：${s.goals.join('；')}。
目前的对话：
${transcript}

请给学生 2 个“下一句可以怎么说”的建议：西班牙语，符合学生水平，并帮助推进还没完成的任务；每个附中文翻译。`
}

export function roleplayHandoffPrompt(s: Scenario, level: string) {
  return `${roleplaySystem(s, level)}

现在请你开始扮演角色，第一句话是：「${s.opening}」。我会用西班牙语回答你。当我说「结束」时，请跳出角色，用中文给我点评：每个任务是否完成、我说错的句子和正确说法、可以更地道的表达，并按 100 分制打分。`
}

// ---------- photo papers ----------

const optionsItem = (desc: string) => ({ type: 'ARRAY', items: { type: 'STRING' }, description: desc })

export const PAPER_SCHEMA = {
  type: 'OBJECT',
  properties: {
    title: { type: 'STRING', description: '简短的试卷标题' },
    scope: { type: 'STRING', description: '一句中文：这份卷子考查的范围' },
    match: {
      type: 'ARRAY',
      items: { type: 'OBJECT', properties: { es: { type: 'STRING' }, zh: { type: 'STRING' } }, required: ['es', 'zh'] },
    },
    tf: {
      type: 'ARRAY',
      items: {
        type: 'OBJECT',
        properties: {
          sentence: { type: 'STRING', description: '西语句子' },
          correct: { type: 'BOOLEAN' },
          focus: { type: 'STRING', enum: ['vocab', 'grammar'] },
          explain: { type: 'STRING', description: '中文解析' },
          fix: { type: 'STRING', description: '错误句的正确写法；正确句留空' },
        },
        required: ['sentence', 'correct', 'focus', 'explain'],
      },
    },
    choice: {
      type: 'ARRAY',
      items: {
        type: 'OBJECT',
        properties: {
          question: { type: 'STRING' },
          questionLang: { type: 'STRING', enum: ['es', 'zh'] },
          options: optionsItem('恰好 3 个选项，不带 A/B/C 前缀'),
          answer: { type: 'INTEGER', description: '正确选项的下标 0-2' },
          explain: { type: 'STRING', description: '中文解析' },
        },
        required: ['question', 'questionLang', 'options', 'answer', 'explain'],
      },
    },
    cloze: {
      type: 'ARRAY',
      items: {
        type: 'OBJECT',
        properties: {
          sentence: { type: 'STRING', description: '西语句子，恰好包含一个 ___' },
          answer: { type: 'STRING' },
          alts: { type: 'ARRAY', items: { type: 'STRING' }, description: '其它也正确的写法，没有就留空数组' },
          hintZh: { type: 'STRING', description: '整句的中文意思' },
          explain: { type: 'STRING', description: '中文解析' },
        },
        required: ['sentence', 'answer', 'hintZh', 'explain'],
      },
    },
    listen: {
      type: 'ARRAY',
      items: {
        type: 'OBJECT',
        properties: {
          es: { type: 'STRING', description: '朗读给学生听的西语句子' },
          zh: { type: 'STRING', description: '这句的中文意思' },
          options: optionsItem('恰好 3 个中文意思选项'),
          answer: { type: 'INTEGER', description: '正确选项的下标 0-2' },
        },
        required: ['es', 'zh', 'options', 'answer'],
      },
    },
  },
  required: ['title', 'scope', 'match', 'tf', 'choice', 'cloze', 'listen'],
}

const PAPER_RULES: Record<'match' | 'tf' | 'choice' | 'cloze' | 'listen', (n: number) => string> = {
  match: (n) => `match：${n} 对西语单词或短语与中文意思（名词带定冠词，如 la cocina）。`,
  tf: (n) => `tf：${n} 个西语句子，大约一半正确、一半错误。错误的句子只错一处，错在词汇或语法（如阴阳性和单复数一致、动词变位、ser/estar、介词、冠词）；focus 标明考的是 vocab 还是 grammar；explain 用中文说明对在哪里或错在哪里；错误句在 fix 里写出改正后的句子。`,
  choice: (n) => `choice：${n} 道三选一单项选择题。题干可以是带 ___ 的西语句子，也可以是中文提问；options 恰好 3 个，干扰项要合理、不能一眼排除；answer 是正确选项的下标（0、1 或 2），不要总把正确答案放在第一个；explain 用中文解析。`,
  cloze: (n) => `cloze：${n} 道填空题。sentence 是西语句子，恰好包含一个 ___；answer 是唯一正确的填法（一个词或很短的词组）；如果还有别的正确写法放进 alts；hintZh 写整句的中文意思；explain 用中文解析。`,
  listen: (n) => `listen：${n} 道听力题。es 是一个简短的西语句子（学生只能听，看不到文字）；options 是 3 个中文意思，只有一个正确；answer 是正确选项的下标。`,
}

export function paperPrompt(o: {
  level: string
  note: string
  counts: Partial<Record<'match' | 'tf' | 'choice' | 'cloze' | 'listen', number>>
  images: number
  /** sentences already on the paper (top-up requests must not repeat them) */
  avoid?: string[]
  /** no structured output available (Gemini web app): ask for a JSON code block */
  handoff?: boolean
}): string {
  const sections = (Object.keys(PAPER_RULES) as (keyof typeof PAPER_RULES)[]).map((k) => {
    const n = o.counts[k] ?? 0
    return n > 0 ? `- ${PAPER_RULES[k](n)}` : `- ${k}：这类题不要出，返回空数组 []。`
  })
  return `你是一位西班牙语老师，要给一名中文母语的学生出一份测验卷。
${o.images ? `学生上传了 ${o.images} 张课本或讲义的图片（${o.handoff ? '按顺序编号' : '每张图后面有编号和说明'}），只考图片里框选或出现的内容：图中的单词、短语和语法点。图中例句不够时，可以用图中的词汇和语法编写新的句子，但不要引入超出图片范围太多的新词。` : '根据下面的范围说明出题。'}
${o.note ? `学生对范围的补充说明：${o.note}\n` : ''}学生水平：${o.level}。使用西班牙本土的西班牙语（包括 vosotros），所有解析都用简体中文。

题目要求：
${sections.join('\n')}
${o.avoid?.length ? `\n下面这些题目已经出过了，不要重复：\n${o.avoid.slice(0, 60).map((s) => `· ${s}`).join('\n')}\n` : ''}
另外给出 title（简短的试卷标题）和 scope（一句中文，说明考查范围）。${
    o.handoff
      ? `

只输出一个 JSON 代码块，不要输出其它文字，格式严格如下（数组里放题目）：
\`\`\`json
{
  "title": "第三课 · 我的家",
  "scope": "家居词汇和 estar 表示位置",
  "match": [{ "es": "la cocina", "zh": "厨房" }],
  "tf": [{ "sentence": "El baño es a la derecha.", "correct": false, "focus": "grammar", "explain": "表示位置要用 estar。", "fix": "El baño está a la derecha." }],
  "choice": [{ "question": "¿Dónde ___ las llaves?", "questionLang": "es", "options": ["son", "están", "hay"], "answer": 1, "explain": "表示位置用 estar。" }],
  "cloze": [{ "sentence": "Mi piso ___ muy luminoso.", "answer": "es", "alts": [], "hintZh": "我的公寓很明亮。", "explain": "描述特征用 ser。" }],
  "listen": [{ "es": "La terraza es pequeña.", "zh": "露台很小。", "options": ["露台很大。", "露台很小。", "厨房很小。"], "answer": 1 }]
}
\`\`\``
      : ''
  }`
}
