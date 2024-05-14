const getAge = function(person) {
  if ("yearOfDeath" in person) {
    return person.yearOfDeath - person.yearOfBirth;
  }
    date = new Date();
    currentYear = date.getFullYear();
    return currentYear - person.yearOfBirth;
}

const findTheOldest = function(people) {
  return people.reduce((oldest, current) => {
    const currentAge = getAge(current);
    const oldestAge = getAge(oldest);
    
    return currentAge > oldestAge ? current : oldest;
  });
};


// Do not edit below this line
module.exports = findTheOldest;
