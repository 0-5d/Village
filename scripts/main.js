let userName = document.getElementById("userName");

userName.addEventListener("keyup", function(event){
  if (event.keyCode == 13){
    event.preventDefault();
    document.getElementById("userNameButton").click()
  }
})


document.getElementById('userNameButton').onclick = function yeee() {

  console.log('ooh')
  document.getElementById('userName').style.display = 'none'
  document.getElementById('welcome').style.display = 'block'
  document.getElementById('welcome').innerHTML = 'Welcome ' + userName.value
}

yearAdder.addEventListener("keyup", function(event){
  if (event.keyCode == 13){
    event.preventDefault();
    document.getElementById("yearAdderButton").click()
  }
})

nono = false
nonoList = []
people = parseInt(people)
tempPeople = availablePeople // a variable to show the value of people while we make changes to it that we may not want to apply if there are any errors in user input

document.getElementById('yearAdderButton').onclick = function letsGetGroovin(){
  if (isNaN(document.getElementById('yearAdderButton').value)) {
    
  }
  if (parseInt(document.getElementById('lumberJackAdder').value) > parseInt(tempPeople)){
    nono = true
    nonoList.push('too many lumber jacks not enough people')
  } else{

    tempPeople -= parseInt(document.getElementById('lumberJackAdder').value)

  }
  if (parseInt(document.getElementById('houseBuilderAdder').value) > tempPeople){
    nono = true
    nonoList.push('too many house builders not enough people')
  } else{
    tempPeople -= parseInt(document.getElementById('houseBuilderAdder').value)
    }
  if (parseInt(document.getElementById('fuckerAdder').value) > tempPeople){
    nono = true
    nonoList.push('too many fuckers not enough people')
  } else{
    tempPeople -= parseInt(document.getElementById('fuckerAdder').value)
  }
  if (nono == true){
    document.getElementById('nonos').innerHTML = 'uh oh you got some nonos: ' + nonoList
  } else {

    availablePeople = tempPeople
    //the bit of code that shows us how many available people we have after subtracting the users input into the different jobs
    lumberJacks += parseInt(document.getElementById('lumberJackAdder').value)
    document.getElementById('lumberJacksShower').innerHTML = 'lumber jacks: ' + lumberJacks
    houseBuilders += parseInt(document.getElementById('houseBuilderAdder').value)
    document.getElementById('houseBuildersShower').innerHTML = 'house builders: ' + houseBuilders
    peopleMakers += parseInt(document.getElementById('fuckerAdder').value)
    document.getElementById('peopleMakerShower').innerHTML = 'people makers: ' + peopleMakers
    document.getElementById('availablePeopleShower').innerHTML = 'available people: ' + availablePeople

    lumber += lumberJacks * 36500 * parseInt(document.getElementById('yearAdder').value)
    //gives us lumber after a certain ammount of years
    document.getElementById('lumberShower').innerHTML = 'lumber: ' + parseInt((parseInt(document.getElementById('yearAdder').value) * parseInt(lumberJacks) * 36500))
    i = 0
    while (true){
      if (lumber >= 100 && houseBuilders >= 1 && i < parseInt(document.getElementById('yearAdder').value)){
        lumber -= 100
        availableHouses += 2
        houses += 2
        i += 1
      } else {
        i = 0
        break
      }
    }
    while (true){
      if (availableHouses >= 1 && peopleMakers >= 2 && i < parseInt(document.getElementById('yearAdder').value)){
        people += 1
        availablePeople += 1
        availableHouses -= 1
        i += 1
      } else{
        break
      }
    }
    document.getElementById('peopleShower').innerHTML = 'people: ' + people
    document.getElementById('availablePeopleShower').innerHTML = 'available people: ' + availablePeople
    document.getElementById('lumberShower').innerHTML = 'lumber: ' + lumber
    document.getElementById('housesShower').innerHTML = 'houses' + houses
    document.getElementById('availableHousesShower').innerHTML = 'available houses: ' + availableHouses

  }


}
