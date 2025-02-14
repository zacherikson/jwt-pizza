import { test, expect } from "playwright-test-coverage";

test("home page", async ({ page }) => {
  await page.goto("/");

  expect(await page.title()).toBe("JWT Pizza");
});

// test("buy pizza with login", async ({ page }) => {
//   await page.goto("/");
//   await page.getByRole("button", { name: "Order now" }).click();
//   await expect(page.locator("h2")).toContainText("Awesome is a click away");
//   await page.getByRole("combobox").selectOption("1");
//   await page.getByRole("link", { name: "Image Description Veggie A" }).click();
//   await page.getByRole("link", { name: "Image Description Pepperoni" }).click();
//   await expect(page.locator("form")).toContainText("Selected pizzas: 2");
//   await page.getByRole("button", { name: "Checkout" }).click();
//   await page.getByPlaceholder("Email address").click();
//   await page.getByPlaceholder("Email address").fill("d@jwt.com");
//   await page.getByPlaceholder("Email address").press("Tab");
//   await page.getByPlaceholder("Password").fill("diner");
//   await page.getByRole("button", { name: "Login" }).click();
//   await expect(page.getByRole("main")).toContainText(
//     "Send me those 2 pizzas right now!"
//   );
//   await expect(page.locator("tbody")).toContainText("Veggie");
//   await page.getByRole("button", { name: "Pay now" }).click();
//   await expect(page.getByRole("main")).toContainText("0.008 ₿");
// });

test("purchase with login", async ({ page }) => {
  await page.route("*/**/api/order/menu", async (route) => {
    const menuRes = [
      {
        id: 1,
        title: "Veggie",
        image: "pizza1.png",
        price: 0.0038,
        description: "A garden of delight",
      },
      {
        id: 2,
        title: "Pepperoni",
        image: "pizza2.png",
        price: 0.0042,
        description: "Spicy treat",
      },
    ];
    expect(route.request().method()).toBe("GET");
    await route.fulfill({ json: menuRes });
  });

  await page.route("*/**/api/franchise", async (route) => {
    const franchiseRes = [
      {
        id: 2,
        name: "LotaPizza",
        stores: [
          { id: 4, name: "Lehi" },
          { id: 5, name: "Springville" },
          { id: 6, name: "American Fork" },
        ],
      },
      { id: 3, name: "PizzaCorp", stores: [{ id: 7, name: "Spanish Fork" }] },
      { id: 4, name: "topSpot", stores: [] },
    ];
    expect(route.request().method()).toBe("GET");
    await route.fulfill({ json: franchiseRes });
  });

  await page.route("*/**/api/auth", async (route) => {
    const loginReq = { email: "d@jwt.com", password: "a" };
    const loginRes = {
      user: {
        id: 3,
        name: "Kai Chen",
        email: "d@jwt.com",
        roles: [{ role: "diner" }],
      },
      token: "abcdef",
    };
    expect(route.request().method()).toBe("PUT");
    expect(route.request().postDataJSON()).toMatchObject(loginReq);
    await route.fulfill({ json: loginRes });
  });

  await page.route("*/**/api/order", async (route) => {
    const orderReq = {
      items: [
        { menuId: 1, description: "Veggie", price: 0.0038 },
        { menuId: 2, description: "Pepperoni", price: 0.0042 },
      ],
      storeId: "4",
      franchiseId: 2,
    };
    const orderRes = {
      order: {
        items: [
          { menuId: 1, description: "Veggie", price: 0.0038 },
          { menuId: 2, description: "Pepperoni", price: 0.0042 },
        ],
        storeId: "4",
        franchiseId: 2,
        id: 23,
      },
      jwt: "eyJpYXQ",
    };
    expect(route.request().method()).toBe("POST");
    expect(route.request().postDataJSON()).toMatchObject(orderReq);
    await route.fulfill({ json: orderRes });
  });

  await page.goto("/");

  // Go to order page
  await page.getByRole("button", { name: "Order now" }).click();

  // Create order
  await expect(page.locator("h2")).toContainText("Awesome is a click away");
  await page.getByRole("combobox").selectOption("4");
  await page.getByRole("link", { name: "Image Description Veggie A" }).click();
  await page.getByRole("link", { name: "Image Description Pepperoni" }).click();
  await expect(page.locator("form")).toContainText("Selected pizzas: 2");
  await page.getByRole("button", { name: "Checkout" }).click();

  // Login
  await page.getByPlaceholder("Email address").click();
  await page.getByPlaceholder("Email address").fill("d@jwt.com");
  await page.getByPlaceholder("Email address").press("Tab");
  await page.getByPlaceholder("Password").fill("a");
  await page.getByRole("button", { name: "Login" }).click();

  // Pay
  await expect(page.getByRole("main")).toContainText(
    "Send me those 2 pizzas right now!"
  );
  await expect(page.locator("tbody")).toContainText("Veggie");
  await expect(page.locator("tbody")).toContainText("Pepperoni");
  await expect(page.locator("tfoot")).toContainText("0.008 ₿");
  await page.getByRole("button", { name: "Pay now" }).click();

  // Check balance
  await expect(page.getByText("0.008")).toBeVisible();
});

