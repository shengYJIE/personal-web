const t = {
  zh: {
    nav: {
      about: "关于",
      projects: "项目",
      skills: "技能",
      contact: "联系",
      cta: "联系我",
    },
    hero: {
      label: "个人作品集",
      subtitle: "AI Agent 全栈工程师 — 专注大模型微调、多智能体协同与 AI 原生应用开发",
      cta: "联系我",
      secondary: "查看项目",
      scroll: "向下滚动",
    },
    about: {
      label: "关于我",
      title: "AI Agent 开发工程师",
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
      education: {
        label: "教育背景",
        school: "上海电子信息职业技术学院",
        degree: "电子信息工程技术 · 专科",
        period: "2023.09 — 2026.06",
        rank: "专业课程成绩稳居班级前 10%",
      },
      location: "中国 · 北京",
    },
    projects: {
      label: "精选作品",
      title: "精选项目",
      items: [
        {
          title: "LangGraph 多智能体协同推荐系统",
          subtitle: "AI 应用开发工程师",
          period: "2026.06 — 2026.06",
          description: "设计并实现基于 LangGraph 的多智能体协同商品推荐系统，支持商品关键词检索、多模态意图识别与 RAG 知识增强。通过 Agent 协作完成从用户输入到前端展示的端到端服务。",
          highlights: [
            "设计 Agent 架构与 Function Calling 工具层，集成知识库提升推荐准确性",
            "实现图像识别、商品查询、价格对比、实体推荐等核心模块",
            "基于 FastAPI + Next.js + PostgreSQL/pgvector + Redis + Docker Compose",
          ],
          tags: ["LangGraph", "Function Calling", "RAG", "FastAPI", "Next.js", "PostgreSQL", "Docker"],
        },
        {
          title: "LoRA 微调 DeepSeek-R1 大模型",
          subtitle: "AI 算法工程师",
          period: "2026.05 — 2026.05",
          description: "面向通用大模型在特定垂直领域缺乏私有知识的问题，通过基于 LoRA 算法的监督微调技术对 DeepSeek-R1 进行领域适配，构建完整数据清洗与 Tokenizer 预处理流水线。",
          highlights: [
            "显存占用降低超 50%，训练速度提升一倍",
            "微调后模型准确率达 99.94%，权重参数准确无误",
            "成功实现大模型在特定业务场景下的领域知识注入与应用适配",
          ],
          tags: ["LoRA", "DeepSeek-R1", "SFT", "8-bit量化", "FP16", "Tokenizer"],
        },
        {
          title: "云端大模型 API 管理与自动化",
          subtitle: "自动化运维与智能体编排",
          period: "2026.06 — 2026.06",
          description: "为多平台大模型接口管理与高频日常开发场景，搭建高可用 AI 模型统一调度与自动化运维系统。基于 Docker 部署 new-api 接口管理系统，通过 n8n 自动化平台编排 Pipeline。",
          highlights: [
            "统一管理 Gemini 3.1 Pro、ChatGPT 5.5 Thinking 等头部模型接口",
            "自动化工作流使文档预处理时间降低 50%",
            "基于 RackNerd VPS 实现高可用负载均衡与 Token 精确控制",
          ],
          tags: ["Docker", "new-api", "n8n", "Gemini", "ChatGPT", "VPS", "Webhook"],
        },
      ],
    },
    skills: {
      label: "专业技能",
      title: "技术能力",
      subtitle: "从大模型微调到智能体编排 — 以 AI 工程化为核心的全栈能力",
      items: [
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
      awards: {
        label: "荣誉与获奖",
        items: [
          "一等奖学金 · 校级",
        ],
      },
    },
    contact: {
      label: "联系方式",
      heading1: "一起创造",
      heading2: "些什么。",
      headingAccent: "一起创造些什么。",
      description: "无论是 AI Agent 开发、大模型应用落地，还是技术咨询 — 欢迎随时联系。",
      formTitle: "联系我",
      formName: "姓名",
      formEmail: "邮箱地址",
      formMessage: "留言内容",
      formSend: "发送消息",
      formSending: "发送中...",
      formSuccess: "消息已发送！感谢你的来信。",
      formError: "发送失败，请稍后重试。",
      footer: "基于 React + Vite 构建",
    },
  },

  en: {
    nav: {
      about: "About",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
      cta: "Get in Touch",
    },
    hero: {
      label: "Portfolio",
      subtitle: "AI Agent Full-Stack Engineer — specializing in LLM fine-tuning, multi-agent collaboration & AI-native application development",
      cta: "Get in Touch",
      secondary: "View Projects",
      scroll: "Scroll",
    },
    about: {
      label: "About",
      title: "AI Agent Developer",
      intro: `I am a full-stack engineer specializing in AI Agent and application development.
I possess a complete tech stack spanning from LLM fine-tuning (LoRA/SFT) and LangGraph multi-agent architecture design to RAG knowledge-enhanced systems.
Proficient in Function Calling tool orchestration and Agent state machine flow design, skilled at building AI-native applications from user intent recognition to end-to-end service delivery.
Experienced in Docker containerization, n8n workflow automation, and high-availability API gateway operations,
capable of independently delivering the full AI engineering pipeline from model fine-tuning to cloud deployment.
My core strength: transforming cutting-edge LLM capabilities into scalable AI Agent products, achieving extreme development efficiency through Prompt-driven Vibe Coding.`,
      stats: [
        { value: "3+", label: "Core Projects" },
        { value: "3", label: "Years Exp." },
        { value: "10+", label: "Tech Stack" },
        { value: "10%", label: "Top Rank" },
      ],
      education: {
        label: "Education",
        school: "Shanghai Technical Institute of Electronics & Information",
        degree: "Electronic Information Engineering · Associate Degree",
        period: "2023.09 — 2026.06",
        rank: "Consistently ranked top 10% in class",
      },
      location: "Beijing, China",
    },
    projects: {
      label: "Selected Work",
      title: "Featured Projects",
      items: [
        {
          title: "LangGraph Multi-Agent Recommendation System",
          subtitle: "AI Application Developer",
          period: "2026.06 — 2026.06",
          description: "Designed and implemented a LangGraph-based multi-agent collaborative product recommendation system supporting keyword search, multimodal intent recognition, and RAG knowledge enhancement. Achieved end-to-end service from user input to frontend display through Agent collaboration.",
          highlights: [
            "Designed Agent architecture with Function Calling tool layer and integrated knowledge base to improve recommendation accuracy",
            "Implemented image recognition, product search, price comparison, and entity recommendation modules",
            "Built with FastAPI + Next.js + PostgreSQL/pgvector + Redis + Docker Compose",
          ],
          tags: ["LangGraph", "Function Calling", "RAG", "FastAPI", "Next.js", "PostgreSQL", "Docker"],
        },
        {
          title: "LoRA Fine-Tuning DeepSeek-R1",
          subtitle: "AI Algorithm Engineer",
          period: "2026.05 — 2026.05",
          description: "Addressed the lack of private domain knowledge in general-purpose LLMs by applying LoRA-based supervised fine-tuning to DeepSeek-R1. Built complete data cleaning and Tokenizer preprocessing pipelines with 8-bit quantization and FP16 mixed precision training strategies.",
          highlights: [
            "Reduced GPU memory usage by over 50% while doubling training speed",
            "Achieved 99.94% accuracy with precise weight parameters after fine-tuning",
            "Successfully injected domain knowledge into a large model for specific business scenarios",
          ],
          tags: ["LoRA", "DeepSeek-R1", "SFT", "8-bit Quant", "FP16", "Tokenizer"],
        },
        {
          title: "Cloud LLM API Management & Automation",
          subtitle: "Automated DevOps & Agent Orchestration",
          period: "2026.06 — 2026.06",
          description: "Built a high-availability AI model unified orchestration and automated operations system for multi-platform LLM interface management. Deployed new-api management system with Docker and orchestrated pipelines via n8n automation platform for intelligent model routing.",
          highlights: [
            "Unified management of Gemini 3.1 Pro, ChatGPT 5.5 Thinking and other leading models",
            "Automated workflows reduced document preprocessing time by 50%",
            "High-availability load balancing & precise Token control on RackNerd VPS",
          ],
          tags: ["Docker", "new-api", "n8n", "Gemini", "ChatGPT", "VPS", "Webhook"],
        },
      ],
    },
    skills: {
      label: "Expertise",
      title: "Technical Arsenal",
      subtitle: "From LLM fine-tuning to agent orchestration — AI-centric full-stack capabilities",
      items: [
        {
          name: "LLM Fine-Tuning & Optimization",
          desc: "Proficient in SFT and LoRA fine-tuning techniques with parameter configuration, mastering 8-bit quantization and FP16 mixed precision training strategies to optimize VRAM usage.",
        },
        {
          name: "LangGraph Multi-Agent Orchestration",
          desc: "Expert in Agent collaboration architecture design, building end-to-end services from user input to frontend display, proficient in Function Calling tool layer integration with APIs.",
        },
        {
          name: "RAG Architecture & Data Engineering",
          desc: "Building data processing pipelines using PostgreSQL/pgvector for efficient vector retrieval, Python scripts for data cleaning and structuring, proficient in Tokenizer configuration.",
        },
        {
          name: "Vibe Coding Full-Stack Development",
          desc: "Mastering Claude Code, Codex and other AI programming tools for Prompt-driven development with FastAPI + Next.js, Docker containerization, and n8n workflow orchestration.",
        },
      ],
      awards: {
        label: "Honors & Awards",
        items: [
          "First-Class Scholarship · University Level",
        ],
      },
    },
    contact: {
      label: "Contact",
      heading1: "Let's build",
      heading2: "something",
      headingAccent: "together.",
      description: "Whether it's AI Agent development, LLM application delivery, or technical consulting — feel free to reach out anytime.",
      formTitle: "Contact Me",
      formName: "Name",
      formEmail: "Email",
      formMessage: "Message",
      formSend: "Send Message",
      formSending: "Sending...",
      formSuccess: "Message sent! Thanks for reaching out.",
      formError: "Failed to send. Please try again later.",
      footer: "Built with React + Vite",
    },
  },
}

export default t
