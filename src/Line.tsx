import deepmerge from 'deepmerge'
import * as React from 'react'
import { Path, Circle } from 'react-native-svg'

import ChartContext from './ChartContext'
import { adjustPointsForThickStroke, calculateTooltipIndex } from './Line.utils'
import { ChartDataPoint, Smoothing, Stroke } from './types'
import { scalePointsToDimensions, svgPath } from './utils'

type Props = {
  /** Theme for the line */
  theme?: {
    stroke?: Stroke
  }
  smoothing?: Smoothing
  /** Only works in combination with smoothing='bezier'. Value between 0 and 1. */
  tension?: number
  /** Component to render tooltips. An example component is included: <BoxTooltip />. */
  tooltipComponent?: JSX.Element
  /** Data for the chart. Overrides optional data provided in `<Chart />`. */
  data?: ChartDataPoint[]
}

const Line: React.FC<Props> = (props) => {
  const { data: contextData, dimensions, domain, lastTouch } = React.useContext(ChartContext)

  const {
    theme: { stroke, points },
    tooltipComponent,
    data = contextData,
    tension,
    smoothing,
  } = deepmerge(defaultProps, props)

  if (!dimensions) {
    return null
  }

  const scaledPoints = scalePointsToDimensions(data, domain, dimensions)
  const tooltipIndex = calculateTooltipIndex(scaledPoints, lastTouch)
  const adjustedPoints = adjustPointsForThickStroke(scaledPoints, stroke)

  const pointsWithinDimensions = adjustedPoints.filter((p) => p.x >= 0 && p.x <= dimensions.width)

  const path = svgPath(pointsWithinDimensions, smoothing, tension)

  return (
    <React.Fragment>
      <Path d={path} fill="none" strokeLinecap="round" stroke={stroke.color} strokeWidth={stroke.width} strokeOpacity={stroke.opacity}></Path>
      {pointsWithinDimensions.map((p, index) => (
        <Circle key={`x${p.x}, y${p.y}`} cx={p.x} cy={p.y} r={points.radius} fill={tooltipIndex === index ? points.selectedColor : points.color} />
      ))}

      {tooltipIndex !== undefined &&
        tooltipComponent &&
        React.cloneElement(tooltipComponent, { value: data[tooltipIndex], position: scaledPoints[tooltipIndex] })}
    </React.Fragment>
  )
}

export { Line }

const defaultProps = {
  theme: {
    points: {
      color: 'black',
      selectedColor: 'red',
      radius: 5,
    },
    stroke: {
      color: 'black',
      width: 1,
      opacity: 1,
    },
  },
  tension: 0.3,
  smoothing: 'none',
}
