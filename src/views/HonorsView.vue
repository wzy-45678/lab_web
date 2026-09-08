<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { Award, ChevronLeft, ChevronRight, Maximize2, Medal, ShieldCheck, Trophy, X } from 'lucide-vue-next'
import PageHero from '../components/PageHero.vue'
import SectionHeading from '../components/SectionHeading.vue'
import { honors } from '../data/siteData'

const stats = [
  { value: '07', label: '国家级奖项', icon: Trophy },
  { value: '10', label: '省级奖项', icon: Medal },
  { value: '未知', label: '项目完成结题', icon: ShieldCheck },
]

// 相册照片列表：将来替换为实验室奖状、比赛现场等真实照片时，只需修改这里。
const gallery = [
  { src: '/images/chncs.jpg', title: '车赛走马观碑国二', category: '竞赛成果' },
  { src: '/images/lhhzzhgnqs.png', title: '嵌赛st赛道国三', category: '竞赛成果' },
  { src: '/images/chnlq.jpg', title: '蓝桥杯嵌入式组国一', category: '竞赛成果' },
  { src: '/images/wzylq.jpg', title: '蓝桥杯单片机组国二', category: '竞赛成果' },
  { src: '/images/pdclq.jpg', title: '蓝桥杯单片机组国二', category: '竞赛成果' },
  { src: '/images/wzyzxlhfqs.jpg', title: '嵌赛st赛道省二', category: '竞赛成果' },
  { src: '/images/chnjqr25.jpg', title: '安徽省机器人B平台省二', category: '竞赛成果' },
  { src: '/images/scsysbsb.jpg', title: '毕昇杯国二', category: '竞赛成果' },
  { src: '/images/lzgqsproc.jpg', title: '嵌赛st赛道竞赛展示', category: '竞赛过程' },
  { src: '/images/hyds.jpeg', title: '电赛合影', category: '竞赛合影' },
  { src: '/images/hzdhycs.jpeg', title: '和卓大合影', category: '竞赛合影' },
  { src: '/images/hycs.jpeg', title: '车赛合影', category: '竞赛合影' },
]

const activePhoto = ref(0)
const lightboxOpen = ref(false)
const lastRailWheelAt = ref(0)
const currentPhoto = computed(() => gallery[activePhoto.value])

function selectPhoto(index) {
  activePhoto.value = index
}

function showPrevious() {
  activePhoto.value = (activePhoto.value - 1 + gallery.length) % gallery.length
}

function showNext() {
  activePhoto.value = (activePhoto.value + 1) % gallery.length
}

function handleRailWheel(event) {
  if (Math.abs(event.deltaY) < 8) return

  const now = Date.now()
  if (now - lastRailWheelAt.value < 220) return
  lastRailWheelAt.value = now
  event.preventDefault()
  event.deltaY > 0 ? showNext() : showPrevious()
}

function handleGalleryKeydown(event) {
  if (!lightboxOpen.value) return
  if (event.key === 'ArrowLeft') showPrevious()
  if (event.key === 'ArrowRight') showNext()
  if (event.key === 'Escape') lightboxOpen.value = false
}

onMounted(() => window.addEventListener('keydown', handleGalleryKeydown))
onUnmounted(() => window.removeEventListener('keydown', handleGalleryKeydown))
</script>

