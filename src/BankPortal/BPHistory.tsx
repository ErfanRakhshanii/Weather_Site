import { useBPSelector } from "../Redux/BPHooks";
import { RootState } from "../Redux/BPStore";

export default function BPHistory() {
const state = useBPSelector((state: RootState) => state.bPReducers)
  return (
    <div className="bPHistory">
      <div className="bPHistory_U">
        <div className="bPHistory_U_P">آخرین تراکنش ها</div>
      </div>
      <div className="bPHistory_M">
        {state.Val !== -1 && state.bankPortal[state.Val].TSX.map((card) => {
          
          return (
            <div className="CardH_container">
              <div className="CH_U">
                <span className="CardH_Mab2">موجودی: {card.mablagh2} </span>

                <img
                  src={'card.icon'}
                  style={{ height: 60, width: 55 }}
                ></img>
                <span className="CardH_Mab2">شماره کارت: {card.cardNumber}</span>
              </div>
              <div className="CH_M">
                <span className="CardH_Mab2">
                  مبلغ خریداری شده: {card.mablagh2}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
