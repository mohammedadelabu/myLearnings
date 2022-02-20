// import mongoose from "mongoose";

// const CourseSchema = new mongoose.Schema(
//   {
//     name: { type: String, required: true },
//     author: { type: String, required: true },
//     tags: { type: Array, required: true },
//     date: { type: Date, default: Date.now },
//     isPublished: { type: Boolean },
//   },
//   { timestamps: true }
// );

// const Course = mongoose.model("Course", CourseSchema);

// async function createCourse() {
//   const course = new Course({
//     name: "Node.js Course",
//     author: "Emperor",
//     tags: ["node", "backend"],
//     isPublished: true,
//   });

//   const result = await course.save();
//   console.log(result);
// }
// createCourse();

// async function getCourses() {
//     // eq (equal)                       lt (lesser than)
//     // ne (not equal)                   lte(lesser than or equal to)
//     // gt (greater than)                in
//     // gte (greater than or equal to)   nin (not in)
//     // or                               and

//   const courses = await Course
// //   .find({ author: "Mosh", isPublished: true })
// //   .find({ price: {$gte: 10, $lte: 20 } }) //find price that's >= 10 but <= 20 
// //   .find({ price: {$in: [10, 15, 20] } }) //find and compare price that's 10, 15 or 20
// //   .find({ author: /^Mosh/ }) // Starts with Mosh 
// //   .find({ author: /Hamedani$/i }) // Ends with Hamedani. i means case insensitive
// //   .find({ author: /.*Mosh.*/i }) // Mosh is anywhere. .* means any characters can be at d front or back.
//   .find()  
//   .or([ { author: 'Mosh' }, { isPublished: true } ])
//   .and([{ author: 'Mosh' }, { isPublished: true }])
//   .limit(10)
//   .sort({ name: 1 })
//   .select({ name: 1, tags: 1 }); // .count() for counting the num of docs in replace of select
//   console.log(courses);
// }
// getCourses();


// // PAGINATION
// // /api/courses?pageNumber=2&pageSize=10

// async function practCourses() {
//     const pageNumber = 2;
//     const pageSize = 10;

//     const cou = await Course
//       .find({ author: "Mosh", isPublished: true })
//       .skip((pageNumber - 1) * pageSize)
//       .limit(pageSize)
//       .sort({ name: 1 })
//       .select({ name: 1, tags: 1 })
//       console.log(cou);
// }
// practCourses();

// module.exports = mongoose.model("Course", CourseSchema);

let a = 0.1;
let b = 0.2;
console.log(a+b);

const result = Math.abs(0.2 + 0.1);
console.log(result);
console.log(result < Number.EPSILON);


[function SJF(jobs, index) {
    const obj = jobs.map((t, i) => ({
      i, t,
    })).sort((a, b) => a.t - b.t);
  
    let result = 0;
    for (const v of obj) {
      result += v.t;
      if (v.i === index)
        break;
    }
    return result;
  }]

//

  [function longestSubstringWithoutDuplication(string) {
    let newCharacters = string.split('');
    let latestCharacters;
    let emptyString = "";
    let longestStr = "";
    let hash = {};
    for (let i = 0; i < newCharacters.length; i++) {
        latestCharacters = newCharacters[i];
        if (!hash[newCharacters[i]]) { 
            emptyString += latestCharacters; 
        hash[newCharacters[i]] = {index:i};
    } else {
    
        if(longestStr.length <= emptyString.length) {
            longestStr = emptyString;
        }
        let old = hash[latestCharacters].index;
        let strFromPrevDupe = string.substring(old + 1, i);
        emptyString = strFromPrevDupe + latestCharacters;
        hash = {};
        for (let j = old + 1; j <= i; j++) {
            hash[string.charAt(j)] = {index:j};
        }
      }
  }
  return longestStr.length > emptyString.length ? longestStr : emptyString;
}]