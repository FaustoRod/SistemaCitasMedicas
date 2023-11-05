import { appointmentStatus } from "../enums/appointmentStatus";

export interface Appointment {
  id: number;
  specialty: string;
  doctorId: number;
  doctor: string;
  patientId: number;
  patientName: string;
  time: Date;
  status: appointmentStatus;
}

export interface AppointmentCreate {
  id?: number;
  status?: appointmentStatus;
  specialty: string;
  doctorId: number;
  doctor: string;
  patientId: number;
  patientName: string;
  time: Date;
}
