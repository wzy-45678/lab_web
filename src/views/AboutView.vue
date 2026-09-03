<script setup>
import {
  ArrowRight,
  Award,
  Box,
  CircuitBoard,
  Cpu,
  MapPin,
  Trophy,
  Users,
  Wrench,
} from 'lucide-vue-next'
import PageHero from '../components/PageHero.vue'
import SectionHeading from '../components/SectionHeading.vue'

const equipment = [
  { icon: Box, name: '3D 打印机', text: '快速制作结构件、外壳与项目原型。' },
  { icon: Wrench, name: '示波器与信号发生器', text: '覆盖常用的波形观察、测量和调试工作。' },
  { icon: CircuitBoard, name: '单片机外设资源', text: '传感器、显示、通信和执行器模块较为齐全。' },
  { icon: Cpu, name: '元器件与收纳盒', text: '常用器件分类收纳，方便取用和项目管理。' },
]

const advantages = [
  {
    icon: Trophy,
    index: '01',
    title: '竞赛成果持续积累',
    text: '围绕电子设计、智能汽车、嵌入式芯片等赛事长期备赛，把一次次参赛经验沉淀成可复用的方法和作品。',
  },
  {
    icon: Users,
    index: '02',
    title: '学长导师全程带着做',
    text: '从基础训练、方案评审到联调复盘，都有高年级成员提供指导，遇到问题有人讨论，也有人帮你把问题拆开。',
  },
  {
    icon: MapPin,
    index: '03',
    title: '稳定工位与充足空间',
    text: '综合实验楼 512 提供相对固定的学习和项目工位，让想法不必每次从背包里重新开始。',
  },
  {
    icon: Award,
    index: '04',
    title: '软硬件资源共同开放',
    text: '从常用仪器、单片机外设到项目资料和代码仓库，尽量把实践所需的条件准备在身边。',
  },
]
</script>

<template>
  <div>
    <PageHero
      index="00"
      eyebrow="ABOUT THE LAB"
      title="实验室简介"
      description="以学科竞赛为牵引，在真实项目中学习工程方法，在持续协作中把想法做成可以运行的作品。"
      image="/images/lab-workbench.jpg"
    />

    <section class="section about-section">
      <div class="container">
        <SectionHeading
          v-reveal
          eyebrow="LAB PROFILE"
          title="把兴趣变成可以交付的工程成果"
          description="这里不只提供设备和工位，也提供一套从学习、实践到复盘的共同节奏。"
        />

        <div class="profile-grid">
          <article v-reveal class="profile-copy">
            <p class="profile-lead">
              创新创业实验室成立于 2024 年，坐落于综合实验楼 512。实验室以学科竞赛为主要导向，配备较为完善的实验设备与项目资源，划分为嵌入式、硬件、软件三大组别。
            </p>
            <p>
              我们聚焦工程实践与技术创新，支持同学参与各类科创竞赛，在一次次方案设计、动手制作和系统联调中锤炼软硬件综合开发能力。不同组别彼此配合、取长补短，共同把一个项目从想法推进到可验证、可展示的成果。
            </p>

            <div class="profile-facts">
              <div>
                <strong>2024</strong>
                <span>成立年份</span>
              </div>
              <div>
                <strong>512</strong>
                <span>实验室位置</span>
              </div>
              <div>
                <strong>3</strong>
                <span>协作组别</span>
              </div>
            </div>
          </article>

          <aside v-reveal="{ delay: 100 }" class="profile-note">
            <MapPin :size="25" :stroke-width="1.4" />
            <span>LAB LOCATION</span>
            <strong>综合实验楼 512</strong>
            <p>这里是日常训练、项目讨论和赛前集训的主要场所。</p>
          </aside>
        </div>

        <div class="hardware-block">
          <figure v-reveal class="hardware-photo">
            <img src="/images/project-nailong.jpg" alt="实验室电路调试设备" />
            <figcaption>
              <span>HARDWARE RESOURCES</span>
              <strong>设备为实践服务，实践让设备产生价值</strong>
            </figcaption>
          </figure>

          <div v-reveal="{ delay: 100 }" class="hardware-copy">
            <span class="eyebrow">FROM BENCH TO PROTOTYPE</span>
            <h2>硬件资源，支持每一次动手验证</h2>
            <p>从结构件制作到信号测量，再到单片机外设联调，实验室提供覆盖常见训练场景的基础条件。</p>

            <div class="equipment-list">
              <div v-for="item in equipment" :key="item.name" class="equipment-item">
                <component :is="item.icon" :size="20" :stroke-width="1.45" />
                <div>
                  <strong>{{ item.name }}</strong>
                  <p>{{ item.text }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div v-reveal class="research-link">
          <div>
            <span class="eyebrow">WHAT WE WORK ON</span>
            <h2>想了解我们主要研究什么？</h2>
            <p>从嵌入式、硬件到软件，查看实验室正在持续积累的研究方向。</p>
          </div>
          <RouterLink class="button button--secondary" to="/research">
            查看研究方向
            <ArrowRight :size="17" />
          </RouterLink>
        </div>
      </div>
    </section>

    <section class="section section--bordered why-section">
      <div class="container">
        <SectionHeading
          v-reveal
          eyebrow="WHY JOIN US"
          title="在真实项目里，和一群愿意把事情做完的人一起成长"
          description="你得到的不只是一次报名机会，而是一段可以持续积累的工程训练。"
        />

        <div class="advantage-grid">
          <article
            v-for="(item, index) in advantages"
            :key="item.index"
            v-reveal="{ delay: index * 80 }"
            class="advantage-card"
          >
            <div class="advantage-top">
              <component :is="item.icon" :size="25" :stroke-width="1.4" />
              <span>{{ item.index }}</span>
            </div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.text }}</p>
          </article>
        </div>

        <div v-reveal class="join-cta">
          <div>
            <span class="eyebrow">MAKE SOMETHING REAL</span>
            <h2>从一个愿意投入的学期开始</h2>
            <p>不要求你一开始就什么都会，但希望你愿意和团队一起把每一步做扎实。</p>
          </div>
          <RouterLink class="button button--primary" to="/join">
            了解招新流程
            <ArrowRight :size="17" />
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@use '../styles/variables' as *;
@use '../styles/mixins' as *;

