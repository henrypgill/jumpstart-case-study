import { Application, ApplicationStatus, Candidate } from "@/types";
import { Button, Checkbox, Image, Table, Typography } from "antd";
import { TableProps } from "antd/es/table";
import { useState } from "react";
import { useAppSelector } from "../../redux/store";
import ApplicantPreviewModal from "./ApplicantPreviewModal";

const { Text } = Typography;

type TableDataItem = Candidate &
    Omit<
        Application,
        // | "roleId"
        "candidateId"
        // | "stageId"
    >;
type TableData = TableDataItem[];

export interface ApplicationsTableProps {
    selectedRoleId: string;
    selectedApplicants: string[];
    onSelectApplicant: (id: string) => void;
    onCheckAll: (ids: string[]) => void;
    applicantStatusFilter: ApplicationStatus | null;
}

function ApplicationsTable({
    selectedRoleId,
    selectedApplicants,
    onSelectApplicant,
    onCheckAll,
    applicantStatusFilter,
}: ApplicationsTableProps) {
    const applications = useAppSelector((state) => state.applications);
    const roles = useAppSelector((state) => state.roles);
    const candidates = useAppSelector((state) => state.candidates);
    const role = roles.find((r) => r.id === selectedRoleId)!;

    const data: TableData = applications
        .filter((a) => a.roleId === selectedRoleId)
        .filter((a) => {
            if (applicantStatusFilter === "active") {
                return a.status === "active";
            } else if (applicantStatusFilter === "rejected") {
                return a.status === "rejected";
            } else if (applicantStatusFilter === "offered") {
                return a.status === "offered";
            } else {
                return true;
            }
        })
        .map((a) => {
            const candidate = candidates.find((c) => c.id === a.candidateId);
            return {
                roleId: a.roleId,
                stageId: a.stageId,
                rationale: a.rationale,
                status: a.status,
                ...candidate!,
            };
        });

    const [selectedApplicantId, setSelectedApplicantId] = useState<string>();
    const [previewModalVisible, setPreviewModalVisible] = useState(false);

    function handleViewPreview(id: string) {
        setSelectedApplicantId(id);
        setPreviewModalVisible(true);
    }

    function onOk() {
        setPreviewModalVisible(false);
    }

    function onCancel() {
        setPreviewModalVisible(false);
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    function handleProgressApplicant() {}

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    function handleRejectApplicant() {}

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    function handleOfferApplicant() {}

    function handleCheckAll() {
        if (selectedApplicants.length > 0) {
            onCheckAll([]);
        } else {
            onCheckAll(data.map((a) => a.id));
        }
    }

    const columns: TableProps<TableDataItem>["columns"] = [
        {
            title: () => (
                <Checkbox
                    onChange={() => handleCheckAll()}
                    indeterminate={
                        selectedApplicants.length < data.length &&
                        selectedApplicants.length > 0
                    }
                    checked={selectedApplicants.length === data.length}
                ></Checkbox>
            ),
            dataIndex: "select",
            key: "select",
            render: (_, applicant) => (
                <Checkbox
                    onChange={() => onSelectApplicant(applicant.id)}
                    checked={
                        !!selectedApplicants.find((a) => a === applicant.id)
                    }
                ></Checkbox>
            ),
        },
        {
            title: "Photo",
            dataIndex: "photo",
            key: "photo",
            render: (_, applicant) => (
                <Image
                    src={applicant.photo}
                    alt=""
                    height={24}
                    width={24}
                    preview={false}
                />
            ),
        },
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Stage",
            dataIndex: "stageId",
            key: "stage",
            render: (_, applicant) => (
                <Text>
                    {"("}
                    {applicant.stageId}/{role.stages.length}
                    {")"}
                    {"  "}
                    {
                        role.stages.find((rs) => rs.id === applicant.stageId)!
                            .title!
                    }
                </Text>
            ),
        },
        {
            title: "Action",
            dataIndex: "action",
            key: "action",
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            render: (_, applicant) => (
                <>
                    {applicant.status === "rejected" ||
                    applicant.status === "offered" ? (
                        <Text>{applicant.status}</Text>
                    ) : (
                        <div className="flex flex-row gap-x-2">
                            <Button variant="outlined">Progress</Button>
                            <Button color="danger" variant="outlined">
                                Reject
                            </Button>
                            <Button color="primary" variant="outlined">
                                Offer
                            </Button>
                        </div>
                    )}
                </>
            ),
        },
        {
            title: "View",
            dataIndex: "view",
            key: "view",
            align: "center",
            render: (_, applicant) => (
                <Button onClick={() => handleViewPreview(applicant.id)}>
                    View
                </Button>
            ),
        },
    ];

    return (
        <>
            {selectedApplicantId && (
                <ApplicantPreviewModal
                    candidateId={selectedApplicantId}
                    visible={previewModalVisible}
                    onOk={onOk}
                    onCancel={onCancel}
                />
            )}
            <Table<TableDataItem>
                // rowSelection={{ type: "checkbox", ...rowSelection }}
                dataSource={data}
                columns={columns}
            />
        </>
    );
}

export default ApplicationsTable;
