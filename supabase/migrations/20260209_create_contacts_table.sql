/*
  # Create contacts table for Contact form

  1. New Tables
    - `contacts`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `email` (text, required)
      - `company` (text, required)
      - `message` (text, required)
      - `created_at` (timestamptz, auto-timestamp)

  2. Security
    - Enable RLS on `contacts` table
    - Allow anyone to insert new contacts (public submissions)
    - Restrict read access to prevent data exposure
*/

CREATE TABLE IF NOT EXISTS contacts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert contacts"
  ON contacts
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Contacts are not readable by default"
  ON contacts
  FOR SELECT
  TO anon, authenticated
  USING (false);
