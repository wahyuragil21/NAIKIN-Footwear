'use client'
 
import { Logout } from '@/action'
import { useFormStatus } from 'react-dom'
 
export function LogoutButton({label}:{label? : string}) {
 
  return (
    <button onClick={() => {
      Logout()
    }} >
      Sign Out
    </button>
  )
}