test("About, history, and franchise page", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: "History" }).click();
  expect(page.getByText("Mama Ricci's kitchen")).toBeVisible();
  expect(page.getByText("the classic Neapolitan pizza")).toBeVisible();
  await page.getByRole("link", { name: "About" }).click();
  expect(page.getByText("our amazing employees")).toBeVisible();
  expect(page.getByText("Their creativity and expertise shine")).toBeVisible();
  await page
    .getByRole("contentinfo")
    .getByRole("link", { name: "Franchise" })
    .click();
  expect(page.getByText("So you want a piece of the pie?")).toBeVisible();
});

test("create franchise", async ({ page }) => {
  await page.route("*/**/api/auth", async (route) => {
    const loginReq = { email: "a@jwt.com", password: "admin" };
    const loginRes = {
      user: {
        id: 1,
        name: "常用名字",
        email: "a@jwt.com",
        roles: [{ role: "admin" }],
      },
      token: "tttttt",
    };
    expect(route.request().method()).toBe("PUT");
    expect(route.request().postDataJSON()).toMatchObject(loginReq);
    await route.fulfill({ json: loginRes });
  });
  let getFranchisesRes = [];
  await page.route("*/**/api/franchise", async (route) => {
    if (route.request().method() == "POST") {
      const franchiseReq = {
        name: "zach franchise",
        admins: [
          {
            email: "f@jwt.com",
          },
        ],
      };
      const franchiseRes = [
        {
          id: 1,
          name: "zach franchise",
          admins: [{ email: "f@jwt.com", id: 1, name: "franchisee" }],
        },
      ];
      getFranchisesRes = franchiseRes;
      expect(route.request().method()).toBe("POST");
      expect(route.request().postDataJSON()).toMatchObject(franchiseReq);
      await route.fulfill({ json: franchiseRes });
    } else if (route.request().method() == "GET") {
      expect(route.request().method()).toBe("GET");
      await route.fulfill({ json: getFranchisesRes });
    }
  });

  await page.goto("/");

  // Login
  await page.getByRole("link", { name: "Login" }).click();
  await page.getByPlaceholder("Email address").fill("a@jwt.com");
  await page.getByPlaceholder("Email address").press("Tab");
  await page.getByPlaceholder("Password").fill("admin");
  await page.getByRole("button", { name: "Login" }).click();

  expect(page.getByRole("link", { name: "Admin", exact: true })).toBeVisible();

  // Go to admin dashboard
  await page.getByRole("link", { name: "Admin", exact: true }).click();

  // Create franchise
  expect(page.getByRole("button", { name: "Add Franchise" })).toBeVisible();
  await page.getByRole("button", { name: "Add Franchise" }).click();
  await page.getByPlaceholder("franchise name").fill("zach franchise");
  await page.getByPlaceholder("franchise name").press("Tab");
  await page.getByPlaceholder("franchisee admin email").fill("f@jwt.com");
  await page.getByRole("button", { name: "Create" }).click();

  getFranchisesRes = [
    {
      id: 1,
      name: "zach franchise",
      stores: [],
      admins: [{ id: 3, name: "franchisee", email: "f@jwt.com" }],
    },
  ];

  await page
    .getByRole("row", { name: "zach franchise" })
    .getByRole("button")
    .click();
  await page.getByRole("button", { name: "Close" }).click();

  await expect(
    page.getByRole("cell", { name: "zach franchise" })
  ).not.toBeVisible();
});

