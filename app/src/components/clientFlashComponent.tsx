'use client'

import { useSearchParams } from "next/navigation"


const ClientFlashComponent = () => {
    const searchParams = useSearchParams()
    const errorMessage = searchParams.get('error')

    return (
        <>
            {errorMessage && (
                <p className="animate-pulse bg-red-500 rounded px-4 py-2 text-center text-white">{errorMessage}</p>
            )}
        </>
    )
}

export default ClientFlashComponent