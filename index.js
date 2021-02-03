console.log('Team Stats')
const team = {
    _players: [
        {
            firstName: 'Pete',
            lastName: 'Wheeler',
            age: 54
        },
        {
            firstName: 'Lisa',
            lastName: 'Alappat',
            age: 8
        },
        {
            firstName:'Tom',
            lastName: 'Alappat',
            age:5
        }
    ],
    _games: [
        {
            opponent: 'Broncos', 
            teamPoints: 60, 
            opponentPoints: 27
          },
          {
            opponent: 'Broncos', 
            teamPoints: 42, 
            opponentPoints: 27
          },
          {
            opponent: 'Broncos', 
            teamPoints: 70, 
            opponentPoints: 27
          },
    ],
    get players()
    {
        return this._players
    },
    get games()
    {
        return this._games
    },
    addPlayer(firstName,lastName,age)
    {
        let player = {
            firstName: firstName,
            lastName: lastName,
            age: age
        }
        this.players.push(player)
    },
    addGame(oppName,myPoints,oppPoints)
          {
              let game = 
              {
                  opponent: oppName,
                  teamPoints: myPoints,
                  opponentPoints: oppPoints
              }
              this.games.push(game)
          },
}
team.addPlayer('steph', 'Curry', 28)
team.addPlayer('Leo', 'Leslie', 44)
team.addPlayer('Bugs', 'Bunny', 50)

team.addGame('Titans', 100, 98)
team.addGame('Titans', 100, 98)
team.addGame('Titans', 100, 98)

console.log(team)
