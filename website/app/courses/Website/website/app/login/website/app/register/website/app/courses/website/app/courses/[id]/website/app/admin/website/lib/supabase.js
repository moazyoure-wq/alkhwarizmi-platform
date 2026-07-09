import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://wdhmirklghjmmywaqmse.supabase.co";
const supabaseKey = "sb_publishable_Z5aOFEDv7LVjhID3i6z8hw_NOXldJvq";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);
