
function MissionCard({ name, status, crew }) {
  return (
    <div className="MissionCard">
      <h2 className="MissionCard-title">{name}</h2>
      <p className="MissionCard-status">Status: {status}</p>
      <p className="MissionCard-crew">Crew: {crew.join(", ")}</p>
    </div>
  );
}

export default MissionCard;