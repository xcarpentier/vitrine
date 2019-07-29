export interface PushSubscription {
  pushType: 'mobile-push' | 'web-push'
  endpoint?: string
  token?: string
  keys?: {
    auth: string
    p256dh: string
  }
}
