"use client";
import useFavouriteStore from "@/store/favouriteStore";
import { Heart } from "lucide-react";
import Link from "next/link";
import React from "react";

const Wishlist = () => {
  const { favouriteProducts } = useFavouriteStore();
  return (
    <Link href={"/wishlist"} className="group relative">
      <Heart className="w-5 h-5 group-hover:text-darkColor hoverEffect" />
      <span className="absolute -top-1 -right-1 bg-darkColor text-white h-3.5 w-3.5 rounded-full text-xs font-semibold flex items-center justify-center">
        {favouriteProducts.length ? favouriteProducts.length : 0}
      </span>
    </Link>
  );
};

export default Wishlist;
