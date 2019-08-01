import * as React from 'react'
import { FlexStyle, StyleSheet, View, Dimensions, Platform } from 'react-native'
import { AccessibilityRole } from './AccessibilityRole'
import { CustomColor } from './CustomColor'
import { Omit } from './Omit'

type LayerType = 'constrained' | undefined
type LayerDirection = 'row' | 'column' | undefined

const BaseStyle = StyleSheet.create({
  defaultStyle: {
    position: 'relative',
    backgroundColor: CustomColor.transparent,
  },
  constrained: {
    paddingHorizontal: 20,
  },
  mainHead: {
    maxWidth: 650,
    width: '100%',
    paddingBottom: 40,
  },
  mainContainer: {
    width: '100%',
    paddingHorizontal: 20,
  },
  main: {
    maxWidth: 800,
    width: '100%',
  },
  box: {
    paddingVertical: 30,
    borderTopWidth: 1,
    borderTopColor: CustomColor.greyLLLL,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 20,
  },
  gridItem: {
    height: 274,
    width: 395,
    paddingHorizontal: 15,
  },
  borderBox: {
    flex: 1,
    padding: 45,
    borderColor: CustomColor.primary,
    borderWidth: 2,
    borderRadius: 4,
    shadowColor: CustomColor.blackT,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 5,
  },
})

type CustomViewPropsBase = Omit<View['props'], 'accessibilityRole'> & {
  accessibilityRole?: AccessibilityRole
  className?: string
  ref?: (c: any) => void
}

const ViewBase = (View as any) as React.ComponentType<CustomViewPropsBase>

export interface CustomViewProps extends CustomViewPropsBase {
  type?: LayerType
  direction?: LayerDirection
  justify?: FlexStyle['justifyContent']
  align?: FlexStyle['alignItems']
  wrap?: FlexStyle['flexWrap']
  backgroundColor?: CustomColor
  center?: boolean
  fullWidth?: boolean
  hiddenXS?: boolean
  visibleXS?: boolean
  children: React.ReactNode
}

export class CustomView extends React.Component<CustomViewProps> {
  root?: any = undefined

  render() {
    const {
      type,
      backgroundColor,
      center,
      direction,
      style,
      justify: justifyContent,
      align: alignItems,
      wrap: flexWrap,
      fullWidth,
      hiddenXS,
      ...otherProps
    }: CustomViewProps = this.props
    return (
      <ViewBase
        ref={(component: any) => (this.root = component)}
        className={hiddenXS ? 'hiddenLayoutXS' : ''}
        style={[
          BaseStyle.defaultStyle,
          backgroundColor && { backgroundColor },
          center && { justifyContent: 'center', alignItems: 'center' },
          type === 'constrained' && BaseStyle.constrained,
          direction && { flexDirection: direction },
          justifyContent && { justifyContent },
          alignItems && { alignItems },
          flexWrap && { flexWrap },
          fullWidth && { width: '100%' },
          style,
        ]}
        {...otherProps}
      />
    )
  }
}

export const Centered = (props: CustomViewProps) => (
  <CustomView center {...props} />
)

export const Row = (props: CustomViewProps) => (
  <CustomView direction="row" {...props} />
)

export const MainContainer = (props: CustomViewProps) => (
  <Centered
    style={[BaseStyle.mainContainer, props.style]}
    accessibilityRole="main"
    {...props}
  />
)

export const Main = (props: CustomViewProps) => (
  <MainContainer>
    <Centered style={[BaseStyle.main, props.style]} {...props} />
  </MainContainer>
)

export const MainHead = (props: CustomViewProps) => (
  <Centered style={[BaseStyle.mainHead, props.style]} {...props} />
)

export const Box = (props: CustomViewProps & { noBorder?: boolean }) => (
  <Centered
    style={[
      BaseStyle.box,
      props.noBorder && { borderTopWidth: 0 },
      props.style,
    ]}
    fullWidth
    {...props}
  />
)

export const Grid = (props: CustomViewProps) => (
  <CustomView style={[BaseStyle.grid, props.style]} {...props} />
)

export const GridItem = (props: CustomViewProps) => (
  <Centered style={[BaseStyle.gridItem, props.style]} {...props} />
)

export const BorderBox = (props: CustomViewProps) => (
  <Centered style={[BaseStyle.borderBox, props.style]} {...props} />
)

export const HiddenXS = (props: CustomViewProps) => (
  <CustomView nativeID="hiddenLayoutXS" {...props} />
)

export const VisibleXS = (props: CustomViewProps) => (
  <CustomView nativeID="visibleLayoutXS" {...props} />
)
