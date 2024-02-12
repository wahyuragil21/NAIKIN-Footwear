'use client'
import { useSearchParams } from "next/navigation"

const ClientFlashComponent = () => {
    const searchParams = useSearchParams()
    const errorMessage = searchParams.get('error')
    return (
        <>
            {errorMessage && errorMessage == "String must contain at least 1 character(s)" ? (
                <p className="animate-pulse bg-red-500 rounded px-4 py-2 text-center text-white">Email and Password is required!</p>
            ) : (
                <p className="animate-pulse bg-red-500 rounded px-4 py-2 text-center text-white">Email or Password is incorrect!</p>
            )}
        </>
    )
}

export default ClientFlashComponent