.profile-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.25fr) minmax(280px, 0.75fr);
  gap: 72px;
  align-items: start;
}

.profile-copy {
  max-width: 760px;
}

.profile-copy p {
  font-size: 14px;
  line-height: 1.9;
}

.profile-copy .profile-lead {
  margin-bottom: 18px;
  color: $color-white;
  font-size: 18px;
  line-height: 1.75;
}

.profile-facts {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 38px;
  border-top: 1px solid $color-border;
  border-bottom: 1px solid $color-border;
}

.profile-facts div {
  display: grid;
  gap: 5px;
  padding: 18px 18px 18px 0;
  border-right: 1px solid $color-border;
}

.profile-facts div + div { padding-left: 18px; }
.profile-facts div:last-child { border-right: 0; }
.profile-facts strong { color: $color-white; font-family: $font-mono; font-size: 22px; font-weight: 500; }
.profile-facts span { color: $color-text-soft; font-size: 11px; }

.profile-note {
  display: grid;
  gap: 10px;
  padding: 26px;
  background: $color-accent-soft;
  border: 1px solid rgba($color-accent, 0.25);
  border-radius: $radius-md;
}

.profile-note svg { color: $color-accent; }
.profile-note > span { color: $color-accent; font-family: $font-mono; font-size: 10px; }
.profile-note strong { color: $color-white; font-size: 20px; font-weight: 500; }
.profile-note p { color: $color-text; font-size: 12px; }

.hardware-block {
  display: grid;
  grid-template-columns: minmax(0, 0.92fr) minmax(0, 1.08fr);
  gap: 64px;
  align-items: center;
  margin-top: 96px;
  padding-top: 96px;
  border-top: 1px solid $color-border;
}

.hardware-photo {
  position: relative;
  min-height: 430px;
  margin: 0;
  overflow: hidden;
  border: 1px solid $color-border;
  border-radius: $radius-md;
}

.hardware-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: saturate(0.65) brightness(0.72);
}

.hardware-photo::after {
  position: absolute;
  inset: 0;
  content: '';
  background: linear-gradient(transparent 48%, rgba(8, 10, 14, 0.9));
}

.hardware-photo figcaption {
  position: absolute;
  z-index: 1;
  right: 24px;
  bottom: 23px;
  left: 24px;
  display: grid;
  gap: 6px;
}

.hardware-photo figcaption span { color: $color-accent; font-family: $font-mono; font-size: 10px; }
.hardware-photo figcaption strong { color: $color-white; font-size: 15px; font-weight: 500; }
.hardware-copy > h2 { margin-bottom: 15px; }
.hardware-copy > p { max-width: 520px; font-size: 13px; }

.equipment-list {
  display: grid;
  gap: 0;
  margin-top: 30px;
  border-top: 1px solid $color-border;
}

.equipment-item {
  display: grid;
  grid-template-columns: 28px 1fr;
  gap: 14px;
  padding: 16px 0;
  border-bottom: 1px solid $color-border;
}

.equipment-item > svg { color: $color-accent; }
.equipment-item strong { color: $color-white; font-size: 13px; font-weight: 500; }
.equipment-item p { margin-top: 4px; color: $color-text-soft; font-size: 11px; }

.research-link,
.join-cta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  margin-top: 88px;
  padding: 28px 0;
  border-top: 1px solid $color-border;
  border-bottom: 1px solid $color-border;
}

.research-link .eyebrow,
.join-cta .eyebrow { margin-bottom: 11px; }
.research-link h2,
.join-cta h2 { margin-bottom: 8px; font-size: 22px; }
.research-link p,
.join-cta p { font-size: 13px; }
.research-link .button,
.join-cta .button { flex: none; }

.why-section { background: rgba($color-bg-deep, 0.42); }

.advantage-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;
}

.advantage-card {
  @include card-surface;
  min-height: 285px;
  padding: 27px;
}

.advantage-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 48px;
  color: $color-accent;
}

.advantage-top span { color: $color-text-soft; font-family: $font-mono; font-size: 10px; }
.advantage-card h3 { margin-bottom: 13px; font-size: 18px; }
.advantage-card p { font-size: 12px; line-height: 1.8; }
.join-cta { margin-top: 72px; }

@media (max-width: 1000px) {
  .advantage-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 820px) {
  .profile-grid,
  .hardware-block { grid-template-columns: 1fr; gap: 40px; }
  .hardware-block { margin-top: 72px; padding-top: 72px; }
  .hardware-photo { min-height: 370px; }
}

@media (max-width: $breakpoint-mobile) {
  .profile-copy .profile-lead { font-size: 16px; }
  .profile-facts { grid-template-columns: 1fr; }
  .profile-facts div,
  .profile-facts div + div { grid-template-columns: 70px 1fr; align-items: center; padding: 13px 0; border-right: 0; border-bottom: 1px solid $color-border; }
  .profile-facts div:last-child { border-bottom: 0; }
  .profile-facts strong { font-size: 18px; }
  .advantage-grid { grid-template-columns: 1fr; }
  .advantage-card { min-height: 0; }
  .research-link,
  .join-cta { align-items: flex-start; flex-direction: column; gap: 22px; margin-top: 60px; }
}
</style>
