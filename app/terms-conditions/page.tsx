"use client"

import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  FileText, 
  CreditCard, 
  Shield, 
  AlertCircle, 
  XCircle, 
  CheckCircle, 
  Lock,
  Mail,
  ArrowLeft,
  Receipt
} from "lucide-react"

export default function TermsConditionsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-12 sm:pt-28 sm:pb-16 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary/10 mb-6">
              <FileText className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              Terms & Conditions
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Payment Terms, Refund Policy, and Course Enrollment Guidelines
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Last Updated: January 2025
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Link href="/">
                <Button variant="outline" className="gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Home
                </Button>
              </Link>
            </div>

            <div className="space-y-6">
              {/* Important Notice */}
              <Card className="border-2 border-primary/20 bg-primary/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-primary">
                    <AlertCircle className="h-6 w-6" />
                    Important Notice
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm sm:text-base leading-relaxed">
                    By proceeding with the payment and enrolling in any course offered by <strong>Placement Pulse</strong>, 
                    you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. 
                    Please read them carefully before making any purchase.
                  </p>
                  <div className="flex items-start gap-3 p-4 bg-background rounded-lg border">
                    <XCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-sm sm:text-base text-destructive">No Refunds or Cancellations</p>
                      <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                        All course purchases are final. We do not offer refunds or cancellations under any circumstances.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* 1. Payment Terms */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <CreditCard className="h-6 w-6 text-primary" />
                    1. Payment Terms
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-base mb-2">1.1 Payment Methods</h3>
                    <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-muted-foreground ml-4">
                      <li>All payments are processed securely through <strong>Cashfree Payment Gateway</strong></li>
                      <li>We accept Credit Cards, Debit Cards, Net Banking, UPI, and Digital Wallets</li>
                      <li>All prices are listed in Indian Rupees (INR) unless specified otherwise</li>
                      <li>Prices include all applicable taxes and fees</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-base mb-2">1.2 Payment Security</h3>
                    <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-muted-foreground ml-4">
                      <li>Payment information is encrypted and processed through Cashfree's secure servers</li>
                      <li>We do not store your complete card details on our servers</li>
                      <li>All transactions comply with PCI-DSS security standards</li>
                      <li>You will receive a payment confirmation email upon successful transaction</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-base mb-2">1.3 Payment Processing</h3>
                    <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-muted-foreground ml-4">
                      <li>Payment must be completed in full before accessing course content</li>
                      <li>Course access is granted immediately upon successful payment verification</li>
                      <li>In case of payment failure, you may retry the transaction</li>
                      <li>For failed transactions, amounts will be automatically refunded by your bank/payment provider within 5-7 business days</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-base mb-2">1.4 Pricing</h3>
                    <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-muted-foreground ml-4">
                      <li>All course prices are clearly displayed before checkout</li>
                      <li>Promotional prices and discounts are valid for limited periods only</li>
                      <li>We reserve the right to modify course prices without prior notice</li>
                      <li>Price changes do not affect already purchased courses</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* 2. Cashfree Payment Gateway */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Shield className="h-6 w-6 text-primary" />
                    2. Cashfree Payment Gateway
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-base mb-2">2.1 Third-Party Payment Processor</h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      Placement Pulse uses <strong>Cashfree Payments</strong> as our payment gateway partner. 
                      By making a payment, you agree to Cashfree's Terms of Service and Privacy Policy in addition to ours.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-base mb-2">2.2 Payment Processing Details</h3>
                    <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-muted-foreground ml-4">
                      <li>Payment details are transmitted directly to Cashfree's secure servers</li>
                      <li>Cashfree handles all payment authentication and authorization</li>
                      <li>Transaction status is communicated to us by Cashfree in real-time</li>
                      <li>Payment disputes are handled jointly by Cashfree and Placement Pulse</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-base mb-2">2.3 Payment Confirmation</h3>
                    <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-muted-foreground ml-4">
                      <li>You will receive a payment receipt from Cashfree upon successful transaction</li>
                      <li>An enrollment confirmation email will be sent by Placement Pulse</li>
                      <li>Keep payment confirmation for your records</li>
                      <li>Transaction ID should be quoted in all payment-related queries</li>
                    </ul>
                  </div>

                  <div className="bg-muted/50 rounded-lg p-4 border">
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      <strong>Note:</strong> For any payment gateway technical issues, transaction failures, or payment-related 
                      queries during checkout, please contact Cashfree Support or reach out to us with your transaction details.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* 3. No Refund Policy */}
              <Card className="border-2 border-destructive/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-destructive">
                    <XCircle className="h-6 w-6" />
                    3. No Refund Policy
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-destructive/10 rounded-lg p-4 border-2 border-destructive/20">
                    <p className="font-semibold text-base mb-2 text-destructive">STRICTLY NO REFUNDS</p>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      All course purchases on Placement Pulse are <strong>FINAL and NON-REFUNDABLE</strong>. 
                      Once payment is successfully processed and course access is granted, no refunds will be issued under any circumstances.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-base mb-2">3.1 No Refund Scenarios Include (But Not Limited To)</h3>
                    <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-muted-foreground ml-4">
                      <li><strong>Change of Mind:</strong> If you change your mind after purchase</li>
                      <li><strong>Lack of Time:</strong> If you don't have time to complete the course</li>
                      <li><strong>Content Expectations:</strong> If course content doesn't meet your personal expectations</li>
                      <li><strong>Technical Issues:</strong> Personal device or internet connectivity problems</li>
                      <li><strong>Duplicate Purchase:</strong> Accidental duplicate enrollment (we may provide access adjustment)</li>
                      <li><strong>Course Completion:</strong> Partial or complete viewing of course content</li>
                      <li><strong>Academic Performance:</strong> Not achieving desired placement results</li>
                      <li><strong>Personal Circumstances:</strong> Changes in personal or professional circumstances</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-base mb-2">3.2 Exceptions</h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-3">
                      The ONLY exception to our no-refund policy is:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-muted-foreground ml-4">
                      <li>
                        <strong>Payment Processing Errors:</strong> If money is debited from your account but course access 
                        is not granted due to technical failures, we will investigate and either provide access or process a refund 
                        within 7-10 business days after verification
                      </li>
                      <li>
                        <strong>Duplicate Charges:</strong> If the same course is accidentally charged twice from your account, 
                        the duplicate charge will be refunded after verification
                      </li>
                    </ul>
                  </div>

                  <div className="bg-muted/50 rounded-lg p-4 border">
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      <strong>Important:</strong> Please carefully review course details, curriculum, and pricing before making 
                      a purchase. By completing the payment, you acknowledge that you have reviewed all course information and 
                      accept our no-refund policy.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* 4. Course Cancellation Policy */}
              <Card className="border-2 border-destructive/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-destructive">
                    <XCircle className="h-6 w-6" />
                    4. Course Cancellation Policy
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-destructive/10 rounded-lg p-4 border-2 border-destructive/20">
                    <p className="font-semibold text-base mb-2 text-destructive">NO CANCELLATIONS ALLOWED</p>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      Course enrollments <strong>CANNOT BE CANCELLED</strong> once payment is completed and access is granted. 
                      This policy applies to all courses without exception.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-base mb-2">4.1 What This Means</h3>
                    <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-muted-foreground ml-4">
                      <li>You cannot cancel your enrollment after purchase</li>
                      <li>Course access remains active for the specified duration (typically lifetime)</li>
                      <li>Your enrollment cannot be transferred to another person</li>
                      <li>You cannot exchange your enrollment for another course</li>
                      <li>Partial cancellations are not permitted in multi-course purchases</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-base mb-2">4.2 Your Responsibilities</h3>
                    <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-muted-foreground ml-4">
                      <li>Carefully review course details before purchasing</li>
                      <li>Ensure you have the time and commitment to complete the course</li>
                      <li>Verify technical requirements (device, browser, internet speed)</li>
                      <li>Read all course descriptions, curriculum, and prerequisites</li>
                      <li>Contact support if you have questions BEFORE purchasing</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-base mb-2">4.3 Company's Right to Cancel</h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-3">
                      Placement Pulse reserves the right to cancel enrollments in the following cases:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-muted-foreground ml-4">
                      <li>Violation of Terms of Service</li>
                      <li>Fraudulent payment or payment disputes/chargebacks</li>
                      <li>Sharing course credentials with unauthorized users</li>
                      <li>Attempting to download, copy, or redistribute course content</li>
                      <li>Abusive behavior towards instructors or support staff</li>
                    </ul>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mt-3">
                      In such cases, access will be revoked immediately without refund.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* 5. Course Access and Delivery */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-primary" />
                    5. Course Access and Delivery
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-base mb-2">5.1 Access Details</h3>
                    <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-muted-foreground ml-4">
                      <li>Course access is granted immediately upon successful payment</li>
                      <li>Login credentials are sent to your registered email address</li>
                      <li>Lifetime access to purchased courses (unless otherwise specified)</li>
                      <li>Access to all future updates and additional content at no extra cost</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-base mb-2">5.2 Technical Requirements</h3>
                    <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-muted-foreground ml-4">
                      <li>Stable internet connection (minimum 2 Mbps recommended)</li>
                      <li>Modern web browser (Chrome, Firefox, Safari, Edge - latest versions)</li>
                      <li>JavaScript enabled in browser</li>
                      <li>Email address for notifications and updates</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-base mb-2">5.3 Usage Restrictions</h3>
                    <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-muted-foreground ml-4">
                      <li>Course access is for individual use only</li>
                      <li>Sharing login credentials is strictly prohibited</li>
                      <li>Downloading or redistributing course content is not allowed</li>
                      <li>Commercial use of course materials is forbidden</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* 6. Intellectual Property */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Lock className="h-6 w-6 text-primary" />
                    6. Intellectual Property Rights
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    All course content, including videos, documents, materials, assignments, and assessments, 
                    are the intellectual property of Placement Pulse and/or its content creators.
                  </p>

                  <div>
                    <h3 className="font-semibold text-base mb-2">6.1 Copyright Protection</h3>
                    <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-muted-foreground ml-4">
                      <li>All content is protected by copyright laws</li>
                      <li>Unauthorized copying, reproduction, or distribution is illegal</li>
                      <li>Screen recording or downloading content is prohibited</li>
                      <li>Legal action will be taken against copyright violators</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-base mb-2">6.2 Limited License</h3>
                    <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-muted-foreground ml-4">
                      <li>You are granted a limited, non-exclusive, non-transferable license to access course content</li>
                      <li>This license is for personal, non-commercial use only</li>
                      <li>The license can be revoked if you violate these terms</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* 7. Dispute Resolution */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Receipt className="h-6 w-6 text-primary" />
                    7. Dispute Resolution & Chargebacks
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-base mb-2">7.1 Contact Us First</h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      If you have any issues or concerns regarding your payment or course access, please contact us 
                      immediately before initiating any chargeback or dispute with your bank.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-base mb-2">7.2 Chargeback Policy</h3>
                    <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-muted-foreground ml-4">
                      <li>Unauthorized chargebacks will result in immediate account suspension</li>
                      <li>Access to all purchased courses will be revoked</li>
                      <li>You will be permanently banned from future purchases</li>
                      <li>We reserve the right to pursue legal action for fraudulent chargebacks</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-base mb-2">7.3 Legitimate Disputes</h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      We will work with you to resolve any legitimate payment issues such as:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-muted-foreground ml-4 mt-2">
                      <li>Payment processed but course access not granted</li>
                      <li>Duplicate charges for the same course</li>
                      <li>Technical errors during payment process</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* 8. Modifications to Terms */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <AlertCircle className="h-6 w-6 text-primary" />
                    8. Changes to Terms & Conditions
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Placement Pulse reserves the right to modify these Terms and Conditions at any time. 
                    Changes will be effective immediately upon posting on our website.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-muted-foreground ml-4">
                    <li>Continued use of the platform constitutes acceptance of modified terms</li>
                    <li>We will notify users of significant changes via email</li>
                    <li>Check this page regularly for updates</li>
                    <li>Last update date is displayed at the top of this page</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <Card className="border-2 border-primary/20 bg-primary/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-primary">
                    <Mail className="h-6 w-6" />
                    Contact Us
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    If you have any questions about these Terms and Conditions, payment issues, or need support, 
                    please contact us:
                  </p>
                  
                  <div className="space-y-2 text-sm sm:text-base">
                    <p className="font-semibold">Placement Pulse Support Team</p>
                    <p className="text-muted-foreground">Email: support@placementpulse.com</p>
                    <p className="text-muted-foreground">Response Time: Within 24-48 hours</p>
                  </div>

                  <div className="mt-6">
                    <Link href="/contact">
                      <Button className="w-full sm:w-auto">
                        Contact Support
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Acknowledgment */}
              <Card className="border-2 border-primary/20">
                <CardContent className="pt-6">
                  <div className="bg-primary/10 rounded-lg p-6 text-center">
                    <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                    <p className="font-semibold text-lg mb-2">Acknowledgment</p>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      By clicking "I Agree" during checkout and completing your payment, you confirm that you have 
                      read, understood, and agree to be bound by these Terms and Conditions, including our 
                      No Refund and No Cancellation policies.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Back to Top */}
            <div className="mt-8 text-center">
              <Link href="/">
                <Button variant="outline" className="gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
