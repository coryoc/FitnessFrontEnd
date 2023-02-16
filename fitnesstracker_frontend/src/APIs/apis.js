export const baseURL = 'https://fitnesstrac-kr.herokuapp.com/api/'

//POST /api/users/login
export const loginUser = async (username, password) => {
    try {
      const response = await fetch(`${baseURL}users/login`,{
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username,
            password
        })
      })
      const result = await response.json();
      console.log(result);
      return result;
      
    } catch(ex) {
      console.log("error logging in user")
    }
  }

  export const registerUser = async (username, password) => {
    try {
      const response = await fetch(`${baseURL}users/register`,{
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username,
            password
        })
      })
      const result = await response.json();
      console.log(result);
      return result;
      
    } catch(ex) {
      console.log("error logging in user")
    }
  }