<template>
  <div>
    <PageHero
      index="03"
      eyebrow="LAB HONORS"
      title="实验室荣誉"
      description="荣誉记录的是一次结果，更重要的是它背后完整的训练、协作和工程积累。"
      image="/images/project-chip.jpg"
    />

    <section class="section stats-section">
      <div class="container honor-stats">
        <article
          v-for="(item, index) in stats"
          :key="item.label"
          v-reveal="{ delay: index * 90 }"
        >
          <component :is="item.icon" :size="25" :stroke-width="1.45" />
          <strong>{{ item.value }}</strong>
          <span>{{ item.label }}</span>
        </article>
      </div>
    </section>

    <section class="section section--bordered">
      <div class="container">
        <SectionHeading
          v-reveal
          eyebrow="AWARD ARCHIVE"
          title="获奖名录"
          description="当前内容为首版结构演示，正式上线前请根据实验室证书与学校公示信息核对替换。"
        />

        <div class="award-table" role="table" aria-label="实验室获奖名录">
          <div class="award-head" role="row">
            <span>级别</span><span>年份</span><span>赛事 / 项目</span><span>结果</span><span>数量</span>
          </div>
          <div
            v-for="(item, index) in honors"
            :key="`${item.year}-${item.award}`"
            v-reveal="{ delay: index * 50 }"
            class="award-row"
            role="row"
          >
            <span class="award-level"><Award :size="16" /> {{ item.level }}</span>
            <span class="award-year">{{ item.year }}</span>
            <strong>{{ item.award }}</strong>
            <span class="award-result">{{ item.result }}</span>
            <span>{{ item.team }}</span>
          </div>
        </div>
      </div>
    </section>

    <section class="section certificate-section">
      <div class="container certificate-grid">
        <div v-reveal class="certificate-copy">
          <span class="eyebrow">ACHIEVEMENT RECORD</span>
          <h2>让成果可追溯，让经验能传承</h2>
          <p>
            每项成果都应保留方案文档、版本记录、测试数据和复盘结论。奖状会被展示，解决问题的方法更需要被留下。
          </p>
        </div>
        <div v-reveal="{ delay: 100 }" class="certificate-gallery">
          <div class="gallery-heading">
            <div>
              <span class="eyebrow">PHOTO ARCHIVE</span>
              <strong>成果照片</strong>
            </div>
            <button class="gallery-open" type="button" @click="lightboxOpen = true">
              <Maximize2 :size="15" />
              <span>查看全部</span>
            </button>
          </div>

          <div class="gallery-shell">
            <div class="gallery-main">
              <button
                class="gallery-image-button"
                type="button"
                :aria-label="`查看大图：${currentPhoto.title}`"
                @click="lightboxOpen = true"
              >
                <img :src="currentPhoto.src" :alt="currentPhoto.title" />
                <span class="gallery-expand"><Maximize2 :size="17" /></span>
              </button>

              <button class="gallery-nav gallery-nav--previous" type="button" aria-label="上一张" title="上一张" @click="showPrevious">
                <ChevronLeft :size="19" />
              </button>
              <button class="gallery-nav gallery-nav--next" type="button" aria-label="下一张" title="下一张" @click="showNext">
                <ChevronRight :size="19" />
              </button>
            </div>

            <div class="gallery-rail" role="list" aria-label="照片缩略图" @wheel="handleRailWheel">
              <div class="gallery-rail__viewport">
                <button
                  v-for="(photo, index) in gallery"
                  :key="`${photo.src}-${index}`"
                  class="gallery-thumb"
                  :class="{ 'is-active': activePhoto === index }"
                  type="button"
                  :aria-label="`查看照片：${photo.title}`"
                  :aria-current="activePhoto === index ? 'true' : undefined"
                  @click="selectPhoto(index)"
                >
                  <img :src="photo.src" :alt="`${photo.title} 缩略图`" />
                  <span>{{ String(index + 1).padStart(2, '0') }}</span>
                </button>
              </div>
            </div>
          </div>
          <div class="gallery-meta">
            <span>{{ currentPhoto.category }}</span>
            <strong>{{ currentPhoto.title }}</strong>
            <small>{{ String(activePhoto + 1).padStart(2, '0') }} / {{ String(gallery.length).padStart(2, '0') }}</small>
          </div>
          <p class="gallery-note">左右切换照片，点击主图可放大查看。</p>
        </div>
      </div>
    </section>

    <Teleport to="body">
      <div v-if="lightboxOpen" class="honor-lightbox" role="dialog" aria-modal="true" aria-label="成果照片大图预览" @click.self="lightboxOpen = false">
        <button class="lightbox-close" type="button" aria-label="关闭大图" title="关闭大图" @click="lightboxOpen = false">
          <X :size="20" />
        </button>
        <button class="lightbox-nav lightbox-nav--previous" type="button" aria-label="上一张" title="上一张" @click="showPrevious">
          <ChevronLeft :size="24" />
        </button>
        <figure class="lightbox-figure">
          <img :src="currentPhoto.src" :alt="currentPhoto.title" />
          <figcaption>
            <span>{{ currentPhoto.category }}</span>
            <strong>{{ currentPhoto.title }}</strong>
          </figcaption>
        </figure>
        <button class="lightbox-nav lightbox-nav--next" type="button" aria-label="下一张" title="下一张" @click="showNext">
          <ChevronRight :size="24" />
        </button>
      </div>
    </Teleport>
  </div>
</template>

<style lang="scss" scoped>
@use '../styles/variables' as *;
@use '../styles/mixins' as *;

.stats-section { padding-block: 64px; }

.honor-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-top: 1px solid $color-border;
  border-bottom: 1px solid $color-border;
}

.honor-stats article {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto auto;
  column-gap: 18px;
  padding: 30px 38px;
  border-right: 1px solid $color-border;
}

.honor-stats article:first-child { padding-left: 0; }
.honor-stats article:last-child { border-right: 0; }
.honor-stats svg { grid-row: 1 / 3; align-self: center; color: $color-accent; }
.honor-stats strong { color: $color-white; font-family: $font-mono; font-size: 24px; font-weight: 500; }
.honor-stats span { color: $color-text-soft; font-size: 11px; }

