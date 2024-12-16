"use client";
import { TagsOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { useRouter } from "next/navigation";
import { useState } from "react";

type MenuItem = Required<MenuProps>["items"][number];

function AppMenu() {
    const [current, setCurrent] = useState("home");
    const [openKeys, setOpenKeys] = useState<string[]>(["labeling"]);

    const router = useRouter();

    const onMenuClick: MenuProps["onClick"] = (e) => {
        //   console.log('click ', e);
        setCurrent(e.key);
    };

    const menuItems: MenuItem[] = [
        {
            label: "Roles",
            key: "roles",
            icon: <TagsOutlined />,
            onClick: () => router.push("/roles"),
        },
        // {
        //     label: "Candidates",
        //     key: "candidates",
        //     icon: <TagsOutlined />,
        //     onClick: () => router.push("/candidates"),
        // },
        {
            label: "Applications",
            key: "applications",
            icon: <TagsOutlined />,
            onClick: () => router.push("/applications"),
        },
    ];

    return (
        <Menu
            onClick={onMenuClick}
            className="h-full"
            mode="inline"
            items={menuItems}
            selectedKeys={[current]}
            openKeys={openKeys}
            onOpenChange={(keys) => setOpenKeys(keys)}
        />
    );
}

export default AppMenu;
