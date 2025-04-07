import React, { createContext, useReducer ,useState,useLayoutEffect, useContext} from 'react';
import AppReducer from './AppReducer';
import axios from "axios";

// Initial State
const initialState = {
  users: [ 
    {
      "id":'1',
      "title": "Luke Bryan - Most People Are Good ",
      "score": 30,
      "description": "The official music video for Luke Bryan's Most People Are GoodI believe kids oughta stay kidsAs long as they canTurn off the screen, go climb a tree",
      "url": "https://www.youtube.com/embed/e6EGQFJLl04",
      "questions":[{"question":'How many actors in this video?',"answer":'6 actors'},{"question":'how many views on this video in 2021',"answer":' I donot know '}],
      "created": "2020-09-09 09:26:39",
      "updated":"2020-09-09 09:26:39"   
    
    },
    {
      "id":'2',
      "title": "Luke Bryan - Most People Are Good ",
      "score": 31,
      "description": "The official music video for Luke Bryan's Most People Are GoodI believe kids oughta stay kidsAs long as they canTurn off the screen, go climb a tree",
      "url": "https://www.youtube.com/embed/e6EGQFJLl04",
      "questions":[{"question":'How many actors in this video?',"answer":'6 actors'},{"question":'how many views on this video in 2021',"answer":' I donot know '}],
      "created": "2020-09-09 09:26:39",
      "updated":"2020-09-09 09:26:39"   
    
    }
]
}


// const updateUsers = state.users.map(user => {
//      if (user.id === updateUser.id) {
//        return updateUser;
//      }
//      return user;
//    });


// Create Context
export const GlobalContext = createContext(null);

// Provider Component
export const GlobalProvider = ({ children }) => {
 
   //  const [users,setUsers]=useContext([]);

// const initialState={
//      users:[]
// }
  const [state, dispatch] = useReducer(AppReducer, initialState);


  const addUser = (user) => {
    dispatch({
      type: 'ADD_USER',
      payload: user
    })
  }

  const editUser = (user) => {
    dispatch({
      type: 'EDIT_USER',
      payload: user
    })
  }


  const GET_USERS = (user) => {
     dispatch({
       type: 'GET_USERS',
       payload: user
     })
   }

////
  // 
  const[url,setUrl]=useState('https://api-461776259687.us-west2.run.app/events?program_type=game');
  const [newArr,setNewArr]=useState([]);

  const fetchProducts =async (url) => {
         // .get('/events?program_type=game')

    const response = await axios
         .get(url)
        .catch((err) => {
          console.log("Err: ", err);
        });
     // const response = await fetch('/events?program_type=game', {
     //      method: 'GET',
     //      mode: 'cors',
     //      headers: {    'Content-Type': 'application/json',
     //      },
     //     // body: JSON.stringify(data),
     //    })
       // console.log(response)
      //  console.log(response.data);
         changeArr(response.data);
        console.log(response);
     //   printEvents(events);
     //   GET_USERS(newArr);
   



    };

    useLayoutEffect(() => {

      console.log("UseLayoutEffect is called with the value of ");

      console.log("fetchedddddpppp");
      fetchProducts(url);


   
  }, [url]);
 

const events=[];
const changeArr=(data)=>{

for(let i=0;i<data.length;i++){
  // console.log("newarr"); console.log(data[i]);
  // console.log(data[i]["id"]); 
  // console.log(data[i]["program"]["name"]);
  // console.log(data[i]["start_at"]);
  // console.log(data[i]["end_at"]);
let ele={"id":data[i]["id"],"title":data[i]["program"]["name"],"start":data[i]["start_at"]
,"end":data[i]["end_at"],"type": "event",
"clientName": "Johan Le",
"description": "Meeting daily",
"color": "#FFE4C8"};
events.push(ele);
//setNewArr([...newArr,ele]);
}
printEvents(events);

//GET_USERS(events);
initialState.users.push(events);
console.log("intial");
GET_USERS(events);

printEvents(initialState.users);
 //printEvents(initialState.users);

// for(let i=0;i<newArr.length;i++){
//   console.log("newarr2"); console.log(newArr[i]);
//   console.log(newArr[i]["id"]); 
//   console.log(newArr[i]["title"]);

// }

//console.log(newArr[0]["title"]);
}


const printEvents=(data)=>{

  for(let i=0;i<data.length;i++){
    console.log("EVENTSSS"+data.length);
    console.log(data[i]["id"]); 
    console.log(data[i]["title"]);
    console.log(data[i]["start"]);
    console.log(data[i]["end"]);
    console.log(data[i]["color"]);

  // let ele={"id":data[i]["id"],"title":data[i]["program"]["name"],"start":data[i]["start_at"]
  // ,"end":data[i]["end_at"]};
  // newArr.push(ele);
  //setNewArr([...newArr,ele]);
  }

  }


  // 



////
  return (
    <GlobalContext.Provider value={{
      users: state.users,
      addUser,
      editUser
    }}>
      {children}
    </GlobalContext.Provider>
  )
}