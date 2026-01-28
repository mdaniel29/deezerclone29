//import { createClient } from '@/utils/supabase/server';
import { createClient, cookieStore } from "../utils/supabase/server";

export default async function Notes() {
    //const cookieStore = cookies();
  const supabase = await createClient(cookieStore);
  const { data: notes } = await supabase.from("notes").select();

  return <pre>{JSON.stringify(notes, null, 2)}</pre>
}