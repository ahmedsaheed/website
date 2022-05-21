import React, { Component } from "react"
import DiarySession from './diaryEntries';

const MainDiary = (props) => {
    if(!props){
        return null;
    }
    return(
       <div>
            {
                props && props.entry?.map((entries, i) => {
                    return<div class="content">
                      {/* <img src={'https://i.pinimg.com/originals/23/a2/06/23a20662a7217cbccf9e1329305b72d1.jpg'} alt="Books"/> */}
                     <DiarySession
                    key={i}
                        title={entries.data.description}
                        content={entries.data.files.ahmed.content}
                        Date={entries.data.created_at}                    
                    />
                    </div>
                   
                    
                })
            }
        </div>
    )
}

 export default MainDiary;