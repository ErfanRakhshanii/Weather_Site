import { NavLink } from "react-router-dom";
export default function BPHeader() {
  return (
    <div className="BP_H_container">
      <div className="BP_H_L">
        <img className="BP_H_L_pic" src="BP_H_L_pic.svg"></img>
      </div>
      <div className="BP_H_M">
        <div className="BP_H_MU">
          <div>
            <span>پرداخت اینترنتی به پرداخت ملت</span>
          </div>
          <div className="BP_H_MUD">
            <div className="BP_H_MUU">
              <NavLink to={"/AddCard"}>ثبت کارت</NavLink>
              <NavLink to={"/Payment"}>پرداخت</NavLink>
              <NavLink to={"/History"}>تاریخچه تراکنش ها</NavLink>
            </div>
          </div>
        </div>

        <div className="BP_H_MD">
          <a className="BP_H_MD_P" href="http://www.pornhub.com">
            www.Behpardakht.com
          </a>
        </div>
      </div>
      <div className="BP_H_R">
        <img className="BP_H_R_pic" src="BP_H_R_pic.svg"></img>
      </div>
    </div>
  );
}
