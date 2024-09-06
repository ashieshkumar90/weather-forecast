import { useEffect, useState } from "react";

export default function useDebouncedSearch(search) {
  const [debouncedSearch, setDebouncedSearch] = useState("");
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);
    return () => clearTimeout(timer);
  }, [search]);
  return debouncedSearch;
}
