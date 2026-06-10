const resume = {
  name: "盛勇杰",
  nameEn: "Sheng Yongjie",
  birth: "2004.11",
  phone: "15200674379",
  email: "15200674379@163.com",
  status: "未婚",
  title: "AI & Embedded Systems Engineer",
  subtitle: "构建 AI 与硬件的交叉点 — 从云端智能到物理世界的全栈工程师",
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
  projects: [
    {
      id: 1,
      title: "AI 驱动的个人数字空间",
      subtitle: "MAS 系统全栈开发与架构设计",
      period: "2026.05 — 2026.05",
      description:
        "利用 AI 编程工具构建高度个性化的动态响应式网站，深度集成多智能体协同架构。通过精确 Prompt 工程驱动前端开发与业务逻辑重构，设计并实现了多色调主题切换与交互框架。",
      highlights: [
        "开发周期较传统模式缩短 60%",
        "前端动态渲染并模块化展示个人技术栈",
        "实时综合 GitHub 仓库与社交媒体账号更新轨迹",
      ],
      tags: ["Claude Code", "Codex", "Copilot", "MAS", "Prompt Engineering", "React"],
    },
    {
      id: 2,
      title: "云端大模型 API 调度系统",
      subtitle: "自动化智能体编排与运维",
      period: "2026.06 — 2026.06",
      description:
        "为多平台大模型接口管理及高频日常开发场景，搭建高可用 AI 模型调度的自动化运维系统。基于 Docker 部署统一接口管理系统，通过 n8n 自动化平台编排 Pipeline。",
      highlights: [
        "统一管理 Gemini 3.1 Pro、ChatGPT 5.5 Thinking 等模型接口",
        "自动化工作流使文档预处理时间降低 50%",
        "基于 RackNerd VPS 实现高可用负载均衡与 Token 精确控制",
      ],
      tags: ["Docker", "new-api", "n8n", "Webhook", "Gemini", "ChatGPT", "VPS"],
    },
    {
      id: 3,
      title: "光伏热斑智能检测系统",
      subtitle: "嵌入式硬件研发与 RTOS 优化",
      period: "2025.10 — 2025.12",
      description:
        "针对光伏电站组件热斑效应及发电效率衰减问题，研发基于红外热成像的非接触式智能检测与巡检系统原型。负责全流程硬件设计，从芯片选型到 PCB 绘制焊接调试。",
      highlights: [
        "热斑检测效率较传统方案提升 15%",
        "巡检效率较人工方式提升 20%",
        "基于 FreeRTOS 优化任务调度，提升系统实时性",
      ],
      tags: ["ESP32", "FreeRTOS", "PCB", "红外热成像", "嵌入式"],
    },
    {
      id: 4,
      title: "电子元器件数据标准化",
      subtitle: "EDA 元件库管理与 BOM 审核",
      period: "2026.03 — 2026.06",
      description:
        "在北京海量数字科技公司负责电子元器件数据标准化审核，通过深入研究芯片数据手册进行替代料选型与逻辑构建，维护企业级 EDA 元件库，确保原理图与 PCB 封装标准匹配。",
      highlights: [
        "构建基于平台 BOM 的物料标准化流程",
        "维护企业级 EDA 元件库数据一致性",
        "有效降低硬件工程师器件选型与设计协同成本",
      ],
      tags: ["BOM", "EDA", "PCB", "元器件", "数据标准化"],
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
    school: "湖南信息职业技术学院",
    degree: "电子信息 · 专科",
    period: "2023.09 — 2026.06",
    rank: "专业课程成绩稳居班级前 10%",
  },
}

export default resume
