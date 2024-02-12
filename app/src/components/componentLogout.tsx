'use client'
import { Logout } from '@/action' 
export function LogoutButton() {
 
  return (
    <button onClick={() => {
      Logout()
    }} >
      Sign Out
    </button>
  )
}