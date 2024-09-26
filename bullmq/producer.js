import { Queue } from "bullmq";

const connection = {
  host: "localhost",
  port: 6379,
};

const queue = new Queue("email-queue", { connection });

async function init() {
  const res = await queue.add("email to akon", {
    body: "this is a messge body",
    email: "abc@gmail.com",
  });
  console.log("message added!!", res.id);
}

init();
