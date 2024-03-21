import { Language } from "../props";

export const translate = (crtlang: string, obj: any, langs: Language[]) => {
    const defaultKey: any = langs.find(l => l.default === 1)?.key;
    const currentKey: any = langs.find(l => l.lang === crtlang)?.key;
    return obj[currentKey] ? obj[currentKey] : obj[defaultKey]
}