import React, { Component } from "react"
import request from 'superagent';
import BookList from './BookList';

class Book extends Component{
    constructor(props){
      super(props);
      this.state = {
        books: [],
      }
    }
     componentDidMount(){
       request.get("https://www.googleapis.com/books/v1/users/101611817084658660916/bookshelves/4/volumes?key=AIzaSyDNMnPGw3yUzfIwUnH3PR4oMJiP-PecbhU")
      .query(null)
      .then((data) =>{
        // console.log(data);
        this.setState({books: [...data.body.items]})
        
      })
    
    }
   
   

    render(){
      
      return(
        <div>
              <BookList books={this.state.books}/>
              
        </div>
  
  
      );
    }
    

  }

  export default Book

// class Book extends Component{
//     constructor(props){
//       super(props);
//       this.state = {
//         books: [],
//       }
//     }
//      LoadMyBooks = () => {
//        request.
//       get("https://www.googleapis.com/books/v1/users/101611817084658660916/bookshelves/4/volumes?key=AIzaSyDNMnPGw3yUzfIwUnH3PR4oMJiP-PecbhU")
//       .query(null)
//       .then((data) =>{
//         // console.log(data);
//         this.setState({books: [...data.body.items]})
        
//       })
//     }
    
   
   

//     render(){
//       const mybooks = this.LoadMyBooks();
//       return(
//         <div>
//               <BookList books={this.state.books}/>
              
//         </div>
  
  
//       );
//     }
    

//   }

//   export default Book
