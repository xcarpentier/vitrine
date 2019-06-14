import { UserInteractor } from '../../domain/gateways/User.interactor'
import { User } from '../../domain/entities/User'

export class InMemoryInteractor implements UserInteractor {
  isAdmin(): boolean {
    return true
  }
  saveAdminAsync(_pushToken: string): Promise<void> {
    return Promise.resolve()
  }
  getAdminAsync(): Promise<User> {
    return Promise.resolve({ _id: '123456', isAdmin: true })
  }
  saveContactAsync(_pushToken: string): Promise<void> {
    return Promise.resolve()
  }
  getContactsAsync(): Promise<User[]> {
    return Promise.resolve([
      { _id: '1234567', isAdmin: false },
      { _id: '12345678', isAdmin: false },
      { _id: '123456789', isAdmin: false },
    ])
  }
}
