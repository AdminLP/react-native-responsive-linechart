---

title: Home
id: home
route: /


---

import { Chart, HorizontalAxis, Area, VerticalAxis, Line, BoxTooltip } from '../../src'

# react-native-responsive-linechart v3

If you are looking for the documentation of version 2, [you can find them here](https://github.com/react-native-community/react-native-svg).
Version 3 is a complete re-write from the ground up, in typescript.

## Installation

`npm install react-native-responsive-linechart` or `yarn add react-native-responsive-linechart`


This lib depends on [react-native-svg](https://github.com/react-native-community/react-native-svg), so make sure that is installed correctly.

## Screenshots

<div style={{ width: '100%',  flexWrap: 'wrap', flexDirection: 'row', display: 'flex'}} >
<Chart
  style={{ height: 200, width: 400}}
  padding={{ left: 40, bottom: 20, right: 20, top: 20 }}
  xDomain={{ min: -2, max: 10 }}
  yDomain={{ min: 0, max: 20 }}
>
  <VerticalAxis
    tickCount={10}
    theme={{ labels: { formatter: (v) => v.toFixed(2) } }}
  />
  <HorizontalAxis  />
  <Line 
    theme={{ stroke: { color: '#e84118', width: 3 } }} 
    data={[
      { x: -2, y: 15 },
      { x: -1, y: 10 },
      { x: 0, y: 12 },
      { x: 5, y: 8 },
      { x: 6, y: 12 },
      { x: 9, y: 13.5 },
      { x: 10, y: 18 },
    ]} 
  />
  <Line 
    theme={{ stroke: { color: '#44bd32', width: 3 } }} 
    data={[
      { x: -2, y: 0 },
      { x: -1, y: 2 },
      { x: 0, y: 7 },
      { x: 2, y: 5 },
      { x: 3, y: 12 },
      { x: 7, y: 16 },
      { x: 9, y: 17 },
      { x: 10, y: 12 },
    ]} 
  />
</Chart>
<Chart
  style={{ height: 200, width: 400 }}
  data={[
    { x: -2, y: 15 },
    { x: -1, y: 10 },
    { x: 0, y: 12 },
    { x: 1, y: 7 },
    { x: 2, y: 6 },
    { x: 3, y: 3 },
    { x: 4, y: 5 },
    { x: 5, y: 8 },
    { x: 6, y: 12 },
    { x: 7, y: 14 },
    { x: 8, y: 12 },
    { x: 9, y: 13.5 },
    { x: 10, y: 10 },
  ]}
  padding={{ left: 40, bottom: 20, right: 20, top: 20 }}
  xDomain={{ min: -2, max: 10 }}
  yDomain={{ min: -4, max: 20 }}
>
  <VerticalAxis tickCount={10} theme={{ labels: { formatter: (v) => v.toFixed(2) } }} />
  <HorizontalAxis tickCount={3} />
  <Area theme={{ gradient: { from: { color: '#44bd32' }, to: { color: '#44bd32', opacity: 0.2 } }}} />
  <Line theme={{ stroke: { color: '#44bd32', width: 10 } }} />
</Chart>
<Chart
  style={{ height: 200, width: 400}}
  padding={{ left: 40, bottom: 20, right: 20, top: 20 }}
  xDomain={{ min: -2, max: 10 }}
  yDomain={{ min: 0, max: 20 }}
>
  <VerticalAxis
    tickCount={10}
    theme={{ labels: { formatter: (v) => v.toFixed(2) } }}
  />
  <HorizontalAxis  />
  <Area 
    theme={{ gradient: { from : { color: '#7f8fa6', opacity: 0.4 }, to : { color: '#7f8fa6' , opacity: 0.4 } } }} 
    data={[
      { x: -2, y: 15 },
      { x: -1, y: 10 },
      { x: 0, y: 12 },
      { x: 5, y: 8 },
      { x: 6, y: 12 },
      { x: 9, y: 13.5 },
      { x: 10, y: 18 },
    ]} 
  />
  <Area 
    theme={{ gradient: { from : { color: '#0097e6', opacity: 0.4 }, to : { color: '#0097e6' , opacity: 0.4 } } }} 
    data={[
      { x: -2, y: 0 },
      { x: -1, y: 2 },
      { x: 0, y: 7 },
      { x: 2, y: 5 },
      { x: 3, y: 12 },
      { x: 7, y: 16 },
      { x: 9, y: 17 },
      { x: 10, y: 12 },
    ]} 
  />
</Chart>
</div>

### Live editor example

For more advanced examples, check out the `Line` and `Area` docs.

<Playground>
<Chart
  style={{ height: 200, width: 400 }}
  data={[
    { x: -2, y: 15 },
    { x: -1, y: 10 },
    { x: 0, y: 12 },
    { x: 1, y: 7 },
    { x: 2, y: 6 },
    { x: 3, y: 8 },
    { x: 4, y: 10 },
    { x: 5, y: 8 },
    { x: 6, y: 12 },
    { x: 7, y: 14 },
    { x: 8, y: 12 },
    { x: 9, y: 13.5 },
    { x: 10, y: 18 },
  ]}
  padding={{ left: 40, bottom: 20, right: 20, top: 20 }}
  xDomain={{ min: -2, max: 10 }}
  yDomain={{ min: 0, max: 20 }}
>
  <VerticalAxis tickCount={11} theme={{ labels: { formatter: (v) => v.toFixed(2) } }} />
  <HorizontalAxis tickCount={5} />
  <Area theme={{ gradient: { from: { color: '#ffa502' }, to: { color: '#ffa502', opacity: 0.4 } }}} />
  <Line theme={{ stroke: { color: '#ffa502', width: 10 } }} />
</Chart>
</Playground>
