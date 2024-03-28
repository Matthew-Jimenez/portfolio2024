import React from "react";

export default async function RandomServerComponent() {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 10000);
  });

  return (
    <div>
      <h1>I took a long time to render</h1>
    </div>
  );
}
