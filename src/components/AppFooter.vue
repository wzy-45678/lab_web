<script setup>
import { RouterLink } from 'vue-router'
import { Cpu, MapPin, Mail, ArrowUp } from 'lucide-vue-next'

function toTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <footer class="site-footer">
    <div class="container footer-grid">
      <div class="footer-brand">
        <span class="footer-mark"><Cpu :size="20" /></span>
        <div>
          <strong>创新创业实验室</strong>
          <p>以项目验证知识，用长期实践建立工程能力。</p>
        </div>
      </div>

      <div class="footer-contact">
        <span><MapPin :size="15" /> 实验楼 · 房间信息待补充</span>
        <span><Mail :size="15" /> lab@example.edu.cn</span>
      </div>

      <div class="footer-actions">
        <RouterLink to="/join">加入我们</RouterLink>
        <button type="button" aria-label="返回页面顶部" title="返回顶部" @click="toTop">
          <ArrowUp :size="18" />
        </button>
      </div>
    </div>

    <div class="container footer-bottom">
      <span>© 2026 Innovation & Entrepreneurship Laboratory</span>
      <span>Vue 3 · Vite · Cloudflare Pages</span>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@use '../styles/variables' as *;
@use '../styles/mixins' as *;

.site-footer {
  padding: 62px 0 24px;
  background: $color-bg-deep;
  border-top: 1px solid $color-border;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr auto;
  gap: 48px;
  align-items: start;
}

.footer-brand {
  display: flex;
  gap: 14px;
}

.footer-mark {
  display: grid;
  flex: none;
  place-items: center;
  width: 42px;
  height: 42px;
  color: $color-accent;
  background: $color-accent-soft;
  border: 1px solid rgba($color-accent, 0.32);
  border-radius: 50%;
}

.footer-brand strong {
  color: $color-white;
  font-size: 15px;
}

.footer-brand p {
  max-width: 430px;
  margin-top: 8px;
  color: $color-text-soft;
  font-size: 13px;
}

.footer-contact {
  display: grid;
  gap: 12px;
  font-size: 12px;
}

.footer-contact span {
  display: flex;
  align-items: center;
  gap: 8px;
}

.footer-actions {
  display: flex;
  align-items: center;
  gap: 14px;
}

.footer-actions a {
  color: $color-white;
  font-size: 13px;
}

.footer-actions button {
  @include focus-ring;
  display: grid;
  place-items: center;
  width: 38px;
  height: 38px;
  padding: 0;
  color: $color-white;
  background: $color-surface;
  border: 1px solid $color-border;
  border-radius: $radius-sm;
  cursor: pointer;
  transition: border-color $transition, transform $transition;
}

.footer-actions button:hover {
  border-color: $color-border-strong;
  transform: translateY(-2px);
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  margin-top: 48px;
  padding-top: 20px;
  color: #656d79;
  border-top: 1px solid $color-border;
  font-family: $font-mono;
  font-size: 10px;
}

@media (max-width: 860px) {
  .footer-grid { grid-template-columns: 1fr; gap: 30px; }
}

@media (max-width: $breakpoint-mobile) {
  .site-footer { padding-top: 48px; }
  .footer-bottom { flex-direction: column; gap: 8px; }
}
</style>
