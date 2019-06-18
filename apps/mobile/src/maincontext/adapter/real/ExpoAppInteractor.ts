import { Updates } from 'expo'
import * as Font from 'expo-font'
import {
  AppInteractor,
  FontPayload,
  AssetPayload,
} from '../../domain/gateways/App.interactor'
import { Asset } from 'expo-asset'

export class ExpoAppInteractor implements AppInteractor {
  async loadImageAsync(assets: AssetPayload): Promise<void> {
    await Asset.loadAsync(assets)
    return
  }
  loadFontAsync(fonts: FontPayload): Promise<void> {
    return Font.loadAsync(fonts)
  }
  refresh(): void {
    Updates.reload()
  }
}
