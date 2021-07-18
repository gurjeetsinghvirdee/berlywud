import React, { useEffect } from 'react';
import './OrderList.css';
import { useDispatch, useSelector } from 'react-redux';
import Loadingmsg from './Loadingmsg';
import Errormsg from './Errormsg';
import { useHistory } from 'react-router-dom';
import { deleteOrder, listOrders } from './redux/actions/orderActions';
import { ORDER_DELETE_RESET } from './redux/constants/orderConstants';


export default function OrderList(props) {
  const history = useHistory()
  const orderList = useSelector((state) => state.OrderList);
  const { loading, error, orders } = orderList;
  const orderDelete = useSelector((state) => state.OrderDelete);
  const {loading: loadingDelete,error: errorDelete,success: successDelete,} = orderDelete;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: ORDER_DELETE_RESET });
    dispatch(listOrders());
  }, [dispatch, successDelete]);
  const deleteHandler = (order) => {
    // TODO: delete handler
    if (window.confirm('Are you sure to delete?')) {
      dispatch(deleteOrder(order._id));
    }
  };
  return (
    <div className="orderlist">
      <h1>Orders</h1>
      {loadingDelete && <Loadingmsg/>}
      {errorDelete && <Errormsg variant="danger">{errorDelete}</Errormsg>}
      {loading ? (
        <Loadingmsg></Loadingmsg>
      ) : error ? (
        <Errormsg variant="danger">{error}</Errormsg>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>USER</th>
              <th>DATE</th>
              <th>TOTAL</th>
              <th>PAID</th>
              <th>DELIVERED</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td>{order._id}</td>
                <td>{order.user.name}</td>
                <td>{order.createdAt.substring(0, 10)}</td>
                <td>{order.totalPrice.toFixed(2)}</td>
                <td>{order.isPaid ? order.paidAt.substring(0, 10) : 'No'}</td>
                <td>
                  {order.isDelivered
                    ? order.deliveredAt.substring(0, 10)
                    : 'No'}
                </td>
                <td>
                  <button
                    type="button"
                    className="small"
                    onClick={() => {
                      history.push(`/order/${order._id}`);
                    }}
                  >
                    Details
                  </button>
                  <button
                    type="button"
                    className="small"
                    onClick={() => deleteHandler(order)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}