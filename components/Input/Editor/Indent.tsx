import { Quill } from "react-quill";

const Parchment = Quill.import("parchment")
const pixelLevels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
const TAB_MULTIPLIER = 30

class IndentAttributor extends (Parchment.Attributor.Style as { 
  new(formatName: any, styleProperty: any, attributorOptions: any): any;}) {
  constructor(formatName: any, styleProperty: any, attributorOptions: any) {
    super(formatName, styleProperty, attributorOptions)
  }

  public add(node: HTMLElement, value: string): boolean {
    return super.add(node, `${+value * TAB_MULTIPLIER}px`)
  }

  public value(node: HTMLElement): number | undefined {
    return parseFloat(super.value(node)) / TAB_MULTIPLIER || undefined // Don't return NaN
  }
}

export const IndentStyle = new IndentAttributor("indent", "margin-left", {
  scope: Parchment.Scope.BLOCK,
  whitelist: pixelLevels.map(value => `${value * TAB_MULTIPLIER}px`),
})