const { query } = require("../database/db");

const createUser = async (data) => {

  const { name, email, password } = data;

    try {

        // SQL query to insert a new user into the database
        let registersql = `INSERT INTO users (username, email, password) VALUES (?, ?, ?)`;
    
        // Execute the query to register the new user
        const result = await query(registersql, [
          name,
          email,
          password
        ]);
  
        // Return the newly registered user object
        const user = { name, email, client_id: result.insertId }; // assuming 'result.insertId' contains the new ID
    
        return { status: 200, message: "Successful", user };
      } catch (error) {
        // Throw an error if there's an issue with the database query
        throw new Error(error);
      }
};

const loginUser = async (data) => {

  const { username, password } = data;

    try {
        // SQL query to insert a new user into the database
        let loginsql = `SELECT * FROM users
      WHERE username = ? AND  password = ?`;
    
        // Execute the query to register the new user
        const result = await query(loginsql, [
          username,
          password
        ]);
    
        // Fetch the registered user from the database
        if (result.length) {
          return { status: 200, message: "Successful", user: result[0] };
        } 
        
      } catch (error) {
        // Throw an error if there's an issue with the database query
        throw new Error(error);
      }
};



module.exports = { createUser,loginUser };
