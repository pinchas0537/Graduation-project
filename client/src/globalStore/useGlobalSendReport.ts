import { create } from "zustand"
import type { GlobalReturenReport, ReturenReport } from "../types/ReturenNewReport"

export const useGlobalSendReport = create<GlobalReturenReport>((set) => ({
    report: null,
    setReport: (report: ReturenReport) => set({ report })
}))