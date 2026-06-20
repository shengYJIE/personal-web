const resume = {
  name: "盛勇杰",
  nameEn: "Sheng Yongjie",
  birth: "2004.11",
  phone: "15200674379",
  email: "15200674379@163.com",
  status: "未婚",
  title: "AI Agent 开发工程师",
  subtitle: "AI Agent 全栈工程师 — 专注大模型微调、多智能体协同与 AI 原生应用开发",
  intro: `我是一名专注于 AI Agent 与应用开发的全栈工程师。
具备从大模型微调（LoRA/SFT）、LangGraph 多智能体架构设计到 RAG 知识增强系统的完整技术栈。
精通 Function Calling 工具编排与 Agent 状态机流转设计，擅长构建从用户意图识别到端到端服务交付的 AI 原生应用。
同时掌握 Docker 容器化部署、n8n 自动化流程编排与高可用 API 网关运维，
能够独立完成从模型训练微调到云端服务上线的全链路 AI 工程化落地。
我的核心竞争力在于：将前沿大模型能力转化为可规模化交付的 AI Agent 产品，以 Prompt 驱动的 Vibe Coding 实现极致开发效率。`,
  stats: [
    { value: "3+", label: "核心项目" },
    { value: "3", label: "年经验" },
    { value: "10+", label: "技术栈" },
    { value: "10%", label: "学业排名" },
  ],
  projects: [
    {
      id: 1,
      title: "LangGraph 多智能体协同推荐系统",
      subtitle: "AI 应用开发工程师",
      period: "2026.06 — 2026.06",
      description:
        "设计并实现基于 LangGraph 的多智能体协同商品推荐系统，支持商品关键词检索、多模态意图识别与 RAG 知识增强。通过 Agent 协作完成从用户输入到前端展示的端到端服务，解决用户在电商平台上的信息过载与决策困难问题。",
      highlights: [
        "设计 Agent 架构与 Function Calling 工具层，集成知识库提升推荐准确性",
        "实现图像识别、商品查询、价格对比、实体推荐等核心模块",
        "基于 FastAPI + Next.js + PostgreSQL/pgvector + Redis + Docker Compose 构建系统",
      ],
      tags: ["LangGraph", "Function Calling", "RAG", "FastAPI", "Next.js", "PostgreSQL", "Docker"],
    },
    {
      id: 2,
      title: "LoRA 微调 DeepSeek-R1 大模型",
      subtitle: "AI 算法工程师",
      period: "2026.05 — 2026.05",
      description:
        "面向通用大模型在特定垂直领域缺乏私有知识的问题，通过基于 LoRA 算法的监督微调技术对 DeepSeek-R1 进行领域适配。构建完整数据清洗与 Tokenizer 预处理流水线，采用 8-bit 量化与 FP16 混合精度训练策略优化资源效率。",
      highlights: [
        "显存占用降低超 50%，同时训练速度提升一倍",
        "微调后模型准确率达 99.94%，权重参数准确无误",
        "成功实现大模型在特定业务场景下的领域知识注入与应用适配",
      ],
      tags: ["LoRA", "DeepSeek-R1", "SFT", "8-bit量化", "FP16", "Tokenizer"],
    },
    {
      id: 3,
      title: "云端大模型 API 管理与自动化",
      subtitle: "自动化运维与智能体编排",
      period: "2026.06 — 2026.06",
      description:
        "为多平台大模型接口管理与高频日常开发场景，搭建高可用 AI 模型统一调度与自动化运维系统。基于 Docker 部署 new-api 接口管理系统，通过 n8n 自动化平台编排 Pipeline，实现多模型统一管理与智能分流。",
      highlights: [
        "统一管理 Gemini 3.1 Pro、ChatGPT 5.5 Thinking 等头部模型接口",
        "自动化工作流使文档预处理时间降低 50%，显著提升工作效率",
        "基于 RackNerd VPS 实现高可用负载均衡与 Token 精确控制",
      ],
      tags: ["Docker", "new-api", "n8n", "Gemini", "ChatGPT", "VPS", "Webhook"],
    },
  ],
  skills: [
    {
      name: "大模型微调与优化",
      desc: "掌握SFT、LoRA算法微调技术与参数配置，精通8-bit量化与FP16混合精度训练策略优化显存使用。",
    },
    {
      name: "LangGraph 多Agent协同",
      desc: "精通Agent协同架构设计，能够构建从用户输入到前端展示的端到端服务，精通Function Calling工具层对接API。",
    },
    {
      name: "RAG 架构与数据工程",
      desc: "构建数据处理流水线，使用PostgreSQL/pgvector实现高效数据检索，Python脚本清洗数据，精通Tokenizer配置。",
    },
    {
      name: "Vibe Coding 全栈开发",
      desc: "掌握Claude Code、Codex等AI编程工具，通过Prompt驱动完成FastAPI + Next.js开发，Docker容器化部署，n8n流程编排。",
    },
  ],
  awards: [
    "一等奖学金 · 校级",
  ],
  education: {
    school: "上海电子信息职业技术学院",
    degree: "电子信息工程技术 · 专科",
    period: "2023.09 — 2026.06",
    rank: "专业课程成绩稳居班级前 10%",
  },
}

export default resume
