export const learners = [
    {
        "id": 3,
        "firstName": "one",
        "lastName": "one",
        "email": "one@gmail.com",
        "tokens": 10,
        "subjects": [],
        "grade": {
            "id": 13,
            "gradeName": "Grade 5",
            "lessons": [
                {
                    "id": 2,
                    "lessonName": "Algebra testing",
                    "time": "08:00"
                }
            ]
        }
    },

    {
        "id": 2,
        "firstName": "two",
        "lastName": "two",
        "email": "two@gmail.com",
        "tokens": 10,
        "subjects": [],
        "grade": {
            "id": 13,
            "gradeName": "Grade 7",
            "lessons": [
                {
                    "id": 2,
                    "lessonName": "Algebra testing",
                    "time": "08:00"
                }
            ]
        }
    }
]

export const grades = [
    { id: 1, "gradeName": "grade 10" },
    { id: 2, "gradeName": "grade 11" },
    { id: 3, "gradeName": "grade 12" },
]

export const days = [
    { id: 1, "dayName": "Monday" },
    { id: 2, "dayName": "Tuesday" },
    { id: 3, "dayName": "Wednesday" },
]

export const subjects = [
    { id: 1, "subjectName": "Mathematics" },
    { id: 2, "subjectName": "English" },
    { id: 3, "subjectName": "Biology" },
]

export const lessons = [
    { 
        id: 1, 
        lessonName: "Agebra", 
        time: "08:00",
        subject: { id: 1, subjectName: "Mathematics" },
        grade: { id: 1, gradeName: "grade 10" },
        day: { id: 1, dayName: "Monday" }
    },
    { 
        id: 2, 
        lessonName: "Punctuation", 
        time: "10:00",
        subject: { id: 2, "subjectName": "English" },
        grade: { id: 1, gradeName: "grade 10" },
        day: { id: 1, dayName: "Monday" }
    }
]

export const teachers = [
    {
        "id": 1,
        "firstName": "Vuyokazi",
        "lastName": "Bathembu",
        "email": "vuyo@gmail.com",
        "tokens": 20,
        "subjects": []
    },
    {
        "id": 2,
        "firstName": "Stones",
        "lastName": "Buntwayo",
        "email": "stones@gmail.com",
        "tokens": 20,
        "subjects": []
    }
]
