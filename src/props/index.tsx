export interface Step {
    id: number
    title: string
    descr: string
}

export interface Office {
    id: number
    icon: string
    location: string
    address: string
}

export interface News {
    id: number
    image: string
    date: string
    title: string
    descr: string
}

export interface Region {
    id: number
    image: string
    location: string
    descr: string
}

export interface Home {
    id: number
    key: string
    value: string
    image_desc: string
    type: 1 | 2 //1 text, 2 images
    created_at: string
    updated_at: string
}

export interface Language {
    lang: string
    key: string
    default: number
    image: string
    name: string
}

export interface Service {
    image: string
    icon: any
    title: string
    href: string
}

export interface TaxService {
    id: string
    title: string
    desc: string
}