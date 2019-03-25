
/*
//1. Data types
// A light switch that can be either on or off.
boolean
// A user's email address.
string
// A spaceship with a hull, laser blasters, tractor beam, and warp drive.
objects
// A list of student names from our class.
array,object
// A list of student names from our class, each with a location.
array,object
// A list of student names from our class, each with a location and each with a list of favorite tv shows.
array,object
*/
/*
//2. Take it Easy
// Make an array that holds all of the colors of the rainbow.
colors=['red','orange','yellow','green','blue','indigo','violet']
console.log(colors)
// Write code that will access "blue" from the rainbow array.
colors[4]
// Make an object that is called your name and holds the information about your favorite food, a hobby, 
//the name of the town that you live in currently, and your favorite datatype.
const dominic={
    food:'sushi',
    hobby:'video games',
    town:'Los Angeles',
    datatype:'objects'
}
// Write code that will access your hobby from the object that you just created.
console.log(dominic.hobby)
*/
/*
//3. Crazy Object!

const crazyObject = {
    taco: [
      {
        meat: 'steak',
        cheese: ['panela', 'queso', 'chihuahua']
      },
      {
        meat: 'chicken',
        salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]
      },
    ],
    larry: {
      nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
      quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
      characters: [
        {
          name: "Jeff",
          occupation: "manager"
        },
        {
          name: "funkhauser",
          occupation: "tv dude"
        },
        {
          name: "susie",
          occupation: "jeffs wife",
          favourtieHobby: "Swearing at Larry and Jeff"
        },
      ]
    }
  }

// "omg my mouth is burning"
console.log(crazyObject.taco[1].salsa[5])
// "Pretty pretty prettayyyyy good"
console.log(crazyObject.larry.quotes[0])
// "Swearing at Larry and Jeff"
console.log(crazyObject.larry.characters[2].favourtieHobby)
// "Chicken Teriyaki Boyyyyyy"
console.log(crazyObject.larry.nicknames[1])
// The object the contains the name funkhauser
console.log(crazyObject.larry.characters[1].name)

*/
//4. Object-ception
const inception = {
   reality: {
       dreamLayer1: {
           dreamLayer2: {
               dreamLayer3: {
                   dreamLayer4: {
                       dreamLayer5: {
                           dreamLayer6: {
                               limbo: "Joseph Gordon Levitt"
                          }
                       }
                   }
               }
           }
       }
   }
}
//Change the value of limbo to null.
inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo=null
console.log(inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo)
