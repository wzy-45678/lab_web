export const navItems = [
  { label: '首页', to: '/' },
  { label: '实验室简介', to: '/about' },
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
    detail: {
      capabilities: [
        '编写单片机底层驱动，读取各类传感器，控制电机、继电器等执行器件。',
        '使用 FreeRTOS 搭建多任务实时系统，处理 SPI、I2C、CAN 等设备通信。',
        '实现设备逻辑控制，完成数据打包上传，对接上位机与 Web 软件。',
        '在 MCU 上部署轻量化 AI 模型，实现边缘端识别与检测功能。',
      ],
      projects: [
        '全国大学生智能汽车竞赛：编写小车主控固件，实现摄像头循迹、电机 PID 调速，完成小车自主运行。',
        '电子设计竞赛控制系统类题目：完成数控电源、信号采集控制系统、闭环运动控制装置。',
        '环境监测节点：基于 STM32 / ESP32 读取温湿度、气体传感器，定时向外发送数据。',
        '小型机械臂控制：实现舵机与步进电机运动解算，完成定点抓取动作。',
      ],
      description: '嵌入式处在软硬件中间层，既要看得懂硬件电路输出的信号，也要编写固件实现设备的智能逻辑。日常工作需要频繁与硬件组联调电路，同时和软件组对接数据协议。竞赛和大创项目中的绝大多数智能设备，都离不开嵌入式开发。',
    },
  },
  {
    id: 'hardware',
    index: '02',
    title: '硬件设计',
    summary: '完成原理图、PCB、焊接和调试，理解产品从设计到落地的完整链路。',
    stack: ['模拟电路', 'PCB', '仪器测量'],
    detail: {
      capabilities: [
        '根据项目需求完成元器件选型，设计电源、信号采集与功率驱动电路。',
        '绘制原理图与 PCB，完成布局布线，并进行基础的电磁兼容处理。',
        '完成电路板焊接与装配，使用示波器、电源等仪器测量和验证信号。',
        '定位和排查硬件故障，修复电路并持续优化系统稳定性。',
      ],
      projects: [
        '智能车主控底板：设计稳压电源、电机驱动、传感器接口 PCB，为小车系统提供硬件底座。',
        '电赛自制功能板：完成多路信号调理采集板、大功率驱动板与便携式信号发生硬件。',
        '低功耗环境采集硬件：设计电池供电与传感器信号放大电路，实现长时间野外采集。',
        '机器人外设扩展板：设计多路传感器接口和隔离保护电路，解决干扰与电压不稳问题。',
      ],
      description: '硬件组负责产出项目的物理载体。所有固件和软件功能都建立在稳定硬件之上，组内会完整经历从纸上电路图到焊接出实物电路板的全过程，并大量使用仪器排查噪声、短路、信号失真等工程问题。',
    },
  },
  {
    id: 'software',
    index: '03',
    title: '软件开发',
    summary: '从设备接口到业务应用平台，建立扎实的数据与系统开发能力。',
    stack: ['上位机', 'Web 开发', '数据处理'],
    detail: {
      capabilities: [
        '编写上位机程序，通过串口、网络与硬件设备通信，下发指令并接收设备数据。',
        '开发 Web 页面，制作可视化仪表盘和人机交互操作界面。',
        '解析、清洗硬件上传的数据，完成数据存储、图表展示与结果分析。',
        '开发调试工具，辅助竞赛设备调参、数据记录和问题定位。',
      ],
      projects: [
        '智能车调参上位机：接收小车回传数据、可视化运行曲线，并在线修改 PID 参数。',
        '环境监测 Web 平台：接收嵌入式节点上传的数据，实时查看温湿度，支持历史查询与异常告警。',
        '电赛辅助分析工具：接收设备采集的信号数据，自动生成测试报表，辅助竞赛测试。',
        '设备参数配置网页：通过浏览器连接硬件，修改设备工作模式并下发控制指令。',
      ],
      description: '软件组负责人机交互层，把底层硬件看不见的信号和数据，变成人可以理解、可以操作的界面。组内工作打通从硬件设备到用户使用的最后一环，适合希望参与项目演示、竞赛作品展示和系统应用开发的同学。',
    },
  },
]

