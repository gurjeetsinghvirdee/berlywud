import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listUsers } from './redux/actions/userActions';
import Loadingmsg from './Loadingmsg';

import Errormsg from './Errormsg';

export default function UserList() {
  const userList = useSelector((state) => state.UserList);
  const { loading, error, users } = userList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listUsers());
  }, [dispatch]);
  return (
    <div className="orderlist">
      <h1>Users</h1>
      {loading ? (
        <Loadingmsg></Loadingmsg>
      ) : error ? (
        <Errormsg variant="danger">{error}</Errormsg>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>IS SELLER</th>
              <th>IS ADMIN</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.isSeller ? 'YES' : ' NO'}</td>
                <td>{user.isAdmin ? 'YES' : 'NO'}</td>
                <td>
                  <button>Edit</button>
                  <button>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}