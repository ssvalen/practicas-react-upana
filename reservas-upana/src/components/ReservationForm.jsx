import { useState } from "react";
import { hasConflict } from "../utils/conflict";

function ReservationForm({
  addReservation,
  reservations
}) {
  const [form, setForm] = useState({
    name: "",
    room: "Sala 1",
    date: "",
    start: "",
    end: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.date ||
      !form.start ||
      !form.end
    ) {
      alert("Completa todos los campos");
      return;
    }

    if (form.start >= form.end) {
      alert("Hora inválida");
      return;
    }

    if (hasConflict(form, reservations)) {
      alert("Conflicto de horario en esta sala");
      return;
    }

    addReservation({
      id: Date.now(),
      ...form,
    });

    alert("Reserva creada correctamente");

    setForm({
      name: "",
      room: "Sala 1",
      date: "",
      start: "",
      end: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded shadow mb-4"
    >
      <input
        placeholder="Nombre"
        value={form.name}
        onChange={(e) =>
          setForm({ ...form, name: e.target.value })
        }
        className="border p-2 w-full mb-2"
      />

      <select
        value={form.room}
        onChange={(e) =>
          setForm({ ...form, room: e.target.value })
        }
        className="border p-2 w-full mb-2"
      >
        <option>Sala 1</option>
        <option>Sala 2</option>
        <option>Sala 3</option>
      </select>

      <input
        type="date"
        value={form.date}
        onChange={(e) =>
          setForm({ ...form, date: e.target.value })
        }
        className="border p-2 w-full mb-2"
      />

      <input
        type="time"
        value={form.start}
        onChange={(e) =>
          setForm({ ...form, start: e.target.value })
        }
        className="border p-2 w-full mb-2"
      />

      <input
        type="time"
        value={form.end}
        onChange={(e) =>
          setForm({ ...form, end: e.target.value })
        }
        className="border p-2 w-full mb-2"
      />

      <button className="bg-blue-600 text-white p-2 w-full">
        Reservar
      </button>
    </form>
  );
}

export default ReservationForm;