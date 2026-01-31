import { createContext, useContext, useEffect, useState } from 'react';

//Step 1
//Create the context
const AuthContext = createContext();

//Step 2
//Create useAuth hook to consume this context
export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
}

//Step 3
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [techData, setTechData] = useState(null);
  const [invoiceData, setInvoiceData] = useState([]);

  //Grab already logged in user
  useEffect(() => {
    const savedToken = localStorage.getItem('token');
    const savedUser = localStorage.getItem('user');

    setToken(savedToken);
    setUser(JSON.parse(savedUser)) //parsing JSON object from LS
  }, []);

  // Login function
  const login = async (last_name, password) => { //sending api request to login with email and password

    console.log('Send login request');

    const response = await fetch("http://127.0.0.1:5000/tech/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        last_name: last_name,
        password: password
      })
    });

    console.log("Response");
    const loginData = await response.json();
    setTechData(loginData);
    console.log('Token data:', loginData);

    setToken(loginData.token);
    setUser(loginData.first_name);
    localStorage.setItem("token", loginData.token);
    localStorage.setItem("user", JSON.stringify(loginData.first_name)); //transforming the user into json readable string
  }

  const createInvoice = async (createInvoice) => {
    const response = await fetch("http://127.0.0.1:5000/invoice", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      },
      body: JSON.stringify(createInvoice)
    })
    const responseData = await response.json();
    console.log(responseData);
  }

  const getInvoices = async () => {
    const response = await fetch("http://127.0.0.1:5000/invoice", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      },
      // body: JSON.stringify(createInvoice)
    })
    const responseData = await response.json();
    setInvoiceData(responseData);
    console.log(responseData);
  }

  const registerUser = async (registerUser) => {
    const response = await fetch("http://127.0.0.1:5000/tech", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      },
      body: JSON.stringify(registerUser)
    })
    const responseData = await response.json();
    console.log(responseData);
  }

  const updateUser = async (updateData) => {
    const response = await fetch("http://127.0.0.1:5000/tech", {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      },
      body: JSON.stringify(updateData)
    })
    const updatedUserData = await response.json();
    console.log(updatedUserData);
    setUser(updatedUserData);
    localStorage.setItem('user', JSON.stringify(updatedUserData));
  }

  const logout = () => {
    setToken(''); //clearing saved tokens
    setUser(null)
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  const deleteUser = async () => {
    const response = fetch("http://127.0.0.1:5000/", {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      }
    });
    const responseData = await response.json();
    console.log(responseData);
    logout();
  }

  const value = {
    token,
    user,
    techData,
    invoiceData,
    login,
    logout,
    registerUser,
    createInvoice,
    getInvoices,
    updateUser,
    deleteUser,
    isAuthenticated: token ? true : false
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
