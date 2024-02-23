import React from 'react'

import { describe, test, expect, mock } from 'bun:test'
import { render, fireEvent } from '@testing-library/react'
import { Text } from './react-text.tsx'

describe('should test react-text component', () => {
  test(':default', () => {
    const text  = <Text text="Hello World"/>
    const { container, debug } = render(text)
    
    expect(container.querySelector('span').innerHTML).toEqual(
      'Hello World',
    )
  })
})
