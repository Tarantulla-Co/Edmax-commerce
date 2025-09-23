import React from "react";
import { useState, useEffect } from "react";
import api from "/public/api/api.js";
import { Toast } from "bootstrap";
import Swal from "sweetalert2";
import PaystackButton from "../components/UI/PaystackButton";
function Contact() {
  // const [data, setData] = useState([]);
  // const [loader, setLoader] = useState(true);
  // const fetchData = async () => {
  //   try {
  //     const token = localStorage.getItem("token");
      
  //     // Check if token exists
  //     if (!token) {
  //       Swal.fire({
  //         toast: true,
  //         title: "Authentication Required",
  //         text: "Please login to access this page",
  //         icon: "warning",
  //         timer: 3000,
  //         showConfirmButton: false
  //       });
  //       setLoader(false);
  //       return;
  //     }

  //     const res = await api.get("/me", {
  //       headers: {
  //          Accept: "application/json",
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });
  //     setData(`Name: ${res.data.user.name} | Email: ${res.data.user.email} | Id: ${res.data.user.id}`);
  //     console.log("Api Res:", res.data.user.email);
  //     if (res.data.code === 200) {
  //       Swal.fire({
  //         toast: true,
  //         title: "Success",
  //         text: res.data.message,
  //         icon: "success",
  //         timer: 2000,
  //         showConfirmButton: false
  //       });
  //     } else {
  //       Swal.fire({
  //         toast: true,
  //         title: "Error",
  //         text: "Try Again",
  //         icon: "error",
  //         timer: 2000,
  //       });
  //     }
  //   } catch (err) {
  //     console.log('Error:',JSON.stringify(err, null, 2));
      
  //     // Handle specific error cases
  //     if (err.response?.status === 401) {
  //       Swal.fire({
  //         toast: true,
  //         title: "Session Expired",
  //         text: "Please login again",
  //         icon: "error",
  //         timer: 3000,
  //         showConfirmButton: false
  //       });
  //       // Clear invalid token
  //       localStorage.removeItem("token");
  //     } else {
  //       Swal.fire({
  //         toast: true,
  //         title: "Error",
  //         text: "Failed to fetch user data",
  //         icon: "error",
  //         timer: 3000,
  //         showConfirmButton: false
  //       });
  //     }
  //   } finally {
  //     setLoader(false);
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);
  // if (loader) {
  //   return (
  //     <>
  //     <div className="d-flex justify-content-center m-3">

  //       <h1 className="text-center fs-5 text-warning spinner-border"></h1>
  //     </div>
  //     </>
  //   );
  // }
  return (
    <>
      <div>
        <h1 className="text-center text-dark">Contact Us</h1>
      </div>

      {/* <p className="text-center fs-2">{data}</p> */}
      <PaystackButton />
    </>
  );
}

export default Contact;
