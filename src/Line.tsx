import deepmerge from 'deepmerge'
import React, { useContext } from 'react'
import { Polyline } from 'react-native-svg'
import ChartContext from './ChartContext'
import { adjustPointsForThickStroke, calculateTooltipIndex } from './Line.utils'
import { ChartDataPoint, Stroke } from './types'
import { formatDataForSVG, scalePointsToDimensions } from './utils'

type Props = {
  theme?: {
    stroke?: Stroke
  }
  data?: ChartDataPoint[]
}

const Line: React.FC<Props> = (props) => {
  const { data: contextData, dimensions, domain, lastTouch } = useContext(ChartContext)

  const {
    theme: { stroke },
    data = contextData,
  } = deepmerge(defaultProps, props)

  if (!dimensions) {
    return null
  }

  const scaledPoints = scalePointsToDimensions(data, domain, dimensions)
  const tooltipIndex = calculateTooltipIndex(scaledPoints, lastTouch)

  const points = adjustPointsForThickStroke(scaledPoints, stroke)

  return (
    <Polyline
      fill="none"
      strokeLinecap="round"
      points={formatDataForSVG(points)}
      x={0}
      stroke={stroke.color}
      strokeWidth={stroke.width}
      strokeOpacity={stroke.opacity}
    />
  )
}

export { Line }

const defaultProps = {
  theme: {
    stroke: {
      color: 'black',
      width: 1,
      opacity: 1,
    },
  },
}
