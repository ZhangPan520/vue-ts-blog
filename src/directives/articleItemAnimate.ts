// https://www.vueusejs.com/core/useIntersectionObserver
import { useIntersectionObserver } from '@vueuse/core';
import { Directive } from 'vue';
import { gsap } from 'gsap';

export const articleItemAnimate: Directive = {
  mounted(el, bindings) {
    const { stop } = useIntersectionObserver(el, ([{ isIntersecting }]) => {
      // 进入可视区域
      if (isIntersecting) {
        const duration = bindings.value.duration || 1.5;
        let x = bindings.value.index || 0;
        if (x % 2 === 0) {
          x = -200;
        } else {
          x = 200;
        }
        gsap.from(el, {
          opacity: 0,
          x: x,
          duration,
          onComplete: stop,
        });
      }
    });
  },
};
