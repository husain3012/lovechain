interface IUser {
  name:string,
    genderID: number, 
    interestID: number,
    age: number,
    bio: string,
    locationID: number,
}
export const DummyUsers :IUser[]= [
  {
    name: "Boii",
    genderID: 0, 
    interestID: 1,
    age: 20,
    bio: "Me a dude",
    locationID: 111,
  },
  {
    name: "Gurll",
    genderID: 1,
    interestID: 0,
    age: 20,
    bio: "Me a cutie",
    locationID: 111,
  },
  {
    name: "Gurll 2",
    genderID: 1,
    interestID: 1,
    age: 24,
    bio: "Me a gay",
    locationID: 111,
  },
  {
    name: "Gurll Far",
    genderID: 1,
    interestID: 1,
    age: 20,
    bio: "Me a cutie from afar",
    locationID: 112,
  },
  {
    name: "Boii 2",
    genderID: 0,
    interestID: 0,
    age: 20,
    bio: "Me a gay",
    locationID: 111,
  },
  {
    name: "SDHUA ",
    genderID: 1,
    interestID: 2,
    age: 20,
    bio: "Me a bi",
    locationID: 111,
  },
  {
    name: "Girl Bi",
    genderID: 1,
    interestID: 2,
    age: 20,
    bio: "Me a bi",
    locationID: 111,
  },
];


export const getExpectedMatches = (idx:number) =>{
  let matches :IUser[]=[];
  const acct = DummyUsers[idx];
  DummyUsers.forEach((user,i) =>{
    if(i!=idx){
      if((acct.interestID==2 &&  (user.interestID==2 || user.interestID==acct.genderID) ) || (user.genderID==acct.interestID && user.interestID==acct.genderID)){
        matches.push(user)
      }
    }
  })
  return matches;


}