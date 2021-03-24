export default function SearchBar() {
  return (
    <div>
      <h2>Services</h2>

      <div class="filter-blk">
        <form>
          <label>Filter</label>
          <input type="text" class="form-control" />
          <button class="btn btn-light">Reset</button>
        </form>
      </div>
    </div>
  );
}
