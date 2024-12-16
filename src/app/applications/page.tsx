"use client";

import { useAppSelector } from "@/redux/store";
import { ApplicationStatus } from "@/types";
import { Button, Popover, Segmented, Select } from "antd";
import { DefaultOptionType } from "antd/es/select";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ApplicationsTable from "./ApplicationsTable";

// const { Title } = Typography;

export default function Roles() {
    const roles = useAppSelector((state) => state.roles);
    const router = useRouter();
    const [selectedApplicants, setSelectedApplicants] = useState<string[]>([]);
    const [applicationStatusFilter, setApplicationStatusFilter] = useState<ApplicationStatus | null>("active")
    const [selectedRoleId, setSelectedRoleId] = useState<string>(roles[0].id);

    const handleRoleChange = (value: string) => setSelectedRoleId(value);
    const selectData: DefaultOptionType[] = roles.map((r) => {
        return { value: r.id, label: r.title };
    });

    function onSelectApplicant(id: string) {
        // setSelectedApplicants(selectedApplicantKeys)
        const index = selectedApplicants.findIndex((appId) => appId === id);
        if (index === -1) {
            setSelectedApplicants([...selectedApplicants, id]);
        } else {
            setSelectedApplicants([...selectedApplicants.toSpliced(index, 1)]);
        }
    }

    function onAppStatusFilterChange(status: "Active" | "Rejected" | "All" ) {
        console.log(status)
        switch (status) {
            case "Active":
                setApplicationStatusFilter("active")
                break;
            case "Rejected":
                setApplicationStatusFilter("rejected")
                break;
            case "All":
                setApplicationStatusFilter(null)
                break;
        }
    }


    function onCheckAll(ids: string[]) {
        setSelectedApplicants(ids);
    }

    const content = (
        <div>
            <p>Content</p>
            <p>Content</p>
        </div>
    );

    return (
        <div className="flex flex-col p-4">
            <div className="flex flex-row justify-between items-center p-4 gap-x-4">
                <Select
                    defaultValue={roles[0].id}
                    style={{ width: 240 }}
                    onChange={handleRoleChange}
                    options={selectData}
                />

                <Segmented<string>
                    options={["Active", "Rejected", "All"]}
                    // value={applicationStatusFilter ?? "All"}
                    onChange={(value) => {onAppStatusFilterChange(value as "Active" | "Rejected" | "All")}}
                />
                <Popover content={content} title="Title">
                    <Button disabled={selectedApplicants.length < 1}>
                        Bulk Action
                    </Button>
                </Popover>
                <Button
                    color="primary"
                    variant="solid"
                    onClick={() => router.push("/roles")}
                >
                    Edit Stages
                </Button>
            </div>

            <ApplicationsTable
                selectedRoleId={selectedRoleId}
                onSelectApplicant={onSelectApplicant}
                selectedApplicants={selectedApplicants}
                onCheckAll={onCheckAll}
                applicantStatusFilter={applicationStatusFilter}
            />
        </div>
    );
}

// const [tab, setTab] = useState<string>(roles[0].id)

// const tabsItems: TabsProps["items"] = roles.map(r => {
//     return {
//         key: r.title,
//         label: r.
//     }
// })

// const tabsItems: TabsProps["items"] = [
//     {
//         key: "images",
//         label: "Images",
//         children: <ImagesTab />,
//     },
//     {
//         key: "predictions",
//         label: "Predictions",
//         children: <PredictionsTab />,
//     },
// ];

// <Tabs
//     defaultActiveKey="images"
//     // centered
//     className="h-full w-full"
//     items={tabsItems}
//     activeKey={tab}
//     onChange={(tab) => setTab(tab)}
// />
