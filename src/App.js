import AppRoutes from './routes'
import {injectStore} from './api/http';
import { store } from './redux/store';
import {Provider, useDispatch, useSelector} from 'react-redux';
import { useEffect } from 'react';
import { setPurchases} from './redux/cartSlice'

injectStore(store)

function App() {

  const buyItems = useSelector(state=> state.cart.value);
  const dispatch = useDispatch();
 
  // useEffect(()=>{
  //   const data = window.localStorage.getItem('REDUX-STATE')
  //   console.log(data);
  //   // if( data !== null) {dispatch(setPurchases(JSON.parse(data))); console.log('saved');}
  // },[])

  // useEffect(()=>{
  //   window.localStorage.setItem('REDUX-STATE', JSON.stringify(buyItems))
  // },[buyItems])
   
  return (
    <Provider store={store}>
      <AppRoutes />
      </Provider>
      

  );
}

export default App;