test("Franchise dashboard", async ({ page }) => {
  await page.route("*/**/api/auth", async (route) => {
    const loginReq = {
      email: "f@jwt.com",
      password: "franchisee",
    };
    const loginRes = {
      user: {
        id: 3,
        name: "franchisee",
        email: "d@jwt.com",
        roles: [{ role: "diner" }, { objectId: 1, role: "franchisee" }],
      },
      token: "abcdef",
    };
    expect(route.request().method()).toBe("PUT");
    expect(route.request().postDataJSON()).toMatchObject(loginReq);
    await route.fulfill({ json: loginRes });
  });

  await page.route("*/**/api/franchise/3", async (route) => {
    if (route.request().method() == "GET") {
      const getFranchisesRes = [
        {
          id: 1,
          name: "Newest franchise!",
          stores: [],
          admins: [{ id: 3, name: "franchisee", email: "f@jwt.com" }],
        },
      ];
      expect(route.request().method()).toBe("GET");
      await route.fulfill({ json: getFranchisesRes });
    }
  });

  await page.route("*/**/api/franchise/1/store", async (route) => {
    const storeName = randomName();
    const storeReq = {
      franchiseId: 1,
      name: storeName,
    };
    const storeRes = {
      order: {
        id: "10",
        franchiseId: 1,
        name: storeName,
      },
      jwt: "eyJpYXQ",
    };
    expect(route.request().method()).toBe("POST");
    expect(route.request().postDataJSON()).toMatchObject(storeReq);
    await route.fulfill({ json: storeRes });
  });

  await page.goto("/");

  // Login
  await page.getByRole("link", { name: "Login" }).click();
  await page.getByPlaceholder("Email address").fill("f@jwt.com");
  await page.getByPlaceholder("Email address").press("Tab");
  await page.getByPlaceholder("Password").fill("franchisee");
  await page.getByRole("button", { name: "Login" }).click();

  await page
    .getByLabel("Global")
    .getByRole("link", { name: "Franchise" })
    .click();

  expect(page.getByRole("button", { name: "Create store" })).toBeVisible();
  expect(page.getByText("Newest franchise!")).toBeVisible();
});

test("register user then logout", async ({ page }) => {
  await page.route("*/**/api/auth", async (route) => {
    if (route.request().method() == "POST") {
      const registerReq = {
        name: "diner",
        email: "d@jwt.com",
        password: "diner",
      };
      const registerRes = {
        user: {
          id: 3,
          name: "diner",
          email: "d@jwt.com",
          roles: [{ role: "diner" }],
        },
        token: "abcdef",
      };
      expect(route.request().postDataJSON()).toMatchObject(registerReq);
      await route.fulfill({ json: registerRes });
    } else if (route.request().method() == "DELETE") {
      const logoutRes = {
        message: "logout successful",
      };
      await route.fulfill({ json: logoutRes });
    }
  });

  await page.goto("/");

  await page.getByRole("link", { name: "Register" }).click();

  // Register user
  await page.getByPlaceholder("Full name").fill("diner");
  await page.getByPlaceholder("Full name").press("Tab");
  await page.getByPlaceholder("Email address").fill("d@jwt.com");
  await page.getByPlaceholder("Email address").press("Tab");
  await page.getByPlaceholder("Password").fill("diner");
  await page.getByRole("button", { name: "Register" }).click();

  await expect(page.getByRole("link", { name: "Logout" })).toBeVisible();

  await page.getByRole("link", { name: "Logout" }).click();
  await expect(page.getByRole("link", { name: "Login" })).toBeVisible();
});

test("Diner dashboard", async ({ page }) => {
  await page.route("*/**/api/auth", async (route) => {
    const loginReq = {
      email: "f@jwt.com",
      password: "franchisee",
    };
    const loginRes = {
      user: {
        id: 3,
        name: "franchisee",
        email: "f@jwt.com",
        roles: [{ role: "diner" }, { objectId: 1, role: "franchisee" }],
      },
      token: "abcdef",
    };
    expect(route.request().method()).toBe("PUT");
    expect(route.request().postDataJSON()).toMatchObject(loginReq);
    await route.fulfill({ json: loginRes });
  });

  await page.route("*/**/api/order", async (route) => {
    const orderRes = {
      dinerId: 1,
      orders: [
        {
          id: 1,
          franchiseId: 1,
          storeId: 1,
          date: "2025-02-13T05:14:40.000Z",
          items: [{ id: 1, menuId: 1, description: "Veggie", price: 0.05 }],
        },
      ],
      page: 1,
    };
    expect(route.request().method()).toBe("GET");
    await route.fulfill({ json: orderRes });
  });

  await page.goto("/");

  // Login
  await page.getByRole("link", { name: "Login" }).click();
  await page.getByPlaceholder("Email address").fill("f@jwt.com");
  await page.getByPlaceholder("Email address").press("Tab");
  await page.getByPlaceholder("Password").fill("franchisee");
  await page.getByRole("button", { name: "Login" }).click();

  await page.getByRole("link", { name: "f", exact: true }).click();
  await expect(page.getByText("franchisee", { exact: true })).toBeVisible();
  await expect(page.getByText("diner", { exact: true })).toBeVisible();
  await expect(page.getByText("Franchisee on 1")).toBeVisible();
  await expect(
    page.getByText("Here is your history of all the good times.")
  ).toBeVisible();
  await expect(page.getByText("0.05 ₿")).toBeVisible();
});
