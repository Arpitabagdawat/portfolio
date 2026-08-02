-- ==========================================
-- Kickstarter Success Analysis
-- Database Setup
-- ==========================================

-- Create Table

CREATE TABLE kickstarter_projects (
    id BIGINT,
    name TEXT,
    category TEXT,
    subcategory TEXT,
    country TEXT,
    launched TIMESTAMP,
    deadline DATE,
    goal NUMERIC,
    pledged NUMERIC,
    backers INTEGER,
    state TEXT
);

-- Verify Data Import

SELECT COUNT(*) FROM kickstarter_projects;

SELECT * FROM kickstarter_projects
LIMIT 5;

-- Total Columns

SELECT COUNT(*)
FROM information_schema.columns
WHERE table_name='kickstarter_projects';

-- Clear Table (if required)

TRUNCATE TABLE kickstarter_projects;