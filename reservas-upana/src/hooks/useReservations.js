import { useEffect, useState } from "react";

export function useReservations() {
  const [reservations, setReservations] = useState(() => {
    const saved = localStorage.getItem("reservations");
    return saved ? JSON.parse(saved) : [];
  });

  const [filterRoom, setFilterRoom] = useState("");
  const [filterDate, setFilterDate] = useState("");

  useEffect(() => {
    localStorage.setItem(
      "reservations",
      JSON.stringify(reservations)
    );
  }, [reservations]);

  const addReservation = (reservation) => {
    setReservations([...reservations, reservation]);
  };

  const deleteReservation = (id) => {
    setReservations(
      reservations.filter((r) => r.id !== id)
    );
  };

  const filteredReservations = reservations.filter((r) => {
    const matchRoom =
      filterRoom === "" || r.room === filterRoom;

    const matchDate =
      filterDate === "" || r.date === filterDate;

    return matchRoom && matchDate;
  });

  return {
    reservations,
    filteredReservations,
    addReservation,
    deleteReservation,
    filterRoom,
    filterDate,
    setFilterRoom,
    setFilterDate,
  };
}