<script setup>
import { computed } from 'vue'
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

// 首屏横向流动图集：替换图片时，只需要修改这里的 src 和 label。
// 图片统一放在 public/images/，路径以 /images/ 开头即可。
const heroGalleryPhotos = [
  { src: '/images/lab-circuit.jpg' },
  { src: '/images/lhhzzhgnqs.png' },
  { src: '/images/lab-workbench.jpg' },
  { src: '/images/chncs.jpg' },  
  { src: '/images/lab-show1.jpg'},
  { src: '/images/learning-code.jpg'},
  { src: '/images/chnjqr25.jpg'},
  { src: '/images/qs2.jpeg'},
  { src: '/images/project-chip.jpg'},
  { src: '/images/fsqsbq.jpg' },
  { src: '/images/lab-board.jpg'},
  { src: '/images/qsfm.jpg'},
  { src: '/images/pcb2.png'},
  { src: '/images/qszs4.jpg'},
  { src: '/images/qs1.jpeg'},
  { src: '/images/ht.jpg'},
  { src: '/images/pcb3.png'},
  { src: '/images/dsxc.jpg'},
  { src: '/images/qszs3.jpg'},
  { src: '/images/nailong.jpg'},
  { src: '/images/nailongpcb.png'},
]

const rotateGalleryPhotos = (start) => [
  ...heroGalleryPhotos.slice(start),
  ...heroGalleryPhotos.slice(0, start),
]

// 每一行复制一份图片，让 CSS 在移动到一半时无缝衔接。
const heroGalleryRows = [
  { direction: 'to-left', duration: '42s', photos: heroGalleryPhotos },
  { direction: 'to-right', duration: '48s', photos: rotateGalleryPhotos(2) },
  { direction: 'to-left', duration: '52s', photos: rotateGalleryPhotos(4) },
  { direction: 'to-right', duration: '45s', photos: rotateGalleryPhotos(1) },
]

// 招新视频：填写 B 站完整视频链接或 BV 号即可，不需要上传视频文件到 Git。
// 例：url: 'https://www.bilibili.com/video/BV1xxxxxxxxx/'
// 请勿填写 b23.tv 短链接，因为短链接本身不包含 BV 号。
const recruitmentVideo = {
  url: 'https://www.bilibili.com/video/BV1zae36SE53?vd_source=04b20f46ef82374a16e887c11c4ff0b9',
  title: '实验室招新视频',
  description: '用一段视频了解实验室的工作环境、项目实践和团队日常。',
}

const recruitmentVideoBvid = computed(() => getBilibiliVideoId(recruitmentVideo.url))
const recruitmentVideoEmbedUrl = computed(() => {
  if (!recruitmentVideoBvid.value) return ''
  return `https://player.bilibili.com/player.html?bvid=${encodeURIComponent(recruitmentVideoBvid.value)}&page=1&high_quality=1&danmaku=0`
})

function getBilibiliVideoId(source) {
  if (!source || typeof source !== 'string') return ''
  const match = source.trim().match(/\b(BV[\w]+)\b/i)
  return match ? match[1] : ''
}

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
      <div class="hero-gallery" aria-hidden="true">
        <div
          v-for="(row, rowIndex) in heroGalleryRows"
          :key="`hero-row-${rowIndex}`"
          class="hero-gallery-lane"
        >
          <div
            class="hero-gallery-track"
            :class="`hero-gallery-track--${row.direction}`"
            :style="{ '--marquee-duration': row.duration }"
          >
            <div
              v-for="groupIndex in 2"
              :key="`${rowIndex}-group-${groupIndex}`"
              class="hero-gallery-group"
            >
              <figure
                v-for="(photo, photoIndex) in row.photos"
                :key="`${rowIndex}-${groupIndex}-${photoIndex}-${photo.src}`"
                class="hero-gallery-card"
              >
                <img :src="photo.src" alt="" />
                <figcaption>
                  <span>{{ String(photoIndex + 1).padStart(2, '0') }}</span>
                  <strong>{{ photo.label }}</strong>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
      <div class="hero-overlay" />
      <div class="hero-vignette" />
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

        <article v-reveal class="recruitment-video">
          <div class="recruitment-video-heading">
            <div>
              <span class="eyebrow">RECRUITMENT VIDEO</span>
              <h3>{{ recruitmentVideo.title }}</h3>
              <p>{{ recruitmentVideo.description }}</p>
            </div>
            <span class="recruitment-video-status">VIDEO / 01</span>
          </div>
          <div class="recruitment-video-player">
            <iframe
              v-if="recruitmentVideoEmbedUrl"
              class="recruitment-video-embed"
              :src="recruitmentVideoEmbedUrl"
              :title="recruitmentVideo.title"
              loading="lazy"
              allow="fullscreen; autoplay; encrypted-media; picture-in-picture"
              allowfullscreen
              referrerpolicy="strict-origin-when-cross-origin"
            ></iframe>
            <div v-else class="recruitment-video-empty">
              <strong>招新视频待上传</strong>
              <span>将 B 站完整视频链接或 BV 号填入 recruitmentVideo.url</span>
            </div>
          </div>
        </article>


        <div v-reveal class="lab-about-link">
          <RouterLink class="button button--secondary" to="/about">
            了解实验室简介
            <ArrowRight :size="17" />
          </RouterLink>
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
  isolation: isolate;
  background: $color-bg-deep;
  border-bottom: 1px solid $color-border;
}

