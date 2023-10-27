import { appointmentStatus } from "../enums/appointmentStatus";

export interface Appointment {
  id: number;
  doctor: string;
  name: string;
  time: Date;
  status: appointmentStatus;
}
