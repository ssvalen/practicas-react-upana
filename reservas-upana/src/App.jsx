import ReservationForm from "./components/ReservationForm";
import ReservationList from "./components/ReservationList";
import ReservationFilters from "./components/ReservationFilters";

import { useReservations } from "./hooks/useReservations";

function App() {
  const {
    reservations,
    filteredReservations,
    addReservation,
    deleteReservation,
    setFilterRoom,
    setFilterDate,
  } = useReservations();

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">
        Reservas de Salas UPANA
      </h1>

      <ReservationForm
        addReservation={addReservation}
        reservations={reservations}
      />

      <ReservationFilters
        setFilterRoom={setFilterRoom}
        setFilterDate={setFilterDate}
      />

      <ReservationList
        reservations={filteredReservations}
        deleteReservation={deleteReservation}
      />
    </div>
  );
}

export default App;