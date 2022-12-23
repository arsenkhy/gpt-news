import Image from "next/image";
import Subscribe from "./Subscribe";
import React from "react";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <section className="mt-10">
      <hr className="border-1 opacity-20" />
      <Subscribe />
    </section>
  );
};

export default Sidebar;