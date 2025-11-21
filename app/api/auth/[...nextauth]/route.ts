import { handlers } from "@/auth" // Referring to the auth.ts we just created

export const dynamic = "force-dynamic" // Force runtime, no build-time access

export const { GET, POST } = handlers