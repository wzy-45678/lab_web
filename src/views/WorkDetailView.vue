<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { ArrowLeft, ArrowUpRight, ChevronLeft, ChevronRight, Image, Maximize2, Video, X } from 'lucide-vue-next'
import PageHero from '../components/PageHero.vue'
import SectionHeading from '../components/SectionHeading.vue'
import { projects } from '../data/siteData'

const route = useRoute()
const project = computed(() => projects.find((item) => item.id === route.params.id))
const videoList = computed(() => {
  if (!project.value) return []
  if (Array.isArray(project.value.videos)) return project.value.videos
  return project.value.video ? [project.value.video] : []
})
const activeVideoIndex = ref(0)
const activeVideo = computed(() => videoList.value[activeVideoIndex.value] || null)
const activeVideoBvid = computed(() => getBilibiliVideoId(activeVideo.value?.src))
const activeVideoEmbedUrl = computed(() => {
  if (!activeVideoBvid.value) return ''
  return `https://player.bilibili.com/player.html?bvid=${encodeURIComponent(activeVideoBvid.value)}&page=1&high_quality=1&danmaku=0`
})
const activePhotoIndex = ref(null)
const activePhoto = computed(() => {
  if (activePhotoIndex.value === null) return null
  return project.value?.gallery?.[activePhotoIndex.value] || null
})

function openPhoto(index) {
  activePhotoIndex.value = index
}

function closePhoto() {
  activePhotoIndex.value = null
}

function showPreviousPhoto() {
  const photos = project.value?.gallery || []
  if (photos.length < 2 || activePhotoIndex.value === null) return
  activePhotoIndex.value = (activePhotoIndex.value - 1 + photos.length) % photos.length
}

function showNextPhoto() {
  const photos = project.value?.gallery || []
  if (photos.length < 2 || activePhotoIndex.value === null) return
  activePhotoIndex.value = (activePhotoIndex.value + 1) % photos.length
}

function selectVideo(index) {
  activeVideoIndex.value = index
}

function getBilibiliVideoId(source) {
  if (!source || typeof source !== 'string') return ''
  try {
    const url = new URL(source)
    const match = url.pathname.match(/\/video\/(BV[\w]+)/i)
    return match ? match[1] : ''
  } catch {
    return ''
  }
}

function handlePhotoKeydown(event) {
  if (!activePhoto.value) return
  if (event.key === 'Escape') closePhoto()
  if (event.key === 'ArrowLeft') showPreviousPhoto()
  if (event.key === 'ArrowRight') showNextPhoto()
}

onMounted(() => window.addEventListener('keydown', handlePhotoKeydown))
onUnmounted(() => window.removeEventListener('keydown', handlePhotoKeydown))
</script>

