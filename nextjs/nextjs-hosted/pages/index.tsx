import { useCallback } from "react";
import { GetServerSideProps } from "next";
import { getSession } from "@frontegg/nextjs/pages";
import { useAuth } from "@frontegg/nextjs";
import { useRouter } from "next/router"

export default function MyPage({ products }) {
  const { user } = useAuth();

  const router = useRouter();

  const logout = useCallback(() => {
    router.replace('/account/logout');
  }, [router]);

  return (
    <div>
      <h1>My Page</h1>
      {products}
      <div>
        <img src={user?.profilePictureUrl} alt={user?.name} />
      </div>
      <div>
        <span>Logged in as: {user?.name}</span>
      </div>
      <div>
        <button onClick={logout}>Log out</button>
      </div>
    </div>
  );
}

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const session = await getSession(context.req);
//   if (session) {
//     const { data } = await fetch('{external}/product', {
//       headers: {
//         Authorization: 'bearer ' + session.accessToken,
//       },
//     });
//     return { props: { products: data } };
//   }

//   return { props: { products: [] } };
// };