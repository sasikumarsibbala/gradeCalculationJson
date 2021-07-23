const assert =require('assert');
const { expect } = require('chai');
const{gradeSystem}=require('../src/gradeSystem.js')


   


describe("PercentageCalculation And Grade",()=>{
https://github.com/sasikumarsibbala/gradeCalculationJson/blob/main/test/gradeSystem.spec.js
    it("The percentage is between 90 and 100",() =>{
        
        let gradeA= {
            'buildNumber': '123456',
            'total':800,
            'passed': 790,
            'failed': 5,
            'skipped': 3,
            'aborted': 2
        }
        var gradeSystem1= new gradeSystem(gradeA);

        var result= gradeSystem1.calculateBuildGrade();
        
        assert(result == 'A',"percentage is not A grade");

    });
    it("The percentage is between 80 and 90",() =>{
        
       var gradeB= {
            'buildNumber': '123456',
            'total': 900,
            'passed': 750,
            'failed': 50,
            'skipped': 3,
            'aborted': 2
        }
        let gradeSystem1= new gradeSystem(gradeB);

        var result= gradeSystem1.calculateBuildGrade();
        assert(result == 'B',"percentage is not B grade");


    });
    it("The percentage is between 70 and 80",() =>{
        var gradeC= {
            'buildNumber': '123456',
            'total': 900,
            'passed': 650,
            'failed': 20,
            'skipped': 13,
            'aborted': 23
        }
        var gradeSystem1= new gradeSystem(gradeC);
       
        var result=gradeSystem1.calculateBuildGrade();

        assert(result == 'C',"percentage is not C grade");

    });
    it("The percentage is between 60 and 70",() =>{
        var gradeD= {
            'buildNumber': '123456',
            'total': 1000,
            'passed': 650,
            'failed': 40,
            'skipped': 23,
            'aborted': 13
        }
        var gradeSystem1= new gradeSystem(gradeD);

        var result= gradeSystem1.calculateBuildGrade();

        assert(result== 'D',"percentage is not D grade");

    });
    it("The percentage is between 0 and 60 ",() =>{
        var  gradeF= {
            'buildNumber': '123456',
            'total': 1000,
            'passed': 450,
            'failed': 40,
            'skipped': 63,
            'aborted': 17
        }
        var gradeSystem1= new gradeSystem(gradeF);

        var result= gradeSystem1.calculateBuildGrade();

        assert(result== 'F',"percentage is not F grade");

    });
    it("Total No of testcases are less than zero",()=>{
        var gradeInvalid1= {
            'buildNumber': '123456',
            'total': -2,
            'passed': 450,
            'failed': 40,
            'skipped': 63,
            'aborted': 17
        }
        var  gradeSystem1= new gradeSystem(gradeInvalid1);
        
        var result= gradeSystem1.calculateBuildGrade();

        assert(result!='Invalid Data ',"total testCases are not less than 0");
    });
    it("When the passed test case is negative",()=>{
        var gradeInvalid2= {
            'buildNumber': '123456',
            'total': 100,
            'passed': -450,
            'failed': 40,
            'skipped': 63,
            'aborted': 17
        }
        var gradeSystem1= new gradeSystem(gradeInvalid2);

        var result= gradeSystem1.calculateBuildGrade();

        assert(result!='Invalid Data ',"passed test cases are not less than 0");
        
    });
    it("When the failed test cases are less than 0",()=>{
        var gradeInvalid3= {
            'buildNumber': '123456',
            'total': 0,
            'passed': 450,
            'failed': -40,
            'skipped': 63,
            'aborted': 17
        }
        var gradeSystem1= new gradeSystem(gradeInvalid3);

        var result= gradeSystem1.calculateBuildGrade();

        assert(result!=="Invalid Data ","failed test cases are not less than 0");
    });
    it("when skipped test cases are not less than 0",()=>{
        var gradeInvalid4= {
            'buildNumber': '123456',
            'total': 150,
            'passed': 100,
            'failed': 0,
            'skipped': -20,
            'aborted': 80
        }
        var gradeSystem1= new gradeSystem(gradeInvalid4);

        var result= gradeSystem1.calculateBuildGrade();

        assert(result!=="Invalid Data","skipped test cases are not less than 0");

    });
    
    it("when aborted test cases are not less than 0",()=>{
        var  gradeInvalid5= {
            'buildNumber': '123456',
            'total': 1000,
            'passed': 600,
            'failed': 10,
            'skipped': 1200,
            'aborted': -4
           }
        var gradeSystem1= new gradeSystem(gradeInvalid5);

        var result= gradeSystem1.calculateBuildGrade();

        assert(result!=="Invalid data","aborted test cases are not less than 0");
        
    });
    
    it("when passed test cases are not greater than to  total test cases",()=>{
            var  gradeInvalid5= 
        {
            'buildNumber': '123456',
            'total': 100,
            'passed': 600,
            'failed': 1200,
            'skipped': 24,
            'aborted': 19
           }
        var gradeSystem1= new gradeSystem(gradeInvalid5);
        
        var result= gradeSystem1.calculateBuildGrade();
       
        assert(result!=="Invalid data","passed test cases are not greater than to  total test cases");
    });
    it("when total skipped test cases are not greater than total  test cases",()=>{
        var  gradeInvalid6= {
            'buildNumber': '123456',
            'total': 100,
            'passed': 60,
            'failed': 12,
            'skipped': 204,
            'aborted': 19
        }
        var gradeSystem1= new gradeSystem(gradeInvalid6);

        var result= gradeSystem1.calculateBuildGrade();
        
        assert(result!="invalid Data","total skipped test cases are not greater than total  test cases");
    });
   
    it("when all values are zero",()=>{
        var  gradeInvalid8= {
            'buildNumber': '123456',
            'total': 0,
            'passed': 0,
            'failed': 0,
            'skipped': 0,
            'aborted': 0
        }
        var gradeSystem1= new gradeSystem(gradeInvalid8);
        
        var result= gradeSystem1.calculateBuildGrade();
       
       
         assert(result!=="Divide by zero error ","all cant be zero ");
        
    });

    it("when denominator is zero",()=>{
        var  gradeInvalid8= {
            'buildNumber': '123456',
            'total': 150,
            'passed': 0,
            'failed': 0,
            'skipped': 75,
            'aborted': 75
        }
        var gradeSystem1= new gradeSystem(gradeInvalid8);
        
        var result= gradeSystem1.calculateBuildGrade();
       
       
         assert(result!=="Divide by zero error ","Denominator cant be zero ");
        
    });


});
    
