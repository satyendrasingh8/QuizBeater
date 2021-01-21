import React from 'react';
import Q1 from './selectedQus/q1';
import Q2 from './selectedQus/q2';
import Q3 from './selectedQus/q3';
import Q4 from './selectedQus/q4';
import Q5 from './selectedQus/q5';
const CreateBlog = (props) => {
    const selectedValue = props.selectedValue;

    
      if(selectedValue==1){
          return <Q1 />;
      }else if(selectedValue==2){
          return <Q2 />;
      }
      else if(selectedValue==3){
        return <Q3 />;
    }
    else if(selectedValue==4){
        return <Q4 />;
    }
      else{
          return <Q5 />
      }
      

 return(

          <div>
              
              
           </div>
 );
}


export default CreateBlog;
