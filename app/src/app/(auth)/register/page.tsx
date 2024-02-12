import Link from "next/link"
import brand from '../../../assets/Naikin.jpg'
import Image from "next/image"
import { redirect } from "next/navigation"
import { ButtonComp } from "@/components/componentButton"
import ClientFlashComponent from "@/components/clientFlashComponent"
export const dynamic = "force-dynamic"

export default function Register() {

    async function handleRegister(formData: FormData) {
        'use server'
        const name = formData.get('name')
        const username = formData.get('username')
        const email = formData.get('email')
        const password = formData.get('password')

        const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL + '/api/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                username,
                email,
                password
            })
        })

        const status = await response.json()
        if (!response.ok) {
            return redirect(`/register?error=${status.error}`)
        }

        return redirect('/login')
    }

    return (
        <>
            <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
                <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
                    <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
                        <div className="mt-12 flex flex-col items-center">
                        <ClientFlashComponent/>
                            <div className="w-full flex-1">
                                <div className="border-b text-center mb-5">
                                    <Image src={brand} alt="Jordan logo" width={200} className="inline-block" />
                                </div>
                                <div className="mx-auto max-w-xs">
                                    <form action={handleRegister}>
                                        <input
                                            className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                            type="name"
                                            id="name"
                                            name="name"
                                            placeholder="Name"
                                        />
                                        <input
                                            className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                                            type="username"
                                            id="username"
                                            name="username"
                                            placeholder="Username"
                                        />
                                        <input
                                            className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                                            type="email"
                                            id="email"
                                            name="email"
                                            placeholder="Email"
                                        />
                                        <input
                                            className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                                            type="password"
                                            id="password"
                                            name="password"
                                            placeholder="Password"
                                        />
                                        <ButtonComp label="Sign Up" />
                                        <p className="mt-6 text-xs text-gray-600 text-center"> Already have an account? <Link href="/login" className="hover:text-blue-600">Sign In</Link>
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 text-center hidden lg:flex">
                        <div
                            className="m-12 xl:m-16 w-full "
                            style={{backgroundImage:'url("https://i.pinimg.com/564x/4d/11/25/4d1125ebde6fc410c44e5f63353060a9.jpg")'}}>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}