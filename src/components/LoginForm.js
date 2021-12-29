import React, { useState } from "react";

export default function LoginForm({ Login, error }) {
  const [details, setDetails] = useState({ email: "", password: "" });

  function handleSubmit(e) {
    e.preventDefault();

    Login(details);
  }

  return (
    <div>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <header>LOGIN</header>

          <div className="input-field">
            <i class="fa fa-envelope icon"></i>
            <input
              type="email"
              name="email"
              id="email"
              autoCapitalize="none"
              required
              onChange={(e) =>
                setDetails({ ...details, email: e.target.value })
              }
              value={details.email}
            />
            <label>Email</label>
          </div>
          <div className="input-field">
            <i class="fas fa-unlock"></i>
            <input
              type="password"
              name="password"
              id="password"
              required
              onChange={(e) =>
                setDetails({ ...details, password: e.target.value })
              }
              value={details.password}
            />
            <label>Password</label>
          </div>
          <div className="button">
            <div className="inner">
              <input className="input-button" type="submit" value="LOGIN" />
            </div>
          </div>
        </form>

        <div class="auth">
          Or login with
          <div class="links">
            <div class="facebook">
              <i class="fab fa-facebook-square">
                <span>Facebook</span>
              </i>
            </div>
            <div class="google">
              <i class="fab fa-google">
                <span>Google</span>
              </i>
            </div>
          </div>
          <div class="signup">
            Not a member? <a href="{#}">Signup now</a>
          </div>
        </div>
        {error !== "" ? <div className="error">{error}</div> : ""}
      </div>
    </div>
  );
}
