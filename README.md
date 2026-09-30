# Oliva 橄榄西语

从零到 C1 的西班牙语互动学习网站（手机 / 平板 / 电脑自适应，可安装为 PWA）。

## 运行

```bash
npm install
npm run dev      # 开发模式 http://localhost:5173
npm run build    # 生产构建到 dist/
npm run preview  # 预览生产构建
npm test         # 变位引擎、答案判定、课程内容校验
```

## 结构

- `src/content/` 课程内容（每个单元一个 .ts 文件，按级别分目录），`content.test.ts` 会校验全部内容并生成每一课
- `src/lib/conjugate/` 动词变位引擎（规则 + 不规则表），`src/lib/text/` 音节与重音
- `src/lib/exercises/` 由单元数据生成课时、单元测试、自选考试
- `src/lib/gemini/` Gemini REST 客户端（流式）与提示词
- `src/features/` 各页面：学习路径、做题器、语法、词书、阅读、复习、考试、设置

## AI

在「设置 → AI 助手」填入自己的 Gemini API Key（只保存在本机浏览器）。在中国大陆可填写兼容 Gemini 接口的中转地址。

课程内容为原创，按 CEFR 与塞万提斯学院课程大纲（PCIC）编排。
