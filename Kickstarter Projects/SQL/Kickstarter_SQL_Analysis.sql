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

1. SELECT COUNT(*) FROM kickstarter_projects;

2. SELECT * FROM kickstarter_projects LIMIT 5;

3.
SELECT COUNT(*) FROM information_schema.columns
WHERE table_name = 'kickstarter_projects';

4.  TRUNCATE TABLE kickstarter_projects;


-- Total Number of Crowdfunding Projects

SELECT COUNT(*) AS total_projects
FROM kickstarter_projects;


-- Project Status Distribution

SELECT
    state,
    COUNT(*) AS total_projects
FROM kickstarter_projects
GROUP BY state
ORDER BY total_projects DESC;

-- Overall Success Rate

SELECT
    ROUND(
        COUNT(*) FILTER (WHERE state = 'Successful') * 100.0 / COUNT(*),
        2
    ) AS success_rate_percentage
FROM kickstarter_projects;

-- Overall Failure Rate

SELECT
    ROUND(
        COUNT(*) FILTER (WHERE state = 'Failed') * 100.0 / COUNT(*),
        2
    ) AS failure_rate_percentage
FROM kickstarter_projects;

-- Country-wise Project Distribution

SELECT
    country,
    COUNT(*) AS total_projects
FROM kickstarter_projects
GROUP BY country
ORDER BY total_projects DESC;

-- Check Unique Project Status Values

SELECT DISTINCT state
FROM kickstarter_projects;

-- Top Categories by Number of Projects

SELECT
    category,
    COUNT(*) AS total_projects
FROM kickstarter_projects
GROUP BY category
ORDER BY total_projects DESC
LIMIT 10;

-- View All Column Names

SELECT column_name
FROM information_schema.columns
WHERE table_name = 'kickstarter_projects';

-- Top 10 Categories by Number of Projects

SELECT
    category,
    COUNT(*) AS total_projects
FROM kickstarter_projects
GROUP BY category
ORDER BY total_projects DESC
LIMIT 10;

-- Top 10 Subcategories by Number of Projects

SELECT
    subcategory,
    COUNT(*) AS total_projects
FROM kickstarter_projects
GROUP BY subcategory
ORDER BY total_projects DESC
LIMIT 10;

-- Top 10 Successful Categories

SELECT
    category,
    COUNT(*) AS successful_projects
FROM kickstarter_projects
WHERE state = 'Successful'
GROUP BY category
ORDER BY successful_projects DESC
LIMIT 10;

-- Top 10 Failed Categories

SELECT
    category,
    COUNT(*) AS failed_projects
FROM kickstarter_projects
WHERE state = 'Failed'
GROUP BY category
ORDER BY failed_projects DESC
LIMIT 10;

-- Success Rate by Category

SELECT
    category,
    COUNT(*) AS total_projects,
    COUNT(*) FILTER (WHERE state = 'Successful') AS successful_projects,
    ROUND(
        COUNT(*) FILTER (WHERE state = 'Successful') * 100.0 / COUNT(*),
        2
    ) AS success_rate
FROM kickstarter_projects
GROUP BY category
ORDER BY success_rate DESC;


-- Average Funding Goal

SELECT
    ROUND(AVG(goal), 2) AS average_goal
FROM kickstarter_projects;


-- Average Amount Pledged

SELECT
    ROUND(AVG(pledged), 2) AS average_pledged
FROM kickstarter_projects;

-- Top 10 Projects by Amount Pledged

SELECT
    name,
    category,
    pledged
FROM kickstarter_projects
ORDER BY pledged DESC
LIMIT 10;

-- Top 10 Projects by Funding Goal

SELECT
    name,
    category,
    goal
FROM kickstarter_projects
ORDER BY goal DESC
LIMIT 10;

-- Categories with Highest Average Pledged Amount

SELECT
    category,
    ROUND(AVG(pledged), 2) AS average_pledged
FROM kickstarter_projects
GROUP BY category
ORDER BY average_pledged DESC;


-- Average Number of Backers

