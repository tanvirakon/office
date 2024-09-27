import { Queue } from "bullmq";

const connection = {
  host: "localhost",
  port: 6379,
};

const queue = new Queue(
  "email-queue",

  { connection }
);

async function init() {
  const res = await queue.add(
    "email to akon",
    {
      body: "this is a messge body",
      email: "abc@gmail.com",
    }
    // { removeOnComplete: true, removeOnFail: true }
    // eta na dile redis e job gulo joma hye thake..bt eta dile process r pr auto remove hye jay
    //   , { delay: 10000 }
  );
  //  10s delay dile worker 10s pore eta proecess start krbe
  console.log("message added!!", res.id);
}

init();
