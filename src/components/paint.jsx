import { useEffect, useState, useRef } from "react";
import { Modal, Frame, TitleBar, Alert } from "@react95/core";
import { Mspaint } from "@react95/icons";

function Paint({ closePaint }) {
  const [showAlert, setShowAlert] = useState(false);
  const [showModal, setShowModal] = useState(true);
  const windowWidth = useRef(window.innerWidth);
  const windowHeight = useRef(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      windowWidth.current = window.innerWidth;
      windowHeight.current = window.innerHeight;
      if (windowWidth.current < 768) {
        setShowAlert(true);
        setShowModal(false);
      } else {
        setShowAlert(false);
        setShowModal(true);
      }
    };

    handleResize(); // Check initial size
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleCloseAlert = () => {
    setShowAlert(false);
  };
  return (
    <>
      {showAlert && (
        <Alert
          title="Error"
          type="error"
          message="Paint has the best user experience on desktop devices. Please open this on a larger screen."
          titleBarOptions={
            <TitleBar.Close key="close" onClick={handleCloseAlert} />
          }
          dragOptions={{
            defaultPosition: {
              x: 0,
              y: 180,
            },
          }}
          buttons={[
            {
              value: "OK",
              onClick: handleCloseAlert,
            },
          ]}
          style={{
            margin: 60,
          }}
        />
      )}
      {showModal && (
        <Modal
          icon={<Mspaint variant="16x16_4" />}
          title={"Paint"}
          titleBarOptions={[
            <Modal.Minimize key="minimize" />,
            <TitleBar.Close onClick={closePaint} key="close" />,
          ]}
          dragOptions={{
            defaultPosition: {
              x: 0,
              y: -50,
            },
          }}
          style={{ width: "100%", height: "100%" }}
        >
          <Frame style={{ padding: 0, width: "100%", height: "100%" }}>
            <iframe
              src="https://jspaint.app"
              width="100%"
              height="100%"
            ></iframe>
          </Frame>
        </Modal>
      )}
    </>
  );
}

export default Paint;
