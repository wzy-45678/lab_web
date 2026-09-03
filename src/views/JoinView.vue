<script setup>
import { ref } from 'vue'
import {
  ArrowRight,
  Check,
  ClipboardCheck,
  MessageSquareText,
  QrCode,
  UserRoundCheck,
} from 'lucide-vue-next'
import PageHero from '../components/PageHero.vue'
import SectionHeading from '../components/SectionHeading.vue'

const submitted = ref(false)

const requirements = [
  '以持之以恒、笃学深耕为荣，以好高骛远、急功近利为耻',
  '以精益求精、砥志研思为荣，以功利刷奖、敷衍赛务为耻',
  '以恪守承诺、实践求真为荣，以敷衍拖延、掩盖问题为耻',
  '以重视安全、整洁有序为荣，以违规操作、乱堆乱放为耻',
]

const process = [
  { icon: MessageSquareText, step: '01', title: '了解与报名', text: '阅读招新说明，加入招新群并提交基础信息。' },
  { icon: ClipboardCheck, step: '02', title: '学习与考核', text: '完成组别基础的学习任务与考核，在实践中检验知识掌握与动手能力。' },
  { icon: UserRoundCheck, step: '03', title: '交流与面试', text: '聊聊兴趣、时间安排和做过的实践。' },
]

function handleSubmit() {
  submitted.value = true
}
</script>

<template>
  <div>
    <PageHero
      index="06"
      eyebrow="JOIN THE LAB"
      title="加入我们"
      description="欢迎电子信息、自动化、计算机及相关工科专业的同学，从兴趣出发，在持续实践中建立能力。"
      image="/images/lab-workbench.jpg"
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
          description="流程保持简单透明，让双方都有充分时间了解彼此。"
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
            <p>{{ item.text }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section application-section">
      <div class="container application-grid">
        <div v-reveal class="application-copy">
          <span class="eyebrow">APPLICATION</span>
          <h2>预报名信息</h2>
          <p>此表单为纯前端展示，不会上传或保存任何个人信息。正式报名请通过实验室招新群完成。</p>

          <div class="group-channel">
            <div class="qr-placeholder" aria-label="招新群二维码占位区域">
              <QrCode :size="58" :stroke-width="1.2" />
            </div>
            <div>
              <span>2026 招新交流群</span>
              <strong>群号待公布</strong>
              <small>正式上线前替换二维码与群号</small>
            </div>
          </div>
        </div>

        <form v-reveal="{ delay: 120 }" class="application-form" @submit.prevent="handleSubmit">
          <div class="field-row">
            <label>
              <span>姓名</span>
              <input type="text" placeholder="请输入姓名" required />
            </label>
            <label>
              <span>年级</span>
              <select required>
                <option value="" disabled selected>请选择年级</option>
                <option>大一</option>
                <option>大二</option>
                <option>大三及以上</option>
              </select>
            </label>
          </div>

          <label>
            <span>专业</span>
            <input type="text" placeholder="例如：电子信息工程" required />
          </label>

          <label>
            <span>感兴趣的方向</span>
            <select required>
              <option value="" disabled selected>请选择方向</option>
              <option>嵌入式开发</option>
              <option>硬件电路</option>
              <option>物联网</option>
              <option>智能车</option>
              <option>电子设计</option>
            </select>
          </label>

          <label>
            <span>想对我们说的话</span>
            <textarea rows="4" placeholder="简单介绍你的兴趣或实践经历" />
          </label>

          <button class="button button--primary" type="submit">
            提交预报名（演示）
            <ArrowRight :size="17" />
          </button>

          <p v-if="submitted" class="form-message" role="status">
            演示提交完成。当前页面不会保存数据，请通过招新群完成正式报名。
          </p>
        </form>
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

.application-section { border-top: 1px solid $color-border; }

.application-grid {
  display: grid;
  grid-template-columns: minmax(0, 0.8fr) minmax(440px, 1.2fr);
  gap: 80px;
}

.application-copy h2 { margin-bottom: 14px; }
.application-copy > p { max-width: 480px; font-size: 13px; }

.group-channel {
  display: flex;
  align-items: center;
  gap: 18px;
  margin-top: 36px;
  padding-top: 28px;
  border-top: 1px solid $color-border;
}

.qr-placeholder {
  display: grid;
  flex: none;
  place-items: center;
  width: 104px;
  height: 104px;
  color: $color-accent;
  background: #f0f2f5;
  border-radius: $radius-sm;
}

.group-channel span,
.group-channel strong,
.group-channel small { display: block; }
.group-channel span { color: $color-text-soft; font-size: 11px; }
.group-channel strong { margin: 5px 0; color: $color-white; font-size: 18px; }
.group-channel small { color: $color-text-soft; font-size: 10px; }

.application-form {
  display: grid;
  gap: 20px;
  padding: 32px;
  background: $color-surface;
  border: 1px solid $color-border;
  border-radius: $radius-md;
}

.field-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.application-form label { display: grid; gap: 8px; }
.application-form label > span { color: $color-white; font-size: 12px; }

.application-form input,
.application-form select,
.application-form textarea {
  width: 100%;
  min-height: 44px;
  padding: 10px 12px;
  color: $color-white;
  background: $color-bg;
  border: 1px solid $color-border;
  border-radius: $radius-sm;
  outline: none;
  font-size: 13px;
  transition: border-color $transition, box-shadow $transition;
}

.application-form textarea { min-height: 112px; resize: vertical; }
.application-form input::placeholder,
.application-form textarea::placeholder { color: #626a76; }

.application-form input:focus,
.application-form select:focus,
.application-form textarea:focus {
  border-color: $color-accent;
  box-shadow: 0 0 0 3px rgba($color-accent, 0.12);
}

.application-form option { color: $color-white; background: $color-bg; }
.application-form .button { width: 100%; }
.form-message { padding: 11px 13px; color: $color-success; background: rgba($color-success, 0.08); border: 1px solid rgba($color-success, 0.22); border-radius: $radius-sm; font-size: 11px; }

.interview-section { padding-top: 70px; background: rgba($color-bg-deep, 0.42); border-top: 1px solid $color-border; }
.interview-note { padding-block: 34px; border-top: 1px solid $color-border; border-bottom: 1px solid $color-border; }
.interview-note span { color: $color-accent; font-family: $font-mono; font-size: 10px; }
.interview-note h2 { margin: 10px 0; font-size: 23px; }
.interview-note p { max-width: 720px; font-size: 13px; }

@media (max-width: 900px) {
  .join-overview,
  .application-grid { grid-template-columns: 1fr; gap: 44px; }
}

@media (max-width: 720px) {
  .join-process { grid-template-columns: 1fr; }
  .join-process article { min-height: 0; }
  .field-row { grid-template-columns: 1fr; }
  .application-form { padding: 22px; }
  .group-channel { align-items: flex-start; }
}
</style>
