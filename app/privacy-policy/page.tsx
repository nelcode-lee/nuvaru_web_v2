import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Eye, Database, Lock, Mail } from "lucide-react"

export const metadata: Metadata = {
  title: "Privacy Policy | Nuvaru - AI Transformation Consultancy",
  description:
    "Learn how Nuvaru collects, uses, and protects your personal information in compliance with GDPR and UK data protection laws.",
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-brand py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center p-3 bg-white/20 rounded-full mb-4">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Privacy Policy</h1>
            <p className="text-xl text-blue-100">
              Your privacy is important to us. Learn how we collect, use, and protect your information.
            </p>
            <p className="text-blue-100 mt-2">Last updated: {new Date().toLocaleDateString("en-GB")}</p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Eye className="h-6 w-6 text-brand-purple mr-3" />
                  <h2 className="text-2xl font-bold">Introduction</h2>
                </div>
                <p className="text-gray-700 mb-4">
                  Nuvaru ("we," "our," or "us") is committed to protecting your privacy and ensuring the security of
                  your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard
                  your information when you visit our website or use our services.
                </p>
                <p className="text-gray-700">
                  This policy complies with the UK General Data Protection Regulation (UK GDPR) and the Data Protection
                  Act 2018.
                </p>
              </CardContent>
            </Card>

            {/* Information We Collect */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Database className="h-6 w-6 text-brand-blue mr-3" />
                  <h2 className="text-2xl font-bold">Information We Collect</h2>
                </div>

                <h3 className="text-xl font-semibold mb-3">Personal Information You Provide</h3>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li>Contact information (name, email address, phone number, company name)</li>
                  <li>Business information (industry, company size, specific challenges)</li>
                  <li>Communication preferences</li>
                  <li>Any other information you choose to provide in forms or communications</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3">Information Automatically Collected</h3>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li>IP address and location data</li>
                  <li>Browser type and version</li>
                  <li>Device information</li>
                  <li>Pages visited and time spent on our website</li>
                  <li>Referring website information</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3">Cookies and Tracking Technologies</h3>
                <p className="text-gray-700 mb-4">We use the following types of cookies:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>
                    <strong>Necessary Cookies:</strong> Essential for website functionality
                  </li>
                  <li>
                    <strong>Analytics Cookies:</strong> Help us understand website usage (Google Analytics)
                  </li>
                  <li>
                    <strong>Marketing Cookies:</strong> Used for advertising and remarketing
                  </li>
                  <li>
                    <strong>Functional Cookies:</strong> Enable enhanced features and personalization
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* How We Use Your Information */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Lock className="h-6 w-6 text-brand-purple mr-3" />
                  <h2 className="text-2xl font-bold">How We Use Your Information</h2>
                </div>

                <p className="text-gray-700 mb-4">We use your information for the following purposes:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Providing and improving our AI consultancy services</li>
                  <li>Responding to your inquiries and providing customer support</li>
                  <li>Sending you relevant information about our services (with your consent)</li>
                  <li>Analyzing website usage to improve user experience</li>
                  <li>Complying with legal obligations</li>
                  <li>Protecting our rights and preventing fraud</li>
                </ul>
              </CardContent>
            </Card>

            {/* Legal Basis for Processing */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">Legal Basis for Processing</h2>
                <p className="text-gray-700 mb-4">Under UK GDPR, we process your personal data based on:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>
                    <strong>Consent:</strong> When you provide explicit consent for marketing communications
                  </li>
                  <li>
                    <strong>Contract:</strong> To fulfill our contractual obligations when providing services
                  </li>
                  <li>
                    <strong>Legitimate Interest:</strong> For business operations, website analytics, and service
                    improvement
                  </li>
                  <li>
                    <strong>Legal Obligation:</strong> To comply with applicable laws and regulations
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Data Sharing and Disclosure */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">Data Sharing and Disclosure</h2>
                <p className="text-gray-700 mb-4">We may share your information with:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>
                    <strong>Service Providers:</strong> Third-party vendors who assist with our operations (e.g., Google
                    Analytics, email services)
                  </li>
                  <li>
                    <strong>Legal Requirements:</strong> When required by law or to protect our rights
                  </li>
                  <li>
                    <strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales
                  </li>
                </ul>
                <p className="text-gray-700 mt-4">
                  We do not sell, rent, or trade your personal information to third parties for their marketing
                  purposes.
                </p>
              </CardContent>
            </Card>

            {/* Your Rights */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">Your Rights Under UK GDPR</h2>
                <p className="text-gray-700 mb-4">You have the following rights regarding your personal data:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>
                    <strong>Right of Access:</strong> Request a copy of your personal data
                  </li>
                  <li>
                    <strong>Right to Rectification:</strong> Correct inaccurate or incomplete data
                  </li>
                  <li>
                    <strong>Right to Erasure:</strong> Request deletion of your personal data
                  </li>
                  <li>
                    <strong>Right to Restrict Processing:</strong> Limit how we use your data
                  </li>
                  <li>
                    <strong>Right to Data Portability:</strong> Receive your data in a portable format
                  </li>
                  <li>
                    <strong>Right to Object:</strong> Object to processing based on legitimate interests
                  </li>
                  <li>
                    <strong>Right to Withdraw Consent:</strong> Withdraw consent for marketing communications
                  </li>
                </ul>
                <p className="text-gray-700 mt-4">
                  To exercise these rights, please contact us using the information provided below.
                </p>
              </CardContent>
            </Card>

            {/* Data Security */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">Data Security</h2>
                <p className="text-gray-700 mb-4">
                  We implement appropriate technical and organizational measures to protect your personal data against:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Unauthorized access, use, or disclosure</li>
                  <li>Accidental loss or destruction</li>
                  <li>Malicious attacks and data breaches</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute
                  security.
                </p>
              </CardContent>
            </Card>

            {/* Data Retention */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">Data Retention</h2>
                <p className="text-gray-700">
                  We retain your personal data only for as long as necessary to fulfill the purposes outlined in this
                  policy, comply with legal obligations, resolve disputes, and enforce our agreements. Specific
                  retention periods vary depending on the type of data and the purpose for which it was collected.
                </p>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Mail className="h-6 w-6 text-brand-blue mr-3" />
                  <h2 className="text-2xl font-bold">Contact Us</h2>
                </div>
                <p className="text-gray-700 mb-4">
                  If you have questions about this Privacy Policy or wish to exercise your rights, please contact us:
                </p>
                <div className="space-y-2 text-gray-700">
                  <p>
                    <strong>Email:</strong> privacy@nuvaru.co.uk
                  </p>
                  <p>
                    <strong>Address:</strong> Hull, East Yorkshire, UK
                  </p>
                  <p>
                    <strong>Data Protection Officer:</strong> info@nuvaru.co.uk
                  </p>
                </div>
                <p className="text-gray-700 mt-4">
                  You also have the right to lodge a complaint with the Information Commissioner's Office (ICO) if you
                  believe we have not handled your personal data appropriately.
                </p>
              </CardContent>
            </Card>

            {/* Changes to Policy */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">Changes to This Policy</h2>
                <p className="text-gray-700">
                  We may update this Privacy Policy from time to time. We will notify you of any material changes by
                  posting the new policy on our website and updating the "Last updated" date. Your continued use of our
                  services after such changes constitutes acceptance of the updated policy.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
