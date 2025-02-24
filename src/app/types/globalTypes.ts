export type DataModel = {
    SiteName: string;
    Routes: RouteModel[];
    ContactPage: ContactPageData;
    ExperiencePage: ExperiencePageData;
    HomePage: HomePageData;
    ProjectsPage: ProjectsPageData;
    SSPDF: SSPDFPageData;
    TitanicPage: TitanicPageData;
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

export type TitanicPassengerData = {
    PassengerId: number;
    Survived: number; //0 = died, 1 = survived
    Pclass: number; //1= 1st class, 2 = 2nd, 3 = 3rd
    Name: string;
    Sex: string;
    Age: number;
    SibSp: number; //Number of siblings or spouses on Titanic
    Parch: number; //Number of parents/children aboard the titanic
    Ticket: string;
    Fare: number;
    Cabin: string; //Cabin number
    Embarked: string; //Port of Embarkation C = Cherbourg, Q = Queenstown, S = Southampton
}

export type TitanicPageData = {
    Title: string;
    Message: string;
}