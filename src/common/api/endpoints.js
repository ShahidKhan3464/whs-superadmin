export const API_ENDPOINTS = {
  // AUTH ENDPOINTS
  LOGIN: '/api/admin/signin',
  RESEND_CODE: '/api/admin/resend-code',
  VERIFY_CODE: '/api/admin/verify-token',
  RESET_PASSWORD: '/api/admin/reset-password',
  FORGET_PASSWORD: '/api/admin/forgot-password',
  CHANGE_PASSWORD: '/api/admin/change-password',

  GET_DASHBOARD_DATA: '/api/admin/dashboard',

  // COMPANY ENDPOINTS
  COMPANY_LISTING: '/api/admin/company-admins',
  COMPANY_STATUS: '/api/admin/company/status',
  COMPANY_DETAILS: '/api/admin/company-details',

  // PROFILE ENDPOINTS
  VIEW_PROFILE: '/api/admin/profile',
  UPDATE_PROFILE: '/api/admin/profile',

  // SUBSCRIPTIONS ENDPOINTS
  SUBSCRIPTION_EDIT: '/api/admin/subscription-plan',
  SUBSCRIPTION_UPDATE: '/api/admin/subscription-plan',
  SUBSCRIPTION_DETAILS: '/api/admin/subscription-plan',
  SUBSCRIPTION_LISTING: '/api/admin/subscription-plans',
  SUBSCRIPTION_STATUS: '/api/admin/subscription-status'
};
