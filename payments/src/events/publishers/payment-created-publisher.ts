import { Subjects, Publisher, PaymentCreatedEvent } from '@sunilpanttickets/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
