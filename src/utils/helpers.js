export function searchUsers(users, search) {
  if (!search) return users;

  return users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase()) ||
    user.email.toLowerCase().includes(search.toLowerCase()) ||
    user.company?.name?.toLowerCase().includes(search.toLowerCase()) ||
    user.address?.city?.toLowerCase().includes(search.toLowerCase())
  );
}

export function sortUsers(users, field) {
  const sorted = [...users];

  sorted.sort((a, b) => {
    if (field === "id") {
      return a.id - b.id;
    }

    const first = (a[field] || "").toLowerCase();
    const second = (b[field] || "").toLowerCase();

    return first.localeCompare(second);
  });

  return sorted;
}