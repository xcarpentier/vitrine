import {
  AppInteractor,
  FontPayload,
  AssetPayload,
} from '../../domain/gateways/App.interactor'

export class InMemoryAppInteractor implements AppInteractor {
  loadImageAsync(_assets: AssetPayload): Promise<void> {
    console.log('load image')
    return Promise.resolve()
  }
  loadFontAsync(_fonts: FontPayload): Promise<void> {
    console.log('load font')
    return Promise.resolve()
  }
  refresh(): void {
    console.log('refresh')
  }
}
