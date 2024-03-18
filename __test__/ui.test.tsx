import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TilleHome } from '@/components/atom/title/titleHome'

test('UI Title', () => {
  render(
    <>
      <TilleHome type='h1'>
        Tops Peliculas
      </TilleHome>

      <TilleHome type='h2'>
        Tops Peliculas1
      </TilleHome>

      <TilleHome type='h3'>
        Tops Peliculas2
      </TilleHome>
    </>
  )
  expect(screen.getByRole('heading', { level: 1, name: 'Tops Peliculas' })).toBeDefined()
  expect(screen.getByRole('heading', { level: 2, name: 'Tops Peliculas1' })).toBeDefined()
  expect(screen.getByRole('heading', { level: 3, name: 'Tops Peliculas2' })).toBeDefined()
});