import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {ServerResponseQuotas} from "../types";

export interface QuotasState {
    quotasData: ServerResponseQuotas[]
    sampleOfQuotas: string[]
}

const initialState: QuotasState = {
    quotasData: [],
    sampleOfQuotas: []
}

export const quotasSlice = createSlice({
    name: 'quotas',
    initialState,
    reducers: {
        setQuotasData: (state, action: PayloadAction<ServerResponseQuotas[]>) => {
            state.quotasData = action.payload
        },
        setSampleOfQuotas: (state, action: PayloadAction<string[]>) => {
            state.sampleOfQuotas = action.payload
        }

    }
})

export const { setQuotasData, setSampleOfQuotas } = quotasSlice.actions

export default quotasSlice.reducer