import type React from "react"
import { StaticNavbar } from "@/components/static-navbar"
import { StaticFooter } from "@/components/static-footer"
import "./globals.css"

export default function NotFoundLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <StaticNavbar />
      <main className="flex-1">{children}</main>
      <StaticFooter />
    </div>
  )
}
