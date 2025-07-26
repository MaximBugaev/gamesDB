import { GamePage } from '@/shared/components/gamePage/gamePage'
import { MainHeader } from '@/shared/components/mainHeader/mainHeader'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/game-details/$gameId')({
  component: GameDetailsComponent,
})

function GameDetailsComponent() {
  return (
    <>
      <MainHeader />
      <GamePage />
    </>
  )
}
