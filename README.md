# freshworks_duckapp
This Document briefly describes how I sovle this problem.

AfterI got the requirement, the first thing  I want to clarify some unclear parts.  Make sure there is no ambiguity. 

The first thing is to decide technology stack. I choose to use Grails 3 as backend, React as frontend. Database is postgres.

The first reason is I knew these frameworks so I can start immediately.

the second reason is they are mature solotions.  Especially like Grails, It encapsulate a lot of details for users. therefore we do not need to worry these things. 

As a good practice rule, do not reinvent wheels. I am not start from the scratch. This project start from a boilerplate code base that I found in Github.

Regarding to time field, I save time to UTC format as users may come from different timezone.

I deployed this project on AWS ec2 cloud platfrom. It deployed by elastic beantalk service. It connecting to RDS postgres database. 
On local devlopment, I using a postgres docker instance as datasource. It easy to build and run in local comparing to install a read database.


This app is only one page at frontend, when users open the link, it will show them the main page, which is a input form. 

when users input information and click button to save data to backend. it will do validation and send to backend if there is no issue.


Diagram Chart link
https://drive.google.com/file/d/10028gsC-RSrXMD5WsogRPyRO2bjuWBtw/view?usp=sharing








