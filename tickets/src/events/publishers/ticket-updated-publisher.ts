import { Publisher, Subjects, TicketUpdatedEvent } from '@sunilpanttickets/common'

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent>{
    subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}