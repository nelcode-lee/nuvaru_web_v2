import type { Metadata } from "next"
import { MobileEcoDashboard } from "@/components/mobile-eco-dashboard"

export const metadata: Metadata = {
  title: "EcoHaulage Mobile Dashboard | Nuvaru",
  description: "Mobile-optimized sustainability compliance dashboard for UK haulage operations",
}

export default function EcoDashboardMobilePage() {
  return <MobileEcoDashboard />
}
