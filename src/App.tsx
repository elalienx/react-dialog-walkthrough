// Node modules
import { useRef, useState } from "react";

// Project files
import ModalContent1 from "./components/ModalContent1";
import ModalContent2 from "./components/ModalContent2";
import Dialog from "./components/Dialog";
import "./styles/App.css";

export default function App() {
  // Local state
  const [dialogContent, setDialogContent] = useState<React.ReactNode>(null);

  // Properties
  const dialogRef = useRef<HTMLDialogElement>(null);

  // Methods
  function toggleDialog() {
    // Safeguard
    if (!dialogRef.current) return;

    dialogRef.current.hasAttribute("open")
      ? dialogRef.current.close()
      : dialogRef.current.showModal();
  }

  return (
    <div className="App">
      <p className="read-the-docs">Let’s create some dialogs</p>
      {/* Button 1 */}
      <button
        onClick={() => {
          setDialogContent(<ModalContent1 />);
          toggleDialog();
        }}
      >
        Dialog 1
      </button>

      <button
        onClick={() => {
          setDialogContent(<ModalContent2 />);
          toggleDialog();
        }}
      >
        Dialog 2
      </button>
      <Dialog toggleDialog={toggleDialog} ref={dialogRef}>
        {dialogContent}
      </Dialog>
    </div>
  );
}
