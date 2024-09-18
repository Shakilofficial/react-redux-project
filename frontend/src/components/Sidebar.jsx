import { useDispatch, useSelector } from "react-redux";
import { setSortBy } from "../features/filter/sortSlice";
import { setFilter } from "../features/posts/postsSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const sortBy = useSelector((state) => state.sort.sortBy); // Get the current sortBy state
  const filter = useSelector((state) => state.posts.filter); // Get current filter

  const handleSortChange = (e) => {
    dispatch(setSortBy(e.target.value)); // Dispatch action on select change
  };

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value)); // Update the filter state
  };

  return (
    <aside>
      <div className="sidebar-items">
        <div className="sidebar-content">
          <h4>Sort</h4>
          <select
            value={sortBy}
            onChange={handleSortChange}
            name="sort"
            id="lws-sort"
            className="w-full max-w-[150px] border-2 rounded-md text-gray-500"
          >
            <option value="">Default</option>
            <option value="newest">Newest</option>
            <option value="most_liked">Most Liked</option>
          </select>
        </div>
        <div className="sidebar-content">
          <h4>Filter</h4>
          <div className="radio-group">
            <div>
              <input
                type="radio"
                name="filter"
                id="lws-all"
                value="all"
                checked={filter === "all"}
                onChange={handleFilterChange}
                className="radio"
              />
              <label htmlFor="lws-all">All</label>
            </div>
            <div>
              <input
                type="radio"
                name="filter"
                id="lws-saved"
                value="saved"
                checked={filter === "saved"}
                onChange={handleFilterChange}
                className="radio"
              />
              <label htmlFor="lws-saved">Saved</label>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
