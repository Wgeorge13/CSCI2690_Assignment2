drop table if exists body_performance;

create table if not exists body_performance(
age decimal,
gender char(1),
height_cm decimal,
weight_kg decimal,
body_fat decimal,
diastolic decimal,
systolic decimal,
grip_force decimal,
sit_and_bend_forward_cm decimal,
sit_ups_counts decimal,
broad_jump_cm decimal,
class char(1)
);