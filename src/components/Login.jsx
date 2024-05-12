import axios from "axios";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Google from "../assets/icons/google.svg";
import { AuthContext } from "../context";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { auth, setAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const getData = async () => {
    try {
      setLoading(true);
      const res = await axios.post("https://dummyjson.com/auth/login", data);
      

      if (res.status === 200) {
    
        setAuth(res.data);
        navigate("/dashboard");
        toast.success("Successfully Loged In", {
          position: "top-center",
        });
      }
    } catch (error) {

      toast.error("Username and Passowrd not matched !!", {
        position: "top-center",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="  flex items-center  justify-center h-[100vh] m-auto ">
        <div className="flex flex-col  items-center gap-5 ">
          <div>
            <h1 className="text-[32px] font-[600] ">Tesla Corp</h1>
          </div>
          <div className="w-full">
            <h3 className="text-center text-[20px] mb-[7px] font-[600] ">
              Login to your dashboard
            </h3>
            <p className="mb-[20px] text-center ">
              Enter with your username and password
            </p>
            <form onSubmit={handleSubmit(getData)}>
              <div className="mb-5">
                <input
                  {...register("username", {
                    required: "username is required ",
                  })}
                  onChange={handleChange}
                  placeholder="Username"
                  className=" rounded-[9px] p-[8px] !pl-[15px] border-[#E0E0E0] border w-full  "
                  type="text"
                  name="username"
                  id=""
                />
                {errors && (
                  <p className="text-red-600">{errors?.username?.message}</p>
                )}
              </div>

              <div className="mb-5">
                <input
                  {...register("password", {
                    required: "password is required",
                  })}
                  placeholder="Password"
                  type="password"
                  name="password"
                  onChange={handleChange}
                  className="p-[8px] !pl-[15px] rounded-[9px] border-[#E0E0E0]  border w-full  "
                />
                {errors && (
                  <p className="text-red-600">{errors?.password?.message}</p>
                )}
              </div>

              <button
                type="submit"
                className=" p-[8px] !pl-[15px] rounded-[9px] bg-[#000000] text-white  border-[#E0E0E0]  border w-full "
              >
                {loading ? "Loading..." : "Login"}
              </button>
            </form>
          </div>

          <div className="w-full">
            <div className="flex gap-5 items-center mb-[20px] ">
              <div className=" hidden md:block h-[2px] w-full bg-[#E6E6E6] "></div>
              <p className="  w-[400px] text-center "> or continue with</p>
              <div className=" hidden md:block h-[2px] w-full bg-[#E6E6E6]  "></div>
            </div>

            <button className="p-[8px] gap-5 flex items-center justify-center text-black !pl-[15px] rounded-[9px] bg-[#EEEEEE]  border-[#E0E0E0]  border w-full ">
              <img src={Google} alt="" />
              Google
            </button>

            <p className="mt-[30px] max-w-[400px] text-center text-[#828282] ">
              By clicking continue, you agree to our{" "}
              <span className="text-[#000000] font-[400] ">
                Terms of Service
              </span>{" "}
              and{" "}
              <span className="text-[#000000] font-[400]  ">
                Privacy Policy
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
