import React from "react";
import { Artboard, Input, Link as DaisyuiLink } from "react-daisyui";

import { useSearchParams, Link } from "react-router-dom";

const Authentication = () => {
  const [searchParams] = useSearchParams();

  // get the mode from query params (login, signup) and assign true to isLogin if the mode is login
  const isLogin = searchParams.get("mode") === "login";

  return (
    <Artboard className="mb-16">
      <div className="flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
        <div className="form-control w-full max-w-xs">
          <h1 className="mb-4 text-2xl normal-case" color="ghost">
            {isLogin ? "User Login" : "Create an Account"}
          </h1>
          {!isLogin && (
            <div className="form-control w-full max-w-xs">
              <Input
                type="text"
                id="username"
                name="username"
                placeholder="Username..."
              />
              <label className="label">
                <span className="label-text-alt text-red-500">
                  Error Mesage!!
                </span>
              </label>
            </div>
          )}
          <Input type="email" id="email" name="email" placeholder="Email..." />
          <label className="label">
            <span className="label-text-alt text-red-500">Error Mesage!!</span>
          </label>
          <Input
            type="password"
            id="password"
            name="password"
            placeholder="Password..."
          />
          <label className="label">
            <span className="label-text-alt text-red-500">Error Mesage!!</span>
          </label>
          <p className="normal-case mt-2" color="ghost">
            {isLogin
              ? "You don't have an account?"
              : "Do you already have an account?"}
            <Link to={`/auth?mode=${isLogin ? "signup" : "login"}`}>
              <DaisyuiLink className="ml-2 text-green-700">
                {isLogin ? "Sign up" : "Login"}
              </DaisyuiLink>
            </Link>
          </p>
        </div>
      </div>
    </Artboard>
  );
};

export default Authentication;
