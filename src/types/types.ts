interface WorkExperience {
    role: string; //(1) Work Experience Role (from Candidate)
    company: string; //(1) Work Experience Company (from Candidate)
    description: string; //(1) Work Experience Description (from Candidate)
    duration: string; //(1) Time spent in work experience (from Candidate)
}

interface TechnicalProfile {
    github: string; //Github RAW (from Candidate)
    languages: string[]; //Coding languages new (from Candidate)
    // technologies: string[];
}

interface Education {
    classification: string; //Undergrad degree type (from Candidate)
    subject: string; //Undergrad subject (from Candidate)
    university: string; //Undergrad university (from Candidate)
    graduationYear: number; //Undergrad graduation year (from Candidate)
    result: string; //"3" | "2:2" | "2:1" | "1"; //Undergrad result (from Candidate)
}

// interface CandidatePreferences {
//     workStyle: "remote" | "hybrid" | "onsite"; //Preferred working style copy (from Candidate)
//     idealSalary: number;//Ideal salary (from Candidate)
//     minSalary: number;//Minimum salary (from Candidate)

// }

export interface Candidate {
    id: string;
    email: string; //Candidate
    name: string; //Candidate Full Name
    cv: string; //CV RAW (from Candidate)
    stream: string; //Jumpstart selection stream
    // rightToWork: string,    //Right to Work
    linkedIn: string; //LinkedIn RAW (from Candidate)
    education: Education[];
    photo: string; //Photo (from Candidate)
    professional: WorkExperience[];
    technical?: TechnicalProfile;
    notes: string[];
    // preferences: CandidatePreferences;
    // achievement: string;//Top achievement (from Candidate)
    // languages: string//Languages (from Candidate)
    //Generalist roles suitable for copy (from Candidate)
    //Raw video intro (from Candidate)
    //Role applied for
    //Ranking
    //Match type
    //Application Rationale
    //Stage
    //Stage last modified
    //Notes
}

export type ApplicationStatus = "active" | "rejected" | "offered";

export interface Application {
    roleId: string;
    candidateId: string;
    rationale: string;
    status: ApplicationStatus;
    // applicationTime: number;
    stageId: string;
}

export interface RoleStage {
    id: string;
    title: string;
    description: string;
}

export interface Role {
    id: string;
    title: string;
    description: string;
    stages: RoleStage[];
}
