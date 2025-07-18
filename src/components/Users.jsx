import axios from "axios";
import { useEffect, useState } from "react";
import Table from "./Table";

const Users = () => {
  const [data, setData] = useState([]);

  const getUsers = async () => {
    const res = await axios.get(
      "https://codenza-server.vercel.app/users/get-users"
      
    );
    setData(res?.data);
    // res.json();
  };
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <Table 
      headings={["Name","Location","Phone","Email"]}
      data={data}
      coloumn={["name","location","phone","email"]}
      />
    </div>
  );
};

export default Users;
