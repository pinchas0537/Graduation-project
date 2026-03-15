export type ReturenReport = {
        _id: string;
        category: string;
        urgency: string;
        message: string;
        imagesPath?: string[];
        sourceType: string;
        createdAt: string;
        userId: string;
}

export type GlobalReturenReport = {
    report: null | ReturenReport
    setReport: (report: ReturenReport) => void
}