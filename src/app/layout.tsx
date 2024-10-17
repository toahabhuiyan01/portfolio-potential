import "./globals.css";
import { Poppins } from 'next/font/google'
import { ThemeProvider } from "next-themes";
import ThemeSwitch from "./_components/ThemeSwitch";
import TopBar from "./landing/components/TopBar";

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin']
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="dark" lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.className} flex justify-center antialiased dark:bg-gray-800 dark:text-white h-lvh w-lvh relative`}
      >
        <ThemeProvider attribute="class">
          <ThemeSwitch />
          <div
            style={{
              maxWidth: "100%",
              height: "100%",
              minHeight: '100%'
            }}
          >

            <TopBar />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
