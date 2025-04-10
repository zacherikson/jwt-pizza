# Report

## Names
- Zach Erikson
- Ethan Baylock

## Self Attack

### Zach Erikson Self Attack

| Item          | Details                              |
|---------------|--------------------------------------|
| Result        | SQL Injection                       |
| Date          | April 10, 2025                      |
| Target        | pizza.zacherikson329.click          |
| Classification| Injection                           |
| Severity      | 1                                   |
| Description   | SQL injection. Rewrote all user data to be email=hacker@jwt.com and password=p. Now hacker@jwt.com is admin and no one else has access. |
| Images        |                                     |
| Corrections   | Sanitize user inputs in updateUser function |

## Peer Attack

| Item          | Details                              |
|---------------|--------------------------------------|
| Result        | SQL Injection                       |
| Date          | April 10, 2025                      |
| Target        | pizza.ethanblaylock.click           |
| Classification| Injection                           |
| Severity      | 1                                   |
| Description   | SQL injection. Rewrote all user data to be email=hacker@jwt.com and password=p. Now hacker@jwt.com is admin and no one else has access. |
| Images        |                                     |
| Corecctions   | Sanitize user inputs in updateUser function |
