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
      subtitle: "构建 AI 与硬件的交叉点 — 从大模型微调到嵌入式系统的全栈工程师",
      cta: "联系我",
      secondary: "查看项目",
      scroll: "向下滚动",
    },
    about: {
      label: "关于我",
      title: "AI 与嵌入式系统工程师",
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
        {
          title: "电子元器件数据标准化",
          subtitle: "元器件工程师 · 华大半导体",
          period: "2026.03 — 2026.06",
          description: "在上海华大半导体科技有限公司负责电子元器件数据标准化审核，通过深入研究芯片数据手册进行替代料选型与逻辑构建，维护企业级 EDA 元件库，确保原理图与 PCB 封装标准匹配。",
          highlights: [
            "构建基于平台 BOM 的物料标准化流程与审核规范",
            "维护企业级 EDA 元件库数据一致性与封装标准",
            "有效降低硬件工程师器件选型与设计协同成本",
          ],
          tags: ["BOM", "EDA", "PCB", "元器件", "数据标准化", "华大半导体"],
        },
      ],
    },
    skills: {
      label: "专业技能",
      title: "技术能力",
      subtitle: "从云端 AI 编排到底层硬件设计 — 跨越软件与硬件边界的全栈能力",
      items: [
        {
          name: "MAS系统多Agent设计实现",
          desc: "熟练掌握多智能体协同架构设计，能够基于结构化 JSON 消息流与复杂 Prompt 工程构建自驱的状态机流转，实现多角色 Agent 之间的无人值守通信与分布式任务协同。",
        },
        {
          name: "AI Coding全栈开发",
          desc: "擅长驾驭 Claude Code 与 Codex 等下一代 AI 编程工具作为核心 Copilot，通过精确的 Prompt 驱动完成前后端业务逻辑重构与响应式全栈主页构建，实现开发周期的工程化极致缩减。",
        },
        {
          name: "知识库搭建",
          desc: "具备非结构化数据工程化处理能力，能够利用 Python 脚本配合大模型 API 提取海量非结构化文档（如 Datasheet）中的关键参数，完成高精度的技术知识资产结构化抽取与清洗。",
        },
        {
          name: "嵌入式硬件电路设计与调试",
          desc: "具备扎实的电子信息工程底层功底，精通 STM32/ESP32 微处理器开发与 RTOS 多任务调度，能独立完成从原理图设计、多层 PCB 绘制到边缘计算软硬件联调的全流程闭环。",
        },
      ],
      awards: {
        label: "荣誉与获奖",
        items: [
          "全国大学生嵌入式芯片与系统设计竞赛 省二等奖",
          "一等奖学金 · 校级",
        ],
      },
    },
    contact: {
      label: "联系方式",
      heading1: "一起创造",
      heading2: "些什么。",
      headingAccent: "一起创造些什么。",
      description: "无论是 AI 应用开发、嵌入式系统合作，还是技术咨询 — 欢迎随时联系。",
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
      subtitle: "Building at the intersection of AI & Hardware — full-stack engineer from LLM fine-tuning to embedded systems",
      cta: "Get in Touch",
      secondary: "View Projects",
      scroll: "Scroll",
    },
    about: {
      label: "About",
      title: "AI & Embedded Systems Engineer",
      intro: `I am a full-stack engineer focused on the intersection of AI applications and embedded systems.
I possess a complete tech stack spanning from LLM fine-tuning (LoRA) and LangGraph Agent architecture design to STM32/ESP32 bare-metal development.
Proficient in high-efficiency Vibe Coding full-stack development using AI Coding tools (Claude Code, Codex),
with deep hands-on experience in embedded hardware circuit design and RTOS systems.
My unique advantage: mastering cloud-side LLM orchestration & fine-tuning while also diving deep into low-level hardware system development.`,
      stats: [
        { value: "4+", label: "Core Projects" },
        { value: "3", label: "Years Exp." },
        { value: "12+", label: "Tech Stack" },
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
        {
          title: "Component Data Standardization",
          subtitle: "Component Engineer · HuaDa Semiconductor",
          period: "2026.03 — 2026.06",
          description: "Responsible for electronic component data standardization auditing at Shanghai HuaDa Semiconductor Technology Co., Ltd. Performed alternative component selection and logic construction through in-depth study of chip datasheets, maintaining enterprise EDA component library integrity.",
          highlights: [
            "Built platform BOM-based material standardization workflow and audit specifications",
            "Maintained enterprise EDA component library data consistency and packaging standards",
            "Effectively reduced hardware engineers' component selection and design collaboration costs",
          ],
          tags: ["BOM", "EDA", "PCB", "Components", "Data Standardization", "HuaDa Semi"],
        },
      ],
    },
    skills: {
      label: "Expertise",
      title: "Technical Arsenal",
      subtitle: "From cloud AI orchestration to bare-metal hardware — full-stack capabilities bridging software and hardware",
      items: [
        {
          name: "MAS Multi-Agent System Design",
          desc: "Proficient in multi-agent collaborative architecture design, capable of building self-driven state machine flows based on structured JSON messaging and complex Prompt engineering, enabling unattended communication and distributed task coordination between multi-role Agents.",
        },
        {
          name: "AI Coding Full-Stack Development",
          desc: "Skilled in leveraging next-gen AI programming tools like Claude Code and Codex as core Copilots, driving frontend/backend business logic refactoring and responsive full-stack development through precise Prompt engineering, achieving extreme engineering cycle reduction.",
        },
        {
          name: "Knowledge Base Construction",
          desc: "Capable of engineering unstructured data processing, using Python scripts with LLM APIs to extract critical parameters from massive unstructured documents (e.g., Datasheets), completing high-precision structured extraction and cleansing of technical knowledge assets.",
        },
        {
          name: "Embedded Hardware Circuit Design & Debugging",
          desc: "Solid foundational skills in electronic information engineering, proficient in STM32/ESP32 microprocessor development and RTOS multi-task scheduling, capable of independently completing the full closed-loop from schematic design, multi-layer PCB layout to edge computing hardware-software integration.",
        },
      ],
      awards: {
        label: "Honors & Awards",
        items: [
          "National College Embedded Chip & System Design Competition — Provincial 2nd Prize",
          "First-Class Scholarship · University Level",
        ],
      },
    },
    contact: {
      label: "Contact",
      heading1: "Let's build",
      heading2: "something",
      headingAccent: "together.",
      description: "Whether it's AI application development, embedded systems collaboration, or technical consulting — feel free to reach out anytime.",
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
