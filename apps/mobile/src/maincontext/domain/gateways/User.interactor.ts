import { User } from '../entities/User'

export interface UserInteractor {
  getAdminAsync(): Promise<User>
  isAdmin(): boolean
  getOrCreateCurrentUserAsync(isAdmin: boolean): Promise<User>
  saveUserAsync(user: User): Promise<void>
  getAllContactsAsync(): Promise<User[]>
}
