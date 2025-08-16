import { useState } from "react"
import { GuessumButton } from "@/components/ui/guessum-button"

const Index = () => {
  const [gameAvailable, setGameAvailable] = useState(false)
  const [gameInProgress, setGameInProgress] = useState(false)

  const getFlavorText = () => {
    if (gameInProgress) return "Game in Progress..."
    if (gameAvailable) return "A game is waiting! Jump in!"
    return "The game of outrageous answers and terrible guesses."
  }

  const getButtonText = () => {
    if (gameInProgress) return "Game In Progress"
    if (gameAvailable) return "Join Current Game"
    return "Start New Game"
  }

  const handleButtonClick = () => {
    if (gameInProgress) return
    if (gameAvailable) {
      // Would call games.joinGame() 
      console.log("Joining game...")
    } else {
      // Would call games.startGame()
      console.log("Starting new game...")
    }
  }

  return (
    <div className="min-h-screen dot-pattern flex items-center justify-center p-4">
      <div className="w-full max-w-[600px] text-center space-y-8">
        {/* Logo Area */}
        <div className="mb-8">
          <img 
            src="/lovable-uploads/1ec0ed8e-9f90-495a-9491-d9b092d23c7a.png" 
            alt="Guessum Logo" 
            className="mx-auto w-80 h-auto max-w-full drop-shadow-lg"
          />
        </div>

        {/* Flavor Text */}
        <div className="space-y-4">
          <p className="font-display text-xl md:text-2xl text-secondary leading-relaxed">
            {getFlavorText()}
          </p>
        </div>

        {/* Primary Action Button */}
        <div className="pt-4">
          <GuessumButton
            variant={gameInProgress ? "disabled" : "primary"}
            size="lg"
            onClick={handleButtonClick}
            disabled={gameInProgress}
            className="w-full max-w-sm"
          >
            {getButtonText()}
          </GuessumButton>
        </div>

        {/* Development Controls */}
        <div className="pt-8 space-y-2 border-t border-border">
          <p className="text-sm text-muted-foreground font-body">Development Preview</p>
          <div className="flex flex-wrap gap-2 justify-center">
            <GuessumButton
              variant="outline"
              size="sm"
              onClick={() => {
                setGameAvailable(!gameAvailable)
                setGameInProgress(false)
              }}
            >
              Toggle Game Available
            </GuessumButton>
            <GuessumButton
              variant="outline"
              size="sm"
              onClick={() => {
                setGameInProgress(!gameInProgress)
                setGameAvailable(false)
              }}
            >
              Toggle Game In Progress
            </GuessumButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
