
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
        let  percentage= this.passed/(this.total- (this.skipped+this.aborted));
        try{
            if((this.total- (this.skipped+this.aborted)==0)){
                throw( "Divide by zero error" ); 
            }
            if(percentage<0||percentage>100){
                throw ("Invalid Data");
            }
        }
        catch(exception){
            return exception;
        }
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
    
     return grade;

    }
    

}

module.exports={
    
    gradeSystem
    
  }


