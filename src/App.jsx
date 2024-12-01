import Desktop from "./components/desktop";
import "@react95/core/GlobalStyle";
import "@react95/core/themes/storm.css";
import { ClippyProvider } from "@react95/clippy";
import { Cursor } from "@react95/core";
import Clippy from "./components/clippy";

const App = () => {
  return (
    <>
      <ClippyProvider agentName="Rover">
        <Clippy />
        <Desktop className={Cursor.Auto} />
      </ClippyProvider>
    </>
  );
};

export default App;
