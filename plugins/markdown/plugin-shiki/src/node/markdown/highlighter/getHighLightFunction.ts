import { transformerCompactLineOptions } from '@shikijs/transformers'
import type { BundledLanguage, BundledTheme, HighlighterGeneric } from 'shiki'
import {
  getTransformers,
  whitespaceTransformer,
} from '../../transformers/getTransformers.js'
import type { ShikiHighlightOptions } from '../../types.js'
import { attrsToLines } from '../../utils.js'
import type { MarkdownFilePathGetter } from './createMarkdownFilePathGetter.js'
import { getLanguage } from './getLanguage.js'
import { handleMustache } from './handleMustache.js'

type MarkdownItHighlight = (
  content: string,
  language: string,
  attrs: string,
) => string

export const getHighLightFunction = (
  highlighter: HighlighterGeneric<BundledLanguage, BundledTheme>,
  options: ShikiHighlightOptions,
  markdownFilePathGetter: MarkdownFilePathGetter,
): MarkdownItHighlight => {
  const transformers = getTransformers(options)
  const loadedLanguages = highlighter.getLoadedLanguages()

  return (content, language, attrs) =>
    handleMustache(content, (str) =>
      highlighter.codeToHtml(str, {
        lang: getLanguage(
          language,
          loadedLanguages,
          options,
          markdownFilePathGetter,
        ),
        meta: {
          /**
           * Custom `transformers` passed by users may require `attrs`.
           * e.g. [transformerNotationWordHighlight](https://shiki.style/packages/transformers#transformernotationwordhighlight)
           */
          __raw: attrs,
        },
        transformers: [
          ...transformers,
          ...((options.highlightLines ?? true)
            ? [transformerCompactLineOptions(attrsToLines(attrs))]
            : []),
          ...whitespaceTransformer(attrs, options.whitespace),
          ...(options.transformers ?? []),
        ],
        ...('themes' in options
          ? {
              themes: options.themes,
              defaultColor: false,
            }
          : { theme: options.theme ?? 'nord' }),
      }),
    )
}