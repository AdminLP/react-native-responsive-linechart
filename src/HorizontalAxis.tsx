import deepmerge from 'deepmerge'
import React, { useContext } from 'react'
import { Line } from 'react-native-svg'
import ChartContext from './ChartContext'
import { Stroke } from './types'
import { scalePointToDimensions } from './utils'
import { calculateTickValues } from './Axis.utils'

type Props = {
  theme?: {
    axis?: {
      visible?: boolean
      stroke?: Stroke
      dy?: number
    }
    ticks?: {
      visible?: boolean
      stroke?: Stroke
      length?: number
      dy?: number
    }
    grid?: {
      visible?: boolean
      stroke?: Stroke
    }
  }
  tickValues?: number[]
  tickCount?: number
}

const HorizontalAxis: React.FC<Props> = (props) => {
  const {
    theme: { axis, ticks, grid },
    tickValues,
    tickCount,
  } = deepmerge(defaultProps, props)

  const { dimensions, domain } = useContext(ChartContext)

  if (!dimensions) {
    return null
  }

  const finalTickValues = calculateTickValues(tickValues, tickCount, domain.x)

  console
  return (
    <>
      {/* Render Axis */}
      {axis.visible && (
        <Line
          x1={0}
          y1={dimensions.height - axis.dy}
          x2={dimensions.width}
          y2={dimensions.height - axis.dy}
          stroke={axis.stroke.color}
          strokeWidth={axis.stroke.width}
          strokeOpacity={axis.stroke.opacity}
        />
      )}
      {finalTickValues.map((value) => {
        return (
          <React.Fragment key={value}>
            {/* Render Grid */}
            {grid.visible && (
              <Line
                key={`grid-${value}`}
                x1={scalePointToDimensions({ x: value, y: 0 }, domain, dimensions).x}
                y1={0}
                x2={scalePointToDimensions({ x: value, y: 0 }, domain, dimensions).x}
                y2={dimensions.height}
                stroke={grid.stroke.color}
                strokeWidth={grid.stroke.width}
                strokeOpacity={grid.stroke.opacity}
              />
            )}
            {/* Render Tick */}
            {ticks.visible && (
              <Line
                key={`tick-${value}`}
                x1={scalePointToDimensions({ x: value, y: 0 }, domain, dimensions).x}
                y1={dimensions.height - ticks.dy}
                x2={scalePointToDimensions({ x: value, y: 0 }, domain, dimensions).x}
                y2={dimensions.height - ticks.dy - ticks.length}
                stroke={ticks.stroke.color}
                strokeWidth={ticks.stroke.width}
                strokeOpacity={ticks.stroke.opacity}
              />
            )}
          </React.Fragment>
        )
      })}
    </>
  )
}

export { HorizontalAxis }

const defaultProps = {
  theme: {
    axis: {
      visible: true,
      stroke: {
        color: '#000',
        width: 1,
        opacity: 1,
      },
      dy: 0,
    },
    grid: {
      visible: true,
      stroke: {
        color: '#ccc',
        width: 1,
        opacity: 1,
      },
    },
    ticks: {
      visible: true,
      stroke: {
        color: '#000',
        width: 1,
        opacity: 1,
      },
      dy: 0,
      length: 6,
    },
  },
}
