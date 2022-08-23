import {RootState} from "./store";

export const selectQuoteData = (state: RootState) => state.quotas.quotasData
export const selectSampleOfQuotas = (state: RootState) => state.quotas.sampleOfQuotas