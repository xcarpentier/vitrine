import { User } from '../entities/User'

export interface UserInteractor {
  isAdmin(): boolean
  saveAdminAsync(pushToken: string): Promise<void>
  getAdminAsync(): Promise<User>
  saveContactAsync(pushToken: string): Promise<void>
  getContactsAsync(): Promise<User[]>
}
