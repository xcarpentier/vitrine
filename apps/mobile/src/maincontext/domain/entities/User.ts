import { PushSubscription } from '../../../notificationcontext/domain/entities/PushSubscription'

export interface User {
  _id: string
  name?: string
  avatar?: string
  isAdmin?: boolean
  pushSubscription?: PushSubscription
}
