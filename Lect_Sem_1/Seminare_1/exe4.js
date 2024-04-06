/*
Задание 4.
Представьте себе ситуацию: у нас есть группа студентов, и мы хотим отследить, 
кто из них посетил какие уроки и кто из преподавателей вёл данные уроки. 
 
Необходимо: 
1. Создать Map объект, который будет использоваться для хранения соответствия 
между уроком и преподавателем, урок => преподаватель.
2. Необходимо создать Map объект, ключами которого будут объекты студентов,
а значениями будут Set объекты, которые будут хранить уроки, посещенные 
студентом.
*/
 
const lessonsTeacher = new Map();   // урок - преподаватель
const studentLessons = new Map();   // студент - уроки

const teacher1 = {
    name: "Первый учитель",
};

const teacher2 = {
    name: "Второй учитель",
};

const ivan = {
    name: "Иван",
};

const pavel = {
    name: "Павел",
};

const lessonMath = "Математика";
const lessonHistory = "История";

lessonsTeacher.set(lessonMath, teacher1)
            .set(lessonHistory, teacher2);

studentLessons.set(ivan, new Set([lessonMath, lessonHistory, lessonMath]))
            .set(pavel, new Set([lessonMath]));

// Преподаватель по Математике: Смирнов.
console.log(`Преподаватель по математике: ${lessonsTeacher.get(lessonMath).name}`);
// Уроки Ивана: Математика, История.
console.log(`Уроки Ивана: ${[...studentLessons.get(ivan)].join(", ")}`);