import { useUserStore } from "@lib/state/currentUser";

async function GetUser(search: string) {
  const res = await fetch(`/api/search/users?q=${search}`);
  const data = await res.json();
  const user: string = useUserStore(() => user);
  const setNewUser = useUserStore((state) => state.setUser(search));
}

export function Searchbar() {
  return (
    <div>
      <input placeholder="Who you looking for cutie?" />
      <button type="button">
        <svg />
      </button>
    </div>
  );
}
