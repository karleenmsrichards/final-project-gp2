import { useState, useEffect } from "react";
import jwtDecode from "jwt-decode";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [clientId, setClientId] = useState("");


  // Function to check if the user is logged in
  function isLoggedIn() {
    return user !== null;
  }
  function handleSignUp() {
    /* global google */
    google.accounts.id.initialize({
      client_id: clientId,
      callback: handleCallbackResponse,
    });
    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });
    google.accounts.id.prompt();
  }

  function handleCallbackResponse(response) {
    if (response && response.credential) {
      console.log("Encoded JWT ID token: " + response.credential);
      let userObject = jwtDecode(response.credential);
      console.log(userObject);
      // Save the token in localStorage
      localStorage.setItem("jwtToken", response.credential);
      navigate("/dashboard");
    } else {
      // Handle the case where there is no response or no credential
      console.error("Error handling callback response:", response);
    }
  }

  useEffect(() => {
    async function fetchClientId() {
      try {
        const response = await axios.get("/api/clientId");
        const { clientId } = response.data;
        setClientId(clientId);
      } catch (error) {
        console.error("Error fetching client ID:", error);
      }
    }
    fetchClientId();
  }, []);

  useEffect(() => {
    // Check if the user is already authenticated by looking for the token in localStorage
    const token = localStorage.getItem("jwtToken");
    console.log("local");
    if (token) {
      // If token is found, decode it and set the user state
      const userObject = jwtDecode(token);
      setUser(userObject);
    }
  }, [navigate]);

  return { user, handleSignUp };
};

export default useAuth;
