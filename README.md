# gradeCalculationJson
goal: build an OOP class to return the letter grade for a provided build job 
- Data to be provided: Build Number, Total Tests, Passed Tests, Failed Tests, Skipped & Aborted tests
Action Items:
- Determine how you can say what is a passing grade (ex: Passed / (Total - (Skipped + Aborted)) to get % passed from "real" total) (edited) 
- Create an OOP class to return a Letter from the "Letter Grade" system as a JSON object
- 100% Unit Test coverage!
Pass percentage and Grade
100-91:A
90-81: B
80-71: C
< 71 : D
// Input
{
 'buildNumber': '123456',
 'total': 800,
 'passed': 790,
 'failed': 5,
 'skipped': 3,
 'aborted': 2
}
// Output
{
 'buildNumber': '123456',
 'total': 800,
 'passed': 790,
 'failed': 5,
 'skipped': 3,
 'aborted': 2,
 'letterGrade': 'A',
 'grade': '90%'
}