import BPAddBtn from "./BPAddBtn";
import { useBPDispatch, useBPSelector } from "../Redux/BPHooks";
import {
  setCardNumber,
  setCardName,
  setCvv2,
  setSal,
  setMah,
  setPassword,
  setMablagh,
} from "../Redux/BankPortalReducers/bPReducers";
import { RootState } from "../Redux/BPStore";
import B0P3_Icon from "./BPIcon";
export default function BPBody0() {
  const dispatch = useBPDispatch();
  const state = useBPSelector((state: RootState) => state.bPReducers);
  return (

    <div className="BP_B0_container">
      <div className="B0_part1">
        <div className="B0P1_L">صفحه ثبت کارت</div>
        <div className="B0P1_R">اطلاعات کارت</div>
      </div>
      <div className="B0_part2">
        <input
          required
          value={state.cardName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const regex = /^[a-zA-Zآ-ی]+$/;
            if (e.target.value === "" || regex.test(e.target.value)) {
              dispatch(setCardName(e.target.value));
            }
          }}
        ></input>
        <span>نام</span>
      </div>
      <div className="B0_part3">
        <B0P3_Icon/>
        <input
          maxLength={16}
          required
          value={state.cardNumber}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const regex = /^-?[0-9]\d*\.?\d*$/;
            if (e.target.value === "" || regex.test(e.target.value)) {
              dispatch(setCardNumber(e.target.value));
            }
          }}
        ></input>
        <span>شماره کارت</span>
      </div>
      <div className="B0_part4">
        <input
          maxLength={4}
          required
          value={state.cvv2}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            dispatch(setCvv2(e.target.value));
          }}
        ></input>
        <span>(CVV2) شماره شناسایی دوم</span>
      </div>
      <div className="B0_part5">
        <span>تاریخ انقضای کارت</span>
        <div className="B0P5_inpt_container">
          <input
            className="B0P5_inpt0"
            maxLength={2}
            required
            value={state.sal}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              dispatch(setSal(e.target.value));
            }}
          ></input>
          <span className="B0P5_P0">سال</span>
          <input
            className="B0P5_inpt1"
            maxLength={2}
            required
            value={state.mah}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              dispatch(setMah(e.target.value));
            }}
          ></input>
          <span className="B0P5_P1">ماه</span>
        </div>
      </div>
      <div className="B0_part6">
        <input
          required
          value={state.password}
          maxLength={6}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const regex = /^-?[0-9]\d*\.?\d*$/;
            if (e.target.value === "" || regex.test(e.target.value)) {
              dispatch(setPassword(e.target.value));
            }
          }}
        ></input>
        <span>رمز دوم کارت</span>
      </div>
      <div className="B0_part7">
        <input
          type="number"
          required
          value={state.mablagh}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            dispatch(setMablagh(Number(e.target.value)));
          }}
        ></input>
        <span>مبلغ</span>
      </div>
      <BPAddBtn/>
    </div>
  );
}