export const competitions = [
  {
    month: '04月',
    title: '蓝桥杯大赛',
    format: '每年举办一届，以个人形式参赛，分软件和电子两大方向，并按学历与组别分类。参赛者先参加省赛选拔，优秀选手晋级全国总决赛。',
    value: '检验个人编程或硬件设计基本功的“试金石”，覆盖人群广，适合作为积累竞赛经验和证明个人基础能力的入门赛事。',
    address: 'https://dasai.lanqiao.cn/',
  },
  {
    month: '05月',
    title: '安徽省机器人大赛',
    format: '每年举办，紧跟技术热点，设置机器人、低空经济、具身智能、算法设计等多个前沿赛道，为不同技术方向提供实践平台。',
    value: '门槛相对友好，是积累参赛经验、验证项目方案并为更高级别赛事做准备的良好机会。',
    address: 'http://www.ahjsjjy.com/Login',
  },
  {
    month: '07月',
    title: '嵌入式芯片与系统设计竞赛',
    format: '每年举办，设有芯片应用、芯片设计、FPGA 等赛道，采用初赛与全国总决赛相结合的赛制，参赛队伍需要提交设计作品并进行现场答辩。',
    value: '聚焦芯片底层与硬核技术，适合希望在嵌入式底层驱动、FPGA 或芯片设计领域继续深耕的同学。',
    address: 'https://www.socchina.net/',
  },
  {
    month: '07月',
    title: '“西门子杯”中国智能制造挑战赛',
    format: '通常在每年 3—8 月举行，赛题来源于企业真实工程需求，分为创新研发、工程应用等方向，并使用工业级软硬件平台完成设计与验证。',
    value: '面向工业 4.0 的实战训练，与产业需求紧密相连，适合希望进入智能制造、工业控制和自动化领域的同学。',
    address: 'https://www.siemenscup-cimc.org.cn/',
  },
  {
    month: '07月',
    title: '全国大学生智能汽车竞赛',
    format: '每年举办，参赛队伍制作能够自主识别路径的智能车并在赛道上竞速。赛事设有电磁、摄像头、AI 创意等不同组别，通过校赛、分区赛晋级全国总决赛。',
    value: '软硬件高度结合的系统工程实战，能够完整体验从底层硬件、运动控制到感知算法的开发流程，对提升综合工程能力很有帮助。',
    address: 'http://smartcarrace.com/',
  },
  {
    month: '07月',
    title: '全国大学生电子设计竞赛',
    format: '每年 7 月底举办，采用四天三夜封闭式命题设计。3 人一组，从多道题目中选做，需要制作出实际硬件电路和系统；奇数年为全国赛，偶数年为省级赛事。',
    value: '硬件设计能力的综合考验，覆盖方案设计、电路制作、软件开发与系统调试，认可度高，也是一次高强度的工程能力磨练。',
    address: 'https://www.nuedc-training.com.cn/',
  },
  {
    month: '09月',
    title: '“毕昇杯”全国大学生电子设计新技术应用创新竞赛',
    format: '每年举办，采用线上初赛+线下总决赛模式。3-5人一组，自主选题完成电子硬件作品，初赛提交设计文档、演示视频，入围后参加线下决赛，进行实物演示与现场答辩。',
    value: '偏向创新项目式开发，覆盖方案构思、软硬件实现、文档编写与现场答辩，重视作品创意与实用性，电子信息类认可度尚可，锻炼完整项目从设计到展示的全流程能力。',
    address: 'http://www.bishengbei.com/techshine/front/index.html',
  },
]

