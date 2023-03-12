import React, { useState } from "react";

const Login = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setError("");
    console.log(userId, password);
    if (userId.trim() === "" || password.trim() === "")
      setError("All fields are required");
  };

  const handleFieldValue = (field: any, value: any) => {
    console.log("field", field, "value", value);

    if (field === "userId") setUserId(value);
    else setPassword(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          // required
          value={userId}
          onChange={(e) => handleFieldValue("userId", e.target.value)}
        />
        <input
          type="text"
          // required
          value={password}
          onChange={(e) => handleFieldValue("password", e.target.value)}
        />
      </div>
      <button type="submit" />
      {error && <span>{error}</span>}
    </form>
  );
};

export default Login;
