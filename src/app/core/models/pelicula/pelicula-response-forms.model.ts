export interface PeliculaResponseForm {
  title: string
  price: number
  description: string
  images: string[]
  category: Category
  id: number
}

export interface Category {
  id: number
  name: string
  typeImg: string
}

export interface PeliculaUpdateResponseForm {
  id: number
  title: string
  price: number
  description: string
  category: Category
  images: string[]
  categoryId: number
}