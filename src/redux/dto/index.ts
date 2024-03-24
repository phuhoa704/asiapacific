export interface SubmitAppointmentDto {
    name: string
    email: string
    service_id: number
}

export interface SubmitContactDto {
    name: string
    surname: string
    phone: string
    email: string
    content: string
}