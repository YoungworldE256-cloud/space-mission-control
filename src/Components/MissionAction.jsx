function MissionAction({ missionId, updateMissionStatus, updateButton, updateCount }) {
  return (
    <div className="MissionAction">
      <button
        className="btn planned"
        onClick={() => {
          updateMissionStatus(missionId, "Planned");
        }}
      >
        Set Planned
      </button>

      <button
        className="btn active"
        onClick={() => {
          updateMissionStatus(missionId, "Active");
        }}
      >
        Launch Mission
      </button>

      <button
        className="btn completed"
        onClick={() => {
          updateMissionStatus(missionId, "Completed");
        }}
      >
        Complete Mission
      </button>

      <button className="btn planned" onClick={() => updateButton(missionId)}>
        {`Update Missions (${updateCount})`}
      </button>
    </div>
  );
}

export default MissionAction;