const resume = {
  name: "盛勇杰",
  nameEn: "Sheng Yongjie",
  birth: "2004.11",
  phone: "15200674379",
  email: "15200674379@163.com",
  status: "未婚",
  title: "AI & Embedded Systems Engineer",
  subtitle: "构建 AI 与硬件的交叉点 — 从大模型微调到嵌入式系统的全栈工程师",
  intro: `我是一名专注于 AI 应用与嵌入式系统交叉领域的全栈工程师。
具备从大模型微调（LoRA）、LangGraph Agent 架构设计到 STM32/ESP32 裸机开发的完整技术栈。
擅长使用 AI Coding 工具（Claude Code、Codex）进行 Vibe Coding 高效率全栈开发，
同时对嵌入式硬件电路设计和 RTOS 系统有深入实践。
我的独特优势在于：既能驾驭云端大模型能力编排与微调，也能深入底层硬件进行系统级开发。`,
  stats: [
    { value: "4+", label: "核心项目" },
    { value: "3", label: "年经验" },
    { value: "12+", label: "技术栈" },
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
    {
      id: 4,
      title: "电子元器件数据标准化",
      subtitle: "元器件工程师 · 华大半导体",
      period: "2026.03 — 2026.06",
      description:
        "在上海华大半导体科技有限公司负责电子元器件数据标准化审核，通过深入研究芯片数据手册进行替代料选型与逻辑构建，维护企业级 EDA 元件库，确保原理图与 PCB 封装标准匹配，有效支撑硬件工程师的设计协同需求。",
      highlights: [
        "构建基于平台 BOM 的物料标准化流程与审核规范",
        "维护企业级 EDA 元件库数据一致性与封装标准",
        "有效降低硬件工程师器件选型与设计协同成本",
      ],
      tags: ["BOM", "EDA", "PCB", "元器件", "数据标准化", "华大半导体"],
    },
  ],
  skills: [
    {
      name: "MAS / Agent 系统设计",
      desc: "多智能体协同架构，JSON 消息格式，复杂 Prompt 流程管理，分布式任务协同",
      icon: "Brain",
      large: true,
    },
    {
      name: "AI Coding 全栈开发",
      desc: "Claude Code、Codex 等 AI 工具驱动前端与逻辑重构，Prompt Engineering",
      icon: "Code",
      large: true,
    },
    {
      name: "知识库与数据处理",
      desc: "Python 脚本 + 大模型 API，非结构化数据提取、清洗与关键信息结构化",
      icon: "Database",
    },
    {
      name: "嵌入式硬件设计",
      desc: "STM32/ESP32 微控制器，RTOS 调度优化，原理图到 PCB 全流程开发",
      icon: "Cpu",
      large: true,
    },
    {
      name: "云服务与 DevOps",
      desc: "Docker 容器化部署，VPS 运维，API 网关与负载均衡，n8n 自动化编排",
      icon: "Cloud",
    },
    {
      name: "Python 工程开发",
      desc: "API 开发与调用，数据处理脚本，自动化工具链构建，大模型接口集成",
      icon: "Terminal",
    },
  ],
  awards: [
    "全国大学生嵌入式芯片与系统设计竞赛 省二等奖",
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
