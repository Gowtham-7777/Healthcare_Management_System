// import React, { createContext, useEffect, useState } from "react";
// import PropTypes from 'prop-types';
// import axios from 'axios'
// import { toast } from "react-toastify";

// export const AppContext = createContext()

// const AppContextProvider = (props) => {

//     const currencySymbol = '₹'
//     const backendUrl = import.meta.env.VITE_BACKEND_URL

//     const [doctors,setDoctors] = useState([])
//     const [token,setToken] = useState(localStorage.getItem('token')?localStorage.getItem('token'):false)
//     const [userData, setUserData] = useState(false)

//     const getDoctorsData = async () => {

//         try {

//             const {data} = await axios.get(backendUrl + '/api/doctor/list')
//             if (data.success) {
//                 setDoctors(data.doctors)
//             } else {
//                 toast.error(data.message)
//             }
            
//         } catch (error) {
//             console.log(error)
//             toast.error(error.message)
//         }
//     }

//     const loadUserProfileData = async () => {
//         try {
           
//             const {data} = await axios.get(backendUrl + '/api/user/get-profile',{headers:{token}})
//             if (data.success) {
//                 setUserData(data.userData)
//             } else {
//                 toast.error(data.message)
//             }

//         } catch (error) {
//             console.log(error)
//             toast.error(error.message)
//         }
//     }

//     const value = {
//         doctors,getDoctorsData,
//         currencySymbol,
//         token,setToken,
//         backendUrl,
//         userData,setUserData,
//         loadUserProfileData,
//     }

//     useEffect(()=>{
//         getDoctorsData()
//     },[])

//     useEffect(()=>{
//         if (token) {
//             loadUserProfileData()
//         } else {
//             setUserData(false)
//         }
//     },[token])

//     return (
//         <AppContext.Provider value={value}>
//             {props.children}
//         </AppContext.Provider>
//     )
// }
// AppContextProvider.propTypes = {
//     children: PropTypes.node.isRequired,
// }

// export default AppContextProvider

// import React, { createContext, useEffect, useState, useCallback } from "react";
// import PropTypes from 'prop-types';
// import axios from 'axios';
// import { toast } from "react-toastify";

// export const AppContext = createContext();

// const AppContextProvider = ({ children }) => {
//     const currencySymbol = '₹';
//     const backendUrl = import.meta.env.VITE_BACKEND_URL;

//     const [doctors, setDoctors] = useState([]);
//     const [token, setToken] = useState(localStorage.getItem('token') || null);
//     const [userData, setUserData] = useState(null);

//     const api = axios.create({ baseURL: backendUrl });

//     const getDoctorsData = useCallback(async () => {
//         try {
//             const { data } = await api.get('/api/doctor/list');
//             if (data.success) setDoctors(data.doctors);
//             else toast.error(data.message);
//         } catch (error) {
//             toast.error(error.response?.data?.message || error.message);
//         }
//     }, []);

//     const loadUserProfileData = useCallback(async () => {
//         if (!token) return;
//         try {
//             const { data } = await api.get('/api/user/get-profile', { headers: { token } });
//             if (data.success) setUserData(data.userData);
//             else toast.error(data.message);
//         } catch (error) {
//             toast.error(error.response?.data?.message || error.message);
//         }
//     }, [token]);

//     const updateToken = (newToken) => {
//         setToken(newToken);
//         if (newToken) localStorage.setItem('token', newToken);
//         else localStorage.removeItem('token');
//     };

//     useEffect(() => { getDoctorsData(); }, [getDoctorsData]);
//     useEffect(() => { loadUserProfileData(); }, [token, loadUserProfileData]);

//     const value = {
//         doctors, getDoctorsData,
//         currencySymbol,
//         token, updateToken,
//         backendUrl,
//         userData, setUserData,
//         loadUserProfileData,
//     };

//     return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
// };

// AppContextProvider.propTypes = {
//     children: PropTypes.node.isRequired,
// };

// export default AppContextProvider;

import React, { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import axios from 'axios';
import { toast } from "react-toastify";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const currencySymbol = '₹';

  // fallback to localhost:4000 if env variable is missing
  const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:4000';

  const [doctors, setDoctors] = useState([]);
  const [token, setToken] = useState(localStorage.getItem('token') || false);
  const [userData, setUserData] = useState(false);

  const getDoctorsData = async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/api/doctor/list`);
      if (data.success) setDoctors(data.doctors);
      else toast.error(data.message);
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  const loadUserProfileData = async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/api/user/get-profile`, {
        headers: { token }
      });
      if (data.success) setUserData(data.userData);
      else toast.error(data.message);
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getDoctorsData();
  }, []);

  useEffect(() => {
    if (token) loadUserProfileData();
    else setUserData(false);
  }, [token]);

  return (
    <AppContext.Provider value={{
      doctors, getDoctorsData,
      currencySymbol,
      token, setToken,
      backendUrl,
      userData, setUserData,
      loadUserProfileData
    }}>
      {children}
    </AppContext.Provider>
  );
};

AppContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppContextProvider;
