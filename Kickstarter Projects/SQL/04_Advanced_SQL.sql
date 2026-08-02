-- ==========================================
-- Advanced SQL Analysis
-- ==========================================

-- Goal Range using CASE WHEN

SELECT
CASE
WHEN goal<1000 THEN 'Below $1K'
WHEN goal BETWEEN 1000 AND 9999 THEN '$1K-$10K'
WHEN goal BETWEEN 10000 AND 49999 THEN '$10K-$50K'
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
COUNT(*) FILTER(WHERE state='Successful') AS successful_projects
FROM kickstarter_projects
GROUP BY category
)

SELECT *,
ROUND(successful_projects*100.0/total_projects,2)
AS success_rate
FROM category_summary
ORDER BY success_rate DESC;

-- Rank Categories by Average Pledged

SELECT
category,
ROUND(AVG(pledged),2) AS avg_pledged,
RANK() OVER(ORDER BY AVG(pledged) DESC)
AS category_rank
FROM kickstarter_projects
GROUP BY category;

-- Rank Projects by Backers

SELECT
name,
category,
backers,
DENSE_RANK() OVER(ORDER BY backers DESC)
AS project_rank
FROM kickstarter_projects
LIMIT 20;

-- Row Number within Category

SELECT
category,
name,
pledged,
ROW_NUMBER() OVER(
PARTITION BY category
ORDER BY pledged DESC
) AS row_num
FROM kickstarter_projects;