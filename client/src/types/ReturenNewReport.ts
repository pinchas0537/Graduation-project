export type ReturenReport = {
    data: {
        id: string;
        category: string;
        urgency: string;
        message: string;
        imagePath: string;
        sourceType: string;
        createdAt: string;
        userId: string;
    }
}

export type GlobalReturenReport = {
    report: null | ReturenReport
    setReport: (report: ReturenReport) => void
}