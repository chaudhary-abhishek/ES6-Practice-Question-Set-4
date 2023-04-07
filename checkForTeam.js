const checkForTeam = (user)=>user.team ? user : ({...user, team: 'A'});

console.log(checkForTeam({firstName:'john', lastName:'Doe', team: 'B'}))