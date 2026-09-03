const observers = new WeakMap()

export default {
  mounted(element, binding) {
    element.classList.add('reveal')

    if (binding.value?.delay) {
      element.style.setProperty('--reveal-delay', `${binding.value.delay}ms`)
    }

    if (!('IntersectionObserver' in window)) {
      element.classList.add('is-visible')
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        element.classList.add('is-visible')
        observer.disconnect()
      },
      { threshold: 0.12, rootMargin: '0px 0px -48px' },
    )

    observers.set(element, observer)
    observer.observe(element)
  },
  unmounted(element) {
    observers.get(element)?.disconnect()
    observers.delete(element)
  },
}
