-- ==========================================
-- Business Analysis
-- ==========================================

-- Average Goal

SELECT ROUND(AVG(goal),2) AS average_goal
FROM kickstarter_projects;

-- Average Pledged

SELECT ROUND(AVG(pledged),2) AS average_pledged
FROM kickstarter_projects;

-- Top Funded Projects

SELECT
name,
category,
pledged
FROM kickstarter_projects
ORDER BY pledged DESC
LIMIT 10;

-- Highest Funding Goals

SELECT
name,
category,
goal
FROM kickstarter_projects
ORDER BY goal DESC
LIMIT 10;

-- Average Pledged by Category

SELECT
category,
ROUND(AVG(pledged),2) AS average_pledged
FROM kickstarter_projects
GROUP BY category
ORDER BY average_pledged DESC;

-- Average Backers

SELECT ROUND(AVG(backers),2)
AS average_backers
FROM kickstarter_projects;

-- Most Backed Projects

SELECT
name,
category,
backers
FROM kickstarter_projects
ORDER BY backers DESC
LIMIT 10;

-- Average Backers by Category

SELECT
category,
ROUND(AVG(backers),2) AS average_backers
FROM kickstarter_projects
GROUP BY category
ORDER BY average_backers DESC;

-- Average Backers by Status

SELECT
state,
ROUND(AVG(backers),2) AS average_backers
FROM kickstarter_projects
GROUP BY state
ORDER BY average_backers DESC;

-- Successful Projects with Highest Backers

SELECT
name,
category,
backers
FROM kickstarter_projects
WHERE state='Successful'
ORDER BY backers DESC
LIMIT 10;

-- Launch Year Analysis

SELECT
EXTRACT(YEAR FROM launched) AS launch_year,
COUNT(*) AS total_projects
FROM kickstarter_projects
GROUP BY launch_year
ORDER BY launch_year;

-- Launch Month Analysis

SELECT
TO_CHAR(launched,'Month') AS launch_month,
COUNT(*) AS total_projects
FROM kickstarter_projects
GROUP BY launch_month
ORDER BY total_projects DESC;

-- Success Rate by Launch Year

SELECT
EXTRACT(YEAR FROM launched) AS launch_year,
COUNT(*) AS total_projects,
COUNT(*) FILTER(WHERE state='Successful') AS successful_projects,
ROUND(
COUNT(*) FILTER(WHERE state='Successful')*100.0/COUNT(*),2
) AS success_rate
FROM kickstarter_projects
GROUP BY launch_year
ORDER BY launch_year;

-- Average Goal by Year

SELECT
EXTRACT(YEAR FROM launched) AS launch_year,
ROUND(AVG(goal),2)
FROM kickstarter_projects
GROUP BY launch_year
ORDER BY launch_year;

-- Average Pledged by Year

SELECT
EXTRACT(YEAR FROM launched) AS launch_year,
ROUND(AVG(pledged),2)
FROM kickstarter_projects
GROUP BY launch_year
ORDER BY launch_year;