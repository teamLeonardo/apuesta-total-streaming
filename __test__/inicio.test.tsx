import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Page from '@/app/(client)/inicio/page'
 
test('Page Cliente', () => {
  render(<Page />)
  expect(screen.getByRole('heading', { level: 1, name: 'Home' })).toBeDefined()
})