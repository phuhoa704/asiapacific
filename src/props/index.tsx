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
    slug: string
    name: string
    description: string
    content: string
    image: string | null
    user_id: number,
    created_at: string
    updated_at: string
    banner: string | null,
    category_id: number,
    meta_title: string | null,
    meta_keyword: string | null,
    meta_desc: string | null,
    deleted_at: string | null,
    user_update: number
}

export interface Region {
    abstract_name: string
    address: string
    content: string
    created_at: string
    description: string
    icon: string | null,
    id: number,
    image: string | null,
    lat: string | null
    lng: string | null
    meta_desc: string | null,
    meta_keyword: string | null
    meta_title: string | null
    name: string
    phone: string
    slug: string
    updated_at: string
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
    name_key: string
    descr_key: string
    content_key: string,
    title_key: string
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

export interface Common {
    id: number
    name: string
    description: string
    slug: string
    content: string
    image?: string
}

export interface SocialMedia {
    id: number,
    key: string,
    value: string | null,
    created_at: string | null,
    updated_at: string | null,
    name: string
}

export interface Logo {
    id: number
    key: string
    value: string
    image_desc: string | null
    created_at: string | null
    updated_at: string | null
}

export interface AboutStep {
    id: number
    title: string
    description: string
    order: number,
    created_at: string
    updated_at: string
}

export interface Services {
    id: number
    slug: string
    name: string
    description: string
    content: string
    image: string
    user_id: number
    user_update: string | null
    meta_title: string | null
    meta_keyword: string | null
    meta_desc: string | null
    created_at: string | null
    updated_at: string | null
    deleted_at: string | null
    parent_id: number
}