<script setup>
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { Cpu, Menu, X } from 'lucide-vue-next'
import { navItems } from '../data/siteData'

const route = useRoute()
const isScrolled = ref(false)
const menuOpen = ref(false)

function updateHeader() {
  isScrolled.value = window.scrollY > 24
}

function closeMenu() {
  menuOpen.value = false
}

function handleEscape(event) {
  if (event.key === 'Escape') closeMenu()
}

watch(menuOpen, (open) => {
  document.body.classList.toggle('menu-open', open)
})

watch(() => route.fullPath, closeMenu)

onMounted(() => {
  updateHeader()
  window.addEventListener('scroll', updateHeader, { passive: true })
  window.addEventListener('keydown', handleEscape)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateHeader)
  window.removeEventListener('keydown', handleEscape)
  document.body.classList.remove('menu-open')
})
</script>

<template>
  <header class="site-header" :class="{ 'is-scrolled': isScrolled, 'menu-active': menuOpen }">
    <div class="header-inner">
      <RouterLink class="brand" to="/" aria-label="创新创业实验室首页">
        <span class="brand-mark"><Cpu :size="19" :stroke-width="1.7" /></span>
        <span class="brand-copy">
          <strong>创新创业实验室</strong>
          <small>创新 · 实践 · 深耕</small>
        </span>
      </RouterLink>

      <nav class="desktop-nav" aria-label="主导航">
        <RouterLink
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          :class="{ active: route.path === item.to }"
        >
          {{ item.label }}
        </RouterLink>
      </nav>

      <button
        class="menu-toggle"
        type="button"
        :aria-expanded="menuOpen"
        aria-controls="mobile-navigation"
        :aria-label="menuOpen ? '关闭导航菜单' : '打开导航菜单'"
        @click="menuOpen = !menuOpen"
      >
        <X v-if="menuOpen" :size="22" />
        <Menu v-else :size="22" />
      </button>
    </div>

    <Teleport to="body">
      <Transition name="drawer">
        <div v-if="menuOpen" class="mobile-layer" @click.self="closeMenu">
          <nav id="mobile-navigation" class="mobile-nav" aria-label="移动端导航">
            <span class="mobile-nav-label">NAVIGATION / 目录</span>
            <RouterLink
              v-for="(item, index) in navItems"
              :key="item.to"
              :to="item.to"
              :class="{ active: route.path === item.to }"
            >
              <span>0{{ index + 1 }}</span>
              {{ item.label }}
            </RouterLink>
          </nav>
        </div>
      </Transition>
    </Teleport>
  </header>
</template>

<style lang="scss" scoped>
@use '../styles/variables' as *;
@use '../styles/mixins' as *;

.site-header {
  position: fixed;
  z-index: 100;
  top: 0;
  right: 0;
  left: 0;
  height: $header-height;
  border-bottom: 1px solid transparent;
  transition:
    background-color $transition,
    border-color $transition,
    box-shadow $transition;
}

.site-header.is-scrolled,
.site-header.menu-active {
  background: rgba($color-bg-deep, 0.92);
  border-bottom-color: $color-border;
  box-shadow: 0 10px 32px rgba(0, 0, 0, 0.18);
  backdrop-filter: blur(14px);
}

.header-inner {
  @include container;
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  height: 100%;
  gap: 22px;
}

.brand {
  @include focus-ring;
  display: inline-flex;
  flex: none;
  align-items: center;
  gap: 11px;
}

.brand-mark {
  display: grid;
  place-items: center;
  width: 38px;
  height: 38px;
  color: $color-accent;
  background: $color-accent-soft;
  border: 1px solid rgba($color-accent, 0.36);
  border-radius: 50%;
}

.brand-copy {
  display: flex;
  flex-direction: column;
  min-width: 144px;
  line-height: 1.25;
}

.brand-copy strong {
  color: $color-white;
  font-size: 14px;
  font-weight: 600;
}

.brand-copy small {
  margin-top: 4px;
  color: $color-text-soft;
  font-size: 10px;
}

.desktop-nav {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
}

.desktop-nav a {
  @include focus-ring;
  padding: 10px 9px;
  color: $color-text;
  font-size: 12px;
  white-space: nowrap;
  transition:
    color $transition,
    transform $transition;
}

.desktop-nav a:hover,
.desktop-nav a.active {
  color: $color-white;
  transform: scale(1.03);
}

.menu-toggle {
  @include focus-ring;
  display: none;
  place-items: center;
  width: 42px;
  height: 42px;
  padding: 0;
  color: $color-white;
  background: #20242e;
  border: 1px solid $color-border;
  border-radius: $radius-sm;
  cursor: pointer;
}

.mobile-layer {
  position: fixed;
  z-index: 90;
  top: $header-height;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: flex-end;
  background: rgba(5, 7, 10, 0.62);
}

.mobile-nav {
  display: flex;
  flex-direction: column;
  width: min(88vw, 360px);
  height: 100%;
  padding: 34px 24px;
  background: $color-bg-deep;
  border-left: 1px solid $color-border;
}

.mobile-nav-label {
  margin-bottom: 20px;
  color: $color-text-soft;
  font-family: $font-mono;
  font-size: 11px;
}

.mobile-nav a {
  display: flex;
  align-items: center;
  gap: 16px;
  min-height: 54px;
  color: $color-text;
  border-bottom: 1px solid $color-border;
  font-size: 16px;
  transition:
    color $transition,
    padding-left $transition;
}

.mobile-nav a span {
  color: $color-text-soft;
  font-family: $font-mono;
  font-size: 10px;
}

.mobile-nav a:hover,
.mobile-nav a.active {
  padding-left: 5px;
  color: $color-white;
}

.drawer-enter-active,
.drawer-leave-active {
  transition: opacity $transition;
}

.drawer-enter-active .mobile-nav,
.drawer-leave-active .mobile-nav {
  transition: transform $transition;
}

.drawer-enter-from,
.drawer-leave-to {
  opacity: 0;
}

.drawer-enter-from .mobile-nav,
.drawer-leave-to .mobile-nav {
  transform: translateX(100%);
}

@media (max-width: 1120px) {
  .desktop-nav {
    display: none;
  }

  .menu-toggle {
    display: grid;
    margin-left: auto;
  }
}

@media (max-width: $breakpoint-mobile) {
  .site-header { height: 70px; }
  .mobile-layer { top: 70px; }
  .brand-mark { width: 36px; height: 36px; }
  .brand-copy strong { font-size: 13px; }
}
</style>
