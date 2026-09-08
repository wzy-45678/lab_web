<script setup>
import { computed } from 'vue'
import { ArrowLeft, ArrowUpRight, BookOpen, Download, ExternalLink } from 'lucide-vue-next'
import { RouterLink, useRoute } from 'vue-router'
import PageHero from '../components/PageHero.vue'
import SectionHeading from '../components/SectionHeading.vue'
import { learningResources } from '../data/siteData'

const route = useRoute()
const resource = computed(() => learningResources.find((item) => item.id === route.params.id))
</script>

<template>
  <div class="learning-detail-page">
    <template v-if="resource">
      <PageHero
        index="05"
        eyebrow="TECH LEARNING / RESOURCE"
        :title="resource.title"
        :description="resource.description"
        image="/images/learning-code.jpg"
      />

      <section class="section detail-intro-section">
        <div class="container">
          <RouterLink class="back-link" to="/learning">
            <ArrowLeft :size="16" />
            返回技术学习
          </RouterLink>

          <div class="detail-heading">
            <SectionHeading
              v-reveal
              eyebrow="LEARNING CHAIN"
              title="沿着链条，一步一步学会"
              description="每个主题都配有简短说明、在线资料和可下载文件。先完成当前节点，再进入下一个节点，遇到问题可以在实验室交流。"
            />
            <div v-reveal class="detail-count">
              <BookOpen :size="22" />
              <span>{{ resource.topics.length }} 个学习主题</span>
            </div>
          </div>
        </div>
      </section>

      <section class="section section--bordered chain-section">
        <div class="container">
          <div class="learning-chain">
            <article
              v-for="(topic, index) in resource.topics"
              :key="topic.title"
              v-reveal="{ delay: index * 90 }"
              class="chain-item"
            >
              <div class="chain-marker" aria-hidden="true">
                <span>{{ String(index + 1).padStart(2, '0') }}</span>
              </div>
              <div class="chain-content">
                <div class="chain-meta">
                  <span>TOPIC {{ String(index + 1).padStart(2, '0') }}</span>
                  <span>建议按顺序完成</span>
                </div>
                <h2>{{ topic.title }}</h2>
                <p>{{ topic.intro }}</p>
                <p class="chain-note">{{ topic.note }}</p>
                <div class="topic-links" aria-label="自学链接和下载资料">
                  <a
                    v-for="link in topic.links"
                    :key="link.url"
                    class="topic-link"
                    :class="{ 'topic-link--download': link.download }"
                    :href="link.url"
                    :target="link.download ? undefined : '_blank'"
                    :rel="link.download ? undefined : 'noopener noreferrer'"
                    :download="link.download ? '' : undefined"
                  >
                    <span>{{ link.label }}</span>
                    <Download v-if="link.download" :size="15" :stroke-width="1.6" />
                    <ExternalLink v-else :size="15" :stroke-width="1.6" />
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section class="section learning-detail-cta">
        <div v-reveal class="container detail-cta-panel">
          <div>
            <span class="eyebrow">KEEP BUILDING</span>
            <h2>学完一个主题，就动手做一个小实验</h2>
            <p>把资料里的知识变成可以运行、可以测量、可以复盘的结果，学习才真正开始发挥作用。</p>
          </div>
          <RouterLink class="button button--secondary" to="/join">
            了解加入方式
            <ArrowUpRight :size="17" />
          </RouterLink>
        </div>
      </section>
    </template>

    <section v-else class="missing-resource">
      <div class="container">
        <span class="eyebrow">RESOURCE NOT FOUND</span>
        <h1>未找到该学习方向</h1>
        <RouterLink class="button button--primary" to="/learning">返回技术学习</RouterLink>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@use '../styles/variables' as *;
@use '../styles/mixins' as *;

.detail-intro-section { padding-top: 58px; }

.back-link {
  @include focus-ring;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 48px;
  color: $color-text-soft;
  font-size: 13px;
  transition: color $transition;
}

.back-link:hover { color: $color-white; }

.detail-heading {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 36px;
}

.detail-count {
  display: flex;
  flex: none;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
  color: $color-accent;
  font-family: $font-mono;
  font-size: 11px;
}

