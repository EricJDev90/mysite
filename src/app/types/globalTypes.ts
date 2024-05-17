export type DataModel = {
    SiteName: string;
    Routes: Route[];
    ExperiencePage: ExperiencePageData
}

export type Route = {
    Title: string;
    Route: string;
    Icon: string;
}

export type ExperiencePageData = {
    BeganProgrammingMessage: string;
    Experience: Experience[]
}

export type Experience = {
    Id: number;
    Title: string;
    OrderNumber: number;
    Experience: {
        Label: string; 
        StartDate: string;
        EndDate?: string;
        RootLanguage?: string;
        MonthsSubtractor?: number;
    }[]
}