<template>
  <div class="work-detail-page">
    <div v-if="project">
    <PageHero
      index="04"
      eyebrow="PROJECT DETAIL"
      :title="project.title"
      :description="project.description"
      :image="project.image || '/images/project-chip.jpg'"
    />

    <section class="section detail-intro-section">
      <div class="container">
        <RouterLink class="back-link" to="/works">
          <ArrowLeft :size="16" />
          返回成果展示
        </RouterLink>

        <div class="detail-intro">
          <div v-reveal>
            <span class="eyebrow">PROJECT OVERVIEW</span>
            <h2>成果介绍</h2>
            <p>{{ project.overview || '项目背景、目标、技术方案与完成过程待补充。' }}</p>
          </div>
          <dl v-reveal="{ delay: 100 }" class="detail-facts">
            <div>
              <dt>所属方向</dt>
              <dd>{{ project.direction || '待补充' }}</dd>
            </div>
            <div>
              <dt>你将接触到</dt>
              <dd>{{ project.exposure || '待补充' }}</dd>
            </div>
            <div>
              <dt>适合人群</dt>
              <dd>{{ project.audience || '待补充' }}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>

    <section class="section section--bordered detail-section">
      <div class="container">
        <SectionHeading
          v-reveal
          eyebrow="WHAT YOU WILL LEARN"
          title="你将接触到"
          description="从一个真实成果出发，了解加入实验室后可以参与的工作内容。"
        />

        <div class="learning-grid">
          <article v-for="(item, index) in project.learning" :key="index" v-reveal="{ delay: index * 70 }">
            <span>0{{ index + 1 }}</span>
            <p>{{ item || '学习内容待补充' }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section media-section">
      <div class="container">
        <SectionHeading
          v-reveal
          eyebrow="DEMONSTRATION"
          title="项目视频"
          description="用视频记录功能演示、测试过程或比赛现场。"
        />

        <div v-if="videoList.length" v-reveal class="video-player">
          <div v-if="videoList.length > 1" class="video-tabs" role="tablist" aria-label="选择项目视频">
            <button
              v-for="(video, index) in videoList"
              :key="`${video.src}-${index}`"
              class="video-tab"
              :class="{ 'is-active': activeVideoIndex === index }"
              type="button"
              role="tab"
              :aria-selected="activeVideoIndex === index"
              @click="selectVideo(index)"
            >
              <span>{{ String(index + 1).padStart(2, '0') }}</span>
              {{ video.label || `项目视频 ${index + 1}` }}
            </button>
          </div>
          <article class="video-panel">
            <div class="video-heading">
              <span>{{ String(activeVideoIndex + 1).padStart(2, '0') }}</span>
              <strong>{{ activeVideo.label || `项目视频 ${activeVideoIndex + 1}` }}</strong>
              <a
                v-if="activeVideoEmbedUrl"
                class="video-external-link"
                :href="activeVideo.src"
                target="_blank"
                rel="noopener noreferrer"
              >
                在 B 站打开
                <ArrowUpRight :size="14" />
              </a>
            </div>
            <iframe
              v-if="activeVideoEmbedUrl"
              :key="activeVideoEmbedUrl"
              class="video-embed"
              :src="activeVideoEmbedUrl"
              :title="activeVideo.label || 'B站项目视频'"
              loading="lazy"
              allow="fullscreen; autoplay; encrypted-media; picture-in-picture"
              allowfullscreen
              referrerpolicy="strict-origin-when-cross-origin"
            ></iframe>
            <video
              v-else
              :key="activeVideo.src"
              :src="activeVideo.src"
              :poster="activeVideo.poster || undefined"
              controls
              preload="metadata"
              playsinline
            >
              你的浏览器不支持视频播放。
            </video>
          </article>
        </div>
        <div v-else v-reveal class="media-empty">
          <Video :size="30" :stroke-width="1.25" />
          <strong>视频材料待补充</strong>
            <span>可在这里放入项目演示、测试记录或比赛现场视频。</span>
          </div>
      </div>
    </section>

    <section class="section section--bordered gallery-section">
      <div class="container">
        <SectionHeading
          v-reveal
          eyebrow="PHOTO RECORD"
          title="项目图集"
          description="展示设计过程、实物细节、测试场景和最终成果。"
        />

        <div v-if="project.gallery.length" class="detail-gallery">
          <button
            v-for="(photo, index) in project.gallery"
            :key="`${photo.src}-${index}`"
            v-reveal="{ delay: index * 70 }"
            class="gallery-card"
            type="button"
            :aria-label="`放大查看：${photo.alt}`"
            @click="openPhoto(index)"
          >
            <img :src="photo.src" :alt="photo.alt" />
            <span class="gallery-expand"><Maximize2 :size="17" /></span>
            <span class="gallery-caption">{{ photo.caption || '图片说明待补充' }}</span>
          </button>
        </div>
        <div v-else v-reveal class="media-empty gallery-empty">
          <Image :size="30" :stroke-width="1.25" />
          <strong>项目图片待补充</strong>
          <span>可在这里展示实物、原理图、调试过程和比赛现场照片。</span>
        </div>
      </div>
    </section>

    <section class="section cta-section">
      <div v-reveal class="container cta-panel">
        <div>
          <span class="eyebrow">JOIN THE LAB</span>
          <h2>想参与类似项目？</h2>
          <p>加入创新创业实验室，从真实项目开始积累软硬件实践经验。</p>
        </div>
        <RouterLink class="button button--primary" to="/join">
          加入我们
          <ArrowUpRight :size="17" />
        </RouterLink>
      </div>
    </section>
  </div>

    <div v-else class="missing-project">
      <div class="container">
        <span class="eyebrow">PROJECT NOT FOUND</span>
        <h1>未找到该成果</h1>
        <RouterLink class="button button--primary" to="/works">返回成果展示</RouterLink>
      </div>
    </div>

    <Teleport to="body">
      <div
        v-if="activePhoto"
        class="project-lightbox"
        role="dialog"
        aria-modal="true"
        aria-label="项目图片大图预览"
        @click.self="closePhoto"
      >
        <button class="lightbox-close" type="button" aria-label="关闭大图" title="关闭大图" @click="closePhoto">
          <X :size="20" />
        </button>
        <button
          v-if="project.gallery.length > 1"
          class="lightbox-nav lightbox-nav--previous"
          type="button"
          aria-label="上一张"
          title="上一张"
          @click="showPreviousPhoto"
        >
          <ChevronLeft :size="24" />
        </button>
        <figure class="lightbox-figure">
          <img :src="activePhoto.src" :alt="activePhoto.alt" />
          <figcaption>
            <span>{{ activePhoto.caption || '图片说明待补充' }}</span>
            <small v-if="project.gallery.length > 1">
              {{ String(activePhotoIndex + 1).padStart(2, '0') }} / {{ String(project.gallery.length).padStart(2, '0') }}
            </small>
          </figcaption>
        </figure>
        <button
          v-if="project.gallery.length > 1"
          class="lightbox-nav lightbox-nav--next"
          type="button"
          aria-label="下一张"
          title="下一张"
          @click="showNextPhoto"
        >
          <ChevronRight :size="24" />
        </button>
      </div>
    </Teleport>
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

.detail-intro {
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(280px, 0.8fr);
  gap: 80px;
  align-items: start;
}

.detail-intro h2 { margin-bottom: 16px; }
.detail-intro p { max-width: 680px; font-size: 15px; }

.detail-facts {
  margin: 0;
  border-top: 1px solid $color-border;
}

.detail-facts > div {
  display: grid;
  grid-template-columns: 88px 1fr;
  gap: 16px;
  padding: 17px 0;
  border-bottom: 1px solid $color-border;
}

.detail-facts dt { color: $color-text-soft; font-family: $font-mono; font-size: 10px; }
.detail-facts dd { margin: 0; color: $color-white; font-size: 13px; }

.detail-section { background: rgba($color-bg-deep, 0.42); }

.learning-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: $color-border;
  border: 1px solid $color-border;
}

