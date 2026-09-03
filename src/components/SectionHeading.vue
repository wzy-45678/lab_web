<script setup>
defineProps({
  eyebrow: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, default: '' },
  align: { type: String, default: 'left' },
})
</script>

<template>
  <div class="section-heading" :class="`align-${align}`">
    <span class="eyebrow">{{ eyebrow }}</span>
    <h2>{{ title }}</h2>
    <p v-if="description">{{ description }}</p>
  </div>
</template>

<style lang="scss" scoped>
@use '../styles/variables' as *;

.section-heading {
  max-width: 720px;
  margin-bottom: 46px;
}

.section-heading h2 {
  margin-bottom: 16px;
}

.section-heading p {
  max-width: 620px;
  color: $color-text;
  font-size: 15px;
}

.align-center {
  margin-inline: auto;
  text-align: center;
}

.align-center :deep(.eyebrow) {
  justify-content: center;
}

@media (max-width: 720px) {
  .section-heading { margin-bottom: 34px; }
}
</style>
