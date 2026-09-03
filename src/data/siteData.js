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
    title: '嵌入式开发',
    summary: '从单片机外设到实时控制系统，建立扎实的软件与硬件协同能力。',
    stack: ['STM32', 'C / C++', 'FreeRTOS'],
  },
  {
    id: 'hardware',
    index: '02',
    title: '硬件电路',
    summary: '完成原理图、PCB、焊接和调试，理解产品从设计到落地的完整链路。',
    stack: ['模拟电路', 'PCB', '仪器测量'],
  },
  {
    id: 'iot',
    index: '03',
    title: '物联网',
    summary: '围绕感知、连接、平台和应用，搭建可靠的端云协同系统。',
    stack: ['ESP32', 'MQTT', '传感网络'],
  },
  {
    id: 'vehicle',
    index: '04',
    title: '智能车',
    summary: '结合运动控制、路径规划和视觉感知，训练系统级工程思维。',
    stack: ['电机控制', '机器视觉', '算法调参'],
  },
  {
    id: 'electronics',
    index: '05',
    title: '电子设计',
    summary: '面向真实问题完成方案论证、模块联调和整机验证。',
    stack: ['系统设计', '模块联调', '工程文档'],
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
  { level: '国家级', year: '2025', award: '全国大学生电子设计竞赛', result: '二等奖', team: '智能控制组' },
  { level: '国家级', year: '2025', award: '全国大学生智能汽车竞赛', result: '二等奖', team: '视觉车组' },
  { level: '省级', year: '2024', award: '大学生电子设计竞赛', result: '一等奖', team: '仪器仪表组' },
  { level: '省级', year: '2024', award: '“挑战杯”大学生课外学术科技作品竞赛', result: '二等奖', team: '物联网组' },
  { level: '省级', year: '2023', award: '大学生创新创业训练计划', result: '优秀结题', team: '嵌入式组' },
]

export const projects = [
  {
    title: '自主巡航智能车',
    category: '智能控制',
    image: '/images/project-robot.jpg',
    description: '融合视觉感知、路径规划和底盘控制，实现复杂赛道自主巡航。',
    tags: ['视觉识别', '运动控制'],
  },
  {
    title: '多通道数据采集终端',
    category: '嵌入式',
    image: '/images/lab-workbench.jpg',
    description: '面向实验测量设计的高稳定性采集、显示与通信一体化终端。',
    tags: ['STM32', '高速采样'],
  },
  {
    title: '物联网环境监测节点',
    category: '物联网',
    image: '/images/project-chip.jpg',
    description: '集成多类传感器与低功耗通信，完成远程数据监测和告警。',
    tags: ['ESP32', 'MQTT'],
  },
  {
    title: '可编程直流电源',
    category: '硬件电路',
    image: '/images/lab-circuit.jpg',
    description: '覆盖功率变换、闭环控制、保护电路与人机交互完整设计。',
    tags: ['电源设计', '闭环控制'],
  },
]

export const learningTracks = [
  {
    phase: '基础阶段',
    duration: '01—04 周',
    title: '建立共同语言',
    items: ['C 语言与 Git', '电路基础与仪器使用', '焊接与模块调试'],
  },
  {
    phase: '进阶阶段',
    duration: '05—10 周',
    title: '完成方向训练',
    items: ['单片机外设开发', 'PCB 设计与制板', '通信协议与数据处理'],
  },
  {
    phase: '项目阶段',
    duration: '长期实践',
    title: '进入真实项目',
    items: ['需求拆解与方案评审', '软硬件联合调试', '竞赛复盘与技术沉淀'],
  },
]
