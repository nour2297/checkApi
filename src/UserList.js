import axios from 'axios';
import React, { useEffect,useState } from 'react'
import User from './User';

const UserList = () => {
    const [listOfUser, setListOfUser] = useState([]);
    useEffect(() => {
        const fetchUser= async()=>{
       try 
       {
         const response= await axios.get("https://jsonplaceholder.typicode.com/users");
         setListOfUser(response.data)
       }catch (error)
       {

       }



    };

    fetchUser();
    }, [])
    return (
        <div >
            {listOfUser.map(el=>
             <User user={el}/>
                )}
        </div>
    )
}

export default UserList
