import { useContext } from "react";
import { Card as AntDCard, Row, Col, Grid } from "antd";
import { EditTwoTone, CopyTwoTone, DeleteTwoTone } from "@ant-design/icons";
import { Typography } from "antd";
import { DrawerContext } from "../../context/DrawerContext";
import { CardsContext } from "../../context/CardsContext";
import styles from "./Card.module.less";

const { Title, Paragraph } = Typography;
const { useBreakpoint } = Grid;

const Card = ({ ...props }) => {
  const { showDrawer, selectedCardId } = useContext(DrawerContext);
  const { cards, duplicateCard, deleteCard } = useContext(CardsContext);

  const deleteDisabled = Boolean(cards.length === 1);
  const isSelected = Boolean(selectedCardId === props.id);

  const screens = useBreakpoint();

  return (
    <AntDCard
      className={`${styles.card} ${isSelected ? styles.selected : ""}`}
      style={{
        background: props.panelColor,
        borderRadius: props.borderRadius,
        margin: screens.lg ? "24px" : screens.md ? "24px 12px" : "16px 0px",
      }}
      title={
        <Title
          style={{
            fontSize:
              typeof props.titleFontSize === "number"
                ? props.titleFontSize
                : 36,
            color: props.titleColor,
            fontFamily: "Ubuntu",
            lineHeight: "41.6px",
          }}
        >
          {props.title}
        </Title>
      }
      bordered={false}
      extra={
        <>
          <Row gutter={[16, 16]}>
            <Col>
              <EditTwoTone
                className={styles.icon}
                style={{
                  cursor: "pointer",
                  fontSize: "24px",
                }}
                twoToneColor={"#00A3FF"}
                onClick={() => showDrawer(props.id)}
              />
            </Col>
            <Col>
              <CopyTwoTone
                twoToneColor={"#00A3FF"}
                className={styles.icon}
                style={{ cursor: "pointer", fontSize: "24px" }}
                onClick={() => duplicateCard(props.id)}
              />
            </Col>
            <Col>
              <DeleteTwoTone
                className={`${styles.icon} ${
                  deleteDisabled ? styles.disabled : ""
                }`}
                style={{
                  cursor: deleteDisabled ? "not-allowed" : "pointer",
                  fontSize: "24px",
                }}
                twoToneColor={deleteDisabled ? "#E0E0E0" : "#00A3FF"}
                onClick={
                  deleteDisabled ? undefined : () => deleteCard(props.id)
                }
              />
            </Col>
          </Row>
        </>
      }
    >
      <Paragraph
        style={{
          marginBottom: "0",
          fontFamily: "Open Sans",
          fontStyle: "normal",
          fontWeight: "normal",
          fontSize:
            typeof props.bodyFontSize === "number" ? props.bodyFontSize : 16,
          color: props.bodyColor,
          lineHeight: "22px",
        }}
      >
        {props.children}
      </Paragraph>
    </AntDCard>
  );
};

export default Card;
