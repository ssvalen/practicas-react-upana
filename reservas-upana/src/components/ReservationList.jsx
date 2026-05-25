import ReservationCard from "./ReservationCard";

function ReservationList({ reservations, deleteReservation }) {
  if (reservations.length === 0) {
    return <p>No hay reservas</p>;
  }

  return (
    <div className="space-y-3">
      {reservations.map((r) => (
        <ReservationCard
          key={r.id}
          reservation={r}
          deleteReservation={deleteReservation}
        />
      ))}
    </div>
  );
}

export default ReservationList;