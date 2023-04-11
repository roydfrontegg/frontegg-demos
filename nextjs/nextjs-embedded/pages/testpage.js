import { useAuth } from "@frontegg/nextjs";

export default function TestPage() {
  const { user } = useAuth();
    return (
      <div>
        <h1>the test page {user.name}</h1>
      </div>
    )
  }
  
  