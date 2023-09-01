import React from "react";
import {
  setCardName2,
  setCardNumber2,
  setCvv22,
  setSal2,
  setMah2,
  setPassword2,
  setMablagh2,
} from "../Redux/BankPortalReducers/bPReducers";
import { useBPDispatch, useBPSelector } from "../Redux/BPHooks";
import { RootState } from "../Redux/BPStore";
import B0P3_Icon2 from "./BPIcon2";
import BPAddBtn2 from "./BPAddBtn2";

export default function BPTransaction() {
  const dispatch = useBPDispatch();
  const state = useBPSelector((state: RootState) => state.bPReducers);
  const cardNumberHandleChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 16) {
      alert("تعداد ارقام شماره کارت نباید بیشتر از 16 رقم باشد.");
    } else {
      dispatch(setCardNumber2(e.target.value));
    }
  };
  const cvv2HandleChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 4) {
      alert("تعداد ارقام CVV2 نباید بیشتر از 4 رقم باشد.");
    } else {
      dispatch(setCvv22(e.target.value));
    }
  };
  const salHandleChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 2) {
      alert("تعداد ارقام سال نباید بیشتر از 2 رقم باشد");
    } else {
      dispatch(setSal2(e.target.value));
    }
  };
  const mahHandleChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 2) {
      alert("تعداد ارقام ماه نباید بیشتر از 2 رقم باشد");
    } else {
      dispatch(setMah2(e.target.value));
    }
  };
  return (
    <div className="BP_B0_container">
      <div className="BPT_part1">
        <div className="BPTP1_L">صفحه ی پرداخت</div>
        <div className="BPTP1_R">اطلاعات کارت</div>
      </div>
      <div className="BPT_part2">
        <input
          type="text"
          required
          value={state.cardName2}
          onChange={(e) => {
            dispatch(setCardName2(e.target.value));
          }}
        ></input>
        <span>نام</span>
      </div>
      <div className="BPT_part3">
        <B0P3_Icon2 />
        <input
          type="number"
          required
          value={state.cardNumber2}
          onChange={cardNumberHandleChange2}
        ></input>
        <span>شماره کارت</span>
      </div>
      <div className="BPT_part4">
        <input
          type="number"
          required
          value={state.cvv22}
          onChange={cvv2HandleChange2}
        ></input>
        <span>(CVV2) شماره شناسایی دوم</span>
      </div>
      <div className="BPT_part5">
        <span>تاریخ انقضای کارت</span>
        <div className="BPTP5_inpt_container">
          <input
            className="BPTP5_inpt0"
            type="number"
            required
            value={state.sal2}
            onChange={salHandleChange2}
          ></input>
          <span className="BPTP5_P0">سال</span>
          <input
            className="BPTP5_inpt1"
            type="number"
            required
            value={state.mah2}
            onChange={mahHandleChange2}
          ></input>
          <span className="BPTP5_P1">ماه</span>
        </div>
      </div>
      <div className="BPT_part6">
        <input
          required
          value={state.password2}
          onChange={(e) => {
            dispatch(setPassword2(e.target.value));
          }}
        ></input>
        <span>رمز دوم کارت</span>
      </div>
      <div className="BPT_part7">
        <input
          type="number"
          required
          value={state.mablagh2}
          onChange={(e) => {
            dispatch(setMablagh2(Number(e.target.value)));
          }}
        ></input>
        <span>مبلغ</span>
      </div>
      <BPAddBtn2/>
    </div>
  );
}
