# svg-scroll-animation

> scroll animation with svg

[![NPM](https://img.shields.io/npm/v/svg-scroll-animation.svg)](https://www.npmjs.com/package/svg-scroll-animation) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save svg-scroll-animation
```

## Usage

```tsx
import React, { Component } from 'react'

import AnimationSvg from 'svg-scroll-animation'
import 'svg-scroll-animation/dist/index.css'
import { data } from './data'

class Example extends Component {
  render() {
    return <AnimationSvg height={'1000vh'} data={data} />
  }
}
```

## License

MIT © [phinv90](https://github.com/phinv90)
