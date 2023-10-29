import './globals.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import {ReduxProvider} from "@/src/redux/provider";
import Nav from "@/src/component/nav/Nav";


const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'home',
    description: 'Generated by create next app',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={inter.className}>

        <ReduxProvider>
            <Nav></Nav>
            {children}
        </ReduxProvider>
        </body>
        </html>
    )
}
