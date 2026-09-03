<script setup>
import { RouterLink } from 'vue-router'
import {
  ArrowDown,
  ArrowRight,
  BookOpenCheck,
  CircuitBoard,
  Users,
  Wrench,
} from 'lucide-vue-next'
import SectionHeading from '../components/SectionHeading.vue'

const titleChars = [...'创新创业实验室']

const advantages = [
  {
    icon: BookOpenCheck,
    index: '01',
    title: '完整学习路径',
    text: '从基础训练、方向实践到真实项目，逐步形成可迁移的工程能力。',
  },
  {
    icon: Wrench,
    index: '02',
    title: '真实项目驱动',
    text: '以需求、设计、联调和复盘为主线，让知识在解决问题时真正落地。',
  },
  {
    icon: Users,
    index: '03',
    title: '团队协作成长',
    text: '跨年级、跨方向共同推进项目，在讨论和评审中建立工程判断。',
  },
]
</script>

<template>
  <div class="home-page">
    <section class="home-hero">
      <div class="hero-overlay" />
      <div class="container hero-content">
        <span class="hero-eyebrow">INNOVATION AND ENTREPRENEURSHIP LAB</span>
        <h1 class="hero-title" aria-label="创新创业实验室">
          <span
            v-for="(char, index) in titleChars"
            :key="`${char}-${index}`"
            :style="{ '--char-delay': `${0.65 + index * 0.12}s` }"
          >
            {{ char }}
          </span>
        </h1>
        <p class="hero-intro">
          创新创业实验室面向电子信息、自动化、计算机等工科专业学生开放，聚焦嵌入式开发、硬件电路设计、物联网、智能系统研发，依托课程学习、项目实操、学科竞赛提升工科实践能力。
        </p>
        <div class="hero-actions">
          <RouterLink class="button button--primary" to="/research">
            探索研究方向
            <ArrowRight :size="17" />
          </RouterLink>
          <RouterLink class="button button--secondary" to="/join">
            加入实验室
          </RouterLink>
        </div>
      </div>
      <a class="scroll-cue" href="#environment" aria-label="向下查看实验室介绍">
        <ArrowDown :size="16" />
        <span>SCROLL</span>
      </a>
    </section>

    <section id="environment" class="section environment-section">
      <div class="container">
        <SectionHeading
          v-reveal
          eyebrow="LAB ENVIRONMENT"
          title="让想法在工位上变成实物"
          description="从电路焊接、嵌入式调试到整机联调，实验室提供长期开放的实践空间与基础设备。"
        />

        <div class="environment-grid">
          <figure v-reveal class="environment-image environment-image--primary">
            <img src="/images/lab-workbench.jpg" alt="工程师在电子设备上进行电路调试" />
            <figcaption>
              <span>01 / WORKBENCH</span>
              <strong>硬件开发与联合调试工位</strong>
            </figcaption>
          </figure>

          <div class="environment-side">
            <figure v-reveal="{ delay: 100 }" class="environment-image environment-image--secondary">
              <img src="/images/lab-circuit.jpg" alt="电子电路板及芯片特写" />
              <figcaption>
                <span>02 / HARDWARE</span>
                <strong>从原理图到稳定运行</strong>
              </figcaption>
            </figure>

            <div v-reveal="{ delay: 160 }" class="environment-note">
              <CircuitBoard :size="28" :stroke-width="1.4" />
              <p>实验设备、真实任务与技术传承，共同构成持续成长的工程环境。</p>
            </div>
          </div>
        </div>

        <div v-reveal class="lab-stats">
          <div><strong>5+</strong><span>长期研究方向</span></div>
          <div><strong>12</strong><span>周基础培养周期</span></div>
          <div><strong>20+</strong><span>年度实践项目</span></div>
          <div><strong>OPEN</strong><span>持续开放与协作</span></div>
        </div>
      </div>
    </section>

    <section class="section section--bordered advantages-section">
      <div class="container">
        <SectionHeading
          v-reveal
          eyebrow="HOW WE GROW"
          title="培养不止于完成一次比赛"
          description="我们更关注长期学习习惯、完整工程过程和能够独立解决问题的能力。"
        />

        <div class="advantage-grid">
          <article
            v-for="(item, index) in advantages"
            :key="item.title"
            v-reveal="{ delay: index * 90 }"
            class="advantage-item"
          >
            <div class="advantage-top">
              <component :is="item.icon" :size="24" :stroke-width="1.5" />
              <span>{{ item.index }}</span>
            </div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.text }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section recruitment-section">
      <div v-reveal class="container recruitment-inner">
        <div>
          <span class="eyebrow">2026 RECRUITMENT</span>
          <h2>从兴趣出发，把工程做深</h2>
          <p>不要求入门时已经掌握全部技术，我们更看重持续投入、主动学习和团队责任感。</p>
        </div>
        <RouterLink class="button button--primary" to="/join">
          查看招新说明
          <ArrowRight :size="17" />
        </RouterLink>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@use '../styles/variables' as *;
