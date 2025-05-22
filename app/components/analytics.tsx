"use client"

import { GoogleAnalytics } from "@next/third-parties/google"

export function Analytics() {
  return <GoogleAnalytics gaId="G-XXXXXXXXXX" /> // Replace with your actual Google Analytics ID
}
