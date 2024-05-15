export type NavItem = string | NavItemWithLink | NavItemWithChildren

export interface NavItemWithLink {
  text: string
  link: string

  prefix?: never

  items?: never

  /**
   * @deprecated Use `items` instead
   *
   * @deprecated 使用 `items` 替换
   *  */
  children?: never

  /**
   * `activeMatch` is expected to be a regex string. We can't use actual
   * RegExp object here because it isn't serializable
   *
   * `activeMatch` 应为正则表达式字符串，但必须将其定义为字符串。
   * 我们不能在这里使用实际的 RegExp 对象，因为它在构建期间不可序列化。
   */
  activeMatch?: string

  rel?: string
  target?: string
  noIcon?: boolean
}

export interface NavItemChildren {
  /**
   * The text of the dropdown menu
   */
  text?: string

  /**
   * Link prefix of current group
   *
   * 当前分组的页面前缀
   */
  prefix?: string

  /**
   * The items in the dropdown menu
   *
   * 导航栏下拉菜单
   */
  items: (string | NavItemWithLink)[]

  /**
   * @deprecated Use `items` instead
   *
   * @deprecated 使用 `items` 替换
   *  */
  children?: (string | NavItemWithLink)[]
}

export interface NavItemWithChildren {
  text?: string
  /**
   * Link prefix of current group
   *
   * 当前分组的页面前缀
   */
  prefix?: string

  /**
   * The items in the dropdown menu
   *
   * 导航栏下拉菜单
   */
  items: (string | NavItemChildren | NavItemWithLink)[]

  /**
   * @deprecated Use `items` instead
   *
   * @deprecated 使用 `items` 替换
   *  */
  children?: (string | NavItemChildren | NavItemWithLink)[]

  /**
   * `activeMatch` is expected to be a regex string. We can't use actual
   * RegExp object here because it isn't serializable
   *
   * `activeMatch` 应为正则表达式字符串，但必须将其定义为字符串。
   * 我们不能在这里使用实际的 RegExp 对象，因为它在构建期间不可序列化。
   */
  activeMatch?: string
}