@use '../styles/mixins' as *;

.home-hero {
  position: relative;
  display: flex;
  min-height: 82svh;
  align-items: center;
  overflow: hidden;
  background: $color-bg-deep url('/images/lab-circuit.jpg') center / cover no-repeat;
  border-bottom: 1px solid $color-border;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: rgba(10, 12, 17, 0.78);
}

.hero-content {
  position: relative;
  z-index: 1;
  padding-top: 112px;
  padding-bottom: 80px;
}

.hero-eyebrow {
  display: block;
  margin-bottom: 26px;
  color: $color-accent;
  font-family: $font-mono;
  font-size: 11px;
  font-weight: 600;
  opacity: 0;
  animation: intro-fade 0.65s ease 0.35s forwards;
}

.hero-title {
  display: flex;
  flex-wrap: wrap;
  max-width: 900px;
  margin-bottom: 26px;
  font-size: 68px;
  font-weight: 600;
  line-height: 1.14;
}

.hero-title span {
  display: inline-block;
  opacity: 0;
  transform: translateY(18px) scale(0.98);
  animation: char-enter 0.58s ease-out var(--char-delay) forwards;
}

.hero-intro {
  max-width: 760px;
  color: #b6bdc8;
  font-size: 16px;
  opacity: 0;
  animation: intro-fade 0.7s ease 1.65s forwards;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 34px;
}

.hero-actions .button {
  opacity: 0;
  animation: button-enter 0.6s ease 1.95s forwards;
}

.hero-actions .button:nth-child(2) {
  animation-delay: 2.1s;
}

.scroll-cue {
  position: absolute;
  z-index: 2;
  right: 32px;
  bottom: 28px;
  display: flex;
  align-items: center;
  gap: 8px;
  color: $color-text-soft;
  font-family: $font-mono;
  font-size: 9px;
  transition: color $transition, transform $transition;
}

.scroll-cue:hover {
  color: $color-white;
  transform: translateY(2px);
}

.environment-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.45fr) minmax(280px, 0.75fr);
  gap: 18px;
}

.environment-side {
  display: grid;
  grid-template-rows: 1fr auto;
  gap: 18px;
}

.environment-image {
  position: relative;
  min-height: 330px;
  margin: 0;
  overflow: hidden;
  border: 1px solid $color-border;
  border-radius: $radius-md;
}

.environment-image--primary {
  min-height: 540px;
}

.environment-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: saturate(0.7) brightness(0.76);
  transition: filter 0.6s ease, transform 0.8s ease;
}

.environment-image:hover img {
  filter: saturate(0.82) brightness(0.85);
  transform: scale(1.025);
}

.environment-image::after {
  position: absolute;
  inset: 0;
  content: '';
  background: linear-gradient(transparent 54%, rgba(8, 10, 14, 0.82));
}

