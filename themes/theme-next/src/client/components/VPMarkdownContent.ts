import { computed, defineAsyncComponent, defineComponent, h } from 'vue'
import { resolveRoute, usePageComponent } from 'vuepress/client'
import { runCallbacks } from '../composables/index.js'

/**
 * Markdown rendered content
 */
export const Content = defineComponent({
  name: 'VPMarkdownContent',

  props: {
    path: {
      type: String,
      required: false,
      default: '',
    },
  },

  setup(props) {
    const pageComponent = usePageComponent()
    const ContentComponent = computed(() => {
      if (!props.path) return pageComponent.value
      const route = resolveRoute(props.path)
      return defineAsyncComponent(() => route.loader().then(({ comp }) => comp))
    })

    return () =>
      h(ContentComponent.value, {
        onVnodeMounted: () => {
          runCallbacks({ mounted: true })
        },
        onVnodeUpdated: () => {
          runCallbacks({ updated: true })
        },
        onVnodeBeforeUnmount: () => {
          runCallbacks({ beforeUnmount: true })
        },
      })
  },
})
