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
      subtitle: "构建 AI 与硬件的交叉点 — 从云端智能到物理世界的全栈工程师",
      cta: "联系我",
      secondary: "查看项目",
      scroll: "向下滚动",
    },
    about: {
      label: "关于我",
      title: "AI 与嵌入式系统工程师",
      intro: `我是一名专注于 AI 应用与嵌入式系统交叉领域的全栈工程师。
具备从大模型 API 调度、Agent 架构设计到 STM32/ESP32 裸机开发的完整技术栈。
擅长使用 AI Coding 工具（Claude Code、Codex）进行高效率全栈开发，
同时对嵌入式硬件电路设计和 RTOS 系统有深入实践。
我的独特优势在于：既能驾驭云端的 AI 能力编排，也能深入底层硬件进行系统级开发。`,
      stats: [
        { value: "4+", label: "核心项目" },
        { value: "3", label: "年经验" },
        { value: "12+", label: "技术栈" },
        { value: "10%", label: "学业排名" },
      ],
      education: {
        label: "教育背景",
        school: "湖南信息职业技术学院",
        degree: "电子信息 · 专科",
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
          title: "云端大模型 API 调度系统",
          subtitle: "自动化智能体编排与运维",
          period: "2026.06 — 2026.06",
          description: "为多平台大模型接口管理及高频日常开发场景，搭建高可用 AI 模型调度的自动化运维系统。基于 Docker 部署统一接口管理系统，通过 n8n 自动化平台编排 Pipeline。",
          highlights: [
            "统一管理 Gemini 3.1 Pro、ChatGPT 5.5 Thinking 等模型接口",
            "自动化工作流使文档预处理时间降低 50%",
            "基于 RackNerd VPS 实现高可用负载均衡与 Token 精确控制",
          ],
          tags: ["Docker", "new-api", "n8n", "Webhook", "Gemini", "ChatGPT", "VPS"],
          link: "https://jayshone.com/",
        },
        {
          title: "AI 驱动的个人数字空间",
          subtitle: "MAS 系统全栈开发与架构设计",
          period: "2026.05 — 2026.05",
          description: "利用 AI 编程工具构建高度个性化的动态响应式网站，深度集成多智能体协同架构。通过精确 Prompt 工程驱动前端开发与业务逻辑重构，设计并实现了多色调主题切换与交互框架。",
          highlights: [
            "开发周期较传统模式缩短 60%",
            "前端动态渲染并模块化展示个人技术栈",
            "实时综合 GitHub 仓库与社交媒体账号更新轨迹",
          ],
          tags: ["Claude Code", "Codex", "Copilot", "MAS", "Prompt Engineering", "React"],
        },
        {
          title: "光伏热斑智能检测系统",
          subtitle: "嵌入式硬件研发与 RTOS 优化",
          period: "2025.10 — 2025.12",
          description: "针对光伏电站组件热斑效应及发电效率衰减问题，研发基于红外热成像的非接触式智能检测与巡检系统原型。负责全流程硬件设计，从芯片选型到 PCB 绘制焊接调试。",
          highlights: [
            "热斑检测效率较传统方案提升 15%",
            "巡检效率较人工方式提升 20%",
            "基于 FreeRTOS 优化任务调度，提升系统实时性",
          ],
          tags: ["ESP32", "FreeRTOS", "PCB", "红外热成像", "嵌入式"],
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
      subtitle: "Building at the intersection of AI & Hardware — full-stack engineer from cloud intelligence to physical hardware",
      cta: "Get in Touch",
      secondary: "View Projects",
      scroll: "Scroll",
    },
    about: {
      label: "About",
      title: "AI & Embedded Systems Engineer",
      intro: `I am a full-stack engineer focused on the intersection of AI applications and embedded systems.
I possess a complete tech stack spanning from large model API orchestration and Agent architecture design to STM32/ESP32 bare-metal development.
Proficient in high-efficiency full-stack development using AI Coding tools (Claude Code, Codex),
with deep hands-on experience in embedded hardware circuit design and RTOS systems.
My unique advantage: mastering cloud-side AI capability orchestration while also diving deep into low-level hardware system development.`,
      stats: [
        { value: "4+", label: "Core Projects" },
        { value: "3", label: "Years Exp." },
        { value: "12+", label: "Tech Stack" },
        { value: "10%", label: "Top Rank" },
      ],
      education: {
        label: "Education",
        school: "Hunan Information Vocational & Technical College",
        degree: "Electronic Information · Associate Degree",
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
          title: "Cloud LLM API Orchestration System",
          subtitle: "Automated Agent Orchestration & DevOps",
          period: "2026.06 — 2026.06",
          description: "Built a high-availability AI model orchestration and automated operations system for multi-platform LLM interface management and high-frequency development workflows. Deployed a unified API management system with Docker and orchestrated pipelines via n8n automation platform.",
          highlights: [
            "Unified management of Gemini 3.1 Pro, ChatGPT 5.5 Thinking and other models",
            "Automated workflows reduced document preprocessing time by 50%",
            "High-availability load balancing & precise Token control on RackNerd VPS",
          ],
          tags: ["Docker", "new-api", "n8n", "Webhook", "Gemini", "ChatGPT", "VPS"],
          link: "https://jayshone.com/",
        },
        {
          title: "AI-Powered Personal Digital Space",
          subtitle: "MAS Full-Stack Development & Architecture Design",
          period: "2026.05 — 2026.05",
          description: "Built a highly personalized dynamic responsive website using AI programming tools, deeply integrating multi-agent collaborative architecture. Drove frontend development and business logic refactoring through precise Prompt Engineering, designing and implementing a multi-theme switching and interaction framework.",
          highlights: [
            "Reduced development cycle by 60% compared to traditional methods",
            "Dynamic frontend rendering with modular tech stack showcase",
            "Real-time integration of GitHub repos & social media tracking",
          ],
          tags: ["Claude Code", "Codex", "Copilot", "MAS", "Prompt Engineering", "React"],
        },
        {
          title: "Solar Panel Hot-Spot Detection System",
          subtitle: "Embedded Hardware R&D & RTOS Optimization",
          period: "2025.10 — 2025.12",
          description: "Developed a non-contact intelligent detection and inspection system prototype based on infrared thermal imaging, targeting hot-spot effects and power efficiency degradation in photovoltaic station modules. Responsible for the full hardware design process, from chip selection to PCB layout, soldering, and debugging.",
          highlights: [
            "Improved hot-spot detection efficiency by 15% over traditional solutions",
            "Increased inspection efficiency by 20% compared to manual methods",
            "Optimized task scheduling with FreeRTOS for enhanced real-time performance",
          ],
          tags: ["ESP32", "FreeRTOS", "PCB", "Infrared Thermal", "Embedded"],
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
