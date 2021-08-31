import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { AiFillEdit } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import {
  createUser,
  deleteUser,
  updateUser,
} from "../../store/actions/userAction";
const Users = () => {
  const { users } = useSelector((state) => state.usersReducer);
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    id: null,
    name: "",
    membership: "",
  });
  const usersList = users.map((_user) => (
    <tr>
      <td>{_user.name}</td>
      <td>{_user.membership}</td>
      <td>
        <AiFillEdit
          color="blue"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          onClick={() => setUser(_user)}
        />
      </td>
      <td>
        <BsTrash color="red" onClick={() => dispatch(deleteUser(user.id))} />
      </td>
    </tr>
  ));

  const handleChange = (event) =>
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (user.id) {
      dispatch(updateUser(user));
    } else {
      dispatch(createUser(user));
    }
    clearForm();
  };

  const clearForm = () => {
    setUser({
      id: null,
      name: "",
      membership: "",
    });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-10">
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Add New User
          </button>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Membership</th>
                <th scope="col">Edit</th>
                <th scope="col">Remove</th>
              </tr>
            </thead>
            <tbody>{usersList}</tbody>
          </table>
        </div>
      </div>

      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                {user.id ? "Edit User" : "Add User"}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    name="name"
                    value={user.name}
                    onChange={handleChange}
                  />
                </div>
                <div class="mb-3">
                  <label for="membership" class="form-label">
                    Membership
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="membership"
                    name="membership"
                    value={user.membership}
                    onChange={handleChange}
                  />
                </div>

                {/* <button type="submit" class="btn btn-primary">
                  Submit
                </button> */}

                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
