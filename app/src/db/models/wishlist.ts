import { ObjectId } from "mongodb"
import { getCollection } from "../config/mongoDb"


export type Wishlist = {
    _id: ObjectId
    userId: ObjectId
    productId: ObjectId
    createdAt: Date
    updatedAt: Date
}


class wishlistModel {

    static collection() {
        return getCollection('wishlists')
    }
    static async create(payload: {userId: string, productId: string}) {
        // console.log(payload.userId);
        

        const newWishlist = {
            userId: new ObjectId(payload.userId),
            productId: new ObjectId(payload.productId),
            createdAt: new Date(),
            updatedAt: new Date()
        }
        const wishlist = await this.collection().insertOne(newWishlist)
        return {
            _id: wishlist.insertedId,
            ...newWishlist,
        } as Wishlist
    }  
    
    static async delete(productId : string){
        return await this.collection().deleteOne({productId: new ObjectId(productId)})
    }

 
}

export default wishlistModel