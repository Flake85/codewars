// https://www.codewars.com/kata/53af2b8861023f1d88000832

function areYouPlayingBanjo(name) {
  return name[0].match(/[r]/gi) ? name + " plays banjo" : name + " does not play banjo"
}
