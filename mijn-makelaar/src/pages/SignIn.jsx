import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import googleImage from "../assets/google.png";
import facebookImage from "../assets/facebook.png";

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        return;
      }
      setLoading(false);
      setError(null);
      navigate("/sign-in");
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return (
    <div className=" flex flex-col bg-white shadow-sm mt-6 p-4 mx-auto w-full sm:w-2/5">
      <h1 className="text-4xl text-center font-semibold my-7 ">Sign in</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 mx-10 ">
        <div>
          <label for className="text-neutral-800 text-base">
            Gebruikersnaam
          </label>
          <input
            type="text"
            className="border p-3 rounded-md w-full outline-orange-500"
            id="gebruikernaam"
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="text-neutral-800 text-base">Email</label>
          <input
            type="text"
            className="border p-3 rounded-md w-full outline-orange-500"
            id="email"
            onChange={handleChange}
          />
        </div>

        <div>
          <label for className="text-neutral-800 text-base">
            Wachtwoord
          </label>
          <input
            type="text"
            className="border p-3 rounded-md w-full outline-orange-500"
            id="wachtwoord"
            onChange={handleChange}
          />
        </div>
        <button
          disabled={loading}
          className="bg-orange-500 rounded-md p-2 text-white text-lg font-semibold hover:bg-slate-50 hover:text-neutral-950 border-2 border-orange-500 hover:border-orange-600 transition duration-700 ease-in-out"
        >
          {loading ? "Loading" : "Sing in"}
        </button>
        <hr />
        <div className="flex justify-between items-center gap-2">
          <button className="bg-white border p-4 w-full flex  justify-center items-center gap-2">
            <img className="w-8 h-8" src={facebookImage} alt="google image" />{" "}
            <p className="flex flex-col">
              <span>Facebook</span>
              <span
                style={{
                  color: "#999",
                  display: "flex",
                  flexDirection: "column",
                  fontSize: "10px",
                  fontWeight: "400",
                }}
              >
                verbinding maken
              </span>
            </p>
          </button>
          <span
            style={{
              color: "#666",
              display: "flex",
              flexDirection: "column",
              fontSize: "12px",
              fontWeight: "400",
            }}
          >
            via
          </span>
          <button
            type="submit"
            className="bg-white border p-4 w-full flex  justify-center items-center gap-2"
          >
            <img className="w-8 h-8" src={googleImage} alt="google image" />{" "}
            <p className="flex flex-col">
              <span>Google</span>
              <span
                style={{
                  color: "#999",
                  display: "flex",
                  flexDirection: "column",
                  fontSize: "10px",
                  fontWeight: "400",
                }}
              >
                verbinding maken
              </span>
            </p>
          </button>
        </div>
      </form>
      <div className="flex gap-2 mx-10 mt-4">
        <p>Heeft u geen account?</p>
        <Link to="/sign-up">
          <span className="text-blue-700">Aanmelden</span>
        </Link>
      </div>
      {error && <p className="text-red-400 mt-6">{error}</p>}
    </div>
  );
}
