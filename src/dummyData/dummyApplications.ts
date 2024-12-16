import { Application } from "@/types";

const rationales = [
    "As a proactive problem-solver with a track record of excelling in fast-paced environments, I thrive on wearing multiple hats to support ambitious goals. I bring sharp analytical skills, strategic thinking, and a hands-on approach to executing key projects. My experience in streamlining processes, managing stakeholders, and driving growth aligns with the dynamic needs of a Founder’s Associate role. I’m excited to collaborate directly with founders, turning ideas into impactful outcomes and ensuring operational excellence.",
    "With a proven ability to adapt and deliver in high-pressure environments, I excel at juggling multiple responsibilities to achieve ambitious targets. My blend of analytical thinking, strategic insight, and hands-on execution enables me to tackle complex challenges and drive meaningful results. Having honed my skills inoptimizing processes and fostering collaboration, I’m eager to partner with founders to transform ideas into impactful projects and contribute to the success of a dynamic organization",
    "I thrive in environments that demand adaptability, problem-solving, and a focus on delivering results. My background in managing diverse projects, streamlining operations, and building strong stakeholder relationships equips me to navigate the dynamic challenges of a Founder’s Associate role. Bycombining strategic vision with a practical, action-oriented mindset, I aim to support founders in driving growth, overcoming obstacles, and turning bold ideas into measurable success.",
    "As a versatile and results-driven professional, I bring a unique combination of critical thinking, operational expertise, and a passion for driving progress in high-growth settings. My experience spans process improvement, stakeholder management, and delivering strategic initiatives. I’m motivated by the opportunity to work closely with founders, ensuring smooth execution and impactful outcomes while contributing to the broader goals of an innovative team.",
];

const app1: Application = {
    roleId: "2",
    candidateId: "2",
    rationale: rationales[1],
    applicationTime: Date.now() - 1000 * 60 * 60 * 10,
    stageId: "1",
};

const app2: Application = {
    roleId: "2",
    candidateId: "5",
    rationale: rationales[2],
    applicationTime: Date.now() - 1000 * 60 * 60 * 24,
    stageId: "2",
};

const app3: Application = {
    roleId: "2",
    candidateId: "6",
    rationale: rationales[3],
    applicationTime: Date.now() - 1000 * 60 * 60 * 2 * 24,
    stageId: "3",
};

const app4: Application = {
    roleId: "1",
    candidateId: "2",
    rationale: rationales[4],
    applicationTime: Date.now() - 1000 * 60 * 60 * 3 * 24,
    stageId: "2",
};

const app5: Application = {
    roleId: "1",
    candidateId: "1",
    rationale: rationales[1],
    applicationTime: Date.now() - 1000 * 60 * 60 * 4 * 24,
    stageId: "3",
};

const app6: Application = {
    roleId: "1",
    candidateId: "3",
    rationale: rationales[2],
    applicationTime: Date.now() - 1000 * 60 * 60 * 5 * 24,
    stageId: "3",
};

const app7: Application = {
    roleId: "1",
    candidateId: "4",
    rationale: rationales[3],
    applicationTime: Date.now() - 1000 * 60 * 60 * 6 * 2,
    stageId: "3",
};

const app8: Application = {
    roleId: "3",
    candidateId: "7",
    rationale: rationales[4],
    applicationTime: Date.now() - 1000 * 60 * 60 * 7,
    stageId: "2",
};

const app9: Application = {
    roleId: "3",
    candidateId: "7",
    rationale: rationales[1],
    applicationTime: Date.now() - 1000 * 60 * 60 * 8,
    stageId: "2",
};

const app10: Application = {
    roleId: "3",
    candidateId: "8",
    rationale: rationales[2],
    applicationTime: Date.now() - 1000 * 60 * 60 * 9,
    stageId: "3",
};

export const dummyApplications: Application[] = [
    app1,
    app2,
    app3,
    app4,
    app5,
    app6,
    app7,
    app8,
    app9,
    app10,
];
