import { resolveEditLink } from '@vuepress/theme-helper/client'
import type { ComputedRef } from 'vue'
import { computed } from 'vue'
import type { NavItemWithLink } from '../../shared/index.js'
import { useData } from './data.js'

export const useEditLink = (): ComputedRef<NavItemWithLink | null> => {
  const { theme, page, frontmatter } = useData()

  return computed(() => {
    const showEditLink =
      frontmatter.value.editLink ?? theme.value.editLink ?? true
    if (!showEditLink) return null

    const {
      docsRepo,
      docsBranch = 'main',
      docsDir = '',
      editLinkText,
    } = theme.value

    if (!docsRepo) return null

    const editLink = resolveEditLink({
      docsRepo,
      docsBranch,
      docsDir,
      filePathRelative: page.value.filePathRelative,
      editLinkPattern:
        frontmatter.value.editLinkPattern ?? theme.value.editLinkPattern,
    })

    if (!editLink) return null

    return {
      text: editLinkText ?? 'Edit this page',
      link: editLink,
    }
  })
}
