import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Settings, CheckCircle } from "lucide-react"

export function EmailSetupInstructions() {
  return (
    <Card className="mt-8 border-amber-200 bg-amber-50">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-amber-800">
          <Settings className="w-5 h-5" />
          Email Integration Setup Required
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-amber-700">
        <p>
          The forms are now configured to send emails to <strong>lee@nuvaru.co.uk</strong>, but you need to set up an
          email service to actually send the emails.
        </p>

        <div className="space-y-3">
          <h4 className="font-semibold flex items-center gap-2">
            <Mail className="w-4 h-4" />
            Recommended Setup Options:
          </h4>

          <div className="space-y-2 ml-6">
            <div className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 mt-0.5 text-green-600" />
              <div>
                <strong>Resend (Recommended):</strong> Add RESEND_API_KEY to your environment variables
              </div>
            </div>

            <div className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 mt-0.5 text-green-600" />
              <div>
                <strong>SendGrid:</strong> Add SENDGRID_API_KEY to your environment variables
              </div>
            </div>

            <div className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 mt-0.5 text-green-600" />
              <div>
                <strong>Nodemailer:</strong> Configure SMTP settings in environment variables
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 p-3 bg-amber-100 rounded-md">
          <p className="text-sm">
            <strong>Current Status:</strong> Forms are logging submissions to console. Uncomment the email sending code
            in <code>/app/actions/contact.ts</code> after setting up your email service.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
