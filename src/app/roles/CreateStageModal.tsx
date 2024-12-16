import { rolesActions } from "@/redux/rolesSlice";
import { useAppDispatch } from "@/redux/store";
import { Input, Modal, Typography } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useState } from "react";

const { Title } = Typography;

export interface CreateStageModalProps {
    visible: boolean;
    roleId: string;
    onOk: () => void;
    onCancel: () => void;
}

function CreateStageModal({
    visible,
    roleId,
    onOk,
    onCancel,
}: CreateStageModalProps) {
    // const roles = useAppSelector((state) => state.roles);
    // const role = roles.find((r) => r.id === roleId)!;

    const dispatch = useAppDispatch();

    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    // const [position, setPosition] = useState<number>(role.stages.length)

    const handleCancel = () => {
        setTitle("");
        setDescription("");
        onCancel();
    };

    function handleCreateStage() {
        dispatch(
            rolesActions.createRoleStage({
                roleId,
                // position,
                title,
                description,
            })
        );
        setTitle("");
        setDescription("");
        onOk();
    }

    return (
        <Modal
            title="Create New Application process Stage"
            open={visible}
            onOk={handleCreateStage}
            onCancel={handleCancel}
        >
            <div className="flex flex-col gap-y-4">
                <div className="flex flex-col gap-y-1">
                    <Title level={5}>Title</Title>
                    <Input
                        value={title}
                        placeholder="title"
                        showCount={true}
                        maxLength={20}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="flex flex-col gap-y-1">
                    <Title level={5}>Description</Title>
                    <TextArea
                        value={description}
                        placeholder="description"
                        showCount={true}
                        maxLength={160}
                        className="h-[80px]"
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
            </div>
        </Modal>
    );
}

export default CreateStageModal;