.award-table {
  border-top: 1px solid $color-border;
}

.award-head,
.award-row {
  display: grid;
  grid-template-columns: 100px 80px minmax(260px, 1.5fr) 100px minmax(110px, 0.6fr);
  gap: 18px;
  align-items: center;
}

.award-head {
  min-height: 48px;
  color: $color-text-soft;
  border-bottom: 1px solid $color-border;
  font-family: $font-mono;
  font-size: 10px;
}

.award-row {
  min-height: 78px;
  border-bottom: 1px solid $color-border;
  font-size: 12px;
  transition: background-color $transition, padding $transition;
}

.award-row:hover {
  padding-inline: 10px;
  background: rgba(255, 255, 255, 0.025);
}

.award-row strong { color: $color-white; font-size: 13px; font-weight: 500; }
.award-level { display: flex; align-items: center; gap: 7px; color: $color-accent; }
.award-year { font-family: $font-mono; }
.award-result { color: $color-white; }

.certificate-section { background: rgba($color-bg-deep, 0.42); border-top: 1px solid $color-border; }

.certificate-grid {
  display: grid;
  grid-template-columns: minmax(0, 0.85fr) minmax(360px, 1.15fr);
  gap: 80px;
  align-items: center;
}

.certificate-copy h2 { margin-bottom: 18px; }
.certificate-copy p { max-width: 520px; font-size: 14px; }

.certificate-gallery {
  min-width: 0;
}

.gallery-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  margin-bottom: 12px;
}

.gallery-heading .eyebrow {
  margin-bottom: 4px;
  font-size: 10px;
}

.gallery-heading strong {
  display: block;
  color: $color-white;
  font-size: 15px;
  font-weight: 500;
}

.gallery-open {
  @include focus-ring;
  display: inline-flex;
  align-items: center;
  gap: 7px;
  flex: 0 0 auto;
  padding: 7px 10px;
  color: $color-text;
  background: rgba(255, 255, 255, 0.035);
  border: 1px solid $color-border;
  border-radius: $radius-sm;
  cursor: pointer;
  font-size: 11px;
  transition: color $transition, background-color $transition, border-color $transition;
}

.gallery-open:hover {
  color: $color-white;
  background: $color-accent-soft;
  border-color: rgba($color-accent, 0.55);
}

.gallery-shell {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 88px;
  gap: 10px;
  height: clamp(320px, 32vw, 440px);
}

.gallery-main {
  grid-column: 1;
  position: relative;
  width: 100%;
  height: 100%;
  min-width: 0;
  overflow: hidden;
  min-height: 0;
  background: $color-surface;
  border: 1px solid $color-border-strong;
  border-radius: $radius-md;
}

.gallery-image-button {
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
  padding: 0;
  overflow: hidden;
  background: $color-surface;
  border: 0;
  cursor: zoom-in;
}

.gallery-image-button::after {
  position: absolute;
  inset: 0;
  content: '';
  background: linear-gradient(transparent 42%, rgba(7, 9, 13, 0.9));
  pointer-events: none;
}

.gallery-image-button img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: saturate(0.7) brightness(0.72);
  transition: transform 0.6s ease, filter 0.4s ease;
}

.gallery-image-button:hover img { transform: scale(1.025); filter: saturate(0.86) brightness(0.82); }

.gallery-expand {
  position: absolute;
  z-index: 1;
  top: 18px;
  right: 18px;
  display: grid;
  width: 34px;
  height: 34px;
  place-items: center;
  color: $color-white;
  background: rgba(10, 12, 17, 0.62);
  border: 1px solid rgba(255, 255, 255, 0.22);
  border-radius: $radius-sm;
}

.gallery-nav,
.lightbox-nav,
.lightbox-close {
  @include focus-ring;
  display: grid;
  place-items: center;
  color: $color-white;
  background: rgba(10, 12, 17, 0.68);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: $radius-sm;
  cursor: pointer;
  transition: background-color $transition, border-color $transition, transform $transition;
}

.gallery-nav {
  position: absolute;
  z-index: 2;
  top: 50%;
  width: 36px;
  height: 42px;
  transform: translateY(-50%);
}

.gallery-nav:hover,
.lightbox-nav:hover,
.lightbox-close:hover { background: rgba($color-accent, 0.85); border-color: $color-accent; }
.gallery-nav--previous { left: 16px; }
.gallery-nav--next { right: 16px; }

.gallery-rail {
  grid-column: 2;
  width: 88px;
  height: 100%;
  min-height: 0;
  box-sizing: border-box;
  padding: 6px;
  overflow: hidden;
  background: $color-bg-deep;
  border: 1px solid $color-border-strong;
  border-radius: $radius-md;
}

