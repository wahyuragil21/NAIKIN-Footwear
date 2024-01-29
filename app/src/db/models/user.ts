import { ObjectId } from "mongodb"
import { getCollection } from "../config/mongoDb"
import { hashPassword } from "../helpers/bcrypt"
import { z } from "zod"
import { Product } from "@/app/types"
import { Wishlist } from "./wishlist"
export interface User {
    _id: ObjectId
    name: string
    username: string
    email: string
    password: string
}


export interface UserWishlist {
    _id: ObjectId
    name: string
    username: string
    email: string
    password: string
    dataWishlists: Wishlist[]
    productWishlists: Product[]
}

type NewUserInput = Omit<User, "_id">

const userSchema = z.object({
    username : z.string().nonempty(),
    email : z.string().nonempty().email(),
    password : z.string().nonempty().min(5)
})
class UserModel{
    static collection(){
        return getCollection("users")
    }

    static async findAll(){
        return (await this.collection().find({}, {projection: {password: 0}}).toArray()) as User[]
    }

    static async create(user: NewUserInput){
        const validation = userSchema.safeParse(user)

        if(!validation.success){
            throw validation.error
        }

        const result = await this.collection().insertOne({
            ...user,
            password: hashPassword(user.password)
        })

        return {
            _id: result.insertedId,
            ...user
        } as User
    }

    static async findByUsername(username: string){
        return (await this.collection().findOne({username})) as User
    }                                      

    static async findByEmail(email: string){
        return (await this.collection().findOne({email})) as User
    }

    static async findWishlist(payload: {userId: string}) {
        // console.log(payload.userId);
        
        try {
    
            return await this.collection().aggregate(
                [
                    {
                      '$match': {
                        '_id': new ObjectId(payload.userId)
                      }
                    },
                     {
                      '$lookup': {
                        'from': 'wishlists', 
                        'localField': '_id', 
                        'foreignField': 'userId', 
                        'as': 'dataWishlists'
                      }
                    }, 
                    {
                      '$lookup': {
                        'from': 'products', 
                        'localField': 'dataWishlists.productId', 
                        'foreignField': '_id', 
                        'as': 'productWishlists'
                      }
                    }
                  ]

                // [
                //     {
                //       '$match': {
                //         '_id': new ObjectId(payload.userId)
                //       }
                //     }, {
                //       '$lookup': {
                //         'from': 'wishlists', 
                //         'localField': 'userId', 
                //         'foreignField': '_id', 
                //         'as': 'dataWishlists'
                //       }
                //     }, {
                //       '$lookup': {
                //         'from': 'products', 
                //         'localField': 'dataWishlists.productId', 
                //         'foreignField': '_id', 
                //         'as': 'dataProducts'
                //       }
                //     }
                //   ]
            ).toArray() as UserWishlist[]
            
        } catch (error) {
            console.log(error)
        }
        }
}

export default UserModel