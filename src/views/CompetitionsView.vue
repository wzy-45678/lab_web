<script setup>
import { ref } from 'vue'
import { CalendarDays, CheckCircle2, ChevronDown, Clock3, MapPin, Users } from 'lucide-vue-next'
import PageHero from '../components/PageHero.vue'
import SectionHeading from '../components/SectionHeading.vue'
import { competitions } from '../data/siteData'

const trainingFacts = [
  { icon: CalendarDays, label: '比赛周期', value: '每年 3—8 月' },
  { icon: Clock3, label: '集中时段', value: '课后与暑期' },
  { icon: Users, label: '协作形式', value: '3—5 人小组' },
]

const openCompetition = ref('')

function toggleCompetition(index) {
  openCompetition.value = openCompetition.value === index ? '' : index
}

</script>

<template>
  <div>
    <PageHero
      index="02"
      eyebrow="COMPETITIONS & EVENTS"
      title="竞赛活动"
      description="竞赛是检验工程能力的现场。我们重视备赛过程中的方案判断、协作节奏和每次复盘。"
      image="/images/lab-workbench.jpg"
    />

    <section class="section">
      <div class="container">
        <SectionHeading
          v-reveal
          eyebrow="TIMELINE"
          title="持续训练，按阶段积累"
          description="以下月份按各项赛事常见的初赛启动时间排序，具体安排以当届官方通知为准。"
        />

        <div class="timeline">
          <article
            v-for="(item, index) in competitions"
            :key="item.title"
            v-reveal="{ delay: index * 70 }"
            class="timeline-item"
          >
            <time>{{ item.month }}</time>
            <span class="timeline-dot" />
            <div class="timeline-copy">
              <h2>
                <button
                  class="timeline-title-button"
                  type="button"
                  :aria-expanded="openCompetition === index"
                  :aria-controls="`competition-detail-${index}`"
                  @click="toggleCompetition(index)"
                >
                  <span>{{ item.title }}</span>
                  <ChevronDown :size="20" :stroke-width="1.5" />
                </button>
              </h2>

              <div
                :id="`competition-detail-${index}`"
                class="timeline-panel"
                :class="{ 'is-open': openCompetition === index }"
                :aria-hidden="openCompetition !== index"
              >
                <div class="timeline-panel-inner">
                  <div class="timeline-details">
                    <div>
                      <span>赛制与特点</span>
                      <p>{{ item.format }}</p>
                    </div>
                    <div>
                      <span>参赛价值</span>
                      <p>{{ item.value }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="section section--bordered training-section">
      <div class="container training-grid">
        <figure v-reveal class="training-photo">
          <img src="/images/lab-workbench.jpg" alt="电子设备电路调试过程" />
          <figcaption>
            <span>FIELD NOTES / 训练现场</span>
            <strong>问题在台面上被发现，也在台面上被解决</strong>
          </figcaption>
        </figure>

        <div v-reveal="{ delay: 100 }" class="training-copy">
          <span class="eyebrow">OFFLINE TRAINING</span>
          <h2>线下集训不是简单延长时间</h2>
          <p>
            集训强调明确的版本目标、每日联调记录和阶段评审。每个成员不仅要完成自己的模块，也要理解系统如何协同运行。
          </p>

          <div class="training-facts">
            <div v-for="fact in trainingFacts" :key="fact.label">
              <component :is="fact.icon" :size="20" :stroke-width="1.5" />
              <span>{{ fact.label }}</span>
              <strong>{{ fact.value }}</strong>
            </div>
          </div>

          <ul class="training-checks">
            <li><CheckCircle2 :size="17" /> 每日记录问题、假设和验证结果</li>
            <li><CheckCircle2 :size="17" /> 每周进行方案评审与进度复盘</li>
            <li><CheckCircle2 :size="17" /> 赛后完成代码、图纸和文档归档</li>
          </ul>
        </div>
      </div>
    </section>


  </div>
</template>

<style lang="scss" scoped>
@use '../styles/variables' as *;

.timeline {
  position: relative;
  max-width: 930px;
}

.timeline::before {
  position: absolute;
  top: 12px;
  bottom: 12px;
  left: 118px;
  width: 1px;
  content: '';
  background: $color-border-strong;
}

.timeline-item {
  position: relative;
  display: grid;
  grid-template-columns: 90px 24px minmax(0, 1fr);
  gap: 16px;
  align-items: start;
  padding-bottom: 58px;
}

.timeline-item:last-child { padding-bottom: 0; }

.timeline-item time {
  padding-top: 5px;
  color: $color-white;
  font-family: $font-mono;
  font-size: 15px;
}

.timeline-dot {
  position: relative;
  z-index: 1;
  display: block;
  width: 9px;
  height: 9px;
  margin: 9px auto 0;
  background: $color-accent;
  border: 3px solid $color-bg;
  border-radius: 50%;
  box-shadow: 0 0 0 1px rgba($color-accent, 0.44);
}

.timeline-copy {
  padding: 0 0 10px 24px;
}

.timeline-copy h2 { margin: 0 0 10px; font-size: 23px; }

.timeline-title-button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  width: 100%;
  padding: 0;
  color: $color-white;
  background: transparent;
  border: 0;
  cursor: pointer;
  font-size: inherit;
  font-weight: 600;
  text-align: left;
}

