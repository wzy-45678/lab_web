export const navItems = [
  { label: '首页', to: '/' },
  { label: '研究方向', to: '/research' },
  { label: '竞赛活动', to: '/competitions' },
  { label: '实验室荣誉', to: '/honors' },
  { label: '作品展示', to: '/works' },
  { label: '技术学习', to: '/learning' },
  { label: '加入我们', to: '/join' },
]

export const directions = [
  {
    id: 'embedded',
    index: '01',
    title: '嵌入式',
    summary: '从单片机外设到实时控制系统，建立扎实的软件与硬件协同能力。',
    stack: ['STM32', 'C / C++', 'FreeRTOS'],
  },
  {
    id: 'hardware',
    index: '02',
    title: '硬件设计',
    summary: '完成原理图、PCB、焊接和调试，理解产品从设计到落地的完整链路。',
    stack: ['模拟电路', 'PCB', '仪器测量'],
  },
  {
    id: 'software',
    index: '03',
    title: '软件开发',
    summary: '从设备接口到业务应用平台，建立扎实的数据与系统开发能力。',
    stack: ['上位机', 'Web 开发', '数据处理'],
  },
]

export const competitions = [
  {
    month: '04月',
    title: '蓝桥杯大赛',
    format: '每年举办一届，以个人形式参赛，分软件和电子两大方向，并按学历与组别分类。参赛者先参加省赛选拔，优秀选手晋级全国总决赛。',
    value: '检验个人编程或硬件设计基本功的“试金石”，覆盖人群广，适合作为积累竞赛经验和证明个人基础能力的入门赛事。',
  },
  {
    month: '05月',
    title: '安徽省机器人大赛',
    format: '每年举办，紧跟技术热点，设置机器人、低空经济、具身智能、算法设计等多个前沿赛道，为不同技术方向提供实践平台。',
    value: '门槛相对友好，是积累参赛经验、验证项目方案并为更高级别赛事做准备的良好机会。',
  },
  {
    month: '07月',
    title: '嵌入式芯片与系统设计竞赛',
    format: '每年举办，设有芯片应用、芯片设计、FPGA 等赛道，采用初赛与全国总决赛相结合的赛制，参赛队伍需要提交设计作品并进行现场答辩。',
    value: '聚焦芯片底层与硬核技术，适合希望在嵌入式底层驱动、FPGA 或芯片设计领域继续深耕的同学。',
  },
  {
    month: '07月',
    title: '“西门子杯”中国智能制造挑战赛',
    format: '通常在每年 3—8 月举行，赛题来源于企业真实工程需求，分为创新研发、工程应用等方向，并使用工业级软硬件平台完成设计与验证。',
    value: '面向工业 4.0 的实战训练，与产业需求紧密相连，适合希望进入智能制造、工业控制和自动化领域的同学。',
  },
  {
    month: '07月',
    title: '全国大学生智能汽车竞赛',
    format: '每年举办，参赛队伍制作能够自主识别路径的智能车并在赛道上竞速。赛事设有电磁、摄像头、AI 创意等不同组别，通过校赛、分区赛晋级全国总决赛。',
    value: '软硬件高度结合的系统工程实战，能够完整体验从底层硬件、运动控制到感知算法的开发流程，对提升综合工程能力很有帮助。',
  },
  {
    month: '07月',
    title: '全国大学生电子设计竞赛',
    format: '每年 8 月举办，采用四天三夜封闭式命题设计。3 人一组，从多道题目中选做，需要制作出实际硬件电路和系统；奇数年为全国赛，偶数年为省级赛事。',
    value: '硬件设计能力的综合考验，覆盖方案设计、电路制作、软件开发与系统调试，认可度高，也是一次高强度的工程能力磨练。',
  },
]

export const honors = [
  { level: '国家级', year: '2026', award: '全国大学生智能汽车竞赛-走马观碑', result: '未知', team: '陈红年' },
  { level: '国家级', year: '2026', award: '嵌入式芯片与系统设计竞赛-st赛道', result: '三等奖', team: '李航昊，周正宏，高恩' },
  { level: '国家级', year: '2026', award: '蓝桥杯大赛-嵌入式', result: '一等奖', team: '陈红年' },
  { level: '国家级', year: '2026', award: '蓝桥杯大赛-单片机', result: '二等奖', team: '王泽阳，庞道聪' },
  { level: '省级', year: '2026', award: '全国大学生电子设计竞赛—H题', result: '一等奖', team: '陈红年，朱翔，王泽阳，李海峰' },
  { level: '省级', year: '2026', award: '全国大学生电子设计竞赛-H题', result: '三等奖', team: '李航昊，周正宏，高恩' },
  { level: '省级', year: '2026', award: '全国大学生智能汽车竞赛-人工智能模型', result: '二等奖', team: '高恩，李航昊，周正宏，朱翔，王泽阳' },
  { level: '省级', year: '2026', award: '全国大学生智能汽车竞赛-走马观碑', result: '三等奖', team: '王泽阳' },
  { level: '省级', year: '2026', award: '嵌入式芯片与系统设计竞赛-st赛道', result: '二等奖', team: '王泽阳，朱翔，李海峰' },
  { level: '省级', year: '2026', award: '蓝桥杯大赛-单片机', result: '二等奖', team: '朱翔，曹允峰' },
]

export const projects = [
  {
    title: '有想展示作品的吗',
    category: 'xxx',
    image: '/images/project-guangao.jpg',
    description: '这里介绍你的作品',
    tags: ['关键词', '关键词'],
  },
   {
    title: '有想展示作品的吗',
    category: 'xxx',
    image: '/images/project-guangao.jpg',
    description: '这里介绍你的作品',
    tags: ['关键词', '关键词'],
  },
    {
    title: '有想展示作品的吗',
    category: 'xxx',
    image: '/images/project-guangao.jpg',
    description: '这里介绍你的作品',
    tags: ['关键词', '关键词'],
  },
    {
    title: '有想展示作品的吗',
    category: 'xxx',
    image: '/images/project-guangao.jpg',
    description: '这里介绍你的作品',
    tags: ['关键词', '关键词'],
  },
]

export const learningTracks = [
  {
    phase: '嵌入式组',
    duration: '长期实践',
    title: '软硬固件开发实现',
    items: ['MCU 底层驱动开发与 RTOS 实时操作系统应用', '各类硬件通信协议与多模块整机联调', '边缘 AI 模型嵌入式部署与性能优化'],
  },
  {
    phase: '硬件组',
    duration: '长期实践',
    title: '电路 PCB 硬件设计',
    items: ['数模电路设计、器件选型与仿真', 'PCB 绘制、焊接与硬件故障排查', '传感器、电源及功率驱动电路开发'],
  },
  {
    phase: '软件组',
    duration: '长期实践',
    title: '上层应用系统搭建',
    items: ['上位机开发，硬件设备数据交互', 'Web 前后端与数据可视化平台', '脚本工具、数据处理与应用算法'],
  },
]
