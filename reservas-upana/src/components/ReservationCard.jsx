function ReservationCard({
  reservation,
  deleteReservation
}) {
  return (
    <div className="bg-white p-3 shadow rounded">
      <h3 className="font-bold">
        {reservation.name}
      </h3>

      <p>{reservation.room}</p>
      <p>{reservation.date}</p>
      <p>
        {reservation.start} - {reservation.end}
      </p>

      <button
        onClick={() =>
          deleteReservation(reservation.id)
        }
        className="text-red-500"
      >
        Eliminar
      </button>
    </div>
  );
}

export default ReservationCard;