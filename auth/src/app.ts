import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';


import { currentUserRouter } from './routes/current-user'
import { signInRouter } from './routes/sign-in';
import { signOutRouter } from './routes/sign-out';
import { signUpRouter } from './routes/sign-up';
import { errorHandler, NotFoundError } from "@sunilpanttickets/common";
import cookieSession from 'cookie-session';

const app = express();
app.set('trust proxy', true);
app.use(json());
app.use(cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== 'test'
}))

app.use(currentUserRouter);
app.use(signInRouter);
app.use(signOutRouter);
app.use(signUpRouter);

// app.all("*", () => {
//   throw new NotFoundError();
// });

app.all("*", async (req, res) => {
    throw new NotFoundError();
});

app.use(errorHandler);
export { app };