SELECT
    ROUND(AVG(backers), 2) AS average_backers
FROM kickstarter_projects;


-- Top 10 Most Backed Projects

SELECT
    name,
    category,
    backers
FROM kickstarter_projects
ORDER BY backers DESC
LIMIT 10;

-- Categories with Highest Average Backers

SELECT
    category,
    ROUND(AVG(backers), 2) AS average_backers
FROM kickstarter_projects
GROUP BY category
ORDER BY average_backers DESC;

-- Average Backers by Project Status

SELECT
    state,
    ROUND(AVG(backers), 2) AS average_backers
FROM kickstarter_projects
GROUP BY state
ORDER BY average_backers DESC;

-- Top 10 Successful Projects with Highest Backers

SELECT
    name,
    category,
    backers
FROM kickstarter_projects
WHERE state = 'Successful'
ORDER BY backers DESC
LIMIT 10;

-- Projects by Launch Year

SELECT
    EXTRACT(YEAR FROM launched) AS launch_year,
    COUNT(*) AS total_projects
FROM kickstarter_projects
GROUP BY launch_year
ORDER BY launch_year;

-- Projects by Launch Month

SELECT
    TO_CHAR(launched, 'Month') AS launch_month,
    COUNT(*) AS total_projects
FROM kickstarter_projects
GROUP BY launch_month
ORDER BY total_projects DESC;

-- Success Rate by Launch Year

SELECT
    EXTRACT(YEAR FROM launched) AS launch_year,
    COUNT(*) AS total_projects,
    COUNT(*) FILTER (WHERE state = 'Successful') AS successful_projects,
    ROUND(
        COUNT(*) FILTER (WHERE state = 'Successful') * 100.0 / COUNT(*),
        2
    ) AS success_rate
FROM kickstarter_projects
GROUP BY launch_year
ORDER BY launch_year;

-- Average Funding Goal by Launch Year

SELECT
    EXTRACT(YEAR FROM launched) AS launch_year,
    ROUND(AVG(goal),2) AS average_goal
FROM kickstarter_projects
GROUP BY launch_year
ORDER BY launch_year;

-- Average Amount Pledged by Launch Year

SELECT
    EXTRACT(YEAR FROM launched) AS launch_year,
    ROUND(AVG(pledged),2) AS average_pledged
FROM kickstarter_projects
GROUP BY launch_year
ORDER BY launch_year;

-- Advanced SQL 
-- Goal Range Analysis using CASE WHEN

SELECT
    CASE
        WHEN goal < 1000 THEN 'Below $1K'
        WHEN goal BETWEEN 1000 AND 9999 THEN '$1K - $10K'
        WHEN goal BETWEEN 10000 AND 49999 THEN '$10K - $50K'
        ELSE 'Above $50K'
    END AS goal_range,
    COUNT(*) AS total_projects
FROM kickstarter_projects
GROUP BY goal_range
ORDER BY total_projects DESC;

-- Category Performance using CTE

WITH category_summary AS
(
    SELECT
        category,
        COUNT(*) AS total_projects,
        COUNT(*) FILTER (WHERE state='Successful') AS successful_projects
    FROM kickstarter_projects
    GROUP BY category
)

SELECT *,
ROUND(successful_projects*100.0/total_projects,2) AS success_rate
FROM category_summary
ORDER BY success_rate DESC;

-- Rank Categories by Average Pledged Amount

SELECT
    category,
    ROUND(AVG(pledged),2) AS avg_pledged,
    RANK() OVER(ORDER BY AVG(pledged) DESC) AS category_rank
FROM kickstarter_projects
GROUP BY category;

-- Rank Projects by Backers

SELECT
    name,
    category,
    backers,
    DENSE_RANK() OVER(ORDER BY backers DESC) AS project_rank
FROM kickstarter_projects
LIMIT 20;

-- Row Number within Each Category

SELECT
    category,
    name,
    pledged,
    ROW_NUMBER() OVER(PARTITION BY category ORDER BY pledged DESC) AS row_num
FROM kickstarter_projects;