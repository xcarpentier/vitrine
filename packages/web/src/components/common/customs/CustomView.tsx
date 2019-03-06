import * as React from 'react'
import { FlexStyle, StyleSheet, View } from 'react-native'
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
    paddingBottom: 40,
  },
  mainContainer: {
    width: '100%',
  },
  main: {
    maxWidth: 800,
  },
  box: {
    paddingVertical: 30,
    borderTopWidth: 1,
    borderTopColor: CustomColor.greyLL,
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
})

type CustomViewPropsBase = Omit<View['props'], 'accessibilityRole'> & {
  accessibilityRole?: AccessibilityRole
}

const ViewBase = (View as any) as React.ComponentType<CustomViewPropsBase>

export interface CustomViewProps extends CustomViewPropsBase {
  type?: LayerType
  direction?: LayerDirection
  justify?: FlexStyle['justifyContent']
  align?: FlexStyle['alignItems']
  backgroundColor?: CustomColor
  center?: boolean
  children: React.ReactNode
}

export const CustomView = ({
  type,
  backgroundColor,
  center,
  direction,
  style,
  justify: justifyContent,
  align: alignItems,
  ...props
}: CustomViewProps) => (
  <ViewBase
    style={[
      BaseStyle.defaultStyle,
      backgroundColor && { backgroundColor },
      center && { justifyContent: 'center', alignItems: 'center' },
      type === 'constrained' && BaseStyle.constrained,
      direction && { flexDirection: direction },
      justifyContent && { justifyContent },
      alignItems && { alignItems },
      style,
    ]}
    {...props}
  />
)

export const Centered = (props: CustomViewProps) => (
  <CustomView center {...props} />
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

export const Box = (props: CustomViewProps) => (
  <Centered style={[BaseStyle.box, props.style]} {...props} />
)

export const Grid = (props: CustomViewProps) => (
  <CustomView style={[BaseStyle.grid, props.style]} {...props} />
)

export const GridItem = (props: CustomViewProps) => (
  <Centered style={[BaseStyle.gridItem, props.style]} {...props} />
)
