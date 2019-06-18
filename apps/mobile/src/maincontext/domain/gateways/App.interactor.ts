export interface FontPayload {
  [keys: string]: string | number
}
export type AssetPayload = number | number[]
export interface AppInteractor {
  refresh(): void
  loadFontAsync(fonts: FontPayload): Promise<void>
  loadImageAsync(assets: AssetPayload): Promise<void>
}
