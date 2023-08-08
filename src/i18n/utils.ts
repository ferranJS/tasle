import { ui, regions, defaultLang, defaultRegion } from "./languages"

export function getLangFromUrl(url: URL) {
  const lang = url.pathname.split("/")[2]
  if (lang in ui) return lang as keyof typeof ui
  return defaultLang
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key] || key
  }
}

export function getRegionFromUrl(url: URL) {
  const region = url.pathname.split("/")[3]
  if (region in regions) return region as keyof typeof regions
  return defaultRegion
}
