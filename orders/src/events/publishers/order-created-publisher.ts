import { Publisher, Subjects, OrderCreatedEvent } from '@sunilpanttickets/common'

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent>{
    subject: Subjects.OrderCreated = Subjects.OrderCreated;
}