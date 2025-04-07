"use client";

import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useUser } from "./hooks/useSupabase";

export const UserAvatar = () => {
  const user = useUser();
  console.log(user);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="absolute right-0 focus:outline-none">
        <Avatar className="sm:h-1 sm:w-1 md:h-8 md:w-8 lg:h-12 lg:w-12">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>
          Hi, {user?.user_metadata?.name?.split(" ")[0]}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Available Credits: 56</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
