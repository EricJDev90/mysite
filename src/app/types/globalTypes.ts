export type DataModel = {
    SiteName: string;
    Routes: Route[];
    ContactPage: ContactPageData;
    ExperiencePage: ExperiencePageData;
    HomePage: HomePageData;
    ProjectsPage: ProjectsPageData;
    SSPDF: SSPDFPageData;
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

export type HomePageData = {
  MessageLabel: string;
  Message: string;
  RecruiterMessage: string;
  SiteDisclaimer: string;
}

export type ProjectsPageData = {
    Title: string;
    Message: string;
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
