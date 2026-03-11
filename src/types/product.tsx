
export interface ImageType {
    asset_id: string
    public_id: string
    url: string
    secure_url: string
}


export interface ProductForm {
    id: number
    title: string
    description: string
    count: number
    price: number
    quantity: number
    categoryId: string
    images: ImageType[],
    updatedAt: string
}