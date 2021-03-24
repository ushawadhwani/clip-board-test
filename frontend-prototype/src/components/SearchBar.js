export default function SearchBar(props) {
  const handleFilterChange = (event) => {
    props.updateFilter(event.target.value);
  };

  return (
    <div>
      <h2>Services</h2>
      <div class="filter-blk">
        <form>
          <label>Filter</label>
          <input
            type="text"
            class="form-control"
            onChange={handleFilterChange}
            style={{ "margin-right": "10px" }}
          />
          <button class="btn btn-light" onClick={() => props.resetFilter()}>
            Reset
          </button>
        </form>
      </div>
    </div>
  );
}
