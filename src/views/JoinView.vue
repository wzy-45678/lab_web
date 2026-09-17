<script setup>
import { ref } from 'vue'
import {
  Check,
  ClipboardCheck,
  MessageSquareText,
  QrCode,
  UserRoundCheck,
} from 'lucide-vue-next'
import PageHero from '../components/PageHero.vue'
import SectionHeading from '../components/SectionHeading.vue'

const qrCodeAvailable = ref(false)
const qrCodeSrc = '/images/ewm.png'

const requirements = [
  '以持之以恒、笃学深耕为荣，以好高骛远、急功近利为耻',
  '以精益求精、砥志研思为荣，以功利刷奖、敷衍赛务为耻',
  '以恪守承诺、实践求真为荣，以敷衍拖延、掩盖问题为耻',
  '以重视安全、整洁有序为荣，以违规操作、乱堆乱放为耻',
]

const process = [
  {
    icon: MessageSquareText,
    step: '01',
    title: '第一轮｜待定',
    text: '待定',
  },
  {
    icon: ClipboardCheck,
    step: '02',
    title: '第二轮｜待定',
    groups: [
      { title: '嵌入式', text: '待定' },
      { title: '硬件', text: '待定' },
      { title: '软件', text: '待定' },
    ],
  },
  {
    icon: UserRoundCheck,
    step: '03',
    title: '第三轮｜待定',
    text: '待定',
  },
]

</script>

<template>
  <div>
    <PageHero
      index="06"
      eyebrow="JOIN THE LAB"
      title="加入我们"
      description="欢迎电子信息、自动化、计算机及相关工科专业的同学，从兴趣出发，在持续实践中建立能力。"
      image="/images/lab-show2.jpg"
    />

    <section class="section">
      <div class="container">
        <SectionHeading
          v-reveal
          eyebrow="WHO WE LOOK FOR"
          title="我们更看重投入方式，而不是起点"
          description="可以没有竞赛经历，也可以暂时不熟悉单片机。稳定投入、主动思考和诚实沟通更重要。"
        />

        <div class="join-overview">
          <div v-reveal class="requirement-list">
            <div v-for="(item, index) in requirements" :key="item">
              <span>0{{ index + 1 }}</span>
              <p>{{ item }}</p>
              <Check :size="18" />
            </div>
          </div>

          <aside v-reveal="{ delay: 100 }" class="major-panel">
            <span class="panel-label">OPEN TO / 招收范围</span>
            <h2>面向工科相关专业</h2>
            <p>以一年级学生为主，其他年级可以根据项目沟通。</p>
            <ul class="tag-list">
              <li class="tag">电子信息</li>
              <li class="tag">自动化</li>
              <li class="tag">计算机</li>
              <li class="tag">通信工程</li>
              <li class="tag">电子科学与技术</li>
              <li class="tag">物联网</li>
              <li class="related-major-note">等相关专业...</li>
            </ul>
          </aside>
        </div>
      </div>
    </section>

    <section class="section section--bordered process-section">
      <div class="container">
        <SectionHeading
          v-reveal
          eyebrow="APPLICATION PROCESS"
          title="招新流程"
          description="招新分为三轮，第一轮待定，第二轮待定，第三轮待定。"
        />

        <div class="join-process">
          <article
            v-for="(item, index) in process"
            :key="item.step"
            v-reveal="{ delay: index * 90 }"
          >
            <div class="process-icon"><component :is="item.icon" :size="23" :stroke-width="1.45" /></div>
            <span>{{ item.step }}</span>
            <h3>{{ item.title }}</h3>
            <p v-if="item.text">{{ item.text }}</p>
            <div v-else class="process-groups">
              <div v-for="group in item.groups" :key="group.title" class="process-group">
                <strong>{{ group.title }}</strong>
                <p>{{ group.text }}</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="section application-section">
      <div class="container">
        <div v-reveal class="group-channel">
          <div class="qr-placeholder" aria-label="2026 招新交流群二维码">
            <img
              v-show="qrCodeAvailable"
              :src="qrCodeSrc"
              alt="2026 招新交流群二维码"
              @load="qrCodeAvailable = true"
              @error="qrCodeAvailable = false"
            />
            <QrCode v-if="!qrCodeAvailable" :size="58" :stroke-width="1.2" />
          </div>
          <div class="group-channel-copy">
            <span>2026 招新交流群</span>
            <strong>群号：1097332347</strong>
            <small>请使用手机扫码加入</small>
          </div>
        </div>
      </div>
    </section>

    <section class="section interview-section">
      <div v-reveal class="container interview-note">
        <span>INTERVIEW NOTE</span>
        <h2>面试前不需要突击背诵</h2>
        <p>带上你真正做过、思考过或愿意继续了解的内容。说清楚过程，比给出一个“标准答案”更重要。</p>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@use '../styles/variables' as *;
