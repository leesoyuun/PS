SELECT COUNT(USER_ID) as USER
FROM USER_INFO
WHERE YEAR(JOINED) = '2021' AND (AGE >= '20' AND AGE <= '29')