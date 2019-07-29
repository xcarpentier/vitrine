import { UserInteractor } from '../../domain/gateways/User.interactor'
import { User } from '../../domain/entities/User'

export class InMemoryUserInteractor implements UserInteractor {
  getAdminAsync(): Promise<User> {
    return Promise.resolve({ isAdmin: true, _id: 'admin' })
  }

  saveUserAsync(_user: User): Promise<void> {
    return Promise.resolve()
  }

  getAllContactsAsync(): Promise<User[]> {
    return Promise.resolve([
      { _id: '1234567', isAdmin: false },
      { _id: '12345678', isAdmin: false },
      { _id: '123456789', isAdmin: false },
    ])
  }

  getOrCreateCurrentUserAsync(isAdmin: boolean): Promise<User> {
    return Promise.resolve({ _id: '12345678', isAdmin })
  }

  isAdmin(): boolean {
    return false
  }
}
