import React, { useContext, useState, useEffect } from "react";
import { store } from "./App";
import { Redirect } from "react-router";
import axios from "axios";
import avatar from "./avatar.png";

const Myprofile = () => {
  const [token, setToken] = useContext(store);
  const [data, setData] = useState(null);
  const [popdata, setPopdata] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:5000/myprofile", {
        headers: {
          "x-token": token,
        },
      })
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  if (!token) {
    return <Redirect to="/login" />;
  }

  const GetPopData = () => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) =>
      // console.log(res.data)

      setPopdata(res.data)
    );
  };
  return (
    <div>
      {data && (
        <center>
          <br />
          <div className="card p-4" style={{ width: "18rem" }}>
            <h4 className="text-success">
              Welcome to {data.username} Dashboard
            </h4>
            <img className="card-img-top" src={avatar} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Welcome : {data.username}</h5>
              <button
                className="btn btn-primary"
                onClick={() => setToken(null)}
              >
                Logout
              </button>
            </div>
          </div>
          <div>
            <h5 className="text-primary">Click Button to Display Data</h5>
            <br />
            <button onClick={GetPopData} className="btn btn-primary">
              Get Data
            </button>
            <br />
            <div>
              <h3>Users Data from Dummy API</h3>

              <table className="table table-hover table-sm w-75 table-striped">
                <thead className="text-warning">
                  <tr>
                    <th>Id</th>
                    <th>Email</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Phone</th>
                    <th>website</th>
                  </tr>
                </thead>

                <tbody>
                  {popdata &&
                    popdata.map((user) => (
                      <tr>
                        <td className="text-primary">{user.id}</td>
                        <td className="text-success">{user.email}</td>
                        <td className="text-secondary">{user.name}</td>
                        <td className="text-success">{user.username}</td>
                        <td className="text-primary">{user.phone}</td>
                        <td className="text-secondary">{user.website}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>

          <button className="btn btn-primary" onClick={() => setToken(null)}>
            Logout
          </button>
        </center>
      )}
    </div>
  );
};

export default Myprofile;
