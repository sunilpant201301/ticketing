import { Publisher, Subjects, OrderCancelledEvent } from '@sunilpanttickets/common'

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent>{
    subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}