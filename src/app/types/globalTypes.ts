export type DataModel = {
    SiteName: string;
    Routes: Route[];
    ContactPage: ContactPageData;
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

export type ContactPageData = {
    ContactMessage: string;
    Email: string;
    LinkedInMessage: string;
    LinkedInLink: string;
}