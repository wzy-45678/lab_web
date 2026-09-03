<script setup>
import {
  BookOpen,
  Braces,
  CircuitBoard,
  FileCode2,
  FolderOpen,
  GitBranch,
} from 'lucide-vue-next'
import PageHero from '../components/PageHero.vue'
import SectionHeading from '../components/SectionHeading.vue'
import { learningTracks } from '../data/siteData'

const resources = [
  { icon: Braces, type: '编程基础', title: 'C 语言与工程代码规范', count: '0 个主题', status: '正在开发' },
  { icon: CircuitBoard, type: '硬件基础', title: '电路、焊接与仪器使用', count: '0 个主题', status: '正在开发' },
  { icon: FileCode2, type: '嵌入式', title: 'STM32 外设与调试手册', count: '0 个主题', status: '正在开发' },
  { icon: GitBranch, type: '工程协作', title: 'Git、文档与项目复盘', count: '0 个主题', status: '正在开发' },
]
</script>

<template>
  <div>
    <PageHero
      index="05"
      eyebrow="TECH LEARNING"
      title="技术学习"
      description="把零散知识组织成可以执行的学习路线，在实践、反馈与复盘中持续进步。"
      image="/images/learning-code.jpg"
    />

    <section class="section">
      <div class="container">
        <SectionHeading
          v-reveal
          eyebrow="LEARNING PATH"
          title="从共同基础走向独立项目"
          description="培养节奏会根据学期和项目调整，但每个阶段都有清晰的学习目标与验收方式。"
        />

        <div class="track-grid">
          <article
            v-for="(track, index) in learningTracks"
            :key="track.phase"
            v-reveal="{ delay: index * 90 }"
            class="track-card"
          >
            <div class="track-meta">
              <span>0{{ index + 1 }}</span>
              <time>{{ track.duration }}</time>
            </div>
            <p class="track-phase">{{ track.phase }}</p>
            <h2>{{ track.title }}</h2>
            <ul>
              <li v-for="item in track.items" :key="item">{{ item }}</li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <section class="section section--bordered resource-section">
      <div class="container">
        <div class="resource-heading">
          <SectionHeading
            v-reveal
            eyebrow="RESOURCE INDEX"
            title="内部学习资料索引"
            description="开发中。"
          />
          <div v-reveal class="resource-status">
            <FolderOpen :size="22" />
            <span>共 0 个主题</span>
          </div>
        </div>

        <div class="resource-list">
          <article
            v-for="(item, index) in resources"
            :key="item.title"
            v-reveal="{ delay: index * 60 }"
          >
            <component :is="item.icon" :size="22" :stroke-width="1.45" />
            <span class="resource-type">{{ item.type }}</span>
            <strong>{{ item.title }}</strong>
            <span>{{ item.count }}</span>
            <span class="resource-state">{{ item.status }}</span>
          </article>
        </div>
      </div>
    </section>

    <section class="section learning-note-section">
      <div v-reveal class="container learning-note">
        <BookOpen :size="30" :stroke-width="1.4" />
        <div>
          <h2>技术资料不是阅读清单</h2>
          <p>每份资料都应对应一次操作、一次测量或一个可以运行的最小项目。</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@use '../styles/variables' as *;
@use '../styles/mixins' as *;

.track-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.track-card {
  @include card-surface;
  min-height: 390px;
  padding: 30px;
}

.track-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 56px;
  font-family: $font-mono;
  font-size: 10px;
}

.track-meta span { color: $color-accent; }
.track-meta time { color: $color-text-soft; }
.track-phase { color: $color-accent; font-size: 12px; }
.track-card h2 { margin: 9px 0 25px; font-size: 23px; }

.track-card ul {
  display: grid;
  gap: 13px;
  margin: 0;
  padding: 0;
  list-style: none;
  font-size: 13px;
}

.track-card li {
  position: relative;
  padding-left: 16px;
}

.track-card li::before {
  position: absolute;
  top: 11px;
  left: 0;
  width: 5px;
  height: 1px;
  content: '';
  background: $color-accent;
}

.resource-section { background: rgba($color-bg-deep, 0.42); }

.resource-heading {
  display: flex;
  align-items: start;
  justify-content: space-between;
  gap: 30px;
}

.resource-status {
  display: flex;
  flex: none;
  align-items: center;
  gap: 10px;
  margin-top: 48px;
  color: $color-accent;
  font-family: $font-mono;
  font-size: 10px;
}

.resource-list { border-top: 1px solid $color-border; }

.resource-list article {
  display: grid;
  grid-template-columns: 32px 90px minmax(240px, 1fr) 100px 100px;
  gap: 16px;
  align-items: center;
  min-height: 78px;
  border-bottom: 1px solid $color-border;
  font-size: 11px;
  transition: background-color $transition, padding $transition;
}

.resource-list article:hover {
  padding-inline: 10px;
  background: rgba(255, 255, 255, 0.025);
}

.resource-list svg { color: $color-accent; }
.resource-list strong { color: $color-white; font-size: 13px; font-weight: 500; }
.resource-type { color: $color-accent; }
.resource-state { color: $color-success; }

.learning-note-section { padding-top: 72px; }

.learning-note {
  display: flex;
  gap: 22px;
  align-items: center;
  padding-block: 34px;
  color: $color-accent;
  border-top: 1px solid $color-border;
  border-bottom: 1px solid $color-border;
}

.learning-note h2 { margin-bottom: 8px; font-size: 22px; }
.learning-note p { color: $color-text; font-size: 13px; }

@media (max-width: 900px) {
  .track-grid { grid-template-columns: 1fr; }
  .track-card { min-height: 0; }
  .track-meta { margin-bottom: 38px; }
  .resource-list article { grid-template-columns: 32px 80px 1fr 90px; }
  .resource-state { grid-column: 3; }
}

@media (max-width: 720px) {
  .resource-heading { flex-direction: column; }
  .resource-status { margin: -14px 0 24px; }
  .resource-list article { grid-template-columns: 26px 1fr auto; gap: 7px 12px; padding-block: 18px; }
  .resource-list article:hover { padding-inline: 0; }
  .resource-type { grid-column: 2; }
  .resource-list strong { grid-column: 2 / -1; }
  .resource-list article > span:nth-last-child(2) { grid-column: 2; }
  .resource-state { grid-column: 3; }
  .learning-note { align-items: flex-start; }
}
</style>
