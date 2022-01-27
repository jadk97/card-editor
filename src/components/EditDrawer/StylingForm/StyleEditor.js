import { useState, useRef } from "react";
import { Form, InputNumber, Row, Col, Typography, Divider } from "antd";
import { BlockPicker } from "react-color";
import styles from "../FormStyles.module.less";

const { Title } = Typography;

const StyleEditor = ({
  title,
  sizeValue,
  divider,
  onSizeChange,
  sizeLabel = "Size",
  colorValue,
  onColorChange,
  shouldScroll,
}) => {
  const [displayPicker, setDisplayPicker] = useState(false);
  const pickerRef = useRef();

  return (
    <Row gutter={[24, 0]} className={styles.formRow}>
      <Col span={24}>
        <Title level={3}>{title}</Title>
      </Col>
      <Col span={12}>
        <Form.Item
          label={sizeLabel}
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
        >
          <InputNumber
            style={{ width: "100%" }}
            formatter={(value) => `${value}px`}
            parser={(value) => value.replace("px", "")}
            value={sizeValue}
            onChange={(value) => onSizeChange(value)}
          />
        </Form.Item>
      </Col>
      <Col span={12}>
        <Form.Item
          label="Color"
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
        >
          <div
            ref={pickerRef}
            style={{
              padding: "8px",
              width: "40px",
              height: "40px",
              borderRadius: "4px",
              border: "4px solid #E0E0E0",
              background: colorValue,
              cursor: "pointer",
            }}
            onClick={() => {
              setDisplayPicker((prev) => !prev);
              if (shouldScroll()) {
                pickerRef.current.scrollIntoView({
                  behavior: "smooth",
                });
              }
            }}
          ></div>
          {displayPicker && (
            <div
              style={{
                position: "absolute",
                zIndex: 3,
                right: "48px",
                boxShadow: "0px 4px 24px rgba(0, 0, 0, 0.14)",
              }}
            >
              <div
                onClick={() => setDisplayPicker(false)}
                style={{
                  position: "fixed",
                  top: "0px",
                  right: "0px",
                  bottom: "0px",
                  left: "0px",
                }}
              />
              <BlockPicker
                color={colorValue}
                triangle="top"
                onChange={(color) => onColorChange(color)}
              />
            </div>
          )}
        </Form.Item>
      </Col>
      {divider && <Divider />}
    </Row>
  );
};

export default StyleEditor;
