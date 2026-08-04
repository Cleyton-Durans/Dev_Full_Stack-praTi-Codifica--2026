import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import NewsCard from './NewsCard'

describe('NewsCard', () => {
    it('mostrar categoria e o titulo recebidos por props', () => {
        render(
            <MemoryRouter>
                <NewsCard id={1} categoria="Cidade" titulo="Metro terá horário estendido"
                />
            </MemoryRouter>
        )

        expect(screen.getByText('Cidade')).toBeInTheDocument()
        expect(screen.getByText('Metro terá horário estendido')).toBeInTheDocument()
    })  
})