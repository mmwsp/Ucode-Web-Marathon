USE ucode_web;

INSERT INTO powers (name, type) VALUES ('bloody fist', 'attack');
INSERT INTO powers (name, type) VALUES ('iron shield', 'defense');
INSERT INTO heroes_powers (hero_id, power_id, power_points) VALUES (1, 1, 110);
INSERT INTO heroes_powers (hero_id, power_id, power_points) VALUES (2, 2, 200);
INSERT INTO races (name) VALUES ('Human');
INSERT INTO races (name) VALUES ('Kree');
INSERT INTO teams(name) VALUES('Avengers');
INSERT INTO teams(name) VALUES('Hydra');
INSERT INTO heroes_teams (hero_id, team_id) VALUES (1, 1);
INSERT INTO heroes_teams (hero_id, team_id) VALUES (1, 2);

ALTER TABLE heroes
ADD COLUMN race_id INT DEFAULT 1,
ADD FOREIGN KEY (race_id) REFERENCES races(id);

UPDATE heroes
SET race_id = 2
WHERE id IN (2, 3);