import { useEffect } from "react";
import { setIcon2 } from "../Redux/BankPortalReducers/bPReducers";
import { useBPDispatch, useBPSelector } from "../Redux/BPHooks";
import { RootState } from "../Redux/BPStore";

export default function B0P3_Icon2() {
  const ansar = "ansar.png";
  const ayande = "ayande.png";
  const bankeMarkazi = "bankeMarkazi.png";
  const dey = "dey.png";
  const eghtesad = "eghtesad.png";
  const gardeshgari = "gardeshgari.png";
  const hekmat = "hekmat.png";
  const iranzamin = "iranzamin.png";
  const karafarin = "karafarin.png";
  const keshavarzi = "keshavarzi.png";
  const khavarmiane = "khavarmiane.png";
  const kosar = "kosar.png";
  const maskan = "maskan.png";
  const mehr = "mehr.png";
  const mehrEghtesad = "mehrEghtesad.png";
  const mellat = "mellat.png";
  const melli = "melli.png";
  const parsian = "parsian.png";
  const pasargad = "pasargad.png";
  const refah = "refah.png";
  const saderat = "saderat.png";
  const saman = "saman.png";
  const sanatOMadan = "sanatOMadan.png";
  const sarmaye = "sarmaye.png";
  const sepah = "sepah.png";
  const shahr = "shahr.png";
  const sina = "sina.png";
  const tejarat = "tejarat.png";
  const tosee = "tosee.png";
  const toseeTaavon = "toseeTaavon.png";
  const toseeTaderat = "toseeTaderat.png";
  const state = useBPSelector((state: RootState) => state.bPReducers);
  const dispatch = useBPDispatch();
  useEffect(() => {
    if (state.cardNumber2.slice(0, 6) == state.cardNumber2) {
      dispatch(setIcon2(""));
    }
    if (state.cardNumber2.slice(0, 7) === "621986") {
      dispatch(setIcon2(saman));
    }
    if (state.cardNumber2.slice(0, 7) === "636214") {
      dispatch(setIcon2(ayande));
    }
    if (state.cardNumber2.slice(0, 7) === "627381") {
      dispatch(setIcon2(ansar));
    }
    if (
      state.cardNumber2.slice(0, 7) === "610433" ||
      state.cardNumber2.slice(0, 7) === "991975"
    ) {
      dispatch(setIcon2(mellat));
    }
    if (state.cardNumber2.slice(0, 7) === "603799") {
      dispatch(setIcon2(melli));
    }
    if (state.cardNumber2.slice(0, 7) === "627412") {
      dispatch(setIcon2(eghtesad));
    }
    if (state.cardNumber2.slice(0, 7) === "505785") {
      dispatch(setIcon2(iranzamin));
    }
    if (
      state.cardNumber2.slice(0, 7) === "622106" ||
      state.cardNumber2.slice(0, 7) === "627884"
    ) {
      dispatch(setIcon2(parsian));
    }
    if (
      state.cardNumber2.slice(0, 7) === "639347" ||
      state.cardNumber2.slice(0, 7) === "502229"
    ) {
      dispatch(setIcon2(pasargad));
    }
    if (
      state.cardNumber2.slice(0, 7) === "627648" ||
      state.cardNumber2.slice(0, 7) === "207177"
    ) {
      dispatch(setIcon2(toseeTaderat));
    }
    if (state.cardNumber2.slice(0, 7) === "627353") {
      dispatch(setIcon2(tejarat));
    }
    if (state.cardNumber2.slice(0, 7) === "502908") {
      dispatch(setIcon2(toseeTaavon));
    }
    if (state.cardNumber2.slice(0, 7) === "636949") {
      dispatch(setIcon2(hekmat));
    }
    if (state.cardNumber2.slice(0, 7) === "502938") {
      dispatch(setIcon2(dey));
    }
    if (state.cardNumber2.slice(0, 7) === "5589463") {
      dispatch(setIcon2(refah));
    }
    if (state.cardNumber2.slice(0, 7) === "621986") {
      dispatch(setIcon2(saman));
    }
    if (state.cardNumber2.slice(0, 7) === "589210") {
      dispatch(setIcon2(sepah));
    }
    if (state.cardNumber2.slice(0, 7) === "639607") {
      dispatch(setIcon2(sarmaye));
    }
    if (state.cardNumber2.slice(0, 7) === "639346") {
      dispatch(setIcon2(sina));
    }
    if (state.cardNumber2.slice(0, 7) === "502806") {
      dispatch(setIcon2(shahr));
    }
    if (state.cardNumber2.slice(0, 7) === "603769") {
      dispatch(setIcon2(saderat));
    }
    if (state.cardNumber2.slice(0, 7) === "627961") {
      dispatch(setIcon2(sanatOMadan));
    }
    if (state.cardNumber2.slice(0, 7) === "606373") {
      dispatch(setIcon2(mehr));
    }
    if (
      state.cardNumber2.slice(0, 7) === "627488" ||
      state.cardNumber2.slice(0, 7) === "502910"
    ) {
      dispatch(setIcon2(karafarin));
    }
    if (
      state.cardNumber2.slice(0, 7) === "603770" ||
      state.cardNumber2.slice(0, 7) === "639217"
    ) {
      dispatch(setIcon2(keshavarzi));
    }
    if (state.cardNumber2.slice(0, 7) === "505416") {
      dispatch(setIcon2(gardeshgari));
    }
    if (state.cardNumber2.slice(0, 7) === "636795") {
      dispatch(setIcon2(bankeMarkazi));
    }
    if (state.cardNumber2.slice(0, 7) === "628023") {
      dispatch(setIcon2(maskan));
    }
    if (
      state.cardNumber2.slice(0, 7) === "991975" ||
      state.cardNumber2.slice(0, 7) === "610433"
    ) {
      dispatch(setIcon2(mellat));
    }
    if (state.cardNumber2.slice(0, 7) === "603799") {
      dispatch(setIcon2(melli));
    }
    if (state.cardNumber2.slice(0, 7) === "639370") {
      dispatch(setIcon2(mehrEghtesad));
    }
    if (state.cardNumber2.slice(0, 7) === "505801") {
      dispatch(setIcon2(kosar));
    }
    if (state.cardNumber2.slice(0, 7) === "628157") {
      dispatch(setIcon2(tosee));
    }
  }, [state.cardNumber2]);
  return (
    <div className="B0P3_Icons">
      {
        <img
          src={state.icon2}
          style={
            state.icon2 == "" ? { display: "none" } : { height: 50, width: 50 }
          }
        ></img>
      }
    </div>
  );
}
