import React from 'react'

import Team from './Team'

export default function Game(props) {
  const venue = props.venue
  const firstTeamName = props.firstTeamName
  const firstTeamLogo = props.firstTeamLogo
  const secondTeamName = props.secondTeamName
  const secondTeamLogo = props.secondTeamLogo

  return (
    <div>
      <h1>Welcome to {venue}</h1>
      <div>
        <Team teamName={firstTeamName} logo={firstTeamLogo}/>
        <Team teamName={secondTeamName} logo={secondTeamLogo}/>
      </div>
    </div>
  )
}
