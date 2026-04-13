/** Initials for management avatars when no photo is provided. */
export function initialsFromName(name) {
  const cleaned = name.replace(/^(Mr\.|Mrs\.|Ms\.|Engr\.)\s+/i, "").trim();
  const parts = cleaned.split(/\s+/).filter(Boolean);
  if (parts.length >= 2) {
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }
  return cleaned.slice(0, 2).toUpperCase();
}
