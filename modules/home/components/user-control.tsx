"use client";

import { UserButton } from "@clerk/nextjs";

interface Props{
    showName?:boolean;
}

export default function UserControl({showName}:Props) {
  return (
    <div className="flex items-center gap-2">
        {showName && <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Hello, User</span>}
        <UserButton showName={showName} />
    </div>
  );
}