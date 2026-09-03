<script setup>
import { Award, Medal, ShieldCheck, Trophy } from 'lucide-vue-next'
import PageHero from '../components/PageHero.vue'
import SectionHeading from '../components/SectionHeading.vue'
import { honors } from '../data/siteData'

const stats = [
  { value: '08', label: '国家级奖项', icon: Trophy },
  { value: '21', label: '省级奖项', icon: Medal },
  { value: '36', label: '项目完成结题', icon: ShieldCheck },
]
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
            <span>级别</span><span>年份</span><span>赛事 / 项目</span><span>结果</span><span>团队</span>
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
        <div v-reveal="{ delay: 100 }" class="certificate-frame">
          <Trophy :size="42" :stroke-width="1.25" />
          <span>CERTIFICATE ARCHIVE</span>
          <strong>证书与成果实拍区域</strong>
          <p>请替换为实验室真实奖状照片</p>
        </div>
      </div>
    </section>
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

.certificate-frame {
  display: grid;
  place-items: center;
  min-height: 350px;
  padding: 44px;
  color: $color-accent;
  background:
    linear-gradient($color-border 1px, transparent 1px),
    linear-gradient(90deg, $color-border 1px, transparent 1px),
    $color-surface;
  background-size: 36px 36px;
  border: 1px solid $color-border-strong;
  border-radius: $radius-md;
  text-align: center;
}

.certificate-frame span { margin-top: 18px; color: $color-accent; font-family: $font-mono; font-size: 10px; }
.certificate-frame strong { color: $color-white; font-size: 19px; font-weight: 500; }
.certificate-frame p { color: $color-text-soft; font-size: 12px; }

@media (max-width: 900px) {
  .award-head { display: none; }
  .award-row { grid-template-columns: 90px 65px 1fr 90px; padding-block: 20px; }
  .award-row > span:last-child { grid-column: 3; color: $color-text-soft; }
  .certificate-grid { grid-template-columns: 1fr; gap: 44px; }
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
  .certificate-frame { min-height: 300px; padding: 28px; }
}
</style>
