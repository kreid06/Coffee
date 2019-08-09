CREATE TABLE restaurant (
	id SERIAL not null primary key,
	name varchar,
	distance integer,
	stars integer,
	category varchar,
	favorite_dish varchar,
	does_takeout boolean,
	last_time_ate_there varchar

);

INSERT INTO restaurant VALUES(
	 DEFAULT, 'Moon Tower','10','5','pasta','pizza',false,'10 weeks ago'
);

INSERT INTO restaurant VALUES(
	 DEFAULT, 'Lovies','543','3','BBQ','pie',true,'365 days ago'
);

INSERT INTO restaurant VALUES(
	 DEFAULT, 'Chipolte','1','1','Mexican and Grill','none',false,'yesterday'
);

INSERT INTO restaurant VALUES(
	 DEFAULT, 'Mcdonalds','69','5','fast food','mcChicken',true,'10000 days ago'
);


select * from restaurant;
select favorite_dish from restaurant;
select id from restaurant where name = 'Moon Tower';
select * from restaurant where category = 'BBQ';
select * from restaurant where distance < 2;


