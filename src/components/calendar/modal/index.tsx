import { duration, Moment } from "moment";
import { ReactNode, useState } from "react";
// import { Months, renderCalendar } from "./index.logic";
import s from "./index.module.css";
import moment from "moment";
import cn from "classnames";
import RNModal from "react-modal";
export type EventProps = {
  children: ReactNode;
  modalIsOpen: boolean;
  onRequestClose: Function;
};
RNModal.setAppElement("#root");
function Modal(props: EventProps) {
  const { children, modalIsOpen, onRequestClose } = props;

  return (
    <RNModal
      isOpen={modalIsOpen}
      onRequestClose={() => {
        onRequestClose();
      }}
      overlayClassName="modalOverlay"
      className={"modal"}
    >
      <div className="modalContent">{children}</div>
    </RNModal>
  );
}

export default Modal;
