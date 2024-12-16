"use client";

import {
    BellOutlined,
    QuestionCircleOutlined,
    UserOutlined,
} from "@ant-design/icons";
import { Button, Image, Layout, theme } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import Link from "next/link";
import React, { useState } from "react";
import "./App.css";
import "./globals.css";
import AppMenu from "./menu";
import StoreProvider from "@/redux/storeProvider";

function AppContainer({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <StoreProvider>
            <Layout className="min-h-screen m-0">
                <Sider
                    collapsible
                    collapsed={collapsed}
                    onCollapse={(value) => setCollapsed(value)}
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                >
                    <div className="flex flex-col h-full">
                        <Link
                            href="/"
                            className="flex items-center justify-center p-[8px] border-r-[1px] border-0 border-solid box-border border-ant-border-color"
                        >
                            <Image
                                src={
                                    collapsed
                                        ? "/jumpstartLogoSmall.png"
                                        : "/jumpstartLogoFull.svg"
                                }
                                height={26}
                                width={collapsed ? 26 : 130}
                                preview={false}
                                alt="Encord logo"
                            />
                        </Link>
                        <AppMenu />
                    </div>
                </Sider>
                <Layout>
                    <Header
                        style={{
                            padding: 0,
                            background: colorBgContainer,
                            height: 43,
                        }}
                        className="leading-[43px]"
                    >
                        <div className="grid grid-cols-2 h-full">
                            <div className="flex flex-row align-middle justify-start px-8"></div>
                            <div className="flex flex-row items-center justify-end px-8 gap-x-2">
                                <Button type="text">
                                    <QuestionCircleOutlined /> help
                                </Button>
                                <Button type="text">
                                    <BellOutlined />
                                </Button>
                                <Button type="text">
                                    <UserOutlined />
                                </Button>
                            </div>
                        </div>
                    </Header>
                    <Content>{children}</Content>
                </Layout>
            </Layout>
        </StoreProvider>
    );
}

export default AppContainer;
