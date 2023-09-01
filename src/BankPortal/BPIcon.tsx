import { useEffect } from "react";
import { useBPDispatch, useBPSelector } from "../Redux/BPHooks";
import { RootState } from "../Redux/BPStore";
import { setIcon } from "../Redux/BankPortalReducers/bPReducers";
export default function B0P3_Icon() {
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
  const dispatch = useBPDispatch();
  const state = useBPSelector((state: RootState) => state.bPReducers);
  useEffect(() => {
    if (state.cardNumber.slice(0, 7) === "621986") {
      dispatch(setIcon(saman));
    }
    if (state.cardNumber.slice(0, 7) === "636214") {
      dispatch(setIcon(ayande));
    }
    if (state.cardNumber.slice(0, 7) === "627381") {
      dispatch(setIcon(ansar));
    }
    if (
      state.cardNumber.slice(0, 7) === "610433" ||
      state.cardNumber.slice(0, 7) === "991975"
    ) {
      dispatch(setIcon(mellat));
    }
    if (state.cardNumber.slice(0, 7) === "603799") {
      dispatch(setIcon(melli));
    }
    if (state.cardNumber.slice(0, 7) === "627412") {
      setIcon(eghtesad);
    }
    if (state.cardNumber.slice(0, 7) === "505785") {
      dispatch(setIcon(iranzamin));
    }
    if (
      state.cardNumber.slice(0, 7) === "622106" ||
      state.cardNumber.slice(0, 7) === "627884"
    ) {
      dispatch(setIcon(parsian));
    }
    if (
      state.cardNumber.slice(0, 7) === "639347" ||
      state.cardNumber.slice(0, 7) === "502229"
    ) {
      dispatch(setIcon(pasargad));
    }
    if (
      state.cardNumber.slice(0, 7) === "627648" ||
      state.cardNumber.slice(0, 7) === "207177"
    ) {
      setIcon(toseeTaderat);
    }
    if (state.cardNumber.slice(0, 7) === "627353") {
      dispatch(setIcon(tejarat));
    }
    if (state.cardNumber.slice(0, 7) === "502908") {
      dispatch(setIcon(toseeTaavon));
    }
    if (state.cardNumber.slice(0, 7) === "636949") {
      dispatch(setIcon(hekmat));
    }
    if (state.cardNumber.slice(0, 7) === "502938") {
      dispatch(setIcon(dey));
    }
    if (state.cardNumber.slice(0, 7) === "5589463") {
      dispatch(setIcon(refah));
    }
    if (state.cardNumber.slice(0, 7) === "621986") {
      dispatch(setIcon(saman));
    }
    if (state.cardNumber.slice(0, 7) === "589210") {
      dispatch(setIcon(sepah));
    }
    if (state.cardNumber.slice(0, 7) === "639607") {
      dispatch(setIcon(sarmaye));
    }
    if (state.cardNumber.slice(0, 7) === "639346") {
      dispatch(setIcon(sina));
    }
    if (state.cardNumber.slice(0, 7) === "502806") {
      dispatch(setIcon(shahr));
    }
    if (state.cardNumber.slice(0, 7) === "603769") {
      dispatch(setIcon(saderat));
    }
    if (state.cardNumber.slice(0, 7) === "627961") {
      dispatch(setIcon(sanatOMadan));
    }
    if (state.cardNumber.slice(0, 7) === "606373") {
      dispatch(setIcon(mehr));
    }
    if (
      state.cardNumber.slice(0, 7) === "627488" ||
      state.cardNumber.slice(0, 7) === "502910"
    ) {
      dispatch(setIcon(karafarin));
    }
    if (
      state.cardNumber.slice(0, 7) === "603770" ||
      state.cardNumber.slice(0, 7) === "639217"
    ) {
      dispatch(setIcon(keshavarzi));
    }
    if (state.cardNumber.slice(0, 7) === "505416") {
      dispatch(setIcon(gardeshgari));
    }
    if (state.cardNumber.slice(0, 7) === "636795") {
      dispatch(setIcon(bankeMarkazi));
    }
    if (state.cardNumber.slice(0, 7) === "628023") {
      dispatch(setIcon(maskan));
    }
    if (
      state.cardNumber.slice(0, 7) === "991975" ||
      state.cardNumber.slice(0, 7) === "610433"
    ) {
      dispatch(setIcon(mellat));
    }
    if (state.cardNumber.slice(0, 7) === "603799") {
      dispatch(setIcon(melli));
    }
    if (state.cardNumber.slice(0, 7) === "639370") {
      dispatch(setIcon(mehrEghtesad));
    }
    if (state.cardNumber.slice(0, 7) === "505801") {
      dispatch(setIcon(kosar));
    }
    if (state.cardNumber.slice(0, 7) === "628157") {
      dispatch(setIcon(tosee));
    }
  }, [state.cardNumber]);

  return (
    <div className="B0P3_Icons">
      {
        <img
          src={state.icon}
          style={
            state.icon == "" ? { display: "none" } : { height: 50, width: 50 }
          }
        ></img>
      }
    </div>
  );
}
