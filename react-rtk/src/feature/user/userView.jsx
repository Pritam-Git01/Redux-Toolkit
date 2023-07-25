import React,{useEffect} from "react";
import {useSelector,useDispatch} from "react-redux";
import { fetchUsers } from "./userSlice";


const UserView = () => {
    // useSelector holds the Data which present in our store 
    const user = useSelector((state) => state.user)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUsers())

    },[])

  return (
    <div>
      <h2>List of users -</h2>
    {user.loading && <span>Loading...</span>}
    {!user.loading && user.error? <div>{user.error}</div>:null}
    {!user.loading && user.data.length ? (
      <ul>
        {
            user.data.map((item) => <li key={item.id}>{item.name}</li>)
        }
      </ul>
    ):null}
    
    </div>
  );
};

export default UserView;
