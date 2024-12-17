import { Image, Modal, Typography } from "antd";
import Link from "next/link";
import { ApplicationsTableDataItem } from "./ApplicationsTable";

const { Text, Title } = Typography;

export interface PredictionModalProps {
    visible: boolean;
    onOk: () => void;
    onCancel: () => void;
    applicant: ApplicationsTableDataItem;
}

function ApplicantPreviewModal({
    visible,
    applicant,
    onOk,
    onCancel,
}: PredictionModalProps) {
    // const applications = useAppSelector((state) => state.applications);
    // const roles = useAppSelector((state) => state.roles);
    // const candidates = useAppSelector((state) => state.candidates);

    const handleOk = () => onOk();
    const handleCancel = () => onCancel();

    if (!applicant) return <></>

    return (
        
        <Modal
            title={applicant.name}
            open={visible}
            onOk={handleOk}
            onCancel={handleCancel}
        >
            <div
                className="flex flex-row justify-center"
            >
                <Image src={applicant.photo} alt="" preview={false}/>
            </div>
            <div
                className="flex flex-col gapy-y-4"
            >

            <Text>LinkedIn <Link href={applicant.linkedIn}>{applicant.linkedIn}</Link></Text>
            <Text>email: {applicant.email}</Text>
            <Text>Degree: {applicant.education[0].subject} @ {applicant.education[0].university} </Text>
            <Title level={5}>Work Experience</Title>
            <Text>{applicant.professional[0].role} @ {applicant.professional[0].company} - {applicant.professional[0].duration}</Text>
            <Text>{applicant.professional[1].role} @ {applicant.professional[1].company} - {applicant.professional[1].duration}</Text>
            <Title level={5}>Rationale</Title>
            <Text>{applicant.rationale}</Text>
            </div>
        </Modal>
    );
}

export default ApplicantPreviewModal;
