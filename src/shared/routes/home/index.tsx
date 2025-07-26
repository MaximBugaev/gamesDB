import { Main } from '@/project/home/components/main/main'
import { MainHeader } from '@/shared/components/mainHeader/mainHeader'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/home/')({
  validateSearch: (raw: {
    'search'?: string
    'sort-type'?: string
  }) => ({
    'search': raw['search']  || '',
    'sort-type': raw['sort-type']
  }),
  component: HomeComponent,
})

function HomeComponent() {
  return (
    <>
      <MainHeader />
      <Main />
    </>
  )
}