.learning-grid article { min-height: 160px; padding: 28px; background: $color-bg; }
.learning-grid span { color: $color-accent; font-family: $font-mono; font-size: 12px; }
.learning-grid p { margin-top: 28px; color: $color-text; font-size: 14px; }

.video-player {
  max-width: 980px;
  margin-inline: auto;
}

.video-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 12px;
}

.video-tab {
  @include focus-ring;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-height: 36px;
  padding: 0 13px;
  color: $color-text-soft;
  background: rgba(255, 255, 255, 0.025);
  border: 1px solid $color-border;
  border-radius: $radius-sm;
  cursor: pointer;
  font-size: 12px;
  transition: color $transition, background-color $transition, border-color $transition;
}

.video-tab span {
  color: $color-text-soft;
  font-family: $font-mono;
  font-size: 10px;
}

.video-tab:hover,
.video-tab.is-active {
  color: $color-white;
  background: $color-accent-soft;
  border-color: rgba($color-accent, 0.65);
}

.video-tab.is-active span { color: $color-accent; }

.video-panel {
  width: 100%;
}

.video-panel {
  overflow: hidden;
  background: $color-bg-deep;
  border: 1px solid $color-border-strong;
  border-radius: $radius-md;
}

.video-heading {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 13px 16px;
  border-bottom: 1px solid $color-border;
}

.video-heading span { color: $color-accent; font-family: $font-mono; font-size: 10px; }
.video-heading strong { color: $color-white; font-size: 13px; font-weight: 500; }

.video-external-link {
  @include focus-ring;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  margin-left: auto;
  color: $color-text-soft;
  font-size: 11px;
  transition: color $transition;
}

.video-external-link:hover { color: $color-white; }

.video-panel video {
  display: block;
  width: 100%;
  max-height: 680px;
  background: #080a0e;
}

.video-embed {
  display: block;
  width: 100%;
  aspect-ratio: 16 / 9;
  min-height: 420px;
  border: 0;
  background: #080a0e;
}

.media-empty {
  display: grid;
  min-height: 330px;
  place-items: center;
  align-content: center;
  gap: 10px;
  padding: 32px;
  color: $color-text-soft;
  background:
    linear-gradient(rgba($color-border, 0.65) 1px, transparent 1px),
    linear-gradient(90deg, rgba($color-border, 0.65) 1px, transparent 1px),
    $color-bg-deep;
  background-size: 34px 34px;
  text-align: center;
}

