import { useBPDispatch, useBPSelector } from "../Redux/BPHooks";
import { RootState } from "../Redux/BPStore";
import {
  addCard2,
  setCardName2,
  setCardNumber2,
  setCvv22,
  setMablagh2,
  setMah2,
  setPassword2,
  setSal2,
} from "../Redux/BankPortalReducers/bPReducers";

export default function BPAddBtn2() {
  const dispatch = useBPDispatch();
  const state = useBPSelector((state: RootState) => state.bPReducers);
  function Add2() {
    if (state.mablagh2 && state.cardNumber2 && state.cardName2) {
      let copy = [...state.bankPortal[state.Val].TSX]
      let t ={
        cardNumber: state.cardNumber2,
        cardName: state.cardName2,
        mablagh2: state.mablagh2,
      }
      copy.push(t)
      console.log(copy)
      let balance3 = {
        id: state.id,
        cardNumber: state.cardNumber2,
        cardName: state.cardName2,
        icon: state.icon2,
        mah: state.mah2,
        sal: state.sal2,
        cvv2: state.cvv22,
        password: state.password2,
        mablagh2: state.mablagh2,
        mablagh: state.bankPortal[state.Val].mablagh - state.mablagh2,
        TSX: copy
      };
      dispatch(addCard2(balance3));
      dispatch(setCardNumber2(""));
      dispatch(setCardName2(""));
      dispatch(setCvv22(""));
      dispatch(setPassword2(""));
      dispatch(setMah2(""));
      dispatch(setSal2(""));
      dispatch(setMablagh2(0));
      console.log(state.bankPortal)
    }

    // let tx = {
    //   id: Math.random(),
    //   mablgh2: state.mablagh2,
    //   cardNumber2: state.cardNumber2,
    //   icon2: state.icon2,
    //   cardName2: state.cardName2,
    //   cardName: state.cardName,
    //   cardNumber: state.cardNumber,
    //   sal: state.sal,
    //   mah: state.mah,
    //   cvv2: state.cvv2,
    //   password: state.password,
    //   mablagh: state.mablagh,
    //   icon: state.icon,
    //   TXS: [],
    // };
  }
  return (
    <div className="B0_btn_container">
      <button
        className="B0_btn"
        onClick={() => {
          Add2();
        }}
      >
        خرید
      </button>
    </div>
  );
}
