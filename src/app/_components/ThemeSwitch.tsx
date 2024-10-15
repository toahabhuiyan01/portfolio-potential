'use client'

import { useTheme } from 'next-themes'
import { Moon, Sun } from "lucide-react"

export default function ThemeSwitch() {
    const { setTheme, resolvedTheme } = useTheme()

    return (
        <button className='fixed right-8 bottom-8'>
            { resolvedTheme === 'dark' ? <Sun onClick={() => setTheme('light')} /> : <Moon onClick={() => setTheme('dark')} /> }
        </button>
    )


}