.chain-section { background: rgba($color-bg-deep, 0.42); }

.learning-chain {
  position: relative;
  max-width: 940px;
  margin-inline: auto;
}

.learning-chain::before {
  position: absolute;
  top: 30px;
  bottom: 30px;
  left: 23px;
  width: 1px;
  content: '';
  background: linear-gradient(to bottom, $color-accent, rgba($color-accent, 0.18));
}

.chain-item {
  position: relative;
  display: grid;
  grid-template-columns: 48px minmax(0, 1fr);
  gap: 26px;
  padding-bottom: 32px;
}

.chain-item:last-child { padding-bottom: 0; }

.chain-marker {
  position: relative;
  z-index: 1;
  display: grid;
  place-items: center;
  width: 48px;
  height: 48px;
  color: $color-accent;
  background: $color-bg-deep;
  border: 1px solid rgba($color-accent, 0.7);
  border-radius: 50%;
  font-family: $font-mono;
  font-size: 11px;
}

.chain-content {
  padding: 28px 30px 30px;
  background: rgba($color-surface, 0.82);
  border: 1px solid $color-border;
  border-radius: $radius-md;
  transition: border-color $transition, background-color $transition, transform $transition, box-shadow $transition;
}

.chain-content:hover {
  background: $color-surface-hover;
  border-color: $color-border-strong;
  box-shadow: 0 14px 32px rgba(0, 0, 0, 0.16);
  transform: translateY(-3px);
}

.chain-meta {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 16px;
  color: $color-text-soft;
  font-family: $font-mono;
  font-size: 10px;
}

.chain-meta span:first-child { color: $color-accent; }
.chain-content h2 { margin-bottom: 12px; font-size: 24px; }
.chain-content p { max-width: 720px; font-size: 14px; }
.chain-note { margin-top: 12px; color: $color-text-soft; font-size: 12px !important; }

.topic-links {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 24px;
  padding-top: 18px;
  border-top: 1px solid $color-border;
}

.topic-link {
  @include focus-ring;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-height: 34px;
  padding: 0 11px;
  color: $color-accent;
  background: rgba($color-accent, 0.08);
  border: 1px solid rgba($color-accent, 0.28);
  border-radius: $radius-sm;
  font-size: 12px;
  transition: color $transition, background-color $transition, border-color $transition;
}

.topic-link:hover {
  color: $color-white;
  background: rgba($color-accent, 0.18);
  border-color: rgba($color-accent, 0.62);
}

.topic-link--download {
  color: $color-white;
  background: rgba($color-success, 0.1);
  border-color: rgba($color-success, 0.34);
}

.topic-link--download:hover {
  background: rgba($color-success, 0.2);
  border-color: rgba($color-success, 0.68);
}

.learning-detail-cta { padding-top: 76px; padding-bottom: 120px; }

.detail-cta-panel {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  padding: 38px 42px;
  background: rgba($color-surface, 0.72);
  border: 1px solid $color-border-strong;
  border-radius: $radius-md;
}

.detail-cta-panel h2 { margin-bottom: 8px; font-size: 25px; }
.detail-cta-panel p { max-width: 680px; font-size: 13px; }
.missing-resource { min-height: 70vh; padding: 180px 0 100px; }
.missing-resource h1 { margin-bottom: 28px; }

@media (max-width: 720px) {
  .detail-intro-section { padding-top: 42px; }
  .back-link { margin-bottom: 34px; }
  .detail-heading { display: block; }
  .detail-count { margin: -10px 0 0; }
  .learning-chain::before { left: 17px; }
  .chain-item { grid-template-columns: 36px minmax(0, 1fr); gap: 14px; padding-bottom: 22px; }
  .chain-marker { width: 36px; height: 36px; font-size: 9px; }
  .chain-content { padding: 22px 18px 20px; }
  .chain-meta { align-items: flex-start; flex-direction: column; gap: 4px; }
  .chain-content h2 { font-size: 20px; }
  .chain-content p { font-size: 13px; }
  .detail-cta-panel { align-items: flex-start; flex-direction: column; padding: 28px 24px; }
}
</style>
