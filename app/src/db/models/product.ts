import { ObjectId } from "mongodb"
import { getCollection } from "../config/mongoDb"

type Product = {
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

class productsModel {
    static collection(){
        return getCollection("products")
    }

    static async findAll(search : string) {
        const querySearch = new RegExp(search, 'i')

        if (search) {
        return await this.collection().find({ slug: { $regex: querySearch } }).toArray() as Product[] | null  
        }
        return await this.collection().find().toArray() as Product[] | null
    }

    static async findBySlug(slug: string){
        return (await this.collection().findOne({slug})) as Product | null
    }
}

export default productsModel