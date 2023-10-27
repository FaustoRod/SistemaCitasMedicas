import { appointmentStatus } from "./enums/appointmentStatus";
import { Appointment } from "./interfaces/appointment";
import { DataManagement } from "./utils/dataManagement.ts";
import data from "../data/defaultAppointments.json";

export class AppointmentManagement extends DataManagement {
  getAppointments = () => {
    return this.getDataArray<Appointment>(import.meta.env.VITE_STORAGE_KEY);
  };

  // setUpModal = () => {
  //   const element = document.getElementById("saveAppointmentButton");
  //   if (element)
  //     element.addEventListener("click", () => this.saveAppointment());
  // };

  saveAppointment = (name: string, doctor: string, time: Date) => {
    const appointment: Appointment = {
      id: 0,
      doctor,
      name,
      time,
      status: appointmentStatus.Pending,
    };

    const appointmentList = this.getAppointments();

    appointment.id =
      appointmentList.length > 0
        ? appointmentList[appointmentList.length - 1].id + 1
        : 1;

    const newAppointmentList: Appointment[] = [...appointmentList, appointment];

    localStorage.setItem(
      import.meta.env.VITE_STORAGE_KEY,
      JSON.stringify(newAppointmentList),
    );
  };

  loadDefaultAppointments = () => {
    this.saveData("", import.meta.env.VITE_STORAGE_KEY);
    const appointments = data as unknown as Appointment[];
    appointments.forEach(({ name, doctor }) => {
      this.saveAppointment(name, doctor, new Date());
    });
  };
}
