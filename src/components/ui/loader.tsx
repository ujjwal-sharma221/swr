"use client";

import { LoaderPinwheel } from "lucide-react";

const Loader = () => {
  return (
    <div className="flex h-screen justify-center items-center z-50">
      <LoaderPinwheel className="animate-spin text-muted-foreground" />
    </div>
  );
};

export default Loader;
