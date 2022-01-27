import { useContext, useRef } from "react";
import { Form } from "antd";
import { CardsContext } from "../../../context/CardsContext";
import { DrawerContext } from "../../../context/DrawerContext";
import styles from "../FormStyles.module.less";
import StyleEditor from "./StyleEditor";

const StylingForm = () => {
  const { selectedCardId } = useContext(DrawerContext);
  const { cards, editCard } = useContext(CardsContext);

  const formRef = useRef();

  const cardToEdit = cards.find((card) => card.id === selectedCardId);

  const shouldScroll = () => {
    return (
      formRef?.current && formRef.current.scrollHeight > window.innerHeight
    );
  };

  return (
    <div ref={formRef} className={styles.form} style={{ height: "820px" }}>
      <Form layout="vertical">
        <StyleEditor
          title={"Title"}
          sizeValue={cardToEdit?.titleFontSize}
          onSizeChange={(value) =>
            editCard(selectedCardId, {
              titleFontSize: value,
            })
          }
          colorValue={cardToEdit?.titleColor}
          onColorChange={(color) =>
            editCard(selectedCardId, { titleColor: color.hex })
          }
          shouldScroll={shouldScroll}
          divider
        />
        <StyleEditor
          title={"Body"}
          sizeValue={cardToEdit?.bodyFontSize}
          onSizeChange={(value) =>
            editCard(selectedCardId, {
              bodyFontSize: value,
            })
          }
          colorValue={cardToEdit?.bodyColor}
          onColorChange={(color) =>
            editCard(selectedCardId, { bodyColor: color.hex })
          }
          shouldScroll={shouldScroll}
          divider
        />
        <StyleEditor
          title={"Panel"}
          sizeLabel={"Corner Radius"}
          sizeValue={cardToEdit?.borderRadius}
          onSizeChange={(value) =>
            editCard(selectedCardId, {
              borderRadius: value,
            })
          }
          colorValue={cardToEdit?.panelColor}
          onColorChange={(color) =>
            editCard(selectedCardId, { panelColor: color.hex })
          }
          shouldScroll={shouldScroll}
        />
      </Form>
    </div>
  );
};

export default StylingForm;
