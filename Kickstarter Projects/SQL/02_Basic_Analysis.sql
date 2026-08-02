-- ==========================================
-- Basic SQL Analysis
-- ==========================================

-- Total Projects

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
COUNT(*) FILTER(WHERE state='Successful')*100.0/COUNT(*),2
) AS success_rate_percentage
FROM kickstarter_projects;

-- Overall Failure Rate

SELECT
ROUND(
COUNT(*) FILTER(WHERE state='Failed')*100.0/COUNT(*),2
) AS failure_rate_percentage
FROM kickstarter_projects;

-- Country-wise Project Distribution

SELECT
country,
COUNT(*) AS total_projects
FROM kickstarter_projects
GROUP BY country
ORDER BY total_projects DESC;

-- Check Status Values

SELECT DISTINCT state
FROM kickstarter_projects;

-- Top Categories

SELECT
category,
COUNT(*) AS total_projects
FROM kickstarter_projects
GROUP BY category
ORDER BY total_projects DESC
LIMIT 10;

-- View Columns

SELECT column_name
FROM information_schema.columns
WHERE table_name='kickstarter_projects';

-- Top Subcategories

SELECT
subcategory,
COUNT(*) AS total_projects
FROM kickstarter_projects
GROUP BY subcategory
ORDER BY total_projects DESC
LIMIT 10;

-- Top Successful Categories

SELECT
category,
COUNT(*) AS successful_projects
FROM kickstarter_projects
WHERE state='Successful'
GROUP BY category
ORDER BY successful_projects DESC
LIMIT 10;

-- Top Failed Categories

SELECT
category,
COUNT(*) AS failed_projects
FROM kickstarter_projects
WHERE state='Failed'
GROUP BY category
ORDER BY failed_projects DESC
LIMIT 10;

-- Success Rate by Category

SELECT
category,
COUNT(*) AS total_projects,
COUNT(*) FILTER(WHERE state='Successful') AS successful_projects,
ROUND(
COUNT(*) FILTER(WHERE state='Successful')*100.0/COUNT(*),2
) AS success_rate
FROM kickstarter_projects
GROUP BY category
ORDER BY success_rate DESC;