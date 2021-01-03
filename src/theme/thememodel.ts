/**
 * Theme entity reference:
 * https://docs.microsoft.com/en-us/dynamics365/customerengagement/on-premises/developer/entities/theme
 */
export interface ThemeModel {
  accentcolor: string
  backgroundcolor: string
  controlborder: string
  controlshade: string
  defaultcustomentitycolor: string
  defaultentitycolor: string
  globallinkcolor: string
  headercolor: string
  hoverlinkeffect: string
  isdefaulttheme: boolean
  maincolor: string
  name: string
  navbarbackgroundcolor: string
  navbarshelfcolor: string
  pageheaderbackgroundcolor: string
  panelheaderbackgroundcolor: string
  processcontrolcolor: string
  selectedlinkeffect: string
  themeid: string
  type: ThemeType
}

export type ThemeType = {
  System: true
  Custom: false
}