import { rolesActions } from "@/redux/rolesSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { Button, Divider, Input, Modal, Typography } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useState } from "react";

const { Text, Title } = Typography;

export interface EditStageModalProps {
    visible: boolean;
    stageId: string;
    roleId: string;
    onOk: () => void;
    onCancel: () => void;
    deletable: boolean;
}

function EditStageModal({
    visible,
    stageId,
    roleId,
    onOk,
    onCancel,
    deletable,
}: EditStageModalProps) {
    const roles = useAppSelector((state) => state.roles);
    const role = roles.find((r) => r.id === roleId)!;
    const stage = role.stages.find((s) => s.id === stageId)!;

    const dispatch = useAppDispatch();

    const [title, setTitle] = useState<string>(stage.title);
    const [description, setDescription] = useState<string>(stage.description);

    const handleCancel = () => onCancel();

    function handleDeleteStage() {
        dispatch(
            rolesActions.deleteRoleStage({
                roleId,
                stageId,
            })
        );
        onOk();
    }

    function handleUpdateStage() {
        dispatch(
            rolesActions.editRoleStage({
                roleId,
                stageId,
                title,
                description,
            })
        );
        onOk();
    }

    return (
        <Modal
            title={`Edit ${stage.title} Stage`}
            open={visible}
            onOk={handleUpdateStage}
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

            <Divider />
            <div className="flex flex-col">
                <Button
                    disabled={!deletable}
                    variant="solid"
                    color="danger"
                    onClick={handleDeleteStage}
                    className="w-1/3"
                >
                    Delete Stage
                </Button>
                {!deletable && (
                    <Text>
                        Stage has active applicants and cannot be deleted
                    </Text>
                )}
            </div>
        </Modal>
    );
}

export default EditStageModal;
