function timeToMinutes(t) {
  const [h, m] = t.trim().split(":").map(Number);
  return h * 60 + m;
}

export function hasConflict(newRes, reservations) {
  const newStart = timeToMinutes(newRes.start);
  const newEnd = timeToMinutes(newRes.end);

  return reservations.some((r) => {
    if (r.room !== newRes.room) return false;
    if (r.date !== newRes.date) return false;

    const start = timeToMinutes(r.start);
    const end = timeToMinutes(r.end);

    return newStart < end && newEnd > start;
  });
}