/// <reference lib="dom" />

import {test, expect} from 'bun:test';


import React from 'react'

import { describe, test, expect, mock } from 'bun:test'
import { render, fireEvent } from '@testing-library/react'
import { Text } from './react-text.tsx'

describe('should test react-text component', () => {
  test(':default', () => {
    const text = <Text>Hello World</Text>
    const { container } = render(text)
    expect(container.querySelector('span')?.className).toEqual(
      'button medium',
    )
  })
})
