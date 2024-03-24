import { Language } from "../props";

export const translate = (crtlang: string, obj: any, langs: Language[]) => {
    const defaultKey: any = langs.find(l => l.default === 1)?.key;
    const currentKey: any = langs.find(l => l.lang === crtlang)?.key;
    return obj[currentKey] ? obj[currentKey] : obj[defaultKey]
}

export const translateName = (crtlang: string, obj: any, langs: Language[]) => {
    const defaultKey: any = langs.find(l => l.default === 1)?.name_key;
    const currentKey: any = langs.find(l => l.lang === crtlang)?.name_key;
    return obj[currentKey] ? obj[currentKey] : obj[defaultKey]
}

export const translateDescr = (crtlang: string, obj: any, langs: Language[]) => {
    const defaultKey: any = langs.find(l => l.default === 1)?.descr_key;
    const currentKey: any = langs.find(l => l.lang === crtlang)?.descr_key;
    return obj[currentKey] ? obj[currentKey] : obj[defaultKey]
}

export const translateContent = (crtlang: string, obj: any, langs: Language[]) => {
    const defaultKey: any = langs.find(l => l.default === 1)?.content_key;
    const currentKey: any = langs.find(l => l.lang === crtlang)?.content_key;
    return obj[currentKey] ? obj[currentKey] : obj[defaultKey]
}

export const translateTitle = (crtlang: string, obj: any, langs: Language[]) => {
    const defaultKey: any = langs.find(l => l.default === 1)?.title_key;
    const currentKey: any = langs.find(l => l.lang === crtlang)?.title_key;
    return obj[currentKey] ? obj[currentKey] : obj[defaultKey]
}