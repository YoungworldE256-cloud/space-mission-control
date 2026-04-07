function MissionFilter({ currentFilter, setFilter }) {
  return (
    <div className="MissionFilter">
      <h3 >Filter Missions</h3>
      <button className="filter-btn" onClick={() => setFilter("All")}>All</button>
      <button className="filter-btn" onClick={() => setFilter("Planned")}>Planned</button>
      <button className="filter-btn" onClick={() => setFilter("Active")}>Active</button>
      <button className="filter-btn" onClick={() => setFilter("Completed")}>Completed</button>

      <p>Current Filter: {currentFilter}</p>
    </div>
  );
}

export default MissionFilter;