.media-empty svg { color: $color-accent; }
.media-empty strong { color: $color-white; font-size: 15px; font-weight: 500; }
.media-empty span { max-width: 390px; font-size: 12px; }

.gallery-section { background: rgba($color-bg-deep, 0.28); }

.detail-gallery {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

.gallery-card {
  @include focus-ring;
  position: relative;
  display: block;
  width: 100%;
  padding: 0;
  overflow: hidden;
  color: inherit;
  background: $color-surface;
  border: 1px solid $color-border;
  border-radius: $radius-md;
  cursor: zoom-in;
  text-align: left;
  transition: border-color $transition, transform $transition, box-shadow $transition;
}

.gallery-card:hover {
  border-color: $color-border-strong;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.16);
  transform: translateY(-3px);
}

.gallery-card img {
  width: 100%;
  aspect-ratio: 16 / 10;
  object-fit: cover;
  transition: transform 0.5s ease, filter $transition;
}

.gallery-card:hover img { filter: brightness(0.82); transform: scale(1.025); }

.gallery-expand {
  position: absolute;
  top: 14px;
  right: 14px;
  display: grid;
  width: 34px;
  height: 34px;
  place-items: center;
  color: $color-white;
  background: rgba(10, 12, 17, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.24);
  border-radius: $radius-sm;
}

.gallery-caption { display: block; padding: 13px 15px; color: $color-text; font-size: 12px; }
.gallery-empty { min-height: 280px; border: 1px solid $color-border-strong; border-radius: $radius-md; }

.cta-section { padding-top: 76px; padding-bottom: 120px; }

.cta-panel {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  padding: 38px 42px;
  background: rgba($color-surface, 0.72);
  border: 1px solid $color-border-strong;
  border-radius: $radius-md;
}

.cta-panel .eyebrow { margin-bottom: 10px; }
.cta-panel h2 { margin-bottom: 8px; font-size: 27px; }
.cta-panel p { font-size: 13px; }

.project-lightbox {
  position: fixed;
  z-index: 100;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
  padding: 48px 72px;
  background: rgba(6, 8, 12, 0.94);
}

.lightbox-close,
.lightbox-nav {
  @include focus-ring;
  display: grid;
  place-items: center;
  color: $color-white;
  background: rgba(10, 12, 17, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: $radius-sm;
  cursor: pointer;
  transition: background-color $transition, border-color $transition;
}

.lightbox-close { position: absolute; top: 22px; right: 24px; width: 40px; height: 40px; }
.lightbox-nav { width: 42px; height: 48px; flex: 0 0 auto; }
.lightbox-close:hover, .lightbox-nav:hover { background: rgba($color-accent, 0.9); border-color: $color-accent; }

.lightbox-figure {
  display: grid;
  gap: 14px;
  max-width: min(100%, 1120px);
  max-height: 100%;
  margin: 0;
}

.lightbox-figure img {
  display: block;
  width: auto;
  max-width: 100%;
  max-height: calc(100vh - 150px);
  object-fit: contain;
  border: 1px solid $color-border-strong;
  border-radius: $radius-sm;
}

.lightbox-figure figcaption {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  color: $color-white;
  font-size: 13px;
}

.lightbox-figure small { color: $color-text-soft; font-family: $font-mono; font-size: 10px; }

.missing-project { min-height: 70vh; padding: 180px 0 100px; }
.missing-project h1 { margin-bottom: 28px; }

@media (max-width: 820px) {
  .detail-intro { grid-template-columns: 1fr; gap: 42px; }
  .learning-grid { grid-template-columns: 1fr; }
  .learning-grid article { min-height: 0; }
  .video-tabs { margin-bottom: 10px; }
}

@media (max-width: 720px) {
  .detail-intro-section { padding-top: 42px; }
  .back-link { margin-bottom: 34px; }
  .detail-gallery { grid-template-columns: 1fr; }
  .media-empty { min-height: 240px; }
  .video-embed { min-height: 240px; }
  .cta-panel { align-items: flex-start; flex-direction: column; padding: 28px 24px; }
  .project-lightbox { gap: 8px; padding: 64px 14px 30px; }
  .lightbox-nav { width: 34px; height: 42px; }
  .lightbox-close { top: 16px; right: 16px; }
}
</style>
