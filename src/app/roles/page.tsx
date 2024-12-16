"use client";

import { useAppSelector } from "@/redux/store";
import { RoleStage } from "@/types";
import { PlusCircleOutlined } from "@ant-design/icons";
import { Card, Divider, Typography } from "antd";
import Select, { DefaultOptionType } from "antd/es/select";
import { useState } from "react";
import CreateStageModal from "./CreateStageModal";
import EditStageModal from "./EditStageModal";

const { Text, Title } = Typography;

export default function Roles() {
    const roles = useAppSelector((state) => state.roles);
    const applications = useAppSelector((state) => state.applications);
    const candidates = useAppSelector((state) => state.candidates);
    const [selectedRoleId, setSelectedRoleId] = useState<string>(roles[0].id);
    const [selectedStageId, setSelectedStageId] = useState<string | null>(null);
    const [createStageModalVisible, setCreateStageModalVisible] =
        useState(false);
    const role = roles.find((r) => r.id === selectedRoleId)!;

    const stageApplicantBuckets: { [key: string]: string[] } = {};
    role.stages.forEach((s) => (stageApplicantBuckets[s.id] = []));
    applications
        .filter((a) => a.roleId === selectedRoleId)
        .forEach((a) => {
            const candidate = candidates.find((c) => c.id === a.candidateId)!;
            stageApplicantBuckets[a.stageId].push(candidate.name);
        });

    const handleRoleChange = (value: string) => setSelectedRoleId(value);
    const selectData: DefaultOptionType[] = roles.map((r) => {
        return { value: r.id, label: r.title };
    });

    function StageCard({ stage }: { stage: RoleStage }) {
        return (
            <Card
                className="w-1/4 hover:bg-slate-100 cursor-pointer"
                onClick={() => setSelectedStageId(stage.id)}
                role="button"
            >
                <div className="flex flex-col gap-y-0.5">
                    <Title level={5}>
                        {stage.id}. {stage.title}
                    </Title>
                    <Text>{stage.description}</Text>
                </div>
                {stageApplicantBuckets[stage.id].length > 0 && (
                    <>
                        <Divider />
                        <Title level={5}>Applicants</Title>
                        <div className="flex flex-col gap-y-0">
                            {stageApplicantBuckets[stage.id].map((n) => (
                                <Text key={n}>{n}</Text>
                            ))}
                        </div>
                    </>
                )}
            </Card>
        );
    }

    return (
        <div className="flex flex-col p-4">
            <CreateStageModal
                roleId={selectedRoleId}
                visible={createStageModalVisible}
                onOk={() => setCreateStageModalVisible(false)}
                onCancel={() => setCreateStageModalVisible(false)}
            />
            {selectedStageId && (
                <EditStageModal
                    stageId={selectedStageId}
                    roleId={selectedRoleId}
                    visible={!!selectedStageId}
                    onOk={() => setSelectedStageId(null)}
                    onCancel={() => setSelectedStageId(null)}
                    deletable={
                        stageApplicantBuckets[selectedStageId].length < 1
                    }
                />
            )}
            <div className="flex flex-row justify-between items-center p-4 gap-x-4">
                <Select
                    defaultValue={roles[0].id}
                    style={{ width: 240 }}
                    onChange={handleRoleChange}
                    options={selectData}
                />
            </div>
            <div className="flex flex-row flex-wrap gap-2 w-full justify-center">
                {role.stages.map((s) => (
                    <StageCard stage={s} key={s.id} />
                ))}

                <Card
                    className="w-1/4 bg-slate-200 hover:bg-slate-300 cursor-pointer"
                    styles={{
                        body: {
                            height: "100%",
                            width: "100%",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                        },
                    }}
                    onClick={() => setCreateStageModalVisible(true)}
                >
                    {/* <div
                className="w-full h-full flex flex-col items-center justify-center"
                
                > */}

                    <Title level={5}>Add Stage</Title>
                    <PlusCircleOutlined style={{ fontSize: 36 }} />
                    {/* </div> */}
                </Card>
            </div>
        </div>
    );
}
