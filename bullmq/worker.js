import { Worker, Queue } from "bullmq";

const connection = {
  host: "localhost",
  port: 6379,
};


const worker = new Worker("email-queue", async (Job) => {
  console.log(`message rec id ${Job.id}`);
  console.log("pending");
  console.log("sending mail to", Job.data.email);
  await new Promise((res, rej) => setTimeout(() => res(), 5 * 1000));
  console.log("email sent");
},{connection});
