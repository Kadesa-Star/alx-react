// schema/courses.js
import { normalize, schema } from 'normalizr';

// Define schema for course
const course = new schema.Entity('courses');

// Normalize function for courses
export const coursesNormalizer = (data) => normalize(data, [course]).entities;

export { course };
