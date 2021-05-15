import React from 'react'

export default function Team(props) {
  const teamName = props.teamName
  const logo = props.logo
  const [shotsTaken, setShotsTaken] = React.useState(0)
  const [score, setScore] = React.useState(0)
  const [shootingPercentage, setShootingPercentage] = React.useState(0)

  const shoot = () => {
    setShotsTaken(shotsTaken + 1)
    const shotIsGood = (Math.random() > 0.6)
    if (shotIsGood) {
      setScore(score + 1)
      setShootingPercentage(((score + 1) / (shotsTaken + 1)).toFixed(3))
    } else {
      setShootingPercentage((score / (shotsTaken + 1)).toFixed(3))
    }
  }  

  return (
    <div>
      <h1>{teamName}</h1>
      <img src={logo} alt="" />
      <br/>
      <button onClick={shoot}>Shoot!</button>
      <br/>
      <h3>Shots taken: {shotsTaken}</h3>
      <h3>Score: {score}</h3>
      <h3>Shooting Percentage: {shootingPercentage}</h3>
    </div>
  )
}
