import { UserInteractor } from '../../domain/gateways/User.interactor'
import Constants from 'expo-constants'
import env from '../../../../configuration/env.json'
import { User } from '../../domain/entities/User'
import { createStorageSlot } from 'react-native-storage-slot'
import { createId } from '@vitrine/common/lib/core/domain/entities/createId.helper'

const Storage = createStorageSlot<User>('currentUser')

export class UserInteractorImpl implements UserInteractor {
  async getAdminAsync(): Promise<User> {
    const result = await fetch(`${env.dropbox.endpoint}2/files/download`, {
      headers: {
        Authorization: 'Bearer ' + env.dropbox.token,
        'Dropbox-API-Arg': `{\"path\": \"/admin.json\"}`,
      },
    })
    return JSON.parse(await result.text())
  }

  async saveUserAsync(user: User): Promise<void> {
    const path = user.isAdmin ? 'admin.json' : `/contacts/${user._id}.json`
    await fetch(`${env.dropbox.endpoint}2/files/upload`, {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/octet-stream',
        Authorization: 'Bearer ' + env.dropbox.token,
        'Dropbox-API-Arg': `{\"path\": \"${path}\",\"mode\": \"overwrite\",\"autorename\": true,\"mute\": true}`,
      },
    })
  }

  getAllContactsAsync(): Promise<User[]> {
    throw new Error('Method not implemented.')
  }

  isAdmin(): boolean {
    return Constants.isDevice && Constants.deviceName === env.admin
  }

  async getOrCreateCurrentUserAsync(isAdmin: boolean): Promise<User> {
    const user = await Storage.get()
    if (user) {
      return user
    }
    const newUser: User = {
      _id: createId(),
      isAdmin,
    }
    await Storage.set(newUser)
    return newUser
  }
}
