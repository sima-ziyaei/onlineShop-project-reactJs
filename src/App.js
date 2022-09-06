import AppRoutes from './routes'
import {injectStore} from './api/http';
import { store } from './redux/store';
import {Provider} from 'react-redux';

injectStore(store)

function App() {
  return (
    <Provider store={store}>
      <AppRoutes />
      </Provider>
      

  );
}

export default App;
