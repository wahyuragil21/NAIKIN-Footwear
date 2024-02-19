import { ObjectId } from "mongodb";

export interface User {
    _id: ObjectId
    name: string
    username: string
    email: string
    password: string
}

export interface Product {
    _id: ObjectId
    name: string
    slug: string
    description: string
    excerpt: string
    price: Number
    tags: string[]
    thumbnail: string
    images: string[]
    createdAt: Date
    updatedAt: Date
}

export interface Wishlist {
    _id: ObjectId
    userId: ObjectId
    productId: ObjectId
    cretatedAt: Date
    updatedAt: Date
}


export interface MyResponse<T> {
    error? : string
    messsage? : string
    data? : T | null
}