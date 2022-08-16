import AppRoutes from './routes'
import ContextProvider from './contexts/Context';



function App() {
  return (
    <ContextProvider>
      <AppRoutes />
    </ContextProvider>
  );
}

export default App;
