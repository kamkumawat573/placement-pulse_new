/**
 * Environment configuration utility
 * 
 * NODE_ENV: Used for build/runtime optimizations (development, production, test)
 * APP_ENV: Used for application-specific logic (development, staging, production, preview)
 */

// Increase Node's default EventEmitter listeners limit to avoid noisy
// MaxListenersExceededWarning when the app legitimately creates multiple
// outgoing HTTP requests (for example during bulk enrollment/payment flows).
// This is a pragmatic mitigation; we should still audit places that attach
// many listeners and refactor if necessary.
import { EventEmitter } from 'events'
// Raise default listener limit from 10 to 30
EventEmitter.defaultMaxListeners = 30

export const env = {
  // Build/Runtime environment
  NODE_ENV: process.env.NODE_ENV as 'development' | 'production' | 'test',
  
  // Application environment
  APP_ENV: (process.env.APP_ENV || process.env.NODE_ENV) as 'development' | 'staging' | 'production' | 'preview',
  
  // Environment checks
  isDevelopment: process.env.NODE_ENV === 'development',
  isProduction: process.env.NODE_ENV === 'production',
  isTest: process.env.NODE_ENV === 'test',
  
  // Application environment checks
  isAppDevelopment: (process.env.APP_ENV || process.env.NODE_ENV) === 'development',
  isAppStaging: process.env.APP_ENV === 'staging',
  isAppProduction: (process.env.APP_ENV || process.env.NODE_ENV) === 'production',
  isAppPreview: process.env.APP_ENV === 'preview',
  
  // Database
  MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/placementpulse',
  
  // JWT
  JWT_SECRET: process.env.JWT_SECRET ,
  
  // CashFree
  CASHFREE_APP_ID: process.env.NEXT_PUBLIC_CASHFREE_APP_ID,
  CASHFREE_SECRET_KEY: process.env.CASHFREE_SECRET_KEY,
  CASHFREE_ENVIRONMENT: process.env.CASHFREE_ENVIRONMENT || 'sandbox',
  
  // reCAPTCHA
  RECAPTCHA_SITE_KEY: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
  RECAPTCHA_SECRET_KEY: process.env.RECAPTCHA_SECRET_KEY,
  
  // Admin
  ADMIN_EMAIL: process.env.ADMIN_EMAIL || 'admin@placementpulse.com',
  ADMIN_PASSWORD: process.env.ADMIN_PASSWORD || 'admin123',
} as const

// Validation
if (!['development', 'production', 'test'].includes(env.NODE_ENV)) {
  throw new Error(`Invalid NODE_ENV: ${env.NODE_ENV}. Must be one of: development, production, test`)
}

if (!['development', 'staging', 'production', 'preview'].includes(env.APP_ENV)) {
  throw new Error(`Invalid APP_ENV: ${env.APP_ENV}. Must be one of: development, staging, production, preview`)
}