@use '../styles/mixins' as *;

.join-overview {
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(330px, 0.85fr);
  gap: 54px;
  align-items: start;
}

.requirement-list { border-top: 1px solid $color-border; }

.requirement-list > div {
  display: grid;
  grid-template-columns: 42px 1fr auto;
  gap: 18px;
  align-items: center;
  min-height: 72px;
  border-bottom: 1px solid $color-border;
  font-size: 13px;
}

.requirement-list span { color: $color-text-soft; font-family: $font-mono; font-size: 10px; }
.requirement-list svg { color: $color-accent; }

.major-panel {
  @include card-surface;
  padding: 30px;
}

.panel-label { color: $color-accent; font-family: $font-mono; font-size: 10px; }
.major-panel h2 { margin: 20px 0 12px; font-size: 23px; }
.major-panel p { margin-bottom: 28px; font-size: 13px; }

.related-major-note {
  display: inline-flex;
  align-items: center;
  min-height: 28px;
  padding: 3px 2px;
  color: $color-text-soft;
  font-family: $font-mono;
  font-size: 11px;
}

.process-section { background: rgba($color-bg-deep, 0.42); }

.join-process {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.join-process article {
  @include card-surface;
  min-height: 300px;
  padding: 30px;
}

.process-icon {
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  margin-bottom: 42px;
  color: $color-accent;
  background: $color-accent-soft;
  border: 1px solid rgba($color-accent, 0.26);
  border-radius: $radius-sm;
}

.join-process article > span { color: $color-text-soft; font-family: $font-mono; font-size: 10px; }
.join-process h3 { margin: 10px 0 12px; }
.join-process p { font-size: 13px; }

.process-groups {
  display: grid;
  gap: 10px;
  margin-top: 18px;
}

.process-group {
  display: grid;
  grid-template-columns: 58px 1fr;
  gap: 10px;
  padding-top: 10px;
  border-top: 1px solid $color-border;
}

.process-group strong {
  color: $color-accent;
  font-size: 12px;
  font-weight: 500;
}

.process-group p {
  margin: 0;
  color: $color-text;
  font-size: 11px;
  line-height: 1.65;
}

.application-section { border-top: 1px solid $color-border; }

.group-channel {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: clamp(28px, 6vw, 72px);
  width: min(100%, 760px);
  margin-inline: auto;
  padding: clamp(26px, 5vw, 48px);
  background: rgba($color-surface, 0.72);
  border: 1px solid $color-border;
  border-radius: $radius-md;
}

.qr-placeholder {
  display: grid;
  flex: none;
  place-items: center;
  width: 220px;
  height: 220px;
  overflow: hidden;
  color: $color-accent;
  background: #f0f2f5;
  border-radius: $radius-sm;
}

.qr-placeholder img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.group-channel span,
.group-channel strong,
.group-channel small { display: block; }
.group-channel span { color: $color-text-soft; font-size: 11px; }
.group-channel strong { margin: 8px 0; color: $color-white; font-size: clamp(20px, 3vw, 28px); }
.group-channel small { color: $color-text-soft; font-size: 10px; }

.interview-section { padding-top: 70px; background: rgba($color-bg-deep, 0.42); border-top: 1px solid $color-border; }
.interview-note { padding-block: 34px; border-top: 1px solid $color-border; border-bottom: 1px solid $color-border; }
.interview-note span { color: $color-accent; font-family: $font-mono; font-size: 10px; }
.interview-note h2 { margin: 10px 0; font-size: 23px; }
.interview-note p { max-width: 720px; font-size: 13px; }

@media (max-width: 900px) {
  .join-overview { grid-template-columns: 1fr; gap: 44px; }
}

@media (max-width: 720px) {
  .join-process { grid-template-columns: 1fr; }
  .join-process article { min-height: 0; }
  .process-group { grid-template-columns: 70px 1fr; }
  .group-channel { flex-direction: column; gap: 22px; text-align: center; }
  .qr-placeholder { width: min(220px, 72vw); height: min(220px, 72vw); }
}
</style>
