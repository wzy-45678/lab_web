<script setup>
defineProps({
  index: { type: String, required: true },
  eyebrow: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, default: '/images/lab-circuit.jpg' },
})
</script>

<template>
  <section class="page-hero" :style="{ '--hero-image': `url(${image})` }">
    <div class="container page-hero-inner">
      <div class="page-index" aria-hidden="true">{{ index }}</div>
      <div class="page-hero-copy">
        <span class="eyebrow">{{ eyebrow }}</span>
        <h1>{{ title }}</h1>
        <p>{{ description }}</p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '../styles/variables' as *;

.page-hero {
  position: relative;
  display: flex;
  align-items: flex-end;
  min-height: 470px;
  padding: 150px 0 72px;
  overflow: hidden;
  background: $color-bg-deep var(--hero-image) center / cover no-repeat;
  border-bottom: 1px solid $color-border;
}

.page-hero::before {
  position: absolute;
  inset: 0;
  content: '';
  background: rgba(12, 14, 19, 0.76);
}

.page-hero::after {
  position: absolute;
  inset: 0;
  content: '';
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.025) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.025) 1px, transparent 1px);
  background-size: 52px 52px;
}

.page-hero-inner {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 120px minmax(0, 760px);
  gap: 34px;
  align-items: end;
}

.page-index {
  color: rgba(255, 255, 255, 0.12);
  font-family: $font-mono;
  font-size: 58px;
  line-height: 1;
}

.page-hero-copy h1 {
  margin-bottom: 18px;
  font-size: 48px;
}

.page-hero-copy p {
  max-width: 680px;
  color: #b8bec8;
  font-size: 16px;
}

@media (max-width: 720px) {
  .page-hero { min-height: 420px; padding: 126px 0 54px; }
  .page-hero-inner { grid-template-columns: 1fr; gap: 18px; }
  .page-index { font-size: 34px; }
  .page-hero-copy h1 { font-size: 36px; }
  .page-hero-copy p { font-size: 14px; }
}
</style>
