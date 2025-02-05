import axios from "axios";

const Logout = () => {
  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:8800/api/auth/logout");
      alert("Logout successful!");
    } catch (err) {
      console.error(err);
      alert("Logout failed!");
    }
  };

  return (
    <div>
      <h2>Logout</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
