import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function retryDbOperation<T>(
  operation: () => Promise<T>,
  maxRetries = 10,
  delay = 1000
): Promise<T> {
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await operation();
    } catch (error) {
      if (i === maxRetries - 1) throw error;

      console.log(
        `Database operation failed, retrying... (${i + 1}/${maxRetries})`
      );
      await new Promise((resolve) => setTimeout(resolve, delay * (i + 1)));
    }
  }
  throw new Error("Max retries exceeded");
}

export async function retryApiOperation<T>(
  operation: () => Promise<T>,
  maxRetries = 3,
  delay = 2000 // Longer delay for external APIs
): Promise<T> {
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await operation();
    } catch (error) {
      if (i === maxRetries - 1) throw error;

      console.log(`API operation failed, retrying... (${i + 1}/${maxRetries})`);
      await new Promise((resolve) => setTimeout(resolve, delay * (i + 1)));
    }
  }
  throw new Error("Max retries exceeded");
}
