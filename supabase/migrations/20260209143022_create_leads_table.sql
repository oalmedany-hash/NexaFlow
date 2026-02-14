/*
  # Create leads table for Get Started form

  1. New Tables
    - `leads`
      - `id` (uuid, primary key)
      - `full_name` (text, required)
      - `email` (text, required)
      - `phone` (text, required)
      - `problem` (text, required) - describes the problem the user is facing
      - `created_at` (timestamptz, auto-timestamp)

  2. Security
    - Enable RLS on `leads` table
    - Allow anyone to insert new leads (public submissions)
    - Restrict read access to prevent data exposure
*/

CREATE TABLE IF NOT EXISTS leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  problem text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert leads"
  ON leads
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Leads are not readable by default"
  ON leads
  FOR SELECT
  TO anon, authenticated
  USING (false);
