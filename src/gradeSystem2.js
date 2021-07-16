

class gradeSystem2{

    calculateBuildGrade (JsonJob){
        let grade="";
        if(JsonJob.total<=0|| JsonJob.pssed<=0||JsonJob.failed<0||JsonJob.skipped<0||JsonJob.aborted<0||JsonJob.passed>JsonJob.total||JsonJob.skipped>JsonJob.total||JsonJob.failed>JsonJob.total){
            grade= "InvalidGrade";
            return grade;
        }

        let percentage= JsonJob.passed/(JsonJob.total- JsonJob.skipped+JsonJob.aborted);
       
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
 

        
     return grade ;
    }

    

}



module.exports={
    
    gradeSystem2
    
  }

