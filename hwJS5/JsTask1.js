// Завдання 1: Визначення рівня успішності студента

const averageGrade = 101;

if (averageGrade < 60) {
    console.log(`${averageGrade} - це незадовільна оцінка ,вчись краще !`);
} else if (averageGrade == 60 || averageGrade <= 70){
    console.log(`${averageGrade} - це задовільна оцінка!`);
    }else if (averageGrade == 71 || averageGrade <= 80){
        console.log(`${averageGrade} - це добра оцінка!`);
        }else if (averageGrade == 81 || averageGrade <= 90){
            console.log(`${averageGrade} - це Дуже добре !`);
            } else if(averageGrade == 91 || averageGrade <= 100){
                console.log(`${averageGrade} - це Відмінно !`);
            }else if(averageGrade >= 101){
                console.log(`${averageGrade} - опа, нахрюк`);
            };