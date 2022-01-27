import React, { useContext } from "react";
import { Drawer } from "antd";
import { DrawerContext } from "../../context/DrawerContext";
import { Tabs } from "antd";
import { FormatPainterOutlined, SettingOutlined } from "@ant-design/icons";
import SettingsForm from "./SettingsForm/SettingsForm";
import StylingForm from "./StylingForm/StylingForm";
import styles from "./EditDrawer.module.less";
const { TabPane } = Tabs;

const EditDrawer = () => {
  const { open, cleanup, handleClose } = useContext(DrawerContext);

  return (
    <Drawer
      className={styles.drawer}
      style={{
        position: "fixed",
        overflow: "hidden",
        top: "90px",
        height: "100%",
      }}
      placement={"right"}
      closable={false}
      getContainer={false}
      onClose={handleClose}
      afterVisibleChange={() => {
        if (!open) {
          cleanup();
        }
      }}
      visible={open}
      contentWrapperStyle={{
        boxShadow: "none",
      }}
      maskStyle={{ opacity: 0, animation: "none" }}
      key={"right"}
      bodyStyle={{ padding: 0 }}
    >
      <Tabs className={styles.tabs} defaultActiveKey="1" tabBarGutter={0}>
        <TabPane tab={<SettingOutlined style={{ fontSize: "20px" }} />} key="1">
          <SettingsForm />
        </TabPane>
        <TabPane
          tab={<FormatPainterOutlined style={{ fontSize: "20px" }} />}
          key="2"
        >
          <StylingForm />
        </TabPane>
      </Tabs>
    </Drawer>
  );
};

export default EditDrawer;
