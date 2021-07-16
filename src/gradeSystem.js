
class gradeSystem{

    constructor(JsonJob){
        this.buildNumber=JsonJob.buildNumber;
        this.total=JsonJob.total;
        this.passed=JsonJob.passed;
        this.failed=JsonJob.failed;
        this.skipped=JsonJob.skipped;
        this.aborted=JsonJob.aborted;



    }
    calculateBuildGrade (){
        let grade="";
        if(this.total<=0|| this.passed<=0||this.failed<0||this.skipped<0||this.aborted<0||this.passed>this.total||this.skipped>this.total||this.failed>this.total){
            grade= "InvalidGrade";
            return grade;
        }

        let percentage= this.passed/(this.total- (this.skipped+this.aborted));
       
        percentage=parseInt(percentage*100);
        var grades = {
            'A': {
                'upper': 100,
                'lower': 90
            },
            'B': {
                'upper': 90,
                'lower': 80
            },
            'C': {
                'upper': 80,
                'lower': 70
            },
            'D':{
            
                    'upper': 70,
                    'lower': 60
                
            },
            'F':{
                'upper': 60,
                'lower': 0

            }
        }
        
    Object.keys(grades).forEach(function(key){
        var value = grades[key];
        if(percentage < value['upper'] && percentage > value['lower'])
            grade=key;
            
    });
 

        
    //  return {grade,percentage};
     return grade;

    }
    

}


module.exports={
    
    gradeSystem
    
  }
//   "scripts": {
//     "start": "node index.js",
//     "test": "nyc mocha test/**/*.spec.js"
//   },

