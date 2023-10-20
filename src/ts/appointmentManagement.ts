import { appointmentStatus } from "./enums/appointmentStatus";
import { Appointment } from "./interfaces/appointment";

export const getAppointments = () => {
  const appointmentsJson = localStorage.getItem(
    import.meta.env.VITE_STORAGE_KEY,
  );

  let appointmentList: Appointment[] = [];

  if (appointmentsJson) {
    appointmentList = JSON.parse(appointmentsJson);
  }

  return appointmentList;
};

export const setUpModal = () => {
  const element = document.getElementById("saveAppointmentButton");
  if (element) element.addEventListener("click", () => saveAppointment());
};

export const saveAppointment = () => {
  const name = document.querySelector<HTMLInputElement>("#appointment-name");
  const date = document.querySelector<HTMLInputElement>("#appointment-date");

  console.log(name?.value);
  console.log(date?.value);

  if (name && date) {
    const appointment: Appointment = {
      id: 0,
      name: name?.value ?? "",
      time: new Date(date!.value),
      status: appointmentStatus.Pending,
    };

    const appointmentList = getAppointments();

    appointment.id =
      appointmentList.length > 0
        ? appointmentList[appointmentList.length - 1].id + 1
        : 1;

    const newAppointmentList: Appointment[] = [...appointmentList, appointment];

    localStorage.setItem(
      import.meta.env.VITE_STORAGE_KEY,
      JSON.stringify(newAppointmentList),
    );
  }
};
