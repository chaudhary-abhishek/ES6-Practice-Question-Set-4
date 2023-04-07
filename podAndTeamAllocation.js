const userData = {firstName:'John', lastName:'Doe'};

const podAndTeamAllocation = (user)=>({...user, teamId:'123456'});

console.log(podAndTeamAllocation(userData));