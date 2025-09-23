import React from "react";
import api from "../../api/api";
import Swal from "sweetalert2";

export default function PaystackButton() {
  const payWithPaystack = () => {
    const handler = window.PaystackPop.setup({
      key: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY, // your pk_test_xxx
      email: "customer@email.com",
      amount: 5000 * 100, // amount in kobo (Paystack expects the smallest unit)
      currency: "GHS", // Ghana Cedi
      ref: "ref_" + Date.now(), // unique reference
      callback: function (response) {
        // ✅ Send reference to Laravel backend for verification
        api
          .get(`/paystack/verify/${response.reference}`)
          .then((res) => {
            console.log("Verification result:", res.data);
            if (res.data.status === "success") {
              Swal.fire("Payment Successful", "Thank you for your payment!, your reference ID is " + response.reference, "success");
            } else {
              Swal.fire("Payment Verification Failed", "Please contact support with your reference: " + response.reference, "error");
            }
          })
          .catch((err) => {
            console.error("Verification error:", err);
            Swal.fire("Verification Error", "Could not verify payment.", "error");
          });
      },
      onClose: function () {
        Swal.fire("Payment Window Closed", "You closed the payment window.", "info");
      },
    });

    handler.openIframe();
  };

  return (
    <>
    
    <div className="d-flex justify-content-center align-items-center my-4">
    <button onClick={payWithPaystack} className="btn btn-success">
      Pay
    </button>


    </div>
    </>
  );
}
