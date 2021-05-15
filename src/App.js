import React from 'react'

import Game from './components/Game'

export default function App() {
    return (
        <div>
            <Game venue={"Texas Stadium"} 
            firstTeamName={'San Antonio Spurs'} firstTeamLogo={'https://assets-sports.thescore.com/basketball/team/25/logo.png'} 
            secondTeamName={'Dallas Mavericks'} secondTeamLogo={'https://www.mavs.com/wp-content/uploads/2019/09/Logo_Release.png'}
            />
        </div>
    )
}
