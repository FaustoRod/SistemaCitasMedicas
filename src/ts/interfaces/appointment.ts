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
  specialty: string;
  doctorId: number;
  doctor: string;
  patientId: number;
  patientName: string;
  time: Date;
}