.gallery-rail__viewport {
  display: grid;
  gap: 8px;
  min-height: 0;
  height: 100%;
  max-height: 100%;
  overflow-y: auto;
  padding-right: 2px;
  scrollbar-color: rgba($color-accent, 0.5) transparent;
  scrollbar-width: thin;
}

.gallery-thumb {
  display: grid;
  gap: 6px;
  position: relative;
  width: 100%;
  min-width: 0;
  padding: 0;
  color: $color-text-soft;
  background: transparent;
  border: 1px solid $color-border;
  border-radius: $radius-sm;
  cursor: pointer;
  text-align: left;
  transition: color $transition, border-color $transition;
}

.gallery-thumb img {
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  filter: saturate(0.62) brightness(0.7);
  border-radius: 3px;
  transition: filter $transition;
}

.gallery-thumb span {
  position: absolute;
  right: 4px;
  bottom: 4px;
  display: grid;
  width: 18px;
  height: 18px;
  place-items: center;
  color: $color-white;
  background: rgba(7, 9, 13, 0.72);
  border-radius: 3px;
  font-family: $font-mono;
  font-size: 9px;
}

.gallery-thumb:hover,
.gallery-thumb.is-active { color: $color-white; border-color: $color-accent; }
.gallery-thumb:hover img,
.gallery-thumb.is-active img { filter: saturate(0.9) brightness(0.85); }

.gallery-meta {
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 9px;
  align-items: baseline;
  margin-top: 12px;
}

.gallery-meta span { color: $color-accent; font-family: $font-mono; font-size: 10px; }
.gallery-meta strong { color: $color-white; font-size: 14px; font-weight: 500; }
.gallery-meta small { color: $color-text-soft; font-family: $font-mono; font-size: 10px; }

.gallery-note { margin-top: 5px; color: $color-text-soft; font-size: 11px; }

.honor-lightbox {
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

.lightbox-close {
  position: absolute;
  top: 22px;
  right: 24px;
  width: 40px;
  height: 40px;
}

.lightbox-nav { width: 42px; height: 48px; flex: 0 0 auto; }

.lightbox-figure {
  display: grid;
  gap: 15px;
  max-width: min(100%, 1100px);
  max-height: 100%;
  margin: 0;
}

.lightbox-figure img {
  width: auto;
  max-width: 100%;
  max-height: calc(100vh - 150px);
  object-fit: contain;
  border: 1px solid $color-border-strong;
  border-radius: $radius-sm;
}

.lightbox-figure figcaption { display: grid; gap: 3px; }
.lightbox-figure figcaption strong { color: $color-white; font-size: 16px; font-weight: 500; }

@media (max-width: 900px) {
  .award-head { display: none; }
  .award-row { grid-template-columns: 90px 65px 1fr 90px; padding-block: 20px; }
  .award-row > span:last-child { grid-column: 3; color: $color-text-soft; }
  .certificate-grid { grid-template-columns: 1fr; gap: 44px; }
  .gallery-shell { height: clamp(300px, 56vw, 400px); }
}

@media (max-width: 720px) {
  .honor-stats { grid-template-columns: 1fr; }
  .honor-stats article,
  .honor-stats article:first-child { padding: 22px 0; border-right: 0; border-bottom: 1px solid $color-border; }
  .honor-stats article:last-child { border-bottom: 0; }
  .award-row { grid-template-columns: 1fr auto; gap: 8px 16px; }
  .award-row .award-level { grid-column: 1; }
  .award-row .award-year { grid-column: 2; grid-row: 1; }
  .award-row strong { grid-column: 1 / -1; }
  .award-row .award-result { grid-column: 1; }
  .award-row > span:last-child { grid-column: 2; }
  .award-row:hover { padding-inline: 0; }
  .certificate-grid { gap: 34px; }
  .gallery-heading { align-items: flex-start; }
  .gallery-shell { grid-template-columns: 1fr; height: auto; gap: 8px; }
  .gallery-main,
  .gallery-rail { grid-column: 1; }
  .gallery-main { height: auto; min-height: 240px; aspect-ratio: 16 / 9; }
  .gallery-nav { width: 32px; height: 38px; }
  .gallery-nav--previous { left: 10px; }
  .gallery-nav--next { right: 10px; }
  .gallery-rail { width: 100%; height: auto; padding: 4px; }
  .gallery-rail__viewport { display: flex; overflow-x: auto; overflow-y: hidden; gap: 8px; padding-bottom: 2px; }
  .gallery-thumb { width: 72px; flex: 0 0 72px; }
  .honor-lightbox { gap: 8px; padding: 64px 14px 30px; }
  .lightbox-nav { width: 34px; height: 42px; }
  .lightbox-close { top: 16px; right: 16px; }
}
</style>
