import Player from "./components/Player"

function App() {
  return <main>
    <div id="game-container">
      <lo id="players">
        <Player initialName="Player 1" symbol="X" />
        <Player initialName="Player 2" symbol="O" />
      </lo>
    </div>
  </main>
}

export default App
