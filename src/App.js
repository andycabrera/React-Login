import React, {useState, useEffect} from 'react'
import {GlobalStyle} from './components/GloblaStyle'
import { BrowserRouter, Route } from 'react-router-dom';
import { ProductosCategoria } from './components/Navegation';
import { AppHeader } from './components/Transactions/Transactions';
import { Login } from './components/Login/Login';
import {ProtectedRoute , ProtectedLogin} from './components/ProtectedRoute'
import AuthApi from './components/AuthApi'
import Cookies from 'js-cookie'
import {SideBar} from './components/SideBar/SideBar'
import {Products} from './components/Products/Products'

const Ropa = (props) => {
  console.log(props)
  // const query = queryString.parse(props.location.search)

  return (
    <div>
        <h1>Ropa</h1>
        {/* <div>
          Color: {query.color}
        </div>
        <div>
          Talla: {query.talla}
        </div> */}
    </div>
  )
        
}

function App() {

  const [isAuth , setAuth] = useState(false)

  const readCookie = () => {
    const user = Cookies.get("user")
    if(user){
      setAuth(true)
    }
  }

  useEffect(() => {
    readCookie();
  }, [])

  return (
    <div>
      <AuthApi.Provider value={{isAuth, setAuth}}>
        <BrowserRouter>
        <GlobalStyle/>

          {/* <Navegation/> */}
          <SideBar/>
          <Route path='/' exact component={() => (
              <AppHeader/>
          )} />
          <ProtectedLogin path='/login' auth={isAuth} component={Login}/>
          <ProtectedRoute path='/products' exact auth={isAuth} component= {Products}/>
          <ProtectedRoute path='/products/:categoria/:id?' auth={isAuth} component={ProductosCategoria}/>
          <ProtectedRoute path='/ropa' auth={isAuth} component={(Ropa)}/>
        </BrowserRouter>
      </AuthApi.Provider>
    </div>
  );
}

export default App;
