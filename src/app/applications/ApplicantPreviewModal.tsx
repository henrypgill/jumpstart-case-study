import { Button, Modal } from "antd";

// const { Text, Title } = Typography;

export interface PredictionModalProps {
    visible: boolean;
    onOk: () => void;
    onCancel: () => void;
    candidateId: string;
}

function ApplicantPreviewModal({
    visible,
    candidateId,
    onOk,
    onCancel,
}: PredictionModalProps) {
    // const applications = useAppSelector((state) => state.applications);
    // const roles = useAppSelector((state) => state.roles);
    // const candidates = useAppSelector((state) => state.candidates);

    const handleOk = () => onOk();
    const handleCancel = () => onCancel();

    return (
        <Modal
            title="View Prediction"
            open={visible}
            onOk={handleOk}
            onCancel={handleCancel}
        >
            <p>{candidateId}</p>
            <Button>View Full Profile</Button>
        </Modal>
    );
}

export default ApplicantPreviewModal;
