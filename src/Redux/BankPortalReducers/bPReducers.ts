import { createSlice } from "@reduxjs/toolkit";
interface pp {
  cardNumber: string,
  cardName: string,
  mablagh2: number,

}
interface initial_state {
  bankPortal: {
    id: number;
    cardNumber: string;
    cardName: string;
    icon: string;
    mah: string;
    sal: string;
    cvv2: string;
    password: string;
    mablagh: number;
    mablagh2: number;
    TSX: pp[]
  }[];
  cardNumber: string;
  cardName: string;
  icon: string;
  cvv2: string;
  sal: string;
  mah: string;
  password: string;
  mablagh: number;
  id: number;
  Val: number;
  /////////////////////
  cardNumber2: string;
  cardName2: string;
  icon2: string;
  cvv22: string;
  sal2: string;
  mah2: string;
  password2: string;
  mablagh2: number;
  TSX: pp[];
}
const initialState: initial_state = {
  bankPortal: [],
  cardNumber: "",
  cardName: "",
  icon: "",
  cvv2: "",
  sal: "",
  mah: "",
  password: "",
  mablagh: 0,
  id: 0,
  Val: -1,
  cardNumber2: "",
  cardName2: "",
  icon2: "",
  cvv22: "",
  sal2: "",
  mah2: "",
  password2: "",
  mablagh2: 0,
  TSX: [],
};
const bankPortalSlice = createSlice({
  name: "BP",
  initialState: initialState,
  reducers: {
    addCard: (state) => {
      if (
        state.cardNumber !== "" &&
        state.cardName !== "" &&
        state.icon !== "" &&
        state.mah !== "" &&
        state.sal !== "" &&
        state.password !== "" &&
        state.cvv2 !== "" &&
        state.mablagh !== -1
      ) {
        let add = {
          cardNumber: state.cardNumber,
          cardNumber2: state.cardNumber2,
          cardName: state.cardName,
          icon: state.icon,
          mah: state.mah,
          sal: state.sal,
          cvv2: state.cvv2,
          password: state.password,
          mablagh: state.mablagh,
          mablagh2: state.mablagh2,
          id: state.id,
          TSX: [],
        };
        state.bankPortal = [...state.bankPortal, add];
      }
    },
    setCardNumber: (state, { payload }: { payload: string }) => {
      state.cardNumber = payload;
    },
    setCardName: (state, { payload }: { payload: string }) => {
      state.cardName = payload;
    },
    setIcon: (state, { payload }: { payload: string }) => {
      state.icon = payload;
    },
    setCvv2: (state, { payload }: { payload: string }) => {
      state.cvv2 = payload;
    },
    setSal: (state, { payload }: { payload: string }) => {
      state.sal = payload;
    },
    setMah: (state, { payload }: { payload: string }) => {
      state.mah = payload;
    },
    setPassword: (state, { payload }: { payload: string }) => {
      state.password = payload;
    },
    setMablagh: (state, { payload }: { payload: number }) => {
      state.mablagh = payload;
    },
    setCardNumber2: (state, { payload }: { payload: string }) => {
      state.cardNumber2 = payload;
    },
    setCardName2: (state, { payload }: { payload: string }) => {
      state.cardName2 = payload;
    },
    setIcon2: (state, { payload }: { payload: string }) => {
      state.icon2 = payload;
    },
    setCvv22: (state, { payload }: { payload: string }) => {
      state.cvv22 = payload;
    },
    setSal2: (state, { payload }: { payload: string }) => {
      state.sal2 = payload;
    },
    setMah2: (state, { payload }: { payload: string }) => {
      state.mah2 = payload;
    },
    setPassword2: (state, { payload }: { payload: string }) => {
      state.password2 = payload;
    },
    setMablagh2: (state, { payload }: { payload: number }) => {
      state.mablagh2 = payload;
    },
    setVal: (state, { payload }: { payload: number }) => {
      state.Val = payload;
    },
    addCard2: (
      state,
      {
        payload,
      }: {
        payload: {
          id: number;
          cardNumber: string;
          cardName: string;
          icon: string;
          mah: string;
          sal: string;
          cvv2: string;
          password: string;
          mablagh: number;
          mablagh2: number;
          TSX: pp[];
        };
      }
    ) => {
      if (state.Val !== -1) {
        state.bankPortal[state.Val] = payload;
      }
    },
  },
});

export const {
  addCard,
  addCard2,
  setCardNumber,
  setCardName,
  setIcon,
  setCvv2,
  setSal,
  setMah,
  setPassword,
  setMablagh,
  setCardNumber2,
  setCardName2,
  setIcon2,
  setCvv22,
  setSal2,
  setMah2,
  setPassword2,
  setMablagh2,
  // setEditId,
  setVal,
} = bankPortalSlice.actions;
export default bankPortalSlice.reducer;
