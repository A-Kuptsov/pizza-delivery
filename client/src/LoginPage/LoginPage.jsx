import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { setLoggedIn } from "state/auth/actions";
import { getAuth } from "state/auth/selectors";

export const LoginPage = () => {
  const history = useHistory();
  const auth = useSelector(getAuth);
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    dispatch(setLoggedIn(data.email));
  };

  if (auth) {
    history.push("/");
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <legend>Login form</legend>
          <label htmlFor="email">
            Email:
            <input
              ref={register}
              type="email"
              id="email"
              name="email"
              placeholder="email@"
            />
          </label>
          <label htmlFor="password">
            Password:
            <input
              ref={register}
              type="password"
              id="password"
              name="password"
              placeholder="password"
            />
          </label>
          <div>
            <button>Login</button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};
