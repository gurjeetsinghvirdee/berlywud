import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { detailsUser, updateUser } from './redux/actions/userActions';
import Loadingmsg from './Loadingmsg';
import Errormsg from './Errormsg';
import { USER_UPDATE_RESET } from './redux/constants/userConstants';
import { Button } from '../node_modules/@material-ui/core/index';

export default function UserEdit(props) {
  const {id} = useParams(); 
  const userId = id
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  const userDetails = useSelector((state) => state.UserDetails);
  const { loading, error, user } = userDetails;

  const userUpdate = useSelector((state) => state.UserUpdate);
  const {loading: loadingUpdate, error: errorUpdate, success: successUpdate,} = userUpdate;

  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: USER_UPDATE_RESET });
      history.push('/userlist');
    }
    if (!user) {
      dispatch(detailsUser(userId));
    } else {
      setName(user.name);
      setEmail(user.email);
      setIsAdmin(user.isAdmin);
    }
  }, [dispatch, props.history, successUpdate, user, userId]);

  const submitHandler = (e) => {
    e.preventDefault();
    // dispatch update user
    dispatch(updateUser({ _id: userId, name, email, isAdmin }));
  };
  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h2>Edit User {name}</h2>
          {loadingUpdate && <Loadingmsg/>}
          {errorUpdate && (
            <Errormsg variant="danger">{errorUpdate}</Errormsg>
          )}
        </div>
        {loading ? (
          <Loadingmsg />
        ) : error ? (
          <Errormsg variant="danger">{error}</Errormsg>
        ) : (
          <>
            <div>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="isAdmin">Is Admin</label>
              <input
                id="isAdmin"
                type="checkbox"
                checked={isAdmin}
                onChange={(e) => setIsAdmin(e.target.checked)}
              ></input>
            </div>
            <div>
              <Button variant="contained" type="text" color="secondary">Update</Button>
            </div>
          </>
        )}
      </form>
    </div>
  );
}