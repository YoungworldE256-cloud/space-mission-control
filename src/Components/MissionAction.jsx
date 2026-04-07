function MissionAction({ missionId, updateMissionStatus }) {
  return (
    <div className="MissionAction">
      <button className="btn planned" onClick={() => updateMissionStatus(missionId, "Planned")}>
        Set Planned
      </button>
      <button className="btn active" onClick={() => updateMissionStatus(missionId, "Active")}>
        Launch Mission
      </button>
      <button className="btn completed" onClick={() => updateMissionStatus(missionId, "Completed")}>
        Complete Mission
      </button>
    </div>
  );
}

export default MissionAction;