// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  let totalBirds = 0; //le nombre total d'oiseaux 
  for (let i = 0; i < birdsPerDay.length; i++) {
    totalBirds += birdsPerDay[i]
  }
  return totalBirds
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
    let totalBirds = 0; //le nombre total d'oiseaux
    let lastPosition = week * 7 //le dernier jour de la semaine donnée
  for (let i = lastPosition - 7; i < lastPosition; i++) {
    totalBirds += birdsPerDay[i]
  }
  return totalBirds
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {void} should not return anything
 */
export function fixBirdCountLog(birdsPerDay) {
  for (let i = 0; i < birdsPerDay.length; i++) {
    if(i % 2 == 0){
      birdsPerDay[i] += 1
    }
  }
}
