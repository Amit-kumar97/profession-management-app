import { useState } from 'react'
import './App.css'

function App() {

  const [formData, setFormData] = useState(
    {
      name: "",
      profession: "",
      age: ""
    }
  );

  const [employees, setEmployees] = useState([]);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e)  => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const addUser = () => {
     // Check if any field is empty or just whitespace
    if(!formData.name.trim() || !formData.profession.trim() && !formData.age.trim()) {
      setError("Error :Please Make sure All the fields are filled before adding an employee!");
      setSuccess("");
      return; 
    }
    // If valid, add user and clear errors
    setEmployees([...employees, formData]);
    setFormData({ name: "", profession: "", age: "" });
    setError("");
    setSuccess("Success: Employee added successfully!");

    setTimeout(() => {
      setSuccess("");
    }, 3000);
  }

  const deleteUser = (index) => {
    const updatedEmployees = employees.filter((_, i) => i !== index);
    setEmployees(updatedEmployees);
  }

  return (
    <div className="App">
      <header>
        <h2>New Employee</h2>
      </header>

      {/* Form Section */}
      <div className="form-container">
        <form action="">
            <label htmlFor="name">Enter Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} id="name" placeholder='Enter Name' />      
            
            <label htmlFor="profession">Enter Profession</label>
            <input type="text" name="profession" value={formData.profession} onChange={handleChange} id="profession" placeholder='Enter Profession' />      
            
            <label htmlFor="age">Enter Age</label>
            <input type="number" name="age" value={formData.age} onChange={handleChange} id="age" placeholder='Enter Age' />      
        </form>

        
      </div>
      {/* Error Message Display  */}
      {error && ( 
        <p className="error">
          {error}
        </p>
      )}

      {/* success Message Display */}
      {success && (
        <p className="success">
          {success}
        </p>
      )}

      <button onClick={addUser}>Add User</button>

      {/* Display Section  */}

      <div className="employee-list">
        <h2>Added Employees</h2>
        <div className="employee">
          {employees.length===0 ? (
            <p>No Data Found</p>
          ) : (
            employees.map((emp, index) => (
            <div key={index} className="employee-card">
              <p><b>{index+1}.</b></p>
              <p><b>Name</b>: {emp.name}</p>
              <p><b>Profession</b>: {emp.profession}</p>
              <p><b>Age</b>: {emp.age}</p>

              <button onClick={()=> deleteUser(index)}>Delete</button>
            </div>
          )) )}
        </div>
      </div>
    </div>
  )
}

export default App
