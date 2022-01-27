import { useContext } from "react";
import styles from "../FormStyles.module.less";
import { Form, Input } from "antd";
import { CardsContext } from "../../../context/CardsContext";
import { DrawerContext } from "../../../context/DrawerContext";
const { TextArea } = Input;
const SettingsForm = () => {
  const { selectedCardId } = useContext(DrawerContext);
  const { cards, editCard } = useContext(CardsContext);

  const cardToEdit = cards.find((card) => card.id === selectedCardId);

  return (
    <Form layout="vertical" className={styles.form}>
      <Form.Item
        label="Title text"
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
      >
        <Input
          value={cardToEdit?.titleText}
          onChange={(e) =>
            editCard(selectedCardId, { titleText: e.target.value })
          }
          placeholder="Enter custom title"
        />
      </Form.Item>
      <Form.Item
        label="Body text"
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
      >
        <TextArea
          rows={4}
          value={cardToEdit?.bodyText}
          onChange={(e) =>
            editCard(selectedCardId, { bodyText: e.target.value })
          }
          placeholder="Enter custom text"
        />
      </Form.Item>
    </Form>
  );
};

export default SettingsForm;
