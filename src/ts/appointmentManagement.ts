import { appointmentStatus } from "./enums/appointmentStatus";
import { Appointment, AppointmentCreate } from "./interfaces/appointment";
import { DataManagement } from "./utils/dataManagement.ts";
import data from "../data/defaultAppointments.json";

export class AppointmentManagement extends DataManagement {
  getAppointments = () => {
    return this.getDataArray<Appointment>(import.meta.env.VITE_STORAGE_KEY);
  };

  saveAppointment = (appointmentArg: AppointmentCreate) => {
    const appointment: Appointment = {
      id: 0,
      status: appointmentStatus.Pending,
      ...appointmentArg,
    };

    const appointmentList = this.getAppointments();

    appointment.id =
      appointmentList.length > 0
        ? appointmentList[appointmentList.length - 1].id + 1
        : 1;

    const newAppointmentList: Appointment[] = [...appointmentList, appointment];

    this.saveData(
      JSON.stringify(newAppointmentList),
      import.meta.env.VITE_STORAGE_KEY,
    );
  };

  loadDefaultAppointments = () => {
    this.saveData("", import.meta.env.VITE_STORAGE_KEY);
    const appointments = data as unknown as AppointmentCreate[];
    appointments.forEach(
      ({ specialty, doctor, doctorId, patientId, patientName }) => {
        this.saveAppointment({
          specialty,
          doctor,
          doctorId,
          patientId,
          patientName,
          time: new Date(),
        });
      },
    );
  };
}
