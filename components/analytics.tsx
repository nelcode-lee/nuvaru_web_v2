"use client"

import { GoogleAnalytics } from "@next/third-parties/google"

export function Analytics() {
  // Replace "G-XXXXXXXXXX" with your actual Google Analytics measurement ID
  // You can find this in your Google Analytics account under Admin > Data Streams
  return <GoogleAnalytics gaId="G-XXXXXXXXXX" />
}
