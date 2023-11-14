import { appointmentStatus } from "./enums/appointmentStatus";
import { Appointment, AppointmentCreate } from "./interfaces/appointment";
import { DataManagement } from "./utils/dataManagement.ts";
import data from "../data/defaultAppointments.json";

export class AppointmentManagement extends DataManagement {
  getAppointments = () => {
    return this.getLocalDataArray<Appointment>(
      import.meta.env.VITE_STORAGE_KEY,
    );
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

    this.saveLocalData(
      JSON.stringify(newAppointmentList),
      import.meta.env.VITE_STORAGE_KEY,
    );
  };

  updateAppointment = (appointmentCreate: AppointmentCreate) => {
    const currentAppointments = this.getAppointments();

    let appointmentIndex = currentAppointments.findIndex(
      (a) => a.id === appointmentCreate.id,
    );

    let appointment = currentAppointments[appointmentIndex];
    if (appointment) {
      appointment = {
        id: appointmentCreate.id!,
        status: appointmentCreate.status ?? appointment.status,
        ...appointmentCreate,
      };

      currentAppointments[appointmentIndex] = appointment;

      this.saveLocalData(
        JSON.stringify(currentAppointments),
        import.meta.env.VITE_STORAGE_KEY,
      );

      return true;
    }
    return false;
  };

  loadDefaultAppointments = () => {
    this.saveLocalData("", import.meta.env.VITE_STORAGE_KEY);
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

  updateState = (id: number, status: appointmentStatus) => {
    const appointment = this.getAppointments().find((x) => x.id === id);
    if (appointment) {
      appointment.status = status;
      this.updateAppointment(appointment);
    }
  };
}
