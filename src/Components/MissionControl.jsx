import { useState } from "react";
import MissionCard from "./MissionCard";
import MissionAction from "./MissionAction";
import MissionFilter from "./MissionFilter";
import "./MissionControl.css";
import "./MissionCard.css";
import "./MissionAction.css";
import "./MissionFilter.css";

function MissionControl({ missions }) {
   const [missionList, setMissionList] = useState(
    missions.map(mission => ({
      ...mission,
      updateCount: 0
    }))
  );


  const [filter, setFilter] = useState("All");
  const [numberOfMissions, setNumberOfMissions] = useState(0);

  function updateMissionStatus(id, newStatus) {
    setMissionList(currMissions =>
      currMissions.map(mission =>
        mission.id === id
          ? { ...mission, status: newStatus }
          : mission
      )
    );
  }

  const updateButton = (id) => {
  setMissionList(currMissions =>
    currMissions.map(mission =>
      mission.id === id
        ? { ...mission, updateCount: mission.updateCount + 1 }
        : mission
    )
  );
};

  const displayedMissions =
    filter === "All"
      ? missionList
      : missionList.filter(mission => mission.status === filter);

  return (
    <div className="MissionControl">
      <MissionFilter currentFilter={filter} setFilter={setFilter} />

      {displayedMissions.map(mission => (
        <div className="MissionItem" key={mission.id}>
          <MissionCard
            name={mission.name}
            status={mission.status}
            crew={mission.crew}
          />
          <MissionAction
            missionId={mission.id}
            updateMissionStatus={updateMissionStatus}
            updateButton={updateButton}
            updateCount={mission.updateCount}

          />
        </div>
      ))}
    </div>
  );
}

export default MissionControl;