.hero-gallery {
  position: absolute;
  z-index: -2;
  inset: -7% -8%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  transform: scale(1.08);
  opacity: 0.96;
}

.hero-gallery-lane {
  width: 100%;
  overflow: hidden;
}

.hero-gallery-track {
  display: flex;
  width: max-content;
  will-change: transform;
}

.hero-gallery-group {
  display: flex;
  flex: none;
  gap: 16px;
  padding-right: 16px;
}

.hero-gallery-track--to-left {
  animation: hero-marquee-left var(--marquee-duration) linear infinite;
}

.hero-gallery-track--to-right {
  animation: hero-marquee-right var(--marquee-duration) linear infinite;
}

.hero-gallery-card {
  position: relative;
  flex: 0 0 clamp(210px, 23vw, 340px);
  height: clamp(126px, 15vw, 220px);
  margin: 0;
  overflow: hidden;
  background: $color-surface;
  border: 1px solid rgba($color-accent, 0.34);
  border-radius: 12px;
  box-shadow: 0 16px 36px rgba(3, 6, 12, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.035);
}

.hero-gallery-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: saturate(0.8) brightness(0.5) contrast(1.0);
}

.hero-gallery-card::after {
  position: absolute;
  inset: 0;
  content: '';
  background: linear-gradient(135deg, rgba(80, 150, 230, 0.12), transparent 55%), linear-gradient(transparent 42%, rgba(8, 10, 14, 0.62));
}

