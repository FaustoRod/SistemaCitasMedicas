import { appointmentStatus } from "../enums/appointmentStatus";

export interface Appointment {
  id: number;
  doctorId: number;
  doctor: string;
  patientId: number;
  patientName: string;
  time: Date;
  status: appointmentStatus;
}

export interface AppointmentCreate {
  doctorId: number;
  doctor: string;
  patientId: number;
  patientName: string;
  time: Date;
}
