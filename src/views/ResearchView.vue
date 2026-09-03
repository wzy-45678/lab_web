<script setup>
import {
  Box,
  Braces,
  CircuitBoard,
  Cpu,
  RadioTower,
  ScanLine,
} from 'lucide-vue-next'
import PageHero from '../components/PageHero.vue'
import SectionHeading from '../components/SectionHeading.vue'
import { directions } from '../data/siteData'

const icons = [Cpu, CircuitBoard, RadioTower, ScanLine, Braces]

const workflow = [
  { step: '01', title: '理解问题', text: '从真实需求和约束出发，明确系统边界与关键指标。' },
  { step: '02', title: '拆解验证', text: '划分软硬件模块，用最小可行方案逐项完成技术验证。' },
  { step: '03', title: '系统联调', text: '连接各模块，记录问题、定位原因并完成稳定性迭代。' },
]
</script>

<template>
  <div>
    <PageHero
      index="01"
      eyebrow="RESEARCH DIRECTIONS"
      title="研究方向"
      description="围绕电子信息系统的感知、控制、连接与实现，建立从底层硬件到系统应用的完整能力。"
      image="/images/lab-circuit.jpg"
    />

    <section class="section">
      <div class="container">
        <SectionHeading
          v-reveal
          eyebrow="FOCUS AREAS"
          title="三条方向，共享一套工程基础"
          description="方向不是孤立的技术标签。每个项目都会经历需求分析、软硬件协作、测试验证和文档沉淀。"
        />

        <div class="direction-grid">
          <article
            v-for="(item, index) in directions"
            :id="item.id"
            :key="item.id"
            v-reveal="{ delay: (index % 3) * 80 }"
            class="direction-card"
          >
            <div class="direction-card__top">
              <component :is="icons[index]" :size="27" :stroke-width="1.45" />
              <span>{{ item.index }}</span>
            </div>
            <h2>{{ item.title }}</h2>
            <p>{{ item.summary }}</p>
            <ul class="tag-list">
              <li v-for="tag in item.stack" :key="tag" class="tag">{{ tag }}</li>
            </ul>
          </article>

          <div v-reveal class="direction-summary">
            <Box :size="34" :stroke-width="1.3" />
            <div>
              <strong>方向会交叉，能力可迁移</strong>
              <p>我们鼓励先打牢共同基础，再在项目中找到真正愿意长期投入的方向。</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--bordered workflow-section">
      <div class="container">
        <SectionHeading
          v-reveal
          eyebrow="ENGINEERING LOOP"
          title="重复一套可靠的工程闭环"
          description="研究方向不同，解决问题的方法保持一致。"
        />

        <div class="workflow-grid">
          <article
            v-for="(item, index) in workflow"
            :key="item.step"
            v-reveal="{ delay: index * 100 }"
          >
            <span>{{ item.step }}</span>
            <h3>{{ item.title }}</h3>
            <p>{{ item.text }}</p>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@use '../styles/variables' as *;
@use '../styles/mixins' as *;

.direction-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
}

.direction-card {
  @include card-surface;
  min-height: 330px;
  padding: 30px;
}

.direction-card__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 58px;
  color: $color-accent;
}

.direction-card__top span {
  color: $color-text-soft;
  font-family: $font-mono;
  font-size: 11px;
}

.direction-card h2 {
  margin-bottom: 13px;
  font-size: 23px;
}

.direction-card p {
  min-height: 72px;
  margin-bottom: 24px;
  font-size: 13px;
}

.direction-summary {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 20px;
  align-items: center;
  min-height: 200px;
  padding: 30px;
  color: $color-accent;
  background: $color-accent-soft;
  border: 1px solid rgba($color-accent, 0.26);
  border-radius: $radius-md;
}

.direction-summary strong {
  display: block;
  margin-bottom: 9px;
  color: $color-white;
}

.direction-summary p { color: $color-text; font-size: 13px; }

.workflow-section { background: rgba($color-bg-deep, 0.45); }

.workflow-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-top: 1px solid $color-border;
}

.workflow-grid article {
  padding: 34px 34px 20px 0;
  border-right: 1px solid $color-border;
}

.workflow-grid article + article { padding-left: 34px; }
.workflow-grid article:last-child { border-right: 0; }
.workflow-grid span { color: $color-accent; font-family: $font-mono; font-size: 11px; }
.workflow-grid h3 { margin: 28px 0 12px; }
.workflow-grid p { font-size: 13px; }

@media (max-width: 900px) {
  .direction-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: $breakpoint-mobile) {
  .direction-grid { grid-template-columns: 1fr; }
  .direction-card { min-height: 0; }
  .direction-card__top { margin-bottom: 40px; }
  .direction-card p { min-height: 0; }
  .workflow-grid { grid-template-columns: 1fr; }
  .workflow-grid article,
  .workflow-grid article + article { padding: 28px 0; border-right: 0; border-bottom: 1px solid $color-border; }
  .workflow-grid article:last-child { border-bottom: 0; }
}
</style>