.environment-image figcaption {
  position: absolute;
  z-index: 1;
  right: 24px;
  bottom: 22px;
  left: 24px;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.environment-image figcaption span {
  color: $color-accent;
  font-family: $font-mono;
  font-size: 10px;
}

.environment-image figcaption strong {
  color: $color-white;
  font-size: 15px;
  font-weight: 500;
}

.environment-note {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 16px;
  align-items: center;
  min-height: 120px;
  padding: 22px;
  color: $color-accent;
  background: $color-accent-soft;
  border: 1px solid rgba($color-accent, 0.25);
  border-radius: $radius-md;
}

.environment-note p {
  color: $color-text;
  font-size: 13px;
}

.lab-stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 48px;
  padding-block: 30px;
  border-top: 1px solid $color-border;
  border-bottom: 1px solid $color-border;
}

.lab-stats div {
  display: grid;
  gap: 5px;
  padding-inline: 28px;
  border-right: 1px solid $color-border;
}

.lab-stats div:first-child { padding-left: 0; }
.lab-stats div:last-child { border-right: 0; }

.lab-stats strong {
  color: $color-white;
  font-family: $font-mono;
  font-size: 22px;
  font-weight: 500;
}

.lab-stats span {
  color: $color-text-soft;
  font-size: 11px;
}

.advantages-section {
  background: rgba($color-bg-deep, 0.42);
}

.advantage-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-top: 1px solid $color-border;
  border-bottom: 1px solid $color-border;
}

.advantage-item {
  padding: 36px;
  border-right: 1px solid $color-border;
  transition: background-color $transition, transform $transition;
}

.advantage-item:last-child { border-right: 0; }

.advantage-item:hover {
  background: rgba(255, 255, 255, 0.025);
  transform: translateY(-3px);
}

.advantage-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 48px;
  color: $color-accent;
}

.advantage-top span {
  color: $color-text-soft;
  font-family: $font-mono;
  font-size: 11px;
}

.advantage-item h3 { margin-bottom: 12px; }
.advantage-item p { color: $color-text; font-size: 13px; }

.recruitment-section {
  border-top: 1px solid $color-border;
}

.recruitment-inner {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 42px;
}

.recruitment-inner h2 { margin-bottom: 14px; }
.recruitment-inner p { max-width: 700px; font-size: 14px; }
.recruitment-inner .button { flex: none; }

@keyframes intro-fade {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes char-enter {
  from { opacity: 0; transform: translateY(18px) scale(0.98); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}

@keyframes button-enter {
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 900px) {
  .hero-title { font-size: 56px; }
  .environment-grid { grid-template-columns: 1fr; }
  .environment-side { grid-template-columns: 1fr 1fr; grid-template-rows: auto; }
  .environment-image--secondary { min-height: 300px; }
  .lab-stats { grid-template-columns: repeat(2, 1fr); }
  .lab-stats div:nth-child(2) { border-right: 0; }
  .lab-stats div:nth-child(-n + 2) { padding-bottom: 20px; }
  .lab-stats div:nth-child(n + 3) { padding-top: 20px; border-top: 1px solid $color-border; }
  .lab-stats div:nth-child(3) { padding-left: 0; }
  .advantage-grid { grid-template-columns: 1fr; }
  .advantage-item { border-right: 0; border-bottom: 1px solid $color-border; }
  .advantage-item:last-child { border-bottom: 0; }
}

@media (max-width: $breakpoint-mobile) {
  .home-hero { min-height: 82svh; }
  .hero-content { padding-top: 105px; padding-bottom: 62px; }
  .hero-eyebrow { max-width: 250px; font-size: 10px; }
  .hero-title { margin-bottom: 22px; font-size: 40px; }
  .hero-intro { font-size: 14px; line-height: 1.8; }
  .hero-actions { margin-top: 28px; }
  .scroll-cue { display: none; }
  .environment-side { grid-template-columns: 1fr; }
  .environment-image--primary { min-height: 410px; }
  .environment-image--secondary { min-height: 260px; }
  .lab-stats div { padding-inline: 14px; }
  .lab-stats strong { font-size: 18px; }
  .advantage-item { padding: 28px 4px; }
  .advantage-top { margin-bottom: 30px; }
  .recruitment-inner { align-items: flex-start; flex-direction: column; }
  .recruitment-inner .button { width: 100%; }
}
</style>
