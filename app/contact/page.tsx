import React from "react";
import { prisma } from "../lib/prisma";

const Contact = async () => {
  let users = await prisma.product.findMany();
  console.log(users);

  let cate = await prisma.category.findMany();
  console.log(cate);

  let person = await prisma.person.findMany();
  console.log(person);

  return (
    <div>
      <div>
        {users?.map((user) => (
          <div
            key={user.id}
            style={{ border: "1px solid #ccc", textAlign: "center" }}
          >
            <h3>{user?.name}</h3>
          </div>
        ))}

        {cate?.map((item) => {
          return <p>{item.vegetable}</p>;
        })}

        {person?.map((item) => {
          return <div>{item.name}</div>;
        })}
      </div>
    </div>
  );
};

export default Contact;
