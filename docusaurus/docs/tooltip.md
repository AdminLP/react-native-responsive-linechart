---

title: Tooltip
id: tooltip
route: /tooltip

---

import { Chart, HorizontalAxis, Area, VerticalAxis, Line, BoxTooltip } from 'react-native-responsive-linechart'

Tooltips can only be used in combination with a Line component.
**This library provides one example tooltip component `BoxTooltip`**. For advanced styling, it is recommended to implement your own Tooltip component.

## BoxTooltip Props
| Prop        | Type | Required | Description
| ----------- | ----------- | ------------- | ------ |
| `theme`   | Defined below        | No | Theme for the line.  |


### BoxTooltip default theme
Any part of this theme can be overridden through the `theme` prop.

```json
{
  label: {
    color: 'white',
    fontSize: 12,
    fontWeight: 700,
    textAnchor: 'middle',
    opacity: 1,
    dx: 0,
    dy: 16.5,
  },
  box: {
    width: 30,
    height: 20,
    dx: 0,
    dy: 20,
    rx: 4,
    color: 'black',
  },
  formatter: (v: ChartDataPoint) => String(v.y),
},
```

## Creating your own Tooltip

Your tooltip component will be provided with the following props:

| Prop        | Type | Description
| ----------- | ----------- | ------------- | ------ |
| `value`      | `{ x: number, y: number, meta?: any }` | The value that the tooltip should represent.  |
| `position`   | `{ x: number, y: number }` | The exact position of the data point on the chart. You can offset your component from this position. Check out the source of `BoxTooltip` for an example.  |

You can then simply substitute `<BoxTooltip />` with your own component in the `tooltipComponent` prop!

## Example

Be advised this doesn't work in the browser, but it will work in an app!

<Chart
  style={{ height: 200, width: 400, marginBottom: 40 }}
  data={[
    { x: -2, y: 5 },
    { x: -1, y: 10 },
    { x: 0, y: 12 },
    { x: 4, y: 11 },
    { x: 8, y: 12 },
    { x: 9, y: 13.5 },
    { x: 10, y: 18 },
  ]}
  padding={{ left: 40, bottom: 20, right: 20, top: 20 }}
  yDomain={{ min: 0, max: 20 }}
>
  <VerticalAxis
    tickCount={5}
  />
  <HorizontalAxis tickCount={3} />
  <Line theme={{ stroke: { color: '#c0392b', width: 4 } }} tooltipComponent={<BoxTooltip theme={{ box: { width: 35 } }} />} />
</Chart>

```jsx
<Chart
  style={{ height: 200, width: 400 }}
  data={[
    { x: -2, y: 5 },
    { x: -1, y: 10 },
    { x: 0, y: 12 },
    { x: 4, y: 11 },
    { x: 8, y: 12 },
    { x: 9, y: 13.5 },
    { x: 10, y: 18 },
  ]}
  padding={{ left: 40, bottom: 20, right: 20, top: 20 }}
  yDomain={{ min: 0, max: 20 }}
>
  <VerticalAxis
    tickCount={5}
  />
  <HorizontalAxis tickCount={3} />
  <Line theme={{ stroke: { color: '#c0392b', width: 4 } }} tooltipComponent={<BoxTooltip theme={{ box: { width: 35 } }} />} />
</Chart>
```
