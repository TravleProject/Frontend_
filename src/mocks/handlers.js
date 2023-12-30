import { http, HttpResponse } from "msw";
import { storeInfo } from "../constants/StoreInfo";
import { Reviews } from "../constants/PageReviews";

const userData = [
  {
    signupID: "admin",
    signupPWD: "1",
    signupNickname: "Admin",
    signupPhoneNumbe: "01011111111",
  },
];

export const handlers = [
  http.get("/getStoreInfo", () => {
    return HttpResponse.json(storeInfo);
  }),

  http.get("/getReview", () => {
    return HttpResponse.json(Reviews);
  }),

  http.post("/login", async ({ request }) => {
    const data = await request.json();

    const { id, pwd } = data;
    const success = userData.filter(
      (item) => item.signupID === id && item.signupPWD === pwd,
    );

    if (success.length > 0) {
      return HttpResponse.json({ msg: "Login successful" });
    } else {
      return HttpResponse.json({ msg: "Check your id and password" });
    }
  }),

  http.post("/Signup", async ({ request }) => {
    const user = await request.json();
    console.log(user);
    userData.push(user);
    return HttpResponse.json({ msg: "Signup successful" });
  }),

  // http.post('/Auth', async ({ request }) => {
  //   const auth = await request.json();
  //   console.log(auth);
  // }),
];
