import BPBody from "./BPBody";
import BPPayment from "./BPPayment"
import BPCardList from "./BPCardsList";
import BPHeader from "./BPHeader";
import { Route, Routes } from "react-router-dom";
import "./BankPortal.css";
import BPHistory from "./BPHistory";
export default function BankPortal() {
  return (
    <div className="BankPortal_Container">
      <BPHeader />
      <Routes>
        <Route path="/AddCard" element={<BPBody/>}></Route>
        <Route path="/Payment" element={<BPPayment/>}></Route>
        <Route path="/History" element={<BPHistory/>}></Route>
      </Routes>
      <BPCardList />
    </div>
  );
}
