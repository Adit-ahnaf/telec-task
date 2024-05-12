import { useContext } from "react";
import Edit from "../assets/icons/edit.svg";
import Menu from "../assets/icons/hamburger.svg";
import arshad from "../assets/images/arshad.png";
import fayaz from "../assets/images/fayaz.png";
import shojib from "../assets/images/shojib.png";
import tamanna from "../assets/images/tamanna.png";
import { AuthContext } from "../context";
import data from "../data";
export default function DashBoard() {
  const { setAuth } = useContext(AuthContext);

  
  const returnImage = (name) => {
    console.log('name--------', data)
    switch (name) {
      case "fayaz":
        return fayaz;
        break;
      case "shojib":
        return shojib;
        break;
      case "tamanna":
        return tamanna;
        break;
      case "arshad":
        return arshad;
        break;
    }
  };
  return (
    <div className="bg-[#171717] p-10  min-h-[100vh]">
      <div className="flex items-center justify-between pb-[20px] border-b border-[#FFFFFF40] ">
        <h1 className="text-white font-[700] text-[24px]">Tesla Corp</h1>
        <div
          className="cursor-pointer"
          onClick={() => {
            setAuth(null);
          }}
        >
          <img src={Menu} alt="" />
        </div>
      </div>

      <div className=" pb-[20px] border-b border-[#FFFFFF40] ">
        <h1 className="text-white font-[700] text-[18px] mt-4 ">
          {data.date}
        </h1>
        <p className="text-white">{data.day}</p>
      </div>

      <div>
        <h1 className="text-white mt-5 text-[20px] mb-3 ">
          Total Live Jobs : {data.livejobs}
        </h1>

        <div className="bg-[#262728] border-[#FFFFFF40] border rounded-[8px]">
          <div className="flex items-center justify-between p-[20px] pb-3 border-b border-[#FFFFFF40]">
            <h3 className="text-white">FrontEnd Developer</h3>
            <img src={Edit} alt="" />
          </div>

          <div className="flex items-center justify-between p-[20px] pb-3 ">
            <h3 className="text-white">Android Developer</h3>
            <img src={Edit} alt="" />
          </div>
        </div>

        <div className="bg-[#262728] border-[#FFFFFF40] border rounded-[8px] mt-5 p-5">
          <h2 className="text-white font-[700] text-[18px]">Total Applicant</h2>
          <p className="text-white font-[700] text-[40px]">{data.totalApplicant}</p>
          <p className="text-[#00E0B8] font-[700] text-[20px]">+25 last week</p>
        </div>

        <div className="bg-[#262728] border-[#FFFFFF40] border rounded-[8px] mt-5 p-5 ">
          <h2 className="text-white font-[700] text-[18px]">
            Matched Applicants
          </h2>

          {data.matchApplicant.map((person) => (
            <div className=" !px-0 md:!px-[20px] flex items-center justify-between p-[20px] pb-3 border-b border-[#FFFFFF40]">
              <div className="flex items-center gap-3">
                <img src={returnImage(person.img)} alt="" />
                <h3 className="text-white">{person.name}</h3>
              </div>
              <p className="underline text-white">View Resume</p>
            </div>
          ))}

          <button className="block m-auto !mt-[50px] py-[8px] px-[30px]  rounded-[30px] bg-black text-white ">
            See More
          </button>
        </div>
      </div>
    </div>
  );
}
