"use client";

import React from "react";
import Link from "next/link";
import { Zap } from "lucide-react";

import { useSupabase, useUser } from "./hooks/useSupabase";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge, badgeVariants } from "./ui/badge";
import { useQuery } from "@tanstack/react-query";
import { ThemeToggle } from "./ThemeToggle";

export const UserAvatar = () => {
  const supabase = useSupabase();
  const user = useUser();

  const { data: creditBalance, error } = useQuery({
    queryKey: ["credit-balance", user?.id],
    queryFn: async () => {
      const creditsResp = await supabase
        ?.from("credit_balances")
        .select("credits")
        .eq("user_id", user?.id)
        .single();

      return creditsResp?.data?.credits || 0;
    },
    enabled: !!user?.id && !!supabase,
  });

  if (error) throw error;

  const userInitials = getInitials(user?.user_metadata.full_name);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="absolute right-0 focus:outline-none">
        <Avatar className="sm:h-1 sm:w-1 md:h-8 md:w-8 lg:h-12 lg:w-12">
          <AvatarImage src={user?.user_metadata.avatar_url} />
          <AvatarFallback>{userInitials}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <ThemeToggle />
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          Available Credits: <Badge variant="secondary">{creditBalance}</Badge>
        </DropdownMenuItem>
        <div className="full-width flex justify-center">
          <Link
            href="/pricing"
            className={`${badgeVariants({
              variant: "outline",
            })} outline-secondary mt-1.5 mb-1.5 `}
          >
            Buy Credits
            <Zap className="h-4 w-4" />
          </Link>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const getInitials = (name?: string) => {
  if (!name) return "?";
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
};
