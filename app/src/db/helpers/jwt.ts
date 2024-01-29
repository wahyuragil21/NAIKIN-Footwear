import jwt, {JwtPayload} from 'jsonwebtoken';
import * as jose from 'jose'

export const generateToken = (payload: JwtPayload) => jwt.sign(payload, process.env.NEXT_PUBLIC_JWT_SECRET as string)


export const readPayload = (token : string) => jwt.verify(token, process.env.NEXT_PUBLIC_JWT_SECRET as string)

export const readPayloadJose = async <T> (token : string) => {
    const secretKey = new TextEncoder().encode(process.env.NEXT_PUBLIC_JWT_SECRET as string)
    const payloadJose = await jose.jwtVerify<T>(token, secretKey)

    return payloadJose.payload
}