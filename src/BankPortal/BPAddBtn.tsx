import { useBPDispatch, useBPSelector } from "../Redux/BPHooks";
import { RootState } from "../Redux/BPStore";
import {
  setCardNumber,
  setCardName,
  setCvv2,
  setSal,
  setMah,
  setPassword,
  setMablagh,
  addCard,
  setIcon,
} from "../Redux/BankPortalReducers/bPReducers";

export default function BPAddBtn() {
  const dispatch = useBPDispatch();
  const state = useBPSelector((state: RootState) => state.bPReducers);
  function add() {
    dispatch(addCard());
    dispatch(setCardName(""));
    dispatch(setCardNumber(""));
    dispatch(setIcon(""));
    dispatch(setMah(""));
    dispatch(setSal(""));
    dispatch(setCvv2(""));
    dispatch(setPassword(""));
    dispatch(setMablagh(0));
  }

  return (
    <div className="B0_btn_container">
      <button
        className="B0_btn"
        onClick={() => {
          if (
            state.cardName === "" &&
            state.cardNumber === "" &&
            state.mah === "" &&
            state.sal === "" &&
            state.cvv2 === "" &&
            state.password === "" &&
            state.mablagh === 0
          ) {
            alert("همه ی فیلد ها باید پر شود");
          }
          add();
        }}
      >
        ثبت کارت
      </button>
    </div>
  );
}
