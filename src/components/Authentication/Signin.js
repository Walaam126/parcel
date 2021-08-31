import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { FcReadingEbook } from "react-icons/fc";
// Actions
import { signin } from "../../store/actions/adminAction";

import { UserForm } from "./styles";
const Signin = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [user, setUser] = useState({ username: "", password: "" });

  const handleChange = (event) =>
    setUser({ ...user, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signin(user, history));
  };

  return (
    <div className="container">
      <div className="row ms-5">
        <div className="col-10 ms-5">
          <UserForm onSubmit={handleSubmit}>
            <FcReadingEbook size={70} />
            <div className="form-group mt-3">
              <input
                name="username"
                value={user.username}
                type="text"
                className="form-control"
                onChange={handleChange}
                placeholder="Username"
              />
            </div>
            <div className="form-group mt-3">
              <input
                name="password"
                value={user.password}
                type="password"
                className="form-control"
                onChange={handleChange}
                placeholder="password"
              />
            </div>
            <button className="btn btn-dark float-right mt-3" type="submit">
              Sign in
            </button>
          </UserForm>
        </div>
      </div>
    </div>
  );
};

export default Signin;