export const honors = [
  { level: '国家级', year: '2026', award: '全国大学生智能汽车竞赛-走马观碑', result: '二等奖', team: '1' },
  { level: '国家级', year: '2026', award: '嵌入式芯片与系统设计竞赛-st赛道', result: '三等奖', team: '1' },
  { level: '国家级', year: '2026', award: '蓝桥杯大赛-嵌入式', result: '一等奖', team: '1' },
  { level: '国家级', year: '2026', award: '蓝桥杯大赛-单片机', result: '二等奖', team: '2' },
  { level: '省级', year: '2026', award: '全国大学生电子设计竞赛-H题', result: '一等奖', team: '2' },
  { level: '省级', year: '2026', award: '全国大学生电子设计竞赛-H题', result: '三等奖', team: '1' },
  { level: '省级', year: '2026', award: '全国大学生智能汽车竞赛-人工智能模型', result: '二等奖', team: '1' },
  { level: '省级', year: '2026', award: '全国大学生智能汽车竞赛-走马观碑', result: '三等奖', team: '1' },
  { level: '省级', year: '2026', award: '嵌入式芯片与系统设计竞赛-st赛道', result: '二等奖', team: '1' },
  { level: '省级', year: '2026', award: '蓝桥杯大赛-单片机', result: '二等奖', team: '2' },
  { level: '国家级', year: '2025', award: '毕昇杯', result: '二等奖', team: '1' },
  { level: '国家级', year: '2025', award: '蓝桥杯大赛-单片机', result: '三等奖', team: '1' },
  { level: '省级', year: '2025', award: '全国大学生电子设计竞赛—E题', result: '三等奖', team: '1' },
  { level: '省级', year: '2025', award: '"西门子杯"中国智能制造挑战赛', result: '二等奖', team: '1' },
  { level: '省级', year: '2025', award: '安徽省机器人大赛-B平台', result: '二等奖', team: '1' },
]

