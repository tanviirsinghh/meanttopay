import {PrismaClient} from '@repo/ui/client'

const client = new PrismaClient();
export default function Home() {
  return (
   <div className="font-black 2xl">Doc app</div>
  );
}
