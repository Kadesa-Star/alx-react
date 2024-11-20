import Immutable from 'immutable';

/**
 * Filters students with score >= 70 and formats their names
 * @param {Object} grades - The object containing student information.
 */
function printBestStudents(grades) {
  // Using seq to create a sequence and filter students with score >= 70
  const filteredGrades = Immutable.Seq(grades)
    .filter((student) => student.score >= 70)  // Filter students with score >= 70
    .map((student) => ({
      firstName: student.firstName.charAt(0).toUpperCase() + student.firstName.slice(1),
      lastName: student.lastName.charAt(0).toUpperCase() + student.lastName.slice(1),
      score: student.score,
    }));

  // Log the result
  console.log(filteredGrades.toJS());
}

export default printBestStudents;
