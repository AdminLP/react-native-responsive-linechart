import deepmerge from 'deepmerge'
import React, { useContext } from 'react'
import { Line } from 'react-native-svg'
import ChartContext from './ChartContext'
import { Padding } from './types'

type Props = {
  style?: {
    stroke?: {
      color?: string
      width?: number
    }
    padding?: Padding
  }
}

const VerticalAxis: React.FC<Props> = (props) => {
  const {
    style: { padding, stroke },
  } = deepmerge(defaultProps, props)
  const { data, dimensions } = useContext(ChartContext)

  if (!dimensions) {
    return null
  }

  return (
    <Line
      x1={padding.left}
      y1={padding.top}
      x2={padding.left}
      y2={dimensions.height - padding.bottom - padding.top}
      stroke={stroke.color}
      strokeWidth={stroke.width}
    />
  )
}

export { VerticalAxis }

const defaultProps = {
  style: {
    stroke: {
      color: '#000',
      width: 1,
    },
    padding: { left: 0, right: 0, top: 0, bottom: 0 },
  },
}
