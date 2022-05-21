import React, { Component } from "react"
import { Octokit } from "@octokit/core"
import MainDiary from './mainDiary';


const token = process.env.github_api;
const id = "a928b1fbcf1738da26ea5d7125e911cb";

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

      this.setState({entry: [response]})

    }
  render(){
    return(
       <div>
       <MainDiary entry={this.state.entry}/>
       </div>
    )}
}

export default Dairy;
