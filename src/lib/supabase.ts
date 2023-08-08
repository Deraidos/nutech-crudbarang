import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://yjcvpwznmzettziwxzgk.supabase.co'
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlqY3Zwd3pubXpldHR6aXd4emdrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE0MTYxMjIsImV4cCI6MjAwNjk5MjEyMn0.6iP18oW66lWDkUUjelW_5OH7EvXJ8BjscvZF2yLP51Y'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
