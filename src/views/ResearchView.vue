<script setup>
import {
  ArrowRight,
  Box,
  Braces,
  CircuitBoard,
  Cpu,
  RadioTower,
  ScanLine,
  X,
} from 'lucide-vue-next'
import { computed, nextTick, ref } from 'vue'
import PageHero from '../components/PageHero.vue'
import SectionHeading from '../components/SectionHeading.vue'
import { directions } from '../data/siteData'

const icons = [Cpu, CircuitBoard, RadioTower, ScanLine, Braces]
const activeDirection = ref(null)
const selectedDirection = computed(() => directions.find((item) => item.id === activeDirection.value))

const workflow = [
  { step: '01', title: '理解问题', text: '从真实需求和约束出发，明确系统边界与关键指标。' },
  { step: '02', title: '拆解验证', text: '划分软硬件模块，用最小可行方案逐项完成技术验证。' },
  { step: '03', title: '系统联调', text: '连接各模块，记录问题、定位原因并完成稳定性迭代。' },
]

async function toggleDirection(id) {
  if (activeDirection.value === id) {
    activeDirection.value = null
    return
  }

  activeDirection.value = id
  await nextTick()
  document.getElementById(`${id}-detail`)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
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
            <button
              class="detail-trigger"
              type="button"
              :aria-expanded="activeDirection === item.id"
              :aria-controls="`${item.id}-detail`"
              @click="toggleDirection(item.id)"
            >
              <span>{{ activeDirection === item.id ? '收起详情' : '查看详情' }}</span>
              <ArrowRight :size="15" :class="{ 'is-open': activeDirection === item.id }" />
            </button>
          </article>

          <div v-reveal class="direction-summary">
            <Box :size="34" :stroke-width="1.3" />
            <div>
              <strong>方向会交叉，能力可迁移</strong>
              <p>我们鼓励先打牢共同基础，再在项目中找到真正愿意长期投入的方向。</p>
            </div>
          </div>

          <article
            v-if="activeDirection"
            :id="`${activeDirection}-detail`"
            v-reveal
            class="direction-detail"
          >
            <div class="direction-detail__heading">
              <div>
                <span class="eyebrow">{{ selectedDirection?.index }} / DETAIL</span>
                <h2>{{ selectedDirection?.title }} · 详细工作情况</h2>
              </div>
              <button class="detail-close" type="button" aria-label="收起详情" title="收起详情" @click="activeDirection = null">
                <X :size="17" />
              </button>
            </div>

            <div class="direction-detail__grid">
              <section>
                <h3>核心可以做什么</h3>
                <ul class="detail-list">
                  <li v-for="capability in selectedDirection?.detail.capabilities" :key="capability">
                    {{ capability }}
                  </li>
                </ul>
              </section>

              <section>
                <h3>实战项目示例</h3>
                <ul class="detail-list detail-list--projects">
                  <li v-for="project in selectedDirection?.detail.projects" :key="project">
                    {{ project }}
                  </li>
                </ul>
              </section>

              <section class="direction-detail__description">
                <h3>详细介绍</h3>
                <p>{{ selectedDirection?.detail.description }}</p>
              </section>
            </div>
          </article>
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
  display: flex;
  flex-direction: column;
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

.direction-card .tag-list { margin-top: auto; }

.detail-trigger {
  @include focus-ring;
  display: inline-flex;
  align-items: center;
  align-self: flex-start;
  gap: 7px;
  margin-top: 24px;
  padding: 0;
  color: $color-accent;
  background: transparent;
  border: 0;
  cursor: pointer;
  font-size: 12px;
  font-weight: 600;
  transition: color $transition;
}

.detail-trigger:hover { color: $color-white; }
.detail-trigger svg { transition: transform $transition; }
.detail-trigger svg.is-open { transform: rotate(90deg); }

.direction-detail {
  grid-column: 1 / -1;
  scroll-margin-top: calc(#{$header-height} + 24px);
  padding: 34px;
  background: rgba($color-surface, 0.7);
  border: 1px solid rgba($color-accent, 0.34);
  border-radius: $radius-md;
}

.direction-detail__heading {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 24px;
  padding-bottom: 25px;
  border-bottom: 1px solid $color-border;
}

.direction-detail__heading .eyebrow { margin-bottom: 12px; }
.direction-detail__heading h2 { margin: 0; font-size: 23px; }

.detail-close {
  @include focus-ring;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  flex: 0 0 auto;
  color: $color-text;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid $color-border;
  border-radius: $radius-sm;
  cursor: pointer;
  transition: color $transition, border-color $transition, background-color $transition;
}

.detail-close:hover {
  color: $color-white;
  background: rgba(255, 255, 255, 0.08);
  border-color: $color-border-strong;
}

.direction-detail__grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 34px 56px;
  padding-top: 29px;
}

.direction-detail__grid h3 {
  margin-bottom: 17px;
  color: $color-white;
  font-size: 15px;
}

.detail-list {
  display: grid;
  gap: 12px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.detail-list li {
  position: relative;
  padding-left: 17px;
  color: $color-text;
  font-size: 13px;
  line-height: 1.75;
}

.detail-list li::before {
  position: absolute;
  top: 0.72em;
  left: 0;
  width: 5px;
  height: 5px;
  content: '';
  background: $color-accent;
  border-radius: 50%;
}

.detail-list--projects li::before { background: transparent; border: 1px solid $color-accent; }

.direction-detail__description {
  grid-column: 1 / -1;
  padding-top: 25px;
  border-top: 1px solid $color-border;
}

.direction-detail__description p {
  max-width: 920px;
  margin: 0;
  color: $color-text;
  font-size: 13px;
  line-height: 1.9;
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
  .direction-detail { padding: 24px 20px; }
  .direction-detail__heading h2 { font-size: 19px; }
  .direction-detail__grid { grid-template-columns: 1fr; gap: 28px; }
  .direction-detail__description { grid-column: auto; }
  .workflow-grid { grid-template-columns: 1fr; }
  .workflow-grid article,
  .workflow-grid article + article { padding: 28px 0; border-right: 0; border-bottom: 1px solid $color-border; }
  .workflow-grid article:last-child { border-bottom: 0; }
}
</style>
