// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useHistory, useParams } from 'react-router-dom';
// import { allProducts } from './redux/actions/allProductsActions';
// import Product from '../components/Product';
// import Sidebar from "./Sidebar"
// import Loadingmsg from './Loadingmsg'
// import Errormsg from './Errormsg'


// export default function Searchscreen(prop) {
//   const { name = 'all' } = useParams();
//   const dispatch = useDispatch();
//   const allProducts = useSelector((state) => state.AllProducts);
//   const { loading, error, products } = allProducts;
//   useEffect(() => {
//     dispatch(listProducts({ name: name !== 'all' ? name : '' }));
//   }, [dispatch, name]);
//   return (
//     <div>
//      <div className="home">
//             {
//                 loading ? (
//                     <Loadingmsg/> 
//                 ): error ? (
//                     <Errormsg>{error}</Errormsg>
//                 ):(
//                     <>
//                     <h3>OUR PRODUCTS</h3>
//                     <div className="home__page">
//                         <div className="home__sidebar">
//                             <Sidebar/>
//                         </div>
//                         <div className="home__container">
//                             {allProducts.map((item)=> {
//                                 return <Product key={item._id} prop={item}/>
//                             })}
//                         </div>
//                     </div>
//                     </>
//                 )
//             }
//         </div>
//     </div>
//   );
// }