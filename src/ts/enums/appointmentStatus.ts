export enum appointmentStatus {
  Pending = 0,
  Done,
  Canceled,
}

export enum appointmentStatusName {
  "Pendiente" = appointmentStatus.Pending,
  "Completada" = appointmentStatus.Done,
  "Cancelada" = appointmentStatus.Canceled,
}