export const projects = [
  {
    id: 'project-01',
    title: '车赛-走马观碑',
    category: '项目展示',
    image: '/images/chncszs.jpg',
    description: '26车赛-走马观碑',
    tags: ['视频演示', '图片展示'],
    overview: '能够在赛道上自主循迹行驶，完成障碍物识别与避障，最终到达终点。',
    direction: '嵌入式 / 智能车 / 训练模型',
    exposure: '主控开发、摄像头循迹、PID 调速与整车联调',
    audience: '对智能车、机器人和单片机感兴趣的同学',
    learning: [
      '了解智能车从编码器，摄像头采集、算法判断到电机执行的完整流程。',
      '接触国产龙芯 MCU 主控、摄像头循迹和电机 PID 调速等实践内容。',
      '体验从代码调试到赛道测试的真实项目迭代过程。',
    ],
    video: {
      src: '/videos/chncs.mp4',
      label: '项目演示视频',
    },
    gallery: [
      { src: '/images/chncs.jpg', alt: '项目成果照片', caption: '获奖证书' },
      { src: '/images/chncszs.jpg', alt: '项目成果照片', caption: '比赛小车' },
    ],
  },
  {
    id: 'project-02',
    title: '基于stm32u5的养老手环',
    category: '项目展示',
    image: '/images/qszs1.jpg',
    description: '26嵌赛-st赛道',
    tags: ['视频演示', '图片展示'],
    overview: '采用了stm32u575rgt6为主控，通过蓝牙与网页进行数据交互，能够实时监测佩戴者的心率、血压、血氧等健康数据，并在异常时发出警报。',
    direction: '硬件设计 / 嵌入式 ',
    exposure: 'STM32、蓝牙通信、健康数据采集与网页交互',
    audience: '对嵌入式开发、物联网和智能设备感兴趣的同学',
    learning: [
      '学习如何读取传感器数据，并在单片机上完成数据处理。',
      '接触蓝牙通信和网页交互，让设备数据可以被实时查看。',
      '了解一个智能硬件项目从功能设计到演示落地的基本流程。',
    ],
    // 视频文件超过 GitHub 与 Cloudflare Pages 的静态文件限制，上传到视频平台后再填入外链。
    video: { src: 'https://www.bilibili.com/video/BV1WjNz6YEMF?vd_source=04b20f46ef82374a16e887c11c4ff0b9', poster: '/images/qsfm.jpg', label: '项目演示视频' },
    gallery: [
      { src: '/images/wzyzxlhfqs.jpg', alt: '项目成果照片', caption: '获奖证书' },
      { src: '/images/qszs2.jpg', alt: '项目成果照片', caption: '作品展示1' },
      { src: '/images/qszs3.jpg', alt: '项目成果照片', caption: '作品展示2' },
      { src: '/images/qszs4.jpg', alt: '项目成果照片', caption: '作品展示3' },
    ],
  },
  {
    id: 'project-03',
    title: '车载平衡滚球运动控制系统',
    category: '项目展示',
    image: '/images/dsxc.jpg',
    description: '26电赛-H题',
    tags: ['视频演示', '图片展示'],
    overview: '小车沿黑色环形路线行驶，行驶过程中由maixcam接收，处理，传递数据，让钢球可在滚球运动控制装置内保持相对稳定',
    direction: '嵌入式 / 机械结构 / 硬件设计 / 视觉处理',
    exposure: '电路搭建、机械结构工程设计、嵌入式视觉检测',
    audience: '对电子设计、自动控制和动手制作感兴趣的同学',
    learning: [
      '认识传感器、执行器与控制算法如何共同完成一个系统。',
      '参与电路焊接、参数测试和软硬件联调等实践环节。',
      '体验电子设计竞赛中从方案验证到现场调试的工作节奏。',
    ],

    videos: [
      {src: '/videos/dssp.mp4', label: '项目演示视频', },
      {src: '/videos/dssp2.mp4', label: '项目演示视频', },
    ],

    gallery: [
      { src: '/images/dsxc.jpg', alt: '项目成果照片', caption: '小车展示' },
    ],
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

// 技术学习资料索引。新增方向或主题时，只需在这里补充数据和链接。
export const learningResources = [
  {
    id: 'ai',
    type: '人工智能',
    title: 'AI 的使用与概念理解',
    description: '了解人工智能能做什么、不能做什么，把 AI 当作学习和开发中的辅助工具。',
    topics: [
      {
        title: '学习AI使用',
        intro: '不要再用豆包了，看看codex，claude等AI',
        note: '学会使用AI辅助编程和学习，效率提升不止一点。',
        links: [
          { label: 'codex与claude的安装', url: 'https://www.bilibili.com/video/BV1u5ddB2EkW?vd_source=04b20f46ef82374a16e887c11c4ff0b9' },
        ],
      },
    ],
  },
  {
    id: 'c-programming',
    type: '编程基础',
    title: 'C 语言与工程代码规范',
    description: '从语法和数据结构出发，逐渐写出可读、可调试、能长期维护的程序。',
    topics: [
      {
        title: 'C 语言核心语法',
        intro: '变量、指针、数组、结构体和函数是嵌入式开发最常用的基础工具。',
        note: '不要只看视频，每期跟着写代码，加深对代码的理解。',
        links: [
          { label: '翁恺教你 C 语言', url: 'https://www.bilibili.com/video/BV1dr4y1n7vA?vd_source=04b20f46ef82374a16e887c11c4ff0b9' },
          { label: '菜鸟 C 语言教程', url: 'https://www.runoob.com/cprogramming/c-tutorial.html' },
          // 上传到网盘后填写：{ label: 'Dev-C++ 安装包', url: 'https://你的网盘分享链接' },
        ],
      },
    ],
  },
  {
    id: 'hardware-basics',
    type: '硬件基础',
    title: '电路、焊接与仪器使用',
    description: '从认识元器件开始，建立安全、规范、可测量的硬件实践习惯。',
    topics: [
      {
        title: '电路基础',
        intro: '认识基本的电子元器件，电阻，电感，电容，芯片，二极管等等。',
        note: '',
        links: [
          { label: '电路基础课', url: 'https://www.bilibili.com/video/BV1gu4y1b7RS' },
        ],
      },
      {
        title: 'PCB绘制',
        intro: '学习嘉立创eda的界面操作快速上手绘制pcb只需了解如何布线，布局和走线设计，并最终根据芯片数据手册独立完成原理图和pcb设计。',
        note: '',
        links: [
          { label: 'PCB绘制课', url: 'https://www.bilibili.com/video/BV1At421h7Ui' },
          { label: 'eda工具教程', url: 'https://www.bilibili.com/video/BV1PqWxz4Et8' },
        ],
      },
      {
        title: '学习电路设计',
        intro: '学习电路设计，iic电路，spi电路，LDO电路，DC-DC降压电路，开关电路，上下拉电路，RC复位电路，晶振电路，串口电路',
        note: '',
        links: [
          { label: '开关电路', url: 'https://www.bilibili.com/video/BV1QJSFBVEHu' },
          { label: 'LDO电路', url: 'https://www.bilibili.com/video/BV1oS586HEst' },
          { label: 'DC-DC电路', url: 'https://www.bilibili.com/video/BV1644y1q74w' },
          { label: 'RC复位电路', url: 'https://www.bilibili.com/video/BV1dH2MBAEkw' },
        ],
      },
      {
        title: '焊接与安全',
        intro: '认识常用工具、焊点质量和静电防护，先把规范动作练熟再追求速度。',
        note: '使用实验室设备前请先向学长确认电源、电烙铁和助焊剂的安全操作。',
        links: [
          { label: '焊接技巧', url: 'https://www.bilibili.com/video/BV1eJ411K7rM' },
        ],
      },
    ],
  },
  {
    id: 'embedded',
    type: '嵌入式',
    title: '单片机的学习与开发',
    description: '从点亮 LED 开始，逐步连接传感器、执行器和通信总线，完成可运行的嵌入式系统。',
    topics: [
      {
        title: '51单片机的学习',
        intro: '认识芯片、工程文件和下载调试流程，完成第一个可以稳定运行的工程。',
        note: '使用视频配套开发板与 Keil 工具链，编译或烧录报错时可借助 AI 分析。',
        links: [
          { label: '51单片机教程', url: 'https://www.bilibili.com/video/BV1Mb411e7re?vd_source=04b20f46ef82374a16e887c11c4ff0b9l' },
          // 上传到网盘后填写：{ label: '51 单片机参考手册', url: 'https://你的网盘分享链接' },
          // 上传到网盘后填写：{ label: '51 单片机编程环境与教程资料', url: 'https://你的网盘分享链接' },
        ],
      },
      {
        title: 'stm32标准库的学习',
        intro: '手动在面包板上搭建电路，学习配置GPIO、定时器、串口和中断。',
        note: '严格按接线图搭建，避免电源反接；每个外设接入后先独立验证（如按键触发 LED），再整合定时器与串口。',
        links: [
          { label: 'STM32 教程-江协', url: 'https://www.bilibili.com/video/BV1th411z7sn?vd_source=04b20f46ef82374a16e887c11c4ff0b9' },
          { label: 'STM32 教程-铁头山羊', url: 'https://www.bilibili.com/video/BV11X4y1j7si?p=2&vd_source=04b20f46ef82374a16e887c11c4ff0b9' },
          // 上传到网盘后填写：{ label: 'STM32 芯片手册', url: 'https://你的网盘分享链接' },
          // 上传到网盘后填写：{ label: 'STM32 编程环境与教程资料', url: 'https://你的网盘分享链接' },
        ],
      },
      {
        title: 'stm32HAL库的学习',
        intro: '学习CubeMX，图形化界面配置外设，加快开发的速度',
        note: '使用 CubeMX 图形化工具完成外设初始化，注意保持用户代码与自动生成代码的隔离。',
        links: [
          { label: 'stm32 HAL 库教程', url: 'https://www.bilibili.com/video/BV16J4m1w7HB?vd_source=04b20f46ef82374a16e887c11c4ff0b9' },
        ],
      },
      {
        title: '代码规范和架构',
        intro: '统一命名、模块边界和错误处理方式，让多人协作时的代码仍然容易阅读和修改。',
        note: '先在小项目里坚持，再逐步形成自己的模板和检查清单。',
        links: [
          { label: 'b站视频讲解', url: 'https://www.bilibili.com/video/BV1aJ4m1b7U2?vd_source=04b20f46ef82374a16e887c11c4ff0b9' },
        ],
      },
    ],
  },
  {
    id: 'engineering',
    type: '工程协作',
    title: 'Git、文档与项目复盘',
    description: '先学会把代码和过程留下来，再学会和队友一起把项目做完。',
    topics: [
      {
        title: 'Git 基础工作流',
        intro: '掌握仓库、提交、分支和合并，用清晰的版本记录保护每一次尝试。',
        note: '建议边看边在自己的练习仓库完成一次提交和分支合并。',
        links: [
          { label: 'Git Github 与 Gitee', url: 'https://www.bilibili.com/video/BV1G8CFYvEjt?vd_source=04b20f46ef82374a16e887c11c4ff0b9' },
          // 上传到网盘后填写：{ label: 'Git 安装包', url: 'https://你的网盘分享链接' },
        ],
      }
    ],
  },
]
