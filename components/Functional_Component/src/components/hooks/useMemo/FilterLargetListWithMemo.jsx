
import React, { useState, useMemo, useEffect } from "react";

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
  { id: 4, name: "David" },
];

const FilterLargetListWithMemo = () => {
  const [search, setSearch] = useState("");
  const [count, setCount] = useState(0);
  const [debouncing, setDebouncing] = useState("");

  useEffect(()=>{
    const handler = setTimeout(()=>{
      setDebouncing(search)
        },1000)
      return () => {
        clearTimeout(handler)
      }
  }, [search])
  const filteredUsers = useMemo(() => {
    console.log("Filtering Users...");
    return users.filter((user) =>
      user.name.toLowerCase().includes(debouncing.toLowerCase())
    );
  }, [debouncing]); // Only re-runs when `search` changes

  return (
    <div>
      <input
        type="text"
        placeholder="Search User"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>Re-render</button>

      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default FilterLargetListWithMemo

