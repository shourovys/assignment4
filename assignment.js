function feetToMile(feet = 0) {
    if (typeof feet === 'number' && !(feet <= 0)) {     
      const mile = feet / 5280
      return mile
    } 
    else {
        return 'please pass a valid value'
    }
}
const result1 = feetToMile(1)
console.log(result1);




function woodCalculator(chair = 0, table = 0, bed = 0) {
    if (typeof chair === 'number' && typeof table === 'number' && typeof bed === 'number') {
        const totalWood = chair * 1 + table * 3 + bed * 5
        return totalWood
    } else {
        return 'please pass a valid value'
    }
}

const chair = 1
const table = 1
const bed = 1
const result2 = woodCalculator(chair, table, bed)
console.log(result2);




function brickCalculator(floor) {
    if (typeof floor === 'number' && !(floor <= 0)) {
        const brickForFeet = 1000
        let brickNeededFor1st10 = 0
        let brickNeeded2nd10 = 0
        let brickNeeded3rd = 0
        for (let i = 1; i <= floor; i++) {
            if (i <= 10) {
                brickNeededFor1st10 = i * 15 * brickForFeet
            }
            else if (i <= 20) {
                brickNeeded2nd10 = i * 12 * brickForFeet
            }
            else {
                brickNeeded3rd = i * 10 * brickForFeet
            }
        }
        return (brickNeededFor1st10+brickNeeded2nd10+ brickNeeded3rd)
    }
    else {
        return 'please pass a valid value'
    }
}
const result3 = brickCalculator(19)
console.log(result3);




const friendsName = ['mama', 'caca', 'mamo', 'pagla', 'amit', 'ak', 'sohel']

function tinyFriend(friends) {
    if (Array.isArray(friends) && friends.length > 0) {
        let tinyName = friends[0]
        friends.map(name => {
            if (name.length < tinyName.length) {
                tinyName = name
            }
        })
        return tinyName
    }
    else {
        return 'please pass a valid array'
    }
}

const result4 = tinyFriend(friendsName)
console.log(result4);
