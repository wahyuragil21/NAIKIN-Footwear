'use client'
import { useFormStatus } from 'react-dom'

export function ButtonComp({ label }: { label?: string }) {
  const { pending } = useFormStatus()

  return (
    <>
      {pending ? (
        <button type="submit" aria-disabled={pending} className="mt-5 tracking-wide font-semibold bg-black text-white-500 w-full py-4 rounded-lg hover:bg-gray-800 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
        <span className="ml-1 text-white">Loading...</span>
      </button>
      ) : (
      <button type="submit" aria-disabled={pending} className="mt-5 tracking-wide font-semibold bg-black text-white-500 w-full py-4 rounded-lg hover:bg-gray-800 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
        <svg
          className="w-6 h-6 -ml-2 text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
          <circle cx="8.5" cy={7} r={4} />
          <path d="M20 8v6M23 11h-6" />
        </svg>
        <span className="ml-1 text-white">{label ? label : "Sign In"}</span>
      </button>
      )}
    </>
  )
}