import React, { Component } from "react"
import { Octokit } from "@octokit/core"

const token = "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";
const id = "a928b1fbcf1738da26ea5d7125e911cb";
// Octokit.js
// https://github.com/octokit/core.js#readme

class Dairy extends Component{
    constructor(props){
        super(props);
        this.state = {
          entry: [],
        }
      }
      async componentDidMount()  {
      const octokit = new Octokit({
        auth: token
      })
      
       const response = await octokit.request('GET /gists/{gist_id}', {
        headers: {
            accept: 'application/vnd.github.v3+json',
          },
        gist_id: id,
        
      })
      console.log(response);
      console.log(response.data.description);
      console.log(response.data.files.ahmed.content);
      console.log(response.data.created_at);

      this.setState({entry: [response.data]})

    }
  render(){
    return(
       <div>
           {this.props.state?.map((entry, i)=>{
               return <div> key= {i} 
               <h2>{entry.created_at}</h2>{console.log(entry.created_at)}
               </div>
        //    <div class="rounded-lg border border-stone-800 text-stone-100 bg-opacity-20 bg-stone-800 p-8">
        //        <h3 class="font-am text-2xl mb-5">{entry.data.description}</h3><div class="space-y-10"><a href="https://www.goodreads.com/book/show/13589182-mastery" target="_blank" rel="noopener noreferrer" class="content-card block hover:cursor-pointer text-stone-300 hover:text-stone-400 group">
        //        <div class="flex justify-between items-center"><div class="text-lg font-medium mb-1 text-stone-100 group-hover:text-stone-400 transition-colors duration-300">{entry.data.files.ahmed.content}</div>
        //        <div class="font-fanwood italic text-lg text-stone-400 group-hover:text-stone-500 transition-colors duration-300">{entry.data.created_at}</div></div>
        //        <div class="text-sm text-stone-400 group-hover:text-stone-500 transition-colors duration-300">written by Robert Greene</div></a></div></div> 
                })}
       </div>
    )}
}

export default Dairy;

// const Entries = (props) => {
//     return(
//         <div>
//            {/* {props.entry?.map((enties, i) => ( */}
//                <div class="rounded-lg border border-stone-800 text-stone-100 bg-opacity-20 bg-stone-800 p-8">
//                <h3 class="font-am text-2xl mb-5">{props.entry.data.description}</h3><div class="space-y-10"><a href="https://www.goodreads.com/book/show/13589182-mastery" target="_blank" rel="noopener noreferrer" class="content-card block hover:cursor-pointer text-stone-300 hover:text-stone-400 group">
//                <div class="flex justify-between items-center"><div class="text-lg font-medium mb-1 text-stone-100 group-hover:text-stone-400 transition-colors duration-300">{props.entry.data.description}</div>
//                <div class="font-fanwood italic text-lg text-stone-400 group-hover:text-stone-500 transition-colors duration-300">{props.entry.description}</div></div>
//                <div class="text-sm text-stone-400 group-hover:text-stone-500 transition-colors duration-300">written by Robert Greene</div></a></div></div> 
//            {/* ))} */
           
//            }
//        </div>
  
//     )
// }