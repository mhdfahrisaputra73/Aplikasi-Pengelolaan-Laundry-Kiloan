const SUPABASE_URL = "https://jynmhxzspatszddqhfkg.supabase.co";
const SUPABASE_KEY = "sb_publishable_8LSamSqwfBVVtRpnMm7z8Q_Y2nLz1Bd";

// Menghubungkan aplikasi dengan Supabase
const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);

console.log("Supabase berhasil dihubungkan!");
