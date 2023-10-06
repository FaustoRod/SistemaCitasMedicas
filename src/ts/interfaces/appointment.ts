import { appointmentStatus } from "../enums/appointmentStatus";

export interface Appointment {
  id: number;
  name: string;
  time: Date;
  status: appointmentStatus;
}