.timeline-title-button:focus-visible {
  outline: 2px solid $color-accent;
  outline-offset: 5px;
}

.timeline-title-button svg {
  flex: none;
  color: $color-text-soft;
  transition: color $transition, transform $transition;
}

.timeline-title-button[aria-expanded='true'] svg {
  color: $color-accent;
  transform: rotate(180deg);
}

.timeline-panel {
  display: grid;
  grid-template-rows: 0fr;
  opacity: 0;
  transition: grid-template-rows $transition, opacity $transition;
}

.timeline-panel.is-open {
  grid-template-rows: 1fr;
  opacity: 1;
}

.timeline-panel-inner {
  min-height: 0;
  overflow: hidden;
}

.timeline-details {
  display: grid;
  gap: 22px;
  padding: 12px 0 4px;
}

.timeline-details > div {
  padding-top: 17px;
  border-top: 1px solid $color-border;
}

.timeline-details span {
  display: block;
  margin-bottom: 8px;
  color: $color-accent;
  font-family: $font-mono;
  font-size: 10px;
}

.timeline-details p {
  color: $color-text;
  font-size: 13px;
  line-height: 1.85;
}

.training-section { background: rgba($color-bg-deep, 0.42); }

.training-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.08fr) minmax(360px, 0.92fr);
  gap: 64px;
  align-items: center;
}

.training-photo {
  position: relative;
  min-height: 570px;
  margin: 0;
  overflow: hidden;
  border: 1px solid $color-border;
  border-radius: $radius-md;
}

.training-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: saturate(0.65) brightness(0.72);
}

.training-photo::after {
  position: absolute;
  inset: 0;
  content: '';
  background: linear-gradient(transparent 58%, rgba(8, 10, 14, 0.9));
}

.training-photo figcaption {
  position: absolute;
  z-index: 1;
  right: 28px;
  bottom: 26px;
  left: 28px;
  display: grid;
  gap: 7px;
}

.training-photo figcaption span { color: $color-accent; font-family: $font-mono; font-size: 10px; }
.training-photo figcaption strong { color: $color-white; font-size: 16px; font-weight: 500; }

.training-copy > h2 { margin-bottom: 18px; }
.training-copy > p { font-size: 14px; }

.training-facts {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 34px 0;
  border-top: 1px solid $color-border;
  border-bottom: 1px solid $color-border;
}

.training-facts div {
  display: grid;
  gap: 8px;
  padding: 22px 16px;
  border-right: 1px solid $color-border;
}

.training-facts div:first-child { padding-left: 0; }
.training-facts div:last-child { border-right: 0; }
.training-facts svg { color: $color-accent; }
.training-facts span { color: $color-text-soft; font-size: 10px; }
.training-facts strong { color: $color-white; font-size: 12px; font-weight: 500; }

.training-checks {
  display: grid;
  gap: 11px;
  margin: 0;
  padding: 0;
  list-style: none;
  font-size: 13px;
}

.training-checks li { display: flex; align-items: center; gap: 10px; }
.training-checks svg { flex: none; color: $color-accent; }

.event-note-section { padding-top: 72px; }

.event-note {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 24px;
  align-items: start;
  padding-block: 34px;
  color: $color-accent;
  border-top: 1px solid $color-border;
  border-bottom: 1px solid $color-border;
}

.event-note span { color: $color-accent; font-family: $font-mono; font-size: 10px; }
.event-note h2 { margin: 9px 0; font-size: 22px; }
.event-note p { color: $color-text; font-size: 13px; }

@media (max-width: 900px) {
  .training-grid { grid-template-columns: 1fr; }
  .training-photo { min-height: 460px; }
}

@media (max-width: 720px) {
  .timeline::before { left: 68px; }
  .timeline-item { grid-template-columns: 48px 16px minmax(0, 1fr); gap: 12px; padding-bottom: 44px; }
  .timeline-item time { font-size: 12px; }
  .timeline-copy { padding-left: 10px; }
  .timeline-copy h2 { font-size: 19px; }
  .timeline-title-button { gap: 12px; }
  .timeline-details { gap: 18px; }
  .timeline-details p { font-size: 12px; }
  .training-grid { gap: 40px; }
  .training-photo { min-height: 360px; }
  .training-facts { grid-template-columns: 1fr; }
  .training-facts div,
  .training-facts div:first-child { grid-template-columns: auto 1fr auto; align-items: center; padding: 16px 0; border-right: 0; border-bottom: 1px solid $color-border; }
  .training-facts div:last-child { border-bottom: 0; }
}
</style>
