import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavbarProduct from '@/components/navbarProduct'
import { cookies } from 'next/headers'
import { string } from 'zod'
import ProtectComponent from '@/components/protectComponent'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'NAIKIN',
    description: 'Generated by create next app',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {

    const isLogin = cookies().get('Authorization')?.value
    // console.log(isLogin);

    return (
        <ProtectComponent>
            <div>
                <NavbarProduct isLogin={isLogin} />
                {children}
            </div>
        </ProtectComponent>
    )
}