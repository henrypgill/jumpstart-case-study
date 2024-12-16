import { Role } from "@/types";


const fa: Role = {
    id: "1",
    title: "Founder's Associate",
    description: "",
    stages: [
        {
            id: "1",
            title: "Intro Interview",
            description: ""
        },
        {
            id: "2",
            title: "Case Study",
            description: ""
        },
        {
            id: "3",
            title: "Case Study Review",
            description: ""
        },
        {
            id: "4",
            title: "Founder Interview",
            description: ""
        },
    ]
}


const eng: Role = {
    id: "2",
    title: "Founding Engineer",
    description: "",
    stages: [
        {
            id: "1",
            title: "Intro Interview",
            description: ""
        },
        {
            id: "2",
            title: "Coding Challenge",
            description: ""
        },
        {
            id: "3",
            title: "Coding Challenge Review",
            description: ""
        },
        {
            id: "4",
            title: "Engeering Interview",
            description: ""
        },
        {
            id: "5",
            title: "Founder Interview",
            description: ""
        },
    ]
}


const growth: Role = {
    id: "3",
    title: "Growth Manager",
    description: "",
    stages: [
        {
            id: "1",
            title: "Interview 1",
            description: ""
        },
        {
            id: "2",
            title: "Interview 2",
            description: ""
        },
        {
            id: "3",
            title: "Interview 3",
            description: ""
        },
    ]
}

export const dummyRoles = [fa, eng, growth]