"use client"

import { Navigation } from "@/components/navigation"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, Mail, FileText, Lock, Eye, Users, Clock, AlertCircle } from "lucide-react"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4 sm:mb-6">
              <Shield className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Your privacy is important to us. Learn how we collect, use, and protect your personal information.
            </p>
            <div className="mt-4 sm:mt-6 text-sm text-muted-foreground flex items-center justify-center gap-2">
              <Clock className="h-4 w-4" />
              <span>Last updated: November 12, 2025</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 lg:pb-24">
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-xl border-2">
            <CardContent className="p-6 sm:p-8 lg:p-12">
              
              {/* Introduction */}
              <section className="mb-8 sm:mb-10 lg:mb-12">
                <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                    Placement Pulse ("we", "us", or "our") is committed to protecting your privacy and ensuring 
                    the security of your personal information. This Privacy Policy explains how we collect, use, 
                    disclose, and safeguard your information when you visit our website or use our services.
                  </p>
                </div>
              </section>

              {/* Information We Collect */}
              <section className="mb-8 sm:mb-10 lg:mb-12 border-t pt-8 sm:pt-10">
                <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="p-2 sm:p-3 bg-blue-500/10 rounded-lg flex-shrink-0">
                    <FileText className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">
                      1. Information We Collect
                    </h2>
                  </div>
                </div>
                
                <div className="space-y-4 sm:space-y-5 pl-0 sm:pl-12">
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">Personal Information</h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      When you create an account, enroll in courses, or contact us, we collect information such as:
                    </p>
                    <ul className="list-disc list-inside mt-2 sm:mt-3 space-y-1.5 sm:space-y-2 text-sm sm:text-base text-muted-foreground ml-4 sm:ml-6">
                      <li>Full name and email address</li>
                      <li>Phone number and mobile number</li>
                      <li>Billing and payment information</li>
                      <li>Profile information and preferences</li>
                      <li>Course enrollment history</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">Automatically Collected Information</h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      We automatically collect certain information when you visit our website, including:
                    </p>
                    <ul className="list-disc list-inside mt-2 sm:mt-3 space-y-1.5 sm:space-y-2 text-sm sm:text-base text-muted-foreground ml-4 sm:ml-6">
                      <li>IP address and browser type</li>
                      <li>Device information and operating system</li>
                      <li>Pages visited and time spent on pages</li>
                      <li>Referring website addresses</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* How We Use Your Information */}
              <section className="mb-8 sm:mb-10 lg:mb-12 border-t pt-8 sm:pt-10">
                <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="p-2 sm:p-3 bg-green-500/10 rounded-lg flex-shrink-0">
                    <Eye className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">
                      2. How We Use Your Information
                    </h2>
                  </div>
                </div>
                
                <div className="space-y-4 sm:space-y-5 pl-0 sm:pl-12">
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    We use the information we collect for the following purposes:
                  </p>
                  <ul className="list-disc list-inside space-y-2 sm:space-y-3 text-sm sm:text-base text-muted-foreground ml-4 sm:ml-6">
                    <li><strong>Service Delivery:</strong> To provide, maintain, and improve our educational services and platform</li>
                    <li><strong>Payment Processing:</strong> To process transactions and send payment confirmations</li>
                    <li><strong>Communication:</strong> To send course updates, notifications, and respond to inquiries</li>
                    <li><strong>Personalization:</strong> To customize your learning experience and recommend relevant courses</li>
                    <li><strong>Analytics:</strong> To understand user behavior and improve our platform</li>
                    <li><strong>Security:</strong> To detect, prevent, and address fraud or security issues</li>
                    <li><strong>Legal Compliance:</strong> To comply with applicable laws and regulations</li>
                  </ul>
                </div>
              </section>

              {/* Payment Information */}
              <section className="mb-8 sm:mb-10 lg:mb-12 border-t pt-8 sm:pt-10">
                <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="p-2 sm:p-3 bg-purple-500/10 rounded-lg flex-shrink-0">
                    <Lock className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">
                      3. Payment & Financial Information
                    </h2>
                  </div>
                </div>
                
                <div className="space-y-4 sm:space-y-5 pl-0 sm:pl-12">
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    We use secure third-party payment processors like <strong>Cashfree</strong> to handle all payment 
                    transactions. When you make a payment:
                  </p>
                  <ul className="list-disc list-inside space-y-2 sm:space-y-3 text-sm sm:text-base text-muted-foreground ml-4 sm:ml-6">
                    <li>Payment card details are transmitted directly to the payment processor</li>
                    <li>We do not store your complete card information on our servers</li>
                    <li>All payment data is encrypted using industry-standard SSL/TLS protocols</li>
                    <li>Payment processors comply with PCI-DSS security standards</li>
                  </ul>
                  <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4 sm:p-5 mt-4 sm:mt-5">
                    <div className="flex items-start gap-2 sm:gap-3">
                      <AlertCircle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <p className="text-xs sm:text-sm text-amber-900 dark:text-amber-200">
                        For detailed information about payment security, please review our payment processor's privacy 
                        policy on their official website.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Cookies and Tracking */}
              <section className="mb-8 sm:mb-10 lg:mb-12 border-t pt-8 sm:pt-10">
                <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="p-2 sm:p-3 bg-orange-500/10 rounded-lg flex-shrink-0">
                    <Eye className="h-5 w-5 sm:h-6 sm:w-6 text-orange-600" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">
                      4. Cookies & Tracking Technologies
                    </h2>
                  </div>
                </div>
                
                <div className="space-y-4 sm:space-y-5 pl-0 sm:pl-12">
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    We use cookies and similar tracking technologies to enhance your experience. These include:
                  </p>
                  <ul className="list-disc list-inside space-y-2 sm:space-y-3 text-sm sm:text-base text-muted-foreground ml-4 sm:ml-6">
                    <li><strong>Essential Cookies:</strong> Required for basic site functionality and user authentication</li>
                    <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
                    <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                  </ul>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    You can control cookie preferences through your browser settings. Note that disabling certain 
                    cookies may affect website functionality.
                  </p>
                </div>
              </section>

              {/* Third-Party Services */}
              <section className="mb-8 sm:mb-10 lg:mb-12 border-t pt-8 sm:pt-10">
                <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="p-2 sm:p-3 bg-indigo-500/10 rounded-lg flex-shrink-0">
                    <Users className="h-5 w-5 sm:h-6 sm:w-6 text-indigo-600" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">
                      5. Third-Party Services
                    </h2>
                  </div>
                </div>
                
                <div className="space-y-4 sm:space-y-5 pl-0 sm:pl-12">
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    We may share your information with trusted third-party service providers who assist us in:
                  </p>
                  <ul className="list-disc list-inside space-y-2 sm:space-y-3 text-sm sm:text-base text-muted-foreground ml-4 sm:ml-6">
                    <li>Processing payments (Cashfree)</li>
                    <li>Hosting and cloud infrastructure</li>
                    <li>Email delivery and communication</li>
                    <li>Analytics and performance monitoring</li>
                    <li>Customer support tools</li>
                  </ul>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mt-3 sm:mt-4">
                    These third parties are contractually obligated to use your information only as necessary to 
                    provide these services and are prohibited from using it for other purposes.
                  </p>
                </div>
              </section>

              {/* Data Retention */}
              <section className="mb-8 sm:mb-10 lg:mb-12 border-t pt-8 sm:pt-10">
                <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="p-2 sm:p-3 bg-cyan-500/10 rounded-lg flex-shrink-0">
                    <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-cyan-600" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">
                      6. Data Retention
                    </h2>
                  </div>
                </div>
                
                <div className="space-y-4 sm:space-y-5 pl-0 sm:pl-12">
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    We retain your personal information for as long as necessary to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 sm:space-y-3 text-sm sm:text-base text-muted-foreground ml-4 sm:ml-6">
                    <li>Provide our services and maintain your account</li>
                    <li>Comply with legal, tax, or accounting requirements</li>
                    <li>Resolve disputes and enforce our agreements</li>
                    <li>Maintain business records for legitimate business purposes</li>
                  </ul>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mt-3 sm:mt-4">
                    When data is no longer required, we take reasonable steps to securely delete or anonymize it.
                  </p>
                </div>
              </section>

              {/* Your Rights */}
              <section className="mb-8 sm:mb-10 lg:mb-12 border-t pt-8 sm:pt-10">
                <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="p-2 sm:p-3 bg-rose-500/10 rounded-lg flex-shrink-0">
                    <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-rose-600" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">
                      7. Your Privacy Rights
                    </h2>
                  </div>
                </div>
                
                <div className="space-y-4 sm:space-y-5 pl-0 sm:pl-12">
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Depending on your location, you may have the following rights regarding your personal data:
                  </p>
                  <ul className="list-disc list-inside space-y-2 sm:space-y-3 text-sm sm:text-base text-muted-foreground ml-4 sm:ml-6">
                    <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                    <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                    <li><strong>Deletion:</strong> Request deletion of your personal data (subject to legal requirements)</li>
                    <li><strong>Portability:</strong> Request transfer of your data to another service provider</li>
                    <li><strong>Objection:</strong> Object to processing of your personal information</li>
                    <li><strong>Restriction:</strong> Request restriction of processing in certain circumstances</li>
                  </ul>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mt-3 sm:mt-4">
                    To exercise these rights, please contact us using the information provided below.
                  </p>
                </div>
              </section>

              {/* Data Security */}
              <section className="mb-8 sm:mb-10 lg:mb-12 border-t pt-8 sm:pt-10">
                <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="p-2 sm:p-3 bg-emerald-500/10 rounded-lg flex-shrink-0">
                    <Lock className="h-5 w-5 sm:h-6 sm:w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">
                      8. Data Security
                    </h2>
                  </div>
                </div>
                
                <div className="space-y-4 sm:space-y-5 pl-0 sm:pl-12">
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    We implement appropriate technical and organizational measures to protect your personal information, including:
                  </p>
                  <ul className="list-disc list-inside space-y-2 sm:space-y-3 text-sm sm:text-base text-muted-foreground ml-4 sm:ml-6">
                    <li>Encryption of data in transit and at rest</li>
                    <li>Regular security assessments and updates</li>
                    <li>Access controls and authentication mechanisms</li>
                    <li>Secure hosting infrastructure</li>
                    <li>Employee training on data protection</li>
                  </ul>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mt-3 sm:mt-4">
                    While we strive to protect your information, no method of transmission over the internet is 100% secure. 
                    We cannot guarantee absolute security.
                  </p>
                </div>
              </section>

              {/* Changes to Policy */}
              <section className="mb-8 sm:mb-10 lg:mb-12 border-t pt-8 sm:pt-10">
                <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="p-2 sm:p-3 bg-violet-500/10 rounded-lg flex-shrink-0">
                    <FileText className="h-5 w-5 sm:h-6 sm:w-6 text-violet-600" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">
                      9. Changes to This Privacy Policy
                    </h2>
                  </div>
                </div>
                
                <div className="space-y-4 sm:space-y-5 pl-0 sm:pl-12">
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    We may update this Privacy Policy from time to time to reflect changes in our practices or for 
                    legal, operational, or regulatory reasons. When we make changes:
                  </p>
                  <ul className="list-disc list-inside space-y-2 sm:space-y-3 text-sm sm:text-base text-muted-foreground ml-4 sm:ml-6">
                    <li>We will update the "Last Updated" date at the top of this policy</li>
                    <li>Significant changes will be communicated via email or prominent notice on our website</li>
                    <li>Continued use of our services after changes constitutes acceptance</li>
                  </ul>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mt-3 sm:mt-4">
                    We encourage you to review this Privacy Policy periodically.
                  </p>
                </div>
              </section>

              {/* Contact Section */}
              <section className="border-t pt-8 sm:pt-10">
                <div className="flex items-start gap-3 sm:gap-4 mb-6 sm:mb-8">
                  <div className="p-2 sm:p-3 bg-primary/10 rounded-lg flex-shrink-0">
                    <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">
                      10. Contact Us
                    </h2>
                  </div>
                </div>
                
                <div className="pl-0 sm:pl-12">
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6 sm:mb-8">
                    If you have any questions, concerns, or requests regarding this Privacy Policy or our data 
                    practices, please don't hesitate to reach out to us:
                  </p>
                  
                  <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-6 sm:p-8 border-2 border-primary/10">
                    <div className="space-y-4 sm:space-y-5">
                      <div className="flex items-center gap-3 sm:gap-4">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <Mail className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-xs sm:text-sm text-muted-foreground mb-1">Email us at</p>
                          <a 
                            href="mailto:support@placementpulse.com" 
                            className="text-base sm:text-lg font-semibold text-primary hover:underline"
                          >
                            support@placementpulse.com
                          </a>
                        </div>
                      </div>
                      
                      <div className="pt-4 sm:pt-6 border-t border-border/50">
                        <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
                          For general inquiries or support, visit our contact page:
                        </p>
                        <Link href="/contact">
                          <Button 
                            className="w-full sm:w-auto bg-gradient-to-r from-primary to-accent hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                          >
                            <Mail className="h-4 w-4 mr-2" />
                            Contact Us
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                      <p className="text-xs sm:text-sm text-muted-foreground text-center sm:text-left">
                        © 2025 Placement Pulse. All rights reserved.
                      </p>
                      <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>Last updated: November 12, 2025</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
