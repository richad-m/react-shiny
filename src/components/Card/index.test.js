import Card from './'
import { render, screen, fireEvent } from '@testing-library/react'
import { ThemeProvider } from '../../utils/context'

describe('Card', () => {
  test('Should render title and image', async () => {
    render(
      <ThemeProvider>
        <Card title="Harry Potter" label="Magicien frontend" />
      </ThemeProvider>
    )
    const cardTitle = screen.getByText(/Harry/i)
    expect(cardTitle.textContent).toBe('Harry Potter')
  })
})
