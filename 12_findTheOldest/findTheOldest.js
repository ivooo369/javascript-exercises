const findTheOldest = function (people) {
  return people.reduce((previousPerson, currentPerson) => {
    if (isPreviousPersonOlder(previousPerson, currentPerson)) {
      return previousPerson;
    } else {
      return currentPerson;
    }
  });

  function isPreviousPersonOlder(previousPerson, currentPerson) {
    if (previousPerson.yearOfDeath === undefined) {
      previousPerson.yearOfDeath = new Date().getFullYear();
    }
    if (
      previousPerson.yearOfDeath - previousPerson.yearOfBirth >
      currentPerson.yearOfDeath - currentPerson.yearOfBirth
    ) {
      return true;
    }
  }
};

// Do not edit below this line
module.exports = findTheOldest;
