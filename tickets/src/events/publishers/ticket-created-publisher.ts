import { Publisher, Subjects, TicketCreatedEvent } from '@sunilpanttickets/common'

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent>{
    subject: Subjects.TicketCreated = Subjects.TicketCreated;
}