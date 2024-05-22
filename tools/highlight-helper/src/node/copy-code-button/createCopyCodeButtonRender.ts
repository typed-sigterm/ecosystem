import {
  getLocalePaths,
  getRootLangPath,
  isPlainObject,
} from '@vuepress/helper'
import type { App, LocaleConfig } from 'vuepress'
import { ensureLeadingSlash, resolveLocalePath } from 'vuepress/shared'
import { copyCodeButtonLocales } from './copyCodeButtonLocales.js'
import type {
  CopyCodeButtonLocaleOptions,
  CopyCodeButtonOptions,
  CopyCodeButtonRender,
} from './types.js'

export const createCopyCodeButtonRender = (
  app: App,
  options?: boolean | CopyCodeButtonOptions,
): CopyCodeButtonRender | null => {
  if (options === false) {
    return null
  }

  const { className = 'vp-copy-code', locales: userLocales = {} } =
    isPlainObject(options) ? options : {}

  const root = getRootLangPath(app)
  const locales: LocaleConfig<CopyCodeButtonLocaleOptions> = {
    // fallback locale
    '/': userLocales['/'] || copyCodeButtonLocales[root],
  }

  getLocalePaths(app).forEach((path) => {
    locales[path] =
      userLocales[path] || copyCodeButtonLocales[path === '/' ? root : path]
  })

  return (filePathRelative) => {
    const relativePath = ensureLeadingSlash(filePathRelative ?? '')
    const localePath = resolveLocalePath(locales, relativePath)

    const { title, copied } = locales[localePath] ?? {}

    return `<button class="${className}" title="${title ?? 'Copy code'}" data-copied="${copied ?? 'Copied'}"></button>`
  }
}
