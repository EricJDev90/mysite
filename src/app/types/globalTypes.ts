export type DataModel = {
    SiteName: string;
    Routes: RouteModel[];
    ContactPage: ContactPageData;
    ExperiencePage: ExperiencePageData;
    HomePage: HomePageData;
    ProjectsPage: ProjectsPageData;
    SSPDF: SSPDFPageData;
}

export type RouteModel = {
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
    Title: string;
    LinkedInMessage: string;
    LinkedInLink: string;
    WebsiteVersion: string;
}

export type HomePageData = {
  MessageLabel: string;
  Message: string;
  RecruiterMessage: string;
  SiteDisclaimer: string;
}

export type ProjectsPageData = {
    Title: string;
    Projects: Project[];
}

export type Project = {
    Name: string;
    Route: string;
    DisplayImageLocation: string;
    ImgAlt: string;
    Description: string;
}

export type SSPDFPageData = {
    Title: string;
    Message: string;
    FileNameLabel: string;
    FileAlreadyExists: string;
    MissingName: string;
    FileListLabel: string;
    NeedMoreFiles: string;
    RemoveLabel: string;
    AddPDFsLabel: string;
    MergeLabel: string;
    ResetLabel: string;
}
