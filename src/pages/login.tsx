import { useState } from "react";
import Input from "../components/Input";
import loginImage from "../assets/loginImage.png";
import Button from "../components/Button";
import { ToastContainer, toast } from "react-toastify";
import { UserInfo } from "../utils/types";
import supabase from "../utils/supabase";
import findPath from "../utils/findPath";
import loginStyles from "../styles/login.module.css";
import adminStyles from "../styles/admin.module.css";

const Login = () => {
  const [userInfo, setUserInfo] = useState<UserInfo>({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const text = e.target.previousSibling?.textContent;
    const prop = text?.slice(0, text.length - 1).toLowerCase();

    if (prop) {
      setUserInfo({ ...userInfo, [prop]: e.target.value });
    }
  };

  const handleClick = () => {
    const options = {
      theme: "dark",
      autoClose: 2000,
    };

    (async () => {
      const { data, error } = await supabase.auth.signInWithPassword(userInfo);

      if (error) {
        toast.error(
          "L'email o la password non esistono nel database.",
          options
        );
        console.log(error);
        return;
      }

      if (data) {
        const path = findPath();

        if (path !== "login") {
          window.location.href = `/${path}`;
          return;
        }

        window.location.href = "/admin";
      }
    })();
  };

  return (
    <main className={loginStyles.main}>
      <section className={loginStyles.section}>
        <h1 className="title">Login</h1>

        <form className={loginStyles.form}>
          <Input
            text="Email"
            className={loginStyles.input}
            onChange={handleChange}
          />
          <Input
            text="Password"
            type="password"
            className={loginStyles.input}
            onChange={handleChange}
          />
        </form>

        <Button theme={adminStyles.dark_theme} onClick={handleClick}>
          Entra
        </Button>

        <ToastContainer className={adminStyles.toast__container} />
      </section>

      <section
        className={`${loginStyles.image_section} ${loginStyles.section}`}
      >
        <img
          src={loginImage}
          alt="Login image"
          className={loginStyles.login_img}
        />
      </section>
    </main>
  );
};

export default Login;
