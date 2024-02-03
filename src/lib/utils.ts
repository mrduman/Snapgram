import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatDate = (dateString: string): string => {
  const now = new Date();
  const postDate = new Date(dateString);
  const differenceInSeconds = Math.floor(
    (now.getTime() - postDate.getTime()) / 1000
  );

  if (differenceInSeconds < 60) {
    return `${differenceInSeconds} seconds ago`;
  } else if (differenceInSeconds < 3600) {
    return `${Math.floor(differenceInSeconds / 60)} minutes ago`;
  } else if (differenceInSeconds < 86400) {
    return `${Math.floor(differenceInSeconds / 3600)} hours ago`;
  } else if (differenceInSeconds < 172800) {
    return "Yesterday";
  } else {
    return `${Math.floor(differenceInSeconds / 86400)} days ago`;
  }
};

export const checkIsLiked = (likeList: string[], userId: string) => {
  return likeList.includes(userId);
};

export const convertFileToUrl = (file: File) => URL.createObjectURL(file);
