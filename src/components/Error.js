import React from 'react';

export default function Error({state}) {
  if(state==="NotValid"){
    return(
        <div><p>Please enter valid username and Password</p></div>
      );
  }

}