.hero-gallery-card figcaption {
  position: absolute;
  z-index: 1;
  right: 13px;
  bottom: 12px;
  left: 13px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

.hero-gallery-card figcaption span {
  color: rgba($color-accent, 0.9);
  font-family: $font-mono;
  font-size: 9px;
}

.hero-gallery-card figcaption strong {
  color: rgba($color-white, 0.82);
  font-size: 11px;
  font-weight: 500;
}

.hero-overlay {
  position: absolute;
  z-index: -1;
  inset: 0;
  background:
    linear-gradient(90deg, rgba(16, 18, 24, 0.82) 0%, rgba(16, 18, 24, 0.34) 35%, rgba(16, 18, 24, 0.34) 65%, rgba(16, 18, 24, 0.82) 100%),
    linear-gradient(180deg, rgba(16, 18, 24, 0.5), rgba(16, 18, 24, 0.28) 48%, rgba(16, 18, 24, 0.7));
}

.hero-vignette {
  position: absolute;
  z-index: -1;
  inset: 0;
  pointer-events: none;
  background: radial-gradient(circle at center, transparent 18%, rgba(9, 11, 16, 0.14) 64%, rgba(9, 11, 16, 0.52) 100%);
}

.hero-content {
  position: relative;
  z-index: 1;
  min-width: 0;
  max-width: 850px;
  padding-top: 112px;
  padding-bottom: 80px;
  text-align: center;
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
  justify-content: center;
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
  overflow-wrap: anywhere;
  margin-right: auto;
  margin-left: auto;
  color: #b6bdc8;
  font-size: 16px;
  opacity: 0;
  animation: intro-fade 0.7s ease 1.65s forwards;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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

.recruitment-video {
  margin: 0 0 34px;
  padding: 22px;
  background: rgba($color-surface, 0.72);
  border: 1px solid $color-border;
  border-radius: $radius-md;
}

.recruitment-video-heading {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 16px;
}

.recruitment-video-heading .eyebrow {
  display: block;
  margin-bottom: 8px;
  color: $color-accent;
  font-family: $font-mono;
  font-size: 10px;
}

.recruitment-video-heading h3 {
  overflow-wrap: anywhere;
  margin-bottom: 6px;
  color: $color-white;
  font-size: 20px;
  font-weight: 550;
}

.recruitment-video-heading p {
  overflow-wrap: anywhere;
  color: $color-text;
  font-size: 13px;
}

.recruitment-video-status {
  flex: none;
  color: $color-text-soft;
  font-family: $font-mono;
  font-size: 10px;
}

.recruitment-video-player {
  position: relative;
  overflow: hidden;
  min-height: clamp(220px, 42vw, 500px);
  background: $color-bg-deep;
  border: 1px solid $color-border;
  border-radius: $radius-sm;
}

.recruitment-video-embed {
  display: block;
  width: 100%;
  aspect-ratio: 16 / 9;
  border: 0;
  background: $color-bg-deep;
}

.recruitment-video-empty {
  display: grid;
  min-height: clamp(220px, 42vw, 500px);
  place-items: center;
  align-content: center;
  gap: 9px;
  padding: 30px;
  color: $color-text-soft;
  background:
    linear-gradient(rgba($color-border, 0.7) 1px, transparent 1px),
    linear-gradient(90deg, rgba($color-border, 0.7) 1px, transparent 1px),
    $color-bg-deep;
  background-size: 34px 34px;
  text-align: center;
}

.recruitment-video-empty::before {
  width: 42px;
  height: 42px;
  content: '▶';
  color: $color-accent;
  font-size: 17px;
  line-height: 42px;
  text-align: center;
  background: $color-accent-soft;
  border: 1px solid rgba($color-accent, 0.32);
  border-radius: 50%;
}

.recruitment-video-empty strong {
  color: $color-white;
  font-size: 15px;
  font-weight: 500;
}

.recruitment-video-empty span {
  font-size: 12px;
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

.lab-about-link {
  display: flex;
  justify-content: center;
  margin-top: 48px;
  border-top: 1px solid $color-border;
  padding-top: 32px;
}

.lab-about-link .button { min-width: 174px; }

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
  min-width: 0;
  align-items: flex-end;
  justify-content: space-between;
  gap: 42px;
}

.recruitment-inner h2 { margin-bottom: 14px; }
.recruitment-inner h2,
.recruitment-inner p { overflow-wrap: anywhere; }
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

@keyframes hero-marquee-left {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

@keyframes hero-marquee-right {
  from { transform: translateX(-50%); }
  to { transform: translateX(0); }
}

@media (max-width: 900px) {
  .hero-title { font-size: 56px; }
  .hero-gallery { inset: -4% -18%; gap: 12px; }
  .hero-gallery-group { gap: 12px; padding-right: 12px; }
  .hero-gallery-card { flex-basis: 230px; height: 150px; }
  .environment-grid { grid-template-columns: 1fr; }
  .environment-side { grid-template-columns: 1fr 1fr; grid-template-rows: auto; }
  .environment-image--secondary { min-height: 300px; }
  .advantage-grid { grid-template-columns: 1fr; }
  .advantage-item { border-right: 0; border-bottom: 1px solid $color-border; }
  .advantage-item:last-child { border-bottom: 0; }
}

@media (max-width: $breakpoint-mobile) {
  .home-page,
  .home-page .section,
  .home-page .container {
    max-width: 100%;
    overflow-x: clip;
  }

  .home-hero { min-height: 82svh; }
  .hero-content { padding-top: 105px; padding-bottom: 62px; }
  .hero-eyebrow { max-width: 250px; font-size: 10px; }
  .hero-title { margin-bottom: 22px; font-size: 40px; }
  .hero-intro { font-size: 14px; line-height: 1.8; }
  .hero-actions { margin-top: 28px; }
  .scroll-cue { display: none; }
  .hero-gallery { inset: 0 -40%; gap: 10px; opacity: 0.9; }
  .hero-gallery-group { gap: 10px; padding-right: 10px; }
  .hero-gallery-card { flex-basis: 190px; height: 122px; border-radius: 9px; }
  .hero-gallery-card figcaption { right: 10px; bottom: 9px; left: 10px; }
  .hero-gallery-card figcaption strong { font-size: 10px; }
  .recruitment-video { padding: 16px; }
  .recruitment-video-heading { flex-direction: column; gap: 10px; }
  .recruitment-video-status { align-self: flex-start; }
  .environment-side { grid-template-columns: 1fr; }
  .environment-image--primary { min-height: 410px; }
  .environment-image--secondary { min-height: 260px; }
  .advantage-item { padding: 28px 4px; }
  .advantage-top { margin-bottom: 30px; }
  .advantage-grid,
  .advantage-item,
  .advantage-item h3,
  .advantage-item p,
  .recruitment-inner,
  .recruitment-inner > div,
  .recruitment-inner h2,
  .recruitment-inner p {
    width: 100%;
    min-width: 0;
    max-width: 100%;
  }

  .advantage-item h3,
  .advantage-item p,
  .recruitment-inner h2,
  .recruitment-inner p {
    overflow-wrap: anywhere;
    word-break: normal;
    white-space: normal;
  }

  .recruitment-inner { align-items: flex-start; flex-direction: column; gap: 28px; }
  .recruitment-inner h2 { font-size: 34px; line-height: 1.25; }
  .recruitment-inner .button { width: 100%; }
}

@media (prefers-reduced-motion: reduce) {
  .hero-gallery-track,
  .hero-eyebrow,
  .hero-title span,
  .hero-intro,
  .hero-actions .button {
    animation: none;
  }

  .hero-eyebrow,
  .hero-title span,
  .hero-intro,
  .hero-actions .button {
    opacity: 1;
    transform: none;
  }
}
</style>
