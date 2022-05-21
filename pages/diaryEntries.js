import React, { Component } from "react"

const BookCard = (props) => {
  var dates = props.Date;
  var date = dates?.substring(0, 10);
    return(
<> <head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Patrick+Hand&family=Yomogi&display=swap" rel="stylesheet"/>
            {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css"/> */}
        </head>


        
    <div class="content__inner" id="tab-1">
      <div class="page">
      
        <p>DATE: {date}</p>
        {/* <p>{props.title}</p><br/> */}
        <p>{props.content}</p>
       
      </div>
    </div><br/>
       </>
       
    
    )
}

export default BookCard;