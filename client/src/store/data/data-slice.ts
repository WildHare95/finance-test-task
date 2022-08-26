import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {ServerResponseQuotas} from "../types";

export interface QuotasState {
    quotasData: ServerResponseQuotas[]
    sampleOfQuotas: string[],
    fetchInterval: number
}

const initialState: QuotasState = {
    quotasData: [],
    sampleOfQuotas: [],
    fetchInterval: 5
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
        },
        setIntervalTime: (state, action: PayloadAction<number>) => {
            state.fetchInterval = action.payload
        }

    }
})

export const { setQuotasData, setSampleOfQuotas, setIntervalTime } = quotasSlice.actions

export default quotasSlice.reducer