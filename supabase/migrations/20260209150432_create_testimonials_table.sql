/*
  # Create testimonials table

  1. New Tables
    - `testimonials`
      - `id` (uuid, primary key) - Unique identifier for each testimonial
      - `name` (text) - Name of the person giving the testimonial
      - `role` (text) - Their job title/position
      - `company` (text) - Company they work for
      - `content` (text) - The testimonial content
      - `rating` (integer) - Rating out of 5
      - `image_url` (text, optional) - URL to their profile image
      - `is_approved` (boolean) - Whether admin has approved it for display
      - `created_at` (timestamptz) - When the testimonial was submitted
      
  2. Security
    - Enable RLS on `testimonials` table
    - Add policy for anyone to read approved testimonials
    - Add policy for anyone to insert new testimonials (pending approval)
*/

CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  role text NOT NULL,
  company text NOT NULL,
  content text NOT NULL,
  rating integer NOT NULL DEFAULT 5 CHECK (rating >= 1 AND rating <= 5),
  image_url text,
  is_approved boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view approved testimonials"
  ON testimonials
  FOR SELECT
  USING (is_approved = true);

CREATE POLICY "Anyone can submit testimonials"
  ON testimonials
  FOR INSERT
  WITH CHECK (true);