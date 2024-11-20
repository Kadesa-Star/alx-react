import Immutable from 'immutable';

/**
 * Filters students with a score > 70 and capitalizes the first letter
 * of their first and last names. Then logs the result.
 *
 * @param {Object} students - An object of students with score and name details
 */
function printBestStudents(students) {
  const capFirstLetter = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  // Convert the plain object into an Immutable.js sequence
  const mySeq = Immutable.Seq(students);

  // Filter students with score > 70 and capitalize their first and last names
  const filtered = mySeq
    .filter((student) => student.score > 70)
    .map((student) => ({
      ...student,
      firstName: capFirstLetter(student.firstName),
      lastName: capFirstLetter(student.lastName),
    }));

  // Convert back to a plain JS object and log the result
  console.log(filtered.toJS());
}

export default printBestStudents;
