<script setup>
import { ArrowUpRight, Box, Gauge, Layers3 } from 'lucide-vue-next'
import PageHero from '../components/PageHero.vue'
import SectionHeading from '../components/SectionHeading.vue'
import { projects } from '../data/siteData'

const process = [
  { icon: Layers3, label: 'DESIGN', title: '方案与架构', text: '明确指标、接口与风险，先验证关键链路。' },
  { icon: Box, label: 'PROTOTYPE', title: '样机与联调', text: '快速完成可运行样机，在实测中修正判断。' },
  { icon: Gauge, label: 'VERIFY', title: '测试与迭代', text: '记录数据、覆盖边界条件，持续提升稳定性。' },
]
</script>

<template>
  <div>
    <PageHero
      index="04"
      eyebrow="PROJECT SHOWCASE"
      title="作品展示"
      description="每件作品都由需求、图纸、代码、联调记录和持续迭代共同构成。"
      image="/images/project-robot.jpg"
    />

    <section class="section">
      <div class="container">
        <SectionHeading
          v-reveal
          eyebrow="SELECTED WORKS"
          title="让技术最终落到可运行的系统"
          description="以下项目用于展示首版页面结构，正式发布时可替换为实验室实物照片和真实技术信息。"
        />

        <div class="project-grid">
          <article
            v-for="(project, index) in projects"
            :key="project.title"
            v-reveal="{ delay: (index % 2) * 90 }"
            class="project-card"
          >
            <div class="project-image">
              <img :src="project.image" :alt="project.title" />
              <span>{{ project.category }}</span>
            </div>
            <div class="project-body">
              <div class="project-title-row">
                <h2>{{ project.title }}</h2>
                <ArrowUpRight :size="19" />
              </div>
              <p>{{ project.description }}</p>
              <ul class="tag-list">
                <li v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="section section--bordered process-section">
      <div class="container">
        <SectionHeading
          v-reveal
          eyebrow="BUILD PROCESS"
          title="作品背后的三个阶段"
          description="项目不是一次性展示，而是一套可以复盘和继续迭代的工程过程。"
        />

        <div class="process-grid">
          <article
            v-for="(item, index) in process"
            :key="item.label"
            v-reveal="{ delay: index * 90 }"
          >
            <component :is="item.icon" :size="25" :stroke-width="1.4" />
            <span>{{ item.label }}</span>
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

.project-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
}

.project-card {
  @include card-surface;
  overflow: hidden;
}

.project-image {
  position: relative;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background: $color-bg-deep;
}

.project-image::after {
  position: absolute;
  inset: 0;
  content: '';
  background: rgba(8, 10, 14, 0.16);
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: saturate(0.68) brightness(0.76);
  transition: filter 0.6s ease, transform 0.7s ease;
}

.project-card:hover .project-image img {
  filter: saturate(0.82) brightness(0.84);
  transform: scale(1.025);
}

.project-image > span {
  position: absolute;
  z-index: 1;
  top: 18px;
  left: 18px;
  padding: 5px 9px;
  color: $color-white;
  background: rgba($color-bg-deep, 0.82);
  border: 1px solid $color-border-strong;
  border-radius: $radius-sm;
  font-family: $font-mono;
  font-size: 10px;
}

.project-body { padding: 26px; }

.project-title-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  color: $color-accent;
}

.project-title-row h2 { margin-bottom: 0; font-size: 22px; }
.project-body > p { min-height: 48px; margin: 13px 0 22px; font-size: 13px; }

.process-section { background: rgba($color-bg-deep, 0.42); }

.process-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: $color-border;
  border: 1px solid $color-border;
}

.process-grid article {
  min-height: 260px;
  padding: 32px;
  background: $color-bg;
  transition: background-color $transition;
}

.process-grid article:hover { background: $color-surface; }
.process-grid svg { color: $color-accent; }
.process-grid span { display: block; margin-top: 36px; color: $color-text-soft; font-family: $font-mono; font-size: 10px; }
.process-grid h3 { margin: 10px 0 12px; }
.process-grid p { font-size: 13px; }

@media (max-width: 820px) {
  .project-grid { grid-template-columns: 1fr; }
}

@media (max-width: 720px) {
  .project-body { padding: 22px; }
  .project-title-row h2 { font-size: 19px; }
  .project-body > p { min-height: 0; }
  .process-grid { grid-template-columns: 1fr; }
  .process-grid article { min-height: 0; }
}
</style>
