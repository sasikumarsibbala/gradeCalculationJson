const{gradeSystem}=require('../src/gradeSystem.js')
let gradeB= {
    'buildNumber': '123456',
    'total': 1000,
    'passed': 450,
    'failed': 40,
    'skipped': 63,
    'aborted': 17
   }
let gradeSystem2= new gradeSystem(gradeB);
console.log(gradeSystem2.calculateBuildGrade());



