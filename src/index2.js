
const { gradeSystem2 } = require('./gradeSystem2.js');
let Json_job= {
    'buildNumber': '123456',
    'total': 800,
    'passed': 790,
    'failed': 5,
    'skipped': 3,
    'aborted': 2
   }
let gradeSystem= new gradeSystem2();
console.log(gradeSystem.calculateBuildGrade(Json_job));
