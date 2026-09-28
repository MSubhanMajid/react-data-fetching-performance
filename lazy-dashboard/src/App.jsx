import { useState, lazy, Suspense } from "react";
import TabButton from "./components/TabButton";
import Spinner from "./components/Spinner";
import ErrorBoundry from "./components/ErrorBoundry";

const Reports = lazy(() => import("./pages/Reports"));
const Profile = lazy(() => import("./pages/Profile"));
const Settings = lazy(() => import("./pages/Settings"));
// ---To check error boundry
// const Settings = lazy(
//   () =>
//     new Promise((resolve, reject) => {
//       setTimeout(() => reject(new Error("Failed to load Settings chunk")), 500);
//     }),
// );

function App() {
  const [activeTab, setActiveTab] = useState("reports");
  function renderActiveTab() {
    if (activeTab === "reports") return <Reports />;
    if (activeTab === "profile") return <Profile />;
    if (activeTab === "settings") return <Settings />;
  }
  return (
    <div style={{ padding: "24px" }}>
      <h1>Analytics Dashboard</h1>
      <div>
        <TabButton
          label={"Reports"}
          isActive={activeTab === "reports"}
          onClick={() => setActiveTab("reports")}
        />
        <TabButton
          label={"Profile"}
          isActive={activeTab === "profile"}
          onClick={() => setActiveTab("profile")}
        />
        <TabButton
          label={"Settings"}
          isActive={activeTab === "settings"}
          onClick={() => setActiveTab("settings")}
        />
      </div>

      <div style={{ marginTop: "16px" }}>
        <ErrorBoundry>
          <Suspense fallback={<Spinner />}>{renderActiveTab()}</Suspense>
        </ErrorBoundry>
      </div>
    </div>
  );
}

export default App;
