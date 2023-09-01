import { useBPDispatch, useBPSelector } from "../Redux/BPHooks";
import {
  setCardName2,
  setCardNumber2,
  setIcon2,
  setCvv22,
  setSal2,
  setMah2,
  setPassword2,
  setMablagh2,
  setVal,
} from "../Redux/BankPortalReducers/bPReducers";
export default function BPCardList() {
  const dispatch = useBPDispatch();
  const state = useBPSelector((state) => state.bPReducers);
  return (
    <div className="cardList">
      {state.bankPortal.map((card, index) => {
        return (
          <div
            className="cardInfo"
            onClick={() => {
              dispatch(setVal(index))
              dispatch(setIcon2(card.icon));
              dispatch(setCardName2(card.cardName));
              dispatch(setCardNumber2(card.cardNumber));
              dispatch(setMah2(card.mah));
              dispatch(setSal2(card.sal));
              dispatch(setCvv22(card.cvv2));
              dispatch(setPassword2(card.password));
              dispatch(setMablagh2(0));
            }}
          >
            <div className="cI_U">
              <div className="cIU_L">ErfanCard</div>
              <div className="cIU_R">
                {<img src={card.icon} style={{ height: 45, width: 80 }}></img>}
              </div>
            </div>
            <div className="cI_M0">
              <img className="arrowLPic" src="arrowLPic.png"></img>
              <img className="chipPic" src="chipPic.png"></img>
              <div className="ci_M0R">
                <span className="CInfo_mah&sal">kir</span>
              </div>
            </div>
            <div className="cI_M1">
              <span className="CInfo_num">{card.cardNumber}</span>
            </div>
            <div className="cI_M2">
              <span className="CInfo_cvv">CVV2 :{card.cvv2}</span>
              <span className="CInfo_mah&sal">
                انقضا :{card.sal}:{card.mah}
              </span>
              <div className="cI_M2R">
                <span className="CInfo_name">{card.cardName}</span>
              </div>
            </div>
            <div className="cI_D">
              <div className="cI_DL">
                <span className="CInfo_mablagh">{card.mablagh}</span>
              </div>
              <img src="MasterCardLogoPic.png"></img>
            </div>
          </div>
        );
      })}
    </div>
  );
}
