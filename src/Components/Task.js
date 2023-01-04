import React, { useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { connect } from "react-redux";
import { fetchUserss, fetchUserWithId } from "../redux/userAction";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

function Task({
  loadingAllUser,
  users,
  error,
  fetchUserss,
  fetchUserWithId,
  currentUser,
  loadingSingleUser,
}) {
  
  useEffect(() => {
    fetchUserss();
  }, []);

  return (
    <div>
      <h1> Convin Task</h1>
      <div class="card px-md-5" style={{ margin: "20px" }}>
        <div class="card-body">
          {JSON.stringify(currentUser) === "{}" ? (
            <p>Please click on any button to get the data</p>
          ) : loadingSingleUser ? (
            <CircularProgress />
          ) : (
            <>
              <h4>
                {currentUser.first_name} {currentUser.last_name}
              </h4>
              <p>{currentUser.email}</p>
              <img
                src={currentUser.avatar}
                alt={currentUser.first_name + " image"}
              />
            </>
          )}{" "}
        </div>
      </div>
      {loadingAllUser ? (
        <CircularProgress />
      ) : error ? (
        <h1>{error}</h1>
      ) : (
        <Stack spacing={"auto"} direction="row" style={{ margin: "20px" }}>
          {users.map((user, idx) => {
            return (
              <Button
                variant="contained"
                key={user.id}
                onClick={() => fetchUserWithId(user.id)}
              >
                {idx + 1}
              </Button>
            );
          })}
        </Stack>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    loadingAllUser: state.loadingAllUser,
    error: state.error,
    users: state.users,
    currentUser: state.currentUser,
    loadingSingleUser: state.loadingSingleUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserss: () => dispatch(fetchUserss()),
    fetchUserWithId: (id) => dispatch(fetchUserWithId(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Task);
